import http from "http"

async function init() {
    const httpServer = http.createServer()
    const PORT = process.env.PORT ? process.env.PORTv: 8000

    httpServer.listen(PORT, () => console.log(`HTTP Server at Port: ${PORT}`))
    
}
init()