function runNpm(command) {
console.log('Running `npm ' + command + '`...');
var child_process = require('child_process');
var npm = child_process.spawn('npm', [command]);
npm.stdout.on('data', function (data) {
process.stdout.write(data);
});
npm.stderr.on('data', function (data) {
process.stderr.write(data);
});
npm.on('close', function (code) {
if (!code) {
child_process.fork('app.js').disconnect();
}
});
