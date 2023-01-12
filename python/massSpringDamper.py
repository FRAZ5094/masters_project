import numpy as np
import control as ctl
import matplotlib.pyplot as plt

global F_0, m, c, k, dt

F_0 = 2
m = 1
c = 5
k = 5
dt = 0.01


def v_func(x, v):
    # function for getting v
    return v


def a_func(x, v):
    # function for getting a
    return (1/m) * (F_0 - k*x - c*v)


def rk4(x, v):

    k1x = dt * v_func(x, v)
    k1v = dt * a_func(x, v)

    k2x = dt * v_func(x + k1x/2, v + k1v/2)
    k2v = dt * a_func(x + k1x/2, v + k1v/2)

    k3x = dt * v_func(x + k2x/2, v + k2v/2)
    k3v = dt * a_func(x + k2x/2, v + k2v/2)

    k4x = dt * v_func(x + k3x, v + k3v)
    k4v = dt * a_func(x + k3x, v + k3v)

    v += (k1v + 2*k2v + 2*k3v + k4v)/6

    x += (k1x + 2*k2x + 2*k3x + k4x)/6

    return x, v


def rk4_mod(x, v):

    k1v = dt * a_func(x, v)
    k1x = dt * v

    k2v = dt * a_func(x + k1x/2, v + k1v/2)
    k2x = dt * (v + k1v/2)

    k3v = dt * a_func(x + k2x/2, v + k2v/2)
    k3x = dt * (v + k2v/2)

    k4v = dt * a_func(x + k3x, v + k3v)
    k4x = dt * (v + k3v)

    v += (k1v + 2*k2v + 2*k3v + k4v)/6

    x += (k1x + 2*k2x + 2*k3x + k4x)/6

    return x, v


def euler(x, v):

    a = a_func(x, v)

    v_new = v + a * dt
    x_new = x + v * dt

    return x_new, v_new


def euler_mod(x, v):

    force = a_func(x, v)

    a = force/m

    v = v + a * dt
    x = x + v * dt

    return x, v


def findAveragePercentError(approx, exact):

    cumError = 0
    nTimesteps = len(exact)

    for i in range(nTimesteps):
        cumError += (abs(approx[i]-exact[i])/exact[i])

    return (cumError/nTimesteps) * 100


x_rk4 = [0]
x_euler = [0]

v_euler = 0
v_rk4 = 0

time = np.arange(0, 10, dt)


for _ in time[1::]:
    x_rk4_temp, v_rk4 = rk4(x_rk4[-1], v_rk4)
    x_euler_temp, v_euler = euler(x_euler[-1], v_euler)

    x_rk4.append(x_rk4_temp)
    x_euler.append(x_euler_temp)


# print(findAveragePercentError(x_rk4_mod, x_rk4))


tf = ctl.TransferFunction([F_0], [m, c, k])

T, exact_response = ctl.step_response(tf, T=time)

plt.plot(time, x_euler, label="euler response")
# plt.plot(time, x_euler_mod, label="euler mod response")
# plt.plot(time, x_rk4, label="rk4 response")
# plt.plot(time, x_rk4_naive, label="rk4 naive response")
# plt.plot(time, x_rk4_mod, label="rk4 mod response")
plt.plot(time, exact_response, label="exact response")
plt.legend()
plt.show()
