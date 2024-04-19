import Button from '@mui/material/Button';


const CustomButton = () => {

  return (
    <Button variant = 'contained'
        sx={{
            width: 570,
            height: 100,
            borderRadius: 4,
            backgroundColor: '#66a5e9',
            textTransform: 'none', 
            fontSize: '25px', 
        }} >
        Material-UI
    </Button>
  );
};

export default CustomButton;
