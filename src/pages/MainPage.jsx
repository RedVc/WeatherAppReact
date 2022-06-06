import React, { useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import Paper from '@mui/material/Paper'
import AppFrame from "./../components/AppFrame"
import CityList from "./../components/CityList"
import { getCities } from '../utils/serviceCities'


const MainPage = () => {
  const navigate = useNavigate()
  
  const onClickHandler = useCallback((city, countryCode) => {
    /* ejem: /city/CO/Bogotá */
    navigate(`/city/${countryCode}/${city}`)
  }, [navigate])

  return (
    <AppFrame>
      <Paper 
        elevation={10}
        >
        <CityList
          cities={ getCities() }
          onClickCity={ onClickHandler }
        />
      </Paper>
    </AppFrame>
  )
}

export default MainPage