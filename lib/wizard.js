var inquirer = require('inquirer');
const database_defaults = require('../configs/database.defaults.json');

module.exports.run = function(onRunFunction){
    inquirer.prompt([{
        type: 'input',
        name: 'hostname',
        message: 'Hostname:',
        default: database_defaults.hostname
      },{
        type: 'input',
        name: 'port',
        message: 'Port:',
        default: database_defaults.port
      },{
        type: 'input',
        name: 'username',
        message: 'Password:',
        default: database_defaults.username
      },{
        type: 'input',
        name: 'database',
        message: 'Database:',
        default: database_defaults.database
      }
    ]).then(answers => {
        console.log(answers);
    });
}