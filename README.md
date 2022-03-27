# Socket.io-Chat-app

> What application does?

* This application allowed users to send messages and join chat rooms between them.

> How to built this application?

* This application uses socket.io and socket. io-client to connect between the server and clients(users)

> structure application:-

1. File HTML to create an element for allowing users input messages and join the room and connect between files (js & HTML ). [Html file](/client/index.html)

2. Server file.

* Require(socket.io)and connection on port
and connect with cors and admin socket.

* Listener connection event then inside it listener new event 'send-message' and taken two-parameter (message, room) for check value of the room if empty, worked trigger for all client without same client used broadcast, then is not empty room triggers the events on the room.
* Listener events for joint room.
* Listener event for validator from token.
* Require {instrument}.
* Connection server on a space name.
* Listen to the event to connection on this endpoint.
* Create middleware for a check from token if found.  
[Server file](https://github.com/Mujahedyousef/Socket.io-Message-Queues/blob/main/server/server.js)

3. Script file

* Require (socket. io-client)
* Using dom to control in HTML element and get value when client writing inside it  using addEventListener.

* Trigger some event from the server with value to send for new client.
* Create a new element to show a message for client.
* Finally, addEventListener for off  mode and online
and using setInterval to count.

[Script file](/client/script.js)

> The packages installed

* npm i socket.io.
* npm i socket.io-client.
* npm i snowpack --save --dev.
* npm i @socket.io/admin-ui

## images for server & clients & Dashboard

![client](/images/client.png)

![Dashboard](/images/Dashboard.png)
![room](/images/room.png)
![client_number](/images/client_number.png)

## UML

![uml](/images/uml.jpg)

|name |Link|
|----|----|
|PR|[PR](https://github.com/Mujahedyousef/Socket.io-Message-Queues/pull/2)|
