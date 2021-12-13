import { concatedImageSources } from "../../styles/imageSources";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from './grid_resp.module.scss'
import React from 'react';

function productGrid_resp(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div
      className={styles.productGrid_resp}
    >
      <Carousel
        arrows={false}
        className={styles.slider_resp}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={100}
        containerClass="carousel-container"
      >
        {concatedImageSources.map((product, id) => (
          // <div style={style}>{product.title}</div>
          <div  className={styles.imageBlock_resp}>
            <div>
               {props.headlines[id]}
             </div>
            <Image 
              width={560} 
              height={420} 
              src={product} 
              key={id}
              className={styles.image_resp} 
              objectFit="cover"
             />
             
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default productGrid_resp;
