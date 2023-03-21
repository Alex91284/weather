import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from '../utilis/serviceCities'

const MainPage = ({ actions, data }) => {
    const navigate = useNavigate()

    const onClickHandler = React.useCallback((city, countryCode) => {        
        navigate(`/city/${countryCode}/${city}`)
    },[navigate])
    
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    data={data}
                    actions={actions}
                    cities={getCities()}
                    onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
