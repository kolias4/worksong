import gql from 'graphql-tag';

export const Footer = gql`
query {
  footerimage:nodeQuery(filter: {conditions: [{field: "title", value: "Footer"}]}, limit: 100){
      entities{
        ...on NodeBanner{
           fieldBannerImage{
             entity{
              ...on MediaImage{
                fieldMediaImage{
                  alt
                  url
                }
              }
            }
          }
        }
      }
    }


}
`;
