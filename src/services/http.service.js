const baseApi = 'http://127.0.0.1:48736';

// lsk stands for "Local Storage Key"
const lastSubmittedMobileNumber_lsk = 'hrg-last_submitted_mobile_number';
const authToken_lsk = 'hrg-auth_token';

export const httpService = {
    generatePasscode(mobile_number) {
        return fetch(`${baseApi}/generate-passcode/?mobile_number=${mobile_number}`, {
            headers: {
                'Content-Type': 'application/json',
                'ty': 'application/json'
            },
        }).then(() => {
            this.setLastSubmittedMobileNumber(mobile_number);
            return true;
        })
    },
    checkPasscode(passcode) {
        return fetch(`${baseApi}/check-passcode/?passcode=${passcode}&mobile_number=${this.getLastSubmittedMobileNumber() || ''}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    this.setAuthorizationToken(result.token)
                    return true;
                })
            }
        })
    },
    register(userData) {
        return fetch(`${baseApi}/member/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.getAuthorizationToken()
            },
            body: JSON.stringify({
                first_name: userData.firstName,
                last_name: userData.lastName,
                birth_year: userData.birthDate,
                relationship_type: userData.relationship,
            })
        }).then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    this.setAuthorizationToken(result.token)
                    return true;
                })
            }
        })
    },
    getUserProfile() {
        return fetch(`${baseApi}/member/`, {
            headers: {
                Authorization: this.getAuthorizationToken()
            }
        }).then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    return {
                        firstName: result.first_name,
                        lastName: result.last_name,
                        birthDate: result.birth_year,
                        relationship: result.relationship_type,
                    }
                })
            }
            throw new Error('Repose not ok');
        })
    },
    setLastSubmittedMobileNumber(mobileNumber) {
        localStorage.setItem(lastSubmittedMobileNumber_lsk, mobileNumber);
    },
    getLastSubmittedMobileNumber() {
        localStorage.getItem(lastSubmittedMobileNumber_lsk);
    },
    setAuthorizationToken(token) {
        localStorage.setItem(authToken_lsk, token);
    },
    getAuthorizationToken() {
        localStorage.getItem(authToken_lsk);
    }
}