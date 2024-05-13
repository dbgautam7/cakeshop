const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1802006",
  key: "d87e12a3717801b510f3",
  secret: "0126314e2e46f7a4f797",
  cluster: "ap2",
  useTLS: true
});
console.log("pusher called");

setInterval(()=>{
    pusher.trigger("my-channel", "my-event", {
        message: "hello world"
      });
},3000)
