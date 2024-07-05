let date = new Date();
const GREET = document.querySelector("#greeting")
let hh = date.getHours();
if (hh>=0&&hh<12) {
    GREET.innerHTML="Good Morning!"
} else {
    GREET.innerHTML="Good Evening!"
}
let logo1 = document.querySelector(".logo1")
logo1.addEventListener("click", () => {
    // location.href = "https://pmshri.education.gov.in"
    window.open("https://pmshri.education.gov.in")
})
let logo2 = document.querySelector(".logo2")
logo2.addEventListener("click", () => {
    // location.href = "https://pmshri.education.gov.in"
    window.open("https://kvsangathan.nic.in")
})
let loader = document.querySelector(".loader")
function loading(q=5000) {
    loader.style.display = 'flex'
    setTimeout(()=>{loader.style.display="none"},q)
}
