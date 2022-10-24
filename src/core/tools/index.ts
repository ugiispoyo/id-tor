// import Icon from './icon'

// const icon = new Icon('bold')

export default class Tool {
    constructor() {
        // icon.renderIcon
    }

    renderTools(): HTMLDivElement {
        const _toolbar = document.createElement('div') as HTMLDivElement;
        _toolbar.setAttribute('class', '_toolbar_id_tor')
        
        return _toolbar
    }
}