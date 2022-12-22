// Задание 1. Напишите функцию принимающую два числа и возвращающую меньшее из них.
let firstNuber = +prompt ("Введите первое число");
let secondNumber = +prompt("Введите второе число");

alert (
    `Наименьшее из двух чисел ${firstNuber} и ${secondNumber} - ${minFromTwoNumbers(
        firstNuber,
        secondNumber
    )}`
);

function minFromTwoNumbers (a, b) {
    return a < b ? a : b;
   }

//    Задание 2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. 
// В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.
  
let ingredientsPrice = {
    dough: 100,
    beef: 280,
    mutton: 260,
    chiken: 150,
    sauce: 80,
    cheese: 90,
  };
  
  let buuzy = {
    name: 'buuzy',
    ingredients: ["dough", "beef", "mutton"],
    sale: 800,
  };
  
  let koreanChiken = {
    name: 'koreanChiken',
    ingredients: ["chiken", "sauce"],
    sale: 430,
  };

  let pizza = {
    name: 'pizza',
    ingredients: ["dough", "chiken", "cheese"],
    sale: 470,
  };
  
  let menyu = [buuzy, koreanChiken, pizza];

  function calcProfit(ingredients, ingredientsPrice, sale) {
    let cost = 0; 
     for (let i=0; i < ingredients.length; i++) {
      let ingredientName = ingredients[i];
      cost += ingredientsPrice[ingredientName];   
    }
    return sale - cost;
   }

   let text = "";
    for (let i = 0; i < menyu.length; i++) {
     let profit = '"'+ menyu[i].name + '" - ' + (calcProfit(menyu[i].ingredients, ingredientsPrice, menyu[i].sale)) + '. ';
   text += profit;}
alert('Выгода ' + text)