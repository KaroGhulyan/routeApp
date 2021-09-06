import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { routes,currentStop, selectCurrentStop, finishedCount } from '../../features/appSlice';
import {
  Stop,
  StopNumber,
  StopInfo,
  Address,
  TimeInfo,
  FinishIcon,
  FinishSection,
  StopWrapper,
} from '../../style';

function StopItem({ stop, stops, index }) {
  const {
    information,
    sequence_number,
    arr_time_string,
    end_time_string,
    time_window_earliest,
    time_window_latest,
    isFinished
  } = stop;
  const [selected, setSelected] = useState(false);
  const [finished, setFinished] = useState(false);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  

  const handleClick = () => {
    !finished && setSelected(!selected);
  };
  const endRoute = () => {
    let routesData = JSON.parse(JSON.stringify([...stops]));
    routesData[index].isFinished = true;
    dispatch(finishedCount())
    dispatch(routes(routesData))
    dispatch(currentStop(stop));
    setFinished(true);
  };

  useEffect(() => {
    if(isFinished){
      setFinished(true)
    }
  }, [stop])
  useEffect(() => {
    if (selected) {
      setColor('#E90052');
    }
    if (finished) {
      setColor('#4688F1');
    }
  }, [selected, finished]);
  return (
    <StopWrapper selected={selected} finished={finished}>
      <Stop onClick={handleClick} finished={finished}>
        <StopInfo>
          <StopNumber selected={selected || finished ? color : ''}>
            {finished ? (
              <FinishIcon finished={finished && 'white'} />
            ) : (
              sequence_number
            )}
          </StopNumber>
          <Address>
            <span>{information?.name}</span>
            <p>{information?.street}</p>
            <p>
              {information?.zipcode} {information?.city}
            </p>
          </Address>
        </StopInfo>
        {!finished && (
          <TimeInfo>
            <span>{arr_time_string || end_time_string}</span>
            <p>
              {time_window_earliest}-{time_window_latest}
            </p>
          </TimeInfo>
        )}
      </Stop>
      {selected && !finished && (
        <FinishSection onClick={endRoute}>
          <div>
            <FinishIcon />
            <p>Finish</p>
          </div>
        </FinishSection>
      )}
    </StopWrapper>
  );
}

export default StopItem;
