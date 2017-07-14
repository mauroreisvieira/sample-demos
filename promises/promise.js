'use strict';

class Promise {

    constructor () {
        this.addEventListeners();
    }

    addEventListeners () {
        let result = this.get('http://jsonplaceholder.typicode.com/users');
        console.log(result);
        // result.forEach( person => {
        //     console.log(person);
        //     //console.log(`Name: ${person.first} ${person.last}`);
        // });
        console.log(result);
    }

    get(url) {
        return fetch(url)
            .then(response => {
            if (response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType.includes('application/json')) {
                    return response.json();
                }
                return Promise.reject(new ResponseError('Invalid content type: ' + contentType));
            }
            if (response.status == 404) {
                return Promise.reject(new NotFoundError('Page not found: ' + url));
            }
            return Promise.reject(new HttpError('HTTP error: ' + response.status));
        }).catch(error => {
            return Promise.reject(new NetworkError(error.message));
        });
    }
}

new Promise();
