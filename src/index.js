window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js'

document.querySelectorAll('[data-bs-toggle="tooltip"]').map(item=>new bootstrap.Tooltip(item))

console.log("اهلا بك ف متجر بالعربي")