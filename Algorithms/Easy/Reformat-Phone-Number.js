/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let clean = [...number.replace(/[\s-]/g, "")]
    let str = ""
    let index = 0

    if (clean <= 2) return clean

    // rule 1
    while (index < clean.length) {

        if (index > 3) {
            str += clean.slice(0, index - 1).join("") + "-"
            clean = clean.slice(index - 1)
            index = 0
        }

        index++
    }

    index = 0

    // rule 2
    while (index < clean.length) {

        if (index > 2) {
            str += clean.slice(0, index - 1).join("") + "-"
            clean = clean.slice(index - 1)
            index = 0
        }

        index++
    }

    return str + clean.join("")
};