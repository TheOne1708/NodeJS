const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('.\\Content\\Subfolder\\textfile1','utf8')
const second = readFileSync('.\\Content\\textfile2','utf8')

writeFileSync(
    './Content/result-sync.txt',
    `The result !! = ${first}, ${second}`,
    {flag:'a'}
)