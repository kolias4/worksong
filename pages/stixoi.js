import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { STIXOI } from '../gql/stixoi';
import Link from 'next/link'
import Loading from '../components/loading'
import {Container,Row,Col,Accordion,Card,Button} from 'react-bootstrap'
import Layout from '../components/layout'
import YouTube from 'react-youtube';
import { useRouter } from 'next/router'
import Head from 'next/head'

const StixoiPage = () => {


  const { loading, error, data } = useQuery(STIXOI)
	if (error) return <h1>Error</h1>;
	if (loading) return <Loading/>;




  return (
    <Layout>
      <Head>
    <title>Lyrics | Theworksongsproject</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
    <section className="bandvideos padsection">

      <div className="d-flex flex-column align-items-center mb-4">
       <h3>Lyrics</h3>
       <img src="/underline.png" alt="underline"/>
     </div>

      <Container>

        <Row>

          {data.stixoi.entities.map((item,i) => {
            return (
              <Col className="mb-3" key={item.title} md={4}>
                <Accordion >
                <Card>
                  <Card.Header style={{background:'black',textAlign:"center"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                      <h4 className="text-center">{item.title}</h4>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={i}>
                    <Card.Body style={{background:'black'}}>
                      <div dangerouslySetInnerHTML={{ __html: item.body.value }} />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                </Accordion>




             </Col>

            )
          })}





        </Row>


      </Container>



    </section>


    </Layout>
  )
}

// VideoPage.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { p:2 }
// }

export default withApollo({ ssr: true })(StixoiPage);
