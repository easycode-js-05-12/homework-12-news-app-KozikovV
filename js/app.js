const newsService = new NewsService();
const newsUI = new NewsUI();
const alert = new Alert();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSearch = form['search'];

/**
 * @description callback function whith processes the event on changіng select
 * @param {event} e - some event
 * @returns {undefined} undefined 
 */

function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => {
            newsUI.addNews(news);
        });
    }, category, country);
}

/**
 * @description callback function whith processes the event on changіng search input
 * @param {event} e - some event
 * @returns {undefined} undefined 
 */

function searchFunction(e) {
    if (e.target.value.length < 3) {
        newsUI.clearContainer();
        alert.removeAlert();
        return;
    }

    if (e.target.value.length > 2) {
        const country = countrySelect.value || 'ua';
        const category = categorySelect.value || 'technology';
        const query = e.target.value;
        newsService.getEverithyng((response) => {
            if(response.totalResults === 0) {
                newsUI.clearContainer();
                alert.alertView(e.target.value);
                return;
            }
            alert.removeAlert();
            const { articles } = response;
            newsUI.clearContainer();
            articles.forEach((news) => newsUI.addNews(news));
        }, category, country, query);
    }
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup', searchFunction);

