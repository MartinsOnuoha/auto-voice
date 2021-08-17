import { gql } from 'boot/apollo';

export const GET_TEMPLATES = gql`
  query GET_TEMPLATES {
    templates {
      name,
      id,
      preview_url,
      is_available
    }
  }
`;

export const GET_CURRENCIES = gql`
  query GET_CURRENCIES {
    currencies {
      name
      sign
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($email: String!) {
    users(where: { email: { _eq:  $email} }) {
      id
      email
    }
  }
`;

export const GET_BOOKMARKED = gql`
  query GET_BOOKMARKED($userId: Int!) {
    saved_templates(where: { user_id: { _eq: $userId }}) {
      name
      preview_url
    }
  }
`;

export const GET_SETTINGS = gql`
  query GET_SETTING($userId: Int!) {
    settings(where: { user_id: { _eq: $userId } }) {
      address
      city
      company_address
      company_city
      company_country
      company_name
      company_postal
      country
      currency
      name
      postal
      user_id
      id
    }
  }
`;
