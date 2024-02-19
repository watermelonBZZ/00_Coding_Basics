const http = require('http')

const server = http.createServer((request, response) => {
    response.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>响应体联系</title>
    
        <style>
            tr:nth-child(odd) {
                background: #aef;
            }
    
            tr:nth-child(even) {
                background: #fcb;
            }
    
            td {
                width: 30vw;
                height: 5vh;
                border: 1px solid red;
            }
        </style>
    </head>
    
    <body>
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <script>
            const tds = document.querySelectorAll('td')
            tds.forEach((e) => {
                e.onclick = function () {
                    this.style.background = '#222'
                }
            })
        </script>
    </body>
    
    </html>`)
})

server.listen('9000', () => {
    console.log('running');
})