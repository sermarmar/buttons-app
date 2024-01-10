import { Box, Typography } from '@mui/material';
import './App.css'
import { Buttons } from './components/Buttons';

export const App = () => {
  return (
    <>
      <Box>
        <Typography variant='h1'>Buttons Component</Typography>
        <Buttons />
      </Box>
    </>
  )
}
