// Dec's:
let intervalID = setInterval(startCount, 1000)
let click = 0;
let count = 0;


let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let pause = document.getElementById("pause");
let heart = document.getElementById("heart");
let span = document.createElement("span")

pause.addEventListener("click", pauseT)
plus.addEventListener("click", addT)
minus.addEventListener("click", minusT)
heart.addEventListener("click", liek)

// Funcs:
function startCount() {
    ++counter.textContent
}

function pauseT() {
    clearInterval(intervalID)
    minus.disabled = true;
    plus.disabled = true;
    pause.textContent = "resume";
    ++click
    if (click > 1) {
        resumeT()
    }
}

function resumeT() {
    document.location.reload()
}

function liek(e) {
    let likes = document.querySelector(".likes")
    let currentTime = counter.innerText;
    span.innerHTML++;
    let p = document.getElementById(currentTime);

    if (p) {
        let text = p.innerText;
        let textArray = text.split(" ");
        let number = Number(textArray.slice(-2, -1));
        p.innerHTML = `${currentTime} has been like ${number + 1} times`;
    } else {
        let p = document.createElement("p");
        p.setAttribute("id", currentTime);
        likes.appendChild(p);
        p.innerHTML = `${currentTime} has been liked 1 time`;
    }
}

function addT() {
    ++counter.textContent
}

function minusT() {
    --counter.textContent
}

//Commenting:
function commentBuilder(value) {
    let p = document.createElement("p");
    p.textContent = value
    document.getElementById("list").appendChild(p);
}

const form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    commentBuilder(e.target["comment-input"].value)
    form.reset();
})
