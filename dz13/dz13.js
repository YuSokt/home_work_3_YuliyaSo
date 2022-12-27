let name = prompt('Введите свое имя')

let currentUser = prompt('Напиши свой логин, ' + name, "admin")
let password = prompt('Введите пароль')


if (currentUser=='root' && password==123) {
    alert ('вы вошли')
} else if (currentUser=='root'&& password !==123) {
    alert ('неверный пароль')
} else if (currentUser !=='root'&& password ==123) {
    alert ('Такого пользователя не существует')
} else if (currentUser !=='root'&& password !==123) {
    alert ('неверный логин и пароль')
}   



let userPassword = {
    admin: 'root',
    password: 123
};

let key = 'password' // динамический ключ
alert (userPassword[key])

if (sex == "м") {
    alert("дари носки")
} else if (sex == "ж") {
    alert("Дари цветы")
} else {
    alert("Что ты такое?");
}