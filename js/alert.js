/**
 * @description class creator whith three methods
 * alertView; alertTemplate; removeAlert
 */

class Alert {
    constructor(){
        this.container = document.body;
    };

    /**
     * @description the method that creates the markup for the argument and displays it in DOM
     * @param {string} title some string from search request value;
     * @returns {undefined} undefined 
     */
    alertView(title) {
        const template = Alert.alertTemplate(title);
        this.removeAlert();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    /**
     * @description the method that returns template whith title whithin
     * @param {string} title some string from search request value;
     * @returns {strind} tenplate 
     */

    static alertTemplate(title) {
        return `
            <div class="col s12 m6 alert" style="position: fixed; bottom: 0; left: 0; right: 0;">
                <div class="card red darken-1">
                    <div class="card-content white-text">
                        <span class="card-title center-align">Cannot find news whith a keyword ${title}</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * @description method which remove alert template from DOM
     * @returns {undefined} undefined
     */

    removeAlert() {
        if(document.querySelector('.alert')) {
            document.querySelector('.alert').remove();
        }
        return;
    }

}