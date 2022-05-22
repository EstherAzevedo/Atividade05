var mongoose = require('mongoose');

var ProfessorSchema = mongoose.Schema(
    {
        nome: {type: String, required: true, max: 150 },
        curso: {type: String, required: true, max: 100},
        titulo: {type: String, required: true, max: 100}
    }
)

var ProfessorModel = mongoose.model('professores', ProfessorSchema);

module.exports = ProfessorModel;