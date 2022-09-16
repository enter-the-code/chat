const express = require("express");
const app = express();
const port = 8000;
const http = require("http").Server(app);
const io = require("socket.io")(http)
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('static'));
let fs=require("fs");
var user_data = {}
var bad_word = ["씨발", "새끼", "애미", "병신", "지랄", "좆"];
var bad_word_match = {
    "씨발": "귀여운",
    "새끼": "아이",
    "애미": "어머니",
    "병신": "어머",
    "지랄": "신나는",
    "좆": "요술봉"
}

app.get("/", (req, res) => {
    res.render("chat");
})


io.on("connection", function (socket) {
    socket.on("sendName", (msg) => {
        user_data[socket.id] = [msg, socket.id];
        console.log(user_data);
        socket.emit("sendName",socket.id);
        io.emit("enter", user_data[socket.id][0]);
        io.emit("member", user_data)
    })
    socket.on("imgfile",(msg)=>{
        console.log(msg);
        if (msg.name == "all") {
            console.log("recieve", msg);
            socket.broadcast.emit("recieveimg", msg)
        }
        else {
            console.log("receiveimgDM", msg);
            io.to(msg.name).emit("receiveimgDM", msg)
        }
    })
    socket.on("send", (msg) => {
        let res=fs.existsSync(`./img/${msg.msg}`)
        console.log(res);
        for (let index = 0; index < bad_word.length; index++) {
            var letter = bad_word[index]
            var regexAllCase = new RegExp(letter, "gi")
            msg.msg=msg.msg.replace(regexAllCase,bad_word_match[bad_word[index]])
        }
        if (msg.name == "all") {
            console.log("recieve", msg);
            socket.broadcast.emit("recieve", msg)
        }
        else {
            console.log("toyou", msg);
            io.to(msg.name).emit("toyou", msg)
        }
    })
    socket.on("disconnect", () => {
        io.emit("dis", `${user_data[socket.id][0]}님이 퇴장했습니다.`);
        delete user_data[socket.id];
        io.emit("member", user_data)
        console.log(user_data);
    })

})


http.listen(port, () => {
    console.log("connect success");
})