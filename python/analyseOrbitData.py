import numpy as np
import matplotlib.pyplot as plt


with open("../simulationData/sat_satNoPertebation10Year_1671978249050.txt") as f:
    lines = f.readline()

nSateliteDataPieces = 7

data = lines.split(",")

nTimesteps = int(len(data)/nSateliteDataPieces)

oneDayInSeconds = 60*60*24

oneYearInSeconds = oneDayInSeconds * 365


x = []
y = []
z = []
vx = []
vy = []
vz = []
t = []

for i in range(nTimesteps):

    if (i % 10 == 0):
        stride = i * nSateliteDataPieces
        x.append(float(data[stride + 0]))
        y.append(float(data[stride + 1]))
        z.append(float(data[stride + 2]))
        vx.append(float(data[stride + 3]))
        vy.append(float(data[stride + 4]))
        vz.append(float(data[stride + 5]))
        t.append(float(data[stride + 6]))
        if (t[-1] >= oneDayInSeconds):
            break


plt.plot(t, vy)

plt.show()
