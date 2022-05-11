const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress--step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateProgressbar();
        updateFormSteps();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, index) => {
        if (index < formStepsNum + 1) {
            progressStep.classList.add("progress--step-active");
            console.log(index);
        } else {
            progressStep.classList.remove("progress--step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress--step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

/* PRE LOADER*/
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".display-content");

window.addEventListener("load", function() {
    setTimeout(() => {
        overlay.style.display = "none";
        content.style.display = "block";
    }, 2000);
});

function displayContent() {
    setTimeout(() => {
        content.style.classList.add(".display-content");
    }, 3000);
}