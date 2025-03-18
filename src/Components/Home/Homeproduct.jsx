import React from 'react';
import Titlecom from '../HOC/Titlecom';

function Homeproduct() {
  const logos = [
    { img: "https://assets.norwex.com/catalog_service/system/images/style/ipad_large_1x/e58e5f4bf8888c5488d1d8e8adcf3b73a306faf7.jpg?1698882660" },
    { img: "https://dontmesswithmama.com/wp-content/uploads/2023/04/strip-wash-laundry-benefits-2.png.webp" },
    { img: "https://www.honestlymodern.com/wp-content/uploads/2024/05/Tru-Earth-Eco-strips-Review-1-1000x1328.jpg" },
    { img: "https://s.alicdn.com/@sc04/kf/H5aeefe3a9cca489cb12ca06807cd52f1f.jpg_720x720q50.jpg" },
    { img: "https://www.ifbappliances.com/media/mageplaza/blog/post/4/1/417x250_4.png" },
    { img: "https://i.ebayimg.com/images/g/OusAAOSwMf9iTScj/s-l1200.webp" },
    { img: "https://klaaar.care/cdn/shop/files/3_e31f8284-dab4-4e11-90da-21b26a5243f0.png?v=1697717216&width=1445" },
    { img: "https://www.armandhammer.com/-/media/aah/feature/articles/laundry-articles/header-clean-fabric.jpg" },
    { img: "https://cdn.shopify.com/s/files/1/0030/2333/9618/files/79.jpg?v=1607110939" },
    { img: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2023_05/1963367/230201-laundry-stripping-kb-2x1.jpg" },
    { img: "https://www.threads4thought.com/cdn/shop/products/GoodJuju-Laundry-Strip-01.jpg?crop=center&height=469&v=1628637310&width=375" },
  ];
  const logos02 = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fgDuxzLJiVDZxc9MRO6Ct4oT7YZBdFRsdXPARGzwAzFdTb4YBwJ_aNkxIhv6ktwkyqY&usqp=CAU" },
    { img: "https://img.choice.com.au/-/media/8f073d5cbc914b1482391501f0238782.ashx?w=660&jq=80%20660w" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBtJGN8eVfNzq172qgySP3mfKm61DyvVQbLyCJJyuyhFbiP2oyTWazq6h6wsbowQhwwM&usqp=CAU" },
    { img: "https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288817962/how-to-get-rid-of-static-cling-in-your-laundry-1.webp/w_1200,c_limit/" },
    { img: "https://www.marthastewart.com/thmb/nxxVFCxBOikmk5ElgxXay_CeCi4=/400x266/filters:no_upscale():max_bytes(150000):strip_icc():focal(2739x1625:2741x1627)/laundry-room-organizing-lead-getty-1023-c779027b3cc644578cf3aa947ed62e82.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oYVNhNNt4_sqd3jt5YrFTwzG0dUb3upfba5swfEYNYDia8exeTe7rSZXYz-Pyhy43Lg&usqp=CAU" },
    { img: "https://cdn.create.vista.com/api/media/small/718042596/stock-photo-man-cozy-homewear-holds-laundry-bag-front-washing-machine" },
    { img: "https://www.southernliving.com/thmb/NDV6WFYZk3TRzJDUJozhBsA09e4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1467840031-61d56f92c2fa41fd8ac15e8653d10ae0.jpg" },
    { img: "https://cdn.mos.cms.futurecdn.net/BbGYHn9hp3ou6PL5EEAdhG-1200-80.jpg" },
    { img: "https://www.housedigest.com/img/gallery/the-laundry-sorting-hack-that-prolong-the-life-of-your-detergent/intro-1696600307.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aGudzW9UzcBvPcwwBbkQV4adJHLwgRPkuzU4BMK5YUgJ1NVSIFcM8JyG2u003stnKXg&usqp=CAU" },
  ];
  let heading = [
    {
      img: require("../../Assets/images/small_load_png.png"),
      tittle: "Small Load – ½ sheet",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3531/3531818.png",
      tittle: "Regular Load – 1 sheet",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5654/5654668.png",
      tittle: " Large or Heavily Soiled Load – 2 sheets",
    },
  ]
  return (
    <>
      <div className='homeproduct_bg ' >
        <div className="container-fluid py-5">
          <div className="container">
            <div className='text-white text-center d-flex flex-column justify-content-center align-items-center'>
              <Titlecom ftitle="Our Products" title="How Many Washstrip Sheets Do You Need?" />
            </div>
            <p className='pera text-secondary text-center fw-bold pt-2 mb-1'>Using Washstrip Detergent Sheets is simple! Just follow this easy guide to get the perfect clean every time:
            </p>
            <div className='text-white fw-bold text-center d-block d-lg- my-2 d-lg-flex  justify-content-center align-items-center'>

              {
                heading.map((x, i) => {
                  return (

                    <div className='ps-1 d-flex align-items-center' key={i}>
                      <div style={{ width: 50 }} className='ms-1'>
                        <img src={x.img} alt="" className='img-fluid ' />
                      </div>
                      <div className='ps-1'> {x.tittle}</div>
                    </div>
                  )

                })
              }
            </div>
          </div>

          <div className="partners-logo-slider  mt-2 pt-2 pt-lg-5">
            <div className="slide-track">

              {logos.concat(logos).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
              {logos.concat(logos).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}

            </div>
          </div>
          <div className="partners-logo-slider  mb-2 pb-lg-5">
            <div className="slide-track02">

              {logos02.concat(logos02).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
              {logos02.concat(logos02).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Homeproduct;
