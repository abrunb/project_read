const http = require('http')
const host = 'localhost';
const port = 8080;

const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    const foo = await fs.readFile(__dirname + "/list.csv")
    res.writeHead(200);
    res.end(foo);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
