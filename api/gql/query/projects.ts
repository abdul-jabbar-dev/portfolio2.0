import { gql } from "@apollo/client";

const PROJECTS = gql`
query{
  
  projects{
    id
    title
    section
    desc
    img
    projectTools
    techStack{
      section
      desc
      icon
      url
      title
      iconStr
      order
    }
  }
}

`;
export default PROJECTS;
