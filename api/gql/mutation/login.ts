import { gql } from "@apollo/client";

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

export default LOGIN_MUTATION;
