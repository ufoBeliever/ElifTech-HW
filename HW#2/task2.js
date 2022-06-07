/*
* Задача 2:
* Так само, як і в першій задачі, але цього разу з повторами затримок.
* Виведіть Hello World 5 разів із затримкою 100 ms.
* Потім виведіть цю стрінгу знову 5 разів із затримкою 200ms.
* Потім знову 5 разів із затримкою 300ms.
* І так далі, поки програма не буде зупинена. Так само в вивід додайте значення затримки
*/

const obj = {
    counter: 0
}

module.exports = function func(delay){
    if(delay>=100000)return
    setTimeout(()=>{
        console.log('Hello World', delay)
    }, delay)
    obj.counter++
    if(obj.counter>=5){
        obj.counter=0
        return func(delay+100)
    }
    func(delay)
}