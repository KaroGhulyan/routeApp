import styled from 'styled-components';
import DoneIcon from '@material-ui/icons/Done';

export const Wrapper = styled.div``;
export const Main = styled.div`
  width: 100%;
`;

export const StopsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 50px;
  /* z-index: -1; */
`;

export const Stop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  word-wrap: break-word;
  transition: all 0.7s ease;
  max-width: 360px;
  width: 100%;
  span {
    font-size: 16px;
    font-weight: normal;
    color: #282828;
    max-width: 218px;
  }
  p {
    font-size: 14px;
    color: #9b9b9b;
  }
  /* color: '#282828'; */
`;
export const StopWrapper = styled.div`
  background-color: ${(props) => (props.selected ? 'white' : '#e5e8e9')};
  border-radius: 2px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 360px;
  width: 100%;
  margin: 8px;
  &:hover {
    opacity: 0.9;
  }
`;

export const FinishSection = styled.div`
  max-width: 360px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & p {
      color: '#4688f1';
    }
  }
`;
export const FinishIcon = styled(DoneIcon)`
  color: ${(props) => (props.finished ? props.finished : '#4688f1')};
`;
export const StopNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: ${(props) => (props.selected ? props.selected : '#dedede')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;
export const StopInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Address = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`;

export const TimeInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: baseline;
  span {
    margin-bottom: 20px;
  }
`;
