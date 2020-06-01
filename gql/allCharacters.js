import gql from 'graphql-tag';

export const ALL_CHARACTERS = gql`
query {
nodeById(id:"1"){
 title

    ... on NodeArticle {
     body {
       value
     }
     fieldImage {
       url
       alt
     }

   }




}


}
`;
