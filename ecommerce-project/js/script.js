const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =  document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () =>{
    nav.classList.add('active');
  })
}


if(close){
  close.addEventListener('click', () =>{
    nav.classList.remove('active');
  })
}

  document.addEventListener('DOMContentLoaded', function () {
    const removeButtons = document.querySelectorAll('.fa-times-circle');

    removeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        removeFromCart(button);
      });
    });

    function removeFromCart(button) {
      const row = button.closest('tr');
      row.remove();
      updateTotal();
    }

    function updateTotal() {
      const prices = document.querySelectorAll('#cart tbody td:nth-child(6)');
      let total = 0;

      prices.forEach(function (price) {
        total += parseFloat(price.innerText.replace('$', ''));
      });

      document.querySelector('#subtotal table tr:last-child td:last-child').innerText = `$${total.toFixed(2)}`;
    }
  });



  //add-to-cart
  let bagItems= [];
  function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
 };
 
 
 
 function displayBagIcon(){
   let bagItemCountelement = document.querySelector('.bag-item-count');
   if(bagItems.length > 0){
     bagItemCountelement.style.visibility = 'visible';
   bagItemCountelement.innerText = bagItems.length;
   }
   else{
     bagItemCountelement.style.visibility = 'hidden';
   }
 }
