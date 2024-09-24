import gql from 'graphql-tag';


export const GlobalDataQuery  = gql`
query GlobalDataQuery{
  global{
    data{
      attributes{
        logo{
          data{
            attributes{alternativeText url}
          }
        }
        nav{id name href authRequire}
        social{id name href image{data{attributes{alternativeText url}}}}
      }
    }
  }
}
`