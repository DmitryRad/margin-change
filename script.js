let currentMargePrice, currentMargePercent, newMarge, purchasePrice, newPrice, proportionCurrentWeight,
    proportionCurrentPrice, newWeight;

const margeResult = document.querySelector('.calculating__marge-result span');
const showNewMarge = document.querySelector('.calculating__marge-subtitle span');
const showProportionResult = document.querySelector('.calculating__price-of-one-result span');
const proportionPieceResult = document.querySelector('.calculating__price-of-piece-result span');
const showNewProportion = document.querySelector('.calculating__subtitle-piece span');

function calcMarge() {
    if (!currentMargePrice || !currentMargePercent || !newMarge) {
        margeResult.textContent = '____';
    } else {
        purchasePrice = currentMargePrice - (currentMargePrice * currentMargePercent / (currentMargePercent + 100));
        newPrice = purchasePrice + ((purchasePrice / 100) * newMarge);
        margeResult.textContent = newPrice.toFixed(2);
        showNewMarge.textContent = newMarge;
    }
}

function calcProportion() {
    if (!proportionCurrentWeight || !proportionCurrentPrice) {
        showProportionResult.textContent = '____';
    } else {
        let proportionResult = (proportionCurrentPrice * 1) / proportionCurrentWeight;
        showProportionResult.textContent = proportionResult.toFixed(2);

     if (!newWeight) {
         showNewProportion.textContent = '____';
         proportionPieceResult.textContent = '____';
     } else {
      let newWeightResult = proportionResult * newWeight;
      showNewProportion.textContent = newWeight;
      proportionPieceResult.textContent = newWeightResult.toFixed(2);
    }
    }
}

function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replaceAll(/[A-Za-zА-Яа-я ]+/g, '');
        switch (input.getAttribute('id')) {
            case 'current-marge-price':
                currentMargePrice = +input.value;
                break;
            case 'current-marge-percent':
                currentMargePercent = +input.value;
                break;
            case 'new-marge-percent':
                newMarge = +input.value;
                break;

            case 'proportion-current-weight':
                proportionCurrentWeight = +input.value;
                break;
            case 'proportion-current-price':
                proportionCurrentPrice = +input.value;
                break;
            case 'proportion-new-weight':
                newWeight = +input.value;
                break;
        }
        calcMarge();
        calcProportion();
    });
}

getDynamicInformation('#current-marge-price');
getDynamicInformation('#current-marge-percent');
getDynamicInformation('#new-marge-percent');
getDynamicInformation('#proportion-current-weight');
getDynamicInformation('#proportion-current-price');
getDynamicInformation('#proportion-new-weight');
calcMarge();