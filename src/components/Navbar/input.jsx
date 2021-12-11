import React from "react";
import styles from "./input.module.scss";
import { UilSearch } from '@iconscout/react-unicons'
function Input() {
  return (
    <div className={styles.searchBar}>
      <select id="cars">
        <option value="All Categories">All Categories</option>
        <option >Arts & Crafts</option>
        <option >Automative</option>
        <option >Baby</option>
        <option >Saab</option>
        <option >Beauty & Personal Care</option>
        <option >Books</option>
        <option >Computers</option>
        <option >Digital Music</option>
        <option >ELectronics</option>
        <option >Kindle Store</option>
        <option >Prime Video</option>
        <option >Women's Fashion</option>
        <option >Men's Fashion</option>
        <option >Girl's Fashion</option>
        <option >Boys' Fashion</option>
        <option >Deals</option>
        <option >Health & Household</option>
        <option >Home & Kitchen</option>
        <option >Industrial & Scientific</option>
        <option >Luggage</option>
      </select>
      <input className="input"></input>
      <button className="button"><UilSearch/></button>
    </div>
  );
}

export default Input;
