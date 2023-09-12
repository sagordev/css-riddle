onmessage = (e) => {
    console.log('Worker Started with Command: ', e.data);
    for(var i = 0 ; i <= 1000000000; i++){}
    postMessage(i);
}
