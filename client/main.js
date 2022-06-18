const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn =document.getElementById("fortuneButton")
const submitBtn= document.getElementById("submitButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
});
}
const pickArmour = () =>{
    axios.get("http://localhost:4000/api/armour")
    .then(res => {
        const data = res.data;
        alert(data);
});
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click',)