import food from "./food.json" assert {type: 'json'};
import ingPrice from "./ingPrice.json" assert {type: 'json'};

console.log("Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует reduce.")
food.forEach(function (element) {
    let costPrice = element.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    console.log(costPrice)
})

console.log("Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания.")
let costSum = food.map(function (foodItem) {
    let costPrice = foodItem.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    foodItem.cost = costPrice
    return foodItem
});
console.log(costSum)

console.log("Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания. С помощью object.assign")
let costSumObj = food.map(function (foodItem) {
    let costPrice = foodItem.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    let newFoodItem = Object.assign({}, foodItem);
    newFoodItem.cost = costPrice
    return newFoodItem
});
console.log(costSumObj)

console.log("Отфильтруйте меню по какой-то предельной стоимости (например блюда стоимостью менее 100 рублей).")

let foodLess = food.filter(foodItem => foodItem.price <= 100)
console.log(foodLess);


console.log("Определите, есть ли в меню хоть одно вегетарианское блюдо, используя some.")

let vegetFood = food.some(function (foodElem) {
    console.log(foodElem.name)
    return foodElem.ingredients.every(function (foodIng) {
        console.log(foodIng);
        console.log(foodIng !== "meat" && foodIng !== "mutton" && foodIng !== "salami");
        return (foodIng !== "meat" && foodIng !== "mutton" && foodIng !== "salami");
    });
});

console.log(vegetFood)

console.log("Определите, полностью ли у вас вегетарианское меню с помощью every. C помощью includes")

const NON_VEGAN_INGREDIENTS = ["meat", "mutton", "salami"]
let vegetIngFood = food.some(function (foodElem) {
    console.log(foodElem.name);
    foodElem.ingredients.every(function (ingredient) {
        return !NON_VEGAN_INGREDIENTS.includes(ingredient)
    });
});
console.log(vegetIngFood)

console.log("Определите, полностью ли у вас вегетарианское меню с помощью every.")
let vegetMenu = food.every(function (menuItem) {
    console.log(menuItem.name)
    return menuItem.ingredients.every(function (foodIng) {
        console.log(foodIng);
        console.log(foodIng !== "meat" && foodIng !== "mutton" && foodIng !== "salami");
        return (foodIng !== "meat" && foodIng !== "mutton" && foodIng !== "salami");
    });
})
console.log(vegetMenu)