import * as params from '@params';

let opt = { api: 'https://source.unsplash.com/random/${w}x${h}?${t}', widthrate: 0.8, heightrate: 0.5 };
Object.assign(opt, params.opt || {});

function RandomImages(api, maxWidth, maxHeight) {
    this._a = api;
    this._w = maxWidth;
    this._h = maxHeight;

    this.random = function ($img, imageTopics, width, height) {
        width = width && width < this._w ? width : this._w;
        height = height && height < this._h ? height : this._h;
        imageTopics = imageTopics || '';

        let src = this._a.replace("${w}", width).replace("${h}", height).replace("${t}", imageTopics);
        $img.setAttribute('src', src);
        $img.setAttribute('width', width + '');
        $img.setAttribute('height', height + '');
    };
}

function _cssVar(key, defaultVal) {
    let num = window.getComputedStyle(document.body).getPropertyValue(key);
    if (!num) {
        return defaultVal;
    }
    num = num.replace('px', '');
    return Number.parseInt(num);
}

const maxWidth = function (rate) {
    let num = _cssVar('--main-width', 720) * rate;
    num = Number.parseInt(num + '');
    return num - num % 10;
}(opt.widthrate);

const maxHeight = function (rate) {
    const headerHeight = _cssVar('--header-height', 60);
    const footerHeight = _cssVar('--footer-height', 60);
    const gap = _cssVar('--gap', 24) * 2;
    let num = (window.innerHeight - headerHeight - footerHeight - gap) * rate;
    num = Number.parseInt(num + '');
    return num - num % 10;
}(opt.heightrate);

window.randomImg = new RandomImages(opt.api, maxWidth, maxHeight);
