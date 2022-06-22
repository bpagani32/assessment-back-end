// const complimentBtn = document.getElementById("complimentButton")
// const fortuneBtn = document.getElementById("fortuneButton")
const submitBtn= document.getElementById("submitButton")



const baseURL = "http://localhost:4000"
const getCompliment = () => {
    axios.get(baseURL + "/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
        .then((res) => {
            alert(res.data)
        })
    }

// const pickArmour = (event) =>{
//     event.preventDefault()
//     axios.get("http://localhost:4000/api/armour")
//    alert(data)
//    console.log(event)
// }

window.onload=function(){
    const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
    complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
}
// complimentBtn.addEventListener('click', getCompliment)
// fortuneBtn.addEventListener('click', getFortune)
// submitBtn.addEventListener('click', pickArmour)