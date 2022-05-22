const EstudanteModel = require('../../models/estudante/EstudanteModel');//importa o modelo de arquivo anterior

class EstudanteService{

    static register(req, res){
        EstudanteModel.create(req.body)
        .then(
            (estudante) =>{
                res.status(201).json(estudante);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static list(req, res){//req o que vem do cliente ou react, res é o que vai
        EstudanteModel.find()
        .then(
            (estudante) => {
                res.status(201).json(estudante);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static update(req, res){
        EstudanteModel.findByIdAndUpdate(req.params.id, req.body, {'new': true}).then(
            (estudante) =>{
                res.status(201).json(estudante);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static delete(req, res){
        EstudanteModel.findByIdAndRemove(req.params.id)
        .then(
            (estudante)=>{
                res.status(201).json(estudante);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    //retornar o usuário
    static retrieve(req, res){
        EstudanteModel.findById(req.params.id)
        .then(
            (estudante) =>{
                res.status(201).json(estudante);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    
}

module.exports = EstudanteService;