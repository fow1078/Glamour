import React from 'react';
import loadingGif from '../assets/images/loading.gif'

function Loading() {
  return (
    <div className='loading' style={{height: '100vh', width: '100%', backgroundColor: '#000', position: 'fixed', top: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <img src={loadingGif} style={{width: '200px', height: 'auto'}} />
      <h5 style={{color: '#fff', marginTop: '10px'}}>Loading...</h5>
    </div>
  )
}

export default Loading;
