import React from 'react';
import { Redirect } from 'react-router-dom'
import StepFrame from '../components/StepFrame';

import 'react-day-picker/lib/style.css';
import Profile from './Profile';

export default function RegisterStep() {
    const [goToStepFour, setGoToStepFour] = React.useState(false);

    function submit(data) {
        console.log(data);
        setGoToStepFour(true);
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