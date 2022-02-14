// var x = 3
// var y = 4
// var aux = 4*3

// y = x

// x = aux % 5

// console.log(x, y)

// var arrayint = []
// var aux = 1

// for (i = 0; i <= 5; i++){
//     aux = aux * (i + 1)
//     arrayint.push(aux / 2)
// }

// console.log(arrayint)
// console.log(arrayint[3])

// var arrv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var temrepetido = false

// for (let i = 0; i < arrv.length; i++){
//     for (let j = arrv.length; j >= 0 ; j--){
//         if (arrv[i] == arrv[j]){
//             // console.log(arrv[i])
//             console.log(j)
//             temrepetido = true
//         }
//     }
// }

// console.log(temrepetido)

// var a = 1
// var b = 2
// var c = 5

// op = ((5*5)/2)
// op2 = (a+c)

// console.log(op)
// console.log(op2)


// var resultado = Math.floor(Math.random() * (10 - 1)) + 1
// console.log(resultado)


// function f(n) {
//     if(n < 2) {
//         return n
//     } else {
//         return f(n-1) + f(n-2)
//     }
// }

// console.log(f(5))

var resultado = 0

function func(x,y) {
    if(y = 0) {
        return x
    } else {
        return func(y, x % y)
    }
}

resultado = func(9,3)
console.log(resultado)
