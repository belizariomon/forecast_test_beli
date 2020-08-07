import React, { useEffect, useState } from 'react';
import {PronCardsST, PP} from '../Styles/Styles'

const PronosticoCard = (props) => (
    <PronCardsST>

        <div style={{flex:0.6, textAlign:"left"}}>
            <PP>Fecha: <b>{props.data.dt_txt.split(" ")[0]}</b></PP> 
            <PP>Hora: {props.data.dt_txt.split(" ")[1]} </PP> 
            <PP>Clima: {props.data.weather[0].description}</PP> 
            <PP> Temp: {`${(props.data.main.temp - 273.15).toFixed(2)}°`}</PP>

        </div>

        <div style={{flex:0.4}}>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
                alt=" Info clima icon"
                // sinceramente estoy acotado de tiempo para pasarlo a styled component v
                style={{ backgroundColor: '#282c34', padding: 1, borderRadius: 11, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, margin:"auto"}}
            />
        </div>

    </PronCardsST>
);

export default PronosticoCard; 
