function startWorker(){
    document.getElementById('answer').innerHTML = 'Worker running in background';
    let worker = new Worker('testWorker.js');
    worker.postMessage('start');
    worker.onmessage = function(event){
        document.getElementById('answer').innerHTML = 'Worker executed: ' + event.data;  
    }
}

function changeColor(){
    if(document.getElementById('answer').style.backgroundColor == 'red'){
        document.getElementById('answer').style.backgroundColor = 'green'
    }else{
        document.getElementById('answer').style.backgroundColor = 'red'
    }
}