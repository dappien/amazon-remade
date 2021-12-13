import style from "./grid.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Product(props) {
  const images = props.images;
  const singleImages = props.singleImages;
  const headlines = props.headlines;

  return (
    <Link href={`/products/category/${props.category}`}>
      <div className={style.product}>
        <h3>{props.headline}</h3>
        {props.images ? (
          <div className={style.imageBlock}>
            {images.map((image, id) => (
              <div className={style.singleImageBlock}>
                <Image
                  src={props.images[id]}
                  width={150}
                  height={115}
                  alt="image"
                  id={id}
                  key={id}
                />
                {props.headlines && <h2>{props.headlines[id]}</h2>}
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={singleImages}
            width={360}
            height={300}
            className={style.singleImage}
            alt="image"
            id={1}
          />
        )}

        <h5>Shop Now</h5>
      </div>
    </Link>
  );
}

export default Product;
