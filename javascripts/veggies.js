// This SandwichMaker IIFE augments the original one
var totalvegs = [];
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegPrices=0;
  var totalvegprice=0;
  let veg = {"Lettuce": 1.00, "Tomato": 2.00, "Onion": 3.00};

  // Augment the original object with another method
  maker.addVeg = function(a) {
  	vegPrices=veg[a];
  	totalvegprice+=veg[a];
  	totalvegs.push(" "+a)
    return vegPrices;
  };


  maker.deleteveg = function() {

      
    vegPrices = -totalvegprice;
    totalvegprice=0;   
    totalvegs=[];  
    return vegPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);