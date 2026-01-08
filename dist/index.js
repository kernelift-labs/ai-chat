import { createElementBlock as de, openBlock as ce, createStaticVNode as Rn, defineComponent as Kt, mergeModels as Et, useModel as gt, createElementVNode as re, withDirectives as st, renderSlot as ye, createVNode as Ct, toDisplayString as Pe, createTextVNode as Ft, unref as at, normalizeClass as rt, vShow as ct, ref as tt, computed as De, createCommentVNode as Ve, createBlock as Zt, withCtx as xe, Fragment as Dt, renderList as Vt, normalizeStyle as Pt, Teleport as Ln, withModifiers as Gr, onMounted as zr, nextTick as qr, toValue as nt, readonly as Ha, watch as At, getCurrentScope as Un, onScopeDispose as Dn, getCurrentInstance as Vn, toRef as Pn, customRef as Kn, shallowRef as On, onUnmounted as Ya, useCssVars as Wa, vModelText as Mn, Transition as Zr, isRef as _r } from "vue";
import { MdRender as Xa } from "@kernelift/markdown";
const kt = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [p, I] of e)
    a[p] = I;
  return a;
}, xn = {}, Fn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Gn(t, e) {
  return ce(), de("svg", Fn, [...e[0] || (e[0] = [
    Rn('<g><circle cx="12" cy="3" r="1" fill="#2c6af3"><animate id="SVGelgoqhuA" attributeName="r" begin="0;SVGSRzJybSJ.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="16.5" cy="4.21" r="1" fill="#2c6af3"><animate id="SVGBcQu6cCi" attributeName="r" begin="SVGelgoqhuA.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="7.5" cy="4.21" r="1" fill="#2c6af3"><animate id="SVGSRzJybSJ" attributeName="r" begin="SVGeZGzNdVZ.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="19.79" cy="7.5" r="1" fill="#2c6af3"><animate id="SVGG5Q0fe0M" attributeName="r" begin="SVGBcQu6cCi.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="4.21" cy="7.5" r="1" fill="#2c6af3"><animate id="SVGeZGzNdVZ" attributeName="r" begin="SVGUTnihcal.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="21" cy="12" r="1" fill="#2c6af3"><animate id="SVG8aQG8dpc" attributeName="r" begin="SVGG5Q0fe0M.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="3" cy="12" r="1" fill="#2c6af3"><animate id="SVGUTnihcal" attributeName="r" begin="SVGHktsvT5Q.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="19.79" cy="16.5" r="1" fill="#2c6af3"><animate id="SVGqCF3Scrd" attributeName="r" begin="SVG8aQG8dpc.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="4.21" cy="16.5" r="1" fill="#2c6af3"><animate id="SVGHktsvT5Q" attributeName="r" begin="SVGSFNCBbxb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="16.5" cy="19.79" r="1" fill="#2c6af3"><animate id="SVGMFYo1cJN" attributeName="r" begin="SVGqCF3Scrd.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="7.5" cy="19.79" r="1" fill="#2c6af3"><animate id="SVGSFNCBbxb" attributeName="r" begin="SVGLSoLpdOI.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><circle cx="12" cy="21" r="1" fill="#2c6af3"><animate id="SVGLSoLpdOI" attributeName="r" begin="SVGMFYo1cJN.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"></animate></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"></animateTransform></g>', 1)
  ])]);
}
const Za = /* @__PURE__ */ kt(xn, [["render", Gn]]), jn = { class: "kernelift-thinking-process" }, zn = {
  key: 0,
  class: "kernelift-thinking-process__loading"
}, qn = { class: "kernelift-thinking-process__loading-text" }, Qn = {
  key: 1,
  class: "kernelift-thinking-process__completed"
}, Jn = { class: "kernelift-thinking-process__collapse-icon" }, Hn = {
  key: 0,
  class: "material-symbols--chevron-right"
}, Yn = {
  key: 1,
  class: "material-symbols--stat-minus-1"
}, Wn = { class: "kernelift-thinking-process__content" }, Xn = /* @__PURE__ */ Kt({
  __name: "thinking-process",
  props: /* @__PURE__ */ Et({
    data: {},
    markdownClass: { default: "" },
    loading: { type: Boolean, default: !1 },
    onCopy: {},
    i18n: { default: () => ({}) },
    plugins: { default: () => [] },
    options: { default: () => ({}) },
    afterRender: {},
    themeMode: {}
  }, {
    collapse: { type: Boolean, default: !1 },
    collapseModifiers: {}
  }),
  emits: ["update:collapse"],
  setup(t) {
    const e = gt(t, "collapse");
    function a() {
      e.value = !e.value;
    }
    return (p, I) => (ce(), de("div", jn, [
      re("header", {
        class: "kernelift-thinking-process__header",
        onClick: a
      }, [
        t.loading ? (ce(), de("div", zn, [
          Ct(Za, { class: "kernelift-thinking-process__loading-icon" }),
          re("div", qn, Pe(t.i18n?.chat?.thinking ?? "正在思考中"), 1)
        ])) : (ce(), de("div", Qn, [
          I[0] || (I[0] = re("i", { class: "material-symbols--conversion-path kernelift-thinking-process__completed-icon" }, null, -1)),
          Ft(" " + Pe(t.i18n?.chat?.thinked ?? "已深度思考"), 1)
        ])),
        re("div", Jn, [
          e.value ? (ce(), de("i", Hn)) : (ce(), de("i", Yn))
        ]),
        ye(p.$slots, "header", {}, void 0, !0)
      ]),
      st(re("main", Wn, [
        Ct(at(Xa), {
          class: rt(["kernelift-thinking-process__markdown", t.markdownClass || ""]),
          "model-value": t.data,
          "on-copy": t.onCopy,
          "copy-text": t.i18n?.chat?.button?.copyCode ?? "复制代码",
          "collapse-text": t.i18n?.chat?.button?.collapse ?? "收起代码",
          "expand-text": t.i18n?.chat?.button?.expand ?? "展开代码",
          plugins: t.plugins,
          options: t.options,
          "after-render": t.afterRender,
          "theme-mode": t.themeMode
        }, null, 8, ["model-value", "on-copy", "class", "copy-text", "collapse-text", "expand-text", "plugins", "options", "after-render", "theme-mode"])
      ], 512), [
        [ct, !e.value]
      ])
    ]));
  }
}), Zn = /* @__PURE__ */ kt(Xn, [["__scopeId", "data-v-4ae8e797"]]), _n = { class: "kernelift-chat-bubble" }, $n = { class: "chat-bubble__main" }, ei = {
  key: 0,
  class: "kernelift-chat-bubble__thinking"
}, ti = {
  key: 2,
  class: "kernelift-chat-bubble__user"
}, ri = { class: "kernelift-chat-bubble__user-content" }, ai = ["onClick"], ni = ["onClick"], ii = /* @__PURE__ */ Kt({
  __name: "chat-bubble",
  props: /* @__PURE__ */ Et({
    isLast: { type: Boolean },
    markdownClass: {},
    onCopy: { type: Function },
    i18n: {},
    isMobile: { type: Boolean },
    extEvents: {},
    plugins: {},
    options: {},
    afterRender: { type: Function },
    themeMode: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Et(["bubble-event"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = t, p = gt(t, "modelValue"), I = e, S = tt(!1), f = tt({ x: 0, y: 0 }), r = tt(!1);
    let g = null, l = !1;
    const b = De(() => {
      const c = [
        {
          key: "copy",
          icon: "material-symbols--file-copy-outline",
          label: a.i18n?.chat?.button?.copy ?? "复制"
        },
        {
          key: "reload",
          icon: "material-symbols--rotate-left",
          label: a.i18n?.chat?.button?.reload ?? "重新生成"
        }
      ];
      return p.value.role === "user" ? c : [
        ...c,
        {
          key: "like",
          icon: "material-symbols--thumb-up-outline",
          iconActive: "material-symbols--thumb-up",
          label: a.i18n?.chat?.button?.like ?? "点赞",
          active: p.value.isLiked,
          activeColor: "oklch(0.769 0.188 70.08)"
        },
        {
          key: "dislike",
          icon: "material-symbols--thumb-down-outline",
          iconActive: "material-symbols--thumb-down",
          label: a.i18n?.chat?.button?.dislike ?? "点踩",
          active: p.value.isDisliked,
          activeColor: "#fb2c36"
        }
      ];
    }), U = De(() => [
      ...b.value,
      ...p.value.role !== "user" ? a.extEvents || [] : []
    ]), E = De(() => U.value), u = (c) => {
      if (!a.isMobile) return;
      l = !1, r.value = !0;
      const i = c.touches[0];
      i && (g = setTimeout(() => {
        if (window.getSelection?.()?.toString().trim()) {
          r.value = !1;
          return;
        }
        l = !0, c.preventDefault(), f.value = {
          x: i.clientX,
          y: i.clientY
        }, S.value = !0, r.value = !1;
      }, 500));
    }, y = (c) => {
      r.value = !1, g && (clearTimeout(g), g = null), l && c.preventDefault();
    }, C = () => {
      r.value = !1, g && (clearTimeout(g), g = null);
    }, m = (c) => {
      a.isMobile && c.preventDefault();
    }, s = (c) => {
      I("bubble-event", c, p.value), S.value = !1;
    }, h = () => {
      S.value = !1;
    }, v = (c) => {
      if (a.isMobile && l) {
        l = !1;
        return;
      }
      I("bubble-event", c, p.value);
    }, B = (c) => c.active && c.iconActive ? c.iconActive : c.icon, R = (c) => {
      if (c.iconStyle)
        return c.iconStyle;
      if (c.active && c.activeColor)
        return { color: c.activeColor };
    };
    return (c, i) => (ce(), de("div", _n, [
      re("main", $n, [
        ye(c.$slots, "header", {}, void 0, !0),
        p.value.thoughtProcess ? (ce(), de("div", ei, [
          Ct(Zn, {
            collapse: p.value.thoughtCollapse,
            "onUpdate:collapse": i[0] || (i[0] = (n) => p.value.thoughtCollapse = n),
            loading: p.value.isThinking,
            data: p.value.thoughtProcess,
            "markdown-class": t.markdownClass,
            "on-copy": t.onCopy,
            i18n: t.i18n,
            plugins: t.plugins,
            options: t.options,
            "after-render": t.afterRender,
            "theme-mode": t.themeMode
          }, {
            header: xe(() => [
              ye(c.$slots, "thinking-header", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["collapse", "loading", "data", "markdown-class", "on-copy", "i18n", "plugins", "options", "after-render", "theme-mode"])
        ])) : Ve("", !0),
        (p.value.role === "assistant" || p.value.role === "system") && !p.value.isThinking ? (ce(), de("div", {
          key: 1,
          class: rt(["kernelift-chat-bubble__assistant", {
            "kernelift-chat-bubble__assistant--pressing": r.value && t.isMobile,
            "kernelift-chat-bubble__assistant--mobile": t.isMobile
          }]),
          onTouchstart: u,
          onTouchend: y,
          onTouchmovePassive: C,
          onContextmenu: m
        }, [
          ye(c.$slots, "content-header", {}, void 0, !0),
          ye(c.$slots, "content", {}, () => [
            Ct(at(Xa), {
              "model-value": p.value.content,
              "on-copy": t.onCopy,
              class: rt(t.markdownClass || ""),
              "copy-text": t.i18n?.chat?.button?.copyCode ?? "复制代码",
              "collapse-text": t.i18n?.chat?.button?.collapse ?? "收起代码",
              "expand-text": t.i18n?.chat?.button?.expand ?? "展开代码",
              plugins: t.plugins,
              options: t.options,
              "after-render": t.afterRender,
              "theme-mode": t.themeMode
            }, null, 8, ["model-value", "on-copy", "class", "copy-text", "collapse-text", "expand-text", "plugins", "options", "after-render", "theme-mode"])
          ], !0),
          ye(c.$slots, "content-footer", {}, void 0, !0)
        ], 34)) : p.value.role === "user" ? (ce(), de("div", ti, [
          re("div", ri, Pe(p.value.content), 1)
        ])) : Ve("", !0),
        ye(c.$slots, "footer", {}, () => [
          !p.value.loading && !p.value.hideFooterTools ? (ce(), de("footer", {
            key: 0,
            class: rt(["kernelift-chat-bubble__footer", { "kernelift-chat-bubble__footer--user": p.value.role === "user" }])
          }, [
            re("section", {
              class: rt(["kernelift-chat-bubble__actions", {
                "kernelift-chat-bubble__actions--hover": !t.isLast && !p.value.isLiked && !t.isMobile && p.value.role !== "user"
              }])
            }, [
              (ce(!0), de(Dt, null, Vt(U.value, (n) => (ce(), de("div", {
                key: n.key,
                class: "kernelift-chat-bubble__action-item",
                onClick: (T) => v(n.key)
              }, [
                re("i", {
                  class: rt(B(n)),
                  style: Pt(R(n))
                }, null, 6)
              ], 8, ai))), 128)),
              ye(c.$slots, "bubble-event", {}, void 0, !0)
            ], 2)
          ], 2)) : Ve("", !0)
        ], !0),
        (ce(), Zt(Ln, { to: "body" }, [
          S.value && t.isMobile ? (ce(), de("div", {
            key: 0,
            class: "kernelift-chat-bubble__context-overlay",
            onClick: h
          }, [
            re("div", {
              class: "kernelift-chat-bubble__context-menu",
              style: Pt({
                left: f.value.x + "px",
                top: f.value.y + "px"
              }),
              onClick: i[1] || (i[1] = Gr(() => {
              }, ["stop"]))
            }, [
              (ce(!0), de(Dt, null, Vt(E.value, (n) => (ce(), de("div", {
                key: n.key,
                class: "kernelift-chat-bubble__context-item",
                onClick: (T) => s(n.key)
              }, [
                re("i", {
                  class: rt(B(n)),
                  style: Pt(R(n))
                }, null, 6),
                re("span", null, Pe(n.label), 1)
              ], 8, ni))), 128))
            ], 4)
          ])) : Ve("", !0)
        ]))
      ])
    ]));
  }
}), $r = /* @__PURE__ */ kt(ii, [["__scopeId", "data-v-cca0b47b"]]), jr = "data:image/png;base64,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";
function si(t, e) {
  return Un() ? (Dn(t, e), !0) : !1;
}
const oi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const li = Object.prototype.toString, ui = (t) => li.call(t) === "[object Object]", ci = () => {
};
function fi(...t) {
  if (t.length !== 1) return Pn(...t);
  const e = t[0];
  return typeof e == "function" ? Ha(Kn(() => ({
    get: e,
    set: ci
  }))) : tt(e);
}
function pi(t, e) {
  function a(...p) {
    return new Promise((I, S) => {
      Promise.resolve(t(() => e.apply(this, p), {
        fn: e,
        thisArg: this,
        args: p
      })).then(I).catch(S);
    });
  }
  return a;
}
const _a = (t) => t();
function di(t = _a, e = {}) {
  const { initialState: a = "active" } = e, p = fi(a === "active");
  function I() {
    p.value = !1;
  }
  function S() {
    p.value = !0;
  }
  const f = (...r) => {
    p.value && t(...r);
  };
  return {
    isActive: Ha(p),
    pause: I,
    resume: S,
    eventFilter: f
  };
}
function rr(t) {
  return Array.isArray(t) ? t : [t];
}
function hi(t) {
  return Vn();
}
function gi(t, e, a = {}) {
  const { eventFilter: p = _a, ...I } = a;
  return At(t, pi(p, e), I);
}
function yi(t, e, a = {}) {
  const { eventFilter: p, initialState: I = "active", ...S } = a, { eventFilter: f, pause: r, resume: g, isActive: l } = di(p, { initialState: I });
  return {
    stop: gi(t, e, {
      ...S,
      eventFilter: f
    }),
    pause: r,
    resume: g,
    isActive: l
  };
}
const vi = yi;
function mi(t, e = !0, a) {
  hi() ? zr(t, a) : e ? t() : qr(t);
}
const Ci = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function Ei(t, e, a, p) {
  let I = t < 12 ? "AM" : "PM";
  return p && (I = I.split("").reduce((S, f) => S += `${f}.`, "")), a ? I.toLowerCase() : I;
}
function Tt(t) {
  const e = [
    "th",
    "st",
    "nd",
    "rd"
  ], a = t % 100;
  return t + (e[(a - 20) % 10] || e[a] || e[0]);
}
function Si(t, e, a = {}) {
  var p;
  const I = t.getFullYear(), S = t.getMonth(), f = t.getDate(), r = t.getHours(), g = t.getMinutes(), l = t.getSeconds(), b = t.getMilliseconds(), U = t.getDay(), E = (p = a.customMeridiem) !== null && p !== void 0 ? p : Ei, u = (C) => {
    var m;
    return (m = C.split(" ")[1]) !== null && m !== void 0 ? m : "";
  }, y = {
    Yo: () => Tt(I),
    YY: () => String(I).slice(-2),
    YYYY: () => I,
    M: () => S + 1,
    Mo: () => Tt(S + 1),
    MM: () => `${S + 1}`.padStart(2, "0"),
    MMM: () => t.toLocaleDateString(nt(a.locales), { month: "short" }),
    MMMM: () => t.toLocaleDateString(nt(a.locales), { month: "long" }),
    D: () => String(f),
    Do: () => Tt(f),
    DD: () => `${f}`.padStart(2, "0"),
    H: () => String(r),
    Ho: () => Tt(r),
    HH: () => `${r}`.padStart(2, "0"),
    h: () => `${r % 12 || 12}`.padStart(1, "0"),
    ho: () => Tt(r % 12 || 12),
    hh: () => `${r % 12 || 12}`.padStart(2, "0"),
    m: () => String(g),
    mo: () => Tt(g),
    mm: () => `${g}`.padStart(2, "0"),
    s: () => String(l),
    so: () => Tt(l),
    ss: () => `${l}`.padStart(2, "0"),
    SSS: () => `${b}`.padStart(3, "0"),
    d: () => U,
    dd: () => t.toLocaleDateString(nt(a.locales), { weekday: "narrow" }),
    ddd: () => t.toLocaleDateString(nt(a.locales), { weekday: "short" }),
    dddd: () => t.toLocaleDateString(nt(a.locales), { weekday: "long" }),
    A: () => E(r, g),
    AA: () => E(r, g, !1, !0),
    a: () => E(r, g, !0),
    aa: () => E(r, g, !0, !0),
    z: () => u(t.toLocaleDateString(nt(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => u(t.toLocaleDateString(nt(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => u(t.toLocaleDateString(nt(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => u(t.toLocaleDateString(nt(a.locales), { timeZoneName: "longOffset" }))
  };
  return e.replace(Ci, (C, m) => {
    var s, h;
    return (s = m ?? ((h = y[C]) === null || h === void 0 ? void 0 : h.call(y))) !== null && s !== void 0 ? s : C;
  });
}
function bi(t, e, a) {
  return At(t, e, {
    ...a,
    immediate: !0
  });
}
const xt = oi ? window : void 0;
function Ii(t) {
  var e;
  const a = nt(t);
  return (e = a?.$el) !== null && e !== void 0 ? e : a;
}
function ea(...t) {
  const e = [], a = () => {
    e.forEach((r) => r()), e.length = 0;
  }, p = (r, g, l, b) => (r.addEventListener(g, l, b), () => r.removeEventListener(g, l, b)), I = De(() => {
    const r = rr(nt(t[0])).filter((g) => g != null);
    return r.every((g) => typeof g != "string") ? r : void 0;
  }), S = bi(() => {
    var r, g;
    return [
      (r = (g = I.value) === null || g === void 0 ? void 0 : g.map((l) => Ii(l))) !== null && r !== void 0 ? r : [xt].filter((l) => l != null),
      rr(nt(I.value ? t[1] : t[0])),
      rr(at(I.value ? t[2] : t[1])),
      nt(I.value ? t[3] : t[2])
    ];
  }, ([r, g, l, b]) => {
    if (a(), !r?.length || !g?.length || !l?.length) return;
    const U = ui(b) ? { ...b } : b;
    e.push(...r.flatMap((E) => g.flatMap((u) => l.map((y) => p(E, u, y, U)))));
  }, { flush: "post" }), f = () => {
    S(), a();
  };
  return si(a), f;
}
const Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ht = "__vueuse_ssr_handlers__", Ai = /* @__PURE__ */ Bi();
function Bi() {
  return Ht in Jt || (Jt[Ht] = Jt[Ht] || {}), Jt[Ht];
}
function Ti(t, e) {
  return Ai[t] || e;
}
function ki(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const Ni = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, ta = "vueuse-storage";
function Ut(t, e, a, p = {}) {
  var I;
  const { flush: S = "pre", deep: f = !0, listenToStorageChanges: r = !0, writeDefaults: g = !0, mergeDefaults: l = !1, shallow: b, window: U = xt, eventFilter: E, onError: u = (x) => {
    console.error(x);
  }, initOnMounted: y } = p, C = (b ? On : tt)(typeof e == "function" ? e() : e), m = De(() => nt(t));
  if (!a) try {
    a = Ti("getDefaultStorage", () => xt?.localStorage)();
  } catch (x) {
    u(x);
  }
  if (!a) return C;
  const s = nt(e), h = ki(s), v = (I = p.serializer) !== null && I !== void 0 ? I : Ni[h], { pause: B, resume: R } = vi(C, (x) => V(x), {
    flush: S,
    deep: f,
    eventFilter: E
  });
  At(m, () => D(), { flush: S });
  let c = !1;
  const i = (x) => {
    y && !c || D(x);
  }, n = (x) => {
    y && !c || M(x);
  };
  U && r && (a instanceof Storage ? ea(U, "storage", i, { passive: !0 }) : ea(U, ta, n)), y ? mi(() => {
    c = !0, D();
  }) : D();
  function T(x, G) {
    if (U) {
      const z = {
        key: m.value,
        oldValue: x,
        newValue: G,
        storageArea: a
      };
      U.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", z) : new CustomEvent(ta, { detail: z }));
    }
  }
  function V(x) {
    try {
      const G = a.getItem(m.value);
      if (x == null)
        T(G, null), a.removeItem(m.value);
      else {
        const z = v.write(x);
        G !== z && (a.setItem(m.value, z), T(G, z));
      }
    } catch (G) {
      u(G);
    }
  }
  function O(x) {
    const G = x ? x.newValue : a.getItem(m.value);
    if (G == null)
      return g && s != null && a.setItem(m.value, v.write(s)), s;
    if (!x && l) {
      const z = v.read(G);
      return typeof l == "function" ? l(z, s) : h === "object" && !Array.isArray(z) ? {
        ...s,
        ...z
      } : z;
    } else return typeof G != "string" ? G : v.read(G);
  }
  function D(x) {
    if (!(x && x.storageArea !== a)) {
      if (x && x.key == null) {
        C.value = s;
        return;
      }
      if (!(x && x.key !== m.value)) {
        B();
        try {
          const G = v.write(C.value);
          (x === void 0 || x?.newValue !== G) && (C.value = O(x));
        } catch (G) {
          u(G);
        } finally {
          x ? qr(R) : R();
        }
      }
    }
  }
  function M(x) {
    D(x.detail);
  }
  return C;
}
const wi = { class: "kernelift-chat-sidebar" }, Ri = { class: "kernelift-chat-sidebar__header" }, Li = { class: "kernelift-chat-sidebar__new-chat" }, Ui = { class: "kernelift-chat-sidebar__actions" }, Di = { class: "kernelift-chat-sidebar__action-group" }, Vi = { class: "material-symbols--dark-mode" }, Pi = { class: "material-symbols--light-mode" }, Ki = { class: "material-symbols--left-panel-close-outline" }, Oi = { class: "kernelift-chat-sidebar__records" }, Mi = ["onClick"], xi = { class: "kernelift-chat-sidebar__record-content" }, Fi = { class: "kernelift-chat-sidebar__record-info" }, Gi = { class: "kernelift-chat-sidebar__record-name" }, ji = { class: "kernelift-chat-sidebar__record-time" }, zi = /* @__PURE__ */ Kt({
  __name: "chat-sidebar",
  props: /* @__PURE__ */ Et({
    data: {},
    actions: {},
    collapse: { type: Boolean, default: !1 },
    themeMode: { default: "light" },
    hasThemeMode: { type: Boolean, default: !1 },
    i18n: { default: () => ({}) },
    isMobile: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Et(["change", "clear", "change-collapse", "change-theme", "click-logo", "scroll-bottom"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = gt(t, "modelValue"), p = e;
    function I() {
      p("clear");
    }
    let S = null;
    const f = tt(null);
    return zr(() => {
      S = new IntersectionObserver((r) => {
        r[0]?.isIntersecting && p("scroll-bottom");
      }), f.value && S?.observe(f.value);
    }), Ya(() => {
      S && S?.disconnect();
    }), (r, g) => (ce(), de("div", wi, [
      re("div", Ri, [
        re("div", {
          class: "kernelift-chat-sidebar__logo",
          onClick: g[0] || (g[0] = (l) => p("click-logo"))
        }, [
          ye(r.$slots, "logo", {}, () => [
            g[3] || (g[3] = re("img", {
              src: jr,
              class: "kernelift-chat-sidebar__logo-img"
            }, null, -1))
          ], !0)
        ]),
        re("div", Li, [
          ye(r.$slots, "new-chat-button", { execute: I }, () => [
            re("button", {
              class: "kernelift-chat-sidebar__new-chat-btn",
              onClick: I
            }, [
              g[4] || (g[4] = re("i", { class: "material-symbols--add-2 kernelift-chat-sidebar__new-chat-icon" }, null, -1)),
              Ft(" " + Pe(t.i18n?.chat?.newChat ?? "创建新对话"), 1)
            ])
          ], !0)
        ]),
        re("div", Ui, [
          re("div", Di, [
            t.hasThemeMode ? (ce(), de("div", {
              key: 0,
              class: "kernelift-chat-sidebar__action-item",
              onClick: g[1] || (g[1] = (l) => p("change-theme", t.themeMode === "dark" ? "light" : "dark"))
            }, [
              st(re("i", Vi, null, 512), [
                [ct, t.themeMode === "light"]
              ]),
              st(re("i", Pi, null, 512), [
                [ct, t.themeMode === "dark"]
              ])
            ])) : Ve("", !0),
            re("div", {
              class: "kernelift-chat-sidebar__action-item",
              onClick: g[2] || (g[2] = (l) => p("change-collapse", !0))
            }, [
              st(re("i", Ki, null, 512), [
                [ct, !t.collapse]
              ])
            ])
          ])
        ])
      ]),
      re("div", Oi, [
        (ce(!0), de(Dt, null, Vt(t.data, (l) => (ce(), de("div", {
          key: l.id,
          class: rt(["kernelift-chat-sidebar__record-item", {
            "kernelift-chat-sidebar__record-item--active": a.value?.id === l.id
          }]),
          onClick: (b) => p("change", l)
        }, [
          ye(r.$slots, "record-dropdown", {
            record: l,
            actions: t.actions
          }, () => [
            g[5] || (g[5] = re("i", { class: "material-symbols--more-vert kernelift-chat-sidebar__record-action-icon" }, null, -1))
          ], !0),
          re("div", xi, Pe(l.content), 1),
          re("div", Fi, [
            re("div", Gi, Pe(l.name), 1),
            re("div", ji, Pe(at(Si)(new Date(l.createTime), "HH:mm:ss")), 1)
          ])
        ], 10, Mi))), 128)),
        re("div", {
          class: "sentinel",
          ref_key: "sentinel",
          ref: f
        }, null, 512)
      ]),
      ye(r.$slots, "footer", {}, void 0, !0)
    ]));
  }
}), qi = /* @__PURE__ */ kt(zi, [["__scopeId", "data-v-06e254fd"]]), Qi = { class: "kernelift-chat-sender" }, Ji = { class: "kernelift-chat-sender__container" }, Hi = { class: "kernelift-chat-sender__toolbar" }, Yi = { class: "kernelift-chat-sender__tools" }, Wi = {
  class: "material-symbols--genetics thinking-button__icon",
  style: { width: "1rem", height: "1rem" }
}, Xi = {
  class: "material-symbols--planet net-button__icon",
  style: { width: "1rem", height: "1rem" }
}, Zi = ["disabled"], _i = {
  class: "material-symbols--stop",
  style: { color: "white" }
}, $i = {
  class: "material-symbols--prompt-suggestion",
  style: { color: "white" }
}, es = /* @__PURE__ */ Kt({
  __name: "chat-sender",
  props: /* @__PURE__ */ Et({
    loading: { type: Boolean, default: !1 },
    hasThinking: { type: Boolean, default: !0 },
    hasNetSearch: { type: Boolean, default: !1 },
    inputHeight: { default: 140 },
    i18n: { default: () => ({}) },
    isMobile: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {},
    enableThink: { type: Boolean, default: !1 },
    enableThinkModifiers: {},
    enableNet: { type: Boolean, default: !1 },
    enableNetModifiers: {}
  }),
  emits: /* @__PURE__ */ Et(["send", "cancel"], ["update:modelValue", "update:enableThink", "update:enableNet"]),
  setup(t, { emit: e }) {
    Wa((y) => ({
      v482b8196: r.value,
      v226f6b8c: g.value
    }));
    const a = t, p = parseFloat(getComputedStyle(document.documentElement).fontSize), I = gt(t, "modelValue"), S = gt(t, "enableThink"), f = gt(t, "enableNet"), r = De(() => (a.inputHeight + 52) / p + "rem"), g = De(() => a.inputHeight / p + "rem"), l = e;
    function b() {
      a.loading ? l("cancel") : l("send", I.value);
    }
    function U(y) {
      a.isMobile || y.key === "Enter" && !y.shiftKey && (y.preventDefault(), !a.loading && I.value.trim() && l("send", I.value));
    }
    function E() {
      S.value = !S.value;
    }
    function u() {
      f.value = !f.value;
    }
    return (y, C) => (ce(), de("div", Qi, [
      re("div", Ji, [
        ye(y.$slots, "textarea", {
          height: t.inputHeight,
          execute: b,
          state: {
            loading: t.loading,
            inputText: I.value
          }
        }, () => [
          st(re("textarea", {
            "onUpdate:modelValue": C[0] || (C[0] = (m) => I.value = m),
            rows: "5",
            cols: "30",
            style: { resize: "none" },
            class: "kernelift-chat-sender__input",
            onKeydown: U
          }, null, 544), [
            [Mn, I.value]
          ])
        ], !0),
        re("div", Hi, [
          re("div", Yi, [
            ye(y.$slots, "think-button", {
              state: { hasThinking: t.hasThinking, enableThink: S.value },
              execute: E
            }, () => [
              t.hasThinking ? (ce(), de("button", {
                key: 0,
                class: rt(["kernelift-chat-sender__tool-btn", {
                  active: S.value
                }]),
                onClick: E
              }, [
                st(re("span", Wi, null, 512), [
                  [ct, t.loading]
                ]),
                Ft(" " + Pe(t.i18n?.chat?.button?.think ?? "深度思考"), 1)
              ], 2)) : Ve("", !0)
            ], !0),
            ye(y.$slots, "net-button", {
              state: { hasNetSearch: t.hasNetSearch, enableNet: f.value },
              execute: u
            }, () => [
              t.hasNetSearch ? (ce(), de("button", {
                key: 0,
                class: rt(["kernelift-chat-sender__tool-btn", {
                  active: f.value
                }]),
                onClick: u
              }, [
                st(re("span", Xi, null, 512), [
                  [ct, t.loading]
                ]),
                Ft(" " + Pe(t.i18n?.chat?.button?.net ?? "联网搜索"), 1)
              ], 2)) : Ve("", !0)
            ], !0),
            ye(y.$slots, "tools", {
              value: I.value,
              loading: t.loading
            }, void 0, !0)
          ]),
          ye(y.$slots, "send-button", {
            execute: b,
            state: {
              loading: t.loading,
              inputText: I.value
            }
          }, () => [
            re("button", {
              disabled: !I.value && !t.loading,
              class: "kernelift-chat-sender__send-btn",
              style: { "background-color": "var(--kl-chat-primary-color)", "border-radius": "50%" },
              onClick: b
            }, [
              st(re("i", _i, null, 512), [
                [ct, t.loading]
              ]),
              st(re("i", $i, null, 512), [
                [ct, !t.loading]
              ])
            ], 8, Zi)
          ], !0)
        ])
      ])
    ]));
  }
}), ts = /* @__PURE__ */ kt(es, [["__scopeId", "data-v-3b9bccf1"]]), rs = { class: "kernelift-chat-header" }, as = /* @__PURE__ */ Kt({
  __name: "chat-header",
  props: {
    record: {}
  },
  setup(t) {
    return (e, a) => (ce(), de("div", rs, Pe(t.record?.content), 1));
  }
}), ns = /* @__PURE__ */ kt(as, [["__scopeId", "data-v-23214280"]]);
function is(t) {
  t = t.replace(/^#/, ""), t.length === 3 && (t = t.split("").map((S) => S + S).join(""));
  const e = parseInt(t, 16), a = e >> 16 & 255, p = e >> 8 & 255, I = e & 255;
  return { r: a, g: p, b: I };
}
function ar(t) {
  return `rgb(${Math.round(t.r)}, ${Math.round(t.g)}, ${Math.round(t.b)})`;
}
function ss(t, e = 11, a = 1, p = 5) {
  const I = is(t);
  if (p < 0 || p >= e)
    throw new Error(`targetIndex必须在0到${e - 1}之间`);
  const S = [];
  for (let f = 0; f < e; f++) {
    if (f === p) {
      S.push(ar(I));
      continue;
    }
    const r = f - p;
    let g;
    if (r < 0) {
      g = a * Math.abs(r) / p;
      const l = {
        r: I.r + (255 - I.r) * g,
        g: I.g + (255 - I.g) * g,
        b: I.b + (255 - I.b) * g
      };
      S.push(ar(l));
    } else {
      g = a * r / (e - p - 1);
      const l = {
        r: I.r * (1 - g),
        g: I.g * (1 - g),
        b: I.b * (1 - g)
      };
      S.push(ar(l));
    }
  }
  return S;
}
var os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ls(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var e = t.default;
  if (typeof e == "function") {
    var a = function p() {
      var I = !1;
      try {
        I = this instanceof p;
      } catch {
      }
      return I ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    a.prototype = e.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(t).forEach(function(p) {
    var I = Object.getOwnPropertyDescriptor(t, p);
    Object.defineProperty(a, p, I.get ? I : {
      enumerable: !0,
      get: function() {
        return t[p];
      }
    });
  }), a;
}
var ra, aa;
function ve() {
  return aa || (aa = 1, ra = {
    // default options
    options: {
      usePureJavaScript: !1
    }
  }), ra;
}
var nr = { exports: {} }, ir, na;
function us() {
  if (na) return ir;
  na = 1;
  var t = {};
  ir = t;
  var e = {};
  t.encode = function(p, I, S) {
    if (typeof I != "string")
      throw new TypeError('"alphabet" must be a string.');
    if (S !== void 0 && typeof S != "number")
      throw new TypeError('"maxline" must be a number.');
    var f = "";
    if (!(p instanceof Uint8Array))
      f = a(p, I);
    else {
      var r = 0, g = I.length, l = I.charAt(0), b = [0];
      for (r = 0; r < p.length; ++r) {
        for (var U = 0, E = p[r]; U < b.length; ++U)
          E += b[U] << 8, b[U] = E % g, E = E / g | 0;
        for (; E > 0; )
          b.push(E % g), E = E / g | 0;
      }
      for (r = 0; p[r] === 0 && r < p.length - 1; ++r)
        f += l;
      for (r = b.length - 1; r >= 0; --r)
        f += I[b[r]];
    }
    if (S) {
      var u = new RegExp(".{1," + S + "}", "g");
      f = f.match(u).join(`\r
`);
    }
    return f;
  }, t.decode = function(p, I) {
    if (typeof p != "string")
      throw new TypeError('"input" must be a string.');
    if (typeof I != "string")
      throw new TypeError('"alphabet" must be a string.');
    var S = e[I];
    if (!S) {
      S = e[I] = [];
      for (var f = 0; f < I.length; ++f)
        S[I.charCodeAt(f)] = f;
    }
    p = p.replace(/\s/g, "");
    for (var r = I.length, g = I.charAt(0), l = [0], f = 0; f < p.length; f++) {
      var b = S[p.charCodeAt(f)];
      if (b === void 0)
        return;
      for (var U = 0, E = b; U < l.length; ++U)
        E += l[U] * r, l[U] = E & 255, E >>= 8;
      for (; E > 0; )
        l.push(E & 255), E >>= 8;
    }
    for (var u = 0; p[u] === g && u < p.length - 1; ++u)
      l.push(0);
    return typeof Buffer < "u" ? Buffer.from(l.reverse()) : new Uint8Array(l.reverse());
  };
  function a(p, I) {
    var S = 0, f = I.length, r = I.charAt(0), g = [0];
    for (S = 0; S < p.length(); ++S) {
      for (var l = 0, b = p.at(S); l < g.length; ++l)
        b += g[l] << 8, g[l] = b % f, b = b / f | 0;
      for (; b > 0; )
        g.push(b % f), b = b / f | 0;
    }
    var U = "";
    for (S = 0; p.at(S) === 0 && S < p.length() - 1; ++S)
      U += r;
    for (S = g.length - 1; S >= 0; --S)
      U += I[g[S]];
    return U;
  }
  return ir;
}
var ia;
function Se() {
  if (ia) return nr.exports;
  ia = 1;
  var t = ve(), e = us(), a = nr.exports = t.util = t.util || {};
  (function() {
    if (typeof process < "u" && process.nextTick && !process.browser) {
      a.nextTick = process.nextTick, typeof setImmediate == "function" ? a.setImmediate = setImmediate : a.setImmediate = a.nextTick;
      return;
    }
    if (typeof setImmediate == "function") {
      a.setImmediate = function() {
        return setImmediate.apply(void 0, arguments);
      }, a.nextTick = function(i) {
        return setImmediate(i);
      };
      return;
    }
    if (a.setImmediate = function(i) {
      setTimeout(i, 0);
    }, typeof window < "u" && typeof window.postMessage == "function") {
      let i = function(n) {
        if (n.source === window && n.data === s) {
          n.stopPropagation();
          var T = h.slice();
          h.length = 0, T.forEach(function(V) {
            V();
          });
        }
      };
      var s = "forge.setImmediate", h = [];
      a.setImmediate = function(n) {
        h.push(n), h.length === 1 && window.postMessage(s, "*");
      }, window.addEventListener("message", i, !0);
    }
    if (typeof MutationObserver < "u") {
      var v = Date.now(), B = !0, R = document.createElement("div"), h = [];
      new MutationObserver(function() {
        var n = h.slice();
        h.length = 0, n.forEach(function(T) {
          T();
        });
      }).observe(R, { attributes: !0 });
      var c = a.setImmediate;
      a.setImmediate = function(n) {
        Date.now() - v > 15 ? (v = Date.now(), c(n)) : (h.push(n), h.length === 1 && R.setAttribute("a", B = !B));
      };
    }
    a.nextTick = a.setImmediate;
  })(), a.isNodejs = typeof process < "u" && process.versions && process.versions.node, a.globalScope = (function() {
    return a.isNodejs ? os : typeof self > "u" ? window : self;
  })(), a.isArray = Array.isArray || function(s) {
    return Object.prototype.toString.call(s) === "[object Array]";
  }, a.isArrayBuffer = function(s) {
    return typeof ArrayBuffer < "u" && s instanceof ArrayBuffer;
  }, a.isArrayBufferView = function(s) {
    return s && a.isArrayBuffer(s.buffer) && s.byteLength !== void 0;
  };
  function p(s) {
    if (!(s === 8 || s === 16 || s === 24 || s === 32))
      throw new Error("Only 8, 16, 24, or 32 bits supported: " + s);
  }
  a.ByteBuffer = I;
  function I(s) {
    if (this.data = "", this.read = 0, typeof s == "string")
      this.data = s;
    else if (a.isArrayBuffer(s) || a.isArrayBufferView(s))
      if (typeof Buffer < "u" && s instanceof Buffer)
        this.data = s.toString("binary");
      else {
        var h = new Uint8Array(s);
        try {
          this.data = String.fromCharCode.apply(null, h);
        } catch {
          for (var v = 0; v < h.length; ++v)
            this.putByte(h[v]);
        }
      }
    else (s instanceof I || typeof s == "object" && typeof s.data == "string" && typeof s.read == "number") && (this.data = s.data, this.read = s.read);
    this._constructedStringLength = 0;
  }
  a.ByteStringBuffer = I;
  var S = 4096;
  a.ByteStringBuffer.prototype._optimizeConstructedString = function(s) {
    this._constructedStringLength += s, this._constructedStringLength > S && (this.data.substr(0, 1), this._constructedStringLength = 0);
  }, a.ByteStringBuffer.prototype.length = function() {
    return this.data.length - this.read;
  }, a.ByteStringBuffer.prototype.isEmpty = function() {
    return this.length() <= 0;
  }, a.ByteStringBuffer.prototype.putByte = function(s) {
    return this.putBytes(String.fromCharCode(s));
  }, a.ByteStringBuffer.prototype.fillWithByte = function(s, h) {
    s = String.fromCharCode(s);
    for (var v = this.data; h > 0; )
      h & 1 && (v += s), h >>>= 1, h > 0 && (s += s);
    return this.data = v, this._optimizeConstructedString(h), this;
  }, a.ByteStringBuffer.prototype.putBytes = function(s) {
    return this.data += s, this._optimizeConstructedString(s.length), this;
  }, a.ByteStringBuffer.prototype.putString = function(s) {
    return this.putBytes(a.encodeUtf8(s));
  }, a.ByteStringBuffer.prototype.putInt16 = function(s) {
    return this.putBytes(
      String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt24 = function(s) {
    return this.putBytes(
      String.fromCharCode(s >> 16 & 255) + String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt32 = function(s) {
    return this.putBytes(
      String.fromCharCode(s >> 24 & 255) + String.fromCharCode(s >> 16 & 255) + String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt16Le = function(s) {
    return this.putBytes(
      String.fromCharCode(s & 255) + String.fromCharCode(s >> 8 & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt24Le = function(s) {
    return this.putBytes(
      String.fromCharCode(s & 255) + String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s >> 16 & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt32Le = function(s) {
    return this.putBytes(
      String.fromCharCode(s & 255) + String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s >> 16 & 255) + String.fromCharCode(s >> 24 & 255)
    );
  }, a.ByteStringBuffer.prototype.putInt = function(s, h) {
    p(h);
    var v = "";
    do
      h -= 8, v += String.fromCharCode(s >> h & 255);
    while (h > 0);
    return this.putBytes(v);
  }, a.ByteStringBuffer.prototype.putSignedInt = function(s, h) {
    return s < 0 && (s += 2 << h - 1), this.putInt(s, h);
  }, a.ByteStringBuffer.prototype.putBuffer = function(s) {
    return this.putBytes(s.getBytes());
  }, a.ByteStringBuffer.prototype.getByte = function() {
    return this.data.charCodeAt(this.read++);
  }, a.ByteStringBuffer.prototype.getInt16 = function() {
    var s = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
    return this.read += 2, s;
  }, a.ByteStringBuffer.prototype.getInt24 = function() {
    var s = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
    return this.read += 3, s;
  }, a.ByteStringBuffer.prototype.getInt32 = function() {
    var s = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
    return this.read += 4, s;
  }, a.ByteStringBuffer.prototype.getInt16Le = function() {
    var s = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
    return this.read += 2, s;
  }, a.ByteStringBuffer.prototype.getInt24Le = function() {
    var s = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
    return this.read += 3, s;
  }, a.ByteStringBuffer.prototype.getInt32Le = function() {
    var s = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
    return this.read += 4, s;
  }, a.ByteStringBuffer.prototype.getInt = function(s) {
    p(s);
    var h = 0;
    do
      h = (h << 8) + this.data.charCodeAt(this.read++), s -= 8;
    while (s > 0);
    return h;
  }, a.ByteStringBuffer.prototype.getSignedInt = function(s) {
    var h = this.getInt(s), v = 2 << s - 2;
    return h >= v && (h -= v << 1), h;
  }, a.ByteStringBuffer.prototype.getBytes = function(s) {
    var h;
    return s ? (s = Math.min(this.length(), s), h = this.data.slice(this.read, this.read + s), this.read += s) : s === 0 ? h = "" : (h = this.read === 0 ? this.data : this.data.slice(this.read), this.clear()), h;
  }, a.ByteStringBuffer.prototype.bytes = function(s) {
    return typeof s > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + s);
  }, a.ByteStringBuffer.prototype.at = function(s) {
    return this.data.charCodeAt(this.read + s);
  }, a.ByteStringBuffer.prototype.setAt = function(s, h) {
    return this.data = this.data.substr(0, this.read + s) + String.fromCharCode(h) + this.data.substr(this.read + s + 1), this;
  }, a.ByteStringBuffer.prototype.last = function() {
    return this.data.charCodeAt(this.data.length - 1);
  }, a.ByteStringBuffer.prototype.copy = function() {
    var s = a.createBuffer(this.data);
    return s.read = this.read, s;
  }, a.ByteStringBuffer.prototype.compact = function() {
    return this.read > 0 && (this.data = this.data.slice(this.read), this.read = 0), this;
  }, a.ByteStringBuffer.prototype.clear = function() {
    return this.data = "", this.read = 0, this;
  }, a.ByteStringBuffer.prototype.truncate = function(s) {
    var h = Math.max(0, this.length() - s);
    return this.data = this.data.substr(this.read, h), this.read = 0, this;
  }, a.ByteStringBuffer.prototype.toHex = function() {
    for (var s = "", h = this.read; h < this.data.length; ++h) {
      var v = this.data.charCodeAt(h);
      v < 16 && (s += "0"), s += v.toString(16);
    }
    return s;
  }, a.ByteStringBuffer.prototype.toString = function() {
    return a.decodeUtf8(this.bytes());
  };
  function f(s, h) {
    h = h || {}, this.read = h.readOffset || 0, this.growSize = h.growSize || 1024;
    var v = a.isArrayBuffer(s), B = a.isArrayBufferView(s);
    if (v || B) {
      v ? this.data = new DataView(s) : this.data = new DataView(s.buffer, s.byteOffset, s.byteLength), this.write = "writeOffset" in h ? h.writeOffset : this.data.byteLength;
      return;
    }
    this.data = new DataView(new ArrayBuffer(0)), this.write = 0, s != null && this.putBytes(s), "writeOffset" in h && (this.write = h.writeOffset);
  }
  a.DataBuffer = f, a.DataBuffer.prototype.length = function() {
    return this.write - this.read;
  }, a.DataBuffer.prototype.isEmpty = function() {
    return this.length() <= 0;
  }, a.DataBuffer.prototype.accommodate = function(s, h) {
    if (this.length() >= s)
      return this;
    h = Math.max(h || this.growSize, s);
    var v = new Uint8Array(
      this.data.buffer,
      this.data.byteOffset,
      this.data.byteLength
    ), B = new Uint8Array(this.length() + h);
    return B.set(v), this.data = new DataView(B.buffer), this;
  }, a.DataBuffer.prototype.putByte = function(s) {
    return this.accommodate(1), this.data.setUint8(this.write++, s), this;
  }, a.DataBuffer.prototype.fillWithByte = function(s, h) {
    this.accommodate(h);
    for (var v = 0; v < h; ++v)
      this.data.setUint8(s);
    return this;
  }, a.DataBuffer.prototype.putBytes = function(s, h) {
    if (a.isArrayBufferView(s)) {
      var v = new Uint8Array(s.buffer, s.byteOffset, s.byteLength), B = v.byteLength - v.byteOffset;
      this.accommodate(B);
      var R = new Uint8Array(this.data.buffer, this.write);
      return R.set(v), this.write += B, this;
    }
    if (a.isArrayBuffer(s)) {
      var v = new Uint8Array(s);
      this.accommodate(v.byteLength);
      var R = new Uint8Array(this.data.buffer);
      return R.set(v, this.write), this.write += v.byteLength, this;
    }
    if (s instanceof a.DataBuffer || typeof s == "object" && typeof s.read == "number" && typeof s.write == "number" && a.isArrayBufferView(s.data)) {
      var v = new Uint8Array(s.data.byteLength, s.read, s.length());
      this.accommodate(v.byteLength);
      var R = new Uint8Array(s.data.byteLength, this.write);
      return R.set(v), this.write += v.byteLength, this;
    }
    if (s instanceof a.ByteStringBuffer && (s = s.data, h = "binary"), h = h || "binary", typeof s == "string") {
      var c;
      if (h === "hex")
        return this.accommodate(Math.ceil(s.length / 2)), c = new Uint8Array(this.data.buffer, this.write), this.write += a.binary.hex.decode(s, c, this.write), this;
      if (h === "base64")
        return this.accommodate(Math.ceil(s.length / 4) * 3), c = new Uint8Array(this.data.buffer, this.write), this.write += a.binary.base64.decode(s, c, this.write), this;
      if (h === "utf8" && (s = a.encodeUtf8(s), h = "binary"), h === "binary" || h === "raw")
        return this.accommodate(s.length), c = new Uint8Array(this.data.buffer, this.write), this.write += a.binary.raw.decode(c), this;
      if (h === "utf16")
        return this.accommodate(s.length * 2), c = new Uint16Array(this.data.buffer, this.write), this.write += a.text.utf16.encode(c), this;
      throw new Error("Invalid encoding: " + h);
    }
    throw Error("Invalid parameter: " + s);
  }, a.DataBuffer.prototype.putBuffer = function(s) {
    return this.putBytes(s), s.clear(), this;
  }, a.DataBuffer.prototype.putString = function(s) {
    return this.putBytes(s, "utf16");
  }, a.DataBuffer.prototype.putInt16 = function(s) {
    return this.accommodate(2), this.data.setInt16(this.write, s), this.write += 2, this;
  }, a.DataBuffer.prototype.putInt24 = function(s) {
    return this.accommodate(3), this.data.setInt16(this.write, s >> 8 & 65535), this.data.setInt8(this.write, s >> 16 & 255), this.write += 3, this;
  }, a.DataBuffer.prototype.putInt32 = function(s) {
    return this.accommodate(4), this.data.setInt32(this.write, s), this.write += 4, this;
  }, a.DataBuffer.prototype.putInt16Le = function(s) {
    return this.accommodate(2), this.data.setInt16(this.write, s, !0), this.write += 2, this;
  }, a.DataBuffer.prototype.putInt24Le = function(s) {
    return this.accommodate(3), this.data.setInt8(this.write, s >> 16 & 255), this.data.setInt16(this.write, s >> 8 & 65535, !0), this.write += 3, this;
  }, a.DataBuffer.prototype.putInt32Le = function(s) {
    return this.accommodate(4), this.data.setInt32(this.write, s, !0), this.write += 4, this;
  }, a.DataBuffer.prototype.putInt = function(s, h) {
    p(h), this.accommodate(h / 8);
    do
      h -= 8, this.data.setInt8(this.write++, s >> h & 255);
    while (h > 0);
    return this;
  }, a.DataBuffer.prototype.putSignedInt = function(s, h) {
    return p(h), this.accommodate(h / 8), s < 0 && (s += 2 << h - 1), this.putInt(s, h);
  }, a.DataBuffer.prototype.getByte = function() {
    return this.data.getInt8(this.read++);
  }, a.DataBuffer.prototype.getInt16 = function() {
    var s = this.data.getInt16(this.read);
    return this.read += 2, s;
  }, a.DataBuffer.prototype.getInt24 = function() {
    var s = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
    return this.read += 3, s;
  }, a.DataBuffer.prototype.getInt32 = function() {
    var s = this.data.getInt32(this.read);
    return this.read += 4, s;
  }, a.DataBuffer.prototype.getInt16Le = function() {
    var s = this.data.getInt16(this.read, !0);
    return this.read += 2, s;
  }, a.DataBuffer.prototype.getInt24Le = function() {
    var s = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
    return this.read += 3, s;
  }, a.DataBuffer.prototype.getInt32Le = function() {
    var s = this.data.getInt32(this.read, !0);
    return this.read += 4, s;
  }, a.DataBuffer.prototype.getInt = function(s) {
    p(s);
    var h = 0;
    do
      h = (h << 8) + this.data.getInt8(this.read++), s -= 8;
    while (s > 0);
    return h;
  }, a.DataBuffer.prototype.getSignedInt = function(s) {
    var h = this.getInt(s), v = 2 << s - 2;
    return h >= v && (h -= v << 1), h;
  }, a.DataBuffer.prototype.getBytes = function(s) {
    var h;
    return s ? (s = Math.min(this.length(), s), h = this.data.slice(this.read, this.read + s), this.read += s) : s === 0 ? h = "" : (h = this.read === 0 ? this.data : this.data.slice(this.read), this.clear()), h;
  }, a.DataBuffer.prototype.bytes = function(s) {
    return typeof s > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + s);
  }, a.DataBuffer.prototype.at = function(s) {
    return this.data.getUint8(this.read + s);
  }, a.DataBuffer.prototype.setAt = function(s, h) {
    return this.data.setUint8(s, h), this;
  }, a.DataBuffer.prototype.last = function() {
    return this.data.getUint8(this.write - 1);
  }, a.DataBuffer.prototype.copy = function() {
    return new a.DataBuffer(this);
  }, a.DataBuffer.prototype.compact = function() {
    if (this.read > 0) {
      var s = new Uint8Array(this.data.buffer, this.read), h = new Uint8Array(s.byteLength);
      h.set(s), this.data = new DataView(h), this.write -= this.read, this.read = 0;
    }
    return this;
  }, a.DataBuffer.prototype.clear = function() {
    return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this;
  }, a.DataBuffer.prototype.truncate = function(s) {
    return this.write = Math.max(0, this.length() - s), this.read = Math.min(this.read, this.write), this;
  }, a.DataBuffer.prototype.toHex = function() {
    for (var s = "", h = this.read; h < this.data.byteLength; ++h) {
      var v = this.data.getUint8(h);
      v < 16 && (s += "0"), s += v.toString(16);
    }
    return s;
  }, a.DataBuffer.prototype.toString = function(s) {
    var h = new Uint8Array(this.data, this.read, this.length());
    if (s = s || "utf8", s === "binary" || s === "raw")
      return a.binary.raw.encode(h);
    if (s === "hex")
      return a.binary.hex.encode(h);
    if (s === "base64")
      return a.binary.base64.encode(h);
    if (s === "utf8")
      return a.text.utf8.decode(h);
    if (s === "utf16")
      return a.text.utf16.decode(h);
    throw new Error("Invalid encoding: " + s);
  }, a.createBuffer = function(s, h) {
    return h = h || "raw", s !== void 0 && h === "utf8" && (s = a.encodeUtf8(s)), new a.ByteBuffer(s);
  }, a.fillString = function(s, h) {
    for (var v = ""; h > 0; )
      h & 1 && (v += s), h >>>= 1, h > 0 && (s += s);
    return v;
  }, a.xorBytes = function(s, h, v) {
    for (var B = "", R = "", c = "", i = 0, n = 0; v > 0; --v, ++i)
      R = s.charCodeAt(i) ^ h.charCodeAt(i), n >= 10 && (B += c, c = "", n = 0), c += String.fromCharCode(R), ++n;
    return B += c, B;
  }, a.hexToBytes = function(s) {
    var h = "", v = 0;
    for (s.length & !0 && (v = 1, h += String.fromCharCode(parseInt(s[0], 16))); v < s.length; v += 2)
      h += String.fromCharCode(parseInt(s.substr(v, 2), 16));
    return h;
  }, a.bytesToHex = function(s) {
    return a.createBuffer(s).toHex();
  }, a.int32ToBytes = function(s) {
    return String.fromCharCode(s >> 24 & 255) + String.fromCharCode(s >> 16 & 255) + String.fromCharCode(s >> 8 & 255) + String.fromCharCode(s & 255);
  };
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", g = [
    /*43 -43 = 0*/
    /*'+',  1,  2,  3,'/' */
    62,
    -1,
    -1,
    -1,
    63,
    /*'0','1','2','3','4','5','6','7','8','9' */
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    /*15, 16, 17,'=', 19, 20, 21 */
    -1,
    -1,
    -1,
    64,
    -1,
    -1,
    -1,
    /*65 - 43 = 22*/
    /*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    /*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    /*91 - 43 = 48 */
    /*48, 49, 50, 51, 52, 53 */
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    /*97 - 43 = 54*/
    /*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    /*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
  ], l = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  a.encode64 = function(s, h) {
    for (var v = "", B = "", R, c, i, n = 0; n < s.length; )
      R = s.charCodeAt(n++), c = s.charCodeAt(n++), i = s.charCodeAt(n++), v += r.charAt(R >> 2), v += r.charAt((R & 3) << 4 | c >> 4), isNaN(c) ? v += "==" : (v += r.charAt((c & 15) << 2 | i >> 6), v += isNaN(i) ? "=" : r.charAt(i & 63)), h && v.length > h && (B += v.substr(0, h) + `\r
`, v = v.substr(h));
    return B += v, B;
  }, a.decode64 = function(s) {
    s = s.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    for (var h = "", v, B, R, c, i = 0; i < s.length; )
      v = g[s.charCodeAt(i++) - 43], B = g[s.charCodeAt(i++) - 43], R = g[s.charCodeAt(i++) - 43], c = g[s.charCodeAt(i++) - 43], h += String.fromCharCode(v << 2 | B >> 4), R !== 64 && (h += String.fromCharCode((B & 15) << 4 | R >> 2), c !== 64 && (h += String.fromCharCode((R & 3) << 6 | c)));
    return h;
  }, a.encodeUtf8 = function(s) {
    return unescape(encodeURIComponent(s));
  }, a.decodeUtf8 = function(s) {
    return decodeURIComponent(escape(s));
  }, a.binary = {
    raw: {},
    hex: {},
    base64: {},
    base58: {},
    baseN: {
      encode: e.encode,
      decode: e.decode
    }
  }, a.binary.raw.encode = function(s) {
    return String.fromCharCode.apply(null, s);
  }, a.binary.raw.decode = function(s, h, v) {
    var B = h;
    B || (B = new Uint8Array(s.length)), v = v || 0;
    for (var R = v, c = 0; c < s.length; ++c)
      B[R++] = s.charCodeAt(c);
    return h ? R - v : B;
  }, a.binary.hex.encode = a.bytesToHex, a.binary.hex.decode = function(s, h, v) {
    var B = h;
    B || (B = new Uint8Array(Math.ceil(s.length / 2))), v = v || 0;
    var R = 0, c = v;
    for (s.length & 1 && (R = 1, B[c++] = parseInt(s[0], 16)); R < s.length; R += 2)
      B[c++] = parseInt(s.substr(R, 2), 16);
    return h ? c - v : B;
  }, a.binary.base64.encode = function(s, h) {
    for (var v = "", B = "", R, c, i, n = 0; n < s.byteLength; )
      R = s[n++], c = s[n++], i = s[n++], v += r.charAt(R >> 2), v += r.charAt((R & 3) << 4 | c >> 4), isNaN(c) ? v += "==" : (v += r.charAt((c & 15) << 2 | i >> 6), v += isNaN(i) ? "=" : r.charAt(i & 63)), h && v.length > h && (B += v.substr(0, h) + `\r
`, v = v.substr(h));
    return B += v, B;
  }, a.binary.base64.decode = function(s, h, v) {
    var B = h;
    B || (B = new Uint8Array(Math.ceil(s.length / 4) * 3)), s = s.replace(/[^A-Za-z0-9\+\/\=]/g, ""), v = v || 0;
    for (var R, c, i, n, T = 0, V = v; T < s.length; )
      R = g[s.charCodeAt(T++) - 43], c = g[s.charCodeAt(T++) - 43], i = g[s.charCodeAt(T++) - 43], n = g[s.charCodeAt(T++) - 43], B[V++] = R << 2 | c >> 4, i !== 64 && (B[V++] = (c & 15) << 4 | i >> 2, n !== 64 && (B[V++] = (i & 3) << 6 | n));
    return h ? V - v : B.subarray(0, V);
  }, a.binary.base58.encode = function(s, h) {
    return a.binary.baseN.encode(s, l, h);
  }, a.binary.base58.decode = function(s, h) {
    return a.binary.baseN.decode(s, l, h);
  }, a.text = {
    utf8: {},
    utf16: {}
  }, a.text.utf8.encode = function(s, h, v) {
    s = a.encodeUtf8(s);
    var B = h;
    B || (B = new Uint8Array(s.length)), v = v || 0;
    for (var R = v, c = 0; c < s.length; ++c)
      B[R++] = s.charCodeAt(c);
    return h ? R - v : B;
  }, a.text.utf8.decode = function(s) {
    return a.decodeUtf8(String.fromCharCode.apply(null, s));
  }, a.text.utf16.encode = function(s, h, v) {
    var B = h;
    B || (B = new Uint8Array(s.length * 2));
    var R = new Uint16Array(B.buffer);
    v = v || 0;
    for (var c = v, i = v, n = 0; n < s.length; ++n)
      R[i++] = s.charCodeAt(n), c += 2;
    return h ? c - v : B;
  }, a.text.utf16.decode = function(s) {
    return String.fromCharCode.apply(null, new Uint16Array(s.buffer));
  }, a.deflate = function(s, h, v) {
    if (h = a.decode64(s.deflate(a.encode64(h)).rval), v) {
      var B = 2, R = h.charCodeAt(1);
      R & 32 && (B = 6), h = h.substring(B, h.length - 4);
    }
    return h;
  }, a.inflate = function(s, h, v) {
    var B = s.inflate(a.encode64(h)).rval;
    return B === null ? null : a.decode64(B);
  };
  var b = function(s, h, v) {
    if (!s)
      throw new Error("WebStorage not available.");
    var B;
    if (v === null ? B = s.removeItem(h) : (v = a.encode64(JSON.stringify(v)), B = s.setItem(h, v)), typeof B < "u" && B.rval !== !0) {
      var R = new Error(B.error.message);
      throw R.id = B.error.id, R.name = B.error.name, R;
    }
  }, U = function(s, h) {
    if (!s)
      throw new Error("WebStorage not available.");
    var v = s.getItem(h);
    if (s.init)
      if (v.rval === null) {
        if (v.error) {
          var B = new Error(v.error.message);
          throw B.id = v.error.id, B.name = v.error.name, B;
        }
        v = null;
      } else
        v = v.rval;
    return v !== null && (v = JSON.parse(a.decode64(v))), v;
  }, E = function(s, h, v, B) {
    var R = U(s, h);
    R === null && (R = {}), R[v] = B, b(s, h, R);
  }, u = function(s, h, v) {
    var B = U(s, h);
    return B !== null && (B = v in B ? B[v] : null), B;
  }, y = function(s, h, v) {
    var B = U(s, h);
    if (B !== null && v in B) {
      delete B[v];
      var R = !0;
      for (var c in B) {
        R = !1;
        break;
      }
      R && (B = null), b(s, h, B);
    }
  }, C = function(s, h) {
    b(s, h, null);
  }, m = function(s, h, v) {
    var B = null;
    typeof v > "u" && (v = ["web", "flash"]);
    var R, c = !1, i = null;
    for (var n in v) {
      R = v[n];
      try {
        if (R === "flash" || R === "both") {
          if (h[0] === null)
            throw new Error("Flash local storage not available.");
          B = s.apply(this, h), c = R === "flash";
        }
        (R === "web" || R === "both") && (h[0] = localStorage, B = s.apply(this, h), c = !0);
      } catch (T) {
        i = T;
      }
      if (c)
        break;
    }
    if (!c)
      throw i;
    return B;
  };
  return a.setItem = function(s, h, v, B, R) {
    m(E, arguments, R);
  }, a.getItem = function(s, h, v, B) {
    return m(u, arguments, B);
  }, a.removeItem = function(s, h, v, B) {
    m(y, arguments, B);
  }, a.clearItems = function(s, h, v) {
    m(C, arguments, v);
  }, a.isEmpty = function(s) {
    for (var h in s)
      if (s.hasOwnProperty(h))
        return !1;
    return !0;
  }, a.format = function(s) {
    for (var h = /%./g, v, B, R = 0, c = [], i = 0; v = h.exec(s); ) {
      B = s.substring(i, h.lastIndex - 2), B.length > 0 && c.push(B), i = h.lastIndex;
      var n = v[0][1];
      switch (n) {
        case "s":
        case "o":
          R < arguments.length ? c.push(arguments[R++ + 1]) : c.push("<?>");
          break;
        // FIXME: do proper formating for numbers, etc
        //case 'f':
        //case 'd':
        case "%":
          c.push("%");
          break;
        default:
          c.push("<%" + n + "?>");
      }
    }
    return c.push(s.substring(i)), c.join("");
  }, a.formatNumber = function(s, h, v, B) {
    var R = s, c = isNaN(h = Math.abs(h)) ? 2 : h, i = v === void 0 ? "," : v, n = B === void 0 ? "." : B, T = R < 0 ? "-" : "", V = parseInt(R = Math.abs(+R || 0).toFixed(c), 10) + "", O = V.length > 3 ? V.length % 3 : 0;
    return T + (O ? V.substr(0, O) + n : "") + V.substr(O).replace(/(\d{3})(?=\d)/g, "$1" + n) + (c ? i + Math.abs(R - V).toFixed(c).slice(2) : "");
  }, a.formatSize = function(s) {
    return s >= 1073741824 ? s = a.formatNumber(s / 1073741824, 2, ".", "") + " GiB" : s >= 1048576 ? s = a.formatNumber(s / 1048576, 2, ".", "") + " MiB" : s >= 1024 ? s = a.formatNumber(s / 1024, 0) + " KiB" : s = a.formatNumber(s, 0) + " bytes", s;
  }, a.bytesFromIP = function(s) {
    return s.indexOf(".") !== -1 ? a.bytesFromIPv4(s) : s.indexOf(":") !== -1 ? a.bytesFromIPv6(s) : null;
  }, a.bytesFromIPv4 = function(s) {
    if (s = s.split("."), s.length !== 4)
      return null;
    for (var h = a.createBuffer(), v = 0; v < s.length; ++v) {
      var B = parseInt(s[v], 10);
      if (isNaN(B))
        return null;
      h.putByte(B);
    }
    return h.getBytes();
  }, a.bytesFromIPv6 = function(s) {
    var h = 0;
    s = s.split(":").filter(function(i) {
      return i.length === 0 && ++h, !0;
    });
    for (var v = (8 - s.length + h) * 2, B = a.createBuffer(), R = 0; R < 8; ++R) {
      if (!s[R] || s[R].length === 0) {
        B.fillWithByte(0, v), v = 0;
        continue;
      }
      var c = a.hexToBytes(s[R]);
      c.length < 2 && B.putByte(0), B.putBytes(c);
    }
    return B.getBytes();
  }, a.bytesToIP = function(s) {
    return s.length === 4 ? a.bytesToIPv4(s) : s.length === 16 ? a.bytesToIPv6(s) : null;
  }, a.bytesToIPv4 = function(s) {
    if (s.length !== 4)
      return null;
    for (var h = [], v = 0; v < s.length; ++v)
      h.push(s.charCodeAt(v));
    return h.join(".");
  }, a.bytesToIPv6 = function(s) {
    if (s.length !== 16)
      return null;
    for (var h = [], v = [], B = 0, R = 0; R < s.length; R += 2) {
      for (var c = a.bytesToHex(s[R] + s[R + 1]); c[0] === "0" && c !== "0"; )
        c = c.substr(1);
      if (c === "0") {
        var i = v[v.length - 1], n = h.length;
        !i || n !== i.end + 1 ? v.push({ start: n, end: n }) : (i.end = n, i.end - i.start > v[B].end - v[B].start && (B = v.length - 1));
      }
      h.push(c);
    }
    if (v.length > 0) {
      var T = v[B];
      T.end - T.start > 0 && (h.splice(T.start, T.end - T.start + 1, ""), T.start === 0 && h.unshift(""), T.end === 7 && h.push(""));
    }
    return h.join(":");
  }, a.estimateCores = function(s, h) {
    if (typeof s == "function" && (h = s, s = {}), s = s || {}, "cores" in a && !s.update)
      return h(null, a.cores);
    if (typeof navigator < "u" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0)
      return a.cores = navigator.hardwareConcurrency, h(null, a.cores);
    if (typeof Worker > "u")
      return a.cores = 1, h(null, a.cores);
    if (typeof Blob > "u")
      return a.cores = 2, h(null, a.cores);
    var v = URL.createObjectURL(new Blob([
      "(",
      (function() {
        self.addEventListener("message", function(i) {
          var n = Date.now(), T = n + 4;
          self.postMessage({ st: n, et: T });
        });
      }).toString(),
      ")()"
    ], { type: "application/javascript" }));
    B([], 5, 16);
    function B(i, n, T) {
      if (n === 0) {
        var V = Math.floor(i.reduce(function(O, D) {
          return O + D;
        }, 0) / i.length);
        return a.cores = Math.max(1, V), URL.revokeObjectURL(v), h(null, a.cores);
      }
      R(T, function(O, D) {
        i.push(c(T, D)), B(i, n - 1, T);
      });
    }
    function R(i, n) {
      for (var T = [], V = [], O = 0; O < i; ++O) {
        var D = new Worker(v);
        D.addEventListener("message", function(M) {
          if (V.push(M.data), V.length === i) {
            for (var x = 0; x < i; ++x)
              T[x].terminate();
            n(null, V);
          }
        }), T.push(D);
      }
      for (var O = 0; O < i; ++O)
        T[O].postMessage(O);
    }
    function c(i, n) {
      for (var T = [], V = 0; V < i; ++V)
        for (var O = n[V], D = T[V] = [], M = 0; M < i; ++M)
          if (V !== M) {
            var x = n[M];
            (O.st > x.st && O.st < x.et || x.st > O.st && x.st < O.et) && D.push(M);
          }
      return T.reduce(function(G, z) {
        return Math.max(G, z.length);
      }, 0);
    }
  }, nr.exports;
}
var sr, sa;
function Qr() {
  if (sa) return sr;
  sa = 1;
  var t = ve();
  Se(), sr = t.cipher = t.cipher || {}, t.cipher.algorithms = t.cipher.algorithms || {}, t.cipher.createCipher = function(a, p) {
    var I = a;
    if (typeof I == "string" && (I = t.cipher.getAlgorithm(I), I && (I = I())), !I)
      throw new Error("Unsupported algorithm: " + a);
    return new t.cipher.BlockCipher({
      algorithm: I,
      key: p,
      decrypt: !1
    });
  }, t.cipher.createDecipher = function(a, p) {
    var I = a;
    if (typeof I == "string" && (I = t.cipher.getAlgorithm(I), I && (I = I())), !I)
      throw new Error("Unsupported algorithm: " + a);
    return new t.cipher.BlockCipher({
      algorithm: I,
      key: p,
      decrypt: !0
    });
  }, t.cipher.registerAlgorithm = function(a, p) {
    a = a.toUpperCase(), t.cipher.algorithms[a] = p;
  }, t.cipher.getAlgorithm = function(a) {
    return a = a.toUpperCase(), a in t.cipher.algorithms ? t.cipher.algorithms[a] : null;
  };
  var e = t.cipher.BlockCipher = function(a) {
    this.algorithm = a.algorithm, this.mode = this.algorithm.mode, this.blockSize = this.mode.blockSize, this._finish = !1, this._input = null, this.output = null, this._op = a.decrypt ? this.mode.decrypt : this.mode.encrypt, this._decrypt = a.decrypt, this.algorithm.initialize(a);
  };
  return e.prototype.start = function(a) {
    a = a || {};
    var p = {};
    for (var I in a)
      p[I] = a[I];
    p.decrypt = this._decrypt, this._finish = !1, this._input = t.util.createBuffer(), this.output = a.output || t.util.createBuffer(), this.mode.start(p);
  }, e.prototype.update = function(a) {
    for (a && this._input.putBuffer(a); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish; )
      ;
    this._input.compact();
  }, e.prototype.finish = function(a) {
    a && (this.mode.name === "ECB" || this.mode.name === "CBC") && (this.mode.pad = function(I) {
      return a(this.blockSize, I, !1);
    }, this.mode.unpad = function(I) {
      return a(this.blockSize, I, !0);
    });
    var p = {};
    return p.decrypt = this._decrypt, p.overflow = this._input.length() % this.blockSize, !(!this._decrypt && this.mode.pad && !this.mode.pad(this._input, p) || (this._finish = !0, this.update(), this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, p)) || this.mode.afterFinish && !this.mode.afterFinish(this.output, p));
  }, sr;
}
var or = { exports: {} }, oa;
function $a() {
  if (oa) return or.exports;
  oa = 1;
  var t = ve();
  Se(), t.cipher = t.cipher || {};
  var e = or.exports = t.cipher.modes = t.cipher.modes || {};
  e.ecb = function(S) {
    S = S || {}, this.name = "ECB", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints);
  }, e.ecb.prototype.start = function(S) {
  }, e.ecb.prototype.encrypt = function(S, f, r) {
    if (S.length() < this.blockSize && !(r && S.length() > 0))
      return !0;
    for (var g = 0; g < this._ints; ++g)
      this._inBlock[g] = S.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var g = 0; g < this._ints; ++g)
      f.putInt32(this._outBlock[g]);
  }, e.ecb.prototype.decrypt = function(S, f, r) {
    if (S.length() < this.blockSize && !(r && S.length() > 0))
      return !0;
    for (var g = 0; g < this._ints; ++g)
      this._inBlock[g] = S.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var g = 0; g < this._ints; ++g)
      f.putInt32(this._outBlock[g]);
  }, e.ecb.prototype.pad = function(S, f) {
    var r = S.length() === this.blockSize ? this.blockSize : this.blockSize - S.length();
    return S.fillWithByte(r, r), !0;
  }, e.ecb.prototype.unpad = function(S, f) {
    if (f.overflow > 0)
      return !1;
    var r = S.length(), g = S.at(r - 1);
    return g > this.blockSize << 2 ? !1 : (S.truncate(g), !0);
  }, e.cbc = function(S) {
    S = S || {}, this.name = "CBC", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints);
  }, e.cbc.prototype.start = function(S) {
    if (S.iv === null) {
      if (!this._prev)
        throw new Error("Invalid IV parameter.");
      this._iv = this._prev.slice(0);
    } else if ("iv" in S)
      this._iv = a(S.iv, this.blockSize), this._prev = this._iv.slice(0);
    else
      throw new Error("Invalid IV parameter.");
  }, e.cbc.prototype.encrypt = function(S, f, r) {
    if (S.length() < this.blockSize && !(r && S.length() > 0))
      return !0;
    for (var g = 0; g < this._ints; ++g)
      this._inBlock[g] = this._prev[g] ^ S.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var g = 0; g < this._ints; ++g)
      f.putInt32(this._outBlock[g]);
    this._prev = this._outBlock;
  }, e.cbc.prototype.decrypt = function(S, f, r) {
    if (S.length() < this.blockSize && !(r && S.length() > 0))
      return !0;
    for (var g = 0; g < this._ints; ++g)
      this._inBlock[g] = S.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var g = 0; g < this._ints; ++g)
      f.putInt32(this._prev[g] ^ this._outBlock[g]);
    this._prev = this._inBlock.slice(0);
  }, e.cbc.prototype.pad = function(S, f) {
    var r = S.length() === this.blockSize ? this.blockSize : this.blockSize - S.length();
    return S.fillWithByte(r, r), !0;
  }, e.cbc.prototype.unpad = function(S, f) {
    if (f.overflow > 0)
      return !1;
    var r = S.length(), g = S.at(r - 1);
    return g > this.blockSize << 2 ? !1 : (S.truncate(g), !0);
  }, e.cfb = function(S) {
    S = S || {}, this.name = "CFB", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialBlock = new Array(this._ints), this._partialOutput = t.util.createBuffer(), this._partialBytes = 0;
  }, e.cfb.prototype.start = function(S) {
    if (!("iv" in S))
      throw new Error("Invalid IV parameter.");
    this._iv = a(S.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  }, e.cfb.prototype.encrypt = function(S, f, r) {
    var g = S.length();
    if (g === 0)
      return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && g >= this.blockSize) {
      for (var l = 0; l < this._ints; ++l)
        this._inBlock[l] = S.getInt32() ^ this._outBlock[l], f.putInt32(this._inBlock[l]);
      return;
    }
    var b = (this.blockSize - g) % this.blockSize;
    b > 0 && (b = this.blockSize - b), this._partialOutput.clear();
    for (var l = 0; l < this._ints; ++l)
      this._partialBlock[l] = S.getInt32() ^ this._outBlock[l], this._partialOutput.putInt32(this._partialBlock[l]);
    if (b > 0)
      S.read -= this.blockSize;
    else
      for (var l = 0; l < this._ints; ++l)
        this._inBlock[l] = this._partialBlock[l];
    if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), b > 0 && !r)
      return f.putBytes(this._partialOutput.getBytes(
        b - this._partialBytes
      )), this._partialBytes = b, !0;
    f.putBytes(this._partialOutput.getBytes(
      g - this._partialBytes
    )), this._partialBytes = 0;
  }, e.cfb.prototype.decrypt = function(S, f, r) {
    var g = S.length();
    if (g === 0)
      return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && g >= this.blockSize) {
      for (var l = 0; l < this._ints; ++l)
        this._inBlock[l] = S.getInt32(), f.putInt32(this._inBlock[l] ^ this._outBlock[l]);
      return;
    }
    var b = (this.blockSize - g) % this.blockSize;
    b > 0 && (b = this.blockSize - b), this._partialOutput.clear();
    for (var l = 0; l < this._ints; ++l)
      this._partialBlock[l] = S.getInt32(), this._partialOutput.putInt32(this._partialBlock[l] ^ this._outBlock[l]);
    if (b > 0)
      S.read -= this.blockSize;
    else
      for (var l = 0; l < this._ints; ++l)
        this._inBlock[l] = this._partialBlock[l];
    if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), b > 0 && !r)
      return f.putBytes(this._partialOutput.getBytes(
        b - this._partialBytes
      )), this._partialBytes = b, !0;
    f.putBytes(this._partialOutput.getBytes(
      g - this._partialBytes
    )), this._partialBytes = 0;
  }, e.ofb = function(S) {
    S = S || {}, this.name = "OFB", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialOutput = t.util.createBuffer(), this._partialBytes = 0;
  }, e.ofb.prototype.start = function(S) {
    if (!("iv" in S))
      throw new Error("Invalid IV parameter.");
    this._iv = a(S.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  }, e.ofb.prototype.encrypt = function(S, f, r) {
    var g = S.length();
    if (S.length() === 0)
      return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && g >= this.blockSize) {
      for (var l = 0; l < this._ints; ++l)
        f.putInt32(S.getInt32() ^ this._outBlock[l]), this._inBlock[l] = this._outBlock[l];
      return;
    }
    var b = (this.blockSize - g) % this.blockSize;
    b > 0 && (b = this.blockSize - b), this._partialOutput.clear();
    for (var l = 0; l < this._ints; ++l)
      this._partialOutput.putInt32(S.getInt32() ^ this._outBlock[l]);
    if (b > 0)
      S.read -= this.blockSize;
    else
      for (var l = 0; l < this._ints; ++l)
        this._inBlock[l] = this._outBlock[l];
    if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), b > 0 && !r)
      return f.putBytes(this._partialOutput.getBytes(
        b - this._partialBytes
      )), this._partialBytes = b, !0;
    f.putBytes(this._partialOutput.getBytes(
      g - this._partialBytes
    )), this._partialBytes = 0;
  }, e.ofb.prototype.decrypt = e.ofb.prototype.encrypt, e.ctr = function(S) {
    S = S || {}, this.name = "CTR", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialOutput = t.util.createBuffer(), this._partialBytes = 0;
  }, e.ctr.prototype.start = function(S) {
    if (!("iv" in S))
      throw new Error("Invalid IV parameter.");
    this._iv = a(S.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  }, e.ctr.prototype.encrypt = function(S, f, r) {
    var g = S.length();
    if (g === 0)
      return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && g >= this.blockSize)
      for (var l = 0; l < this._ints; ++l)
        f.putInt32(S.getInt32() ^ this._outBlock[l]);
    else {
      var b = (this.blockSize - g) % this.blockSize;
      b > 0 && (b = this.blockSize - b), this._partialOutput.clear();
      for (var l = 0; l < this._ints; ++l)
        this._partialOutput.putInt32(S.getInt32() ^ this._outBlock[l]);
      if (b > 0 && (S.read -= this.blockSize), this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), b > 0 && !r)
        return f.putBytes(this._partialOutput.getBytes(
          b - this._partialBytes
        )), this._partialBytes = b, !0;
      f.putBytes(this._partialOutput.getBytes(
        g - this._partialBytes
      )), this._partialBytes = 0;
    }
    p(this._inBlock);
  }, e.ctr.prototype.decrypt = e.ctr.prototype.encrypt, e.gcm = function(S) {
    S = S || {}, this.name = "GCM", this.cipher = S.cipher, this.blockSize = S.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints), this._partialOutput = t.util.createBuffer(), this._partialBytes = 0, this._R = 3774873600;
  }, e.gcm.prototype.start = function(S) {
    if (!("iv" in S))
      throw new Error("Invalid IV parameter.");
    var f = t.util.createBuffer(S.iv);
    this._cipherLength = 0;
    var r;
    if ("additionalData" in S ? r = t.util.createBuffer(S.additionalData) : r = t.util.createBuffer(), "tagLength" in S ? this._tagLength = S.tagLength : this._tagLength = 128, this._tag = null, S.decrypt && (this._tag = t.util.createBuffer(S.tag).getBytes(), this._tag.length !== this._tagLength / 8))
      throw new Error("Authentication tag does not match tag length.");
    this._hashBlock = new Array(this._ints), this.tag = null, this._hashSubkey = new Array(this._ints), this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey), this.componentBits = 4, this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
    var g = f.length();
    if (g === 12)
      this._j0 = [f.getInt32(), f.getInt32(), f.getInt32(), 1];
    else {
      for (this._j0 = [0, 0, 0, 0]; f.length() > 0; )
        this._j0 = this.ghash(
          this._hashSubkey,
          this._j0,
          [f.getInt32(), f.getInt32(), f.getInt32(), f.getInt32()]
        );
      this._j0 = this.ghash(
        this._hashSubkey,
        this._j0,
        [0, 0].concat(I(g * 8))
      );
    }
    this._inBlock = this._j0.slice(0), p(this._inBlock), this._partialBytes = 0, r = t.util.createBuffer(r), this._aDataLength = I(r.length() * 8);
    var l = r.length() % this.blockSize;
    for (l && r.fillWithByte(0, this.blockSize - l), this._s = [0, 0, 0, 0]; r.length() > 0; )
      this._s = this.ghash(this._hashSubkey, this._s, [
        r.getInt32(),
        r.getInt32(),
        r.getInt32(),
        r.getInt32()
      ]);
  }, e.gcm.prototype.encrypt = function(S, f, r) {
    var g = S.length();
    if (g === 0)
      return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && g >= this.blockSize) {
      for (var l = 0; l < this._ints; ++l)
        f.putInt32(this._outBlock[l] ^= S.getInt32());
      this._cipherLength += this.blockSize;
    } else {
      var b = (this.blockSize - g) % this.blockSize;
      b > 0 && (b = this.blockSize - b), this._partialOutput.clear();
      for (var l = 0; l < this._ints; ++l)
        this._partialOutput.putInt32(S.getInt32() ^ this._outBlock[l]);
      if (b <= 0 || r) {
        if (r) {
          var U = g % this.blockSize;
          this._cipherLength += U, this._partialOutput.truncate(this.blockSize - U);
        } else
          this._cipherLength += this.blockSize;
        for (var l = 0; l < this._ints; ++l)
          this._outBlock[l] = this._partialOutput.getInt32();
        this._partialOutput.read -= this.blockSize;
      }
      if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), b > 0 && !r)
        return S.read -= this.blockSize, f.putBytes(this._partialOutput.getBytes(
          b - this._partialBytes
        )), this._partialBytes = b, !0;
      f.putBytes(this._partialOutput.getBytes(
        g - this._partialBytes
      )), this._partialBytes = 0;
    }
    this._s = this.ghash(this._hashSubkey, this._s, this._outBlock), p(this._inBlock);
  }, e.gcm.prototype.decrypt = function(S, f, r) {
    var g = S.length();
    if (g < this.blockSize && !(r && g > 0))
      return !0;
    this.cipher.encrypt(this._inBlock, this._outBlock), p(this._inBlock), this._hashBlock[0] = S.getInt32(), this._hashBlock[1] = S.getInt32(), this._hashBlock[2] = S.getInt32(), this._hashBlock[3] = S.getInt32(), this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
    for (var l = 0; l < this._ints; ++l)
      f.putInt32(this._outBlock[l] ^ this._hashBlock[l]);
    g < this.blockSize ? this._cipherLength += g % this.blockSize : this._cipherLength += this.blockSize;
  }, e.gcm.prototype.afterFinish = function(S, f) {
    var r = !0;
    f.decrypt && f.overflow && S.truncate(this.blockSize - f.overflow), this.tag = t.util.createBuffer();
    var g = this._aDataLength.concat(I(this._cipherLength * 8));
    this._s = this.ghash(this._hashSubkey, this._s, g);
    var l = [];
    this.cipher.encrypt(this._j0, l);
    for (var b = 0; b < this._ints; ++b)
      this.tag.putInt32(this._s[b] ^ l[b]);
    return this.tag.truncate(this.tag.length() % (this._tagLength / 8)), f.decrypt && this.tag.bytes() !== this._tag && (r = !1), r;
  }, e.gcm.prototype.multiply = function(S, f) {
    for (var r = [0, 0, 0, 0], g = f.slice(0), l = 0; l < 128; ++l) {
      var b = S[l / 32 | 0] & 1 << 31 - l % 32;
      b && (r[0] ^= g[0], r[1] ^= g[1], r[2] ^= g[2], r[3] ^= g[3]), this.pow(g, g);
    }
    return r;
  }, e.gcm.prototype.pow = function(S, f) {
    for (var r = S[3] & 1, g = 3; g > 0; --g)
      f[g] = S[g] >>> 1 | (S[g - 1] & 1) << 31;
    f[0] = S[0] >>> 1, r && (f[0] ^= this._R);
  }, e.gcm.prototype.tableMultiply = function(S) {
    for (var f = [0, 0, 0, 0], r = 0; r < 32; ++r) {
      var g = r / 8 | 0, l = S[g] >>> (7 - r % 8) * 4 & 15, b = this._m[r][l];
      f[0] ^= b[0], f[1] ^= b[1], f[2] ^= b[2], f[3] ^= b[3];
    }
    return f;
  }, e.gcm.prototype.ghash = function(S, f, r) {
    return f[0] ^= r[0], f[1] ^= r[1], f[2] ^= r[2], f[3] ^= r[3], this.tableMultiply(f);
  }, e.gcm.prototype.generateHashTable = function(S, f) {
    for (var r = 8 / f, g = 4 * r, l = 16 * r, b = new Array(l), U = 0; U < l; ++U) {
      var E = [0, 0, 0, 0], u = U / g | 0, y = (g - 1 - U % g) * f;
      E[u] = 1 << f - 1 << y, b[U] = this.generateSubHashTable(this.multiply(E, S), f);
    }
    return b;
  }, e.gcm.prototype.generateSubHashTable = function(S, f) {
    var r = 1 << f, g = r >>> 1, l = new Array(r);
    l[g] = S.slice(0);
    for (var b = g >>> 1; b > 0; )
      this.pow(l[2 * b], l[b] = []), b >>= 1;
    for (b = 2; b < g; ) {
      for (var U = 1; U < b; ++U) {
        var E = l[b], u = l[U];
        l[b + U] = [
          E[0] ^ u[0],
          E[1] ^ u[1],
          E[2] ^ u[2],
          E[3] ^ u[3]
        ];
      }
      b *= 2;
    }
    for (l[0] = [0, 0, 0, 0], b = g + 1; b < r; ++b) {
      var y = l[b ^ g];
      l[b] = [S[0] ^ y[0], S[1] ^ y[1], S[2] ^ y[2], S[3] ^ y[3]];
    }
    return l;
  };
  function a(S, f) {
    if (typeof S == "string" && (S = t.util.createBuffer(S)), t.util.isArray(S) && S.length > 4) {
      var r = S;
      S = t.util.createBuffer();
      for (var g = 0; g < r.length; ++g)
        S.putByte(r[g]);
    }
    if (S.length() < f)
      throw new Error(
        "Invalid IV length; got " + S.length() + " bytes and expected " + f + " bytes."
      );
    if (!t.util.isArray(S)) {
      for (var l = [], b = f / 4, g = 0; g < b; ++g)
        l.push(S.getInt32());
      S = l;
    }
    return S;
  }
  function p(S) {
    S[S.length - 1] = S[S.length - 1] + 1 & 4294967295;
  }
  function I(S) {
    return [S / 4294967296 | 0, S & 4294967295];
  }
  return or.exports;
}
var lr, la;
function Nt() {
  if (la) return lr;
  la = 1;
  var t = ve();
  Qr(), $a(), Se(), lr = t.aes = t.aes || {}, t.aes.startEncrypting = function(u, y, C, m) {
    var s = E({
      key: u,
      output: C,
      decrypt: !1,
      mode: m
    });
    return s.start(y), s;
  }, t.aes.createEncryptionCipher = function(u, y) {
    return E({
      key: u,
      output: null,
      decrypt: !1,
      mode: y
    });
  }, t.aes.startDecrypting = function(u, y, C, m) {
    var s = E({
      key: u,
      output: C,
      decrypt: !0,
      mode: m
    });
    return s.start(y), s;
  }, t.aes.createDecryptionCipher = function(u, y) {
    return E({
      key: u,
      output: null,
      decrypt: !0,
      mode: y
    });
  }, t.aes.Algorithm = function(u, y) {
    a || l();
    var C = this;
    C.name = u, C.mode = new y({
      blockSize: 16,
      cipher: {
        encrypt: function(m, s) {
          return U(C._w, m, s, !1);
        },
        decrypt: function(m, s) {
          return U(C._w, m, s, !0);
        }
      }
    }), C._init = !1;
  }, t.aes.Algorithm.prototype.initialize = function(u) {
    if (!this._init) {
      var y = u.key, C;
      if (typeof y == "string" && (y.length === 16 || y.length === 24 || y.length === 32))
        y = t.util.createBuffer(y);
      else if (t.util.isArray(y) && (y.length === 16 || y.length === 24 || y.length === 32)) {
        C = y, y = t.util.createBuffer();
        for (var m = 0; m < C.length; ++m)
          y.putByte(C[m]);
      }
      if (!t.util.isArray(y)) {
        C = y, y = [];
        var s = C.length();
        if (s === 16 || s === 24 || s === 32) {
          s = s >>> 2;
          for (var m = 0; m < s; ++m)
            y.push(C.getInt32());
        }
      }
      if (!t.util.isArray(y) || !(y.length === 4 || y.length === 6 || y.length === 8))
        throw new Error("Invalid key parameter.");
      var h = this.mode.name, v = ["CFB", "OFB", "CTR", "GCM"].indexOf(h) !== -1;
      this._w = b(y, u.decrypt && !v), this._init = !0;
    }
  }, t.aes._expandKey = function(u, y) {
    return a || l(), b(u, y);
  }, t.aes._updateBlock = U, e("AES-ECB", t.cipher.modes.ecb), e("AES-CBC", t.cipher.modes.cbc), e("AES-CFB", t.cipher.modes.cfb), e("AES-OFB", t.cipher.modes.ofb), e("AES-CTR", t.cipher.modes.ctr), e("AES-GCM", t.cipher.modes.gcm);
  function e(u, y) {
    var C = function() {
      return new t.aes.Algorithm(u, y);
    };
    t.cipher.registerAlgorithm(u, C);
  }
  var a = !1, p = 4, I, S, f, r, g;
  function l() {
    a = !0, f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    for (var u = new Array(256), y = 0; y < 128; ++y)
      u[y] = y << 1, u[y + 128] = y + 128 << 1 ^ 283;
    I = new Array(256), S = new Array(256), r = new Array(4), g = new Array(4);
    for (var y = 0; y < 4; ++y)
      r[y] = new Array(256), g[y] = new Array(256);
    for (var C = 0, m = 0, s, h, v, B, R, c, i, y = 0; y < 256; ++y) {
      B = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4, B = B >> 8 ^ B & 255 ^ 99, I[C] = B, S[B] = C, R = u[B], s = u[C], h = u[s], v = u[h], c = R << 24 ^ // 2
      B << 16 ^ // 1
      B << 8 ^ // 1
      (B ^ R), i = (s ^ h ^ v) << 24 ^ // E (14)
      (C ^ v) << 16 ^ // 9
      (C ^ h ^ v) << 8 ^ // D (13)
      (C ^ s ^ v);
      for (var n = 0; n < 4; ++n)
        r[n][C] = c, g[n][B] = i, c = c << 24 | c >>> 8, i = i << 24 | i >>> 8;
      C === 0 ? C = m = 1 : (C = s ^ u[u[u[s ^ v]]], m ^= u[u[m]]);
    }
  }
  function b(u, y) {
    for (var C = u.slice(0), m, s = 1, h = C.length, v = h + 6 + 1, B = p * v, R = h; R < B; ++R)
      m = C[R - 1], R % h === 0 ? (m = I[m >>> 16 & 255] << 24 ^ I[m >>> 8 & 255] << 16 ^ I[m & 255] << 8 ^ I[m >>> 24] ^ f[s] << 24, s++) : h > 6 && R % h === 4 && (m = I[m >>> 24] << 24 ^ I[m >>> 16 & 255] << 16 ^ I[m >>> 8 & 255] << 8 ^ I[m & 255]), C[R] = C[R - h] ^ m;
    if (y) {
      var c, i = g[0], n = g[1], T = g[2], V = g[3], O = C.slice(0);
      B = C.length;
      for (var R = 0, D = B - p; R < B; R += p, D -= p)
        if (R === 0 || R === B - p)
          O[R] = C[D], O[R + 1] = C[D + 3], O[R + 2] = C[D + 2], O[R + 3] = C[D + 1];
        else
          for (var M = 0; M < p; ++M)
            c = C[D + M], O[R + (3 & -M)] = i[I[c >>> 24]] ^ n[I[c >>> 16 & 255]] ^ T[I[c >>> 8 & 255]] ^ V[I[c & 255]];
      C = O;
    }
    return C;
  }
  function U(u, y, C, m) {
    var s = u.length / 4 - 1, h, v, B, R, c;
    m ? (h = g[0], v = g[1], B = g[2], R = g[3], c = S) : (h = r[0], v = r[1], B = r[2], R = r[3], c = I);
    var i, n, T, V, O, D, M;
    i = y[0] ^ u[0], n = y[m ? 3 : 1] ^ u[1], T = y[2] ^ u[2], V = y[m ? 1 : 3] ^ u[3];
    for (var x = 3, G = 1; G < s; ++G)
      O = h[i >>> 24] ^ v[n >>> 16 & 255] ^ B[T >>> 8 & 255] ^ R[V & 255] ^ u[++x], D = h[n >>> 24] ^ v[T >>> 16 & 255] ^ B[V >>> 8 & 255] ^ R[i & 255] ^ u[++x], M = h[T >>> 24] ^ v[V >>> 16 & 255] ^ B[i >>> 8 & 255] ^ R[n & 255] ^ u[++x], V = h[V >>> 24] ^ v[i >>> 16 & 255] ^ B[n >>> 8 & 255] ^ R[T & 255] ^ u[++x], i = O, n = D, T = M;
    C[0] = c[i >>> 24] << 24 ^ c[n >>> 16 & 255] << 16 ^ c[T >>> 8 & 255] << 8 ^ c[V & 255] ^ u[++x], C[m ? 3 : 1] = c[n >>> 24] << 24 ^ c[T >>> 16 & 255] << 16 ^ c[V >>> 8 & 255] << 8 ^ c[i & 255] ^ u[++x], C[2] = c[T >>> 24] << 24 ^ c[V >>> 16 & 255] << 16 ^ c[i >>> 8 & 255] << 8 ^ c[n & 255] ^ u[++x], C[m ? 1 : 3] = c[V >>> 24] << 24 ^ c[i >>> 16 & 255] << 16 ^ c[n >>> 8 & 255] << 8 ^ c[T & 255] ^ u[++x];
  }
  function E(u) {
    u = u || {};
    var y = (u.mode || "CBC").toUpperCase(), C = "AES-" + y, m;
    u.decrypt ? m = t.cipher.createDecipher(C, u.key) : m = t.cipher.createCipher(C, u.key);
    var s = m.start;
    return m.start = function(h, v) {
      var B = null;
      v instanceof t.util.ByteBuffer && (B = v, v = {}), v = v || {}, v.output = B, v.iv = h, s.call(m, v);
    }, m;
  }
  return lr;
}
var ur = { exports: {} }, cr = { exports: {} }, fr = { exports: {} }, ua;
function wt() {
  if (ua) return fr.exports;
  ua = 1;
  var t = ve();
  t.pki = t.pki || {};
  var e = fr.exports = t.pki.oids = t.oids = t.oids || {};
  function a(I, S) {
    e[I] = S, e[S] = I;
  }
  function p(I, S) {
    e[I] = S;
  }
  return a("1.2.840.113549.1.1.1", "rsaEncryption"), a("1.2.840.113549.1.1.4", "md5WithRSAEncryption"), a("1.2.840.113549.1.1.5", "sha1WithRSAEncryption"), a("1.2.840.113549.1.1.7", "RSAES-OAEP"), a("1.2.840.113549.1.1.8", "mgf1"), a("1.2.840.113549.1.1.9", "pSpecified"), a("1.2.840.113549.1.1.10", "RSASSA-PSS"), a("1.2.840.113549.1.1.11", "sha256WithRSAEncryption"), a("1.2.840.113549.1.1.12", "sha384WithRSAEncryption"), a("1.2.840.113549.1.1.13", "sha512WithRSAEncryption"), a("1.3.101.112", "EdDSA25519"), a("1.2.840.10040.4.3", "dsa-with-sha1"), a("1.3.14.3.2.7", "desCBC"), a("1.3.14.3.2.26", "sha1"), a("1.3.14.3.2.29", "sha1WithRSASignature"), a("2.16.840.1.101.3.4.2.1", "sha256"), a("2.16.840.1.101.3.4.2.2", "sha384"), a("2.16.840.1.101.3.4.2.3", "sha512"), a("2.16.840.1.101.3.4.2.4", "sha224"), a("2.16.840.1.101.3.4.2.5", "sha512-224"), a("2.16.840.1.101.3.4.2.6", "sha512-256"), a("1.2.840.113549.2.2", "md2"), a("1.2.840.113549.2.5", "md5"), a("1.2.840.113549.1.7.1", "data"), a("1.2.840.113549.1.7.2", "signedData"), a("1.2.840.113549.1.7.3", "envelopedData"), a("1.2.840.113549.1.7.4", "signedAndEnvelopedData"), a("1.2.840.113549.1.7.5", "digestedData"), a("1.2.840.113549.1.7.6", "encryptedData"), a("1.2.840.113549.1.9.1", "emailAddress"), a("1.2.840.113549.1.9.2", "unstructuredName"), a("1.2.840.113549.1.9.3", "contentType"), a("1.2.840.113549.1.9.4", "messageDigest"), a("1.2.840.113549.1.9.5", "signingTime"), a("1.2.840.113549.1.9.6", "counterSignature"), a("1.2.840.113549.1.9.7", "challengePassword"), a("1.2.840.113549.1.9.8", "unstructuredAddress"), a("1.2.840.113549.1.9.14", "extensionRequest"), a("1.2.840.113549.1.9.20", "friendlyName"), a("1.2.840.113549.1.9.21", "localKeyId"), a("1.2.840.113549.1.9.22.1", "x509Certificate"), a("1.2.840.113549.1.12.10.1.1", "keyBag"), a("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag"), a("1.2.840.113549.1.12.10.1.3", "certBag"), a("1.2.840.113549.1.12.10.1.4", "crlBag"), a("1.2.840.113549.1.12.10.1.5", "secretBag"), a("1.2.840.113549.1.12.10.1.6", "safeContentsBag"), a("1.2.840.113549.1.5.13", "pkcs5PBES2"), a("1.2.840.113549.1.5.12", "pkcs5PBKDF2"), a("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4"), a("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4"), a("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC"), a("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC"), a("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC"), a("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC"), a("1.2.840.113549.2.7", "hmacWithSHA1"), a("1.2.840.113549.2.8", "hmacWithSHA224"), a("1.2.840.113549.2.9", "hmacWithSHA256"), a("1.2.840.113549.2.10", "hmacWithSHA384"), a("1.2.840.113549.2.11", "hmacWithSHA512"), a("1.2.840.113549.3.7", "des-EDE3-CBC"), a("2.16.840.1.101.3.4.1.2", "aes128-CBC"), a("2.16.840.1.101.3.4.1.22", "aes192-CBC"), a("2.16.840.1.101.3.4.1.42", "aes256-CBC"), a("2.5.4.3", "commonName"), a("2.5.4.4", "surname"), a("2.5.4.5", "serialNumber"), a("2.5.4.6", "countryName"), a("2.5.4.7", "localityName"), a("2.5.4.8", "stateOrProvinceName"), a("2.5.4.9", "streetAddress"), a("2.5.4.10", "organizationName"), a("2.5.4.11", "organizationalUnitName"), a("2.5.4.12", "title"), a("2.5.4.13", "description"), a("2.5.4.15", "businessCategory"), a("2.5.4.17", "postalCode"), a("2.5.4.42", "givenName"), a("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName"), a("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName"), a("2.16.840.1.113730.1.1", "nsCertType"), a("2.16.840.1.113730.1.13", "nsComment"), p("2.5.29.1", "authorityKeyIdentifier"), p("2.5.29.2", "keyAttributes"), p("2.5.29.3", "certificatePolicies"), p("2.5.29.4", "keyUsageRestriction"), p("2.5.29.5", "policyMapping"), p("2.5.29.6", "subtreesConstraint"), p("2.5.29.7", "subjectAltName"), p("2.5.29.8", "issuerAltName"), p("2.5.29.9", "subjectDirectoryAttributes"), p("2.5.29.10", "basicConstraints"), p("2.5.29.11", "nameConstraints"), p("2.5.29.12", "policyConstraints"), p("2.5.29.13", "basicConstraints"), a("2.5.29.14", "subjectKeyIdentifier"), a("2.5.29.15", "keyUsage"), p("2.5.29.16", "privateKeyUsagePeriod"), a("2.5.29.17", "subjectAltName"), a("2.5.29.18", "issuerAltName"), a("2.5.29.19", "basicConstraints"), p("2.5.29.20", "cRLNumber"), p("2.5.29.21", "cRLReason"), p("2.5.29.22", "expirationDate"), p("2.5.29.23", "instructionCode"), p("2.5.29.24", "invalidityDate"), p("2.5.29.25", "cRLDistributionPoints"), p("2.5.29.26", "issuingDistributionPoint"), p("2.5.29.27", "deltaCRLIndicator"), p("2.5.29.28", "issuingDistributionPoint"), p("2.5.29.29", "certificateIssuer"), p("2.5.29.30", "nameConstraints"), a("2.5.29.31", "cRLDistributionPoints"), a("2.5.29.32", "certificatePolicies"), p("2.5.29.33", "policyMappings"), p("2.5.29.34", "policyConstraints"), a("2.5.29.35", "authorityKeyIdentifier"), p("2.5.29.36", "policyConstraints"), a("2.5.29.37", "extKeyUsage"), p("2.5.29.46", "freshestCRL"), p("2.5.29.54", "inhibitAnyPolicy"), a("1.3.6.1.4.1.11129.2.4.2", "timestampList"), a("1.3.6.1.5.5.7.1.1", "authorityInfoAccess"), a("1.3.6.1.5.5.7.3.1", "serverAuth"), a("1.3.6.1.5.5.7.3.2", "clientAuth"), a("1.3.6.1.5.5.7.3.3", "codeSigning"), a("1.3.6.1.5.5.7.3.4", "emailProtection"), a("1.3.6.1.5.5.7.3.8", "timeStamping"), fr.exports;
}
var ca;
function yt() {
  if (ca) return cr.exports;
  ca = 1;
  var t = ve();
  Se(), wt();
  var e = cr.exports = t.asn1 = t.asn1 || {};
  e.Class = {
    UNIVERSAL: 0,
    APPLICATION: 64,
    CONTEXT_SPECIFIC: 128,
    PRIVATE: 192
  }, e.Type = {
    NONE: 0,
    BOOLEAN: 1,
    INTEGER: 2,
    BITSTRING: 3,
    OCTETSTRING: 4,
    NULL: 5,
    OID: 6,
    ODESC: 7,
    EXTERNAL: 8,
    REAL: 9,
    ENUMERATED: 10,
    EMBEDDED: 11,
    UTF8: 12,
    ROID: 13,
    SEQUENCE: 16,
    SET: 17,
    PRINTABLESTRING: 19,
    IA5STRING: 22,
    UTCTIME: 23,
    GENERALIZEDTIME: 24,
    BMPSTRING: 30
  }, e.create = function(f, r, g, l, b) {
    if (t.util.isArray(l)) {
      for (var U = [], E = 0; E < l.length; ++E)
        l[E] !== void 0 && U.push(l[E]);
      l = U;
    }
    var u = {
      tagClass: f,
      type: r,
      constructed: g,
      composed: g || t.util.isArray(l),
      value: l
    };
    return b && "bitStringContents" in b && (u.bitStringContents = b.bitStringContents, u.original = e.copy(u)), u;
  }, e.copy = function(f, r) {
    var g;
    if (t.util.isArray(f)) {
      g = [];
      for (var l = 0; l < f.length; ++l)
        g.push(e.copy(f[l], r));
      return g;
    }
    return typeof f == "string" ? f : (g = {
      tagClass: f.tagClass,
      type: f.type,
      constructed: f.constructed,
      composed: f.composed,
      value: e.copy(f.value, r)
    }, r && !r.excludeBitStringContents && (g.bitStringContents = f.bitStringContents), g);
  }, e.equals = function(f, r, g) {
    if (t.util.isArray(f)) {
      if (!t.util.isArray(r) || f.length !== r.length)
        return !1;
      for (var l = 0; l < f.length; ++l)
        if (!e.equals(f[l], r[l]))
          return !1;
      return !0;
    }
    if (typeof f != typeof r)
      return !1;
    if (typeof f == "string")
      return f === r;
    var b = f.tagClass === r.tagClass && f.type === r.type && f.constructed === r.constructed && f.composed === r.composed && e.equals(f.value, r.value);
    return g && g.includeBitStringContents && (b = b && f.bitStringContents === r.bitStringContents), b;
  }, e.getBerValueLength = function(f) {
    var r = f.getByte();
    if (r !== 128) {
      var g, l = r & 128;
      return l ? g = f.getInt((r & 127) << 3) : g = r, g;
    }
  };
  function a(f, r, g) {
    if (g > r) {
      var l = new Error("Too few bytes to parse DER.");
      throw l.available = f.length(), l.remaining = r, l.requested = g, l;
    }
  }
  var p = function(f, r) {
    var g = f.getByte();
    if (r--, g !== 128) {
      var l, b = g & 128;
      if (!b)
        l = g;
      else {
        var U = g & 127;
        a(f, r, U), l = f.getInt(U << 3);
      }
      if (l < 0)
        throw new Error("Negative length: " + l);
      return l;
    }
  };
  e.fromDer = function(f, r) {
    r === void 0 && (r = {
      strict: !0,
      parseAllBytes: !0,
      decodeBitStrings: !0
    }), typeof r == "boolean" && (r = {
      strict: r,
      parseAllBytes: !0,
      decodeBitStrings: !0
    }), "strict" in r || (r.strict = !0), "parseAllBytes" in r || (r.parseAllBytes = !0), "decodeBitStrings" in r || (r.decodeBitStrings = !0), typeof f == "string" && (f = t.util.createBuffer(f));
    var g = f.length(), l = I(f, f.length(), 0, r);
    if (r.parseAllBytes && f.length() !== 0) {
      var b = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
      throw b.byteCount = g, b.remaining = f.length(), b;
    }
    return l;
  };
  function I(f, r, g, l) {
    var b;
    a(f, r, 2);
    var U = f.getByte();
    r--;
    var E = U & 192, u = U & 31;
    b = f.length();
    var y = p(f, r);
    if (r -= b - f.length(), y !== void 0 && y > r) {
      if (l.strict) {
        var C = new Error("Too few bytes to read ASN.1 value.");
        throw C.available = f.length(), C.remaining = r, C.requested = y, C;
      }
      y = r;
    }
    var m, s, h = (U & 32) === 32;
    if (h)
      if (m = [], y === void 0)
        for (; ; ) {
          if (a(f, r, 2), f.bytes(2) === "\0\0") {
            f.getBytes(2), r -= 2;
            break;
          }
          b = f.length(), m.push(I(f, r, g + 1, l)), r -= b - f.length();
        }
      else
        for (; y > 0; )
          b = f.length(), m.push(I(f, y, g + 1, l)), r -= b - f.length(), y -= b - f.length();
    if (m === void 0 && E === e.Class.UNIVERSAL && u === e.Type.BITSTRING && (s = f.bytes(y)), m === void 0 && l.decodeBitStrings && E === e.Class.UNIVERSAL && // FIXME: OCTET STRINGs not yet supported here
    // .. other parts of forge expect to decode OCTET STRINGs manually
    u === e.Type.BITSTRING && y > 1) {
      var v = f.read, B = r, R = 0;
      if (u === e.Type.BITSTRING && (a(f, r, 1), R = f.getByte(), r--), R === 0)
        try {
          b = f.length();
          var c = {
            // enforce strict mode to avoid parsing ASN.1 from plain data
            strict: !0,
            decodeBitStrings: !0
          }, i = I(f, r, g + 1, c), n = b - f.length();
          r -= n, u == e.Type.BITSTRING && n++;
          var T = i.tagClass;
          n === y && (T === e.Class.UNIVERSAL || T === e.Class.CONTEXT_SPECIFIC) && (m = [i]);
        } catch {
        }
      m === void 0 && (f.read = v, r = B);
    }
    if (m === void 0) {
      if (y === void 0) {
        if (l.strict)
          throw new Error("Non-constructed ASN.1 object of indefinite length.");
        y = r;
      }
      if (u === e.Type.BMPSTRING)
        for (m = ""; y > 0; y -= 2)
          a(f, r, 2), m += String.fromCharCode(f.getInt16()), r -= 2;
      else
        m = f.getBytes(y), r -= y;
    }
    var V = s === void 0 ? null : {
      bitStringContents: s
    };
    return e.create(E, u, h, m, V);
  }
  e.toDer = function(f) {
    var r = t.util.createBuffer(), g = f.tagClass | f.type, l = t.util.createBuffer(), b = !1;
    if ("bitStringContents" in f && (b = !0, f.original && (b = e.equals(f, f.original))), b)
      l.putBytes(f.bitStringContents);
    else if (f.composed) {
      f.constructed ? g |= 32 : l.putByte(0);
      for (var U = 0; U < f.value.length; ++U)
        f.value[U] !== void 0 && l.putBuffer(e.toDer(f.value[U]));
    } else if (f.type === e.Type.BMPSTRING)
      for (var U = 0; U < f.value.length; ++U)
        l.putInt16(f.value.charCodeAt(U));
    else
      f.type === e.Type.INTEGER && f.value.length > 1 && // leading 0x00 for positive integer
      (f.value.charCodeAt(0) === 0 && (f.value.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
      f.value.charCodeAt(0) === 255 && (f.value.charCodeAt(1) & 128) === 128) ? l.putBytes(f.value.substr(1)) : l.putBytes(f.value);
    if (r.putByte(g), l.length() <= 127)
      r.putByte(l.length() & 127);
    else {
      var E = l.length(), u = "";
      do
        u += String.fromCharCode(E & 255), E = E >>> 8;
      while (E > 0);
      r.putByte(u.length | 128);
      for (var U = u.length - 1; U >= 0; --U)
        r.putByte(u.charCodeAt(U));
    }
    return r.putBuffer(l), r;
  }, e.oidToDer = function(f) {
    var r = f.split("."), g = t.util.createBuffer();
    g.putByte(40 * parseInt(r[0], 10) + parseInt(r[1], 10));
    for (var l, b, U, E, u = 2; u < r.length; ++u) {
      l = !0, b = [], U = parseInt(r[u], 10);
      do
        E = U & 127, U = U >>> 7, l || (E |= 128), b.push(E), l = !1;
      while (U > 0);
      for (var y = b.length - 1; y >= 0; --y)
        g.putByte(b[y]);
    }
    return g;
  }, e.derToOid = function(f) {
    var r;
    typeof f == "string" && (f = t.util.createBuffer(f));
    var g = f.getByte();
    r = Math.floor(g / 40) + "." + g % 40;
    for (var l = 0; f.length() > 0; )
      g = f.getByte(), l = l << 7, g & 128 ? l += g & 127 : (r += "." + (l + g), l = 0);
    return r;
  }, e.utcTimeToDate = function(f) {
    var r = /* @__PURE__ */ new Date(), g = parseInt(f.substr(0, 2), 10);
    g = g >= 50 ? 1900 + g : 2e3 + g;
    var l = parseInt(f.substr(2, 2), 10) - 1, b = parseInt(f.substr(4, 2), 10), U = parseInt(f.substr(6, 2), 10), E = parseInt(f.substr(8, 2), 10), u = 0;
    if (f.length > 11) {
      var y = f.charAt(10), C = 10;
      y !== "+" && y !== "-" && (u = parseInt(f.substr(10, 2), 10), C += 2);
    }
    if (r.setUTCFullYear(g, l, b), r.setUTCHours(U, E, u, 0), C && (y = f.charAt(C), y === "+" || y === "-")) {
      var m = parseInt(f.substr(C + 1, 2), 10), s = parseInt(f.substr(C + 4, 2), 10), h = m * 60 + s;
      h *= 6e4, y === "+" ? r.setTime(+r - h) : r.setTime(+r + h);
    }
    return r;
  }, e.generalizedTimeToDate = function(f) {
    var r = /* @__PURE__ */ new Date(), g = parseInt(f.substr(0, 4), 10), l = parseInt(f.substr(4, 2), 10) - 1, b = parseInt(f.substr(6, 2), 10), U = parseInt(f.substr(8, 2), 10), E = parseInt(f.substr(10, 2), 10), u = parseInt(f.substr(12, 2), 10), y = 0, C = 0, m = !1;
    f.charAt(f.length - 1) === "Z" && (m = !0);
    var s = f.length - 5, h = f.charAt(s);
    if (h === "+" || h === "-") {
      var v = parseInt(f.substr(s + 1, 2), 10), B = parseInt(f.substr(s + 4, 2), 10);
      C = v * 60 + B, C *= 6e4, h === "+" && (C *= -1), m = !0;
    }
    return f.charAt(14) === "." && (y = parseFloat(f.substr(14), 10) * 1e3), m ? (r.setUTCFullYear(g, l, b), r.setUTCHours(U, E, u, y), r.setTime(+r + C)) : (r.setFullYear(g, l, b), r.setHours(U, E, u, y)), r;
  }, e.dateToUtcTime = function(f) {
    if (typeof f == "string")
      return f;
    var r = "", g = [];
    g.push(("" + f.getUTCFullYear()).substr(2)), g.push("" + (f.getUTCMonth() + 1)), g.push("" + f.getUTCDate()), g.push("" + f.getUTCHours()), g.push("" + f.getUTCMinutes()), g.push("" + f.getUTCSeconds());
    for (var l = 0; l < g.length; ++l)
      g[l].length < 2 && (r += "0"), r += g[l];
    return r += "Z", r;
  }, e.dateToGeneralizedTime = function(f) {
    if (typeof f == "string")
      return f;
    var r = "", g = [];
    g.push("" + f.getUTCFullYear()), g.push("" + (f.getUTCMonth() + 1)), g.push("" + f.getUTCDate()), g.push("" + f.getUTCHours()), g.push("" + f.getUTCMinutes()), g.push("" + f.getUTCSeconds());
    for (var l = 0; l < g.length; ++l)
      g[l].length < 2 && (r += "0"), r += g[l];
    return r += "Z", r;
  }, e.integerToDer = function(f) {
    var r = t.util.createBuffer();
    if (f >= -128 && f < 128)
      return r.putSignedInt(f, 8);
    if (f >= -32768 && f < 32768)
      return r.putSignedInt(f, 16);
    if (f >= -8388608 && f < 8388608)
      return r.putSignedInt(f, 24);
    if (f >= -2147483648 && f < 2147483648)
      return r.putSignedInt(f, 32);
    var g = new Error("Integer too large; max is 32-bits.");
    throw g.integer = f, g;
  }, e.derToInteger = function(f) {
    typeof f == "string" && (f = t.util.createBuffer(f));
    var r = f.length() * 8;
    if (r > 32)
      throw new Error("Integer too large; max is 32-bits.");
    return f.getSignedInt(r);
  }, e.validate = function(f, r, g, l) {
    var b = !1;
    if ((f.tagClass === r.tagClass || typeof r.tagClass > "u") && (f.type === r.type || typeof r.type > "u"))
      if (f.constructed === r.constructed || typeof r.constructed > "u") {
        if (b = !0, r.value && t.util.isArray(r.value))
          for (var U = 0, E = 0; b && E < r.value.length; ++E)
            b = r.value[E].optional || !1, f.value[U] && (b = e.validate(f.value[U], r.value[E], g, l), b ? ++U : r.value[E].optional && (b = !0)), !b && l && l.push(
              "[" + r.name + '] Tag class "' + r.tagClass + '", type "' + r.type + '" expected value length "' + r.value.length + '", got "' + f.value.length + '"'
            );
        if (b && g && (r.capture && (g[r.capture] = f.value), r.captureAsn1 && (g[r.captureAsn1] = f), r.captureBitStringContents && "bitStringContents" in f && (g[r.captureBitStringContents] = f.bitStringContents), r.captureBitStringValue && "bitStringContents" in f))
          if (f.bitStringContents.length < 2)
            g[r.captureBitStringValue] = "";
          else {
            var u = f.bitStringContents.charCodeAt(0);
            if (u !== 0)
              throw new Error(
                "captureBitStringValue only supported for zero unused bits"
              );
            g[r.captureBitStringValue] = f.bitStringContents.slice(1);
          }
      } else l && l.push(
        "[" + r.name + '] Expected constructed "' + r.constructed + '", got "' + f.constructed + '"'
      );
    else l && (f.tagClass !== r.tagClass && l.push(
      "[" + r.name + '] Expected tag class "' + r.tagClass + '", got "' + f.tagClass + '"'
    ), f.type !== r.type && l.push(
      "[" + r.name + '] Expected type "' + r.type + '", got "' + f.type + '"'
    ));
    return b;
  };
  var S = /[^\\u0000-\\u00ff]/;
  return e.prettyPrint = function(f, r, g) {
    var l = "";
    r = r || 0, g = g || 2, r > 0 && (l += `
`);
    for (var b = "", U = 0; U < r * g; ++U)
      b += " ";
    switch (l += b + "Tag: ", f.tagClass) {
      case e.Class.UNIVERSAL:
        l += "Universal:";
        break;
      case e.Class.APPLICATION:
        l += "Application:";
        break;
      case e.Class.CONTEXT_SPECIFIC:
        l += "Context-Specific:";
        break;
      case e.Class.PRIVATE:
        l += "Private:";
        break;
    }
    if (f.tagClass === e.Class.UNIVERSAL)
      switch (l += f.type, f.type) {
        case e.Type.NONE:
          l += " (None)";
          break;
        case e.Type.BOOLEAN:
          l += " (Boolean)";
          break;
        case e.Type.INTEGER:
          l += " (Integer)";
          break;
        case e.Type.BITSTRING:
          l += " (Bit string)";
          break;
        case e.Type.OCTETSTRING:
          l += " (Octet string)";
          break;
        case e.Type.NULL:
          l += " (Null)";
          break;
        case e.Type.OID:
          l += " (Object Identifier)";
          break;
        case e.Type.ODESC:
          l += " (Object Descriptor)";
          break;
        case e.Type.EXTERNAL:
          l += " (External or Instance of)";
          break;
        case e.Type.REAL:
          l += " (Real)";
          break;
        case e.Type.ENUMERATED:
          l += " (Enumerated)";
          break;
        case e.Type.EMBEDDED:
          l += " (Embedded PDV)";
          break;
        case e.Type.UTF8:
          l += " (UTF8)";
          break;
        case e.Type.ROID:
          l += " (Relative Object Identifier)";
          break;
        case e.Type.SEQUENCE:
          l += " (Sequence)";
          break;
        case e.Type.SET:
          l += " (Set)";
          break;
        case e.Type.PRINTABLESTRING:
          l += " (Printable String)";
          break;
        case e.Type.IA5String:
          l += " (IA5String (ASCII))";
          break;
        case e.Type.UTCTIME:
          l += " (UTC time)";
          break;
        case e.Type.GENERALIZEDTIME:
          l += " (Generalized time)";
          break;
        case e.Type.BMPSTRING:
          l += " (BMP String)";
          break;
      }
    else
      l += f.type;
    if (l += `
`, l += b + "Constructed: " + f.constructed + `
`, f.composed) {
      for (var E = 0, u = "", U = 0; U < f.value.length; ++U)
        f.value[U] !== void 0 && (E += 1, u += e.prettyPrint(f.value[U], r + 1, g), U + 1 < f.value.length && (u += ","));
      l += b + "Sub values: " + E + u;
    } else {
      if (l += b + "Value: ", f.type === e.Type.OID) {
        var y = e.derToOid(f.value);
        l += y, t.pki && t.pki.oids && y in t.pki.oids && (l += " (" + t.pki.oids[y] + ") ");
      }
      if (f.type === e.Type.INTEGER)
        try {
          l += e.derToInteger(f.value);
        } catch {
          l += "0x" + t.util.bytesToHex(f.value);
        }
      else if (f.type === e.Type.BITSTRING) {
        if (f.value.length > 1 ? l += "0x" + t.util.bytesToHex(f.value.slice(1)) : l += "(none)", f.value.length > 0) {
          var C = f.value.charCodeAt(0);
          C == 1 ? l += " (1 unused bit shown)" : C > 1 && (l += " (" + C + " unused bits shown)");
        }
      } else if (f.type === e.Type.OCTETSTRING)
        S.test(f.value) || (l += "(" + f.value + ") "), l += "0x" + t.util.bytesToHex(f.value);
      else if (f.type === e.Type.UTF8)
        try {
          l += t.util.decodeUtf8(f.value);
        } catch (m) {
          if (m.message === "URI malformed")
            l += "0x" + t.util.bytesToHex(f.value) + " (malformed UTF8)";
          else
            throw m;
        }
      else f.type === e.Type.PRINTABLESTRING || f.type === e.Type.IA5String ? l += f.value : S.test(f.value) ? l += "0x" + t.util.bytesToHex(f.value) : f.value.length === 0 ? l += "[null]" : l += f.value;
    }
    return l;
  }, cr.exports;
}
var pr = { exports: {} }, dr, fa;
function St() {
  if (fa) return dr;
  fa = 1;
  var t = ve();
  return dr = t.md = t.md || {}, t.md.algorithms = t.md.algorithms || {}, dr;
}
var pa;
function Gt() {
  if (pa) return pr.exports;
  pa = 1;
  var t = ve();
  St(), Se();
  var e = pr.exports = t.hmac = t.hmac || {};
  return e.create = function() {
    var a = null, p = null, I = null, S = null, f = {};
    return f.start = function(r, g) {
      if (r !== null)
        if (typeof r == "string")
          if (r = r.toLowerCase(), r in t.md.algorithms)
            p = t.md.algorithms[r].create();
          else
            throw new Error('Unknown hash algorithm "' + r + '"');
        else
          p = r;
      if (g === null)
        g = a;
      else {
        if (typeof g == "string")
          g = t.util.createBuffer(g);
        else if (t.util.isArray(g)) {
          var l = g;
          g = t.util.createBuffer();
          for (var b = 0; b < l.length; ++b)
            g.putByte(l[b]);
        }
        var U = g.length();
        U > p.blockLength && (p.start(), p.update(g.bytes()), g = p.digest()), I = t.util.createBuffer(), S = t.util.createBuffer(), U = g.length();
        for (var b = 0; b < U; ++b) {
          var l = g.at(b);
          I.putByte(54 ^ l), S.putByte(92 ^ l);
        }
        if (U < p.blockLength)
          for (var l = p.blockLength - U, b = 0; b < l; ++b)
            I.putByte(54), S.putByte(92);
        a = g, I = I.bytes(), S = S.bytes();
      }
      p.start(), p.update(I);
    }, f.update = function(r) {
      p.update(r);
    }, f.getMac = function() {
      var r = p.digest().bytes();
      return p.start(), p.update(S), p.update(r), p.digest();
    }, f.digest = f.getMac, f;
  }, pr.exports;
}
var hr = { exports: {} }, da;
function Jr() {
  if (da) return hr.exports;
  da = 1;
  var t = ve();
  St(), Se();
  var e = hr.exports = t.md5 = t.md5 || {};
  t.md.md5 = t.md.algorithms.md5 = e, e.create = function() {
    f || r();
    var l = null, b = t.util.createBuffer(), U = new Array(16), E = {
      algorithm: "md5",
      blockLength: 64,
      digestLength: 16,
      // 56-bit length of message so far (does not including padding)
      messageLength: 0,
      // true message length
      fullMessageLength: null,
      // size of message length in bytes
      messageLengthSize: 8
    };
    return E.start = function() {
      E.messageLength = 0, E.fullMessageLength = E.messageLength64 = [];
      for (var u = E.messageLengthSize / 4, y = 0; y < u; ++y)
        E.fullMessageLength.push(0);
      return b = t.util.createBuffer(), l = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878
      }, E;
    }, E.start(), E.update = function(u, y) {
      y === "utf8" && (u = t.util.encodeUtf8(u));
      var C = u.length;
      E.messageLength += C, C = [C / 4294967296 >>> 0, C >>> 0];
      for (var m = E.fullMessageLength.length - 1; m >= 0; --m)
        E.fullMessageLength[m] += C[1], C[1] = C[0] + (E.fullMessageLength[m] / 4294967296 >>> 0), E.fullMessageLength[m] = E.fullMessageLength[m] >>> 0, C[0] = C[1] / 4294967296 >>> 0;
      return b.putBytes(u), g(l, U, b), (b.read > 2048 || b.length() === 0) && b.compact(), E;
    }, E.digest = function() {
      var u = t.util.createBuffer();
      u.putBytes(b.bytes());
      var y = E.fullMessageLength[E.fullMessageLength.length - 1] + E.messageLengthSize, C = y & E.blockLength - 1;
      u.putBytes(a.substr(0, E.blockLength - C));
      for (var m, s = 0, h = E.fullMessageLength.length - 1; h >= 0; --h)
        m = E.fullMessageLength[h] * 8 + s, s = m / 4294967296 >>> 0, u.putInt32Le(m >>> 0);
      var v = {
        h0: l.h0,
        h1: l.h1,
        h2: l.h2,
        h3: l.h3
      };
      g(v, U, u);
      var B = t.util.createBuffer();
      return B.putInt32Le(v.h0), B.putInt32Le(v.h1), B.putInt32Le(v.h2), B.putInt32Le(v.h3), B;
    }, E;
  };
  var a = null, p = null, I = null, S = null, f = !1;
  function r() {
    a = "", a += t.util.fillString("\0", 64), p = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      1,
      6,
      11,
      0,
      5,
      10,
      15,
      4,
      9,
      14,
      3,
      8,
      13,
      2,
      7,
      12,
      5,
      8,
      11,
      14,
      1,
      4,
      7,
      10,
      13,
      0,
      3,
      6,
      9,
      12,
      15,
      2,
      0,
      7,
      14,
      5,
      12,
      3,
      10,
      1,
      8,
      15,
      6,
      13,
      4,
      11,
      2,
      9
    ], I = [
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      7,
      12,
      17,
      22,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      5,
      9,
      14,
      20,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      4,
      11,
      16,
      23,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21,
      6,
      10,
      15,
      21
    ], S = new Array(64);
    for (var l = 0; l < 64; ++l)
      S[l] = Math.floor(Math.abs(Math.sin(l + 1)) * 4294967296);
    f = !0;
  }
  function g(l, b, U) {
    for (var E, u, y, C, m, s, h, v, B = U.length(); B >= 64; ) {
      for (u = l.h0, y = l.h1, C = l.h2, m = l.h3, v = 0; v < 16; ++v)
        b[v] = U.getInt32Le(), s = m ^ y & (C ^ m), E = u + s + S[v] + b[v], h = I[v], u = m, m = C, C = y, y += E << h | E >>> 32 - h;
      for (; v < 32; ++v)
        s = C ^ m & (y ^ C), E = u + s + S[v] + b[p[v]], h = I[v], u = m, m = C, C = y, y += E << h | E >>> 32 - h;
      for (; v < 48; ++v)
        s = y ^ C ^ m, E = u + s + S[v] + b[p[v]], h = I[v], u = m, m = C, C = y, y += E << h | E >>> 32 - h;
      for (; v < 64; ++v)
        s = C ^ (y | ~m), E = u + s + S[v] + b[p[v]], h = I[v], u = m, m = C, C = y, y += E << h | E >>> 32 - h;
      l.h0 = l.h0 + u | 0, l.h1 = l.h1 + y | 0, l.h2 = l.h2 + C | 0, l.h3 = l.h3 + m | 0, B -= 64;
    }
  }
  return hr.exports;
}
var gr = { exports: {} }, ha;
function Ot() {
  if (ha) return gr.exports;
  ha = 1;
  var t = ve();
  Se();
  var e = gr.exports = t.pem = t.pem || {};
  e.encode = function(I, S) {
    S = S || {};
    var f = "-----BEGIN " + I.type + `-----\r
`, r;
    if (I.procType && (r = {
      name: "Proc-Type",
      values: [String(I.procType.version), I.procType.type]
    }, f += a(r)), I.contentDomain && (r = { name: "Content-Domain", values: [I.contentDomain] }, f += a(r)), I.dekInfo && (r = { name: "DEK-Info", values: [I.dekInfo.algorithm] }, I.dekInfo.parameters && r.values.push(I.dekInfo.parameters), f += a(r)), I.headers)
      for (var g = 0; g < I.headers.length; ++g)
        f += a(I.headers[g]);
    return I.procType && (f += `\r
`), f += t.util.encode64(I.body, S.maxline || 64) + `\r
`, f += "-----END " + I.type + `-----\r
`, f;
  }, e.decode = function(I) {
    for (var S = [], f = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g, r = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/, g = /\r?\n/, l; l = f.exec(I), !!l; ) {
      var b = l[1];
      b === "NEW CERTIFICATE REQUEST" && (b = "CERTIFICATE REQUEST");
      var U = {
        type: b,
        procType: null,
        contentDomain: null,
        dekInfo: null,
        headers: [],
        body: t.util.decode64(l[3])
      };
      if (S.push(U), !!l[2]) {
        for (var E = l[2].split(g), u = 0; l && u < E.length; ) {
          for (var y = E[u].replace(/\s+$/, ""), C = u + 1; C < E.length; ++C) {
            var m = E[C];
            if (!/\s/.test(m[0]))
              break;
            y += m, u = C;
          }
          if (l = y.match(r), l) {
            for (var s = { name: l[1], values: [] }, h = l[2].split(","), v = 0; v < h.length; ++v)
              s.values.push(p(h[v]));
            if (U.procType)
              if (!U.contentDomain && s.name === "Content-Domain")
                U.contentDomain = h[0] || "";
              else if (!U.dekInfo && s.name === "DEK-Info") {
                if (s.values.length === 0)
                  throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
                U.dekInfo = { algorithm: h[0], parameters: h[1] || null };
              } else
                U.headers.push(s);
            else {
              if (s.name !== "Proc-Type")
                throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
              if (s.values.length !== 2)
                throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
              U.procType = { version: h[0], type: h[1] };
            }
          }
          ++u;
        }
        if (U.procType === "ENCRYPTED" && !U.dekInfo)
          throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
      }
    }
    if (S.length === 0)
      throw new Error("Invalid PEM formatted message.");
    return S;
  };
  function a(I) {
    for (var S = I.name + ": ", f = [], r = function(E, u) {
      return " " + u;
    }, g = 0; g < I.values.length; ++g)
      f.push(I.values[g].replace(/^(\S+\r\n)/, r));
    S += f.join(",") + `\r
`;
    for (var l = 0, b = -1, g = 0; g < S.length; ++g, ++l)
      if (l > 65 && b !== -1) {
        var U = S[b];
        U === "," ? (++b, S = S.substr(0, b) + `\r
 ` + S.substr(b)) : S = S.substr(0, b) + `\r
` + U + S.substr(b + 1), l = g - b - 1, b = -1, ++g;
      } else (S[g] === " " || S[g] === "	" || S[g] === ",") && (b = g);
    return S;
  }
  function p(I) {
    return I.replace(/^\s+/, "");
  }
  return gr.exports;
}
var yr = { exports: {} }, vr, ga;
function _t() {
  if (ga) return vr;
  ga = 1;
  var t = ve();
  Qr(), $a(), Se(), vr = t.des = t.des || {}, t.des.startEncrypting = function(u, y, C, m) {
    var s = E({
      key: u,
      output: C,
      decrypt: !1,
      mode: m || (y === null ? "ECB" : "CBC")
    });
    return s.start(y), s;
  }, t.des.createEncryptionCipher = function(u, y) {
    return E({
      key: u,
      output: null,
      decrypt: !1,
      mode: y
    });
  }, t.des.startDecrypting = function(u, y, C, m) {
    var s = E({
      key: u,
      output: C,
      decrypt: !0,
      mode: m || (y === null ? "ECB" : "CBC")
    });
    return s.start(y), s;
  }, t.des.createDecryptionCipher = function(u, y) {
    return E({
      key: u,
      output: null,
      decrypt: !0,
      mode: y
    });
  }, t.des.Algorithm = function(u, y) {
    var C = this;
    C.name = u, C.mode = new y({
      blockSize: 8,
      cipher: {
        encrypt: function(m, s) {
          return U(C._keys, m, s, !1);
        },
        decrypt: function(m, s) {
          return U(C._keys, m, s, !0);
        }
      }
    }), C._init = !1;
  }, t.des.Algorithm.prototype.initialize = function(u) {
    if (!this._init) {
      var y = t.util.createBuffer(u.key);
      if (this.name.indexOf("3DES") === 0 && y.length() !== 24)
        throw new Error("Invalid Triple-DES key size: " + y.length() * 8);
      this._keys = b(y), this._init = !0;
    }
  }, e("DES-ECB", t.cipher.modes.ecb), e("DES-CBC", t.cipher.modes.cbc), e("DES-CFB", t.cipher.modes.cfb), e("DES-OFB", t.cipher.modes.ofb), e("DES-CTR", t.cipher.modes.ctr), e("3DES-ECB", t.cipher.modes.ecb), e("3DES-CBC", t.cipher.modes.cbc), e("3DES-CFB", t.cipher.modes.cfb), e("3DES-OFB", t.cipher.modes.ofb), e("3DES-CTR", t.cipher.modes.ctr);
  function e(u, y) {
    var C = function() {
      return new t.des.Algorithm(u, y);
    };
    t.cipher.registerAlgorithm(u, C);
  }
  var a = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756], p = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344], I = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584], S = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928], f = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080], r = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312], g = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154], l = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
  function b(u) {
    for (var y = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], C = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], m = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], s = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], h = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], v = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], B = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], R = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], c = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], i = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], n = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], T = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], V = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], O = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261], D = u.length() > 8 ? 3 : 1, M = [], x = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], G = 0, z, Y = 0; Y < D; Y++) {
      var Z = u.getInt32(), te = u.getInt32();
      z = (Z >>> 4 ^ te) & 252645135, te ^= z, Z ^= z << 4, z = (te >>> -16 ^ Z) & 65535, Z ^= z, te ^= z << -16, z = (Z >>> 2 ^ te) & 858993459, te ^= z, Z ^= z << 2, z = (te >>> -16 ^ Z) & 65535, Z ^= z, te ^= z << -16, z = (Z >>> 1 ^ te) & 1431655765, te ^= z, Z ^= z << 1, z = (te >>> 8 ^ Z) & 16711935, Z ^= z, te ^= z << 8, z = (Z >>> 1 ^ te) & 1431655765, te ^= z, Z ^= z << 1, z = Z << 8 | te >>> 20 & 240, Z = te << 24 | te << 8 & 16711680 | te >>> 8 & 65280 | te >>> 24 & 240, te = z;
      for (var ue = 0; ue < x.length; ++ue) {
        x[ue] ? (Z = Z << 2 | Z >>> 26, te = te << 2 | te >>> 26) : (Z = Z << 1 | Z >>> 27, te = te << 1 | te >>> 27), Z &= -15, te &= -15;
        var he = y[Z >>> 28] | C[Z >>> 24 & 15] | m[Z >>> 20 & 15] | s[Z >>> 16 & 15] | h[Z >>> 12 & 15] | v[Z >>> 8 & 15] | B[Z >>> 4 & 15], Ce = R[te >>> 28] | c[te >>> 24 & 15] | i[te >>> 20 & 15] | n[te >>> 16 & 15] | T[te >>> 12 & 15] | V[te >>> 8 & 15] | O[te >>> 4 & 15];
        z = (Ce >>> 16 ^ he) & 65535, M[G++] = he ^ z, M[G++] = Ce ^ z << 16;
      }
    }
    return M;
  }
  function U(u, y, C, m) {
    var s = u.length === 32 ? 3 : 9, h;
    s === 3 ? h = m ? [30, -2, -2] : [0, 32, 2] : h = m ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
    var v, B = y[0], R = y[1];
    v = (B >>> 4 ^ R) & 252645135, R ^= v, B ^= v << 4, v = (B >>> 16 ^ R) & 65535, R ^= v, B ^= v << 16, v = (R >>> 2 ^ B) & 858993459, B ^= v, R ^= v << 2, v = (R >>> 8 ^ B) & 16711935, B ^= v, R ^= v << 8, v = (B >>> 1 ^ R) & 1431655765, R ^= v, B ^= v << 1, B = B << 1 | B >>> 31, R = R << 1 | R >>> 31;
    for (var c = 0; c < s; c += 3) {
      for (var i = h[c + 1], n = h[c + 2], T = h[c]; T != i; T += n) {
        var V = R ^ u[T], O = (R >>> 4 | R << 28) ^ u[T + 1];
        v = B, B = R, R = v ^ (p[V >>> 24 & 63] | S[V >>> 16 & 63] | r[V >>> 8 & 63] | l[V & 63] | a[O >>> 24 & 63] | I[O >>> 16 & 63] | f[O >>> 8 & 63] | g[O & 63]);
      }
      v = B, B = R, R = v;
    }
    B = B >>> 1 | B << 31, R = R >>> 1 | R << 31, v = (B >>> 1 ^ R) & 1431655765, R ^= v, B ^= v << 1, v = (R >>> 8 ^ B) & 16711935, B ^= v, R ^= v << 8, v = (R >>> 2 ^ B) & 858993459, B ^= v, R ^= v << 2, v = (B >>> 16 ^ R) & 65535, R ^= v, B ^= v << 16, v = (B >>> 4 ^ R) & 252645135, R ^= v, B ^= v << 4, C[0] = B, C[1] = R;
  }
  function E(u) {
    u = u || {};
    var y = (u.mode || "CBC").toUpperCase(), C = "DES-" + y, m;
    u.decrypt ? m = t.cipher.createDecipher(C, u.key) : m = t.cipher.createCipher(C, u.key);
    var s = m.start;
    return m.start = function(h, v) {
      var B = null;
      v instanceof t.util.ByteBuffer && (B = v, v = {}), v = v || {}, v.output = B, v.iv = h, s.call(m, v);
    }, m;
  }
  return vr;
}
const cs = {}, fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), Hr = /* @__PURE__ */ ls(fs);
var mr, ya;
function Yr() {
  if (ya) return mr;
  ya = 1;
  var t = ve();
  Gt(), St(), Se();
  var e = t.pkcs5 = t.pkcs5 || {}, a;
  return t.util.isNodejs && !t.options.usePureJavaScript && (a = Hr), mr = t.pbkdf2 = e.pbkdf2 = function(p, I, S, f, r, g) {
    if (typeof r == "function" && (g = r, r = null), t.util.isNodejs && !t.options.usePureJavaScript && a.pbkdf2 && (r === null || typeof r != "object") && (a.pbkdf2Sync.length > 4 || !r || r === "sha1"))
      return typeof r != "string" && (r = "sha1"), p = Buffer.from(p, "binary"), I = Buffer.from(I, "binary"), g ? a.pbkdf2Sync.length === 4 ? a.pbkdf2(p, I, S, f, function(c, i) {
        if (c)
          return g(c);
        g(null, i.toString("binary"));
      }) : a.pbkdf2(p, I, S, f, r, function(c, i) {
        if (c)
          return g(c);
        g(null, i.toString("binary"));
      }) : a.pbkdf2Sync.length === 4 ? a.pbkdf2Sync(p, I, S, f).toString("binary") : a.pbkdf2Sync(p, I, S, f, r).toString("binary");
    if ((typeof r > "u" || r === null) && (r = "sha1"), typeof r == "string") {
      if (!(r in t.md.algorithms))
        throw new Error("Unknown hash algorithm: " + r);
      r = t.md[r].create();
    }
    var l = r.digestLength;
    if (f > 4294967295 * l) {
      var b = new Error("Derived key is too long.");
      if (g)
        return g(b);
      throw b;
    }
    var U = Math.ceil(f / l), E = f - (U - 1) * l, u = t.hmac.create();
    u.start(r, p);
    var y = "", C, m, s;
    if (!g) {
      for (var h = 1; h <= U; ++h) {
        u.start(null, null), u.update(I), u.update(t.util.int32ToBytes(h)), C = s = u.digest().getBytes();
        for (var v = 2; v <= S; ++v)
          u.start(null, null), u.update(s), m = u.digest().getBytes(), C = t.util.xorBytes(C, m, l), s = m;
        y += h < U ? C : C.substr(0, E);
      }
      return y;
    }
    var h = 1, v;
    function B() {
      if (h > U)
        return g(null, y);
      u.start(null, null), u.update(I), u.update(t.util.int32ToBytes(h)), C = s = u.digest().getBytes(), v = 2, R();
    }
    function R() {
      if (v <= S)
        return u.start(null, null), u.update(s), m = u.digest().getBytes(), C = t.util.xorBytes(C, m, l), s = m, ++v, t.util.setImmediate(R);
      y += h < U ? C : C.substr(0, E), ++h, B();
    }
    B();
  }, mr;
}
var Yt = { exports: {} }, Cr = { exports: {} }, va;
function en() {
  if (va) return Cr.exports;
  va = 1;
  var t = ve();
  St(), Se();
  var e = Cr.exports = t.sha256 = t.sha256 || {};
  t.md.sha256 = t.md.algorithms.sha256 = e, e.create = function() {
    p || S();
    var r = null, g = t.util.createBuffer(), l = new Array(64), b = {
      algorithm: "sha256",
      blockLength: 64,
      digestLength: 32,
      // 56-bit length of message so far (does not including padding)
      messageLength: 0,
      // true message length
      fullMessageLength: null,
      // size of message length in bytes
      messageLengthSize: 8
    };
    return b.start = function() {
      b.messageLength = 0, b.fullMessageLength = b.messageLength64 = [];
      for (var U = b.messageLengthSize / 4, E = 0; E < U; ++E)
        b.fullMessageLength.push(0);
      return g = t.util.createBuffer(), r = {
        h0: 1779033703,
        h1: 3144134277,
        h2: 1013904242,
        h3: 2773480762,
        h4: 1359893119,
        h5: 2600822924,
        h6: 528734635,
        h7: 1541459225
      }, b;
    }, b.start(), b.update = function(U, E) {
      E === "utf8" && (U = t.util.encodeUtf8(U));
      var u = U.length;
      b.messageLength += u, u = [u / 4294967296 >>> 0, u >>> 0];
      for (var y = b.fullMessageLength.length - 1; y >= 0; --y)
        b.fullMessageLength[y] += u[1], u[1] = u[0] + (b.fullMessageLength[y] / 4294967296 >>> 0), b.fullMessageLength[y] = b.fullMessageLength[y] >>> 0, u[0] = u[1] / 4294967296 >>> 0;
      return g.putBytes(U), f(r, l, g), (g.read > 2048 || g.length() === 0) && g.compact(), b;
    }, b.digest = function() {
      var U = t.util.createBuffer();
      U.putBytes(g.bytes());
      var E = b.fullMessageLength[b.fullMessageLength.length - 1] + b.messageLengthSize, u = E & b.blockLength - 1;
      U.putBytes(a.substr(0, b.blockLength - u));
      for (var y, C, m = b.fullMessageLength[0] * 8, s = 0; s < b.fullMessageLength.length - 1; ++s)
        y = b.fullMessageLength[s + 1] * 8, C = y / 4294967296 >>> 0, m += C, U.putInt32(m >>> 0), m = y >>> 0;
      U.putInt32(m);
      var h = {
        h0: r.h0,
        h1: r.h1,
        h2: r.h2,
        h3: r.h3,
        h4: r.h4,
        h5: r.h5,
        h6: r.h6,
        h7: r.h7
      };
      f(h, l, U);
      var v = t.util.createBuffer();
      return v.putInt32(h.h0), v.putInt32(h.h1), v.putInt32(h.h2), v.putInt32(h.h3), v.putInt32(h.h4), v.putInt32(h.h5), v.putInt32(h.h6), v.putInt32(h.h7), v;
    }, b;
  };
  var a = null, p = !1, I = null;
  function S() {
    a = "", a += t.util.fillString("\0", 64), I = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], p = !0;
  }
  function f(r, g, l) {
    for (var b, U, E, u, y, C, m, s, h, v, B, R, c, i, n, T = l.length(); T >= 64; ) {
      for (m = 0; m < 16; ++m)
        g[m] = l.getInt32();
      for (; m < 64; ++m)
        b = g[m - 2], b = (b >>> 17 | b << 15) ^ (b >>> 19 | b << 13) ^ b >>> 10, U = g[m - 15], U = (U >>> 7 | U << 25) ^ (U >>> 18 | U << 14) ^ U >>> 3, g[m] = b + g[m - 7] + U + g[m - 16] | 0;
      for (s = r.h0, h = r.h1, v = r.h2, B = r.h3, R = r.h4, c = r.h5, i = r.h6, n = r.h7, m = 0; m < 64; ++m)
        u = (R >>> 6 | R << 26) ^ (R >>> 11 | R << 21) ^ (R >>> 25 | R << 7), y = i ^ R & (c ^ i), E = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10), C = s & h | v & (s ^ h), b = n + u + y + I[m] + g[m], U = E + C, n = i, i = c, c = R, R = B + b >>> 0, B = v, v = h, h = s, s = b + U >>> 0;
      r.h0 = r.h0 + s | 0, r.h1 = r.h1 + h | 0, r.h2 = r.h2 + v | 0, r.h3 = r.h3 + B | 0, r.h4 = r.h4 + R | 0, r.h5 = r.h5 + c | 0, r.h6 = r.h6 + i | 0, r.h7 = r.h7 + n | 0, T -= 64;
    }
  }
  return Cr.exports;
}
var Er = { exports: {} }, ma;
function tn() {
  if (ma) return Er.exports;
  ma = 1;
  var t = ve();
  Se();
  var e = null;
  t.util.isNodejs && !t.options.usePureJavaScript && !process.versions["node-webkit"] && (e = Hr);
  var a = Er.exports = t.prng = t.prng || {};
  return a.create = function(p) {
    for (var I = {
      plugin: p,
      key: null,
      seed: null,
      time: null,
      // number of reseeds so far
      reseeds: 0,
      // amount of data generated so far
      generated: 0,
      // no initial key bytes
      keyBytes: ""
    }, S = p.md, f = new Array(32), r = 0; r < 32; ++r)
      f[r] = S.create();
    I.pools = f, I.pool = 0, I.generate = function(E, u) {
      if (!u)
        return I.generateSync(E);
      var y = I.plugin.cipher, C = I.plugin.increment, m = I.plugin.formatKey, s = I.plugin.formatSeed, h = t.util.createBuffer();
      I.key = null, v();
      function v(B) {
        if (B)
          return u(B);
        if (h.length() >= E)
          return u(null, h.getBytes(E));
        if (I.generated > 1048575 && (I.key = null), I.key === null)
          return t.util.nextTick(function() {
            g(v);
          });
        var R = y(I.key, I.seed);
        I.generated += R.length, h.putBytes(R), I.key = m(y(I.key, C(I.seed))), I.seed = s(y(I.key, I.seed)), t.util.setImmediate(v);
      }
    }, I.generateSync = function(E) {
      var u = I.plugin.cipher, y = I.plugin.increment, C = I.plugin.formatKey, m = I.plugin.formatSeed;
      I.key = null;
      for (var s = t.util.createBuffer(); s.length() < E; ) {
        I.generated > 1048575 && (I.key = null), I.key === null && l();
        var h = u(I.key, I.seed);
        I.generated += h.length, s.putBytes(h), I.key = C(u(I.key, y(I.seed))), I.seed = m(u(I.key, I.seed));
      }
      return s.getBytes(E);
    };
    function g(E) {
      if (I.pools[0].messageLength >= 32)
        return b(), E();
      var u = 32 - I.pools[0].messageLength << 5;
      I.seedFile(u, function(y, C) {
        if (y)
          return E(y);
        I.collect(C), b(), E();
      });
    }
    function l() {
      if (I.pools[0].messageLength >= 32)
        return b();
      var E = 32 - I.pools[0].messageLength << 5;
      I.collect(I.seedFileSync(E)), b();
    }
    function b() {
      I.reseeds = I.reseeds === 4294967295 ? 0 : I.reseeds + 1;
      var E = I.plugin.md.create();
      E.update(I.keyBytes);
      for (var u = 1, y = 0; y < 32; ++y)
        I.reseeds % u === 0 && (E.update(I.pools[y].digest().getBytes()), I.pools[y].start()), u = u << 1;
      I.keyBytes = E.digest().getBytes(), E.start(), E.update(I.keyBytes);
      var C = E.digest().getBytes();
      I.key = I.plugin.formatKey(I.keyBytes), I.seed = I.plugin.formatSeed(C), I.generated = 0;
    }
    function U(E) {
      var u = null, y = t.util.globalScope, C = y.crypto || y.msCrypto;
      C && C.getRandomValues && (u = function(n) {
        return C.getRandomValues(n);
      });
      var m = t.util.createBuffer();
      if (u)
        for (; m.length() < E; ) {
          var s = Math.max(1, Math.min(E - m.length(), 65536) / 4), h = new Uint32Array(Math.floor(s));
          try {
            u(h);
            for (var v = 0; v < h.length; ++v)
              m.putInt32(h[v]);
          } catch (n) {
            if (!(typeof QuotaExceededError < "u" && n instanceof QuotaExceededError))
              throw n;
          }
        }
      if (m.length() < E)
        for (var B, R, c, i = Math.floor(Math.random() * 65536); m.length() < E; ) {
          R = 16807 * (i & 65535), B = 16807 * (i >> 16), R += (B & 32767) << 16, R += B >> 15, R = (R & 2147483647) + (R >> 31), i = R & 4294967295;
          for (var v = 0; v < 3; ++v)
            c = i >>> (v << 3), c ^= Math.floor(Math.random() * 256), m.putByte(c & 255);
        }
      return m.getBytes(E);
    }
    return e ? (I.seedFile = function(E, u) {
      e.randomBytes(E, function(y, C) {
        if (y)
          return u(y);
        u(null, C.toString());
      });
    }, I.seedFileSync = function(E) {
      return e.randomBytes(E).toString();
    }) : (I.seedFile = function(E, u) {
      try {
        u(null, U(E));
      } catch (y) {
        u(y);
      }
    }, I.seedFileSync = U), I.collect = function(E) {
      for (var u = E.length, y = 0; y < u; ++y)
        I.pools[I.pool].update(E.substr(y, 1)), I.pool = I.pool === 31 ? 0 : I.pool + 1;
    }, I.collectInt = function(E, u) {
      for (var y = "", C = 0; C < u; C += 8)
        y += String.fromCharCode(E >> C & 255);
      I.collect(y);
    }, I.registerWorker = function(E) {
      if (E === self)
        I.seedFile = function(y, C) {
          function m(s) {
            var h = s.data;
            h.forge && h.forge.prng && (self.removeEventListener("message", m), C(h.forge.prng.err, h.forge.prng.bytes));
          }
          self.addEventListener("message", m), self.postMessage({ forge: { prng: { needed: y } } });
        };
      else {
        var u = function(y) {
          var C = y.data;
          C.forge && C.forge.prng && I.seedFile(C.forge.prng.needed, function(m, s) {
            E.postMessage({ forge: { prng: { err: m, bytes: s } } });
          });
        };
        E.addEventListener("message", u);
      }
    }, I;
  }, Er.exports;
}
var Ca;
function ht() {
  if (Ca) return Yt.exports;
  Ca = 1;
  var t = ve();
  return Nt(), en(), tn(), Se(), (function() {
    if (t.random && t.random.getBytes) {
      Yt.exports = t.random;
      return;
    }
    (function(e) {
      var a = {}, p = new Array(4), I = t.util.createBuffer();
      a.formatKey = function(E) {
        var u = t.util.createBuffer(E);
        return E = new Array(4), E[0] = u.getInt32(), E[1] = u.getInt32(), E[2] = u.getInt32(), E[3] = u.getInt32(), t.aes._expandKey(E, !1);
      }, a.formatSeed = function(E) {
        var u = t.util.createBuffer(E);
        return E = new Array(4), E[0] = u.getInt32(), E[1] = u.getInt32(), E[2] = u.getInt32(), E[3] = u.getInt32(), E;
      }, a.cipher = function(E, u) {
        return t.aes._updateBlock(E, u, p, !1), I.putInt32(p[0]), I.putInt32(p[1]), I.putInt32(p[2]), I.putInt32(p[3]), I.getBytes();
      }, a.increment = function(E) {
        return ++E[3], E;
      }, a.md = t.md.sha256;
      function S() {
        var E = t.prng.create(a);
        return E.getBytes = function(u, y) {
          return E.generate(u, y);
        }, E.getBytesSync = function(u) {
          return E.generate(u);
        }, E;
      }
      var f = S(), r = null, g = t.util.globalScope, l = g.crypto || g.msCrypto;
      if (l && l.getRandomValues && (r = function(E) {
        return l.getRandomValues(E);
      }), t.options.usePureJavaScript || !t.util.isNodejs && !r) {
        if (f.collectInt(+/* @__PURE__ */ new Date(), 32), typeof navigator < "u") {
          var b = "";
          for (var U in navigator)
            try {
              typeof navigator[U] == "string" && (b += navigator[U]);
            } catch {
            }
          f.collect(b), b = null;
        }
        e && (e().mousemove(function(E) {
          f.collectInt(E.clientX, 16), f.collectInt(E.clientY, 16);
        }), e().keypress(function(E) {
          f.collectInt(E.charCode, 8);
        }));
      }
      if (!t.random)
        t.random = f;
      else
        for (var U in f)
          t.random[U] = f[U];
      t.random.createInstance = S, Yt.exports = t.random;
    })(typeof jQuery < "u" ? jQuery : null);
  })(), Yt.exports;
}
var Sr, Ea;
function rn() {
  if (Ea) return Sr;
  Ea = 1;
  var t = ve();
  Se();
  var e = [
    217,
    120,
    249,
    196,
    25,
    221,
    181,
    237,
    40,
    233,
    253,
    121,
    74,
    160,
    216,
    157,
    198,
    126,
    55,
    131,
    43,
    118,
    83,
    142,
    98,
    76,
    100,
    136,
    68,
    139,
    251,
    162,
    23,
    154,
    89,
    245,
    135,
    179,
    79,
    19,
    97,
    69,
    109,
    141,
    9,
    129,
    125,
    50,
    189,
    143,
    64,
    235,
    134,
    183,
    123,
    11,
    240,
    149,
    33,
    34,
    92,
    107,
    78,
    130,
    84,
    214,
    101,
    147,
    206,
    96,
    178,
    28,
    115,
    86,
    192,
    20,
    167,
    140,
    241,
    220,
    18,
    117,
    202,
    31,
    59,
    190,
    228,
    209,
    66,
    61,
    212,
    48,
    163,
    60,
    182,
    38,
    111,
    191,
    14,
    218,
    70,
    105,
    7,
    87,
    39,
    242,
    29,
    155,
    188,
    148,
    67,
    3,
    248,
    17,
    199,
    246,
    144,
    239,
    62,
    231,
    6,
    195,
    213,
    47,
    200,
    102,
    30,
    215,
    8,
    232,
    234,
    222,
    128,
    82,
    238,
    247,
    132,
    170,
    114,
    172,
    53,
    77,
    106,
    42,
    150,
    26,
    210,
    113,
    90,
    21,
    73,
    116,
    75,
    159,
    208,
    94,
    4,
    24,
    164,
    236,
    194,
    224,
    65,
    110,
    15,
    81,
    203,
    204,
    36,
    145,
    175,
    80,
    161,
    244,
    112,
    57,
    153,
    124,
    58,
    133,
    35,
    184,
    180,
    122,
    252,
    2,
    54,
    91,
    37,
    85,
    151,
    49,
    45,
    93,
    250,
    152,
    227,
    138,
    146,
    174,
    5,
    223,
    41,
    16,
    103,
    108,
    186,
    201,
    211,
    0,
    230,
    207,
    225,
    158,
    168,
    44,
    99,
    22,
    1,
    63,
    88,
    226,
    137,
    169,
    13,
    56,
    52,
    27,
    171,
    51,
    255,
    176,
    187,
    72,
    12,
    95,
    185,
    177,
    205,
    46,
    197,
    243,
    219,
    71,
    229,
    165,
    156,
    119,
    10,
    166,
    32,
    104,
    254,
    127,
    193,
    173
  ], a = [1, 2, 3, 5], p = function(f, r) {
    return f << r & 65535 | (f & 65535) >> 16 - r;
  }, I = function(f, r) {
    return (f & 65535) >> r | f << 16 - r & 65535;
  };
  Sr = t.rc2 = t.rc2 || {}, t.rc2.expandKey = function(f, r) {
    typeof f == "string" && (f = t.util.createBuffer(f)), r = r || 128;
    var g = f, l = f.length(), b = r, U = Math.ceil(b / 8), E = 255 >> (b & 7), u;
    for (u = l; u < 128; u++)
      g.putByte(e[g.at(u - 1) + g.at(u - l) & 255]);
    for (g.setAt(128 - U, e[g.at(128 - U) & E]), u = 127 - U; u >= 0; u--)
      g.setAt(u, e[g.at(u + 1) ^ g.at(u + U)]);
    return g;
  };
  var S = function(f, r, g) {
    var l = !1, b = null, U = null, E = null, u, y, C, m, s = [];
    for (f = t.rc2.expandKey(f, r), C = 0; C < 64; C++)
      s.push(f.getInt16Le());
    g ? (u = function(B) {
      for (C = 0; C < 4; C++)
        B[C] += s[m] + (B[(C + 3) % 4] & B[(C + 2) % 4]) + (~B[(C + 3) % 4] & B[(C + 1) % 4]), B[C] = p(B[C], a[C]), m++;
    }, y = function(B) {
      for (C = 0; C < 4; C++)
        B[C] += s[B[(C + 3) % 4] & 63];
    }) : (u = function(B) {
      for (C = 3; C >= 0; C--)
        B[C] = I(B[C], a[C]), B[C] -= s[m] + (B[(C + 3) % 4] & B[(C + 2) % 4]) + (~B[(C + 3) % 4] & B[(C + 1) % 4]), m--;
    }, y = function(B) {
      for (C = 3; C >= 0; C--)
        B[C] -= s[B[(C + 3) % 4] & 63];
    });
    var h = function(B) {
      var R = [];
      for (C = 0; C < 4; C++) {
        var c = b.getInt16Le();
        E !== null && (g ? c ^= E.getInt16Le() : E.putInt16Le(c)), R.push(c & 65535);
      }
      m = g ? 0 : 63;
      for (var i = 0; i < B.length; i++)
        for (var n = 0; n < B[i][0]; n++)
          B[i][1](R);
      for (C = 0; C < 4; C++)
        E !== null && (g ? E.putInt16Le(R[C]) : R[C] ^= E.getInt16Le()), U.putInt16Le(R[C]);
    }, v = null;
    return v = {
      /**
       * Starts or restarts the encryption or decryption process, whichever
       * was previously configured.
       *
       * To use the cipher in CBC mode, iv may be given either as a string
       * of bytes, or as a byte buffer.  For ECB mode, give null as iv.
       *
       * @param iv the initialization vector to use, null for ECB mode.
       * @param output the output the buffer to write to, null to create one.
       */
      start: function(B, R) {
        B && typeof B == "string" && (B = t.util.createBuffer(B)), l = !1, b = t.util.createBuffer(), U = R || new t.util.createBuffer(), E = B, v.output = U;
      },
      /**
       * Updates the next block.
       *
       * @param input the buffer to read from.
       */
      update: function(B) {
        for (l || b.putBuffer(B); b.length() >= 8; )
          h([
            [5, u],
            [1, y],
            [6, u],
            [1, y],
            [5, u]
          ]);
      },
      /**
       * Finishes encrypting or decrypting.
       *
       * @param pad a padding function to use, null for PKCS#7 padding,
       *           signature(blockSize, buffer, decrypt).
       *
       * @return true if successful, false on error.
       */
      finish: function(B) {
        var R = !0;
        if (g)
          if (B)
            R = B(8, b, !g);
          else {
            var c = b.length() === 8 ? 8 : 8 - b.length();
            b.fillWithByte(c, c);
          }
        if (R && (l = !0, v.update()), !g && (R = b.length() === 0, R))
          if (B)
            R = B(8, U, !g);
          else {
            var i = U.length(), n = U.at(i - 1);
            n > i ? R = !1 : U.truncate(n);
          }
        return R;
      }
    }, v;
  };
  return t.rc2.startEncrypting = function(f, r, g) {
    var l = t.rc2.createEncryptionCipher(f, 128);
    return l.start(r, g), l;
  }, t.rc2.createEncryptionCipher = function(f, r) {
    return S(f, r, !0);
  }, t.rc2.startDecrypting = function(f, r, g) {
    var l = t.rc2.createDecryptionCipher(f, 128);
    return l.start(r, g), l;
  }, t.rc2.createDecryptionCipher = function(f, r) {
    return S(f, r, !1);
  }, Sr;
}
var br, Sa;
function $t() {
  if (Sa) return br;
  Sa = 1;
  var t = ve();
  br = t.jsbn = t.jsbn || {};
  var e;
  function a(A, N, P) {
    this.data = [], A != null && (typeof A == "number" ? this.fromNumber(A, N, P) : N == null && typeof A != "string" ? this.fromString(A, 256) : this.fromString(A, N));
  }
  t.jsbn.BigInteger = a;
  function p() {
    return new a(null);
  }
  function I(A, N, P, j, H, W) {
    for (; --W >= 0; ) {
      var oe = N * this.data[A++] + P.data[j] + H;
      H = Math.floor(oe / 67108864), P.data[j++] = oe & 67108863;
    }
    return H;
  }
  function S(A, N, P, j, H, W) {
    for (var oe = N & 32767, ne = N >> 15; --W >= 0; ) {
      var be = this.data[A] & 32767, et = this.data[A++] >> 15, ut = ne * be + et * oe;
      be = oe * be + ((ut & 32767) << 15) + P.data[j] + (H & 1073741823), H = (be >>> 30) + (ut >>> 15) + ne * et + (H >>> 30), P.data[j++] = be & 1073741823;
    }
    return H;
  }
  function f(A, N, P, j, H, W) {
    for (var oe = N & 16383, ne = N >> 14; --W >= 0; ) {
      var be = this.data[A] & 16383, et = this.data[A++] >> 14, ut = ne * be + et * oe;
      be = oe * be + ((ut & 16383) << 14) + P.data[j] + H, H = (be >> 28) + (ut >> 14) + ne * et, P.data[j++] = be & 268435455;
    }
    return H;
  }
  typeof navigator > "u" ? (a.prototype.am = f, e = 28) : navigator.appName == "Microsoft Internet Explorer" ? (a.prototype.am = S, e = 30) : navigator.appName != "Netscape" ? (a.prototype.am = I, e = 26) : (a.prototype.am = f, e = 28), a.prototype.DB = e, a.prototype.DM = (1 << e) - 1, a.prototype.DV = 1 << e;
  var r = 52;
  a.prototype.FV = Math.pow(2, r), a.prototype.F1 = r - e, a.prototype.F2 = 2 * e - r;
  var g = "0123456789abcdefghijklmnopqrstuvwxyz", l = new Array(), b, U;
  for (b = 48, U = 0; U <= 9; ++U) l[b++] = U;
  for (b = 97, U = 10; U < 36; ++U) l[b++] = U;
  for (b = 65, U = 10; U < 36; ++U) l[b++] = U;
  function E(A) {
    return g.charAt(A);
  }
  function u(A, N) {
    var P = l[A.charCodeAt(N)];
    return P ?? -1;
  }
  function y(A) {
    for (var N = this.t - 1; N >= 0; --N) A.data[N] = this.data[N];
    A.t = this.t, A.s = this.s;
  }
  function C(A) {
    this.t = 1, this.s = A < 0 ? -1 : 0, A > 0 ? this.data[0] = A : A < -1 ? this.data[0] = A + this.DV : this.t = 0;
  }
  function m(A) {
    var N = p();
    return N.fromInt(A), N;
  }
  function s(A, N) {
    var P;
    if (N == 16) P = 4;
    else if (N == 8) P = 3;
    else if (N == 256) P = 8;
    else if (N == 2) P = 1;
    else if (N == 32) P = 5;
    else if (N == 4) P = 2;
    else {
      this.fromRadix(A, N);
      return;
    }
    this.t = 0, this.s = 0;
    for (var j = A.length, H = !1, W = 0; --j >= 0; ) {
      var oe = P == 8 ? A[j] & 255 : u(A, j);
      if (oe < 0) {
        A.charAt(j) == "-" && (H = !0);
        continue;
      }
      H = !1, W == 0 ? this.data[this.t++] = oe : W + P > this.DB ? (this.data[this.t - 1] |= (oe & (1 << this.DB - W) - 1) << W, this.data[this.t++] = oe >> this.DB - W) : this.data[this.t - 1] |= oe << W, W += P, W >= this.DB && (W -= this.DB);
    }
    P == 8 && (A[0] & 128) != 0 && (this.s = -1, W > 0 && (this.data[this.t - 1] |= (1 << this.DB - W) - 1 << W)), this.clamp(), H && a.ZERO.subTo(this, this);
  }
  function h() {
    for (var A = this.s & this.DM; this.t > 0 && this.data[this.t - 1] == A; ) --this.t;
  }
  function v(A) {
    if (this.s < 0) return "-" + this.negate().toString(A);
    var N;
    if (A == 16) N = 4;
    else if (A == 8) N = 3;
    else if (A == 2) N = 1;
    else if (A == 32) N = 5;
    else if (A == 4) N = 2;
    else return this.toRadix(A);
    var P = (1 << N) - 1, j, H = !1, W = "", oe = this.t, ne = this.DB - oe * this.DB % N;
    if (oe-- > 0)
      for (ne < this.DB && (j = this.data[oe] >> ne) > 0 && (H = !0, W = E(j)); oe >= 0; )
        ne < N ? (j = (this.data[oe] & (1 << ne) - 1) << N - ne, j |= this.data[--oe] >> (ne += this.DB - N)) : (j = this.data[oe] >> (ne -= N) & P, ne <= 0 && (ne += this.DB, --oe)), j > 0 && (H = !0), H && (W += E(j));
    return H ? W : "0";
  }
  function B() {
    var A = p();
    return a.ZERO.subTo(this, A), A;
  }
  function R() {
    return this.s < 0 ? this.negate() : this;
  }
  function c(A) {
    var N = this.s - A.s;
    if (N != 0) return N;
    var P = this.t;
    if (N = P - A.t, N != 0) return this.s < 0 ? -N : N;
    for (; --P >= 0; ) if ((N = this.data[P] - A.data[P]) != 0) return N;
    return 0;
  }
  function i(A) {
    var N = 1, P;
    return (P = A >>> 16) != 0 && (A = P, N += 16), (P = A >> 8) != 0 && (A = P, N += 8), (P = A >> 4) != 0 && (A = P, N += 4), (P = A >> 2) != 0 && (A = P, N += 2), (P = A >> 1) != 0 && (A = P, N += 1), N;
  }
  function n() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + i(this.data[this.t - 1] ^ this.s & this.DM);
  }
  function T(A, N) {
    var P;
    for (P = this.t - 1; P >= 0; --P) N.data[P + A] = this.data[P];
    for (P = A - 1; P >= 0; --P) N.data[P] = 0;
    N.t = this.t + A, N.s = this.s;
  }
  function V(A, N) {
    for (var P = A; P < this.t; ++P) N.data[P - A] = this.data[P];
    N.t = Math.max(this.t - A, 0), N.s = this.s;
  }
  function O(A, N) {
    var P = A % this.DB, j = this.DB - P, H = (1 << j) - 1, W = Math.floor(A / this.DB), oe = this.s << P & this.DM, ne;
    for (ne = this.t - 1; ne >= 0; --ne)
      N.data[ne + W + 1] = this.data[ne] >> j | oe, oe = (this.data[ne] & H) << P;
    for (ne = W - 1; ne >= 0; --ne) N.data[ne] = 0;
    N.data[W] = oe, N.t = this.t + W + 1, N.s = this.s, N.clamp();
  }
  function D(A, N) {
    N.s = this.s;
    var P = Math.floor(A / this.DB);
    if (P >= this.t) {
      N.t = 0;
      return;
    }
    var j = A % this.DB, H = this.DB - j, W = (1 << j) - 1;
    N.data[0] = this.data[P] >> j;
    for (var oe = P + 1; oe < this.t; ++oe)
      N.data[oe - P - 1] |= (this.data[oe] & W) << H, N.data[oe - P] = this.data[oe] >> j;
    j > 0 && (N.data[this.t - P - 1] |= (this.s & W) << H), N.t = this.t - P, N.clamp();
  }
  function M(A, N) {
    for (var P = 0, j = 0, H = Math.min(A.t, this.t); P < H; )
      j += this.data[P] - A.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
    if (A.t < this.t) {
      for (j -= A.s; P < this.t; )
        j += this.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
      j += this.s;
    } else {
      for (j += this.s; P < A.t; )
        j -= A.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
      j -= A.s;
    }
    N.s = j < 0 ? -1 : 0, j < -1 ? N.data[P++] = this.DV + j : j > 0 && (N.data[P++] = j), N.t = P, N.clamp();
  }
  function x(A, N) {
    var P = this.abs(), j = A.abs(), H = P.t;
    for (N.t = H + j.t; --H >= 0; ) N.data[H] = 0;
    for (H = 0; H < j.t; ++H) N.data[H + P.t] = P.am(0, j.data[H], N, H, 0, P.t);
    N.s = 0, N.clamp(), this.s != A.s && a.ZERO.subTo(N, N);
  }
  function G(A) {
    for (var N = this.abs(), P = A.t = 2 * N.t; --P >= 0; ) A.data[P] = 0;
    for (P = 0; P < N.t - 1; ++P) {
      var j = N.am(P, N.data[P], A, 2 * P, 0, 1);
      (A.data[P + N.t] += N.am(P + 1, 2 * N.data[P], A, 2 * P + 1, j, N.t - P - 1)) >= N.DV && (A.data[P + N.t] -= N.DV, A.data[P + N.t + 1] = 1);
    }
    A.t > 0 && (A.data[A.t - 1] += N.am(P, N.data[P], A, 2 * P, 0, 1)), A.s = 0, A.clamp();
  }
  function z(A, N, P) {
    var j = A.abs();
    if (!(j.t <= 0)) {
      var H = this.abs();
      if (H.t < j.t) {
        N?.fromInt(0), P != null && this.copyTo(P);
        return;
      }
      P == null && (P = p());
      var W = p(), oe = this.s, ne = A.s, be = this.DB - i(j.data[j.t - 1]);
      be > 0 ? (j.lShiftTo(be, W), H.lShiftTo(be, P)) : (j.copyTo(W), H.copyTo(P));
      var et = W.t, ut = W.data[et - 1];
      if (ut != 0) {
        var it = ut * (1 << this.F1) + (et > 1 ? W.data[et - 2] >> this.F2 : 0), mt = this.FV / it, qt = (1 << this.F1) / it, pt = 1 << this.F2, dt = P.t, Qt = dt - et, It = N ?? p();
        for (W.dlShiftTo(Qt, It), P.compareTo(It) >= 0 && (P.data[P.t++] = 1, P.subTo(It, P)), a.ONE.dlShiftTo(et, It), It.subTo(W, W); W.t < et; ) W.data[W.t++] = 0;
        for (; --Qt >= 0; ) {
          var tr = P.data[--dt] == ut ? this.DM : Math.floor(P.data[dt] * mt + (P.data[dt - 1] + pt) * qt);
          if ((P.data[dt] += W.am(0, tr, P, Qt, 0, et)) < tr)
            for (W.dlShiftTo(Qt, It), P.subTo(It, P); P.data[dt] < --tr; ) P.subTo(It, P);
        }
        N != null && (P.drShiftTo(et, N), oe != ne && a.ZERO.subTo(N, N)), P.t = et, P.clamp(), be > 0 && P.rShiftTo(be, P), oe < 0 && a.ZERO.subTo(P, P);
      }
    }
  }
  function Y(A) {
    var N = p();
    return this.abs().divRemTo(A, null, N), this.s < 0 && N.compareTo(a.ZERO) > 0 && A.subTo(N, N), N;
  }
  function Z(A) {
    this.m = A;
  }
  function te(A) {
    return A.s < 0 || A.compareTo(this.m) >= 0 ? A.mod(this.m) : A;
  }
  function ue(A) {
    return A;
  }
  function he(A) {
    A.divRemTo(this.m, null, A);
  }
  function Ce(A, N, P) {
    A.multiplyTo(N, P), this.reduce(P);
  }
  function Ie(A, N) {
    A.squareTo(N), this.reduce(N);
  }
  Z.prototype.convert = te, Z.prototype.revert = ue, Z.prototype.reduce = he, Z.prototype.mulTo = Ce, Z.prototype.sqrTo = Ie;
  function _() {
    if (this.t < 1) return 0;
    var A = this.data[0];
    if ((A & 1) == 0) return 0;
    var N = A & 3;
    return N = N * (2 - (A & 15) * N) & 15, N = N * (2 - (A & 255) * N) & 255, N = N * (2 - ((A & 65535) * N & 65535)) & 65535, N = N * (2 - A * N % this.DV) % this.DV, N > 0 ? this.DV - N : -N;
  }
  function $(A) {
    this.m = A, this.mp = A.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << A.DB - 15) - 1, this.mt2 = 2 * A.t;
  }
  function X(A) {
    var N = p();
    return A.abs().dlShiftTo(this.m.t, N), N.divRemTo(this.m, null, N), A.s < 0 && N.compareTo(a.ZERO) > 0 && this.m.subTo(N, N), N;
  }
  function Oe(A) {
    var N = p();
    return A.copyTo(N), this.reduce(N), N;
  }
  function pe(A) {
    for (; A.t <= this.mt2; )
      A.data[A.t++] = 0;
    for (var N = 0; N < this.m.t; ++N) {
      var P = A.data[N] & 32767, j = P * this.mpl + ((P * this.mph + (A.data[N] >> 15) * this.mpl & this.um) << 15) & A.DM;
      for (P = N + this.m.t, A.data[P] += this.m.am(0, j, A, N, 0, this.m.t); A.data[P] >= A.DV; )
        A.data[P] -= A.DV, A.data[++P]++;
    }
    A.clamp(), A.drShiftTo(this.m.t, A), A.compareTo(this.m) >= 0 && A.subTo(this.m, A);
  }
  function d(A, N) {
    A.squareTo(N), this.reduce(N);
  }
  function L(A, N, P) {
    A.multiplyTo(N, P), this.reduce(P);
  }
  $.prototype.convert = X, $.prototype.revert = Oe, $.prototype.reduce = pe, $.prototype.mulTo = L, $.prototype.sqrTo = d;
  function w() {
    return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
  }
  function o(A, N) {
    if (A > 4294967295 || A < 1) return a.ONE;
    var P = p(), j = p(), H = N.convert(this), W = i(A) - 1;
    for (H.copyTo(P); --W >= 0; )
      if (N.sqrTo(P, j), (A & 1 << W) > 0) N.mulTo(j, H, P);
      else {
        var oe = P;
        P = j, j = oe;
      }
    return N.revert(P);
  }
  function k(A, N) {
    var P;
    return A < 256 || N.isEven() ? P = new Z(N) : P = new $(N), this.exp(A, P);
  }
  a.prototype.copyTo = y, a.prototype.fromInt = C, a.prototype.fromString = s, a.prototype.clamp = h, a.prototype.dlShiftTo = T, a.prototype.drShiftTo = V, a.prototype.lShiftTo = O, a.prototype.rShiftTo = D, a.prototype.subTo = M, a.prototype.multiplyTo = x, a.prototype.squareTo = G, a.prototype.divRemTo = z, a.prototype.invDigit = _, a.prototype.isEven = w, a.prototype.exp = o, a.prototype.toString = v, a.prototype.negate = B, a.prototype.abs = R, a.prototype.compareTo = c, a.prototype.bitLength = n, a.prototype.mod = Y, a.prototype.modPowInt = k, a.ZERO = m(0), a.ONE = m(1);
  function F() {
    var A = p();
    return this.copyTo(A), A;
  }
  function K() {
    if (this.s < 0) {
      if (this.t == 1) return this.data[0] - this.DV;
      if (this.t == 0) return -1;
    } else {
      if (this.t == 1) return this.data[0];
      if (this.t == 0) return 0;
    }
    return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0];
  }
  function Q() {
    return this.t == 0 ? this.s : this.data[0] << 24 >> 24;
  }
  function se() {
    return this.t == 0 ? this.s : this.data[0] << 16 >> 16;
  }
  function le(A) {
    return Math.floor(Math.LN2 * this.DB / Math.log(A));
  }
  function q() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this.data[0] <= 0 ? 0 : 1;
  }
  function ie(A) {
    if (A == null && (A = 10), this.signum() == 0 || A < 2 || A > 36) return "0";
    var N = this.chunkSize(A), P = Math.pow(A, N), j = m(P), H = p(), W = p(), oe = "";
    for (this.divRemTo(j, H, W); H.signum() > 0; )
      oe = (P + W.intValue()).toString(A).substr(1) + oe, H.divRemTo(j, H, W);
    return W.intValue().toString(A) + oe;
  }
  function fe(A, N) {
    this.fromInt(0), N == null && (N = 10);
    for (var P = this.chunkSize(N), j = Math.pow(N, P), H = !1, W = 0, oe = 0, ne = 0; ne < A.length; ++ne) {
      var be = u(A, ne);
      if (be < 0) {
        A.charAt(ne) == "-" && this.signum() == 0 && (H = !0);
        continue;
      }
      oe = N * oe + be, ++W >= P && (this.dMultiply(j), this.dAddOffset(oe, 0), W = 0, oe = 0);
    }
    W > 0 && (this.dMultiply(Math.pow(N, W)), this.dAddOffset(oe, 0)), H && a.ZERO.subTo(this, this);
  }
  function Ee(A, N, P) {
    if (typeof N == "number")
      if (A < 2) this.fromInt(1);
      else
        for (this.fromNumber(A, P), this.testBit(A - 1) || this.bitwiseTo(a.ONE.shiftLeft(A - 1), Re, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(N); )
          this.dAddOffset(2, 0), this.bitLength() > A && this.subTo(a.ONE.shiftLeft(A - 1), this);
    else {
      var j = new Array(), H = A & 7;
      j.length = (A >> 3) + 1, N.nextBytes(j), H > 0 ? j[0] &= (1 << H) - 1 : j[0] = 0, this.fromString(j, 256);
    }
  }
  function ge() {
    var A = this.t, N = new Array();
    N[0] = this.s;
    var P = this.DB - A * this.DB % 8, j, H = 0;
    if (A-- > 0)
      for (P < this.DB && (j = this.data[A] >> P) != (this.s & this.DM) >> P && (N[H++] = j | this.s << this.DB - P); A >= 0; )
        P < 8 ? (j = (this.data[A] & (1 << P) - 1) << 8 - P, j |= this.data[--A] >> (P += this.DB - 8)) : (j = this.data[A] >> (P -= 8) & 255, P <= 0 && (P += this.DB, --A)), (j & 128) != 0 && (j |= -256), H == 0 && (this.s & 128) != (j & 128) && ++H, (H > 0 || j != this.s) && (N[H++] = j);
    return N;
  }
  function ke(A) {
    return this.compareTo(A) == 0;
  }
  function we(A) {
    return this.compareTo(A) < 0 ? this : A;
  }
  function Ae(A) {
    return this.compareTo(A) > 0 ? this : A;
  }
  function Ne(A, N, P) {
    var j, H, W = Math.min(A.t, this.t);
    for (j = 0; j < W; ++j) P.data[j] = N(this.data[j], A.data[j]);
    if (A.t < this.t) {
      for (H = A.s & this.DM, j = W; j < this.t; ++j) P.data[j] = N(this.data[j], H);
      P.t = this.t;
    } else {
      for (H = this.s & this.DM, j = W; j < A.t; ++j) P.data[j] = N(H, A.data[j]);
      P.t = A.t;
    }
    P.s = N(this.s, A.s), P.clamp();
  }
  function Be(A, N) {
    return A & N;
  }
  function Te(A) {
    var N = p();
    return this.bitwiseTo(A, Be, N), N;
  }
  function Re(A, N) {
    return A | N;
  }
  function Ue(A) {
    var N = p();
    return this.bitwiseTo(A, Re, N), N;
  }
  function J(A, N) {
    return A ^ N;
  }
  function ee(A) {
    var N = p();
    return this.bitwiseTo(A, J, N), N;
  }
  function ae(A, N) {
    return A & ~N;
  }
  function me(A) {
    var N = p();
    return this.bitwiseTo(A, ae, N), N;
  }
  function Ke() {
    for (var A = p(), N = 0; N < this.t; ++N) A.data[N] = this.DM & ~this.data[N];
    return A.t = this.t, A.s = ~this.s, A;
  }
  function ot(A) {
    var N = p();
    return A < 0 ? this.rShiftTo(-A, N) : this.lShiftTo(A, N), N;
  }
  function lt(A) {
    var N = p();
    return A < 0 ? this.lShiftTo(-A, N) : this.rShiftTo(A, N), N;
  }
  function vt(A) {
    if (A == 0) return -1;
    var N = 0;
    return (A & 65535) == 0 && (A >>= 16, N += 16), (A & 255) == 0 && (A >>= 8, N += 8), (A & 15) == 0 && (A >>= 4, N += 4), (A & 3) == 0 && (A >>= 2, N += 2), (A & 1) == 0 && ++N, N;
  }
  function bt() {
    for (var A = 0; A < this.t; ++A)
      if (this.data[A] != 0) return A * this.DB + vt(this.data[A]);
    return this.s < 0 ? this.t * this.DB : -1;
  }
  function Bt(A) {
    for (var N = 0; A != 0; )
      A &= A - 1, ++N;
    return N;
  }
  function Rt() {
    for (var A = 0, N = this.s & this.DM, P = 0; P < this.t; ++P) A += Bt(this.data[P] ^ N);
    return A;
  }
  function Mt(A) {
    var N = Math.floor(A / this.DB);
    return N >= this.t ? this.s != 0 : (this.data[N] & 1 << A % this.DB) != 0;
  }
  function zt(A, N) {
    var P = a.ONE.shiftLeft(A);
    return this.bitwiseTo(P, N, P), P;
  }
  function Fe(A) {
    return this.changeBit(A, Re);
  }
  function Ge(A) {
    return this.changeBit(A, ae);
  }
  function je(A) {
    return this.changeBit(A, J);
  }
  function ze(A, N) {
    for (var P = 0, j = 0, H = Math.min(A.t, this.t); P < H; )
      j += this.data[P] + A.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
    if (A.t < this.t) {
      for (j += A.s; P < this.t; )
        j += this.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
      j += this.s;
    } else {
      for (j += this.s; P < A.t; )
        j += A.data[P], N.data[P++] = j & this.DM, j >>= this.DB;
      j += A.s;
    }
    N.s = j < 0 ? -1 : 0, j > 0 ? N.data[P++] = j : j < -1 && (N.data[P++] = this.DV + j), N.t = P, N.clamp();
  }
  function qe(A) {
    var N = p();
    return this.addTo(A, N), N;
  }
  function Qe(A) {
    var N = p();
    return this.subTo(A, N), N;
  }
  function Je(A) {
    var N = p();
    return this.multiplyTo(A, N), N;
  }
  function He(A) {
    var N = p();
    return this.divRemTo(A, N, null), N;
  }
  function Ye(A) {
    var N = p();
    return this.divRemTo(A, null, N), N;
  }
  function We(A) {
    var N = p(), P = p();
    return this.divRemTo(A, N, P), new Array(N, P);
  }
  function Xe(A) {
    this.data[this.t] = this.am(0, A - 1, this, 0, 0, this.t), ++this.t, this.clamp();
  }
  function Ze(A, N) {
    if (A != 0) {
      for (; this.t <= N; ) this.data[this.t++] = 0;
      for (this.data[N] += A; this.data[N] >= this.DV; )
        this.data[N] -= this.DV, ++N >= this.t && (this.data[this.t++] = 0), ++this.data[N];
    }
  }
  function Le() {
  }
  function Me(A) {
    return A;
  }
  function _e(A, N, P) {
    A.multiplyTo(N, P);
  }
  function $e(A, N) {
    A.squareTo(N);
  }
  Le.prototype.convert = Me, Le.prototype.revert = Me, Le.prototype.mulTo = _e, Le.prototype.sqrTo = $e;
  function hn(A) {
    return this.exp(A, new Le());
  }
  function gn(A, N, P) {
    var j = Math.min(this.t + A.t, N);
    for (P.s = 0, P.t = j; j > 0; ) P.data[--j] = 0;
    var H;
    for (H = P.t - this.t; j < H; ++j) P.data[j + this.t] = this.am(0, A.data[j], P, j, 0, this.t);
    for (H = Math.min(A.t, N); j < H; ++j) this.am(0, A.data[j], P, j, 0, N - j);
    P.clamp();
  }
  function yn(A, N, P) {
    --N;
    var j = P.t = this.t + A.t - N;
    for (P.s = 0; --j >= 0; ) P.data[j] = 0;
    for (j = Math.max(N - this.t, 0); j < A.t; ++j)
      P.data[this.t + j - N] = this.am(N - j, A.data[j], P, 0, 0, this.t + j - N);
    P.clamp(), P.drShiftTo(1, P);
  }
  function Lt(A) {
    this.r2 = p(), this.q3 = p(), a.ONE.dlShiftTo(2 * A.t, this.r2), this.mu = this.r2.divide(A), this.m = A;
  }
  function vn(A) {
    if (A.s < 0 || A.t > 2 * this.m.t) return A.mod(this.m);
    if (A.compareTo(this.m) < 0) return A;
    var N = p();
    return A.copyTo(N), this.reduce(N), N;
  }
  function mn(A) {
    return A;
  }
  function Cn(A) {
    for (A.drShiftTo(this.m.t - 1, this.r2), A.t > this.m.t + 1 && (A.t = this.m.t + 1, A.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); A.compareTo(this.r2) < 0; ) A.dAddOffset(1, this.m.t + 1);
    for (A.subTo(this.r2, A); A.compareTo(this.m) >= 0; ) A.subTo(this.m, A);
  }
  function En(A, N) {
    A.squareTo(N), this.reduce(N);
  }
  function Sn(A, N, P) {
    A.multiplyTo(N, P), this.reduce(P);
  }
  Lt.prototype.convert = vn, Lt.prototype.revert = mn, Lt.prototype.reduce = Cn, Lt.prototype.mulTo = Sn, Lt.prototype.sqrTo = En;
  function bn(A, N) {
    var P = A.bitLength(), j, H = m(1), W;
    if (P <= 0) return H;
    P < 18 ? j = 1 : P < 48 ? j = 3 : P < 144 ? j = 4 : P < 768 ? j = 5 : j = 6, P < 8 ? W = new Z(N) : N.isEven() ? W = new Lt(N) : W = new $(N);
    var oe = new Array(), ne = 3, be = j - 1, et = (1 << j) - 1;
    if (oe[1] = W.convert(this), j > 1) {
      var ut = p();
      for (W.sqrTo(oe[1], ut); ne <= et; )
        oe[ne] = p(), W.mulTo(ut, oe[ne - 2], oe[ne]), ne += 2;
    }
    var it = A.t - 1, mt, qt = !0, pt = p(), dt;
    for (P = i(A.data[it]) - 1; it >= 0; ) {
      for (P >= be ? mt = A.data[it] >> P - be & et : (mt = (A.data[it] & (1 << P + 1) - 1) << be - P, it > 0 && (mt |= A.data[it - 1] >> this.DB + P - be)), ne = j; (mt & 1) == 0; )
        mt >>= 1, --ne;
      if ((P -= ne) < 0 && (P += this.DB, --it), qt)
        oe[mt].copyTo(H), qt = !1;
      else {
        for (; ne > 1; )
          W.sqrTo(H, pt), W.sqrTo(pt, H), ne -= 2;
        ne > 0 ? W.sqrTo(H, pt) : (dt = H, H = pt, pt = dt), W.mulTo(pt, oe[mt], H);
      }
      for (; it >= 0 && (A.data[it] & 1 << P) == 0; )
        W.sqrTo(H, pt), dt = H, H = pt, pt = dt, --P < 0 && (P = this.DB - 1, --it);
    }
    return W.revert(H);
  }
  function In(A) {
    var N = this.s < 0 ? this.negate() : this.clone(), P = A.s < 0 ? A.negate() : A.clone();
    if (N.compareTo(P) < 0) {
      var j = N;
      N = P, P = j;
    }
    var H = N.getLowestSetBit(), W = P.getLowestSetBit();
    if (W < 0) return N;
    for (H < W && (W = H), W > 0 && (N.rShiftTo(W, N), P.rShiftTo(W, P)); N.signum() > 0; )
      (H = N.getLowestSetBit()) > 0 && N.rShiftTo(H, N), (H = P.getLowestSetBit()) > 0 && P.rShiftTo(H, P), N.compareTo(P) >= 0 ? (N.subTo(P, N), N.rShiftTo(1, N)) : (P.subTo(N, P), P.rShiftTo(1, P));
    return W > 0 && P.lShiftTo(W, P), P;
  }
  function An(A) {
    if (A <= 0) return 0;
    var N = this.DV % A, P = this.s < 0 ? A - 1 : 0;
    if (this.t > 0)
      if (N == 0) P = this.data[0] % A;
      else for (var j = this.t - 1; j >= 0; --j) P = (N * P + this.data[j]) % A;
    return P;
  }
  function Bn(A) {
    var N = A.isEven();
    if (this.isEven() && N || A.signum() == 0) return a.ZERO;
    for (var P = A.clone(), j = this.clone(), H = m(1), W = m(0), oe = m(0), ne = m(1); P.signum() != 0; ) {
      for (; P.isEven(); )
        P.rShiftTo(1, P), N ? ((!H.isEven() || !W.isEven()) && (H.addTo(this, H), W.subTo(A, W)), H.rShiftTo(1, H)) : W.isEven() || W.subTo(A, W), W.rShiftTo(1, W);
      for (; j.isEven(); )
        j.rShiftTo(1, j), N ? ((!oe.isEven() || !ne.isEven()) && (oe.addTo(this, oe), ne.subTo(A, ne)), oe.rShiftTo(1, oe)) : ne.isEven() || ne.subTo(A, ne), ne.rShiftTo(1, ne);
      P.compareTo(j) >= 0 ? (P.subTo(j, P), N && H.subTo(oe, H), W.subTo(ne, W)) : (j.subTo(P, j), N && oe.subTo(H, oe), ne.subTo(W, ne));
    }
    if (j.compareTo(a.ONE) != 0) return a.ZERO;
    if (ne.compareTo(A) >= 0) return ne.subtract(A);
    if (ne.signum() < 0) ne.addTo(A, ne);
    else return ne;
    return ne.signum() < 0 ? ne.add(A) : ne;
  }
  var ft = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509], Tn = (1 << 26) / ft[ft.length - 1];
  function kn(A) {
    var N, P = this.abs();
    if (P.t == 1 && P.data[0] <= ft[ft.length - 1]) {
      for (N = 0; N < ft.length; ++N)
        if (P.data[0] == ft[N]) return !0;
      return !1;
    }
    if (P.isEven()) return !1;
    for (N = 1; N < ft.length; ) {
      for (var j = ft[N], H = N + 1; H < ft.length && j < Tn; ) j *= ft[H++];
      for (j = P.modInt(j); N < H; ) if (j % ft[N++] == 0) return !1;
    }
    return P.millerRabin(A);
  }
  function Nn(A) {
    var N = this.subtract(a.ONE), P = N.getLowestSetBit();
    if (P <= 0) return !1;
    for (var j = N.shiftRight(P), H = wn(), W, oe = 0; oe < A; ++oe) {
      do
        W = new a(this.bitLength(), H);
      while (W.compareTo(a.ONE) <= 0 || W.compareTo(N) >= 0);
      var ne = W.modPow(j, this);
      if (ne.compareTo(a.ONE) != 0 && ne.compareTo(N) != 0) {
        for (var be = 1; be++ < P && ne.compareTo(N) != 0; )
          if (ne = ne.modPowInt(2, this), ne.compareTo(a.ONE) == 0) return !1;
        if (ne.compareTo(N) != 0) return !1;
      }
    }
    return !0;
  }
  function wn() {
    return {
      // x is an array to fill with bytes
      nextBytes: function(A) {
        for (var N = 0; N < A.length; ++N)
          A[N] = Math.floor(Math.random() * 256);
      }
    };
  }
  return a.prototype.chunkSize = le, a.prototype.toRadix = ie, a.prototype.fromRadix = fe, a.prototype.fromNumber = Ee, a.prototype.bitwiseTo = Ne, a.prototype.changeBit = zt, a.prototype.addTo = ze, a.prototype.dMultiply = Xe, a.prototype.dAddOffset = Ze, a.prototype.multiplyLowerTo = gn, a.prototype.multiplyUpperTo = yn, a.prototype.modInt = An, a.prototype.millerRabin = Nn, a.prototype.clone = F, a.prototype.intValue = K, a.prototype.byteValue = Q, a.prototype.shortValue = se, a.prototype.signum = q, a.prototype.toByteArray = ge, a.prototype.equals = ke, a.prototype.min = we, a.prototype.max = Ae, a.prototype.and = Te, a.prototype.or = Ue, a.prototype.xor = ee, a.prototype.andNot = me, a.prototype.not = Ke, a.prototype.shiftLeft = ot, a.prototype.shiftRight = lt, a.prototype.getLowestSetBit = bt, a.prototype.bitCount = Rt, a.prototype.testBit = Mt, a.prototype.setBit = Fe, a.prototype.clearBit = Ge, a.prototype.flipBit = je, a.prototype.add = qe, a.prototype.subtract = Qe, a.prototype.multiply = Je, a.prototype.divide = He, a.prototype.remainder = Ye, a.prototype.divideAndRemainder = We, a.prototype.modPow = bn, a.prototype.modInverse = Bn, a.prototype.pow = hn, a.prototype.gcd = In, a.prototype.isProbablePrime = kn, br;
}
var Ir = { exports: {} }, Ar = { exports: {} }, ba;
function jt() {
  if (ba) return Ar.exports;
  ba = 1;
  var t = ve();
  St(), Se();
  var e = Ar.exports = t.sha1 = t.sha1 || {};
  t.md.sha1 = t.md.algorithms.sha1 = e, e.create = function() {
    p || I();
    var f = null, r = t.util.createBuffer(), g = new Array(80), l = {
      algorithm: "sha1",
      blockLength: 64,
      digestLength: 20,
      // 56-bit length of message so far (does not including padding)
      messageLength: 0,
      // true message length
      fullMessageLength: null,
      // size of message length in bytes
      messageLengthSize: 8
    };
    return l.start = function() {
      l.messageLength = 0, l.fullMessageLength = l.messageLength64 = [];
      for (var b = l.messageLengthSize / 4, U = 0; U < b; ++U)
        l.fullMessageLength.push(0);
      return r = t.util.createBuffer(), f = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878,
        h4: 3285377520
      }, l;
    }, l.start(), l.update = function(b, U) {
      U === "utf8" && (b = t.util.encodeUtf8(b));
      var E = b.length;
      l.messageLength += E, E = [E / 4294967296 >>> 0, E >>> 0];
      for (var u = l.fullMessageLength.length - 1; u >= 0; --u)
        l.fullMessageLength[u] += E[1], E[1] = E[0] + (l.fullMessageLength[u] / 4294967296 >>> 0), l.fullMessageLength[u] = l.fullMessageLength[u] >>> 0, E[0] = E[1] / 4294967296 >>> 0;
      return r.putBytes(b), S(f, g, r), (r.read > 2048 || r.length() === 0) && r.compact(), l;
    }, l.digest = function() {
      var b = t.util.createBuffer();
      b.putBytes(r.bytes());
      var U = l.fullMessageLength[l.fullMessageLength.length - 1] + l.messageLengthSize, E = U & l.blockLength - 1;
      b.putBytes(a.substr(0, l.blockLength - E));
      for (var u, y, C = l.fullMessageLength[0] * 8, m = 0; m < l.fullMessageLength.length - 1; ++m)
        u = l.fullMessageLength[m + 1] * 8, y = u / 4294967296 >>> 0, C += y, b.putInt32(C >>> 0), C = u >>> 0;
      b.putInt32(C);
      var s = {
        h0: f.h0,
        h1: f.h1,
        h2: f.h2,
        h3: f.h3,
        h4: f.h4
      };
      S(s, g, b);
      var h = t.util.createBuffer();
      return h.putInt32(s.h0), h.putInt32(s.h1), h.putInt32(s.h2), h.putInt32(s.h3), h.putInt32(s.h4), h;
    }, l;
  };
  var a = null, p = !1;
  function I() {
    a = "", a += t.util.fillString("\0", 64), p = !0;
  }
  function S(f, r, g) {
    for (var l, b, U, E, u, y, C, m, s = g.length(); s >= 64; ) {
      for (b = f.h0, U = f.h1, E = f.h2, u = f.h3, y = f.h4, m = 0; m < 16; ++m)
        l = g.getInt32(), r[m] = l, C = u ^ U & (E ^ u), l = (b << 5 | b >>> 27) + C + y + 1518500249 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      for (; m < 20; ++m)
        l = r[m - 3] ^ r[m - 8] ^ r[m - 14] ^ r[m - 16], l = l << 1 | l >>> 31, r[m] = l, C = u ^ U & (E ^ u), l = (b << 5 | b >>> 27) + C + y + 1518500249 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      for (; m < 32; ++m)
        l = r[m - 3] ^ r[m - 8] ^ r[m - 14] ^ r[m - 16], l = l << 1 | l >>> 31, r[m] = l, C = U ^ E ^ u, l = (b << 5 | b >>> 27) + C + y + 1859775393 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      for (; m < 40; ++m)
        l = r[m - 6] ^ r[m - 16] ^ r[m - 28] ^ r[m - 32], l = l << 2 | l >>> 30, r[m] = l, C = U ^ E ^ u, l = (b << 5 | b >>> 27) + C + y + 1859775393 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      for (; m < 60; ++m)
        l = r[m - 6] ^ r[m - 16] ^ r[m - 28] ^ r[m - 32], l = l << 2 | l >>> 30, r[m] = l, C = U & E | u & (U ^ E), l = (b << 5 | b >>> 27) + C + y + 2400959708 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      for (; m < 80; ++m)
        l = r[m - 6] ^ r[m - 16] ^ r[m - 28] ^ r[m - 32], l = l << 2 | l >>> 30, r[m] = l, C = U ^ E ^ u, l = (b << 5 | b >>> 27) + C + y + 3395469782 + l, y = u, u = E, E = (U << 30 | U >>> 2) >>> 0, U = b, b = l;
      f.h0 = f.h0 + b | 0, f.h1 = f.h1 + U | 0, f.h2 = f.h2 + E | 0, f.h3 = f.h3 + u | 0, f.h4 = f.h4 + y | 0, s -= 64;
    }
  }
  return Ar.exports;
}
var Ia;
function an() {
  if (Ia) return Ir.exports;
  Ia = 1;
  var t = ve();
  Se(), ht(), jt();
  var e = Ir.exports = t.pkcs1 = t.pkcs1 || {};
  e.encode_rsa_oaep = function(p, I, S) {
    var f, r, g, l;
    typeof S == "string" ? (f = S, r = arguments[3] || void 0, g = arguments[4] || void 0) : S && (f = S.label || void 0, r = S.seed || void 0, g = S.md || void 0, S.mgf1 && S.mgf1.md && (l = S.mgf1.md)), g ? g.start() : g = t.md.sha1.create(), l || (l = g);
    var b = Math.ceil(p.n.bitLength() / 8), U = b - 2 * g.digestLength - 2;
    if (I.length > U) {
      var E = new Error("RSAES-OAEP input message length is too long.");
      throw E.length = I.length, E.maxLength = U, E;
    }
    f || (f = ""), g.update(f, "raw");
    for (var u = g.digest(), y = "", C = U - I.length, m = 0; m < C; m++)
      y += "\0";
    var s = u.getBytes() + y + "" + I;
    if (!r)
      r = t.random.getBytes(g.digestLength);
    else if (r.length !== g.digestLength) {
      var E = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
      throw E.seedLength = r.length, E.digestLength = g.digestLength, E;
    }
    var h = a(r, b - g.digestLength - 1, l), v = t.util.xorBytes(s, h, s.length), B = a(v, g.digestLength, l), R = t.util.xorBytes(r, B, r.length);
    return "\0" + R + v;
  }, e.decode_rsa_oaep = function(p, I, S) {
    var f, r, g;
    typeof S == "string" ? (f = S, r = arguments[3] || void 0) : S && (f = S.label || void 0, r = S.md || void 0, S.mgf1 && S.mgf1.md && (g = S.mgf1.md));
    var l = Math.ceil(p.n.bitLength() / 8);
    if (I.length !== l) {
      var b = new Error("RSAES-OAEP encoded message length is invalid.");
      throw b.length = I.length, b.expectedLength = l, b;
    }
    if (r === void 0 ? r = t.md.sha1.create() : r.start(), g || (g = r), l < 2 * r.digestLength + 2)
      throw new Error("RSAES-OAEP key is too short for the hash function.");
    f || (f = ""), r.update(f, "raw");
    for (var U = r.digest().getBytes(), E = I.charAt(0), u = I.substring(1, r.digestLength + 1), y = I.substring(1 + r.digestLength), C = a(y, r.digestLength, g), m = t.util.xorBytes(u, C, u.length), s = a(m, l - r.digestLength - 1, g), h = t.util.xorBytes(y, s, y.length), v = h.substring(0, r.digestLength), b = E !== "\0", B = 0; B < r.digestLength; ++B)
      b |= U.charAt(B) !== v.charAt(B);
    for (var R = 1, c = r.digestLength, i = r.digestLength; i < h.length; i++) {
      var n = h.charCodeAt(i), T = n & 1 ^ 1, V = R ? 65534 : 0;
      b |= n & V, R = R & T, c += R;
    }
    if (b || h.charCodeAt(c) !== 1)
      throw new Error("Invalid RSAES-OAEP padding.");
    return h.substring(c + 1);
  };
  function a(p, I, S) {
    S || (S = t.md.sha1.create());
    for (var f = "", r = Math.ceil(I / S.digestLength), g = 0; g < r; ++g) {
      var l = String.fromCharCode(
        g >> 24 & 255,
        g >> 16 & 255,
        g >> 8 & 255,
        g & 255
      );
      S.start(), S.update(p + l), f += S.digest().getBytes();
    }
    return f.substring(0, I);
  }
  return Ir.exports;
}
var Wt = { exports: {} }, Aa;
function nn() {
  if (Aa) return Wt.exports;
  Aa = 1;
  var t = ve();
  return Se(), $t(), ht(), (function() {
    if (t.prime) {
      Wt.exports = t.prime;
      return;
    }
    var e = Wt.exports = t.prime = t.prime || {}, a = t.jsbn.BigInteger, p = [6, 4, 2, 4, 2, 4, 6, 2], I = new a(null);
    I.fromInt(30);
    var S = function(E, u) {
      return E | u;
    };
    e.generateProbablePrime = function(E, u, y) {
      typeof u == "function" && (y = u, u = {}), u = u || {};
      var C = u.algorithm || "PRIMEINC";
      typeof C == "string" && (C = { name: C }), C.options = C.options || {};
      var m = u.prng || t.random, s = {
        // x is an array to fill with bytes
        nextBytes: function(h) {
          for (var v = m.getBytesSync(h.length), B = 0; B < h.length; ++B)
            h[B] = v.charCodeAt(B);
        }
      };
      if (C.name === "PRIMEINC")
        return f(E, s, C.options, y);
      throw new Error("Invalid prime generation algorithm: " + C.name);
    };
    function f(E, u, y, C) {
      return "workers" in y ? l(E, u, y, C) : r(E, u, y, C);
    }
    function r(E, u, y, C) {
      var m = b(E, u), s = 0, h = U(m.bitLength());
      "millerRabinTests" in y && (h = y.millerRabinTests);
      var v = 10;
      "maxBlockTime" in y && (v = y.maxBlockTime), g(m, E, u, s, h, v, C);
    }
    function g(E, u, y, C, m, s, h) {
      var v = +/* @__PURE__ */ new Date();
      do {
        if (E.bitLength() > u && (E = b(u, y)), E.isProbablePrime(m))
          return h(null, E);
        E.dAddOffset(p[C++ % 8], 0);
      } while (s < 0 || +/* @__PURE__ */ new Date() - v < s);
      t.util.setImmediate(function() {
        g(E, u, y, C, m, s, h);
      });
    }
    function l(E, u, y, C) {
      if (typeof Worker > "u")
        return r(E, u, y, C);
      var m = b(E, u), s = y.workers, h = y.workLoad || 100, v = h * 30 / 8, B = y.workerScript || "forge/prime.worker.js";
      if (s === -1)
        return t.util.estimateCores(function(c, i) {
          c && (i = 2), s = i - 1, R();
        });
      R();
      function R() {
        s = Math.max(1, s);
        for (var c = [], i = 0; i < s; ++i)
          c[i] = new Worker(B);
        for (var i = 0; i < s; ++i)
          c[i].addEventListener("message", T);
        var n = !1;
        function T(V) {
          if (!n) {
            var O = V.data;
            if (O.found) {
              for (var D = 0; D < c.length; ++D)
                c[D].terminate();
              return n = !0, C(null, new a(O.prime, 16));
            }
            m.bitLength() > E && (m = b(E, u));
            var M = m.toString(16);
            V.target.postMessage({
              hex: M,
              workLoad: h
            }), m.dAddOffset(v, 0);
          }
        }
      }
    }
    function b(E, u) {
      var y = new a(E, u), C = E - 1;
      return y.testBit(C) || y.bitwiseTo(a.ONE.shiftLeft(C), S, y), y.dAddOffset(31 - y.mod(I).byteValue(), 0), y;
    }
    function U(E) {
      return E <= 100 ? 27 : E <= 150 ? 18 : E <= 200 ? 15 : E <= 250 ? 12 : E <= 300 ? 9 : E <= 350 ? 8 : E <= 400 ? 7 : E <= 500 ? 6 : E <= 600 ? 5 : E <= 800 ? 4 : E <= 1250 ? 3 : 2;
    }
  })(), Wt.exports;
}
var Br, Ba;
function er() {
  if (Ba) return Br;
  Ba = 1;
  var t = ve();
  if (yt(), $t(), wt(), an(), nn(), ht(), Se(), typeof e > "u")
    var e = t.jsbn.BigInteger;
  var a = t.util.isNodejs ? Hr : null, p = t.asn1, I = t.util;
  t.pki = t.pki || {}, Br = t.pki.rsa = t.rsa = t.rsa || {};
  var S = t.pki, f = [6, 4, 2, 4, 2, 4, 6, 2], r = {
    // PrivateKeyInfo
    name: "PrivateKeyInfo",
    tagClass: p.Class.UNIVERSAL,
    type: p.Type.SEQUENCE,
    constructed: !0,
    value: [{
      // Version (INTEGER)
      name: "PrivateKeyInfo.version",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyVersion"
    }, {
      // privateKeyAlgorithm
      name: "PrivateKeyInfo.privateKeyAlgorithm",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: p.Class.UNIVERSAL,
        type: p.Type.OID,
        constructed: !1,
        capture: "privateKeyOid"
      }]
    }, {
      // PrivateKey
      name: "PrivateKeyInfo",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.OCTETSTRING,
      constructed: !1,
      capture: "privateKey"
    }]
  }, g = {
    // RSAPrivateKey
    name: "RSAPrivateKey",
    tagClass: p.Class.UNIVERSAL,
    type: p.Type.SEQUENCE,
    constructed: !0,
    value: [{
      // Version (INTEGER)
      name: "RSAPrivateKey.version",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyVersion"
    }, {
      // modulus (n)
      name: "RSAPrivateKey.modulus",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyModulus"
    }, {
      // publicExponent (e)
      name: "RSAPrivateKey.publicExponent",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyPublicExponent"
    }, {
      // privateExponent (d)
      name: "RSAPrivateKey.privateExponent",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyPrivateExponent"
    }, {
      // prime1 (p)
      name: "RSAPrivateKey.prime1",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyPrime1"
    }, {
      // prime2 (q)
      name: "RSAPrivateKey.prime2",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyPrime2"
    }, {
      // exponent1 (d mod (p-1))
      name: "RSAPrivateKey.exponent1",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyExponent1"
    }, {
      // exponent2 (d mod (q-1))
      name: "RSAPrivateKey.exponent2",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyExponent2"
    }, {
      // coefficient ((inverse of q) mod p)
      name: "RSAPrivateKey.coefficient",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyCoefficient"
    }]
  }, l = {
    // RSAPublicKey
    name: "RSAPublicKey",
    tagClass: p.Class.UNIVERSAL,
    type: p.Type.SEQUENCE,
    constructed: !0,
    value: [{
      // modulus (n)
      name: "RSAPublicKey.modulus",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "publicKeyModulus"
    }, {
      // publicExponent (e)
      name: "RSAPublicKey.exponent",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.INTEGER,
      constructed: !1,
      capture: "publicKeyExponent"
    }]
  }, b = t.pki.rsa.publicKeyValidator = {
    name: "SubjectPublicKeyInfo",
    tagClass: p.Class.UNIVERSAL,
    type: p.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "subjectPublicKeyInfo",
    value: [{
      name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: p.Class.UNIVERSAL,
        type: p.Type.OID,
        constructed: !1,
        capture: "publicKeyOid"
      }]
    }, {
      // subjectPublicKey
      name: "SubjectPublicKeyInfo.subjectPublicKey",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.BITSTRING,
      constructed: !1,
      value: [{
        // RSAPublicKey
        name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
        tagClass: p.Class.UNIVERSAL,
        type: p.Type.SEQUENCE,
        constructed: !0,
        optional: !0,
        captureAsn1: "rsaPublicKey"
      }]
    }]
  }, U = {
    name: "DigestInfo",
    tagClass: p.Class.UNIVERSAL,
    type: p.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "DigestInfo.DigestAlgorithm",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
        tagClass: p.Class.UNIVERSAL,
        type: p.Type.OID,
        constructed: !1,
        capture: "algorithmIdentifier"
      }, {
        // NULL paramters
        name: "DigestInfo.DigestAlgorithm.parameters",
        tagClass: p.Class.UNIVERSAL,
        type: p.Type.NULL,
        // captured only to check existence for md2 and md5
        capture: "parameters",
        optional: !0,
        constructed: !1
      }]
    }, {
      // digest
      name: "DigestInfo.digest",
      tagClass: p.Class.UNIVERSAL,
      type: p.Type.OCTETSTRING,
      constructed: !1,
      capture: "digest"
    }]
  }, E = function(i) {
    var n;
    if (i.algorithm in S.oids)
      n = S.oids[i.algorithm];
    else {
      var T = new Error("Unknown message digest algorithm.");
      throw T.algorithm = i.algorithm, T;
    }
    var V = p.oidToDer(n).getBytes(), O = p.create(
      p.Class.UNIVERSAL,
      p.Type.SEQUENCE,
      !0,
      []
    ), D = p.create(
      p.Class.UNIVERSAL,
      p.Type.SEQUENCE,
      !0,
      []
    );
    D.value.push(p.create(
      p.Class.UNIVERSAL,
      p.Type.OID,
      !1,
      V
    )), D.value.push(p.create(
      p.Class.UNIVERSAL,
      p.Type.NULL,
      !1,
      ""
    ));
    var M = p.create(
      p.Class.UNIVERSAL,
      p.Type.OCTETSTRING,
      !1,
      i.digest().getBytes()
    );
    return O.value.push(D), O.value.push(M), p.toDer(O).getBytes();
  }, u = function(i, n, T) {
    if (T)
      return i.modPow(n.e, n.n);
    if (!n.p || !n.q)
      return i.modPow(n.d, n.n);
    n.dP || (n.dP = n.d.mod(n.p.subtract(e.ONE))), n.dQ || (n.dQ = n.d.mod(n.q.subtract(e.ONE))), n.qInv || (n.qInv = n.q.modInverse(n.p));
    var V;
    do
      V = new e(
        t.util.bytesToHex(t.random.getBytes(n.n.bitLength() / 8)),
        16
      );
    while (V.compareTo(n.n) >= 0 || !V.gcd(n.n).equals(e.ONE));
    i = i.multiply(V.modPow(n.e, n.n)).mod(n.n);
    for (var O = i.mod(n.p).modPow(n.dP, n.p), D = i.mod(n.q).modPow(n.dQ, n.q); O.compareTo(D) < 0; )
      O = O.add(n.p);
    var M = O.subtract(D).multiply(n.qInv).mod(n.p).multiply(n.q).add(D);
    return M = M.multiply(V.modInverse(n.n)).mod(n.n), M;
  };
  S.rsa.encrypt = function(i, n, T) {
    var V = T, O, D = Math.ceil(n.n.bitLength() / 8);
    T !== !1 && T !== !0 ? (V = T === 2, O = y(i, n, T)) : (O = t.util.createBuffer(), O.putBytes(i));
    for (var M = new e(O.toHex(), 16), x = u(M, n, V), G = x.toString(16), z = t.util.createBuffer(), Y = D - Math.ceil(G.length / 2); Y > 0; )
      z.putByte(0), --Y;
    return z.putBytes(t.util.hexToBytes(G)), z.getBytes();
  }, S.rsa.decrypt = function(i, n, T, V) {
    var O = Math.ceil(n.n.bitLength() / 8);
    if (i.length !== O) {
      var D = new Error("Encrypted message length is invalid.");
      throw D.length = i.length, D.expected = O, D;
    }
    var M = new e(t.util.createBuffer(i).toHex(), 16);
    if (M.compareTo(n.n) >= 0)
      throw new Error("Encrypted message is invalid.");
    for (var x = u(M, n, T), G = x.toString(16), z = t.util.createBuffer(), Y = O - Math.ceil(G.length / 2); Y > 0; )
      z.putByte(0), --Y;
    return z.putBytes(t.util.hexToBytes(G)), V !== !1 ? C(z.getBytes(), n, T) : z.getBytes();
  }, S.rsa.createKeyPairGenerationState = function(i, n, T) {
    typeof i == "string" && (i = parseInt(i, 10)), i = i || 2048, T = T || {};
    var V = T.prng || t.random, O = {
      // x is an array to fill with bytes
      nextBytes: function(x) {
        for (var G = V.getBytesSync(x.length), z = 0; z < x.length; ++z)
          x[z] = G.charCodeAt(z);
      }
    }, D = T.algorithm || "PRIMEINC", M;
    if (D === "PRIMEINC")
      M = {
        algorithm: D,
        state: 0,
        bits: i,
        rng: O,
        eInt: n || 65537,
        e: new e(null),
        p: null,
        q: null,
        qBits: i >> 1,
        pBits: i - (i >> 1),
        pqState: 0,
        num: null,
        keys: null
      }, M.e.fromInt(M.eInt);
    else
      throw new Error("Invalid key generation algorithm: " + D);
    return M;
  }, S.rsa.stepKeyPairGenerationState = function(i, n) {
    "algorithm" in i || (i.algorithm = "PRIMEINC");
    var T = new e(null);
    T.fromInt(30);
    for (var V = 0, O = function(Z, te) {
      return Z | te;
    }, D = +/* @__PURE__ */ new Date(), M, x = 0; i.keys === null && (n <= 0 || x < n); ) {
      if (i.state === 0) {
        var G = i.p === null ? i.pBits : i.qBits, z = G - 1;
        i.pqState === 0 ? (i.num = new e(G, i.rng), i.num.testBit(z) || i.num.bitwiseTo(
          e.ONE.shiftLeft(z),
          O,
          i.num
        ), i.num.dAddOffset(31 - i.num.mod(T).byteValue(), 0), V = 0, ++i.pqState) : i.pqState === 1 ? i.num.bitLength() > G ? i.pqState = 0 : i.num.isProbablePrime(
          h(i.num.bitLength())
        ) ? ++i.pqState : i.num.dAddOffset(f[V++ % 8], 0) : i.pqState === 2 ? i.pqState = i.num.subtract(e.ONE).gcd(i.e).compareTo(e.ONE) === 0 ? 3 : 0 : i.pqState === 3 && (i.pqState = 0, i.p === null ? i.p = i.num : i.q = i.num, i.p !== null && i.q !== null && ++i.state, i.num = null);
      } else if (i.state === 1)
        i.p.compareTo(i.q) < 0 && (i.num = i.p, i.p = i.q, i.q = i.num), ++i.state;
      else if (i.state === 2)
        i.p1 = i.p.subtract(e.ONE), i.q1 = i.q.subtract(e.ONE), i.phi = i.p1.multiply(i.q1), ++i.state;
      else if (i.state === 3)
        i.phi.gcd(i.e).compareTo(e.ONE) === 0 ? ++i.state : (i.p = null, i.q = null, i.state = 0);
      else if (i.state === 4)
        i.n = i.p.multiply(i.q), i.n.bitLength() === i.bits ? ++i.state : (i.q = null, i.state = 0);
      else if (i.state === 5) {
        var Y = i.e.modInverse(i.phi);
        i.keys = {
          privateKey: S.rsa.setPrivateKey(
            i.n,
            i.e,
            Y,
            i.p,
            i.q,
            Y.mod(i.p1),
            Y.mod(i.q1),
            i.q.modInverse(i.p)
          ),
          publicKey: S.rsa.setPublicKey(i.n, i.e)
        };
      }
      M = +/* @__PURE__ */ new Date(), x += M - D, D = M;
    }
    return i.keys !== null;
  }, S.rsa.generateKeyPair = function(i, n, T, V) {
    if (arguments.length === 1 ? typeof i == "object" ? (T = i, i = void 0) : typeof i == "function" && (V = i, i = void 0) : arguments.length === 2 ? typeof i == "number" ? typeof n == "function" ? (V = n, n = void 0) : typeof n != "number" && (T = n, n = void 0) : (T = i, V = n, i = void 0, n = void 0) : arguments.length === 3 && (typeof n == "number" ? typeof T == "function" && (V = T, T = void 0) : (V = T, T = n, n = void 0)), T = T || {}, i === void 0 && (i = T.bits || 2048), n === void 0 && (n = T.e || 65537), !t.options.usePureJavaScript && !T.prng && i >= 256 && i <= 16384 && (n === 65537 || n === 3)) {
      if (V) {
        if (v("generateKeyPair"))
          return a.generateKeyPair("rsa", {
            modulusLength: i,
            publicExponent: n,
            publicKeyEncoding: {
              type: "spki",
              format: "pem"
            },
            privateKeyEncoding: {
              type: "pkcs8",
              format: "pem"
            }
          }, function(x, G, z) {
            if (x)
              return V(x);
            V(null, {
              privateKey: S.privateKeyFromPem(z),
              publicKey: S.publicKeyFromPem(G)
            });
          });
        if (B("generateKey") && B("exportKey"))
          return I.globalScope.crypto.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: i,
            publicExponent: c(n),
            hash: { name: "SHA-256" }
          }, !0, ["sign", "verify"]).then(function(x) {
            return I.globalScope.crypto.subtle.exportKey(
              "pkcs8",
              x.privateKey
            );
          }).then(void 0, function(x) {
            V(x);
          }).then(function(x) {
            if (x) {
              var G = S.privateKeyFromAsn1(
                p.fromDer(t.util.createBuffer(x))
              );
              V(null, {
                privateKey: G,
                publicKey: S.setRsaPublicKey(G.n, G.e)
              });
            }
          });
        if (R("generateKey") && R("exportKey")) {
          var O = I.globalScope.msCrypto.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: i,
            publicExponent: c(n),
            hash: { name: "SHA-256" }
          }, !0, ["sign", "verify"]);
          O.oncomplete = function(x) {
            var G = x.target.result, z = I.globalScope.msCrypto.subtle.exportKey(
              "pkcs8",
              G.privateKey
            );
            z.oncomplete = function(Y) {
              var Z = Y.target.result, te = S.privateKeyFromAsn1(
                p.fromDer(t.util.createBuffer(Z))
              );
              V(null, {
                privateKey: te,
                publicKey: S.setRsaPublicKey(te.n, te.e)
              });
            }, z.onerror = function(Y) {
              V(Y);
            };
          }, O.onerror = function(x) {
            V(x);
          };
          return;
        }
      } else if (v("generateKeyPairSync")) {
        var D = a.generateKeyPairSync("rsa", {
          modulusLength: i,
          publicExponent: n,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        });
        return {
          privateKey: S.privateKeyFromPem(D.privateKey),
          publicKey: S.publicKeyFromPem(D.publicKey)
        };
      }
    }
    var M = S.rsa.createKeyPairGenerationState(i, n, T);
    if (!V)
      return S.rsa.stepKeyPairGenerationState(M, 0), M.keys;
    m(M, T, V);
  }, S.setRsaPublicKey = S.rsa.setPublicKey = function(i, n) {
    var T = {
      n: i,
      e: n
    };
    return T.encrypt = function(V, O, D) {
      if (typeof O == "string" ? O = O.toUpperCase() : O === void 0 && (O = "RSAES-PKCS1-V1_5"), O === "RSAES-PKCS1-V1_5")
        O = {
          encode: function(x, G, z) {
            return y(x, G, 2).getBytes();
          }
        };
      else if (O === "RSA-OAEP" || O === "RSAES-OAEP")
        O = {
          encode: function(x, G) {
            return t.pkcs1.encode_rsa_oaep(G, x, D);
          }
        };
      else if (["RAW", "NONE", "NULL", null].indexOf(O) !== -1)
        O = { encode: function(x) {
          return x;
        } };
      else if (typeof O == "string")
        throw new Error('Unsupported encryption scheme: "' + O + '".');
      var M = O.encode(V, T, !0);
      return S.rsa.encrypt(M, T, !0);
    }, T.verify = function(V, O, D, M) {
      typeof D == "string" ? D = D.toUpperCase() : D === void 0 && (D = "RSASSA-PKCS1-V1_5"), M === void 0 && (M = {
        _parseAllDigestBytes: !0
      }), "_parseAllDigestBytes" in M || (M._parseAllDigestBytes = !0), D === "RSASSA-PKCS1-V1_5" ? D = {
        verify: function(G, z) {
          z = C(z, T, !0);
          var Y = p.fromDer(z, {
            parseAllBytes: M._parseAllDigestBytes
          }), Z = {}, te = [];
          if (!p.validate(Y, U, Z, te)) {
            var ue = new Error(
              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value."
            );
            throw ue.errors = te, ue;
          }
          var he = p.derToOid(Z.algorithmIdentifier);
          if (!(he === t.oids.md2 || he === t.oids.md5 || he === t.oids.sha1 || he === t.oids.sha224 || he === t.oids.sha256 || he === t.oids.sha384 || he === t.oids.sha512 || he === t.oids["sha512-224"] || he === t.oids["sha512-256"])) {
            var ue = new Error(
              "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier."
            );
            throw ue.oid = he, ue;
          }
          if ((he === t.oids.md2 || he === t.oids.md5) && !("parameters" in Z))
            throw new Error(
              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters."
            );
          return G === Z.digest;
        }
      } : (D === "NONE" || D === "NULL" || D === null) && (D = {
        verify: function(G, z) {
          return z = C(z, T, !0), G === z;
        }
      });
      var x = S.rsa.decrypt(O, T, !0, !1);
      return D.verify(V, x, T.n.bitLength());
    }, T;
  }, S.setRsaPrivateKey = S.rsa.setPrivateKey = function(i, n, T, V, O, D, M, x) {
    var G = {
      n: i,
      e: n,
      d: T,
      p: V,
      q: O,
      dP: D,
      dQ: M,
      qInv: x
    };
    return G.decrypt = function(z, Y, Z) {
      typeof Y == "string" ? Y = Y.toUpperCase() : Y === void 0 && (Y = "RSAES-PKCS1-V1_5");
      var te = S.rsa.decrypt(z, G, !1, !1);
      if (Y === "RSAES-PKCS1-V1_5")
        Y = { decode: C };
      else if (Y === "RSA-OAEP" || Y === "RSAES-OAEP")
        Y = {
          decode: function(ue, he) {
            return t.pkcs1.decode_rsa_oaep(he, ue, Z);
          }
        };
      else if (["RAW", "NONE", "NULL", null].indexOf(Y) !== -1)
        Y = { decode: function(ue) {
          return ue;
        } };
      else
        throw new Error('Unsupported encryption scheme: "' + Y + '".');
      return Y.decode(te, G, !1);
    }, G.sign = function(z, Y) {
      var Z = !1;
      typeof Y == "string" && (Y = Y.toUpperCase()), Y === void 0 || Y === "RSASSA-PKCS1-V1_5" ? (Y = { encode: E }, Z = 1) : (Y === "NONE" || Y === "NULL" || Y === null) && (Y = { encode: function() {
        return z;
      } }, Z = 1);
      var te = Y.encode(z, G.n.bitLength());
      return S.rsa.encrypt(te, G, Z);
    }, G;
  }, S.wrapRsaPrivateKey = function(i) {
    return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
      // version (0)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        p.integerToDer(0).getBytes()
      ),
      // privateKeyAlgorithm
      p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
        p.create(
          p.Class.UNIVERSAL,
          p.Type.OID,
          !1,
          p.oidToDer(S.oids.rsaEncryption).getBytes()
        ),
        p.create(p.Class.UNIVERSAL, p.Type.NULL, !1, "")
      ]),
      // PrivateKey
      p.create(
        p.Class.UNIVERSAL,
        p.Type.OCTETSTRING,
        !1,
        p.toDer(i).getBytes()
      )
    ]);
  }, S.privateKeyFromAsn1 = function(i) {
    var n = {}, T = [];
    if (p.validate(i, r, n, T) && (i = p.fromDer(t.util.createBuffer(n.privateKey))), n = {}, T = [], !p.validate(i, g, n, T)) {
      var V = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
      throw V.errors = T, V;
    }
    var O, D, M, x, G, z, Y, Z;
    return O = t.util.createBuffer(n.privateKeyModulus).toHex(), D = t.util.createBuffer(n.privateKeyPublicExponent).toHex(), M = t.util.createBuffer(n.privateKeyPrivateExponent).toHex(), x = t.util.createBuffer(n.privateKeyPrime1).toHex(), G = t.util.createBuffer(n.privateKeyPrime2).toHex(), z = t.util.createBuffer(n.privateKeyExponent1).toHex(), Y = t.util.createBuffer(n.privateKeyExponent2).toHex(), Z = t.util.createBuffer(n.privateKeyCoefficient).toHex(), S.setRsaPrivateKey(
      new e(O, 16),
      new e(D, 16),
      new e(M, 16),
      new e(x, 16),
      new e(G, 16),
      new e(z, 16),
      new e(Y, 16),
      new e(Z, 16)
    );
  }, S.privateKeyToAsn1 = S.privateKeyToRSAPrivateKey = function(i) {
    return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
      // version (0 = only 2 primes, 1 multiple primes)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        p.integerToDer(0).getBytes()
      ),
      // modulus (n)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.n)
      ),
      // publicExponent (e)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.e)
      ),
      // privateExponent (d)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.d)
      ),
      // privateKeyPrime1 (p)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.p)
      ),
      // privateKeyPrime2 (q)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.q)
      ),
      // privateKeyExponent1 (dP)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.dP)
      ),
      // privateKeyExponent2 (dQ)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.dQ)
      ),
      // coefficient (qInv)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.qInv)
      )
    ]);
  }, S.publicKeyFromAsn1 = function(i) {
    var n = {}, T = [];
    if (p.validate(i, b, n, T)) {
      var V = p.derToOid(n.publicKeyOid);
      if (V !== S.oids.rsaEncryption) {
        var O = new Error("Cannot read public key. Unknown OID.");
        throw O.oid = V, O;
      }
      i = n.rsaPublicKey;
    }
    if (T = [], !p.validate(i, l, n, T)) {
      var O = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
      throw O.errors = T, O;
    }
    var D = t.util.createBuffer(n.publicKeyModulus).toHex(), M = t.util.createBuffer(n.publicKeyExponent).toHex();
    return S.setRsaPublicKey(
      new e(D, 16),
      new e(M, 16)
    );
  }, S.publicKeyToAsn1 = S.publicKeyToSubjectPublicKeyInfo = function(i) {
    return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
      // AlgorithmIdentifier
      p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
        // algorithm
        p.create(
          p.Class.UNIVERSAL,
          p.Type.OID,
          !1,
          p.oidToDer(S.oids.rsaEncryption).getBytes()
        ),
        // parameters (null)
        p.create(p.Class.UNIVERSAL, p.Type.NULL, !1, "")
      ]),
      // subjectPublicKey
      p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, [
        S.publicKeyToRSAPublicKey(i)
      ])
    ]);
  }, S.publicKeyToRSAPublicKey = function(i) {
    return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [
      // modulus (n)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.n)
      ),
      // publicExponent (e)
      p.create(
        p.Class.UNIVERSAL,
        p.Type.INTEGER,
        !1,
        s(i.e)
      )
    ]);
  };
  function y(i, n, T) {
    var V = t.util.createBuffer(), O = Math.ceil(n.n.bitLength() / 8);
    if (i.length > O - 11) {
      var D = new Error("Message is too long for PKCS#1 v1.5 padding.");
      throw D.length = i.length, D.max = O - 11, D;
    }
    V.putByte(0), V.putByte(T);
    var M = O - 3 - i.length, x;
    if (T === 0 || T === 1) {
      x = T === 0 ? 0 : 255;
      for (var G = 0; G < M; ++G)
        V.putByte(x);
    } else
      for (; M > 0; ) {
        for (var z = 0, Y = t.random.getBytes(M), G = 0; G < M; ++G)
          x = Y.charCodeAt(G), x === 0 ? ++z : V.putByte(x);
        M = z;
      }
    return V.putByte(0), V.putBytes(i), V;
  }
  function C(i, n, T, V) {
    var O = Math.ceil(n.n.bitLength() / 8), D = t.util.createBuffer(i), M = D.getByte(), x = D.getByte();
    if (M !== 0 || T && x !== 0 && x !== 1 || !T && x != 2 || T && x === 0 && typeof V > "u")
      throw new Error("Encryption block is invalid.");
    var G = 0;
    if (x === 0) {
      G = O - 3 - V;
      for (var z = 0; z < G; ++z)
        if (D.getByte() !== 0)
          throw new Error("Encryption block is invalid.");
    } else if (x === 1)
      for (G = 0; D.length() > 1; ) {
        if (D.getByte() !== 255) {
          --D.read;
          break;
        }
        ++G;
      }
    else if (x === 2)
      for (G = 0; D.length() > 1; ) {
        if (D.getByte() === 0) {
          --D.read;
          break;
        }
        ++G;
      }
    var Y = D.getByte();
    if (Y !== 0 || G !== O - 3 - D.length())
      throw new Error("Encryption block is invalid.");
    return D.getBytes();
  }
  function m(i, n, T) {
    typeof n == "function" && (T = n, n = {}), n = n || {};
    var V = {
      algorithm: {
        name: n.algorithm || "PRIMEINC",
        options: {
          workers: n.workers || 2,
          workLoad: n.workLoad || 100,
          workerScript: n.workerScript
        }
      }
    };
    "prng" in n && (V.prng = n.prng), O();
    function O() {
      D(i.pBits, function(x, G) {
        if (x)
          return T(x);
        if (i.p = G, i.q !== null)
          return M(x, i.q);
        D(i.qBits, M);
      });
    }
    function D(x, G) {
      t.prime.generateProbablePrime(x, V, G);
    }
    function M(x, G) {
      if (x)
        return T(x);
      if (i.q = G, i.p.compareTo(i.q) < 0) {
        var z = i.p;
        i.p = i.q, i.q = z;
      }
      if (i.p.subtract(e.ONE).gcd(i.e).compareTo(e.ONE) !== 0) {
        i.p = null, O();
        return;
      }
      if (i.q.subtract(e.ONE).gcd(i.e).compareTo(e.ONE) !== 0) {
        i.q = null, D(i.qBits, M);
        return;
      }
      if (i.p1 = i.p.subtract(e.ONE), i.q1 = i.q.subtract(e.ONE), i.phi = i.p1.multiply(i.q1), i.phi.gcd(i.e).compareTo(e.ONE) !== 0) {
        i.p = i.q = null, O();
        return;
      }
      if (i.n = i.p.multiply(i.q), i.n.bitLength() !== i.bits) {
        i.q = null, D(i.qBits, M);
        return;
      }
      var Y = i.e.modInverse(i.phi);
      i.keys = {
        privateKey: S.rsa.setPrivateKey(
          i.n,
          i.e,
          Y,
          i.p,
          i.q,
          Y.mod(i.p1),
          Y.mod(i.q1),
          i.q.modInverse(i.p)
        ),
        publicKey: S.rsa.setPublicKey(i.n, i.e)
      }, T(null, i.keys);
    }
  }
  function s(i) {
    var n = i.toString(16);
    n[0] >= "8" && (n = "00" + n);
    var T = t.util.hexToBytes(n);
    return T.length > 1 && // leading 0x00 for positive integer
    (T.charCodeAt(0) === 0 && (T.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
    T.charCodeAt(0) === 255 && (T.charCodeAt(1) & 128) === 128) ? T.substr(1) : T;
  }
  function h(i) {
    return i <= 100 ? 27 : i <= 150 ? 18 : i <= 200 ? 15 : i <= 250 ? 12 : i <= 300 ? 9 : i <= 350 ? 8 : i <= 400 ? 7 : i <= 500 ? 6 : i <= 600 ? 5 : i <= 800 ? 4 : i <= 1250 ? 3 : 2;
  }
  function v(i) {
    return t.util.isNodejs && typeof a[i] == "function";
  }
  function B(i) {
    return typeof I.globalScope < "u" && typeof I.globalScope.crypto == "object" && typeof I.globalScope.crypto.subtle == "object" && typeof I.globalScope.crypto.subtle[i] == "function";
  }
  function R(i) {
    return typeof I.globalScope < "u" && typeof I.globalScope.msCrypto == "object" && typeof I.globalScope.msCrypto.subtle == "object" && typeof I.globalScope.msCrypto.subtle[i] == "function";
  }
  function c(i) {
    for (var n = t.util.hexToBytes(i.toString(16)), T = new Uint8Array(n.length), V = 0; V < n.length; ++V)
      T[V] = n.charCodeAt(V);
    return T;
  }
  return Br;
}
var Tr, Ta;
function sn() {
  if (Ta) return Tr;
  Ta = 1;
  var t = ve();
  if (Nt(), yt(), _t(), St(), wt(), Yr(), Ot(), ht(), rn(), er(), Se(), typeof e > "u")
    var e = t.jsbn.BigInteger;
  var a = t.asn1, p = t.pki = t.pki || {};
  Tr = p.pbe = t.pbe = t.pbe || {};
  var I = p.oids, S = {
    name: "EncryptedPrivateKeyInfo",
    tagClass: a.Class.UNIVERSAL,
    type: a.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.OID,
        constructed: !1,
        capture: "encryptionOid"
      }, {
        name: "AlgorithmIdentifier.parameters",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "encryptionParams"
      }]
    }, {
      // encryptedData
      name: "EncryptedPrivateKeyInfo.encryptedData",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.OCTETSTRING,
      constructed: !1,
      capture: "encryptedData"
    }]
  }, f = {
    name: "PBES2Algorithms",
    tagClass: a.Class.UNIVERSAL,
    type: a.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "PBES2Algorithms.keyDerivationFunc",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "PBES2Algorithms.keyDerivationFunc.oid",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.OID,
        constructed: !1,
        capture: "kdfOid"
      }, {
        name: "PBES2Algorithms.params",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "PBES2Algorithms.params.salt",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.OCTETSTRING,
          constructed: !1,
          capture: "kdfSalt"
        }, {
          name: "PBES2Algorithms.params.iterationCount",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.INTEGER,
          constructed: !1,
          capture: "kdfIterationCount"
        }, {
          name: "PBES2Algorithms.params.keyLength",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.INTEGER,
          constructed: !1,
          optional: !0,
          capture: "keyLength"
        }, {
          // prf
          name: "PBES2Algorithms.params.prf",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          optional: !0,
          value: [{
            name: "PBES2Algorithms.params.prf.algorithm",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.OID,
            constructed: !1,
            capture: "prfOid"
          }]
        }]
      }]
    }, {
      name: "PBES2Algorithms.encryptionScheme",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "PBES2Algorithms.encryptionScheme.oid",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.OID,
        constructed: !1,
        capture: "encOid"
      }, {
        name: "PBES2Algorithms.encryptionScheme.iv",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.OCTETSTRING,
        constructed: !1,
        capture: "encIv"
      }]
    }]
  }, r = {
    name: "pkcs-12PbeParams",
    tagClass: a.Class.UNIVERSAL,
    type: a.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "pkcs-12PbeParams.salt",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.OCTETSTRING,
      constructed: !1,
      capture: "salt"
    }, {
      name: "pkcs-12PbeParams.iterations",
      tagClass: a.Class.UNIVERSAL,
      type: a.Type.INTEGER,
      constructed: !1,
      capture: "iterations"
    }]
  };
  p.encryptPrivateKeyInfo = function(E, u, y) {
    y = y || {}, y.saltSize = y.saltSize || 8, y.count = y.count || 2048, y.algorithm = y.algorithm || "aes128", y.prfAlgorithm = y.prfAlgorithm || "sha1";
    var C = t.random.getBytesSync(y.saltSize), m = y.count, s = a.integerToDer(m), h, v, B;
    if (y.algorithm.indexOf("aes") === 0 || y.algorithm === "des") {
      var R, c, i;
      switch (y.algorithm) {
        case "aes128":
          h = 16, R = 16, c = I["aes128-CBC"], i = t.aes.createEncryptionCipher;
          break;
        case "aes192":
          h = 24, R = 16, c = I["aes192-CBC"], i = t.aes.createEncryptionCipher;
          break;
        case "aes256":
          h = 32, R = 16, c = I["aes256-CBC"], i = t.aes.createEncryptionCipher;
          break;
        case "des":
          h = 8, R = 8, c = I.desCBC, i = t.des.createEncryptionCipher;
          break;
        default:
          var n = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
          throw n.algorithm = y.algorithm, n;
      }
      var T = "hmacWith" + y.prfAlgorithm.toUpperCase(), V = b(T), O = t.pkcs5.pbkdf2(u, C, m, h, V), D = t.random.getBytesSync(R), M = i(O);
      M.start(D), M.update(a.toDer(E)), M.finish(), B = M.output.getBytes();
      var x = U(C, s, h, T);
      v = a.create(
        a.Class.UNIVERSAL,
        a.Type.SEQUENCE,
        !0,
        [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.OID,
            !1,
            a.oidToDer(I.pkcs5PBES2).getBytes()
          ),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            // keyDerivationFunc
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(I.pkcs5PBKDF2).getBytes()
              ),
              // PBKDF2-params
              x
            ]),
            // encryptionScheme
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(c).getBytes()
              ),
              // iv
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OCTETSTRING,
                !1,
                D
              )
            ])
          ])
        ]
      );
    } else if (y.algorithm === "3des") {
      h = 24;
      var G = new t.util.ByteBuffer(C), O = p.pbe.generatePkcs12Key(u, G, 1, m, h), D = p.pbe.generatePkcs12Key(u, G, 2, m, h), M = t.des.createEncryptionCipher(O);
      M.start(D), M.update(a.toDer(E)), M.finish(), B = M.output.getBytes(), v = a.create(
        a.Class.UNIVERSAL,
        a.Type.SEQUENCE,
        !0,
        [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.OID,
            !1,
            a.oidToDer(I["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()
          ),
          // pkcs-12PbeParams
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            // salt
            a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, C),
            // iteration count
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              s.getBytes()
            )
          ])
        ]
      );
    } else {
      var n = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
      throw n.algorithm = y.algorithm, n;
    }
    var z = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
      // encryptionAlgorithm
      v,
      // encryptedData
      a.create(
        a.Class.UNIVERSAL,
        a.Type.OCTETSTRING,
        !1,
        B
      )
    ]);
    return z;
  }, p.decryptPrivateKeyInfo = function(E, u) {
    var y = null, C = {}, m = [];
    if (!a.validate(E, S, C, m)) {
      var s = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw s.errors = m, s;
    }
    var h = a.derToOid(C.encryptionOid), v = p.pbe.getCipher(h, C.encryptionParams, u), B = t.util.createBuffer(C.encryptedData);
    return v.update(B), v.finish() && (y = a.fromDer(v.output)), y;
  }, p.encryptedPrivateKeyToPem = function(E, u) {
    var y = {
      type: "ENCRYPTED PRIVATE KEY",
      body: a.toDer(E).getBytes()
    };
    return t.pem.encode(y, { maxline: u });
  }, p.encryptedPrivateKeyFromPem = function(E) {
    var u = t.pem.decode(E)[0];
    if (u.type !== "ENCRYPTED PRIVATE KEY") {
      var y = new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
      throw y.headerType = u.type, y;
    }
    if (u.procType && u.procType.type === "ENCRYPTED")
      throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
    return a.fromDer(u.body);
  }, p.encryptRsaPrivateKey = function(E, u, y) {
    if (y = y || {}, !y.legacy) {
      var C = p.wrapRsaPrivateKey(p.privateKeyToAsn1(E));
      return C = p.encryptPrivateKeyInfo(C, u, y), p.encryptedPrivateKeyToPem(C);
    }
    var m, s, h, v;
    switch (y.algorithm) {
      case "aes128":
        m = "AES-128-CBC", h = 16, s = t.random.getBytesSync(16), v = t.aes.createEncryptionCipher;
        break;
      case "aes192":
        m = "AES-192-CBC", h = 24, s = t.random.getBytesSync(16), v = t.aes.createEncryptionCipher;
        break;
      case "aes256":
        m = "AES-256-CBC", h = 32, s = t.random.getBytesSync(16), v = t.aes.createEncryptionCipher;
        break;
      case "3des":
        m = "DES-EDE3-CBC", h = 24, s = t.random.getBytesSync(8), v = t.des.createEncryptionCipher;
        break;
      case "des":
        m = "DES-CBC", h = 8, s = t.random.getBytesSync(8), v = t.des.createEncryptionCipher;
        break;
      default:
        var B = new Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + y.algorithm + '".');
        throw B.algorithm = y.algorithm, B;
    }
    var R = t.pbe.opensslDeriveBytes(u, s.substr(0, 8), h), c = v(R);
    c.start(s), c.update(a.toDer(p.privateKeyToAsn1(E))), c.finish();
    var i = {
      type: "RSA PRIVATE KEY",
      procType: {
        version: "4",
        type: "ENCRYPTED"
      },
      dekInfo: {
        algorithm: m,
        parameters: t.util.bytesToHex(s).toUpperCase()
      },
      body: c.output.getBytes()
    };
    return t.pem.encode(i);
  }, p.decryptRsaPrivateKey = function(E, u) {
    var y = null, C = t.pem.decode(E)[0];
    if (C.type !== "ENCRYPTED PRIVATE KEY" && C.type !== "PRIVATE KEY" && C.type !== "RSA PRIVATE KEY") {
      var m = new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
      throw m.headerType = m, m;
    }
    if (C.procType && C.procType.type === "ENCRYPTED") {
      var s, h;
      switch (C.dekInfo.algorithm) {
        case "DES-CBC":
          s = 8, h = t.des.createDecryptionCipher;
          break;
        case "DES-EDE3-CBC":
          s = 24, h = t.des.createDecryptionCipher;
          break;
        case "AES-128-CBC":
          s = 16, h = t.aes.createDecryptionCipher;
          break;
        case "AES-192-CBC":
          s = 24, h = t.aes.createDecryptionCipher;
          break;
        case "AES-256-CBC":
          s = 32, h = t.aes.createDecryptionCipher;
          break;
        case "RC2-40-CBC":
          s = 5, h = function(i) {
            return t.rc2.createDecryptionCipher(i, 40);
          };
          break;
        case "RC2-64-CBC":
          s = 8, h = function(i) {
            return t.rc2.createDecryptionCipher(i, 64);
          };
          break;
        case "RC2-128-CBC":
          s = 16, h = function(i) {
            return t.rc2.createDecryptionCipher(i, 128);
          };
          break;
        default:
          var m = new Error('Could not decrypt private key; unsupported encryption algorithm "' + C.dekInfo.algorithm + '".');
          throw m.algorithm = C.dekInfo.algorithm, m;
      }
      var v = t.util.hexToBytes(C.dekInfo.parameters), B = t.pbe.opensslDeriveBytes(u, v.substr(0, 8), s), R = h(B);
      if (R.start(v), R.update(t.util.createBuffer(C.body)), R.finish())
        y = R.output.getBytes();
      else
        return y;
    } else
      y = C.body;
    return C.type === "ENCRYPTED PRIVATE KEY" ? y = p.decryptPrivateKeyInfo(a.fromDer(y), u) : y = a.fromDer(y), y !== null && (y = p.privateKeyFromAsn1(y)), y;
  }, p.pbe.generatePkcs12Key = function(E, u, y, C, m, s) {
    var h, v;
    if (typeof s > "u" || s === null) {
      if (!("sha1" in t.md))
        throw new Error('"sha1" hash algorithm unavailable.');
      s = t.md.sha1.create();
    }
    var B = s.digestLength, R = s.blockLength, c = new t.util.ByteBuffer(), i = new t.util.ByteBuffer();
    if (E != null) {
      for (v = 0; v < E.length; v++)
        i.putInt16(E.charCodeAt(v));
      i.putInt16(0);
    }
    var n = i.length(), T = u.length(), V = new t.util.ByteBuffer();
    V.fillWithByte(y, R);
    var O = R * Math.ceil(T / R), D = new t.util.ByteBuffer();
    for (v = 0; v < O; v++)
      D.putByte(u.at(v % T));
    var M = R * Math.ceil(n / R), x = new t.util.ByteBuffer();
    for (v = 0; v < M; v++)
      x.putByte(i.at(v % n));
    var G = D;
    G.putBuffer(x);
    for (var z = Math.ceil(m / B), Y = 1; Y <= z; Y++) {
      var Z = new t.util.ByteBuffer();
      Z.putBytes(V.bytes()), Z.putBytes(G.bytes());
      for (var te = 0; te < C; te++)
        s.start(), s.update(Z.getBytes()), Z = s.digest();
      var ue = new t.util.ByteBuffer();
      for (v = 0; v < R; v++)
        ue.putByte(Z.at(v % B));
      var he = Math.ceil(T / R) + Math.ceil(n / R), Ce = new t.util.ByteBuffer();
      for (h = 0; h < he; h++) {
        var Ie = new t.util.ByteBuffer(G.getBytes(R)), _ = 511;
        for (v = ue.length() - 1; v >= 0; v--)
          _ = _ >> 8, _ += ue.at(v) + Ie.at(v), Ie.setAt(v, _ & 255);
        Ce.putBuffer(Ie);
      }
      G = Ce, c.putBuffer(Z);
    }
    return c.truncate(c.length() - m), c;
  }, p.pbe.getCipher = function(E, u, y) {
    switch (E) {
      case p.oids.pkcs5PBES2:
        return p.pbe.getCipherForPBES2(E, u, y);
      case p.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
      case p.oids["pbewithSHAAnd40BitRC2-CBC"]:
        return p.pbe.getCipherForPKCS12PBE(E, u, y);
      default:
        var C = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
        throw C.oid = E, C.supportedOids = [
          "pkcs5PBES2",
          "pbeWithSHAAnd3-KeyTripleDES-CBC",
          "pbewithSHAAnd40BitRC2-CBC"
        ], C;
    }
  }, p.pbe.getCipherForPBES2 = function(E, u, y) {
    var C = {}, m = [];
    if (!a.validate(u, f, C, m)) {
      var s = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw s.errors = m, s;
    }
    if (E = a.derToOid(C.kdfOid), E !== p.oids.pkcs5PBKDF2) {
      var s = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
      throw s.oid = E, s.supportedOids = ["pkcs5PBKDF2"], s;
    }
    if (E = a.derToOid(C.encOid), E !== p.oids["aes128-CBC"] && E !== p.oids["aes192-CBC"] && E !== p.oids["aes256-CBC"] && E !== p.oids["des-EDE3-CBC"] && E !== p.oids.desCBC) {
      var s = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
      throw s.oid = E, s.supportedOids = [
        "aes128-CBC",
        "aes192-CBC",
        "aes256-CBC",
        "des-EDE3-CBC",
        "desCBC"
      ], s;
    }
    var h = C.kdfSalt, v = t.util.createBuffer(C.kdfIterationCount);
    v = v.getInt(v.length() << 3);
    var B, R;
    switch (p.oids[E]) {
      case "aes128-CBC":
        B = 16, R = t.aes.createDecryptionCipher;
        break;
      case "aes192-CBC":
        B = 24, R = t.aes.createDecryptionCipher;
        break;
      case "aes256-CBC":
        B = 32, R = t.aes.createDecryptionCipher;
        break;
      case "des-EDE3-CBC":
        B = 24, R = t.des.createDecryptionCipher;
        break;
      case "desCBC":
        B = 8, R = t.des.createDecryptionCipher;
        break;
    }
    var c = l(C.prfOid), i = t.pkcs5.pbkdf2(y, h, v, B, c), n = C.encIv, T = R(i);
    return T.start(n), T;
  }, p.pbe.getCipherForPKCS12PBE = function(E, u, y) {
    var C = {}, m = [];
    if (!a.validate(u, r, C, m)) {
      var s = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
      throw s.errors = m, s;
    }
    var h = t.util.createBuffer(C.salt), v = t.util.createBuffer(C.iterations);
    v = v.getInt(v.length() << 3);
    var B, R, c;
    switch (E) {
      case p.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        B = 24, R = 8, c = t.des.startDecrypting;
        break;
      case p.oids["pbewithSHAAnd40BitRC2-CBC"]:
        B = 5, R = 8, c = function(O, D) {
          var M = t.rc2.createDecryptionCipher(O, 40);
          return M.start(D, null), M;
        };
        break;
      default:
        var s = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
        throw s.oid = E, s;
    }
    var i = l(C.prfOid), n = p.pbe.generatePkcs12Key(y, h, 1, v, B, i);
    i.start();
    var T = p.pbe.generatePkcs12Key(y, h, 2, v, R, i);
    return c(n, T);
  }, p.pbe.opensslDeriveBytes = function(E, u, y, C) {
    if (typeof C > "u" || C === null) {
      if (!("md5" in t.md))
        throw new Error('"md5" hash algorithm unavailable.');
      C = t.md.md5.create();
    }
    u === null && (u = "");
    for (var m = [g(C, E + u)], s = 16, h = 1; s < y; ++h, s += 16)
      m.push(g(C, m[h - 1] + E + u));
    return m.join("").substr(0, y);
  };
  function g(E, u) {
    return E.start().update(u).digest().getBytes();
  }
  function l(E) {
    var u;
    if (!E)
      u = "hmacWithSHA1";
    else if (u = p.oids[a.derToOid(E)], !u) {
      var y = new Error("Unsupported PRF OID.");
      throw y.oid = E, y.supported = [
        "hmacWithSHA1",
        "hmacWithSHA224",
        "hmacWithSHA256",
        "hmacWithSHA384",
        "hmacWithSHA512"
      ], y;
    }
    return b(u);
  }
  function b(E) {
    var u = t.md;
    switch (E) {
      case "hmacWithSHA224":
        u = t.md.sha512;
      case "hmacWithSHA1":
      case "hmacWithSHA256":
      case "hmacWithSHA384":
      case "hmacWithSHA512":
        E = E.substr(8).toLowerCase();
        break;
      default:
        var y = new Error("Unsupported PRF algorithm.");
        throw y.algorithm = E, y.supported = [
          "hmacWithSHA1",
          "hmacWithSHA224",
          "hmacWithSHA256",
          "hmacWithSHA384",
          "hmacWithSHA512"
        ], y;
    }
    if (!u || !(E in u))
      throw new Error("Unknown hash algorithm: " + E);
    return u[E].create();
  }
  function U(E, u, y, C) {
    var m = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
      // salt
      a.create(
        a.Class.UNIVERSAL,
        a.Type.OCTETSTRING,
        !1,
        E
      ),
      // iteration count
      a.create(
        a.Class.UNIVERSAL,
        a.Type.INTEGER,
        !1,
        u.getBytes()
      )
    ]);
    return C !== "hmacWithSHA1" && m.value.push(
      // key length
      a.create(
        a.Class.UNIVERSAL,
        a.Type.INTEGER,
        !1,
        t.util.hexToBytes(y.toString(16))
      ),
      // AlgorithmIdentifier
      a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
        // algorithm
        a.create(
          a.Class.UNIVERSAL,
          a.Type.OID,
          !1,
          a.oidToDer(p.oids[C]).getBytes()
        ),
        // parameters (null)
        a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, "")
      ])
    ), m;
  }
  return Tr;
}
var kr = { exports: {} }, Nr = { exports: {} }, ka;
function on() {
  if (ka) return Nr.exports;
  ka = 1;
  var t = ve();
  yt(), Se();
  var e = t.asn1, a = Nr.exports = t.pkcs7asn1 = t.pkcs7asn1 || {};
  t.pkcs7 = t.pkcs7 || {}, t.pkcs7.asn1 = a;
  var p = {
    name: "ContentInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "ContentInfo.ContentType",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "contentType"
    }, {
      name: "ContentInfo.content",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: !0,
      optional: !0,
      captureAsn1: "content"
    }]
  };
  a.contentInfoValidator = p;
  var I = {
    name: "EncryptedContentInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EncryptedContentInfo.contentType",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "contentType"
    }, {
      name: "EncryptedContentInfo.contentEncryptionAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.OID,
        constructed: !1,
        capture: "encAlgorithm"
      }, {
        name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
        tagClass: e.Class.UNIVERSAL,
        captureAsn1: "encParameter"
      }]
    }, {
      name: "EncryptedContentInfo.encryptedContent",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 0,
      /* The PKCS#7 structure output by OpenSSL somewhat differs from what
       * other implementations do generate.
       *
       * OpenSSL generates a structure like this:
       * SEQUENCE {
       *    ...
       *    [0]
       *       26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
       *       C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
       *       ...
       * }
       *
       * Whereas other implementations (and this PKCS#7 module) generate:
       * SEQUENCE {
       *    ...
       *    [0] {
       *       OCTET STRING
       *          26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
       *          C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
       *          ...
       *    }
       * }
       *
       * In order to support both, we just capture the context specific
       * field here.  The OCTET STRING bit is removed below.
       */
      capture: "encryptedContent",
      captureAsn1: "encryptedContentAsn1"
    }]
  };
  a.envelopedDataValidator = {
    name: "EnvelopedData",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EnvelopedData.Version",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }, {
      name: "EnvelopedData.RecipientInfos",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SET,
      constructed: !0,
      captureAsn1: "recipientInfos"
    }].concat(I)
  }, a.encryptedDataValidator = {
    name: "EncryptedData",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "EncryptedData.Version",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }].concat(I)
  };
  var S = {
    name: "SignerInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "SignerInfo.version",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.INTEGER,
      constructed: !1
    }, {
      name: "SignerInfo.issuerAndSerialNumber",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "SignerInfo.issuerAndSerialNumber.issuer",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "issuer"
      }, {
        name: "SignerInfo.issuerAndSerialNumber.serialNumber",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.INTEGER,
        constructed: !1,
        capture: "serial"
      }]
    }, {
      name: "SignerInfo.digestAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "SignerInfo.digestAlgorithm.algorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.OID,
        constructed: !1,
        capture: "digestAlgorithm"
      }, {
        name: "SignerInfo.digestAlgorithm.parameter",
        tagClass: e.Class.UNIVERSAL,
        constructed: !1,
        captureAsn1: "digestParameter",
        optional: !0
      }]
    }, {
      name: "SignerInfo.authenticatedAttributes",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: !0,
      optional: !0,
      capture: "authenticatedAttributes"
    }, {
      name: "SignerInfo.digestEncryptionAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      capture: "signatureAlgorithm"
    }, {
      name: "SignerInfo.encryptedDigest",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OCTETSTRING,
      constructed: !1,
      capture: "signature"
    }, {
      name: "SignerInfo.unauthenticatedAttributes",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 1,
      constructed: !0,
      optional: !0,
      capture: "unauthenticatedAttributes"
    }]
  };
  return a.signedDataValidator = {
    name: "SignedData",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "SignedData.Version",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.INTEGER,
        constructed: !1,
        capture: "version"
      },
      {
        name: "SignedData.DigestAlgorithms",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SET,
        constructed: !0,
        captureAsn1: "digestAlgorithms"
      },
      p,
      {
        name: "SignedData.Certificates",
        tagClass: e.Class.CONTEXT_SPECIFIC,
        type: 0,
        optional: !0,
        captureAsn1: "certificates"
      },
      {
        name: "SignedData.CertificateRevocationLists",
        tagClass: e.Class.CONTEXT_SPECIFIC,
        type: 1,
        optional: !0,
        captureAsn1: "crls"
      },
      {
        name: "SignedData.SignerInfos",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SET,
        capture: "signerInfos",
        optional: !0,
        value: [S]
      }
    ]
  }, a.recipientInfoValidator = {
    name: "RecipientInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "RecipientInfo.version",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.INTEGER,
      constructed: !1,
      capture: "version"
    }, {
      name: "RecipientInfo.issuerAndSerial",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RecipientInfo.issuerAndSerial.issuer",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "issuer"
      }, {
        name: "RecipientInfo.issuerAndSerial.serialNumber",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.INTEGER,
        constructed: !1,
        capture: "serial"
      }]
    }, {
      name: "RecipientInfo.keyEncryptionAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.OID,
        constructed: !1,
        capture: "encAlgorithm"
      }, {
        name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
        tagClass: e.Class.UNIVERSAL,
        constructed: !1,
        captureAsn1: "encParameter",
        optional: !0
      }]
    }, {
      name: "RecipientInfo.encryptedKey",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OCTETSTRING,
      constructed: !1,
      capture: "encKey"
    }]
  }, Nr.exports;
}
var wr = { exports: {} }, Rr = { exports: {} }, Na;
function ln() {
  if (Na) return Rr.exports;
  Na = 1;
  var t = ve();
  Se(), t.mgf = t.mgf || {};
  var e = Rr.exports = t.mgf.mgf1 = t.mgf1 = t.mgf1 || {};
  return e.create = function(a) {
    var p = {
      /**
       * Generate mask of specified length.
       *
       * @param {String} seed The seed for mask generation.
       * @param maskLen Number of bytes to generate.
       * @return {String} The generated mask.
       */
      generate: function(I, S) {
        for (var f = new t.util.ByteBuffer(), r = Math.ceil(S / a.digestLength), g = 0; g < r; g++) {
          var l = new t.util.ByteBuffer();
          l.putInt32(g), a.start(), a.update(I + l.getBytes()), f.putBuffer(a.digest());
        }
        return f.truncate(f.length() - S), f.getBytes();
      }
    };
    return p;
  }, Rr.exports;
}
var Lr, wa;
function ps() {
  if (wa) return Lr;
  wa = 1;
  var t = ve();
  return ln(), Lr = t.mgf = t.mgf || {}, t.mgf.mgf1 = t.mgf1, Lr;
}
var Ur = { exports: {} }, Ra;
function Wr() {
  if (Ra) return Ur.exports;
  Ra = 1;
  var t = ve();
  ht(), Se();
  var e = Ur.exports = t.pss = t.pss || {};
  return e.create = function(a) {
    arguments.length === 3 && (a = {
      md: arguments[0],
      mgf: arguments[1],
      saltLength: arguments[2]
    });
    var p = a.md, I = a.mgf, S = p.digestLength, f = a.salt || null;
    typeof f == "string" && (f = t.util.createBuffer(f));
    var r;
    if ("saltLength" in a)
      r = a.saltLength;
    else if (f !== null)
      r = f.length();
    else
      throw new Error("Salt length not specified or specific salt not given.");
    if (f !== null && f.length() !== r)
      throw new Error("Given salt length does not match length of given salt.");
    var g = a.prng || t.random, l = {};
    return l.encode = function(b, U) {
      var E, u = U - 1, y = Math.ceil(u / 8), C = b.digest().getBytes();
      if (y < S + r + 2)
        throw new Error("Message is too long to encrypt.");
      var m;
      f === null ? m = g.getBytesSync(r) : m = f.bytes();
      var s = new t.util.ByteBuffer();
      s.fillWithByte(0, 8), s.putBytes(C), s.putBytes(m), p.start(), p.update(s.getBytes());
      var h = p.digest().getBytes(), v = new t.util.ByteBuffer();
      v.fillWithByte(0, y - r - S - 2), v.putByte(1), v.putBytes(m);
      var B = v.getBytes(), R = y - S - 1, c = I.generate(h, R), i = "";
      for (E = 0; E < R; E++)
        i += String.fromCharCode(B.charCodeAt(E) ^ c.charCodeAt(E));
      var n = 65280 >> 8 * y - u & 255;
      return i = String.fromCharCode(i.charCodeAt(0) & ~n) + i.substr(1), i + h + "¼";
    }, l.verify = function(b, U, E) {
      var u, y = E - 1, C = Math.ceil(y / 8);
      if (U = U.substr(-C), C < S + r + 2)
        throw new Error("Inconsistent parameters to PSS signature verification.");
      if (U.charCodeAt(C - 1) !== 188)
        throw new Error("Encoded message does not end in 0xBC.");
      var m = C - S - 1, s = U.substr(0, m), h = U.substr(m, S), v = 65280 >> 8 * C - y & 255;
      if ((s.charCodeAt(0) & v) !== 0)
        throw new Error("Bits beyond keysize not zero as expected.");
      var B = I.generate(h, m), R = "";
      for (u = 0; u < m; u++)
        R += String.fromCharCode(s.charCodeAt(u) ^ B.charCodeAt(u));
      R = String.fromCharCode(R.charCodeAt(0) & ~v) + R.substr(1);
      var c = C - S - r - 2;
      for (u = 0; u < c; u++)
        if (R.charCodeAt(u) !== 0)
          throw new Error("Leftmost octets not zero as expected");
      if (R.charCodeAt(c) !== 1)
        throw new Error("Inconsistent PSS signature, 0x01 marker not found");
      var i = R.substr(-r), n = new t.util.ByteBuffer();
      n.fillWithByte(0, 8), n.putBytes(b), n.putBytes(i), p.start(), p.update(n.getBytes());
      var T = p.digest().getBytes();
      return h === T;
    }, l;
  }, Ur.exports;
}
var La;
function Xr() {
  if (La) return wr.exports;
  La = 1;
  var t = ve();
  Nt(), yt(), _t(), St(), ps(), wt(), Ot(), Wr(), er(), Se();
  var e = t.asn1, a = wr.exports = t.pki = t.pki || {}, p = a.oids, I = {};
  I.CN = p.commonName, I.commonName = "CN", I.C = p.countryName, I.countryName = "C", I.L = p.localityName, I.localityName = "L", I.ST = p.stateOrProvinceName, I.stateOrProvinceName = "ST", I.O = p.organizationName, I.organizationName = "O", I.OU = p.organizationalUnitName, I.organizationalUnitName = "OU", I.E = p.emailAddress, I.emailAddress = "E";
  var S = t.pki.rsa.publicKeyValidator, f = {
    name: "Certificate",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "Certificate.TBSCertificate",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "tbsCertificate",
      value: [
        {
          name: "Certificate.TBSCertificate.version",
          tagClass: e.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.version.integer",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.INTEGER,
            constructed: !1,
            capture: "certVersion"
          }]
        },
        {
          name: "Certificate.TBSCertificate.serialNumber",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.INTEGER,
          constructed: !1,
          capture: "certSerialNumber"
        },
        {
          name: "Certificate.TBSCertificate.signature",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "Certificate.TBSCertificate.signature.algorithm",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.OID,
            constructed: !1,
            capture: "certinfoSignatureOid"
          }, {
            name: "Certificate.TBSCertificate.signature.parameters",
            tagClass: e.Class.UNIVERSAL,
            optional: !0,
            captureAsn1: "certinfoSignatureParams"
          }]
        },
        {
          name: "Certificate.TBSCertificate.issuer",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certIssuer"
        },
        {
          name: "Certificate.TBSCertificate.validity",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          // Note: UTC and generalized times may both appear so the capture
          // names are based on their detected order, the names used below
          // are only for the common case, which validity time really means
          // "notBefore" and which means "notAfter" will be determined by order
          value: [{
            // notBefore (Time) (UTC time case)
            name: "Certificate.TBSCertificate.validity.notBefore (utc)",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.UTCTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity1UTCTime"
          }, {
            // notBefore (Time) (generalized time case)
            name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.GENERALIZEDTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity2GeneralizedTime"
          }, {
            // notAfter (Time) (only UTC time is supported)
            name: "Certificate.TBSCertificate.validity.notAfter (utc)",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.UTCTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity3UTCTime"
          }, {
            // notAfter (Time) (only UTC time is supported)
            name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.GENERALIZEDTIME,
            constructed: !1,
            optional: !0,
            capture: "certValidity4GeneralizedTime"
          }]
        },
        {
          // Name (subject) (RDNSequence)
          name: "Certificate.TBSCertificate.subject",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certSubject"
        },
        // SubjectPublicKeyInfo
        S,
        {
          // issuerUniqueID (optional)
          name: "Certificate.TBSCertificate.issuerUniqueID",
          tagClass: e.Class.CONTEXT_SPECIFIC,
          type: 1,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.issuerUniqueID.id",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.BITSTRING,
            constructed: !1,
            // TODO: support arbitrary bit length ids
            captureBitStringValue: "certIssuerUniqueId"
          }]
        },
        {
          // subjectUniqueID (optional)
          name: "Certificate.TBSCertificate.subjectUniqueID",
          tagClass: e.Class.CONTEXT_SPECIFIC,
          type: 2,
          constructed: !0,
          optional: !0,
          value: [{
            name: "Certificate.TBSCertificate.subjectUniqueID.id",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.BITSTRING,
            constructed: !1,
            // TODO: support arbitrary bit length ids
            captureBitStringValue: "certSubjectUniqueId"
          }]
        },
        {
          // Extensions (optional)
          name: "Certificate.TBSCertificate.extensions",
          tagClass: e.Class.CONTEXT_SPECIFIC,
          type: 3,
          constructed: !0,
          captureAsn1: "certExtensions",
          optional: !0
        }
      ]
    }, {
      // AlgorithmIdentifier (signature algorithm)
      name: "Certificate.signatureAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        // algorithm
        name: "Certificate.signatureAlgorithm.algorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.OID,
        constructed: !1,
        capture: "certSignatureOid"
      }, {
        name: "Certificate.TBSCertificate.signature.parameters",
        tagClass: e.Class.UNIVERSAL,
        optional: !0,
        captureAsn1: "certSignatureParams"
      }]
    }, {
      // SignatureValue
      name: "Certificate.signatureValue",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.BITSTRING,
      constructed: !1,
      captureBitStringValue: "certSignature"
    }]
  }, r = {
    name: "rsapss",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "rsapss.hashAlgorithm",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: !0,
      value: [{
        name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
        tagClass: e.Class.UNIVERSAL,
        type: e.Class.SEQUENCE,
        constructed: !0,
        optional: !0,
        value: [{
          name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.OID,
          constructed: !1,
          capture: "hashOid"
          /* parameter block omitted, for SHA1 NULL anyhow. */
        }]
      }]
    }, {
      name: "rsapss.maskGenAlgorithm",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 1,
      constructed: !0,
      value: [{
        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
        tagClass: e.Class.UNIVERSAL,
        type: e.Class.SEQUENCE,
        constructed: !0,
        optional: !0,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.OID,
          constructed: !1,
          capture: "maskGenOid"
        }, {
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.OID,
            constructed: !1,
            capture: "maskGenHashOid"
            /* parameter block omitted, for SHA1 NULL anyhow. */
          }]
        }]
      }]
    }, {
      name: "rsapss.saltLength",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 2,
      optional: !0,
      value: [{
        name: "rsapss.saltLength.saltLength",
        tagClass: e.Class.UNIVERSAL,
        type: e.Class.INTEGER,
        constructed: !1,
        capture: "saltLength"
      }]
    }, {
      name: "rsapss.trailerField",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      type: 3,
      optional: !0,
      value: [{
        name: "rsapss.trailer.trailer",
        tagClass: e.Class.UNIVERSAL,
        type: e.Class.INTEGER,
        constructed: !1,
        capture: "trailer"
      }]
    }]
  }, g = {
    name: "CertificationRequestInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "certificationRequestInfo",
    value: [
      {
        name: "CertificationRequestInfo.integer",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.INTEGER,
        constructed: !1,
        capture: "certificationRequestInfoVersion"
      },
      {
        // Name (subject) (RDNSequence)
        name: "CertificationRequestInfo.subject",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "certificationRequestInfoSubject"
      },
      // SubjectPublicKeyInfo
      S,
      {
        name: "CertificationRequestInfo.attributes",
        tagClass: e.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: !0,
        optional: !0,
        capture: "certificationRequestInfoAttributes",
        value: [{
          name: "CertificationRequestInfo.attributes",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          constructed: !0,
          value: [{
            name: "CertificationRequestInfo.attributes.type",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.OID,
            constructed: !1
          }, {
            name: "CertificationRequestInfo.attributes.value",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SET,
            constructed: !0
          }]
        }]
      }
    ]
  }, l = {
    name: "CertificationRequest",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "csr",
    value: [
      g,
      {
        // AlgorithmIdentifier (signature algorithm)
        name: "CertificationRequest.signatureAlgorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [{
          // algorithm
          name: "CertificationRequest.signatureAlgorithm.algorithm",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.OID,
          constructed: !1,
          capture: "csrSignatureOid"
        }, {
          name: "CertificationRequest.signatureAlgorithm.parameters",
          tagClass: e.Class.UNIVERSAL,
          optional: !0,
          captureAsn1: "csrSignatureParams"
        }]
      },
      {
        // signature
        name: "CertificationRequest.signature",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.BITSTRING,
        constructed: !1,
        captureBitStringValue: "csrSignature"
      }
    ]
  };
  a.RDNAttributesAsArray = function(c, i) {
    for (var n = [], T, V, O, D = 0; D < c.value.length; ++D) {
      T = c.value[D];
      for (var M = 0; M < T.value.length; ++M)
        O = {}, V = T.value[M], O.type = e.derToOid(V.value[0].value), O.value = V.value[1].value, O.valueTagClass = V.value[1].type, O.type in p && (O.name = p[O.type], O.name in I && (O.shortName = I[O.name])), i && (i.update(O.type), i.update(O.value)), n.push(O);
    }
    return n;
  }, a.CRIAttributesAsArray = function(c) {
    for (var i = [], n = 0; n < c.length; ++n)
      for (var T = c[n], V = e.derToOid(T.value[0].value), O = T.value[1].value, D = 0; D < O.length; ++D) {
        var M = {};
        if (M.type = V, M.value = O[D].value, M.valueTagClass = O[D].type, M.type in p && (M.name = p[M.type], M.name in I && (M.shortName = I[M.name])), M.type === p.extensionRequest) {
          M.extensions = [];
          for (var x = 0; x < M.value.length; ++x)
            M.extensions.push(a.certificateExtensionFromAsn1(M.value[x]));
        }
        i.push(M);
      }
    return i;
  };
  function b(c, i) {
    typeof i == "string" && (i = { shortName: i });
    for (var n = null, T, V = 0; n === null && V < c.attributes.length; ++V)
      T = c.attributes[V], (i.type && i.type === T.type || i.name && i.name === T.name || i.shortName && i.shortName === T.shortName) && (n = T);
    return n;
  }
  var U = function(c, i, n) {
    var T = {};
    if (c !== p["RSASSA-PSS"])
      return T;
    n && (T = {
      hash: {
        algorithmOid: p.sha1
      },
      mgf: {
        algorithmOid: p.mgf1,
        hash: {
          algorithmOid: p.sha1
        }
      },
      saltLength: 20
    });
    var V = {}, O = [];
    if (!e.validate(i, r, V, O)) {
      var D = new Error("Cannot read RSASSA-PSS parameter block.");
      throw D.errors = O, D;
    }
    return V.hashOid !== void 0 && (T.hash = T.hash || {}, T.hash.algorithmOid = e.derToOid(V.hashOid)), V.maskGenOid !== void 0 && (T.mgf = T.mgf || {}, T.mgf.algorithmOid = e.derToOid(V.maskGenOid), T.mgf.hash = T.mgf.hash || {}, T.mgf.hash.algorithmOid = e.derToOid(V.maskGenHashOid)), V.saltLength !== void 0 && (T.saltLength = V.saltLength.charCodeAt(0)), T;
  }, E = function(c) {
    switch (p[c.signatureOid]) {
      case "sha1WithRSAEncryption":
      // deprecated alias
      case "sha1WithRSASignature":
        return t.md.sha1.create();
      case "md5WithRSAEncryption":
        return t.md.md5.create();
      case "sha256WithRSAEncryption":
        return t.md.sha256.create();
      case "sha384WithRSAEncryption":
        return t.md.sha384.create();
      case "sha512WithRSAEncryption":
        return t.md.sha512.create();
      case "RSASSA-PSS":
        return t.md.sha256.create();
      default:
        var i = new Error(
          "Could not compute " + c.type + " digest. Unknown signature OID."
        );
        throw i.signatureOid = c.signatureOid, i;
    }
  }, u = function(c) {
    var i = c.certificate, n;
    switch (i.signatureOid) {
      case p.sha1WithRSAEncryption:
      // deprecated alias
      case p.sha1WithRSASignature:
        break;
      case p["RSASSA-PSS"]:
        var T, V;
        if (T = p[i.signatureParameters.mgf.hash.algorithmOid], T === void 0 || t.md[T] === void 0) {
          var O = new Error("Unsupported MGF hash function.");
          throw O.oid = i.signatureParameters.mgf.hash.algorithmOid, O.name = T, O;
        }
        if (V = p[i.signatureParameters.mgf.algorithmOid], V === void 0 || t.mgf[V] === void 0) {
          var O = new Error("Unsupported MGF function.");
          throw O.oid = i.signatureParameters.mgf.algorithmOid, O.name = V, O;
        }
        if (V = t.mgf[V].create(t.md[T].create()), T = p[i.signatureParameters.hash.algorithmOid], T === void 0 || t.md[T] === void 0) {
          var O = new Error("Unsupported RSASSA-PSS hash function.");
          throw O.oid = i.signatureParameters.hash.algorithmOid, O.name = T, O;
        }
        n = t.pss.create(
          t.md[T].create(),
          V,
          i.signatureParameters.saltLength
        );
        break;
    }
    return i.publicKey.verify(
      c.md.digest().getBytes(),
      c.signature,
      n
    );
  };
  a.certificateFromPem = function(c, i, n) {
    var T = t.pem.decode(c)[0];
    if (T.type !== "CERTIFICATE" && T.type !== "X509 CERTIFICATE" && T.type !== "TRUSTED CERTIFICATE") {
      var V = new Error(
        'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
      );
      throw V.headerType = T.type, V;
    }
    if (T.procType && T.procType.type === "ENCRYPTED")
      throw new Error(
        "Could not convert certificate from PEM; PEM is encrypted."
      );
    var O = e.fromDer(T.body, n);
    return a.certificateFromAsn1(O, i);
  }, a.certificateToPem = function(c, i) {
    var n = {
      type: "CERTIFICATE",
      body: e.toDer(a.certificateToAsn1(c)).getBytes()
    };
    return t.pem.encode(n, { maxline: i });
  }, a.publicKeyFromPem = function(c) {
    var i = t.pem.decode(c)[0];
    if (i.type !== "PUBLIC KEY" && i.type !== "RSA PUBLIC KEY") {
      var n = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
      throw n.headerType = i.type, n;
    }
    if (i.procType && i.procType.type === "ENCRYPTED")
      throw new Error("Could not convert public key from PEM; PEM is encrypted.");
    var T = e.fromDer(i.body);
    return a.publicKeyFromAsn1(T);
  }, a.publicKeyToPem = function(c, i) {
    var n = {
      type: "PUBLIC KEY",
      body: e.toDer(a.publicKeyToAsn1(c)).getBytes()
    };
    return t.pem.encode(n, { maxline: i });
  }, a.publicKeyToRSAPublicKeyPem = function(c, i) {
    var n = {
      type: "RSA PUBLIC KEY",
      body: e.toDer(a.publicKeyToRSAPublicKey(c)).getBytes()
    };
    return t.pem.encode(n, { maxline: i });
  }, a.getPublicKeyFingerprint = function(c, i) {
    i = i || {};
    var n = i.md || t.md.sha1.create(), T = i.type || "RSAPublicKey", V;
    switch (T) {
      case "RSAPublicKey":
        V = e.toDer(a.publicKeyToRSAPublicKey(c)).getBytes();
        break;
      case "SubjectPublicKeyInfo":
        V = e.toDer(a.publicKeyToAsn1(c)).getBytes();
        break;
      default:
        throw new Error('Unknown fingerprint type "' + i.type + '".');
    }
    n.start(), n.update(V);
    var O = n.digest();
    if (i.encoding === "hex") {
      var D = O.toHex();
      return i.delimiter ? D.match(/.{2}/g).join(i.delimiter) : D;
    } else {
      if (i.encoding === "binary")
        return O.getBytes();
      if (i.encoding)
        throw new Error('Unknown encoding "' + i.encoding + '".');
    }
    return O;
  }, a.certificationRequestFromPem = function(c, i, n) {
    var T = t.pem.decode(c)[0];
    if (T.type !== "CERTIFICATE REQUEST") {
      var V = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
      throw V.headerType = T.type, V;
    }
    if (T.procType && T.procType.type === "ENCRYPTED")
      throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
    var O = e.fromDer(T.body, n);
    return a.certificationRequestFromAsn1(O, i);
  }, a.certificationRequestToPem = function(c, i) {
    var n = {
      type: "CERTIFICATE REQUEST",
      body: e.toDer(a.certificationRequestToAsn1(c)).getBytes()
    };
    return t.pem.encode(n, { maxline: i });
  }, a.createCertificate = function() {
    var c = {};
    return c.version = 2, c.serialNumber = "00", c.signatureOid = null, c.signature = null, c.siginfo = {}, c.siginfo.algorithmOid = null, c.validity = {}, c.validity.notBefore = /* @__PURE__ */ new Date(), c.validity.notAfter = /* @__PURE__ */ new Date(), c.issuer = {}, c.issuer.getField = function(i) {
      return b(c.issuer, i);
    }, c.issuer.addField = function(i) {
      C([i]), c.issuer.attributes.push(i);
    }, c.issuer.attributes = [], c.issuer.hash = null, c.subject = {}, c.subject.getField = function(i) {
      return b(c.subject, i);
    }, c.subject.addField = function(i) {
      C([i]), c.subject.attributes.push(i);
    }, c.subject.attributes = [], c.subject.hash = null, c.extensions = [], c.publicKey = null, c.md = null, c.setSubject = function(i, n) {
      C(i), c.subject.attributes = i, delete c.subject.uniqueId, n && (c.subject.uniqueId = n), c.subject.hash = null;
    }, c.setIssuer = function(i, n) {
      C(i), c.issuer.attributes = i, delete c.issuer.uniqueId, n && (c.issuer.uniqueId = n), c.issuer.hash = null;
    }, c.setExtensions = function(i) {
      for (var n = 0; n < i.length; ++n)
        m(i[n], { cert: c });
      c.extensions = i;
    }, c.getExtension = function(i) {
      typeof i == "string" && (i = { name: i });
      for (var n = null, T, V = 0; n === null && V < c.extensions.length; ++V)
        T = c.extensions[V], (i.id && T.id === i.id || i.name && T.name === i.name) && (n = T);
      return n;
    }, c.sign = function(i, n) {
      c.md = n || t.md.sha1.create();
      var T = p[c.md.algorithm + "WithRSAEncryption"];
      if (!T) {
        var V = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
        throw V.algorithm = c.md.algorithm, V;
      }
      c.signatureOid = c.siginfo.algorithmOid = T, c.tbsCertificate = a.getTBSCertificate(c);
      var O = e.toDer(c.tbsCertificate);
      c.md.update(O.getBytes()), c.signature = i.sign(c.md);
    }, c.verify = function(i) {
      var n = !1;
      if (!c.issued(i)) {
        var T = i.issuer, V = c.subject, O = new Error(
          "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject."
        );
        throw O.expectedIssuer = V.attributes, O.actualIssuer = T.attributes, O;
      }
      var D = i.md;
      if (D === null) {
        D = E({
          signatureOid: i.signatureOid,
          type: "certificate"
        });
        var M = i.tbsCertificate || a.getTBSCertificate(i), x = e.toDer(M);
        D.update(x.getBytes());
      }
      return D !== null && (n = u({
        certificate: c,
        md: D,
        signature: i.signature
      })), n;
    }, c.isIssuer = function(i) {
      var n = !1, T = c.issuer, V = i.subject;
      if (T.hash && V.hash)
        n = T.hash === V.hash;
      else if (T.attributes.length === V.attributes.length) {
        n = !0;
        for (var O, D, M = 0; n && M < T.attributes.length; ++M)
          O = T.attributes[M], D = V.attributes[M], (O.type !== D.type || O.value !== D.value) && (n = !1);
      }
      return n;
    }, c.issued = function(i) {
      return i.isIssuer(c);
    }, c.generateSubjectKeyIdentifier = function() {
      return a.getPublicKeyFingerprint(c.publicKey, { type: "RSAPublicKey" });
    }, c.verifySubjectKeyIdentifier = function() {
      for (var i = p.subjectKeyIdentifier, n = 0; n < c.extensions.length; ++n) {
        var T = c.extensions[n];
        if (T.id === i) {
          var V = c.generateSubjectKeyIdentifier().getBytes();
          return t.util.hexToBytes(T.subjectKeyIdentifier) === V;
        }
      }
      return !1;
    }, c;
  }, a.certificateFromAsn1 = function(c, i) {
    var n = {}, T = [];
    if (!e.validate(c, f, n, T)) {
      var V = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
      throw V.errors = T, V;
    }
    var O = e.derToOid(n.publicKeyOid);
    if (O !== a.oids.rsaEncryption)
      throw new Error("Cannot read public key. OID is not RSA.");
    var D = a.createCertificate();
    D.version = n.certVersion ? n.certVersion.charCodeAt(0) : 0;
    var M = t.util.createBuffer(n.certSerialNumber);
    D.serialNumber = M.toHex(), D.signatureOid = t.asn1.derToOid(n.certSignatureOid), D.signatureParameters = U(
      D.signatureOid,
      n.certSignatureParams,
      !0
    ), D.siginfo.algorithmOid = t.asn1.derToOid(n.certinfoSignatureOid), D.siginfo.parameters = U(
      D.siginfo.algorithmOid,
      n.certinfoSignatureParams,
      !1
    ), D.signature = n.certSignature;
    var x = [];
    if (n.certValidity1UTCTime !== void 0 && x.push(e.utcTimeToDate(n.certValidity1UTCTime)), n.certValidity2GeneralizedTime !== void 0 && x.push(e.generalizedTimeToDate(
      n.certValidity2GeneralizedTime
    )), n.certValidity3UTCTime !== void 0 && x.push(e.utcTimeToDate(n.certValidity3UTCTime)), n.certValidity4GeneralizedTime !== void 0 && x.push(e.generalizedTimeToDate(
      n.certValidity4GeneralizedTime
    )), x.length > 2)
      throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
    if (x.length < 2)
      throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
    if (D.validity.notBefore = x[0], D.validity.notAfter = x[1], D.tbsCertificate = n.tbsCertificate, i) {
      D.md = E({
        signatureOid: D.signatureOid,
        type: "certificate"
      });
      var G = e.toDer(D.tbsCertificate);
      D.md.update(G.getBytes());
    }
    var z = t.md.sha1.create(), Y = e.toDer(n.certIssuer);
    z.update(Y.getBytes()), D.issuer.getField = function(ue) {
      return b(D.issuer, ue);
    }, D.issuer.addField = function(ue) {
      C([ue]), D.issuer.attributes.push(ue);
    }, D.issuer.attributes = a.RDNAttributesAsArray(n.certIssuer), n.certIssuerUniqueId && (D.issuer.uniqueId = n.certIssuerUniqueId), D.issuer.hash = z.digest().toHex();
    var Z = t.md.sha1.create(), te = e.toDer(n.certSubject);
    return Z.update(te.getBytes()), D.subject.getField = function(ue) {
      return b(D.subject, ue);
    }, D.subject.addField = function(ue) {
      C([ue]), D.subject.attributes.push(ue);
    }, D.subject.attributes = a.RDNAttributesAsArray(n.certSubject), n.certSubjectUniqueId && (D.subject.uniqueId = n.certSubjectUniqueId), D.subject.hash = Z.digest().toHex(), n.certExtensions ? D.extensions = a.certificateExtensionsFromAsn1(n.certExtensions) : D.extensions = [], D.publicKey = a.publicKeyFromAsn1(n.subjectPublicKeyInfo), D;
  }, a.certificateExtensionsFromAsn1 = function(c) {
    for (var i = [], n = 0; n < c.value.length; ++n)
      for (var T = c.value[n], V = 0; V < T.value.length; ++V)
        i.push(a.certificateExtensionFromAsn1(T.value[V]));
    return i;
  }, a.certificateExtensionFromAsn1 = function(c) {
    var i = {};
    if (i.id = e.derToOid(c.value[0].value), i.critical = !1, c.value[1].type === e.Type.BOOLEAN ? (i.critical = c.value[1].value.charCodeAt(0) !== 0, i.value = c.value[2].value) : i.value = c.value[1].value, i.id in p) {
      if (i.name = p[i.id], i.name === "keyUsage") {
        var n = e.fromDer(i.value), T = 0, V = 0;
        n.value.length > 1 && (T = n.value.charCodeAt(1), V = n.value.length > 2 ? n.value.charCodeAt(2) : 0), i.digitalSignature = (T & 128) === 128, i.nonRepudiation = (T & 64) === 64, i.keyEncipherment = (T & 32) === 32, i.dataEncipherment = (T & 16) === 16, i.keyAgreement = (T & 8) === 8, i.keyCertSign = (T & 4) === 4, i.cRLSign = (T & 2) === 2, i.encipherOnly = (T & 1) === 1, i.decipherOnly = (V & 128) === 128;
      } else if (i.name === "basicConstraints") {
        var n = e.fromDer(i.value);
        n.value.length > 0 && n.value[0].type === e.Type.BOOLEAN ? i.cA = n.value[0].value.charCodeAt(0) !== 0 : i.cA = !1;
        var O = null;
        n.value.length > 0 && n.value[0].type === e.Type.INTEGER ? O = n.value[0].value : n.value.length > 1 && (O = n.value[1].value), O !== null && (i.pathLenConstraint = e.derToInteger(O));
      } else if (i.name === "extKeyUsage")
        for (var n = e.fromDer(i.value), D = 0; D < n.value.length; ++D) {
          var M = e.derToOid(n.value[D].value);
          M in p ? i[p[M]] = !0 : i[M] = !0;
        }
      else if (i.name === "nsCertType") {
        var n = e.fromDer(i.value), T = 0;
        n.value.length > 1 && (T = n.value.charCodeAt(1)), i.client = (T & 128) === 128, i.server = (T & 64) === 64, i.email = (T & 32) === 32, i.objsign = (T & 16) === 16, i.reserved = (T & 8) === 8, i.sslCA = (T & 4) === 4, i.emailCA = (T & 2) === 2, i.objCA = (T & 1) === 1;
      } else if (i.name === "subjectAltName" || i.name === "issuerAltName") {
        i.altNames = [];
        for (var x, n = e.fromDer(i.value), G = 0; G < n.value.length; ++G) {
          x = n.value[G];
          var z = {
            type: x.type,
            value: x.value
          };
          switch (i.altNames.push(z), x.type) {
            // rfc822Name
            case 1:
            // dNSName
            case 2:
            // uniformResourceIdentifier (URI)
            case 6:
              break;
            // IPAddress
            case 7:
              z.ip = t.util.bytesToIP(x.value);
              break;
            // registeredID
            case 8:
              z.oid = e.derToOid(x.value);
              break;
          }
        }
      } else if (i.name === "subjectKeyIdentifier") {
        var n = e.fromDer(i.value);
        i.subjectKeyIdentifier = t.util.bytesToHex(n.value);
      }
    }
    return i;
  }, a.certificationRequestFromAsn1 = function(c, i) {
    var n = {}, T = [];
    if (!e.validate(c, l, n, T)) {
      var V = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
      throw V.errors = T, V;
    }
    var O = e.derToOid(n.publicKeyOid);
    if (O !== a.oids.rsaEncryption)
      throw new Error("Cannot read public key. OID is not RSA.");
    var D = a.createCertificationRequest();
    if (D.version = n.csrVersion ? n.csrVersion.charCodeAt(0) : 0, D.signatureOid = t.asn1.derToOid(n.csrSignatureOid), D.signatureParameters = U(
      D.signatureOid,
      n.csrSignatureParams,
      !0
    ), D.siginfo.algorithmOid = t.asn1.derToOid(n.csrSignatureOid), D.siginfo.parameters = U(
      D.siginfo.algorithmOid,
      n.csrSignatureParams,
      !1
    ), D.signature = n.csrSignature, D.certificationRequestInfo = n.certificationRequestInfo, i) {
      D.md = E({
        signatureOid: D.signatureOid,
        type: "certification request"
      });
      var M = e.toDer(D.certificationRequestInfo);
      D.md.update(M.getBytes());
    }
    var x = t.md.sha1.create();
    return D.subject.getField = function(G) {
      return b(D.subject, G);
    }, D.subject.addField = function(G) {
      C([G]), D.subject.attributes.push(G);
    }, D.subject.attributes = a.RDNAttributesAsArray(
      n.certificationRequestInfoSubject,
      x
    ), D.subject.hash = x.digest().toHex(), D.publicKey = a.publicKeyFromAsn1(n.subjectPublicKeyInfo), D.getAttribute = function(G) {
      return b(D, G);
    }, D.addAttribute = function(G) {
      C([G]), D.attributes.push(G);
    }, D.attributes = a.CRIAttributesAsArray(
      n.certificationRequestInfoAttributes || []
    ), D;
  }, a.createCertificationRequest = function() {
    var c = {};
    return c.version = 0, c.signatureOid = null, c.signature = null, c.siginfo = {}, c.siginfo.algorithmOid = null, c.subject = {}, c.subject.getField = function(i) {
      return b(c.subject, i);
    }, c.subject.addField = function(i) {
      C([i]), c.subject.attributes.push(i);
    }, c.subject.attributes = [], c.subject.hash = null, c.publicKey = null, c.attributes = [], c.getAttribute = function(i) {
      return b(c, i);
    }, c.addAttribute = function(i) {
      C([i]), c.attributes.push(i);
    }, c.md = null, c.setSubject = function(i) {
      C(i), c.subject.attributes = i, c.subject.hash = null;
    }, c.setAttributes = function(i) {
      C(i), c.attributes = i;
    }, c.sign = function(i, n) {
      c.md = n || t.md.sha1.create();
      var T = p[c.md.algorithm + "WithRSAEncryption"];
      if (!T) {
        var V = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
        throw V.algorithm = c.md.algorithm, V;
      }
      c.signatureOid = c.siginfo.algorithmOid = T, c.certificationRequestInfo = a.getCertificationRequestInfo(c);
      var O = e.toDer(c.certificationRequestInfo);
      c.md.update(O.getBytes()), c.signature = i.sign(c.md);
    }, c.verify = function() {
      var i = !1, n = c.md;
      if (n === null) {
        n = E({
          signatureOid: c.signatureOid,
          type: "certification request"
        });
        var T = c.certificationRequestInfo || a.getCertificationRequestInfo(c), V = e.toDer(T);
        n.update(V.getBytes());
      }
      return n !== null && (i = u({
        certificate: c,
        md: n,
        signature: c.signature
      })), i;
    }, c;
  };
  function y(c) {
    for (var i = e.create(
      e.Class.UNIVERSAL,
      e.Type.SEQUENCE,
      !0,
      []
    ), n, T, V = c.attributes, O = 0; O < V.length; ++O) {
      n = V[O];
      var D = n.value, M = e.Type.PRINTABLESTRING;
      "valueTagClass" in n && (M = n.valueTagClass, M === e.Type.UTF8 && (D = t.util.encodeUtf8(D))), T = e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [
        e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          // AttributeType
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OID,
            !1,
            e.oidToDer(n.type).getBytes()
          ),
          // AttributeValue
          e.create(e.Class.UNIVERSAL, M, !1, D)
        ])
      ]), i.value.push(T);
    }
    return i;
  }
  function C(c) {
    for (var i, n = 0; n < c.length; ++n) {
      if (i = c[n], typeof i.name > "u" && (i.type && i.type in a.oids ? i.name = a.oids[i.type] : i.shortName && i.shortName in I && (i.name = a.oids[I[i.shortName]])), typeof i.type > "u")
        if (i.name && i.name in a.oids)
          i.type = a.oids[i.name];
        else {
          var T = new Error("Attribute type not specified.");
          throw T.attribute = i, T;
        }
      if (typeof i.shortName > "u" && i.name && i.name in I && (i.shortName = I[i.name]), i.type === p.extensionRequest && (i.valueConstructed = !0, i.valueTagClass = e.Type.SEQUENCE, !i.value && i.extensions)) {
        i.value = [];
        for (var V = 0; V < i.extensions.length; ++V)
          i.value.push(a.certificateExtensionToAsn1(
            m(i.extensions[V])
          ));
      }
      if (typeof i.value > "u") {
        var T = new Error("Attribute value not specified.");
        throw T.attribute = i, T;
      }
    }
  }
  function m(c, i) {
    if (i = i || {}, typeof c.name > "u" && c.id && c.id in a.oids && (c.name = a.oids[c.id]), typeof c.id > "u")
      if (c.name && c.name in a.oids)
        c.id = a.oids[c.name];
      else {
        var n = new Error("Extension ID not specified.");
        throw n.extension = c, n;
      }
    if (typeof c.value < "u")
      return c;
    if (c.name === "keyUsage") {
      var T = 0, V = 0, O = 0;
      c.digitalSignature && (V |= 128, T = 7), c.nonRepudiation && (V |= 64, T = 6), c.keyEncipherment && (V |= 32, T = 5), c.dataEncipherment && (V |= 16, T = 4), c.keyAgreement && (V |= 8, T = 3), c.keyCertSign && (V |= 4, T = 2), c.cRLSign && (V |= 2, T = 1), c.encipherOnly && (V |= 1, T = 0), c.decipherOnly && (O |= 128, T = 7);
      var D = String.fromCharCode(T);
      O !== 0 ? D += String.fromCharCode(V) + String.fromCharCode(O) : V !== 0 && (D += String.fromCharCode(V)), c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.BITSTRING,
        !1,
        D
      );
    } else if (c.name === "basicConstraints")
      c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.SEQUENCE,
        !0,
        []
      ), c.cA && c.value.value.push(e.create(
        e.Class.UNIVERSAL,
        e.Type.BOOLEAN,
        !1,
        "ÿ"
      )), "pathLenConstraint" in c && c.value.value.push(e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        e.integerToDer(c.pathLenConstraint).getBytes()
      ));
    else if (c.name === "extKeyUsage") {
      c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.SEQUENCE,
        !0,
        []
      );
      var M = c.value.value;
      for (var x in c)
        c[x] === !0 && (x in p ? M.push(e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(p[x]).getBytes()
        )) : x.indexOf(".") !== -1 && M.push(e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(x).getBytes()
        )));
    } else if (c.name === "nsCertType") {
      var T = 0, V = 0;
      c.client && (V |= 128, T = 7), c.server && (V |= 64, T = 6), c.email && (V |= 32, T = 5), c.objsign && (V |= 16, T = 4), c.reserved && (V |= 8, T = 3), c.sslCA && (V |= 4, T = 2), c.emailCA && (V |= 2, T = 1), c.objCA && (V |= 1, T = 0);
      var D = String.fromCharCode(T);
      V !== 0 && (D += String.fromCharCode(V)), c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.BITSTRING,
        !1,
        D
      );
    } else if (c.name === "subjectAltName" || c.name === "issuerAltName") {
      c.value = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, []);
      for (var G, z = 0; z < c.altNames.length; ++z) {
        G = c.altNames[z];
        var D = G.value;
        if (G.type === 7 && G.ip) {
          if (D = t.util.bytesFromIP(G.ip), D === null) {
            var n = new Error(
              'Extension "ip" value is not a valid IPv4 or IPv6 address.'
            );
            throw n.extension = c, n;
          }
        } else G.type === 8 && (G.oid ? D = e.oidToDer(e.oidToDer(G.oid)) : D = e.oidToDer(D));
        c.value.value.push(e.create(
          e.Class.CONTEXT_SPECIFIC,
          G.type,
          !1,
          D
        ));
      }
    } else if (c.name === "nsComment" && i.cert) {
      if (!/^[\x00-\x7F]*$/.test(c.comment) || c.comment.length < 1 || c.comment.length > 128)
        throw new Error('Invalid "nsComment" content.');
      c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.IA5STRING,
        !1,
        c.comment
      );
    } else if (c.name === "subjectKeyIdentifier" && i.cert) {
      var Y = i.cert.generateSubjectKeyIdentifier();
      c.subjectKeyIdentifier = Y.toHex(), c.value = e.create(
        e.Class.UNIVERSAL,
        e.Type.OCTETSTRING,
        !1,
        Y.getBytes()
      );
    } else if (c.name === "authorityKeyIdentifier" && i.cert) {
      c.value = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, []);
      var M = c.value.value;
      if (c.keyIdentifier) {
        var Z = c.keyIdentifier === !0 ? i.cert.generateSubjectKeyIdentifier().getBytes() : c.keyIdentifier;
        M.push(
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !1, Z)
        );
      }
      if (c.authorityCertIssuer) {
        var te = [
          e.create(e.Class.CONTEXT_SPECIFIC, 4, !0, [
            y(c.authorityCertIssuer === !0 ? i.cert.issuer : c.authorityCertIssuer)
          ])
        ];
        M.push(
          e.create(e.Class.CONTEXT_SPECIFIC, 1, !0, te)
        );
      }
      if (c.serialNumber) {
        var ue = t.util.hexToBytes(c.serialNumber === !0 ? i.cert.serialNumber : c.serialNumber);
        M.push(
          e.create(e.Class.CONTEXT_SPECIFIC, 2, !1, ue)
        );
      }
    } else if (c.name === "cRLDistributionPoints") {
      c.value = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, []);
      for (var M = c.value.value, he = e.create(
        e.Class.UNIVERSAL,
        e.Type.SEQUENCE,
        !0,
        []
      ), Ce = e.create(
        e.Class.CONTEXT_SPECIFIC,
        0,
        !0,
        []
      ), G, z = 0; z < c.altNames.length; ++z) {
        G = c.altNames[z];
        var D = G.value;
        if (G.type === 7 && G.ip) {
          if (D = t.util.bytesFromIP(G.ip), D === null) {
            var n = new Error(
              'Extension "ip" value is not a valid IPv4 or IPv6 address.'
            );
            throw n.extension = c, n;
          }
        } else G.type === 8 && (G.oid ? D = e.oidToDer(e.oidToDer(G.oid)) : D = e.oidToDer(D));
        Ce.value.push(e.create(
          e.Class.CONTEXT_SPECIFIC,
          G.type,
          !1,
          D
        ));
      }
      he.value.push(e.create(
        e.Class.CONTEXT_SPECIFIC,
        0,
        !0,
        [Ce]
      )), M.push(he);
    }
    if (typeof c.value > "u") {
      var n = new Error("Extension value not specified.");
      throw n.extension = c, n;
    }
    return c;
  }
  function s(c, i) {
    switch (c) {
      case p["RSASSA-PSS"]:
        var n = [];
        return i.hash.algorithmOid !== void 0 && n.push(e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(i.hash.algorithmOid).getBytes()
            ),
            e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
          ])
        ])), i.mgf.algorithmOid !== void 0 && n.push(e.create(e.Class.CONTEXT_SPECIFIC, 1, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(i.mgf.algorithmOid).getBytes()
            ),
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(
                e.Class.UNIVERSAL,
                e.Type.OID,
                !1,
                e.oidToDer(i.mgf.hash.algorithmOid).getBytes()
              ),
              e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
            ])
          ])
        ])), i.saltLength !== void 0 && n.push(e.create(e.Class.CONTEXT_SPECIFIC, 2, !0, [
          e.create(
            e.Class.UNIVERSAL,
            e.Type.INTEGER,
            !1,
            e.integerToDer(i.saltLength).getBytes()
          )
        ])), e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, n);
      default:
        return e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "");
    }
  }
  function h(c) {
    var i = e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, []);
    if (c.attributes.length === 0)
      return i;
    for (var n = c.attributes, T = 0; T < n.length; ++T) {
      var V = n[T], O = V.value, D = e.Type.UTF8;
      "valueTagClass" in V && (D = V.valueTagClass), D === e.Type.UTF8 && (O = t.util.encodeUtf8(O));
      var M = !1;
      "valueConstructed" in V && (M = V.valueConstructed);
      var x = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // AttributeType
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(V.type).getBytes()
        ),
        e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [
          // AttributeValue
          e.create(
            e.Class.UNIVERSAL,
            D,
            M,
            O
          )
        ])
      ]);
      i.value.push(x);
    }
    return i;
  }
  var v = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z"), B = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z");
  function R(c) {
    return c >= v && c < B ? e.create(
      e.Class.UNIVERSAL,
      e.Type.UTCTIME,
      !1,
      e.dateToUtcTime(c)
    ) : e.create(
      e.Class.UNIVERSAL,
      e.Type.GENERALIZEDTIME,
      !1,
      e.dateToGeneralizedTime(c)
    );
  }
  return a.getTBSCertificate = function(c) {
    var i = R(c.validity.notBefore), n = R(c.validity.notAfter), T = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // version
      e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
        // integer
        e.create(
          e.Class.UNIVERSAL,
          e.Type.INTEGER,
          !1,
          e.integerToDer(c.version).getBytes()
        )
      ]),
      // serialNumber
      e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        t.util.hexToBytes(c.serialNumber)
      ),
      // signature
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(c.siginfo.algorithmOid).getBytes()
        ),
        // parameters
        s(
          c.siginfo.algorithmOid,
          c.siginfo.parameters
        )
      ]),
      // issuer
      y(c.issuer),
      // validity
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        i,
        n
      ]),
      // subject
      y(c.subject),
      // SubjectPublicKeyInfo
      a.publicKeyToAsn1(c.publicKey)
    ]);
    return c.issuer.uniqueId && T.value.push(
      e.create(e.Class.CONTEXT_SPECIFIC, 1, !0, [
        e.create(
          e.Class.UNIVERSAL,
          e.Type.BITSTRING,
          !1,
          // TODO: support arbitrary bit length ids
          "\0" + c.issuer.uniqueId
        )
      ])
    ), c.subject.uniqueId && T.value.push(
      e.create(e.Class.CONTEXT_SPECIFIC, 2, !0, [
        e.create(
          e.Class.UNIVERSAL,
          e.Type.BITSTRING,
          !1,
          // TODO: support arbitrary bit length ids
          "\0" + c.subject.uniqueId
        )
      ])
    ), c.extensions.length > 0 && T.value.push(a.certificateExtensionsToAsn1(c.extensions)), T;
  }, a.getCertificationRequestInfo = function(c) {
    var i = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // version
      e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        e.integerToDer(c.version).getBytes()
      ),
      // subject
      y(c.subject),
      // SubjectPublicKeyInfo
      a.publicKeyToAsn1(c.publicKey),
      // attributes
      h(c)
    ]);
    return i;
  }, a.distinguishedNameToAsn1 = function(c) {
    return y(c);
  }, a.certificateToAsn1 = function(c) {
    var i = c.tbsCertificate || a.getTBSCertificate(c);
    return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // TBSCertificate
      i,
      // AlgorithmIdentifier (signature algorithm)
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(c.signatureOid).getBytes()
        ),
        // parameters
        s(c.signatureOid, c.signatureParameters)
      ]),
      // SignatureValue
      e.create(
        e.Class.UNIVERSAL,
        e.Type.BITSTRING,
        !1,
        "\0" + c.signature
      )
    ]);
  }, a.certificateExtensionsToAsn1 = function(c) {
    var i = e.create(e.Class.CONTEXT_SPECIFIC, 3, !0, []), n = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, []);
    i.value.push(n);
    for (var T = 0; T < c.length; ++T)
      n.value.push(a.certificateExtensionToAsn1(c[T]));
    return i;
  }, a.certificateExtensionToAsn1 = function(c) {
    var i = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, []);
    i.value.push(e.create(
      e.Class.UNIVERSAL,
      e.Type.OID,
      !1,
      e.oidToDer(c.id).getBytes()
    )), c.critical && i.value.push(e.create(
      e.Class.UNIVERSAL,
      e.Type.BOOLEAN,
      !1,
      "ÿ"
    ));
    var n = c.value;
    return typeof c.value != "string" && (n = e.toDer(n).getBytes()), i.value.push(e.create(
      e.Class.UNIVERSAL,
      e.Type.OCTETSTRING,
      !1,
      n
    )), i;
  }, a.certificationRequestToAsn1 = function(c) {
    var i = c.certificationRequestInfo || a.getCertificationRequestInfo(c);
    return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // CertificationRequestInfo
      i,
      // AlgorithmIdentifier (signature algorithm)
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(c.signatureOid).getBytes()
        ),
        // parameters
        s(c.signatureOid, c.signatureParameters)
      ]),
      // signature
      e.create(
        e.Class.UNIVERSAL,
        e.Type.BITSTRING,
        !1,
        "\0" + c.signature
      )
    ]);
  }, a.createCaStore = function(c) {
    var i = {
      // stored certificates
      certs: {}
    };
    i.getIssuer = function(D) {
      var M = n(D.issuer);
      return M;
    }, i.addCertificate = function(D) {
      if (typeof D == "string" && (D = t.pki.certificateFromPem(D)), T(D.subject), !i.hasCertificate(D))
        if (D.subject.hash in i.certs) {
          var M = i.certs[D.subject.hash];
          t.util.isArray(M) || (M = [M]), M.push(D), i.certs[D.subject.hash] = M;
        } else
          i.certs[D.subject.hash] = D;
    }, i.hasCertificate = function(D) {
      typeof D == "string" && (D = t.pki.certificateFromPem(D));
      var M = n(D.subject);
      if (!M)
        return !1;
      t.util.isArray(M) || (M = [M]);
      for (var x = e.toDer(a.certificateToAsn1(D)).getBytes(), G = 0; G < M.length; ++G) {
        var z = e.toDer(a.certificateToAsn1(M[G])).getBytes();
        if (x === z)
          return !0;
      }
      return !1;
    }, i.listAllCertificates = function() {
      var D = [];
      for (var M in i.certs)
        if (i.certs.hasOwnProperty(M)) {
          var x = i.certs[M];
          if (!t.util.isArray(x))
            D.push(x);
          else
            for (var G = 0; G < x.length; ++G)
              D.push(x[G]);
        }
      return D;
    }, i.removeCertificate = function(D) {
      var M;
      if (typeof D == "string" && (D = t.pki.certificateFromPem(D)), T(D.subject), !i.hasCertificate(D))
        return null;
      var x = n(D.subject);
      if (!t.util.isArray(x))
        return M = i.certs[D.subject.hash], delete i.certs[D.subject.hash], M;
      for (var G = e.toDer(a.certificateToAsn1(D)).getBytes(), z = 0; z < x.length; ++z) {
        var Y = e.toDer(a.certificateToAsn1(x[z])).getBytes();
        G === Y && (M = x[z], x.splice(z, 1));
      }
      return x.length === 0 && delete i.certs[D.subject.hash], M;
    };
    function n(D) {
      return T(D), i.certs[D.hash] || null;
    }
    function T(D) {
      if (!D.hash) {
        var M = t.md.sha1.create();
        D.attributes = a.RDNAttributesAsArray(y(D), M), D.hash = M.digest().toHex();
      }
    }
    if (c)
      for (var V = 0; V < c.length; ++V) {
        var O = c[V];
        i.addCertificate(O);
      }
    return i;
  }, a.certificateError = {
    bad_certificate: "forge.pki.BadCertificate",
    unsupported_certificate: "forge.pki.UnsupportedCertificate",
    certificate_revoked: "forge.pki.CertificateRevoked",
    certificate_expired: "forge.pki.CertificateExpired",
    certificate_unknown: "forge.pki.CertificateUnknown",
    unknown_ca: "forge.pki.UnknownCertificateAuthority"
  }, a.verifyCertificateChain = function(c, i, n) {
    typeof n == "function" && (n = { verify: n }), n = n || {}, i = i.slice(0);
    var T = i.slice(0), V = n.validityCheckDate;
    typeof V > "u" && (V = /* @__PURE__ */ new Date());
    var O = !0, D = null, M = 0;
    do {
      var x = i.shift(), G = null, z = !1;
      if (V && (V < x.validity.notBefore || V > x.validity.notAfter) && (D = {
        message: "Certificate is not valid yet or has expired.",
        error: a.certificateError.certificate_expired,
        notBefore: x.validity.notBefore,
        notAfter: x.validity.notAfter,
        // TODO: we might want to reconsider renaming 'now' to
        // 'validityCheckDate' should this API be changed in the future.
        now: V
      }), D === null) {
        if (G = i[0] || c.getIssuer(x), G === null && x.isIssuer(x) && (z = !0, G = x), G) {
          var Y = G;
          t.util.isArray(Y) || (Y = [Y]);
          for (var Z = !1; !Z && Y.length > 0; ) {
            G = Y.shift();
            try {
              Z = G.verify(x);
            } catch {
            }
          }
          Z || (D = {
            message: "Certificate signature is invalid.",
            error: a.certificateError.bad_certificate
          });
        }
        D === null && (!G || z) && !c.hasCertificate(x) && (D = {
          message: "Certificate is not trusted.",
          error: a.certificateError.unknown_ca
        });
      }
      if (D === null && G && !x.isIssuer(G) && (D = {
        message: "Certificate issuer is invalid.",
        error: a.certificateError.bad_certificate
      }), D === null)
        for (var te = {
          keyUsage: !0,
          basicConstraints: !0
        }, ue = 0; D === null && ue < x.extensions.length; ++ue) {
          var he = x.extensions[ue];
          he.critical && !(he.name in te) && (D = {
            message: "Certificate has an unsupported critical extension.",
            error: a.certificateError.unsupported_certificate
          });
        }
      if (D === null && (!O || i.length === 0 && (!G || z))) {
        var Ce = x.getExtension("basicConstraints"), Ie = x.getExtension("keyUsage");
        if (Ie !== null && (!Ie.keyCertSign || Ce === null) && (D = {
          message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
          error: a.certificateError.bad_certificate
        }), D === null && Ce !== null && !Ce.cA && (D = {
          message: "Certificate basicConstraints indicates the certificate is not a CA.",
          error: a.certificateError.bad_certificate
        }), D === null && Ie !== null && "pathLenConstraint" in Ce) {
          var _ = M - 1;
          _ > Ce.pathLenConstraint && (D = {
            message: "Certificate basicConstraints pathLenConstraint violated.",
            error: a.certificateError.bad_certificate
          });
        }
      }
      var $ = D === null ? !0 : D.error, X = n.verify ? n.verify($, M, T) : $;
      if (X === !0)
        D = null;
      else
        throw $ === !0 && (D = {
          message: "The application rejected the certificate.",
          error: a.certificateError.bad_certificate
        }), (X || X === 0) && (typeof X == "object" && !t.util.isArray(X) ? (X.message && (D.message = X.message), X.error && (D.error = X.error)) : typeof X == "string" && (D.error = X)), D;
      O = !1, ++M;
    } while (i.length > 0);
    return !0;
  }, wr.exports;
}
var Ua;
function un() {
  if (Ua) return kr.exports;
  Ua = 1;
  var t = ve();
  yt(), Gt(), wt(), on(), sn(), ht(), er(), jt(), Se(), Xr();
  var e = t.asn1, a = t.pki, p = kr.exports = t.pkcs12 = t.pkcs12 || {}, I = {
    name: "ContentInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    // a ContentInfo
    constructed: !0,
    value: [{
      name: "ContentInfo.contentType",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "contentType"
    }, {
      name: "ContentInfo.content",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      constructed: !0,
      captureAsn1: "content"
    }]
  }, S = {
    name: "PFX",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "PFX.version",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.INTEGER,
        constructed: !1,
        capture: "version"
      },
      I,
      {
        name: "PFX.macData",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        optional: !0,
        captureAsn1: "mac",
        value: [{
          name: "PFX.macData.mac",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.SEQUENCE,
          // DigestInfo
          constructed: !0,
          value: [{
            name: "PFX.macData.mac.digestAlgorithm",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SEQUENCE,
            // DigestAlgorithmIdentifier
            constructed: !0,
            value: [{
              name: "PFX.macData.mac.digestAlgorithm.algorithm",
              tagClass: e.Class.UNIVERSAL,
              type: e.Type.OID,
              constructed: !1,
              capture: "macAlgorithm"
            }, {
              name: "PFX.macData.mac.digestAlgorithm.parameters",
              tagClass: e.Class.UNIVERSAL,
              captureAsn1: "macAlgorithmParameters"
            }]
          }, {
            name: "PFX.macData.mac.digest",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.OCTETSTRING,
            constructed: !1,
            capture: "macDigest"
          }]
        }, {
          name: "PFX.macData.macSalt",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.OCTETSTRING,
          constructed: !1,
          capture: "macSalt"
        }, {
          name: "PFX.macData.iterations",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.INTEGER,
          constructed: !1,
          optional: !0,
          capture: "macIterations"
        }]
      }
    ]
  }, f = {
    name: "SafeBag",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "SafeBag.bagId",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "bagId"
    }, {
      name: "SafeBag.bagValue",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      constructed: !0,
      captureAsn1: "bagValue"
    }, {
      name: "SafeBag.bagAttributes",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SET,
      constructed: !0,
      optional: !0,
      capture: "bagAttributes"
    }]
  }, r = {
    name: "Attribute",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "Attribute.attrId",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "oid"
    }, {
      name: "Attribute.attrValues",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SET,
      constructed: !0,
      capture: "values"
    }]
  }, g = {
    name: "CertBag",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      name: "CertBag.certId",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OID,
      constructed: !1,
      capture: "certId"
    }, {
      name: "CertBag.certValue",
      tagClass: e.Class.CONTEXT_SPECIFIC,
      constructed: !0,
      /* So far we only support X.509 certificates (which are wrapped in
         an OCTET STRING, hence hard code that here). */
      value: [{
        name: "CertBag.certValue[0]",
        tagClass: e.Class.UNIVERSAL,
        type: e.Class.OCTETSTRING,
        constructed: !1,
        capture: "cert"
      }]
    }]
  };
  function l(C, m, s, h) {
    for (var v = [], B = 0; B < C.length; B++)
      for (var R = 0; R < C[B].safeBags.length; R++) {
        var c = C[B].safeBags[R];
        if (!(h !== void 0 && c.type !== h)) {
          if (m === null) {
            v.push(c);
            continue;
          }
          c.attributes[m] !== void 0 && c.attributes[m].indexOf(s) >= 0 && v.push(c);
        }
      }
    return v;
  }
  p.pkcs12FromAsn1 = function(C, m, s) {
    typeof m == "string" ? (s = m, m = !0) : m === void 0 && (m = !0);
    var h = {}, v = [];
    if (!e.validate(C, S, h, v)) {
      var B = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
      throw B.errors = B, B;
    }
    var R = {
      version: h.version.charCodeAt(0),
      safeContents: [],
      /**
       * Gets bags with matching attributes.
       *
       * @param filter the attributes to filter by:
       *          [localKeyId] the localKeyId to search for.
       *          [localKeyIdHex] the localKeyId in hex to search for.
       *          [friendlyName] the friendly name to search for.
       *          [bagType] bag type to narrow each attribute search by.
       *
       * @return a map of attribute type to an array of matching bags or, if no
       *           attribute was given but a bag type, the map key will be the
       *           bag type.
       */
      getBags: function(G) {
        var z = {}, Y;
        return "localKeyId" in G ? Y = G.localKeyId : "localKeyIdHex" in G && (Y = t.util.hexToBytes(G.localKeyIdHex)), Y === void 0 && !("friendlyName" in G) && "bagType" in G && (z[G.bagType] = l(
          R.safeContents,
          null,
          null,
          G.bagType
        )), Y !== void 0 && (z.localKeyId = l(
          R.safeContents,
          "localKeyId",
          Y,
          G.bagType
        )), "friendlyName" in G && (z.friendlyName = l(
          R.safeContents,
          "friendlyName",
          G.friendlyName,
          G.bagType
        )), z;
      },
      /**
       * DEPRECATED: use getBags() instead.
       *
       * Get bags with matching friendlyName attribute.
       *
       * @param friendlyName the friendly name to search for.
       * @param [bagType] bag type to narrow search by.
       *
       * @return an array of bags with matching friendlyName attribute.
       */
      getBagsByFriendlyName: function(G, z) {
        return l(
          R.safeContents,
          "friendlyName",
          G,
          z
        );
      },
      /**
       * DEPRECATED: use getBags() instead.
       *
       * Get bags with matching localKeyId attribute.
       *
       * @param localKeyId the localKeyId to search for.
       * @param [bagType] bag type to narrow search by.
       *
       * @return an array of bags with matching localKeyId attribute.
       */
      getBagsByLocalKeyId: function(G, z) {
        return l(
          R.safeContents,
          "localKeyId",
          G,
          z
        );
      }
    };
    if (h.version.charCodeAt(0) !== 3) {
      var B = new Error("PKCS#12 PFX of version other than 3 not supported.");
      throw B.version = h.version.charCodeAt(0), B;
    }
    if (e.derToOid(h.contentType) !== a.oids.data) {
      var B = new Error("Only PKCS#12 PFX in password integrity mode supported.");
      throw B.oid = e.derToOid(h.contentType), B;
    }
    var c = h.content.value[0];
    if (c.tagClass !== e.Class.UNIVERSAL || c.type !== e.Type.OCTETSTRING)
      throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
    if (c = b(c), h.mac) {
      var i = null, n = 0, T = e.derToOid(h.macAlgorithm);
      switch (T) {
        case a.oids.sha1:
          i = t.md.sha1.create(), n = 20;
          break;
        case a.oids.sha256:
          i = t.md.sha256.create(), n = 32;
          break;
        case a.oids.sha384:
          i = t.md.sha384.create(), n = 48;
          break;
        case a.oids.sha512:
          i = t.md.sha512.create(), n = 64;
          break;
        case a.oids.md5:
          i = t.md.md5.create(), n = 16;
          break;
      }
      if (i === null)
        throw new Error("PKCS#12 uses unsupported MAC algorithm: " + T);
      var V = new t.util.ByteBuffer(h.macSalt), O = "macIterations" in h ? parseInt(t.util.bytesToHex(h.macIterations), 16) : 1, D = p.generateKey(
        s,
        V,
        3,
        O,
        n,
        i
      ), M = t.hmac.create();
      M.start(i, D), M.update(c.value);
      var x = M.getMac();
      if (x.getBytes() !== h.macDigest)
        throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
    }
    return U(R, c.value, m, s), R;
  };
  function b(C) {
    if (C.composed || C.constructed) {
      for (var m = t.util.createBuffer(), s = 0; s < C.value.length; ++s)
        m.putBytes(C.value[s].value);
      C.composed = C.constructed = !1, C.value = m.getBytes();
    }
    return C;
  }
  function U(C, m, s, h) {
    if (m = e.fromDer(m, s), m.tagClass !== e.Class.UNIVERSAL || m.type !== e.Type.SEQUENCE || m.constructed !== !0)
      throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
    for (var v = 0; v < m.value.length; v++) {
      var B = m.value[v], R = {}, c = [];
      if (!e.validate(B, I, R, c)) {
        var i = new Error("Cannot read ContentInfo.");
        throw i.errors = c, i;
      }
      var n = {
        encrypted: !1
      }, T = null, V = R.content.value[0];
      switch (e.derToOid(R.contentType)) {
        case a.oids.data:
          if (V.tagClass !== e.Class.UNIVERSAL || V.type !== e.Type.OCTETSTRING)
            throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
          T = b(V).value;
          break;
        case a.oids.encryptedData:
          T = E(V, h), n.encrypted = !0;
          break;
        default:
          var i = new Error("Unsupported PKCS#12 contentType.");
          throw i.contentType = e.derToOid(R.contentType), i;
      }
      n.safeBags = u(T, s, h), C.safeContents.push(n);
    }
  }
  function E(C, m) {
    var s = {}, h = [];
    if (!e.validate(
      C,
      t.pkcs7.asn1.encryptedDataValidator,
      s,
      h
    )) {
      var v = new Error("Cannot read EncryptedContentInfo.");
      throw v.errors = h, v;
    }
    var B = e.derToOid(s.contentType);
    if (B !== a.oids.data) {
      var v = new Error(
        "PKCS#12 EncryptedContentInfo ContentType is not Data."
      );
      throw v.oid = B, v;
    }
    B = e.derToOid(s.encAlgorithm);
    var R = a.pbe.getCipher(B, s.encParameter, m), c = b(s.encryptedContentAsn1), i = t.util.createBuffer(c.value);
    if (R.update(i), !R.finish())
      throw new Error("Failed to decrypt PKCS#12 SafeContents.");
    return R.output.getBytes();
  }
  function u(C, m, s) {
    if (!m && C.length === 0)
      return [];
    if (C = e.fromDer(C, m), C.tagClass !== e.Class.UNIVERSAL || C.type !== e.Type.SEQUENCE || C.constructed !== !0)
      throw new Error(
        "PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag."
      );
    for (var h = [], v = 0; v < C.value.length; v++) {
      var B = C.value[v], R = {}, c = [];
      if (!e.validate(B, f, R, c)) {
        var i = new Error("Cannot read SafeBag.");
        throw i.errors = c, i;
      }
      var n = {
        type: e.derToOid(R.bagId),
        attributes: y(R.bagAttributes)
      };
      h.push(n);
      var T, V, O = R.bagValue.value[0];
      switch (n.type) {
        case a.oids.pkcs8ShroudedKeyBag:
          if (O = a.decryptPrivateKeyInfo(O, s), O === null)
            throw new Error(
              "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?"
            );
        /* fall through */
        case a.oids.keyBag:
          try {
            n.key = a.privateKeyFromAsn1(O);
          } catch {
            n.key = null, n.asn1 = O;
          }
          continue;
        /* Nothing more to do. */
        case a.oids.certBag:
          T = g, V = function() {
            if (e.derToOid(R.certId) !== a.oids.x509Certificate) {
              var M = new Error(
                "Unsupported certificate type, only X.509 supported."
              );
              throw M.oid = e.derToOid(R.certId), M;
            }
            var x = e.fromDer(R.cert, m);
            try {
              n.cert = a.certificateFromAsn1(x, !0);
            } catch {
              n.cert = null, n.asn1 = x;
            }
          };
          break;
        default:
          var i = new Error("Unsupported PKCS#12 SafeBag type.");
          throw i.oid = n.type, i;
      }
      if (T !== void 0 && !e.validate(O, T, R, c)) {
        var i = new Error("Cannot read PKCS#12 " + T.name);
        throw i.errors = c, i;
      }
      V();
    }
    return h;
  }
  function y(C) {
    var m = {};
    if (C !== void 0)
      for (var s = 0; s < C.length; ++s) {
        var h = {}, v = [];
        if (!e.validate(C[s], r, h, v)) {
          var B = new Error("Cannot read PKCS#12 BagAttribute.");
          throw B.errors = v, B;
        }
        var R = e.derToOid(h.oid);
        if (a.oids[R] !== void 0) {
          m[a.oids[R]] = [];
          for (var c = 0; c < h.values.length; ++c)
            m[a.oids[R]].push(h.values[c].value);
        }
      }
    return m;
  }
  return p.toPkcs12Asn1 = function(C, m, s, h) {
    h = h || {}, h.saltSize = h.saltSize || 8, h.count = h.count || 2048, h.algorithm = h.algorithm || h.encAlgorithm || "aes128", "useMac" in h || (h.useMac = !0), "localKeyId" in h || (h.localKeyId = null), "generateLocalKeyId" in h || (h.generateLocalKeyId = !0);
    var v = h.localKeyId, B;
    if (v !== null)
      v = t.util.hexToBytes(v);
    else if (h.generateLocalKeyId)
      if (m) {
        var R = t.util.isArray(m) ? m[0] : m;
        typeof R == "string" && (R = a.certificateFromPem(R));
        var c = t.md.sha1.create();
        c.update(e.toDer(a.certificateToAsn1(R)).getBytes()), v = c.digest().getBytes();
      } else
        v = t.random.getBytes(20);
    var i = [];
    v !== null && i.push(
      // localKeyID
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // attrId
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(a.oids.localKeyId).getBytes()
        ),
        // attrValues
        e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OCTETSTRING,
            !1,
            v
          )
        ])
      ])
    ), "friendlyName" in h && i.push(
      // friendlyName
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // attrId
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(a.oids.friendlyName).getBytes()
        ),
        // attrValues
        e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [
          e.create(
            e.Class.UNIVERSAL,
            e.Type.BMPSTRING,
            !1,
            h.friendlyName
          )
        ])
      ])
    ), i.length > 0 && (B = e.create(e.Class.UNIVERSAL, e.Type.SET, !0, i));
    var n = [], T = [];
    m !== null && (t.util.isArray(m) ? T = m : T = [m]);
    for (var V = [], O = 0; O < T.length; ++O) {
      m = T[O], typeof m == "string" && (m = a.certificateFromPem(m));
      var D = O === 0 ? B : void 0, M = a.certificateToAsn1(m), x = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // bagId
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(a.oids.certBag).getBytes()
        ),
        // bagValue
        e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          // CertBag
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            // certId
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(a.oids.x509Certificate).getBytes()
            ),
            // certValue (x509Certificate)
            e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
              e.create(
                e.Class.UNIVERSAL,
                e.Type.OCTETSTRING,
                !1,
                e.toDer(M).getBytes()
              )
            ])
          ])
        ]),
        // bagAttributes (OPTIONAL)
        D
      ]);
      V.push(x);
    }
    if (V.length > 0) {
      var G = e.create(
        e.Class.UNIVERSAL,
        e.Type.SEQUENCE,
        !0,
        V
      ), z = (
        // PKCS#7 ContentInfo
        e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          // contentType
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OID,
            !1,
            // OID for the content type is 'data'
            e.oidToDer(a.oids.data).getBytes()
          ),
          // content
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OCTETSTRING,
              !1,
              e.toDer(G).getBytes()
            )
          ])
        ])
      );
      n.push(z);
    }
    var Y = null;
    if (C !== null) {
      var Z = a.wrapRsaPrivateKey(a.privateKeyToAsn1(C));
      s === null ? Y = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // bagId
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(a.oids.keyBag).getBytes()
        ),
        // bagValue
        e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          // PrivateKeyInfo
          Z
        ]),
        // bagAttributes (OPTIONAL)
        B
      ]) : Y = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // bagId
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(a.oids.pkcs8ShroudedKeyBag).getBytes()
        ),
        // bagValue
        e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          // EncryptedPrivateKeyInfo
          a.encryptPrivateKeyInfo(Z, s, h)
        ]),
        // bagAttributes (OPTIONAL)
        B
      ]);
      var te = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [Y]), ue = (
        // PKCS#7 ContentInfo
        e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          // contentType
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OID,
            !1,
            // OID for the content type is 'data'
            e.oidToDer(a.oids.data).getBytes()
          ),
          // content
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OCTETSTRING,
              !1,
              e.toDer(te).getBytes()
            )
          ])
        ])
      );
      n.push(ue);
    }
    var he = e.create(
      e.Class.UNIVERSAL,
      e.Type.SEQUENCE,
      !0,
      n
    ), Ce;
    if (h.useMac) {
      var c = t.md.sha1.create(), Ie = new t.util.ByteBuffer(
        t.random.getBytes(h.saltSize)
      ), _ = h.count, C = p.generateKey(s, Ie, 3, _, 20), $ = t.hmac.create();
      $.start(c, C), $.update(e.toDer(he).getBytes());
      var X = $.getMac();
      Ce = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // mac DigestInfo
        e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          // digestAlgorithm
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            // algorithm = SHA-1
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(a.oids.sha1).getBytes()
            ),
            // parameters = Null
            e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
          ]),
          // digest
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OCTETSTRING,
            !1,
            X.getBytes()
          )
        ]),
        // macSalt OCTET STRING
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OCTETSTRING,
          !1,
          Ie.getBytes()
        ),
        // iterations INTEGER (XXX: Only support count < 65536)
        e.create(
          e.Class.UNIVERSAL,
          e.Type.INTEGER,
          !1,
          e.integerToDer(_).getBytes()
        )
      ]);
    }
    return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // version (3)
      e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        e.integerToDer(3).getBytes()
      ),
      // PKCS#7 ContentInfo
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // contentType
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          // OID for the content type is 'data'
          e.oidToDer(a.oids.data).getBytes()
        ),
        // content
        e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OCTETSTRING,
            !1,
            e.toDer(he).getBytes()
          )
        ])
      ]),
      Ce
    ]);
  }, p.generateKey = t.pbe.generatePkcs12Key, kr.exports;
}
var Da;
function cn() {
  if (Da) return yr.exports;
  Da = 1;
  var t = ve();
  yt(), wt(), sn(), Ot(), Yr(), un(), Wr(), er(), Se(), Xr();
  var e = t.asn1, a = yr.exports = t.pki = t.pki || {};
  return a.pemToDer = function(p) {
    var I = t.pem.decode(p)[0];
    if (I.procType && I.procType.type === "ENCRYPTED")
      throw new Error("Could not convert PEM to DER; PEM is encrypted.");
    return t.util.createBuffer(I.body);
  }, a.privateKeyFromPem = function(p) {
    var I = t.pem.decode(p)[0];
    if (I.type !== "PRIVATE KEY" && I.type !== "RSA PRIVATE KEY") {
      var S = new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
      throw S.headerType = I.type, S;
    }
    if (I.procType && I.procType.type === "ENCRYPTED")
      throw new Error("Could not convert private key from PEM; PEM is encrypted.");
    var f = e.fromDer(I.body);
    return a.privateKeyFromAsn1(f);
  }, a.privateKeyToPem = function(p, I) {
    var S = {
      type: "RSA PRIVATE KEY",
      body: e.toDer(a.privateKeyToAsn1(p)).getBytes()
    };
    return t.pem.encode(S, { maxline: I });
  }, a.privateKeyInfoToPem = function(p, I) {
    var S = {
      type: "PRIVATE KEY",
      body: e.toDer(p).getBytes()
    };
    return t.pem.encode(S, { maxline: I });
  }, yr.exports;
}
var Dr, Va;
function fn() {
  if (Va) return Dr;
  Va = 1;
  var t = ve();
  yt(), Gt(), Jr(), Ot(), cn(), ht(), jt(), Se();
  var e = function(d, L, w, o) {
    var k = t.util.createBuffer(), F = d.length >> 1, K = F + (d.length & 1), Q = d.substr(0, K), se = d.substr(F, K), le = t.util.createBuffer(), q = t.hmac.create();
    w = L + w;
    var ie = Math.ceil(o / 16), fe = Math.ceil(o / 20);
    q.start("MD5", Q);
    var Ee = t.util.createBuffer();
    le.putBytes(w);
    for (var ge = 0; ge < ie; ++ge)
      q.start(null, null), q.update(le.getBytes()), le.putBuffer(q.digest()), q.start(null, null), q.update(le.bytes() + w), Ee.putBuffer(q.digest());
    q.start("SHA1", se);
    var ke = t.util.createBuffer();
    le.clear(), le.putBytes(w);
    for (var ge = 0; ge < fe; ++ge)
      q.start(null, null), q.update(le.getBytes()), le.putBuffer(q.digest()), q.start(null, null), q.update(le.bytes() + w), ke.putBuffer(q.digest());
    return k.putBytes(t.util.xorBytes(
      Ee.getBytes(),
      ke.getBytes(),
      o
    )), k;
  }, a = function(d, L, w) {
    var o = t.hmac.create();
    o.start("SHA1", d);
    var k = t.util.createBuffer();
    return k.putInt32(L[0]), k.putInt32(L[1]), k.putByte(w.type), k.putByte(w.version.major), k.putByte(w.version.minor), k.putInt16(w.length), k.putBytes(w.fragment.bytes()), o.update(k.getBytes()), o.digest().getBytes();
  }, p = function(d, L, w) {
    var o = !1;
    try {
      var k = d.deflate(L.fragment.getBytes());
      L.fragment = t.util.createBuffer(k), L.length = k.length, o = !0;
    } catch {
    }
    return o;
  }, I = function(d, L, w) {
    var o = !1;
    try {
      var k = d.inflate(L.fragment.getBytes());
      L.fragment = t.util.createBuffer(k), L.length = k.length, o = !0;
    } catch {
    }
    return o;
  }, S = function(d, L) {
    var w = 0;
    switch (L) {
      case 1:
        w = d.getByte();
        break;
      case 2:
        w = d.getInt16();
        break;
      case 3:
        w = d.getInt24();
        break;
      case 4:
        w = d.getInt32();
        break;
    }
    return t.util.createBuffer(d.getBytes(w));
  }, f = function(d, L, w) {
    d.putInt(w.length(), L << 3), d.putBuffer(w);
  }, r = {};
  r.Versions = {
    TLS_1_0: { major: 3, minor: 1 },
    TLS_1_1: { major: 3, minor: 2 },
    TLS_1_2: { major: 3, minor: 3 }
  }, r.SupportedVersions = [
    r.Versions.TLS_1_1,
    r.Versions.TLS_1_0
  ], r.Version = r.SupportedVersions[0], r.MaxFragment = 15360, r.ConnectionEnd = {
    server: 0,
    client: 1
  }, r.PRFAlgorithm = {
    tls_prf_sha256: 0
  }, r.BulkCipherAlgorithm = {
    none: null,
    rc4: 0,
    des3: 1,
    aes: 2
  }, r.CipherType = {
    stream: 0,
    block: 1,
    aead: 2
  }, r.MACAlgorithm = {
    none: null,
    hmac_md5: 0,
    hmac_sha1: 1,
    hmac_sha256: 2,
    hmac_sha384: 3,
    hmac_sha512: 4
  }, r.CompressionMethod = {
    none: 0,
    deflate: 1
  }, r.ContentType = {
    change_cipher_spec: 20,
    alert: 21,
    handshake: 22,
    application_data: 23,
    heartbeat: 24
  }, r.HandshakeType = {
    hello_request: 0,
    client_hello: 1,
    server_hello: 2,
    certificate: 11,
    server_key_exchange: 12,
    certificate_request: 13,
    server_hello_done: 14,
    certificate_verify: 15,
    client_key_exchange: 16,
    finished: 20
  }, r.Alert = {}, r.Alert.Level = {
    warning: 1,
    fatal: 2
  }, r.Alert.Description = {
    close_notify: 0,
    unexpected_message: 10,
    bad_record_mac: 20,
    decryption_failed: 21,
    record_overflow: 22,
    decompression_failure: 30,
    handshake_failure: 40,
    bad_certificate: 42,
    unsupported_certificate: 43,
    certificate_revoked: 44,
    certificate_expired: 45,
    certificate_unknown: 46,
    illegal_parameter: 47,
    unknown_ca: 48,
    access_denied: 49,
    decode_error: 50,
    decrypt_error: 51,
    export_restriction: 60,
    protocol_version: 70,
    insufficient_security: 71,
    internal_error: 80,
    user_canceled: 90,
    no_renegotiation: 100
  }, r.HeartbeatMessageType = {
    heartbeat_request: 1,
    heartbeat_response: 2
  }, r.CipherSuites = {}, r.getCipherSuite = function(d) {
    var L = null;
    for (var w in r.CipherSuites) {
      var o = r.CipherSuites[w];
      if (o.id[0] === d.charCodeAt(0) && o.id[1] === d.charCodeAt(1)) {
        L = o;
        break;
      }
    }
    return L;
  }, r.handleUnexpected = function(d, L) {
    var w = !d.open && d.entity === r.ConnectionEnd.client;
    w || d.error(d, {
      message: "Unexpected message. Received TLS record out of order.",
      send: !0,
      alert: {
        level: r.Alert.Level.fatal,
        description: r.Alert.Description.unexpected_message
      }
    });
  }, r.handleHelloRequest = function(d, L, w) {
    !d.handshaking && d.handshakes > 0 && (r.queue(d, r.createAlert(d, {
      level: r.Alert.Level.warning,
      description: r.Alert.Description.no_renegotiation
    })), r.flush(d)), d.process();
  }, r.parseHelloMessage = function(d, L, w) {
    var o = null, k = d.entity === r.ConnectionEnd.client;
    if (w < 38)
      d.error(d, {
        message: k ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.illegal_parameter
        }
      });
    else {
      var F = L.fragment, K = F.length();
      if (o = {
        version: {
          major: F.getByte(),
          minor: F.getByte()
        },
        random: t.util.createBuffer(F.getBytes(32)),
        session_id: S(F, 1),
        extensions: []
      }, k ? (o.cipher_suite = F.getBytes(2), o.compression_method = F.getByte()) : (o.cipher_suites = S(F, 2), o.compression_methods = S(F, 1)), K = w - (K - F.length()), K > 0) {
        for (var Q = S(F, 2); Q.length() > 0; )
          o.extensions.push({
            type: [Q.getByte(), Q.getByte()],
            data: S(Q, 2)
          });
        if (!k)
          for (var se = 0; se < o.extensions.length; ++se) {
            var le = o.extensions[se];
            if (le.type[0] === 0 && le.type[1] === 0)
              for (var q = S(le.data, 2); q.length() > 0; ) {
                var ie = q.getByte();
                if (ie !== 0)
                  break;
                d.session.extensions.server_name.serverNameList.push(
                  S(q, 2).getBytes()
                );
              }
          }
      }
      if (d.session.version && (o.version.major !== d.session.version.major || o.version.minor !== d.session.version.minor))
        return d.error(d, {
          message: "TLS version change is disallowed during renegotiation.",
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.protocol_version
          }
        });
      if (k)
        d.session.cipherSuite = r.getCipherSuite(o.cipher_suite);
      else
        for (var fe = t.util.createBuffer(o.cipher_suites.bytes()); fe.length() > 0 && (d.session.cipherSuite = r.getCipherSuite(fe.getBytes(2)), d.session.cipherSuite === null); )
          ;
      if (d.session.cipherSuite === null)
        return d.error(d, {
          message: "No cipher suites in common.",
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.handshake_failure
          },
          cipherSuite: t.util.bytesToHex(o.cipher_suite)
        });
      k ? d.session.compressionMethod = o.compression_method : d.session.compressionMethod = r.CompressionMethod.none;
    }
    return o;
  }, r.createSecurityParameters = function(d, L) {
    var w = d.entity === r.ConnectionEnd.client, o = L.random.bytes(), k = w ? d.session.sp.client_random : o, F = w ? o : r.createRandom().getBytes();
    d.session.sp = {
      entity: d.entity,
      prf_algorithm: r.PRFAlgorithm.tls_prf_sha256,
      bulk_cipher_algorithm: null,
      cipher_type: null,
      enc_key_length: null,
      block_length: null,
      fixed_iv_length: null,
      record_iv_length: null,
      mac_algorithm: null,
      mac_length: null,
      mac_key_length: null,
      compression_algorithm: d.session.compressionMethod,
      pre_master_secret: null,
      master_secret: null,
      client_random: k,
      server_random: F
    };
  }, r.handleServerHello = function(d, L, w) {
    var o = r.parseHelloMessage(d, L, w);
    if (!d.fail) {
      if (o.version.minor <= d.version.minor)
        d.version.minor = o.version.minor;
      else
        return d.error(d, {
          message: "Incompatible TLS version.",
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.protocol_version
          }
        });
      d.session.version = d.version;
      var k = o.session_id.bytes();
      k.length > 0 && k === d.session.id ? (d.expect = u, d.session.resuming = !0, d.session.sp.server_random = o.random.bytes()) : (d.expect = l, d.session.resuming = !1, r.createSecurityParameters(d, o)), d.session.id = k, d.process();
    }
  }, r.handleClientHello = function(d, L, w) {
    var o = r.parseHelloMessage(d, L, w);
    if (!d.fail) {
      var k = o.session_id.bytes(), F = null;
      if (d.sessionCache && (F = d.sessionCache.getSession(k), F === null ? k = "" : (F.version.major !== o.version.major || F.version.minor > o.version.minor) && (F = null, k = "")), k.length === 0 && (k = t.random.getBytes(32)), d.session.id = k, d.session.clientHelloVersion = o.version, d.session.sp = {}, F)
        d.version = d.session.version = F.version, d.session.sp = F.sp;
      else {
        for (var K, Q = 1; Q < r.SupportedVersions.length && (K = r.SupportedVersions[Q], !(K.minor <= o.version.minor)); ++Q)
          ;
        d.version = { major: K.major, minor: K.minor }, d.session.version = d.version;
      }
      F !== null ? (d.expect = R, d.session.resuming = !0, d.session.sp.client_random = o.random.bytes()) : (d.expect = d.verifyClient !== !1 ? h : v, d.session.resuming = !1, r.createSecurityParameters(d, o)), d.open = !0, r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createServerHello(d)
      })), d.session.resuming ? (r.queue(d, r.createRecord(d, {
        type: r.ContentType.change_cipher_spec,
        data: r.createChangeCipherSpec()
      })), d.state.pending = r.createConnectionState(d), d.state.current.write = d.state.pending.write, r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createFinished(d)
      }))) : (r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createCertificate(d)
      })), d.fail || (r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createServerKeyExchange(d)
      })), d.verifyClient !== !1 && r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createCertificateRequest(d)
      })), r.queue(d, r.createRecord(d, {
        type: r.ContentType.handshake,
        data: r.createServerHelloDone(d)
      })))), r.flush(d), d.process();
    }
  }, r.handleCertificate = function(d, L, w) {
    if (w < 3)
      return d.error(d, {
        message: "Invalid Certificate message. Message too short.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.illegal_parameter
        }
      });
    var o = L.fragment, k = {
      certificate_list: S(o, 3)
    }, F, K, Q = [];
    try {
      for (; k.certificate_list.length() > 0; )
        F = S(k.certificate_list, 3), K = t.asn1.fromDer(F), F = t.pki.certificateFromAsn1(K, !0), Q.push(F);
    } catch (le) {
      return d.error(d, {
        message: "Could not parse certificate list.",
        cause: le,
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.bad_certificate
        }
      });
    }
    var se = d.entity === r.ConnectionEnd.client;
    (se || d.verifyClient === !0) && Q.length === 0 ? d.error(d, {
      message: se ? "No server certificate provided." : "No client certificate provided.",
      send: !0,
      alert: {
        level: r.Alert.Level.fatal,
        description: r.Alert.Description.illegal_parameter
      }
    }) : Q.length === 0 ? d.expect = se ? b : v : (se ? d.session.serverCertificate = Q[0] : d.session.clientCertificate = Q[0], r.verifyCertificateChain(d, Q) && (d.expect = se ? b : v)), d.process();
  }, r.handleServerKeyExchange = function(d, L, w) {
    if (w > 0)
      return d.error(d, {
        message: "Invalid key parameters. Only RSA is supported.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.unsupported_certificate
        }
      });
    d.expect = U, d.process();
  }, r.handleClientKeyExchange = function(d, L, w) {
    if (w < 48)
      return d.error(d, {
        message: "Invalid key parameters. Only RSA is supported.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.unsupported_certificate
        }
      });
    var o = L.fragment, k = {
      enc_pre_master_secret: S(o, 2).getBytes()
    }, F = null;
    if (d.getPrivateKey)
      try {
        F = d.getPrivateKey(d, d.session.serverCertificate), F = t.pki.privateKeyFromPem(F);
      } catch (se) {
        d.error(d, {
          message: "Could not get private key.",
          cause: se,
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.internal_error
          }
        });
      }
    if (F === null)
      return d.error(d, {
        message: "No private key set.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.internal_error
        }
      });
    try {
      var K = d.session.sp;
      K.pre_master_secret = F.decrypt(k.enc_pre_master_secret);
      var Q = d.session.clientHelloVersion;
      if (Q.major !== K.pre_master_secret.charCodeAt(0) || Q.minor !== K.pre_master_secret.charCodeAt(1))
        throw new Error("TLS version rollback attack detected.");
    } catch {
      K.pre_master_secret = t.random.getBytes(48);
    }
    d.expect = R, d.session.clientCertificate !== null && (d.expect = B), d.process();
  }, r.handleCertificateRequest = function(d, L, w) {
    if (w < 3)
      return d.error(d, {
        message: "Invalid CertificateRequest. Message too short.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.illegal_parameter
        }
      });
    var o = L.fragment, k = {
      certificate_types: S(o, 1),
      certificate_authorities: S(o, 2)
    };
    d.session.certificateRequest = k, d.expect = E, d.process();
  }, r.handleCertificateVerify = function(d, L, w) {
    if (w < 2)
      return d.error(d, {
        message: "Invalid CertificateVerify. Message too short.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.illegal_parameter
        }
      });
    var o = L.fragment;
    o.read -= 4;
    var k = o.bytes();
    o.read += 4;
    var F = {
      signature: S(o, 2).getBytes()
    }, K = t.util.createBuffer();
    K.putBuffer(d.session.md5.digest()), K.putBuffer(d.session.sha1.digest()), K = K.getBytes();
    try {
      var Q = d.session.clientCertificate;
      if (!Q.publicKey.verify(K, F.signature, "NONE"))
        throw new Error("CertificateVerify signature does not match.");
      d.session.md5.update(k), d.session.sha1.update(k);
    } catch {
      return d.error(d, {
        message: "Bad signature in CertificateVerify.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.handshake_failure
        }
      });
    }
    d.expect = R, d.process();
  }, r.handleServerHelloDone = function(d, L, w) {
    if (w > 0)
      return d.error(d, {
        message: "Invalid ServerHelloDone message. Invalid length.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.record_overflow
        }
      });
    if (d.serverCertificate === null) {
      var o = {
        message: "No server certificate provided. Not enough security.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.insufficient_security
        }
      }, k = 0, F = d.verify(d, o.alert.description, k, []);
      if (F !== !0)
        return (F || F === 0) && (typeof F == "object" && !t.util.isArray(F) ? (F.message && (o.message = F.message), F.alert && (o.alert.description = F.alert)) : typeof F == "number" && (o.alert.description = F)), d.error(d, o);
    }
    d.session.certificateRequest !== null && (L = r.createRecord(d, {
      type: r.ContentType.handshake,
      data: r.createCertificate(d)
    }), r.queue(d, L)), L = r.createRecord(d, {
      type: r.ContentType.handshake,
      data: r.createClientKeyExchange(d)
    }), r.queue(d, L), d.expect = m;
    var K = function(Q, se) {
      Q.session.certificateRequest !== null && Q.session.clientCertificate !== null && r.queue(Q, r.createRecord(Q, {
        type: r.ContentType.handshake,
        data: r.createCertificateVerify(Q, se)
      })), r.queue(Q, r.createRecord(Q, {
        type: r.ContentType.change_cipher_spec,
        data: r.createChangeCipherSpec()
      })), Q.state.pending = r.createConnectionState(Q), Q.state.current.write = Q.state.pending.write, r.queue(Q, r.createRecord(Q, {
        type: r.ContentType.handshake,
        data: r.createFinished(Q)
      })), Q.expect = u, r.flush(Q), Q.process();
    };
    if (d.session.certificateRequest === null || d.session.clientCertificate === null)
      return K(d, null);
    r.getClientSignature(d, K);
  }, r.handleChangeCipherSpec = function(d, L) {
    if (L.fragment.getByte() !== 1)
      return d.error(d, {
        message: "Invalid ChangeCipherSpec message received.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.illegal_parameter
        }
      });
    var w = d.entity === r.ConnectionEnd.client;
    (d.session.resuming && w || !d.session.resuming && !w) && (d.state.pending = r.createConnectionState(d)), d.state.current.read = d.state.pending.read, (!d.session.resuming && w || d.session.resuming && !w) && (d.state.pending = null), d.expect = w ? y : c, d.process();
  }, r.handleFinished = function(d, L, w) {
    var o = L.fragment;
    o.read -= 4;
    var k = o.bytes();
    o.read += 4;
    var F = L.fragment.getBytes();
    o = t.util.createBuffer(), o.putBuffer(d.session.md5.digest()), o.putBuffer(d.session.sha1.digest());
    var K = d.entity === r.ConnectionEnd.client, Q = K ? "server finished" : "client finished", se = d.session.sp, le = 12, q = e;
    if (o = q(se.master_secret, Q, o.getBytes(), le), o.getBytes() !== F)
      return d.error(d, {
        message: "Invalid verify_data in Finished message.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.decrypt_error
        }
      });
    d.session.md5.update(k), d.session.sha1.update(k), (d.session.resuming && K || !d.session.resuming && !K) && (r.queue(d, r.createRecord(d, {
      type: r.ContentType.change_cipher_spec,
      data: r.createChangeCipherSpec()
    })), d.state.current.write = d.state.pending.write, d.state.pending = null, r.queue(d, r.createRecord(d, {
      type: r.ContentType.handshake,
      data: r.createFinished(d)
    }))), d.expect = K ? C : i, d.handshaking = !1, ++d.handshakes, d.peerCertificate = K ? d.session.serverCertificate : d.session.clientCertificate, r.flush(d), d.isConnected = !0, d.connected(d), d.process();
  }, r.handleAlert = function(d, L) {
    var w = L.fragment, o = {
      level: w.getByte(),
      description: w.getByte()
    }, k;
    switch (o.description) {
      case r.Alert.Description.close_notify:
        k = "Connection closed.";
        break;
      case r.Alert.Description.unexpected_message:
        k = "Unexpected message.";
        break;
      case r.Alert.Description.bad_record_mac:
        k = "Bad record MAC.";
        break;
      case r.Alert.Description.decryption_failed:
        k = "Decryption failed.";
        break;
      case r.Alert.Description.record_overflow:
        k = "Record overflow.";
        break;
      case r.Alert.Description.decompression_failure:
        k = "Decompression failed.";
        break;
      case r.Alert.Description.handshake_failure:
        k = "Handshake failure.";
        break;
      case r.Alert.Description.bad_certificate:
        k = "Bad certificate.";
        break;
      case r.Alert.Description.unsupported_certificate:
        k = "Unsupported certificate.";
        break;
      case r.Alert.Description.certificate_revoked:
        k = "Certificate revoked.";
        break;
      case r.Alert.Description.certificate_expired:
        k = "Certificate expired.";
        break;
      case r.Alert.Description.certificate_unknown:
        k = "Certificate unknown.";
        break;
      case r.Alert.Description.illegal_parameter:
        k = "Illegal parameter.";
        break;
      case r.Alert.Description.unknown_ca:
        k = "Unknown certificate authority.";
        break;
      case r.Alert.Description.access_denied:
        k = "Access denied.";
        break;
      case r.Alert.Description.decode_error:
        k = "Decode error.";
        break;
      case r.Alert.Description.decrypt_error:
        k = "Decrypt error.";
        break;
      case r.Alert.Description.export_restriction:
        k = "Export restriction.";
        break;
      case r.Alert.Description.protocol_version:
        k = "Unsupported protocol version.";
        break;
      case r.Alert.Description.insufficient_security:
        k = "Insufficient security.";
        break;
      case r.Alert.Description.internal_error:
        k = "Internal error.";
        break;
      case r.Alert.Description.user_canceled:
        k = "User canceled.";
        break;
      case r.Alert.Description.no_renegotiation:
        k = "Renegotiation not supported.";
        break;
      default:
        k = "Unknown error.";
        break;
    }
    if (o.description === r.Alert.Description.close_notify)
      return d.close();
    d.error(d, {
      message: k,
      send: !1,
      // origin is the opposite end
      origin: d.entity === r.ConnectionEnd.client ? "server" : "client",
      alert: o
    }), d.process();
  }, r.handleHandshake = function(d, L) {
    var w = L.fragment, o = w.getByte(), k = w.getInt24();
    if (k > w.length())
      return d.fragmented = L, L.fragment = t.util.createBuffer(), w.read -= 4, d.process();
    d.fragmented = null, w.read -= 4;
    var F = w.bytes(k + 4);
    w.read += 4, o in Ce[d.entity][d.expect] ? (d.entity === r.ConnectionEnd.server && !d.open && !d.fail && (d.handshaking = !0, d.session = {
      version: null,
      extensions: {
        server_name: {
          serverNameList: []
        }
      },
      cipherSuite: null,
      compressionMethod: null,
      serverCertificate: null,
      clientCertificate: null,
      md5: t.md.md5.create(),
      sha1: t.md.sha1.create()
    }), o !== r.HandshakeType.hello_request && o !== r.HandshakeType.certificate_verify && o !== r.HandshakeType.finished && (d.session.md5.update(F), d.session.sha1.update(F)), Ce[d.entity][d.expect][o](d, L, k)) : r.handleUnexpected(d, L);
  }, r.handleApplicationData = function(d, L) {
    d.data.putBuffer(L.fragment), d.dataReady(d), d.process();
  }, r.handleHeartbeat = function(d, L) {
    var w = L.fragment, o = w.getByte(), k = w.getInt16(), F = w.getBytes(k);
    if (o === r.HeartbeatMessageType.heartbeat_request) {
      if (d.handshaking || k > F.length)
        return d.process();
      r.queue(d, r.createRecord(d, {
        type: r.ContentType.heartbeat,
        data: r.createHeartbeat(
          r.HeartbeatMessageType.heartbeat_response,
          F
        )
      })), r.flush(d);
    } else if (o === r.HeartbeatMessageType.heartbeat_response) {
      if (F !== d.expectedHeartbeatPayload)
        return d.process();
      d.heartbeatReceived && d.heartbeatReceived(d, t.util.createBuffer(F));
    }
    d.process();
  };
  var g = 0, l = 1, b = 2, U = 3, E = 4, u = 5, y = 6, C = 7, m = 8, s = 0, h = 1, v = 2, B = 3, R = 4, c = 5, i = 6, n = r.handleUnexpected, T = r.handleChangeCipherSpec, V = r.handleAlert, O = r.handleHandshake, D = r.handleApplicationData, M = r.handleHeartbeat, x = [];
  x[r.ConnectionEnd.client] = [
    //      CC,AL,HS,AD,HB
    /*SHE*/
    [n, V, O, n, M],
    /*SCE*/
    [n, V, O, n, M],
    /*SKE*/
    [n, V, O, n, M],
    /*SCR*/
    [n, V, O, n, M],
    /*SHD*/
    [n, V, O, n, M],
    /*SCC*/
    [T, V, n, n, M],
    /*SFI*/
    [n, V, O, n, M],
    /*SAD*/
    [n, V, O, D, M],
    /*SER*/
    [n, V, O, n, M]
  ], x[r.ConnectionEnd.server] = [
    //      CC,AL,HS,AD
    /*CHE*/
    [n, V, O, n, M],
    /*CCE*/
    [n, V, O, n, M],
    /*CKE*/
    [n, V, O, n, M],
    /*CCV*/
    [n, V, O, n, M],
    /*CCC*/
    [T, V, n, n, M],
    /*CFI*/
    [n, V, O, n, M],
    /*CAD*/
    [n, V, O, D, M],
    /*CER*/
    [n, V, O, n, M]
  ];
  var G = r.handleHelloRequest, z = r.handleServerHello, Y = r.handleCertificate, Z = r.handleServerKeyExchange, te = r.handleCertificateRequest, ue = r.handleServerHelloDone, he = r.handleFinished, Ce = [];
  Ce[r.ConnectionEnd.client] = [
    //      HR,01,SH,03,04,05,06,07,08,09,10,SC,SK,CR,HD,15,CK,17,18,19,FI
    /*SHE*/
    [n, n, z, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*SCE*/
    [G, n, n, n, n, n, n, n, n, n, n, Y, Z, te, ue, n, n, n, n, n, n],
    /*SKE*/
    [G, n, n, n, n, n, n, n, n, n, n, n, Z, te, ue, n, n, n, n, n, n],
    /*SCR*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, te, ue, n, n, n, n, n, n],
    /*SHD*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, n, ue, n, n, n, n, n, n],
    /*SCC*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*SFI*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, he],
    /*SAD*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*SER*/
    [G, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n]
  ];
  var Ie = r.handleClientHello, _ = r.handleClientKeyExchange, $ = r.handleCertificateVerify;
  Ce[r.ConnectionEnd.server] = [
    //      01,CH,02,03,04,05,06,07,08,09,10,CC,12,13,14,CV,CK,17,18,19,FI
    /*CHE*/
    [n, Ie, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*CCE*/
    [n, n, n, n, n, n, n, n, n, n, n, Y, n, n, n, n, n, n, n, n, n],
    /*CKE*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, _, n, n, n, n],
    /*CCV*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, $, n, n, n, n, n],
    /*CCC*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*CFI*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, he],
    /*CAD*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
    /*CER*/
    [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n]
  ], r.generateKeys = function(d, L) {
    var w = e, o = L.client_random + L.server_random;
    d.session.resuming || (L.master_secret = w(
      L.pre_master_secret,
      "master secret",
      o,
      48
    ).bytes(), L.pre_master_secret = null), o = L.server_random + L.client_random;
    var k = 2 * L.mac_key_length + 2 * L.enc_key_length, F = d.version.major === r.Versions.TLS_1_0.major && d.version.minor === r.Versions.TLS_1_0.minor;
    F && (k += 2 * L.fixed_iv_length);
    var K = w(L.master_secret, "key expansion", o, k), Q = {
      client_write_MAC_key: K.getBytes(L.mac_key_length),
      server_write_MAC_key: K.getBytes(L.mac_key_length),
      client_write_key: K.getBytes(L.enc_key_length),
      server_write_key: K.getBytes(L.enc_key_length)
    };
    return F && (Q.client_write_IV = K.getBytes(L.fixed_iv_length), Q.server_write_IV = K.getBytes(L.fixed_iv_length)), Q;
  }, r.createConnectionState = function(d) {
    var L = d.entity === r.ConnectionEnd.client, w = function() {
      var F = {
        // two 32-bit numbers, first is most significant
        sequenceNumber: [0, 0],
        macKey: null,
        macLength: 0,
        macFunction: null,
        cipherState: null,
        cipherFunction: function(K) {
          return !0;
        },
        compressionState: null,
        compressFunction: function(K) {
          return !0;
        },
        updateSequenceNumber: function() {
          F.sequenceNumber[1] === 4294967295 ? (F.sequenceNumber[1] = 0, ++F.sequenceNumber[0]) : ++F.sequenceNumber[1];
        }
      };
      return F;
    }, o = {
      read: w(),
      write: w()
    };
    if (o.read.update = function(F, K) {
      return o.read.cipherFunction(K, o.read) ? o.read.compressFunction(F, K, o.read) || F.error(F, {
        message: "Could not decompress record.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.decompression_failure
        }
      }) : F.error(F, {
        message: "Could not decrypt record or bad MAC.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          // doesn't matter if decryption failed or MAC was
          // invalid, return the same error so as not to reveal
          // which one occurred
          description: r.Alert.Description.bad_record_mac
        }
      }), !F.fail;
    }, o.write.update = function(F, K) {
      return o.write.compressFunction(F, K, o.write) ? o.write.cipherFunction(K, o.write) || F.error(F, {
        message: "Could not encrypt record.",
        send: !1,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.internal_error
        }
      }) : F.error(F, {
        message: "Could not compress record.",
        send: !1,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.internal_error
        }
      }), !F.fail;
    }, d.session) {
      var k = d.session.sp;
      switch (d.session.cipherSuite.initSecurityParameters(k), k.keys = r.generateKeys(d, k), o.read.macKey = L ? k.keys.server_write_MAC_key : k.keys.client_write_MAC_key, o.write.macKey = L ? k.keys.client_write_MAC_key : k.keys.server_write_MAC_key, d.session.cipherSuite.initConnectionState(o, d, k), k.compression_algorithm) {
        case r.CompressionMethod.none:
          break;
        case r.CompressionMethod.deflate:
          o.read.compressFunction = I, o.write.compressFunction = p;
          break;
        default:
          throw new Error("Unsupported compression algorithm.");
      }
    }
    return o;
  }, r.createRandom = function() {
    var d = /* @__PURE__ */ new Date(), L = +d + d.getTimezoneOffset() * 6e4, w = t.util.createBuffer();
    return w.putInt32(L), w.putBytes(t.random.getBytes(28)), w;
  }, r.createRecord = function(d, L) {
    if (!L.data)
      return null;
    var w = {
      type: L.type,
      version: {
        major: d.version.major,
        minor: d.version.minor
      },
      length: L.data.length(),
      fragment: L.data
    };
    return w;
  }, r.createAlert = function(d, L) {
    var w = t.util.createBuffer();
    return w.putByte(L.level), w.putByte(L.description), r.createRecord(d, {
      type: r.ContentType.alert,
      data: w
    });
  }, r.createClientHello = function(d) {
    d.session.clientHelloVersion = {
      major: d.version.major,
      minor: d.version.minor
    };
    for (var L = t.util.createBuffer(), w = 0; w < d.cipherSuites.length; ++w) {
      var o = d.cipherSuites[w];
      L.putByte(o.id[0]), L.putByte(o.id[1]);
    }
    var k = L.length(), F = t.util.createBuffer();
    F.putByte(r.CompressionMethod.none);
    var K = F.length(), Q = t.util.createBuffer();
    if (d.virtualHost) {
      var se = t.util.createBuffer();
      se.putByte(0), se.putByte(0);
      var le = t.util.createBuffer();
      le.putByte(0), f(le, 2, t.util.createBuffer(d.virtualHost));
      var q = t.util.createBuffer();
      f(q, 2, le), f(se, 2, q), Q.putBuffer(se);
    }
    var ie = Q.length();
    ie > 0 && (ie += 2);
    var fe = d.session.id, Ee = fe.length + 1 + // session ID vector
    2 + // version (major + minor)
    4 + 28 + // random time and random bytes
    2 + k + // cipher suites vector
    1 + K + // compression methods vector
    ie, ge = t.util.createBuffer();
    return ge.putByte(r.HandshakeType.client_hello), ge.putInt24(Ee), ge.putByte(d.version.major), ge.putByte(d.version.minor), ge.putBytes(d.session.sp.client_random), f(ge, 1, t.util.createBuffer(fe)), f(ge, 2, L), f(ge, 1, F), ie > 0 && f(ge, 2, Q), ge;
  }, r.createServerHello = function(d) {
    var L = d.session.id, w = L.length + 1 + // session ID vector
    2 + // version (major + minor)
    4 + 28 + // random time and random bytes
    2 + // chosen cipher suite
    1, o = t.util.createBuffer();
    return o.putByte(r.HandshakeType.server_hello), o.putInt24(w), o.putByte(d.version.major), o.putByte(d.version.minor), o.putBytes(d.session.sp.server_random), f(o, 1, t.util.createBuffer(L)), o.putByte(d.session.cipherSuite.id[0]), o.putByte(d.session.cipherSuite.id[1]), o.putByte(d.session.compressionMethod), o;
  }, r.createCertificate = function(d) {
    var L = d.entity === r.ConnectionEnd.client, w = null;
    if (d.getCertificate) {
      var o;
      L ? o = d.session.certificateRequest : o = d.session.extensions.server_name.serverNameList, w = d.getCertificate(d, o);
    }
    var k = t.util.createBuffer();
    if (w !== null)
      try {
        t.util.isArray(w) || (w = [w]);
        for (var F = null, K = 0; K < w.length; ++K) {
          var Q = t.pem.decode(w[K])[0];
          if (Q.type !== "CERTIFICATE" && Q.type !== "X509 CERTIFICATE" && Q.type !== "TRUSTED CERTIFICATE") {
            var se = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
            throw se.headerType = Q.type, se;
          }
          if (Q.procType && Q.procType.type === "ENCRYPTED")
            throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
          var le = t.util.createBuffer(Q.body);
          F === null && (F = t.asn1.fromDer(le.bytes(), !1));
          var q = t.util.createBuffer();
          f(q, 3, le), k.putBuffer(q);
        }
        w = t.pki.certificateFromAsn1(F), L ? d.session.clientCertificate = w : d.session.serverCertificate = w;
      } catch (Ee) {
        return d.error(d, {
          message: "Could not send certificate list.",
          cause: Ee,
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.bad_certificate
          }
        });
      }
    var ie = 3 + k.length(), fe = t.util.createBuffer();
    return fe.putByte(r.HandshakeType.certificate), fe.putInt24(ie), f(fe, 3, k), fe;
  }, r.createClientKeyExchange = function(d) {
    var L = t.util.createBuffer();
    L.putByte(d.session.clientHelloVersion.major), L.putByte(d.session.clientHelloVersion.minor), L.putBytes(t.random.getBytes(46));
    var w = d.session.sp;
    w.pre_master_secret = L.getBytes();
    var o = d.session.serverCertificate.publicKey;
    L = o.encrypt(w.pre_master_secret);
    var k = L.length + 2, F = t.util.createBuffer();
    return F.putByte(r.HandshakeType.client_key_exchange), F.putInt24(k), F.putInt16(L.length), F.putBytes(L), F;
  }, r.createServerKeyExchange = function(d) {
    var L = t.util.createBuffer();
    return L;
  }, r.getClientSignature = function(d, L) {
    var w = t.util.createBuffer();
    w.putBuffer(d.session.md5.digest()), w.putBuffer(d.session.sha1.digest()), w = w.getBytes(), d.getSignature = d.getSignature || function(o, k, F) {
      var K = null;
      if (o.getPrivateKey)
        try {
          K = o.getPrivateKey(o, o.session.clientCertificate), K = t.pki.privateKeyFromPem(K);
        } catch (Q) {
          o.error(o, {
            message: "Could not get private key.",
            cause: Q,
            send: !0,
            alert: {
              level: r.Alert.Level.fatal,
              description: r.Alert.Description.internal_error
            }
          });
        }
      K === null ? o.error(o, {
        message: "No private key set.",
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: r.Alert.Description.internal_error
        }
      }) : k = K.sign(k, null), F(o, k);
    }, d.getSignature(d, w, L);
  }, r.createCertificateVerify = function(d, L) {
    var w = L.length + 2, o = t.util.createBuffer();
    return o.putByte(r.HandshakeType.certificate_verify), o.putInt24(w), o.putInt16(L.length), o.putBytes(L), o;
  }, r.createCertificateRequest = function(d) {
    var L = t.util.createBuffer();
    L.putByte(1);
    var w = t.util.createBuffer();
    for (var o in d.caStore.certs) {
      var k = d.caStore.certs[o], F = t.pki.distinguishedNameToAsn1(k.subject), K = t.asn1.toDer(F);
      w.putInt16(K.length()), w.putBuffer(K);
    }
    var Q = 1 + L.length() + 2 + w.length(), se = t.util.createBuffer();
    return se.putByte(r.HandshakeType.certificate_request), se.putInt24(Q), f(se, 1, L), f(se, 2, w), se;
  }, r.createServerHelloDone = function(d) {
    var L = t.util.createBuffer();
    return L.putByte(r.HandshakeType.server_hello_done), L.putInt24(0), L;
  }, r.createChangeCipherSpec = function() {
    var d = t.util.createBuffer();
    return d.putByte(1), d;
  }, r.createFinished = function(d) {
    var L = t.util.createBuffer();
    L.putBuffer(d.session.md5.digest()), L.putBuffer(d.session.sha1.digest());
    var w = d.entity === r.ConnectionEnd.client, o = d.session.sp, k = 12, F = e, K = w ? "client finished" : "server finished";
    L = F(o.master_secret, K, L.getBytes(), k);
    var Q = t.util.createBuffer();
    return Q.putByte(r.HandshakeType.finished), Q.putInt24(L.length()), Q.putBuffer(L), Q;
  }, r.createHeartbeat = function(d, L, w) {
    typeof w > "u" && (w = L.length);
    var o = t.util.createBuffer();
    o.putByte(d), o.putInt16(w), o.putBytes(L);
    var k = o.length(), F = Math.max(16, k - w - 3);
    return o.putBytes(t.random.getBytes(F)), o;
  }, r.queue = function(d, L) {
    if (L && !(L.fragment.length() === 0 && (L.type === r.ContentType.handshake || L.type === r.ContentType.alert || L.type === r.ContentType.change_cipher_spec))) {
      if (L.type === r.ContentType.handshake) {
        var w = L.fragment.bytes();
        d.session.md5.update(w), d.session.sha1.update(w), w = null;
      }
      var o;
      if (L.fragment.length() <= r.MaxFragment)
        o = [L];
      else {
        o = [];
        for (var k = L.fragment.bytes(); k.length > r.MaxFragment; )
          o.push(r.createRecord(d, {
            type: L.type,
            data: t.util.createBuffer(k.slice(0, r.MaxFragment))
          })), k = k.slice(r.MaxFragment);
        k.length > 0 && o.push(r.createRecord(d, {
          type: L.type,
          data: t.util.createBuffer(k)
        }));
      }
      for (var F = 0; F < o.length && !d.fail; ++F) {
        var K = o[F], Q = d.state.current.write;
        Q.update(d, K) && d.records.push(K);
      }
    }
  }, r.flush = function(d) {
    for (var L = 0; L < d.records.length; ++L) {
      var w = d.records[L];
      d.tlsData.putByte(w.type), d.tlsData.putByte(w.version.major), d.tlsData.putByte(w.version.minor), d.tlsData.putInt16(w.fragment.length()), d.tlsData.putBuffer(d.records[L].fragment);
    }
    return d.records = [], d.tlsDataReady(d);
  };
  var X = function(d) {
    switch (d) {
      case !0:
        return !0;
      case t.pki.certificateError.bad_certificate:
        return r.Alert.Description.bad_certificate;
      case t.pki.certificateError.unsupported_certificate:
        return r.Alert.Description.unsupported_certificate;
      case t.pki.certificateError.certificate_revoked:
        return r.Alert.Description.certificate_revoked;
      case t.pki.certificateError.certificate_expired:
        return r.Alert.Description.certificate_expired;
      case t.pki.certificateError.certificate_unknown:
        return r.Alert.Description.certificate_unknown;
      case t.pki.certificateError.unknown_ca:
        return r.Alert.Description.unknown_ca;
      default:
        return r.Alert.Description.bad_certificate;
    }
  }, Oe = function(d) {
    switch (d) {
      case !0:
        return !0;
      case r.Alert.Description.bad_certificate:
        return t.pki.certificateError.bad_certificate;
      case r.Alert.Description.unsupported_certificate:
        return t.pki.certificateError.unsupported_certificate;
      case r.Alert.Description.certificate_revoked:
        return t.pki.certificateError.certificate_revoked;
      case r.Alert.Description.certificate_expired:
        return t.pki.certificateError.certificate_expired;
      case r.Alert.Description.certificate_unknown:
        return t.pki.certificateError.certificate_unknown;
      case r.Alert.Description.unknown_ca:
        return t.pki.certificateError.unknown_ca;
      default:
        return t.pki.certificateError.bad_certificate;
    }
  };
  r.verifyCertificateChain = function(d, L) {
    try {
      var w = {};
      for (var o in d.verifyOptions)
        w[o] = d.verifyOptions[o];
      w.verify = function(F, K, Q) {
        var se = X(F), le = d.verify(d, F, K, Q);
        if (le !== !0) {
          if (typeof le == "object" && !t.util.isArray(le)) {
            var q = new Error("The application rejected the certificate.");
            throw q.send = !0, q.alert = {
              level: r.Alert.Level.fatal,
              description: r.Alert.Description.bad_certificate
            }, le.message && (q.message = le.message), le.alert && (q.alert.description = le.alert), q;
          }
          le !== F && (le = Oe(le));
        }
        return le;
      }, t.pki.verifyCertificateChain(d.caStore, L, w);
    } catch (F) {
      var k = F;
      (typeof k != "object" || t.util.isArray(k)) && (k = {
        send: !0,
        alert: {
          level: r.Alert.Level.fatal,
          description: X(F)
        }
      }), "send" in k || (k.send = !0), "alert" in k || (k.alert = {
        level: r.Alert.Level.fatal,
        description: X(k.error)
      }), d.error(d, k);
    }
    return !d.fail;
  }, r.createSessionCache = function(d, L) {
    var w = null;
    if (d && d.getSession && d.setSession && d.order)
      w = d;
    else {
      w = {}, w.cache = d || {}, w.capacity = Math.max(L || 100, 1), w.order = [];
      for (var o in d)
        w.order.length <= L ? w.order.push(o) : delete d[o];
      w.getSession = function(k) {
        var F = null, K = null;
        if (k ? K = t.util.bytesToHex(k) : w.order.length > 0 && (K = w.order[0]), K !== null && K in w.cache) {
          F = w.cache[K], delete w.cache[K];
          for (var Q in w.order)
            if (w.order[Q] === K) {
              w.order.splice(Q, 1);
              break;
            }
        }
        return F;
      }, w.setSession = function(k, F) {
        if (w.order.length === w.capacity) {
          var K = w.order.shift();
          delete w.cache[K];
        }
        var K = t.util.bytesToHex(k);
        w.order.push(K), w.cache[K] = F;
      };
    }
    return w;
  }, r.createConnection = function(d) {
    var L = null;
    d.caStore ? t.util.isArray(d.caStore) ? L = t.pki.createCaStore(d.caStore) : L = d.caStore : L = t.pki.createCaStore();
    var w = d.cipherSuites || null;
    if (w === null) {
      w = [];
      for (var o in r.CipherSuites)
        w.push(r.CipherSuites[o]);
    }
    var k = d.server ? r.ConnectionEnd.server : r.ConnectionEnd.client, F = d.sessionCache ? r.createSessionCache(d.sessionCache) : null, K = {
      version: { major: r.Version.major, minor: r.Version.minor },
      entity: k,
      sessionId: d.sessionId,
      caStore: L,
      sessionCache: F,
      cipherSuites: w,
      connected: d.connected,
      virtualHost: d.virtualHost || null,
      verifyClient: d.verifyClient || !1,
      verify: d.verify || function(q, ie, fe, Ee) {
        return ie;
      },
      verifyOptions: d.verifyOptions || {},
      getCertificate: d.getCertificate || null,
      getPrivateKey: d.getPrivateKey || null,
      getSignature: d.getSignature || null,
      input: t.util.createBuffer(),
      tlsData: t.util.createBuffer(),
      data: t.util.createBuffer(),
      tlsDataReady: d.tlsDataReady,
      dataReady: d.dataReady,
      heartbeatReceived: d.heartbeatReceived,
      closed: d.closed,
      error: function(q, ie) {
        ie.origin = ie.origin || (q.entity === r.ConnectionEnd.client ? "client" : "server"), ie.send && (r.queue(q, r.createAlert(q, ie.alert)), r.flush(q));
        var fe = ie.fatal !== !1;
        fe && (q.fail = !0), d.error(q, ie), fe && q.close(!1);
      },
      deflate: d.deflate || null,
      inflate: d.inflate || null
    };
    K.reset = function(q) {
      K.version = { major: r.Version.major, minor: r.Version.minor }, K.record = null, K.session = null, K.peerCertificate = null, K.state = {
        pending: null,
        current: null
      }, K.expect = K.entity === r.ConnectionEnd.client ? g : s, K.fragmented = null, K.records = [], K.open = !1, K.handshakes = 0, K.handshaking = !1, K.isConnected = !1, K.fail = !(q || typeof q > "u"), K.input.clear(), K.tlsData.clear(), K.data.clear(), K.state.current = r.createConnectionState(K);
    }, K.reset();
    var Q = function(q, ie) {
      var fe = ie.type - r.ContentType.change_cipher_spec, Ee = x[q.entity][q.expect];
      fe in Ee ? Ee[fe](q, ie) : r.handleUnexpected(q, ie);
    }, se = function(q) {
      var ie = 0, fe = q.input, Ee = fe.length();
      if (Ee < 5)
        ie = 5 - Ee;
      else {
        q.record = {
          type: fe.getByte(),
          version: {
            major: fe.getByte(),
            minor: fe.getByte()
          },
          length: fe.getInt16(),
          fragment: t.util.createBuffer(),
          ready: !1
        };
        var ge = q.record.version.major === q.version.major;
        ge && q.session && q.session.version && (ge = q.record.version.minor === q.version.minor), ge || q.error(q, {
          message: "Incompatible TLS version.",
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.protocol_version
          }
        });
      }
      return ie;
    }, le = function(q) {
      var ie = 0, fe = q.input, Ee = fe.length();
      if (Ee < q.record.length)
        ie = q.record.length - Ee;
      else {
        q.record.fragment.putBytes(fe.getBytes(q.record.length)), fe.compact();
        var ge = q.state.current.read;
        ge.update(q, q.record) && (q.fragmented !== null && (q.fragmented.type === q.record.type ? (q.fragmented.fragment.putBuffer(q.record.fragment), q.record = q.fragmented) : q.error(q, {
          message: "Invalid fragmented record.",
          send: !0,
          alert: {
            level: r.Alert.Level.fatal,
            description: r.Alert.Description.unexpected_message
          }
        })), q.record.ready = !0);
      }
      return ie;
    };
    return K.handshake = function(q) {
      if (K.entity !== r.ConnectionEnd.client)
        K.error(K, {
          message: "Cannot initiate handshake as a server.",
          fatal: !1
        });
      else if (K.handshaking)
        K.error(K, {
          message: "Handshake already in progress.",
          fatal: !1
        });
      else {
        K.fail && !K.open && K.handshakes === 0 && (K.fail = !1), K.handshaking = !0, q = q || "";
        var ie = null;
        q.length > 0 && (K.sessionCache && (ie = K.sessionCache.getSession(q)), ie === null && (q = "")), q.length === 0 && K.sessionCache && (ie = K.sessionCache.getSession(), ie !== null && (q = ie.id)), K.session = {
          id: q,
          version: null,
          cipherSuite: null,
          compressionMethod: null,
          serverCertificate: null,
          certificateRequest: null,
          clientCertificate: null,
          sp: {},
          md5: t.md.md5.create(),
          sha1: t.md.sha1.create()
        }, ie && (K.version = ie.version, K.session.sp = ie.sp), K.session.sp.client_random = r.createRandom().getBytes(), K.open = !0, r.queue(K, r.createRecord(K, {
          type: r.ContentType.handshake,
          data: r.createClientHello(K)
        })), r.flush(K);
      }
    }, K.process = function(q) {
      var ie = 0;
      return q && K.input.putBytes(q), K.fail || (K.record !== null && K.record.ready && K.record.fragment.isEmpty() && (K.record = null), K.record === null && (ie = se(K)), !K.fail && K.record !== null && !K.record.ready && (ie = le(K)), !K.fail && K.record !== null && K.record.ready && Q(K, K.record)), ie;
    }, K.prepare = function(q) {
      return r.queue(K, r.createRecord(K, {
        type: r.ContentType.application_data,
        data: t.util.createBuffer(q)
      })), r.flush(K);
    }, K.prepareHeartbeatRequest = function(q, ie) {
      return q instanceof t.util.ByteBuffer && (q = q.bytes()), typeof ie > "u" && (ie = q.length), K.expectedHeartbeatPayload = q, r.queue(K, r.createRecord(K, {
        type: r.ContentType.heartbeat,
        data: r.createHeartbeat(
          r.HeartbeatMessageType.heartbeat_request,
          q,
          ie
        )
      })), r.flush(K);
    }, K.close = function(q) {
      if (!K.fail && K.sessionCache && K.session) {
        var ie = {
          id: K.session.id,
          version: K.session.version,
          sp: K.session.sp
        };
        ie.sp.keys = null, K.sessionCache.setSession(ie.id, ie);
      }
      K.open && (K.open = !1, K.input.clear(), (K.isConnected || K.handshaking) && (K.isConnected = K.handshaking = !1, r.queue(K, r.createAlert(K, {
        level: r.Alert.Level.warning,
        description: r.Alert.Description.close_notify
      })), r.flush(K)), K.closed(K)), K.reset(q);
    }, K;
  }, Dr = t.tls = t.tls || {};
  for (var pe in r)
    typeof r[pe] != "function" && (t.tls[pe] = r[pe]);
  return t.tls.prf_tls1 = e, t.tls.hmac_sha1 = a, t.tls.createSessionCache = r.createSessionCache, t.tls.createConnection = r.createConnection, Dr;
}
var Pa;
function ds() {
  if (Pa) return ur.exports;
  Pa = 1;
  var t = ve();
  Nt(), fn();
  var e = ur.exports = t.tls;
  e.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
    id: [0, 47],
    name: "TLS_RSA_WITH_AES_128_CBC_SHA",
    initSecurityParameters: function(g) {
      g.bulk_cipher_algorithm = e.BulkCipherAlgorithm.aes, g.cipher_type = e.CipherType.block, g.enc_key_length = 16, g.block_length = 16, g.fixed_iv_length = 16, g.record_iv_length = 16, g.mac_algorithm = e.MACAlgorithm.hmac_sha1, g.mac_length = 20, g.mac_key_length = 20;
    },
    initConnectionState: a
  }, e.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
    id: [0, 53],
    name: "TLS_RSA_WITH_AES_256_CBC_SHA",
    initSecurityParameters: function(g) {
      g.bulk_cipher_algorithm = e.BulkCipherAlgorithm.aes, g.cipher_type = e.CipherType.block, g.enc_key_length = 32, g.block_length = 16, g.fixed_iv_length = 16, g.record_iv_length = 16, g.mac_algorithm = e.MACAlgorithm.hmac_sha1, g.mac_length = 20, g.mac_key_length = 20;
    },
    initConnectionState: a
  };
  function a(g, l, b) {
    var U = l.entity === t.tls.ConnectionEnd.client;
    g.read.cipherState = {
      init: !1,
      cipher: t.cipher.createDecipher("AES-CBC", U ? b.keys.server_write_key : b.keys.client_write_key),
      iv: U ? b.keys.server_write_IV : b.keys.client_write_IV
    }, g.write.cipherState = {
      init: !1,
      cipher: t.cipher.createCipher("AES-CBC", U ? b.keys.client_write_key : b.keys.server_write_key),
      iv: U ? b.keys.client_write_IV : b.keys.server_write_IV
    }, g.read.cipherFunction = f, g.write.cipherFunction = p, g.read.macLength = g.write.macLength = b.mac_length, g.read.macFunction = g.write.macFunction = e.hmac_sha1;
  }
  function p(g, l) {
    var b = !1, U = l.macFunction(l.macKey, l.sequenceNumber, g);
    g.fragment.putBytes(U), l.updateSequenceNumber();
    var E;
    g.version.minor === e.Versions.TLS_1_0.minor ? E = l.cipherState.init ? null : l.cipherState.iv : E = t.random.getBytesSync(16), l.cipherState.init = !0;
    var u = l.cipherState.cipher;
    return u.start({ iv: E }), g.version.minor >= e.Versions.TLS_1_1.minor && u.output.putBytes(E), u.update(g.fragment), u.finish(I) && (g.fragment = u.output, g.length = g.fragment.length(), b = !0), b;
  }
  function I(g, l, b) {
    if (!b) {
      var U = g - l.length() % g;
      l.fillWithByte(U - 1, U);
    }
    return !0;
  }
  function S(g, l, b) {
    var U = !0;
    if (b) {
      for (var E = l.length(), u = l.last(), y = E - 1 - u; y < E - 1; ++y)
        U = U && l.at(y) == u;
      U && l.truncate(u + 1);
    }
    return U;
  }
  function f(g, l) {
    var b = !1, U;
    g.version.minor === e.Versions.TLS_1_0.minor ? U = l.cipherState.init ? null : l.cipherState.iv : U = g.fragment.getBytes(16), l.cipherState.init = !0;
    var E = l.cipherState.cipher;
    E.start({ iv: U }), E.update(g.fragment), b = E.finish(S);
    var u = l.macLength, y = t.random.getBytesSync(u), C = E.output.length();
    C >= u ? (g.fragment = E.output.getBytes(C - u), y = E.output.getBytes(u)) : g.fragment = E.output.getBytes(), g.fragment = t.util.createBuffer(g.fragment), g.length = g.fragment.length();
    var m = l.macFunction(l.macKey, l.sequenceNumber, g);
    return l.updateSequenceNumber(), b = r(l.macKey, y, m) && b, b;
  }
  function r(g, l, b) {
    var U = t.hmac.create();
    return U.start("SHA1", g), U.update(l), l = U.digest().getBytes(), U.start(null, null), U.update(b), b = U.digest().getBytes(), l === b;
  }
  return ur.exports;
}
var Vr = { exports: {} }, Ka;
function pn() {
  if (Ka) return Vr.exports;
  Ka = 1;
  var t = ve();
  St(), Se();
  var e = Vr.exports = t.sha512 = t.sha512 || {};
  t.md.sha512 = t.md.algorithms.sha512 = e;
  var a = t.sha384 = t.sha512.sha384 = t.sha512.sha384 || {};
  a.create = function() {
    return e.create("SHA-384");
  }, t.md.sha384 = t.md.algorithms.sha384 = a, t.sha512.sha256 = t.sha512.sha256 || {
    create: function() {
      return e.create("SHA-512/256");
    }
  }, t.md["sha512/256"] = t.md.algorithms["sha512/256"] = t.sha512.sha256, t.sha512.sha224 = t.sha512.sha224 || {
    create: function() {
      return e.create("SHA-512/224");
    }
  }, t.md["sha512/224"] = t.md.algorithms["sha512/224"] = t.sha512.sha224, e.create = function(l) {
    if (I || r(), typeof l > "u" && (l = "SHA-512"), !(l in f))
      throw new Error("Invalid SHA-512 algorithm: " + l);
    for (var b = f[l], U = null, E = t.util.createBuffer(), u = new Array(80), y = 0; y < 80; ++y)
      u[y] = new Array(2);
    var C = 64;
    switch (l) {
      case "SHA-384":
        C = 48;
        break;
      case "SHA-512/256":
        C = 32;
        break;
      case "SHA-512/224":
        C = 28;
        break;
    }
    var m = {
      // SHA-512 => sha512
      algorithm: l.replace("-", "").toLowerCase(),
      blockLength: 128,
      digestLength: C,
      // 56-bit length of message so far (does not including padding)
      messageLength: 0,
      // true message length
      fullMessageLength: null,
      // size of message length in bytes
      messageLengthSize: 16
    };
    return m.start = function() {
      m.messageLength = 0, m.fullMessageLength = m.messageLength128 = [];
      for (var s = m.messageLengthSize / 4, h = 0; h < s; ++h)
        m.fullMessageLength.push(0);
      E = t.util.createBuffer(), U = new Array(b.length);
      for (var h = 0; h < b.length; ++h)
        U[h] = b[h].slice(0);
      return m;
    }, m.start(), m.update = function(s, h) {
      h === "utf8" && (s = t.util.encodeUtf8(s));
      var v = s.length;
      m.messageLength += v, v = [v / 4294967296 >>> 0, v >>> 0];
      for (var B = m.fullMessageLength.length - 1; B >= 0; --B)
        m.fullMessageLength[B] += v[1], v[1] = v[0] + (m.fullMessageLength[B] / 4294967296 >>> 0), m.fullMessageLength[B] = m.fullMessageLength[B] >>> 0, v[0] = v[1] / 4294967296 >>> 0;
      return E.putBytes(s), g(U, u, E), (E.read > 2048 || E.length() === 0) && E.compact(), m;
    }, m.digest = function() {
      var s = t.util.createBuffer();
      s.putBytes(E.bytes());
      var h = m.fullMessageLength[m.fullMessageLength.length - 1] + m.messageLengthSize, v = h & m.blockLength - 1;
      s.putBytes(p.substr(0, m.blockLength - v));
      for (var B, R, c = m.fullMessageLength[0] * 8, i = 0; i < m.fullMessageLength.length - 1; ++i)
        B = m.fullMessageLength[i + 1] * 8, R = B / 4294967296 >>> 0, c += R, s.putInt32(c >>> 0), c = B >>> 0;
      s.putInt32(c);
      for (var n = new Array(U.length), i = 0; i < U.length; ++i)
        n[i] = U[i].slice(0);
      g(n, u, s);
      var T = t.util.createBuffer(), V;
      l === "SHA-512" ? V = n.length : l === "SHA-384" ? V = n.length - 2 : V = n.length - 4;
      for (var i = 0; i < V; ++i)
        T.putInt32(n[i][0]), (i !== V - 1 || l !== "SHA-512/224") && T.putInt32(n[i][1]);
      return T;
    }, m;
  };
  var p = null, I = !1, S = null, f = null;
  function r() {
    p = "", p += t.util.fillString("\0", 128), S = [
      [1116352408, 3609767458],
      [1899447441, 602891725],
      [3049323471, 3964484399],
      [3921009573, 2173295548],
      [961987163, 4081628472],
      [1508970993, 3053834265],
      [2453635748, 2937671579],
      [2870763221, 3664609560],
      [3624381080, 2734883394],
      [310598401, 1164996542],
      [607225278, 1323610764],
      [1426881987, 3590304994],
      [1925078388, 4068182383],
      [2162078206, 991336113],
      [2614888103, 633803317],
      [3248222580, 3479774868],
      [3835390401, 2666613458],
      [4022224774, 944711139],
      [264347078, 2341262773],
      [604807628, 2007800933],
      [770255983, 1495990901],
      [1249150122, 1856431235],
      [1555081692, 3175218132],
      [1996064986, 2198950837],
      [2554220882, 3999719339],
      [2821834349, 766784016],
      [2952996808, 2566594879],
      [3210313671, 3203337956],
      [3336571891, 1034457026],
      [3584528711, 2466948901],
      [113926993, 3758326383],
      [338241895, 168717936],
      [666307205, 1188179964],
      [773529912, 1546045734],
      [1294757372, 1522805485],
      [1396182291, 2643833823],
      [1695183700, 2343527390],
      [1986661051, 1014477480],
      [2177026350, 1206759142],
      [2456956037, 344077627],
      [2730485921, 1290863460],
      [2820302411, 3158454273],
      [3259730800, 3505952657],
      [3345764771, 106217008],
      [3516065817, 3606008344],
      [3600352804, 1432725776],
      [4094571909, 1467031594],
      [275423344, 851169720],
      [430227734, 3100823752],
      [506948616, 1363258195],
      [659060556, 3750685593],
      [883997877, 3785050280],
      [958139571, 3318307427],
      [1322822218, 3812723403],
      [1537002063, 2003034995],
      [1747873779, 3602036899],
      [1955562222, 1575990012],
      [2024104815, 1125592928],
      [2227730452, 2716904306],
      [2361852424, 442776044],
      [2428436474, 593698344],
      [2756734187, 3733110249],
      [3204031479, 2999351573],
      [3329325298, 3815920427],
      [3391569614, 3928383900],
      [3515267271, 566280711],
      [3940187606, 3454069534],
      [4118630271, 4000239992],
      [116418474, 1914138554],
      [174292421, 2731055270],
      [289380356, 3203993006],
      [460393269, 320620315],
      [685471733, 587496836],
      [852142971, 1086792851],
      [1017036298, 365543100],
      [1126000580, 2618297676],
      [1288033470, 3409855158],
      [1501505948, 4234509866],
      [1607167915, 987167468],
      [1816402316, 1246189591]
    ], f = {}, f["SHA-512"] = [
      [1779033703, 4089235720],
      [3144134277, 2227873595],
      [1013904242, 4271175723],
      [2773480762, 1595750129],
      [1359893119, 2917565137],
      [2600822924, 725511199],
      [528734635, 4215389547],
      [1541459225, 327033209]
    ], f["SHA-384"] = [
      [3418070365, 3238371032],
      [1654270250, 914150663],
      [2438529370, 812702999],
      [355462360, 4144912697],
      [1731405415, 4290775857],
      [2394180231, 1750603025],
      [3675008525, 1694076839],
      [1203062813, 3204075428]
    ], f["SHA-512/256"] = [
      [573645204, 4230739756],
      [2673172387, 3360449730],
      [596883563, 1867755857],
      [2520282905, 1497426621],
      [2519219938, 2827943907],
      [3193839141, 1401305490],
      [721525244, 746961066],
      [246885852, 2177182882]
    ], f["SHA-512/224"] = [
      [2352822216, 424955298],
      [1944164710, 2312950998],
      [502970286, 855612546],
      [1738396948, 1479516111],
      [258812777, 2077511080],
      [2011393907, 79989058],
      [1067287976, 1780299464],
      [286451373, 2446758561]
    ], I = !0;
  }
  function g(l, b, U) {
    for (var E, u, y, C, m, s, h, v, B, R, c, i, n, T, V, O, D, M, x, G, z, Y, Z, te, ue, he, Ce, Ie, _, $, X, Oe, pe, d, L, w = U.length(); w >= 128; ) {
      for (_ = 0; _ < 16; ++_)
        b[_][0] = U.getInt32() >>> 0, b[_][1] = U.getInt32() >>> 0;
      for (; _ < 80; ++_)
        Oe = b[_ - 2], $ = Oe[0], X = Oe[1], E = (($ >>> 19 | X << 13) ^ // ROTR 19
        (X >>> 29 | $ << 3) ^ // ROTR 61/(swap + ROTR 29)
        $ >>> 6) >>> 0, u = (($ << 13 | X >>> 19) ^ // ROTR 19
        (X << 3 | $ >>> 29) ^ // ROTR 61/(swap + ROTR 29)
        ($ << 26 | X >>> 6)) >>> 0, d = b[_ - 15], $ = d[0], X = d[1], y = (($ >>> 1 | X << 31) ^ // ROTR 1
        ($ >>> 8 | X << 24) ^ // ROTR 8
        $ >>> 7) >>> 0, C = (($ << 31 | X >>> 1) ^ // ROTR 1
        ($ << 24 | X >>> 8) ^ // ROTR 8
        ($ << 25 | X >>> 7)) >>> 0, pe = b[_ - 7], L = b[_ - 16], X = u + pe[1] + C + L[1], b[_][0] = E + pe[0] + y + L[0] + (X / 4294967296 >>> 0) >>> 0, b[_][1] = X >>> 0;
      for (n = l[0][0], T = l[0][1], V = l[1][0], O = l[1][1], D = l[2][0], M = l[2][1], x = l[3][0], G = l[3][1], z = l[4][0], Y = l[4][1], Z = l[5][0], te = l[5][1], ue = l[6][0], he = l[6][1], Ce = l[7][0], Ie = l[7][1], _ = 0; _ < 80; ++_)
        h = ((z >>> 14 | Y << 18) ^ // ROTR 14
        (z >>> 18 | Y << 14) ^ // ROTR 18
        (Y >>> 9 | z << 23)) >>> 0, v = ((z << 18 | Y >>> 14) ^ // ROTR 14
        (z << 14 | Y >>> 18) ^ // ROTR 18
        (Y << 23 | z >>> 9)) >>> 0, B = (ue ^ z & (Z ^ ue)) >>> 0, R = (he ^ Y & (te ^ he)) >>> 0, m = ((n >>> 28 | T << 4) ^ // ROTR 28
        (T >>> 2 | n << 30) ^ // ROTR 34/(swap + ROTR 2)
        (T >>> 7 | n << 25)) >>> 0, s = ((n << 4 | T >>> 28) ^ // ROTR 28
        (T << 30 | n >>> 2) ^ // ROTR 34/(swap + ROTR 2)
        (T << 25 | n >>> 7)) >>> 0, c = (n & V | D & (n ^ V)) >>> 0, i = (T & O | M & (T ^ O)) >>> 0, X = Ie + v + R + S[_][1] + b[_][1], E = Ce + h + B + S[_][0] + b[_][0] + (X / 4294967296 >>> 0) >>> 0, u = X >>> 0, X = s + i, y = m + c + (X / 4294967296 >>> 0) >>> 0, C = X >>> 0, Ce = ue, Ie = he, ue = Z, he = te, Z = z, te = Y, X = G + u, z = x + E + (X / 4294967296 >>> 0) >>> 0, Y = X >>> 0, x = D, G = M, D = V, M = O, V = n, O = T, X = u + C, n = E + y + (X / 4294967296 >>> 0) >>> 0, T = X >>> 0;
      X = l[0][1] + T, l[0][0] = l[0][0] + n + (X / 4294967296 >>> 0) >>> 0, l[0][1] = X >>> 0, X = l[1][1] + O, l[1][0] = l[1][0] + V + (X / 4294967296 >>> 0) >>> 0, l[1][1] = X >>> 0, X = l[2][1] + M, l[2][0] = l[2][0] + D + (X / 4294967296 >>> 0) >>> 0, l[2][1] = X >>> 0, X = l[3][1] + G, l[3][0] = l[3][0] + x + (X / 4294967296 >>> 0) >>> 0, l[3][1] = X >>> 0, X = l[4][1] + Y, l[4][0] = l[4][0] + z + (X / 4294967296 >>> 0) >>> 0, l[4][1] = X >>> 0, X = l[5][1] + te, l[5][0] = l[5][0] + Z + (X / 4294967296 >>> 0) >>> 0, l[5][1] = X >>> 0, X = l[6][1] + he, l[6][0] = l[6][0] + ue + (X / 4294967296 >>> 0) >>> 0, l[6][1] = X >>> 0, X = l[7][1] + Ie, l[7][0] = l[7][0] + Ce + (X / 4294967296 >>> 0) >>> 0, l[7][1] = X >>> 0, w -= 128;
    }
  }
  return Vr.exports;
}
var Xt = {}, Oa;
function hs() {
  if (Oa) return Xt;
  Oa = 1;
  var t = ve();
  yt();
  var e = t.asn1;
  return Xt.privateKeyValidator = {
    // PrivateKeyInfo
    name: "PrivateKeyInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    value: [{
      // Version (INTEGER)
      name: "PrivateKeyInfo.version",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.INTEGER,
      constructed: !1,
      capture: "privateKeyVersion"
    }, {
      // privateKeyAlgorithm
      name: "PrivateKeyInfo.privateKeyAlgorithm",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.SEQUENCE,
      constructed: !0,
      value: [{
        name: "AlgorithmIdentifier.algorithm",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.OID,
        constructed: !1,
        capture: "privateKeyOid"
      }]
    }, {
      // PrivateKey
      name: "PrivateKeyInfo",
      tagClass: e.Class.UNIVERSAL,
      type: e.Type.OCTETSTRING,
      constructed: !1,
      capture: "privateKey"
    }]
  }, Xt.publicKeyValidator = {
    name: "SubjectPublicKeyInfo",
    tagClass: e.Class.UNIVERSAL,
    type: e.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "subjectPublicKeyInfo",
    value: [
      {
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: e.Class.UNIVERSAL,
          type: e.Type.OID,
          constructed: !1,
          capture: "publicKeyOid"
        }]
      },
      // capture group for ed25519PublicKey
      {
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.BITSTRING,
        constructed: !1,
        composed: !0,
        captureBitStringValue: "ed25519PublicKey"
      }
      // FIXME: this is capture group for rsaPublicKey, use it in this API or
      // discard?
      /* {
        // subjectPublicKey
        name: 'SubjectPublicKeyInfo.subjectPublicKey',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.BITSTRING,
        constructed: false,
        value: [{
          // RSAPublicKey
          name: 'SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey',
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          optional: true,
          captureAsn1: 'rsaPublicKey'
        }]
      } */
    ]
  }, Xt;
}
var Pr, Ma;
function gs() {
  if (Ma) return Pr;
  Ma = 1;
  var t = ve();
  $t(), ht(), pn(), Se();
  var e = hs(), a = e.publicKeyValidator, p = e.privateKeyValidator;
  if (typeof I > "u")
    var I = t.jsbn.BigInteger;
  var S = t.util.ByteBuffer, f = typeof Buffer > "u" ? Uint8Array : Buffer;
  t.pki = t.pki || {}, Pr = t.pki.ed25519 = t.ed25519 = t.ed25519 || {};
  var r = t.ed25519;
  r.constants = {}, r.constants.PUBLIC_KEY_BYTE_LENGTH = 32, r.constants.PRIVATE_KEY_BYTE_LENGTH = 64, r.constants.SEED_BYTE_LENGTH = 32, r.constants.SIGN_BYTE_LENGTH = 64, r.constants.HASH_BYTE_LENGTH = 64, r.generateKeyPair = function(d) {
    d = d || {};
    var L = d.seed;
    if (L === void 0)
      L = t.random.getBytesSync(r.constants.SEED_BYTE_LENGTH);
    else if (typeof L == "string") {
      if (L.length !== r.constants.SEED_BYTE_LENGTH)
        throw new TypeError(
          '"seed" must be ' + r.constants.SEED_BYTE_LENGTH + " bytes in length."
        );
    } else if (!(L instanceof Uint8Array))
      throw new TypeError(
        '"seed" must be a node.js Buffer, Uint8Array, or a binary string.'
      );
    L = g({ message: L, encoding: "binary" });
    for (var w = new f(r.constants.PUBLIC_KEY_BYTE_LENGTH), o = new f(r.constants.PRIVATE_KEY_BYTE_LENGTH), k = 0; k < 32; ++k)
      o[k] = L[k];
    return h(w, o), { publicKey: w, privateKey: o };
  }, r.privateKeyFromAsn1 = function(d) {
    var L = {}, w = [], o = t.asn1.validate(d, p, L, w);
    if (!o) {
      var k = new Error("Invalid Key.");
      throw k.errors = w, k;
    }
    var F = t.asn1.derToOid(L.privateKeyOid), K = t.oids.EdDSA25519;
    if (F !== K)
      throw new Error('Invalid OID "' + F + '"; OID must be "' + K + '".');
    var Q = L.privateKey, se = g({
      message: t.asn1.fromDer(Q).value,
      encoding: "binary"
    });
    return { privateKeyBytes: se };
  }, r.publicKeyFromAsn1 = function(d) {
    var L = {}, w = [], o = t.asn1.validate(d, a, L, w);
    if (!o) {
      var k = new Error("Invalid Key.");
      throw k.errors = w, k;
    }
    var F = t.asn1.derToOid(L.publicKeyOid), K = t.oids.EdDSA25519;
    if (F !== K)
      throw new Error('Invalid OID "' + F + '"; OID must be "' + K + '".');
    var Q = L.ed25519PublicKey;
    if (Q.length !== r.constants.PUBLIC_KEY_BYTE_LENGTH)
      throw new Error("Key length is invalid.");
    return g({
      message: Q,
      encoding: "binary"
    });
  }, r.publicKeyFromPrivateKey = function(d) {
    d = d || {};
    var L = g({
      message: d.privateKey,
      encoding: "binary"
    });
    if (L.length !== r.constants.PRIVATE_KEY_BYTE_LENGTH)
      throw new TypeError(
        '"options.privateKey" must have a byte length of ' + r.constants.PRIVATE_KEY_BYTE_LENGTH
      );
    for (var w = new f(r.constants.PUBLIC_KEY_BYTE_LENGTH), o = 0; o < w.length; ++o)
      w[o] = L[32 + o];
    return w;
  }, r.sign = function(d) {
    d = d || {};
    var L = g(d), w = g({
      message: d.privateKey,
      encoding: "binary"
    });
    if (w.length === r.constants.SEED_BYTE_LENGTH) {
      var o = r.generateKeyPair({ seed: w });
      w = o.privateKey;
    } else if (w.length !== r.constants.PRIVATE_KEY_BYTE_LENGTH)
      throw new TypeError(
        '"options.privateKey" must have a byte length of ' + r.constants.SEED_BYTE_LENGTH + " or " + r.constants.PRIVATE_KEY_BYTE_LENGTH
      );
    var k = new f(
      r.constants.SIGN_BYTE_LENGTH + L.length
    );
    v(k, L, L.length, w);
    for (var F = new f(r.constants.SIGN_BYTE_LENGTH), K = 0; K < F.length; ++K)
      F[K] = k[K];
    return F;
  }, r.verify = function(d) {
    d = d || {};
    var L = g(d);
    if (d.signature === void 0)
      throw new TypeError(
        '"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.'
      );
    var w = g({
      message: d.signature,
      encoding: "binary"
    });
    if (w.length !== r.constants.SIGN_BYTE_LENGTH)
      throw new TypeError(
        '"options.signature" must have a byte length of ' + r.constants.SIGN_BYTE_LENGTH
      );
    var o = g({
      message: d.publicKey,
      encoding: "binary"
    });
    if (o.length !== r.constants.PUBLIC_KEY_BYTE_LENGTH)
      throw new TypeError(
        '"options.publicKey" must have a byte length of ' + r.constants.PUBLIC_KEY_BYTE_LENGTH
      );
    var k = new f(r.constants.SIGN_BYTE_LENGTH + L.length), F = new f(r.constants.SIGN_BYTE_LENGTH + L.length), K;
    for (K = 0; K < r.constants.SIGN_BYTE_LENGTH; ++K)
      k[K] = w[K];
    for (K = 0; K < L.length; ++K)
      k[K + r.constants.SIGN_BYTE_LENGTH] = L[K];
    return B(F, k, k.length, o) >= 0;
  };
  function g(d) {
    var L = d.message;
    if (L instanceof Uint8Array || L instanceof f)
      return L;
    var w = d.encoding;
    if (L === void 0)
      if (d.md)
        L = d.md.digest().getBytes(), w = "binary";
      else
        throw new TypeError('"options.message" or "options.md" not specified.');
    if (typeof L == "string" && !w)
      throw new TypeError('"options.encoding" must be "binary" or "utf8".');
    if (typeof L == "string") {
      if (typeof Buffer < "u")
        return Buffer.from(L, w);
      L = new S(L, w);
    } else if (!(L instanceof S))
      throw new TypeError(
        '"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.'
      );
    for (var o = new f(L.length()), k = 0; k < o.length; ++k)
      o[k] = L.at(k);
    return o;
  }
  var l = _(), b = _([1]), U = _([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), E = _([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), u = _([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), y = _([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), C = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]), m = _([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function s(d, L) {
    var w = t.md.sha512.create(), o = new S(d);
    w.update(o.getBytes(L), "binary");
    var k = w.digest().getBytes();
    if (typeof Buffer < "u")
      return Buffer.from(k, "binary");
    for (var F = new f(r.constants.HASH_BYTE_LENGTH), K = 0; K < 64; ++K)
      F[K] = k.charCodeAt(K);
    return F;
  }
  function h(d, L) {
    var w = [_(), _(), _(), _()], o, k = s(L, 32);
    for (k[0] &= 248, k[31] &= 127, k[31] |= 64, te(w, k), T(d, w), o = 0; o < 32; ++o)
      L[o + 32] = d[o];
    return 0;
  }
  function v(d, L, w, o) {
    var k, F, K = new Float64Array(64), Q = [_(), _(), _(), _()], se = s(o, 32);
    se[0] &= 248, se[31] &= 127, se[31] |= 64;
    var le = w + 64;
    for (k = 0; k < w; ++k)
      d[64 + k] = L[k];
    for (k = 0; k < 32; ++k)
      d[32 + k] = se[32 + k];
    var q = s(d.subarray(32), w + 32);
    for (c(q), te(Q, q), T(d, Q), k = 32; k < 64; ++k)
      d[k] = o[k];
    var ie = s(d, w + 64);
    for (c(ie), k = 32; k < 64; ++k)
      K[k] = 0;
    for (k = 0; k < 32; ++k)
      K[k] = q[k];
    for (k = 0; k < 32; ++k)
      for (F = 0; F < 32; F++)
        K[k + F] += ie[k] * se[F];
    return R(d.subarray(32), K), le;
  }
  function B(d, L, w, o) {
    var k, F, K = new f(32), Q = [_(), _(), _(), _()], se = [_(), _(), _(), _()];
    if (F = -1, w < 64 || O(se, o))
      return -1;
    for (k = 0; k < w; ++k)
      d[k] = L[k];
    for (k = 0; k < 32; ++k)
      d[k + 32] = o[k];
    var le = s(d, w);
    if (c(le), Z(Q, se, le), te(se, L.subarray(32)), i(Q, se), T(K, Q), w -= 64, G(L, 0, K, 0)) {
      for (k = 0; k < w; ++k)
        d[k] = 0;
      return -1;
    }
    for (k = 0; k < w; ++k)
      d[k] = L[k + 64];
    return F = w, F;
  }
  function R(d, L) {
    var w, o, k, F;
    for (o = 63; o >= 32; --o) {
      for (w = 0, k = o - 32, F = o - 12; k < F; ++k)
        L[k] += w - 16 * L[o] * C[k - (o - 32)], w = L[k] + 128 >> 8, L[k] -= w * 256;
      L[k] += w, L[o] = 0;
    }
    for (w = 0, k = 0; k < 32; ++k)
      L[k] += w - (L[31] >> 4) * C[k], w = L[k] >> 8, L[k] &= 255;
    for (k = 0; k < 32; ++k)
      L[k] -= w * C[k];
    for (o = 0; o < 32; ++o)
      L[o + 1] += L[o] >> 8, d[o] = L[o] & 255;
  }
  function c(d) {
    for (var L = new Float64Array(64), w = 0; w < 64; ++w)
      L[w] = d[w], d[w] = 0;
    R(d, L);
  }
  function i(d, L) {
    var w = _(), o = _(), k = _(), F = _(), K = _(), Q = _(), se = _(), le = _(), q = _();
    X(w, d[1], d[0]), X(q, L[1], L[0]), pe(w, w, q), $(o, d[0], d[1]), $(q, L[0], L[1]), pe(o, o, q), pe(k, d[3], L[3]), pe(k, k, E), pe(F, d[2], L[2]), $(F, F, F), X(K, o, w), X(Q, F, k), $(se, F, k), $(le, o, w), pe(d[0], K, Q), pe(d[1], le, se), pe(d[2], se, Q), pe(d[3], K, le);
  }
  function n(d, L, w) {
    for (var o = 0; o < 4; ++o)
      Ie(d[o], L[o], w);
  }
  function T(d, L) {
    var w = _(), o = _(), k = _();
    he(k, L[2]), pe(w, L[0], k), pe(o, L[1], k), V(d, o), d[31] ^= Y(w) << 7;
  }
  function V(d, L) {
    var w, o, k, F = _(), K = _();
    for (w = 0; w < 16; ++w)
      K[w] = L[w];
    for (Ce(K), Ce(K), Ce(K), o = 0; o < 2; ++o) {
      for (F[0] = K[0] - 65517, w = 1; w < 15; ++w)
        F[w] = K[w] - 65535 - (F[w - 1] >> 16 & 1), F[w - 1] &= 65535;
      F[15] = K[15] - 32767 - (F[14] >> 16 & 1), k = F[15] >> 16 & 1, F[14] &= 65535, Ie(K, F, 1 - k);
    }
    for (w = 0; w < 16; w++)
      d[2 * w] = K[w] & 255, d[2 * w + 1] = K[w] >> 8;
  }
  function O(d, L) {
    var w = _(), o = _(), k = _(), F = _(), K = _(), Q = _(), se = _();
    return ue(d[2], b), D(d[1], L), Oe(k, d[1]), pe(F, k, U), X(k, k, d[2]), $(F, d[2], F), Oe(K, F), Oe(Q, K), pe(se, Q, K), pe(w, se, k), pe(w, w, F), M(w, w), pe(w, w, k), pe(w, w, F), pe(w, w, F), pe(d[0], w, F), Oe(o, d[0]), pe(o, o, F), x(o, k) && pe(d[0], d[0], m), Oe(o, d[0]), pe(o, o, F), x(o, k) ? -1 : (Y(d[0]) === L[31] >> 7 && X(d[0], l, d[0]), pe(d[3], d[0], d[1]), 0);
  }
  function D(d, L) {
    var w;
    for (w = 0; w < 16; ++w)
      d[w] = L[2 * w] + (L[2 * w + 1] << 8);
    d[15] &= 32767;
  }
  function M(d, L) {
    var w = _(), o;
    for (o = 0; o < 16; ++o)
      w[o] = L[o];
    for (o = 250; o >= 0; --o)
      Oe(w, w), o !== 1 && pe(w, w, L);
    for (o = 0; o < 16; ++o)
      d[o] = w[o];
  }
  function x(d, L) {
    var w = new f(32), o = new f(32);
    return V(w, d), V(o, L), G(w, 0, o, 0);
  }
  function G(d, L, w, o) {
    return z(d, L, w, o, 32);
  }
  function z(d, L, w, o, k) {
    var F, K = 0;
    for (F = 0; F < k; ++F)
      K |= d[L + F] ^ w[o + F];
    return (1 & K - 1 >>> 8) - 1;
  }
  function Y(d) {
    var L = new f(32);
    return V(L, d), L[0] & 1;
  }
  function Z(d, L, w) {
    var o, k;
    for (ue(d[0], l), ue(d[1], b), ue(d[2], b), ue(d[3], l), k = 255; k >= 0; --k)
      o = w[k / 8 | 0] >> (k & 7) & 1, n(d, L, o), i(L, d), i(d, d), n(d, L, o);
  }
  function te(d, L) {
    var w = [_(), _(), _(), _()];
    ue(w[0], u), ue(w[1], y), ue(w[2], b), pe(w[3], u, y), Z(d, w, L);
  }
  function ue(d, L) {
    var w;
    for (w = 0; w < 16; w++)
      d[w] = L[w] | 0;
  }
  function he(d, L) {
    var w = _(), o;
    for (o = 0; o < 16; ++o)
      w[o] = L[o];
    for (o = 253; o >= 0; --o)
      Oe(w, w), o !== 2 && o !== 4 && pe(w, w, L);
    for (o = 0; o < 16; ++o)
      d[o] = w[o];
  }
  function Ce(d) {
    var L, w, o = 1;
    for (L = 0; L < 16; ++L)
      w = d[L] + o + 65535, o = Math.floor(w / 65536), d[L] = w - o * 65536;
    d[0] += o - 1 + 37 * (o - 1);
  }
  function Ie(d, L, w) {
    for (var o, k = ~(w - 1), F = 0; F < 16; ++F)
      o = k & (d[F] ^ L[F]), d[F] ^= o, L[F] ^= o;
  }
  function _(d) {
    var L, w = new Float64Array(16);
    if (d)
      for (L = 0; L < d.length; ++L)
        w[L] = d[L];
    return w;
  }
  function $(d, L, w) {
    for (var o = 0; o < 16; ++o)
      d[o] = L[o] + w[o];
  }
  function X(d, L, w) {
    for (var o = 0; o < 16; ++o)
      d[o] = L[o] - w[o];
  }
  function Oe(d, L) {
    pe(d, L, L);
  }
  function pe(d, L, w) {
    var o, k, F = 0, K = 0, Q = 0, se = 0, le = 0, q = 0, ie = 0, fe = 0, Ee = 0, ge = 0, ke = 0, we = 0, Ae = 0, Ne = 0, Be = 0, Te = 0, Re = 0, Ue = 0, J = 0, ee = 0, ae = 0, me = 0, Ke = 0, ot = 0, lt = 0, vt = 0, bt = 0, Bt = 0, Rt = 0, Mt = 0, zt = 0, Fe = w[0], Ge = w[1], je = w[2], ze = w[3], qe = w[4], Qe = w[5], Je = w[6], He = w[7], Ye = w[8], We = w[9], Xe = w[10], Ze = w[11], Le = w[12], Me = w[13], _e = w[14], $e = w[15];
    o = L[0], F += o * Fe, K += o * Ge, Q += o * je, se += o * ze, le += o * qe, q += o * Qe, ie += o * Je, fe += o * He, Ee += o * Ye, ge += o * We, ke += o * Xe, we += o * Ze, Ae += o * Le, Ne += o * Me, Be += o * _e, Te += o * $e, o = L[1], K += o * Fe, Q += o * Ge, se += o * je, le += o * ze, q += o * qe, ie += o * Qe, fe += o * Je, Ee += o * He, ge += o * Ye, ke += o * We, we += o * Xe, Ae += o * Ze, Ne += o * Le, Be += o * Me, Te += o * _e, Re += o * $e, o = L[2], Q += o * Fe, se += o * Ge, le += o * je, q += o * ze, ie += o * qe, fe += o * Qe, Ee += o * Je, ge += o * He, ke += o * Ye, we += o * We, Ae += o * Xe, Ne += o * Ze, Be += o * Le, Te += o * Me, Re += o * _e, Ue += o * $e, o = L[3], se += o * Fe, le += o * Ge, q += o * je, ie += o * ze, fe += o * qe, Ee += o * Qe, ge += o * Je, ke += o * He, we += o * Ye, Ae += o * We, Ne += o * Xe, Be += o * Ze, Te += o * Le, Re += o * Me, Ue += o * _e, J += o * $e, o = L[4], le += o * Fe, q += o * Ge, ie += o * je, fe += o * ze, Ee += o * qe, ge += o * Qe, ke += o * Je, we += o * He, Ae += o * Ye, Ne += o * We, Be += o * Xe, Te += o * Ze, Re += o * Le, Ue += o * Me, J += o * _e, ee += o * $e, o = L[5], q += o * Fe, ie += o * Ge, fe += o * je, Ee += o * ze, ge += o * qe, ke += o * Qe, we += o * Je, Ae += o * He, Ne += o * Ye, Be += o * We, Te += o * Xe, Re += o * Ze, Ue += o * Le, J += o * Me, ee += o * _e, ae += o * $e, o = L[6], ie += o * Fe, fe += o * Ge, Ee += o * je, ge += o * ze, ke += o * qe, we += o * Qe, Ae += o * Je, Ne += o * He, Be += o * Ye, Te += o * We, Re += o * Xe, Ue += o * Ze, J += o * Le, ee += o * Me, ae += o * _e, me += o * $e, o = L[7], fe += o * Fe, Ee += o * Ge, ge += o * je, ke += o * ze, we += o * qe, Ae += o * Qe, Ne += o * Je, Be += o * He, Te += o * Ye, Re += o * We, Ue += o * Xe, J += o * Ze, ee += o * Le, ae += o * Me, me += o * _e, Ke += o * $e, o = L[8], Ee += o * Fe, ge += o * Ge, ke += o * je, we += o * ze, Ae += o * qe, Ne += o * Qe, Be += o * Je, Te += o * He, Re += o * Ye, Ue += o * We, J += o * Xe, ee += o * Ze, ae += o * Le, me += o * Me, Ke += o * _e, ot += o * $e, o = L[9], ge += o * Fe, ke += o * Ge, we += o * je, Ae += o * ze, Ne += o * qe, Be += o * Qe, Te += o * Je, Re += o * He, Ue += o * Ye, J += o * We, ee += o * Xe, ae += o * Ze, me += o * Le, Ke += o * Me, ot += o * _e, lt += o * $e, o = L[10], ke += o * Fe, we += o * Ge, Ae += o * je, Ne += o * ze, Be += o * qe, Te += o * Qe, Re += o * Je, Ue += o * He, J += o * Ye, ee += o * We, ae += o * Xe, me += o * Ze, Ke += o * Le, ot += o * Me, lt += o * _e, vt += o * $e, o = L[11], we += o * Fe, Ae += o * Ge, Ne += o * je, Be += o * ze, Te += o * qe, Re += o * Qe, Ue += o * Je, J += o * He, ee += o * Ye, ae += o * We, me += o * Xe, Ke += o * Ze, ot += o * Le, lt += o * Me, vt += o * _e, bt += o * $e, o = L[12], Ae += o * Fe, Ne += o * Ge, Be += o * je, Te += o * ze, Re += o * qe, Ue += o * Qe, J += o * Je, ee += o * He, ae += o * Ye, me += o * We, Ke += o * Xe, ot += o * Ze, lt += o * Le, vt += o * Me, bt += o * _e, Bt += o * $e, o = L[13], Ne += o * Fe, Be += o * Ge, Te += o * je, Re += o * ze, Ue += o * qe, J += o * Qe, ee += o * Je, ae += o * He, me += o * Ye, Ke += o * We, ot += o * Xe, lt += o * Ze, vt += o * Le, bt += o * Me, Bt += o * _e, Rt += o * $e, o = L[14], Be += o * Fe, Te += o * Ge, Re += o * je, Ue += o * ze, J += o * qe, ee += o * Qe, ae += o * Je, me += o * He, Ke += o * Ye, ot += o * We, lt += o * Xe, vt += o * Ze, bt += o * Le, Bt += o * Me, Rt += o * _e, Mt += o * $e, o = L[15], Te += o * Fe, Re += o * Ge, Ue += o * je, J += o * ze, ee += o * qe, ae += o * Qe, me += o * Je, Ke += o * He, ot += o * Ye, lt += o * We, vt += o * Xe, bt += o * Ze, Bt += o * Le, Rt += o * Me, Mt += o * _e, zt += o * $e, F += 38 * Re, K += 38 * Ue, Q += 38 * J, se += 38 * ee, le += 38 * ae, q += 38 * me, ie += 38 * Ke, fe += 38 * ot, Ee += 38 * lt, ge += 38 * vt, ke += 38 * bt, we += 38 * Bt, Ae += 38 * Rt, Ne += 38 * Mt, Be += 38 * zt, k = 1, o = F + k + 65535, k = Math.floor(o / 65536), F = o - k * 65536, o = K + k + 65535, k = Math.floor(o / 65536), K = o - k * 65536, o = Q + k + 65535, k = Math.floor(o / 65536), Q = o - k * 65536, o = se + k + 65535, k = Math.floor(o / 65536), se = o - k * 65536, o = le + k + 65535, k = Math.floor(o / 65536), le = o - k * 65536, o = q + k + 65535, k = Math.floor(o / 65536), q = o - k * 65536, o = ie + k + 65535, k = Math.floor(o / 65536), ie = o - k * 65536, o = fe + k + 65535, k = Math.floor(o / 65536), fe = o - k * 65536, o = Ee + k + 65535, k = Math.floor(o / 65536), Ee = o - k * 65536, o = ge + k + 65535, k = Math.floor(o / 65536), ge = o - k * 65536, o = ke + k + 65535, k = Math.floor(o / 65536), ke = o - k * 65536, o = we + k + 65535, k = Math.floor(o / 65536), we = o - k * 65536, o = Ae + k + 65535, k = Math.floor(o / 65536), Ae = o - k * 65536, o = Ne + k + 65535, k = Math.floor(o / 65536), Ne = o - k * 65536, o = Be + k + 65535, k = Math.floor(o / 65536), Be = o - k * 65536, o = Te + k + 65535, k = Math.floor(o / 65536), Te = o - k * 65536, F += k - 1 + 37 * (k - 1), k = 1, o = F + k + 65535, k = Math.floor(o / 65536), F = o - k * 65536, o = K + k + 65535, k = Math.floor(o / 65536), K = o - k * 65536, o = Q + k + 65535, k = Math.floor(o / 65536), Q = o - k * 65536, o = se + k + 65535, k = Math.floor(o / 65536), se = o - k * 65536, o = le + k + 65535, k = Math.floor(o / 65536), le = o - k * 65536, o = q + k + 65535, k = Math.floor(o / 65536), q = o - k * 65536, o = ie + k + 65535, k = Math.floor(o / 65536), ie = o - k * 65536, o = fe + k + 65535, k = Math.floor(o / 65536), fe = o - k * 65536, o = Ee + k + 65535, k = Math.floor(o / 65536), Ee = o - k * 65536, o = ge + k + 65535, k = Math.floor(o / 65536), ge = o - k * 65536, o = ke + k + 65535, k = Math.floor(o / 65536), ke = o - k * 65536, o = we + k + 65535, k = Math.floor(o / 65536), we = o - k * 65536, o = Ae + k + 65535, k = Math.floor(o / 65536), Ae = o - k * 65536, o = Ne + k + 65535, k = Math.floor(o / 65536), Ne = o - k * 65536, o = Be + k + 65535, k = Math.floor(o / 65536), Be = o - k * 65536, o = Te + k + 65535, k = Math.floor(o / 65536), Te = o - k * 65536, F += k - 1 + 37 * (k - 1), d[0] = F, d[1] = K, d[2] = Q, d[3] = se, d[4] = le, d[5] = q, d[6] = ie, d[7] = fe, d[8] = Ee, d[9] = ge, d[10] = ke, d[11] = we, d[12] = Ae, d[13] = Ne, d[14] = Be, d[15] = Te;
  }
  return Pr;
}
var Kr, xa;
function ys() {
  if (xa) return Kr;
  xa = 1;
  var t = ve();
  Se(), ht(), $t(), Kr = t.kem = t.kem || {};
  var e = t.jsbn.BigInteger;
  t.kem.rsa = {}, t.kem.rsa.create = function(p, I) {
    I = I || {};
    var S = I.prng || t.random, f = {};
    return f.encrypt = function(r, g) {
      var l = Math.ceil(r.n.bitLength() / 8), b;
      do
        b = new e(
          t.util.bytesToHex(S.getBytesSync(l)),
          16
        ).mod(r.n);
      while (b.compareTo(e.ONE) <= 0);
      b = t.util.hexToBytes(b.toString(16));
      var U = l - b.length;
      U > 0 && (b = t.util.fillString("\0", U) + b);
      var E = r.encrypt(b, "NONE"), u = p.generate(b, g);
      return { encapsulation: E, key: u };
    }, f.decrypt = function(r, g, l) {
      var b = r.decrypt(g, "NONE");
      return p.generate(b, l);
    }, f;
  }, t.kem.kdf1 = function(p, I) {
    a(this, p, 0, I || p.digestLength);
  }, t.kem.kdf2 = function(p, I) {
    a(this, p, 1, I || p.digestLength);
  };
  function a(p, I, S, f) {
    p.generate = function(r, g) {
      for (var l = new t.util.ByteBuffer(), b = Math.ceil(g / f) + S, U = new t.util.ByteBuffer(), E = S; E < b; ++E) {
        U.putInt32(E), I.start(), I.update(r + U.getBytes());
        var u = I.digest();
        l.putBytes(u.getBytes(f));
      }
      return l.truncate(l.length() - g), l.getBytes();
    };
  }
  return Kr;
}
var Or, Fa;
function vs() {
  if (Fa) return Or;
  Fa = 1;
  var t = ve();
  Se(), Or = t.log = t.log || {}, t.log.levels = [
    "none",
    "error",
    "warning",
    "info",
    "debug",
    "verbose",
    "max"
  ];
  var e = {}, a = [], p = null;
  t.log.LEVEL_LOCKED = 2, t.log.NO_LEVEL_CHECK = 4, t.log.INTERPOLATE = 8;
  for (var I = 0; I < t.log.levels.length; ++I) {
    var S = t.log.levels[I];
    e[S] = {
      index: I,
      name: S.toUpperCase()
    };
  }
  t.log.logMessage = function(E) {
    for (var u = e[E.level].index, y = 0; y < a.length; ++y) {
      var C = a[y];
      if (C.flags & t.log.NO_LEVEL_CHECK)
        C.f(E);
      else {
        var m = e[C.level].index;
        u <= m && C.f(C, E);
      }
    }
  }, t.log.prepareStandard = function(E) {
    "standard" in E || (E.standard = e[E.level].name + //' ' + +message.timestamp +
    " [" + E.category + "] " + E.message);
  }, t.log.prepareFull = function(E) {
    if (!("full" in E)) {
      var u = [E.message];
      u = u.concat([]), E.full = t.util.format.apply(this, u);
    }
  }, t.log.prepareStandardFull = function(E) {
    "standardFull" in E || (t.log.prepareStandard(E), E.standardFull = E.standard);
  };
  for (var f = ["error", "warning", "info", "debug", "verbose"], I = 0; I < f.length; ++I)
    (function(u) {
      t.log[u] = function(y, C) {
        var m = Array.prototype.slice.call(arguments).slice(2), s = {
          timestamp: /* @__PURE__ */ new Date(),
          level: u,
          category: y,
          message: C,
          arguments: m
          /*standard*/
          /*full*/
          /*fullMessage*/
        };
        t.log.logMessage(s);
      };
    })(f[I]);
  if (t.log.makeLogger = function(E) {
    var u = {
      flags: 0,
      f: E
    };
    return t.log.setLevel(u, "none"), u;
  }, t.log.setLevel = function(E, u) {
    var y = !1;
    if (E && !(E.flags & t.log.LEVEL_LOCKED))
      for (var C = 0; C < t.log.levels.length; ++C) {
        var m = t.log.levels[C];
        if (u == m) {
          E.level = u, y = !0;
          break;
        }
      }
    return y;
  }, t.log.lock = function(E, u) {
    typeof u > "u" || u ? E.flags |= t.log.LEVEL_LOCKED : E.flags &= ~t.log.LEVEL_LOCKED;
  }, t.log.addLogger = function(E) {
    a.push(E);
  }, typeof console < "u" && "log" in console) {
    var r;
    if (console.error && console.warn && console.info && console.debug) {
      var g = {
        error: console.error,
        warning: console.warn,
        info: console.info,
        debug: console.debug,
        verbose: console.debug
      }, l = function(E, u) {
        t.log.prepareStandard(u);
        var y = g[u.level], C = [u.standard];
        C = C.concat(u.arguments.slice()), y.apply(console, C);
      };
      r = t.log.makeLogger(l);
    } else {
      var l = function(u, y) {
        t.log.prepareStandardFull(y), console.log(y.standardFull);
      };
      r = t.log.makeLogger(l);
    }
    t.log.setLevel(r, "debug"), t.log.addLogger(r), p = r;
  } else
    console = {
      log: function() {
      }
    };
  if (p !== null && typeof window < "u" && window.location) {
    var b = new URL(window.location.href).searchParams;
    if (b.has("console.level") && t.log.setLevel(
      p,
      b.get("console.level").slice(-1)[0]
    ), b.has("console.lock")) {
      var U = b.get("console.lock").slice(-1)[0];
      U == "true" && t.log.lock(p);
    }
  }
  return t.log.consoleLogger = p, Or;
}
var Ga, ja;
function ms() {
  return ja || (ja = 1, Ga = St(), Jr(), jt(), en(), pn()), Ga;
}
var Mr = { exports: {} }, za;
function Cs() {
  if (za) return Mr.exports;
  za = 1;
  var t = ve();
  Nt(), yt(), _t(), wt(), Ot(), on(), ht(), Se(), Xr();
  var e = t.asn1, a = Mr.exports = t.pkcs7 = t.pkcs7 || {};
  a.messageFromPem = function(u) {
    var y = t.pem.decode(u)[0];
    if (y.type !== "PKCS7") {
      var C = new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
      throw C.headerType = y.type, C;
    }
    if (y.procType && y.procType.type === "ENCRYPTED")
      throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
    var m = e.fromDer(y.body);
    return a.messageFromAsn1(m);
  }, a.messageToPem = function(u, y) {
    var C = {
      type: "PKCS7",
      body: e.toDer(u.toAsn1()).getBytes()
    };
    return t.pem.encode(C, { maxline: y });
  }, a.messageFromAsn1 = function(u) {
    var y = {}, C = [];
    if (!e.validate(u, a.asn1.contentInfoValidator, y, C)) {
      var m = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
      throw m.errors = C, m;
    }
    var s = e.derToOid(y.contentType), h;
    switch (s) {
      case t.pki.oids.envelopedData:
        h = a.createEnvelopedData();
        break;
      case t.pki.oids.encryptedData:
        h = a.createEncryptedData();
        break;
      case t.pki.oids.signedData:
        h = a.createSignedData();
        break;
      default:
        throw new Error("Cannot read PKCS#7 message. ContentType with OID " + s + " is not (yet) supported.");
    }
    return h.fromAsn1(y.content.value[0]), h;
  }, a.createSignedData = function() {
    var u = null;
    return u = {
      type: t.pki.oids.signedData,
      version: 1,
      certificates: [],
      crls: [],
      // TODO: add json-formatted signer stuff here?
      signers: [],
      // populated during sign()
      digestAlgorithmIdentifiers: [],
      contentInfo: null,
      signerInfos: [],
      fromAsn1: function(m) {
        if (U(u, m, a.asn1.signedDataValidator), u.certificates = [], u.crls = [], u.digestAlgorithmIdentifiers = [], u.contentInfo = null, u.signerInfos = [], u.rawCapture.certificates)
          for (var s = u.rawCapture.certificates.value, h = 0; h < s.length; ++h)
            u.certificates.push(t.pki.certificateFromAsn1(s[h]));
      },
      toAsn1: function() {
        u.contentInfo || u.sign();
        for (var m = [], s = 0; s < u.certificates.length; ++s)
          m.push(t.pki.certificateToAsn1(u.certificates[s]));
        var h = [], v = e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            // Version
            e.create(
              e.Class.UNIVERSAL,
              e.Type.INTEGER,
              !1,
              e.integerToDer(u.version).getBytes()
            ),
            // DigestAlgorithmIdentifiers
            e.create(
              e.Class.UNIVERSAL,
              e.Type.SET,
              !0,
              u.digestAlgorithmIdentifiers
            ),
            // ContentInfo
            u.contentInfo
          ])
        ]);
        return m.length > 0 && v.value[0].value.push(
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, m)
        ), h.length > 0 && v.value[0].value.push(
          e.create(e.Class.CONTEXT_SPECIFIC, 1, !0, h)
        ), v.value[0].value.push(
          e.create(
            e.Class.UNIVERSAL,
            e.Type.SET,
            !0,
            u.signerInfos
          )
        ), e.create(
          e.Class.UNIVERSAL,
          e.Type.SEQUENCE,
          !0,
          [
            // ContentType
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(u.type).getBytes()
            ),
            // [0] SignedData
            v
          ]
        );
      },
      /**
       * Add (another) entity to list of signers.
       *
       * Note: If authenticatedAttributes are provided, then, per RFC 2315,
       * they must include at least two attributes: content type and
       * message digest. The message digest attribute value will be
       * auto-calculated during signing and will be ignored if provided.
       *
       * Here's an example of providing these two attributes:
       *
       * forge.pkcs7.createSignedData();
       * p7.addSigner({
       *   issuer: cert.issuer.attributes,
       *   serialNumber: cert.serialNumber,
       *   key: privateKey,
       *   digestAlgorithm: forge.pki.oids.sha1,
       *   authenticatedAttributes: [{
       *     type: forge.pki.oids.contentType,
       *     value: forge.pki.oids.data
       *   }, {
       *     type: forge.pki.oids.messageDigest
       *   }]
       * });
       *
       * TODO: Support [subjectKeyIdentifier] as signer's ID.
       *
       * @param signer the signer information:
       *          key the signer's private key.
       *          [certificate] a certificate containing the public key
       *            associated with the signer's private key; use this option as
       *            an alternative to specifying signer.issuer and
       *            signer.serialNumber.
       *          [issuer] the issuer attributes (eg: cert.issuer.attributes).
       *          [serialNumber] the signer's certificate's serial number in
       *           hexadecimal (eg: cert.serialNumber).
       *          [digestAlgorithm] the message digest OID, as a string, to use
       *            (eg: forge.pki.oids.sha1).
       *          [authenticatedAttributes] an optional array of attributes
       *            to also sign along with the content.
       */
      addSigner: function(m) {
        var s = m.issuer, h = m.serialNumber;
        if (m.certificate) {
          var v = m.certificate;
          typeof v == "string" && (v = t.pki.certificateFromPem(v)), s = v.issuer.attributes, h = v.serialNumber;
        }
        var B = m.key;
        if (!B)
          throw new Error(
            "Could not add PKCS#7 signer; no private key specified."
          );
        typeof B == "string" && (B = t.pki.privateKeyFromPem(B));
        var R = m.digestAlgorithm || t.pki.oids.sha1;
        switch (R) {
          case t.pki.oids.sha1:
          case t.pki.oids.sha256:
          case t.pki.oids.sha384:
          case t.pki.oids.sha512:
          case t.pki.oids.md5:
            break;
          default:
            throw new Error(
              "Could not add PKCS#7 signer; unknown message digest algorithm: " + R
            );
        }
        var c = m.authenticatedAttributes || [];
        if (c.length > 0) {
          for (var i = !1, n = !1, T = 0; T < c.length; ++T) {
            var V = c[T];
            if (!i && V.type === t.pki.oids.contentType) {
              if (i = !0, n)
                break;
              continue;
            }
            if (!n && V.type === t.pki.oids.messageDigest) {
              if (n = !0, i)
                break;
              continue;
            }
          }
          if (!i || !n)
            throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
        }
        u.signers.push({
          key: B,
          version: 1,
          issuer: s,
          serialNumber: h,
          digestAlgorithm: R,
          signatureAlgorithm: t.pki.oids.rsaEncryption,
          signature: null,
          authenticatedAttributes: c,
          unauthenticatedAttributes: []
        });
      },
      /**
       * Signs the content.
       * @param options Options to apply when signing:
       *    [detached] boolean. If signing should be done in detached mode. Defaults to false.
       */
      sign: function(m) {
        if (m = m || {}, (typeof u.content != "object" || u.contentInfo === null) && (u.contentInfo = e.create(
          e.Class.UNIVERSAL,
          e.Type.SEQUENCE,
          !0,
          [
            // ContentType
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(t.pki.oids.data).getBytes()
            )
          ]
        ), "content" in u)) {
          var s;
          u.content instanceof t.util.ByteBuffer ? s = u.content.bytes() : typeof u.content == "string" && (s = t.util.encodeUtf8(u.content)), m.detached ? u.detachedContent = e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, s) : u.contentInfo.value.push(
            // [0] EXPLICIT content
            e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
              e.create(
                e.Class.UNIVERSAL,
                e.Type.OCTETSTRING,
                !1,
                s
              )
            ])
          );
        }
        if (u.signers.length !== 0) {
          var h = y();
          C(h);
        }
      },
      verify: function() {
        throw new Error("PKCS#7 signature verification not yet implemented.");
      },
      /**
       * Add a certificate.
       *
       * @param cert the certificate to add.
       */
      addCertificate: function(m) {
        typeof m == "string" && (m = t.pki.certificateFromPem(m)), u.certificates.push(m);
      },
      /**
       * Add a certificate revokation list.
       *
       * @param crl the certificate revokation list to add.
       */
      addCertificateRevokationList: function(m) {
        throw new Error("PKCS#7 CRL support not yet implemented.");
      }
    }, u;
    function y() {
      for (var m = {}, s = 0; s < u.signers.length; ++s) {
        var h = u.signers[s], v = h.digestAlgorithm;
        v in m || (m[v] = t.md[t.pki.oids[v]].create()), h.authenticatedAttributes.length === 0 ? h.md = m[v] : h.md = t.md[t.pki.oids[v]].create();
      }
      u.digestAlgorithmIdentifiers = [];
      for (var v in m)
        u.digestAlgorithmIdentifiers.push(
          // AlgorithmIdentifier
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            // algorithm
            e.create(
              e.Class.UNIVERSAL,
              e.Type.OID,
              !1,
              e.oidToDer(v).getBytes()
            ),
            // parameters (null)
            e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
          ])
        );
      return m;
    }
    function C(m) {
      var s;
      if (u.detachedContent ? s = u.detachedContent : (s = u.contentInfo.value[1], s = s.value[0]), !s)
        throw new Error(
          "Could not sign PKCS#7 message; there is no content to sign."
        );
      var h = e.derToOid(u.contentInfo.value[0].value), v = e.toDer(s);
      v.getByte(), e.getBerValueLength(v), v = v.getBytes();
      for (var B in m)
        m[B].start().update(v);
      for (var R = /* @__PURE__ */ new Date(), c = 0; c < u.signers.length; ++c) {
        var i = u.signers[c];
        if (i.authenticatedAttributes.length === 0) {
          if (h !== t.pki.oids.data)
            throw new Error(
              "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data."
            );
        } else {
          i.authenticatedAttributesAsn1 = e.create(
            e.Class.CONTEXT_SPECIFIC,
            0,
            !0,
            []
          );
          for (var n = e.create(
            e.Class.UNIVERSAL,
            e.Type.SET,
            !0,
            []
          ), T = 0; T < i.authenticatedAttributes.length; ++T) {
            var V = i.authenticatedAttributes[T];
            V.type === t.pki.oids.messageDigest ? V.value = m[i.digestAlgorithm].digest() : V.type === t.pki.oids.signingTime && (V.value || (V.value = R)), n.value.push(l(V)), i.authenticatedAttributesAsn1.value.push(l(V));
          }
          v = e.toDer(n).getBytes(), i.md.start().update(v);
        }
        i.signature = i.key.sign(i.md, "RSASSA-PKCS1-V1_5");
      }
      u.signerInfos = g(u.signers);
    }
  }, a.createEncryptedData = function() {
    var u = null;
    return u = {
      type: t.pki.oids.encryptedData,
      version: 0,
      encryptedContent: {
        algorithm: t.pki.oids["aes256-CBC"]
      },
      /**
       * Reads an EncryptedData content block (in ASN.1 format)
       *
       * @param obj The ASN.1 representation of the EncryptedData content block
       */
      fromAsn1: function(y) {
        U(u, y, a.asn1.encryptedDataValidator);
      },
      /**
       * Decrypt encrypted content
       *
       * @param key The (symmetric) key as a byte buffer
       */
      decrypt: function(y) {
        y !== void 0 && (u.encryptedContent.key = y), E(u);
      }
    }, u;
  }, a.createEnvelopedData = function() {
    var u = null;
    return u = {
      type: t.pki.oids.envelopedData,
      version: 0,
      recipients: [],
      encryptedContent: {
        algorithm: t.pki.oids["aes256-CBC"]
      },
      /**
       * Reads an EnvelopedData content block (in ASN.1 format)
       *
       * @param obj the ASN.1 representation of the EnvelopedData content block.
       */
      fromAsn1: function(y) {
        var C = U(u, y, a.asn1.envelopedDataValidator);
        u.recipients = S(C.recipientInfos.value);
      },
      toAsn1: function() {
        return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          // ContentType
          e.create(
            e.Class.UNIVERSAL,
            e.Type.OID,
            !1,
            e.oidToDer(u.type).getBytes()
          ),
          // [0] EnvelopedData
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              // Version
              e.create(
                e.Class.UNIVERSAL,
                e.Type.INTEGER,
                !1,
                e.integerToDer(u.version).getBytes()
              ),
              // RecipientInfos
              e.create(
                e.Class.UNIVERSAL,
                e.Type.SET,
                !0,
                f(u.recipients)
              ),
              // EncryptedContentInfo
              e.create(
                e.Class.UNIVERSAL,
                e.Type.SEQUENCE,
                !0,
                b(u.encryptedContent)
              )
            ])
          ])
        ]);
      },
      /**
       * Find recipient by X.509 certificate's issuer.
       *
       * @param cert the certificate with the issuer to look for.
       *
       * @return the recipient object.
       */
      findRecipient: function(y) {
        for (var C = y.issuer.attributes, m = 0; m < u.recipients.length; ++m) {
          var s = u.recipients[m], h = s.issuer;
          if (s.serialNumber === y.serialNumber && h.length === C.length) {
            for (var v = !0, B = 0; B < C.length; ++B)
              if (h[B].type !== C[B].type || h[B].value !== C[B].value) {
                v = !1;
                break;
              }
            if (v)
              return s;
          }
        }
        return null;
      },
      /**
       * Decrypt enveloped content
       *
       * @param recipient The recipient object related to the private key
       * @param privKey The (RSA) private key object
       */
      decrypt: function(y, C) {
        if (u.encryptedContent.key === void 0 && y !== void 0 && C !== void 0)
          switch (y.encryptedContent.algorithm) {
            case t.pki.oids.rsaEncryption:
            case t.pki.oids.desCBC:
              var m = C.decrypt(y.encryptedContent.content);
              u.encryptedContent.key = t.util.createBuffer(m);
              break;
            default:
              throw new Error("Unsupported asymmetric cipher, OID " + y.encryptedContent.algorithm);
          }
        E(u);
      },
      /**
       * Add (another) entity to list of recipients.
       *
       * @param cert The certificate of the entity to add.
       */
      addRecipient: function(y) {
        u.recipients.push({
          version: 0,
          issuer: y.issuer.attributes,
          serialNumber: y.serialNumber,
          encryptedContent: {
            // We simply assume rsaEncryption here, since forge.pki only
            // supports RSA so far.  If the PKI module supports other
            // ciphers one day, we need to modify this one as well.
            algorithm: t.pki.oids.rsaEncryption,
            key: y.publicKey
          }
        });
      },
      /**
       * Encrypt enveloped content.
       *
       * This function supports two optional arguments, cipher and key, which
       * can be used to influence symmetric encryption.  Unless cipher is
       * provided, the cipher specified in encryptedContent.algorithm is used
       * (defaults to AES-256-CBC).  If no key is provided, encryptedContent.key
       * is (re-)used.  If that one's not set, a random key will be generated
       * automatically.
       *
       * @param [key] The key to be used for symmetric encryption.
       * @param [cipher] The OID of the symmetric cipher to use.
       */
      encrypt: function(y, C) {
        if (u.encryptedContent.content === void 0) {
          C = C || u.encryptedContent.algorithm, y = y || u.encryptedContent.key;
          var m, s, h;
          switch (C) {
            case t.pki.oids["aes128-CBC"]:
              m = 16, s = 16, h = t.aes.createEncryptionCipher;
              break;
            case t.pki.oids["aes192-CBC"]:
              m = 24, s = 16, h = t.aes.createEncryptionCipher;
              break;
            case t.pki.oids["aes256-CBC"]:
              m = 32, s = 16, h = t.aes.createEncryptionCipher;
              break;
            case t.pki.oids["des-EDE3-CBC"]:
              m = 24, s = 8, h = t.des.createEncryptionCipher;
              break;
            default:
              throw new Error("Unsupported symmetric cipher, OID " + C);
          }
          if (y === void 0)
            y = t.util.createBuffer(t.random.getBytes(m));
          else if (y.length() != m)
            throw new Error("Symmetric key has wrong length; got " + y.length() + " bytes, expected " + m + ".");
          u.encryptedContent.algorithm = C, u.encryptedContent.key = y, u.encryptedContent.parameter = t.util.createBuffer(
            t.random.getBytes(s)
          );
          var v = h(y);
          if (v.start(u.encryptedContent.parameter.copy()), v.update(u.content), !v.finish())
            throw new Error("Symmetric encryption failed.");
          u.encryptedContent.content = v.output;
        }
        for (var B = 0; B < u.recipients.length; ++B) {
          var R = u.recipients[B];
          if (R.encryptedContent.content === void 0)
            switch (R.encryptedContent.algorithm) {
              case t.pki.oids.rsaEncryption:
                R.encryptedContent.content = R.encryptedContent.key.encrypt(
                  u.encryptedContent.key.data
                );
                break;
              default:
                throw new Error("Unsupported asymmetric cipher, OID " + R.encryptedContent.algorithm);
            }
        }
      }
    }, u;
  };
  function p(u) {
    var y = {}, C = [];
    if (!e.validate(u, a.asn1.recipientInfoValidator, y, C)) {
      var m = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
      throw m.errors = C, m;
    }
    return {
      version: y.version.charCodeAt(0),
      issuer: t.pki.RDNAttributesAsArray(y.issuer),
      serialNumber: t.util.createBuffer(y.serial).toHex(),
      encryptedContent: {
        algorithm: e.derToOid(y.encAlgorithm),
        parameter: y.encParameter ? y.encParameter.value : void 0,
        content: y.encKey
      }
    };
  }
  function I(u) {
    return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // Version
      e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        e.integerToDer(u.version).getBytes()
      ),
      // IssuerAndSerialNumber
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // Name
        t.pki.distinguishedNameToAsn1({ attributes: u.issuer }),
        // Serial
        e.create(
          e.Class.UNIVERSAL,
          e.Type.INTEGER,
          !1,
          t.util.hexToBytes(u.serialNumber)
        )
      ]),
      // KeyEncryptionAlgorithmIdentifier
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // Algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(u.encryptedContent.algorithm).getBytes()
        ),
        // Parameter, force NULL, only RSA supported for now.
        e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
      ]),
      // EncryptedKey
      e.create(
        e.Class.UNIVERSAL,
        e.Type.OCTETSTRING,
        !1,
        u.encryptedContent.content
      )
    ]);
  }
  function S(u) {
    for (var y = [], C = 0; C < u.length; ++C)
      y.push(p(u[C]));
    return y;
  }
  function f(u) {
    for (var y = [], C = 0; C < u.length; ++C)
      y.push(I(u[C]));
    return y;
  }
  function r(u) {
    var y = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // version
      e.create(
        e.Class.UNIVERSAL,
        e.Type.INTEGER,
        !1,
        e.integerToDer(u.version).getBytes()
      ),
      // issuerAndSerialNumber
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // name
        t.pki.distinguishedNameToAsn1({ attributes: u.issuer }),
        // serial
        e.create(
          e.Class.UNIVERSAL,
          e.Type.INTEGER,
          !1,
          t.util.hexToBytes(u.serialNumber)
        )
      ]),
      // digestAlgorithm
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(u.digestAlgorithm).getBytes()
        ),
        // parameters (null)
        e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
      ])
    ]);
    if (u.authenticatedAttributesAsn1 && y.value.push(u.authenticatedAttributesAsn1), y.value.push(e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // algorithm
      e.create(
        e.Class.UNIVERSAL,
        e.Type.OID,
        !1,
        e.oidToDer(u.signatureAlgorithm).getBytes()
      ),
      // parameters (null)
      e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
    ])), y.value.push(e.create(
      e.Class.UNIVERSAL,
      e.Type.OCTETSTRING,
      !1,
      u.signature
    )), u.unauthenticatedAttributes.length > 0) {
      for (var C = e.create(e.Class.CONTEXT_SPECIFIC, 1, !0, []), m = 0; m < u.unauthenticatedAttributes.length; ++m) {
        var s = u.unauthenticatedAttributes[m];
        C.values.push(l(s));
      }
      y.value.push(C);
    }
    return y;
  }
  function g(u) {
    for (var y = [], C = 0; C < u.length; ++C)
      y.push(r(u[C]));
    return y;
  }
  function l(u) {
    var y;
    if (u.type === t.pki.oids.contentType)
      y = e.create(
        e.Class.UNIVERSAL,
        e.Type.OID,
        !1,
        e.oidToDer(u.value).getBytes()
      );
    else if (u.type === t.pki.oids.messageDigest)
      y = e.create(
        e.Class.UNIVERSAL,
        e.Type.OCTETSTRING,
        !1,
        u.value.bytes()
      );
    else if (u.type === t.pki.oids.signingTime) {
      var C = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z"), m = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z"), s = u.value;
      if (typeof s == "string") {
        var h = Date.parse(s);
        isNaN(h) ? s.length === 13 ? s = e.utcTimeToDate(s) : s = e.generalizedTimeToDate(s) : s = new Date(h);
      }
      s >= C && s < m ? y = e.create(
        e.Class.UNIVERSAL,
        e.Type.UTCTIME,
        !1,
        e.dateToUtcTime(s)
      ) : y = e.create(
        e.Class.UNIVERSAL,
        e.Type.GENERALIZEDTIME,
        !1,
        e.dateToGeneralizedTime(s)
      );
    }
    return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
      // AttributeType
      e.create(
        e.Class.UNIVERSAL,
        e.Type.OID,
        !1,
        e.oidToDer(u.type).getBytes()
      ),
      e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [
        // AttributeValue
        y
      ])
    ]);
  }
  function b(u) {
    return [
      // ContentType, always Data for the moment
      e.create(
        e.Class.UNIVERSAL,
        e.Type.OID,
        !1,
        e.oidToDer(t.pki.oids.data).getBytes()
      ),
      // ContentEncryptionAlgorithmIdentifier
      e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        // Algorithm
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OID,
          !1,
          e.oidToDer(u.algorithm).getBytes()
        ),
        // Parameters (IV)
        u.parameter ? e.create(
          e.Class.UNIVERSAL,
          e.Type.OCTETSTRING,
          !1,
          u.parameter.getBytes()
        ) : void 0
      ]),
      // [0] EncryptedContent
      e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
        e.create(
          e.Class.UNIVERSAL,
          e.Type.OCTETSTRING,
          !1,
          u.content.getBytes()
        )
      ])
    ];
  }
  function U(u, y, C) {
    var m = {}, s = [];
    if (!e.validate(y, C, m, s)) {
      var h = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
      throw h.errors = h, h;
    }
    var v = e.derToOid(m.contentType);
    if (v !== t.pki.oids.data)
      throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
    if (m.encryptedContent) {
      var B = "";
      if (t.util.isArray(m.encryptedContent))
        for (var R = 0; R < m.encryptedContent.length; ++R) {
          if (m.encryptedContent[R].type !== e.Type.OCTETSTRING)
            throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
          B += m.encryptedContent[R].value;
        }
      else
        B = m.encryptedContent;
      u.encryptedContent = {
        algorithm: e.derToOid(m.encAlgorithm),
        parameter: t.util.createBuffer(m.encParameter.value),
        content: t.util.createBuffer(B)
      };
    }
    if (m.content) {
      var B = "";
      if (t.util.isArray(m.content))
        for (var R = 0; R < m.content.length; ++R) {
          if (m.content[R].type !== e.Type.OCTETSTRING)
            throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
          B += m.content[R].value;
        }
      else
        B = m.content;
      u.content = t.util.createBuffer(B);
    }
    return u.version = m.version.charCodeAt(0), u.rawCapture = m, m;
  }
  function E(u) {
    if (u.encryptedContent.key === void 0)
      throw new Error("Symmetric key not available.");
    if (u.content === void 0) {
      var y;
      switch (u.encryptedContent.algorithm) {
        case t.pki.oids["aes128-CBC"]:
        case t.pki.oids["aes192-CBC"]:
        case t.pki.oids["aes256-CBC"]:
          y = t.aes.createDecryptionCipher(u.encryptedContent.key);
          break;
        case t.pki.oids.desCBC:
        case t.pki.oids["des-EDE3-CBC"]:
          y = t.des.createDecryptionCipher(u.encryptedContent.key);
          break;
        default:
          throw new Error("Unsupported symmetric cipher, OID " + u.encryptedContent.algorithm);
      }
      if (y.start(u.encryptedContent.parameter), y.update(u.encryptedContent.content), !y.finish())
        throw new Error("Symmetric decryption failed.");
      u.content = y.output;
    }
  }
  return Mr.exports;
}
var xr = { exports: {} }, qa;
function Es() {
  if (qa) return xr.exports;
  qa = 1;
  var t = ve();
  Nt(), Gt(), Jr(), jt(), Se();
  var e = xr.exports = t.ssh = t.ssh || {};
  e.privateKeyToPutty = function(S, f, r) {
    r = r || "", f = f || "";
    var g = "ssh-rsa", l = f === "" ? "none" : "aes256-cbc", b = "PuTTY-User-Key-File-2: " + g + `\r
`;
    b += "Encryption: " + l + `\r
`, b += "Comment: " + r + `\r
`;
    var U = t.util.createBuffer();
    p(U, g), a(U, S.e), a(U, S.n);
    var E = t.util.encode64(U.bytes(), 64), u = Math.floor(E.length / 66) + 1;
    b += "Public-Lines: " + u + `\r
`, b += E;
    var y = t.util.createBuffer();
    a(y, S.d), a(y, S.p), a(y, S.q), a(y, S.qInv);
    var C;
    if (!f)
      C = t.util.encode64(y.bytes(), 64);
    else {
      var m = y.length() + 16 - 1;
      m -= m % 16;
      var s = I(y.bytes());
      s.truncate(s.length() - m + y.length()), y.putBuffer(s);
      var h = t.util.createBuffer();
      h.putBuffer(I("\0\0\0\0", f)), h.putBuffer(I("\0\0\0", f));
      var v = t.aes.createEncryptionCipher(h.truncate(8), "CBC");
      v.start(t.util.createBuffer().fillWithByte(0, 16)), v.update(y.copy()), v.finish();
      var B = v.output;
      B.truncate(16), C = t.util.encode64(B.bytes(), 64);
    }
    u = Math.floor(C.length / 66) + 1, b += `\r
Private-Lines: ` + u + `\r
`, b += C;
    var R = I("putty-private-key-file-mac-key", f), c = t.util.createBuffer();
    p(c, g), p(c, l), p(c, r), c.putInt32(U.length()), c.putBuffer(U), c.putInt32(y.length()), c.putBuffer(y);
    var i = t.hmac.create();
    return i.start("sha1", R), i.update(c.bytes()), b += `\r
Private-MAC: ` + i.digest().toHex() + `\r
`, b;
  }, e.publicKeyToOpenSSH = function(S, f) {
    var r = "ssh-rsa";
    f = f || "";
    var g = t.util.createBuffer();
    return p(g, r), a(g, S.e), a(g, S.n), r + " " + t.util.encode64(g.bytes()) + " " + f;
  }, e.privateKeyToOpenSSH = function(S, f) {
    return f ? t.pki.encryptRsaPrivateKey(
      S,
      f,
      { legacy: !0, algorithm: "aes128" }
    ) : t.pki.privateKeyToPem(S);
  }, e.getPublicKeyFingerprint = function(S, f) {
    f = f || {};
    var r = f.md || t.md.md5.create(), g = "ssh-rsa", l = t.util.createBuffer();
    p(l, g), a(l, S.e), a(l, S.n), r.start(), r.update(l.getBytes());
    var b = r.digest();
    if (f.encoding === "hex") {
      var U = b.toHex();
      return f.delimiter ? U.match(/.{2}/g).join(f.delimiter) : U;
    } else {
      if (f.encoding === "binary")
        return b.getBytes();
      if (f.encoding)
        throw new Error('Unknown encoding "' + f.encoding + '".');
    }
    return b;
  };
  function a(S, f) {
    var r = f.toString(16);
    r[0] >= "8" && (r = "00" + r);
    var g = t.util.hexToBytes(r);
    S.putInt32(g.length), S.putBytes(g);
  }
  function p(S, f) {
    S.putInt32(f.length), S.putString(f);
  }
  function I() {
    for (var S = t.md.sha1.create(), f = arguments.length, r = 0; r < f; ++r)
      S.update(arguments[r]);
    return S.digest();
  }
  return xr.exports;
}
var Qa, Ja;
function Ss() {
  return Ja || (Ja = 1, Qa = ve(), Nt(), ds(), yt(), Qr(), _t(), gs(), Gt(), ys(), vs(), ms(), ln(), Yr(), Ot(), an(), un(), Cs(), cn(), nn(), tn(), Wr(), ht(), rn(), Es(), fn(), Se()), Qa;
}
Ss();
const bs = { button: { think: "深度思考", net: "联网搜索", copyCode: "复制代码", expand: "展开", collapse: "折叠", copy: "复制", reload: "重新生成", like: "点赞", dislike: "点踩" }, newChat: "创建新对话", placeholder: "请输入消息，按 Enter 发送", loading: "正在生成中，请稍候...", thinking: "正在思考中...", thinked: "已深度思考", userMessages: "我的提问", noUserMessages: "暂无用户消息", note: "内容由AI生成，无法确保准确性和完整性，仅供参考", empty: "参考npm使用文档，开始你的对话吧。npm地址：https://www.npmjs.com/package/@kernelift/ai-chat", welcome: "欢迎使用AI聊天组件，该工具是由Kernelift开发的开源项目，旨在为用户提供便捷的AI对话体验。" }, dn = {
  chat: bs
}, Is = { class: "kernelift-chat-container__box" }, As = {
  key: 0,
  class: "kernelift-chat-container__collapsed-header"
}, Bs = { class: "kernelift-chat-container__header-actions" }, Ts = { class: "material-symbols--dark-mode" }, ks = { class: "material-symbols--light-mode" }, Ns = ["title"], ws = ["title"], Rs = {
  key: 0,
  class: "material-symbols--keyboard-off"
}, Ls = {
  key: 1,
  class: "material-symbols--keyboard"
}, Us = { class: "kernelift-chat-container__user-messages-panel" }, Ds = { class: "kernelift-chat-container__user-messages-header" }, Vs = { class: "kernelift-chat-container__user-messages-list" }, Ps = ["onClick"], Ks = { class: "kernelift-chat-container__user-message-index" }, Os = { class: "kernelift-chat-container__user-message-content" }, Ms = {
  key: 0,
  class: "kernelift-chat-container__user-messages-empty"
}, xs = { class: "kernelift-chat-container__messages-section" }, Fs = { class: "kernelift-chat-container__messages-container" }, Gs = { class: "kernelift-chat-container__messages-list-wrapper" }, js = {
  key: 1,
  class: "kernelift-chat-container__empty-state"
}, zs = { class: "kernelift-chat-container__empty-text" }, qs = { class: "kernelift-chat-container__empty-text" }, Qs = {
  key: 2,
  class: "kernelift-chat-container__next-tips"
}, Js = ["onClick"], Hs = ["title"], Ys = { class: "kernelift-chat-container__footer-wrapper" }, Ws = {
  key: 0,
  class: "kernelift-chat-container__sender-tools"
}, Xs = { class: "kernelift-chat-container__footer-note" }, Zs = { class: "kernelift-chat-container__workspace-close" }, Fr = 62, _s = 300, $s = /* @__PURE__ */ Kt({
  __name: "chat-container",
  props: /* @__PURE__ */ Et({
    uuid: { default: "default" },
    records: { default: () => [] },
    recordActions: { default: () => [] },
    hasHeader: { type: Boolean, default: !0 },
    headerHeight: { default: 38 },
    hasThemeMode: { type: Boolean, default: !1 },
    inputHeight: { default: 140 },
    hasThinking: { type: Boolean, default: !0 },
    hasNetSearch: { type: Boolean, default: !1 },
    hasSenderTools: { type: Boolean, default: !1 },
    alwaysShowSenderTools: { type: Boolean, default: !1 },
    showWorkspace: { type: Boolean, default: !0 },
    showSender: { type: Boolean, default: !0 },
    isGenerateLoading: { type: Boolean },
    defaultRecordId: {},
    defaultCollapse: { type: Boolean, default: !1 },
    defaultAsideWidth: { default: 250 },
    markdownClassName: {},
    primaryColor: { default: "#615ced" },
    themeMode: { default: "light" },
    enableNet: { type: Boolean },
    enableThink: { type: Boolean },
    onCopy: {},
    i18n: { default: () => dn },
    autoScroll: { type: Boolean, default: !0 },
    autoScrollPauseTime: { default: 3e3 },
    markdownPlugins: {},
    markdownOptions: {},
    onMarkdownAfterRender: {}
  }, {
    messages: {
      required: !0,
      default: () => []
    },
    messagesModifiers: {},
    modelValue: {},
    modelModifiers: {},
    loading: { type: Boolean },
    loadingModifiers: {},
    "record-id": {},
    "record-idModifiers": {}
  }),
  emits: /* @__PURE__ */ Et(["send", "cancel", "clear", "change-record", "change-collapse", "change-theme", "change-aside-width", "click-logo", "bubble-event", "close-workspace", "scroll-bottom"], ["update:messages", "update:modelValue", "update:loading", "update:record-id"]),
  setup(t, { expose: e, emit: a }) {
    Wa((J) => ({
      d12ae074: J.primaryColor,
      v22505420: g.value,
      v4f354832: f.value[0],
      v4f3547f4: f.value[1],
      v4f3547b6: f.value[2],
      v4f354778: f.value[3],
      v4f35473a: f.value[4],
      v4d772450: Be.value,
      v65471b75: Te.value,
      ca7bf4d0: Ne.value
    }));
    const p = t, I = parseFloat(getComputedStyle(document.documentElement).fontSize), S = tt(Fr), f = De(() => ss(p.primaryColor, 5, 0.8, 4));
    function r(J) {
      if (!J || !J.startsWith("#")) return "0, 0, 0";
      const ee = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(J);
      return ee ? `${parseInt(ee[1] ?? "0", 16)}, ${parseInt(ee[2] ?? "0", 16)}, ${parseInt(ee[3] ?? "0", 16)}` : "0, 0, 0";
    }
    const g = De(() => r(p.primaryColor)), l = De(() => p.records || []), b = gt(t, "messages"), U = gt(t, "modelValue"), E = gt(t, "loading"), u = tt(null), y = gt(t, "record-id"), C = Ut(p.uuid + "__kl-ai-chat_enable-chat", p.enableNet), m = Ut(p.uuid + "__kl-ai-chat_enable-think", p.enableThink), s = a, h = (J) => {
      const ee = !u.value;
      E.value = !0, s("send", J, m.value, C.value, ee);
    }, v = () => {
      E.value = !1, s("cancel");
    };
    function B(J) {
      u.value = J, y.value = J?.id, $.value && L(!1), T.value = !1, s("change-record", J);
    }
    At(
      () => y.value,
      (J) => {
        J ? u.value = p.records.find((ee) => ee.id === J) : u.value = null;
      },
      {
        immediate: !0
      }
    );
    const R = De(() => {
      if (b.value[b.value.length - 1]?.nextTips)
        return b.value[b.value.length - 1].nextTips;
    }), c = De(() => b.value.filter((J) => J.role === "user")), i = tt(), n = tt(!1), T = tt(!1), V = tt(!1);
    let O = null, D = !1, M = 0;
    const x = () => {
      !p.autoScroll || n.value || qr(() => {
        G();
      });
    }, G = (J = !1) => {
      i.value && (J ? i.value.scrollTo({
        top: i.value.scrollHeight,
        behavior: "smooth"
      }) : i.value.scrollTop = i.value.scrollHeight);
    }, z = () => {
      const J = i.value;
      if (!J) return;
      const ee = J.scrollHeight - J.scrollTop - J.clientHeight < 50, ae = J.scrollHeight > J.clientHeight;
      T.value = ae && !ee, !(!p.autoScroll || !E.value) && (!ee && !D ? (D = !0, n.value = !0, O && clearTimeout(O), O = setTimeout(() => {
        n.value = !1, D = !1, E.value && G();
      }, p.autoScrollPauseTime)) : ee && (D = !1, n.value = !1, O && (clearTimeout(O), O = null)));
    };
    At([() => E.value, () => p.isGenerateLoading, () => b.value.length], () => {
      x();
    }), At(
      () => E.value ? b.value[b.value.length - 1]?.content : null,
      (J, ee) => {
        J !== ee && x();
      }
    ), At(
      () => U.value,
      (J) => {
        if (!J || J.trim() === "") {
          S.value = Fr;
          return;
        }
        const ee = J.split(`
`).length, ae = $.value ? 30 : 60, me = Math.max(ee, Math.ceil(J.length / ae));
        if (me >= 3) {
          const lt = me * 24 + 14;
          S.value = Math.min(lt, p.inputHeight);
        } else
          S.value = Fr;
      }
    );
    const Y = Ut(p.uuid + "__kl-ai-chat_aside-width", p.defaultAsideWidth), Z = tt(!1), te = tt(0), ue = tt(0);
    At(
      () => Y.value,
      (J) => {
        s("change-aside-width", J);
      }
    );
    const he = (J) => {
      Z.value = !0, te.value = J.clientX, ue.value = Y.value, document.body.style.userSelect = "none";
    }, Ce = (J) => {
      if (!Z.value) return;
      const ee = J.clientX - te.value;
      let ae = ue.value + ee;
      const me = Math.max(15.6 * I, 250);
      ae = Math.max(me, Math.min(700, window.innerWidth - me, ae)), Y.value = ae;
    }, Ie = () => {
      Z.value = !1, document.body.style.userSelect = "";
    };
    function _() {
      const J = window.innerWidth;
      $.value = J <= 768, $.value && (Oe.value = !1, X.value = !0);
    }
    zr(() => {
      p.defaultRecordId && B(
        l.value.find((J) => J.id === p.defaultRecordId)
      ), _(), document.addEventListener("mousemove", Ce), document.addEventListener("mouseup", Ie), window.addEventListener("resize", _);
    }), Ya(() => {
      document.removeEventListener("mousemove", Ce), document.removeEventListener("mouseup", Ie), window.removeEventListener("resize", _), O && (clearTimeout(O), O = null);
    });
    const $ = tt(typeof window < "u" ? window.innerWidth <= 768 : !1), X = Ut(p.uuid + "__kl-ai-chat_collapse", p.defaultCollapse), Oe = Ut(p.uuid + "__kl-ai-chat_show-aside", !0), pe = Ut(p.uuid + "__kl-ai-chat_sender-visible", !0);
    $.value && (X.value = !0, Oe.value = !1);
    const d = tt(!1);
    function L(J) {
      if (J === X.value) return;
      d.value = !0, X.value = J, Oe.value = !J, s("change-collapse", J);
      const ee = setTimeout(() => {
        d.value = !1, clearTimeout(ee);
      }, 200);
    }
    function w(J) {
      s("change-theme", J);
    }
    function o(J, ee) {
      s("bubble-event", J, ee);
    }
    function k() {
      s("close-workspace");
    }
    function F(J) {
      U.value = J;
    }
    function K() {
      G(!0);
    }
    function Q() {
      c.value.length > 0 && (V.value = !V.value);
    }
    function se(J) {
      const ee = (/* @__PURE__ */ new Date()).getTime(), ae = ee - M;
      ae < _s && ae > 0 && (J.preventDefault(), Q()), M = ee;
    }
    function le() {
      c.value.length > 0 && (V.value = !V.value);
    }
    function q(J) {
      if (!i.value) return;
      const ee = b.value.findIndex((Ke) => Ke.id === J);
      if (ee === -1) return;
      const me = i.value.querySelectorAll(".kernelift-chat-bubble")[ee];
      me && (me.scrollIntoView({ behavior: "smooth", block: "center" }), V.value = !1);
    }
    function ie() {
      u.value = null, y.value = void 0, b.value = [], $.value && L(!1), T.value = !1, s("clear");
    }
    function fe() {
      pe.value = !pe.value;
    }
    function Ee() {
      $.value && !X.value && L(!0);
    }
    const ge = De(() => ({
      "kernelift-chat-container__aside--transition": !Z.value,
      "mobile-aside": $.value
    })), ke = De(() => {
      const J = {
        width: $.value ? "100%" : X.value ? "0px" : `${Y.value}px`,
        zIndex: X.value && !d.value ? -1 : 99,
        opacity: X.value ? 0 : 1,
        transform: X.value && !$.value ? "translateX(-100%)" : "translateX(0%)"
      };
      return $.value ? J.backgroundColor = X.value ? "transparent" : "#1b1b1b56" : J.backgroundColor = "var(--kl-background-color, #fff)", J;
    }), we = De(() => {
      const J = {
        width: $.value ? "80%" : "100%",
        transform: X.value && $.value ? "translateX(-100%)" : "translateX(0%)",
        backgroundColor: "var(--kl-background-color, #fff)"
      };
      return $.value && (J.transition = "all 0.2s ease"), J;
    }), Ae = De(() => p.hasSenderTools ? pe.value && p.showSender || p.alwaysShowSenderTools : !1), Ne = De(() => `calc(100% - ${(p.showSender && pe.value ? S.value + 52 : 0) / I}rem - ${(Ae.value ? 40 : 0) / I}rem - 2rem)`), Be = De(() => `${p.headerHeight / I}rem`), Te = De(() => `${(p.headerHeight + 8) / I}rem`), Re = De(() => ((p.showSender && pe.value ? S.value + 52 : 0) + (Ae.value ? 40 : 0)) / I + "rem"), Ue = De(() => (p.markdownClassName || "") + (p.themeMode === "dark" ? " dark" : ""));
    return e({
      isMobile: $,
      collapse: X,
      asideWidth: Y,
      scrollToBottom: G
    }), (J, ee) => (ce(), de("div", {
      class: rt(["kernelift-chat-container", {
        dark: t.themeMode === "dark"
      }])
    }, [
      ye(J.$slots, "left-aside", { mobile: $.value }, void 0, !0),
      re("div", Is, [
        re("aside", {
          class: rt(["kernelift-chat-container__aside", ge.value]),
          style: Pt(ke.value),
          onClick: Gr(Ee, ["self"])
        }, [
          ye(J.$slots, "aside", {
            record: u.value,
            mobile: $.value
          }, () => [
            Ct(qi, {
              modelValue: u.value,
              "onUpdate:modelValue": ee[0] || (ee[0] = (ae) => u.value = ae),
              style: Pt(we.value),
              data: t.records,
              "theme-mode": t.themeMode,
              collapse: at(X) && !d.value,
              actions: t.recordActions,
              i18n: t.i18n,
              "has-theme-mode": t.hasThemeMode,
              onClear: ie,
              onChange: B,
              onClickLogo: ee[1] || (ee[1] = (ae) => s("click-logo")),
              onScrollBottom: ee[2] || (ee[2] = (ae) => s("scroll-bottom")),
              onChangeCollapse: L,
              onChangeTheme: w
            }, {
              logo: xe(() => [
                ye(J.$slots, "logo", { mobile: $.value }, void 0, !0)
              ]),
              footer: xe(() => [
                ye(J.$slots, "record-footer", {
                  record: u.value,
                  mobile: $.value
                }, void 0, !0)
              ]),
              "new-chat-button": xe(({ execute: ae }) => [
                ye(J.$slots, "new-chat-button", {
                  mobile: $.value,
                  execute: ae
                }, void 0, !0)
              ]),
              "record-dropdown": xe(() => [
                ye(J.$slots, "record-dropdown", { mobile: $.value }, void 0, !0)
              ]),
              _: 3
            }, 8, ["modelValue", "style", "data", "theme-mode", "collapse", "actions", "i18n", "has-theme-mode"])
          ], !0)
        ], 6),
        !at(X) && !$.value ? (ce(), de("div", {
          key: 0,
          class: "kernelift-chat-container__resize-handle",
          onMousedown: he
        }, null, 32)) : Ve("", !0),
        re("main", {
          class: rt(["kernelift-chat-container__main", {
            "kernelift-chat-container__main--flex": t.showWorkspace
          }])
        }, [
          re("div", {
            class: rt(["kernelift-chat-container__chat-area", {
              "kernelift-chat-container__chat-area--full": !t.showWorkspace || $.value,
              "kernelift-chat-container__chat-area--half": t.showWorkspace && !$.value
            }])
          }, [
            t.hasHeader ? (ce(), de("header", {
              key: 0,
              class: "kernelift-chat-container__header",
              onDblclick: Q,
              onClick: ee[6] || (ee[6] = (ae) => $.value ? se : void 0)
            }, [
              ye(J.$slots, "header", {
                record: u.value,
                mobile: $.value
              }, () => [
                st(Ct(ns, { record: u.value }, null, 8, ["record"]), [
                  [ct, !$.value]
                ])
              ], !0),
              at(X) ? (ce(), de("div", As, [
                re("div", {
                  class: "kernelift-chat-container__logo",
                  onClick: ee[3] || (ee[3] = (ae) => s("click-logo"))
                }, [
                  ye(J.$slots, "header-logo", { mobile: $.value }, () => [
                    ee[13] || (ee[13] = re("img", {
                      src: jr,
                      class: "kernelift-chat-container__logo-img"
                    }, null, -1))
                  ], !0)
                ]),
                re("div", Bs, [
                  t.hasThemeMode ? (ce(), de("div", {
                    key: 0,
                    class: "kernelift-chat-container__header-action",
                    onClick: ee[4] || (ee[4] = (ae) => w(t.themeMode === "light" ? "dark" : "light"))
                  }, [
                    st(re("i", Ts, null, 512), [
                      [ct, t.themeMode === "light"]
                    ]),
                    st(re("i", ks, null, 512), [
                      [ct, t.themeMode === "dark"]
                    ])
                  ])) : Ve("", !0),
                  st(re("div", {
                    class: "kernelift-chat-container__header-action",
                    onClick: ee[5] || (ee[5] = (ae) => L(!1))
                  }, [...ee[14] || (ee[14] = [
                    re("i", { class: "material-symbols--left-panel-open-outline" }, null, -1)
                  ])], 512), [
                    [ct, at(X)]
                  ]),
                  c.value.length > 0 ? (ce(), de("div", {
                    key: 1,
                    class: "kernelift-chat-container__header-action",
                    onClick: le,
                    title: t.i18n?.chat?.userMessages ?? "我的提问"
                  }, [...ee[15] || (ee[15] = [
                    re("i", { class: "material-symbols--article-person" }, null, -1)
                  ])], 8, Ns)) : Ve("", !0),
                  t.showSender ? (ce(), de("div", {
                    key: 2,
                    class: "kernelift-chat-container__header-action",
                    onClick: fe,
                    title: at(pe) ? t.i18n?.chat?.hideSender ?? "隐藏输入框" : t.i18n?.chat?.showSender ?? "显示输入框"
                  }, [
                    at(pe) ? (ce(), de("i", Rs)) : (ce(), de("i", Ls))
                  ], 8, ws)) : Ve("", !0)
                ])
              ])) : Ve("", !0)
            ], 32)) : Ve("", !0),
            Ct(Zr, { name: "user-messages-fade" }, {
              default: xe(() => [
                V.value ? (ce(), de("div", {
                  key: 0,
                  class: "kernelift-chat-container__user-messages-overlay",
                  onClick: ee[8] || (ee[8] = Gr((ae) => V.value = !1, ["self"]))
                }, [
                  re("div", Us, [
                    re("div", Ds, [
                      re("span", null, Pe(t.i18n?.chat?.userMessages ?? "我的提问"), 1),
                      re("i", {
                        class: "material-symbols--close",
                        onClick: ee[7] || (ee[7] = (ae) => V.value = !1)
                      })
                    ]),
                    re("div", Vs, [
                      (ce(!0), de(Dt, null, Vt(c.value, (ae, me) => (ce(), de("div", {
                        key: ae.id,
                        class: "kernelift-chat-container__user-message-item",
                        onClick: (Ke) => q(ae.id)
                      }, [
                        re("div", Ks, Pe(me + 1), 1),
                        re("div", Os, Pe(ae.content.substring(0, 100)) + Pe(ae.content.length > 100 ? "..." : ""), 1)
                      ], 8, Ps))), 128)),
                      c.value.length === 0 ? (ce(), de("div", Ms, Pe(t.i18n?.chat?.noUserMessages ?? "暂无提问记录"), 1)) : Ve("", !0)
                    ])
                  ])
                ])) : Ve("", !0)
              ]),
              _: 1
            }),
            re("section", xs, [
              re("div", Fs, [
                b.value && b.value.length ? (ce(), de("div", {
                  key: 0,
                  ref_key: "messagesListRef",
                  ref: i,
                  class: "kernelift-chat-container__messages-list",
                  onScroll: z
                }, [
                  re("div", Gs, [
                    (ce(!0), de(Dt, null, Vt(b.value, (ae, me) => (ce(), Zt($r, {
                      modelValue: b.value[me],
                      "onUpdate:modelValue": (Ke) => b.value[me] = Ke,
                      key: ae.id,
                      "markdown-class": Ue.value,
                      "is-last": me === b.value.length - 1,
                      "on-copy": t.onCopy,
                      i18n: t.i18n,
                      "is-mobile": $.value,
                      plugins: t.markdownPlugins,
                      options: t.markdownOptions,
                      "after-render": t.onMarkdownAfterRender,
                      "data-message-id": ae.id,
                      "theme-mode": t.themeMode,
                      class: "kernelift-chat-bubble",
                      onBubbleEvent: o
                    }, {
                      header: xe(() => [
                        ye(J.$slots, "bubble-header", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      footer: xe(() => [
                        ye(J.$slots, "bubble-footer", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      "bubble-event": xe(() => [
                        ye(J.$slots, "bubble-event", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      "content-header": xe(() => [
                        ye(J.$slots, "bubble-content-header", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      "content-footer": xe(() => [
                        ye(J.$slots, "bubble-content-footer", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      "thinking-header": xe(() => [
                        ye(J.$slots, "bubble-thinking-header", {
                          data: ae,
                          mobile: $.value
                        }, void 0, !0)
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "markdown-class", "is-last", "on-copy", "i18n", "is-mobile", "plugins", "options", "after-render", "data-message-id", "theme-mode"]))), 128)),
                    t.isGenerateLoading ? (ce(), Zt($r, {
                      key: 0,
                      "model-value": {
                        id: "generate-loading",
                        role: "assistant",
                        content: t.i18n?.chat?.loading ?? "正在生成中，请稍候...",
                        loading: !0
                      },
                      i18n: t.i18n,
                      "theme-mode": t.themeMode,
                      "markdown-class": Ue.value,
                      "is-mobile": $.value,
                      plugins: t.markdownPlugins,
                      options: t.markdownOptions,
                      "after-render": t.onMarkdownAfterRender
                    }, {
                      content: xe(() => [
                        ye(J.$slots, "bubble-loading-content", { mobile: $.value }, () => [
                          re("div", {
                            class: rt(["kernelift-chat-container__loading-text", Ue.value])
                          }, [
                            Ct(Za, { style: { width: "1.125rem", height: "1.125rem", "margin-right": "0.5rem" } }),
                            re("div", null, Pe(t.i18n?.chat?.loading ?? "正在生成中，请稍候..."), 1)
                          ], 2)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["model-value", "i18n", "theme-mode", "markdown-class", "is-mobile", "plugins", "options", "after-render"])) : Ve("", !0)
                  ])
                ], 544)) : (ce(), de("div", js, [
                  ye(J.$slots, "empty", { mobile: $.value }, () => [
                    re("div", null, [
                      ee[16] || (ee[16] = re("div", { class: "kernelift-chat-container__empty-img-wrapper" }, [
                        re("img", {
                          src: jr,
                          class: "kernelift-chat-container__empty-img"
                        })
                      ], -1)),
                      re("div", zs, Pe(t.i18n?.chat?.welcome ?? "欢迎使用AI聊天组件，该工具是由Kernelift开发的开源项目，旨在为用户提供便捷的AI对话体验。"), 1),
                      re("div", qs, Pe(t.i18n?.chat?.empty ?? "参考npm使用文档，开始你的对话吧。npm地址：https://www.npmjs.com/package/@kernelift/ai-chat"), 1)
                    ])
                  ], !0)
                ])),
                R.value?.length && !$.value && !U.value ? (ce(), de("div", Qs, [
                  (ce(!0), de(Dt, null, Vt(R.value, (ae) => (ce(), de("div", {
                    key: ae,
                    class: "kernelift-chat-container__next-tip",
                    onClick: () => F(ae)
                  }, Pe(ae), 9, Js))), 128))
                ])) : Ve("", !0),
                Ct(Zr, { name: "scroll-to-bottom-fade" }, {
                  default: xe(() => [
                    T.value ? (ce(), de("div", {
                      key: 0,
                      class: "kernelift-chat-container__scroll-to-bottom",
                      onClick: K,
                      title: t.i18n?.chat?.scrollToBottom ?? "滚动到底部"
                    }, [...ee[17] || (ee[17] = [
                      re("i", { class: "material-symbols--stat-minus-1" }, null, -1)
                    ])], 8, Hs)) : Ve("", !0)
                  ]),
                  _: 1
                })
              ])
            ]),
            re("footer", {
              class: "kernelift-chat-container__footer",
              style: Pt({
                height: Re.value
              })
            }, [
              re("div", Ys, [
                Ae.value ? (ce(), de("div", Ws, [
                  ye(J.$slots, "sender-tools", { mobile: $.value }, void 0, !0)
                ])) : Ve("", !0),
                t.showSender && at(pe) ? (ce(), Zt(ts, {
                  key: 1,
                  modelValue: U.value,
                  "onUpdate:modelValue": ee[9] || (ee[9] = (ae) => U.value = ae),
                  "enable-net": at(C),
                  "onUpdate:enableNet": ee[10] || (ee[10] = (ae) => _r(C) ? C.value = ae : null),
                  "enable-think": at(m),
                  "onUpdate:enableThink": ee[11] || (ee[11] = (ae) => _r(m) ? m.value = ae : null),
                  "has-net-search": t.hasNetSearch,
                  "has-thinking": t.hasThinking,
                  "input-height": S.value,
                  loading: E.value,
                  i18n: t.i18n,
                  "is-mobile": $.value,
                  onSend: h,
                  onCancel: v
                }, {
                  tools: xe(({ value: ae, loading: me }) => [
                    ye(J.$slots, "sender-footer-tools", {
                      value: ae,
                      loading: me,
                      enableNet: at(C),
                      enableThink: at(m),
                      mobile: $.value
                    }, void 0, !0)
                  ]),
                  "send-button": xe(({ execute: ae, state: me }) => [
                    ye(J.$slots, "send-button", {
                      execute: ae,
                      state: me,
                      mobile: $.value
                    }, void 0, !0)
                  ]),
                  "think-button": xe(({ execute: ae, state: me }) => [
                    ye(J.$slots, "think-button", {
                      state: me,
                      execute: ae,
                      mobile: $.value
                    }, void 0, !0)
                  ]),
                  "net-button": xe(({ execute: ae, state: me }) => [
                    ye(J.$slots, "net-button", {
                      state: me,
                      execute: ae,
                      mobile: $.value
                    }, void 0, !0)
                  ]),
                  textarea: xe(({ execute: ae, state: me, height: Ke }) => [
                    ye(J.$slots, "sender-textarea", {
                      execute: ae,
                      state: me,
                      height: Ke,
                      mobile: $.value
                    }, void 0, !0)
                  ]),
                  _: 3
                }, 8, ["modelValue", "enable-net", "enable-think", "has-net-search", "has-thinking", "input-height", "loading", "i18n", "is-mobile"])) : Ve("", !0),
                re("div", Xs, [
                  ye(J.$slots, "footer", { mobile: $.value }, () => [
                    Ft(Pe(t.i18n?.chat?.note ?? "内容由AI生成，无法确保准确性和完整性，仅供参考"), 1)
                  ], !0)
                ])
              ])
            ], 4)
          ], 2),
          t.showWorkspace ? (ce(), de("div", {
            key: 0,
            class: rt(["kernelift-chat-container__workspace", {
              "mobile-workspace": $.value
            }])
          }, [
            re("div", Zs, [
              re("i", {
                class: "material-symbols--close",
                onClick: ee[12] || (ee[12] = (ae) => k())
              })
            ]),
            ye(J.$slots, "workspace", {
              record: u.value,
              mobile: $.value
            }, void 0, !0)
          ], 2)) : Ve("", !0)
        ], 2)
      ])
    ], 2));
  }
}), no = /* @__PURE__ */ kt($s, [["__scopeId", "data-v-b0998e0d"]]);
class io {
  controller;
  buffer;
  token;
  baseUrl;
  method = "GET";
  trimData;
  constructor(e, a, p = "GET", I = !0) {
    this.controller = new AbortController(), this.buffer = "", this.token = e, this.baseUrl = a || "", this.method = p, this.trimData = I;
  }
  async connect(e, a, p) {
    try {
      const I = await fetch(this.baseUrl + e, {
        method: this.method,
        signal: this.controller.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
          ...p?.headers
        },
        body: p?.body,
        ...p
      });
      if (!I.ok)
        throw new Error(`HTTP ${I.status}: ${I.statusText}`);
      if (!I.body)
        throw new Error("No response body available");
      const S = I.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { done: f, value: r } = await S.read();
        if (f) {
          this.handleRemainingBuffer(a), a.onDone && a.onDone();
          break;
        }
        this.buffer += r, this.processBuffer(a);
      }
    } catch (I) {
      I.name !== "AbortError" && a.onError(I instanceof Error ? I : new Error("Unknown error occurred"));
    }
  }
  processBuffer(e) {
    let a;
    for (; (a = this.buffer.indexOf(`

`)) !== -1; ) {
      const p = this.buffer.slice(0, a);
      this.buffer = this.buffer.slice(a + 2), this.parseEvent(p, e);
    }
  }
  handleRemainingBuffer(e) {
    this.buffer.trim().length > 0 && (this.parseEvent(this.buffer, e), this.buffer = "");
  }
  parseEvent(e, a) {
    let p = "message", I = "";
    e.split(`
`).forEach((S) => {
      const f = S.trim();
      if (f.startsWith("event:"))
        p = f.replace("event:", "").trim();
      else if (f.startsWith("data:")) {
        const r = f.replace("data:", "");
        I += this.trimData ? r.trim() : r;
      }
    });
    try {
      this.dispatchEvent(
        {
          type: p,
          data: p === "content" || p === "message" ? I : JSON.parse(I)
        },
        a
      );
    } catch {
      a.onError(new Error(`Failed to parse SSE data: ${I}`));
    }
  }
  dispatchEvent(e, a) {
    switch (a.onEvent && a.onEvent(e.type, e.data), e.type) {
      case "content":
        a.onContent(e.data);
        break;
      case "message":
        a.onMessage(e.data);
        break;
      case "toolCallDelta":
        a.onToolCallDelta(e.data);
        break;
      case "complete":
        a.onComplete(e.data);
        break;
      case "error":
        a.onError(new Error(e.data?.message || "SSE stream error"));
        break;
      default:
        console.warn("Unhandled event type:", e.type);
    }
  }
  disconnect() {
    this.controller.abort();
  }
}
const eo = { button: { think: "Deep Think", net: "Net Search", copyCode: "Copy Code", expand: "Expand Code", collapse: "Collapse Code", copy: "Copy", reload: "Regenerate", like: "Like", dislike: "Dislike" }, newChat: "Create New Chat", placeholder: "Please enter a message and press Enter to send", loading: "Generating, please wait...", thinking: "Thinking...", thinked: "Deep Thought Completed", userMessages: "My Questions", noUserMessages: "No user messages available", note: "Content generated by AI, accuracy and completeness cannot be guaranteed", empty: "Refer to the npm documentation to start your conversation. NPM link: https://www.npmjs.com/package/@kernelift/ai-chat", welcome: "Welcome to the AI chat component, an open-source project developed by Kernelift, designed to provide users with a convenient AI conversation experience." }, to = {
  chat: eo
}, so = {
  "zh-CN": dn,
  "en-US": to
};
export {
  $r as ChatBubble,
  no as ChatContainer,
  ns as ChatHeader,
  ts as ChatSender,
  io as SSEClient,
  Zn as ThinkingProcess,
  so as i18nMessages
};
