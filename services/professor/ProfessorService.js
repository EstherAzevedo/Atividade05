const ProfessorModel = require('../../models/professor/ProfessorModel');//importa o modelo de arquivo anterior

class ProfessorService{

    static register(req, res){
        ProfessorModel.create(req.body)
        .then(
            (professor) =>{
                res.status(201).json(professor);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static list(req, res){//req o que vem do cliente ou react, res é o que vai
        ProfessorModel.find()
        .then(
            (professor) => {
                res.status(201).json(professor);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static update(req, res){
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {'new': true}).then(
            (professor) =>{
                res.status(201).json(professor);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    static delete(req, res){
        ProfessorModel.findByIdAndRemove(req.params.id)
        .then(
            (professor)=>{
                res.status(201).json(professor);
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
        ProfessorModel.findById(req.params.id)
        .then(
            (professor) =>{
                res.status(201).json(professor);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
    
}

module.exports = ProfessorService;