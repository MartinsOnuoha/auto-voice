import { gql } from 'boot/apollo';

export const CREATE_USER = gql`
  mutation CREATE_USER($email: String!) {
    insert_users_one(object: {email: $email}) {
      email
      id
    }
  }
`;

export const BOOKMARK_TEMPLATE = gql`
  mutation BOOKMARK_TEMPLATE($name: String!, $preview_url: String, $user_id: Int!) {
    insert_saved_templates_one(object: { name: $name, preview_url: $preview_url, user_id: $user_id }) {
      id
      name
      preview_url
      user_id
    }
  }
`;
