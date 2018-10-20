var PORT=process.env.PORT||5000;
var http=require('http');
var fs=require('fs');
var path=require('path');

http.createServer(function(req,res){

if(req.url==="/")
{
    fs.readFile("./index.html","UTF-8",function(err,html){res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html)
    });
}else if(req.url.match("\.css$"))
{
    var cssPath=path.join(__dirname,'',req.url);
    var fileStream=fs.createReadStream(cssPath,"UTF-8");
    res.writeHead(200,{"Content-Text":"text/css"});
    fileStream.pipe(res);
  
}
else if(req.url.match("\.png"))
{

    var imagePath=path.join(__dirname,'',req.url);
    var fileStream=fs.createReadStream(imagePath);
    res.writeHead(200,{"Content-Type":"image/png"});
    fileStream.pipe(res);

}
else if(req.url.match("\.jpg"))
{
    
    var image2Path=path.join(__dirname,'',req.url);
    var fileStream=fs.createReadStream(image2Path);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    fileStream.pipe(res);
    
}
else
{
    res.writeHead(404,{"Content-Type":"text/html"});
    res.end("page not found");
}
// console.log(req.url);
}).listen (PORT,function(){
    console.log("server running at "+ PORT);

});
