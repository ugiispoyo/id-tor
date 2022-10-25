export default class Button {
    btn: HTMLButtonElement;
    
    constructor() {
        this.btn = document.createElement('button') as HTMLButtonElement
        this.btn.setAttribute('class', '_btn_toolbar_id_tor')
    }
}