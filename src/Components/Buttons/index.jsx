import {Button} from '@mui/material';

export const MuiButton = () => {
  return (
    <div className = 'MuiButton'>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </div>
  );
 }

export const TestButton = ({ButtonName, onClick}) => {
  const handleChange=() => {
    alert("redirect to Login page");
  }
  return(
    <div className='TestButton'>
        <button onClick={() => handleChange()}> Get Started </button>
        <Button onClick={onClick}>{ButtonName}</Button>
    </div>
  );
}

export const PrimaryButton = ({ButtonName}) => {
   return(
    <div className='PrimaryButton'>
    <Button variant="primary">{ButtonName}</Button>
    </div>
   );
}