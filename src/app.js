const button = document.getElementById('button');
const formulario = document.getElementById('formulario');
const button2 = document.getElementById('clickme-button');

window.addEventListener('load', function() {
    alert('Welcome to my portafolio User!');
});

button2.addEventListener('click', function() {
    if (button2.textContent === 'You clicked the button!') {
        button2.textContent = 'Click me!';
    }
    else{
        button2.textContent = 'You clicked the button!';
    }

});

