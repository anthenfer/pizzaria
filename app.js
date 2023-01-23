//Aqui é onde vai conter nosso servidor! 
//Criar e executar o servidor 

// 1 - Importar o express, por ser um modulo nativo, não precisa passar um caminho com ./; 
const express = require('express'); 
const path = require('path');

// 2 - Criar o servidor ou aplicação, basta executar a função express; 
const servidor = express();

//Define a pasta public como sendo a pasta de links estásticos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3- Definir uma rota nesse servidor, precisamos saber de 3 coisas:
// a) o endereço;
// b) o método (com suas possibilidades) - get, post, put, patch, delete;
// c) função callback (a ação que o servidor vai realizar quando req chegar); 
servidor.get('/', (req,res) =>{
    console.log("Chegou uma requisição!")
    //res.send("Permaneça em linha...");
    return res.sendFile(__dirname + '/views/index.html');
    //res.sendFile(__dirname + '/ envia um arquivo hmtl 
});

servidor.get('/carrinho', (req,res) =>{
    console.log("Chegou uma requisição!")
    //res.send("Permaneça em linha...");
    return res.sendFile(__dirname + '/views/carrinho.html');
    //res.sendFile(__dirname + '/ envia um arquivo hmtl 
});

servidor.get('/perfil',(req, res)=>{
    return res.sendFile(__dirname + "/views/perfil.html");
});

servidor.get('/cadastro',(req, res)=>{
    return res.sendFile(__dirname + "/views/cadastro.html");
});



// 4 - Por o servidor para rodar   
servidor.listen(3000);

//Para testar, ir no navegador e digitar: 
//localhost:3000/usuarios

//Toda alteração que tiver no scprit deverá ser interrompido o servidor e iniciado ele novamente

