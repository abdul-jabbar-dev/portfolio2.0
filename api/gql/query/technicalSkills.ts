import { gql } from "@apollo/client";

const TECHNICAL_SKILLS = gql`
 query {
  technicalSkills {
    icon
    fieldName
    desc
    id
    iconStr
    link
    techStack {
      title
      desc
      id
      url
      icon
      skillsPercentage
      order
      iconStr
    }
  }
}

`;
export default TECHNICAL_SKILLS;
