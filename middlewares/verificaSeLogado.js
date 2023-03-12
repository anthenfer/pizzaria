const verificaSeLogado = (res, req, next) => {
    //Verificar se o usúario está logado
    if(req.session.admLogado){
        next();
    } else {
        res.redirect('/adm/login')
    }
}

module.exports = verificaSeLogado;