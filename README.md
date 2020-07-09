# teamcode

A chatting tool for teams that **doesn't have a frontend** and is **not usable yet**

## What it can do and How it works:

If you want to use this tool for your team (please do not, because it's not
secure), first you have to setup the server in your network. Then everybody
should be able to access the api on 192.168.0.serverIp:3456

To be able to use everything, you must create an account and the admin needs to
invite your account. If he doesn't do that, you won't be able to do anything.
This prevents hackers in your network from having access to all the rooms and messages.
(Btw the hacker would probably still be able to access everything bc I'm bad at programming)

All the data is **not** stored in a cloud but on the server.

Using the api you can create rooms in which you can write messages. If you want
to post files or folders, you need to create a storageRoom.

## How to setup the server:

XyZ

## How to use the api:

These are just some of the most important and useful things: (```METHOD ENDPOINT REQ_BODY```)

- Create an account: ```POST /accounts {"name": "Karl", "info": "My github: xyz"}```
- Invite a created account (ADMIN ONLY): ```PATCH /accounts/:accountName {"invited": true}```

- Create a new room: ```POST /rooms {"name": "frontend"}```
- Create a new storageRoom: ```POST /storage {"name": "filesAndFolders"}```
- Delete a room (ADMIN ONLY): ```DELETE /rooms {"name": "frontend"}```
- Delete a storageRoom (ADMIN ONLY): ```DELETE /storage {"name": "filesAndFolders"}```
