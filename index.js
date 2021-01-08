// Write your code here
let Breakfast = class {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    } 
}

let Lunch = class {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let Dinner = class {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}