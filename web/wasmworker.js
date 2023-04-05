
importScripts('wasm_exec.js')
function loadWasm(path) {
    const go = new Go()
    return new Promise((resolve, reject) => {
        WebAssembly.instantiateStreaming(fetch(path), go.importObject)
            .then(result => {
                go.run(result.instance)
                resolve(result.instance)
            })
            .catch(error => {
                reject(error)
            })
    })
}


onmessage = function(e){
    console.log(`wasm worker:Message Received `)
    const data = e.data
    if(data){
        if(String(data).endsWith('wasm')) {
            loadWasm(data).then(wasm=>{
                let res = go_task_func(12.324)
                this.postMessage(res)
            }).catch(e=>{
                console.log(e)
            })

        } else {
            this.postMessage(`need wasm`)
        }
    }else {
        
        this.postMessage(`NaN data`)
    }
}