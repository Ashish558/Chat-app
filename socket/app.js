

const io = require("socket.io")(4100, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUser = (userId, socketId) => {
    if (!userId && !socketId) return
    if (users.find((user) => user.userId === userId)) return
    users.push({ userId, socketId })
    console.log('users len :' + users.length)
}

const removeUser = (socketId) => {
    users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

io.on("connection", (socket) => {
    //when connect
    console.log("a user connected " + socket.id)

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    })

    //join a room
    socket.on("joinRoom", ({ roomId, roomName }) => {
        socket.join(roomId);
    })

    //send and get message
    socket.on("sendMessage", ({ sender, chatRoomId, text }) => {
        const user = getUser(sender._id)
        // console.log(sender, text)
        if (!user) return
        io.in(chatRoomId).emit("getMessage", {
            sender,
            chatRoomId,
            text
        });
    })

    //when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });

});
console.log('socket runnin')