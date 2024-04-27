const OpenAIController = require('../controllers/open-ai-controller');
 
module.exports = app => {
    app.post('/api/send-message', OpenAIController.sendMessage);
}