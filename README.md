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

## Queries

### Query all

```GraphQL
{
  event {
    date,
    name
  }
}
```

### Query for term

```GraphQL
query{
  events(filter:{
    name: {EQ: "your name"}
  }){
    id,
    name
  }
```

#### Types of filter

| Symbol | Type     | Description            |
| ------ | -------- | ---------------------- |
| EQ     | String   | Equals                 |
| GT     | String   | Greater than           |
| GTE    | String   | Greater than or Equals |
| IN     | [String] | In                     |
| LT     | String   | Less than              |
| LTE    | String   | Less than or Equals    |
| NEQ    | String   | Not Equal              |
| NIN    | [String] | Not In                 |

### sort

```GraphQL
query{
  events(
    sort: {name: ASC}
  ){
    id,
    name
  }
}
```

#### Types of sort

| Symbol | Description      |
| ------ | ---------------- |
| ASC    | Ascending Order  |
| DESC   | Descending Order |

### Pagination

```GraphQL
query{
  events(
    pagination: {limit: 3,skip: 3}
  ){
    id,
    name,
    date
  }
}
```

#### Pagination Args

| Symbol | Description                    |
| ------ | ------------------------------ |
| limit  | Amount of items to be returned |
| skip   | Amount of items to be skipped  |