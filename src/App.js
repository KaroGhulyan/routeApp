import React, { useEffect, useState } from 'react';
import './App.css';
import { routes } from './features/appSlice';
import { fetchRoutes } from './features/routesAPI';
import Header from './components/Header';
import Map from './components/Map/Map';
import Stops from './components/Stops/Stops';
import { Wrapper, Main } from './style';
import { useDispatch } from 'react-redux';
import data from './features/data.json'

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const selectedTab = (value) => {
    setValue(value);
  };

  useEffect(async () => {
    dispatch(routes(data.stops));
  }, []);

  return (
    <Wrapper>
      <Header selectedTab={selectedTab} />
      <Main>{!value ? <Stops /> : <Map />}</Main>
    </Wrapper>
  );
}

export default App;
