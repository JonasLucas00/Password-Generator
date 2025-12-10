class GeneratePassword {
    constructor() {
        this.formEvent()
    }

    generate(qntCaracteres) {
        let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let maiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let simbols = ['@', '$', '%', '&', '!', '?', '#', '*', '_', '-']

        let pass = []
        for (let n = 0; n <= qntCaracteres; n++) {
            pass.push(minusculas[Math.floor(Math.random() * 26)])
            if (pass.length == qntCaracteres) return pass.join('')

            pass.push(maiusculas[Math.floor(Math.random() * 26)])
            if (pass.length == qntCaracteres) return pass.join('')

            pass.push(numbers[Math.floor(Math.random() * 10)])
            if (pass.length == qntCaracteres) return pass.join('')

            pass.push(simbols[Math.floor(Math.random() * 10)])
            if (pass.length == qntCaracteres) return pass.join('')
        }
    }

    addContent(pass) {
        let section1Div = document.querySelector('.section-1');
        let passDiv = document.querySelector('.pass-div')

        passDiv.textContent = pass;
        section1Div.appendChild(passDiv)
    }

    formEvent() {
        let form = document.querySelector('.section-1-form');
        form.addEventListener('submit', (e) => {
            let qntCaracteres = document.querySelector('.qnt-Caracteres');
            e.preventDefault()

            qntCaracteres = Number(qntCaracteres.value);
            let pass = this.generate(qntCaracteres)
            this.addContent(pass)
            return console.log(pass)
        })
    }
}

let pass = new GeneratePassword()
// console.log(pass.generate(12))









