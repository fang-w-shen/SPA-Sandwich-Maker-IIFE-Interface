// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

var breadChooser = document.getElementById("bread-chooser");
breadChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
  if(selectedTopping==="Wheat") {
    
    let x = SandwichMaker.addBread(selectedTopping);
    alert("You selected to add: "+selectedTopping +" Bread")
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("selected",true);  
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
      
  }
  else if (selectedTopping==="Whole-Grain") {
    let x = SandwichMaker.addBread(selectedTopping);
    alert("You selected to add: "+selectedTopping+" Bread")
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("selected",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
  }
  else {
    let x = SandwichMaker.deletebread();
    alert("No Bread")
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);

  
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.disabled =false;
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.disabled = false;
  }
  // Add the topping to the SandwichMaker to increase the total price
});

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
 if(selectedTopping==="Turkey") {
 		
  	let x = SandwichMaker.addMeat(selectedTopping);
  	alert("You selected to add: "+selectedTopping)
  	finalSandwichPrice = SandwichMaker.addTopping(x);
  	console.log("", finalSandwichPrice);  
  		
  		
  }
  else if (selectedTopping==="Bacon") {
  	let x = SandwichMaker.addMeat(selectedTopping);
  	alert("You selected to add:  "+selectedTopping)
  	finalSandwichPrice = SandwichMaker.addTopping(x);
  	console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==0) {
  	let x = SandwichMaker.deleteMeat();

    alert("No Meats")
      
  	finalSandwichPrice = SandwichMaker.addTopping(x);
  	console.log("", finalSandwichPrice);
  }
  // Add the topping to the SandwichMaker to increase the total price
});

var vegChooser = document.getElementById("veg-chooser");
vegChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
  if(selectedTopping==="Lettuce") {
    
    let x = SandwichMaker.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping)
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
      
      
  }
  else if (selectedTopping==="Tomato") {
    let x = SandwichMaker.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping)
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==="Onion") {
    let x = SandwichMaker.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping)
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==0) {
    let x = SandwichMaker.deleteveg();
    alert("No Vegetables")
    
    finalSandwichPrice = SandwichMaker.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  // Add the topping to the SandwichMaker to increase the total price
});


document.getElementById("total").addEventListener("click", ()=>{
  alert("Your total cost is: $"+finalSandwichPrice+`\n`+`For:\nBread: `+totalbread+"\nMeats: "+totalmeats.sort()+"\nVegetables: "+totalvegs.sort());
})
  