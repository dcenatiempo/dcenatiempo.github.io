function add(a,b) { return a + b; }
function subtract(a,b) { return a-b; }
function multiply(a,b) { return a*b; }
function divide(a,b) { return a/b; }
function changeSign (a) { return a * (-1); }

////////////////////////////////////////////////////////////////////////////////
var termL = 0;
var termR = 0;
var operator = add;
var defaultTermR = termR;
var defaultOperator = operator;
var memory = null;
var typingNum = false; // true if last entry was 0-9 "." "+/-"
var decimalMode = false; // true if "." is pressed, false if typingNum == false
var rightDisplay = false; // true if +-*/ pressed, false if "=" pressed

// reset calculator to starting state (exluding memory recall)
function reset() {
  termL = 0;
  termR = 0;
  operator = add;
  defaultTermR = termR;
  defaultOperator = operator;
  typingNum = false;
  decimalMode = false;
  rightDisplay = false;
  display();
}
function writeNumber (x, term) {
// todo: fix weird rounding errors 63.178
  if (typingNum === false){
    typingNum = true;
    if (decimalMode === false)
      return x;
    else return x/10;
  }
  else {
    if (decimalMode === false)
      return (term * 10) + x;
    else {
      var place = 1;
      while ( (term * Math.pow( 10, place - 1 ) ) % 1 > 0)
        place++;
    return term + (x/(Math.pow(10, place)));
    }
  }
}

function numberPress(num) {
  if (rightDisplay === false){
    termL = writeNumber(num, termL);
    display();
  }
  else {
    termR = writeNumber(num, termR);
    display();
  }
}

function equalPress() {
  // reset decimalMode and rightDisplay
  decimalMode = false;
  rightDisplay = false;
  typingNum = false;
  // set defaults in case "CE" is pressed
  defaultOperator = operator;
  defaultTermR = termR;
  // do calculation and display to screen
  termL = operator(termL, termR);
  display();
}

function operatorPress(oper) {
  if (rightDisplay)       // when stringing together operators
    $("#equals").click(); // automate the equals function
  decimalMode = false;
  rightDisplay = true;
  operator = oper;
  typingNum = false;
  termR = termL;
}

function display() {
  var tempTerm;
  var scrDisplay;
  if (rightDisplay)
    tempTerm = termR;
  else tempTerm = termL;
////////////////////////////////////////////////////////////////////////////////
  scrDisplay = tempTerm.toString().split("");

  // check to see if number is 'Infinity'
  if (scrDisplay.findIndex(x=>x==="y") >= 0)
    scrDisplay = scrDisplay.join('');
  // check if number in scientific notation
  else if (scrDisplay.findIndex(x=>x==="e") >= 0)
    scrDisplay = tempTerm.toExponential(6);
  // check if number is decimal
  else if (scrDisplay.findIndex(x=>x===".") >=0){
    // split number into two parts: iteger and decimal
    scrDisplay = tempTerm.toString().split('.');
    var integer = scrDisplay[0].split('');
    var decimal = scrDisplay[1].split('');
    // remove sign if there is one
    if (integer[0] === '-')
      var sign = integer.shift();
    // if integer portion is too big for screen, use scientific notation
    if (integer.length > 11)
      scrDisplay = tempTerm.toExponential(6);
    else {
      // if number is too big for screen, truncate decimal portion
      if (integer.length + decimal.length > 11) {
        var limit = 11-integer.length;
        decimal = decimal.slice(0,limit < 0 ? 0 : limit);
      }
      // if integer portion is 1,000+ add commas
      if (integer.length > 3 ) {
        var loop = Math.floor(integer.length/3.1);
        for ( var i = 0; i < loop; i++)
          integer.splice((integer.length-(3+3*i+i)),0,",");
      }
      if (sign) // add sign back in if there is one
        integer.unshift(sign);
      // put it all together again for display
      integer = integer.join('');
      decimal = decimal.join('');
      scrDisplay = integer + '.' + decimal;
    }
  }
  // number must be regular integer
  else {
    // remove sign if there is one
    if (scrDisplay[0] === '-')
      var sign = scrDisplay.shift();
    // if number too big for screen convert to scientific notation
    if (scrDisplay.length > 11)	
      scrDisplay = tempTerm.toExponential(6);
    // if bigger than 1,000 add commas
    else {
      var loop = Math.floor(scrDisplay.length/3.1);
      for ( var i = 0; i < loop; i++)
        scrDisplay.splice((scrDisplay.length-(3+3*i+i)),0,",");
      // add sign back in if there is one
      if (sign)
        scrDisplay.unshift(sign);
      // put it all together again for display
      scrDisplay.push('.');
      scrDisplay = scrDisplay.join("");
    }
  }
  $("#r-scrn").text(scrDisplay);
}

function percent () {
  if (!rightDisplay) {
    termL = termL/100;
    display();
  }
  else {
    termR = termR/100;
    $("#equals").click();
  }
}

function clearEntry () {
  termR = defaultTermR;
  operator = defaultOperator;
  typingNum = false;
  decimalMode = false;
  rightDisplay = false;
  display();
}

function memClear() {
  memory = null;
  $("#l-scrn").text('');
}

function memSet() {
  memory = null;
  if (rightDisplay)
    memory = termR;
  else memory = termL;
  $("#l-scrn").text('M');
}

function memRecall () {
  if (memory !== null){
    if (rightDisplay)
      termR = memory;
    else termL = memory;
    display();
  }
}

// wait till doc is ready!!!
$(document).ready(function(){
  // set display
  display();
  //set click events
  $("#one").click(function()      { numberPress(1); });
  $("#two").click(function()      { numberPress(2); });
  $("#three").click(function()    { numberPress(3); });
  $("#four").click(function()     { numberPress(4); });
  $("#five").click(function()     { numberPress(5); });
  $("#six").click(function()      { numberPress(6); });
  $("#seven").click(function()    { numberPress(7); });
  $("#eight").click(function()    { numberPress(8); });
  $("#nine").click(function()     { numberPress(9); });
  $("#zero").click(function()     { numberPress(0); });
  $("#decimal").click(function()  { decimalMode = true; });
  $("#equals").click(function()   { equalPress(); });
  $("#plus").click(function()     { operatorPress(add); });
  $("#minus").click(function()    { operatorPress(subtract); });
  $("#multiply").click(function() { operatorPress(multiply); });
  $("#divide").click(function()   { operatorPress(divide); });
  $("#percent").click(function()  { percent(); });
  $("#clearEntry").click(function(){ clearEntry(); });
  $("#mRecall").click(function()  { memRecall(); });
  $("#mSet").click(function()     { memSet(); });
  $("#mClear").click(function()   { memClear(); });
  $("#reset").click(function()    { reset(); });
  $("#sign").click(function() {
    if (rightDisplay)
      termR = changeSign(termR);
    else termL = changeSign(termL);
    display();
  });
// set keyboard events
  $(window).keypress(function(key){
    switch (key.keyCode) {
      case 49:
        $("#one").click(); break;
      case 50:
        $("#two").click(); break;
      case 51:
        $("#three").click(); break;
      case 52:
        $("#four").click(); break;
      case 53:
        $("#five").click(); break;
      case 54:
        $("#six").click(); break;
      case 55:
        $("#seven").click(); break;
      case 56:
        $("#eight").click(); break;
      case 57:
        $("#nine").click(); break;
      case 48:
        $("#zero").click(); break;
      case 46:
        $("#decimal").click(); break;
      case 61:
        $("#equals").click(); break;
      case 43:
        $("#plus").click(); break;
      case 45:
        $("#minus").click(); break;
      case 47:
        $("#divide").click(); break;
      case 13:
        $("#equals").click(); break;
      case 37:
        $("#percent").click(); break;
      case 42:
        $("#multiply").click(); break;
    }
  });
});