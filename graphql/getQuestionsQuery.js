import gql from 'graphql-tag';


export const getQuestionsQuery  = gql`
query Questions{
  test(id:3){
  \tdata{
    attributes{
      title
      element{
        ... on ComponentFormScale{
          __typename
          id
          title
          category 
          rating{low medium high}
          question{id title subCategory value}
        }
      }
    \t}
  \t}
\t}
}
`