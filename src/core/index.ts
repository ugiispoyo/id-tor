import './../assets/styles/styles.scss'
import { IConfig } from './interfaces';

// import Tools from './tools/index'

// const tools = new Tools();

export default class Core {
    _name: string;
    _config: IConfig;

    /* Set name */
    set name(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    /* Set config */
    set config(config: IConfig) {
        this._config = config
    }
    get config(): IConfig {
        return this._config
    }

    renderIdTor(): void {
        const wrapper = document.createElement('div') as HTMLDivElement;
        wrapper.setAttribute('class', '_wrapper_id_tor');

        /* Set custom atribute style */
        if(this.config) {
            Object.entries(this.config).forEach(([key, val]) => {
                if(['width', 'height'].includes(key)) {
                    wrapper.style.setProperty(key, val)
                }
            }) 
        }
        
        const elm = document.getElementById(this.name)
        elm.appendChild(wrapper)
    }
}   