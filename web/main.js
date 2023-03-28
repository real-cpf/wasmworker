
const text = document.querySelector('#url')
console.log(text)
if (window.Worker) {
    const myWorker = new Worker('worker.js')
    myWorker.postMessage(`test data`)
    myWorker.onmessage = function(e){
        console.log(e.data)
        // document.writeln(JSON.stringify(e.data))
    }
    text.onchange = function(){
        myWorker.postMessage(text.value)
    }
}