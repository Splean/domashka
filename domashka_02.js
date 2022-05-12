// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// let age_1 = 10
// let age_2 = 18
// let age_3 = 60

// function checkAge(age_1){
// if (age_1 < age_2){
//     console.log("You don’t have access cause your age is ", + age_1, " It’s less then ")
// }   
// else if (age_1 >=age_2 && age_1 < age_3){
//     console.log('Welcome !')
// }
// else if (age_1  > age_3){
//     console.log('Keep calm and look Culture channel')
// }
// else {
//     console.log('Technical work')
// }
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.


// let age_1 = 10
// let age_2 = 18
// let age_3 = 60

// function checkAge(age_1){
//     if (typeof age_1 == 'number'){

//         if (age_1 < age_2){
//         console.log("You don’t have access cause your age is ", + age_1, " It’s less then ")
//         }   
//         else if (age_1 >=age_2 && age_1 < age_3){
//         console.log('Welcome !')
//         }   
//         else if (age_1  > age_3){
//         console.log('Keep calm and look Culture channel')
//     }}
//     else {
//         console.log('err')
//     }
// }

// checkAge('asdasd')
// checkAge(17)
// checkAge(18)
// checkAge(61)


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// let age_2 = 18
// let age_3 = 60


// function checkAge(age) {
//      if (Number(age)) {    
//             if (age < age_2){
//             console.log("You don’t have access cause your age is ", + age, " It’s less then ")
//             }   
//             else if (age >=age_2 && age < age_3){
//             console.log('Welcome !')
//             }   
//             else if (age > age_3){
//             console.log('Keep calm and look Culture channel')
//             }
        
//     }
//     else {
//         console.log('Err')
//     }
// }


// checkAge('asdasd')
// checkAge('38asdasd')
// checkAge('17')
// checkAge('18')
// checkAge('61')


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


let userage = prompt ('Введите возраст')


function checkAge(userage) {

    let age_2 = 18
    let age_3 = 60
    
     if (Number(userage)) {    
            if (userage < age_2){
            alert("You don’t have access cause your age is " + userage + " It’s less then 18")
            }   
            else if (userage >=age_2 && age < age_3){
            alert('Welcome !')
            }   
            else if (userage > age_3){
            alert('Keep calm and look Culture channel')
            }
        
    }
    else {
        alert('Err')
    }
}


checkAge (userage)


