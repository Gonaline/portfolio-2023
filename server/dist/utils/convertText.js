"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertText = void 0;
const convertText = (text) => {
    if (text !== null) {
        return text
            .normalize('NFD')
            .trim()
            .split(' ')
            .join('-')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    else {
        return text;
    }
};
exports.convertText = convertText;
