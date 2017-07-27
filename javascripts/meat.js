// This SandwichMaker IIFE augments the original one
var totalmeats = [];
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices=0;
  var totalmeatprice=0;
  let meat = {"Turkey": 0.90, "Bacon": 1.50};
  
  // Augment the original object with another method
  maker.addMeat = function(a) {

  		
  	meatPrices = meat[a];  	
    totalmeatprice+=meat[a];
    totalmeats.push(" "+a);	
    return meatPrices;
  };

  maker.deleteMeat = function() {

      
    meatPrices = -totalmeatprice;
    totalmeatprice=0;
    totalmeats=[];     
    return meatPrices;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);