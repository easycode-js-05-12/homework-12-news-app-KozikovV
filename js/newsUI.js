/**
 * @description class constructor whith Dom element and three methods for news 
 */

class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * @description the method that creates the markup for the argument and displays it in DOM
     * @param {object} news one object from array after server request
     * @returns {undefined} undefined 
     */
    addNews(news) {
        const template = NewsUI.newsTemplate(news);
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * @description the method which clear template of newsContainer
     * @param {} none
     * @returns {undefined} undefined
     */

    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * @description the method that returns template whith title whithin
     * @param {string} title some string from search request value;
     * @returns {strind} tenplate 
     */

    static newsTemplate(news) {
        

        // const col = document.createElement('div');
        // col.classList.add('col', 's12', 'm6');
        // const card = document.createElement('div');
        // card.classList.add('card');
        // col.appendChild(card);
        // const imageCard = document.createElement('div');
        // imageCard.classList.add('card-image');
        // card.appendChild(imageCard);
        // const img = document.createElement('img');
        // img.setAttribute('src', `${news.urlToImage}`);
        // imageCard.appendChild(img);
        // const cardContent = document.createElement('div');
        // cardContent.classList.add('card-content');
        // card.appendChild(cardContent);
        // const cardTitle = document.createElement('span');
        // cardTitle.classList.add('card-title');
        // cardTitle.innerText = `${news.title || ''}`;
        // cardContent.appendChild(cardTitle);
        // const cardText = document.createElement('p');
        // cardText.innerText = `${news.description || ''}`;
        // cardContent.appendChild(cardText);
        // const cardAction = document.createElement('div');
        // cardTitle.classList.add('card-action');
        // cardContent.appendChild(cardAction);
        // const cardLink = document.createElement('a');
        // cardLink.setAttribute('href', `${news.url}`);
        // cardLink.setAttribute('target', `_blank`);
        // cardLink.innerText = 'Read more';
        // cardAction.appendChild(cardLink);

        // return  col.outerHTML;
        
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage || 'developer.png'}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>

                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

}