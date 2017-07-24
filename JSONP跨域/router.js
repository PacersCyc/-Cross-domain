app.get('/getNumbers',function(req,res){
	var numbers = [];
	for(var i=0;i<3;i++){
		numbers[i] = parseInt(Math.random()*10);
	}

	var cb = req.query.callback;
	if(cb){
		res.send(cb+'('+JSON.stringify(numbers)+')');
	}else{
		res.send(numbers);
	}
})