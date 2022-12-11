import React, { useState } from 'react';
import Button from './button';
import styles from './paginationStyles.module.css';
import Combobox from './combo';


const options = [1,2,3,5,10,20,50,100,250,500]


export default function Pagination() {
    const [refCombo, setrefCombo] = useState(null);

    const firstPage = () => {
        
    }

    const previousPage = () => {
        
    }

    const nextPage = () => {

    }

    const lastPage = () => {

    }


    const changeLimit = () => {

    }


    return (
        <div  className={styles.buttonsContainer}>
            <div>
                <Combobox setRef={setrefCombo} options={options} icon="file-text-o" onChange={changeLimit} />
                <Button icon="search" style={{...btnStyle,...btn2Style}} />
            </div>
            <div>
                <Button icon="skip-backward" style={btnStyle} onClick={firstPage} />
                <Button icon="caret-left" style={btnStyle} onClick={previousPage} />
                <Button icon="caret-right" style={btnStyle} onClick={nextPage} />
                <Button icon="skip-forward" style={btnStyle} onClick={lastPage} />
            </div>
        </div>
    )
}



const btnStyle = {
    margin: 0,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    border: "none",
    color: "#999",
    marginLeft: 5
  }
  
  const btn2Style = {
    border: "1px solid #ccc",
    borderRadius: 5,
    top: -7,
    marginLeft: 5
  }