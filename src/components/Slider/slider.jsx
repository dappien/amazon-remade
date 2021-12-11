import React from 'react';
import ReactSwipe from 'react-swipe';
import style from './slider.module.scss'
import Image from 'next/image';
import { UilAngleLeftB,UilAngleRightB} from '@iconscout/react-unicons'
import useWindowSize from '../../hooks/useWindowSize';
import {CarouselImages} from '../../styles/imageSources'

function Slider() {
  const size = useWindowSize();
  let reactSwipeEl;

  return (
    <div  className={style.slider}>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true ,auto:4500,speed:500}}
        ref={el => (reactSwipeEl = el)}
      >
        {CarouselImages.map((image,id) => (
          <div >
            <Image
              src={image}
              // width={3800}
              // height={1800}
              width={`${size.width}`<768 ? 3000 : 3800}
              height={`${size.width}`<768 ? 1500 : 1800}
              objectFit={`${size.width}`<769 ? "cover" : "contain"}
              className={style.banner}
              alt="image"
              id={id}
              key={id}
               
            />
          </div>
        ))}
      </ReactSwipe>
      <div className={style.buttonBlock}>
        <UilAngleLeftB className={style.singleButton} onClick={() => reactSwipeEl.prev()} size={ `${size.width}` < 1025 ? "40" : "80"} />
        <UilAngleRightB className={style.singleButton} onClick={() => reactSwipeEl.next()} size={ `${size.width}` < 1025 ? "40" : "80"} />
      </div>
   
    </div>
  );
}

export default Slider

