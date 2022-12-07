let currentPrice, currentMarge, newMarge, purschasePrice, newPrice;
const result = document.querySelector('.marge__result span');
const showNewMarge = document.querySelector('.marge__subtitle span');

function calcMarge() {
    if (!currentPrice || !currentMarge || !newMarge){
        result.textContent = '____';
    } else {
    purschasePrice = currentPrice - (currentPrice * currentMarge / (currentMarge + 100));
    newPrice = purschasePrice + ((purschasePrice / 100) * newMarge);
    result.textContent = newPrice.toFixed(2);
    showNewMarge.textContent = newMarge;
}
}

function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replaceAll(/[A-Za-zА-Яа-я ]+/g, '');
        switch(input.getAttribute('id')) {
            case 'marge__current-price':
                currentPrice = +input.value;
                break;
            case 'marge__current-percent':
                currentMarge = +input.value;
                break;
            case 'marge__new-percent':
                newMarge = +input.value;
                break;
        }  
        calcMarge();  
    });
}

getDynamicInformation('#marge__current-price');
getDynamicInformation('#marge__current-percent');
getDynamicInformation('#marge__new-percent');
calcMarge();