# AuditTrail Spike

Small spike using GraphQL and Mongo Database

## Starting

To start the server, navigate to the root folder of this application and run

```powershell
node index.js
```

## Adding

In this example, date and id are generated automatically.

```GraphQL
mutation {
  addEvent(name:"My event name"){
   // Return values below
    id,
    date,
    name
  }
}

```

## Query all

```GraphQL
{
  event {
    date,
    name
  }
}
```
