const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const btnCalcular =
    document.getElementById("btnCalcular");

const resultado =
    document.getElementById("resultado");

const mediaFinal =
    document.getElementById("mediaFinal");

const mensagemResultado =
    document.getElementById("mensagemResultado");

const lembrarNotas =
    document.getElementById("lembrarNotas");


// =====================================
// CALCULAR
// =====================================

function calcularMedia() {

    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);


    if (
        nota1.value === "" ||
        nota2.value === "" ||
        nota3.value === ""
    ) {

        alert("Preencha todas as notas.");

        return;
    }


    if (
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {

        alert(
            "Digite notas entre 0 e 10."
        );

        return;
    }


    const media =
        (n1 + n2 + n3) / 3;


    mediaFinal.textContent =
        media.toFixed(1).replace(".", ",");


    if (media >= 7) {

        mensagemResultado.textContent =
            "Você está aprovado!";

    } else if (media >= 5) {

        mensagemResultado.textContent =
            "Você está em recuperação.";

    } else {

        mensagemResultado.textContent =
            "É necessário melhorar sua média.";

    }


    resultado.classList.add("ativo");


    // Salvar

    if (lembrarNotas.checked) {

        localStorage.setItem(
            "nota1",
            n1
        );

        localStorage.setItem(
            "nota2",
            n2
        );

        localStorage.setItem(
            "nota3",
            n3
        );

    }

}


// =====================================
// BOTÃO
// =====================================

btnCalcular.addEventListener(
    "click",
    calcularMedia
);


// =====================================
// ENTER
// =====================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            calcularMedia();
        }

    }
);


// =====================================
// CARREGAR DADOS
// =====================================

function carregarNotas() {

    const n1 =
        localStorage.getItem("nota1");

    const n2 =
        localStorage.getItem("nota2");

    const n3 =
        localStorage.getItem("nota3");


    if (
        n1 !== null &&
        n2 !== null &&
        n3 !== null
    ) {

        nota1.value = n1;
        nota2.value = n2;
        nota3.value = n3;

        lembrarNotas.checked = true;

    }

}


carregarNotas();


// =====================================
// REMOVER DADOS
// =====================================

lembrarNotas.addEventListener(
    "change",
    function() {

        if (!this.checked) {

            localStorage.removeItem("nota1");
            localStorage.removeItem("nota2");
            localStorage.removeItem("nota3");

        }

    }
);
