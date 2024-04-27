const Analysis = require('../models/analysis-model');
 
module.exports.findAllAnalyses = (req, res) => {
    Analysis.find()
        .then((allDaAnalyses) => {
            res.json(allDaAnalyses)
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleAnalysis = (req, res) => {
    Analysis.findOne({ _id: req.params.id })
        .then(oneSingleAnalysis => {
            res.json(oneSingleAnalysis)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewAnalysis = (req, res) => {
    Analysis.create(req.body)
        .then(newlyCreatedAnalysis => {
            res.json(newlyCreatedAnalysis)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
module.exports.updateExistingAnalysis = (req, res) => {
    Analysis.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAnalysis => {
            res.json(updatedAnalysis)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingAnalysis = (req, res) => {
    Analysis.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });}