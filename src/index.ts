import Core from './core';

/* Interfaces */
import { IInit } from './core/interfaces'

const IdTor = (args: IInit): void => {
    const { name, config } = args;
    const core = new Core();
    core.name = name;
    core.config = config;
    core.renderIdTor()
}

export default IdTor;