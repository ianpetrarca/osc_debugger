//Libraries
var osc = require('node-osc');
var inquirer = require('inquirer');

//Main Program Function
function start() {
  console.log('OSC Debugger');
  setState();
}

//Set the State
function setState() {
  inquirer.prompt(mainPrompt).then(function (answers) {
    if (answers.function  === 'Start OSC Server') {
        startServer();
    } else if (answers.function  === 'Send OSC Message') {
        sendMessage();
    } else if (answers.function  === 'Send Timed Messages') {
        timedMessages();
    } else if (answers.function  === 'View Saved Servers') {
        viewServers();
    }
  });
}

//Opening Prompt
var mainPrompt = {
  type: 'list',
  name: 'function',
  message: 'What would you like to do?',
  choices: ['Start OSC Server',
    'Send OSC Message',
    'Send Timed Messages',new inquirer.Separator(),
    'Exit']
};

//Server Function
function startServer() {
  inquirer.prompt(serverPrompt).then(function (answers) {
    //Start Server
    var oscServer = new osc.Server(answers.port, answers.address);
    oscServer.on("message", function (msg, rinfo) { console.log(msg);});

    //Send Test Message
     var client = new osc.Client(answers.address, answers.port);
      client.send("/Server/Started", 100, function () {
          client.kill();
      });
  });
};

//Server Prompt
var serverPrompt = [
  {
    type: 'input',
    name: 'address',
    message: 'Address?'
  },
  {
    type: 'input',
    name: 'port',
    message: 'Port?'
  }
];

//Message Function
function sendMessage() {
  inquirer.prompt(messagePrompt).then(function (answers) {
     var client = new osc.Client(answers.address, answers.port);
      client.send(answers.message, answers.arg, function () {
          client.kill();
      });
  });
};
//Message Prompts
var messagePrompt = [
  {
    type: 'input',
    name: 'address',
    message: 'Address?'
  },
  {
    type: 'input',
    name: 'port',
    message: 'Port?'
  },
  {
    type: 'input',
    name: 'message',
    message: 'Message?'
  },
  {
    type: 'input',
    name: 'arg',
    message: 'Argument?'
  }
];

//Timed Messages Function
function timedMessages(){
   inquirer.prompt(timedPrompt).then(function (answers) {
    //Send  Message
     var client = new osc.Client(answers.address, answers.port);
     setInterval(function(){ client.send(answers.message,answers.arg)}, answers.time)});
}

//Timed Messaged Prompt
var timedPrompt = [
  {
    type: 'input',
    name: 'address',
    message: 'Address?'
  },
  {
    type: 'input',
    name: 'port',
    message: 'Port?'
  },
  {
    type: 'input',
    name: 'message',
    message: 'Message?'
  },
  {
    type: 'input',
    name: 'arg',
    message: 'Argument?'
  },
  {
    type: 'input',
    name: 'time',
    message: 'Interval in milliseconds?'
  }
];

start();