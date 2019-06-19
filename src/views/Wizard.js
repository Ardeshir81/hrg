import React from 'react';

import { Switch, Route } from 'react-router-dom';
import EnterMobile from './EnterMobile';

export default function Wizard(props) {
    const currentPath = props.match.path;

    return (
        <div className="wizard-container">
            <Switch>
                <Route path={`${currentPath}/mobile`} component={EnterMobile} />
            </Switch>
        </div>
    )
}