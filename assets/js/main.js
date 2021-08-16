// Conditionals
// 1- if, else if, else
// 2- switch
// 3- Ternary

function greeting(time) {
    if (time >= 6 && time < 10) {
        console.log("Morgen")
    } else if (time >=10 && time < 17) {
        console.log("Tag")
    } else if (time >= 17 && time < 20) {
        console.log("Abend")
    } else if (time >= 20) {
        console.log("Nacht")
    }
}

greeting(7)
greeting(12)
greeting(18)
greeting(23)

function changeBg() {
    console.log("test")
    let age = document.getElementById("age").value
    console.log(age)
    if (age < 18) {
        document.body.style.background="tomato"
    } else {
        document.body.style.background="gold"
    }
}

time = 12 
time < 18 ? console.log("Tag") : console.log("Abend")
time < 18 ? console.log("Tag") : null

if (time < 18) {
    console.log("Tag")
} else {
    console.log("Abend")
}

function zahlFizz(){
    let zahl = document.getElementById("zahl").value
    if (zahl % 3 == 0) {
        console.log("fizz")
    } else if (zahl % 5 == 0) {
        console.log("buzz")
    } else {
        console.log("Error")
    }
}

function numberFizz() {
    let number = document.getElementById("number").value
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("fizzbuzz")
    } else if(number % 3 == 0) {
        console.log("fizz")
    } else if (number % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(number)
    }

    let f = number % 3 == 0 // true oder false 
    let b = number % 5 == 0 // true oder false 
    f ? console.log("fizz2") : console.log(number)
    b ? console.log("buzz2") : console.log(number)
    f ? (b ?console.log("fizzbuzz2") : console.log("fizz2")) : b ? console.log("buzz2") : number
    
    console.log((num % 3 == 0) && (num % 5 == 0) ? "fizzbuzz" : (num % 3 == 0) ? "fizz" : (num % 5 == 0) ? "buzz" : num);
}


