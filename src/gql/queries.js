import { gql } from 'boot/apollo';

export const GET_TEMPLATES = gql`
    query {
    templates {
      name,
      id,
      preview_url,
      is_available
    }
  }
`;
