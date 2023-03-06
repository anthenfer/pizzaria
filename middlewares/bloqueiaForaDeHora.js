const bloqueiaForaDeHora = (req,res, next) => {

    let hora = (new Date()).getHours();

    if(hora <= 18){
        res.send("Volte mais tarde!");
        // res.render('fora-de-hora.ejs'); // Aconselhado
    } else {
        next();
    };
}

module.exports = bloqueiaForaDeHora;
  

// Criar middleware bloqueiaForaDeHora
// Verificar se hora é maior que 0 e menor 19
// Nesse caso, mandar mensagem de "Volte mais tarde"
// Caso contrário, deixar req ir adiante...