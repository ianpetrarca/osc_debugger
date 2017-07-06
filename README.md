# OSC Debugger

<img width="902" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://cloud.githubusercontent.com/assets/1003196/24130872/84932a06-0dc1-11e7-9da1-11262c6a6d46.png">

This CLI allows you to quickly send, monitor and test OSC based systems. Fire up an OSC server quickly by running: 

    node . 
    start server 

# Start Server 

In order to accept OSC messages you must start a server that listens for messages on a specified **IP Address** and **Port** this is done using the the *start server* command:

    node . 
    start server 

After you run the initial *start server* command you will be prompted to give a name, address and port. The name can be left blank if you prefer, I suggest labeling servers for the purpose of identifiying multiple servers in an OSC log. The **address** is the local IP address you would like to **recieve** messages on. The **port** is the TCP port in which your OSC client sends data to your OSC server. More on this below. After entering a name,address and port you will recieve a message that the OSC server has been started. 

