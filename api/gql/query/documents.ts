import { gql } from "graphql-request";

const DOCUMENTS = gql`
  query Documents {
    documents {
      id
      title
      fileUrl
    }
  }
`;

export default DOCUMENTS;
