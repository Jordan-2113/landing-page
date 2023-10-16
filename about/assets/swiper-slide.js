import {i as Y, j as k, k as se, l as q, m as j, p as D, q as K, s as re, v as Z, x as J, y as Q, z as oe, A as de, c as ue} from "./index.js";
function W(a, e, d, l) {
    const s = Y();
    return a.params.createElements && Object.keys(l).forEach(u=>{
        if (!d[u] && d.auto === !0) {
            let n = a.$el.children(`.${l[u]}`)[0];
            n || (n = s.createElement("div"),
            n.className = l[u],
            a.$el.append(n)),
            d[u] = n,
            e[u] = n
        }
    }
    ),
    d
}
function Ce(a) {
    let {swiper: e, extendParams: d, on: l, emit: s} = a;
    d({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function u(v) {
        let h;
        return v && (h = k(v),
        e.params.uniqueNavElements && typeof v == "string" && h.length > 1 && e.$el.find(v).length === 1 && (h = e.$el.find(v))),
        h
    }
    function n(v, h) {
        const t = e.params.navigation;
        v && v.length > 0 && (v[h ? "addClass" : "removeClass"](t.disabledClass),
        v[0] && v[0].tagName === "BUTTON" && (v[0].disabled = h),
        e.params.watchOverflow && e.enabled && v[e.isLocked ? "addClass" : "removeClass"](t.lockClass))
    }
    function g() {
        if (e.params.loop)
            return;
        const {$nextEl: v, $prevEl: h} = e.navigation;
        n(h, e.isBeginning && !e.params.rewind),
        n(v, e.isEnd && !e.params.rewind)
    }
    function c(v) {
        v.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        s("navigationPrev"))
    }
    function r(v) {
        v.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        s("navigationNext"))
    }
    function o() {
        const v = e.params.navigation;
        if (e.params.navigation = W(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(v.nextEl || v.prevEl))
            return;
        const h = u(v.nextEl)
          , t = u(v.prevEl);
        h && h.length > 0 && h.on("click", r),
        t && t.length > 0 && t.on("click", c),
        Object.assign(e.navigation, {
            $nextEl: h,
            nextEl: h && h[0],
            $prevEl: t,
            prevEl: t && t[0]
        }),
        e.enabled || (h && h.addClass(v.lockClass),
        t && t.addClass(v.lockClass))
    }
    function p() {
        const {$nextEl: v, $prevEl: h} = e.navigation;
        v && v.length && (v.off("click", r),
        v.removeClass(e.params.navigation.disabledClass)),
        h && h.length && (h.off("click", c),
        h.removeClass(e.params.navigation.disabledClass))
    }
    l("init", ()=>{
        e.params.navigation.enabled === !1 ? x() : (o(),
        g())
    }
    ),
    l("toEdge fromEdge lock unlock", ()=>{
        g()
    }
    ),
    l("destroy", ()=>{
        p()
    }
    ),
    l("enable disable", ()=>{
        const {$nextEl: v, $prevEl: h} = e.navigation;
        v && v[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
        h && h[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
    }
    ),
    l("click", (v,h)=>{
        const {$nextEl: t, $prevEl: i} = e.navigation
          , S = h.target;
        if (e.params.navigation.hideOnClick && !k(S).is(i) && !k(S).is(t)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === S || e.pagination.el.contains(S)))
                return;
            let m;
            t ? m = t.hasClass(e.params.navigation.hiddenClass) : i && (m = i.hasClass(e.params.navigation.hiddenClass)),
            s(m === !0 ? "navigationShow" : "navigationHide"),
            t && t.toggleClass(e.params.navigation.hiddenClass),
            i && i.toggleClass(e.params.navigation.hiddenClass)
        }
    }
    );
    const z = ()=>{
        e.$el.removeClass(e.params.navigation.navigationDisabledClass),
        o(),
        g()
    }
      , x = ()=>{
        e.$el.addClass(e.params.navigation.navigationDisabledClass),
        p()
    }
    ;
    Object.assign(e.navigation, {
        enable: z,
        disable: x,
        update: g,
        init: o,
        destroy: p
    })
}
function F(a) {
    return a === void 0 && (a = ""),
    `.${a.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
}
function ye(a) {
    let {swiper: e, extendParams: d, on: l, emit: s} = a;
    const u = "swiper-pagination";
    d({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t=>t,
            formatFractionTotal: t=>t,
            bulletClass: `${u}-bullet`,
            bulletActiveClass: `${u}-bullet-active`,
            modifierClass: `${u}-`,
            currentClass: `${u}-current`,
            totalClass: `${u}-total`,
            hiddenClass: `${u}-hidden`,
            progressbarFillClass: `${u}-progressbar-fill`,
            progressbarOppositeClass: `${u}-progressbar-opposite`,
            clickableClass: `${u}-clickable`,
            lockClass: `${u}-lock`,
            horizontalClass: `${u}-horizontal`,
            verticalClass: `${u}-vertical`,
            paginationDisabledClass: `${u}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let n, g = 0;
    function c() {
        return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0
    }
    function r(t, i) {
        const {bulletActiveClass: S} = e.params.pagination;
        t[i]().addClass(`${S}-${i}`)[i]().addClass(`${S}-${i}-${i}`)
    }
    function o() {
        const t = e.rtl
          , i = e.params.pagination;
        if (c())
            return;
        const S = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , m = e.pagination.$el;
        let y;
        const _ = e.params.loop ? Math.ceil((S - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (y = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
        y > S - 1 - e.loopedSlides * 2 && (y -= S - e.loopedSlides * 2),
        y > _ - 1 && (y -= _),
        y < 0 && e.params.paginationType !== "bullets" && (y = _ + y)) : typeof e.snapIndex != "undefined" ? y = e.snapIndex : y = e.activeIndex || 0,
        i.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const b = e.pagination.bullets;
            let E, $, M;
            if (i.dynamicBullets && (n = b.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
            m.css(e.isHorizontal() ? "width" : "height", `${n * (i.dynamicMainBullets + 4)}px`),
            i.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (g += y - (e.previousIndex - e.loopedSlides || 0),
            g > i.dynamicMainBullets - 1 ? g = i.dynamicMainBullets - 1 : g < 0 && (g = 0)),
            E = Math.max(y - g, 0),
            $ = E + (Math.min(b.length, i.dynamicMainBullets) - 1),
            M = ($ + E) / 2),
            b.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(T=>`${i.bulletActiveClass}${T}`).join(" ")),
            m.length > 1)
                b.each(T=>{
                    const N = k(T)
                      , f = N.index();
                    f === y && N.addClass(i.bulletActiveClass),
                    i.dynamicBullets && (f >= E && f <= $ && N.addClass(`${i.bulletActiveClass}-main`),
                    f === E && r(N, "prev"),
                    f === $ && r(N, "next"))
                }
                );
            else {
                const T = b.eq(y)
                  , N = T.index();
                if (T.addClass(i.bulletActiveClass),
                i.dynamicBullets) {
                    const f = b.eq(E)
                      , w = b.eq($);
                    for (let C = E; C <= $; C += 1)
                        b.eq(C).addClass(`${i.bulletActiveClass}-main`);
                    if (e.params.loop)
                        if (N >= b.length) {
                            for (let C = i.dynamicMainBullets; C >= 0; C -= 1)
                                b.eq(b.length - C).addClass(`${i.bulletActiveClass}-main`);
                            b.eq(b.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                        } else
                            r(f, "prev"),
                            r(w, "next");
                    else
                        r(f, "prev"),
                        r(w, "next")
                }
            }
            if (i.dynamicBullets) {
                const T = Math.min(b.length, i.dynamicMainBullets + 4)
                  , N = (n * T - n) / 2 - M * n
                  , f = t ? "right" : "left";
                b.css(e.isHorizontal() ? f : "top", `${N}px`)
            }
        }
        if (i.type === "fraction" && (m.find(F(i.currentClass)).text(i.formatFractionCurrent(y + 1)),
        m.find(F(i.totalClass)).text(i.formatFractionTotal(_))),
        i.type === "progressbar") {
            let b;
            i.progressbarOpposite ? b = e.isHorizontal() ? "vertical" : "horizontal" : b = e.isHorizontal() ? "horizontal" : "vertical";
            const E = (y + 1) / _;
            let $ = 1
              , M = 1;
            b === "horizontal" ? $ = E : M = E,
            m.find(F(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${$}) scaleY(${M})`).transition(e.params.speed)
        }
        i.type === "custom" && i.renderCustom ? (m.html(i.renderCustom(e, y + 1, _)),
        s("paginationRender", m[0])) : s("paginationUpdate", m[0]),
        e.params.watchOverflow && e.enabled && m[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
    }
    function p() {
        const t = e.params.pagination;
        if (c())
            return;
        const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , S = e.pagination.$el;
        let m = "";
        if (t.type === "bullets") {
            let y = e.params.loop ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && y > i && (y = i);
            for (let _ = 0; _ < y; _ += 1)
                t.renderBullet ? m += t.renderBullet.call(e, _, t.bulletClass) : m += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
            S.html(m),
            e.pagination.bullets = S.find(F(t.bulletClass))
        }
        t.type === "fraction" && (t.renderFraction ? m = t.renderFraction.call(e, t.currentClass, t.totalClass) : m = `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
        S.html(m)),
        t.type === "progressbar" && (t.renderProgressbar ? m = t.renderProgressbar.call(e, t.progressbarFillClass) : m = `<span class="${t.progressbarFillClass}"></span>`,
        S.html(m)),
        t.type !== "custom" && s("paginationRender", e.pagination.$el[0])
    }
    function z() {
        e.params.pagination = W(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const t = e.params.pagination;
        if (!t.el)
            return;
        let i = k(t.el);
        i.length !== 0 && (e.params.uniqueNavElements && typeof t.el == "string" && i.length > 1 && (i = e.$el.find(t.el),
        i.length > 1 && (i = i.filter(S=>k(S).parents(".swiper")[0] === e.el))),
        t.type === "bullets" && t.clickable && i.addClass(t.clickableClass),
        i.addClass(t.modifierClass + t.type),
        i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
        t.type === "bullets" && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
        g = 0,
        t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        t.type === "progressbar" && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
        t.clickable && i.on("click", F(t.bulletClass), function(m) {
            m.preventDefault();
            let y = k(this).index() * e.params.slidesPerGroup;
            e.params.loop && (y += e.loopedSlides),
            e.slideTo(y)
        }),
        Object.assign(e.pagination, {
            $el: i,
            el: i[0]
        }),
        e.enabled || i.addClass(t.lockClass))
    }
    function x() {
        const t = e.params.pagination;
        if (c())
            return;
        const i = e.pagination.$el;
        i.removeClass(t.hiddenClass),
        i.removeClass(t.modifierClass + t.type),
        i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
        e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && i.off("click", F(t.bulletClass))
    }
    l("init", ()=>{
        e.params.pagination.enabled === !1 ? h() : (z(),
        p(),
        o())
    }
    ),
    l("activeIndexChange", ()=>{
        (e.params.loop || typeof e.snapIndex == "undefined") && o()
    }
    ),
    l("snapIndexChange", ()=>{
        e.params.loop || o()
    }
    ),
    l("slidesLengthChange", ()=>{
        e.params.loop && (p(),
        o())
    }
    ),
    l("snapGridLengthChange", ()=>{
        e.params.loop || (p(),
        o())
    }
    ),
    l("destroy", ()=>{
        x()
    }
    ),
    l("enable disable", ()=>{
        const {$el: t} = e.pagination;
        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
    }
    ),
    l("lock unlock", ()=>{
        o()
    }
    ),
    l("click", (t,i)=>{
        const S = i.target
          , {$el: m} = e.pagination;
        if (e.params.pagination.el && e.params.pagination.hideOnClick && m && m.length > 0 && !k(S).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && S === e.navigation.nextEl || e.navigation.prevEl && S === e.navigation.prevEl))
                return;
            const y = m.hasClass(e.params.pagination.hiddenClass);
            s(y === !0 ? "paginationShow" : "paginationHide"),
            m.toggleClass(e.params.pagination.hiddenClass)
        }
    }
    );
    const v = ()=>{
        e.$el.removeClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),
        z(),
        p(),
        o()
    }
      , h = ()=>{
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),
        x()
    }
    ;
    Object.assign(e.pagination, {
        enable: v,
        disable: h,
        render: p,
        update: o,
        init: z,
        destroy: x
    })
}
function Se(a) {
    let {swiper: e, extendParams: d, on: l, emit: s} = a;
    const u = Y();
    let n = !1, g = null, c = null, r, o, p, z;
    d({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }),
    e.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function x() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: f, rtlTranslate: w, progress: C} = e
          , {$dragEl: O, $el: B} = f
          , I = e.params.scrollbar;
        let R = o
          , P = (p - o) * C;
        w ? (P = -P,
        P > 0 ? (R = o - P,
        P = 0) : -P + o > p && (R = p + P)) : P < 0 ? (R = o + P,
        P = 0) : P + o > p && (R = p - P),
        e.isHorizontal() ? (O.transform(`translate3d(${P}px, 0, 0)`),
        O[0].style.width = `${R}px`) : (O.transform(`translate3d(0px, ${P}px, 0)`),
        O[0].style.height = `${R}px`),
        I.hide && (clearTimeout(g),
        B[0].style.opacity = 1,
        g = setTimeout(()=>{
            B[0].style.opacity = 0,
            B.transition(400)
        }
        , 1e3))
    }
    function v(f) {
        !e.params.scrollbar.el || !e.scrollbar.el || e.scrollbar.$dragEl.transition(f)
    }
    function h() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: f} = e
          , {$dragEl: w, $el: C} = f;
        w[0].style.width = "",
        w[0].style.height = "",
        p = e.isHorizontal() ? C[0].offsetWidth : C[0].offsetHeight,
        z = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
        e.params.scrollbar.dragSize === "auto" ? o = p * z : o = parseInt(e.params.scrollbar.dragSize, 10),
        e.isHorizontal() ? w[0].style.width = `${o}px` : w[0].style.height = `${o}px`,
        z >= 1 ? C[0].style.display = "none" : C[0].style.display = "",
        e.params.scrollbar.hide && (C[0].style.opacity = 0),
        e.params.watchOverflow && e.enabled && f.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
    }
    function t(f) {
        return e.isHorizontal() ? f.type === "touchstart" || f.type === "touchmove" ? f.targetTouches[0].clientX : f.clientX : f.type === "touchstart" || f.type === "touchmove" ? f.targetTouches[0].clientY : f.clientY
    }
    function i(f) {
        const {scrollbar: w, rtlTranslate: C} = e
          , {$el: O} = w;
        let B;
        B = (t(f) - O.offset()[e.isHorizontal() ? "left" : "top"] - (r !== null ? r : o / 2)) / (p - o),
        B = Math.max(Math.min(B, 1), 0),
        C && (B = 1 - B);
        const I = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * B;
        e.updateProgress(I),
        e.setTranslate(I),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
    }
    function S(f) {
        const w = e.params.scrollbar
          , {scrollbar: C, $wrapperEl: O} = e
          , {$el: B, $dragEl: I} = C;
        n = !0,
        r = f.target === I[0] || f.target === I ? t(f) - f.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
        f.preventDefault(),
        f.stopPropagation(),
        O.transition(100),
        I.transition(100),
        i(f),
        clearTimeout(c),
        B.transition(0),
        w.hide && B.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        s("scrollbarDragStart", f)
    }
    function m(f) {
        const {scrollbar: w, $wrapperEl: C} = e
          , {$el: O, $dragEl: B} = w;
        !n || (f.preventDefault ? f.preventDefault() : f.returnValue = !1,
        i(f),
        C.transition(0),
        O.transition(0),
        B.transition(0),
        s("scrollbarDragMove", f))
    }
    function y(f) {
        const w = e.params.scrollbar
          , {scrollbar: C, $wrapperEl: O} = e
          , {$el: B} = C;
        !n || (n = !1,
        e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""),
        O.transition("")),
        w.hide && (clearTimeout(c),
        c = se(()=>{
            B.css("opacity", 0),
            B.transition(400)
        }
        , 1e3)),
        s("scrollbarDragEnd", f),
        w.snapOnRelease && e.slideToClosest())
    }
    function _(f) {
        const {scrollbar: w, touchEventsTouch: C, touchEventsDesktop: O, params: B, support: I} = e
          , R = w.$el;
        if (!R)
            return;
        const P = R[0]
          , G = I.passiveListener && B.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1
          , U = I.passiveListener && B.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        if (!P)
            return;
        const L = f === "on" ? "addEventListener" : "removeEventListener";
        I.touch ? (P[L](C.start, S, G),
        P[L](C.move, m, G),
        P[L](C.end, y, U)) : (P[L](O.start, S, G),
        u[L](O.move, m, G),
        u[L](O.end, y, U))
    }
    function b() {
        !e.params.scrollbar.el || !e.scrollbar.el || _("on")
    }
    function E() {
        !e.params.scrollbar.el || !e.scrollbar.el || _("off")
    }
    function $() {
        const {scrollbar: f, $el: w} = e;
        e.params.scrollbar = W(e, e.originalParams.scrollbar, e.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const C = e.params.scrollbar;
        if (!C.el)
            return;
        let O = k(C.el);
        e.params.uniqueNavElements && typeof C.el == "string" && O.length > 1 && w.find(C.el).length === 1 && (O = w.find(C.el)),
        O.addClass(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
        let B = O.find(`.${e.params.scrollbar.dragClass}`);
        B.length === 0 && (B = k(`<div class="${e.params.scrollbar.dragClass}"></div>`),
        O.append(B)),
        Object.assign(f, {
            $el: O,
            el: O[0],
            $dragEl: B,
            dragEl: B[0]
        }),
        C.draggable && b(),
        O && O[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
    }
    function M() {
        const f = e.params.scrollbar
          , w = e.scrollbar.$el;
        w && w.removeClass(e.isHorizontal() ? f.horizontalClass : f.verticalClass),
        E()
    }
    l("init", ()=>{
        e.params.scrollbar.enabled === !1 ? N() : ($(),
        h(),
        x())
    }
    ),
    l("update resize observerUpdate lock unlock", ()=>{
        h()
    }
    ),
    l("setTranslate", ()=>{
        x()
    }
    ),
    l("setTransition", (f,w)=>{
        v(w)
    }
    ),
    l("enable disable", ()=>{
        const {$el: f} = e.scrollbar;
        f && f[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
    }
    ),
    l("destroy", ()=>{
        M()
    }
    );
    const T = ()=>{
        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
        $(),
        h(),
        x()
    }
      , N = ()=>{
        e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
        M()
    }
    ;
    Object.assign(e.scrollbar, {
        enable: T,
        disable: N,
        updateSize: h,
        setTranslate: x,
        init: $,
        destroy: M
    })
}
function H(a) {
    return typeof a == "object" && a !== null && a.constructor && Object.prototype.toString.call(a).slice(8, -1) === "Object"
}
function A(a, e) {
    const d = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter(l=>d.indexOf(l) < 0).forEach(l=>{
        typeof a[l] == "undefined" ? a[l] = e[l] : H(e[l]) && H(a[l]) && Object.keys(e[l]).length > 0 ? e[l].__swiper__ ? a[l] = e[l] : A(a[l], e[l]) : a[l] = e[l]
    }
    )
}
function ee(a) {
    return a === void 0 && (a = {}),
    a.navigation && typeof a.navigation.nextEl == "undefined" && typeof a.navigation.prevEl == "undefined"
}
function ae(a) {
    return a === void 0 && (a = {}),
    a.pagination && typeof a.pagination.el == "undefined"
}
function le(a) {
    return a === void 0 && (a = {}),
    a.scrollbar && typeof a.scrollbar.el == "undefined"
}
function te(a) {
    a === void 0 && (a = "");
    const e = a.split(" ").map(l=>l.trim()).filter(l=>!!l)
      , d = [];
    return e.forEach(l=>{
        d.indexOf(l) < 0 && d.push(l)
    }
    ),
    d.join(" ")
}
const ne = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
function X(a) {
    a === void 0 && (a = {});
    const e = {
        on: {}
    }
      , d = {};
    A(e, q.defaults),
    A(e, q.extendedDefaults),
    e._emitClasses = !0,
    e.init = !1;
    const l = {}
      , s = ne.map(n=>n.replace(/_/, ""))
      , u = Object.assign({}, a);
    return Object.keys(u).forEach(n=>{
        typeof a[n] != "undefined" && (s.indexOf(n) >= 0 ? H(a[n]) ? (e[n] = {},
        d[n] = {},
        A(e[n], a[n]),
        A(d[n], a[n])) : (e[n] = a[n],
        d[n] = a[n]) : n.search(/on[A-Z]/) === 0 && typeof a[n] == "function" ? e.on[`${n[2].toLowerCase()}${n.substr(3)}`] = a[n] : l[n] = a[n])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(n=>{
        e[n] === !0 && (e[n] = {}),
        e[n] === !1 && delete e[n]
    }
    ),
    {
        params: e,
        passedParams: d,
        rest: l
    }
}
function pe(a) {
    return new q(a)
}
function fe(a, e) {
    let {el: d, nextEl: l, prevEl: s, paginationEl: u, scrollbarEl: n, swiper: g} = a;
    ee(e) && l && s && (g.params.navigation.nextEl = l,
    g.originalParams.navigation.nextEl = l,
    g.params.navigation.prevEl = s,
    g.originalParams.navigation.prevEl = s),
    ae(e) && u && (g.params.pagination.el = u,
    g.originalParams.pagination.el = u),
    le(e) && n && (g.params.scrollbar.el = n,
    g.originalParams.scrollbar.el = n),
    g.init(d)
}
function ie(a, e) {
    let d = e.slidesPerView;
    if (e.breakpoints) {
        const s = q.prototype.getBreakpoint(e.breakpoints)
          , u = s in e.breakpoints ? e.breakpoints[s] : void 0;
        u && u.slidesPerView && (d = u.slidesPerView)
    }
    let l = Math.ceil(parseFloat(e.loopedSlides || d, 10));
    return l += e.loopAdditionalSlides,
    l > a.length && (l = a.length),
    l
}
function ce(a, e, d) {
    const l = e.map((c,r)=>(c.props || (c.props = {}),
    c.props.swiperRef = a,
    c.props["data-swiper-slide-index"] = r,
    c));
    function s(c, r, o) {
        return c.props || (c.props = {}),
        j(c.type, {
            ...c.props,
            key: `${c.key}-duplicate-${r}-${o}`,
            class: `${c.props.className || ""} ${d.slideDuplicateClass} ${c.props.class || ""}`
        }, c.children)
    }
    if (d.loopFillGroupWithBlank) {
        const c = d.slidesPerGroup - l.length % d.slidesPerGroup;
        if (c !== d.slidesPerGroup)
            for (let r = 0; r < c; r += 1) {
                const o = j("div", {
                    class: `${d.slideClass} ${d.slideBlankClass}`
                });
                l.push(o)
            }
    }
    d.slidesPerView === "auto" && !d.loopedSlides && (d.loopedSlides = l.length);
    const u = ie(l, d)
      , n = []
      , g = [];
    return l.forEach((c,r)=>{
        r < u && g.push(s(c, r, "prepend")),
        r < l.length && r >= l.length - u && n.push(s(c, r, "append"))
    }
    ),
    a.value && (a.value.loopedSlides = u),
    [...n, ...l, ...g]
}
function ge(a, e, d, l) {
    const s = [];
    if (!e)
        return s;
    const u = r=>{
        s.indexOf(r) < 0 && s.push(r)
    }
      , n = l.map(r=>r.props && r.props.key)
      , g = d.map(r=>r.props && r.props.key);
    return n.join("") !== g.join("") && s.push("children"),
    l.length !== d.length && s.push("children"),
    ne.filter(r=>r[0] === "_").map(r=>r.replace(/_/, "")).forEach(r=>{
        if (r in a && r in e)
            if (H(a[r]) && H(e[r])) {
                const o = Object.keys(a[r])
                  , p = Object.keys(e[r]);
                o.length !== p.length ? u(r) : (o.forEach(z=>{
                    a[r][z] !== e[r][z] && u(r)
                }
                ),
                p.forEach(z=>{
                    a[r][z] !== e[r][z] && u(r)
                }
                ))
            } else
                a[r] !== e[r] && u(r)
    }
    ),
    s
}
function V(a, e, d) {
    a === void 0 && (a = {});
    const l = []
      , s = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    }
      , u = (n,g)=>{
        !Array.isArray(n) || n.forEach(c=>{
            const r = typeof c.type == "symbol";
            g === "default" && (g = "container-end"),
            r && c.children ? u(c.children, "default") : c.type && (c.type.name === "SwiperSlide" || c.type.name === "AsyncComponentWrapper") ? l.push(c) : s[g] && s[g].push(c)
        }
        )
    }
    ;
    return Object.keys(a).forEach(n=>{
        if (typeof a[n] != "function")
            return;
        const g = a[n]();
        u(g, n)
    }
    ),
    d.value = e.value,
    e.value = l,
    {
        slides: l,
        slots: s
    }
}
function ve(a) {
    let {swiper: e, slides: d, passedParams: l, changedParams: s, nextEl: u, prevEl: n, paginationEl: g, scrollbarEl: c} = a;
    const r = s.filter(b=>b !== "children" && b !== "direction")
      , {params: o, pagination: p, navigation: z, scrollbar: x, virtual: v, thumbs: h} = e;
    let t, i, S, m, y;
    s.includes("thumbs") && l.thumbs && l.thumbs.swiper && o.thumbs && !o.thumbs.swiper && (t = !0),
    s.includes("controller") && l.controller && l.controller.control && o.controller && !o.controller.control && (i = !0),
    s.includes("pagination") && l.pagination && (l.pagination.el || g) && (o.pagination || o.pagination === !1) && p && !p.el && (S = !0),
    s.includes("scrollbar") && l.scrollbar && (l.scrollbar.el || c) && (o.scrollbar || o.scrollbar === !1) && x && !x.el && (m = !0),
    s.includes("navigation") && l.navigation && (l.navigation.prevEl || n) && (l.navigation.nextEl || u) && (o.navigation || o.navigation === !1) && z && !z.prevEl && !z.nextEl && (y = !0);
    const _ = b=>{
        !e[b] || (e[b].destroy(),
        b === "navigation" ? (o[b].prevEl = void 0,
        o[b].nextEl = void 0,
        e[b].prevEl = void 0,
        e[b].nextEl = void 0) : (o[b].el = void 0,
        e[b].el = void 0))
    }
    ;
    r.forEach(b=>{
        if (H(o[b]) && H(l[b]))
            A(o[b], l[b]);
        else {
            const E = l[b];
            (E === !0 || E === !1) && (b === "navigation" || b === "pagination" || b === "scrollbar") ? E === !1 && _(b) : o[b] = l[b]
        }
    }
    ),
    s.includes("children") && v && o.virtual.enabled ? (v.slides = d,
    v.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
    t && h.init() && h.update(!0),
    i && (e.controller.control = o.controller.control),
    S && (g && (o.pagination.el = g),
    p.init(),
    p.render(),
    p.update()),
    m && (c && (o.scrollbar.el = c),
    x.init(),
    x.updateSize(),
    x.setTranslate()),
    y && (u && (o.navigation.nextEl = u),
    n && (o.navigation.prevEl = n),
    z.init(),
    z.update()),
    s.includes("allowSlideNext") && (e.allowSlideNext = l.allowSlideNext),
    s.includes("allowSlidePrev") && (e.allowSlidePrev = l.allowSlidePrev),
    s.includes("direction") && e.changeDirection(l.direction, !1),
    e.update()
}
function be(a) {
    !a || a.destroyed || !a.params.virtual || a.params.virtual && !a.params.virtual.enabled || (a.updateSlides(),
    a.updateProgress(),
    a.updateSlidesClasses(),
    a.lazy && a.params.lazy.enabled && a.lazy.load(),
    a.parallax && a.params.parallax && a.params.parallax.enabled && a.parallax.setTranslate())
}
function me(a, e, d) {
    if (!d)
        return null;
    const l = a.value.isHorizontal() ? {
        [a.value.rtlTranslate ? "right" : "left"]: `${d.offset}px`
    } : {
        top: `${d.offset}px`
    };
    return e.filter((s,u)=>u >= d.from && u <= d.to).map(s=>(s.props || (s.props = {}),
    s.props.style || (s.props.style = {}),
    s.props.swiperRef = a,
    s.props.style = l,
    j(s.type, {
        ...s.props
    }, s.children)))
}
const Ee = {
    name: "Swiper",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        wrapperTag: {
            type: String,
            default: "div"
        },
        modules: {
            type: Array,
            default: void 0
        },
        init: {
            type: Boolean,
            default: void 0
        },
        direction: {
            type: String,
            default: void 0
        },
        touchEventsTarget: {
            type: String,
            default: void 0
        },
        initialSlide: {
            type: Number,
            default: void 0
        },
        speed: {
            type: Number,
            default: void 0
        },
        cssMode: {
            type: Boolean,
            default: void 0
        },
        updateOnWindowResize: {
            type: Boolean,
            default: void 0
        },
        resizeObserver: {
            type: Boolean,
            default: void 0
        },
        nested: {
            type: Boolean,
            default: void 0
        },
        focusableElements: {
            type: String,
            default: void 0
        },
        width: {
            type: Number,
            default: void 0
        },
        height: {
            type: Number,
            default: void 0
        },
        preventInteractionOnTransition: {
            type: Boolean,
            default: void 0
        },
        userAgent: {
            type: String,
            default: void 0
        },
        url: {
            type: String,
            default: void 0
        },
        edgeSwipeDetection: {
            type: [Boolean, String],
            default: void 0
        },
        edgeSwipeThreshold: {
            type: Number,
            default: void 0
        },
        autoHeight: {
            type: Boolean,
            default: void 0
        },
        setWrapperSize: {
            type: Boolean,
            default: void 0
        },
        virtualTranslate: {
            type: Boolean,
            default: void 0
        },
        effect: {
            type: String,
            default: void 0
        },
        breakpoints: {
            type: Object,
            default: void 0
        },
        spaceBetween: {
            type: Number,
            default: void 0
        },
        slidesPerView: {
            type: [Number, String],
            default: void 0
        },
        maxBackfaceHiddenSlides: {
            type: Number,
            default: void 0
        },
        slidesPerGroup: {
            type: Number,
            default: void 0
        },
        slidesPerGroupSkip: {
            type: Number,
            default: void 0
        },
        slidesPerGroupAuto: {
            type: Boolean,
            default: void 0
        },
        centeredSlides: {
            type: Boolean,
            default: void 0
        },
        centeredSlidesBounds: {
            type: Boolean,
            default: void 0
        },
        slidesOffsetBefore: {
            type: Number,
            default: void 0
        },
        slidesOffsetAfter: {
            type: Number,
            default: void 0
        },
        normalizeSlideIndex: {
            type: Boolean,
            default: void 0
        },
        centerInsufficientSlides: {
            type: Boolean,
            default: void 0
        },
        watchOverflow: {
            type: Boolean,
            default: void 0
        },
        roundLengths: {
            type: Boolean,
            default: void 0
        },
        touchRatio: {
            type: Number,
            default: void 0
        },
        touchAngle: {
            type: Number,
            default: void 0
        },
        simulateTouch: {
            type: Boolean,
            default: void 0
        },
        shortSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipes: {
            type: Boolean,
            default: void 0
        },
        longSwipesRatio: {
            type: Number,
            default: void 0
        },
        longSwipesMs: {
            type: Number,
            default: void 0
        },
        followFinger: {
            type: Boolean,
            default: void 0
        },
        allowTouchMove: {
            type: Boolean,
            default: void 0
        },
        threshold: {
            type: Number,
            default: void 0
        },
        touchMoveStopPropagation: {
            type: Boolean,
            default: void 0
        },
        touchStartPreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchStartForcePreventDefault: {
            type: Boolean,
            default: void 0
        },
        touchReleaseOnEdges: {
            type: Boolean,
            default: void 0
        },
        uniqueNavElements: {
            type: Boolean,
            default: void 0
        },
        resistance: {
            type: Boolean,
            default: void 0
        },
        resistanceRatio: {
            type: Number,
            default: void 0
        },
        watchSlidesProgress: {
            type: Boolean,
            default: void 0
        },
        grabCursor: {
            type: Boolean,
            default: void 0
        },
        preventClicks: {
            type: Boolean,
            default: void 0
        },
        preventClicksPropagation: {
            type: Boolean,
            default: void 0
        },
        slideToClickedSlide: {
            type: Boolean,
            default: void 0
        },
        preloadImages: {
            type: Boolean,
            default: void 0
        },
        updateOnImagesReady: {
            type: Boolean,
            default: void 0
        },
        loop: {
            type: Boolean,
            default: void 0
        },
        loopAdditionalSlides: {
            type: Number,
            default: void 0
        },
        loopedSlides: {
            type: Number,
            default: void 0
        },
        loopFillGroupWithBlank: {
            type: Boolean,
            default: void 0
        },
        loopPreventsSlide: {
            type: Boolean,
            default: void 0
        },
        rewind: {
            type: Boolean,
            default: void 0
        },
        allowSlidePrev: {
            type: Boolean,
            default: void 0
        },
        allowSlideNext: {
            type: Boolean,
            default: void 0
        },
        swipeHandler: {
            type: Boolean,
            default: void 0
        },
        noSwiping: {
            type: Boolean,
            default: void 0
        },
        noSwipingClass: {
            type: String,
            default: void 0
        },
        noSwipingSelector: {
            type: String,
            default: void 0
        },
        passiveListeners: {
            type: Boolean,
            default: void 0
        },
        containerModifierClass: {
            type: String,
            default: void 0
        },
        slideClass: {
            type: String,
            default: void 0
        },
        slideBlankClass: {
            type: String,
            default: void 0
        },
        slideActiveClass: {
            type: String,
            default: void 0
        },
        slideDuplicateActiveClass: {
            type: String,
            default: void 0
        },
        slideVisibleClass: {
            type: String,
            default: void 0
        },
        slideDuplicateClass: {
            type: String,
            default: void 0
        },
        slideNextClass: {
            type: String,
            default: void 0
        },
        slideDuplicateNextClass: {
            type: String,
            default: void 0
        },
        slidePrevClass: {
            type: String,
            default: void 0
        },
        slideDuplicatePrevClass: {
            type: String,
            default: void 0
        },
        wrapperClass: {
            type: String,
            default: void 0
        },
        runCallbacksOnInit: {
            type: Boolean,
            default: void 0
        },
        observer: {
            type: Boolean,
            default: void 0
        },
        observeParents: {
            type: Boolean,
            default: void 0
        },
        observeSlideChildren: {
            type: Boolean,
            default: void 0
        },
        a11y: {
            type: [Boolean, Object],
            default: void 0
        },
        autoplay: {
            type: [Boolean, Object],
            default: void 0
        },
        controller: {
            type: Object,
            default: void 0
        },
        coverflowEffect: {
            type: Object,
            default: void 0
        },
        cubeEffect: {
            type: Object,
            default: void 0
        },
        fadeEffect: {
            type: Object,
            default: void 0
        },
        flipEffect: {
            type: Object,
            default: void 0
        },
        creativeEffect: {
            type: Object,
            default: void 0
        },
        cardsEffect: {
            type: Object,
            default: void 0
        },
        hashNavigation: {
            type: [Boolean, Object],
            default: void 0
        },
        history: {
            type: [Boolean, Object],
            default: void 0
        },
        keyboard: {
            type: [Boolean, Object],
            default: void 0
        },
        lazy: {
            type: [Boolean, Object],
            default: void 0
        },
        mousewheel: {
            type: [Boolean, Object],
            default: void 0
        },
        navigation: {
            type: [Boolean, Object],
            default: void 0
        },
        pagination: {
            type: [Boolean, Object],
            default: void 0
        },
        parallax: {
            type: [Boolean, Object],
            default: void 0
        },
        scrollbar: {
            type: [Boolean, Object],
            default: void 0
        },
        thumbs: {
            type: Object,
            default: void 0
        },
        virtual: {
            type: [Boolean, Object],
            default: void 0
        },
        zoom: {
            type: [Boolean, Object],
            default: void 0
        },
        grid: {
            type: [Object],
            default: void 0
        },
        freeMode: {
            type: [Boolean, Object],
            default: void 0
        },
        enabled: {
            type: Boolean,
            default: void 0
        }
    },
    emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "imagesReady", "init", "keyPress", "lazyImageLoad", "lazyImageReady", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
    setup(a, e) {
        let {slots: d, emit: l} = e;
        const {tag: s, wrapperTag: u} = a
          , n = D("swiper")
          , g = D(null)
          , c = D(!1)
          , r = D(!1)
          , o = D(null)
          , p = D(null)
          , z = D(null)
          , x = {
            value: []
        }
          , v = {
            value: []
        }
          , h = D(null)
          , t = D(null)
          , i = D(null)
          , S = D(null)
          , {params: m, passedParams: y} = X(a);
        V(d, x, v),
        z.value = y,
        v.value = x.value;
        const _ = ()=>{
            V(d, x, v),
            c.value = !0
        }
        ;
        if (m.onAny = function(E) {
            for (var $ = arguments.length, M = new Array($ > 1 ? $ - 1 : 0), T = 1; T < $; T++)
                M[T - 1] = arguments[T];
            l(E, ...M)
        }
        ,
        Object.assign(m.on, {
            _beforeBreakpoint: _,
            _containerClasses(E, $) {
                n.value = $
            }
        }),
        p.value = pe(m),
        p.value.loopCreate = ()=>{}
        ,
        p.value.loopDestroy = ()=>{}
        ,
        m.loop && (p.value.loopedSlides = ie(x.value, m)),
        p.value.virtual && p.value.params.virtual.enabled) {
            p.value.virtual.slides = x.value;
            const E = {
                cache: !1,
                slides: x.value,
                renderExternal: $=>{
                    g.value = $
                }
                ,
                renderExternalUpdate: !1
            };
            A(p.value.params.virtual, E),
            A(p.value.originalParams.virtual, E)
        }
        K(()=>{
            !r.value && p.value && (p.value.emitSlidesClasses(),
            r.value = !0);
            const {passedParams: E} = X(a)
              , $ = ge(E, z.value, x.value, v.value);
            z.value = E,
            ($.length || c.value) && p.value && !p.value.destroyed && ve({
                swiper: p.value,
                slides: x.value,
                passedParams: E,
                changedParams: $,
                nextEl: h.value,
                prevEl: t.value,
                scrollbarEl: S.value,
                paginationEl: i.value
            }),
            c.value = !1
        }
        ),
        Q("swiper", p),
        re(g, ()=>{
            oe(()=>{
                be(p.value)
            }
            )
        }
        ),
        Z(()=>{
            !o.value || (fe({
                el: o.value,
                nextEl: h.value,
                prevEl: t.value,
                paginationEl: i.value,
                scrollbarEl: S.value,
                swiper: p.value
            }, m),
            l("swiper", p.value))
        }
        ),
        J(()=>{
            p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        }
        );
        function b(E) {
            return m.virtual ? me(p, E, g.value) : !m.loop || p.value && p.value.destroyed ? (E.forEach($=>{
                $.props || ($.props = {}),
                $.props.swiperRef = p
            }
            ),
            E) : ce(p, E, m)
        }
        return ()=>{
            const {slides: E, slots: $} = V(d, x, v);
            return j(s, {
                ref: o,
                class: te(n.value)
            }, [$["container-start"], j(u, {
                class: "swiper-wrapper"
            }, [$["wrapper-start"], b(E), $["wrapper-end"]]), ee(a) && [j("div", {
                ref: t,
                class: "swiper-button-prev"
            }), j("div", {
                ref: h,
                class: "swiper-button-next"
            })], le(a) && j("div", {
                ref: S,
                class: "swiper-scrollbar"
            }), ae(a) && j("div", {
                ref: i,
                class: "swiper-pagination"
            }), $["container-end"]])
        }
    }
}
  , $e = {
    name: "SwiperSlide",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        swiperRef: {
            type: Object,
            required: !1
        },
        zoom: {
            type: Boolean,
            default: void 0
        },
        virtualIndex: {
            type: [String, Number],
            default: void 0
        }
    },
    setup(a, e) {
        let {slots: d} = e
          , l = !1;
        const {swiperRef: s} = a
          , u = D(null)
          , n = D("swiper-slide");
        function g(r, o, p) {
            o === u.value && (n.value = p)
        }
        Z(()=>{
            !s.value || (s.value.on("_slideClass", g),
            l = !0)
        }
        ),
        de(()=>{
            l || !s || !s.value || (s.value.on("_slideClass", g),
            l = !0)
        }
        ),
        K(()=>{
            !u.value || !s || !s.value || s.value.destroyed && n.value !== "swiper-slide" && (n.value = "swiper-slide")
        }
        ),
        J(()=>{
            !s || !s.value || s.value.off("_slideClass", g)
        }
        );
        const c = ue(()=>({
            isActive: n.value.indexOf("swiper-slide-active") >= 0 || n.value.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: n.value.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: n.value.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: n.value.indexOf("swiper-slide-prev") >= 0 || n.value.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: n.value.indexOf("swiper-slide-next") >= 0 || n.value.indexOf("swiper-slide-duplicate-next") >= 0
        }));
        return Q("swiperSlide", c),
        ()=>j(a.tag, {
            class: te(`${n.value}`),
            ref: u,
            "data-swiper-slide-index": a.virtualIndex
        }, a.zoom ? j("div", {
            class: "swiper-zoom-container",
            "data-swiper-zoom": typeof a.zoom == "number" ? a.zoom : void 0
        }, d.default && d.default(c.value)) : d.default && d.default(c.value))
    }
};
export {Ce as N, ye as P, Ee as S, $e as a, Se as b};
