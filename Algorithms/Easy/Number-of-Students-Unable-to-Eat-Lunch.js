/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let stack = students

    let index = 0

    while (students.length > 0 && index < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            index = 0
        } else {
            students.push(students.shift())
            index++
        }
    }

    return students.length
};