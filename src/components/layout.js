
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from 'react-bootstrap'

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      },
      optimalLogo: file(relativePath: {eq: "h-optimal_logo.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 18) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site-content">
        <main>{children}</main>
        <footer>
          <Container className="footer__container">
            <div className="footer__disclaimer">
              <a href="https://www.h-optimal.cz/" target="_blank" rel="noreferrer noopener" className="footer__h-optimal">
                <Img fluid={data.optimalLogo.childImageSharp.fluid} className="h-optimal__logo" alt="h-optimal logo" />
                <span> h-optimal</span>
              </a>
              <span> | {new Date().getFullYear()} © všechna práva vyhrazena</span>
            </div>
            <div className="footer__links">
              <a href="https://www.lotuscentrum.cz/" target="_blank" rel="noreferrer noopener">www.lotuscentrum.cz</a> |
              <a href="https://www.kratomlove.cz/" target="_blank" rel="noreferrer noopener"> www.kratomlove.cz</a> |
              <a href="http://www.lotusyoga.cz/" target="_blank" rel="noreferrer noopener"> www.lotusyoga.cz</a>
            </div>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
