import React from 'react';
// import { withApollo } from '../libs/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { ALL_CHARACTERS } from '../gql/allCharacters';
import Link from 'next/link'
import Header from '../components/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"




import '../styles/bootstrap.css'



import '../styles/band.css'




const IndexPage = () => {
	// const { loading, error, data } = useQuery(ALL_CHARACTERS);
	// if (error) return <h1>Error</h1>;
	// if (loading) return <h1>Loading...</h1>;
	//
	// console.log(data)

	return (
		<>

		 <Header/>

			  <div className="container">
            <div className="myicons">

				<a href="https://www.facebook.com/theworksongsproject/" target="_blank"><FontAwesomeIcon className="myicon"  icon={faFacebook} size="2x" /></a>
						<a href="https://www.instagram.com/theworksongs/?hl=el" target="_blank"><FontAwesomeIcon className="myicon"   icon={faInstagram} size="2x" /></a>
					<a href="https://www.youtube.com/channel/UCtcjgOIUMQMtRkdmPWG_WPQ" target="_blank"><FontAwesomeIcon className="myicon"   icon={faYoutube} size="2x" /></a>
					</div>




				{/* <h1>The site is under construction</h1>

				 <div>
				   <img src="/underconstruction.png"></img>
				 </div> */}

				 <style jsx > {
				   `
				     .myicons {
							 display:flex;
							 justify-content: end;
						 }

						  .myicon {
							 margin:30px !important;

						 }

				   `
				 }


				 </style>

			 </div>

			{/* <div>
				{data.characters.results.map((data) => (
					<ul key={data.id}>
						<li>{data.name}</li>
					</ul>
				))}
			</div> */}
		</>
	);
};

// export default withApollo({ ssr: true })(IndexPage);

export default IndexPage;
