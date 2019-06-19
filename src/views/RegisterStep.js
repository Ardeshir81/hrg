import React from 'react';
import { Redirect } from 'react-router-dom'
import StepFrame from '../components/StepFrame';

import 'react-day-picker/lib/style.css';
import Profile from './Profile';
import { httpService } from '../services/http.service';

export default function RegisterStep() {
    const [goToStepFour, setGoToStepFour] = React.useState(false);

    function submit(data) {
        console.log(data);
        httpService.register(data).then(() => {
            setGoToStepFour(true);
        }).catch(() => {
            setGoToStepFour(true);
        });
    }

    if (goToStepFour) {
        return <Redirect to="/step/profile" />;
    }

    return (
        <StepFrame>
            <Profile onSubmit={submit} />
        </StepFrame>
    )
}