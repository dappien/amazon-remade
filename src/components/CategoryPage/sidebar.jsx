import React, { useState } from 'react'
import styles from './sidebar.module.scss';
function sidebar() {
    const [show,setShow] =useState(false);
    const [more,setMore]=useState(false);
    return (
        <div className={styles.sidebar}>
            <div className={styles.block}>
                <h4 className={styles}>Climate Pledge Friendly</h4>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">Climate Pledge Friendly</h4>
                </label>
            </div>

            <div className={styles.block}>
                <h4 >Department</h4>
                <h5>PC Game Headsets</h5>
                <h5>Playstation 4 Games</h5>
                <h5>Playstation Legacy</h5>
                <h5>Xbox One</h5>
                <h5>Nintendo Legacy</h5>
                <h5>Playsation 5</h5>
                <h5>Xbox Legacy</h5>
                <h5>Mac Game Headset</h5>
                {!show &&
                <h5 className={styles.moreView} onClick={() => setShow(true)}>See all 14 Departments</h5>
                }
                {show && 
                <div>
                    <h5>Video Games</h5>
                    <h5>Electronics</h5>
                    <h5>Cell Phones</h5>
                    <h5>Industrial</h5>
                    <h5>Sports</h5>
                    <h5 className={styles.moreView} onClick={() => setShow(false)} >See Fewer Departments</h5>
                </div>
                }
            </div>

            <div className={styles.block}>
                <h4 >Customer Review</h4>
                <h5>⭐⭐⭐⭐⭐ & Up</h5>
                <h5>⭐⭐⭐⭐ & Up</h5>
                <h5>⭐⭐⭐ & Up</h5>
                <h5>⭐⭐ & Up</h5>
                <h5>⭐ & Up</h5>
            </div>

            <div className={styles.block}>
                <h4 >Brand</h4>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">Razer</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">SteelSeries</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">BENGOO</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">HyperX</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">Logitech G</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">Turtle Beach</h4>
                </label>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <h4 className="checkmark">Logitech</h4>
                </label>
                {!more && 
                <h5 className={styles.moreView} onClick={()=>setMore(true)}>See more</h5>
                }
                {more && 
                <div>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">Corsair</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">ZUIMER</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">NUBWO</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">JBL</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">ASTRO Gaming</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">NIVAVA</h4>
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 className="checkmark">NPET</h4>
                    </label>
                    <h5 className={styles.moreView} onClick={()=>setMore(false)}>See less</h5>
                </div>
                }
            </div>

            <div className={styles.block}>
                <h4 >Video Game Price</h4>
                <h5>Under $10</h5>
                <h5>$10 to $15</h5>
                <h5>$15 to $25</h5>
                <h5>$25 to $35</h5>
                <h5>$35 & Above</h5>
                <div className={styles.buttonBlock}>
                    <input type="number" placeholder="$Min"/>
                    <input type="number" placeholder="$Max"/>
                    <button>Go</button>
                </div>
            </div>
        </div>
    )
}

export default sidebar
