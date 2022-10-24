import IBload from './../../assets/icon/bold.svg?url'
import IItalic from './../../assets/icon/italic.svg?url'
import IUnderline from './../../assets/icon/underline.svg?url'

export default class Icon {
    img: HTMLImageElement;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    renderIcon() {
        this.img = document.createElement('img');
        this.img.setAttribute('id', `_tool_${this.name}`)
        this.img.style.width = '30px';
        this.img.style.height = '30px';

        switch(this.name) {
            case 'bold':
                this.img.setAttribute('value', IBload)
                break;
            case 'italic':
                this.img.setAttribute('value', IItalic)
                break;
            case 'underline':
                this.img.setAttribute('value', IUnderline)
                break;
        }

    }
}