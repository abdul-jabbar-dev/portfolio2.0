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
      }
      techStack {
        title
         desc
         url
         icon
      }
    }
  }
`;
export default SHORT_DYN_DES;
