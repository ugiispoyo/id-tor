import "./../assets/styles/styles.scss";
import { IConfig } from "./interfaces";

import Tools from "./tools/index";
const tools = new Tools();

export default class Core {
    _name: string;
    _config: IConfig;

    /* Setter getter name */
    set name(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    /* Setter getter config */
    set config(config: IConfig) {
        this._config = config;
    }
    get config(): IConfig {
        return this._config;
    }

    renderIdTor(): void {
        const _wrapper = document.createElement("div") as HTMLDivElement;
        _wrapper.setAttribute("class", "_wrapper_id_tor");

        /* Set custom atribute style */
        if (this.config) {
            Object.entries(this.config).forEach(([key, val]) => {
                if (["width", "height"].includes(key)) {
                    if (key === "height") {
                        _wrapper.style.setProperty("min-height", val);
                    } else {
                        _wrapper.style.setProperty(key, val);
                    }
                }
            });
        }

        /* Render toolbar */
        tools.toolbar = this.config?.toolbar;
        _wrapper.appendChild(tools.renderToolbar());

        /* render editor */
        const _editor = document.createElement("div") as HTMLDivElement;
        _editor.setAttribute("class", "_editor_id_tor");
        _editor.setAttribute("contenteditable", "true");
        _editor.style.setProperty("width", "100%");
        _editor.style.setProperty(
            "height",
            this.config?.height
                ? `${this.config?.height}px`
                : "350px"
        );
        _wrapper.appendChild(_editor);

        const elm = document.getElementById(this.name);
        elm.appendChild(_wrapper);
    }
}
