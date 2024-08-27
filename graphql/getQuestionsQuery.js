import gql from 'graphql-tag';


export const getQuestionsQuery  = gql`
query Questions{
  test(id:5){
  \tdata{
    attributes{
      title
      slug
      element{
        ... on ComponentFormScale{
          id
          title
          category 
          rating2{border text}
          question{id title subCategory value}
        }
      }
    \t}
  \t}
\t}
}
`