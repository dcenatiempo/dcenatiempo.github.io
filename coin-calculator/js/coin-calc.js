var usSilverCoins = [
  {
    "name": "1942-1945 Nickel",
    "metal content": 0.056260,
    "qty": 0
  },{
    "name": "1892-1964 Dime",
    "metal content": 0.072336,
    "qty": 0
  },{
    "name": "1892-1964 Quarter",
    "metal content": 0.180848,
    "qty": 0
  },{
    "name": "1892-1964 Half Dollar",
    "metal content": 0.361695,
    "qty": 0
  },{
    "name": "1965-1970 Half Dollar",
    "metal content": 0.147890,
    "qty": 0
  },{
    "name": "1878-1935 Dollar",
    "metal content": 0.773450,
    "qty": 0
  },{
    "name": "1971-1976 Dollar",
    "metal content": 0.316230,
    "qty": 0
  },{
    "name": "1986-2013 Silver Eagle",
    "metal content": 0.999,
    "qty": 0
  }
];

var usGoldCoins = [
  {
    "name": "1849 - 1889 $1.00",
    "metal content": 0.048364,
    "qty": 0
  },{
    "name": "1840 - 1929 $2.50",
    "metal content": 0.120935,
    "qty": 0
  },{
    "name": "1839 - 1929 $5.00",
    "metal content": 0.241870,
    "qty": 0
  },{
    "name": "1838 - 1933 $10.00",
    "metal content": 0.483747,
    "qty": 0
  },{
    "name": "1849 - 1933 $20.00",
    "metal content": 0.967494,
    "qty": 0
  }
];

var currentSilverPrice = 16.5;
var currentGoldPrice = 1268.70;
var url ='http://www.coinflation.com/silver_coin_values.html';
url = 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent(url) +'&callback=?';

var request = new Request(url, {
  mode: 'cors',
  headers: new Headers({
		'Content-Type': 'text/plain'
	})
});
/*
fetch(request)
  .then(function(response) {
    return response.text();
  })
  .then(function(html){
    var index = html.indexOf('/oz')
    // allows for prices less than $9.99. and greater than $100.00
    var price = html.slice(index-10, index)
    price = price.split("$")
    price = price[1];
    currentPrice = price;
    //h2Price = document.getElementById('current-price');
    //h2Price.innerHTML = '$'+currentPrice+'/oz';
    //displayCoins(usSilverCoins, currentPrice)
  }).catch(function(err) {
      console.log(err);
  });*/
 
/* this needs to change to reflect new coin structure
function displayCoins (coin, pr){
  var coinList = document.getElementById('coin-list');
  for (prop in coin) {
    console.log(prop +": $"+ (coin[prop]*pr));
    var coinItem = document.createElement('h3');
    coinItem.innerHTML = prop +": $"+ (coin[prop]*pr);
    coinList.appendChild(coinItem);
  }
}*/

  //<b>Silver</b> $16.87/oz 