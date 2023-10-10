document.addEventListener("astro:page-load", () => {
    const t = document.getElementById("theme");
    localStorage.getItem("theme") === null && document.documentElement.setAttribute("data-theme", "light"), t.addEventListener("change", e => {
        const r = e.target.value;
        document.documentElement.setAttribute("data-theme", r), localStorage.setItem("theme", r)
    })
});
document.addEventListener("astro:after-swap", () => {
    const t = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", t)
});
const k = t => history.state && history.replaceState(t, ""), y = !!document.startViewTransition,
    p = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
    E = t => location.pathname === t.pathname && location.search === t.search,
    w = t => document.dispatchEvent(new Event(t)), A = () => w("astro:page-load"), P = () => {
        let t = document.createElement("div");
        t.setAttribute("aria-live", "assertive"), t.setAttribute("aria-atomic", "true"), t.setAttribute("style", "position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px"), document.body.append(t), setTimeout(() => {
            let e = document.title || document.querySelector("h1")?.textContent || location.pathname;
            t.textContent = e
        }, 60)
    }, h = "data-astro-transition-persist", q = new DOMParser;
let m = 0;
history.state ? (m = history.state.index, scrollTo({
    left: history.state.scrollX,
    top: history.state.scrollY
})) : p() && history.replaceState({index: m, scrollX, scrollY, intraPage: !1}, "");
const R = (t, e) => {
    let r = !1, o = !1;
    return (...i) => {
        if (r) {
            o = !0;
            return
        }
        t(...i), r = !0, setTimeout(() => {
            o && (o = !1, t(...i)), r = !1
        }, e)
    }
};

async function $(t) {
    try {
        const e = await fetch(t), r = e.headers.get("content-type")?.replace(/;.*$/, "");
        return r !== "text/html" && r !== "application/xhtml+xml" ? null : {
            html: await e.text(),
            redirected: e.redirected ? e.url : void 0,
            mediaType: r
        }
    } catch {
        return null
    }
}

function v() {
    const t = document.querySelector('[name="astro-view-transitions-fallback"]');
    return t ? t.getAttribute("content") : "animate"
}

function S() {
    for (const t of document.scripts) t.dataset.astroExec = ""
}

function L() {
    let t = Promise.resolve();
    for (const e of Array.from(document.scripts)) {
        if (e.dataset.astroExec === "") continue;
        const r = document.createElement("script");
        r.innerHTML = e.innerHTML;
        for (const o of e.attributes) {
            if (o.name === "src") {
                const i = new Promise(f => {
                    r.onload = f
                });
                t = t.then(() => i)
            }
            r.setAttribute(o.name, o.value)
        }
        r.dataset.astroExec = "", e.replaceWith(r)
    }
    return t
}

function H(t) {
    const e = t.effect;
    return !e || !(e instanceof KeyframeEffect) || !e.target ? !1 : window.getComputedStyle(e.target, e.pseudoElement).animationIterationCount === "infinite"
}

const T = (t, e, r) => {
    const o = !E(t);
    t.href !== location.href && (e ? history.replaceState({...history.state}, "", t.href) : (history.replaceState({
        ...history.state,
        intraPage: r
    }, ""), history.pushState({index: ++m, scrollX, scrollY}, "", t.href)), o && scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
    })), t.hash ? location.href = t.href : scrollTo({left: 0, top: 0, behavior: "instant"})
};

async function b(t, e, r, o, i) {
    const f = a => {
        const l = a.getAttribute(h), u = l && t.head.querySelector(`[${h}="${l}"]`);
        if (u) return u;
        if (a.matches("link[rel=stylesheet]")) {
            const n = a.getAttribute("href");
            return t.head.querySelector(`link[rel=stylesheet][href="${n}"]`)
        }
        return null
    }, c = () => {
        const a = document.documentElement,
            l = [...a.attributes].filter(({name: n}) => (a.removeAttribute(n), n.startsWith("data-astro-")));
        [...t.documentElement.attributes, ...l].forEach(({name: n, value: s}) => a.setAttribute(n, s));
        for (const n of document.scripts) for (const s of t.scripts) if (!n.src && n.textContent === s.textContent || n.src && n.type === s.type && n.src === s.src) {
            s.dataset.astroExec = "";
            break
        }
        for (const n of Array.from(document.head.children)) {
            const s = f(n);
            s ? s.remove() : n.remove()
        }
        document.head.append(...t.head.children);
        const u = document.body;
        document.body.replaceWith(t.body);
        for (const n of u.querySelectorAll(`[${h}]`)) {
            const s = n.getAttribute(h), g = document.querySelector(`[${h}="${s}"]`);
            g && g.replaceWith(n)
        }
        o ? scrollTo(o.scrollX, o.scrollY) : T(e, r.history === "replace", !1), w("astro:after-swap")
    }, d = [];
    for (const a of t.querySelectorAll("head link[rel=stylesheet]")) if (!document.querySelector(`[${h}="${a.getAttribute(h)}"], link[rel=stylesheet][href="${a.getAttribute("href")}"]`)) {
        const l = document.createElement("link");
        l.setAttribute("rel", "preload"), l.setAttribute("as", "style"), l.setAttribute("href", a.getAttribute("href")), d.push(new Promise(u => {
            ["load", "error"].forEach(n => l.addEventListener(n, u)), document.head.append(l)
        }))
    }
    if (d.length && await Promise.all(d), i === "animate") {
        const a = document.getAnimations();
        document.documentElement.dataset.astroTransitionFallback = "old";
        const l = document.getAnimations().filter(s => !a.includes(s) && !H(s)),
            u = Promise.all(l.map(s => s.finished)), n = () => {
                c(), document.documentElement.dataset.astroTransitionFallback = "new"
            };
        await u, n()
    } else c()
}

async function x(t, e, r, o) {
    let i;
    const f = e.href, c = await $(f);
    if (c === null) {
        location.href = f;
        return
    }
    c.redirected && (e = new URL(c.redirected));
    const d = q.parseFromString(c.html, c.mediaType);
    if (d.querySelectorAll("noscript").forEach(a => a.remove()), !d.querySelector('[name="astro-view-transitions-enabled"]')) {
        location.href = f;
        return
    }
    o || history.replaceState({
        ...history.state,
        scrollX,
        scrollY
    }, ""), document.documentElement.dataset.astroTransition = t, y ? i = document.startViewTransition(() => b(d, e, r, o)).finished : i = b(d, e, r, o, v());
    try {
        await i
    } finally {
        await L(), S(), A(), P()
    }
}

function I(t, e) {
    if (!p()) {
        location.href = t;
        return
    }
    const r = new URL(t, location.href);
    location.origin === r.origin && E(r) ? T(r, e?.history === "replace", !0) : x("forward", r, e ?? {})
}

if (y || v() !== "none") {
    addEventListener("popstate", e => {
        if (!p() && e.state) {
            history.scrollRestoration && (history.scrollRestoration = "manual"), location.reload();
            return
        }
        if (e.state === null) {
            history.scrollRestoration && (history.scrollRestoration = "auto");
            return
        }
        history.scrollRestoration && (history.scrollRestoration = "manual");
        const r = history.state;
        if (r.intraPage) scrollTo(r.scrollX, r.scrollY); else {
            const o = r.index, i = o > m ? "forward" : "back";
            m = o, x(i, new URL(location.href), {}, r)
        }
    }), addEventListener("load", A);
    const t = () => {
        k({...history.state, scrollX, scrollY})
    };
    "onscrollend" in window ? addEventListener("scrollend", t) : addEventListener("scroll", R(t, 300)), S()
}

function M() {
    const t = document.querySelector('[name="astro-view-transitions-fallback"]');
    return t ? t.getAttribute("content") : "animate"
}

function X(t) {
    if (document.querySelector(`link[rel=prefetch][href="${t}"]`)) return;
    if (navigator.connection) {
        let r = navigator.connection;
        if (r.saveData || /(2|3)g/.test(r.effectiveType || "")) return
    }
    let e = document.createElement("link");
    e.setAttribute("rel", "prefetch"), e.setAttribute("href", t), document.head.append(e)
}

(y || M() !== "none") && (document.addEventListener("click", t => {
    let e = t.target;
    e instanceof Element && e.tagName !== "A" && (e = e.closest("a")), !(!e || !(e instanceof HTMLAnchorElement) || e.dataset.astroReload !== void 0 || e.hasAttribute("download") || !e.href || e.target && e.target !== "_self" || e.origin !== location.origin || t.button !== 0 || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey || t.defaultPrevented) && (t.preventDefault(), I(e.href, {history: e.dataset.astroHistory === "replace" ? "replace" : "auto"}))
}), ["mouseenter", "touchstart", "focus"].forEach(t => {
    document.addEventListener(t, e => {
        if (e.target instanceof HTMLAnchorElement) {
            let r = e.target;
            r.origin === location.origin && r.pathname !== location.pathname && p() && X(r.pathname)
        }
    }, {passive: !0, capture: !0})
}));
