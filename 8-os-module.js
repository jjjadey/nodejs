const os = require('os');

//current user's info
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} sec`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
