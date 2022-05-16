import React from 'react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  btn:{
    fontSize: 60,
    backgroundColor: 'violet'
  }
})

export default function Create() {
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
       <Button
       variant='contained'
       color='secondary'
       type='submit'
       endIcon={<KeyboardArrowRight/>}
       >
         Submit
       </Button>
       </Container>
         
    </div>
  )
}
