//1. объекты для еды
let dough = {
    price: 200
};

let chiken = {
    price: 450
};

let beef = {
    price: 480
};

let mutton = {
    price: 460
};

let cheese = {
    price: 260
};

let sauce = {
    price: 180
};

//2. блюда и их ингредиенты
let buuzy = {
    ingredients: ['dough', 'beef', 'mutton'],
    price: 48
}

let koreanChiken = {
    ingredients: ['chiken', 'sauce'],
    price: 380
}

let pizza = {
    ingredients: ['dough', 'chiken', 'cheese'],
    price: 520
}


//3. удалим buuzy из массива food
let food = [
    'buuzy', 'koreanChiken', 'pizza'
];

food.shift(0);
alert (food);

//4. Добавить позы обратно и на первое место, 
food.unshift('buuzy');
alert (food);
//но удалить из поз баранину
buuzy.ingredients.splice(2,1);
alert (buuzy.ingredients);

// 5. Укажите сколько вы потратите на приготовление и за сколько будете их продавать.
let menuBuuzy=dough.price+beef.price;
alert (menuBuuzy); //сколько потратили на buuzy

let priceBuuzy=menuBuuzy*1.3
alert(priceBuuzy) //за сколько буду продавать

//сколько заработаем на каждом блюде
let profitBuuzy=priceBuuzy-menuBuuzy
alert (profitBuuzy)

// 6.удалить из массива все элементы кроме поз
food.splice(1,2)
alert (food);
