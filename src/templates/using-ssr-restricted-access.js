import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({ serverData }) => {
  if (serverData.accessDenied) {
    return 'You don\'t have access to this page'
  }

  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>SSR page</h1>
      <p>Welcome to a server side rendered page with a random dog photo</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingDSG

export async function getServerData({ pageContext }) {
  return {
    status: 200,
    headers: {},
    props: {
      accessDenied: pageContext.isPrivate // Let's assume that you dont have access if its private.
    },
  }
}
