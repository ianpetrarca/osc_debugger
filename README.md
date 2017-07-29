# OSC Debugger

## Installation

OSC Debugger requires that you have Node and NPM installed on your local computer. To begin using it use the following commands:

    git clone https://github.com/ianpetrarca/osc_debugger.git
    cd osc_debugger
    npm install 
    node .

OSC Debugger uses the third party libraries Inquirer (https://github.com/SBoudrias/Inquirer.js/) and  Node OSC (https://github.com/MylesBorins/node-osc)


<img width="902" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://user-images.githubusercontent.com/1003196/28745592-41803576-7449-11e7-9de4-b208b0d0d1c1.png">


To start OSC Debugger you will need to run the index.js file using Node, you can do this by using: 

    node . 
Or:

    node index.js 
    
You will be prompted to *Start OSC Server*, *Send OSC Message* and *Send Timed Messages*. 

# Start OSC Server 

OSC Debugger allows you to monitor incoming OSC messages directly within the terminal. In order to accept OSC messages you must start a server that listens for messages on a specified **IP Address** and **Port** this is done by selecting the *Start OSC Server* command. 

After you select the initial *Start OSC Server* command you will be prompted to give an address and port. The **address** is the local IP address you would like to **recieve** messages on. The **port** is the TCP port in which your OSC recieve messages through. More on this below. After entering an address and port you will recieve a message that the OSC Server has been started. 

# Send OSC Message 

The *Send Message* command allows you to send OSC messages to OSC Debugger internally or to external OSC applications. If you are building an interactive system that is built on top of OSC, this command can help test certain features of your system.

After you run the initial *Send OSC Message* command you will be prompted to give an address, port, message and argument. The message field accepts standard OSC Message specifcation. For example: */test/osc/* and the **argument** accepts a 4 digit integer. The **address** is the local IP address you would like to **send** messages to. The **port** is the TCP port in which your OSC Client sends data to your OSC Server.

# Send Timed Messages

The *Send Timed Message* command allows you to send OSC messages at a millisecond interval.




