//Aqui é onde vai conter nosso servidor! 
//Criar e executar o servidor 

// 1 - Importar o express, por ser um modulo nativo, não precisa passar um caminho com ./; 
const express = require('express'); 

// 2 - Criar o servidor ou aplicação, basta executar a função express; 
const servidor = express();

// 3- Definir uma rota nesse servidor, precisamos saber de 3 coisas:
// a) o endereço;
// b) o método (com suas possibilidades) - get, post, put, patch, delete;
// c) função callback (a ação que o servidor vai realizar quando req chegar); 
servidor.get('/usuarios', (req,res) =>{
    console.log("chegou uma requisição!")
    res.send("Aguarda mais um momento...");
});

// 4 - Por o servidor para rodar   
servidor.listen(3000);

//Para testar, ir no navegador e digitar: 
//localhost:3000/usuarios

//Toda alteração que tiver no scprit deverá ser interrompido o servidor e iniciado ele novamente

