import { gql } from "@apollo/client";

const FOOTER_SECTION_LINKS = gql`
  query {
    footerLinks {
      id
      title
      section
      desc
      url
      icon
      iconStr
    }
  }
`;
export default FOOTER_SECTION_LINKS;
