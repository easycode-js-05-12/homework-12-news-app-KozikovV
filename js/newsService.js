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
     * Get all news
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

    getEverithyng(callback, category = this.category, country = this.country, query = this.query) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&q=${query}&apiKey=${this.apiKey}`, callback);
    }
}