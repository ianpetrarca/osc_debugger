const vorpal = require('vorpal')();
var osc = require('node-osc');


vorpal.command('start server')
  .action(function (args, cb) {
    var self = this;

    var promise = this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name: '
      },
      {
        type: 'input',
        name: 'address',
        message: 'Address: '
      },
      {
        type: 'input',
        name: 'port',
        message: 'Port: '
      }
    ], function (answers) {
        var serverName = answers.name;
        var oscServer = new osc.Server(answers.port, answers.address);
        oscServer.on("message", function (msg, rinfo) {
              console.log(msg);
        });
    });

    promise.then(function(answers) {
        self.log(answers.name + ' started on: ' + answers.address + ":" + answers.port );
      cb();
    });
  });



  vorpal.command('start client')
    .action(function (args, cb) {
      var self = this;

      var promise = this.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Name: '
        },
        {
          type: 'input',
          name: 'address',
          message: 'Address: '
        },
        {
          type: 'input',
          name: 'port',
          message: 'Port: '
        }
      ], function (answers) {
          var serverName = answers.name;
          var address = answers.address;
          var port= answers.port;
          var client = new osc.Client(address, port);
          client.send('/oscAddress', 200, function () {
              client.kill();
          });
      });

      promise.then(function(answers) {
          self.log(answers.name + ' started on: ' + answers.address + ":" + answers.port );
        cb();
      });
    });


    vorpal.command('send group')
     .action(function (args, cb) {
       var self = this;

       var promise = this.prompt([
         {
           type: 'input',
           name: 'message',
           message: 'Message:'
         },
         {
           type: 'input',
           name: 'time',
           message: 'Interval (Ms): '
         }
       ], function (answers) {
           var client = new osc.Client('127.0.0.1', 3333);
           setInterval(function(){
             client.send(answers.message);
          }, answers.time);

       });

       promise.then(function(answers) {
           self.log('OSC Server started on: ' + answers.address + ":" + answers.port );
         cb();
       });
     });

     vorpal.command('send message')
      .action(function (args, cb) {
        var self = this;

        var promise = this.prompt([
          {
            type: 'input',
            name: 'message',
            message: 'Message:'
          },
          {
            type: 'input',
            name: 'arg',
            message: 'Argument:'
          },
          {
            type: 'input',
            name: 'address',
            message: 'Address: '
          },
          {
            type: 'input',
            name: 'port',
            message: 'Port: '
          }



        ], function (answers) {
            var message = answers.message;
            var argument = answers.arg;
            var address = answers.address;
            var port= answers.port;
            var client = new osc.Client(address, port);
            client.send(message, argument, function () {
                client.kill();
            });



        });

        promise.then(function(answers) {
            self.log('OSC Server Client on: ' + answers.address + ":" + answers.port );
          cb();
        });
      });





vorpal
  .show()
  .parse(process.argv);
