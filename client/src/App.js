import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { AppDiv, Appheader, Applogo, Button, PP, PronCardsST, Input } from './Styles/Styles';
import PronosticoContainer from './view/pronosticoContainer';

const App = () => {

  const [pronostioExten, setPE] = useState()
  const [pronostioLocal, setLO] = useState()
  const [loading, setLoad] = useState(false)
  const [loadingLocal, setLoadLocal] = useState(false)

  useEffect(() => {
    loadingLocalizacion()
  }, [])

  const loadingLocalizacion = async () => {
    setLoadLocal(true)
    await fetch('/v1/current', { method: 'GET' })
      .then(res => res.text())
      .then(text => setLO(JSON.parse(text)))
    await fetch('/v1/forecast', { method: 'GET' })
      .then(res => res.text())
      .then(text => setPE(JSON.parse(text)))
    setLoadLocal(false)
  }

  const setLocalizacionActual = async () => {
    setLoad(true)
    await fetch('/v1/forecast', { method: 'GET' })
      .then(res => res.text())
      .then(text => setPE(JSON.parse(text)))
    setLoad(false)
  }

  const setLocalizacion = async (p_param) => {
    setLoad(true)
    await fetch(`/v1/forecast/${p_param}`, { method: 'GET' })
      .then(res => res.text())
      .then(text => setPE(JSON.parse(text)))
    setLoad(false)
  }

  return (
    <AppDiv>
      <Appheader >
        <Applogo src={logo} alt="logo" />

        <h3>Ver ciudades: </h3>

        <PronCardsST>
          <p> Ver en: Córdoba, Argentina</p>
          <Button onClick={() => setLocalizacion("Cordoba,AR")} > Ver</Button>
        </PronCardsST>

        <PronCardsST>
          <p> Ver en: Buenos Aires</p>
          <Button onClick={() => setLocalizacion("Buenos Aires")} > Ver</Button>
        </PronCardsST>

        <PronCardsST>
          <p> Ver en: Miami</p>
          <Button onClick={() => setLocalizacion("Miami,Florida,usa")} > Ver</Button>
        </PronCardsST>

        <PronCardsST>
          <p> Ver en: London</p>
          <Button onClick={() => setLocalizacion("London")} > Ver</Button>
        </PronCardsST>

        <PronCardsST>
          <p> Ver en: Rio De Janeiro</p>
          <Button onClick={() => setLocalizacion("Rio De Janeiro")} > Ver</Button>
        </PronCardsST>

        {
          loadingLocal ? (
            <p> Loading...</p>
          ) : (
              <>
              <h2> Su localizacion Actual</h2>
              <PronCardsST>
                <div style={{ textAlign: "left", padding: 20 }}>
                  <PP> Ciudad: {pronostioLocal ? pronostioLocal.name : ''} </PP>
                  <PP> Clima: {pronostioLocal ? pronostioLocal.weather[0].description : ''}</PP>
                  <PP> Temp: {pronostioLocal ? `${(pronostioLocal.main.temp - 273.15).toFixed(2)}°` : ''}</PP>
                  <Button onClick={() => setLocalizacionActual()} > Ver</Button>
                </div>
              </PronCardsST>
              </>
            )
        }
        {
          loading ? (
            <p> Loading...</p>
          ) : (
              <>

                <h3>Pronostico Extendido para: {pronostioExten ? pronostioExten.city.name : ''}</h3>
                <div style={{ backgroundColor: 'lightgray', borderRadius: 5, width: "95%" }}>
                  <PronosticoContainer pronostio={pronostioExten} />
                </div>

              </>
            )
        }
      </Appheader>
    </AppDiv>
  );
}

export default App;

