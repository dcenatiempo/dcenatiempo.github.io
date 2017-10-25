var usCoins = {
  "1942-1945 Nickel": 0.056260,
  "1892-1916 Barber Dime": 0.072336,
  "1916-1945 Mercury Dime": 0.072336,
  "1946-1964 Roosevelt Dime": 0.072336,
  "1892-1916 Barber Quarter": 0.180848,
  "1916-1930 Standing Liberty Quarter": 0.180848,
  "1932-1964 Washington Quarter": 0.180848,
  "1892-1915 Barber Half Dollar": 0.361695,
  "1916-1947 Walking Liberty Half Dollar": 0.361695,
  "1948-1963 Franklin Half Dollar": 0.361695,
  "1964 Kennedy Half Dollar": 0.361695,
  "1965-1970 Half Dollar (40% silver)": 0.147890,
  "1878-1921 Morgan Dollar": 0.773450,
  "1921-1935 Peace Dollar": 0.773450,
  "1971-1976 Eisenhower Dollar (40% silver)": 0.316230,
  "1986-2013 Silver Eagle (.999 Silver)": 0.999
}
var canadianCoins = {
  "1920-1967 Dime": .06,
  "1967-1968 Dime (50% silver)": .0375,
  "1920-1967 Quarter": .15,
  "1967-1968 Quarter (50% silver)": .09375,
  "1920-1967 Half Dollar": .3,
  "1935-1967 Dollar": .6
}
var currentPrice;
var url ='http://www.coinflation.com/silver_coin_values.html';
url = 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent(url) +'&callback=?';

var request = new Request(url, {
  mode: 'cors',
  headers: new Headers({
		'Content-Type': 'text/plain'
	})
});

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
    h2Price = document.getElementById('current-price');
    h2Price.innerHTML = '$'+currentPrice+'/oz';
    displayCoins(usCoins, currentPrice)
  }).catch(function(err) {
      console.log(err);
  });
 
  function displayCoins (coin, pr){
    var coinList = document.getElementById('coin-list');
    for (prop in coin) {
      console.log(prop +": $"+ (coin[prop]*pr));
      var coinItem = document.createElement('h3');
      coinItem.innerHTML = prop +": $"+ (coin[prop]*pr);
      coinList.appendChild(coinItem);
    }
  }

  //<b>Silver</b> $16.87/oz 