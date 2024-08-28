let visor = document.getElementById('visor');

visor.style.color = "black";

function adicionarNoVisor(valor){
    visor.value += valor;   
}

function calcular(){
    
    try{
        let result = eval (visor.value)

        if(result < 0){
            visor.style.color = "red";
        }
        else if(result >=0){
            visor.style.color = "black";    
        }
        visor.value = result;
    }
    catch{

    }
}

function limparVisor(){
    visor.value = ""
}