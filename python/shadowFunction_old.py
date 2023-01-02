import numpy as np
import matplotlib.pyplot as plt

earthR = 6.371 * (10**6)


def newtonRaphson():
    geoOrbitR = 42164 * (10**3)
    earthR = 6.371 * (10**6)

    alpha = 0  # first estimate

    x = 100000
    y = 5000
    z = -geoOrbitR

    varho = np.sqrt(x * x + y * y)

    # print(varho)

    for _ in range(100):
        f = 2 * (varho/z) * ((np.sin(alpha/2))**2) + \
            np.sin(alpha) + (earthR - varho)/z
        # print(f)
        if f == 0:
            print("broke")
            break
        df = 2 * (varho/z) * np.sin(alpha) + np.cos(alpha)

        alpha -= f/df

    print(alpha)


newtonRaphson()


def getShadowFunctionValue():
    earthR = 6.371 * (10**6)
    sunR = 696.34 * (10**6)

    earthX = 0
    earthY = 0
    earthZ = 0

    distanceFromCentreOfSunToCentreOfEarth = 1.5 * (10**11)

    sunX = earthR
    sunY = 0
    sunZ = distanceFromCentreOfSunToCentreOfEarth

    geoOrbitR = 42164 * (10**3)

    x = 100000
    y = 5000
    z = -geoOrbitR

    radToArcMin = (60*180)/np.pi

    R90 = 34.9  # arcmin

    dx = x - earthX
    dy = y - earthY
    dz = z - earthZ

    r = np.sqrt(dx*dx + dy*dy + dz*dz)

    R00 = np.arcsin((earthR / r))  # in radians

    alpha = R00 - np.arctan(dx/dz)

    print(alpha)

    # alpha *= radToArcMin

    # d_fancy_x = 2 * R90 - \
    #     (earthR/distanceFromCentreOfSunToCentreOfEarth) - alpha

    # # return d_fancy_x

    # a_sun_0 = sunR / distanceFromCentreOfSunToCentreOfEarth

    # print(-a_sun_0, "<=", d_fancy_x, "<=", a_sun_0)

    # if d_fancy_x > -a_sun_0 and d_fancy_x < a_sun_0:
    #     # print("Inside shadow")
    #     return True
    # else:
    #     # print("outside of this functions range")
    #     return False


getShadowFunctionValue()

sunR = 696.34 * (10**6)

distanceFromCentreOfSunToCentreOfEarth = 1.5 * (10**11)

a_sun_0 = sunR / distanceFromCentreOfSunToCentreOfEarth

geoOrbitR = 42164 * (10**3)


# getShadowFunctionValue()

# # plt.figure(0)
# plt.axhline(y=a_sun_0, color='r', linestyle='-')
# plt.axhline(y=-a_sun_0, color='r', linestyle='-')
# for theta in np.linspace(np.pi - 1, np.pi + 1, 1000):
#     z = geoOrbitR * np.cos(theta)
#     x = geoOrbitR * np.sin(theta)

#     inPenumbra = getShadowFunctionValue(x, z)

#     if inPenumbra:
#         plt.plot(z, x, marker="o", markersize=2,
#                  markerfacecolor='black', markeredgecolor="black")
#     else:
#         plt.plot(z, x, marker="o", markersize=2,
#                  markerfacecolor="red", markeredgecolor="red")

# plt.show()
