var os = require('os');
var colors = require('colors');

process.stdin.setEncoding('utf-8');

function getOsInfo() {
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    console.log('Release:'.red, release);
    console.log('CPU model:'.yellow, cpu);
    console.log('Uptime: ~'.blue, (uptime / 60).toFixed(0), 'min');
    console.log('User name:'.black, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

/*
function rainbow() {

    console.log('hej');
    console.log('hello'.green);
    console.log('i like cake and pies'.underline.red);
    console.log('inverse the color'.inverse);
    console.log('OMG Rainbows!'.rainbow);
    console.log('Run the trap'.trap);
} */


//getOsInfo();

exports.print = getOsInfo;
//exports.print = rainbow;

