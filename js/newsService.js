/**
 * @description class constructor whith two methods whith get request for server
 */
const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'technology';
        this.query = '';
    }

    /**
     * @description method wthich make get request on server whith a headlines cathegory
     * @param {Function} callback some callback function 
     * @param {string} category for server request
     * @param {string} country for server request
     * @returns {undefined} undefined 
     */

    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }
    /**
     * @description method wthich make get request on server whith a headlines cathegory and query parameters
     * @param {Function} callback some callback function 
     * @param {string} category for server request
     * @param {string} country for server request
     * @returns {undefined} undefined 
     */
    getEverithyng(callback, category = this.category, country = this.country, query = this.query) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&q=${query}&apiKey=${this.apiKey}`, callback);
    }
}