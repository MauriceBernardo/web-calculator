var result = document.querySelector('.result');



document.querySelector('.main-number').addEventListener
('click', function(event) {
    result = event.target.innerText;  
})