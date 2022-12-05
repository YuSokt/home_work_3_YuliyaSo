// Задание 1. Выведите все четные числа до 10 включительно.
for (let i = 0; i <= 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 === 1) { // % это остаток от деления
    continue;
  }

  alert(i); // выведет 0.2.4.6.8.10
}

// Задание 1*. ⭐не используйте оператор continue.
let i = 1;

while (true) { // условие всегда будет истинно
  alert(i % 2 === 1); // выводит 1, затем 2, затем 3
  if (i === 10) {
    break;  // если i равен 3 прерываем выполнение цикла
  }

  i++;
}

// Задание 2. Создайте бесконечный цикл и прервите его на 5ой итерации.
let i = 0;
while (i < 6) {
  alert(i);
  i++;
}

// Задание 3. Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8). Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда.
let buuzy = [
  'buuzy',
  {ingredients: ['dough', 'beef', 'mutton']},
  {costPrice:'30'},
  {sale:'40'}
];
alert(JSON.stringify(buuzy [1].ingredients));


let buuzy = {
  ingredients: ['dough', 'beef', 'mutton'],
  costPrice: 30,
  sale: 40
}

let koreanChiken = {
  ingredients: ['chiken', 'sauce'],
  costPrice: 280
  sale: 430
}

let pizza = {
  ingredients: ['dough', 'chiken', 'cheese'],
  costPrice: 180
  sale: 470
}


