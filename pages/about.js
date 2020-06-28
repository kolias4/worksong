import React from 'react';

import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ABOUT } from '../gql/about';
import Link from 'next/link'
import Loading from '../components/loading'
import {Container} from 'react-bootstrap'
import Layout from '../components/layout'
import Head from 'next/head'

const AboutPage = () => {
  const { loading, error, data } = useQuery(ABOUT)
  if (error) return <h1>Error</h1>;
  if (loading) return <Loading/>;

  return (
    <Layout>
    <Head>
  <title>About | Theworksongsproject</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>

  <section className="bandvideos padsection">
  <div className="d-flex flex-column align-items-center mb-4">
   <h3>{data.about.entities[0].title}</h3>
   <img src="/underline.png" alt="underline"/>
 </div>

 <Container>
 <div dangerouslySetInnerHTML={{ __html: data.about.entities[0].body.value }} />
 </Container>

  </section>
  </Layout>

  )
}

export default withApollo({ ssr: true })(AboutPage);
