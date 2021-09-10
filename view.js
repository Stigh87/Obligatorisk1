// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
         <svg id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         <hr>
         Valgt stolpe: <i>${chosenBar}</i>
         <br />
         Verdi:
         <input type="number" min="1" max="10" oninput="inputValue = this.value" />
         <button onclick="newBar()">Legg til stolpe</button>
         <button onclick="change(${chosenBar})" ${disabled}>Endre valgt stolpe</button><br />
         <button onclick="remove(${chosenBar})" ${disabled}>Fjerne valgt stolpe</button>
         `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6; //Endret fra 10 til 6 pga høyde på søyler over 7 ble like
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect onclick="mark(${barNo})"
                                            width="${width}" 
                                            height="${height}"                 
                                            x="${x}" 
                                            y="${y}" 
                                            stroke="${chosenBar == barNo ? "black" : ""}" 
                                            fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}