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
            case 'current-price':
                currentPrice = +input.value;
                break;
            case 'current-marge':
                currentMarge = +input.value;
                break;
            case 'new-marge':
                newMarge = +input.value;
                break;
        }  
        calcMarge();  
    });
}

getDynamicInformation('#current-price');
getDynamicInformation('#current-marge');
getDynamicInformation('#new-marge');
calcMarge();