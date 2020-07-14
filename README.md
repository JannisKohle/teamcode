# teamcode

A chatting tool for teams that **doesn't have a frontend** and is **not usable (yet)**

## What it can do and How it works:

If you want to use this tool for your team (please
do not, because it's not secure), first you have to
setup the server in your network. Then everybody should
be able to access the api on 192.168.0.serverIp:3456

Usually the admin is the person who set up the server,
so 192.168.0.serverIp = 192.168.0.adminIp. The admin
can also give other people admin rights. The first
admin has owner rights, which is more than admin, so
other admins can't remove the owner's rights (or more).
=> 192.168.0.serverIp = 192.168.0.ownerIp

With teamcode, you can create rooms in which you can
write messages and uploud files or folders. You can also
create private rooms, which only some people can access.
You need to be an admin to create public and private rooms.

## How to use it:

First, you must create an account. You can only use that
account for *this* teamcode server, because nothing is
stored in a cloud - just on the server running teamcode.

You can create an account with a post request to ```/accounts```.
The request body needs to look something like this: ```?```.

Then, any admin can invite you to private rooms. If you want
to become admin too, you must ask another admin to give you
the rights.

If you're an admin, you can give someone else admin rights with a patch request to ```/accounts/:username``` with the body ```{"isAdmin": true}```.

... ... ... ... ... ... ... ... ...

## What the data looks like:

### General information about the teamcode server:

```json
{
    "owner": "FrederikDieLaus",
    "admins": ["LarsDieSchnecke", "DerBetonKlotzAusMuenchen"],
    "publicRooms": {"generalDiscussions": "ROOM9165323"},
    "privateRooms": {"backend": "ROOM2342856", "frontend": "ROOM174026"}
}
```

### An account:

```json
{
    "username": "FriedrichDasBlatt",
    "password": "thisismyultralongpwthatnoonewilleverfindout",
    "ipAdresses": ["192.168.0.46", "192.168.0.51"],
    "isAdmin": false
}
```
