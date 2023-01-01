import numpy as np
import control as ctl
import matplotlib.pyplot as plt

global x_0, m, c, k, dt

x_0 = 1
m = 1
c = 2
k = 5
dt = 0.1


def v_func(x, v):
    # function for getting v
    return v


def a_func(x, v):
    # function for getting a
    return -k*x - c*v


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


def rk4_naive(x, v):

    k1 = dt * a_func(x, v)
    k2 = dt * a_func(x + k1/2, v)
    k3 = dt * a_func(x + k2/2, v)
    k4 = dt * a_func(x + k3, v)

    v += (k1 + 2*k2 + 2*k3 + k4)/6

    x += v * dt

    return x, v


def euler(x, v):

    force = a_func(x, v)

    a = force/m

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


x_rk4 = [x_0]
x_rk4_naive = [x_0]
x_rk4_mod = [x_0]
x_euler = [x_0]
x_euler_mod = [x_0]

v_euler = 0
v_euler_mod = 0
v_rk4 = 0
v_rk4_naive = 0
v_rk4_mod = 0

time = np.arange(0, 10, dt)


for _ in time[1::]:
    x_rk4_temp, v_rk4 = rk4(x_rk4[-1], v_rk4)
    x_euler_temp, v_euler = euler(x_euler[-1], v_euler)
    x_euler_mod_temp, v_euler_mod = euler_mod(x_euler_mod[-1], v_euler_mod)
    x_rk4_naive_temp, v_rk4_naive = euler(x_rk4_naive[-1], v_rk4_naive)
    x_rk4_mod_temp, v_rk4_mod = rk4_mod(x_rk4_mod[-1], v_rk4_mod)

    x_rk4.append(x_rk4_temp)
    x_rk4_naive.append(x_rk4_naive_temp)
    x_rk4_mod.append(x_rk4_mod_temp)
    x_euler.append(x_euler_temp)
    x_euler_mod.append(x_euler_mod_temp)


print(findAveragePercentError(x_rk4_mod, x_rk4))


tf = ctl.TransferFunction([x_0 * m, x_0 * c], [m, c, k])

T, exact_response = ctl.impulse_response(tf, T=time)

plt.plot(time, x_euler, label="euler response")
plt.plot(time, x_euler_mod, label="euler mod response")
# plt.plot(time, x_rk4, label="rk4 response")
# plt.plot(time, x_rk4_naive, label="rk4 naive response")
# plt.plot(time, x_rk4_mod, label="rk4 mod response")
plt.plot(time, exact_response, label="exact response")
plt.legend()
plt.show()
