class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
new Breakfast("eggs");

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
new Lunch('side salad', 'broccoli cheddar soup', 'iced tea');

class Dinner{
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}
new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake');

