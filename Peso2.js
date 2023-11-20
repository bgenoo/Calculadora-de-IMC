function analisarIMCs(){
    var terminou = false
    var pimc30 = 0
    var totalPessoas = 0
    var somaIMCs = 0

while(terminou == false){
    totalPessoas++
    var peso = parseFloat(prompt('Digite o seu peso.'))
    var altura = parseFloat(prompt('Digite a sua altura.'))
    var imc = peso / altura ** 2;
    somaIMCs += imc
    alert('Peso da pessoa '+ imc);
    if(imc > 30) pimc30++

    var desejaTerminar = prompt('Deseja terminar? (S)im ou (N)ão')
    if(desejaTerminar == 'S' || desejaTerminar == 's'){
        terminou = true
        var media_imc = (somaIMCs / totalPessoas).toFixed(2)
        alert(`Programa finalizado.
        Quantidade de pessoas com IMC > 30: ${pimc30}
        Quantidade de pessoas avaliadas: ${totalPessoas}
        Média dos IMCs: ${media_imc}
        `)
    }
   }
} analisarIMCs()
