import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loading = () => {

  return (
   <div className="loading">
     <Spinner style={{width:'100px',height:'100px',color:'white'}} animation="border" role="status" size="xl">
<span className="sr-only">Loading...</span>
</Spinner>

    <style jsx>{`

      .loading{
        position:absolute;
        width:100%;
        height:100%;
        z-index:2000;
        background:#080c19;
        display: flex;
        align-items: center;
        justify-content: center;

      }

    `}</style>
   </div>


  )
}

export default Loading;
