//1. объекты для еды
let dough = {
    name: 'dough',
    price: 200
};

let chiken = {
    name: 'chiken',
    price: 450
};

let beef = {
    name: 'beef',
    price: 480
};

let mutton = {
    name: 'mutton',
    price: 460
};

let cheese = {
    name: 'cheese',
    price: 260
};

let sauce = {
    name: 'sauce',
    price: 180
};

//2. блюда и их ингредиенты
let buuzy = {
    ingredients: [dough.name, beef.name, mutton.name],
    margin: 1.3
}
alert(JSON.stringify(buuzy.ingredients))

let koreanChiken = {
    ingredients: [chiken.name, sauce.name],
    margin: 1.6
}
alert(JSON.stringify(koreanChiken.ingredients))

let pizza = {
    ingredients: [dough.name, chiken.name, cheese.name],
    margin: 1.3
}


//3. удалим buuzy из массива food
let food = [buuzy, koreanChiken, pizza];

food.shift(0);
alert (JSON.stringify(food));

//4. Добавить позы обратно и на первое место, 
food.unshift(buuzy);
alert (JSON.stringify(food));

//но удалить из поз баранину
buuzy.ingredients.splice(2,1);
alert (buuzy.ingredients);

// 5. Укажите сколько вы потратите на приготовление и за сколько будете их продавать.
let menuBuuzy=dough.price+beef.price;
alert (menuBuuzy); //сколько потратили на buuzy

let priceBuuzy=menuBuuzy*buuzy.margin
alert(priceBuuzy) //за сколько буду продавать

//сколько заработаем на каждом блюде
let profitBuuzy=priceBuuzy-menuBuuzy
alert (profitBuuzy)

// 6.удалить из массива все элементы кроме поз
food.splice(1,2)
alert (food);
