import React, { useEffect, useState } from 'react';
import PronosticoCard from './pronosticoCard';

const PronosticoContainer = (props) => {

    useEffect(() => { 
    }, [])

    return (

        <div style={{width:"100%"}}> 
            {
                props.pronostio && props.pronostio.list ? (
                    props.pronostio.list.map((item, idx)=>(
                        <PronosticoCard key={idx} data={item}/> 
                    ))
                ) : (
                        <></>
                    )
            }
        </div>
    );
}

export default PronosticoContainer; 
