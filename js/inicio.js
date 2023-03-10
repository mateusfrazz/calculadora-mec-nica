function calcular() {
    const checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    let soma = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        soma += parseFloat(checkboxes[i].value);
    }
    const desconto = document.querySelector("#desconto");

    document.getElementById(
        "resultado"
    ).innerHTML = `<li>resultado:  ${soma.toFixed(3)}</li>`;
    desconto.addEventListener(
        "click",
        () => {
            for (let i = 0; i < checkboxes.length; i++)
                soma = parseFloat(checkboxes[i].value - (15 / 100) * soma);

            document.getElementById(
                "resultado"
            ).innerHTML = `<li>resultado:  ${soma.toFixed(3)}</li>`;
        }

        /*
            (document.getElementById(
                "resultado"
            ).innerHTML = `<li>resultado:  ${(soma -= 10)}</li>`)
            */
    );
}
const checkboxes = document.querySelector("input");
console.log(checkboxes);
