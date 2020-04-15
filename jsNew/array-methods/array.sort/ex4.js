// Sort an array alphabetically

function alphabetical(arr) {
    return arr.sort(function (a, b) {
        return a.localeCompare(b)
    })
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]))


// ["by", "dog", "eaten", "family", "wolf"]