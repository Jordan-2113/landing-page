import {
    _ as M,
    S as f,
    H as x,
    $ as s,
    u as w,
    c as S,
    r as l,
    o as n,
    a as d,
    b as t,
    d as a,
    w as i,
    F as m,
    e as p,
    f as v,
    t as _,
    g as k,
    n as g,
    h as y
} from "./index.js";
import {
    S as q,
    a as C,
    N as B,
    P as E,
    b as N
} from "./swiper-slide.js";
const j = {
        components: {
            Summary: f,
            Swiper: q,
            SwiperSlide: C,
            HeaderBlock: x
        },
        props: ["code"],
        unmounted() {
            window.winesTop = 0
        },
        mounted() {
            s(".menu-right").css({
                "padding-top": ""
            }), s(".menu-right > a").css({
                "font-size": ""
            }), this.$store.dispatch("resizeHandler")
        },
        setup() {
            const u = w();
            return {
                about: S(function() {
                    return u.getters.about
                }),
                onSlideChange: e => {
                    s(".js-about-slide__info").html(s(".swiper-slide-active.about-slide .about-slide__info").html()), s(".js-about-slide__text").html(s(".swiper-slide-active.about-slide .about-slide__text").html())
                },
                centered: window.innerWidth >= 768,
                modules: [B, E, N]
            }
        }
    },
    z = {
        class: "main"
    },
    V = t("div", {
        class: "content-header"
    }, [t("span", {
        class: "for-about"
    })], -1),
    F = {
        class: "content"
    },
    P = {
        class: "about-top panel-container"
    },
    A = {
        class: "panel-holder is-active",
        "data-id": "panel-about-top"
    },
    D = {
        class: "panel panel--dark"
    },
    I = ["innerHTML"],
    W = {
        class: "about-time__title"
    },
    G = {
        key: 0,
        class: "about-time__pic"
    },
    J = ["src"],
    K = ["innerHTML"],
    O = {
        class: "about-team"
    },
    Q = {
        class: "about-person"
    },
    R = {
        class: "about-person__photo"
    },
    U = ["src", "alt"],
    X = ["innerHTML"],
    Y = ["innerHTML"],
    Z = ["innerHTML"],
    $ = {
        class: "about-person"
    },
    tt = {
        class: "about-person__photo"
    },
    et = ["src", "alt"],
    ot = ["innerHTML"],
    st = ["innerHTML"],
    nt = ["innerHTML"],
    at = {
        class: "about-person about-person--third"
    },
    it = {
        class: "about-person__photo"
    },
    lt = ["src", "alt"],
    dt = ["innerHTML"],
    _t = ["innerHTML"],
    rt = ["innerHTML"],
    ct = {
        class: "about-gallery panel-container"
    },
    ut = {
        class: "panel-holder is-active",
        "data-id": "panel-about-gallery"
    },
    bt = {
        class: "panel panel--transparent panel--green-mobile panel--light"
    },
    ht = {
        class: "about-slide__info"
    },
    mt = ["innerHTML"],
    pt = {
        class: "about-slide__info js-about-slide__info"
    },
    vt = ["innerHTML"],
    gt = t("div", {
        class: "swiper-button-prev"
    }, null, -1),
    Ht = t("div", {
        class: "swiper-button-next"
    }, null, -1),
    Tt = {
        class: "about-quote panel-container panel-to-bottom"
    },
    Lt = {
        class: "panel-holder is-active",
        "data-id": "panel-about-quote"
    },
    Mt = {
        class: "panel panel--dark"
    },
    ft = {
        class: "about-quote-item"
    },
    xt = {
        class: "about-quote-pic"
    },
    wt = ["src", "alt"],
    St = ["innerHTML"],
    kt = {
        class: "about-quote-link"
    },
    yt = ["href"],
    qt = ["innerHTML"];

function Ct(u, H, T, e, Bt, Et) {
    const r = l("HeaderBlock"),
        b = l("swiper-slide"),
        h = l("swiper"),
        L = l("Summary");
    return n(), d("div", z, [V, t("div", F, [t("div", P, [t("div", A, [t("div", D, [a(r)])]), t("div", {
        class: "about-text",
        innerHTML: e.about.text
    }, null, 8, I), a(h, {
        modules: e.modules,
        "slides-per-view": "auto",
        navigation: {
            enabled: !0
        },
        "centered-slides": e.centered,
        class: "about-timeline"
    }, {
        default: i(() => [(n(!0), d(m, null, p(e.about.timeline, (o, c) => (n(), v(b, {
            key: o.id,
            class: g({
                "about-time": !0,
                "about-time--first": c === 0
            })
        }, {
            default: i(() => [t("div", W, _(o.title), 1), o.gif ? (n(), d("div", G, [t("img", {
                src: o.gif
            }, null, 8, J)])) : k("", !0), t("div", {
                class: "about-time__desc",
                innerHTML: o.text
            }, null, 8, K)]),
            _: 2
        }, 1032, ["class"]))), 128))]),
        _: 1
    }, 8, ["modules", "centered-slides"]), t("div", O, [t("div", Q, [t("div", R, [t("img", {
        src: e.about.team[0].photo,
        alt: e.about.team[0].alt
    }, null, 8, U)]), t("h2", {
        class: "about-person__name",
		style: "margin-block-end: auto",
        innerHTML: e.about.team[0].title
    }, null, 8, X), t("div", {
        class: "about-person__position",
        innerHTML: e.about.team[0].position
    }, null, 8, Y), t("div", {
        class: "about-person__text",
        innerHTML: e.about.team[0].text
    }, null, 8, Z)]), t("div", $, [t("div", tt, [t("img", {
        src: e.about.team[1].photo,
        alt: e.about.team[1].alt
    }, null, 8, et)]), t("h2", {
        class: "about-person__name",
		style: "margin-block-end: auto",
        innerHTML: e.about.team[1].title
    }, null, 8, ot), t("div", {
        class: "about-person__position",
        innerHTML: e.about.team[1].position
    }, null, 8, st), t("div", {
        class: "about-person__text",
        innerHTML: e.about.team[1].text
    }, null, 8, nt)]), t("div", at, [t("div", it, [t("img", {
        src: e.about.team[2].photo,
        alt: e.about.team[2].alt
    }, null, 8, lt)]), t("h2", {
        class: "about-person__name",
		style: "margin-block-end: auto",
        innerHTML: e.about.team[2].title
    }, null, 8, dt), t("div", {
        class: "about-person__position",
        innerHTML: e.about.team[2].position
    }, null, 8, _t), t("div", {
        class: "about-person__text",
        innerHTML: e.about.team[2].text
    }, null, 8, rt)])])]), t("div", ct, [t("div", ut, [t("div", bt, [a(r)])]), a(h, {
        modules: e.modules,
        "slides-per-view": "auto",
        onSlideChangeTransitionEnd: e.onSlideChange,
        navigation: {
            enabled: !0,
            nextEl: ".about-slides .swiper-button-next",
            prevEl: ".about-slides .swiper-button-prev"
        },
        "centered-slides": !1,
        class: "about-slides"
    }, {
        "container-end": i(() => [t("div", pt, [t("span", null, "1 / " + _(e.about.gallery.length), 1)]), t("div", {
            class: "about-slide__text js-about-slide__text",
            innerHTML: e.about.gallery[0].text
        }, null, 8, vt), gt, Ht]),
        default: i(() => [(n(!0), d(m, null, p(e.about.gallery, (o, c) => (n(), v(b, {
            key: o.id,
            class: g({
                "about-slide": !0
            })
        }, {
            default: i(() => [t("div", {
                class: "about-slide__image",
                style: y({
                    backgroundImage: "url(" + o.slide + ")"
                })
            }, null, 4), t("div", ht, [t("span", null, _(c + 1) + " / " + _(e.about.gallery.length), 1)]), t("div", {
                class: "about-slide__text",
                innerHTML: o.text
            }, null, 8, mt)]),
            _: 2
        }, 1024))), 128))]),
        _: 1
    }, 8, ["modules", "onSlideChangeTransitionEnd", "navigation"])]), t("div", Tt, [t("div", Lt, [t("div", Mt, [a(r)])]), t("div", ft, [t("div", xt, [t("img", {
        src: e.about.quote.photo,
        alt: e.about.quote.alt
    }, null, 8, wt)]), t("div", {
        class: "about-quote-text",
        innerHTML: e.about.quote.text
    }, null, 8, St), t("div", kt, [t("a", {
        href: e.about.quote.link,
        target: "_blank",
        class: "link--hover-2"
    }, [t("span", {
        innerHTML: e.about.quote.title
    }, null, 8, qt)], 8, yt)])])])]), a(L)])
}
var zt = M(j, [
    ["render", Ct]
]);
export {
    zt as
    default
};