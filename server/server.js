const {instrument} = require('@socket.io/admin-ui')
const io = require('socket.io')(3030, {
    cors:{
        origin: ['http://localhost:8080','https://admin.socket.io']
    }
})
const userIo = io.of('/user')
userIo.on('connection', socket=>{
    console.log('connected to user namespace with ' + socket.username);
})
userIo.use((socket,next)=>{
    if (socket.handshake.auth.token) {
        socket.username = getUsername(socket.handshake.auth.token)
        next()
    }else{
        next(new Error('Please send token'))
    }
})
function getUsername(token){
    return token
}
io.on('connection', socket => {
    console.log(socket.id);
    socket.on('send-message' , (message,room) =>{
        if(room === ''){
            socket.broadcast.emit('received-message',message)
        }else{
            socket.to(room).emit('received-message',message)
        }  
    })
    socket.on('join-room', (room , cb)=>{
        socket.join(room)
        cb(`Joined ${room}`)
    })
})

instrument(io, { auth: false })