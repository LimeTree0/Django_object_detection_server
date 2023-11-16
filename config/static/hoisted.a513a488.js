import {a as po, b as mo} from "./log.5e74cee8.js";
import "./hoisted.17158c12.js";
import "./store.11b9c9bf.js";
import "./solid.0959ea88.js";/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function fe(i) {
    return i + .5 | 0
}

const mt = (i, t, e) => Math.max(Math.min(i, e), t);

function Jt(i) {
    return mt(fe(i * 2.55), 0, 255)
}

function _t(i) {
    return mt(fe(i * 255), 0, 255)
}

function ht(i) {
    return mt(fe(i / 2.55) / 100, 0, 1)
}

function Bi(i) {
    return mt(fe(i * 100), 0, 100)
}

const et = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }, hi = [..."0123456789ABCDEF"], bo = i => hi[i & 15], xo = i => hi[(i & 240) >> 4] + hi[i & 15],
    xe = i => (i & 240) >> 4 === (i & 15), _o = i => xe(i.r) && xe(i.g) && xe(i.b) && xe(i.a);

function yo(i) {
    var t = i.length, e;
    return i[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & et[i[1]] * 17,
        g: 255 & et[i[2]] * 17,
        b: 255 & et[i[3]] * 17,
        a: t === 5 ? et[i[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: et[i[1]] << 4 | et[i[2]],
        g: et[i[3]] << 4 | et[i[4]],
        b: et[i[5]] << 4 | et[i[6]],
        a: t === 9 ? et[i[7]] << 4 | et[i[8]] : 255
    })), e
}

const vo = (i, t) => i < 255 ? t(i) : "";

function Mo(i) {
    var t = _o(i) ? bo : xo;
    return i ? "#" + t(i.r) + t(i.g) + t(i.b) + vo(i.a, t) : void 0
}

const ko = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

function un(i, t, e) {
    const s = t * Math.min(e, 1 - e), n = (o, a = (o + i / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return [n(0), n(8), n(4)]
}

function So(i, t, e) {
    const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [s(5), s(3), s(1)]
}

function wo(i, t, e) {
    const s = un(i, 1, .5);
    let n;
    for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++) s[n] *= 1 - t - e, s[n] += t;
    return s
}

function Po(i, t, e, s, n) {
    return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4
}

function vi(i) {
    const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2;
    let l, c, h;
    return o !== a && (h = o - a, c = r > .5 ? h / (2 - o - a) : h / (o + a), l = Po(e, s, n, h, o), l = l * 60 + .5), [l | 0, c || 0, r]
}

function Mi(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(_t)
}

function ki(i, t, e) {
    return Mi(un, i, t, e)
}

function Co(i, t, e) {
    return Mi(wo, i, t, e)
}

function Do(i, t, e) {
    return Mi(So, i, t, e)
}

function fn(i) {
    return (i % 360 + 360) % 360
}

function Oo(i) {
    const t = ko.exec(i);
    let e = 255, s;
    if (!t) return;
    t[5] !== s && (e = t[6] ? Jt(+t[5]) : _t(+t[5]));
    const n = fn(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
    return t[1] === "hwb" ? s = Co(n, o, a) : t[1] === "hsv" ? s = Do(n, o, a) : s = ki(n, o, a), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    }
}

function Ao(i, t) {
    var e = vi(i);
    e[0] = fn(e[0] + t), e = ki(e), i.r = e[0], i.g = e[1], i.b = e[2]
}

function Lo(i) {
    if (!i) return;
    const t = vi(i), e = t[0], s = Bi(t[1]), n = Bi(t[2]);
    return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ht(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`
}

const Vi = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
}, Wi = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};

function To() {
    const i = {}, t = Object.keys(Wi), e = Object.keys(Vi);
    let s, n, o, a, r;
    for (s = 0; s < t.length; s++) {
        for (a = r = t[s], n = 0; n < e.length; n++) o = e[n], r = r.replace(o, Vi[o]);
        o = parseInt(Wi[a], 16), i[r] = [o >> 16 & 255, o >> 8 & 255, o & 255]
    }
    return i
}

let _e;

function Ro(i) {
    _e || (_e = To(), _e.transparent = [0, 0, 0, 0]);
    const t = _e[i.toLowerCase()];
    return t && {r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255}
}

const Eo = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

function Fo(i) {
    const t = Eo.exec(i);
    let e = 255, s, n, o;
    if (t) {
        if (t[7] !== s) {
            const a = +t[7];
            e = t[8] ? Jt(a) : mt(a * 255, 0, 255)
        }
        return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Jt(s) : mt(s, 0, 255)), n = 255 & (t[4] ? Jt(n) : mt(n, 0, 255)), o = 255 & (t[6] ? Jt(o) : mt(o, 0, 255)), {
            r: s,
            g: n,
            b: o,
            a: e
        }
    }
}

function Io(i) {
    return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ht(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
}

const Ge = i => i <= .0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - .055,
    zt = i => i <= .04045 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);

function zo(i, t, e) {
    const s = zt(ht(i.r)), n = zt(ht(i.g)), o = zt(ht(i.b));
    return {
        r: _t(Ge(s + e * (zt(ht(t.r)) - s))),
        g: _t(Ge(n + e * (zt(ht(t.g)) - n))),
        b: _t(Ge(o + e * (zt(ht(t.b)) - o))),
        a: i.a + e * (t.a - i.a)
    }
}

function ye(i, t, e) {
    if (i) {
        let s = vi(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = ki(s), i.r = s[0], i.g = s[1], i.b = s[2]
    }
}

function gn(i, t) {
    return i && Object.assign(t || {}, i)
}

function Ni(i) {
    var t = {r: 0, g: 0, b: 0, a: 255};
    return Array.isArray(i) ? i.length >= 3 && (t = {
        r: i[0],
        g: i[1],
        b: i[2],
        a: 255
    }, i.length > 3 && (t.a = _t(i[3]))) : (t = gn(i, {r: 0, g: 0, b: 0, a: 1}), t.a = _t(t.a)), t
}

function Bo(i) {
    return i.charAt(0) === "r" ? Fo(i) : Oo(i)
}

class ae {
    constructor(t) {
        if (t instanceof ae) return t;
        const e = typeof t;
        let s;
        e === "object" ? s = Ni(t) : e === "string" && (s = yo(t) || Ro(t) || Bo(t)), this._rgb = s, this._valid = !!s
    }

    get valid() {
        return this._valid
    }

    get rgb() {
        var t = gn(this._rgb);
        return t && (t.a = ht(t.a)), t
    }

    set rgb(t) {
        this._rgb = Ni(t)
    }

    rgbString() {
        return this._valid ? Io(this._rgb) : void 0
    }

    hexString() {
        return this._valid ? Mo(this._rgb) : void 0
    }

    hslString() {
        return this._valid ? Lo(this._rgb) : void 0
    }

    mix(t, e) {
        if (t) {
            const s = this.rgb, n = t.rgb;
            let o;
            const a = e === o ? .5 : e, r = 2 * a - 1, l = s.a - n.a,
                c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
            o = 1 - c, s.r = 255 & c * s.r + o * n.r + .5, s.g = 255 & c * s.g + o * n.g + .5, s.b = 255 & c * s.b + o * n.b + .5, s.a = a * s.a + (1 - a) * n.a, this.rgb = s
        }
        return this
    }

    interpolate(t, e) {
        return t && (this._rgb = zo(this._rgb, t._rgb, e)), this
    }

    clone() {
        return new ae(this.rgb)
    }

    alpha(t) {
        return this._rgb.a = _t(t), this
    }

    clearer(t) {
        const e = this._rgb;
        return e.a *= 1 - t, this
    }

    greyscale() {
        const t = this._rgb, e = fe(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = e, this
    }

    opaquer(t) {
        const e = this._rgb;
        return e.a *= 1 + t, this
    }

    negate() {
        const t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
    }

    lighten(t) {
        return ye(this._rgb, 2, t), this
    }

    darken(t) {
        return ye(this._rgb, 2, -t), this
    }

    saturate(t) {
        return ye(this._rgb, 1, t), this
    }

    desaturate(t) {
        return ye(this._rgb, 1, -t), this
    }

    rotate(t) {
        return Ao(this._rgb, t), this
    }
}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function rt() {
}

const Vo = (() => {
    let i = 0;
    return () => i++
})();

function L(i) {
    return i === null || typeof i > "u"
}

function F(i) {
    if (Array.isArray && Array.isArray(i)) return !0;
    const t = Object.prototype.toString.call(i);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}

function O(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]"
}

function V(i) {
    return (typeof i == "number" || i instanceof Number) && isFinite(+i)
}

function Q(i, t) {
    return V(i) ? i : t
}

function P(i, t) {
    return typeof i > "u" ? t : i
}

const Wo = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t,
    pn = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;

function E(i, t, e) {
    if (i && typeof i.call == "function") return i.apply(e, t)
}

function T(i, t, e, s) {
    let n, o, a;
    if (F(i)) if (o = i.length, s) for (n = o - 1; n >= 0; n--) t.call(e, i[n], n); else for (n = 0; n < o; n++) t.call(e, i[n], n); else if (O(i)) for (a = Object.keys(i), o = a.length, n = 0; n < o; n++) t.call(e, i[a[n]], a[n])
}

function Fe(i, t) {
    let e, s, n, o;
    if (!i || !t || i.length !== t.length) return !1;
    for (e = 0, s = i.length; e < s; ++e) if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0
}

function Ie(i) {
    if (F(i)) return i.map(Ie);
    if (O(i)) {
        const t = Object.create(null), e = Object.keys(i), s = e.length;
        let n = 0;
        for (; n < s; ++n) t[e[n]] = Ie(i[e[n]]);
        return t
    }
    return i
}

function mn(i) {
    return ["__proto__", "prototype", "constructor"].indexOf(i) === -1
}

function No(i, t, e, s) {
    if (!mn(i)) return;
    const n = t[i], o = e[i];
    O(n) && O(o) ? re(n, o, s) : t[i] = Ie(o)
}

function re(i, t, e) {
    const s = F(t) ? t : [t], n = s.length;
    if (!O(i)) return i;
    e = e || {};
    const o = e.merger || No;
    let a;
    for (let r = 0; r < n; ++r) {
        if (a = s[r], !O(a)) continue;
        const l = Object.keys(a);
        for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, a, e)
    }
    return i
}

function ie(i, t) {
    return re(i, t, {merger: Ho})
}

function Ho(i, t, e) {
    if (!mn(i)) return;
    const s = t[i], n = e[i];
    O(s) && O(n) ? ie(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ie(n))
}

const Hi = {"": i => i, x: i => i.x, y: i => i.y};

function jo(i) {
    const t = i.split("."), e = [];
    let s = "";
    for (const n of t) s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
    return e
}

function $o(i) {
    const t = jo(i);
    return e => {
        for (const s of t) {
            if (s === "") break;
            e = e && e[s]
        }
        return e
    }
}

function yt(i, t) {
    return (Hi[t] || (Hi[t] = $o(t)))(i)
}

function Si(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}

const le = i => typeof i < "u", vt = i => typeof i == "function", ji = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0
};

function Yo(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu"
}

const z = Math.PI, I = 2 * z, Xo = I + z, ze = Number.POSITIVE_INFINITY, Uo = z / 180, H = z / 2, St = z / 4,
    $i = z * 2 / 3, bt = Math.log10, at = Math.sign;

function se(i, t, e) {
    return Math.abs(i - t) < e
}

function Yi(i) {
    const t = Math.round(i);
    i = se(i, t, i / 1e3) ? t : i;
    const e = Math.pow(10, Math.floor(bt(i))), s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e
}

function Ko(i) {
    const t = [], e = Math.sqrt(i);
    let s;
    for (s = 1; s < e; s++) i % s === 0 && (t.push(s), t.push(i / s));
    return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
}

function Wt(i) {
    return !isNaN(parseFloat(i)) && isFinite(i)
}

function qo(i, t) {
    const e = Math.round(i);
    return e - t <= i && e + t >= i
}

function bn(i, t, e) {
    let s, n, o;
    for (s = 0, n = i.length; s < n; s++) o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
}

function st(i) {
    return i * (z / 180)
}

function wi(i) {
    return i * (180 / z)
}

function Xi(i) {
    if (!V(i)) return;
    let t = 1, e = 0;
    for (; Math.round(i * t) / t !== i;) t *= 10, e++;
    return e
}

function xn(i, t) {
    const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
    let o = Math.atan2(s, e);
    return o < -.5 * z && (o += I), {angle: o, distance: n}
}

function di(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
}

function Go(i, t) {
    return (i - t + Xo) % I - z
}

function tt(i) {
    return (i % I + I) % I
}

function ce(i, t, e, s) {
    const n = tt(i), o = tt(t), a = tt(e), r = tt(o - n), l = tt(a - n), c = tt(n - o), h = tt(n - a);
    return n === o || n === a || s && o === a || r > l && c < h
}

function $(i, t, e) {
    return Math.max(t, Math.min(e, i))
}

function Zo(i) {
    return $(i, -32768, 32767)
}

function dt(i, t, e, s = 1e-6) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s
}

function Pi(i, t, e) {
    e = e || (a => i[a] < t);
    let s = i.length - 1, n = 0, o;
    for (; s - n > 1;) o = n + s >> 1, e(o) ? n = o : s = o;
    return {lo: n, hi: s}
}

const ut = (i, t, e, s) => Pi(i, e, s ? n => {
    const o = i[n][t];
    return o < e || o === e && i[n + 1][t] === e
} : n => i[n][t] < e), Jo = (i, t, e) => Pi(i, e, s => i[s][t] >= e);

function Qo(i, t, e) {
    let s = 0, n = i.length;
    for (; s < n && i[s] < t;) s++;
    for (; n > s && i[n - 1] > e;) n--;
    return s > 0 || n < i.length ? i.slice(s, n) : i
}

const _n = ["push", "pop", "shift", "splice", "unshift"];

function ta(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t);
        return
    }
    Object.defineProperty(i, "_chartjs", {configurable: !0, enumerable: !1, value: {listeners: [t]}}), _n.forEach(e => {
        const s = "_onData" + Si(e), n = i[e];
        Object.defineProperty(i, e, {
            configurable: !0, enumerable: !1, value(...o) {
                const a = n.apply(this, o);
                return i._chartjs.listeners.forEach(r => {
                    typeof r[s] == "function" && r[s](...o)
                }), a
            }
        })
    })
}

function Ui(i, t) {
    const e = i._chartjs;
    if (!e) return;
    const s = e.listeners, n = s.indexOf(t);
    n !== -1 && s.splice(n, 1), !(s.length > 0) && (_n.forEach(o => {
        delete i[o]
    }), delete i._chartjs)
}

function yn(i) {
    const t = new Set(i);
    return t.size === i.length ? i : Array.from(t)
}

const vn = function () {
    return typeof window > "u" ? function (i) {
        return i()
    } : window.requestAnimationFrame
}();

function Mn(i, t) {
    let e = [], s = !1;
    return function (...n) {
        e = n, s || (s = !0, vn.call(window, () => {
            s = !1, i.apply(t, e)
        }))
    }
}

function ea(i, t) {
    let e;
    return function (...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t
    }
}

const Ci = i => i === "start" ? "left" : i === "end" ? "right" : "center",
    U = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2,
    ia = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;

function kn(i, t, e) {
    const s = t.length;
    let n = 0, o = s;
    if (i._sorted) {
        const {iScale: a, _parsed: r} = i, l = a.axis, {
            min: c,
            max: h,
            minDefined: d,
            maxDefined: u
        } = a.getUserBounds();
        d && (n = $(Math.min(ut(r, l, c).lo, e ? s : ut(t, l, a.getPixelForValue(c)).lo), 0, s - 1)), u ? o = $(Math.max(ut(r, a.axis, h, !0).hi + 1, e ? 0 : ut(t, l, a.getPixelForValue(h), !0).hi + 1), n, s) - n : o = s - n
    }
    return {start: n, count: o}
}

function Sn(i) {
    const {xScale: t, yScale: e, _scaleRanges: s} = i, n = {xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max};
    if (!s) return i._scaleRanges = n, !0;
    const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
    return Object.assign(s, n), o
}

const ve = i => i === 0 || i === 1, Ki = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * I / e)),
    qi = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * I / e) + 1, ne = {
        linear: i => i,
        easeInQuad: i => i * i,
        easeOutQuad: i => -i * (i - 2),
        easeInOutQuad: i => (i /= .5) < 1 ? .5 * i * i : -.5 * (--i * (i - 2) - 1),
        easeInCubic: i => i * i * i,
        easeOutCubic: i => (i -= 1) * i * i + 1,
        easeInOutCubic: i => (i /= .5) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2),
        easeInQuart: i => i * i * i * i,
        easeOutQuart: i => -((i -= 1) * i * i * i - 1),
        easeInOutQuart: i => (i /= .5) < 1 ? .5 * i * i * i * i : -.5 * ((i -= 2) * i * i * i - 2),
        easeInQuint: i => i * i * i * i * i,
        easeOutQuint: i => (i -= 1) * i * i * i * i + 1,
        easeInOutQuint: i => (i /= .5) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2),
        easeInSine: i => -Math.cos(i * H) + 1,
        easeOutSine: i => Math.sin(i * H),
        easeInOutSine: i => -.5 * (Math.cos(z * i) - 1),
        easeInExpo: i => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
        easeOutExpo: i => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
        easeInOutExpo: i => ve(i) ? i : i < .5 ? .5 * Math.pow(2, 10 * (i * 2 - 1)) : .5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
        easeInCirc: i => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
        easeOutCirc: i => Math.sqrt(1 - (i -= 1) * i),
        easeInOutCirc: i => (i /= .5) < 1 ? -.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
        easeInElastic: i => ve(i) ? i : Ki(i, .075, .3),
        easeOutElastic: i => ve(i) ? i : qi(i, .075, .3),
        easeInOutElastic(i) {
            return ve(i) ? i : i < .5 ? .5 * Ki(i * 2, .1125, .45) : .5 + .5 * qi(i * 2 - 1, .1125, .45)
        },
        easeInBack(i) {
            return i * i * ((1.70158 + 1) * i - 1.70158)
        },
        easeOutBack(i) {
            return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1
        },
        easeInOutBack(i) {
            let t = 1.70158;
            return (i /= .5) < 1 ? .5 * (i * i * (((t *= 1.525) + 1) * i - t)) : .5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2)
        },
        easeInBounce: i => 1 - ne.easeOutBounce(1 - i),
        easeOutBounce(i) {
            return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + .75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + .9375 : 7.5625 * (i -= 2.625 / 2.75) * i + .984375
        },
        easeInOutBounce: i => i < .5 ? ne.easeInBounce(i * 2) * .5 : ne.easeOutBounce(i * 2 - 1) * .5 + .5
    };

function Di(i) {
    if (i && typeof i == "object") {
        const t = i.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
    }
    return !1
}

function Gi(i) {
    return Di(i) ? i : new ae(i)
}

function Ze(i) {
    return Di(i) ? i : new ae(i).saturate(.5).darken(.1).hexString()
}

const sa = ["x", "y", "borderWidth", "radius", "tension"], na = ["color", "borderColor", "backgroundColor"];

function oa(i) {
    i.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }), i.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => t !== "onProgress" && t !== "onComplete" && t !== "fn"
    }), i.set("animations", {
        colors: {type: "color", properties: na},
        numbers: {type: "number", properties: sa}
    }), i.describe("animations", {_fallback: "animation"}), i.set("transitions", {
        active: {animation: {duration: 400}},
        resize: {animation: {duration: 0}},
        show: {animations: {colors: {from: "transparent"}, visible: {type: "boolean", duration: 0}}},
        hide: {animations: {colors: {to: "transparent"}, visible: {type: "boolean", easing: "linear", fn: t => t | 0}}}
    })
}

function aa(i) {
    i.set("layout", {autoPadding: !0, padding: {top: 0, right: 0, bottom: 0, left: 0}})
}

const Zi = new Map;

function ra(i, t) {
    t = t || {};
    const e = i + JSON.stringify(t);
    let s = Zi.get(e);
    return s || (s = new Intl.NumberFormat(i, t), Zi.set(e, s)), s
}

function ge(i, t, e) {
    return ra(t, e).format(i)
}

const wn = {
    values(i) {
        return F(i) ? i : "" + i
    }, numeric(i, t, e) {
        if (i === 0) return "0";
        const s = this.chart.options.locale;
        let n, o = i;
        if (e.length > 1) {
            const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 1e-4 || c > 1e15) && (n = "scientific"), o = la(i, e)
        }
        const a = bt(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            l = {notation: n, minimumFractionDigits: r, maximumFractionDigits: r};
        return Object.assign(l, this.options.ticks.format), ge(i, s, l)
    }, logarithmic(i, t, e) {
        if (i === 0) return "0";
        const s = e[t].significand || i / Math.pow(10, Math.floor(bt(i)));
        return [1, 2, 3, 5, 10, 15].includes(s) || t > .8 * e.length ? wn.numeric.call(this, i, t, e) : ""
    }
};

function la(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e
}

var $e = {formatters: wn};

function ca(i) {
    i.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1
        },
        border: {display: !0, dash: [], dashOffset: 0, width: 1},
        title: {display: !1, text: "", padding: {top: 4, bottom: 4}},
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: $e.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
        _fallback: !1,
        _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
        _indexable: t => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
    }), i.describe("scales", {_fallback: "scale"}), i.describe("scale.ticks", {
        _scriptable: t => t !== "backdropPadding" && t !== "callback",
        _indexable: t => t !== "backdropPadding"
    })
}

const Tt = Object.create(null), ui = Object.create(null);

function oe(i, t) {
    if (!t) return i;
    const e = t.split(".");
    for (let s = 0, n = e.length; s < n; ++s) {
        const o = e[s];
        i = i[o] || (i[o] = Object.create(null))
    }
    return i
}

function Je(i, t, e) {
    return typeof t == "string" ? re(oe(i, t), e) : re(oe(i, ""), t)
}

class ha {
    constructor(t, e) {
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        }, this.hover = {}, this.hoverBackgroundColor = (s, n) => Ze(n.backgroundColor), this.hoverBorderColor = (s, n) => Ze(n.borderColor), this.hoverColor = (s, n) => Ze(n.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
    }

    set(t, e) {
        return Je(this, t, e)
    }

    get(t) {
        return oe(this, t)
    }

    describe(t, e) {
        return Je(ui, t, e)
    }

    override(t, e) {
        return Je(Tt, t, e)
    }

    route(t, e, s, n) {
        const o = oe(this, t), a = oe(this, s), r = "_" + e;
        Object.defineProperties(o, {
            [r]: {value: o[e], writable: !0}, [e]: {
                enumerable: !0, get() {
                    const l = this[r], c = a[n];
                    return O(l) ? Object.assign({}, c, l) : P(l, c)
                }, set(l) {
                    this[r] = l
                }
            }
        })
    }

    apply(t) {
        t.forEach(e => e(this))
    }
}

var W = new ha({
    _scriptable: i => !i.startsWith("on"),
    _indexable: i => i !== "events",
    hover: {_fallback: "interaction"},
    interaction: {_scriptable: !1, _indexable: !1}
}, [oa, aa, ca]);

function da(i) {
    return !i || L(i.size) || L(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family
}

function Be(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s
}

function ua(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
    let a = 0;
    const r = e.length;
    let l, c, h, d, u;
    for (l = 0; l < r; l++) if (d = e[l], d != null && !F(d)) a = Be(i, n, o, a, d); else if (F(d)) for (c = 0, h = d.length; c < h; c++) u = d[c], u != null && !F(u) && (a = Be(i, n, o, a, u));
    i.restore();
    const f = o.length / 2;
    if (f > e.length) {
        for (l = 0; l < f; l++) delete n[o[l]];
        o.splice(0, f)
    }
    return a
}

function wt(i, t, e) {
    const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, .5) : 0;
    return Math.round((t - n) * s) / s + n
}

function Ji(i, t) {
    t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore()
}

function fi(i, t, e, s) {
    Pn(i, t, e, s, null)
}

function Pn(i, t, e, s, n) {
    let o, a, r, l, c, h, d, u;
    const f = t.pointStyle, g = t.rotation, p = t.radius;
    let m = (g || 0) * Uo;
    if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
        i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
        return
    }
    if (!(isNaN(p) || p <= 0)) {
        switch (i.beginPath(), f) {
            default:
                n ? i.ellipse(e, s, n / 2, p, 0, 0, I) : i.arc(e, s, p, 0, I), i.closePath();
                break;
            case"triangle":
                h = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += $i, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += $i, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), i.closePath();
                break;
            case"rectRounded":
                c = p * .516, l = p - c, a = Math.cos(m + St) * l, d = Math.cos(m + St) * (n ? n / 2 - c : l), r = Math.sin(m + St) * l, u = Math.sin(m + St) * (n ? n / 2 - c : l), i.arc(e - d, s - r, c, m - z, m - H), i.arc(e + u, s - a, c, m - H, m), i.arc(e + d, s + r, c, m, m + H), i.arc(e - u, s + a, c, m + H, m + z), i.closePath();
                break;
            case"rect":
                if (!g) {
                    l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
                    break
                }
                m += St;
            case"rectRot":
                d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + u, s - a), i.lineTo(e + d, s + r), i.lineTo(e - u, s + a), i.closePath();
                break;
            case"crossRot":
                m += St;
            case"cross":
                d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a);
                break;
            case"star":
                d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a), m += St, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a);
                break;
            case"line":
                a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, i.moveTo(e - a, s - r), i.lineTo(e + a, s + r);
                break;
            case"dash":
                i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                break;
            case!1:
                i.closePath();
                break
        }
        i.fill(), t.borderWidth > 0 && i.stroke()
    }
}

function ft(i, t, e) {
    return e = e || .5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e
}

function Ye(i, t) {
    i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip()
}

function Xe(i) {
    i.restore()
}

function fa(i, t, e, s, n) {
    if (!t) return i.lineTo(e.x, e.y);
    if (n === "middle") {
        const o = (t.x + e.x) / 2;
        i.lineTo(o, t.y), i.lineTo(o, e.y)
    } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y)
}

function ga(i, t, e, s) {
    if (!t) return i.lineTo(e.x, e.y);
    i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y)
}

function pa(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]), L(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline)
}

function ma(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        const o = i.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight,
            l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h), i.lineTo(r, h), i.stroke()
    }
}

function ba(i, t) {
    const e = i.fillStyle;
    i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e
}

function Rt(i, t, e, s, n, o = {}) {
    const a = F(t) ? t : [t], r = o.strokeWidth > 0 && o.strokeColor !== "";
    let l, c;
    for (i.save(), i.font = n.string, pa(i, o), l = 0; l < a.length; ++l) c = a[l], o.backdrop && ba(i, o.backdrop), r && (o.strokeColor && (i.strokeStyle = o.strokeColor), L(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), ma(i, e, s, c, o), s += Number(n.lineHeight);
    i.restore()
}

function he(i, t) {
    const {x: e, y: s, w: n, h: o, radius: a} = t;
    i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * z, z, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, z, H, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, H, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -H, !0), i.lineTo(e + a.topLeft, s)
}

const xa = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    _a = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

function ya(i, t) {
    const e = ("" + i).match(xa);
    if (!e || e[1] === "normal") return t * 1.2;
    switch (i = +e[2], e[3]) {
        case"px":
            return i;
        case"%":
            i /= 100;
            break
    }
    return t * i
}

const va = i => +i || 0;

function Oi(i, t) {
    const e = {}, s = O(t), n = s ? Object.keys(t) : t, o = O(i) ? s ? a => P(i[a], i[t[a]]) : a => i[a] : () => i;
    for (const a of n) e[a] = va(o(a));
    return e
}

function Cn(i) {
    return Oi(i, {top: "y", right: "x", bottom: "y", left: "x"})
}

function At(i) {
    return Oi(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}

function q(i) {
    const t = Cn(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t
}

function j(i, t) {
    i = i || {}, t = t || W.font;
    let e = P(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = P(i.style, t.style);
    s && !("" + s).match(_a) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
    const n = {
        family: P(i.family, t.family),
        lineHeight: ya(P(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: P(i.weight, t.weight),
        string: ""
    };
    return n.string = da(n), n
}

function Qt(i, t, e, s) {
    let n = !0, o, a, r;
    for (o = 0, a = i.length; o < a; ++o) if (r = i[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = !1), e !== void 0 && F(r) && (r = r[e % r.length], n = !1), r !== void 0)) return s && !n && (s.cacheable = !1), r
}

function Ma(i, t, e) {
    const {min: s, max: n} = i, o = pn(t, (n - s) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
    return {min: a(s, -Math.abs(o)), max: a(n, o)}
}

function Mt(i, t) {
    return Object.assign(Object.create(i), t)
}

function Ai(i, t = [""], e, s, n = () => i[0]) {
    const o = e || i;
    typeof s > "u" && (s = Ln("_fallback", i));
    const a = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: o,
        _fallback: s,
        _getTarget: n,
        override: r => Ai([r, ...i], t, o, s)
    };
    return new Proxy(a, {
        deleteProperty(r, l) {
            return delete r[l], delete r._keys, delete i[0][l], !0
        }, get(r, l) {
            return On(r, l, () => Aa(l, t, i, r))
        }, getOwnPropertyDescriptor(r, l) {
            return Reflect.getOwnPropertyDescriptor(r._scopes[0], l)
        }, getPrototypeOf() {
            return Reflect.getPrototypeOf(i[0])
        }, has(r, l) {
            return ts(r).includes(l)
        }, ownKeys(r) {
            return ts(r)
        }, set(r, l, c) {
            const h = r._storage || (r._storage = n());
            return r[l] = h[l] = c, delete r._keys, !0
        }
    })
}

function Nt(i, t, e, s) {
    const n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: new Set,
        _descriptors: Dn(i, s),
        setContext: o => Nt(i, o, e, s),
        override: o => Nt(i.override(o), t, e, s)
    };
    return new Proxy(n, {
        deleteProperty(o, a) {
            return delete o[a], delete i[a], !0
        }, get(o, a, r) {
            return On(o, a, () => Sa(o, a, r))
        }, getOwnPropertyDescriptor(o, a) {
            return o._descriptors.allKeys ? Reflect.has(i, a) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(i, a)
        }, getPrototypeOf() {
            return Reflect.getPrototypeOf(i)
        }, has(o, a) {
            return Reflect.has(i, a)
        }, ownKeys() {
            return Reflect.ownKeys(i)
        }, set(o, a, r) {
            return i[a] = r, delete o[a], !0
        }
    })
}

function Dn(i, t = {scriptable: !0, indexable: !0}) {
    const {_scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys} = i;
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: vt(e) ? e : () => e,
        isIndexable: vt(s) ? s : () => s
    }
}

const ka = (i, t) => i ? i + Si(t) : t,
    Li = (i, t) => O(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);

function On(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
    const s = e();
    return i[t] = s, s
}

function Sa(i, t, e) {
    const {_proxy: s, _context: n, _subProxy: o, _descriptors: a} = i;
    let r = s[t];
    return vt(r) && a.isScriptable(t) && (r = wa(t, r, i, e)), F(r) && r.length && (r = Pa(t, r, i, a.isIndexable)), Li(t, r) && (r = Nt(r, n, o && o[t], a)), r
}

function wa(i, t, e, s) {
    const {_proxy: n, _context: o, _subProxy: a, _stack: r} = e;
    if (r.has(i)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
    r.add(i);
    let l = t(o, a || s);
    return r.delete(i), Li(i, l) && (l = Ti(n._scopes, n, i, l)), l
}

function Pa(i, t, e, s) {
    const {_proxy: n, _context: o, _subProxy: a, _descriptors: r} = e;
    if (typeof o.index < "u" && s(i)) return t[o.index % t.length];
    if (O(t[0])) {
        const l = t, c = n._scopes.filter(h => h !== l);
        t = [];
        for (const h of l) {
            const d = Ti(c, n, i, h);
            t.push(Nt(d, o, a && a[i], r))
        }
    }
    return t
}

function An(i, t, e) {
    return vt(i) ? i(t, e) : i
}

const Ca = (i, t) => i === !0 ? t : typeof i == "string" ? yt(t, i) : void 0;

function Da(i, t, e, s, n) {
    for (const o of t) {
        const a = Ca(e, o);
        if (a) {
            i.add(a);
            const r = An(a._fallback, e, n);
            if (typeof r < "u" && r !== e && r !== s) return r
        } else if (a === !1 && typeof s < "u" && e !== s) return null
    }
    return !1
}

function Ti(i, t, e, s) {
    const n = t._rootScopes, o = An(t._fallback, e, s), a = [...i, ...n], r = new Set;
    r.add(s);
    let l = Qi(r, a, e, o || e, s);
    return l === null || typeof o < "u" && o !== e && (l = Qi(r, a, o, l, s), l === null) ? !1 : Ai(Array.from(r), [""], n, o, () => Oa(t, e, s))
}

function Qi(i, t, e, s, n) {
    for (; e;) e = Da(i, t, e, s, n);
    return e
}

function Oa(i, t, e) {
    const s = i._getTarget();
    t in s || (s[t] = {});
    const n = s[t];
    return F(n) && O(e) ? e : n || {}
}

function Aa(i, t, e, s) {
    let n;
    for (const o of t) if (n = Ln(ka(o, i), e), typeof n < "u") return Li(i, n) ? Ti(e, s, i, n) : n
}

function Ln(i, t) {
    for (const e of t) {
        if (!e) continue;
        const s = e[i];
        if (typeof s < "u") return s
    }
}

function ts(i) {
    let t = i._keys;
    return t || (t = i._keys = La(i._scopes)), t
}

function La(i) {
    const t = new Set;
    for (const e of i) for (const s of Object.keys(e).filter(n => !n.startsWith("_"))) t.add(s);
    return Array.from(t)
}

function Tn(i, t, e, s) {
    const {iScale: n} = i, {key: o = "r"} = this._parsing, a = new Array(s);
    let r, l, c, h;
    for (r = 0, l = s; r < l; ++r) c = r + e, h = t[c], a[r] = {r: n.parse(yt(h, o), c)};
    return a
}

const Ta = Number.EPSILON || 1e-14, Ht = (i, t) => t < i.length && !i[t].skip && i[t], Rn = i => i === "x" ? "y" : "x";

function Ra(i, t, e, s) {
    const n = i.skip ? t : i, o = t, a = e.skip ? t : e, r = di(o, n), l = di(a, o);
    let c = r / (r + l), h = l / (r + l);
    c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
    const d = s * c, u = s * h;
    return {
        previous: {x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y)},
        next: {x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y)}
    }
}

function Ea(i, t, e) {
    const s = i.length;
    let n, o, a, r, l, c = Ht(i, 0);
    for (let h = 0; h < s - 1; ++h) if (l = c, c = Ht(i, h + 1), !(!l || !c)) {
        if (se(t[h], 0, Ta)) {
            e[h] = e[h + 1] = 0;
            continue
        }
        n = e[h] / t[h], o = e[h + 1] / t[h], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = n * a * t[h], e[h + 1] = o * a * t[h])
    }
}

function Fa(i, t, e = "x") {
    const s = Rn(e), n = i.length;
    let o, a, r, l = Ht(i, 0);
    for (let c = 0; c < n; ++c) {
        if (a = r, r = l, l = Ht(i, c + 1), !r) continue;
        const h = r[e], d = r[s];
        a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${s}`] = d + o * t[c])
    }
}

function Ia(i, t = "x") {
    const e = Rn(t), s = i.length, n = Array(s).fill(0), o = Array(s);
    let a, r, l, c = Ht(i, 0);
    for (a = 0; a < s; ++a) if (r = l, l = c, c = Ht(i, a + 1), !!l) {
        if (c) {
            const h = c[t] - l[t];
            n[a] = h !== 0 ? (c[e] - l[e]) / h : 0
        }
        o[a] = r ? c ? at(n[a - 1]) !== at(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
    }
    Ea(i, n, o), Fa(i, o, t)
}

function Me(i, t, e) {
    return Math.max(Math.min(i, e), t)
}

function za(i, t) {
    let e, s, n, o, a, r = ft(i[0], t);
    for (e = 0, s = i.length; e < s; ++e) a = o, o = r, r = e < s - 1 && ft(i[e + 1], t), o && (n = i[e], a && (n.cp1x = Me(n.cp1x, t.left, t.right), n.cp1y = Me(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Me(n.cp2x, t.left, t.right), n.cp2y = Me(n.cp2y, t.top, t.bottom)))
}

function Ba(i, t, e, s, n) {
    let o, a, r, l;
    if (t.spanGaps && (i = i.filter(c => !c.skip)), t.cubicInterpolationMode === "monotone") Ia(i, n); else {
        let c = s ? i[i.length - 1] : i[0];
        for (o = 0, a = i.length; o < a; ++o) r = i[o], l = Ra(c, r, i[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r
    }
    t.capBezierPoints && za(i, e)
}

function En() {
    return typeof window < "u" && typeof document < "u"
}

function Ri(i) {
    let t = i.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
}

function Ve(i, t, e) {
    let s;
    return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s
}

const Ue = i => i.ownerDocument.defaultView.getComputedStyle(i, null);

function Va(i, t) {
    return Ue(i).getPropertyValue(t)
}

const Wa = ["top", "right", "bottom", "left"];

function Lt(i, t, e) {
    const s = {};
    e = e ? "-" + e : "";
    for (let n = 0; n < 4; n++) {
        const o = Wa[n];
        s[o] = parseFloat(i[t + "-" + o + e]) || 0
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s
}

const Na = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);

function Ha(i, t) {
    const e = i.touches, s = e && e.length ? e[0] : i, {offsetX: n, offsetY: o} = s;
    let a = !1, r, l;
    if (Na(n, o, i.target)) r = n, l = o; else {
        const c = t.getBoundingClientRect();
        r = s.clientX - c.left, l = s.clientY - c.top, a = !0
    }
    return {x: r, y: l, box: a}
}

function Dt(i, t) {
    if ("native" in i) return i;
    const {canvas: e, currentDevicePixelRatio: s} = t, n = Ue(e), o = n.boxSizing === "border-box",
        a = Lt(n, "padding"), r = Lt(n, "border", "width"), {x: l, y: c, box: h} = Ha(i, e), d = a.left + (h && r.left),
        u = a.top + (h && r.top);
    let {width: f, height: g} = t;
    return o && (f -= a.width + r.width, g -= a.height + r.height), {
        x: Math.round((l - d) / f * e.width / s),
        y: Math.round((c - u) / g * e.height / s)
    }
}

function ja(i, t, e) {
    let s, n;
    if (t === void 0 || e === void 0) {
        const o = Ri(i);
        if (!o) t = i.clientWidth, e = i.clientHeight; else {
            const a = o.getBoundingClientRect(), r = Ue(o), l = Lt(r, "border", "width"), c = Lt(r, "padding");
            t = a.width - c.width - l.width, e = a.height - c.height - l.height, s = Ve(r.maxWidth, o, "clientWidth"), n = Ve(r.maxHeight, o, "clientHeight")
        }
    }
    return {width: t, height: e, maxWidth: s || ze, maxHeight: n || ze}
}

const ke = i => Math.round(i * 10) / 10;

function $a(i, t, e, s) {
    const n = Ue(i), o = Lt(n, "margin"), a = Ve(n.maxWidth, i, "clientWidth") || ze,
        r = Ve(n.maxHeight, i, "clientHeight") || ze, l = ja(i, t, e);
    let {width: c, height: h} = l;
    if (n.boxSizing === "content-box") {
        const u = Lt(n, "border", "width"), f = Lt(n, "padding");
        c -= f.width + u.width, h -= f.height + u.height
    }
    return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = ke(Math.min(c, a, l.maxWidth)), h = ke(Math.min(h, r, l.maxHeight)), c && !h && (h = ke(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = ke(Math.floor(h * s))), {
        width: c,
        height: h
    }
}

function es(i, t, e) {
    const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
    i.height = Math.floor(i.height), i.width = Math.floor(i.width);
    const a = i.canvas;
    return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1
}

const Ya = function () {
    let i = !1;
    try {
        const t = {
            get passive() {
                return i = !0, !1
            }
        };
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
    } catch {
    }
    return i
}();

function is(i, t) {
    const e = Va(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0
}

function Ot(i, t, e, s) {
    return {x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y)}
}

function Xa(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: s === "middle" ? e < .5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
    }
}

function Ua(i, t, e, s) {
    const n = {x: i.cp2x, y: i.cp2y}, o = {x: t.cp1x, y: t.cp1y}, a = Ot(i, n, e), r = Ot(n, o, e), l = Ot(o, t, e),
        c = Ot(a, r, e), h = Ot(r, l, e);
    return Ot(c, h, e)
}

const Ka = function (i, t) {
    return {
        x(e) {
            return i + i + t - e
        }, setWidth(e) {
            t = e
        }, textAlign(e) {
            return e === "center" ? e : e === "right" ? "left" : "right"
        }, xPlus(e, s) {
            return e - s
        }, leftForLtr(e, s) {
            return e - s
        }
    }
}, qa = function () {
    return {
        x(i) {
            return i
        }, setWidth(i) {
        }, textAlign(i) {
            return i
        }, xPlus(i, t) {
            return i + t
        }, leftForLtr(i, t) {
            return i
        }
    }
};

function Vt(i, t, e) {
    return i ? Ka(t, e) : qa()
}

function Fn(i, t) {
    let e, s;
    (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i.prevTextDirection = s)
}

function In(i, t) {
    t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]))
}

function zn(i) {
    return i === "angle" ? {between: ce, compare: Go, normalize: tt} : {
        between: dt,
        compare: (t, e) => t - e,
        normalize: t => t
    }
}

function ss({start: i, end: t, count: e, loop: s, style: n}) {
    return {start: i % e, end: t % e, loop: s && (t - i + 1) % e === 0, style: n}
}

function Ga(i, t, e) {
    const {property: s, start: n, end: o} = e, {between: a, normalize: r} = zn(s), l = t.length;
    let {start: c, end: h, loop: d} = i, u, f;
    if (d) {
        for (c += l, h += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u) c--, h--;
        c %= l, h %= l
    }
    return h < c && (h += l), {start: c, end: h, loop: d, style: i.style}
}

function Bn(i, t, e) {
    if (!e) return [i];
    const {property: s, start: n, end: o} = e, a = t.length, {compare: r, between: l, normalize: c} = zn(s), {
        start: h,
        end: d,
        loop: u,
        style: f
    } = Ga(i, t, e), g = [];
    let p = !1, m = null, b, x, v;
    const y = () => l(n, v, b) && r(n, v) !== 0, _ = () => r(o, b) === 0 || l(o, v, b), M = () => p || y(),
        k = () => !p || _();
    for (let S = h, w = h; S <= d; ++S) x = t[S % a], !x.skip && (b = c(x[s]), b !== v && (p = l(b, n, o), m === null && M() && (m = r(b, n) === 0 ? S : w), m !== null && k() && (g.push(ss({
        start: m,
        end: S,
        loop: u,
        count: a,
        style: f
    })), m = null), w = S, v = b));
    return m !== null && g.push(ss({start: m, end: d, loop: u, count: a, style: f})), g
}

function Vn(i, t) {
    const e = [], s = i.segments;
    for (let n = 0; n < s.length; n++) {
        const o = Bn(s[n], i.points, t);
        o.length && e.push(...o)
    }
    return e
}

function Za(i, t, e, s) {
    let n = 0, o = t - 1;
    if (e && !s) for (; n < t && !i[n].skip;) n++;
    for (; n < t && i[n].skip;) n++;
    for (n %= t, e && (o += n); o > n && i[o % t].skip;) o--;
    return o %= t, {start: n, end: o}
}

function Ja(i, t, e, s) {
    const n = i.length, o = [];
    let a = t, r = i[t], l;
    for (l = t + 1; l <= e; ++l) {
        const c = i[l % n];
        c.skip || c.stop ? r.skip || (s = !1, o.push({
            start: t % n,
            end: (l - 1) % n,
            loop: s
        }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)), r = c
    }
    return a !== null && o.push({start: t % n, end: a % n, loop: s}), o
}

function Qa(i, t) {
    const e = i.points, s = i.options.spanGaps, n = e.length;
    if (!n) return [];
    const o = !!i._loop, {start: a, end: r} = Za(e, n, o, s);
    if (s === !0) return ns(i, [{start: a, end: r, loop: o}], e, t);
    const l = r < a ? r + n : r, c = !!i._fullLoop && a === 0 && r === n - 1;
    return ns(i, Ja(e, a, l, c), e, t)
}

function ns(i, t, e, s) {
    return !s || !s.setContext || !e ? t : tr(i, t, e, s)
}

function tr(i, t, e, s) {
    const n = i._chart.getContext(), o = os(i.options), {_datasetIndex: a, options: {spanGaps: r}} = i, l = e.length,
        c = [];
    let h = o, d = t[0].start, u = d;

    function f(g, p, m, b) {
        const x = r ? -1 : 1;
        if (g !== p) {
            for (g += l; e[g % l].skip;) g -= x;
            for (; e[p % l].skip;) p += x;
            g % l !== p % l && (c.push({start: g % l, end: p % l, loop: m, style: b}), h = b, d = p % l)
        }
    }

    for (const g of t) {
        d = r ? d : g.start;
        let p = e[d % l], m;
        for (u = d + 1; u <= g.end; u++) {
            const b = e[u % l];
            m = os(s.setContext(Mt(n, {
                type: "segment",
                p0: p,
                p1: b,
                p0DataIndex: (u - 1) % l,
                p1DataIndex: u % l,
                datasetIndex: a
            }))), er(m, h) && f(d, u - 1, g.loop, h), p = b, h = m
        }
        d < u - 1 && f(d, u - 1, g.loop, h)
    }
    return c
}

function os(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor
    }
}

function er(i, t) {
    if (!t) return !1;
    const e = [], s = function (n, o) {
        return Di(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
    };
    return JSON.stringify(i, s) !== JSON.stringify(t, s)
}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class ir {
    constructor() {
        this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
    }

    _notify(t, e, s, n) {
        const o = e.listeners[n], a = e.duration;
        o.forEach(r => r({chart: t, initial: e.initial, numSteps: a, currentStep: Math.min(s - e.start, a)}))
    }

    _refresh() {
        this._request || (this._running = !0, this._request = vn.call(window, () => {
            this._update(), this._request = null, this._running && this._refresh()
        }))
    }

    _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s, n) => {
            if (!s.running || !s.items.length) return;
            const o = s.items;
            let a = o.length - 1, r = !1, l;
            for (; a >= 0; --a) l = o[a], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
            r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length
        }), this._lastDate = t, e === 0 && (this._running = !1)
    }

    _getAnims(t) {
        const e = this._charts;
        let s = e.get(t);
        return s || (s = {running: !1, initial: !0, items: [], listeners: {complete: [], progress: []}}, e.set(t, s)), s
    }

    listen(t, e, s) {
        this._getAnims(t).listeners[e].push(s)
    }

    add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e)
    }

    has(t) {
        return this._getAnims(t).items.length > 0
    }

    start(t) {
        const e = this._charts.get(t);
        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh())
    }

    running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length)
    }

    stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const s = e.items;
        let n = s.length - 1;
        for (; n >= 0; --n) s[n].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete")
    }

    remove(t) {
        return this._charts.delete(t)
    }
}

var lt = new ir;
const as = "transparent", sr = {
    boolean(i, t, e) {
        return e > .5 ? t : i
    }, color(i, t, e) {
        const s = Gi(i || as), n = s.valid && Gi(t || as);
        return n && n.valid ? n.mix(s, e).hexString() : t
    }, number(i, t, e) {
        return i + (t - i) * e
    }
};

class nr {
    constructor(t, e, s, n) {
        const o = e[s];
        n = Qt([t.to, n, o, t.from]);
        const a = Qt([t.from, o, n]);
        this._active = !0, this._fn = t.fn || sr[t.type || typeof a], this._easing = ne[t.easing] || ne.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0
    }

    active() {
        return this._active
    }

    update(t, e, s) {
        if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop], o = s - this._start, a = this._duration - o;
            this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Qt([t.to, e, n, t.from]), this._from = Qt([t.from, n, e])
        }
    }

    cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
    }

    tick(t) {
        const e = t - this._start, s = this._duration, n = this._prop, o = this._from, a = this._loop, r = this._to;
        let l;
        if (this._active = o !== r && (a || e < s), !this._active) {
            this._target[n] = r, this._notify(!0);
            return
        }
        if (e < 0) {
            this._target[n] = o;
            return
        }
        l = e / s % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, r, l)
    }

    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, s) => {
            t.push({res: e, rej: s})
        })
    }

    _notify(t) {
        const e = t ? "res" : "rej", s = this._promises || [];
        for (let n = 0; n < s.length; n++) s[n][e]()
    }
}

class Wn {
    constructor(t, e) {
        this._chart = t, this._properties = new Map, this.configure(e)
    }

    configure(t) {
        if (!O(t)) return;
        const e = Object.keys(W.animation), s = this._properties;
        Object.getOwnPropertyNames(t).forEach(n => {
            const o = t[n];
            if (!O(o)) return;
            const a = {};
            for (const r of e) a[r] = o[r];
            (F(o.properties) && o.properties || [n]).forEach(r => {
                (r === n || !s.has(r)) && s.set(r, a)
            })
        })
    }

    _animateOptions(t, e) {
        const s = e.options, n = ar(t, s);
        if (!n) return [];
        const o = this._createAnimations(n, s);
        return s.$shared && or(t.options.$animations, s).then(() => {
            t.options = s
        }, () => {
        }), o
    }

    _createAnimations(t, e) {
        const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e),
            r = Date.now();
        let l;
        for (l = a.length - 1; l >= 0; --l) {
            const c = a[l];
            if (c.charAt(0) === "$") continue;
            if (c === "options") {
                n.push(...this._animateOptions(t, e));
                continue
            }
            const h = e[c];
            let d = o[c];
            const u = s.get(c);
            if (d) if (u && d.active()) {
                d.update(u, h, r);
                continue
            } else d.cancel();
            if (!u || !u.duration) {
                t[c] = h;
                continue
            }
            o[c] = d = new nr(u, t, c, h), n.push(d)
        }
        return n
    }

    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return
        }
        const s = this._createAnimations(t, e);
        if (s.length) return lt.add(this._chart, s), !0
    }
}

function or(i, t) {
    const e = [], s = Object.keys(t);
    for (let n = 0; n < s.length; n++) {
        const o = i[s[n]];
        o && o.active() && e.push(o.wait())
    }
    return Promise.all(e)
}

function ar(i, t) {
    if (!t) return;
    let e = i.options;
    if (!e) {
        i.options = t;
        return
    }
    return e.$shared && (i.options = e = Object.assign({}, e, {$shared: !1, $animations: {}})), e
}

function rs(i, t) {
    const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
    return {start: s ? o : n, end: s ? n : o}
}

function rr(i, t, e) {
    if (e === !1) return !1;
    const s = rs(i, e), n = rs(t, e);
    return {top: n.end, right: s.end, bottom: n.start, left: s.start}
}

function lr(i) {
    let t, e, s, n;
    return O(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
        top: t,
        right: e,
        bottom: s,
        left: n,
        disabled: i === !1
    }
}

function Nn(i, t) {
    const e = [], s = i._getSortedDatasetMetas(t);
    let n, o;
    for (n = 0, o = s.length; n < o; ++n) e.push(s[n].index);
    return e
}

function ls(i, t, e, s = {}) {
    const n = i.keys, o = s.mode === "single";
    let a, r, l, c;
    if (t !== null) {
        for (a = 0, r = n.length; a < r; ++a) {
            if (l = +n[a], l === e) {
                if (s.all) continue;
                break
            }
            c = i.values[l], V(c) && (o || t === 0 || at(t) === at(c)) && (t += c)
        }
        return t
    }
}

function cr(i) {
    const t = Object.keys(i), e = new Array(t.length);
    let s, n, o;
    for (s = 0, n = t.length; s < n; ++s) o = t[s], e[s] = {x: o, y: i[o]};
    return e
}

function cs(i, t) {
    const e = i && i.options.stacked;
    return e || e === void 0 && t.stack !== void 0
}

function hr(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`
}

function dr(i) {
    const {min: t, max: e, minDefined: s, maxDefined: n} = i.getUserBounds();
    return {min: s ? t : Number.NEGATIVE_INFINITY, max: n ? e : Number.POSITIVE_INFINITY}
}

function ur(i, t, e) {
    const s = i[t] || (i[t] = {});
    return s[e] || (s[e] = {})
}

function hs(i, t, e, s) {
    for (const n of t.getMatchingVisibleMetas(s).reverse()) {
        const o = i[n.index];
        if (e && o > 0 || !e && o < 0) return n.index
    }
    return null
}

function ds(i, t) {
    const {chart: e, _cachedMeta: s} = i, n = e._stacks || (e._stacks = {}), {iScale: o, vScale: a, index: r} = s,
        l = o.axis, c = a.axis, h = hr(o, a, s), d = t.length;
    let u;
    for (let f = 0; f < d; ++f) {
        const g = t[f], {[l]: p, [c]: m} = g, b = g._stacks || (g._stacks = {});
        u = b[c] = ur(n, h, p), u[r] = m, u._top = hs(u, a, !0, s.type), u._bottom = hs(u, a, !1, s.type);
        const x = u._visualValues || (u._visualValues = {});
        x[r] = m
    }
}

function Qe(i, t) {
    const e = i.scales;
    return Object.keys(e).filter(s => e[s].axis === t).shift()
}

function fr(i, t) {
    return Mt(i, {active: !1, dataset: void 0, datasetIndex: t, index: t, mode: "default", type: "dataset"})
}

function gr(i, t, e) {
    return Mt(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    })
}

function Ut(i, t) {
    const e = i.controller.index, s = i.vScale && i.vScale.axis;
    if (s) {
        t = t || i._parsed;
        for (const n of t) {
            const o = n._stacks;
            if (!o || o[s] === void 0 || o[s][e] === void 0) return;
            delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e]
        }
    }
}

const ti = i => i === "reset" || i === "none", us = (i, t) => t ? i : Object.assign({}, i),
    pr = (i, t, e) => i && !t.hidden && t._stacked && {keys: Nn(e, !0), values: null};

class kt {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;

    constructor(t, e) {
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
    }

    initialize() {
        const t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = cs(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
    }

    updateIndex(t) {
        this.index !== t && Ut(this._cachedMeta), this.index = t
    }

    linkScales() {
        const t = this.chart, e = this._cachedMeta, s = this.getDataset(),
            n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = P(s.xAxisID, Qe(t, "x")),
            a = e.yAxisID = P(s.yAxisID, Qe(t, "y")), r = e.rAxisID = P(s.rAxisID, Qe(t, "r")), l = e.indexAxis,
            c = e.iAxisID = n(l, o, a, r), h = e.vAxisID = n(l, a, o, r);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h)
    }

    getDataset() {
        return this.chart.data.datasets[this.index]
    }

    getMeta() {
        return this.chart.getDatasetMeta(this.index)
    }

    getScaleForId(t) {
        return this.chart.scales[t]
    }

    _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale
    }

    reset() {
        this._update("reset")
    }

    _destroy() {
        const t = this._cachedMeta;
        this._data && Ui(this._data, this), t._stacked && Ut(t)
    }

    _dataCheck() {
        const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
        if (O(e)) this._data = cr(e); else if (s !== e) {
            if (s) {
                Ui(s, this);
                const n = this._cachedMeta;
                Ut(n), n._parsed = []
            }
            e && Object.isExtensible(e) && ta(e, this), this._syncList = [], this._data = e
        }
    }

    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
    }

    buildOrUpdateElements(t) {
        const e = this._cachedMeta, s = this.getDataset();
        let n = !1;
        this._dataCheck();
        const o = e._stacked;
        e._stacked = cs(e.vScale, e), e.stack !== s.stack && (n = !0, Ut(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && ds(this, e._parsed)
    }

    configure() {
        const t = this.chart.config, e = t.datasetScopeKeys(this._type),
            s = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
    }

    parse(t, e) {
        const {_cachedMeta: s, _data: n} = this, {iScale: o, _stacked: a} = s, r = o.axis;
        let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
        if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n; else {
            F(n[t]) ? u = this.parseArrayData(s, n, t, e) : O(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
            const f = () => d[r] === null || c && d[r] < c[r];
            for (h = 0; h < e; ++h) s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
            s._sorted = l
        }
        a && ds(this, u)
    }

    parsePrimitiveData(t, e, s, n) {
        const {iScale: o, vScale: a} = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, d = new Array(n);
        let u, f, g;
        for (u = 0, f = n; u < f; ++u) g = u + s, d[u] = {[r]: h || o.parse(c[g], g), [l]: a.parse(e[g], g)};
        return d
    }

    parseArrayData(t, e, s, n) {
        const {xScale: o, yScale: a} = t, r = new Array(n);
        let l, c, h, d;
        for (l = 0, c = n; l < c; ++l) h = l + s, d = e[h], r[l] = {x: o.parse(d[0], h), y: a.parse(d[1], h)};
        return r
    }

    parseObjectData(t, e, s, n) {
        const {xScale: o, yScale: a} = t, {xAxisKey: r = "x", yAxisKey: l = "y"} = this._parsing, c = new Array(n);
        let h, d, u, f;
        for (h = 0, d = n; h < d; ++h) u = h + s, f = e[u], c[h] = {x: o.parse(yt(f, r), u), y: a.parse(yt(f, l), u)};
        return c
    }

    getParsed(t) {
        return this._cachedMeta._parsed[t]
    }

    getDataElement(t) {
        return this._cachedMeta.data[t]
    }

    applyStack(t, e, s) {
        const n = this.chart, o = this._cachedMeta, a = e[t.axis],
            r = {keys: Nn(n, !0), values: e._stacks[t.axis]._visualValues};
        return ls(r, a, o.index, {mode: s})
    }

    updateRangeFromParsed(t, e, s, n) {
        const o = s[e.axis];
        let a = o === null ? NaN : o;
        const r = n && s._stacks[e.axis];
        n && r && (n.values = r, a = ls(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a)
    }

    getMinMax(t, e) {
        const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, a = n.length,
            r = this._getOtherScale(t), l = pr(e, s, this.chart),
            c = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY}, {min: h, max: d} = dr(r);
        let u, f;

        function g() {
            f = n[u];
            const p = f[r.axis];
            return !V(f[t.axis]) || h > p || d < p
        }

        for (u = 0; u < a && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u) ;
        if (o) {
            for (u = a - 1; u >= 0; --u) if (!g()) {
                this.updateRangeFromParsed(c, t, f, l);
                break
            }
        }
        return c
    }

    getAllParsedValues(t) {
        const e = this._cachedMeta._parsed, s = [];
        let n, o, a;
        for (n = 0, o = e.length; n < o; ++n) a = e[n][t.axis], V(a) && s.push(a);
        return s
    }

    getMaxOverflow() {
        return !1
    }

    getLabelAndValue(t) {
        const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
        return {label: s ? "" + s.getLabelForValue(o[s.axis]) : "", value: n ? "" + n.getLabelForValue(o[n.axis]) : ""}
    }

    _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"), e._clip = lr(P(this.options.clip, rr(e.xScale, e.yScale, this.getMaxOverflow())))
    }

    update(t) {
    }

    draw() {
        const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [],
            r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop;
        let h;
        for (s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
            const d = n[h];
            d.hidden || (d.active && c ? a.push(d) : d.draw(t, o))
        }
        for (h = 0; h < a.length; ++h) a[h].draw(t, o)
    }

    getStyle(t, e) {
        const s = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s)
    }

    getContext(t, e, s) {
        const n = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const a = this._cachedMeta.data[t];
            o = a.$context || (a.$context = gr(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
        } else o = this.$context || (this.$context = fr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
        return o.active = !!e, o.mode = s, o
    }

    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t)
    }

    resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t)
    }

    _resolveElementOptions(t, e = "default", s) {
        const n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a],
            l = this.enableOptionSharing && le(s);
        if (r) return us(r, l);
        const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t),
            d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""], u = c.getOptionScopes(this.getDataset(), h),
            f = Object.keys(W.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(u, f, g, d);
        return p.$shared && (p.$shared = l, o[a] = Object.freeze(us(p, l))), p
    }

    _resolveAnimations(t, e, s) {
        const n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
        if (r) return r;
        let l;
        if (n.options.animation !== !1) {
            const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e),
                u = h.getOptionScopes(this.getDataset(), d);
            l = h.createResolver(u, this.getContext(t, s, e))
        }
        const c = new Wn(n, l && l.animations);
        return l && l._cacheable && (o[a] = Object.freeze(c)), c
    }

    getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
    }

    includeOptions(t, e) {
        return !e || ti(t) || this.chart._animationsDisabled
    }

    _getSharedOptions(t, e) {
        const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s),
            a = this.includeOptions(e, o) || o !== n;
        return this.updateSharedOptions(o, e, s), {sharedOptions: o, includeOptions: a}
    }

    updateElement(t, e, s, n) {
        ti(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s)
    }

    updateSharedOptions(t, e, s) {
        t && !ti(e) && this._resolveAnimations(void 0, e).update(t, s)
    }

    _setStyle(t, e, s, n) {
        t.active = n;
        const o = this.getStyle(e, n);
        this._resolveAnimations(e, s, n).update(t, {options: !n && this.getSharedOptions(o) || o})
    }

    removeHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !1)
    }

    setHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !0)
    }

    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1)
    }

    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0)
    }

    _resyncElements(t) {
        const e = this._data, s = this._cachedMeta.data;
        for (const [r, l, c] of this._syncList) this[r](l, c);
        this._syncList = [];
        const n = s.length, o = e.length, a = Math.min(o, n);
        a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o)
    }

    _insertElements(t, e, s = !0) {
        const n = this._cachedMeta, o = n.data, a = t + e;
        let r;
        const l = c => {
            for (c.length += e, r = c.length - 1; r >= a; r--) c[r] = c[r - e]
        };
        for (l(o), r = t; r < a; ++r) o[r] = new this.dataElementType;
        this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset")
    }

    updateElements(t, e, s, n) {
    }

    _removeElements(t, e) {
        const s = this._cachedMeta;
        if (this._parsing) {
            const n = s._parsed.splice(t, e);
            s._stacked && Ut(s, n)
        }
        s.data.splice(t, e)
    }

    _sync(t) {
        if (this._parsing) this._syncList.push(t); else {
            const [e, s, n] = t;
            this[e](s, n)
        }
        this.chart._dataChanges.push([this.index, ...t])
    }

    _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t])
    }

    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
    }

    _onDataShift() {
        this._sync(["_removeElements", 0, 1])
    }

    _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        const s = arguments.length - 2;
        s && this._sync(["_insertElements", t, s])
    }

    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length])
    }
}

function mr(i, t) {
    if (!i._cache.$bar) {
        const e = i.getMatchingVisibleMetas(t);
        let s = [];
        for (let n = 0, o = e.length; n < o; n++) s = s.concat(e[n].controller.getAllParsedValues(i));
        i._cache.$bar = yn(s.sort((n, o) => n - o))
    }
    return i._cache.$bar
}

function br(i) {
    const t = i.iScale, e = mr(t, i.type);
    let s = t._length, n, o, a, r;
    const l = () => {
        a === 32767 || a === -32768 || (le(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a)
    };
    for (n = 0, o = e.length; n < o; ++n) a = t.getPixelForValue(e[n]), l();
    for (r = void 0, n = 0, o = t.ticks.length; n < o; ++n) a = t.getPixelForTick(n), l();
    return s
}

function xr(i, t, e, s) {
    const n = e.barThickness;
    let o, a;
    return L(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
        chunk: o / s,
        ratio: a,
        start: t.pixels[i] - o / 2
    }
}

function _r(i, t, e, s) {
    const n = t.pixels, o = n[i];
    let a = i > 0 ? n[i - 1] : null, r = i < n.length - 1 ? n[i + 1] : null;
    const l = e.categoryPercentage;
    a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
    const c = o - (o - Math.min(a, r)) / 2 * l;
    return {chunk: Math.abs(r - a) / 2 * l / s, ratio: e.barPercentage, start: c}
}

function yr(i, t, e, s) {
    const n = e.parse(i[0], s), o = e.parse(i[1], s), a = Math.min(n, o), r = Math.max(n, o);
    let l = a, c = r;
    Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
        barStart: l,
        barEnd: c,
        start: n,
        end: o,
        min: a,
        max: r
    }
}

function Hn(i, t, e, s) {
    return F(i) ? yr(i, t, e, s) : t[e.axis] = e.parse(i, s), t
}

function fs(i, t, e, s) {
    const n = i.iScale, o = i.vScale, a = n.getLabels(), r = n === o, l = [];
    let c, h, d, u;
    for (c = e, h = e + s; c < h; ++c) u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(Hn(u, d, o, c));
    return l
}

function ei(i) {
    return i && i.barStart !== void 0 && i.barEnd !== void 0
}

function vr(i, t, e) {
    return i !== 0 ? at(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1)
}

function Mr(i) {
    let t, e, s, n, o;
    return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
        start: e,
        end: s,
        reverse: t,
        top: n,
        bottom: o
    }
}

function kr(i, t, e, s) {
    let n = t.borderSkipped;
    const o = {};
    if (!n) {
        i.borderSkipped = o;
        return
    }
    if (n === !0) {
        i.borderSkipped = {top: !0, right: !0, bottom: !0, left: !0};
        return
    }
    const {start: a, end: r, reverse: l, top: c, bottom: h} = Mr(i);
    n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[gs(h, a, r, l)] = !0, n = c)), o[gs(n, a, r, l)] = !0, i.borderSkipped = o
}

function gs(i, t, e, s) {
    return s ? (i = Sr(i, t, e), i = ps(i, e, t)) : i = ps(i, t, e), i
}

function Sr(i, t, e) {
    return i === t ? e : i === e ? t : i
}

function ps(i, t, e) {
    return i === "start" ? t : i === "end" ? e : i
}

function wr(i, {inflateAmount: t}, e) {
    i.inflateAmount = t === "auto" ? e === 1 ? .33 : 0 : t
}

class Pr extends kt {
    static id = "bar";
    static defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {numbers: {type: "number", properties: ["x", "y", "base", "width", "height"]}}
    };
    static overrides = {
        scales: {
            _index_: {type: "category", offset: !0, grid: {offset: !0}},
            _value_: {type: "linear", beginAtZero: !0}
        }
    };

    parsePrimitiveData(t, e, s, n) {
        return fs(t, e, s, n)
    }

    parseArrayData(t, e, s, n) {
        return fs(t, e, s, n)
    }

    parseObjectData(t, e, s, n) {
        const {iScale: o, vScale: a} = t, {xAxisKey: r = "x", yAxisKey: l = "y"} = this._parsing,
            c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, d = [];
        let u, f, g, p;
        for (u = s, f = s + n; u < f; ++u) p = e[u], g = {}, g[o.axis] = o.parse(yt(p, c), u), d.push(Hn(yt(p, h), g, a, u));
        return d
    }

    updateRangeFromParsed(t, e, s, n) {
        super.updateRangeFromParsed(t, e, s, n);
        const o = s._custom;
        o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
    }

    getMaxOverflow() {
        return 0
    }

    getLabelAndValue(t) {
        const e = this._cachedMeta, {iScale: s, vScale: n} = e, o = this.getParsed(t), a = o._custom,
            r = ei(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
        return {label: "" + s.getLabelForValue(o[s.axis]), value: r}
    }

    initialize() {
        this.enableOptionSharing = !0, super.initialize();
        const t = this._cachedMeta;
        t.stack = this.getDataset().stack
    }

    update(t) {
        const e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t)
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", {index: a, _cachedMeta: {vScale: r}} = this, l = r.getBasePixel(),
            c = r.isHorizontal(), h = this._getRuler(), {
                sharedOptions: d,
                includeOptions: u
            } = this._getSharedOptions(e, n);
        for (let f = e; f < e + s; f++) {
            const g = this.getParsed(f), p = o || L(g[r.axis]) ? {base: l, head: l} : this._calculateBarValuePixels(f),
                m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[r.axis], x = {
                    horizontal: c,
                    base: p.base,
                    enableBorderRadius: !b || ei(g._custom) || a === b._top || a === b._bottom,
                    x: c ? p.head : m.center,
                    y: c ? m.center : p.head,
                    height: c ? m.size : Math.abs(p.size),
                    width: c ? Math.abs(p.size) : m.size
                };
            u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
            const v = x.options || t[f].options;
            kr(x, v, b, a), wr(x, v, h.ratio), this.updateElement(t[f], f, x, n)
        }
    }

    _getStacks(t, e) {
        const {iScale: s} = this._cachedMeta,
            n = s.getMatchingVisibleMetas(this._type).filter(l => l.controller.options.grouped), o = s.options.stacked,
            a = [], r = l => {
                const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
                if (L(h) || isNaN(h)) return !0
            };
        for (const l of n) if (!(e !== void 0 && r(l)) && ((o === !1 || a.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && a.push(l.stack), l.index === t)) break;
        return a.length || a.push(void 0), a
    }

    _getStackCount(t) {
        return this._getStacks(void 0, t).length
    }

    _getStackIndex(t, e, s) {
        const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
        return o === -1 ? n.length - 1 : o
    }

    _getRuler() {
        const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
        let o, a;
        for (o = 0, a = e.data.length; o < a; ++o) n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
        const r = t.barThickness;
        return {
            min: r || br(e),
            pixels: n,
            start: s._startPixel,
            end: s._endPixel,
            stackCount: this._getStackCount(),
            scale: s,
            grouped: t.grouped,
            ratio: r ? 1 : t.categoryPercentage * t.barPercentage
        }
    }

    _calculateBarValuePixels(t) {
        const {_cachedMeta: {vScale: e, _stacked: s, index: n}, options: {base: o, minBarLength: a}} = this, r = o || 0,
            l = this.getParsed(t), c = l._custom, h = ei(c);
        let d = l[e.axis], u = 0, f = s ? this.applyStack(e, l, s) : d, g, p;
        f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && at(d) !== at(c.barEnd) && (u = 0), u += d);
        const m = !L(o) && !h ? o : u;
        let b = e.getPixelForValue(m);
        if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = b, p = g - b, Math.abs(p) < a) {
            p = vr(p, e, r) * a, d === r && (b -= p / 2);
            const x = e.getPixelForDecimal(0), v = e.getPixelForDecimal(1), y = Math.min(x, v), _ = Math.max(x, v);
            b = Math.max(Math.min(b, _), y), g = b + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(b))
        }
        if (b === e.getPixelForValue(r)) {
            const x = at(p) * e.getLineWidthForValue(r) / 2;
            b += x, p -= x
        }
        return {size: p, base: b, head: g, center: g + p / 2}
    }

    _calculateBarIndexPixels(t, e) {
        const s = e.scale, n = this.options, o = n.skipNull, a = P(n.maxBarThickness, 1 / 0);
        let r, l;
        if (e.grouped) {
            const c = o ? this._getStackCount(t) : e.stackCount,
                h = n.barThickness === "flex" ? _r(t, e, n, c) : xr(t, e, n, c),
                d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            r = h.start + h.chunk * d + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio)
        } else r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(a, e.min * e.ratio);
        return {base: r - l / 2, head: r + l / 2, center: r, size: l}
    }

    draw() {
        const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
        let o = 0;
        for (; o < n; ++o) this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx)
    }
}

class Cr extends kt {
    static id = "bubble";
    static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {numbers: {type: "number", properties: ["x", "y", "borderWidth", "radius"]}}
    };
    static overrides = {scales: {x: {type: "linear"}, y: {type: "linear"}}};

    initialize() {
        this.enableOptionSharing = !0, super.initialize()
    }

    parsePrimitiveData(t, e, s, n) {
        const o = super.parsePrimitiveData(t, e, s, n);
        for (let a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + s).radius;
        return o
    }

    parseArrayData(t, e, s, n) {
        const o = super.parseArrayData(t, e, s, n);
        for (let a = 0; a < o.length; a++) {
            const r = e[s + a];
            o[a]._custom = P(r[2], this.resolveDataElementOptions(a + s).radius)
        }
        return o
    }

    parseObjectData(t, e, s, n) {
        const o = super.parseObjectData(t, e, s, n);
        for (let a = 0; a < o.length; a++) {
            const r = e[s + a];
            o[a]._custom = P(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius)
        }
        return o
    }

    getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for (let s = t.length - 1; s >= 0; --s) e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
        return e > 0 && e
    }

    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart.data.labels || [], {xScale: n, yScale: o} = e, a = this.getParsed(t),
            r = n.getLabelForValue(a.x), l = o.getLabelForValue(a.y), c = a._custom;
        return {label: s[t] || "", value: "(" + r + ", " + l + (c ? ", " + c : "") + ")"}
    }

    update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t)
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", {iScale: a, vScale: r} = this._cachedMeta, {
            sharedOptions: l,
            includeOptions: c
        } = this._getSharedOptions(e, n), h = a.axis, d = r.axis;
        for (let u = e; u < e + s; u++) {
            const f = t[u], g = !o && this.getParsed(u), p = {},
                m = p[h] = o ? a.getPixelForDecimal(.5) : a.getPixelForValue(g[h]),
                b = p[d] = o ? r.getBasePixel() : r.getPixelForValue(g[d]);
            p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n)
        }
    }

    resolveDataElementOptions(t, e) {
        const s = this.getParsed(t);
        let n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, {$shared: !1}));
        const o = n.radius;
        return e !== "active" && (n.radius = 0), n.radius += P(s && s._custom, o), n
    }
}

function Dr(i, t, e) {
    let s = 1, n = 1, o = 0, a = 0;
    if (t < I) {
        const r = i, l = r + t, c = Math.cos(r), h = Math.sin(r), d = Math.cos(l), u = Math.sin(l),
            f = (v, y, _) => ce(v, r, l, !0) ? 1 : Math.max(y, y * e, _, _ * e),
            g = (v, y, _) => ce(v, r, l, !0) ? -1 : Math.min(y, y * e, _, _ * e), p = f(0, c, d), m = f(H, h, u),
            b = g(z, c, d), x = g(z + H, h, u);
        s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2
    }
    return {ratioX: s, ratioY: n, offsetX: o, offsetY: a}
}

class Ei extends kt {
    static id = "doughnut";
    static defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {animateRotate: !0, animateScale: !1},
        animations: {
            numbers: {
                type: "number",
                properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    };
    static descriptors = {
        _scriptable: t => t !== "spacing",
        _indexable: t => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
    };
    static overrides = {
        aspectRatio: 1, plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            const {labels: {pointStyle: s, color: n}} = t.legend.options;
                            return e.labels.map((o, a) => {
                                const l = t.getDatasetMeta(0).controller.getStyle(a);
                                return {
                                    text: o,
                                    fillStyle: l.backgroundColor,
                                    strokeStyle: l.borderColor,
                                    fontColor: n,
                                    lineWidth: l.borderWidth,
                                    pointStyle: s,
                                    hidden: !t.getDataVisibility(a),
                                    index: a
                                }
                            })
                        }
                        return []
                    }
                }, onClick(t, e, s) {
                    s.chart.toggleDataVisibility(e.index), s.chart.update()
                }
            }
        }
    };

    constructor(t, e) {
        super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
    }

    linkScales() {
    }

    parse(t, e) {
        const s = this.getDataset().data, n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = s; else {
            let o = l => +s[l];
            if (O(s[t])) {
                const {key: l = "value"} = this._parsing;
                o = c => +yt(s[c], l)
            }
            let a, r;
            for (a = t, r = t + e; a < r; ++a) n._parsed[a] = o(a)
        }
    }

    _getRotation() {
        return st(this.options.rotation - 90)
    }

    _getCircumference() {
        return st(this.options.circumference)
    }

    _getRotationExtents() {
        let t = I, e = -I;
        for (let s = 0; s < this.chart.data.datasets.length; ++s) if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
            const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), a = n._getCircumference();
            t = Math.min(t, o), e = Math.max(e, o + a)
        }
        return {rotation: t, circumference: e - t}
    }

    update(t) {
        const e = this.chart, {chartArea: s} = e, n = this._cachedMeta, o = n.data,
            a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
            r = Math.max((Math.min(s.width, s.height) - a) / 2, 0), l = Math.min(Wo(this.options.cutout, r), 1),
            c = this._getRingWeight(this.index), {
                circumference: h,
                rotation: d
            } = this._getRotationExtents(), {ratioX: u, ratioY: f, offsetX: g, offsetY: p} = Dr(d, h, l),
            m = (s.width - a) / u, b = (s.height - a) / f, x = Math.max(Math.min(m, b) / 2, 0),
            v = pn(this.options.radius, x), y = Math.max(v * l, 0), _ = (v - y) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g * v, this.offsetY = p * v, n.total = this.calculateTotal(), this.outerRadius = v - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t)
    }

    _circumference(t, e) {
        const s = this.options, n = this._cachedMeta, o = this._getCircumference();
        return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / I)
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h = (r.left + r.right) / 2,
            d = (r.top + r.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius,
            g = u ? 0 : this.outerRadius, {sharedOptions: p, includeOptions: m} = this._getSharedOptions(e, n);
        let b = this._getRotation(), x;
        for (x = 0; x < e; ++x) b += this._circumference(x, o);
        for (x = e; x < e + s; ++x) {
            const v = this._circumference(x, o), y = t[x], _ = {
                x: h + this.offsetX,
                y: d + this.offsetY,
                startAngle: b,
                endAngle: b + v,
                circumference: v,
                outerRadius: g,
                innerRadius: f
            };
            m && (_.options = p || this.resolveDataElementOptions(x, y.active ? "active" : n)), b += v, this.updateElement(y, x, _, n)
        }
    }

    calculateTotal() {
        const t = this._cachedMeta, e = t.data;
        let s = 0, n;
        for (n = 0; n < e.length; n++) {
            const o = t._parsed[n];
            o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o))
        }
        return s
    }

    calculateCircumference(t) {
        const e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? I * (Math.abs(t) / e) : 0
    }

    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = ge(e._parsed[t], s.options.locale);
        return {label: n[t] || "", value: o}
    }

    getMaxBorderWidth(t) {
        let e = 0;
        const s = this.chart;
        let n, o, a, r, l;
        if (!t) {
            for (n = 0, o = s.data.datasets.length; n < o; ++n) if (s.isDatasetVisible(n)) {
                a = s.getDatasetMeta(n), t = a.data, r = a.controller;
                break
            }
        }
        if (!t) return 0;
        for (n = 0, o = t.length; n < o; ++n) l = r.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
        return e
    }

    getMaxOffset(t) {
        let e = 0;
        for (let s = 0, n = t.length; s < n; ++s) {
            const o = this.resolveDataElementOptions(s);
            e = Math.max(e, o.offset || 0, o.hoverOffset || 0)
        }
        return e
    }

    _getRingWeightOffset(t) {
        let e = 0;
        for (let s = 0; s < t; ++s) this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
        return e
    }

    _getRingWeight(t) {
        return Math.max(P(this.chart.data.datasets[t].weight, 1), 0)
    }

    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
    }
}

class Or extends kt {
    static id = "line";
    static defaults = {datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1};
    static overrides = {scales: {_index_: {type: "category"}, _value_: {type: "linear"}}};

    initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
    }

    update(t) {
        const e = this._cachedMeta, {dataset: s, data: n = [], _dataset: o} = e, a = this.chart._animationsDisabled;
        let {start: r, count: l} = kn(e, n, a);
        this._drawStart = r, this._drawCount = l, Sn(e) && (r = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
        const c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
            animated: !a,
            options: c
        }, t), this.updateElements(n, r, l, t)
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", {iScale: a, vScale: r, _stacked: l, _dataset: c} = this._cachedMeta, {
                sharedOptions: h,
                includeOptions: d
            } = this._getSharedOptions(e, n), u = a.axis, f = r.axis, {spanGaps: g, segment: p} = this.options,
            m = Wt(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none",
            x = e + s, v = t.length;
        let y = e > 0 && this.getParsed(e - 1);
        for (let _ = 0; _ < v; ++_) {
            const M = t[_], k = b ? M : {};
            if (_ < e || _ >= x) {
                k.skip = !0;
                continue
            }
            const S = this.getParsed(_), w = L(S[f]), C = k[u] = a.getPixelForValue(S[u], _),
                D = k[f] = o || w ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, S, l) : S[f], _);
            k.skip = isNaN(C) || isNaN(D) || w, k.stop = _ > 0 && Math.abs(S[u] - y[u]) > m, p && (k.parsed = S, k.raw = c.data[_]), d && (k.options = h || this.resolveDataElementOptions(_, M.active ? "active" : n)), b || this.updateElement(M, _, k, n), y = S
        }
    }

    getMaxOverflow() {
        const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
        if (!n.length) return s;
        const o = n[0].size(this.resolveDataElementOptions(0)),
            a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(s, o, a) / 2
    }

    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
    }
}

class jn extends kt {
    static id = "polarArea";
    static defaults = {
        dataElementType: "arc",
        animation: {animateRotate: !0, animateScale: !0},
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
            }
        },
        indexAxis: "r",
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            const {labels: {pointStyle: s, color: n}} = t.legend.options;
                            return e.labels.map((o, a) => {
                                const l = t.getDatasetMeta(0).controller.getStyle(a);
                                return {
                                    text: o,
                                    fillStyle: l.backgroundColor,
                                    strokeStyle: l.borderColor,
                                    fontColor: n,
                                    lineWidth: l.borderWidth,
                                    pointStyle: s,
                                    hidden: !t.getDataVisibility(a),
                                    index: a
                                }
                            })
                        }
                        return []
                    }
                }, onClick(t, e, s) {
                    s.chart.toggleDataVisibility(e.index), s.chart.update()
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {display: !1},
                beginAtZero: !0,
                grid: {circular: !0},
                pointLabels: {display: !1},
                startAngle: 0
            }
        }
    };

    constructor(t, e) {
        super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
    }

    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = ge(e._parsed[t].r, s.options.locale);
        return {label: n[t] || "", value: o}
    }

    parseObjectData(t, e, s, n) {
        return Tn.bind(this)(t, e, s, n)
    }

    update(t) {
        const e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t)
    }

    getMinMax() {
        const t = this._cachedMeta, e = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
        return t.data.forEach((s, n) => {
            const o = this.getParsed(n).r;
            !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o))
        }), e
    }

    _updateRadius() {
        const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top),
            o = Math.max(n / 2, 0), a = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0),
            r = (o - a) / t.getVisibleDatasetCount();
        this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", a = this.chart, l = a.options.animation, c = this._cachedMeta.rScale, h = c.xCenter,
            d = c.yCenter, u = c.getIndexAngle(0) - .5 * z;
        let f = u, g;
        const p = 360 / this.countVisibleElements();
        for (g = 0; g < e; ++g) f += this._computeAngle(g, n, p);
        for (g = e; g < e + s; g++) {
            const m = t[g];
            let b = f, x = f + this._computeAngle(g, n, p),
                v = a.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
            f = x, o && (l.animateScale && (v = 0), l.animateRotate && (b = x = u));
            const y = {
                x: h,
                y: d,
                innerRadius: 0,
                outerRadius: v,
                startAngle: b,
                endAngle: x,
                options: this.resolveDataElementOptions(g, m.active ? "active" : n)
            };
            this.updateElement(m, g, y, n)
        }
    }

    countVisibleElements() {
        const t = this._cachedMeta;
        let e = 0;
        return t.data.forEach((s, n) => {
            !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++
        }), e
    }

    _computeAngle(t, e, s) {
        return this.chart.getDataVisibility(t) ? st(this.resolveDataElementOptions(t, e).angle || s) : 0
    }
}

class Ar extends Ei {
    static id = "pie";
    static defaults = {cutout: 0, rotation: 0, circumference: 360, radius: "100%"}
}

class Lr extends kt {
    static id = "radar";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {line: {fill: "start"}}
    };
    static overrides = {aspectRatio: 1, scales: {r: {type: "radialLinear"}}};

    getLabelAndValue(t) {
        const e = this._cachedMeta.vScale, s = this.getParsed(t);
        return {label: e.getLabels()[t], value: "" + e.getLabelForValue(s[e.axis])}
    }

    parseObjectData(t, e, s, n) {
        return Tn.bind(this)(t, e, s, n)
    }

    update(t) {
        const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
        if (s.points = n, t !== "resize") {
            const a = this.resolveDatasetElementOptions(t);
            this.options.showLine || (a.borderWidth = 0);
            const r = {_loop: !0, _fullLoop: o.length === n.length, options: a};
            this.updateElement(s, void 0, r, t)
        }
        this.updateElements(n, 0, n.length, t)
    }

    updateElements(t, e, s, n) {
        const o = this._cachedMeta.rScale, a = n === "reset";
        for (let r = e; r < e + s; r++) {
            const l = t[r], c = this.resolveDataElementOptions(r, l.active ? "active" : n),
                h = o.getPointPositionForValue(r, this.getParsed(r).r), d = a ? o.xCenter : h.x,
                u = a ? o.yCenter : h.y, f = {x: d, y: u, angle: h.angle, skip: isNaN(d) || isNaN(u), options: c};
            this.updateElement(l, r, f, n)
        }
    }
}

class Tr extends kt {
    static id = "scatter";
    static defaults = {datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1};
    static overrides = {interaction: {mode: "point"}, scales: {x: {type: "linear"}, y: {type: "linear"}}};

    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart.data.labels || [], {xScale: n, yScale: o} = e, a = this.getParsed(t),
            r = n.getLabelForValue(a.x), l = o.getLabelForValue(a.y);
        return {label: s[t] || "", value: "(" + r + ", " + l + ")"}
    }

    update(t) {
        const e = this._cachedMeta, {data: s = []} = e, n = this.chart._animationsDisabled;
        let {start: o, count: a} = kn(e, s, n);
        if (this._drawStart = o, this._drawCount = a, Sn(e) && (o = 0, a = s.length), this.options.showLine) {
            this.datasetElementType || this.addElements();
            const {dataset: r, _dataset: l} = e;
            r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = s;
            const c = this.resolveDatasetElementOptions(t);
            c.segment = this.options.segment, this.updateElement(r, void 0, {animated: !n, options: c}, t)
        } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
        this.updateElements(s, o, a, t)
    }

    addElements() {
        const {showLine: t} = this.options;
        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
    }

    updateElements(t, e, s, n) {
        const o = n === "reset", {iScale: a, vScale: r, _stacked: l, _dataset: c} = this._cachedMeta,
            h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d),
            f = a.axis, g = r.axis, {spanGaps: p, segment: m} = this.options, b = Wt(p) ? p : Number.POSITIVE_INFINITY,
            x = this.chart._animationsDisabled || o || n === "none";
        let v = e > 0 && this.getParsed(e - 1);
        for (let y = e; y < e + s; ++y) {
            const _ = t[y], M = this.getParsed(y), k = x ? _ : {}, S = L(M[g]), w = k[f] = a.getPixelForValue(M[f], y),
                C = k[g] = o || S ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[g], y);
            k.skip = isNaN(w) || isNaN(C) || S, k.stop = y > 0 && Math.abs(M[f] - v[f]) > b, m && (k.parsed = M, k.raw = c.data[y]), u && (k.options = d || this.resolveDataElementOptions(y, _.active ? "active" : n)), x || this.updateElement(_, y, k, n), v = M
        }
        this.updateSharedOptions(d, n, h)
    }

    getMaxOverflow() {
        const t = this._cachedMeta, e = t.data || [];
        if (!this.options.showLine) {
            let r = 0;
            for (let l = e.length - 1; l >= 0; --l) r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
            return r > 0 && r
        }
        const s = t.dataset, n = s.options && s.options.borderWidth || 0;
        if (!e.length) return n;
        const o = e[0].size(this.resolveDataElementOptions(0)),
            a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(n, o, a) / 2
    }
}

var Rr = Object.freeze({
    __proto__: null,
    BarController: Pr,
    BubbleController: Cr,
    DoughnutController: Ei,
    LineController: Or,
    PieController: Ar,
    PolarAreaController: jn,
    RadarController: Lr,
    ScatterController: Tr
});

function Pt() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}

class Fi {
    static override(t) {
        Object.assign(Fi.prototype, t)
    }

    options;

    constructor(t) {
        this.options = t || {}
    }

    init() {
    }

    formats() {
        return Pt()
    }

    parse() {
        return Pt()
    }

    format() {
        return Pt()
    }

    add() {
        return Pt()
    }

    diff() {
        return Pt()
    }

    startOf() {
        return Pt()
    }

    endOf() {
        return Pt()
    }
}

var Er = {_date: Fi};

function Fr(i, t, e, s) {
    const {controller: n, data: o, _sorted: a} = i, r = n._cachedMeta.iScale;
    if (r && t === r.axis && t !== "r" && a && o.length) {
        const l = r._reversePixels ? Jo : ut;
        if (s) {
            if (n._sharedOptions) {
                const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
                if (h) {
                    const d = l(o, t, e - h), u = l(o, t, e + h);
                    return {lo: d.lo, hi: u.hi}
                }
            }
        } else return l(o, t, e)
    }
    return {lo: 0, hi: o.length - 1}
}

function pe(i, t, e, s, n) {
    const o = i.getSortedVisibleDatasetMetas(), a = e[t];
    for (let r = 0, l = o.length; r < l; ++r) {
        const {index: c, data: h} = o[r], {lo: d, hi: u} = Fr(o[r], t, a, n);
        for (let f = d; f <= u; ++f) {
            const g = h[f];
            g.skip || s(g, c, f)
        }
    }
}

function Ir(i) {
    const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
    return function (s, n) {
        const o = t ? Math.abs(s.x - n.x) : 0, a = e ? Math.abs(s.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
    }
}

function ii(i, t, e, s, n) {
    const o = [];
    return !n && !i.isPointInArea(t) || pe(i, e, t, function (r, l, c) {
        !n && !ft(r, i.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({element: r, datasetIndex: l, index: c})
    }, !0), o
}

function zr(i, t, e, s) {
    let n = [];

    function o(a, r, l) {
        const {startAngle: c, endAngle: h} = a.getProps(["startAngle", "endAngle"], s), {angle: d} = xn(a, {
            x: t.x,
            y: t.y
        });
        ce(d, c, h) && n.push({element: a, datasetIndex: r, index: l})
    }

    return pe(i, e, t, o), n
}

function Br(i, t, e, s, n, o) {
    let a = [];
    const r = Ir(e);
    let l = Number.POSITIVE_INFINITY;

    function c(h, d, u) {
        const f = h.inRange(t.x, t.y, n);
        if (s && !f) return;
        const g = h.getCenterPoint(n);
        if (!(!!o || i.isPointInArea(g)) && !f) return;
        const m = r(t, g);
        m < l ? (a = [{element: h, datasetIndex: d, index: u}], l = m) : m === l && a.push({
            element: h,
            datasetIndex: d,
            index: u
        })
    }

    return pe(i, e, t, c), a
}

function si(i, t, e, s, n, o) {
    return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? zr(i, t, e, n) : Br(i, t, e, s, n, o)
}

function ms(i, t, e, s, n) {
    const o = [], a = e === "x" ? "inXRange" : "inYRange";
    let r = !1;
    return pe(i, e, t, (l, c, h) => {
        l[a](t[e], n) && (o.push({element: l, datasetIndex: c, index: h}), r = r || l.inRange(t.x, t.y, n))
    }), s && !r ? [] : o
}

var Vr = {
    evaluateInteractionItems: pe, modes: {
        index(i, t, e, s) {
            const n = Dt(t, i), o = e.axis || "x", a = e.includeInvisible || !1,
                r = e.intersect ? ii(i, n, o, s, a) : si(i, n, o, !1, s, a), l = [];
            return r.length ? (i.getSortedVisibleDatasetMetas().forEach(c => {
                const h = r[0].index, d = c.data[h];
                d && !d.skip && l.push({element: d, datasetIndex: c.index, index: h})
            }), l) : []
        }, dataset(i, t, e, s) {
            const n = Dt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
            let r = e.intersect ? ii(i, n, o, s, a) : si(i, n, o, !1, s, a);
            if (r.length > 0) {
                const l = r[0].datasetIndex, c = i.getDatasetMeta(l).data;
                r = [];
                for (let h = 0; h < c.length; ++h) r.push({element: c[h], datasetIndex: l, index: h})
            }
            return r
        }, point(i, t, e, s) {
            const n = Dt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
            return ii(i, n, o, s, a)
        }, nearest(i, t, e, s) {
            const n = Dt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
            return si(i, n, o, e.intersect, s, a)
        }, x(i, t, e, s) {
            const n = Dt(t, i);
            return ms(i, n, "x", e.intersect, s)
        }, y(i, t, e, s) {
            const n = Dt(t, i);
            return ms(i, n, "y", e.intersect, s)
        }
    }
};
const $n = ["left", "top", "right", "bottom"];

function Kt(i, t) {
    return i.filter(e => e.pos === t)
}

function bs(i, t) {
    return i.filter(e => $n.indexOf(e.pos) === -1 && e.box.axis === t)
}

function qt(i, t) {
    return i.sort((e, s) => {
        const n = t ? s : e, o = t ? e : s;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
    })
}

function Wr(i) {
    const t = [];
    let e, s, n, o, a, r;
    for (e = 0, s = (i || []).length; e < s; ++e) n = i[e], {
        position: o,
        options: {stack: a, stackWeight: r = 1}
    } = n, t.push({
        index: e,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: a && o + a,
        stackWeight: r
    });
    return t
}

function Nr(i) {
    const t = {};
    for (const e of i) {
        const {stack: s, pos: n, stackWeight: o} = e;
        if (!s || !$n.includes(n)) continue;
        const a = t[s] || (t[s] = {count: 0, placed: 0, weight: 0, size: 0});
        a.count++, a.weight += o
    }
    return t
}

function Hr(i, t) {
    const e = Nr(i), {vBoxMaxWidth: s, hBoxMaxHeight: n} = t;
    let o, a, r;
    for (o = 0, a = i.length; o < a; ++o) {
        r = i[o];
        const {fullSize: l} = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
        r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight)
    }
    return e
}

function jr(i) {
    const t = Wr(i), e = qt(t.filter(c => c.box.fullSize), !0), s = qt(Kt(t, "left"), !0), n = qt(Kt(t, "right")),
        o = qt(Kt(t, "top"), !0), a = qt(Kt(t, "bottom")), r = bs(t, "x"), l = bs(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(a).concat(r),
        chartArea: Kt(t, "chartArea"),
        vertical: s.concat(n).concat(l),
        horizontal: o.concat(a).concat(r)
    }
}

function xs(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s])
}

function Yn(i, t) {
    i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right)
}

function $r(i, t, e, s) {
    const {pos: n, box: o} = e, a = i.maxPadding;
    if (!O(n)) {
        e.size && (i[n] -= e.size);
        const d = s[e.stack] || {size: 0, count: 1};
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size
    }
    o.getPadding && Yn(a, o.getPadding());
    const r = Math.max(0, t.outerWidth - xs(a, i, "left", "right")),
        l = Math.max(0, t.outerHeight - xs(a, i, "top", "bottom")), c = r !== i.w, h = l !== i.h;
    return i.w = r, i.h = l, e.horizontal ? {same: c, other: h} : {same: h, other: c}
}

function Yr(i) {
    const t = i.maxPadding;

    function e(s) {
        const n = Math.max(t[s] - i[s], 0);
        return i[s] += n, n
    }

    i.y += e("top"), i.x += e("left"), e("right"), e("bottom")
}

function Xr(i, t) {
    const e = t.maxPadding;

    function s(n) {
        const o = {left: 0, top: 0, right: 0, bottom: 0};
        return n.forEach(a => {
            o[a] = Math.max(t[a], e[a])
        }), o
    }

    return s(i ? ["left", "right"] : ["top", "bottom"])
}

function te(i, t, e, s) {
    const n = [];
    let o, a, r, l, c, h;
    for (o = 0, a = i.length, c = 0; o < a; ++o) {
        r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, Xr(r.horizontal, t));
        const {same: d, other: u} = $r(t, e, r, s);
        c |= d && n.length, h = h || u, l.fullSize || n.push(r)
    }
    return c && te(n, t, e, s) || h
}

function Se(i, t, e, s, n) {
    i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n
}

function _s(i, t, e, s) {
    const n = e.padding;
    let {x: o, y: a} = t;
    for (const r of i) {
        const l = r.box, c = s[r.stack] || {count: 1, placed: 0, weight: 1}, h = r.stackWeight / c.weight || 1;
        if (r.horizontal) {
            const d = t.w * h, u = c.size || l.height;
            le(c.start) && (a = c.start), l.fullSize ? Se(l, n.left, a, e.outerWidth - n.right - n.left, u) : Se(l, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l.bottom
        } else {
            const d = t.h * h, u = c.size || l.width;
            le(c.start) && (o = c.start), l.fullSize ? Se(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Se(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right
        }
    }
    t.x = o, t.y = a
}

var K = {
    addBox(i, t) {
        i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function () {
            return [{
                z: 0, draw(e) {
                    t.draw(e)
                }
            }]
        }, i.boxes.push(t)
    }, removeBox(i, t) {
        const e = i.boxes ? i.boxes.indexOf(t) : -1;
        e !== -1 && i.boxes.splice(e, 1)
    }, configure(i, t, e) {
        t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight
    }, update(i, t, e, s) {
        if (!i) return;
        const n = q(i.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0),
            r = jr(i.boxes), l = r.vertical, c = r.horizontal;
        T(i.boxes, p => {
            typeof p.beforeLayout == "function" && p.beforeLayout()
        });
        const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1,
            d = Object.freeze({
                outerWidth: t,
                outerHeight: e,
                padding: n,
                availableWidth: o,
                availableHeight: a,
                vBoxMaxWidth: o / 2 / h,
                hBoxMaxHeight: a / 2
            }), u = Object.assign({}, n);
        Yn(u, q(s));
        const f = Object.assign({maxPadding: u, w: o, h: a, x: n.left, y: n.top}, n), g = Hr(l.concat(c), d);
        te(r.fullSize, f, d, g), te(l, f, d, g), te(c, f, d, g) && te(l, f, d, g), Yr(f), _s(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, _s(r.rightAndBottom, f, d, g), i.chartArea = {
            left: f.left,
            top: f.top,
            right: f.left + f.w,
            bottom: f.top + f.h,
            height: f.h,
            width: f.w
        }, T(r.chartArea, p => {
            const m = p.box;
            Object.assign(m, i.chartArea), m.update(f.w, f.h, {left: 0, top: 0, right: 0, bottom: 0})
        })
    }
};

class Xn {
    acquireContext(t, e) {
    }

    releaseContext(t) {
        return !1
    }

    addEventListener(t, e, s) {
    }

    removeEventListener(t, e, s) {
    }

    getDevicePixelRatio() {
        return 1
    }

    getMaximumSize(t, e, s, n) {
        return e = Math.max(0, e || t.width), s = s || t.height, {
            width: e,
            height: Math.max(0, n ? Math.floor(e / n) : s)
        }
    }

    isAttached(t) {
        return !0
    }

    updateConfig(t) {
    }
}

class Ur extends Xn {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null
    }

    updateConfig(t) {
        t.options.animation = !1
    }
}

const Te = "$chartjs", Kr = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
}, ys = i => i === null || i === "";

function qr(i, t) {
    const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
    if (i[Te] = {
        initial: {
            height: s,
            width: n,
            style: {display: e.display, height: e.height, width: e.width}
        }
    }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", ys(n)) {
        const o = is(i, "width");
        o !== void 0 && (i.width = o)
    }
    if (ys(s)) if (i.style.height === "") i.height = i.width / (t || 2); else {
        const o = is(i, "height");
        o !== void 0 && (i.height = o)
    }
    return i
}

const Un = Ya ? {passive: !0} : !1;

function Gr(i, t, e) {
    i.addEventListener(t, e, Un)
}

function Zr(i, t, e) {
    i.canvas.removeEventListener(t, e, Un)
}

function Jr(i, t) {
    const e = Kr[i.type] || i.type, {x: s, y: n} = Dt(i, t);
    return {type: e, chart: t, native: i, x: s !== void 0 ? s : null, y: n !== void 0 ? n : null}
}

function We(i, t) {
    for (const e of i) if (e === t || e.contains(t)) return !0
}

function Qr(i, t, e) {
    const s = i.canvas, n = new MutationObserver(o => {
        let a = !1;
        for (const r of o) a = a || We(r.addedNodes, s), a = a && !We(r.removedNodes, s);
        a && e()
    });
    return n.observe(document, {childList: !0, subtree: !0}), n
}

function tl(i, t, e) {
    const s = i.canvas, n = new MutationObserver(o => {
        let a = !1;
        for (const r of o) a = a || We(r.removedNodes, s), a = a && !We(r.addedNodes, s);
        a && e()
    });
    return n.observe(document, {childList: !0, subtree: !0}), n
}

const de = new Map;
let vs = 0;

function Kn() {
    const i = window.devicePixelRatio;
    i !== vs && (vs = i, de.forEach((t, e) => {
        e.currentDevicePixelRatio !== i && t()
    }))
}

function el(i, t) {
    de.size || window.addEventListener("resize", Kn), de.set(i, t)
}

function il(i) {
    de.delete(i), de.size || window.removeEventListener("resize", Kn)
}

function sl(i, t, e) {
    const s = i.canvas, n = s && Ri(s);
    if (!n) return;
    const o = Mn((r, l) => {
        const c = n.clientWidth;
        e(r, l), c < n.clientWidth && e()
    }, window), a = new ResizeObserver(r => {
        const l = r[0], c = l.contentRect.width, h = l.contentRect.height;
        c === 0 && h === 0 || o(c, h)
    });
    return a.observe(n), el(i, o), a
}

function ni(i, t, e) {
    e && e.disconnect(), t === "resize" && il(i)
}

function nl(i, t, e) {
    const s = i.canvas, n = Mn(o => {
        i.ctx !== null && e(Jr(o, i))
    }, i);
    return Gr(s, t, n), n
}

class ol extends Xn {
    acquireContext(t, e) {
        const s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (qr(t, e), s) : null
    }

    releaseContext(t) {
        const e = t.canvas;
        if (!e[Te]) return !1;
        const s = e[Te].initial;
        ["height", "width"].forEach(o => {
            const a = s[o];
            L(a) ? e.removeAttribute(o) : e.setAttribute(o, a)
        });
        const n = s.style || {};
        return Object.keys(n).forEach(o => {
            e.style[o] = n[o]
        }), e.width = e.width, delete e[Te], !0
    }

    addEventListener(t, e, s) {
        this.removeEventListener(t, e);
        const n = t.$proxies || (t.$proxies = {}), a = {attach: Qr, detach: tl, resize: sl}[e] || nl;
        n[e] = a(t, e, s)
    }

    removeEventListener(t, e) {
        const s = t.$proxies || (t.$proxies = {}), n = s[e];
        if (!n) return;
        ({attach: ni, detach: ni, resize: ni}[e] || Zr)(t, e, n), s[e] = void 0
    }

    getDevicePixelRatio() {
        return window.devicePixelRatio
    }

    getMaximumSize(t, e, s, n) {
        return $a(t, e, s, n)
    }

    isAttached(t) {
        const e = Ri(t);
        return !!(e && e.isConnected)
    }
}

function al(i) {
    return !En() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Ur : ol
}

class gt {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = !1;
    options;
    $animations;

    tooltipPosition(t) {
        const {x: e, y: s} = this.getProps(["x", "y"], t);
        return {x: e, y: s}
    }

    hasValue() {
        return Wt(this.x) && Wt(this.y)
    }

    getProps(t, e) {
        const s = this.$animations;
        if (!e || !s) return this;
        const n = {};
        return t.forEach(o => {
            n[o] = s[o] && s[o].active() ? s[o]._to : this[o]
        }), n
    }
}

function rl(i, t) {
    const e = i.options.ticks, s = ll(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? hl(t) : [],
        a = o.length, r = o[0], l = o[a - 1], c = [];
    if (a > n) return dl(t, c, o, a / n), c;
    const h = cl(o, t, n);
    if (a > 0) {
        let d, u;
        const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
        for (we(t, c, h, L(f) ? 0 : r - f, r), d = 0, u = a - 1; d < u; d++) we(t, c, h, o[d], o[d + 1]);
        return we(t, c, h, l, L(f) ? t.length : l + f), c
    }
    return we(t, c, h), c
}

function ll(i) {
    const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
    return Math.floor(Math.min(s, n))
}

function cl(i, t, e) {
    const s = ul(i), n = t.length / e;
    if (!s) return Math.max(n, 1);
    const o = Ko(s);
    for (let a = 0, r = o.length - 1; a < r; a++) {
        const l = o[a];
        if (l > n) return l
    }
    return Math.max(n, 1)
}

function hl(i) {
    const t = [];
    let e, s;
    for (e = 0, s = i.length; e < s; e++) i[e].major && t.push(e);
    return t
}

function dl(i, t, e, s) {
    let n = 0, o = e[0], a;
    for (s = Math.ceil(s), a = 0; a < i.length; a++) a === o && (t.push(i[a]), n++, o = e[n * s])
}

function we(i, t, e, s, n) {
    const o = P(s, 0), a = Math.min(P(n, i.length), i.length);
    let r = 0, l, c, h;
    for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;) r++, h = Math.round(o + r * e);
    for (c = Math.max(o, 0); c < a; c++) c === h && (t.push(i[c]), r++, h = Math.round(o + r * e))
}

function ul(i) {
    const t = i.length;
    let e, s;
    if (t < 2) return !1;
    for (s = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== s) return !1;
    return s
}

const fl = i => i === "left" ? "right" : i === "right" ? "left" : i,
    Ms = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, ks = (i, t) => Math.min(t || i, i);

function Ss(i, t) {
    const e = [], s = i.length / t, n = i.length;
    let o = 0;
    for (; o < n; o += s) e.push(i[Math.floor(o)]);
    return e
}

function gl(i, t, e) {
    const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, a = i._endPixel, r = 1e-6;
    let l = i.getPixelForTick(n), c;
    if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r))) return l
}

function pl(i, t) {
    T(i, e => {
        const s = e.gc, n = s.length / 2;
        let o;
        if (n > t) {
            for (o = 0; o < n; ++o) delete e.data[s[o]];
            s.splice(0, n)
        }
    })
}

function Gt(i) {
    return i.drawTicks ? i.tickLength : 0
}

function ws(i, t) {
    if (!i.display) return 0;
    const e = j(i.font, t), s = q(i.padding);
    return (F(i.text) ? i.text.length : 1) * e.lineHeight + s.height
}

function ml(i, t) {
    return Mt(i, {scale: t, type: "scale"})
}

function bl(i, t, e) {
    return Mt(i, {tick: e, index: t, type: "tick"})
}

function xl(i, t, e) {
    let s = Ci(i);
    return (e && t !== "right" || !e && t === "right") && (s = fl(s)), s
}

function _l(i, t, e, s) {
    const {top: n, left: o, bottom: a, right: r, chart: l} = i, {chartArea: c, scales: h} = l;
    let d = 0, u, f, g;
    const p = a - n, m = r - o;
    if (i.isHorizontal()) {
        if (f = U(s, o, r), O(e)) {
            const b = Object.keys(e)[0], x = e[b];
            g = h[b].getPixelForValue(x) + p - t
        } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Ms(i, e, t);
        u = r - o
    } else {
        if (O(e)) {
            const b = Object.keys(e)[0], x = e[b];
            f = h[b].getPixelForValue(x) - m + t
        } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Ms(i, e, t);
        g = U(s, a, n), d = e === "left" ? -H : H
    }
    return {titleX: f, titleY: g, maxWidth: u, rotation: d}
}

class Et extends gt {
    constructor(t) {
        super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
    }

    init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
    }

    parse(t, e) {
        return t
    }

    getUserBounds() {
        let {_userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n} = this;
        return t = Q(t, Number.POSITIVE_INFINITY), e = Q(e, Number.NEGATIVE_INFINITY), s = Q(s, Number.POSITIVE_INFINITY), n = Q(n, Number.NEGATIVE_INFINITY), {
            min: Q(t, s),
            max: Q(e, n),
            minDefined: V(t),
            maxDefined: V(e)
        }
    }

    getMinMax(t) {
        let {min: e, max: s, minDefined: n, maxDefined: o} = this.getUserBounds(), a;
        if (n && o) return {min: e, max: s};
        const r = this.getMatchingVisibleMetas();
        for (let l = 0, c = r.length; l < c; ++l) a = r[l].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
        return e = o && e > s ? s : e, s = n && e > s ? e : s, {min: Q(e, Q(s, e)), max: Q(s, Q(e, s))}
    }

    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        }
    }

    getTicks() {
        return this.ticks
    }

    getLabels() {
        const t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
    }

    getLabelItems(t = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t))
    }

    beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1
    }

    beforeUpdate() {
        E(this.options.beforeUpdate, [this])
    }

    update(t, e, s) {
        const {beginAtZero: n, grace: o, ticks: a} = this.options, r = a.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ma(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        const l = r < this.ticks.length;
        this._convertTicksToLabels(l ? Ss(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = rl(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
    }

    configure() {
        let t = this.options.reverse, e, s;
        this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels
    }

    afterUpdate() {
        E(this.options.afterUpdate, [this])
    }

    beforeSetDimensions() {
        E(this.options.beforeSetDimensions, [this])
    }

    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
    }

    afterSetDimensions() {
        E(this.options.afterSetDimensions, [this])
    }

    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), E(this.options[t], [this])
    }

    beforeDataLimits() {
        this._callHooks("beforeDataLimits")
    }

    determineDataLimits() {
    }

    afterDataLimits() {
        this._callHooks("afterDataLimits")
    }

    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks")
    }

    buildTicks() {
        return []
    }

    afterBuildTicks() {
        this._callHooks("afterBuildTicks")
    }

    beforeTickToLabelConversion() {
        E(this.options.beforeTickToLabelConversion, [this])
    }

    generateTickLabels(t) {
        const e = this.options.ticks;
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++) o = t[s], o.label = E(e.callback, [o.value, s, t], this)
    }

    afterTickToLabelConversion() {
        E(this.options.afterTickToLabelConversion, [this])
    }

    beforeCalculateLabelRotation() {
        E(this.options.beforeCalculateLabelRotation, [this])
    }

    calculateLabelRotation() {
        const t = this.options, e = t.ticks, s = ks(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0,
            o = e.maxRotation;
        let a = n, r, l, c;
        if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return
        }
        const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height,
            f = $(this.chart.width - d, 0, this.maxWidth);
        r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? .5 : 1)), l = this.maxHeight - Gt(t.grid) - e.padding - ws(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = wi(Math.min(Math.asin($((h.highest.height + 6) / r, -1, 1)), Math.asin($(l / c, -1, 1)) - Math.asin($(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a
    }

    afterCalculateLabelRotation() {
        E(this.options.afterCalculateLabelRotation, [this])
    }

    afterAutoSkip() {
    }

    beforeFit() {
        E(this.options.beforeFit, [this])
    }

    fit() {
        const t = {width: 0, height: 0}, {chart: e, options: {ticks: s, title: n, grid: o}} = this,
            a = this._isVisible(), r = this.isHorizontal();
        if (a) {
            const l = ws(n, e.options.font);
            if (r ? (t.width = this.maxWidth, t.height = Gt(o) + l) : (t.height = this.maxHeight, t.width = Gt(o) + l), s.display && this.ticks.length) {
                const {first: c, last: h, widest: d, highest: u} = this._getLabelSizes(), f = s.padding * 2,
                    g = st(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
                if (r) {
                    const b = s.mirror ? 0 : m * d.width + p * u.height;
                    t.height = Math.min(this.maxHeight, t.height + b + f)
                } else {
                    const b = s.mirror ? 0 : p * d.width + m * u.height;
                    t.width = Math.min(this.maxWidth, t.width + b + f)
                }
                this._calculatePadding(c, h, m, p)
            }
        }
        this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
    }

    _calculatePadding(t, e, s, n) {
        const {ticks: {align: o, padding: a}, position: r} = this.options, l = this.labelRotation !== 0,
            c = r !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let u = 0, f = 0;
            l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0)
        } else {
            let h = e.height / 2, d = t.height / 2;
            o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + a, this.paddingBottom = d + a
        }
    }

    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
    }

    afterFit() {
        E(this.options.afterFit, [this])
    }

    isHorizontal() {
        const {axis: t, position: e} = this.options;
        return e === "top" || e === "bottom" || t === "x"
    }

    isFullSize() {
        return this.options.fullSize
    }

    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, s;
        for (e = 0, s = t.length; e < s; e++) L(t[e].label) && (t.splice(e, 1), s--, e--);
        this.afterTickToLabelConversion()
    }

    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const e = this.options.ticks.sampleSize;
            let s = this.ticks;
            e < s.length && (s = Ss(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit)
        }
        return t
    }

    _computeLabelSizes(t, e, s) {
        const {ctx: n, _longestTextCache: o} = this, a = [], r = [], l = Math.floor(e / ks(e, s));
        let c = 0, h = 0, d, u, f, g, p, m, b, x, v, y, _;
        for (d = 0; d < e; d += l) {
            if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = m = p.string, b = o[m] = o[m] || {
                data: {},
                gc: []
            }, x = p.lineHeight, v = y = 0, !L(g) && !F(g)) v = Be(n, b.data, b.gc, v, g), y = x; else if (F(g)) for (u = 0, f = g.length; u < f; ++u) _ = g[u], !L(_) && !F(_) && (v = Be(n, b.data, b.gc, v, _), y += x);
            a.push(v), r.push(y), c = Math.max(v, c), h = Math.max(y, h)
        }
        pl(o, e);
        const M = a.indexOf(c), k = r.indexOf(h), S = w => ({width: a[w] || 0, height: r[w] || 0});
        return {first: S(0), last: S(e - 1), widest: S(M), highest: S(k), widths: a, heights: r}
    }

    getLabelForValue(t) {
        return t
    }

    getPixelForValue(t, e) {
        return NaN
    }

    getValueForPixel(t) {
    }

    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }

    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return Zo(this._alignToPixels ? wt(this.chart, e, 0) : e)
    }

    getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e
    }

    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue())
    }

    getBaseValue() {
        const {min: t, max: e} = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
    }

    getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return s.$context || (s.$context = bl(this.getContext(), t, s))
        }
        return this.$context || (this.$context = ml(this.chart.getContext(), this))
    }

    _tickSize() {
        const t = this.options.ticks, e = st(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)),
            o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0,
            l = o ? o.highest.height + a : 0;
        return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n
    }

    _isVisible() {
        const t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
    }

    _computeGridLineItems(t) {
        const e = this.axis, s = this.chart, n = this.options, {grid: o, position: a, border: r} = n, l = o.offset,
            c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Gt(o), f = [],
            g = r.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function (B) {
                return wt(s, B, p)
            };
        let x, v, y, _, M, k, S, w, C, D, A, Y;
        if (a === "top") x = b(this.bottom), k = this.bottom - u, w = x - m, D = b(t.top) + m, Y = t.bottom; else if (a === "bottom") x = b(this.top), D = t.top, Y = b(t.bottom) - m, k = x + m, w = this.top + u; else if (a === "left") x = b(this.right), M = this.right - u, S = x - m, C = b(t.left) + m, A = t.right; else if (a === "right") x = b(this.left), C = t.left, A = b(t.right) - m, M = x + m, S = this.left + u; else if (e === "x") {
            if (a === "center") x = b((t.top + t.bottom) / 2 + .5); else if (O(a)) {
                const B = Object.keys(a)[0], N = a[B];
                x = b(this.chart.scales[B].getPixelForValue(N))
            }
            D = t.top, Y = t.bottom, k = x + m, w = k + u
        } else if (e === "y") {
            if (a === "center") x = b((t.left + t.right) / 2); else if (O(a)) {
                const B = Object.keys(a)[0], N = a[B];
                x = b(this.chart.scales[B].getPixelForValue(N))
            }
            M = x - m, S = M - u, C = t.left, A = t.right
        }
        const J = P(n.ticks.maxTicksLimit, d), R = Math.max(1, Math.ceil(d / J));
        for (v = 0; v < d; v += R) {
            const B = this.getContext(v), N = o.setContext(B), it = r.setContext(B), X = N.lineWidth, Ft = N.color,
                be = it.dash || [], It = it.dashOffset, jt = N.tickWidth, $t = N.tickColor, Yt = N.tickBorderDash || [],
                Xt = N.tickBorderDashOffset;
            y = gl(this, v, l), y !== void 0 && (_ = wt(s, y, X), c ? M = S = C = A = _ : k = w = D = Y = _, f.push({
                tx1: M,
                ty1: k,
                tx2: S,
                ty2: w,
                x1: C,
                y1: D,
                x2: A,
                y2: Y,
                width: X,
                color: Ft,
                borderDash: be,
                borderDashOffset: It,
                tickWidth: jt,
                tickColor: $t,
                tickBorderDash: Yt,
                tickBorderDashOffset: Xt
            }))
        }
        return this._ticksLength = d, this._borderValue = x, f
    }

    _computeLabelItems(t) {
        const e = this.axis, s = this.options, {position: n, ticks: o} = s, a = this.isHorizontal(),
            r = this.ticks, {align: l, crossAlign: c, padding: h, mirror: d} = o, u = Gt(s.grid), f = u + h,
            g = d ? -h : f, p = -st(this.labelRotation), m = [];
        let b, x, v, y, _, M, k, S, w, C, D, A, Y = "middle";
        if (n === "top") M = this.bottom - g, k = this._getXAxisLabelAlignment(); else if (n === "bottom") M = this.top + g, k = this._getXAxisLabelAlignment(); else if (n === "left") {
            const R = this._getYAxisLabelAlignment(u);
            k = R.textAlign, _ = R.x
        } else if (n === "right") {
            const R = this._getYAxisLabelAlignment(u);
            k = R.textAlign, _ = R.x
        } else if (e === "x") {
            if (n === "center") M = (t.top + t.bottom) / 2 + f; else if (O(n)) {
                const R = Object.keys(n)[0], B = n[R];
                M = this.chart.scales[R].getPixelForValue(B) + f
            }
            k = this._getXAxisLabelAlignment()
        } else if (e === "y") {
            if (n === "center") _ = (t.left + t.right) / 2 - f; else if (O(n)) {
                const R = Object.keys(n)[0], B = n[R];
                _ = this.chart.scales[R].getPixelForValue(B)
            }
            k = this._getYAxisLabelAlignment(u).textAlign
        }
        e === "y" && (l === "start" ? Y = "top" : l === "end" && (Y = "bottom"));
        const J = this._getLabelSizes();
        for (b = 0, x = r.length; b < x; ++b) {
            v = r[b], y = v.label;
            const R = o.setContext(this.getContext(b));
            S = this.getPixelForTick(b) + o.labelOffset, w = this._resolveTickFontOptions(b), C = w.lineHeight, D = F(y) ? y.length : 1;
            const B = D / 2, N = R.color, it = R.textStrokeColor, X = R.textStrokeWidth;
            let Ft = k;
            a ? (_ = S, k === "inner" && (b === x - 1 ? Ft = this.options.reverse ? "left" : "right" : b === 0 ? Ft = this.options.reverse ? "right" : "left" : Ft = "center"), n === "top" ? c === "near" || p !== 0 ? A = -D * C + C / 2 : c === "center" ? A = -J.highest.height / 2 - B * C + C : A = -J.highest.height + C / 2 : c === "near" || p !== 0 ? A = C / 2 : c === "center" ? A = J.highest.height / 2 - B * C : A = J.highest.height - D * C, d && (A *= -1), p !== 0 && !R.showLabelBackdrop && (_ += C / 2 * Math.sin(p))) : (M = S, A = (1 - D) * C / 2);
            let be;
            if (R.showLabelBackdrop) {
                const It = q(R.backdropPadding), jt = J.heights[b], $t = J.widths[b];
                let Yt = A - It.top, Xt = 0 - It.left;
                switch (Y) {
                    case"middle":
                        Yt -= jt / 2;
                        break;
                    case"bottom":
                        Yt -= jt;
                        break
                }
                switch (k) {
                    case"center":
                        Xt -= $t / 2;
                        break;
                    case"right":
                        Xt -= $t;
                        break
                }
                be = {left: Xt, top: Yt, width: $t + It.width, height: jt + It.height, color: R.backdropColor}
            }
            m.push({
                label: y,
                font: w,
                textOffset: A,
                options: {
                    rotation: p,
                    color: N,
                    strokeColor: it,
                    strokeWidth: X,
                    textAlign: Ft,
                    textBaseline: Y,
                    translation: [_, M],
                    backdrop: be
                }
            })
        }
        return m
    }

    _getXAxisLabelAlignment() {
        const {position: t, ticks: e} = this.options;
        if (-st(this.labelRotation)) return t === "top" ? "left" : "right";
        let n = "center";
        return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n
    }

    _getYAxisLabelAlignment(t) {
        const {position: e, ticks: {crossAlign: s, mirror: n, padding: o}} = this.options, a = this._getLabelSizes(),
            r = t + o, l = a.widest.width;
        let c, h;
        return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
            textAlign: c,
            x: h
        }
    }

    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart, e = this.options.position;
        if (e === "left" || e === "right") return {top: 0, left: this.left, bottom: t.height, right: this.right};
        if (e === "top" || e === "bottom") return {top: this.top, left: 0, bottom: this.bottom, right: t.width}
    }

    drawBackground() {
        const {ctx: t, options: {backgroundColor: e}, left: s, top: n, width: o, height: a} = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore())
    }

    getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const n = this.ticks.findIndex(o => o.value === t);
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
    }

    drawGrid(t) {
        const e = this.options.grid, s = this.ctx,
            n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let o, a;
        const r = (l, c, h) => {
            !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore())
        };
        if (e.display) for (o = 0, a = n.length; o < a; ++o) {
            const l = n[o];
            e.drawOnChartArea && r({x: l.x1, y: l.y1}, {x: l.x2, y: l.y2}, l), e.drawTicks && r({
                x: l.tx1,
                y: l.ty1
            }, {x: l.tx2, y: l.ty2}, {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset
            })
        }
    }

    drawBorder() {
        const {chart: t, ctx: e, options: {border: s, grid: n}} = this, o = s.setContext(this.getContext()),
            a = s.display ? o.width : 0;
        if (!a) return;
        const r = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
        let c, h, d, u;
        this.isHorizontal() ? (c = wt(t, this.left, a) - a / 2, h = wt(t, this.right, r) + r / 2, d = u = l) : (d = wt(t, this.top, a) - a / 2, u = wt(t, this.bottom, r) + r / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore()
    }

    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const s = this.ctx, n = this._computeLabelArea();
        n && Ye(s, n);
        const o = this.getLabelItems(t);
        for (const a of o) {
            const r = a.options, l = a.font, c = a.label, h = a.textOffset;
            Rt(s, c, 0, h, l, r)
        }
        n && Xe(s)
    }

    drawTitle() {
        const {ctx: t, options: {position: e, title: s, reverse: n}} = this;
        if (!s.display) return;
        const o = j(s.font), a = q(s.padding), r = s.align;
        let l = o.lineHeight / 2;
        e === "bottom" || e === "center" || O(e) ? (l += a.bottom, F(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
        const {titleX: c, titleY: h, maxWidth: d, rotation: u} = _l(this, l, e, r);
        Rt(t, s.text, 0, 0, o, {
            color: s.color,
            maxWidth: d,
            rotation: u,
            textAlign: xl(r, e, n),
            textBaseline: "middle",
            translation: [c, h]
        })
    }

    draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
    }

    _layers() {
        const t = this.options, e = t.ticks && t.ticks.z || 0, s = P(t.grid && t.grid.z, -1),
            n = P(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== Et.prototype.draw ? [{
            z: e, draw: o => {
                this.draw(o)
            }
        }] : [{
            z: s, draw: o => {
                this.drawBackground(), this.drawGrid(o), this.drawTitle()
            }
        }, {
            z: n, draw: () => {
                this.drawBorder()
            }
        }, {
            z: e, draw: o => {
                this.drawLabels(o)
            }
        }]
    }

    getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
        let o, a;
        for (o = 0, a = e.length; o < a; ++o) {
            const r = e[o];
            r[s] === this.id && (!t || r.type === t) && n.push(r)
        }
        return n
    }

    _resolveTickFontOptions(t) {
        const e = this.options.ticks.setContext(this.getContext(t));
        return j(e.font)
    }

    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t
    }
}

class Pe {
    constructor(t, e, s) {
        this.type = t, this.scope = e, this.override = s, this.items = Object.create(null)
    }

    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
    }

    register(t) {
        const e = Object.getPrototypeOf(t);
        let s;
        Ml(e) && (s = this.register(e));
        const n = this.items, o = t.id, a = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in n || (n[o] = t, yl(t, a, s), this.override && W.override(t.id, t.overrides)), a
    }

    get(t) {
        return this.items[t]
    }

    unregister(t) {
        const e = this.items, s = t.id, n = this.scope;
        s in e && delete e[s], n && s in W[n] && (delete W[n][s], this.override && delete Tt[s])
    }
}

function yl(i, t, e) {
    const s = re(Object.create(null), [e ? W.get(e) : {}, W.get(t), i.defaults]);
    W.set(t, s), i.defaultRoutes && vl(t, i.defaultRoutes), i.descriptors && W.describe(t, i.descriptors)
}

function vl(i, t) {
    Object.keys(t).forEach(e => {
        const s = e.split("."), n = s.pop(), o = [i].concat(s).join("."), a = t[e].split("."), r = a.pop(),
            l = a.join(".");
        W.route(o, n, l, r)
    })
}

function Ml(i) {
    return "id" in i && "defaults" in i
}

class kl {
    constructor() {
        this.controllers = new Pe(kt, "datasets", !0), this.elements = new Pe(gt, "elements"), this.plugins = new Pe(Object, "plugins"), this.scales = new Pe(Et, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
    }

    add(...t) {
        this._each("register", t)
    }

    remove(...t) {
        this._each("unregister", t)
    }

    addControllers(...t) {
        this._each("register", t, this.controllers)
    }

    addElements(...t) {
        this._each("register", t, this.elements)
    }

    addPlugins(...t) {
        this._each("register", t, this.plugins)
    }

    addScales(...t) {
        this._each("register", t, this.scales)
    }

    getController(t) {
        return this._get(t, this.controllers, "controller")
    }

    getElement(t) {
        return this._get(t, this.elements, "element")
    }

    getPlugin(t) {
        return this._get(t, this.plugins, "plugin")
    }

    getScale(t) {
        return this._get(t, this.scales, "scale")
    }

    removeControllers(...t) {
        this._each("unregister", t, this.controllers)
    }

    removeElements(...t) {
        this._each("unregister", t, this.elements)
    }

    removePlugins(...t) {
        this._each("unregister", t, this.plugins)
    }

    removeScales(...t) {
        this._each("unregister", t, this.scales)
    }

    _each(t, e, s) {
        [...e].forEach(n => {
            const o = s || this._getRegistryForType(n);
            s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : T(n, a => {
                const r = s || this._getRegistryForType(a);
                this._exec(t, r, a)
            })
        })
    }

    _exec(t, e, s) {
        const n = Si(t);
        E(s["before" + n], [], s), e[t](s), E(s["after" + n], [], s)
    }

    _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
            const s = this._typedRegistries[e];
            if (s.isForType(t)) return s
        }
        return this.plugins
    }

    _get(t, e, s) {
        const n = e.get(t);
        if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
        return n
    }
}

var ot = new kl;

class Sl {
    constructor() {
        this._init = []
    }

    notify(t, e, s, n) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), a = this._notify(o, t, e, s);
        return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a
    }

    _notify(t, e, s, n) {
        n = n || {};
        for (const o of t) {
            const a = o.plugin, r = a[s], l = [e, n, o.options];
            if (E(r, l, a) === !1 && n.cancelable) return !1
        }
        return !0
    }

    invalidate() {
        L(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
    }

    _descriptors(t) {
        if (this._cache) return this._cache;
        const e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e
    }

    _createDescriptors(t, e) {
        const s = t && t.config, n = P(s.options && s.options.plugins, {}), o = wl(s);
        return n === !1 && !e ? [] : Cl(t, o, n, e)
    }

    _notifyStateChanges(t) {
        const e = this._oldCache || [], s = this._cache,
            n = (o, a) => o.filter(r => !a.some(l => r.plugin.id === l.plugin.id));
        this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start")
    }
}

function wl(i) {
    const t = {}, e = [], s = Object.keys(ot.plugins.items);
    for (let o = 0; o < s.length; o++) e.push(ot.getPlugin(s[o]));
    const n = i.plugins || [];
    for (let o = 0; o < n.length; o++) {
        const a = n[o];
        e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0)
    }
    return {plugins: e, localIds: t}
}

function Pl(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i
}

function Cl(i, {plugins: t, localIds: e}, s, n) {
    const o = [], a = i.getContext();
    for (const r of t) {
        const l = r.id, c = Pl(s[l], n);
        c !== null && o.push({plugin: r, options: Dl(i.config, {plugin: r, local: e[l]}, c, a)})
    }
    return o
}

function Dl(i, {plugin: t, local: e}, s, n) {
    const o = i.pluginScopeKeys(t), a = i.getOptionScopes(s, o);
    return e && t.defaults && a.push(t.defaults), i.createResolver(a, n, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}

function gi(i, t) {
    const e = W.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
}

function Ol(i, t) {
    let e = i;
    return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e
}

function Al(i, t) {
    return i === t ? "_index_" : "_value_"
}

function Ps(i) {
    if (i === "x" || i === "y" || i === "r") return i
}

function Ll(i) {
    if (i === "top" || i === "bottom") return "x";
    if (i === "left" || i === "right") return "y"
}

function pi(i, ...t) {
    if (Ps(i)) return i;
    for (const e of t) {
        const s = e.axis || Ll(e.position) || i.length > 1 && Ps(i[0].toLowerCase());
        if (s) return s
    }
    throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)
}

function Cs(i, t, e) {
    if (e[t + "AxisID"] === i) return {axis: t}
}

function Tl(i, t) {
    if (t.data && t.data.datasets) {
        const e = t.data.datasets.filter(s => s.xAxisID === i || s.yAxisID === i);
        if (e.length) return Cs(i, "x", e[0]) || Cs(i, "y", e[0])
    }
    return {}
}

function Rl(i, t) {
    const e = Tt[i.type] || {scales: {}}, s = t.scales || {}, n = gi(i.type, t), o = Object.create(null);
    return Object.keys(s).forEach(a => {
        const r = s[a];
        if (!O(r)) return console.error(`Invalid scale configuration for scale: ${a}`);
        if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
        const l = pi(a, r, Tl(a, i), W.scales[r.type]), c = Al(l, n), h = e.scales || {};
        o[a] = ie(Object.create(null), [{axis: l}, r, h[l], h[c]])
    }), i.data.datasets.forEach(a => {
        const r = a.type || i.type, l = a.indexAxis || gi(r, t), h = (Tt[r] || {}).scales || {};
        Object.keys(h).forEach(d => {
            const u = Ol(d, l), f = a[u + "AxisID"] || u;
            o[f] = o[f] || Object.create(null), ie(o[f], [{axis: u}, s[f], h[d]])
        })
    }), Object.keys(o).forEach(a => {
        const r = o[a];
        ie(r, [W.scales[r.type], W.scale])
    }), o
}

function qn(i) {
    const t = i.options || (i.options = {});
    t.plugins = P(t.plugins, {}), t.scales = Rl(i, t)
}

function Gn(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i
}

function El(i) {
    return i = i || {}, i.data = Gn(i.data), qn(i), i
}

const Ds = new Map, Zn = new Set;

function Ce(i, t) {
    let e = Ds.get(i);
    return e || (e = t(), Ds.set(i, e), Zn.add(e)), e
}

const Zt = (i, t, e) => {
    const s = yt(t, e);
    s !== void 0 && i.add(s)
};

class Fl {
    constructor(t) {
        this._config = El(t), this._scopeCache = new Map, this._resolverCache = new Map
    }

    get platform() {
        return this._config.platform
    }

    get type() {
        return this._config.type
    }

    set type(t) {
        this._config.type = t
    }

    get data() {
        return this._config.data
    }

    set data(t) {
        this._config.data = Gn(t)
    }

    get options() {
        return this._config.options
    }

    set options(t) {
        this._config.options = t
    }

    get plugins() {
        return this._config.plugins
    }

    update() {
        const t = this._config;
        this.clearCache(), qn(t)
    }

    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear()
    }

    datasetScopeKeys(t) {
        return Ce(t, () => [[`datasets.${t}`, ""]])
    }

    datasetAnimationScopeKeys(t, e) {
        return Ce(`${t}.transition.${e}`, () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]])
    }

    datasetElementScopeKeys(t, e) {
        return Ce(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]])
    }

    pluginScopeKeys(t) {
        const e = t.id, s = this.type;
        return Ce(`${s}-plugin-${e}`, () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]])
    }

    _cachedScopes(t, e) {
        const s = this._scopeCache;
        let n = s.get(t);
        return (!n || e) && (n = new Map, s.set(t, n)), n
    }

    getOptionScopes(t, e, s) {
        const {options: n, type: o} = this, a = this._cachedScopes(t, s), r = a.get(e);
        if (r) return r;
        const l = new Set;
        e.forEach(h => {
            t && (l.add(t), h.forEach(d => Zt(l, t, d))), h.forEach(d => Zt(l, n, d)), h.forEach(d => Zt(l, Tt[o] || {}, d)), h.forEach(d => Zt(l, W, d)), h.forEach(d => Zt(l, ui, d))
        });
        const c = Array.from(l);
        return c.length === 0 && c.push(Object.create(null)), Zn.has(e) && a.set(e, c), c
    }

    chartOptionScopes() {
        const {options: t, type: e} = this;
        return [t, Tt[e] || {}, W.datasets[e] || {}, {type: e}, W, ui]
    }

    resolveNamedOptions(t, e, s, n = [""]) {
        const o = {$shared: !0}, {resolver: a, subPrefixes: r} = Os(this._resolverCache, t, n);
        let l = a;
        if (zl(a, e)) {
            o.$shared = !1, s = vt(s) ? s() : s;
            const c = this.createResolver(t, s, r);
            l = Nt(a, s, c)
        }
        for (const c of e) o[c] = l[c];
        return o
    }

    createResolver(t, e, s = [""], n) {
        const {resolver: o} = Os(this._resolverCache, t, s);
        return O(e) ? Nt(o, e, void 0, n) : o
    }
}

function Os(i, t, e) {
    let s = i.get(t);
    s || (s = new Map, i.set(t, s));
    const n = e.join();
    let o = s.get(n);
    return o || (o = {
        resolver: Ai(t, e),
        subPrefixes: e.filter(r => !r.toLowerCase().includes("hover"))
    }, s.set(n, o)), o
}

const Il = i => O(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || vt(i[e]), !1);

function zl(i, t) {
    const {isScriptable: e, isIndexable: s} = Dn(i);
    for (const n of t) {
        const o = e(n), a = s(n), r = (a || o) && i[n];
        if (o && (vt(r) || Il(r)) || a && F(r)) return !0
    }
    return !1
}

var Bl = "4.4.0";
const Vl = ["top", "bottom", "left", "right", "chartArea"];

function As(i, t) {
    return i === "top" || i === "bottom" || Vl.indexOf(i) === -1 && t === "x"
}

function Ls(i, t) {
    return function (e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i]
    }
}

function Ts(i) {
    const t = i.chart, e = t.options.animation;
    t.notifyPlugins("afterRender"), E(e && e.onComplete, [i], t)
}

function Wl(i) {
    const t = i.chart, e = t.options.animation;
    E(e && e.onProgress, [i], t)
}

function Jn(i) {
    return En() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i
}

const Re = {}, Rs = i => {
    const t = Jn(i);
    return Object.values(Re).filter(e => e.canvas === t).pop()
};

function Nl(i, t, e) {
    const s = Object.keys(i);
    for (const n of s) {
        const o = +n;
        if (o >= t) {
            const a = i[n];
            delete i[n], (e > 0 || o > t) && (i[o + e] = a)
        }
    }
}

function Hl(i, t, e, s) {
    return !e || i.type === "mouseout" ? null : s ? t : i
}

function De(i, t, e) {
    return i.options.clip ? i[e] : t[e]
}

function jl(i, t) {
    const {xScale: e, yScale: s} = i;
    return e && s ? {
        left: De(e, t, "left"),
        right: De(e, t, "right"),
        top: De(s, t, "top"),
        bottom: De(s, t, "bottom")
    } : t
}

class me {
    static defaults = W;
    static instances = Re;
    static overrides = Tt;
    static registry = ot;
    static version = Bl;
    static getChart = Rs;

    static register(...t) {
        ot.add(...t), Es()
    }

    static unregister(...t) {
        ot.remove(...t), Es()
    }

    constructor(t, e) {
        const s = this.config = new Fl(e), n = Jn(t), o = Rs(n);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
        const a = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new (s.platform || al(n)), this.platform.updateConfig(s);
        const r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, c = l && l.height,
            h = l && l.width;
        if (this.id = Vo(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Sl, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ea(d => this.update(d), a.resizeDelay || 0), this._dataChanges = [], Re[this.id] = this, !r || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        lt.listen(this, "complete", Ts), lt.listen(this, "progress", Wl), this._initialize(), this.attached && this.update()
    }

    get aspectRatio() {
        const {options: {aspectRatio: t, maintainAspectRatio: e}, width: s, height: n, _aspectRatio: o} = this;
        return L(t) ? e && o ? o : n ? s / n : null : t
    }

    get data() {
        return this.config.data
    }

    set data(t) {
        this.config.data = t
    }

    get options() {
        return this._options
    }

    set options(t) {
        this.config.options = t
    }

    get registry() {
        return ot
    }

    _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : es(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
    }

    clear() {
        return Ji(this.canvas, this.ctx), this
    }

    stop() {
        return lt.stop(this), this
    }

    resize(t, e) {
        lt.running(this) ? this._resizeBeforeDraw = {width: t, height: e} : this._resize(t, e)
    }

    _resize(t, e) {
        const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio,
            a = this.platform.getMaximumSize(n, t, e, o), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
            l = this.width ? "resize" : "attach";
        this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, es(this, r, !0) && (this.notifyPlugins("resize", {size: a}), E(s.onResize, [this, a], this), this.attached && this._doResize(l) && this.render())
    }

    ensureScalesHaveIDs() {
        const e = this.options.scales || {};
        T(e, (s, n) => {
            s.id = n
        })
    }

    buildOrUpdateScales() {
        const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((a, r) => (a[r] = !1, a), {});
        let o = [];
        e && (o = o.concat(Object.keys(e).map(a => {
            const r = e[a], l = pi(a, r), c = l === "r", h = l === "x";
            return {
                options: r,
                dposition: c ? "chartArea" : h ? "bottom" : "left",
                dtype: c ? "radialLinear" : h ? "category" : "linear"
            }
        }))), T(o, a => {
            const r = a.options, l = r.id, c = pi(l, r), h = P(r.type, a.dtype);
            (r.position === void 0 || As(r.position, c) !== As(a.dposition)) && (r.position = a.dposition), n[l] = !0;
            let d = null;
            if (l in s && s[l].type === h) d = s[l]; else {
                const u = ot.getScale(h);
                d = new u({id: l, type: h, ctx: this.ctx, chart: this}), s[d.id] = d
            }
            d.init(r, t)
        }), T(n, (a, r) => {
            a || delete s[r]
        }), T(s, a => {
            K.configure(this, a, a.options), K.addBox(this, a)
        })
    }

    _updateMetasets() {
        const t = this._metasets, e = this.data.datasets.length, s = t.length;
        if (t.sort((n, o) => n.index - o.index), s > e) {
            for (let n = e; n < s; ++n) this._destroyDatasetMeta(n);
            t.splice(e, s - e)
        }
        this._sortedMetasets = t.slice(0).sort(Ls("order", "index"))
    }

    _removeUnreferencedMetasets() {
        const {_metasets: t, data: {datasets: e}} = this;
        t.length > e.length && delete this._stacks, t.forEach((s, n) => {
            e.filter(o => o === s._dataset).length === 0 && this._destroyDatasetMeta(n)
        })
    }

    buildOrUpdateControllers() {
        const t = [], e = this.data.datasets;
        let s, n;
        for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
            const o = e[s];
            let a = this.getDatasetMeta(s);
            const r = o.type || this.config.type;
            if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || gi(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller) a.controller.updateIndex(s), a.controller.linkScales(); else {
                const l = ot.getController(r), {datasetElementType: c, dataElementType: h} = W.datasets[r];
                Object.assign(l, {
                    dataElementType: ot.getElement(h),
                    datasetElementType: c && ot.getElement(c)
                }), a.controller = new l(this, s), t.push(a.controller)
            }
        }
        return this._updateMetasets(), t
    }

    _resetElements() {
        T(this.data.datasets, (t, e) => {
            this.getDatasetMeta(e).controller.reset()
        }, this)
    }

    reset() {
        this._resetElements(), this.notifyPlugins("reset")
    }

    update(t) {
        const e = this.config;
        e.update();
        const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
            n = this._animationsDisabled = !s.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
            mode: t,
            cancelable: !0
        }) === !1) return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let a = 0;
        for (let c = 0, h = this.data.datasets.length; c < h; c++) {
            const {controller: d} = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
            d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a)
        }
        a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || T(o, c => {
            c.reset()
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {mode: t}), this._layers.sort(Ls("z", "_idx"));
        const {_active: r, _lastEvent: l} = this;
        l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render()
    }

    _updateScales() {
        T(this.scales, t => {
            K.removeBox(this, t)
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
    }

    _checkEventBindings() {
        const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
        (!ji(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
    }

    _updateHiddenIndices() {
        const {_hiddenIndices: t} = this, e = this._getUniformDataChanges() || [];
        for (const {method: s, start: n, count: o} of e) {
            const a = s === "_removeElements" ? -o : o;
            Nl(t, n, a)
        }
    }

    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
            s = o => new Set(t.filter(a => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), n = s(0);
        for (let o = 1; o < e; o++) if (!ji(n, s(o))) return;
        return Array.from(n).map(o => o.split(",")).map(o => ({method: o[1], start: +o[2], count: +o[3]}))
    }

    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {cancelable: !0}) === !1) return;
        K.update(this, this.width, this.height, t);
        const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
        this._layers = [], T(this.boxes, n => {
            s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()))
        }, this), this._layers.forEach((n, o) => {
            n._idx = o
        }), this.notifyPlugins("afterLayout")
    }

    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {mode: t, cancelable: !0}) !== !1) {
            for (let e = 0, s = this.data.datasets.length; e < s; ++e) this.getDatasetMeta(e).controller.configure();
            for (let e = 0, s = this.data.datasets.length; e < s; ++e) this._updateDataset(e, vt(t) ? t({datasetIndex: e}) : t);
            this.notifyPlugins("afterDatasetsUpdate", {mode: t})
        }
    }

    _updateDataset(t, e) {
        const s = this.getDatasetMeta(t), n = {meta: s, index: t, mode: e, cancelable: !0};
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
    }

    render() {
        this.notifyPlugins("beforeRender", {cancelable: !0}) !== !1 && (lt.has(this) ? this.attached && !lt.running(this) && lt.start(this) : (this.draw(), Ts({chart: this})))
    }

    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const {width: s, height: n} = this._resizeBeforeDraw;
            this._resize(s, n), this._resizeBeforeDraw = null
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {cancelable: !0}) === !1) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }

    _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets, s = [];
        let n, o;
        for (n = 0, o = e.length; n < o; ++n) {
            const a = e[n];
            (!t || a.visible) && s.push(a)
        }
        return s
    }

    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0)
    }

    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {cancelable: !0}) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw")
    }

    _drawDataset(t) {
        const e = this.ctx, s = t._clip, n = !s.disabled, o = jl(t, this.chartArea),
            a = {meta: t, index: t.index, cancelable: !0};
        this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && Ye(e, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
        }), t.controller.draw(), n && Xe(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a))
    }

    isPointInArea(t) {
        return ft(t, this.chartArea, this._minPadding)
    }

    getElementsAtEventForMode(t, e, s, n) {
        const o = Vr.modes[e];
        return typeof o == "function" ? o(this, t, s, n) : []
    }

    getDatasetMeta(t) {
        const e = this.data.datasets[t], s = this._metasets;
        let n = s.filter(o => o && o._dataset === e).pop();
        return n || (n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
        }, s.push(n)), n
    }

    getContext() {
        return this.$context || (this.$context = Mt(null, {chart: this, type: "chart"}))
    }

    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length
    }

    isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const s = this.getDatasetMeta(t);
        return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden
    }

    setDatasetVisibility(t, e) {
        const s = this.getDatasetMeta(t);
        s.hidden = !e
    }

    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t]
    }

    getDataVisibility(t) {
        return !this._hiddenIndices[t]
    }

    _updateVisibility(t, e, s) {
        const n = s ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, n);
        le(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {visible: s}), this.update(r => r.datasetIndex === t ? n : void 0))
    }

    hide(t, e) {
        this._updateVisibility(t, e, !1)
    }

    show(t, e) {
        this._updateVisibility(t, e, !0)
    }

    _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t]
    }

    _stop() {
        let t, e;
        for (this.stop(), lt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
    }

    destroy() {
        this.notifyPlugins("beforeDestroy");
        const {canvas: t, ctx: e} = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ji(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Re[this.id], this.notifyPlugins("afterDestroy")
    }

    toBase64Image(...t) {
        return this.canvas.toDataURL(...t)
    }

    bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }

    bindUserEvents() {
        const t = this._listeners, e = this.platform, s = (o, a) => {
            e.addEventListener(this, o, a), t[o] = a
        }, n = (o, a, r) => {
            o.offsetX = a, o.offsetY = r, this._eventHandler(o)
        };
        T(this.options.events, o => s(o, n))
    }

    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
            e.addEventListener(this, l, c), t[l] = c
        }, n = (l, c) => {
            t[l] && (e.removeEventListener(this, l, c), delete t[l])
        }, o = (l, c) => {
            this.canvas && this.resize(l, c)
        };
        let a;
        const r = () => {
            n("attach", r), this.attached = !0, this.resize(), s("resize", o), s("detach", a)
        };
        a = () => {
            this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r)
        }, e.isAttached(this.canvas) ? r() : a()
    }

    unbindEvents() {
        T(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._listeners = {}, T(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._responsiveListeners = void 0
    }

    updateHoverStyle(t, e, s) {
        const n = s ? "set" : "remove";
        let o, a, r, l;
        for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
            a = t[r];
            const c = a && this.getDatasetMeta(a.datasetIndex).controller;
            c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index)
        }
    }

    getActiveElements() {
        return this._active || []
    }

    setActiveElements(t) {
        const e = this._active || [], s = t.map(({datasetIndex: o, index: a}) => {
            const r = this.getDatasetMeta(o);
            if (!r) throw new Error("No dataset found at index " + o);
            return {datasetIndex: o, element: r.data[a], index: a}
        });
        !Fe(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e))
    }

    notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s)
    }

    isPluginEnabled(t) {
        return this._plugins._cache.filter(e => e.plugin.id === t).length === 1
    }

    _updateHoverStyles(t, e, s) {
        const n = this.options.hover,
            o = (l, c) => l.filter(h => !c.some(d => h.datasetIndex === d.datasetIndex && h.index === d.index)),
            a = o(e, t), r = s ? t : o(t, e);
        a.length && this.updateHoverStyle(a, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0)
    }

    _eventHandler(t, e) {
        const s = {event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t)},
            n = a => (a.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
        const o = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this
    }

    _handleEvent(t, e, s) {
        const {_active: n = [], options: o} = this, a = e, r = this._getActiveElements(t, n, s, a), l = Yo(t),
            c = Hl(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, E(o.onHover, [t, r, this], this), l && E(o.onClick, [t, r, this], this));
        const h = !Fe(r, n);
        return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h
    }

    _getActiveElements(t, e, s, n) {
        if (t.type === "mouseout") return [];
        if (!s) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n)
    }
}

function Es() {
    return T(me.instances, i => i._plugins.invalidate())
}

function $l(i, t, e) {
    const {startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l} = t;
    let c = n / r;
    i.beginPath(), i.arc(o, a, r, s - c, e + c), l > n ? (c = n / l, i.arc(o, a, l, e + c, s - c, !0)) : i.arc(o, a, n, e + H, s - H), i.closePath(), i.clip()
}

function Yl(i) {
    return Oi(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
}

function Xl(i, t, e, s) {
    const n = Yl(i.options.borderRadius), o = (e - t) / 2, a = Math.min(o, s * t / 2), r = l => {
        const c = (e - Math.min(o, l)) * s / 2;
        return $(l, 0, Math.min(o, c))
    };
    return {
        outerStart: r(n.outerStart),
        outerEnd: r(n.outerEnd),
        innerStart: $(n.innerStart, 0, a),
        innerEnd: $(n.innerEnd, 0, a)
    }
}

function Bt(i, t, e, s) {
    return {x: e + i * Math.cos(t), y: s + i * Math.sin(t)}
}

function Ne(i, t, e, s, n, o) {
    const {x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: h} = t, d = Math.max(t.outerRadius + s + e - c, 0),
        u = h > 0 ? h + s + e + c : 0;
    let f = 0;
    const g = n - l;
    if (s) {
        const R = h > 0 ? h - s : 0, B = d > 0 ? d - s : 0, N = (R + B) / 2, it = N !== 0 ? g * N / (N + s) : g;
        f = (g - it) / 2
    }
    const p = Math.max(.001, g * d - e / z) / d, m = (g - p) / 2, b = l + m + f, x = n - m - f, {
            outerStart: v,
            outerEnd: y,
            innerStart: _,
            innerEnd: M
        } = Xl(t, u, d, x - b), k = d - v, S = d - y, w = b + v / k, C = x - y / S, D = u + _, A = u + M, Y = b + _ / D,
        J = x - M / A;
    if (i.beginPath(), o) {
        const R = (w + C) / 2;
        if (i.arc(a, r, d, w, R), i.arc(a, r, d, R, C), y > 0) {
            const X = Bt(S, C, a, r);
            i.arc(X.x, X.y, y, C, x + H)
        }
        const B = Bt(A, x, a, r);
        if (i.lineTo(B.x, B.y), M > 0) {
            const X = Bt(A, J, a, r);
            i.arc(X.x, X.y, M, x + H, J + Math.PI)
        }
        const N = (x - M / u + (b + _ / u)) / 2;
        if (i.arc(a, r, u, x - M / u, N, !0), i.arc(a, r, u, N, b + _ / u, !0), _ > 0) {
            const X = Bt(D, Y, a, r);
            i.arc(X.x, X.y, _, Y + Math.PI, b - H)
        }
        const it = Bt(k, b, a, r);
        if (i.lineTo(it.x, it.y), v > 0) {
            const X = Bt(k, w, a, r);
            i.arc(X.x, X.y, v, b - H, w)
        }
    } else {
        i.moveTo(a, r);
        const R = Math.cos(w) * d + a, B = Math.sin(w) * d + r;
        i.lineTo(R, B);
        const N = Math.cos(C) * d + a, it = Math.sin(C) * d + r;
        i.lineTo(N, it)
    }
    i.closePath()
}

function Ul(i, t, e, s, n) {
    const {fullCircles: o, startAngle: a, circumference: r} = t;
    let l = t.endAngle;
    if (o) {
        Ne(i, t, e, s, l, n);
        for (let c = 0; c < o; ++c) i.fill();
        isNaN(r) || (l = a + (r % I || I))
    }
    return Ne(i, t, e, s, l, n), i.fill(), l
}

function Kl(i, t, e, s, n) {
    const {fullCircles: o, startAngle: a, circumference: r, options: l} = t, {
        borderWidth: c,
        borderJoinStyle: h,
        borderDash: d,
        borderDashOffset: u
    } = l, f = l.borderAlign === "inner";
    if (!c) return;
    i.setLineDash(d || []), i.lineDashOffset = u, f ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
    let g = t.endAngle;
    if (o) {
        Ne(i, t, e, s, g, n);
        for (let p = 0; p < o; ++p) i.stroke();
        isNaN(r) || (g = a + (r % I || I))
    }
    f && $l(i, t, g), o || (Ne(i, t, e, s, g, n), i.stroke())
}

class ql extends gt {
    static id = "arc";
    static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    };
    static defaultRoutes = {backgroundColor: "backgroundColor"};
    static descriptors = {_scriptable: !0, _indexable: t => t !== "borderDash"};
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;

    constructor(t) {
        super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
    }

    inRange(t, e, s) {
        const n = this.getProps(["x", "y"], s), {angle: o, distance: a} = xn(n, {x: t, y: e}), {
                startAngle: r,
                endAngle: l,
                innerRadius: c,
                outerRadius: h,
                circumference: d
            } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s),
            u = (this.options.spacing + this.options.borderWidth) / 2, g = P(d, l - r) >= I || ce(o, r, l),
            p = dt(a, c + u, h + u);
        return g && p
    }

    getCenterPoint(t) {
        const {
            x: e,
            y: s,
            startAngle: n,
            endAngle: o,
            innerRadius: a,
            outerRadius: r
        } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
            offset: l,
            spacing: c
        } = this.options, h = (n + o) / 2, d = (a + r + c + l) / 2;
        return {x: e + Math.cos(h) * d, y: s + Math.sin(h) * d}
    }

    tooltipPosition(t) {
        return this.getCenterPoint(t)
    }

    draw(t) {
        const {options: e, circumference: s} = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, a = e.circular;
        if (this.pixelMargin = e.borderAlign === "inner" ? .33 : 0, this.fullCircles = s > I ? Math.floor(s / I) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        const r = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(r) * n, Math.sin(r) * n);
        const l = 1 - Math.sin(Math.min(z, s || 0)), c = n * l;
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Ul(t, this, c, o, a), Kl(t, this, c, o, a), t.restore()
    }
}

function Qn(i, t, e = t) {
    i.lineCap = P(e.borderCapStyle, t.borderCapStyle), i.setLineDash(P(e.borderDash, t.borderDash)), i.lineDashOffset = P(e.borderDashOffset, t.borderDashOffset), i.lineJoin = P(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = P(e.borderWidth, t.borderWidth), i.strokeStyle = P(e.borderColor, t.borderColor)
}

function Gl(i, t, e) {
    i.lineTo(e.x, e.y)
}

function Zl(i) {
    return i.stepped ? fa : i.tension || i.cubicInterpolationMode === "monotone" ? ga : Gl
}

function to(i, t, e = {}) {
    const s = i.length, {start: n = 0, end: o = s - 1} = e, {start: a, end: r} = t, l = Math.max(n, a),
        c = Math.min(o, r), h = n < a && o < a || n > r && o > r;
    return {count: s, start: l, loop: t.loop, ilen: c < l && !h ? s + c - l : c - l}
}

function Jl(i, t, e, s) {
    const {points: n, options: o} = t, {count: a, start: r, loop: l, ilen: c} = to(n, e, s), h = Zl(o);
    let {move: d = !0, reverse: u} = s || {}, f, g, p;
    for (f = 0; f <= c; ++f) g = n[(r + (u ? c - f : f)) % a], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
    return l && (g = n[(r + (u ? c : 0)) % a], h(i, p, g, u, o.stepped)), !!l
}

function Ql(i, t, e, s) {
    const n = t.points, {count: o, start: a, ilen: r} = to(n, e, s), {move: l = !0, reverse: c} = s || {};
    let h = 0, d = 0, u, f, g, p, m, b;
    const x = y => (a + (c ? r - y : y)) % o, v = () => {
        p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b))
    };
    for (l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
        if (f = n[x(u)], f.skip) continue;
        const y = f.x, _ = f.y, M = y | 0;
        M === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + y) / ++d) : (v(), i.lineTo(y, _), g = M, d = 0, p = m = _), b = _
    }
    v()
}

function mi(i) {
    const t = i.options, e = t.borderDash && t.borderDash.length;
    return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Ql : Jl
}

function tc(i) {
    return i.stepped ? Xa : i.tension || i.cubicInterpolationMode === "monotone" ? Ua : Ot
}

function ec(i, t, e, s) {
    let n = t._path;
    n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()), Qn(i, t.options), i.stroke(n)
}

function ic(i, t, e, s) {
    const {segments: n, options: o} = t, a = mi(t);
    for (const r of n) Qn(i, o, r.style), i.beginPath(), a(i, t, r, {
        start: e,
        end: e + s - 1
    }) && i.closePath(), i.stroke()
}

const sc = typeof Path2D == "function";

function nc(i, t, e, s) {
    sc && !t.options.segment ? ec(i, t, e, s) : ic(i, t, e, s)
}

class Ke extends gt {
    static id = "line";
    static defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    };
    static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};
    static descriptors = {_scriptable: !0, _indexable: t => t !== "borderDash" && t !== "fill"};

    constructor(t) {
        super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
    }

    updateControlPoints(t, e) {
        const s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
            const n = s.spanGaps ? this._loop : this._fullLoop;
            Ba(this._points, s, t, n, e), this._pointsUpdated = !0
        }
    }

    set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
    }

    get points() {
        return this._points
    }

    get segments() {
        return this._segments || (this._segments = Qa(this, this.options.segment))
    }

    first() {
        const t = this.segments, e = this.points;
        return t.length && e[t[0].start]
    }

    last() {
        const t = this.segments, e = this.points, s = t.length;
        return s && e[t[s - 1].end]
    }

    interpolate(t, e) {
        const s = this.options, n = t[e], o = this.points, a = Vn(this, {property: e, start: n, end: n});
        if (!a.length) return;
        const r = [], l = tc(s);
        let c, h;
        for (c = 0, h = a.length; c < h; ++c) {
            const {start: d, end: u} = a[c], f = o[d], g = o[u];
            if (f === g) {
                r.push(f);
                continue
            }
            const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
            m[e] = t[e], r.push(m)
        }
        return r.length === 1 ? r[0] : r
    }

    pathSegment(t, e, s) {
        return mi(this)(t, this, e, s)
    }

    path(t, e, s) {
        const n = this.segments, o = mi(this);
        let a = this._loop;
        e = e || 0, s = s || this.points.length - e;
        for (const r of n) a &= o(t, this, r, {start: e, end: e + s - 1});
        return !!a
    }

    draw(t, e, s, n) {
        const o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), nc(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
    }
}

function Fs(i, t, e, s) {
    const n = i.options, {[e]: o} = i.getProps([e], s);
    return Math.abs(t - o) < n.radius + n.hitRadius
}

class oc extends gt {
    static id = "point";
    parsed;
    skip;
    stop;
    static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    };
    static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};

    constructor(t) {
        super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
    }

    inRange(t, e, s) {
        const n = this.options, {x: o, y: a} = this.getProps(["x", "y"], s);
        return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2)
    }

    inXRange(t, e) {
        return Fs(this, t, "x", e)
    }

    inYRange(t, e) {
        return Fs(this, t, "y", e)
    }

    getCenterPoint(t) {
        const {x: e, y: s} = this.getProps(["x", "y"], t);
        return {x: e, y: s}
    }

    size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        const s = e && t.borderWidth || 0;
        return (e + s) * 2
    }

    draw(t, e) {
        const s = this.options;
        this.skip || s.radius < .1 || !ft(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, fi(t, s, this.x, this.y))
    }

    getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius
    }
}

function eo(i, t) {
    const {x: e, y: s, base: n, width: o, height: a} = i.getProps(["x", "y", "base", "width", "height"], t);
    let r, l, c, h, d;
    return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
        left: r,
        top: c,
        right: l,
        bottom: h
    }
}

function xt(i, t, e, s) {
    return i ? 0 : $(t, e, s)
}

function ac(i, t, e) {
    const s = i.options.borderWidth, n = i.borderSkipped, o = Cn(s);
    return {
        t: xt(n.top, o.top, 0, e),
        r: xt(n.right, o.right, 0, t),
        b: xt(n.bottom, o.bottom, 0, e),
        l: xt(n.left, o.left, 0, t)
    }
}

function rc(i, t, e) {
    const {enableBorderRadius: s} = i.getProps(["enableBorderRadius"]), n = i.options.borderRadius, o = At(n),
        a = Math.min(t, e), r = i.borderSkipped, l = s || O(n);
    return {
        topLeft: xt(!l || r.top || r.left, o.topLeft, 0, a),
        topRight: xt(!l || r.top || r.right, o.topRight, 0, a),
        bottomLeft: xt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
        bottomRight: xt(!l || r.bottom || r.right, o.bottomRight, 0, a)
    }
}

function lc(i) {
    const t = eo(i), e = t.right - t.left, s = t.bottom - t.top, n = ac(i, e / 2, s / 2), o = rc(i, e / 2, s / 2);
    return {
        outer: {x: t.left, y: t.top, w: e, h: s, radius: o},
        inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: e - n.l - n.r,
            h: s - n.t - n.b,
            radius: {
                topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
            }
        }
    }
}

function oi(i, t, e, s) {
    const n = t === null, o = e === null, r = i && !(n && o) && eo(i, s);
    return r && (n || dt(t, r.left, r.right)) && (o || dt(e, r.top, r.bottom))
}

function cc(i) {
    return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight
}

function hc(i, t) {
    i.rect(t.x, t.y, t.w, t.h)
}

function ai(i, t, e = {}) {
    const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s,
        a = (i.y + i.h !== e.y + e.h ? t : 0) - n;
    return {x: i.x + s, y: i.y + n, w: i.w + o, h: i.h + a, radius: i.radius}
}

class dc extends gt {
    static id = "bar";
    static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
    };
    static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};

    constructor(t) {
        super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
    }

    draw(t) {
        const {inflateAmount: e, options: {borderColor: s, backgroundColor: n}} = this, {inner: o, outer: a} = lc(this),
            r = cc(a.radius) ? he : hc;
        t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, ai(a, e, o)), t.clip(), r(t, ai(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, ai(o, e)), t.fillStyle = n, t.fill(), t.restore()
    }

    inRange(t, e, s) {
        return oi(this, t, e, s)
    }

    inXRange(t, e) {
        return oi(this, t, null, e)
    }

    inYRange(t, e) {
        return oi(this, null, t, e)
    }

    getCenterPoint(t) {
        const {x: e, y: s, base: n, horizontal: o} = this.getProps(["x", "y", "base", "horizontal"], t);
        return {x: o ? (e + n) / 2 : e, y: o ? s : (s + n) / 2}
    }

    getRange(t) {
        return t === "x" ? this.width / 2 : this.height / 2
    }
}

var uc = Object.freeze({__proto__: null, ArcElement: ql, BarElement: dc, LineElement: Ke, PointElement: oc});
const bi = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
    Is = bi.map(i => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));

function io(i) {
    return bi[i % bi.length]
}

function so(i) {
    return Is[i % Is.length]
}

function fc(i, t) {
    return i.borderColor = io(t), i.backgroundColor = so(t), ++t
}

function gc(i, t) {
    return i.backgroundColor = i.data.map(() => io(t++)), t
}

function pc(i, t) {
    return i.backgroundColor = i.data.map(() => so(t++)), t
}

function mc(i) {
    let t = 0;
    return (e, s) => {
        const n = i.getDatasetMeta(s).controller;
        n instanceof Ei ? t = gc(e, t) : n instanceof jn ? t = pc(e, t) : n && (t = fc(e, t))
    }
}

function zs(i) {
    let t;
    for (t in i) if (i[t].borderColor || i[t].backgroundColor) return !0;
    return !1
}

function bc(i) {
    return i && (i.borderColor || i.backgroundColor)
}

var xc = {
    id: "colors", defaults: {enabled: !0, forceOverride: !1}, beforeLayout(i, t, e) {
        if (!e.enabled) return;
        const {data: {datasets: s}, options: n} = i.config, {elements: o} = n;
        if (!e.forceOverride && (zs(s) || bc(n) || o && zs(o))) return;
        const a = mc(i);
        s.forEach(a)
    }
};

function _c(i, t, e, s, n) {
    const o = n.samples || s;
    if (o >= e) return i.slice(t, t + e);
    const a = [], r = (e - 2) / (o - 2);
    let l = 0;
    const c = t + e - 1;
    let h = t, d, u, f, g, p;
    for (a[l++] = i[h], d = 0; d < o - 2; d++) {
        let m = 0, b = 0, x;
        const v = Math.floor((d + 1) * r) + 1 + t, y = Math.min(Math.floor((d + 2) * r) + 1, e) + t, _ = y - v;
        for (x = v; x < y; x++) m += i[x].x, b += i[x].y;
        m /= _, b /= _;
        const M = Math.floor(d * r) + 1 + t, k = Math.min(Math.floor((d + 1) * r) + 1, e) + t, {x: S, y: w} = i[h];
        for (f = g = -1, x = M; x < k; x++) g = .5 * Math.abs((S - m) * (i[x].y - w) - (S - i[x].x) * (b - w)), g > f && (f = g, u = i[x], p = x);
        a[l++] = u, h = p
    }
    return a[l++] = i[c], a
}

function yc(i, t, e, s) {
    let n = 0, o = 0, a, r, l, c, h, d, u, f, g, p;
    const m = [], b = t + e - 1, x = i[t].x, y = i[b].x - x;
    for (a = t; a < t + e; ++a) {
        r = i[a], l = (r.x - x) / y * s, c = r.y;
        const _ = l | 0;
        if (_ === h) c < g ? (g = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o; else {
            const M = a - 1;
            if (!L(d) && !L(u)) {
                const k = Math.min(d, u), S = Math.max(d, u);
                k !== f && k !== M && m.push({...i[k], x: n}), S !== f && S !== M && m.push({...i[S], x: n})
            }
            a > 0 && M !== f && m.push(i[M]), m.push(r), h = _, o = 0, g = p = c, d = u = f = a
        }
    }
    return m
}

function no(i) {
    if (i._decimated) {
        const t = i._data;
        delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: t
        })
    }
}

function Bs(i) {
    i.data.datasets.forEach(t => {
        no(t)
    })
}

function vc(i, t) {
    const e = t.length;
    let s = 0, n;
    const {iScale: o} = i, {min: a, max: r, minDefined: l, maxDefined: c} = o.getUserBounds();
    return l && (s = $(ut(t, o.axis, a).lo, 0, e - 1)), c ? n = $(ut(t, o.axis, r).hi + 1, s, e) - s : n = e - s, {
        start: s,
        count: n
    }
}

var Mc = {
    id: "decimation", defaults: {algorithm: "min-max", enabled: !1}, beforeElementsUpdate: (i, t, e) => {
        if (!e.enabled) {
            Bs(i);
            return
        }
        const s = i.width;
        i.data.datasets.forEach((n, o) => {
            const {_data: a, indexAxis: r} = n, l = i.getDatasetMeta(o), c = a || n.data;
            if (Qt([r, i.options.indexAxis]) === "y" || !l.controller.supportsDecimation) return;
            const h = i.scales[l.xAxisID];
            if (h.type !== "linear" && h.type !== "time" || i.options.parsing) return;
            let {start: d, count: u} = vc(l, c);
            const f = e.threshold || 4 * s;
            if (u <= f) {
                no(n);
                return
            }
            L(a) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this._decimated
                },
                set: function (p) {
                    this._data = p
                }
            }));
            let g;
            switch (e.algorithm) {
                case"lttb":
                    g = _c(c, d, u, s, e);
                    break;
                case"min-max":
                    g = yc(c, d, u, s);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)
            }
            n._decimated = g
        })
    }, destroy(i) {
        Bs(i)
    }
};

function kc(i, t, e) {
    const s = i.segments, n = i.points, o = t.points, a = [];
    for (const r of s) {
        let {start: l, end: c} = r;
        c = Ii(l, c, n);
        const h = xi(e, n[l], n[c], r.loop);
        if (!t.segments) {
            a.push({source: r, target: h, start: n[l], end: n[c]});
            continue
        }
        const d = Vn(t, h);
        for (const u of d) {
            const f = xi(e, o[u.start], o[u.end], u.loop), g = Bn(r, n, f);
            for (const p of g) a.push({
                source: p,
                target: u,
                start: {[e]: Vs(h, f, "start", Math.max)},
                end: {[e]: Vs(h, f, "end", Math.min)}
            })
        }
    }
    return a
}

function xi(i, t, e, s) {
    if (s) return;
    let n = t[i], o = e[i];
    return i === "angle" && (n = tt(n), o = tt(o)), {property: i, start: n, end: o}
}

function Sc(i, t) {
    const {x: e = null, y: s = null} = i || {}, n = t.points, o = [];
    return t.segments.forEach(({start: a, end: r}) => {
        r = Ii(a, r, n);
        const l = n[a], c = n[r];
        s !== null ? (o.push({x: l.x, y: s}), o.push({x: c.x, y: s})) : e !== null && (o.push({
            x: e,
            y: l.y
        }), o.push({x: e, y: c.y}))
    }), o
}

function Ii(i, t, e) {
    for (; t > i; t--) {
        const s = e[t];
        if (!isNaN(s.x) && !isNaN(s.y)) break
    }
    return t
}

function Vs(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0
}

function oo(i, t) {
    let e = [], s = !1;
    return F(i) ? (s = !0, e = i) : e = Sc(i, t), e.length ? new Ke({
        points: e,
        options: {tension: 0},
        _loop: s,
        _fullLoop: s
    }) : null
}

function Ws(i) {
    return i && i.fill !== !1
}

function wc(i, t, e) {
    let n = i[t].fill;
    const o = [t];
    let a;
    if (!e) return n;
    for (; n !== !1 && o.indexOf(n) === -1;) {
        if (!V(n)) return n;
        if (a = i[n], !a) return !1;
        if (a.visible) return n;
        o.push(n), n = a.fill
    }
    return !1
}

function Pc(i, t, e) {
    const s = Ac(i);
    if (O(s)) return isNaN(s.value) ? !1 : s;
    let n = parseFloat(s);
    return V(n) && Math.floor(n) === n ? Cc(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
}

function Cc(i, t, e, s) {
    return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
}

function Dc(i, t) {
    let e = null;
    return i === "start" ? e = t.bottom : i === "end" ? e = t.top : O(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e
}

function Oc(i, t, e) {
    let s;
    return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : O(i) ? s = i.value : s = t.getBaseValue(), s
}

function Ac(i) {
    const t = i.options, e = t.fill;
    let s = P(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s
}

function Lc(i) {
    const {scale: t, index: e, line: s} = i, n = [], o = s.segments, a = s.points, r = Tc(t, e);
    r.push(oo({x: null, y: t.bottom}, s));
    for (let l = 0; l < o.length; l++) {
        const c = o[l];
        for (let h = c.start; h <= c.end; h++) Rc(n, a[h], r)
    }
    return new Ke({points: n, options: {}})
}

function Tc(i, t) {
    const e = [], s = i.getMatchingVisibleMetas("line");
    for (let n = 0; n < s.length; n++) {
        const o = s[n];
        if (o.index === t) break;
        o.hidden || e.unshift(o.dataset)
    }
    return e
}

function Rc(i, t, e) {
    const s = [];
    for (let n = 0; n < e.length; n++) {
        const o = e[n], {first: a, last: r, point: l} = Ec(o, t, "x");
        if (!(!l || a && r)) {
            if (a) s.unshift(l); else if (i.push(l), !r) break
        }
    }
    i.push(...s)
}

function Ec(i, t, e) {
    const s = i.interpolate(t, e);
    if (!s) return {};
    const n = s[e], o = i.segments, a = i.points;
    let r = !1, l = !1;
    for (let c = 0; c < o.length; c++) {
        const h = o[c], d = a[h.start][e], u = a[h.end][e];
        if (dt(n, d, u)) {
            r = n === d, l = n === u;
            break
        }
    }
    return {first: r, last: l, point: s}
}

class ao {
    constructor(t) {
        this.x = t.x, this.y = t.y, this.radius = t.radius
    }

    pathSegment(t, e, s) {
        const {x: n, y: o, radius: a} = this;
        return e = e || {start: 0, end: I}, t.arc(n, o, a, e.end, e.start, !0), !s.bounds
    }

    interpolate(t) {
        const {x: e, y: s, radius: n} = this, o = t.angle;
        return {x: e + Math.cos(o) * n, y: s + Math.sin(o) * n, angle: o}
    }
}

function Fc(i) {
    const {chart: t, fill: e, line: s} = i;
    if (V(e)) return Ic(t, e);
    if (e === "stack") return Lc(i);
    if (e === "shape") return !0;
    const n = zc(i);
    return n instanceof ao ? n : oo(n, s)
}

function Ic(i, t) {
    const e = i.getDatasetMeta(t);
    return e && i.isDatasetVisible(t) ? e.dataset : null
}

function zc(i) {
    return (i.scale || {}).getPointPositionForValue ? Vc(i) : Bc(i)
}

function Bc(i) {
    const {scale: t = {}, fill: e} = i, s = Dc(e, t);
    if (V(s)) {
        const n = t.isHorizontal();
        return {x: n ? s : null, y: n ? null : s}
    }
    return null
}

function Vc(i) {
    const {scale: t, fill: e} = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min,
        a = Oc(e, t, o), r = [];
    if (s.grid.circular) {
        const l = t.getPointPositionForValue(0, o);
        return new ao({x: l.x, y: l.y, radius: t.getDistanceFromCenterForValue(a)})
    }
    for (let l = 0; l < n; ++l) r.push(t.getPointPositionForValue(l, a));
    return r
}

function ri(i, t, e) {
    const s = Fc(t), {line: n, scale: o, axis: a} = t, r = n.options, l = r.fill, c = r.backgroundColor, {
        above: h = c,
        below: d = c
    } = l || {};
    s && n.points.length && (Ye(i, e), Wc(i, {
        line: n,
        target: s,
        above: h,
        below: d,
        area: e,
        scale: o,
        axis: a
    }), Xe(i))
}

function Wc(i, t) {
    const {line: e, target: s, above: n, below: o, area: a, scale: r} = t, l = e._loop ? "angle" : t.axis;
    i.save(), l === "x" && o !== n && (Ns(i, s, a.top), Hs(i, {
        line: e,
        target: s,
        color: n,
        scale: r,
        property: l
    }), i.restore(), i.save(), Ns(i, s, a.bottom)), Hs(i, {
        line: e,
        target: s,
        color: o,
        scale: r,
        property: l
    }), i.restore()
}

function Ns(i, t, e) {
    const {segments: s, points: n} = t;
    let o = !0, a = !1;
    i.beginPath();
    for (const r of s) {
        const {start: l, end: c} = r, h = n[l], d = n[Ii(l, c, n)];
        o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), a = !!t.pathSegment(i, r, {move: a}), a ? i.closePath() : i.lineTo(d.x, e)
    }
    i.lineTo(t.first().x, e), i.closePath(), i.clip()
}

function Hs(i, t) {
    const {line: e, target: s, property: n, color: o, scale: a} = t, r = kc(e, s, n);
    for (const {source: l, target: c, start: h, end: d} of r) {
        const {style: {backgroundColor: u = o} = {}} = l, f = s !== !0;
        i.save(), i.fillStyle = u, Nc(i, a, f && xi(n, h, d)), i.beginPath();
        const g = !!e.pathSegment(i, l);
        let p;
        if (f) {
            g ? i.closePath() : js(i, s, d, n);
            const m = !!s.pathSegment(i, c, {move: g, reverse: !0});
            p = g && m, p || js(i, s, h, n)
        }
        i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore()
    }
}

function Nc(i, t, e) {
    const {top: s, bottom: n} = t.chart.chartArea, {property: o, start: a, end: r} = e || {};
    o === "x" && (i.beginPath(), i.rect(a, s, r - a, n - s), i.clip())
}

function js(i, t, e, s) {
    const n = t.interpolate(e, s);
    n && i.lineTo(n.x, n.y)
}

var Hc = {
    id: "filler", afterDatasetsUpdate(i, t, e) {
        const s = (i.data.datasets || []).length, n = [];
        let o, a, r, l;
        for (a = 0; a < s; ++a) o = i.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof Ke && (l = {
            visible: i.isDatasetVisible(a),
            index: a,
            fill: Pc(r, a, s),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: r
        }), o.$filler = l, n.push(l);
        for (a = 0; a < s; ++a) l = n[a], !(!l || l.fill === !1) && (l.fill = wc(n, a, e.propagate))
    }, beforeDraw(i, t, e) {
        const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
        for (let a = n.length - 1; a >= 0; --a) {
            const r = n[a].$filler;
            r && (r.line.updateControlPoints(o, r.axis), s && r.fill && ri(i.ctx, r, o))
        }
    }, beforeDatasetsDraw(i, t, e) {
        if (e.drawTime !== "beforeDatasetsDraw") return;
        const s = i.getSortedVisibleDatasetMetas();
        for (let n = s.length - 1; n >= 0; --n) {
            const o = s[n].$filler;
            Ws(o) && ri(i.ctx, o, i.chartArea)
        }
    }, beforeDatasetDraw(i, t, e) {
        const s = t.meta.$filler;
        !Ws(s) || e.drawTime !== "beforeDatasetDraw" || ri(i.ctx, s, i.chartArea)
    }, defaults: {propagate: !0, drawTime: "beforeDatasetDraw"}
};
const $s = (i, t) => {
    let {boxHeight: e = t, boxWidth: s = t} = i;
    return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
        boxWidth: s,
        boxHeight: e,
        itemHeight: Math.max(t, e)
    }
}, jc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;

class Ys extends gt {
    constructor(t) {
        super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
    }

    update(t, e, s) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit()
    }

    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
    }

    buildLabels() {
        const t = this.options.labels || {};
        let e = E(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter(s => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e
    }

    fit() {
        const {options: t, ctx: e} = this;
        if (!t.display) {
            this.width = this.height = 0;
            return
        }
        const s = t.labels, n = j(s.font), o = n.size, a = this._computeTitleHeight(), {
            boxWidth: r,
            itemHeight: l
        } = $s(s, o);
        let c, h;
        e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, n, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight)
    }

    _fitRows(t, e, s, n) {
        const {ctx: o, maxWidth: a, options: {labels: {padding: r}}} = this, l = this.legendHitBoxes = [],
            c = this.lineWidths = [0], h = n + r;
        let d = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let u = -1, f = -h;
        return this.legendItems.forEach((g, p) => {
            const m = s + e / 2 + o.measureText(g.text).width;
            (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
                left: 0,
                top: f,
                row: u,
                width: m,
                height: n
            }, c[c.length - 1] += m + r
        }), d
    }

    _fitCols(t, e, s, n) {
        const {ctx: o, maxHeight: a, options: {labels: {padding: r}}} = this, l = this.legendHitBoxes = [],
            c = this.columnSizes = [], h = a - t;
        let d = r, u = 0, f = 0, g = 0, p = 0;
        return this.legendItems.forEach((m, b) => {
            const {itemWidth: x, itemHeight: v} = $c(s, e, o, m, n);
            b > 0 && f + v + 2 * r > h && (d += u + r, c.push({
                width: u,
                height: f
            }), g += u + r, p++, u = f = 0), l[b] = {
                left: g,
                top: f,
                col: p,
                width: x,
                height: v
            }, u = Math.max(u, x), f += v + r
        }), d += u, c.push({width: u, height: f}), d
    }

    adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(), {
            legendHitBoxes: e,
            options: {align: s, labels: {padding: n}, rtl: o}
        } = this, a = Vt(o, this.left, this.width);
        if (this.isHorizontal()) {
            let r = 0, l = U(s, this.left + n, this.right - this.lineWidths[r]);
            for (const c of e) r !== c.row && (r = c.row, l = U(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n
        } else {
            let r = 0, l = U(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
            for (const c of e) c.col !== r && (r = c.col, l = U(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n
        }
    }

    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom"
    }

    draw() {
        if (this.options.display) {
            const t = this.ctx;
            Ye(t, this), this._draw(), Xe(t)
        }
    }

    _draw() {
        const {options: t, columnSizes: e, lineWidths: s, ctx: n} = this, {align: o, labels: a} = t, r = W.color,
            l = Vt(t.rtl, this.left, this.width), c = j(a.font), {padding: h} = a, d = c.size, u = d / 2;
        let f;
        this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
        const {boxWidth: g, boxHeight: p, itemHeight: m} = $s(a, d), b = function (M, k, S) {
            if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
            n.save();
            const w = P(S.lineWidth, 1);
            if (n.fillStyle = P(S.fillStyle, r), n.lineCap = P(S.lineCap, "butt"), n.lineDashOffset = P(S.lineDashOffset, 0), n.lineJoin = P(S.lineJoin, "miter"), n.lineWidth = w, n.strokeStyle = P(S.strokeStyle, r), n.setLineDash(P(S.lineDash, [])), a.usePointStyle) {
                const C = {radius: p * Math.SQRT2 / 2, pointStyle: S.pointStyle, rotation: S.rotation, borderWidth: w},
                    D = l.xPlus(M, g / 2), A = k + u;
                Pn(n, C, D, A, a.pointStyleWidth && g)
            } else {
                const C = k + Math.max((d - p) / 2, 0), D = l.leftForLtr(M, g), A = At(S.borderRadius);
                n.beginPath(), Object.values(A).some(Y => Y !== 0) ? he(n, {
                    x: D,
                    y: C,
                    w: g,
                    h: p,
                    radius: A
                }) : n.rect(D, C, g, p), n.fill(), w !== 0 && n.stroke()
            }
            n.restore()
        }, x = function (M, k, S) {
            Rt(n, S.text, M, k + m / 2, c, {strikethrough: S.hidden, textAlign: l.textAlign(S.textAlign)})
        }, v = this.isHorizontal(), y = this._computeTitleHeight();
        v ? f = {x: U(o, this.left + h, this.right - s[0]), y: this.top + h + y, line: 0} : f = {
            x: this.left + h,
            y: U(o, this.top + y + h, this.bottom - e[0].height),
            line: 0
        }, Fn(this.ctx, t.textDirection);
        const _ = m + h;
        this.legendItems.forEach((M, k) => {
            n.strokeStyle = M.fontColor, n.fillStyle = M.fontColor;
            const S = n.measureText(M.text).width, w = l.textAlign(M.textAlign || (M.textAlign = a.textAlign)),
                C = g + u + S;
            let D = f.x, A = f.y;
            l.setWidth(this.width), v ? k > 0 && D + C + h > this.right && (A = f.y += _, f.line++, D = f.x = U(o, this.left + h, this.right - s[f.line])) : k > 0 && A + _ > this.bottom && (D = f.x = D + e[f.line].width + h, f.line++, A = f.y = U(o, this.top + y + h, this.bottom - e[f.line].height));
            const Y = l.x(D);
            if (b(Y, A, M), D = ia(w, D + g + u, v ? D + C : this.right, t.rtl), x(l.x(D), A, M), v) f.x += C + h; else if (typeof M.text != "string") {
                const J = c.lineHeight;
                f.y += ro(M, J) + h
            } else f.y += _
        }), In(this.ctx, t.textDirection)
    }

    drawTitle() {
        const t = this.options, e = t.title, s = j(e.font), n = q(e.padding);
        if (!e.display) return;
        const o = Vt(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = s.size / 2, c = n.top + l;
        let h, d = this.left, u = this.width;
        if (this.isHorizontal()) u = Math.max(...this.lineWidths), h = this.top + c, d = U(t.align, d, this.right - u); else {
            const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
            h = c + U(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight())
        }
        const f = U(r, d, d + u);
        a.textAlign = o.textAlign(Ci(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, Rt(a, e.text, f, h, s)
    }

    _computeTitleHeight() {
        const t = this.options.title, e = j(t.font), s = q(t.padding);
        return t.display ? e.lineHeight + s.height : 0
    }

    _getLegendItemAt(t, e) {
        let s, n, o;
        if (dt(t, this.left, this.right) && dt(e, this.top, this.bottom)) {
            for (o = this.legendHitBoxes, s = 0; s < o.length; ++s) if (n = o[s], dt(t, n.left, n.left + n.width) && dt(e, n.top, n.top + n.height)) return this.legendItems[s]
        }
        return null
    }

    handleEvent(t) {
        const e = this.options;
        if (!Uc(t.type, e)) return;
        const s = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
            const n = this._hoveredItem, o = jc(n, s);
            n && !o && E(e.onLeave, [t, n, this], this), this._hoveredItem = s, s && !o && E(e.onHover, [t, s, this], this)
        } else s && E(e.onClick, [t, s, this], this)
    }
}

function $c(i, t, e, s, n) {
    const o = Yc(s, i, t, e), a = Xc(n, s, t.lineHeight);
    return {itemWidth: o, itemHeight: a}
}

function Yc(i, t, e, s) {
    let n = i.text;
    return n && typeof n != "string" && (n = n.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + s.measureText(n).width
}

function Xc(i, t, e) {
    let s = i;
    return typeof t.text != "string" && (s = ro(t, e)), s
}

function ro(i, t) {
    const e = i.text ? i.text.length : 0;
    return t * e
}

function Uc(i, t) {
    return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"))
}

var Kc = {
    id: "legend",
    _element: Ys,
    start(i, t, e) {
        const s = i.legend = new Ys({ctx: i.ctx, options: e, chart: i});
        K.configure(i, s, e), K.addBox(i, s)
    },
    stop(i) {
        K.removeBox(i, i.legend), delete i.legend
    },
    beforeUpdate(i, t, e) {
        const s = i.legend;
        K.configure(i, s, e), s.options = e
    },
    afterUpdate(i) {
        const t = i.legend;
        t.buildLabels(), t.adjustHitBoxes()
    },
    afterEvent(i, t) {
        t.replay || i.legend.handleEvent(t.event)
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(i, t, e) {
            const s = t.datasetIndex, n = e.chart;
            n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1)
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: i => i.chart.options.color, boxWidth: 40, padding: 10, generateLabels(i) {
                const t = i.data.datasets, {
                    labels: {
                        usePointStyle: e,
                        pointStyle: s,
                        textAlign: n,
                        color: o,
                        useBorderRadius: a,
                        borderRadius: r
                    }
                } = i.legend.options;
                return i._getSortedDatasetMetas().map(l => {
                    const c = l.controller.getStyle(e ? 0 : void 0), h = q(c.borderWidth);
                    return {
                        text: t[l.index].label,
                        fillStyle: c.backgroundColor,
                        fontColor: o,
                        hidden: !l.visible,
                        lineCap: c.borderCapStyle,
                        lineDash: c.borderDash,
                        lineDashOffset: c.borderDashOffset,
                        lineJoin: c.borderJoinStyle,
                        lineWidth: (h.width + h.height) / 4,
                        strokeStyle: c.borderColor,
                        pointStyle: s || c.pointStyle,
                        rotation: c.rotation,
                        textAlign: n || c.textAlign,
                        borderRadius: a && (r || c.borderRadius),
                        datasetIndex: l.index
                    }
                }, this)
            }
        },
        title: {color: i => i.chart.options.color, display: !1, position: "center", text: ""}
    },
    descriptors: {
        _scriptable: i => !i.startsWith("on"),
        labels: {_scriptable: i => !["generateLabels", "filter", "sort"].includes(i)}
    }
};

class zi extends gt {
    constructor(t) {
        super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
    }

    update(t, e) {
        const s = this.options;
        if (this.left = 0, this.top = 0, !s.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return
        }
        this.width = this.right = t, this.height = this.bottom = e;
        const n = F(s.text) ? s.text.length : 1;
        this._padding = q(s.padding);
        const o = n * j(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o
    }

    isHorizontal() {
        const t = this.options.position;
        return t === "top" || t === "bottom"
    }

    _drawArgs(t) {
        const {top: e, left: s, bottom: n, right: o, options: a} = this, r = a.align;
        let l = 0, c, h, d;
        return this.isHorizontal() ? (h = U(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = U(r, n, e), l = z * -.5) : (h = o - t, d = U(r, e, n), l = z * .5), c = n - e), {
            titleX: h,
            titleY: d,
            maxWidth: c,
            rotation: l
        }
    }

    draw() {
        const t = this.ctx, e = this.options;
        if (!e.display) return;
        const s = j(e.font), o = s.lineHeight / 2 + this._padding.top, {
            titleX: a,
            titleY: r,
            maxWidth: l,
            rotation: c
        } = this._drawArgs(o);
        Rt(t, e.text, 0, 0, s, {
            color: e.color,
            maxWidth: l,
            rotation: c,
            textAlign: Ci(e.align),
            textBaseline: "middle",
            translation: [a, r]
        })
    }
}

function qc(i, t) {
    const e = new zi({ctx: i.ctx, options: t, chart: i});
    K.configure(i, e, t), K.addBox(i, e), i.titleBlock = e
}

var Gc = {
    id: "title",
    _element: zi,
    start(i, t, e) {
        qc(i, e)
    },
    stop(i) {
        const t = i.titleBlock;
        K.removeBox(i, t), delete i.titleBlock
    },
    beforeUpdate(i, t, e) {
        const s = i.titleBlock;
        K.configure(i, s, e), s.options = e
    },
    defaults: {
        align: "center",
        display: !1,
        font: {weight: "bold"},
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
    },
    defaultRoutes: {color: "color"},
    descriptors: {_scriptable: !0, _indexable: !1}
};
const Oe = new WeakMap;
var Zc = {
    id: "subtitle",
    start(i, t, e) {
        const s = new zi({ctx: i.ctx, options: e, chart: i});
        K.configure(i, s, e), K.addBox(i, s), Oe.set(i, s)
    },
    stop(i) {
        K.removeBox(i, Oe.get(i)), Oe.delete(i)
    },
    beforeUpdate(i, t, e) {
        const s = Oe.get(i);
        K.configure(i, s, e), s.options = e
    },
    defaults: {
        align: "center",
        display: !1,
        font: {weight: "normal"},
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {color: "color"},
    descriptors: {_scriptable: !0, _indexable: !1}
};
const ee = {
    average(i) {
        if (!i.length) return !1;
        let t, e, s = 0, n = 0, o = 0;
        for (t = 0, e = i.length; t < e; ++t) {
            const a = i[t].element;
            if (a && a.hasValue()) {
                const r = a.tooltipPosition();
                s += r.x, n += r.y, ++o
            }
        }
        return {x: s / o, y: n / o}
    }, nearest(i, t) {
        if (!i.length) return !1;
        let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, a, r;
        for (o = 0, a = i.length; o < a; ++o) {
            const l = i[o].element;
            if (l && l.hasValue()) {
                const c = l.getCenterPoint(), h = di(t, c);
                h < n && (n = h, r = l)
            }
        }
        if (r) {
            const l = r.tooltipPosition();
            e = l.x, s = l.y
        }
        return {x: e, y: s}
    }
};

function nt(i, t) {
    return t && (F(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i
}

function ct(i) {
    return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i
}

function Jc(i, t) {
    const {element: e, datasetIndex: s, index: n} = t, o = i.getDatasetMeta(s).controller, {
        label: a,
        value: r
    } = o.getLabelAndValue(n);
    return {
        chart: i,
        label: a,
        parsed: o.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: r,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e
    }
}

function Xs(i, t) {
    const e = i.chart.ctx, {body: s, footer: n, title: o} = i, {boxWidth: a, boxHeight: r} = t, l = j(t.bodyFont),
        c = j(t.titleFont), h = j(t.footerFont), d = o.length, u = n.length, f = s.length, g = q(t.padding);
    let p = g.height, m = 0, b = s.reduce((y, _) => y + _.before.length + _.lines.length + _.after.length, 0);
    if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
        const y = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
        p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing
    }
    u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
    let x = 0;
    const v = function (y) {
        m = Math.max(m, e.measureText(y).width + x)
    };
    return e.save(), e.font = c.string, T(i.title, v), e.font = l.string, T(i.beforeBody.concat(i.afterBody), v), x = t.displayColors ? a + 2 + t.boxPadding : 0, T(s, y => {
        T(y.before, v), T(y.lines, v), T(y.after, v)
    }), x = 0, e.font = h.string, T(i.footer, v), e.restore(), m += g.width, {width: m, height: p}
}

function Qc(i, t) {
    const {y: e, height: s} = t;
    return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center"
}

function th(i, t, e, s) {
    const {x: n, width: o} = s, a = e.caretSize + e.caretPadding;
    if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0) return !0
}

function eh(i, t, e, s) {
    const {x: n, width: o} = e, {width: a, chartArea: {left: r, right: l}} = i;
    let c = "center";
    return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), th(c, i, t, e) && (c = "center"), c
}

function Us(i, t, e) {
    const s = e.yAlign || t.yAlign || Qc(i, e);
    return {xAlign: e.xAlign || t.xAlign || eh(i, t, e, s), yAlign: s}
}

function ih(i, t) {
    let {x: e, width: s} = i;
    return t === "right" ? e -= s : t === "center" && (e -= s / 2), e
}

function sh(i, t, e) {
    let {y: s, height: n} = i;
    return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s
}

function Ks(i, t, e, s) {
    const {caretSize: n, caretPadding: o, cornerRadius: a} = i, {xAlign: r, yAlign: l} = e, c = n + o, {
        topLeft: h,
        topRight: d,
        bottomLeft: u,
        bottomRight: f
    } = At(a);
    let g = ih(t, r);
    const p = sh(t, l, c);
    return l === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(h, u) + n : r === "right" && (g += Math.max(d, f) + n), {
        x: $(g, 0, s.width - t.width),
        y: $(p, 0, s.height - t.height)
    }
}

function Ae(i, t, e) {
    const s = q(e.padding);
    return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left
}

function qs(i) {
    return nt([], ct(i))
}

function nh(i, t, e) {
    return Mt(i, {tooltip: t, tooltipItems: e, type: "tooltip"})
}

function Gs(i, t) {
    const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i
}

const lo = {
    beforeTitle: rt, title(i) {
        if (i.length > 0) {
            const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
            if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
            if (t.label) return t.label;
            if (s > 0 && t.dataIndex < s) return e[t.dataIndex]
        }
        return ""
    }, afterTitle: rt, beforeBody: rt, beforeLabel: rt, label(i) {
        if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
        let t = i.dataset.label || "";
        t && (t += ": ");
        const e = i.formattedValue;
        return L(e) || (t += e), t
    }, labelColor(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
        }
    }, labelTextColor() {
        return this.options.bodyColor
    }, labelPointStyle(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {pointStyle: e.pointStyle, rotation: e.rotation}
    }, afterLabel: rt, afterBody: rt, beforeFooter: rt, footer: rt, afterFooter: rt
};

function G(i, t, e, s) {
    const n = i[t].call(e, s);
    return typeof n > "u" ? lo[t].call(e, s) : n
}

class Zs extends gt {
    static positioners = ee;

    constructor(t) {
        super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
    }

    initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0
    }

    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const e = this.chart, s = this.options.setContext(this.getContext()),
            n = s.enabled && e.options.animation && s.animations, o = new Wn(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o
    }

    getContext() {
        return this.$context || (this.$context = nh(this.chart.getContext(), this, this._tooltipItems))
    }

    getTitle(t, e) {
        const {callbacks: s} = e, n = G(s, "beforeTitle", this, t), o = G(s, "title", this, t),
            a = G(s, "afterTitle", this, t);
        let r = [];
        return r = nt(r, ct(n)), r = nt(r, ct(o)), r = nt(r, ct(a)), r
    }

    getBeforeBody(t, e) {
        return qs(G(e.callbacks, "beforeBody", this, t))
    }

    getBody(t, e) {
        const {callbacks: s} = e, n = [];
        return T(t, o => {
            const a = {before: [], lines: [], after: []}, r = Gs(s, o);
            nt(a.before, ct(G(r, "beforeLabel", this, o))), nt(a.lines, G(r, "label", this, o)), nt(a.after, ct(G(r, "afterLabel", this, o))), n.push(a)
        }), n
    }

    getAfterBody(t, e) {
        return qs(G(e.callbacks, "afterBody", this, t))
    }

    getFooter(t, e) {
        const {callbacks: s} = e, n = G(s, "beforeFooter", this, t), o = G(s, "footer", this, t),
            a = G(s, "afterFooter", this, t);
        let r = [];
        return r = nt(r, ct(n)), r = nt(r, ct(o)), r = nt(r, ct(a)), r
    }

    _createItems(t) {
        const e = this._active, s = this.chart.data, n = [], o = [], a = [];
        let r = [], l, c;
        for (l = 0, c = e.length; l < c; ++l) r.push(Jc(this.chart, e[l]));
        return t.filter && (r = r.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (r = r.sort((h, d) => t.itemSort(h, d, s))), T(r, h => {
            const d = Gs(t.callbacks, h);
            n.push(G(d, "labelColor", this, h)), o.push(G(d, "labelPointStyle", this, h)), a.push(G(d, "labelTextColor", this, h))
        }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r
    }

    update(t, e) {
        const s = this.options.setContext(this.getContext()), n = this._active;
        let o, a = [];
        if (!n.length) this.opacity !== 0 && (o = {opacity: 0}); else {
            const r = ee[s.position].call(this, n, this._eventPosition);
            a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
            const l = this._size = Xs(this, s), c = Object.assign({}, r, l), h = Us(this.chart, s, c),
                d = Ks(s, c, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
                opacity: 1,
                x: d.x,
                y: d.y,
                width: l.width,
                height: l.height,
                caretX: r.x,
                caretY: r.y
            }
        }
        this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e
        })
    }

    drawCaret(t, e, s, n) {
        const o = this.getCaretPosition(t, s, n);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
    }

    getCaretPosition(t, e, s) {
        const {xAlign: n, yAlign: o} = this, {caretSize: a, cornerRadius: r} = s, {
            topLeft: l,
            topRight: c,
            bottomLeft: h,
            bottomRight: d
        } = At(r), {x: u, y: f} = t, {width: g, height: p} = e;
        let m, b, x, v, y, _;
        return o === "center" ? (y = f + p / 2, n === "left" ? (m = u, b = m - a, v = y + a, _ = y - a) : (m = u + g, b = m + a, v = y - a, _ = y + a), x = m) : (n === "left" ? b = u + Math.max(l, h) + a : n === "right" ? b = u + g - Math.max(c, d) - a : b = this.caretX, o === "top" ? (v = f, y = v - a, m = b - a, x = b + a) : (v = f + p, y = v + a, m = b + a, x = b - a), _ = v), {
            x1: m,
            x2: b,
            x3: x,
            y1: v,
            y2: y,
            y3: _
        }
    }

    drawTitle(t, e, s) {
        const n = this.title, o = n.length;
        let a, r, l;
        if (o) {
            const c = Vt(s.rtl, this.x, this.width);
            for (t.x = Ae(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = j(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l) e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += s.titleMarginBottom - r)
        }
    }

    _drawColorBox(t, e, s, n, o) {
        const a = this.labelColors[s], r = this.labelPointStyles[s], {boxHeight: l, boxWidth: c} = o, h = j(o.bodyFont),
            d = Ae(this, "left", o), u = n.x(d), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + f;
        if (o.usePointStyle) {
            const p = {radius: Math.min(c, l) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1},
                m = n.leftForLtr(u, c) + c / 2, b = g + l / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, fi(t, p, m, b), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, fi(t, p, m, b)
        } else {
            t.lineWidth = O(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
            const p = n.leftForLtr(u, c), m = n.leftForLtr(n.xPlus(u, 1), c - 2), b = At(a.borderRadius);
            Object.values(b).some(x => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, he(t, {
                x: p,
                y: g,
                w: c,
                h: l,
                radius: b
            }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), he(t, {
                x: m,
                y: g + 1,
                w: c - 2,
                h: l - 2,
                radius: b
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2))
        }
        t.fillStyle = this.labelTextColors[s]
    }

    drawBody(t, e, s) {
        const {body: n} = this, {
            bodySpacing: o,
            bodyAlign: a,
            displayColors: r,
            boxHeight: l,
            boxWidth: c,
            boxPadding: h
        } = s, d = j(s.bodyFont);
        let u = d.lineHeight, f = 0;
        const g = Vt(s.rtl, this.x, this.width), p = function (S) {
            e.fillText(S, g.x(t.x + f), t.y + u / 2), t.y += u + o
        }, m = g.textAlign(a);
        let b, x, v, y, _, M, k;
        for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Ae(this, m, s), e.fillStyle = s.bodyColor, T(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, M = n.length; y < M; ++y) {
            for (b = n[y], x = this.labelTextColors[y], e.fillStyle = x, T(b.before, p), v = b.lines, r && v.length && (this._drawColorBox(e, t, y, g, s), u = Math.max(d.lineHeight, l)), _ = 0, k = v.length; _ < k; ++_) p(v[_]), u = d.lineHeight;
            T(b.after, p)
        }
        f = 0, u = d.lineHeight, T(this.afterBody, p), t.y -= o
    }

    drawFooter(t, e, s) {
        const n = this.footer, o = n.length;
        let a, r;
        if (o) {
            const l = Vt(s.rtl, this.x, this.width);
            for (t.x = Ae(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = j(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r) e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing
        }
    }

    drawBackground(t, e, s, n) {
        const {xAlign: o, yAlign: a} = this, {x: r, y: l} = t, {width: c, height: h} = s, {
            topLeft: d,
            topRight: u,
            bottomLeft: f,
            bottomRight: g
        } = At(n.cornerRadius);
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l), e.quadraticCurveTo(r + c, l, r + c, l + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h - g), e.quadraticCurveTo(r + c, l + h, r + c - g, l + h), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l + h), e.quadraticCurveTo(r, l + h, r, l + h - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
    }

    _updateAnimationTarget(t) {
        const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
        if (n || o) {
            const a = ee[t.position].call(this, this._active, this._eventPosition);
            if (!a) return;
            const r = this._size = Xs(this, t), l = Object.assign({}, a, this._size), c = Us(e, t, l),
                h = Ks(t, l, c, e);
            (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h))
        }
    }

    _willRender() {
        return !!this.opacity
    }

    draw(t) {
        const e = this.options.setContext(this.getContext());
        let s = this.opacity;
        if (!s) return;
        this._updateAnimationTarget(e);
        const n = {width: this.width, height: this.height}, o = {x: this.x, y: this.y};
        s = Math.abs(s) < .001 ? 0 : s;
        const a = q(e.padding),
            r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Fn(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), In(t, e.textDirection), t.restore())
    }

    getActiveElements() {
        return this._active || []
    }

    setActiveElements(t, e) {
        const s = this._active, n = t.map(({datasetIndex: r, index: l}) => {
            const c = this.chart.getDatasetMeta(r);
            if (!c) throw new Error("Cannot find a dataset at index " + r);
            return {datasetIndex: r, element: c.data[l], index: l}
        }), o = !Fe(s, n), a = this._positionChanged(n, e);
        (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
    }

    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s),
            r = this._positionChanged(a, t), l = e || !Fe(a, o) || r;
        return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
            x: t.x,
            y: t.y
        }, this.update(!0, e))), l
    }

    _getActiveElements(t, e, s, n) {
        const o = this.options;
        if (t.type === "mouseout") return [];
        if (!n) return e;
        const a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
        return o.reverse && a.reverse(), a
    }

    _positionChanged(t, e) {
        const {caretX: s, caretY: n, options: o} = this, a = ee[o.position].call(this, t, e);
        return a !== !1 && (s !== a.x || n !== a.y)
    }
}

var oh = {
    id: "tooltip",
    _element: Zs,
    positioners: ee,
    afterInit(i, t, e) {
        e && (i.tooltip = new Zs({chart: i, options: e}))
    },
    beforeUpdate(i, t, e) {
        i.tooltip && i.tooltip.initialize(e)
    },
    reset(i, t, e) {
        i.tooltip && i.tooltip.initialize(e)
    },
    afterDraw(i) {
        const t = i.tooltip;
        if (t && t._willRender()) {
            const e = {tooltip: t};
            if (i.notifyPlugins("beforeTooltipDraw", {...e, cancelable: !0}) === !1) return;
            t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e)
        }
    },
    afterEvent(i, t) {
        if (i.tooltip) {
            const e = t.replay;
            i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {weight: "bold"},
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {weight: "bold"},
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (i, t) => t.bodyFont.size,
        boxWidth: (i, t) => t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {duration: 400, easing: "easeOutQuart"},
        animations: {
            numbers: {type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"]},
            opacity: {easing: "linear", duration: 200}
        },
        callbacks: lo
    },
    defaultRoutes: {bodyFont: "font", footerFont: "font", titleFont: "font"},
    descriptors: {
        _scriptable: i => i !== "filter" && i !== "itemSort" && i !== "external",
        _indexable: !1,
        callbacks: {_scriptable: !1, _indexable: !1},
        animation: {_fallback: !1},
        animations: {_fallback: "animation"}
    },
    additionalOptionScopes: ["interaction"]
}, ah = Object.freeze({
    __proto__: null,
    Colors: xc,
    Decimation: Mc,
    Filler: Hc,
    Legend: Kc,
    SubTitle: Zc,
    Title: Gc,
    Tooltip: oh
});
const rh = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
    index: e,
    label: t
})) : isNaN(t) && (e = null), e);

function lh(i, t, e, s) {
    const n = i.indexOf(t);
    if (n === -1) return rh(i, t, e, s);
    const o = i.lastIndexOf(t);
    return n !== o ? e : n
}

const ch = (i, t) => i === null ? null : $(Math.round(i), 0, t);

function Js(i) {
    const t = this.getLabels();
    return i >= 0 && i < t.length ? t[i] : i
}

class hh extends Et {
    static id = "category";
    static defaults = {ticks: {callback: Js}};

    constructor(t) {
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
    }

    init(t) {
        const e = this._addedLabels;
        if (e.length) {
            const s = this.getLabels();
            for (const {index: n, label: o} of e) s[n] === o && s.splice(n, 1);
            this._addedLabels = []
        }
        super.init(t)
    }

    parse(t, e) {
        if (L(t)) return null;
        const s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : lh(s, t, P(e, t), this._addedLabels), ch(e, s.length - 1)
    }

    determineDataLimits() {
        const {minDefined: t, maxDefined: e} = this.getUserBounds();
        let {min: s, max: n} = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n
    }

    buildTicks() {
        const t = this.min, e = this.max, s = this.options.offset, n = [];
        let o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? .5 : 0);
        for (let a = t; a <= e; a++) n.push({value: a});
        return n
    }

    getLabelForValue(t) {
        return Js.call(this, t)
    }

    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
    }

    getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }

    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }

    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
    }

    getBasePixel() {
        return this.bottom
    }
}

function dh(i, t) {
    const e = [], {
        bounds: n,
        step: o,
        min: a,
        max: r,
        precision: l,
        count: c,
        maxTicks: h,
        maxDigits: d,
        includeBounds: u
    } = i, f = o || 1, g = h - 1, {min: p, max: m} = t, b = !L(a), x = !L(r), v = !L(c), y = (m - p) / (d + 1);
    let _ = Yi((m - p) / g / f) * f, M, k, S, w;
    if (_ < 1e-14 && !b && !x) return [{value: p}, {value: m}];
    w = Math.ceil(m / _) - Math.floor(p / _), w > g && (_ = Yi(w * _ / g / f) * f), L(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), n === "ticks" ? (k = Math.floor(p / _) * _, S = Math.ceil(m / _) * _) : (k = p, S = m), b && x && o && qo((r - a) / o, _ / 1e3) ? (w = Math.round(Math.min((r - a) / _, h)), _ = (r - a) / w, k = a, S = r) : v ? (k = b ? a : k, S = x ? r : S, w = c - 1, _ = (S - k) / w) : (w = (S - k) / _, se(w, Math.round(w), _ / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
    const C = Math.max(Xi(_), Xi(k));
    M = Math.pow(10, L(l) ? C : l), k = Math.round(k * M) / M, S = Math.round(S * M) / M;
    let D = 0;
    for (b && (u && k !== a ? (e.push({value: a}), k < a && D++, se(Math.round((k + D * _) * M) / M, a, Qs(a, y, i)) && D++) : k < a && D++); D < w; ++D) {
        const A = Math.round((k + D * _) * M) / M;
        if (x && A > r) break;
        e.push({value: A})
    }
    return x && u && S !== r ? e.length && se(e[e.length - 1].value, r, Qs(r, y, i)) ? e[e.length - 1].value = r : e.push({value: r}) : (!x || S === r) && e.push({value: S}), e
}

function Qs(i, t, {horizontal: e, minRotation: s}) {
    const n = st(s), o = (e ? Math.sin(n) : Math.cos(n)) || .001, a = .75 * t * ("" + i).length;
    return Math.min(t / o, a)
}

class He extends Et {
    constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
    }

    parse(t, e) {
        return L(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
    }

    handleTickRangeOptions() {
        const {beginAtZero: t} = this.options, {minDefined: e, maxDefined: s} = this.getUserBounds();
        let {min: n, max: o} = this;
        const a = l => n = e ? n : l, r = l => o = s ? o : l;
        if (t) {
            const l = at(n), c = at(o);
            l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0)
        }
        if (n === o) {
            let l = o === 0 ? 1 : Math.abs(o * .05);
            r(o + l), t || a(n - l)
        }
        this.min = n, this.max = o
    }

    getTickLimit() {
        const t = this.options.ticks;
        let {maxTicksLimit: e, stepSize: s} = t, n;
        return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n
    }

    computeTickLimit() {
        return Number.POSITIVE_INFINITY
    }

    buildTicks() {
        const t = this.options, e = t.ticks;
        let s = this.getTickLimit();
        s = Math.max(2, s);
        const n = {
            maxTicks: s,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: e.includeBounds !== !1
        }, o = this._range || this, a = dh(n, o);
        return t.bounds === "ticks" && bn(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a
    }

    configure() {
        const t = this.ticks;
        let e = this.min, s = this.max;
        if (super.configure(), this.options.offset && t.length) {
            const n = (s - e) / Math.max(t.length - 1, 1) / 2;
            e -= n, s += n
        }
        this._startValue = e, this._endValue = s, this._valueRange = s - e
    }

    getLabelForValue(t) {
        return ge(t, this.chart.options.locale, this.options.ticks.format)
    }
}

class uh extends He {
    static id = "linear";
    static defaults = {ticks: {callback: $e.formatters.numeric}};

    determineDataLimits() {
        const {min: t, max: e} = this.getMinMax(!0);
        this.min = V(t) ? t : 0, this.max = V(e) ? e : 1, this.handleTickRangeOptions()
    }

    computeTickLimit() {
        const t = this.isHorizontal(), e = t ? this.width : this.height, s = st(this.options.ticks.minRotation),
            n = (t ? Math.sin(s) : Math.cos(s)) || .001, o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / n))
    }

    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }

    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
    }
}

const ue = i => Math.floor(bt(i)), Ct = (i, t) => Math.pow(10, ue(i) + t);

function tn(i) {
    return i / Math.pow(10, ue(i)) === 1
}

function en(i, t, e) {
    const s = Math.pow(10, e), n = Math.floor(i / s);
    return Math.ceil(t / s) - n
}

function fh(i, t) {
    const e = t - i;
    let s = ue(e);
    for (; en(i, t, s) > 10;) s++;
    for (; en(i, t, s) < 10;) s--;
    return Math.min(s, ue(i))
}

function gh(i, {min: t, max: e}) {
    t = Q(i.min, t);
    const s = [], n = ue(t);
    let o = fh(t, e), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const r = Math.pow(10, o), l = n > o ? Math.pow(10, n) : 0, c = Math.round((t - l) * a) / a,
        h = Math.floor((t - l) / r / 10) * r * 10;
    let d = Math.floor((c - h) / Math.pow(10, o)), u = Q(i.min, Math.round((l + h + d * Math.pow(10, o)) * a) / a);
    for (; u < e;) s.push({
        value: u,
        major: tn(u),
        significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, a = o >= 0 ? 1 : a), u = Math.round((l + h + d * Math.pow(10, o)) * a) / a;
    const f = Q(i.max, u);
    return s.push({value: f, major: tn(f), significand: d}), s
}

class ph extends Et {
    static id = "logarithmic";
    static defaults = {ticks: {callback: $e.formatters.logarithmic, major: {enabled: !0}}};

    constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
    }

    parse(t, e) {
        const s = He.prototype.parse.apply(this, [t, e]);
        if (s === 0) {
            this._zero = !0;
            return
        }
        return V(s) && s > 0 ? s : null
    }

    determineDataLimits() {
        const {min: t, max: e} = this.getMinMax(!0);
        this.min = V(t) ? Math.max(0, t) : null, this.max = V(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !V(this._userMin) && (this.min = t === Ct(this.min, 0) ? Ct(this.min, -1) : Ct(this.min, 0)), this.handleTickRangeOptions()
    }

    handleTickRangeOptions() {
        const {minDefined: t, maxDefined: e} = this.getUserBounds();
        let s = this.min, n = this.max;
        const o = r => s = t ? s : r, a = r => n = e ? n : r;
        s === n && (s <= 0 ? (o(1), a(10)) : (o(Ct(s, -1)), a(Ct(n, 1)))), s <= 0 && o(Ct(n, -1)), n <= 0 && a(Ct(s, 1)), this.min = s, this.max = n
    }

    buildTicks() {
        const t = this.options, e = {min: this._userMin, max: this._userMax}, s = gh(e, this);
        return t.bounds === "ticks" && bn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
    }

    getLabelForValue(t) {
        return t === void 0 ? "0" : ge(t, this.chart.options.locale, this.options.ticks.format)
    }

    configure() {
        const t = this.min;
        super.configure(), this._startValue = bt(t), this._valueRange = bt(this.max) - bt(t)
    }

    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (bt(t) - this._startValue) / this._valueRange)
    }

    getValueForPixel(t) {
        const e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange)
    }
}

function _i(i) {
    const t = i.ticks;
    if (t.display && i.display) {
        const e = q(t.backdropPadding);
        return P(t.font && t.font.size, W.font.size) + e.height
    }
    return 0
}

function mh(i, t, e) {
    return e = F(e) ? e : [e], {w: ua(i, t.string, e), h: e.length * t.lineHeight}
}

function sn(i, t, e, s, n) {
    return i === s || i === n ? {start: t - e / 2, end: t + e / 2} : i < s || i > n ? {
        start: t - e,
        end: t
    } : {start: t, end: t + e}
}

function bh(i) {
    const t = {
            l: i.left + i._padding.left,
            r: i.right - i._padding.right,
            t: i.top + i._padding.top,
            b: i.bottom - i._padding.bottom
        }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, a = i.options.pointLabels,
        r = a.centerPointLabels ? z / o : 0;
    for (let l = 0; l < o; l++) {
        const c = a.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        const h = i.getPointPosition(l, i.drawingArea + n[l], r), d = j(c.font), u = mh(i.ctx, d, i._pointLabels[l]);
        s[l] = u;
        const f = tt(i.getIndexAngle(l) + r), g = Math.round(wi(f)), p = sn(g, h.x, u.w, 0, 180),
            m = sn(g, h.y, u.h, 90, 270);
        xh(e, t, f, p, m)
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = vh(i, s, n)
}

function xh(i, t, e, s, n) {
    const o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e));
    let r = 0, l = 0;
    s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)), n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l))
}

function _h(i, t, e) {
    const s = i.drawingArea, {extra: n, additionalAngle: o, padding: a, size: r} = e,
        l = i.getPointPosition(t, s + n + a, o), c = Math.round(wi(tt(l.angle + H))), h = Sh(l.y, r.h, c), d = Mh(c),
        u = kh(l.x, r.w, d);
    return {visible: !0, x: l.x, y: h, textAlign: d, left: u, top: h, right: u + r.w, bottom: h + r.h}
}

function yh(i, t) {
    if (!t) return !0;
    const {left: e, top: s, right: n, bottom: o} = i;
    return !(ft({x: e, y: s}, t) || ft({x: e, y: o}, t) || ft({x: n, y: s}, t) || ft({x: n, y: o}, t))
}

function vh(i, t, e) {
    const s = [], n = i._pointLabels.length, o = i.options, {centerPointLabels: a, display: r} = o.pointLabels,
        l = {extra: _i(o) / 2, additionalAngle: a ? z / n : 0};
    let c;
    for (let h = 0; h < n; h++) {
        l.padding = e[h], l.size = t[h];
        const d = _h(i, h, l);
        s.push(d), r === "auto" && (d.visible = yh(d, c), d.visible && (c = d))
    }
    return s
}

function Mh(i) {
    return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right"
}

function kh(i, t, e) {
    return e === "right" ? i -= t : e === "center" && (i -= t / 2), i
}

function Sh(i, t, e) {
    return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i
}

function wh(i, t, e) {
    const {left: s, top: n, right: o, bottom: a} = e, {backdropColor: r} = t;
    if (!L(r)) {
        const l = At(t.borderRadius), c = q(t.backdropPadding);
        i.fillStyle = r;
        const h = s - c.left, d = n - c.top, u = o - s + c.width, f = a - n + c.height;
        Object.values(l).some(g => g !== 0) ? (i.beginPath(), he(i, {
            x: h,
            y: d,
            w: u,
            h: f,
            radius: l
        }), i.fill()) : i.fillRect(h, d, u, f)
    }
}

function Ph(i, t) {
    const {ctx: e, options: {pointLabels: s}} = i;
    for (let n = t - 1; n >= 0; n--) {
        const o = i._pointLabelItems[n];
        if (!o.visible) continue;
        const a = s.setContext(i.getPointLabelContext(n));
        wh(e, a, o);
        const r = j(a.font), {x: l, y: c, textAlign: h} = o;
        Rt(e, i._pointLabels[n], l, c + r.lineHeight / 2, r, {color: a.color, textAlign: h, textBaseline: "middle"})
    }
}

function co(i, t, e, s) {
    const {ctx: n} = i;
    if (e) n.arc(i.xCenter, i.yCenter, t, 0, I); else {
        let o = i.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for (let a = 1; a < s; a++) o = i.getPointPosition(a, t), n.lineTo(o.x, o.y)
    }
}

function Ch(i, t, e, s, n) {
    const o = i.ctx, a = t.circular, {color: r, lineWidth: l} = t;
    !a && !s || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), co(i, e, a, s), o.closePath(), o.stroke(), o.restore())
}

function Dh(i, t, e) {
    return Mt(i, {label: e, index: t, type: "pointLabel"})
}

class Oh extends He {
    static id = "radialLinear";
    static defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0},
        grid: {circular: !1},
        startAngle: 0,
        ticks: {showLabelBackdrop: !0, callback: $e.formatters.numeric},
        pointLabels: {
            backdropColor: void 0, backdropPadding: 2, display: !0, font: {size: 10}, callback(t) {
                return t
            }, padding: 5, centerPointLabels: !1
        }
    };
    static defaultRoutes = {"angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color"};
    static descriptors = {angleLines: {_fallback: "grid"}};

    constructor(t) {
        super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
    }

    setDimensions() {
        const t = this._padding = q(_i(this.options) / 2), e = this.width = this.maxWidth - t.width,
            s = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2)
    }

    determineDataLimits() {
        const {min: t, max: e} = this.getMinMax(!1);
        this.min = V(t) && !isNaN(t) ? t : 0, this.max = V(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
    }

    computeTickLimit() {
        return Math.ceil(this.drawingArea / _i(this.options))
    }

    generateTickLabels(t) {
        He.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
            const n = E(this.options.pointLabels.callback, [e, s], this);
            return n || n === 0 ? n : ""
        }).filter((e, s) => this.chart.getDataVisibility(s))
    }

    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? bh(this) : this.setCenterPoint(0, 0, 0, 0)
    }

    setCenterPoint(t, e, s, n) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n))
    }

    getIndexAngle(t) {
        const e = I / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
        return tt(t * e + st(s))
    }

    getDistanceFromCenterForValue(t) {
        if (L(t)) return NaN;
        const e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
    }

    getValueForDistanceFromCenter(t) {
        if (L(t)) return NaN;
        const e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e
    }

    getPointLabelContext(t) {
        const e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return Dh(this.getContext(), t, s)
        }
    }

    getPointPosition(t, e, s = 0) {
        const n = this.getIndexAngle(t) - H + s;
        return {x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter, angle: n}
    }

    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
    }

    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue())
    }

    getPointLabelPosition(t) {
        const {left: e, top: s, right: n, bottom: o} = this._pointLabelItems[t];
        return {left: e, top: s, right: n, bottom: o}
    }

    drawBackground() {
        const {backgroundColor: t, grid: {circular: e}} = this.options;
        if (t) {
            const s = this.ctx;
            s.save(), s.beginPath(), co(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore()
        }
    }

    drawGrid() {
        const t = this.ctx, e = this.options, {angleLines: s, grid: n, border: o} = e, a = this._pointLabels.length;
        let r, l, c;
        if (e.pointLabels.display && Ph(this, a), n.display && this.ticks.forEach((h, d) => {
            if (d !== 0) {
                l = this.getDistanceFromCenterForValue(h.value);
                const u = this.getContext(d), f = n.setContext(u), g = o.setContext(u);
                Ch(this, f, l, a, g)
            }
        }), s.display) {
            for (t.save(), r = a - 1; r >= 0; r--) {
                const h = s.setContext(this.getPointLabelContext(r)), {color: d, lineWidth: u} = h;
                !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
            }
            t.restore()
        }
    }

    drawBorder() {
    }

    drawLabels() {
        const t = this.ctx, e = this.options, s = e.ticks;
        if (!s.display) return;
        const n = this.getIndexAngle(0);
        let o, a;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l) => {
            if (l === 0 && !e.reverse) return;
            const c = s.setContext(this.getContext(l)), h = j(c.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                t.font = h.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
                const d = q(c.backdropPadding);
                t.fillRect(-a / 2 - d.left, -o - h.size / 2 - d.top, a + d.width, h.size + d.height)
            }
            Rt(t, r.label, 0, -o, h, {color: c.color, strokeColor: c.textStrokeColor, strokeWidth: c.textStrokeWidth})
        }), t.restore()
    }

    drawTitle() {
    }
}

const qe = {
    millisecond: {common: !0, size: 1, steps: 1e3},
    second: {common: !0, size: 1e3, steps: 60},
    minute: {common: !0, size: 6e4, steps: 60},
    hour: {common: !0, size: 36e5, steps: 24},
    day: {common: !0, size: 864e5, steps: 30},
    week: {common: !1, size: 6048e5, steps: 4},
    month: {common: !0, size: 2628e6, steps: 12},
    quarter: {common: !1, size: 7884e6, steps: 4},
    year: {common: !0, size: 3154e7}
}, Z = Object.keys(qe);

function nn(i, t) {
    return i - t
}

function on(i, t) {
    if (L(t)) return null;
    const e = i._adapter, {parser: s, round: n, isoWeekday: o} = i._parseOpts;
    let a = t;
    return typeof s == "function" && (a = s(a)), V(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (Wt(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a)
}

function an(i, t, e, s) {
    const n = Z.length;
    for (let o = Z.indexOf(i); o < n - 1; ++o) {
        const a = qe[Z[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
        if (a.common && Math.ceil((e - t) / (r * a.size)) <= s) return Z[o]
    }
    return Z[n - 1]
}

function Ah(i, t, e, s, n) {
    for (let o = Z.length - 1; o >= Z.indexOf(e); o--) {
        const a = Z[o];
        if (qe[a].common && i._adapter.diff(n, s, a) >= t - 1) return a
    }
    return Z[e ? Z.indexOf(e) : 0]
}

function Lh(i) {
    for (let t = Z.indexOf(i) + 1, e = Z.length; t < e; ++t) if (qe[Z[t]].common) return Z[t]
}

function rn(i, t, e) {
    if (!e) i[t] = !0; else if (e.length) {
        const {lo: s, hi: n} = Pi(e, t), o = e[s] >= t ? e[s] : e[n];
        i[o] = !0
    }
}

function Th(i, t, e, s) {
    const n = i._adapter, o = +n.startOf(t[0].value, s), a = t[t.length - 1].value;
    let r, l;
    for (r = o; r <= a; r = +n.add(r, 1, s)) l = e[r], l >= 0 && (t[l].major = !0);
    return t
}

function ln(i, t, e) {
    const s = [], n = {}, o = t.length;
    let a, r;
    for (a = 0; a < o; ++a) r = t[a], n[r] = a, s.push({value: r, major: !1});
    return o === 0 || !e ? s : Th(i, s, n, e)
}

class yi extends Et {
    static id = "time";
    static defaults = {
        bounds: "data",
        adapters: {},
        time: {parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {}},
        ticks: {source: "auto", callback: !1, major: {enabled: !1}}
    };

    constructor(t) {
        super(t), this._cache = {
            data: [],
            labels: [],
            all: []
        }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
    }

    init(t, e = {}) {
        const s = t.time || (t.time = {}), n = this._adapter = new Er._date(t.adapters.date);
        n.init(e), ie(s.displayFormats, n.formats()), this._parseOpts = {
            parser: s.parser,
            round: s.round,
            isoWeekday: s.isoWeekday
        }, super.init(t), this._normalized = e.normalized
    }

    parse(t, e) {
        return t === void 0 ? null : on(this, t)
    }

    beforeLayout() {
        super.beforeLayout(), this._cache = {data: [], labels: [], all: []}
    }

    determineDataLimits() {
        const t = this.options, e = this._adapter, s = t.time.unit || "day";
        let {min: n, max: o, minDefined: a, maxDefined: r} = this.getUserBounds();

        function l(c) {
            !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max))
        }

        (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = V(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = V(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
    }

    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s = t[t.length - 1]), {min: e, max: s}
    }

    buildTicks() {
        const t = this.options, e = t.time, s = t.ticks,
            n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
        const o = this.min, a = this.max, r = Qo(n, o, a);
        return this._unit = e.unit || (s.autoSkip ? an(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Ah(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Lh(this._unit), this.initOffsets(n), t.reverse && r.reverse(), ln(this, r, this._majorUnit)
    }

    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
    }

    initOffsets(t = []) {
        let e = 0, s = 0, n, o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        const a = t.length < 3 ? .5 : .25;
        e = $(e, 0, a), s = $(s, 0, a), this._offsets = {start: e, end: s, factor: 1 / (e + 1 + s)}
    }

    _generate() {
        const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time,
            a = o.unit || an(o.minUnit, e, s, this._getLabelCapacity(e)), r = P(n.ticks.stepSize, 1),
            l = a === "week" ? o.isoWeekday : !1, c = Wt(l) || l === !0, h = {};
        let d = e, u, f;
        if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r) throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
        const g = n.ticks.source === "data" && this.getDataTimestamps();
        for (u = d, f = 0; u < s; u = +t.add(u, r, a), f++) rn(h, u, g);
        return (u === s || n.bounds === "ticks" || f === 1) && rn(h, u, g), Object.keys(h).sort(nn).map(p => +p)
    }

    getLabelForValue(t) {
        const e = this._adapter, s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime)
    }

    format(t, e) {
        const n = this.options.time.displayFormats, o = this._unit, a = e || n[o];
        return this._adapter.format(t, a)
    }

    _tickFormatFunction(t, e, s, n) {
        const o = this.options, a = o.ticks.callback;
        if (a) return E(a, [t, e, s], this);
        const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && r[l], d = c && r[c], u = s[e],
            f = c && d && u && u.major;
        return this._adapter.format(t, n || (f ? d : h))
    }

    generateTickLabels(t) {
        let e, s, n;
        for (e = 0, s = t.length; e < s; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
    }

    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }

    getPixelForValue(t) {
        const e = this._offsets, s = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s) * e.factor)
    }

    getValueForPixel(t) {
        const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s * (this.max - this.min)
    }

    _getLabelSize(t) {
        const e = this.options.ticks, s = this.ctx.measureText(t).width,
            n = st(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), a = Math.sin(n),
            r = this._resolveTickFontOptions(0).size;
        return {w: s * o + r * a, h: s * a + r * o}
    }

    _getLabelCapacity(t) {
        const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond,
            o = this._tickFormatFunction(t, 0, ln(this, [t], this._majorUnit), n), a = this._getLabelSize(o),
            r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
        return r > 0 ? r : 1
    }

    getDataTimestamps() {
        let t = this._cache.data || [], e, s;
        if (t.length) return t;
        const n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
        for (e = 0, s = n.length; e < s; ++e) t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }

    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, s;
        if (t.length) return t;
        const n = this.getLabels();
        for (e = 0, s = n.length; e < s; ++e) t.push(on(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t)
    }

    normalize(t) {
        return yn(t.sort(nn))
    }
}

function Le(i, t, e) {
    let s = 0, n = i.length - 1, o, a, r, l;
    e ? (t >= i[s].pos && t <= i[n].pos && ({lo: s, hi: n} = ut(i, "pos", t)), {pos: o, time: r} = i[s], {
        pos: a,
        time: l
    } = i[n]) : (t >= i[s].time && t <= i[n].time && ({lo: s, hi: n} = ut(i, "time", t)), {
        time: o,
        pos: r
    } = i[s], {time: a, pos: l} = i[n]);
    const c = a - o;
    return c ? r + (l - r) * (t - o) / c : r
}

class Rh extends yi {
    static id = "timeseries";
    static defaults = yi.defaults;

    constructor(t) {
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
    }

    initOffsets() {
        const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
        this._minPos = Le(e, this.min), this._tableRange = Le(e, this.max) - this._minPos, super.initOffsets(t)
    }

    buildLookupTable(t) {
        const {min: e, max: s} = this, n = [], o = [];
        let a, r, l, c, h;
        for (a = 0, r = t.length; a < r; ++a) c = t[a], c >= e && c <= s && n.push(c);
        if (n.length < 2) return [{time: e, pos: 0}, {time: s, pos: 1}];
        for (a = 0, r = n.length; a < r; ++a) h = n[a + 1], l = n[a - 1], c = n[a], Math.round((h + l) / 2) !== c && o.push({
            time: c,
            pos: a / (r - 1)
        });
        return o
    }

    _generate() {
        const t = this.min, e = this.max;
        let s = super.getDataTimestamps();
        return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o)
    }

    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
        return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t
    }

    getDecimalForValue(t) {
        return (Le(this._table, t) - this._minPos) / this._tableRange
    }

    getValueForPixel(t) {
        const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return Le(this._table, s * this._tableRange + this._minPos, !0)
    }
}

var Eh = Object.freeze({
    __proto__: null,
    CategoryScale: hh,
    LinearScale: uh,
    LogarithmicScale: ph,
    RadialLinearScale: Oh,
    TimeScale: yi,
    TimeSeriesScale: Rh
});
const Fh = [Rr, uc, ah, Eh];
me.register(...Fh);
const Ih = new Date, ho = new URLSearchParams(window.location.search).get("name"), uo = "active", cn = "서울";
let hn = !1, Ee = Ih.getHours(), pt = [0, 0, 0, 0, 0],
    zh = Array.from({length: 5}, () => Array.from({length: 24}, () => 0));
const Bh = document.getElementById("image-loading"), dn = document.querySelector("#main-img"), Vh = {
        type: "bar",
        data: {labels: ["Car", "Truck", "Bus", "Bike", "Person"], datasets: [{data: [0, 0, 0, 0, 0]}]},
        options: {scales: {y: {beginAtZero: !0, suggestedMax: 20}}, plugins: {legend: {display: !1}}}
    }, Wh = new me(document.getElementById("object-count"), Vh), Nh = {
        type: "pie",
        data: {labels: ["Car", "Truck", "Bus", "Bike", "Person"], datasets: [{data: [0, 0, 0, 0, 0]}]},
        options: {plugins: {legend: {}}}
    }, Hh = new me(document.getElementById("hourly-traffic"), Nh), jh = {
        type: "line",
        data: {
            labels: Array.from({length: 24}, (i, t) => ((t + Ee + 1) % 24).toString().padStart(2, "0")),
            datasets: [{data: Array.from({length: 24}, () => 0), label: "Car"}, {
                data: Array.from({length: 24}, () => 0),
                label: "Truck"
            }, {data: Array.from({length: 24}, () => 0), label: "Bus"}, {
                data: Array.from({length: 24}, () => 0),
                label: "Bike"
            }, {data: Array.from({length: 24}, () => 0), label: "Person"}]
        },
        options: {scales: {y: {beginAtZero: !0, suggestedMax: 1e4}}}
    }, li = new me(document.getElementById("daily-stat"), jh),
    je = new WebSocket("ws://" + window.location.host + "/ws/cctv/" + ho + "/");
document.querySelector("#statistics-link").href = "/statistics?cctv=" + ho;
fo(je);
je.onmessage = function (i) {
    const t = JSON.parse(i.data);
    if (t === null) return;
    hn || (hn = !0, dn?.classList.remove("sr-only"), Bh?.remove()), dn.src = "data:image/png;base64," + t.frame;
    const e = JSON.parse(t.object_detection), s = {log: e, location: cn, time: t.detect_time};
    po(s);
    const n = e.car ?? 0, o = e.truck ?? 0, a = e.bus ?? 0, r = e.bike ?? 0, l = e.person ?? 0;
    if (ci(Wh, [n, o, a, r, l], !1), t.accident_detection !== null) {
        const h = {log: JSON.parse(t.accident_detection), location: cn, time: t.detect_time};
        mo(h)
    }
    if (t.ok === null) return;
    const c = new Date(t.detect_time);
    c.getHours() != Ee && (Ee = c.getHours(), zh.forEach((h, d) => {
        h.shift(), h.push(pt[d]), ci(li, h, !1, d)
    }), li.data.labels?.shift(), li.data.labels?.push(Ee.toString().padStart(2, "0")), pt = [0, 0, 0, 0, 0]), pt[0] += n, pt[1] += o, pt[2] += a, pt[3] += r, pt[4] += l, ci(Hh, pt, !1), go(je, uo)
};

function fo(i) {
    setTimeout(() => {
        je.readyState === 1 ? (console.log("Socket ready"), go(i, uo)) : (console.log("Waiting..."), fo(i))
    }, 500)
}

function go(i, t) {
    i.send(JSON.stringify({message: t}))
}

function ci(i, t, e = !1, s = 0) {
    i.data.datasets[s].data = t, e ? i.update() : i.update("none")
}
