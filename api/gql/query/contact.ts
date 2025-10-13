import { gql } from "@apollo/client";

const CONTACT_SECTION = gql`
  query {
    contact {
      icon
      iconStr
      title
      desc
      id
      link
      order
    }
  }
`;
export default CONTACT_SECTION;
