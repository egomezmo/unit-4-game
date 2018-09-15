var wins = 0;
var losses = 0;
var resultSum = 0;
var toMatch = Math.floor(Math.random() * 102) + 12 ;
var oneGem = Math.floor(Math.random() * 13);
var twoGem = Math.floor(Math.random() * 13);
var treeGem = Math.floor(Math.random() * 13);
var fourGem = Math.floor(Math.random() * 13);

function initializeGame () {
  oneGem = 0;
  twoGem = 0;
  treeGem = 0;
  fourGem = 0;
  resultSum = 0;
  toMatch = "";
  $("#goal, #resultSum").empty();
  toMatch = Math.floor(Math.random() * 102) + 12 ;
  oneGem = Math.floor(Math.random() * 13);
  twoGem = Math.floor(Math.random() * 13);
  treeGem = Math.floor(Math.random() * 13);
  fourGem = Math.floor(Math.random() * 13);
  
  console.log("One: " + oneGem);
  console.log("Two " + twoGem); 
  console.log("Tree: " + treeGem);
  console.log("Four: " + fourGem);
};



$(".gems").click(function(){
  $("#goal").text(toMatch);
  if ($(this).attr("id") === "oneGem") {
    result = oneGem;
  } else if ($(this).attr("id") === "twoGem") {
    result = twoGem;
  } else if ($(this).attr("id") === "treeGem") {
    result = treeGem;
  } else {
    result = fourGem;
  };

  resultSum += result ;
  $("#resultSum").text(resultSum);
  
  if (resultSum < toMatch) {
  } else if (resultSum === toMatch) {
    wins += 1 ;
    initializeGame();
    

  } else {
    losses += 1 ;
    initializeGame();
    

  };
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);

});

// SOLO PARA FACILITAR LLA PRUEBA CON LA CONSOLA
console.log("One: " + oneGem);
console.log("Two " + twoGem);
console.log("Tree: " + treeGem);
console.log("Four: " + fourGem);