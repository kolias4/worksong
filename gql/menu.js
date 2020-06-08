import gql from 'graphql-tag';

export const MENU = gql`
query {

  menu:menuByName(name:"main") {
    name
    links{
      label
      url{
        path
      }
    }
  }



}
`;
