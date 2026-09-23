const { GraphQLClient, gql } = require("graphql-request");
const client = new GraphQLClient("http://127.0.0.1:8000/gql");
const LOGIN_MUTATION = gql`
  mutation Login($type: String!, $credential: String!) {
    login(type: $type, credential: $credential ) {
      token
      user {
        id
        type
        email
        metadata
      }
    }
  }
`;
client.request(LOGIN_MUTATION, { type: "me", credential: "password" })
  .then(console.log)
  .catch(console.error);
