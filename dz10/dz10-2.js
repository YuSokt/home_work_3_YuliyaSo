// Задание 3.
// ⭐Не задавайте цену приготовления сразу
// задайте массив ингредиентов
// отдельно создайте объект хранящий стоимость этих ингредиентов
// посчитайте стоимость приготовления динамически (с помощью цикла) 

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

  for (let i=0; i<menyu.length; i++) {
    let cost=0;
    for (let j=0; j < menyu[i].ingredients.length; j++) {
        let ingredientName=menyu[i].ingredients[j];
        let ingredientPrice=ingredientsPrice[ingredientName];
        cost+=ingredientPrice;
    }

    menyu[i].cost=cost;
    alert (JSON.stringify(menyu[i]));
  }

  
  
  