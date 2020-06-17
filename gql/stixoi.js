import gql from 'graphql-tag';

export const STIXOI = gql`
query {


  stixoi:nodeQuery(filter: {conditions: [{field:"type",value:"stixoi"}]},
    sort:{field:"sticky",direction:DESC},limit:100){
      entities{

        ... on NodeStixoi{
          title
          body{
            value
          }

        }


    }

      }






}
`;
