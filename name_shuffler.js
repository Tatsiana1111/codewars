function nameShuffler(str) {
    const firstName = str.split(/\s/)[0]
    const lastName = str.split(/\s/)[1]
    const newStr = lastName + ' ' + firstName
    return newStr
}