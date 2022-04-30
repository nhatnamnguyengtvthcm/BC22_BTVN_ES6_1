const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermilion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const loadColorList = () => {
    const colorListHtml =  colorList.reduce((result, color , index) =>{
        if(index == 0){
            return result += `
                <button class="color-button ${color} active"></button> 
            `
        }
        else {
            return result += `
            <button class="color-button ${color}"></button> 
            `
        }
    }, "")
    console.log(colorListHtml);
    document.getElementById("colorContainer").innerHTML = colorListHtml;
};
loadColorList();