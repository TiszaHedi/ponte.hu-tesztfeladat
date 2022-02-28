"use strict";

(function () {
    const messageInput = document.getElementById('message');

    messageInput.onkeydown = function(e) {
        let counterInfo = document.querySelector('.contact-form__character-counter');
        let counter = this.value.length;
        let maxLength = 200;
    
        counterInfo.innerHTML = 'maximium 200 karakter - ' + (maxLength - counter) + ' maradt'
    }
})();

(function () {
    const inputs = document.querySelectorAll('.contact-form__input-field');
    const inputClass = ' filled';

    for(let i = 0; i < inputs.length; i++) {
        let elem = document.getElementById(inputs[i].id);
        inputs[i].addEventListener('keyup', function(e) {
            let value = e.target.value;
            elem.className = (value.length > 0) ? elem.className.replace(inputClass, '') + inputClass : elem.className.replace(inputClass, '');
        });
    };
})();

