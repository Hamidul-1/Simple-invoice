const detailsButton = document.getElementById('detail-submit-btn');


detailsButton.addEventListener('click',function(){

  const buyerDetails = document.getElementById('buyer-details-input');
  // console.log('buyer-details',buyerDetails);
  document.getElementById('buyer-info').innerText = buyerDetails.value;
  buyerDetails.value = '';
  
})

const addButton = document.getElementById('add-details-btn').addEventListener('click',function(){
  const infoTable = document.getElementById('info-table');
  const itemName = document.getElementById('item-name-input');
  const itemPrice = document.getElementById('item-price-input');
  const itemQuantity = document.getElementById('item-quantity-input');
  console.log(itemName.value, itemPrice.value, itemQuantity.value);

  if (
    itemName.value == "" ||
    itemPrice.value < 0 ||
    itemQuantity.value < 0 ||
    itemPrice.value == "" ||
    itemQuantity.value == ""
  ) 
  {
    console.log("sorry");
    return;
  }
  
  {/* <tr>
    <th >1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr> */}
  const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

  console.log('total..............',totalPrice);
  // const tr = document.createElement('tr');
  const tr = element('tr');
  // const th = document.createElement('th');
  const th = element('th');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  td3.classList.add('item-total');
  th.innerText = itemName.value;
  td1.innerText = itemPrice.value;
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  infoTable.appendChild(tr);

  totalCalculation();
})

function element(parameter){
  return document.createElement(parameter);
}


function totalCalculation(){
  const subTotal = calculateSubTotal()

  const subTotalToDisplay = document.getElementById('sub-total');
  subTotalToDisplay.innerText = subTotal;

  const tax = subTotal * .2;
  document.getElementById('tax').innerText = tax.toFixed(2);
  document.getElementById('grand-total').innerText = subTotal + tax;
  document.getElementById('grand-total-2').innerText = subTotal + tax;
}


function calculateSubTotal(){
  let subTotal = 0;
  const cost = document.getElementsByClassName('item-total');
  for (let i = 0; i <cost.length; i++){
    const element = cost[i]; //<td class='item-total'>35</td>
    const price = parseInt(element.innerText)
    subTotal = subTotal + price;
  }
  return subTotal;
}

