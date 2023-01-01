def importOrbitData(fileName):
    with open("../simulationData/" + fileName) as f:
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

    firstDayI = -1
    firstYearI = -1

    for i in tqdm(range(nTimesteps)):

        # if (i % 10 == 0):
        stride = i * nSateliteDataPieces
        x.append(float(data[stride + 0]))
        y.append(float(data[stride + 1]))
        z.append(float(data[stride + 2]))
        vx.append(float(data[stride + 3]))
        vy.append(float(data[stride + 4]))
        vz.append(float(data[stride + 5]))
        t.append(float(data[stride + 6]))
        if (firstDayI == -1 and t[-1] >= oneDayInSeconds):
            firstDayI = i
            print("firstdayI set to: " + str(i))
        if (firstYearI == -1 and t[-1] >= oneYearInSeconds):
            firstYearI = i

    return x, y, z, vx, vy, vz, t, firstDayI, firstYearI
