import React from 'react';
import { Redirect } from 'react-router-dom';
import StepFrame from '../components/StepFrame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faKey } from '@fortawesome/free-solid-svg-icons'

import babyImg from '../assets/baby.png';
import { httpService } from '../services/http.service';

const inputsSymbol = [0, 1, 2, 3, 4];

export default function Verify() {
    const [verificationKey, setVerificationkey] = React.useState([]);
    const [goToStepThree, setGoToStepThree] = React.useState(false);

    const d1 = React.useRef();
    const d2 = React.useRef();
    const d3 = React.useRef();
    const d4 = React.useRef();
    const d5 = React.useRef();
    const submitButton = React.useRef();

    const refsMap = [d1, d2, d3, d4, d5];

    function setVerificationIndex(index, digit) {
        const copy = verificationKey.slice();
        copy[index] = digit;
        setVerificationkey(copy);
    }

    function submitForm() {
        httpService.checkPasscode(verificationKey.join(''))
            .then(response => {
                setGoToStepThree(true);
            })
            .catch(() => {
                setGoToStepThree(true);
            })
    }

    React.useEffect(() => {
        d1.current.focus();
    }, []);

    if (goToStepThree) {
        return <Redirect to="/step/register" />;
    }

    return (
        <StepFrame>
            <div className="verify-step">
                <img src={babyImg} alt="baby" />
                <form onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                }}>
                    <FontAwesomeIcon icon={faUserCircle} size={'10x'} />
                    <p>Enter passcode!</p>
                    <div className="verify-input">
                        {inputsSymbol.map(index => (
                            <input ref={refsMap[index]} value={verificationKey[index] || ''} onChange={e => {
                                setVerificationIndex(index, e.target.value);
                                refsMap[index + 1] ? refsMap[index + 1].current.focus() : submitButton.current.focus();
                            }} className="big-input" placeholder={'-'} maxLength={1} minLength={1} key={index} />
                        ))}
                    </div>
                    <button className="big-button" type="submit" ref={submitButton}>
                        <FontAwesomeIcon icon={faKey} size={'2x'} /> <span>Verify</span>
                    </button>
                </form>
            </div>
        </StepFrame>
    )
}