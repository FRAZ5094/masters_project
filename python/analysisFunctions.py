from tqdm import tqdm


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
            parsedData[fields[j]].append(data[stride + j])

    return parsedData


if __name__ == "__main__":
    data = importOrbitData("sat_testtwolines_1672604163882.txt")
