const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
var app = express();

app.use(
  "/graphql",
  expressGraphQL({
    // ES6 key and value have same variable name
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
