const calcular = document.getElementById("calcular")


function calculaIMC(){
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")
    const imcCalcula = peso / (altura * altura)
    let classificacao = "";
 
        if(nome !=="" && altura !=="" && peso !== "") { 
          
        if(imcCalcula < 18){
            classificacao = "Abaixo do peso"
        }else if(imcCalcula < 25){
            classificacao = "Com peso ideial. Parabéns!"
        }else if(imcCalcula < 30){
            classificacao = "Levemente a cima do peso."
        }else if(imcCalcula < 40){
            classificacao = "Com obesidade"
        }else if(imcCalcula > 40){
            classificacao = "Com obesidade grau III. Cuidado!!"
        }else {
            classificacao = "Por favor, preencha todos os campos!!!"
        }

        resultado.textContent = `${nome}, seu IMC é ${imcCalcula.toFixed(1)} é você está ${classificacao} `    
}else(
    resultado.textContent = `Por favor, preencha todosos campos!!!`
) 

 }
   

calcular.addEventListener("click",calculaIMC)


