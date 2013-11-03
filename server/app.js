var io = require('socket.io').listen(8011);

// var chat = io
//   .of('/chat');

io.sockets.on('connection', function(client){
  client.emit('message', { message: 'welcome to chat' });
  client.on('send', function(data){
    console.log('client.send: ', data);
    io.sockets.emit('message', data);
  });
});

// var news = io
//   .of('/news')
//   .on('connection', function(socket){
//     socket.emit('item', { news: 'item' });
//   });