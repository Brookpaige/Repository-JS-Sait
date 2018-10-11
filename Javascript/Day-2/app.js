// White loop

// var number = 1;

// while(number <= 12){
//     var counter =1;
//     while (counter <=12){
//         console.log(counter + "x" + number + "=" + counter*number);
//         counter++;
//     }
//     number = number+1;

// } 

 // ++ add one
    // -- minus one


//For loop

// for (var num = 1; num <= 12; num++){
//     console.log(num + 'x' + '9' + '=' + num * 9);
// }

//Adding a for loop
// for (var num = 1; num <= 12; num++){
//   for(var count=1; count <=12; count++){
//     console.log(num + 'x' + count + '=' + num * count);
//   }
// }

// //breaks
// for (var i = 1; 1 <= 12; i++){
//     if (i ===6)
// }



//logic operators inside loop
// for (var i=0; i <= 20; i++){
//     if ( i % 2 === 0 ){
//         console.log ( i + ' Is an even number');
//     } else if ( i % 1 === 0){
//         console.log(i + ' Is an odd number')
//     }
// }



//arrays
// var myFavoriteFoods = ['Steak', 'Popcorn', 'Ice Cream', 'Fries', 'Cheese'];
// console.log(myFavoriteFoods.length); 

// var thirdItem= myFavoriteFoods[2];
// console.log(thirdItem);

// myFavoriteFoods[2] = 'Bubblegum';
// console.log(myFavoriteFoods);

// myFavoriteFoods.push('Crackers');
// console.log(myFavoriteFoods);

// //adding for loop with array
// for (var i = 0; i < myFavoriteFoods.length; i++){
//     console.log(myFavoriteFoods[i]);
// }


//objects

// var objectName = {
//     propertyName: propertyValue
// };

var recipe = {
    recipeTitle:'Chocolate Chip Cookies',
    recipeDescription :'Amazing cookies with great flavour. ' + 'Easy to make and great for the family. ',
    ingredients: ['1 1/2 cup of butter ', '1 1/4 sugar ', '1 tablespoon vanilla ', '2 eggs ', '1 package chocolate chips'],
    directions: ' First heat oven to 350ºF. Mix butter, sugars, vanilla and eggs in large bowl using spoon. Stir in flour, baking soda and salt. Stir in chocolate chips. Drop dough by rounded measuring tablespoonfuls about 2 inches apart onto ungreased cookie sheet. Bake 12 to 15 minutes or until light brown. Cool slightly. Remove from cookie sheet to wire rack; cool.',
    rating: 5,
    cookTime: '60 min',
    
    letsCook:function (recipe){
        console.log( 'I am hungry, lets cook' + recipe);
    }
}

recipe.letsCook(recipe.recipeTitle);
  





var recipeCookTime = recipe.cookTime;
console.log(recipeCookTime);

var recipeRaiting = recipe.rating; 
console.log(recipe.rating);

recipe.servings = 12;
recipe.rating = 4;
delete recipe.cookTime;
console.log(recipe);



//MOVIE OBJECT
// var movies = [
//     {name: 'The Notebook ', rating: 4},
//     {name: 'IT ', rating: 2}
// ];

// for (var i = 0; i < movies.length; i++){
//     var film = movies[i];
//     console.log('I give ' + film.name + film.rating + ' stars');
// }

