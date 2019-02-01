class Alert {
    constructor(){};

    alertView(title) {
        const template = Alert.alertTemplate(title);
        this.removeAlert();
        document.body.insertAdjacentHTML('afterbegin', template);
    }

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

    removeAlert() {
        if(document.querySelector('.alert')) {
            document.querySelector('.alert').remove();
        }
        return;
    }

}