import gql from 'graphql-tag';

export const ABOUT = gql`
query{


  about:nodeQuery(filter: {conditions: [{field:"type",value:"about_the_band"}]}
    ,limit:1){
      entities{

        ... on NodeAboutTheBand{
          title
          body{
            value
          }

        }


    }

      }
    }
`;
