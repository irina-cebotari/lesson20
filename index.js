// const arr = [1, 2, 3, 4, 5, 6]

// const arr1 = new Set(arr)

// console.log(arr1.size)




// const func1 = (num) => {
//     console.log(num)
//     if (num < 1) return 0;

//     return num + func1(num - 1);
// }

// console.log(func1(5))



// const func1 = (num) => {
//     if (num < 2) return num;

//     return func1(num - 2) + func1(num - 1);
// }

// console.log(func1(6))



// const func1 = (num) => {
//     console.log(num)
//     if (num < 2) return num;

//     return func1(num - 1);
// }

// console.log(func1(8))


// level = palindrom


// const isPalindrom = (str) => {
//     const formated = str.toLowerCase().split('').reverse().join('')

//     return str.toLowerCase() === formated
// }

// console.log(isPalindrom('level'))



// console.log('string'.split('r'))


// console.log('string'.split('').reverse().join(''))



// const isPalindrom = (str) => {
//     let result = true

//     const toLower = str.toLowerCase()

//     for(let i = 0; i< toLower.length; i++) {
//         if(!result) return result = false

//         result = toLower[i] === toLower[toLower.length - 1 - i]
//     }

//     return result
// }

// console.log(isPalindrom('level'))




// const arr1 = [1, 2, 3, 4, 5, 6]

// const func = (arr, condition) => {
//     if(condition === 'odd') {
//         return arr.reduce((acc, curr) => curr%2 === 0 ? acc : acc + curr, 0)
//     }
//     return arr.reduce((acc, curr) => curr%2 !== 0 ? acc : acc + curr, 0)
// }

// console.log(func(arr1, 'even'))


// const func = (arr, condition) => {
//     let result = 0
//     if (condition === 'odd') {
//         arr.forEach((item) => {
//             if (item % 2 !== 0) {
//                 result = result + item
//             }
//         })
//         return result
//     }
//     arr.forEach((item) => {
//         if (item % 2 !== 0) {
//             result = result + item
//         }
// })
// return result
// }

// console.log(func(arr1, 'even'))



// const container = document.getElementById('id-test')

// container.textContent = 'div'

// container.classList.add('test')

// container.addEventListener ('click', ( => {
//     console.log('clicked')
// }))


// console.log(container)


// const arr = ['dejun', 'prinz', 'cina']

// const arrMaped = arr.map((item) => `<li>${item}</li>`).join('')

// const container = document.querySelector('.class-test')


// container.innerHTML = `
// <ol class='test'>${arrMaped}</ol>
// `



// const func = () => console.log('clicked')

// container.addEventListener('click', func)

// console.log(container)