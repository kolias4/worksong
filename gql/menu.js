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

  logo:nodeQuery(filter: {conditions: [{field:"type",value:"logo"}]},limit:1,offset:0){
    entities{
    ... on NodeLogo{
      fieldLogo{
        ... on FieldNodeLogoFieldLogo{
          entity{
            ... on MediaImage{
              fieldMediaImage{
                derivative(style:THUMBNAIL){
                  url
                }
              }
            }

          }
        }
      }
    }
  }

    }



}
`;
