import gql from 'graphql-tag';


export const getQuestionsQuery  = gql`
query Questions{
  test(id:1){
  \tdata{
    attributes{
      title
      element{
        ... on ComponentFormScale{
          id
          title
          category
          rating{low medium high}
          question{id title}
        }
      }
    \t}
  \t}
\t}
}
`