function convertTemperature() {
    let temp = parseFloat(document.getElementById('tempInput').value);
    let fromUnit = document.getElementById('tempUnitFrom').value;
    let toUnit = document.getElementById('tempUnitTo').value;
    let result = document.getElementById('result');

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let convertedTemp;

    // Convert input to Celsius first
    if (fromUnit === 'celsius') {
        convertedTemp = temp;
    } else if (fromUnit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
    } else if (fromUnit === 'kelvin') {
        convertedTemp = temp - 273.15;
    }

    // Now convert from Celsius to the desired output unit
    if (toUnit === 'celsius') {
        result.innerHTML = `${temp}° ${fromUnit} = ${convertedTemp.toFixed(2)}° Celsius`;
    } else if (toUnit === 'fahrenheit') {
        let fahrenheit = (convertedTemp * 9/5) + 32;
        result.innerHTML = `${temp}° ${fromUnit} = ${fahrenheit.toFixed(2)}° Fahrenheit`;
    } else if (toUnit === 'kelvin') {
        let kelvin = convertedTemp + 273.15;
        result.innerHTML = `${temp}° ${fromUnit} = ${kelvin.toFixed(2)} Kelvin`;
    }
}


