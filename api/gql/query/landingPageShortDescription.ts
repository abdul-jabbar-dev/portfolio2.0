import { gql } from "@apollo/client";

const SHORT_DYN_DES = gql`
  query {
    hero {
      title
      description
      image
      resume
      socialLinks {
        title
        section
        desc
        icon
        iconStr
      }
      techStack {
        title
         desc
         url
         icon
         iconStr
      }
    }
  }
`;
export default SHORT_DYN_DES;
