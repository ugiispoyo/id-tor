import IBold from "./../../assets/icon/bold.svg?url";
import IItalic from "./../../assets/icon/italic.svg?url";
import IUnderline from "./../../assets/icon/underline.svg?url";
import IAlignLeft from "./../../assets/icon/align-left.svg?url";
import IAlignCenter from "./../../assets/icon/align-center.svg?url";
import IAlignRight from "./../../assets/icon/align-right.svg?url";

export default class Icon {
    img: HTMLImageElement;
    _name: string;

    /* Setter getter name */
    set name(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    renderIcon() {
        this.img = document.createElement("img");
        this.img.setAttribute("class", `_icon_id_tor _toolbar_${this.name}`);

        switch (this.name) {
            case "bold":
                this.img.setAttribute("src", IBold);
                break;
            case "italic":
                this.img.setAttribute("src", IItalic);
                break;
            case "underline":
                this.img.setAttribute("src", IUnderline);
                break;
            case "align-left":
                this.img.setAttribute("src", IAlignLeft);
                break;
            case "align-center":
                this.img.setAttribute("src", IAlignCenter);
                break;
            case "align-right":
                this.img.setAttribute("src", IAlignRight);
                break;
        }

        return this.img;
    }
}
