import React from 'react';
import style from './country.module.css'

const Country = (props) => {
    const {country} = props
    // console.log(props)
    const {name, flags, capital, population, area} = country
    // console.log(country.length)
    const handleRemoveCountry=(name)=>{
        props.onRemoveCountry(name)
    }
    return (
        <article className={style.country}>
            <div>
                <img className={style.flag} src={flags.png} alt={name.common}/>
                <h3>Name: {name.common}</h3>
                <h3>Population: {population}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Area: {area}</h3>
                <button onClick={()=>{
                    handleRemoveCountry(name.common)
                }} className={style.btn}>
                    Remove Country
                </button>
            </div>
        </article>
    );
};

export default Country;
