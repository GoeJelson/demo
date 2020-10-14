const fortuneCookies = [
    "Fortune cookie 1",
    "Fortune cookie 2",
    "Fortune cookie 3",
    "Fortune cookie 4",
    "Fortune cookie 5",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() *fortuneCookies.length)
    return fortuneCookies[idx]
}