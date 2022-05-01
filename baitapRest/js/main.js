function getEleId(id){
    return document.getElementById(id);
}
const tinhDTB = (...diems) => {
    console.log(diems);
    let nums = 0;
    const tongDiem = diems.reduce((result, diem) => {
        nums+=1;
        return result + diem;
    }, 0);
    console.log(nums);
    console.log(tongDiem);
    return tongDiem / nums;
}

const TinhDiem = ()=>{
   
    const diemVan = getEleId("inpToan");
    const diemSu = getEleId("inpToan");
    const diemDia = getEleId("inpToan");
}

getEleId("btnKhoi1").addEventListener("click", ()=>{
    const diemToan = getEleId("inpToan").value * 1.0;
    const diemLy = getEleId("inpToan").value * 1.0;
    const diemHoa = getEleId("inpToan").value * 1.0;
    const dtb = tinhDTB(diemToan,diemLy,diemHoa);
    getEleId("tbKhoi1").innerHTML = dtb;
})

getEleId("btnKhoi2").addEventListener("click", ()=>{
    const diemVan = getEleId("inpToan").value * 1.0;
    const diemSu = getEleId("inpToan").value * 1.0;
    const diemDia = getEleId("inpToan").value * 1.0;
    const dtb = tinhDTB(diemVan,diemSu,diemDia);
    getEleId("tbKhoi2").innerHTML = dtb;
})