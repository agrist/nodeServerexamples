//simple object shorthand and then additional property assignments
var bicycle = {};
bicycle.color = 'red';
bicycle.manufacturingYear = 2014;

// a object constructor function! something like a class in java language
function Bicycle(color, manufacturer, year) {
    this.color = color;
    this.manufacturer = manufacturer;
    this.manufacturingYear = year;
    this.getAge = function() { //class objection function can have "personal" functions
        var currentTime = new Date()
        var year = currentTime.getFullYear();
        var result = (year - this.manufacturingYear);
        return result;
    }
    this.getAverageDistance = function() {
        var result = (12 * 50 * this.getAge());
        return result;
    };

}


function SportsBicycle(color, manufacturer, year, tiresize, handlebars, steering, weight) {
    this.tiresize = tiresize;
    this.handlebars = handlebars;
    this.steering = steering;
    this.weight = weight;
    this.visual = Bicycle //without this there is no funcitonal inheritance
    this.visual(color, manufacturer, year);
}

SportsBicycle.prototype = new Bicycle();

Bicycle.prototype.material = "aluminium";
//to create constructed object - call constructor
var first = new Bicycle("red", "Adler", 2011);
var second = new Bicycle("blue", "Genesis", 2015); //
var third = new SportsBicycle("black", "Specialized-Era", 2016, 29, "Specialized", "center", 12);
third.material = "Specialized Alloy";
first.material = "carbon";

var showThreeItems = function() {
    console.log(first);
    console.log(second);
    console.log(third);
};

var initialShow = function(){

  console.log(bicycle);
}();//autocalled, can't be reached from conosle after initialized
//initialShow();
