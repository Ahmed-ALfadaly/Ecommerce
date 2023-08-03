window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item=>new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
    alert('!اضيف هذا المنتج الي عربه الشراء');
    })
});
console.log("اهلا بك ف متجر بالعربي")
