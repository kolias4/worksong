import gql from 'graphql-tag';

export const VIDEOS = gql`
query($offset: Int, $limit: Int) {



    videos:nodeQuery(filter: {conditions: [{field:"type",value:"Video"},{field:"status",value:"1"}]},limit: $limit,offset:$offset, sort:{field:"sticky",direction:DESC}){

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
