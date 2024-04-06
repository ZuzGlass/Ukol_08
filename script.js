const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]

// Vypište do stránky všechna čísla.
document.body.innerHTML += "<p><h3>Všechna čísla:</h3></p>"

numbers.forEach((number) => {
document.body.innerHTML += `${number}, `
})


// Vypište do stránky druhé mocniny všech čísel.
document.body.innerHTML += "<p><h3>Druhé mocniny:</h3></p>"

numbers.map((number) => {
    document.body.innerHTML += `${number ** 2}, `
})


// Vypište do stránky pouze záporná čísla.
document.body.innerHTML += "<p><h3>Záporná čísla:</h3></p>"

numbers.map((number) => {
  if (number < 0) {
    document.body.innerHTML += `${number}, `
  }
})


// Vypište do stránky absolutní hodnotu všech čísel.
document.body.innerHTML += "<p><h3>Absolutní hodnoty:</h3></p>"

numbers.map((number) => {
document.body.innerHTML += `${Math.abs(number)}, `
})


// Vypište do stránky pouze sudá čísla.
document.body.innerHTML += "<p><h3>Sudá čísla:</h3></p>"

numbers.map((number) => {
  if (number % 2 === 0) {
    document.body.innerHTML += `${number}, `
  }
})


// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += "<p><h3>Absolutní hodnota dělitelná třemi:</h3></p>"

numbers.map((number) => {
  if (Math.abs(number) % 3 === 0){
    document.body.innerHTML += `${number}, `
  }
})


// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
document.body.innerHTML += "<p><h3>Vzdálenost čísel od čísla 5:</h3></p>"

numbers.map((number) => {
  document.body.innerHTML += `${Math.abs(number - 5)}, `
})


// Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += "<p><h3>Druhé mocniny vzdáleností od čísla 5:</h3></p>"

numbers.map((number) => {
  document.body.innerHTML += `${Math.abs(number - 5) ** 2}, `
})


// Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += "<p><h3>Počet záporných čísel:</h3></p>"

let zaporneCislo = 0
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < 0) {
   zaporneCislo += 1
  }
}
document.body.innerHTML += zaporneCislo


// Spočítejte součet všech čísel v poli.
document.body.innerHTML += "<p><h3>Součet čísel:</h3></p>"

let sum = 0
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i]
}
document.body.innerHTML += sum


// Spočítejte průměr všech čísel v poli.
document.body.innerHTML += "<p><h3>Průměr čísel:</h3></p>"

const prumer = sum / numbers.length
document.body.innerHTML += prumer


// Spočítejte součet všech kladných čísel v poli.
document.body.innerHTML += "<p><h3>Součet kladných čísel:</h3></p>"

let sum2 = 0
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    sum2 += numbers[i]
  }
}
document.body.innerHTML += sum2