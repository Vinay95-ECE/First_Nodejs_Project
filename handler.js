const requestHandler=(req,res)=>{
console.log(req.url,req.method);
if(req.url==='/'){
  res.setHeader('Content-Type','text/html');
res.write(`
 <html >
<head>
  <title>Practice set</title>
</head>
<body>
<h1>Welcome to calculator</h1>
<a href="/calculator">Go to Calculator</a>
</body>
</html> 
  `);
res.end();
return;
}

else if(req.url.toLowerCase()==="/calculator"){
res.setHeader('Content-Type','text/html');
res.write(`
 <html >
<head>
  <title>Practice set</title>
</head>
<body>
<h1>Here is the calculator</h1>
<form action="/calculate-result" method="POST">
<input type="text" placeholder="Firset Num" name="first"/>
<input type="text" placeholder="Second Num" name="second"/>
<input type="submit" value="Sum">
</form>
</body>
</html> 
  `);
res.end();

}



//finding ele
 // also set elements 
res.setHeader('Content-Type','text/html');
res.write(`
 <html >
<head>
  <title>Practice set</title>
</head>
<body>
<h1>404 found</h1>
<a href="/">Go to home</a>
</body>
</html> 
  `);
res.end();
};

exports.requestHandler=requestHandler;


