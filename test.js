const { fork } = require('child_process');

let child = fork('./generatedModule.js', [], {
    stdio: 'pipe'
});
child.stdout.on('data', (data) => {
    console.log(data);
});
child.stderr.on('data', (data) => {
    console.log(data.toString());
});