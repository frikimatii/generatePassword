const btngenerate = document.getElementById(`btnGenerate`)
const string = document.getElementById(`generatedPassword`)
const numero = document.getElementById(`inputLength`)
const demo = document.getElementById(`demo`)


numero.oninput = function(){
    demo.innerHTML = this.value
}


const generatePassword = (base, length) => {
    let password = "";
    for (let n = 0; n < length; n++) {
        let random = Math.floor(Math.random() * base.length)
        password += base.charAt(random)
    }
    return password
};



const generate = () => {
    let length = parseInt(inputLength.value)

    let minus = `abcdefghijkmnpqrtuvwxyz`
    let mayus = `ABCDEFGHIJKLMNPQRTUVWXYZ`
    let num = `1234567890`
    let symbo = `!"#$%&'()*+,-./:;<=>?@[]^_|~`

    if (checkbox1.checked) minus += mayus

    if (checkbox2.checked) minus += num

    if (checkbox3.checked) minus += symbo

    string.innerText = generatePassword(minus , length)
}
btngenerate.addEventListener(`click`, () => {
    generate();
})





