const baseUrl = process.env.REACT_APP_API_URL;

// Fecth sin Token
const fetchSinToken = (endPoint, data, method = 'GET') => {

    console.log(baseUrl, 'baseUrl');

    const url = `${baseUrl}/${endPoint}`; // http://localhost:4000/api/(auth/events)
    console.log('url: ', url);

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

    const url = `${baseUrl}/${endPoint}`; // http://localhost:4000/api/(auth/events)
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

export {
    fetchSinToken,
    fetchConToken
};