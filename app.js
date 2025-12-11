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
        let copyBtnDiv = document.querySelector('.copy-btn-div');
        let copyBtn = document.createElement('button');
        let passwordText = document.querySelector('.password-text');
        let oldBtn = document.querySelector('.copy-btn');

        if (oldBtn) {
            oldBtn.remove()
        }

        passwordText.textContent = pass
        passwordText.classList.add('password-text-style')
        copyBtn.textContent = 'Copiar'
        copyBtn.classList.add('copy-btn')
        copyBtnDiv.appendChild(copyBtn)

        copyBtn.addEventListener('click', () => {
            let text = passwordText.textContent

            navigator.clipboard.writeText(text)
                .then(() => {
                    alert("Senha copiada!");
                })
                .catch(err => {
                    console.error("Erro ao copiar: ", err);
                });

        })

    }

    formEvent() {
        let form = document.querySelector('.section-1-form');
        form.addEventListener('submit', (e) => {
            let qntCaracteres = document.querySelector('.qnt-Caracteres');
            e.preventDefault()

            qntCaracteres = Number(qntCaracteres.value);
            let pass = this.generate(qntCaracteres)
            this.addContent(pass)
            return

        })
    }
}

let pass = new GeneratePassword()










