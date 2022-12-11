// Задание 1. Выведите все четные числа до 10 включительно.
for (let i = 0; i <= 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 === 1) { // % это остаток от деления
    continue;
  }

  alert(i); // выведет 0.2.4.6.8.10
}

// Задание 1*. ⭐не используйте оператор continue.

for (let i = 0; i <= 10; i = i + 2) {
  alert(i)
}


// Задание 2. Создайте бесконечный цикл и прервите его на 5ой итерации.
let i = 0;
while (i <= 5) {
  alert(i);
  i++;
}

// Задание 3. 
let ingredients = ['dough', 'beef', 'mutton', 'chiken', 'sauce', 'cheese']
  ingredients[0]=100;
  ingredients[1]=280;
  ingredients[2]=260;
  ingredients[3]=150;
  ingredients[4]=80;
  ingredients[5]=90;

let buuzy = {
  name: 'buuzy',
  ingredients: ['dough', 'beef', 'mutton'],
  sale: 800
};

let buuzyPrice=0 
for(let i=0; i<buuzy.ingredients.length; i++) {
  buuzyPrice+=ingredients[i];
}
let buuzyProfit=buuzy.sale-buuzyPrice

alert (`Выручка с буз ${buuzyProfit} рублей`);


let koreanChiken = {
  name: 'koreanChiken',
  ingredients: ['chiken', 'sauce'],
  sale: 430
}

let koreanChikenPrice=0
for(let i=0; i<koreanChiken.ingredients.length; i++) {
  koreanChikenPrice+=ingredients[i];
}
let koreanChikenProfit=koreanChiken.sale-koreanChikenPrice

alert (`Выручка с корейской курицы ${koreanChikenProfit} рублей`);

let pizza = {
  name: 'picca',
  ingredients: ['dough', 'chiken', 'cheese'],
  sale: 470
}

let pizzaPrice=0
for(let i=0; i<pizza.ingredients.length; i++) {
  pizzaPrice+=ingredients[i];
}
let pizzaProfit=pizza.sale-pizzaPrice

alert (`Выручка с пиццы ${pizzaProfit} рублей`);

let menu= [buuzy, koreanChiken, pizza]


