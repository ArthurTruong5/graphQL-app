const graphql = require("graphql");
const { GraphQLInputObjectType } = graphql;
const UserType = new GraphQLInputObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});
