import React from 'react';
import StepFrame from '../components/StepFrame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import babyImg from '../assets/baby.png';

export default function EnterMobile() {
    const [countryCode, setCountryCode] = React.useState('+98');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    function submitForm() {
        console.log({ countryCode, phoneNumber })
    }

    return (
        <StepFrame className="mobile-container">
            <div className="mobile-step">
                <img src={babyImg} alt="baby" />
                <form onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                }}>
                    <FontAwesomeIcon icon={faUserCircle} size={'10x'} />
                    <p>Enter your phone number.</p>
                    <div className="mobile-input">
                        <input className="big-input" type={'text'} value={countryCode} onChange={e => setCountryCode(e.target.value)} />
                        <input className="big-input phone-input" type={'text'} placeholder={'--- --- -- --'} onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <button className="big-button" type="submit">
                        <FontAwesomeIcon icon={faEnvelope} size={'2x'} /> <span>Send Code</span>
                    </button>
                </form>
            </div>
        </StepFrame>
    )
}