function reverse(n) {
    return Number.parseInt(n
        .toString()
        .split('')
        .reverse()
        .join(''));
}
module.exports = reverse;
