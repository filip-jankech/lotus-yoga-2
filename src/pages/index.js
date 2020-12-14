
import React from "react"
import { Container, Row, Col, Card } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { useSpring, animated } from 'react-spring'
import { Spring } from "react-spring/renderprops";
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import emailjs from 'emailjs-com'

import SEO from '../components/seo'
import VisibilitySensor from "../components/VisibilitySensor"
import Layout from "../components/layout"

import { GrYoga } from 'react-icons/gr'
import { IoIosMedical } from 'react-icons/io'
import { MdPregnantWoman } from 'react-icons/md'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      parallaxBackground: file(relativePath: {eq: "parallax-background.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lessonsImage: file(relativePath: {eq: "lessons-image.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 738) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      herbsImage: file(relativePath: {eq: "herbs.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      videoImage: file(relativePath: {eq: "video.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  const { register, handleSubmit, errors } = useForm()
  const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm()

  const onSubmit = () => {
    emailjs.sendForm('service_q3wr9k4', 'template_gu2jhdo', '#lessons__form', 'user_Pql99Co1aveBAfndZqosV')
    .then((result) => {
      console.log(result)
      navigate("/odeslano")
    }, (error) => {
      console.log(error)
      alert("Odesílání zprávy se nezdařilo. Prosíme, kontaktujte nás na kontaktech uvedených níže.")
    });
  }

  const onSubmit2 = () => {
    emailjs.sendForm('service_q3wr9k4', 'template_gu2jhdo', '#lessons__form--2', 'user_Pql99Co1aveBAfndZqosV')
    .then((result) => {
      console.log(result)
      navigate("/odeslano")
    }, (error) => {
      console.log(error)
      alert("Odesílání zprávy se nezdařilo. Prosíme, kontaktujte nás na kontaktech uvedených níže.")
    });
  }

  return (
    <animated.div style={fade}>
      <Layout>
        <SEO title="Cesta k sobě samému" description="Yoga je cesta dovnitř k sobě samému, cesta za naši mysl, až k pochopení toho, kdo je to ten pozorovatel." />
        <Container>
          <div className="section__intro" id="section__about">
            <h1>Lotus Yoga</h1>
            <p className="text-center">
            Lotus Yoga v sobě zahrnuje koncept založený na tradiční (klasické) yóze, kde pracujeme na tělesné, mentální a spirituální úrovni. Jednotlivé úrovně na sebe navazují a rozvíjí člověka komplexně a rovnomerně jako celek. Ať navštívíte jakoukoli lekci (Hatha yóga, Mama yóga, Therapy yóga), zjistíte, že jednotlivé větve se doplňují, a také dokážou nabídnout řešení pro téměř každou vaši životní situaci. Navštěvují nás těhulky, maminky s dětmi i celé rodiny, muži, ženy v jakémkoli věku a diky univerzálnosti lekcí si v ní každý najde to své. Někdo přijde tělo protáhnout či posílit, jiný zklidnit myšlenky, jiní třeba řešit svalové dysbalance nebo si prostě jen preventivně udržovat své zdraví.
            </p>
            <p className="text-center">
              "Vedlejším" účinkem Lotus Yógy je bdělejší a harmoničtější život. Často slýcháme, že si z yógy lidé vytvořili závislost, zajímá vás proč?
            </p>
            <p className="text-center">
              <strong>Přijďte si k nám do Lotus centra pro svou odpověď. </strong>
              <span role="img" aria-label="usmiaty emoji">&#128578;</span>
            </p>
          </div>
          <div id="section__features">
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={200}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <Row className="section__features" style={{ ...props }}>
                      <Col lg={4} className="d-flex align-items-stretch">
                        <Card className="mb-5" style={{ backgroundColor: "#E6F3E1" }}>
                          <Card.Body>
                            <GrYoga />
                            <div className="card-text">
                              <h2 className="text-center">Hatha Yoga</h2>
                              <p className="text-center">
                                Také známá jako Raja (královská) yóga. Jde o kombinaci Asán (pozic), pranayamy (dechu) a meditace. Hatha yóga je ve své podstatě "statická" (výdrž v pozicích a zaměření na dech), má ale i své dynamické úseky. K aktivaci všech tělesných systémů stačí i správně zvolený sled asán (pozic) a práce s dechem. Na lekci v trvání 2  hodin můžete očekávat cca 10 lidí, s dostatkem prostoru kolem sebe, dohlížení na bezpečné provádění asán, pranayamy a vedenou meditaci, příjemnou hudbu a rozmanité vůně z vonných tyčinek. Předčí vás překvapení, jak ty 2 hodiny rychle utekly a třeba se i vy zamilujete do pocitu fyzické i psychické svobody. 
                              </p>
                              <p className="text-center features__price">
                                <strong>120min / 150Kč</strong> 
                              </p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4} className="d-flex align-items-stretch margin-top">
                        <Card className="mb-5" style={{ backgroundColor: "#FFECEE" }}>
                          <Card.Body>
                            <MdPregnantWoman />
                            <div className="card-text">
                              <h2 className="text-center">Mama Yoga</h2>
                              <p className="text-center">
                                Lekce sestavené přímo pro maminky. :) Tedy nastávající maminky, těhulky, maminky s dětmi, a pokud se tatínci nestydí, můžou se také připojit a obohatit lekci o všechny rodinné členy. 
                              </p>
                              <p className="text-center">
                                Hodinová lekce obsahuje asány, pranayamu i relaxaci, aromaterapii a příjemný pocit na hrudi. Lekce je vhodná pro začátečníky i zkušenější yogínky/yogíny. Je vedena klidněji s ohledem na skupinku. 
                              </p>
                              <p className="text-center features__price">
                                <strong>60min / 100Kč</strong> 
                              </p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4} className="d-flex align-items-stretch margin-top">
                        <Card className="mb-5" style={{ backgroundColor: "#E6F3E1" }}>
                          <Card.Body>
                            <IoIosMedical />
                            <div className="card-text">
                              <h2 className="text-center">Therapy Yoga</h2>
                              <p className="text-center">
                                Forma terapeutické yógy zaujme hlavně ty z vás, kteří vyžadují speciální požadavky týkající se zdravotního stavu (po úraze, po operaci nebo s jinými specifiky) a chtějí si pomoct i jinou formou pohybu, než je rehabilitace, dostat se rychleji do kondice. Lekce může být individuální nebo skupinová do 5ti osob. 
                              </p>
                              <p className="text-center features__price--middle">
                                <strong>60 min / 500Kč</strong>  
                              </p>
                              <p className="text-center">
                                Do terapeutické yogy spadá i Hormonální yogová terapie dle Dinah Rodriguez zaměřená cíleně na hladinu ženských hormonů. Tato výuka probíhá pouze ve formě víkendových kurzů, které jsou plánovány se čtvrtletním předstihem.  
                              </p>
                              <p className="text-center features__price">
                                <strong>víkendový kurz / 2500Kč</strong>  
                              </p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  }
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </Container>
        <Container fluid style={{ padding: 0 }}>
          <BackgroundImage fluid={data.parallaxBackground.childImageSharp.fluid} className="parallax__background">
            <div className="parallax__overlay"></div>
          </BackgroundImage>
        </Container>
        <Container>
          <Row className="section__intro" id="section__video">
            <Col lg={6} className="herbs__right-col">
              <Img fluid={data.videoImage.childImageSharp.fluid} alt="Lotus yoga videa"/>
            </Col>
            <Col lg={6} className="herbs__left-col">
              <h1>Videa Lotus yoga</h1>
              <p className="text-center">
                Pokud je mezi vámi zastánce domácí yógové praxe nebo praxe na cestách a nechcete si nechat ujít svou pravidelnou yógovou lekci, pak jsou ideální volbou naše instruktážní videa, která natáčíme přesně pro tyto účely. K dispozici jsou:
              </p>
              <p className="text-center">
                Corona Yoga - Jak zvládnout paniku a zachovat si pevné zdraví<br />(set 6 lekcí za 400,-)
              </p>
              <p className="text-center">
                Mama Yoga - Jak cvičit a dýchat v těhotenství<br />(set 10 lekcí za 900,-)
              </p>
              <p className="text-center video__colored-card">
                Pro více informací využijte formulář níže, napište na panajotovova@lotuscentrum.cz nebo zavolejte <span>+420 733 647 007.</span> 
              </p>
            </Col>
          </Row>
          <Row className="section__intro" id="section__herbs">
            <Col lg={8} className="herbs__left-col">
              <h1>Bylinky a yoga</h1>
              <p className="text-center">
                Hledáte zajímavý doplňek ke cvičení nejen yogy? Příroda nám nadělila hned několik bylinek s příjemnými či téměř zázračnými účinky na naši bytost. Třeba taková guarana, která stimuluje výkon a je svým působením podobná kávě - ovšem několikanásobně delším účinkem, nebo kanna, která rozjasní Vaši mysl a zlepší náladu, nebo kratom který Vás uvolní a zároveň dodá spoustu energie a pocit dlouhotrvající euforie. Tyto a mnoho dalších bylinek můžete pořídit na spřízněném webu KratomLove.cz. 
                <span role="img" aria-label="usmiaty emoji">&nbsp; &#128578;</span>
              </p>
              <a href="https://www.kratomlove.cz" target="_blank" rel="noreferrer noopener">Zjistit více</a>
            </Col>
            <Col lg={4} className="herbs__right-col">
              <Img fluid={data.herbsImage.childImageSharp.fluid} alt="bylinky"/>
            </Col>
          </Row>
          <div className="section__intro" id="section__lessons">
            <h1>Individuální lekce</h1>
            <p className="text-center">
              Každý náročný klient se speciálními požadavky a očekáváním si přijde na své v individuálním vedení a přístupu. Od toho jsou zde Individuální lekce šité na míru. Pokud jste začátečníci a hledáte kvalitní start do světa yógy, neváhejte si svou vlastní lekci rezervovat u našich lektorů. Individuální lekce je vhodná i pro  každého, kdo hledá soukromí anebo nechce být součást velké skupiny.
            </p>
          </div>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={200}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(100px)",
                }}
              >
                {(props) => 
                  <Row className="section__lessons" style={{ ...props }}>
                    <Col lg={8}>
                      <BackgroundImage fluid={data.lessonsImage.childImageSharp.fluid} className="lessons__background">
                        <div className="lessons__overlay"></div>
                      </BackgroundImage>
                    </Col>
                    <Col lg={4}>
                      <form
                        key={1} 
                        className="lessons__form"
                        id="lessons__form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input type="hidden" name="form-name" value="bot-field" />
                          <p hidden>
                            <label>
                              Toto pole nevyplňujte: <input name="bot-field" />
                            </label>
                          </p>
                        <Row>
                          <Col>
                            <input className="form__text-input" ref={register({ required: true })} name="name" type="text" placeholder="Vaše jméno" />
                              {errors.name && <div className="form__error">Zadejte své jméno</div>}
                            <input className="form__text-input" ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i } })} name="email" placeholder="Váš email" />
                              {errors.email && errors.email.type === "required" && (
                                <div className="form__error">Zadejte svou emailovou adresu</div>
                              )}
                              {errors.email && errors.email.type === "pattern" && (
                                <div className="form__error">Zadaná adresa není platná</div>
                              )}
                            <input className="form__text-input" ref={register({ required: true, minLength: 9 })} name="telephone" type="tel" placeholder="Vaše telefónní číslo" />
                              {errors.telephone && errors.telephone.type === "required" && (
                                <div className="form__error">Zadejte své telefónní číslo</div>
                              )}
                              {errors.telephone && errors.telephone.type === "minLength" && (
                                <div className="form__error">Číslo je příliš krátké</div>
                              )}
                            <textarea className="form__text-input" ref={register({ required: true })} name="message" rows="7" placeholder="Vaše zpráva" />
                              {errors.message && <div className="form__error">Napište nám Vaše přání</div>}
                          </Col>
                        </Row>
                        <Row className="form__submit">
                          <button type="submit">Odeslat</button>
                        </Row>
                      </form>
                    </Col>
                  </Row>
                }
              </Spring>
            )}
          </VisibilitySensor>
        </Container>
        <Container>
          <div className="section__intro" id="section__contact">
            <h1>Kontakt</h1>
            <p className="text-center">Máš-li jakýkoliv dotaz, neváhej nám napsat, máš-li chuť nám zavolat, dole jsou kontakty. ;)</p>
          </div>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={200}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(100px)",
                }}
              >
                {(props) => 
                  <Row style={{ ...props }}>
                    <Col lg={12} className="contact">
                      <form 
                        key={2}
                        className="lessons__form"
                        id="lessons__form--2"
                        onSubmit={handleSubmit2(onSubmit2)}
                      >
                        <input type="hidden" name="form-name" value="bot-field" />
                          <p hidden>
                            <label>
                              Toto pole nevyplňujte: <input name="bot-field" />
                            </label>
                          </p>
                        <Row>
                          <Col>
                            <input className="form__text-input" ref={register2({ required: true })} name="name" type="text" placeholder="Vaše jméno" />
                              {errors2.name && <div className="form__error">Zadejte své jméno</div>}
                            <input className="form__text-input" ref={register2({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i } })} name="email" placeholder="Váš email" />
                              {errors2.email && errors2.email.type === "required" && (
                                <div className="form__error">Zadejte svou emailovou adresu</div>
                              )}
                              {errors2.email && errors2.email.type === "pattern" && (
                                <div className="form__error">Zadaná adresa není platná</div>
                              )}
                            <input className="form__text-input" ref={register2({ required: true, minLength: 9 })} name="telephone" type="tel" placeholder="Vaše telefónní číslo" />
                              {errors2.telephone && errors2.telephone.type === "required" && (
                                <div className="form__error">Zadejte své telefónní číslo</div>
                              )}
                              {errors2.telephone && errors2.telephone.type === "minLength" && (
                                <div className="form__error">Číslo je příliš krátké</div>
                              )}
                            <textarea className="form__text-input" ref={register2({ required: true })} name="message" rows="8" placeholder="Vaše zpráva" />
                              {errors2.message && <div className="form__error">Napište nám Vaše přání</div>}
                          </Col>
                        </Row>
                        <Row className="form__submit">
                          <button type="submit">Odeslat</button>
                        </Row>
                      </form>
                    </Col>
                  </Row>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <Row className="section__contact-details">
            <Col lg={4}>
              <h3>Jana Panajotovová</h3>
              <p>Mama Yoga, Therapy Yoga</p>
              <p>+420 733 647 007</p>
              <p>panajotovova@lotuscentrum.cz</p>
            </Col>
            <Col lg={4}>
              <h3>LotusCentrum</h3>
              <p>Recepce, Rezervace</p>
              <p>+420 739 918 000</p>
              <p>recepce@lotuscentrum.cz</p>
            </Col>
            <Col lg={4}>
              <h3>Ra Panajotov</h3>
              <p>Hatha Yoga</p>
              <p>+420 606 726 116</p>
              <p>panajotov@lotuscentrum.cz</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </animated.div>
  )
}

export default IndexPage
