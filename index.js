var getOsInfo = require('./modules/osInfo');

var colors = require('colors');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/getOsInfo':
                getOsInfo.print();
                break;
            case '/rainbow':
                rainbow.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
