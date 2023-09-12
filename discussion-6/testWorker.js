console.log('testWorker.js loaded');

for(var i = 0 ; i <= 1000000000; i++){}
postMessage(i);
