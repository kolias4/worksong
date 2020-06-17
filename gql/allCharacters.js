import gql from 'graphql-tag';

export const ALL_CHARACTERS = gql`
query {
  homeimage:nodeQuery(filter: {conditions: [{field:"title",value:"Homepage"}]},limit: 100){
      entities{
        ... on NodeBanner{
           fieldBannerImage{
             entity{
              ... on MediaImage{
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


    videos:nodeQuery(filter: {conditions: [{field:"type",value:"Video"},{field:"status",value:"1"}]},limit: 4,sort:{field:"sticky",direction:DESC}){





  entities{

    ... on NodeVideo{
      fieldVideoId
      title
    }



  }



    }

# menu:menuByName(name:"main") {
#   name
#   links{
#     label
#     url{
#       path
#     }
#   }
# }





}
`;
