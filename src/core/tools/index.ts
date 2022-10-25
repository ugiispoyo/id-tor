import Button from "./button";
import Icon from "./icon";

/* List all toolbar */
const listToolbar = [
    "bold",
    "italic",
    "underline",
    "align-left",
    "align-center",
    "align-right",
];
export default class Tool {
    _toolbar: Array<string>;

    /* Setter getter toolbar */
    set toolbar(toolbar: Array<string>) {
        this._toolbar = toolbar || listToolbar;
    }
    get toolbar(): Array<string> {
        return this._toolbar;
    }

    renderToolbar(): HTMLDivElement {
        const _toolbar_elm = document.createElement("div") as HTMLDivElement;
        _toolbar_elm.setAttribute("class", "_toolbar_id_tor");

        this.toolbar.forEach((val: string) => {
            const icon = new Icon();
            icon.name = val;
            const renderIcon = icon.renderIcon();

            const renderBtn = new Button();
            renderBtn.btn.appendChild(renderIcon);

            _toolbar_elm.appendChild(renderBtn.btn);
        });

        return _toolbar_elm;
    }
}
