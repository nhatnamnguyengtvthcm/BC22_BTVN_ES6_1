const createSpan = (text)=>{
    const separteText = [ ...text ];
    console.log(separteText);
    return separteText.reduce((result, span)=>{
        return  result +=`
            <span>${span}</span>
        `
    }, "");

}
const jumpTest = ()=>{
    const hoverZone = document.getElementById("hover");
    const text = hoverZone.innerHTML;
    console.log(text);
    const newText = createSpan(text);
    console.log(`newText:${newText}`);
    hoverZone.innerHTML = newText;
};

jumpTest();