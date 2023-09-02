window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import './sass/custom.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js'
import './sass/style.scss'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item=>new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
    alert('!اضيف هذا المنتج الي عربه الشراء');
    })
});

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change',() => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct +'$';

        calculateTotalPrice ()

})        
    })

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
    
        calculateTotalPrice ()
    })
})    

function calculateTotalPrice () {
    let totalpriceForAllProduct=0;    
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnit = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value;
        const totalPriceForProduct = pricePerUnit * quantity;
        totalpriceForAllProduct = totalpriceForAllProduct + totalPriceForProduct;
    })    
    document.getElementById('total-price-for-all-product').innerHTML=totalpriceForAllProduct + '$'
}

// PAYMENT PAGE CC

const citiesByCountries = {
sa: ['الرياض','جدة'],
eg: ['القاهرة','الاسكندرية'],
jo: ['عمان','الزرقاء'],
sy: ['حلب','دمشق','حمأه'],
}
document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change',() => {
        const country = item.value
        const cities = citiesByCountries[country]

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر مدينة')
        firstOption.appendChild(optionText)
        firstOption.getAttribute('value','')
        firstOption.getAttribute('disabled','true')
        firstOption.getAttribute('selected','true')
        const city_options = document.getElementById('paymentcities')
        city_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value',city)
            city_options.appendChild(newOption)
        })
    })
})

document.querySelectorAll('#form-checkout input[name="payment_method"]').forEach(i => {
    i.addEventListener('change',()=>{
        const paymentMethod = i.value;
        const creditCardInputs= document.querySelectorAll('#credit-card-info input');

        if(paymentMethod === 'on_delivery')
        {
            creditCardInputs.forEach(input =>{
                input.style.display='none'
            })
        }else
        {
            creditCardInputs.forEach(input =>{
                input.style.display='block'
        });
    }
})
})


document.getElementById("copyright").innerHTML = (' جميع الحقوق محفوظة للمتجر لسنة')+' '+new Date().getFullYear()
console.log("اهلا بك ف متجر بالعربي")
