# Random newsletter

This is a personal project, for get random links of newsletters that I receive

## Getting Started

For using the script just clone this repository and enter in folder. 

Create a folder `api` and inside create a json for newsletters, the url for content is optional, modify it in index.js at constant `URL`

Run the server with:

```
npm start
```

**Options:**

Get a random link, pass `true` for delete the link or `false` 

```
node index.js get <delete>
```

Add a new link, just write `post` and the link

```
node index.js post <link>
```

### Prerequisites

- [json-server](https://www.npmjs.com/package/json-server)


