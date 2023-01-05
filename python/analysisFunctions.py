from tqdm import tqdm
from orbitFunctions import calculateKeplerElements


def importOrbitData(fileName):
    with open("../simulationData/" + fileName) as f:
        fields = f.readline()
        data = f.readline()

    fields = fields.split("\n")[:-1]

    fields = fields[0].split(",")[:-1]

    nFields = len(fields)

    data = data.split(",")

    nTimesteps = int(len(data)/nFields)

    oneDayInSeconds = 60*60*24

    oneYearInSeconds = oneDayInSeconds * 365

    parsedData = {}

    for i in range(nFields):
        parsedData[fields[i]] = []

    firstDayI = -1
    firstYearI = -1

    for i in tqdm(range(nTimesteps)):

        # if (i % 10 == 0):
        stride = i * nFields
        for j in range(nFields):
            parsedData[fields[j]].append(float(data[stride + j]))

    return parsedData


def calculateKeplerFromData(data):
    requiredKeys = ["x", "y", "z", "vx", "vy", "vz"]

    keys = list(data.keys())

    for key in requiredKeys:
        if key not in keys:
            print(f"The data doesn't have the required key: {key}")
            return

    returnData = {"e": [], "a": [], "i": [],
                  "Omega": [], "omega": [], "trueAnomaly": []}

    # [e, a, i, Omega, omega, trueAnomaly]

    for i in range(len(data["x"])):
        x = data["x"][i]
        y = data["y"][i]
        z = data["z"][i]

        vx = data["vx"][i]
        vy = data["vy"][i]
        vz = data["vz"][i]

        kepler = calculateKeplerElements(x, y, z, vx, vy, vz)

        returnData["e"].append(kepler[0])
        returnData["a"].append(kepler[1])
        returnData["i"].append(kepler[2])
        returnData["Omega"].append(kepler[3])
        returnData["omega"].append(kepler[4])
        returnData["trueAnomaly"].append(kepler[5])

    return returnData


if __name__ == "__main__":
    pass
    # data = importOrbitData("sat_testtwolines_1672604163882.txt")

    # data = {"x": [1, 2, 3], "y": [1, 2, 3], "z": [1, 2, 3],
    #         "vx": [1, 2, 3], "vy": [1, 2, 3], "vz": [1, 2, 3]}

    # returnedData = calculateKeplerFromData(data)
