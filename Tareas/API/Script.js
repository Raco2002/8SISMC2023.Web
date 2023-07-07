const monedaE1_one = document.getElementById('moneda-uno');
const monedaE1_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioE1 = document.getElementById('cambio');
const tazaE1 = document.getElementById('taza');

function calculate(){
    const moneda_one = monedaE1_one.value;
    const moneda_two = monedaE1_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`).then(res => res.json())
    .then(data => {
        const taza = data.rates[moneda_two];

        cambioE1.innerText = `1 ${moneda_one} = ${taza} ${monedaE1_two}`;

        cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
    });
}

//Event listeners
monedaE1_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaE1_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaE1_one.value;
    monedaE1_one.value = monedaE1_two.value;
    monedaE1_two.value = temp;
    calculate();
});

calculate();