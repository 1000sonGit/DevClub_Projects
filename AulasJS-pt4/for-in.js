const users = {name: 'Rodolfo', age: 30, street: 'Manga Chupada'}

for (const key in users) {
    console.log(key)
}

for (const key in users) {
    console.log(key + users[key])
}

let i = 0
do {
    i++
    console.log(i)
} while (i < 10)
//parei -1:17