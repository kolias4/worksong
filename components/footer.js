import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { FOOTER } from '../gql/footer';

const Footer = () => {

  const { loading, error, data } = useQuery(FOOTER);
  if (error) return <h1>Error</h1>;
  if (loading) return null;

  console.log(data)




    return (
      <footer className="footer">

       <Container>
       <section className="spacesection d-flex flex-column align-items-center">
        <h3>Theworksongsproject</h3>
        <img src="/underline.png" alt="underline"/>
       </section>

       <section className="spacesection social">

       <div className="myicons d-flex align-items-center justify-content-center">

				<a className="mx-3" href="https://www.facebook.com/theworksongsproject/" target="_blank">
        <FontAwesomeIcon className="social_icon"  icon={faFacebook} size="3x" />
        </a>
						<a href="https://www.instagram.com/theworksongs/?hl=el" target="_blank">
            <FontAwesomeIcon className="social_icon" icon={faInstagram} size="3x" /></a>
					<a className="mx-3" href="https://www.youtube.com/channel/UCtcjgOIUMQMtRkdmPWG_WPQ" target="_blank">
          <FontAwesomeIcon className="social_icon"   icon={faYoutube} size="3x" />
          </a>
					</div>



       </section>

        <section className="spacesection copyrights text-center">
            <small>Copyright © 2020. Theworksongsproject.</small>
        </section>


       </Container>


      <style jsx   > {
        `
        .footer {
          color: white;
          background: url(${data.footerimage.entities[0].fieldBannerImage.entity.fieldMediaImage.url}) no-repeat #000 center center;
          overflow: hidden;
          background-attachment: fixed;
          background-position: 50% 0;
          background-size: cover;
          padding-bottom: 50px;

          a{
            color:white;
            &:hover{
              color:grey;
            }
          }

          .social_icon {
            color:white;

          }

        }



        `
      }


      </style>
      </footer>
    );


}

export default withApollo({ ssr: true })(Footer);

// export default Footer;
