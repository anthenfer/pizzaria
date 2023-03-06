const registraRequisicao = (req, res) => {
    console.log(`${req.ip} - ${(new Date()).toISOString()} - ${req.url}`);
    next();
}

module.exports = registraRequisicao;