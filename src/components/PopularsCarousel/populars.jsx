
import styles from './populars.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { UilPlusCircle } from '@iconscout/react-unicons'

function Populars({products}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 5
        }
      };
    return (
        <div className={styles.populars} >
        <Carousel responsive={responsive}
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
          {products.map((product)=>(
              // <div style={style}>{product.title}</div>
              <div>
                <Image
                  width={240}
                  height={240}
                  src={product.image}
                  alt={product.description} 
                  key={product.id}
                  className={styles.productImage}             
                />
              
                <UilPlusCircle className={styles.plus} size="100" color="#ffa600"/>
              </div>
             
          ))}
           
           
        </Carousel>
        </div>
    )
}

export default Populars
