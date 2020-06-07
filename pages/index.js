import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../gql/allCharacters';
import Link from 'next/link'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import Layout from '../components/layout'
import YouTube from 'react-youtube';







const IndexPage = () => {
	const { loading, error, data } = useQuery(ALL_CHARACTERS);
	if (error) return <h1>Error</h1>;
	if (loading) return <h1>Loading...</h1>;

	console.log(data)

	const opts ={
		height: '300px',
		width: '100%'

	}

	return (

		 <Layout>

			 <div className="bannercontainer">

			 </div>

			 <section className="bandvideos spacesection">

				 <Container>

					 <Row>
						 <Col md={6}>
							   <h3>Title</h3>
							 <YouTube opts={opts} videoId="HkEyJfwm1BQ"/>
						 </Col>
						 <Col md={6}>
							 <h3>Title</h3>
							 <YouTube opts={opts} videoId="2g811Eo7K8U"/>
						 </Col>
					 </Row>

				 </Container>



			 </section>



			 <style jsx  > {
				 `
		.bannercontainer {
		 height: 600px;
		 background: url(/header3.jpg) no-repeat #000;
		 overflow: hidden;
		 background-attachment: fixed;
		 background-position: 50% 0;
		 background-size: cover;

					 }



				 `
			 }


			 </style>

		 </Layout>

	);
};

// IndexPage.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

export default withApollo({ ssr: true })(IndexPage);

// export default IndexPage;
