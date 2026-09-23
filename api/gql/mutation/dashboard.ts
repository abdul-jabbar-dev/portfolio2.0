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

const SET_RESUME = gql`
  mutation SetResume($resume: String!) {
    setResume(resume: $resume) {
      id
      resume
    }
  }
`;

const SET_PROJECT = gql`
  mutation SetProject($project: ProjectMutationInput!) {
    setProject(project: $project) {
      id
      title
      desc
      img
      projectTools
      order
    }
  }
`;

const DELETE_EXPERIENCE = gql`
  mutation DeleteExperience($id: ID!) {
    deleteExperience(id: $id)
  }
`;

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id)
  }
`;

const SET_CONTACT_SECTION = gql`
  mutation SetContactSection($contactSection: ContactSectionInput!) {
    setContactSection(contactSection: $contactSection) {
      id
      iconStr
      icon
      title
      desc
      link
      order
    }
  }
`;

const DELETE_CONTACT_SECTION = gql`
  mutation DeleteContactSection($id: ID!) {
    deleteContactSection(id: $id)
  }
`;

const SET_TECHNICAL_SKILLS_SECTION = gql`
  mutation SetTechnicalSkillsSection($technicalSkillsSection: TechnicalSkillsSectionInput!) {
    setTechnicalSkillsSection(technicalSkillsSection: $technicalSkillsSection) {
      id
      icon
      iconStr
      fieldName
      desc
      link
      order
    }
  }
`;

const DELETE_TECHNICAL_SKILLS_SECTION = gql`
  mutation DeleteTechnicalSkillsSection($id: ID!) {
    deleteTechnicalSkillsSection(id: $id)
  }
`;

const DashboardMutations = {
  SET_HERO_SECTION,
  SET_ABOUT_SECTION,
  SET_EXPERIENCE_SECTION,
  SET_TECH_STACK,
  SET_LINKS,
  SET_RESUME,
  SET_PROJECT,
  DELETE_EXPERIENCE,
  DELETE_PROJECT,
  SET_CONTACT_SECTION,
  DELETE_CONTACT_SECTION,
  SET_TECHNICAL_SKILLS_SECTION,
  DELETE_TECHNICAL_SKILLS_SECTION,
};

export default DashboardMutations;
