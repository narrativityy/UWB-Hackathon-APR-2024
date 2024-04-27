const mongoose = require('mongoose');
 
const AnalysisSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true,
    },
    response: {
        type: String
    }
}, {timestamps: true});
 
const Analysis = mongoose.model('Analysis', AnalysisSchema);
 
module.exports = Analysis;