# OSC Debugger

<img width="902" alt="screen shot 2017-03-20 at 11 03 49 pm" src="https://cloud.githubusercontent.com/assets/1003196/24130872/84932a06-0dc1-11e7-9da1-11262c6a6d46.png">

This CLI allows you to quickly send, monitor and test OSC based systems. Fire up an OSC server quickly by running: 

    node . 
    start server 

Follow the steps and enter an **Address** and **Port**. All servers automatically log the messages they receive.

    $ start server
    Name: local server
    Address: localhost
    Port: 3333
    local server started on: localhost:3333
    $ send message
    Message:/test/osc
    Argument:400
    Address: localhost
    Port: 3333
    OSC Server started on: localhost:3333
    $ [ '/test/osc', '400' ]
