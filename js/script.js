let  shopIcon  = document.querySelector('.shop')
let cart = document.querySelector('.header_shop-card')
let hint = [...document.querySelectorAll('.ishora')];
let number = document.querySelector('.soni')
let productPrice = document.querySelector('.count_doll');



shopIcon.addEventListener('click', () => {
     cart.classList.toggle('active');
})


let countPrice = 0;


function Hint (){
    hint.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            if (item.textContent == '+') {
                number.textContent++ 
                countPrice = countPrice + 125
                productPrice.textContent = '$' + countPrice + '.00'
            }else{
               if ( number.textContent == 0) {
                 number.textContent = "0"
               }else{
                number.textContent--
                countPrice = countPrice - 125
                productPrice.textContent = '$' + countPrice + '.00'
               }
            }
        })
    });
}
Hint()





let headerImg = [...document.querySelectorAll('.header_img-box1')];
let mainImg = document.querySelector('.header_img-box');
 

function images (){
    headerImg.forEach((item, i)=> {
          item.addEventListener('click', () => {
            let a = item.getAttribute('src');
            
             if (mainImg.hasAttributes('src')) {
                 mainImg.removeAttribute('src');
                 mainImg.setAttribute('src', a)
                 let b = mainImg.getAttribute('src')
                if (i == 0) {
                 headerImg[i].classList.add('active')
                 headerImg[1].classList.remove('active')
                 headerImg[2].classList.remove('active')
                 headerImg[3].classList.remove('active')
                }else if(i == 1){
                    headerImg[0].classList.remove('active')
                    headerImg[2].classList.remove('active')
                    headerImg[3].classList.remove('active')
                    headerImg[i].classList.add('active')
                }else if (i == 2){
                    headerImg[0].classList.remove('active')
                    headerImg[1].classList.remove('active')
                    headerImg[3].classList.remove('active')
                    headerImg[i].classList.add('active')
                }else{
                    headerImg[0].classList.remove('active')
                    headerImg[1].classList.remove('active')
                    headerImg[2].classList.remove('active')
                    headerImg[i].classList.add('active')
                }
             }
             
          })
    });
}
images()



let addCart = document.querySelector('.header_card-btn')
let price = document.querySelector('.text_span');
let shopCount = document.querySelector('.shop_about-count')
let shopCart = document.querySelector('.shop_cart')
let btnDelete = document.querySelector('.shop_delete')
let shopNumber = document.querySelector('.shop_number');
let checkoutBtn = document.querySelector('.shop_checout');

addCart.addEventListener('click', () => {
    price.textContent = '$' + countPrice + '.00'
    shopCount.textContent = number.textContent
    shopCart.classList.add('active')
    shopNumber.classList.add('active')
    if (number.textContent == '0') {
        shopNumber.classList.remove('active')
    }else{
        shopNumber.classList.add('active')
    }

    shopNumber.textContent = number.textContent
})
btnDelete.addEventListener('click', () => {
    shopCart.classList.remove('active')
    shopNumber.classList.remove('active')
})
checkoutBtn.addEventListener('click', () => {
    location = "https://payme.uz/home/main"
    checkoutBtn.setAttribute('target', '_blank')
})


