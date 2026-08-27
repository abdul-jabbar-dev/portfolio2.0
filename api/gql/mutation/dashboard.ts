import { gql } from "graphql-request";

const SET_HERO_SECTION = gql`
  mutation SetHeroSection($title: String!, $description: String!, $image: String!) {
    setHeroSection(title: $title, description: $description, image: $image) {
      id
      title
      description
      image
    }
  }
`;

const SET_ABOUT_SECTION = gql`
  mutation SetAboutSection($aboutSection: AboutSectionInput!) {
    setAboutSection(aboutSection: $aboutSection) {
      id
      title
      desc
      img
      link
      linkTitle
    }
  }
`;

const SET_EXPERIENCE_SECTION = gql`
  mutation SetExperianceSection($experianceSection: ExperienceSectionInput!) {
    setExperianceSection(experianceSection: $experianceSection) {
      id
      companyName
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

const SET_TECH_STACK = gql`
  mutation SetTechStack($techStack: [TechStackInput!]!) {
    setTechStack(techStack: $techStack) {
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

const SET_LINKS = gql`
  mutation SetLinks($links: [SocialLinkInput!]!) {
    setLinks(links: $links) {
      id
      title
      section
      desc
      icon
      url
      iconStr
    }
  }
`;

const DashboardMutations = {
  SET_HERO_SECTION,
  SET_ABOUT_SECTION,
  SET_EXPERIENCE_SECTION,
  SET_TECH_STACK,
  SET_LINKS,
};

export default DashboardMutations;
