// Write your code here
// To practice OOP concepts, let's create 3 classes that use constructor methods. These constructors will assign properties based on initial parameters.
//
// 1. Create a class for `Breakfast`. `Breakfast` will have a constructor with a food and a drink.
// 2. Create a class for `Lunch`. `Lunch` will have a constructor with a salad, a soup, and a drink.
// 3. Create a class for `Dinner`. Since dinner is a little bit fancier, `Dinner` will have a constructor with salad, soup, entree, and dessert. Indicate that dessert is intended to be a private property by including an underscore (`_`) at the beginning.

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.drink = drink;
    this.soup = soup;

  }
}

class Dinner {
  constructor(salad,soup,entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;

  }
}
