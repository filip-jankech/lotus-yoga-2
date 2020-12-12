
import React from "react"
import { Container, Row } from 'react-bootstrap'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SEO from '../components/seo'
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Stránka nenalezena" description="Yoga je cesta dovnitř k sobě samému, cesta za naši mysl, až k pochopení toho, kdo je to ten pozorovatel." />
    <Container className="not-found">
      <h1>Stránka nenalezena</h1>
      <p>Stránka, na kterou se pokoušíte dostat, neexistuje.</p>
      <Row>
        <AnchorLink to="/#header" title="Zpět na domovskou stránku" stripHash />
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
