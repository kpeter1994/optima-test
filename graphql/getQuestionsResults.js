import gql from 'graphql-tag';


export const getResultsQuery  = gql`
query Results{
  testResults(filters: { user_email: { eq: "smitpeter777" }}) {
    data{
      attributes{
        user_email
        results
      }
    }
  }
}
`