import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { TextField, Button, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import laptop from '../assets/laptop.png'
import elnexu_logo from '../assets/elnexu_logo.png'
import footer_logo from '../assets/footer_logo.png'
//import TextArea from 'antd/es/input/TextArea';
import { alignProperty } from '@mui/material/styles/cssUtils';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    backgroundColor: '#000', // Black background
    width: '531px',
    marginTop:'-70px'
  
  },
  textField: {
    
    '& .MuiInputBase-input': {
      color: '#fff !important', // White text color
    },
    '& .MuiInputLabel-root': {
      color: '#fff !important', // White label color
      
    },
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red !important', // White border color
      },
      '&:hover fieldset': {
        borderColor: 'red',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'red !important',
      },
    },
    
  },
  
  button: {
    
    backgroundColor: '#3E4095 !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#ccc',
    },
    fontSize:'24px',
    height:'36px',
    font: "IRANSansWeb(FaNum)",
    textTransform: 'lowerCase'
  },
}));

const defaultUsername = 'elnexu';
const defaultPassword = 'password123';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    sessionStorage.clear();
      },[])
    

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    if (username === defaultUsername && password === defaultPassword) {
      sessionStorage.setItem('username',username)

      navigate('/admin');
      console.log(username);
      toast.success('welcome to elnexu');
    } else {
      toast.error('Invalid username or password');
    }
  };


  const classes = useStyles();

  return (
    <div className='login'>
    <div className='nav-logo'>
      <div>
      <img src={elnexu_logo} alt='' style={{width:'137.8px', height:'54.37px', marginTop:'82px', marginLeft: '105px', background: 'white'}}/>
      </div>
      <div>
    <img src={laptop} alt=''/>
      </div>
    </div>
    <Container maxWidth="xs" className={classes.root}>
      <div style={{color:'white', fontWeight:400, fontFamily: 'JK Abode', fontSize: '30px'}}>login</div>
      <Box >
      <form onSubmit={handleSubmit}>
        <TextField
        sx={{mt: 2}}
          className={classes.textField}
          label="Username"
          id="username"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

          fullWidth
        />
        <TextField
        sx={{mt: 2}}
          className={classes.textField}
          label="Password"
          id='password'
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          fullWidth
        />
        <Button
          sx={{mt: 2}}
          type='submit'
          fullWidth
          className={classes.button}
          

        >
          login
        </Button>
        </form>
      </Box>
    </Container>
    <div style={{width:'471px', height:'250px', marginTop: '-25px'}}>
      <img src={footer_logo} alt=''/>
    </div>
    </div>
  );
};

export default Login;
