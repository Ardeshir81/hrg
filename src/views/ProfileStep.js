import React from 'react';
import StepFrame from '../components/StepFrame';

import 'react-day-picker/lib/style.css';
import Profile from './Profile';
import { httpService } from '../services/http.service';

export default function ProfileStep() {
    const [userData, setUserData] = React.useState({});

    React.useEffect(() => {
        httpService.getUserProfile().then(response => {
            if (response.ok) {
                setUserData(userData)
            }
        })
    }, [])

    return (
        <StepFrame>
            <Profile disabled={true} userData={userData} />
        </StepFrame>
    )
}