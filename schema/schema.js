const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;
const _ = require("lodash");
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const users = [
  { id: "23", firstName: "Bill", age: 20 },
  { id: "47", firstName: "Samantha", age: 21 }
];

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      //   check database and find the value we're looking for.
      resolve(parentValue, args) {
        return _.find(users, {
          id: args.id
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
