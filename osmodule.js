const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`The system uptime is : ${os.uptime()} secs`)
const currentOS = {
    name : os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totMem: os.totalmem(),
}
console.log(currentOS)