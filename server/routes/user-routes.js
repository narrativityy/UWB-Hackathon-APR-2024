const UserController = require('../controllers/user-controller');
 
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.get('/api/users/jwt/:id', UserController.findUserWithJWT)
    app.patch('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/logout', UserController.logout);
    app.post('/api/users/register', UserController.register);
}