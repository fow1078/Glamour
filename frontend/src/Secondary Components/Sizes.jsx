import { useState } from 'react';
import { useSelector } from 'react-redux';

function Sizes({ sizes, size, setSize }) {
  const { isEnglish } = useSelector((store) => store.lang);
  const sizeOnChange = (ev) => {
    setSize(ev.target.value);
  }
  let active = size;
  return (
    <div style={{marginTop: '10px', width: '100%'}}>
      <fieldset className='myFieldSet'>
        <legend style={{color: '#fff', fontSize: '16px'}}>{isEnglish ? 'Size' : 'Розміри'}: </legend>
        <div className='sizeList'>
          {sizes.length > 0 ? sizes.map((size, ind) => {
            return  <div  key={ind} style={{marginBottom: '5px'}}>
              <input onChange={sizeOnChange} type="radio" id={size} name='size' value={size} className='d-none sizeInput' />
              <label className='size-label'  htmlFor={size} style={{color: active === size ? '#000' : '#fff', backgroundColor: active === size ? '#fff' : ''}}>{size}</label>
            </div>
          }) 
          :
          <div style={{marginBottom: '5px'}}>
            <input onLoad={sizeOnChange} type="radio" id='OS' name='size' value='OS' className='d-none sizeInput' />
            <label className='size-label'  htmlFor='OS' style={{color: '#000', backgroundColor: '#fff'}}>OS</label>
          </div>
        }
        </div>
      </fieldset>
    </div>
  )
}

export default Sizes;
