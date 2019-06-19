import React from 'react';
import StepFrame from '../components/StepFrame';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUserPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Register() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
    const [relationship, setRelationship] = React.useState('father');

    const dateInputDom = React.useRef();

    function submitForm() {
        console.log(firstName, lastName, birthDate, relationship)
    }

    return (
        <StepFrame>
            <div className="register-step">
                <FontAwesomeIcon icon={faUserCircle} size={'10x'} />
                <form onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                }}>
                    <div className="profile-form">
                        <label>
                            First Name
                        <input onChange={e => setFirstName(e.target.value)} />
                        </label>
                    </div>
                    <div className="profile-form">
                        <label>
                            Last Name
                        <input onChange={e => setLastName(e.target.value)} />
                        </label>
                    </div>
                    <div className="profile-form">
                        <label>
                            Year of birth
                            <DayPickerInput
                                ref={dateInputDom}
                                value={birthDate}
                                onDayChange={date => setBirthDate(date)}
                                placeholder="  /  /"
                            />
                        </label>
                        <FontAwesomeIcon icon={faCalendarAlt} onClick={() => { dateInputDom.current.showDayPicker() }} size="2x" />
                    </div>
                    <div className="profile-form">
                        <label>
                            Relationship with kid
                            <select onChange={e => setRelationship(e.target.value)} defaultValue={relationship}>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="brother">Brother</option>
                                <option value="sister">Sister</option>
                            </select>
                        </label>
                    </div>
                    <button className="big-button" type="submit">
                        <FontAwesomeIcon icon={faUserPlus} size={'2x'} /> <span>Register</span>
                    </button>
                </form>
            </div>
        </StepFrame>
    )
}