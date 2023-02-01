//Aqui é onde vai conter nosso servidor! 
//Criar e executar o servidor 

// 1 - Importar o express, por ser um modulo nativo, não precisa passar um caminho com ./; 
const express = require('express'); 
const path = require('path');
const router = require('./router');

// 2 - Criar o servidor ou aplicação, basta executar a função express; 
const servidor = express();

//Define a pasta public como sendo a pasta de arquivos estátiscos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 -  Definir roteador a ser utilizado
servidor.use(router);    

// 4 - Por o servidor no modo "aguardando requisição"  
servidor.listen(3000);

//Toda alteração que tiver no scprit deverá ser interrompido o servidor e iniciado ele novamente

