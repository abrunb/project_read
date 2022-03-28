const fs = require("fs")
const Papa = require("papaparse")

const readCsv = (input_stream) => {
    return new Promise((resolve, reject) => {
        let count = 0

        Papa.parse(input_stream, {
            header: true,
            step(row) {
                if (count === 0) {
                    console.log(row)
                }
                ++count
            },
            complete() {
                resolve(count)
            },
            error(err) {
                reject(err)
            },
            delimiter: ','
        })
    })
}

async function main() {
    const input_file = 'list.csv'
    const input_stream = fs.createReadStream(input_file)


    console.log("a")
    
    const count = await readCsv(input_stream)
    
    console.log("c", count)
}

main()