import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../gql/allCharacters';
import Link from 'next/link'
import Loading from '../components/loading'
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
	if (loading) return <Loading/>;

	console.log(data)

	const opts ={
		height: '300px',
		width: '100%'

	}

	return (

		 <Layout>

			 <div className="bannercontainer">

			 </div>



			 <section className="bandvideos padsection">

				 <div className="d-flex flex-column align-items-center mb-4">
					<h3>Videos</h3>
					<img src="/underline.png" alt="underline"/>
				</div>

				 <Container>

					 <Row>
						 {data.videos.entities.map((video) => {
							 return (
								 <Col className="mb-3" key={video.fieldVideoId} md={6}>

									<YouTube opts={opts} videoId={video.fieldVideoId}/>
								</Col>

							 )
						 })}

					 </Row>


				 </Container>

				  <div className="buttoncontainer text-center">
						<Link href="/videos">
							<a className="btn btn-orange">More Videos</a>
						</Link>
					</div>



			 </section>




			 <style jsx  > {
				 `
		.bannercontainer {
		 height: 600px;
		 background: url(${data.homeimage.entities[0].fieldBannerImage.entity.fieldMediaImage.url}) no-repeat #000;
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
