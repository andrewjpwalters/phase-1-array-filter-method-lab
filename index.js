// Code your solution here

function findMatching(array, string) {
    return array.filter(match => match.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(item => item[string.length - 1] === string[string.length - 1])
}

function matchName(drivers, string) {
    return drivers.filter(item => item.name === string)
}