/*
* Задача 1:
* Виводьте "Hello World" безкінечно починаючи з затримки 1 секунда, але з кожним разом додаємо затримку в 1 секунду. Так другий раз затримка буде 2 секунди, третій раз 3 секунди і т.д.
* Додайте значення затримки в виведеному повідомлені.
* Hello World. 1
* Hello World. 2
* Hello World. 3
* ....
*
* Обмеження: можна використовувати тільки const (без let і var)
*/

module.exports = function func(delay){
    if(delay>=1000000) return
    setTimeout(()=>{
        console.log(`Hello World. ${delay/1000}`)
    }, delay)
    return func(delay+1000)
}


