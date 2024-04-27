const AnalysisController = require('../controllers/analysis-controller');
 
module.exports = app => {
    app.get('/api/analyses', AnalysisController.findAllAnalyses);
    app.get('/api/analyses/:id', AnalysisController.findOneSingleAnalysis);
    app.patch('/api/analyses/:id', AnalysisController.updateExistingAnalysis);
    app.post('/api/analyses', AnalysisController.createNewAnalysis);
    app.delete('/api/analyses/:id', AnalysisController.deleteAnExistingAnalysis);
}