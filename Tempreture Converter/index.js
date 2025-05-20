const celsiusEl = document.getElementById("celsius")
const fahrenhietEl = document.getElementById("fahrenhiet")
const kelvinEl = document.getElementById("kelvin")



function updateTempreture(event) {
    const currentValue = +event.target.value;
    console.log(currentValue);

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue +273.32).toFixed()
            fahrenhietEl.value = (currentValue * 1.8 + 32).toFixed()
           break;
        case "fahrenhiet":
            celsiusEl.value = ((currentValue -32)/1.8).toFixed()
            kelvinEl.value = ((currentValue -32)/1.8 + 273.32).toFixed()
           break;
        case "kelvin":
            fahrenhietEl.value = ((currentValue -273.32)* 1.8 + 32).toFixed();
             celsiusEl.value = ((currentValue -32)/1.8).toFixed()
           break;
    
        default:
            break;
    }
}