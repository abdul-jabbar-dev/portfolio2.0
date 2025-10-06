import { gql } from "@apollo/client";

const EXPERIANCE_SECTION = gql`
  query {
    experience {
      companyName
      id
      desc
      location
      jobPosition
      startDate
      endDate
      companyLink
      order
    }
  }
`;
export default EXPERIANCE_SECTION;
