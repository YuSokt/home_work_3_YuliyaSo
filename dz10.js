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
for (i = 0; ; i++) {
  if (i === 5)
      break; {
      alert(i);
  }
}

// for (key in ingredients) {
  // alert(`${key} = ${ingredients[key]}`);}

// Задание 3. 
let ingredientsPrice = {
  dough: 100,
  beef: 280,
  mutton: 260,
  chiken: 150,
  sauce: 80,
  cheese: 90
}

let buuzy = {
  name: 'buuzy',
  ingredients: ['dough', 'beef', 'mutton'],
  sale: 800
};

let buuzyPrice=0 
for(let i=0; i<buuzy.ingredients.length; i++) {
  let name=buuzy.ingredients[i];
  buuzyPrice+=ingredientsPrice[name];
}
let buuzyProfit=buuzy.sale-buuzyPrice

alert (`Прибыль c буз ${buuzyProfit} рублей`);


let koreanChiken = {
  name: 'koreanChiken',
  ingredients: ['chiken', 'sauce'],
  sale: 430
}

let koreanChikenPrice=0 
for(let i=0; i<koreanChiken.ingredients.length; i++) {
  let name=koreanChiken.ingredients[i];
  koreanChikenPrice+=ingredientsPrice[name];
}
let koreanChikenProfit=koreanChiken.sale-koreanChikenPrice

alert (`Прибыль c корейской курицы ${koreanChikenProfit} рублей`);

let pizza = {
  name: 'picca',
  ingredients: ['dough', 'chiken', 'cheese'],
  sale: 470
}

let pizzaPrice=0 
for(let i=0; i<pizza.ingredients.length; i++) {
  let name=pizza.ingredients[i];
  pizzaPrice+=ingredientsPrice[name];
  alert (pizzaPrice);
}
let pizzaProfit=pizza.sale-pizzaPrice

alert (`Прибыль c пиццы ${pizzaProfit} рублей`);


