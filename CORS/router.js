app.get('/getNumbers',function(req,res){
	var numbers = [];
	for(var i=0;i<3;i++){
		numbers[i] = parseInt(Math.random()*100);
	}

	res.header('Access-Control-Allow-Origin','http://a.c.com:8080');
	//res.header('Access-Control-Allow-Origin','*');
	//*表示任意域名
	res.send(numbers);
})