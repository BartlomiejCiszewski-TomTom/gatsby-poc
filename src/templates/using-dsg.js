import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const UsingDSG = ({ pageContext }) => {
  const { isDSG } = pageContext;

  return (
    <Layout>
      <Seo title="Using DSG" />
      <h1>{isDSG ? 'This is a Defered page' : 'This is a regular static page'}</h1>
      <p>This page is not created until requested by a user.</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
          documentation about Deferred Static Generation
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingDSG
