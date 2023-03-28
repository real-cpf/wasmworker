

onmessage = function(e){
    console.log(`worker:Message Received `)
    const data = e.data
    if(data){
        if(String(data).startsWith('http')) {
            importScripts([data])
            this.postMessage(`done`)
        } else {

            const ok = `ok ${data}`
            this.postMessage(ok)
        }
    }else {
        
        this.postMessage(`NaN data`)
    }
}