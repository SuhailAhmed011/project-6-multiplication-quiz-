const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("Score");

let Score = JSON.parse(localStorage.getItem("Score"));

if(!Score){
    Score = 0;
}

ScoreEl.innerText = `Score: ${Score}`
questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        Score++;
        updateLocalStorage()
    }else{
        Score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("Score", JSON.stringify(Score));
}