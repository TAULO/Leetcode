/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let a = [...s].slice(0, s.length / 2).filter(s => vowels.includes(s)).length
    let b = [...s].slice(s.length / 2).filter(s => vowels.includes(s)).length

    return a === b
};