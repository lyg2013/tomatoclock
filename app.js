var http = require('http')
  , io = require('socket.io')
  , time = require('./time');

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("hello Nodejs!");
    res.end();
}).listen(3000);

var ws = io.listen(app);
ws.on('connection', function(socket) {
    var timeInterval;
    socket.send('hello client!')
    
    socket.on('setTime', function(data) {
	var hours = parseInt(data[0]);
	var minutes = parseInt(data[1]);
	var seconds = parseInt(data[2]);
	var totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

	timeInterval = setInterval(function() {
	    var result = (--totalSeconds) * 1000;
	    hours = time.timeDeltaInHours(result);
	    minuts = time.timeDeltaInMinuts(result);
	    seconds = time.timeDeltaInSeconds(result);
	    if (hours<=0 && minuts<=0 && seconds <=0 ) {
		clearInterval(timeInterval);
	    }
	    socket.emit('serverTime', [hours, minuts, seconds]);
	}, 1000);
	
    });
    
    socket.on('clearTime', function() {
	clearInterval(timeInterval);
    });
})
