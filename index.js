let endDate = localStorage.getItem("textvalue")
const input = document.querySelectorAll("input")
const timeup = document.getElementById("timeup")

document.getElementById("date").innerText = endDate

function time(){
    const end = new Date(endDate)
    const present = new Date()
    const diff = (end - present) / 1000
    console.log(diff)

    if(diff < 0){
        timeup.innerText = "Timer is terminate, Your time has arrived !!!"
        return;
    }

    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600 % 24);
    input[2].value = Math.floor(diff / 60 % 60);
    input[3].value = Math.floor(diff) % 60;
}


setInterval(
    function interval(){
        time()
    }, 1000
)