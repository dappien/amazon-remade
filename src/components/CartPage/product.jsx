import styles from './product.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromBasket, selectTotal } from '../../slices/basketSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { UilTrashAlt } from '@iconscout/react-unicons'
import NumberFormat from 'react-number-format'

function product({id,title,price,rating,description,category,image}) {
    const dispatch = useDispatch()
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
    const total = useSelector(selectTotal)
  
    return (
        <div className={styles.product}>
            
            <div className={styles.productBlock}>
                <div className={styles.input}>
                    <input type="checkbox" />
                </div>
               <div className={styles.image}>
                {image && 
                <Image 
                    src={image}
                    width={200}
                    height={160}  
                    objectFit="contain"                     
                />
                }
               </div>
               <div className={styles.infoBlock}>
                   <div>
                   <h6 >{title}</h6>
                    <div className={styles.starBlock}>
                        <h6>⭐⭐⭐⭐⭐</h6>
                        <h1>(12,123)</h1>  
                    </div>
                   
                    <div className={styles.optionBlock}>      
                        <h2 onClick={removeItemFromBasket} >Delete</h2>
                        <h2>Save</h2>
                        <h2>Compare with similar items</h2>
                    </div>

                   </div>
                   <div className={styles.priceB}>
                       <div className={styles.priceBlock}>
                           <h4>
                                <NumberFormat
                                    value={price}
                                    className="foo"
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    renderText={(value, props) => <div {...props}>{value}</div>}
                                />
                            </h4>
                       </div>
                       <div>
                           <UilTrashAlt onClick={removeItemFromBasket} />
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default product
