import { gql } from "@apollo/client";

const GET_ME = gql`
  query {
    getMe {
      id
      type
      email
      token
      metadata
      name
      phone
      permissions
      status

    }
  }
`;
export default GET_ME;
