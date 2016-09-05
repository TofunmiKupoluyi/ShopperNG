var gibberish= require("gibberish-aes/dist/gibberish-aes-1.0.0");
var express= require("express");
var app= express();
var encRouter = express.Router();
app.use("/gibberishTest", encRouter);
app.use(express.static("./static"));
app.use('/nodestatic',express.static("./node_modules"));
app.get("/", function(request, response){
    response.sendfile("./htmlWithGibberish.html");
});
app.listen(3000);
encRouter.get("/", function(request, response){
    var password= request.query.password;
    var decryptedPassword=gibberish.dec(password, "Password1234564567890-0987yuiuhygtfr");
    console.log(decryptedPassword);
    response.json({password: decryptedPassword});
});
enc= gibberish.enc("Hello", "Password");
console.log(gibberish.dec(enc,"Password"));