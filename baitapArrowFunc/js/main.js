const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermilion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

window.changeColor = (color)=>{
    console.log(color);
    const houseEle = document.getElementById("house");
    houseEle.className = "house " + color;

}

const loadColorList = () => {
    const colorListHtml =  colorList.reduce((result, color , index) =>{
        if(index == 0){
            return result += `
                <button class="color-button ${color} active" onclick="changeColor('${color}')"></button> 
            `
        }
        else {
            return result += `
                <button class="color-button ${color}"  onclick="changeColor('${color}')"></button> 
            `
        }
    }, "");
    // console.log(colorListHtml);
    document.getElementById("colorContainer").innerHTML = colorListHtml;
};
loadColorList();
// changeColor();

