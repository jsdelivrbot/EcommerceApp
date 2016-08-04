init = false;

var _server;
var dataManager;
var objectId;

exports.init = function( server , dataManagers ) {
    _server = server;
    dataManager = dataManagers;
    init = true;
}

exports.userSetup = function userSetup() {
    console.log("Setting up users.");
    _server.post('/api/v1/users/addUser' , dataManager.users.addUser );
    _server.post('/api/v1/users/loginUser' , dataManager.users.loginUser );
    _server.post('/api/v1/users/addItem' , dataManager.users.addItem );
    _server.get('/api/v1/users/getImage' , dataManager.users.getImage );
}
