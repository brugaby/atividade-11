function mostrarnome(nome, idade) {
    let nome= document.querySelector ('nome')
    let idade= document.querySelector ('idade')
    let textonovo= document.createTextNode (`ola sua idade é ${idade} e sue nome é ${nome}`)
}

let botaook = boasvindas.querySelector("#botao");
botaook.onclick = mostrarnome