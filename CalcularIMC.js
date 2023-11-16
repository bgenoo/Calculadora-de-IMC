function calcimc() {
    for (var i = 0; i<10; i++){
    var p1 = parseFloat(prompt('Peso pessoa '+(i+1)+' em quilos'));
    var h1 = parseFloat(prompt('Altura pessoa '+(i+1)+' em metros'));

    var imc = p1 / (h1*h1);
    if (imc < 18.5){
        alert('Abaixo do peso normal.');
    }
        else if (imc >= 18.5 && imc < 25){
            alert('Peso normal');
        }
            else if (imc >= 25 && imc < 30){
            alert('Excesso de peso');
            }
                else if (imc >= 30 && imc < 35){
            alert('Obesidade Classe I');
                }
                    else if (imc >= 35 && imc < 40){
            alert('Obesidade Classe II');
                    }
                        else if (imc >= 40){
            alert('Obesidade Classe III');
            }
    }
    
        
}
