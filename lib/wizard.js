var inquirer = require('inquirer');
const database_defaults = require('../configs/database.defaults.json');

var dbQuestions = require("../configs/database.questions.json");
module.exports.run = function(onRunFunction){
    inquirer.prompt(dbQuestions).then(answers => {
        console.log(answers);
    });
}