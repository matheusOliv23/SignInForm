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

/* VALIDAÇÃO */

function validarForm() {
    // pegando o valor do nome pelos names 
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const senha = document.getElementById("password");
    const dominio = document.getElementById("dominio");
    const telefone = document.getElementById("telefone");
    const newsletter = document.getElementById("newsletter").checked;

    const errorNome = document.getElementById("errorNome");
    const errorEmail = document.getElementById("errorEmail");
    const errorSenha = document.getElementById("errorSenha");
    const errorDominio = document.getElementById("errorDominio");
    const errorTelefone = document.getElementById("errorTelefone");
    const errorNews = document.getElementById("errorNews");


    if (nome.value == "" || nome.value.length < 3) {
        alert('O nome precisa ter pelo menos 3 caracteres')
        nome.focus();
        return;
    }

    if (email.value == "") {
        alert("Por favor, insira corretamente o seu email");
        email.focus();
        alert('email incorreto')
        return;
    }

    // if (senha.value == "") {
    //     errorSenha.innerHTML = "Por favor, insira corretamente o seu email";
    //     senha.focus();
    //     alert("email incorreto");
    //     return;
    // }

    // const nome = document.getElementById("nome");

    // if (nome.value.length == 0) {
    //     msgErrp.innerHTML = "O nome deve ser informado";
    // } else {
    //     msgErrp.innerHTML = "";
    // }
}

/*SELECIONAR NECESSIDADES */
const rh = document.getElementById("rh");
const finance = document.getElementById("finance");
const tele = document.getElementById("tele");
const juri = document.getElementById("juri");
const logistic = document.getElementById("logistic");
const education = document.getElementById("education");
const health = document.getElementById("health");
const others = document.getElementById("others");

rh.addEventListener("click", () => {
    rh.classList.add("add-border-select");
});

finance.addEventListener("click", () => {
    finance.classList.add("add-border-select");
});

tele.addEventListener("click", () => {
    tele.classList.add("add-border-select");
});

juri.addEventListener("click", () => {
    juri.classList.add("add-border-select");
});

education.addEventListener("click", () => {
    education.classList.add("add-border-select");
});

logistic.addEventListener("click", () => {
    logistic.classList.add("add-border-select");
});

health.addEventListener("click", () => {
    health.classList.add("add-border-select");
});

others.addEventListener("click", () => {
    others.classList.add("add-border-select");
});