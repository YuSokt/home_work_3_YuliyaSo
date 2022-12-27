export function calcProfit(ingredients, ingredientsPrice, sale) {
    let cost = 0; 
     for (let i=0; i < ingredients.length; i++) {
      let ingredientName = ingredients[i];
      cost += ingredientsPrice[ingredientName];   
    }
    return sale - cost;
   }


  //  export default calcProfit; 