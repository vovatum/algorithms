function binary_search(list, item) {
    let low = 0
    let high = list.length - 1
    while (low <= high) {
        let tempMid = (low + high) / 2
        let mid = tempMid % 2 ? Math.floor(tempMid) : tempMid
        let guess = list[mid]
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

console.log(
    binary_search([1, 3, 5, 7, 9, 10], 9)
)