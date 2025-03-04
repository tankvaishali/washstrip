import React from 'react';

function ButtonCom(props) {
  return (
   <>
   <button className="c-button c-button--gooey p-2 px-4 text-decoration-none fw-bold fstyle"> {props.btn}
  <div className="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display:"block",height:0,width:"0"}} >
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
   </>
  );
}

export default ButtonCom;
