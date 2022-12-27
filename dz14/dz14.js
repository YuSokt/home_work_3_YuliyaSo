import calcProfit from "../scripts/function.js";

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



   let text = "";
    for (let i = 0; i < menyu.length; i++) {
     let profit = '"'+ menyu[i].name + '" - ' + (calcProfit(menyu[i].ingredients, ingredientsPrice, menyu[i].sale)) + '. ';
   text += profit;}
alert('Выгода ' + text)