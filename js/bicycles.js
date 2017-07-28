//simple object shorthand and then additional property assignments
var bicycle = {};
    bicycle.color = 'red';
    bicycle.manufacturingYear = 2014;

// a object constructor function! something like a class in java language
function Bicycle(color, manufacturer, year){
  this.color = color;
  this.manufacturer = manufacturer;
  this.manufacturingYear = year;
  this.getAge = function(){
    var currentTime = new Date()
    var year = currentTime.getFullYear();
    var result =  (year - this.manufacturingYear);
    return result;
  }
  this.getAverageDistance = function(){
    var result =  (12 * 50 * this.getAge());
    return result;
  };

}

Bicycle.prototype.material = "aluminium";



//to create constructed object - call constructor
var first = new Bicycle("red", "Adler", 2011);
var second = new Bicycle("blue", "Genesis", 2015);//
first.material = "carbon";
console.log(first);
console.log(second);
