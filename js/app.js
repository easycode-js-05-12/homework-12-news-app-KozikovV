const newsService = new NewsService();
const newsUI = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSearch = form['search'];



function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => {
            console.time("template");
            newsUI.addNews(news);
            console.timeEnd("template")
        });
    }, category, country);
}

function searchFunction(e) {
    if (e.target.value.length > 2) {
        const country = countrySelect.value || 'ua';
        const category = categorySelect.value || 'technology';
        const query = e.target.value;
        newsService.getEverithyng((response) => {
            const { articles } = response;
            newsUI.clearContainer();
            articles.forEach((news) => newsUI.addNews(news));
        }, category, country, query);
    };
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup', searchFunction);

