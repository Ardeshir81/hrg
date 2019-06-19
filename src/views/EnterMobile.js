import React from 'react';
import { Redirect } from 'react-router-dom';
import StepFrame from '../components/StepFrame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import babyImg from '../assets/baby.png';
import { httpService } from '../services/http.service';

export default function EnterMobile() {
    const [countryCode, setCountryCode] = React.useState('+98');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [goToStepTwo, setGoToStepTwo] = React.useState(false);

    function submitForm() {
        console.log({ countryCode, phoneNumber });
        httpService.generatePasscode(countryCode + phoneNumber)
            .then(() => {
                setGoToStepTwo(true);
            })
            .catch(() => {
                setGoToStepTwo(true);
            })
    }

    if (goToStepTwo) {
        return <Redirect to="/step/verify" />;
    }

    return (
        <StepFrame>
            <div className="mobile-step">
                <img src={babyImg} alt="baby" />
                <form onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                }}>
                    <FontAwesomeIcon icon={faUserCircle} size={'10x'} />
                    <p>Enter your phone number.</p>
                    <div className="mobile-input">
                        <input className="big-input" type={'text'} value={countryCode} onChange={e => setCountryCode(e.target.value)} placeholder={'+1-99'} />
                        <input autoFocus className="big-input phone-input" type={'text'} placeholder={'--- --- -- --'} onChange={e => setPhoneNumber(e.target.value)} maxLength={10} />
                    </div>
                    <button className="big-button" type="submit">
                        <FontAwesomeIcon icon={faEnvelope} size={'2x'} /> <span>Send Code</span>
                    </button>
                </form>
            </div>
        </StepFrame>
    )
}