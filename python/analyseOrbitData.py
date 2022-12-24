import numpy as np
import matplotlib.pyplot as plt


with open("test.txt") as f:
    lines = f.readline()

data = lines.split(",")

nTimesteps = int(len(data)/3)


x = []
y = []
z = []

for i in range(nTimesteps):

    if (i % 100 == 0):
        stride = i * 3
        x.append(float(data[stride + 0]))
        y.append(float(data[stride + 1]))
        z.append(float(data[stride + 2]))


plt.scatter(x, y, s=0.1)

plt.show()
