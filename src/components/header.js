
import React, { useState } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSpring, animated } from 'react-spring'

import { FiMenu } from 'react-icons/fi'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(relativePath: {eq: "lotusyoga_logo.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      headerBackground: file(relativePath: {eq: "header-background.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isToggled, setToggle] = useState(false)

  const showNav = useSpring({
    transform: isToggled ? 'translateY(0%)' : 'translateY(-100%)'
  })

  return (
    <>
      <header id="header">
        <Container fluid style={{ padding: 0 }}>
          <Navbar expand="sm" style={{ padding: 0 }}>
            <BackgroundImage fluid={data.headerBackground.childImageSharp.fluid} className="header__background">
              <div className="header__overlay">
                <Navbar.Brand href="/">
                  <Img fluid={data.headerLogo.childImageSharp.fluid} alt="Lotus yoga logo" className="header__logo"/>
                </Navbar.Brand>
                
              </div>
            </BackgroundImage> 
          </Navbar>
        </Container>
      </header>
      <div className="header__navigation-panel">
        <button className="navbar-toggle" onClick={() => setToggle(!isToggled)}>
          <FiMenu />
        </button>
        <animated.nav style={showNav} className="header__navbar-container">
            <ul className="header__navbar">
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__about" title="o nás" className="nav-link" />
              </Nav.Item>
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__features" title="kurzy" className="nav-link" />
              </Nav.Item>
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__video" title="videa" className="nav-link" />
              </Nav.Item>
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__herbs" title="bylinky" className="nav-link" />
              </Nav.Item>
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__lessons" title="lekce" className="nav-link" />
              </Nav.Item>
              <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                <AnchorLink to="/#section__contact" title="kontakt" className="nav-link" />
              </Nav.Item>
            </ul>
        </animated.nav>
      </div>
    </>
  )
}

export default Header
