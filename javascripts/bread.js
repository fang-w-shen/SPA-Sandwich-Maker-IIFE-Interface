var totalbread = [];
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices=0;
  let bread = {"Wheat": 1.00, "Whole-Grain": 2.00};
  let totalbreadprices=0;
  // Augment the original object with another method
  maker.addBread = function(a) {

  		
  	breadPrices = bread[a];  
    totalbreadprices+=bread[a];	
    totalbread.push(" "+a);	
    return breadPrices;
  };
  maker.deletebread= function() {
      breadPrices = -totalbreadprices;
      totalbreadprices = 0;
      totalbread=[];
      return breadPrices;
    }




  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);