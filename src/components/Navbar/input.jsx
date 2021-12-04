import React from "react";
import styles from "./input.module.scss";
import { UilSearch } from '@iconscout/react-unicons'
function Input() {
  return (
    <div className={styles.searchBar}>
      <select id="cars">
        <option value="All Categories">All Categories</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <input className="input"></input>
      <button className="button"><UilSearch/></button>
    </div>
  );
}

export default Input;
