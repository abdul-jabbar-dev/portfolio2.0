import { gql } from "@apollo/client";

const ABOUT_SECTION = gql`
  query {
    about {
      title
      desc
      img
      link
      linkTitle
      descPosition
    }
  }
`;
export default ABOUT_SECTION;
