var program = require('commander');
var wizard = require('../lib/wizard.js');

// program
//     .version();
// program
//     .command('dattosql <pathToDatFile>')
//     .alias('sql')
//     .description('Convert Datfile to SQL') 
//     .option('-d, --dest [destinationPath]', "Destination Path", "./")
//     .action(convertDatToSql);
// program
//     .command('dattojson <pathToDatFile>')
//     .alias('json')
//     .description('Convert Datfile to JSON') 
//     .option('-d, --dest [destinationPath]', "Destination Path", "./")
//     .action(convertDatToJson);
// program.parse(process.argv);
wizard.run(function(ar){
    console.log(ar);
})

function convertDatToSql(args){

}
function convertDatToJson(args){

}