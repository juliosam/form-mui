import React, { useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  field:{
    marginTop:20,
    marginBottom:20,
    display:'block'
  }
 
})

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  return (
    <div>
      <Container>
      <Typography
      variant='h6'
      color='textSecondary'
      component='h2'
      gutterBottom
      >
        Create a New Note
       </Typography>
       <form noValidate autoComplete='off'>
       <TextField
         onChange={(e)=>setTitle(e.target.value)}
         className={classes.field}
         label='Note Title'
         variant='outlined'
         color='secondary'
         fullWidth
         required
         />
         <TextField
         className={classes.field}
         label='Details'
         variant='outlined'
         color='secondary'
         multiline
         rows={4}
         fullWidth
         required
         />
       </form>
       <Button
       variant='contained'
       color='primary'
       type='submit'
       endIcon={<KeyboardArrowRight/>}
       >
         Submit
       </Button>
       <Button
       variant='contained'
       color='secondary'
       type='submit'
       endIcon={<KeyboardArrowRight/>}
       >
         Purpleter
       </Button>
       </Container>
         
    </div>
  )
}
