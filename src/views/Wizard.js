import React from 'react';

import { Switch, Route } from 'react-router-dom';
import EnterMobile from './EnterMobile';
import Verify from './Confirm';
import RegisterStep from './RegisterStep';
import ProfileStep from './ProfileStep';

export default function Wizard(props) {
    const currentPath = props.match.path;

    return (
        <div className="wizard-container">
            <Switch>
                <Route path={`${currentPath}/mobile`} component={EnterMobile} />
                <Route path={`${currentPath}/verify`} component={Verify} />
                <Route path={`${currentPath}/register`} component={RegisterStep} />
                <Route path={`${currentPath}/profile`} component={ProfileStep} />
            </Switch>
        </div>
    )
}