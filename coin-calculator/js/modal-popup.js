document.getElementById('modal-btn')
  .addEventListener('click', silverPopUp);

function updateSilverPrice(e) {
  let id = e.target.parentElement.id.split("silver")[1];
  usSilverCoins[id].qty = e.target.value;
  let priceElement = document.querySelectorAll('#silver' + id + ' .total-coin-price')[0];
  let price = usSilverCoins[id].qty * usSilverCoins[id]['metal content']*currentSilverPrice;
  price = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  priceElement.innerText = price;
  updateSilverTotal();
}
function updateGoldPrice(e) {
  let id = e.target.parentElement.id.split("gold")[1];
  usGoldCoins[id].qty = e.target.value;
  let priceElement = document.querySelectorAll('#gold' + id + ' .total-coin-price')[0];
  let price = usGoldCoins[id].qty * usGoldCoins[id]['metal content']*currentGoldPrice;
  price = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  priceElement.innerText = price;
  updateGoldTotal();
}

function updateSilverTotal() {
  let updated = usSilverCoins.reduce( (sum, e)=> {
    return sum + (currentSilverPrice * e.qty * e['metal content'])
  }, 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  document.querySelector('#modal-container h2').innerText = updated;
}
function updateGoldTotal() {
  let updated = usGoldCoins.reduce( (sum, e)=> {
    return sum + (currentGoldPrice * e.qty * e['metal content'])
  }, 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  document.querySelector('#modal-container h2').innerText = updated;
}

function silverPopUp() {
  var container = document.querySelector('#modal-container')
  container.innerHTML = "";
  container.style.visibility = 'visible';

  var title = document.createElement('h1');
  var titleText = document.createTextNode('Enter Silver Coins:');
  title.appendChild(titleText);

  container.appendChild(title);

  usSilverCoins.forEach( (coin, i)=> {
    let item = document.createElement('div');
    item.setAttribute('class', 'coin-item');
    item.setAttribute('id', "silver"+i)

    let itemName = document.createElement('p');
    itemName.setAttribute('class', 'coin-name');
    let itemNameText = document.createTextNode(coin.name);
    itemName.appendChild(itemNameText);

    let itemPrice = document.createElement('p');
    itemPrice.setAttribute('class', 'coin-price');
    let iprice = currentSilverPrice * coin["metal content"];
    iprice = iprice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let itemPriceText = document.createTextNode( iprice );
    itemPrice.appendChild(itemPriceText);

    let itemQty = document.createElement('input');
    itemQty.setAttribute('type', 'number');
    itemQty.setAttribute('value', coin.qty);
    itemQty.setAttribute('min', 0);
    itemQty.addEventListener('input', updateSilverPrice)

    let totalItemPrice = document.createElement('p');
    totalItemPrice.setAttribute('class', 'total-coin-price');
    let itotprice = currentSilverPrice * coin['metal content'] * itemQty.value;
    itotprice = itotprice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let totItemPriceText = document.createTextNode(itotprice);
    totalItemPrice.appendChild(totItemPriceText);

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemQty);
    item.appendChild(totalItemPrice);

    container.appendChild(item);
  });
  let h2Total = document.createElement('h2');
  let h2Text = document.createTextNode('$0.00');
  h2Total.appendChild(h2Text);

  let nextBtn = document.createElement('button');
  let btnText = document.createTextNode('Next');
  nextBtn.appendChild(btnText);
  nextBtn.addEventListener('click', goldPopUp);
  
  container.appendChild(h2Total);
  container.appendChild(nextBtn);
  updateSilverTotal();
}

function goldPopUp() {
  var container = document.querySelector('#modal-container')
  container.innerHTML = "";
  container.style.visibility = 'visible';

  var title = document.createElement('h1');
  var titleText = document.createTextNode('Enter Gold Coins:');
  title.appendChild(titleText);

  container.appendChild(title);

  usGoldCoins.forEach( (coin, i)=> {
    let item = document.createElement('div');
    item.setAttribute('class', 'coin-item');
    item.setAttribute('id', "gold"+i)

    let itemName = document.createElement('p');
    itemName.setAttribute('class', 'coin-name');
    let itemNameText = document.createTextNode(coin.name);
    itemName.appendChild(itemNameText);

    let itemPrice = document.createElement('p');
    itemPrice.setAttribute('class', 'coin-price');
    let iprice = currentGoldPrice * coin["metal content"];
    iprice = iprice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let itemPriceText = document.createTextNode( iprice );
    itemPrice.appendChild(itemPriceText);

    let itemQty = document.createElement('input');
    itemQty.setAttribute('type', 'number');
    itemQty.setAttribute('value', coin.qty);
    itemQty.setAttribute('min', 0);
    itemQty.addEventListener('input', updateGoldPrice)

    let totalItemPrice = document.createElement('p');
    totalItemPrice.setAttribute('class', 'total-coin-price');
    let itotprice = currentGoldPrice * coin['metal content'] * itemQty.value;
    itotprice = itotprice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let totItemPriceText = document.createTextNode(itotprice);
    totalItemPrice.appendChild(totItemPriceText);

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemQty);
    item.appendChild(totalItemPrice);

    container.appendChild(item);
  });
  let h2Total = document.createElement('h2');
  let h2Text = document.createTextNode('$0.00');
  h2Total.appendChild(h2Text);

  let nextBtn = document.createElement('button');
  let btnText = document.createTextNode('Next');
  nextBtn.appendChild(btnText);
  nextBtn.addEventListener('click', otherPopup);
  
  container.appendChild(h2Total);
  container.appendChild(nextBtn);
  updateGoldTotal();
}

function otherPopup() {
  var container = document.querySelector('#modal-container')
  container.innerHTML = "";
  container.style.visibility = 'hidden';
}