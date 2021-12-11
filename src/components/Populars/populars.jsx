import styles from "./populars.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

function Populars({ products }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className={styles.populars}>
      <h2>Popular Products</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product, id) => (
          // <div style={style}>{product.title}</div>
          <Link href={`/products/${product.id}`}>
            <div>
              <Image
                width={200}
                height={200}
                src={product.image}
                alt={product.description}
                key={product.id}
                className={styles.productImage}
                key={id}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Populars;
