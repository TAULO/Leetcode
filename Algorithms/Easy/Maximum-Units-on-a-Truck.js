/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let units = 0
    let remaining = truckSize

    boxTypes = boxTypes.sort((a, b) => b[1] - a[1])

    for (let i = 0; i < boxTypes.length && remaining > 0; i++) {
        let numberOfBoxesi = boxTypes[i][0]
        let numberOfUnitsPerBoxi = boxTypes[i][1]

        let maxBoxes = Math.min(remaining, numberOfBoxesi)

        console.log(remaining, numberOfBoxesi)

        units += maxBoxes * numberOfUnitsPerBoxi

        remaining -= maxBoxes
    }


    return units
};