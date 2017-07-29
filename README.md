# OSC Debugger

## Installation

Third Party Libraries Used:

* Inquirer - CLI library - https://github.com/SBoudrias/Inquirer.js/
* Node OSC - OSC library - https://github.com/MylesBorins/node-osc

OSC Debugger requires that you have Node and NPM installed on your local computer. It can be downloaded in a.zip or cloned:

    git clone https://github.com/ianpetrarca/osc_debugger.git
    cd osc_debugger
    npm install 

<img width="902" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://user-images.githubusercontent.com/1003196/28745592-41803576-7449-11e7-9de4-b208b0d0d1c1.png">


This CLI allows you to quickly send, monitor and test OSC based systems. Fire up an OSC server quickly by running: 

    node . 
    start server 

# Start Server 

OSC Debugger allows you to monitor incoming OSC messages directly within the terminal. In order to accept OSC messages you must start a server that listens for messages on a specified **IP Address** and **Port** this is done using the the *start server* command:

    node . 
    start server 

After you run the initial *start server* command you will be prompted to give a name, address and port. The name can be left blank if you prefer. I suggest labeling servers for the purpose of identifiying multiple servers in an OSC log. The **address** is the local IP address you would like to **recieve** messages on. The **port** is the TCP port in which your OSC client sends data to your OSC server. More on this below. After entering a name, address and port you will recieve a message that the OSC Server has been started. 

# Send Message 

The *send message* command allows you to send OSC messages to OSC Debugger internally or to external OSC applications. If you are building an interactive system that is built on top of OSC, this command can help test certain features of your system.

    node . 
    send message 

After you run the initial *send message* command you will be prompted to give a message, argument, address and port. The message field accepts standard OSC Message specifcation. For example: */test/osc/* The **address** is the local IP address you would like to **send** messages to. The **port** is the TCP port in which your OSC Client sends data to your OSC Server.

