import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { VIDEOS } from '../gql/video';
import Link from 'next/link'
import Loading from '../components/loading'
import {Container,Row,Col,Pagination} from 'react-bootstrap'
import Layout from '../components/layout'
import YouTube from 'react-youtube';
import { useRouter } from 'next/router'

const VideoPage = () => {
  const router = useRouter()

  var limit =10;

  var {p} = router.query
  if(!p) p=0;
  const { loading, error, data } = useQuery(VIDEOS,{
    variables: {

  offset: Number(p) || 0,
  limit: limit
}
  });
	if (error) return <h1>Error</h1>;
	if (loading) return <Loading/>;

  const opts ={
    height: '300px',
    width: '100%'

  }

  var count = Math.ceil(data.videos.count/limit)

  console.log(router)

  console.log(count)

  return (
    <Layout>
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



    </section>

    <section className="Pagination  d-flex justify-content-center">

      <Pagination>

        {count > 1 &&
         Array.from({length:count}).map((_,i) => {
           return (
             <li key={i} className={`page-item ${p/limit === i?'active':''}`}>
                <Link href={{ pathname: '/videos', query: { p:i*limit } }}>
                <a className="page-link">{i+1}</a>
              </Link>
             </li>



           )
         })
        }

        {/* <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item> */}

      </Pagination>

    </section>
    </Layout>
  )
}

// VideoPage.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { p:2 }
// }

export default withApollo({ ssr: true })(VideoPage);
