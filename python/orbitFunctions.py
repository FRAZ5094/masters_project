import numpy as np
import unittest


def cross(x1, y1, z1, x2, y2, z2):
    x = y1 * z2 - z1 * y2
    y = -1 * (x1 * z2 - z1 * x2)
    z = x1 * y2 - y1 * x2

    return [x, y, z]


def dot(x1, y1, z1, x2, y2, z2):
    return x1*x2 + y1*y2 + z1*z2


def calculateKeplerElements(x, y, z, vx, vy, vz):

    h = cross(x, y, z, vx, vy, vz)

    K = [0, 0, 1]

    n = cross(K[0], K[1], K[2], h[0], h[1], h[2])

    G = 6.6743 * 10**-11

    planetM = 5.972 * 10**24

    mu = planetM * G

    vMagSquared = abs(vx * vx + vy * vy + vz * vz)

    rMag = np.sqrt(x * x + y * y + z * z)

    rv = dot(x, y, z, vx, vy, vz)

    rCoefficient = vMagSquared - mu / rMag

    eVectorX = (1 / mu) * (rCoefficient * x - rv * vx)
    eVectorY = (1 / mu) * (rCoefficient * y - rv * vy)
    eVectorZ = (1 / mu) * (rCoefficient * z - rv * vz)

    e = np.sqrt(
        eVectorX * eVectorX + eVectorY * eVectorY + eVectorZ * eVectorZ
    )

    xi = vMagSquared / 2 - mu / rMag

    hMag = np.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2])
    if (e != 1):
        a = -mu / (2 * xi)
        p = a * (1 - e * e)
    else:
        p = (hMag * hMag) / mu
        a = float("inf")

    rad2Deg = 180 / np.pi

    i = np.arccos(h[2] / hMag) * rad2Deg

    nMag = np.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])

    Omega = np.arccos(n[0] / nMag) * rad2Deg

    if (n[1] < 0):
        Omega = 360 - Omega

    ne = dot(n[0], n[1], n[2], eVectorX, eVectorY, eVectorZ)

    omega = np.arccos(ne / (nMag * e)) * rad2Deg

    if (eVectorZ < 0):
        omega = 360 - omega

    er = dot(eVectorX, eVectorY, eVectorZ, x, y, z)

    trueAnomaly = np.arccos(er / (e * rMag)) * rad2Deg

    if (rv < 0):
        trueAnomaly = 360 - trueAnomaly

    return [e, a, i, Omega, omega, trueAnomaly]


def calculateEccentricityVector(x, y, z, vx, vy, vz):
    G = 6.6743 * 10**-11

    planetM = 5.972 * 10**24

    mu = planetM * G

    vMagSquared = abs(vx * vx + vy * vy + vz * vz)

    rMag = np.sqrt(x * x + y * y + z * z)

    rv = dot(x, y, z, vx, vy, vz)

    rCoefficient = vMagSquared - mu / rMag

    eVectorX = (1 / mu) * (rCoefficient * x - rv * vx)
    eVectorY = (1 / mu) * (rCoefficient * y - rv * vy)
    eVectorZ = (1 / mu) * (rCoefficient * z - rv * vz)

    return [eVectorX, eVectorY, eVectorZ]


if __name__ == '__main__':

    class TestStringMethods(unittest.TestCase):

        def test_calculateKeplerElements(self):
            ans = [
                0.8328757475228061,
                36132747.668444425,
                87.86912617702644,
                227.8982603572737,
                53.386869924961786,
                92.33321745563532,
            ]
            kmToM = 10**3
            r = [6524.834 * kmToM, 6862.875 * kmToM, 6448.296 * kmToM]
            v = [4.901327 * kmToM, 5.533756 * kmToM, -1.976341 * kmToM]

            planetM = 5.972 * 10**24

            res = calculateKeplerElements(
                r[0], r[1], r[2], v[0], v[1], v[2], planetM)
            self.assertEqual(res, ans)

    unittest.main()
