
const menuReviel = $('.menu-reviel')
$('.burger-menu').on('click', burgerMenuClicked) 
    function burgerMenuClicked() {
        $('.burger-menu').toggleClass('hide');
        $('li #close').removeClass('hide');
        menuReviel.toggleClass('hide').removeClass('hidden').toggleClass('active');
    }


    // add to cart

const addToCart = $('.btn');
addToCart.on('click', cartPressed);
let numItemsInCart = '';

    function cartPressed(){
        numItemsInCart++
        $('.cart').removeClass('hide')
        $('.items-in-cart').html(numItemsInCart)
    }
// window.onload = function() {
//     localStorage.setItem("value", numItemsInCart); 
// }

// window.onload = function() {
//     localStorage.setItem("name", $('#inputName').val());
//     localStorage.setItem("email", $('#inputEmail').val());   
// }

let mainVal = $('.value-num span').text();
let mainValSec = $('.value-num2 span').text();
let mainValThi = $('.value-num3 span').text();
let taxTotal = $('#ctime-checkout .tax-total span');
let taxTotal2 = $('#goldentime-checkout .tax-total span')
let taxTotal3 = $('#manwatch-checkout .tax-total span')
let cartVal = $('.optionBtn .cart-val');
let cartValSec = $('.optionBtn2 .cart-val');
let cartValThi = $('.optionBtn3 .cart-val');


let numVal = 1;
let taxAmt = (6/100);
// option 1
$('.optionBtn .optionMinus').on('click', function() {
    if (numVal > 0) {
        numVal--
        condition()
    }
  })
  
  $('.optionBtn .optionPlus').on('click', function() {
      if (numVal >= 0) {
        numVal++
        condition()
    }
  })
// option 2
  $('.optionBtn2 .optionMinus').on('click', function(){
      if (numVal > 0) {
        numVal--
        secCondition()
    }
  })
  $('.optionBtn2 .optionPlus').on('click', function(){
      if (numVal >= 0) {
        numVal++
        secCondition()
    }
  })
// option 3
$('.optionBtn3 .optionMinus').on('click', function(){
    if (numVal > 0) {
      numVal--
      thiCondition()
  }
})
$('.optionBtn3 .optionPlus').on('click', function(){
    if (numVal >= 0) {
      numVal++
      thiCondition()
  }
})
        $('.trash').on('click', function(){
            cartVal.html(0)
            $('.value-num span').html(0)
            taxTotal.html(0)

            })
        $('.trash2').on('click', function(){
            cartValSec.html(0)
            $('.value-num2 span').html(0)
            taxTotal2.html(0)
    
        })
        $('.trash3').on('click', function(){
            cartValThi.html(0)
            $('.value-num3 span').html(0)
            taxTotal3.html(0)
        
            })

    let taxFinal = (val) => {

        let finalTax = parseInt(val)
        finalTax = finalTax + (finalTax * (0.06))
        finalTax = finalTax.toFixed(2)
        return finalTax;
    }

    let totalPay = (val) => {
        let value = val * numVal;
        value = Number(value)
        let finalValue = value.toFixed(2)
        return finalValue
    }
    let condition = () => {
        cartVal.html(numVal);
        totalPay(mainVal)
        taxFinal(totalPay(mainVal))
        $('.value-num span').text(totalPay(mainVal));
        taxTotal.text(taxFinal(totalPay(mainVal)))
    }

    let secCondition = () =>{
        cartValSec.html(numVal)
        totalPay(mainValSec)
        taxFinal(totalPay(mainValSec))
        $('.value-num2 span').text(totalPay(mainValSec));
        taxTotal2.text(taxFinal(totalPay(mainValSec)))
    }

    let thiCondition = () =>{
        cartValThi.html(numVal)
        totalPay(mainValThi)
        taxFinal(totalPay(mainValThi))
        $('.value-num3 span').text(totalPay(mainValThi));
        taxTotal3.text(taxFinal(totalPay(mainValThi)))
    }

