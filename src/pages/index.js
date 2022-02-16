import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import  favicon from "../assets/favicon/favicon.ico"
import Helmet from "react-helmet"
import SectionOne from "../components/home/SectionOne"
import SectionTwo from "../components/home/SectionTwo"
import SectionThree from "../components/home/SectionThree"

// markup
const IndexPage = () => {
  return (
    <Layout >
      <Helmet>
          <link rel="shortcut icon" href={ favicon } />
          <title>NFT-DOT</title>
      </Helmet>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
