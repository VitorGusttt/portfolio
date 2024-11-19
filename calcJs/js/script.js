function Calculadora(){
    //valores privados
    const display = document.querySelector('#result')

    //metodos publicos
    this.iniciaCalc = () =>{
        this.pegaClick()
    };

    this.pegaClick = () => {
        document.addEventListener('click', (e) => {
            let el = e.target
            if (el.classList.contains('btn-num')){
                this.adicionaDisplay(el.innerText)
            };

            if (el.classList.contains('btn-clear')){
                this.clear()
            };

            if (el.classList.contains('btn-eq')){
                this.fazConta();
            };
        })
    };

    this.adicionaDisplay = (valor) =>{
        display.value += valor;
    };

    this.clear = () =>{
        display.value = '';
    };

    this.fazConta = () => {
        
        try {
            let valoresDisplay = eval(display.value);
            if (!valoresDisplay){
                alert('erro');
                this.clear();
                return;
            };
            display.value = valoresDisplay
        }
        catch(err){
            alert('erro');
            this.clear();
            return;
        };
    };

};

const calc = new Calculadora()
calc.iniciaCalc()