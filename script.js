let currentPrice, currentMarge, newMarge, purschasePrice, newPrice;
const result = document.querySelector('.calculating__result span');
const showNewMarge = document.querySelector('.calculating__subtitle span');    

function calcMarge() {
    if (!currentPrice || !currentMarge || !newMarge){
        result.textContent = '____';
        return;
    } else {
    purschasePrice = currentPrice - (currentPrice * currentMarge / (currentMarge + 100));
    newPrice = purschasePrice + ((purschasePrice / 100) * newMarge);
    result.textContent = newPrice.toFixed(2);
    showNewMarge.textContent = newMarge;
}
}

function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
        switch(input.getAttribute('id')) {
            case 'marge-current-price':
                currentPrice = +input.value;
                break;
            case 'current-marge-percent':
                currentMarge = +input.value;
                break;
            case 'new-marge-percent':
                newMarge = +input.value;
                break;
        }  
        calcMarge();  
    });
}

getDynamicInformation('#marge-current-price');
getDynamicInformation('#current-marge-percent');
getDynamicInformation('#new-marge-percent');
calcMarge();