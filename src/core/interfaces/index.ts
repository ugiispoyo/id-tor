export interface IInit {
    name: string;
    config?: IConfig
}

export interface IConfig {
    toolbar?: Array<string>;
    width?: number;
    height?: number;
}