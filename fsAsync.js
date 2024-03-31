const {readFile , writeFile} = require('fs')

console.log('start(1)')

readFile('.\\Content\\SubFolder\\textfile1','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('.\\Content\\textfile2','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('.\\Content\\result-async.txt',`The result = ${first + second}`,{flag:'a'},(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log('Finished!(2)')
        })
    })
}
)
console.log('starting new task(3)')