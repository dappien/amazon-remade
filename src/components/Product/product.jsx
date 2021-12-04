import React from 'react'
import style from './product.module.scss'
import Image from 'next/image';

function product(props){

 const images=props.images;
 const singleImages=props.singleImages;
 const headlines=props.headlines;

    return (
        <div className={style.product} >
            <h3>
                {props.headline}
            </h3>
            {props.images ? (
                <div className={style.imageBlock}>
                    {(images).map((image,id) => (
                        <div className={style.singleImageBlock}>
                            <Image 
                                src={props.images[id]}
                                width={150}
                                height={105}
                                alt="" 
                            />
                           {props.headlines && (
                                <h2>{props.headlines[id]}</h2>
                           )}

                        </div>
                    ))}
                </div>
            ):(
                <Image 
                src={singleImages}
                width={320}
                height={300}
                className={style.singleImage} 
            />
            )}
         
          <h5>Shop Now</h5>

        </div>
        
    )
}

export default product
