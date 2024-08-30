import gql from 'graphql-tag';


export const getQuestionsQuery  = gql`
query Questions($slug: String!) {
  tests(filters: {slug: {eq: $slug }} ){
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