const baseUrl = process.env.REACT_APP_API_URL;

// Fecth sin Token
const fetchSinToken = (endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}`; // http://localhost:4000/api/auth

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

};

//Fetch con Token
const fetchConToken = (endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}`; // http://localhost:4000/api/auth/
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }

};

// Fecth getData
const fetchGetData = (endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}/${data.uid}`; // http://localhost:4000/api/user/:id
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }

};

// Fecth Update Profile
const fetchUpdateProfile = (endPoint, data, uid, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}/${uid}`; // http://localhost:4000/api/user/:id
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            },
            body: data
        });
    }

};

export {
    fetchSinToken,
    fetchConToken,
    fetchGetData,
    fetchUpdateProfile
};