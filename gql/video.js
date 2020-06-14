import gql from 'graphql-tag';

export const VIDEOS = gql`
query($offset: Int, $limit: Int) {



    videos:nodeQuery(filter: {conditions: [{field:"type",value:"Video"}]},limit: $limit,offset:$offset){

  count

  entities{

    ... on NodeVideo{
      fieldVideoId
      title
    }



  }



    }






}
`;
