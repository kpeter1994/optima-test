import gql from 'graphql-tag';


export const getPageQuery  = gql`
query PageQuery{
  page(id: 1){
    data{
      attributes{
        name
        slug
        seo{title description}
        blocks{
          ... on ComponentBlockHero{
            id
            title
            text
            link{id label href theme}
            image{data{attributes{alternativeText url}}}
          }
          ... on ComponentBlockContent{
            id
            title
            subTitle
            text
            link{id label href theme}
            image{data{attributes{alternativeText url}}}
          }
          ... on ComponentBlockTest{
            id
            title
            text
            tests{data{attributes{title text slug image{data{attributes{alternativeText url}}}}}}
          }
        }
        
        
      }
    }
  }
}
`