import React from 'react';
import StepFrame from '../components/StepFrame';

import 'react-day-picker/lib/style.css';
import Profile from './Profile';

export default function ProfileStep() {

    return (
        <StepFrame>
            <Profile disabled={true} />
        </StepFrame>
    )
}