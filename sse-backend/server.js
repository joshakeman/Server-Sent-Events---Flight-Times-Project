const http = require('http')

http
    .createServer((req, res) => {
        console.log("Requested url: " + req.url)
    
    if (req.url.toLowerCase() === '/events') {
        res.writeHead(200, {
            Connection: "keep-alive",
            "Content-Type" : "text/event-stream",
            "Cache-Control": "no-cache"         
        })

        setTimeout(() => {
            res.write('data: {"flight": "I768", "state" : "landing"}')
            res.write("\n\n")
        }, 3000)

        setTimeout(() => {
            res.write('data: {"flight": "I768", "state" :"landed"}')
            res.write("\n\n")
        }, 6000)
    } else {
        res.writeHead(404)
        res.end()
    }
    })
    .listen(5000, () => {
        console.log("Server running at http://127.0.0.1:5000/")
    })