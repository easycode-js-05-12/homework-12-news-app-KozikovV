/**
 * @description class constractor whih two methods: get and post requests on server
 */
class CustomHttp {

    /**
     * @description method for get request on server
     * @param {string} url - url for requst on server 
     * @param {Function} callback function for parse response from server
     * @returns {undefined} undefined 
     */

    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }

    /**
     * @description method for post request on server
     * @param {string} url - url for requst on server 
     * @param {Object} data - send for post
     * @param {Function} callback function for parse response from server
     * @returns {undefined} undefined 
     */

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}