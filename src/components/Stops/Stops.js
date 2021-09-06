import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoutes } from '../../features/appSlice';
import { StopsWrapper } from '../../style';
import StopItem from './StopItem';

function Stops() {
  const route = useSelector(selectRoutes);


  return (
    <StopsWrapper>
      {route.map((stop,index) => (
        <StopItem index={index} stops={route} stop={stop} key={index}/>
      ))}
    </StopsWrapper>
  );
}

export default Stops;
