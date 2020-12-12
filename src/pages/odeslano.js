
import React from "react"
import { Container, Row } from 'react-bootstrap'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SEO from '../components/seo'
import Layout from "../components/layout"

const MessageSent = () => (
  <Layout>
    <SEO title="Zpráva odeslaná" description="Yoga je cesta dovnitř k sobě samému, cesta za naši mysl, až k pochopení toho, kdo je to ten pozorovatel." />
    <Container className="not-found">
      <h1>Zpráva odeslána</h1>
      <p>Děkujeme za Vaši zprávu, ozveme se Vám co možná nejdříve.</p>
      <Row>
        <AnchorLink to="/#header" title="Zpět na domovskou stránku" stripHash />
      </Row>
    </Container>
  </Layout>
)

export default MessageSent