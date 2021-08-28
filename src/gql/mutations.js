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

export const UPDATE_SETTINGS = gql`
  mutation UPDATE_SETTINGS($name: String!, $currency: String, $country: String!, $address: String!, $city: String!, $postal: String!, $company_address: String!, $company_city: String!, $company_country: String!, $company_name: String!, $company_postal: String!, $vat_no: String!, $id: Int!) {
    update_settings_by_pk(pk_columns: { id: $id }, _set: { name: $name, currency: $currency, country: $country, address: $address, city: $city, postal: $postal, company_address: $company_address, company_city: $company_city, company_country: $company_country, company_name: $company_name, company_postal: $company_postal, vat_no: $vat_no }) {
      address
      id
      company_name
      company_country
      company_city
      company_address
      city
      company_postal
      country
      currency
      name
      postal
      user_id
    }
  }
`;

export const CREATE_SETTINGS = gql`
  mutation CREATE_SETTINGS($name: String!, $currency: String, $country: String!, $address: String!, $city: String!, $postal: String!, $company_address: String!, $company_city: String!, $company_country: String!, $company_name: String!, $company_postal: String!, $user_id: Int!) {
    insert_settings_one(object: { name: $name, currency: $currency, country: $country, address: $address, city: $city, postal: $postal, company_address: $company_address, company_city: $company_city, company_country: $company_country, company_name: $company_name, company_postal: $company_postal, user_id: $user_id }) {
      id
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
    }
  }
`;
