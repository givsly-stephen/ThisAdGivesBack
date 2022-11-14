//R: 1; A: 1,49,9,30,45,77,72//
! function(a) {
    var t = {
            vst: "&e=SF_start&eid=video",
            v25: "&e=SF_firstQuartile&eid=video",
            v50: "&e=SF_midpoint&eid=video",
            v75: "&e=SF_thirdQuartile&eid=video",
            vco: "&e=SF_complete&eid=video",
            vre: "&e=SF_replay&eid=video",
            vpa: "&e=SF_pause&eid=video",
            vmu: "&e=SF_mute&eid=video",
            vum: "&e=SF_unmute&eid=video",
            vrs: "&e=SF_resume&eid=video",
            vse: "&e=SF_seek&eid=video",
            ire: "&e=SF_impression_ready&eid=ad",
            ads: "&e=SF_start&eid=ad",
            ivi: "&e=SF_viewable&eid=ad",
            cwi: "&e=SF_autoclose_without_interaction&eid=ad",
            cai: "&e=SF_autoclose_after_interaction&eid=ad",
            iim: "&e=SF_interaction&eid=ad",
            exp: "&e=SF_expanded&eid=ad",
            rsz: "&e=SF_resized&eid=ad",
            ecl: "&e=SF_element_clicks&eid=ad",
            shk: "&e=SF_shake&eid=ad",
            drs: "&e=SF_drag&eid=ad",
            clo: "&e=SF_closed&eid=ad"
        },
        e = function(a) {
            return "undefined" == typeof a
        },
        n = function(a, t) {
            return e(a) ? t : a
        },
        s = function(a) {
            if ("string" == typeof a) {
                var t = new Image;
                t.src = a
            }
        },
        r = function(a, t) {
            var e = 10,
                n = a[t];
            try {
                for (; !n && a.parent.self !== a.self && "undefined" != typeof a.parent.document && a.parent.document.body && e--;) a = a.parent, n = a[t]
            } catch (s) {}
            return n
        },
        c = function(n) {
            var c = r(a, "ut_impurl"),
                d = r(a, "ut_evturl"),
                i = r(a, "ut_renderTriggers"),
                o = r(a, "ut_pimpurl");
            if ("ivi" == n && c && e(i) ? s(c) : "pvi" == n && o && e(i) && s(o), d) {
                var l = t[n];
                l && s(d + l + "&_=" + Math.floor(9e9 * Math.random()))
            }
        };
    a._spad = n(a._spad, {}), _spad.callbacks = n(_spad.callbacks, {}), _spad.callbacks.adEvent = n(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]), _spad.callbacks.adEvent.push(function(a, t) {
        c && c(t)
    });
    var d = a,
        i = 10;
    try {
        for (; d.parent.self !== d.self && "undefined" != typeof d.parent.document && d.parent.document.body && i--;) d = d.parent, d.__utimp && s(d.__utimp)
    } catch (o) {}
}(window),
function(a, t) {
    function e(a, t, e) {
        if (r(a) && a.length) {
            if (__sparkflow && __sparkflow[t] && (21 === __sparkflow[t].format_type && (e = e.replace(/_0/g, "")), 232 === __sparkflow[t].format_id)) return;
            for (var n = 0; n < a.length; n++) l(a[n].replace(/\[sf_uid\]+/gi, e), t, __sparkflow[t].placement_id)
        }
    }
    var n = (t.getElementsByTagName("script"), function(a) {
            return "undefined" == typeof a
        }),
        s = function(a) {
            return "string" == typeof a && "" != a
        },
        r = function(a) {
            return "undefined" == typeof Array.isArray && (Array.isArray = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }), Array.isArray(a)
        },
        c = function(a, t) {
            return n(a) ? t : a
        },
        d = function() {
            try {
                a.top.location.href
            } catch (t) {
                return !0
            }
            return !1
        },
        i = function() {
            return d() ? a.self : a.top
        },
        o = function() {
            if (t.currentScript) return t.currentScript;
            var a = t.getElementsByTagName("script");
            return a.length > 0 && a[a.length - 1].src && -1 !== a[a.length - 1].src.indexOf("sparkflow.net") ? a[a.length - 1] : t.querySelector('[src*="sparkflow.net"]')
        },
        l = function(a, e, n) {
            if (s(a)) {
                var r = t.createElement("script");
                r.src = a;
                var c = o();
                if (-1 !== a.indexOf("doubleverify") || k && k.value) {
                    var d = i();
                    k && k.value && (d = k.win);
                    var l = d.document.querySelector("#div_" + e);
                    c = l || c
                }
                c.parentNode.insertBefore(r, c.nextSibling)
            }
        },
        u = function(a, t) {
            var e = 10,
                n = a[t];
            try {
                for (; !n && a.parent.self !== a.self && "undefined" != typeof a.parent.document && a.parent.document.body && e--;) a = a.parent, n = a[t]
            } catch (s) {}
            return n
        },
        _ = function(a, t) {
            var e = 10,
                n = a[t],
                s = a;
            try {
                for (; !n && a.parent.self !== a.self && "undefined" != typeof a.parent.document && a.parent.document.body && e--;) a = a.parent, n = a[t], s = a
            } catch (r) {}
            return {
                value: n,
                win: s
            }
        };
    a._spad = c(a._spad, {});
    var p = u(a, "ut_clickurl");
    s(p) && (_spad.tracking = c(_spad.tracking, {}), _spad.tracking.clk = c(_spad.tracking.clk, []), _spad.tracking.clk.push(p));
    var f = u(a, "ut_evtbase");
    s(f) && (a.ut_evturl = f);
    var v = u(a, "ut_scripts"),
        k = _(a, "interstitialAdFrame");
    _spad.callbacks = c(_spad.callbacks, {}), _spad.callbacks.adEvent = c(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]), _spad.callbacks.adEvent.push(function(t, r) {
        if ("ire" == r) {
            var d = t;
            n(p) && (p = u(a, "ut_clickurl"), s(p) && __sparkflow && __sparkflow[t] && (__sparkflow[t].tracking = c(__sparkflow[t].tracking, {}), __sparkflow[t].tracking.clk = c(__sparkflow[t].tracking.clk, []), __sparkflow[t].tracking.clk.push(p))), n(f) && (f = u(a, "ut_evtbase"), s(f) && (a.ut_evturl = f)), a.mraid ? "function" == typeof a.mraid.getState && "loading" != a.mraid.getState() ? e(v, t, d) : a.mraid.addEventListener("ready", function() {
                e(v, t, d)
            }) : e(v, t, d)
        }
    })
}(window, document), "string" == typeof ut_fcbk_pixel_id && "" != ut_fcbk_pixel_id && (! function(a, t, e, n, s, r, c) {
        a.fbq || (s = a.fbq = function() {
            s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
        }, a._fbq || (a._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], r = t.createElement(e), r.async = !0, r.src = n, c = t.getElementsByTagName(e)[0], c.parentNode.insertBefore(r, c))
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", ut_fcbk_pixel_id), fbq("track", "PageView"), function(a) {
        var t = {},
            e = {},
            n = function(a) {
                return "undefined" == typeof a
            },
            s = function(a, t) {
                return n(a) ? t : a
            };
        n(ut_fcbk_campaign_id) || (e = {
            campaign_id: ut_fcbk_campaign_id
        }), a._spad = s(a._spad, {}), _spad.callbacks = s(_spad.callbacks, {}), _spad.callbacks.adEvent = s(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]), _spad.callbacks.adEvent.push(function(a, n) {
            t[n] || (t[n] = !0, fbq("trackCustom", n, e))
        })
    }(window)),
    function(a) {
        var t, e = function(a) {
                return "undefined" == typeof a
            },
            n = function(a, t) {
                return e(a) ? t : a
            },
            s = function(a, t) {
                var e = 10,
                    n = a[t];
                try {
                    for (; !n && a.parent.self !== a.self && "undefined" != typeof a.parent.document && a.parent.document.body && e--;) a = a.parent, n = a[t]
                } catch (s) {}
                return n
            },
            r = function(t, n) {
                if (t) {
                    var s = t[n];
                    if (!e(s))
                        if (s.shift)
                            for (var r = 0; r < s.length; r++) s[r].call(a);
                        else s.call(a)
                }
            },
            c = n(s(a, "sf_renderTriggers"), null);
        a._spad = n(a._spad, {});
        var d = a._spad.renderTriggers || c;
        _spad.callbacks = n(_spad.callbacks, {}), t = _spad.callbacks, d || r(t, "ontrigger"), _spad.callbacks.adEvent = n(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]), _spad.callbacks.adEvent.push(function(a, e) {
            "ivi" === e && d && r(t, "ontrigger")
        })
    }(window),
    function(a) {
        var t = function(a) {
                return "undefined" == typeof a
            },
            e = function(a, e) {
                return t(a) ? e : a
            },
            n = function(a, t) {
                var e = 10,
                    n = a[t];
                try {
                    for (; !n && a.parent.self !== a.self && "undefined" != typeof a.parent.document && a.parent.document.body && e--;) a = a.parent, n = a[t]
                } catch (s) {}
                return n
            },
            s = function() {
                for (var a, t = {}, e = 0, n = arguments.length; n > e; e++)
                    for (a in arguments[e]) arguments[e].hasOwnProperty(a) && (t[a] = arguments[e][a]);
                return t
            };
        a._spad = e(a._spad, {});
        var r = n(a, "ut_extra_data"),
            c = n(a, "ut_udms");
        r && (_spad.customData = e(_spad.customData, {}), _spad.customData = s(_spad.customData, r)), c && c.macros && (_spad.customData = e(_spad.customData, {}), _spad.customData = s(_spad.customData, c.macros)), _spad.callbacks = e(_spad.callbacks, {}), _spad.callbacks.adEvent = e(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]);
        var d;
        _spad.callbacks.adEvent.push(function(i, o) {
            if (d = i, "ire" == o) t(r) && __sparkflow && __sparkflow[i] && (r = n(a, "ut_extra_data"), c = n(a, "ut_udms"), r && (__sparkflow[i].customData = e(__sparkflow[i].customData, {}), __sparkflow[i].customData = s(__sparkflow[i].customData, r)), c && c.macros && (__sparkflow[i].customData = e(__sparkflow[i].customData, {}), __sparkflow[i].customData = s(__sparkflow[i].customData, c.macros), __sparkflow[i].file[0].childBridge("setAdditionalQuery", c)));
            else if ("ivi" == o) try {
                var l = __sparkflow[i].file[0],
                    u = $jq(l.frame);
                u.css("transform", "none"), setTimeout(function() {
                    u.css("transform", "translate3d(0px, 0px, 0px)")
                }, 10)
            } catch (_) {}
        });
        var i = function(a, t, e) {
            a.addEventListener ? a.addEventListener(t, e, !1) : a.attachEvent && a.attachEvent("on" + t, e)
        };
        i(a, "message", function(t) {
            var n;
            try {
                n = JSON.parse(t.data)
            } catch (t) {}
            if (n && n && "ut_udms" === n.method) try {
                a.ut_udms = a.ut_udms || JSON.parse(atob(n.value)), d && __sparkflow[d] && (__sparkflow[d].customData = e(__sparkflow[d].customData, {}), __sparkflow[d].customData = s(__sparkflow[d].customData, a.ut_udms.macros), __sparkflow[d].file[0].childBridge("setAdditionalQuery", a.ut_udms))
            } catch (t) {}
        })
    }(window),
    function(a) {
        var t = function(a) {
                return "undefined" == typeof a
            },
            e = function(a, e) {
                return t(a) ? e : a
            };
        a._spad = e(a._spad, {}), _spad.customData = e(_spad.customData, {}), _spad.customData.givsly && (a._spad = e(a._spad, {}), _spad.callbacks = e(_spad.callbacks, {}), _spad.callbacks.ready = e(_spad.callbacks.ready, []), _spad.callbacks.ready instanceof Function && (_spad.callbacks.ready = [_spad.callbacks.ready]), _spad.callbacks.ready.push(function(t) {
            var e = document.createElement("givsly-good-ad");
            e.setAttribute("ad-selector", _spad.customData.givsly.ad - selector || "#div_" + t + "_0"), 
            e.setAttribute("ad-size", _spad.customData.givsly.ad - size || "FULL"), 
            e.setAttribute("trigger-pos", _spad.customData.givsly.trigger - pos || "top-left"), 
            e.setAttribute("config-uri", _spad.customData.givsly.config - uri || "https://cdn.givsly.com/configs/UNDR/jGL4T6U63yp-1.json"), 
            e.setAttribute("style", _spad.customData.givsly.style || "z-index:2147483647;"), 
            a.document.body.appendChild(e);
            var n = document.createElement("script");
            n.setAttribute("src", "https://cdn.givsly.com/ga/good_ads.min.js"), n.setAttribute("type", "module"), n.setAttribute("defer", "defer"), a.document.head.appendChild(n)
        }))
    }(window),
    function(a, t) {
        var e = function(a) {
                return "undefined" == typeof a
            },
            n = function(a, t) {
                return e(a) ? t : a
            };
        a._spad = n(a._spad, {}), _spad.callbacks = n(_spad.callbacks, {}), _spad.callbacks.ready = n(_spad.callbacks.ready, []), _spad.callbacks.ready instanceof Function && (_spad.callbacks.ready = [_spad.callbacks.ready]), _spad.callbacks.ready.push(function(a) {
            var t = (__sparkflow[a], !__sparkflow[a].placement_creative_id),
                e = __sparkflow[a].file[0];
            e.mraid;
            if (!t) {
                var n = Math.floor(100 * Math.random());
                0 === n && e.childBridge("initSentry")
            }
        })
    }(window, document);
//EOIIR//
//R: 57; A: 43//
! function(t, e) {
    var a, n, s, o, i, d, c = function() {
            var e = t,
                a = 10;
            try {
                for (; e.parent.self !== e.self && !r(e.parent.document) && a--;) e = e.parent
            } catch (n) {}
            return e
        },
        r = function(t) {
            return "undefined" == typeof t
        },
        l = function(t, e) {
            return r(t) ? e : t
        },
        p = function(t) {
            var e = function(e) {
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && r(top.window.document)) throw "Safari Exception";
                for (var a = e.getElementsByTagName("iframe"), n = a.length - 1; n >= 0; n--) try {
                    var s = a[n],
                        o = s.contentDocument || s.contentWindow.document;
                    if (o === t.document) return s
                } catch (i) {}
            };
            try {
                return e(t.parent.document)
            } catch (a) {
                try {
                    return t.frameElement && t.frameElement.id ? t.parent.document.getElementById(t.frameElement.id) : null
                } catch (n) {
                    return null
                }
            }
        },
        u = function(t) {
            var e = 10,
                a = p(t),
                n = a;
            try {
                for (; n && t.parent.self !== t.self && "undefined" != typeof t.parent.document && e--;) t = t.parent, n = p(t), n && (a = n)
            } catch (s) {}
            return a
        },
        h = e.createElement("div"),
        f = e.createElement("div"),
        m = e.createElement("div"),
        _ = !0,
        y = ["default"],
        g = "20vh",
        b = 800,
        v = 2147483636;
    f.style.display = "none", h.className = "ut_container", h.appendChild(m), m.appendChild(f);
    var w = h.style;
    w.position = "fixed", w.bottom = "0", w.height = g, w.width = "100%", w.display = "block", w.zIndex = v;
    var k = m.style;
    k.position = "absolute", k.top = 0, k.left = 0, k.right = 0, k.height = "100%";
    var x = c();
    x.document.body.insertBefore(h, x.document.body.firstElementChild), t._spad = l(t._spad, {}), _spad.insertbefore = f, _spad.css = l(_spad.css, {}), _spad.css["min-width"] = "100%", _spad.css.width = "1px", _spad.css["min-height"] = "100%", _spad.css.height = "1px", _spad.css.position = "absolute", _spad.css.top = 0, _spad.customData = l(_spad.customData, {}), _spad.customData.placementType = "interstitial", _spad.customData.closeTimeout = b, _spad.callbacks = l(_spad.callbacks, {}), _spad.callbacks.ready = l(_spad.callbacks.ready, []), _spad.callbacks.ready instanceof Function && (_spad.callbacks.ready = [_spad.callbacks.ready]), _spad.callbacks.ready.push(function(e) {
        a = __sparkflow[e].file[0], s = a.mraid, n = a.div, a.childBridge("setCustomData", {
            windowHeight: x.document.body.scrollHeight || x.document.body.offsetHeight
        }), _ && s.setForceClose(y);
        var o = u(t);
        o && (o.style.display = "none")
    }), _spad.callbacks.stateChange = l(_spad.callbacks.stateChange, []), _spad.callbacks.stateChange.push(function(t) {
        a = __sparkflow[t].file[0];
        var e = a.mraid,
            n = "resized" == e.getState();
        n ? (o = i, i = "resized", s && s.showClose(!0), w.transition = "top " + b + "ms ease-in-out", d = d || h.offsetTop, w.top = d + "px", w.height = "100%", k.height = "100%", setTimeout(function() {
            w.top = "0px"
        })) : (o = i, i = "default", s && _ && s.showClose(!0), "resized" === o && (w.top = d + "px", setTimeout(function() {
            w.top = "auto", w.height = g
        }, b))), "hidden" == e.getState() && (w.display = "none")
    }), t.SFbottomadhesion = new function() {
        this.setBannerHeight = function(t) {
            w.height = g = t
        }, this.removeResizeAnimation = function() {
            b = 0
        }, this.setBannerzIndex = function(t) {
            w.zIndex = v = t
        }
    }, x.SFbottomadhesion = SFbottomadhesion
}(window, document);
//EOIIR//
//R: 60; A: 48//
! function(e, t) {
    var n, r, a = function(e) {
            return "undefined" == typeof e
        },
        o = function(e, t) {
            return a(e) ? t : e
        },
        d = function() {
            var n = function(e) {
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && a(top.window.document)) throw "Safari Exception";
                for (var n = e.getElementsByTagName("iframe"), r = n.length - 1; r >= 0; r--) try {
                    var o = n[r],
                        d = o.contentDocument || o.contentWindow.document;
                    if (d === t) return o
                } catch (c) {}
            };
            try {
                return n(e.parent.document)
            } catch (r) {
                try {
                    return e.frameElement && e.frameElement.id ? e.parent.document.getElementById(e.frameElement.id) : null
                } catch (r) {
                    return null
                }
            }
        },
        c = (function() {
            if (n) return n;
            n = e;
            var t = 10;
            try {
                for (; n.parent.self !== n.self && "undefined" != typeof n.parent.document && n.parent.document.body && t--;) n = n.parent
            } catch (r) {}
            return n
        }(), function(e, t, n) {
            if (e) {
                if (!e.parentNode) return null;
                var r;
                if (0 === n) return null;
                var a = n || 2;
                return null !== e.parentNode.getAttribute(t) ? r = e.parentNode : (a--, r = c(e.parentNode, t, a)), r
            }
        }),
        i = "data-google-query-id",
        l = function() {
            var e, t = d();
            if (t && (e = c(t, i)), e) {
                var n = e.ownerDocument;
                return r = n.defaultView || n.parentWindow, e.id
            }
            return null
        },
        u = l(),
        s = function(e, t) {
            t = t || n;
            var r = t.document.createElement("script");
            r.type = "text/javascript";
            try {
                r.appendChild(t.document.createTextNode(e)), t.document.body.appendChild(r)
            } catch (a) {
                r.text = e, t.document.body.appendChild(r)
            }
        };
    e._spad = o(e._spad, {}), _spad.callbacks = o(_spad.callbacks, {}), _spad.callbacks.adEvent = o(_spad.callbacks.adEvent, []), _spad.callbacks.adEvent instanceof Function && (_spad.callbacks.adEvent = [_spad.callbacks.adEvent]), _spad.callbacks.adEvent.push(function(t, a) {
        if ("ire" == a) {
            if (n.SPARKFLOW && (n.SPARKFLOW.sf_obj = e.__sparkflow), !d()) return;
            if (!u) return;
            var o = '        (function() {        var targetId = "' + u + '";        var adId = "' + t + "\";        var targetNode = document.getElementById(targetId);        var config = { attributes: true, childList: false, subtree: false };        var callback = function(mutationsList, observer) {           for(var mutation of mutationsList) {              if (mutation.type == 'attributes') {                if (mutation.attributeName === \"" + i + '") {                  try {                    var element = document.querySelector("#div_" + adId);                    if (element) {                      if (element.parentNode.classList.contains("ut_container")) element.parentNode.parentNode.removeChild(element.parentNode);                      else if (element.parentNode.parentNode.classList.contains("ut_container")) element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);                      else element.parentNode.removeChild(element);                    }                   } catch (e) {}                }              }            }          };        if (window.MutationObserver) {          var observer = new MutationObserver(callback);          observer.observe(targetNode, config);          }        })(window, document);        ';
            s(o, r)
        }
    }), n.SPARKFLOW = {
        removeAds: function() {
            var t = n.document.querySelectorAll("[class*=sprkflw_]");
            n.PUBLISHER_FIX_LOADED = void 0;
            try {
                for (var r = 0; r < t.length; r++) t[r].parentNode.classList.contains("ut_container") ? t[r].parentNode.parentNode.removeChild(t[r].parentNode) : t[r].parentNode.parentNode.classList.contains("ut_container") ? t[r].parentNode.parentNode.parentNode.removeChild(t[r].parentNode.parentNode) : t[r].parentNode.removeChild(t[r]);
                for (var a = e.top.document.getElementsByTagName("script"), o = Array.prototype.slice.call(a), d = 0; d < o.length; d++) o[d].src && o[d].src === e.ut_patchUrl && o[d].parentNode.removeChild(o[d])
            } catch (c) {}
        }
    }
}(window, document);
//EOIIR//
/* (c) Copyright 2013-22 Sparkflow v4.20.201 rev d6216e60 */
! function(e, t, i, n) {
    "use strict";

    function r(e, t, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
    }

    function a(e) {
        return JSON.parse(JSON.stringify(e))
    }

    function o(e, i) {
        W ? Se !== t ? _e(function() {
            e(i)
        }) : ne(function() {
            e(i)
        }) : e(i)
    }

    function s(e) {
        return void 0 === e
    }

    function l(e, t) {
        var i = 10,
            n = e[t];
        try {
            for (; !n && e.parent.self !== e.self && "undefined" != typeof e.parent.document && e.parent.document.body && i--;) e = e.parent, n = e[t]
        } catch (e) {}
        return n
    }

    function c(e) {
        if ("function" == typeof console[e]) {
            for (var t = (new Date).getTime(), i = [], n = ["%c Sparkflow %c " + t, "font-size:xx-small;background:#2cabe1;color:#fff;border-radius:3px;padding:2px;", "font-size:xx-small;color:#E98003;"], r = 1; r < arguments.length; r++) i.push(arguments[r]);
            console[e].apply(console, n.concat(i))
        }
        ae(arguments[1])
    }

    function d(e, t) {
        var i = function(e) {
                return 1e6 * e.major + 1e3 * e.minor + e.patch
            },
            n = i(e);
        return i(t) <= n
    }

    function f(e) {
        var t = {};
        if (!e) return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++) {
            var r = i[n],
                a = r.indexOf("=");
            if (-1 != a) {
                var o = [r.substr(0, a), r.substr(a + 1, r.length)];
                t[unescape(o[0])] = unescape(o[1]).replace(/\+/g, " ")
            }
        }
        return t
    }

    function h(e) {
        if ("string" != typeof e) return undefined;
        var t = e.split(".");
        return {
            major: parseInt(t[0]) || 0,
            minor: parseInt(t[1]) || 0,
            patch: parseInt(t[2]) || 0
        }
    }

    function u() {
        return (new Date).getTime().toString(36) + we++
    }

    function p(i) {
        if ("string" == typeof i && ge && !ke[i]) {
            if (ke[i] = !0, ("ire" == i || "ivi" == i) && !d(te, h("4.1.0"))) return;
            if (s(e.additional) && (e.additional = l(t, "ut_udms"), !s(e.additional) && null !== e.additional && "object" == typeof e.additional)) {
                var n = "";
                for (var r in e.additional)
                    if ("macros" !== r) {
                        var a = e.additional[r];
                        n += "&" + r + "=", n += encodeURIComponent(null === a || "object" != typeof a || s(t.JSON) ? String(a) : JSON.stringify(a))
                    }
                e.additional && e.additional.macros && (e.macros = e.additional.macros), e.additional = n
            }
            S(me + "/e/?i=" + ge + "&uid=" + e.uid + "&v=" + q() + "&e=" + i + ",," + (e.external_id ? "&x=" + e.external_id : "") + (e.test_id ? "&t_id=" + e.test_id : "") + (e.test_variant ? "&t_variant=" + e.test_variant : "") + (e.additional ? e.additional : ""), "image", i, e), ae("Report event", i), t.__sparkflow && z(__sparkflow[e.uid], "adEvent", i)
        }
    }

    function m(e, i) {
        if (i && !Ee) {
            var n;
            t.ut_pixel_event = t.ut_pixel_event || Ce.ivi, n = t.ut_pixel_event === Ce.ivi || t.ut_pixel_event === Ce.ire ? t.ut_pixel_event : Ce.ivi, n === i && (e.childBridge("inappReadyToShow", !0), Ee = !0)
        }
    }

    function g(e) {
        return "string" != typeof e && "number" != typeof e ? e : (e = String(e), -1 == e.toLowerCase().indexOf("px") && -1 == e.indexOf("%") ? e + "px" : e)
    }

    function v(e) {
        if (s(e.pageYOffset)) {
            var t = e.document.body,
                i = e.document.documentElement;
            return i = i.clientHeight ? i : t, i.scrollTop
        }
        return e.pageYOffset
    }

    function y() {
        if (be) return t;
        var e = t,
            i = 10;
        try {
            ! function() {
                for (; e.parent.self !== e.self && !s(e.parent.document) && i--;) e = e.parent
            }()
        } catch (e) {
            c("warn", "Cross-origin Iframe")
        }
        return e
    }

    function w(e, t) {
        for (var i = 0; i < e.length; i++) t(e[i], i)
    }

    function b() {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && s(top.window.document)) throw "Safari Exception"
    }

    function x() {
        var e = i.body || i.documentElement,
            t = e.style,
            n = "transition";
        if ("string" == typeof t[n]) return !0;
        var r = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
        n = n.charAt(0).toUpperCase() + n.substr(1);
        for (var a = 0; a < r.length; a++)
            if ("string" == typeof t[r[a] + n]) return !0;
        return !1
    }

    function k(t) {
        if (e && e.macros)
            for (var i in e.macros)
                if (e.macros.hasOwnProperty(i)) {
                    var n = "{" + i + "}";
                    t = t.replace(new RegExp(n, "g"), e.macros[i])
                }
        return t
    }

    function S(e, i, n, r) {
        var a;
        Oe.indexOf(n) > -1 && (a = !0);
        try {
            e = t.atob(e)
        } catch (e) {}
        e = k(e), i || (i = "image");
        var o = e.indexOf("sparkflow.net") > -1;
        if (e.shift) {
            if (e.length)
                for (var s = e.length - 1; s >= 0; s--) S(e[s], a, n, r)
        } else switch ("markup" !== i && 4 != i && o && (e += -1 != e.indexOf("?") ? "&" : "?", e += "sfcb=" + u()), i) {
            case "script":
            case 2:
                C(e, a, n, r);
                break;
            case "iframe":
            case 3:
                O(e, a, n, r);
                break;
            case "markup":
            case 4:
                I(e, a, n, r);
                break;
            case "image":
            case 1:
            default:
                E(e, a, n, r)
        }
    }

    function _(e) {
        var t;
        switch (e) {
            case 2:
                t = "script";
                break;
            case 3:
                t = "iframe";
                break;
            case 4:
                t = "markup";
                break;
            case 1:
            default:
                t = "image"
        }
        return t
    }

    function E(e, t, i, n) {
        (new Image).src = e, t && !be && "number" == typeof --Ie[i] && Ie[i] <= 0 && n.file[0].childBridge("synchronize", ["waitToOpen", "coreEvent"])
    }

    function C(e, t, n, r) {
        var a = i.createElement("script");
        a.type = "text/javascript", a.src = e, i.body.appendChild(a), t && !be && "number" == typeof --Ie[n] && Ie[n] <= 0 && r.file[0].childBridge("synchronize", ["waitToOpen", "coreEvent"])
    }

    function O(e, t, n, r) {
        var a = i.createElement("iframe");
        a.width = "1", a.height = "1", a.style.border = "0", a.src = e, i.body.appendChild(a), t && !be && "number" == typeof --Ie[n] && Ie[n] <= 0 && r.file[0].childBridge("synchronize", ["waitToOpen", "coreEvent"])
    }

    function I(e, n, r, a) {
        var o = i.createElement("iframe");
        o.width = "1", o.height = "1", o.style.border = "0", i.body.appendChild(o);
        try {
            e = t.atob(e)
        } catch (e) {}
        o.contentWindow.document.open(), o.contentWindow.document.write("<head></head><body>" + e + "</body>"), o.contentWindow.document.close(), n && !be && "number" == typeof --Ie[r] && Ie[r] <= 0 && a.file[0].childBridge("synchronize", ["waitToOpen", "coreEvent"])
    }

    function j(e, t, i) {
        if (!s(e.tracking[t])) {
            var n, r = e.tracking[t];
            if ("[object String]" === Object.prototype.toString.call(r) || r.length && "[object String]" === Object.prototype.toString.call(r[0])) return void S(r, n, t, e);
            for (var a = 0; a < r.length; a++) {
                var o = !0;
                if (n = r[a].type || "image", r[a].condition && i) {
                    var l = "[object String]" === Object.prototype.toString.call(r[a].condition) ? JSON.parse(r[a].condition) : r[a].condition,
                        c = JSON.parse(decodeURIComponent(i));
                    for (var d in l) {
                        var f = new RegExp(l[d]);
                        o = o && f.test(c[d])
                    }
                }
                o && S(r[a].url, n, t, e)
            }
        }
    }

    function z(e, i, n) {
        if (e && e.callbacks) {
            var r = e.callbacks[i];
            if (!s(r))
                if (r.shift)
                    for (var a = 0; a < r.length; a++) r[a].call(t, e.uid, n);
                else r.call(t, e.uid, n)
        }
    }

    function D(e, t, i, n) {
        var a = t.getElementsByTagName("head")[0],
            o = t.createElement("script");
        s(i) && (i = function() {}), s(n) && (n = function() {}), o.readyState ? o.onreadystatechange = function() {
            "loaded" != o.readyState && "complete" != o.readyState || (o.onreadystatechange = null, i())
        } : r("load", o, i), r("error", o, n), o.src = e, a.appendChild(o)
    }

    function A(n) {
        var r = (s(e.js) ? "https://ajax.googleapis.com/ajax/libs" : e.js) + "/jquery/1.11.3/jquery.min.js";
        if (s(t.jQuery)) D(r, i, function() {
            n()
        });
        else {
            var a = s(t.$) ? jQuery : $;
            a.fn && a.fn.addBack && a.fn.animate ? n() : (c("warn", "jQuery build unrecognized"), D(r, i, function() {
                n(jQuery.noConflict(!0))
            }))
        }
    }

    function P(e) {
        for (var t = e.parentNode; t.tagName;) {
            if ("body" == t.tagName.toLowerCase()) return !0;
            t = t.parentNode
        }
        return c("warn", "TAG is not inside a BODY element"), !1
    }

    function M() {
        if (Y) return Y;
        try {
            return function(e) {
                b();
                for (var t = e.getElementsByTagName("iframe"), i = t.length - 1; i >= 0; i--) try {
                    var n = t[i];
                    if ((n.contentDocument || n.contentWindow.document) === U) return Y = $jq(n)
                } catch (e) {}
            }(t.parent.document)
        } catch (e) {
            return Y = t.frameElement && t.frameElement.id ? $jq(t.parent.document.getElementById(t.frameElement.id)) : null
        }
    }

    function R(e, t, i) {
        s(e.on) ? e.bind(t, i) : e.on(t, i)
    }

    function q() {
        if (0 != ve) return ve;
        var e = {
            WEB: 100,
            SAFEFRAME: 200,
            FIF: 201,
            RESTRICTEDFRAME: 202,
            ORMMA: 300,
            MRAID10: 401,
            MRAID20: 402,
            MRAID30: 403,
            MRAIDVAST: 503,
            VAST: 500
        };
        try {
            s(t.mraid) || s(mraid.addEventListener) ? ve = s(t.ormma) || s(ormma.addEventListener) ? s(t.sfAPI) && (s(t.$sf) || s($sf.ext)) ? s(t.inDapIF) ? s(t.getVPAIDAd) ? je ? e.RESTRICTEDFRAME : e.WEB : e.VAST : e.FIF : e.SAFEFRAME : e.ORMMA : (ve = e.MRAID10, s(mraid.getVersion) || "2.0" != mraid.getVersion() ? s(mraid.getVersion) || "3.0" != mraid.getVersion() || (ve = e.MRAID30) : ve = e.MRAID20)
        } catch (e) {
            c("warn", "Unknown environment")
        }
        return ve
    }

    function T(n) {
        if (ae("Initialize ad"), 0 == n.filesLeft && !s(t.$jq) && !s(t.JSON) && 0 == n.loadScripts.length && !s(n.file[0]) && s(n.file[0].controller)) {
            ae("Rendering engine Init", n), t.myInappMraid && ("loading" != myInappMraid.getState() ? (ae("Placement ready", "MRAID already loaded"), m(n.file[0], Ce.ire)) : myInappMraid.addEventListener("ready", function() {
                ae("Placement ready", "MRAID ready"), m(n.file[0], Ce.ire)
            }));
            G = $jq(Se), Q = $jq(n.DOM.div), n.DOM.div.style.display = "inline-block", ae("Init - Placement div - inline-block");
            try {
                Q.css(n.css), ae("Init - Placement div - css", n.css), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && function() {
                    try {
                        return t.self !== t.top
                    } catch (e) {
                        return !0
                    }
                }() && "" == U.body.style.height && (n.css.height.indexOf("%") > -1 || n.css["min-height"].indexOf("%") > -1) && (U.body.style.height = "100%")
            } catch (e) {
                ae("Init - catch error", e.message)
            }
            var r = {};
            for (var a in n) {
                var o = Object.prototype.toString.call(n[a]);
                if ("file" != a && "[object Function]" != o && "[object HTMLScriptElement]" != o) try {
                    ! function(e) {
                        var t = JSON.stringify(n[e]);
                        t !== JSON.stringify({}) && t !== JSON.stringify([]) && (r[e] = n[e])
                    }(a)
                } catch (e) {}
            }
            r.group_creative = ge, r.placement_creative = ge, r.topLocation = Se.location, r.hosts = e.hosts;
            for (var l = function(e) {
                    var t = e.mraid.isViewable && e.mraid.isViewable();
                    return t && (p("ivi"), m(e, Ce.ivi), Le.init()), e.childBridge("setViewable", t), t
                }, d = function(e, t, i) {
                    var n = e >= 50;
                    return n && (p("ivi"), m(i, Ce.ivi), Le.init()), i.childBridge("setViewable", n), n
                }, f = n.file.length - 1; f >= 0; f--) {
                var h = n.file[f];
                if (r.fileIndex = f, h.readyState = K.LOADED, h.controller = new qe(n, h, f), be) {
                    if (h.mraid = mraid || ormma, "2.0" == h.mraid.getVersion()) {
                        h.close = i.createElement("div");
                        var u = $jq(h.close).css({
                            display: "none",
                            position: "absolute",
                            width: "50px",
                            height: "50px",
                            top: "0px",
                            right: "0px",
                            left: "auto",
                            bottom: "auto",
                            "background-color": "transparent",
                            "z-index": X + 10,
                            cursor: "pointer"
                        }).attr({
                            id: "close_" + n.uid + "_" + f,
                            title: "Close",
                            "data-img": '<img src="' + ee + n.close + '" border="0" style="height:100%;width:100%; border: none;">'
                        });
                        $jq(h.div).append(u)
                    }! function(e) {
                        mraid.addEventListener("stateChange", function(t) {
                            e.controller.setState(mraid.getState()), "2.0" != mraid.getVersion() && "3.0" != mraid.getVersion() || e.childBridge("setProperties", [{
                                name: "_currentPosition",
                                value: mraid.getCurrentPosition()
                            }]), e.childBridge("setState", t)
                        }), "2.0" == mraid.getVersion() && mraid.addEventListener("viewableChange", function t() {
                            l(e) && mraid.removeEventListener("viewableChange", t)
                        }), "3.0" == mraid.getVersion() && mraid.addEventListener("exposureChange", function t(i, n) {
                            d(i, 0, e) && mraid.removeEventListener("exposureChange", t)
                        }), mraid.addEventListener("error", function(t) {
                            e.childBridge("dispatchEvent", {
                                event: "error",
                                parameter: t
                            })
                        }), "2.0" != mraid.getVersion() && "3.0" != mraid.getVersion() || mraid.addEventListener("sizeChange", function(t) {
                            e.childBridge("dispatchEvent", {
                                event: "sizeChange",
                                parameter: t
                            })
                        }), "2.0" == mraid.getVersion() && R($jq(e.close), "click", function() {
                            e.mraid.close()
                        })
                    }(h)
                } else {
                    if (n.safeframeAvailable) try {
                        var g = t.sfAPI || $sf.ext,
                            v = function(e, t) {};
                        g.register(parseInt(h.width), parseInt(h.height), v), h.sfAPI = g
                    } catch (e) {}
                    h.close = i.createElement("div");
                    var u = $jq(h.close).css({
                        display: "none",
                        position: "absolute",
                        width: "50px",
                        height: "50px",
                        top: "0px",
                        right: "0px",
                        left: "auto",
                        bottom: "auto",
                        "background-color": "transparent",
                        "z-index": X + 10,
                        cursor: "pointer"
                    }).attr({
                        id: "close_" + n.uid + "_" + f,
                        title: "Close",
                        "data-img": '<img src="' + ee + n.close + '" border="0" style="height:100%;width:100%;border: none;">'
                    });
                    $jq(h.div).append(u), h.mraid = new Te(n, h),
                        function(e) {
                            R($jq(e.close), "click", function() {
                                e.mraid.close()
                            });
                            var t = {
                                width: 0,
                                height: 0
                            };
                            "2.0" == e.mraid.getVersion() && R(G, "deviceorientation", function() {
                                var i = e.mraid.getScreenSize();
                                i.width == t.width && i.height == t.height || (t = i, e.childBridge("setProperties", [{
                                    name: "_screenSize",
                                    value: t
                                }]))
                            }), e.mraid.addEventListener("stateChange", function(e) {
                                this.controller.setState(this.mraid.getState()), this.childBridge("setProperties", [{
                                    name: "_currentPosition",
                                    value: this.mraid.getCurrentPosition()
                                }, {
                                    name: "_fullCurrentPosition",
                                    value: this.mraid.getFullCurrentPosition()
                                }]), this.childBridge("setState", e)
                            }), e.mraid.addEventListener("viewableChange", function() {
                                l(this)
                            }), e.mraid.addEventListener("ready", function() {
                                this.childBridge("dispatchEvent", {
                                    event: "ready"
                                })
                            }), e.mraid.addEventListener("error", function(e) {
                                this.childBridge("dispatchEvent", {
                                    event: "error",
                                    parameter: e
                                })
                            }), e.mraid.addEventListener("sizeChange", function(e) {
                                this.childBridge("dispatchEvent", {
                                    event: "sizeChange",
                                    parameter: e
                                })
                            })
                        }(h)
                }
                var y = function(e) {
                    ae("Setup File");
                    var t = [{
                            name: "_info",
                            value: r
                        }, {
                            name: "_mraidAvailable",
                            value: be
                        }, {
                            name: "_environment",
                            value: n.environment
                        }],
                        i = h.mraid,
                        a = function(e, i) {
                            s(i) || t.push({
                                name: e,
                                value: i
                            })
                        };
                    a("_expandProperties", i.getExpandProperties ? i.getExpandProperties() : {
                        width: -1,
                        height: -1,
                        useCustomClose: !1,
                        isModal: !0
                    }), s(i.getPlacementType) || a("_placementType", i.getPlacementType());
                    var o = !s(i.isViewable) && i.isViewable();
                    if (a("_viewable", o), o && (p("ivi"), m(h, Ce.ivi), Le.init()), "2.0" == i.getVersion()) try {
                        a("_defaultPosition", i.getDefaultPosition()), a("_feature", {
                            sms: i.supports("sms"),
                            tel: i.supports("tel"),
                            calendar: i.supports("calendar"),
                            storePicture: i.supports("storePicture"),
                            inlineVideo: i.supports("inlineVideo")
                        }), a("_maxSize", i.getMaxSize()), a("_orientationProperties", s(i.getOrientationProperties) ? {
                            allowOrientationChange: !0,
                            forceOrientation: "none"
                        } : i.getOrientationProperties()), a("_screenSize", i.getScreenSize()), be || (a("_browsers", i.detectBrowsers()), a("_isMobile", i.detectMobile()))
                    } catch (e) {
                        c("error", "MRAID 2.0 support issues")
                    }
                    h.childBridge("setCustomData", n.customData), h.childBridge("setProperties", t, e), h.childBridge("setDCOData", n.dynamic), h.childBridge("setExtraData", n.extraData)
                };
                p("ire"), m(h, Ce.render),
                    function(e, t) {
                        y(function() {
                            if (be) {
                                var i = mraid.getState();
                                "loading" === i && (i = "default"), e.childBridge("setState", i), e.controller.setState(i), e.childBridge("dispatchEvent", {
                                    event: "ready"
                                });
                                try {
                                    z(t, "ready")
                                } catch (e) {}
                            } else e.mraid.setState("default")
                        })
                    }(h, n);
                for (var w in n.tracking) Oe.indexOf(w) > -1 && (Ie[w] = n.tracking[w].length);
                !Object.keys(Ie).length && h.childBridge && h.childBridge("synchronize", ["waitToOpen", "coreEvent"])
            }
        }
    }

    function L(e, t) {
        for (var i in t) {
            var n = "impression" == i ? "imp" : "click" == i ? "clk" : i;
            s(e.tracking[n]) && (e.tracking[n] = []);
            for (var r = 0; r < t[i].length; r++) "[object String]" === Object.prototype.toString.call(t[i][r]) ? e.tracking[n].unshift({
                url: t[i][r]
            }) : e.tracking[n].unshift(t[i][r])
        }
    }

    function F() {
        if (be) mraid.isViewable() ? (p("pvi"), Le.run()) : (("1.0" == mraid.getVersion() || "2.0" == mraid.getVersion()) && mraid.addEventListener("viewableChange", function e() {
            mraid.isViewable() && (p("pvi"), Le.run(), mraid.removeEventListener("viewableChange", e))
        }), "3.0" == mraid.getVersion() && mraid.addEventListener("exposureChange", function e(t, i) {
            t >= 50 && (p("pvi"), Le.run(), mraid.removeEventListener("exposureChange", e))
        }));
        else {
            var e = "hidden",
                n = !1,
                r = {
                    focus: !0,
                    focusin: !0,
                    pageshow: !0,
                    blur: !1,
                    focusout: !1,
                    pagehide: !1
                },
                a = function(a) {
                    var o;
                    a = a || t.event, o = a.type in r ? r[a.type] : !i[e], o && Le.run(), o && !n && (p("pvi"), n = !0)
                };
            e in i ? i.addEventListener("visibilitychange", a) : (e = "mozHidden") in i ? i.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in i ? i.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in i ? i.addEventListener("msvisibilitychange", a) : "onfocusin" in i ? i.onfocusin = i.onfocusout = a : t.onpageshow = t.onpagehide = t.onfocus = t.onblur = a, i.hidden || (p("pvi"), n = !0)
        }
    }

    function B() {
        if (ae("Setup"), p("pre"), F(), !s(e.file)) {
            var a = new Re(e, ge, me),
                f = function(e) {
                    e = e || {};
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        if (i)
                            for (var n in i) i.hasOwnProperty(n) && ("object" == typeof i[n] ? f(e[n], i[n]) : e[n] = i[n])
                    }
                    return e
                },
                m = function(e, t) {
                    for (var i in t) e[i] ? (e[i].concat || (e[i] = []), e[i] = e[i].concat(t[i])) : e[i] = t[i];
                    return e
                },
                y = function(e) {
                    s(e.width) || (a.placement[0] = parseInt(e.width)), s(e.height) || (a.placement[1] = parseInt(e.height)), s(e.tracking) || L(a, e.tracking), s(e.clickmask) || (a.clickmask = e.clickmask), s(e.insertbefore) || (a.insertbefore = e.insertbefore), s(e.nested) || (a.nested = e.nested), s(e.trace) || (a.traceEnabled = !!e.trace), s(e.css) || f(a.css, e.css), s(e.friendlyIframes) || (a.friendlyIframes = e.friendlyIframes), s(e.targetSelector) || f(a.targetSelector, e.targetSelector), s(e.callbacks) || m(a.callbacks, e.callbacks), s(e.customData) || f(a.customData, e.customData), s(e.loadScripts) || (a.loadScripts = a.loadScripts.concat(e.loadScripts))
                },
                b = function(e, t) {
                    s(e.all) || y(e.all), s(e[t]) || y(e[t])
                },
                x = ["jquery", "scripts", "json", "files"],
                k = [],
                S = function(e) {
                    ae("Synched - " + e), x.indexOf(e) > -1 && k.push(e), x.length === k.length && T(a)
                };
            ae("Setup - Cascade params"),
                function() {
                    if (s(n)) {
                        var i = s(he.g) || s(he.t) ? fe : he;
                        i.tracking = {}, i.i && (i.tracking.imp = i.i.split(",")), i.c && (i.tracking.clk = i.c.split(",")), y(i)
                    } else {
                        if (n.callbacks && n.callbacks.ut_impression) {
                            var r = {
                                    url: btoa("<script>(" + n.callbacks.ut_impression.toString() + ")()<\/script>"),
                                    condition: [],
                                    type: 4
                                },
                                o = l(t, "ut_pixels");
                            o ? (r.type = "markup", o.push(r)) : (n.tracking || (n.tracking = {}), be ? n.tracking.pvi = (n.tracking.pvi || []).concat([r]) : n.tracking.imp = (n.tracking.imp || []).concat([r]))
                        }
                        y(n), n.viewabilityTracker && (xe = n.viewabilityTracker), t._spad = undefined
                    }
                    var c = {},
                        d = function(e) {
                            for (var t in e) 0 == t.indexOf("sf_") && t.length > 3 && (c[t.substr(3)] = e[t])
                        };
                    d(fe), d(he), f(a.customData, c);
                    var h = Se._spads;
                    if (!s(h)) {
                        var u = s(a.format_type) ? -1 : a.format_type,
                            p = s(a.format_id) ? -1 : a.format_id,
                            m = s(a.placement_id) ? 0 : a.placement_id;
                        s(h.format_types) || b(h.format_types, u), s(h.formats) || b(h.formats, p), s(h.placements) || b(h.placements, m), s(h.creatives) || b(h.creatives, e.id)
                    }
                }();
            var _ = function(e) {
                    be || e.mraid.checkViewable(), e.childBridge("setProperties", [{
                        name: "_currentPosition",
                        value: e.mraid.getCurrentPosition()
                    }])
                },
                E = function(e, t, i, n) {
                    "hidden" != e.mraid.getState() && (t.ScrollEvent && e.childBridge("dispatchEvent", {
                        event: "pageScroll",
                        parameter: {
                            scrollTop: i,
                            delta: n
                        }
                    }), _(e))
                };
            if (s(t.__sparkflow)) {
                ae("Setup - Set global listeners"), t.__sparkflow = {};
                var C = v(Se),
                    O = function() {
                        var e = v(Se),
                            t = e - C;
                        if (0 != t) {
                            for (var i in __sparkflow) {
                                var n = __sparkflow[i].file;
                                if (!s(n[0].controller))
                                    for (var r = n.length - 1; r >= 0; r--) E(n[r], __sparkflow[i], e, t)
                            }
                            C = e
                        }
                    };
                if (r("scroll", Se, function() {
                        o(O)
                    }), t.DeviceOrientationEvent) {
                    var I = function(e) {
                        var t;
                        for (var i in __sparkflow)
                            if (__sparkflow[i].DeviceOrientationEvent) {
                                s(t) && (t = {
                                    gamma: e.gamma,
                                    alpha: e.alpha,
                                    beta: e.beta
                                });
                                for (var n = __sparkflow[i].file, r = n.length - 1; r >= 0; r--) n[r].childBridge("dispatchEvent", {
                                    event: "deviceorientation",
                                    parameter: t
                                })
                            }
                    };
                    r("deviceorientation", Se, function(e) {
                        o(I, e)
                    })
                }
                if (t.DeviceMotionEvent) {
                    var P = function(e) {
                        var t;
                        for (var i in __sparkflow)
                            if (__sparkflow[i].DeviceMotionEvent) {
                                if (s(t)) {
                                    t = {
                                        interval: e.interval
                                    };
                                    for (var n = ["acceleration", "accelerationIncludingGravity", "rotationRate"], r = n.length - 1; r >= 0; r--) {
                                        var a = e[n[r]];
                                        t[n[r]] = {};
                                        for (var o in a) t[n[r]][o] = a[o]
                                    }
                                }
                                for (var l = __sparkflow[i].file, c = l.length - 1; c >= 0; c--) l[c].childBridge("dispatchEvent", {
                                    event: "devicemotion",
                                    parameter: t
                                })
                            }
                    };
                    r("devicemotion", Se, function(e) {
                        o(P, e)
                    })
                }
                var M = function() {
                    for (var e in __sparkflow) {
                        var t = __sparkflow[e].file;
                        if (!s(t[0].controller))
                            for (var i = t.length - 1; i >= 0; i--) {
                                var n = t[i];
                                "hidden" != n.mraid.getState() && (n.childBridge("setProperties", [{
                                    name: "_maxSize",
                                    value: n.mraid.getMaxSize()
                                }]), n.childBridge("dispatchEvent", {
                                    event: "pageResize"
                                }), _(n))
                            }
                    }
                };
                r("resize", Se, function(e) {
                    o(M)
                }), be || (xe && xe.isEnabled(e) || (ae("Viewability tracking: browser"), xe = new Me(Se)), J = xe.defaultStatus, ae("Viewability tracking defaults to:", J), xe.onChange = function(e) {
                    ae("Viewability tracking change:", e), J = e;
                    for (var t in __sparkflow) {
                        var i = __sparkflow[t].file;
                        if (!s(i[0].controller))
                            for (var n = i.length - 1; n >= 0; n--) i[n].mraid.checkViewable()
                    }
                })
            }
            if (a.targetSelector.scroll && (i.querySelector(a.targetSelector.scroll) || Se.document.querySelector(a.targetSelector.scroll))) {
                ae("Setup - Set ad specific listeners");
                var R = i.querySelector(a.targetSelector.scroll) || Se.document.querySelector(a.targetSelector.scroll),
                    q = R.scrollTop,
                    $ = function() {
                        var e = R.scrollTop,
                            t = e - q;
                        if (0 != t) {
                            var i = a.file;
                            if (!s(i[0].controller))
                                for (var n = i.length - 1; n >= 0; n--) E(i[n], a, e, t);
                            q = e
                        }
                    };
                r("scroll", R, function() {
                    o($)
                })
            }
            j(a, "imp");
            var B = a.placement;
            ae("Setup - Placement - size", B), (9 == a.placement[0] && 9 == a.placement[1] || 1 == a.placement[0] && 1 == a.placement[1]) && (B = [1, 0], ae("Setup - Placement - Hack Chrome/Android", B));
            var V = i.createElement("div"),
                N = V.style;
            V.id = "div_" + a.uid, V.className = Z + "main " + Z + "loading", N.width = g(B[0]), N.height = g(B[1]), N.display = "none", N.verticalAlign = "top", N.padding = "0px", N.margin = "0px", N.border = "0px", N.position = ye ? "fixed" : "inherit", ye && (N.top = "0px", N.left = "0px"), N.zIndex = X, N.pointerEvents = "none", N.overflow = "visible";
            try {
                N.textAlign = "start"
            } catch (e) {}
            if (ae("Setup - Placement div - create", {
                    width: g(B[0]),
                    height: g(B[1]),
                    display: "none",
                    verticalAlign: "top",
                    padding: "0px",
                    margin: "0px",
                    border: "0px"
                }), a.DOM.div = V, ye) try {
                ce = Se.document.body.firstElementChild || ce
            } catch (e) {}
            var H = s(a.insertbefore) || null === a.insertbefore ? ce : a.insertbefore;
            null === a.insertbefore && c("warn", "Element specified in insertbefore not found"), H.parentNode.insertBefore(a.DOM.div, H), U = a.DOM.div.ownerDocument, a.nested = s(a.nested) ? U !== Se.document : a.nested, __sparkflow[e.uid] = a;
            var W = {
                    uid: null,
                    files: null,
                    dld: 0,
                    pld: 0
                },
                Y = function(t) {
                    var i = t.split(","),
                        n = __sparkflow[e.uid];
                    W.uid || (W.uid = e.uid), W.files || (W.files = n.file.length), W[i[0]]++, W.uid === e.uid && W[i[0]] === W.files && j(n, i[0], i[1])
                },
                G = function(t) {
                    var i;
                    try {
                        t && t.data && (i = "string" == typeof t.data ? $jq && $jq.parseJSON ? $jq.parseJSON(t.data) : JSON.parse(t.data) : t.data)
                    } catch (e) {
                        throw e
                    }
                    if (s(i.uid) || e.uid != i.uid) e.uid && (i.value.indexOf("dld") || i.value.indexOf("pld")) && Y(i.value);
                    else {
                        var n = __sparkflow[i.uid],
                            r = function() {
                                for (var e = n.file.length - 1; e >= 0; e--) {
                                    var i = n.file[e];
                                    if (i.frame.contentWindow === t.source) return i
                                }
                            };
                        if ("event" == i.method) {
                            var o = i.value.split(","),
                                l = o[0],
                                c = r();
                            "ads" == l && (c.readyState = K.STARTED), c.controller.trigger(l, a.uid), j(n, o[0], o[1]), z(n, "adEvent", l)
                        } else if ("synch" == i.method)
                            for (var d = 0; d < n.file.length; d++) n.file[d].childBridge("dispatchDocumentEvent", {
                                event: "adSynch",
                                parameter: i.value[0]
                            });
                        else if ("callback" == i.method) {
                            ae("callback", i.value);
                            var c = r();
                            c.callbacks[i.value] && (c.callbacks[i.value](), delete c.callbacks[i.value])
                        } else {
                            var c = r();
                            s(c.mraid[i.method]) ? s(n[i.method]) || (ae("Ad method", i.method, i.value), i.value ? n[i.method].apply(n, i.value) : n[i.method].apply(n)) : (ae("File method", i.method, i.value), i.value ? c.mraid[i.method].apply(c.mraid, i.value) : c.mraid[i.method].apply(c.mraid), be && "2.0" === c.mraid.getVersion() && "useCustomClose" === i.method && (c.close.style.display = "none"))
                        }
                    }
                    "__trace" == i.method && re({
                        prefix: "Creative",
                        values: i.values,
                        uid: i.uid,
                        timestamp: i.timestamp
                    })
                },
                Q = function(e) {
                    try {
                        G(e || t.event)
                    } catch (t) {
                        ae("MESSAGE ERROR", t.message, e.data)
                    }
                };
            if (r("message", U.defaultView || U.parentWindow || Se, Q), t.onMessageHandlerUT = Q, w(a.file, function(n, l) {
                    var c = i.createElement("iframe"),
                        f = i.createElement("div"),
                        p = f.style,
                        m = c.style,
                        v = ee + n.src;
                    n.readyState = K.INITIAL, s(e.js) || (v += "?js=" + encodeURIComponent(e.js)), a.traceEnabled && (v += (v.indexOf("?") >= 0 ? "&" : "?") + "trace=enabled"), f.id = "div_" + a.uid + "_" + l, p.width = g(n.width), p.height = g(n.height), p.display = "inline-block", p.verticalAlign = "top", p.padding = "0px", p.margin = "0px", p.border = "0px", p.pointerEvents = "auto", p.position = "static", p.maxWidth = "none";
                    try {
                        p.textAlign = "start"
                    } catch (e) {}
                    n.div = f, a.DOM.div.appendChild(n.div), c.id = "frame_" + a.uid + "_" + l, c.frameBorder = "0", c.width = "100%", c.height = "100%", c.scrolling = "no", c.allowtransparency = "true", c.seamless = "true", m.position = "static", m.overflow = "hidden", m.maxWidth = "none", t.navigator && t.navigator.mediaDevices && t.navigator.mediaDevices.getUserMedia && (c.allow = "camera; microphone; autoplay"), De(c, v, a.friendlyIframes, function() {
                        var e = setTimeout(function() {
                            a.friendlyIframes || (c.src = v)
                        }, 1e3);
                        r("load", c, function() {
                            e && clearTimeout(e), 0 === --a.filesLeft && S("files")
                        })
                    }), n.frame = c, n.div.appendChild(n.frame), n.callbacks = {}, n.childBridge = function(e, t, i) {
                        if (ae("childBridge", e, t), c.contentWindow) {
                            var r;
                            "function" == typeof i && (d(te, h("3.16.0")) ? (r = u(), n.callbacks[r] = i) : o(i)), c.contentWindow.postMessage(JSON.stringify({
                                method: e,
                                value: t,
                                callback: r
                            }), "*")
                        }
                    }
                }), A(function(e) {
                    e = s(e) ? jQuery : e, t.$jq = e, s(t.$sf) && (t.$sf = e), S("jquery"), 0 === a.loadScripts.length && S("scripts");
                    for (var n = 0; n < a.loadScripts.length; n++) D(a.loadScripts[n], i, function() {
                        a.loadScripts.pop(), 0 === a.loadScripts.length && S("scripts")
                    })
                }), s(t.JSON)) {
                var ie = ee + "//creative-p.undertone.com";
                s(e.js) || (ie = e.js), D(ie + "/sparkflow/json2.min.js", i, function() {
                    S("json")
                })
            } else S("json")
        }
    }

    function V() {
        n && n.waitPlacementReady ? n.waitPlacementReady(function() {
            ae("Placement ready", "Custom"), B()
        }) : be ? (t.myInappMraid = mraid, d(te, h("4.20.41")) ? B() : "loading" != mraid.getState() ? (ae("Placement ready", "MRAID already loaded"), B()) : mraid.addEventListener("ready", function() {
            ae("Placement ready", "MRAID ready"), B()
        })) : (ae("Placement ready", "Web"), B())
    }

    function N() {
        ae("Check pubfix");
        var e = Se.PUBLISHER_FIX_LOADED,
            i = function() {
                if (ae("Pubfix ready"), t.onSparkflowPubfixReady && t.onSparkflowPubfixReady.constructor === Array)
                    for (var e = 0; e < onSparkflowPubfixReady.length; e++) try {
                        onSparkflowPubfixReady[e]()
                    } catch (t) {
                        c("error", "Error executing onSparkflowPubfixReady callback: " + onSparkflowPubfixReady[e])
                    }
            },
            n = l(t, "ut_patchUrl"),
            r = l(t, "ut_patch_wait4Load");
        n && "string" == typeof n && !e ? r ? D(n, Se.document, function() {
            i(), V()
        }, function() {
            i(), V()
        }) : (D(n, Se.document, i, i), V()) : (i(), V())
    }

    function H() {
        if (ae("Init"), P(ce)) N();
        else {
            var e = function() {
                ce = i.createElement("div");
                var e = i.body;
                null === e && (c("warn", "Unable to find BODY element"), e = i.createElement("body"), e.style.margin = "0px", e.style.padding = "0px", i.documentElement.appendChild(e)), e.appendChild(ce), N()
            };
            try {
                e()
            } catch (n) {
                "complete" === i.readyState ? c("error", "Unable to initialize") : (c("warn", "Waiting window.onload to initialize"), r("load", t, function() {
                    try {
                        e()
                    } catch (e) {
                        c("error", "Unable to initialize")
                    }
                }))
            }
        }
    }
    var W, J, U, Y, G, Q, X = 2147483637 || n.baseZIndex,
        Z = "sprkflw_",
        K = {
            INITIAL: 0,
            LOADED: 1,
            STARTED: 2,
            HIDDEN: 3
        },
        ee = "https:",
        te = h(e.system ? e.system.formats || "0.0.0" : "0.0.0"),
        ie = e.hosts && e.hosts.IQ_HOST ? e.hosts.IQ_HOST : "ads.sparkflow.net",
        ne = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame,
        re = n && n.trace || function() {},
        ae = function() {
            re({
                prefix: "Core",
                values: Array.prototype.slice.call(arguments),
                timestamp: (new Date).getTime()
            })
        },
        oe = function() {},
        se = i.getElementsByTagName("script"),
        le = i.currentScript || i.getElementById("sf_core_vpaid") || se[se.length - 1],
        ce = le,
        de = le.src.replace(/^[^\?]+\??/, ""),
        fe = f(de),
        he = f(i.location.href.split("?")[1]),
        ue = le.src.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i),
        pe = ue && ue[1],
        me = ee + "//" + (pe || ie),
        ge = s(e.placement_id) ? s(fe.g) ? s(he.g) || s(he.t) ? undefined : he.g + "," + e.id : fe.g + "," + e.id : e.placement_id + "," + e.id,
        ve = 0,
        ye = e.placement[0] < 2 && e.placement[1] < 2,
        we = 0,
        be = !s(t.mraid) && !s(mraid.addEventListener) || !s(t.ormma) && !s(ormma.addEventListener),
        xe = null,
        ke = {},
        Se = y(),
        _e = Se.requestAnimationFrame || Se.mozRequestAnimationFrame || Se.webkitRequestAnimationFrame || Se.msRequestAnimationFrame,
        Ee = !1,
        Ce = {
            ire: "ready",
            ivi: "viewableChange",
            render: "render"
        },
        Oe = ["clk"],
        Ie = {},
        je = (l(t, "ut_pixel_event"), function() {
            try {
                t.top.location.href
            } catch (e) {
                return !0
            }
            return !1
        }()),
        ze = function(e, t, i) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                4 == this.readyState && (this.status >= 200 && this.status < 400 ? t(n.responseText) : i())
            }, n.open("GET", e, !0), n.send()
        },
        De = function(e, t, i, n) {
            i && d(te, h("4.4.0")) ? (e.src = "javascript:false;", ze(t, function(i) {
                n();
                var r = t.substr(0, t.lastIndexOf("/") + 1);
                if (i = i.replace("<head>", '<head><base href="' + r + '">'), "srcdoc" in e) e.srcdoc = i;
                else {
                    var a = e.contentWindow.document;
                    a.open(), a.write(i), a.close()
                }
            }, function() {
                n()
            })) : (n(), e.src = t)
        },
        Ae = {},
        Pe = null,
        Me = function(e) {
            var n = this,
                r = "hidden",
                a = {
                    focus: !0,
                    focusin: !0,
                    pageshow: !0,
                    blur: !1,
                    focusout: !1,
                    pagehide: !1
                },
                o = function(e) {
                    var i;
                    e = e || t.event, i = e.type in a ? a[e.type] : !this[r], n.onChange && n.onChange(i)
                };
            n.defaultStatus = !0, n.isEnabled = function() {
                return !0
            }, r in i ? e.document.addEventListener("visibilitychange", o) : (r = "mozHidden") in i ? e.document.addEventListener("mozvisibilitychange", o) : (r = "webkitHidden") in i ? e.document.addEventListener("webkitvisibilitychange", o) : (r = "msHidden") in i ? e.document.addEventListener("msvisibilitychange", o) : "onfocusin" in i ? e.document.onfocusin = e.document.onfocusout = o : e.onpageshow = e.onpagehide = e.onfocus = e.onblur = o
        },
        Re = function(e, n, r) {
            var a, o, c = function(e) {
                    var t = e.createElement("style");
                    return t.appendChild(e.createTextNode("")), e.head.appendChild(t), t
                },
                d = {
                    main: null,
                    top: null
                };
            if (this.filesLeft = e.file.length, this.totalFiles = e.file.length, this.DOM = {
                    reposElements: []
                }, this.environment = q(), this.multilayer = !1, this.safeframeAvailable = !s(t.sfAPI) || !s(t.$sf) && !s(t.$sf.ext), this.safeframeGoogleAvailable = !1, this.clickmask = "$link", this.callbacks = {}, this.css = {}, this.targetSelector = {}, this.tracking = {}, this.loadScripts = [], this.safeframeAvailable) try {
                this.safeframeGoogleAvailable = -1 !== t.location.href.indexOf("google"), this.safeframeGoogleAvailable || (this.friendlyIframes = !0)
            } catch (e) {
                console.log(e)
            }
            this.addCSSRule = function(e, t, i) {
                s(a) && (a = c(U), o = a.sheet), "insertRule" in o ? o.insertRule(e + "{" + t + "}", i) : "addRule" in o && o.addRule(e, t, i)
            }, this.addJavaScript = function(e) {
                var t = i.createElement("script");
                t.type = "text/javascript";
                try {
                    t.appendChild(i.createTextNode(e)), i.body.appendChild(t)
                } catch (n) {
                    t.text = e, i.body.appendChild(t)
                }
            }, this.extendAd = function(e) {
                $jq.extend(!0, this, e)
            }, this.remoteLogging = oe, this.removeCSS = function() {
                s(a) || (U.head.removeChild(a), a = undefined)
            }, this.setMultilayerFormat = function() {
                this.multilayer = !0, d.main = this.file[0], d.top = this.file[1]
            }, this.synchMultilayerFormat = function(e) {
                e.params.push(!0), d[e.dest].childBridge("synchMultilayerAction", e)
            }, this.ScrollEvent = !1, this.DeviceMotionEvent = !1, this.DeviceOrientationEvent = !1, this.customData = e.vars ? e.vars : {}, delete e.vars, this.placement_creative_id = n, this.iq_host = r;
            for (var f in e) this[f] = e[f];
            this.callbacks.ut_impression && (this.tracking.uti || (this.tracking.uti = []), this.tracking.uti.push({
                url: btoa("<script>(" + this.callbacks.ut_impression.toString() + ")()<\/script>"),
                condition: [],
                type: 4
            }));
            for (var h in this.tracking) {
                if ("uti" == h) {
                    var u = l(t, "ut_pixels");
                    if (u) {
                        for (var p = 0; p < this.tracking[h].length; p++) u.push({
                            url: this.tracking[h][p].url,
                            type: _(this.tracking[h][p].type)
                        });
                        continue
                    }
                    be ? this.tracking.pvi = (this.tracking.pvi || []).concat(this.tracking[h]) : this.tracking.imp = (this.tracking.imp || []).concat(this.tracking[h])
                }
                Oe.indexOf(h) > -1 && (Ie[h] || (Ie[h] = this.tracking[h].length))
            }
        },
        qe = function(e, n, r) {
            ae("File: %i", r);
            var a, o, l = this,
                d = "loading",
                f = {},
                h = x(),
                u = n.div.style,
                p = $jq(n.div),
                m = $jq(n.frame),
                v = function(e, t, i) {
                    h ? (t.transition = "all " + i + "ms", setTimeout(function() {
                        e.css(t)
                    }, 0)) : e.animate(t, i)
                },
                y = function(e, t, i) {
                    e.velocity(t, {
                        duration: i
                    })
                },
                w = $jq.Velocity ? y : v,
                k = function(t) {
                    t.parents(":not(body,html,.sfe" + e.uid + ")").each(function() {
                        var t = $jq(this),
                            i = t.css("display"),
                            n = t.css("position"),
                            r = t.css("visibility"),
                            a = t.css("transform");
                        e.DOM.reposElements.push({
                            element: this,
                            display: s(i) ? "" : i,
                            position: s(n) ? "" : n,
                            visibility: s(r) ? "" : r,
                            transform: s(a) ? "" : a
                        }), t.css({
                            display: "inherit",
                            position: "static",
                            visibility: "visible",
                            transform: "none"
                        }).addClass("sfe" + e.uid)
                    })
                },
                S = function(e) {
                    var t = {};
                    for (var i in e) "string" == typeof e[i] && "" != e[i] && (t[i] = e[i]);
                    return t
                },
                _ = function(d) {
                    if (o !== d) {
                        o = d;
                        var f = {
                                width: g(e.placement[0]),
                                height: g(e.placement[1])
                            },
                            h = (p.offset(), 0);
                        if (0 == l.index && $jq.extend(f, e.css), f.position = d ? "relative" : "static", e.nested) try {
                            b();
                            var v = M(),
                                y = !0;
                            s(a) && (y = !1, a = $jq.extend({
                                position: "",
                                top: "",
                                left: "",
                                width: "",
                                height: "",
                                "min-width": "",
                                "min-height": ""
                            }, S(v[0].style))), d ? (v.css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "1px",
                                height: "1px",
                                "min-width": "100%",
                                "min-height": "100%"
                            }), v[0].style.setProperty("z-index", X + 5, "important")) : y && v.css(a)
                        } catch (e) {
                            c("error", "Iframe", e)
                        }
                        if (d) {
                            for (var x in __sparkflow) {
                                var _ = __sparkflow[x],
                                    E = $jq(_.DOM.div);
                                x != e.uid ? (_.placement[0] <= 9 && _.placement[1] <= 9 || -1 != _.DOM.div.className.indexOf(Z + "expanded")) && E.hide() : (E.is(":visible") || c("warn", "Probable TAG conflict"), E.show())
                            }
                            n.frame.style.position = "fixed", n.frame.style.top = "0px", n.frame.style.left = "0px", k(Q), s(v) || k(v)
                        } else {
                            for (var x in __sparkflow)
                                if (x != e.uid) {
                                    var _ = __sparkflow[x];
                                    s(_.file[0]) || s(_.file[0].controller) || -1 != _.DOM.div.className.indexOf(Z + "hidden") || $jq(_.DOM.div).show()
                                }
                            n.frame.style.position = "static", n.frame.style.top = "", n.frame.style.left = "";
                            for (var x = e.DOM.reposElements.length - 1; x >= 0; x--) {
                                var C = e.DOM.reposElements[x];
                                $jq(C.element).css({
                                    display: C.display,
                                    visibility: C.visibility,
                                    position: C.position,
                                    transform: C.transform
                                }).removeClass("sfe" + e.uid)
                            }
                            e.DOM.reposElements = []
                        }
                        var O = d ? "1px" : f.width,
                            I = d ? "1px" : f.height,
                            j = d ? "100%" : s(f["min-width"]) ? "" : f["min-width"],
                            z = d ? "100%" : s(f["min-height"]) ? "" : f["min-height"];
                        if (u.position = d ? "fixed" : f.position, u.zIndex = d ? X + 6 : "auto", ae("File: %i - Modal adjust - Ad div - pos", r, {
                                position: u.position,
                                zIndex: u.zIndex
                            }, p), w(p, {
                                top: d ? "0px" : "auto",
                                left: d ? "0px" : "auto",
                                width: O,
                                height: I,
                                "min-width": j,
                                "min-height": z
                            }, h), ae("File: %i - Modal adjust - Ad div - dim", r, {
                                width: O,
                                height: I,
                                "min-width": j,
                                "min-height": z
                            }, p), w(m, {
                                width: O,
                                height: I,
                                "min-width": j,
                                "min-height": z
                            }, h), ae("File: $i - Modal adjust - Ad frame - dim", r, {
                                width: O,
                                height: I,
                                "min-width": j,
                                "min-height": z
                            }, m), !d && t.inDapIF && i.body.id && parent.dap_Resize) try {
                            parent.dap_Resize(i.body.id, e.placement[0], e.placement[1])
                        } catch (e) {
                            c("warn", "Failed FIF attempt", e)
                        }
                    }
                },
                E = function(a) {
                    var o = n.mraid.getResizeProperties();
                    0 == l.index && (s(e.css.width) || (o.width = e.css.width), s(e.css.height) || (o.height = e.css.height), s(e.css["min-width"]) || (o["min-width"] = e.css["min-width"]), s(e.css["min-height"]) || (o["min-height"] = e.css["min-height"]));
                    var d = g(a || !s(e.css.width) ? o.width : n.width),
                        f = g(a || !s(e.css.height) ? o.height : n.height),
                        h = g(a || !s(e.css["min-width"]) ? o["min-width"] || o.width : n.width),
                        v = g(a || !s(e.css["min-height"]) ? o["min-height"] || o.height : n.height),
                        y = g(a ? o.offsetY : 0),
                        b = g(a ? o.offsetX : 0),
                        x = {
                            width: d,
                            height: f,
                            "min-width": h,
                            "min-height": v
                        };
                    for (var k in x) s(x[k]) && delete x[k];
                    w(m, x, o.speed), ae("File: %i - Resize adjust - Ad frame", r, x);
                    var S = p,
                        _ = function() {
                            if (e.nested) try {
                                S = $jq(M()), S[0].style.position = "relative"
                            } catch (e) {
                                c("error", "Iframe", e)
                            }
                        };
                    if (t.inDapIF) {
                        try {
                            ! function() {
                                var e = parent.document.getElementById(i.body.id);
                                e ? (o.push || (e.style.position = "absolute", e.style.zIndex = 29999), S[0].style.width = d, S[0].style.height = f, S[0].style.minWidth = h, S[0].style.minHeight = v, S = $jq(e), S.closest(".showcasead").css({
                                    "z-index": 29998
                                })) : _()
                            }()
                        } catch (e) {
                            _()
                        }
                    }
                    a && !o.push || (w(Q, x, o.speed), ae("File: %i - Resize adjust - Plc div", r, x)), "fixed" != u.position && (u.position = a ? "relative" : "static", $jq.extend(x, {
                        top: y,
                        left: b
                    }), ae("File: %i - Resize adjust - Extend styles", r, x)), n.sfAPI ? a ? (n.sfAPI.expand({
                        l: -1 * o.offsetX,
                        t: -1 * o.offsetY,
                        r: o.width - n.width + o.offsetX,
                        b: o.height - n.height + o.offsetY,
                        push: o.push
                    }), ae("File: %i - Resize adjust - sfAPI expand", r)) : (n.sfAPI.collapse(), ae("File: %i - Resize adjust - sfAPI collapse", r)) : (e.nested && _(), w(S, x, o.speed), ae("File: %i - Resize adjust - Ad div", r, x))
                };
            this.index = r, this.on = function(e, t) {
                s(f[e]) && (f[e] = []), f[e].unshift(t)
            }, this.trigger = function(e, t) {
                if (!s(f[e]))
                    for (var i = f[e].length - 1; i >= 0; i--) f[e][i].call(n, t)
            }, this.setState = function(i) {
                if (ae("setState", i), d != i || "resized" == i) {
                    if ("expanded" == i) _(!0);
                    else if ("resized" == i) {
                        var a = n.mraid.getResizeProperties(); - 1 == a.width && -1 == a.height ? (be || n.mraid.lockScroll(!0), _(!0)) : E(!0)
                    } else if ("collapsed" === i) "expanded" == d && _(!1);
                    else if ("default" == i)
                        if ("resized" == d) E(!1);
                        else if (1 == n.width && 1 == n.height) {
                        if (be) try {
                            if (t.__sfHideClose) n.close.style.display = "none";
                            else {
                                n.close.style.display = "";
                                var o = function() {
                                    $jq("img", n.close).one("load", function() {
                                        n.mraid.useCustomClose(!0)
                                    }).each(function() {
                                        this.complete && ($jq(this).load(), n.mraid.useCustomClose(!0))
                                    })
                                };
                                "" == n.close.innerHTML && (e.file[0].readyState == K.STARTED ? (n.close.innerHTML = $jq(n.close).data("img"), o()) : e.file[0].controller.on("ads", function(e) {
                                    "none" != n.close.style.display && (n.close.innerHTML = $jq(n.close).data("img"), o())
                                }))
                            }
                        } catch (e) {} else n.mraid.lockScroll(!0), n.mraid.showClose(!0);
                        _(!0)
                    } else n.width > 9 && n.height > 9 && _(!1);
                    else if ("hidden" != i || be) {
                        if ("floated" == i) {
                            n.mraid.lockScroll(!1);
                            var a = n.mraid.getFloatingProperties(),
                                s = a.position.split(" ");
                            1 == s.length && s.push("center");
                            var c = {
                                width: g(a.width),
                                height: g(a.height),
                                "min-width": g(a.width),
                                "min-height": g(a.height),
                                top: "center" == s[1] || "top" == s[1] ? 0 : "bottom" == s[1] || -1 != s[1].indexOf("-") ? "auto" : s[1],
                                bottom: "center" == s[1] || "bottom" == s[1] ? 0 : "top" == s[1] || -1 == s[1].indexOf("-") ? "auto" : s[1].substr(1),
                                left: "center" == s[0] || "left" == s[0] ? 0 : "right" == s[0] || -1 != s[0].indexOf("-") ? "auto" : s[0],
                                right: "center" == s[0] || "right" == s[0] ? 0 : "left" == s[0] || -1 == s[0].indexOf("-") ? "auto" : s[0].substr(1),
                                margin: "auto",
                                position: "fixed" == a.attachment ? "fixed" : "absolute",
                                "z-index": X + 4
                            };
                            0 == l.index && $jq.extend(c, e.css), p.css(c), ae("File: %i - Set state: floated - Ad div", r, c)
                        }
                    } else n.readyState = K.HIDDEN, _(!1), p.hide(), 1 == e.file.length && Q.hide();
                    d = i, e.DOM.div.className = Z + "main " + Z + i
                }
            }
        },
        Te = function(e, n) {
            var r, o, l, c = {},
                d = {},
                f = {},
                h = {
                    width: G.width(),
                    height: G.height(),
                    useCustomClose: !1,
                    isModal: !0
                },
                u = {
                    sms: !1,
                    tel: !1,
                    calendar: !1,
                    storePicture: !1,
                    inlineVideo: !1
                },
                p = {
                    allowOrientationChange: !0,
                    forceOrientation: "none"
                },
                m = !1,
                w = {
                    speed: 250,
                    push: !0,
                    offsetX: 0,
                    offsetY: 0,
                    customClosePosition: "top-right",
                    allowOffscreen: !0
                },
                b = "loading",
                x = !0,
                k = $jq(n.div),
                S = $jq(n.frame),
                _ = $jq(n.close),
                E = $jq(U.getElementsByTagName("html")[0]),
                C = $jq(U.body),
                O = function(t, i) {
                    if (!s(f[t]))
                        for (var r = f[t].length - 1; r >= 0; r--) f[t][r].call(n, i);
                    z(e, t)
                };
            this.addEventListener = function(e, t) {
                s(f[e]) && (f[e] = []), f[e].unshift(t)
            }, this.close = function() {
                this.lockScroll(!1), this.showClose(!1);
                var t = n.mraid && n.mraid.getForceClose(),
                    i = n.mraid && n.mraid.getForceCloseStates();
                t && (i && i.length > 0 && i.indexOf(b) > -1 || !i || 0 === i.length) ? this.setState("hidden") : "expanded" == b || "resized" == b ? (j ? this.setState("collapsed") : this.setState("default"), O("sizeChange", [e.placement[0], e.placement[1]])) : ("default" == b && "interstitial" == this.getPlacementType() || "floated" == b) && this.setState("hidden")
            }, this.expand = function(e) {
                "loading" != b && "expanded" != b && "hidden" != b && (this.lockScroll(!0), this.setState("expanded"), O("sizeChange", [G.width(), G.height()]), this.showClose(!0))
            }, this.getCurrentPosition = function() {
                var t = n.div,
                    i = U;
                if (e.nested) try {
                    t = M()[0], i = t.ownerDocument
                } catch (e) {}
                var r = t.getBoundingClientRect();
                return {
                    x: r.left + (i.documentElement.scrollLeft || i.body.scrollLeft || 0),
                    y: r.top + (i.documentElement.scrollTop || i.body.scrollTop || 0),
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }, this.getFullCurrentPosition = function() {
                var e = this.getCurrentPosition(),
                    t = y();
                return e.scrollTop = v(t) || 0, e
            }, this.getDefaultPosition = function() {
                return {
                    x: Q.offset().left,
                    y: Q.offset().top,
                    width: e.placement[0],
                    height: e.placement[1]
                }
            }, this.getExpandProperties = function() {
                return a(h)
            }, this.getMaxSize = function() {
                return {
                    width: G.width(),
                    height: G.height()
                }
            }, this.getOrientationProperties = function() {
                return a(p)
            }, this.getPlacementType = function() {
                return ye ? "interstitial" : "inline"
            }, this.getResizeProperties = function() {
                return a(w)
            }, this.getScreenSize = function() {
                return {
                    width: t.screen.width,
                    height: t.screen.height
                }
            }, this.getState = function() {
                return b
            }, this.getVersion = function() {
                return "2.0"
            }, this.isViewable = function() {
                if (!J) return x = !1;
                var e = U.documentElement,
                    t = n.div.getBoundingClientRect();
                return x = !!t && t.bottom >= 0 && t.right >= 0 && t.top <= e.clientHeight && t.left <= e.clientWidth
            }, this.removeEventListener = function(e, t) {
                if (!s(f[e])) {
                    var i = [];
                    for (var n in f[e]) f[e][n] != t && i.push(f[e][n]);
                    f[e] = i
                }
            }, this.resize = function() {
                "expanded" == b || s(w.width) || s(w.height) ? O("error") : (this.setState("resized"), O("sizeChange", [w.width, w.height]))
            }, this.setExpandProperties = function(e) {
                delete e.isModal, $jq.extend(h, e)
            }, this.setOrientationProperties = function(e) {
                $jq.extend(p, e)
            }, this.setResizeProperties = function(e) {
                $jq.extend(w, e)
            }, this.supports = function(e) {
                return Boolean(u[e])
            }, this.useCustomClose = function(e) {
                h.useCustomClose = e, "none" == n.close.style.display || t.__sfHideClose || this.showClose(!e)
            }, this.setForceClose = function(e) {
                o = e && e.length > 0 ? e : null, r = !0
            }, this.getForceClose = function() {
                return !!r
            }, this.getForceCloseStates = function() {
                return o
            };
            var I = {
                    width: 300,
                    height: 250,
                    showClose: !1,
                    position: "center center",
                    attachment: "fixed"
                },
                j = !1;
            this.checkViewable = function() {
                var e = x;
                this.isViewable(), x != e && O("viewableChange", x)
            }, this.collapse = function(e) {
                j = e, this.setState("collapsed"), O("sizeChange", [w.width, w.height])
            }, this["float"] = function() {
                var e = I;
                "default" == b && (this.setState("floated"), O("sizeChange", [e.width, e.height]), this.showClose(e.showClose))
            }, this.getFloatingProperties = function() {
                return a(I)
            }, this.getUpdatedCurrentPosition = function() {
                n.childBridge("setProperties", [{
                    name: "_fullCurrentPosition",
                    value: this.getFullCurrentPosition()
                }])
            }, this.detectBrowsers = function() {
                var e = t.navigator.userAgent,
                    i = /Edge\/\d+/.test(e);
                return {
                    isIE: function() {
                        if (e.indexOf("MSIE ") > 0) return !0;
                        if (e.indexOf("Trident/") > 0) return e.indexOf("rv:"), !0;
                        return e.indexOf("Edge/") > 0
                    }(),
                    isEdge: i
                }
            }, this.detectMobile = function() {
                var e = t.navigator.userAgent;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            }, this.lockScroll = function(e) {
                if (e) {
                    var t = E[0].style,
                        i = C[0].style;
                    l = Se.scrollY || Se.pageYOffset, d = {
                        overflow: t.overflow,
                        height: t.height
                    }, E.css({
                        overflow: "hidden",
                        height: "100%"
                    }), c = {
                        overflow: i.overflow,
                        height: i.height,
                        "min-height": i.minHeight
                    }, C.css({
                        overflow: "hidden",
                        height: "100%",
                        "min-height": "100%"
                    })
                } else C.css(c), E.css(d), Se.scrollBy(0, l)
            }, this.setState = function(e) {
                b == e && "resized" != e || (b = e, O("stateChange", e)), m || (m = !0, O("ready"))
            }, this.setFloatingProperties = function(e) {
                $jq.extend(I, e)
            }, this.showClose = function(i) {
                i && !t.__sfHideClose ? h.useCustomClose || (n.close.style.display = "", "" == n.close.innerHTML && (e.file[0].readyState == K.STARTED ? n.close.innerHTML = _.data("img") : e.file[0].controller.on("ads", function(e) {
                    "none" != n.close.style.display && (n.close.innerHTML = _.data("img"), n.close.style.display = "block", n.close.style["-webkit-transform"] = "translateZ(0)")
                }))) : n.close.style.display = "none"
            }, this.setFile = function(t) {
                if (ae("MRAID - Set file", t, n), $jq.extend(n, t), s(e.css.width) && !s(t.width)) {
                    var i = g(t.width);
                    ae("MRAID - Set file - DOM div width", i, n), e.DOM.div.style.width = i, n.div.style.width = i, n.frame.style.width = i
                }
                if (s(e.css.height) && !s(t.height)) {
                    var r = g(t.height);
                    ae("MRAID - Set file - DOM div height", r, n), e.DOM.div.style.height = r, n.div.style.height = r, n.frame.style.height = r
                }
            }, this.setDIV = function(e) {
                ae("MRAID - Set div", e, n), k.css(e), S.css(e)
            }, this.setFrameCss = function(e) {
                ae("MRAID - Set iframe only", e, n), S.css(e)
            }, this.setDivCss = function(e) {
                ae("MRAID - Set div only", e, n), k.css(e)
            }, this.buildElement = function(e) {
                var t, r = i.createElement("div");
                if (e && e.style && r.setAttribute("style", e.style), r.style.position = "absolute", r.style["line-height"] = 1, r.style.display = "none", r.style["box-sizing"] = "border-box", r.id = e.id, r.innerHTML = e.str, r.classList.add("sprkflw_fxd_elm"), r.style["background-image"]) {
                    r.style["background-image"].indexOf("t.gif") > -1 && (r.style["background-image"] = 'url("https://creative-p.undertone.com/sparkflow/t.gif")')
                }
                if (e.font) {
                    var a = E.find("head"),
                        o = e.font.split(",");
                    if ("googleapi" === o[0]) {
                        var s = i.createElement("link");
                        s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css?family=" + o[1].replace(" ", "+").replace(/"/g, ""), $jq(a).append(s)
                    } else "custom" === o[0] && (t || (t = i.createElement("style")), t.appendChild(i.createTextNode('@font-face{font-family:"' + o[2] + '";src:url("' + e.url + o[3] + '") format("woff")}')))
                }
                if ("image" === e.type) {
                    var l = r.querySelector("img"),
                        c = l.getAttribute("data-src") || l.getAttribute("src");
                    l.src = e.url + c, l.style.width = "100%", l.style.height = "100%"
                }
                "text" === e.type && (r.style.height = "auto"), e.click && r.addEventListener("click", function(t) {
                    n.childBridge("clickElement", [e.id])
                }), t && k.append($jq(t)), k[0].appendChild(r), Ae[e.scene] || (Ae[e.scene] = []), Ae[e.scene].push(e.id)
            }, this.updateElements = function(e) {
                if (e.eid) {
                    var t = $jq("#" + e.eid, k);
                    if (t && 0 != t.length) {
                        t = t[0];
                        var n = e.anchor,
                            r = i.createElement("span");
                        r.setAttribute("style", e.style);
                        var a = r.style || t.style || {},
                            o = e.offtop || 0,
                            s = e.offleft || 0;
                        if (e.css)
                            for (var l in e.css) e.css.hasOwnProperty(l) && (t.style[l] = e.css[l]);
                        if (e.zoom) {
                            var c = parseInt(a.width),
                                d = parseInt(a.height),
                                f = parseInt(a.left),
                                h = parseInt(a.top),
                                u = parseInt(a["margin-top"]),
                                p = 0;
                            t.style.width = c * parseFloat(e.zoom) + "px", t.style.height = d * parseFloat(e.zoom) + "px", e.hasbars && e.barheight > 0 ? (p = e.barheight, "text333_15" === e.eid && console.log("prev top", h), h = o + h * e.zoom, "text333_15" === e.eid && console.log("new prev top", h)) : h *= e.zoom, n ? ("text333_15" === e.eid && console.log("anchored", n, u), "number" == typeof n.b && (t.style.top = "auto", t.style.bottom = n.b * e.zoom + p + "px"), "number" == typeof n.t && (t.style.top = n.t * e.zoom + p + "px"), "number" == typeof n.l && (t.style.left = n.l * e.zoom + "px"), "number" == typeof n.r && (t.style.left = "auto", t.style.right = n.r * e.zoom + "px"), "undefined" == typeof n.t && "undefined" == typeof n.b && (t.style.top = o + "px"), "undefined" == typeof n.l && "undefined" == typeof n.r && (t.style.left = s + f * parseFloat(e.zoom) + "px")) : (t.style.top = h + "px", t.style.left = s + f * parseFloat(e.zoom) + "px", t.style["margin-top"] = u * parseFloat(e.zoom) + "px");
                            var m = parseInt(a.fontSize);
                            m && (t.style["font-size"] = m * parseFloat(e.zoom) + "px");
                            var g = parseInt(a.padding);
                            g && (t.style.padding = g * parseFloat(e.zoom) + "px")
                        }
                    }
                }
            }, this.manageElements = function(e) {
                e && Pe !== e && (Pe = e, $jq(".sprkflw_fxd_elm", k).css({
                    display: "none"
                }), Ae[e] && Ae[e].forEach(function(e) {
                    $jq("#" + e, k).css({
                        display: "block"
                    })
                }))
            }, this.isForceCollapse = function() {
                return j
            }, this.setOutsideCode = function(e) {
                if ("script" === e.type) {
                    var t;
                    if ("link" === e.set) e.array && e.array.length > 0 && e.array.forEach(function(e) {
                        t = i.createElement("script"), t.src = e, k.append($jq(t))
                    });
                    else if ("code" === e.set) {
                        var n = i.createElement("script");
                        n.type = "text/javascript";
                        try {
                            n.appendChild(i.createTextNode(e.code)), i.body.appendChild(n)
                        } catch (t) {
                            n.text = e.code, i.body.appendChild(n)
                        }
                    }
                } else if ("style" === e.type) {
                    var r;
                    "link" === e.set ? e.array && e.array.length > 0 && e.array.forEach(function(e) {
                        r = i.createElement("style"), r.rel = "stylesheet", r.href = e, k.append($jq(r))
                    }) : "code" === e.set && (r = i.createElement("style"), r.appendChild(i.createTextNode(e.code)), k.append($jq(r)))
                }
            }, this.setCustomCloseImg = function(t) {
                _.css("opacity", 0);
                var i = S.attr("src"),
                    n = i.substring(0, i.lastIndexOf("/") + 1) + t;
                Se.CustomCloseOnErrorSrc = e.close, Se.CustomCloseOnError = function(e) {
                    e.src = Se.CustomCloseOnErrorSrc
                }, _.attr("data-img", '<img src="' + n + '" border="0" style="height:100%;width:100%;border:none;" onerror="window.CustomCloseOnError(this);">');
                var r = new Image;
                r.onload = function() {
                    _.css("opacity", 1)
                }, r.onerror = function() {
                    _.css("opacity", 1)
                }, r.src = n
            }, this.setCustomCloseProps = function(e, t) {
                if ("size" === e) {
                    var i;
                    i = t > 60 ? 60 : t < 40 ? 40 : t, _.css({
                        height: i + "px",
                        width: i + "px"
                    })
                }
                if ("placement" === e) {
                    var n;
                    n = t > 10 ? 10 : t < 0 ? 0 : t, _.css({
                        top: parseInt(_.css("top")) + n + "px",
                        right: parseInt(_.css("right")) + n + "px"
                    })
                }
            }
        },
        Le = function() {
            var n, r, a = {
                    screen: {
                        orientation: function() {
                            return "undefined" != typeof t.orientation ? {
                                short: 90 === Math.abs(t.orientation) ? "landscape" : "portrait"
                            } : screen.orientation && screen.orientation.type ? {
                                short: screen.orientation.type.split("-")[0]
                            } : {}
                        }
                    },
                    element: {
                        matches: function(e, t) {
                            for (var n = i.querySelectorAll(t), r = n.length; --r >= 0 && n[r] !== e;);
                            return r > -1
                        },
                        observe: function(e, n, r) {
                            if (t.MutationObserver && e) {
                                var a = function(e) {
                                        e.forEach(function(e) {
                                            r(e)
                                        })
                                    },
                                    o = new MutationObserver(a),
                                    s = i.querySelector(e),
                                    l = n || {
                                        childList: !0,
                                        subtree: !1,
                                        attributes: !1,
                                        characterData: !1
                                    };
                                s && o.observe(s, l)
                            }
                        }
                    },
                    window: function() {
                        function e() {
                            return i() && n()
                        }

                        function i() {
                            try {
                                t.top.location.href
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }

                        function n() {
                            return t.sfAPI || t.$sf && t.$sf.ext
                        }

                        function r() {
                            return !e()
                        }

                        function a() {
                            return t.self !== t.top
                        }

                        function o() {
                            if (r()) return s.location.href;
                            var e = url_parse(s.location.href);
                            return function(e) {
                                return url_query_parse(e.fragment).p
                            }(e) || t.document.referrer || s.location.href
                        }
                        var s = function() {
                            return e() ? t.self : t.top
                        }();
                        return {
                            main: s,
                            isRestrictedFrame: e,
                            isFriendlyFrame: r,
                            isInFrame: a,
                            locationString: o,
                            isWinTopRestrictedFrame: i
                        }
                    }()
                },
                o = function(e, n) {
                    function r() {
                        u = 0;
                        var t = 0;
                        for (var i in h) h.hasOwnProperty(i) && (o(i, n) ? (t++, h[i].timestamp ? (h[i].counter += (new Date).valueOf() - h[i].timestamp, h[i].timestamp = (new Date).valueOf()) : h[i].timestamp = (new Date).valueOf(), u = Math.max(u, h[i].counter), l(h[i]) && (p("irv"), f.remove(i), t--, Object.keys(h).length || (a.window.isRestrictedFrame() ? d && clearInterval(d) : e.removeEventListener("scroll", r)))) : (h[i].counter = 0, h[i].timestamp = 0));
                        t && (c = setTimeout(r, m - u))
                    }

                    function o(e, n) {
                        var r;
                        if (a.window.isRestrictedFrame()) {
                            var o = t.sfAPI || t.$sf && t.$sf.ext;
                            if (o && o.inViewPercentage) return o.inViewPercentage() >= 50
                        }
                        if (!(r = "string" == typeof e ? n.getElementById(e) : e) || !r.nodeType || 1 !== r.nodeType) return !1;
                        var l = r.getBoundingClientRect(),
                            c = {
                                el: r,
                                x: l.left,
                                y: l.top,
                                w: r.offsetWidth,
                                h: r.offsetHeight
                            },
                            d = s(),
                            f = c.y + c.h * g / 100;
                        return f > 0 && f < d && !i.hidden
                    }

                    function s() {
                        return e.innerHeight ? e.innerHeight : e.document.documentElement.offsetHeight
                    }

                    function l(e) {
                        return e.counter && e.counter >= m
                    }
                    var c, d, f = this,
                        h = {},
                        u = 0,
                        m = 1e3,
                        g = 50;
                    if (a.window.isRestrictedFrame()) {
                        (t.sfAPI || t.$sf && t.$sf.ext).register(t.innerWidth, t.innerHeight, function(e, t) {
                            "geom-update" === e && (d && clearInterval(d), r())
                        }), d = setInterval(r, 200)
                    } else a.window.isWinTopRestrictedFrame() ? d = setInterval(r, 200) : e.addEventListener("scroll", r);
                    return f.add = function(e) {
                        e && (h[e.id] = {
                            counter: 0,
                            timestamp: 0
                        })
                    }, f.remove = function(e) {
                        h[e] && delete h[e]
                    }, f.clear = function() {
                        h = {}
                    }, f.run = function() {
                        c && f.stop(), r()
                    }, f.stop = function() {
                        clearTimeout(c)
                    }, f
                },
                s = function() {
                    r && r.run()
                };
            return {
                init: function() {
                    n || (n = __sparkflow[e.uid].file[0].div, r = new o(y(), n.ownerDocument), r.add(n), r.run())
                },
                run: s
            }
        }();
    s(Se.__sparkflowNum) && (Se.__sparkflowNum = 0), t._sparkflowLogger && "function" == typeof t._sparkflowLogger && (oe = function(i) {
        t._sparkflowLogger(e, i, q())
    }), s(ne) || ne(function() {
        W = !0
    }), e.uid = e.uid + "_" + Se.__sparkflowNum++;
    var Fe = function() {
        !s(n) && n.waitOnLoad && "complete" !== i.readyState ? (ae("Wait on load"), "complete" === i.readyState || "interactive" === i.readyState ? H() : i.addEventListener ? i.addEventListener("DOMContentLoaded", H) : t.attachEvent("onload", H)) : H()
    };
    if (ge) {
        var $e = "";
        s(e.additional) && (e.additional = l(t, "ut_udms"));
        var Be = function() {
            if (s(e.additional) || null === e.additional || "object" != typeof e.additional) delete e.additional;
            else {
                for (var i in e.additional)
                    if ("macros" !== i) {
                        var n = e.additional[i];
                        $e += "&" + i + "=", $e += encodeURIComponent(null === n || "object" != typeof n || s(t.JSON) ? String(n) : JSON.stringify(n))
                    }
                e.additional && e.additional.macros && (e.macros = e.additional.macros), e.additional = $e
            }
            p("3ps"), Fe()
        };
        if (s(e.additional) && 202 === q()) {
            var Ve = !1,
                Ne = {
                    sparkflow: "sparkflow-" + (new Date).getTime(),
                    url: t.location.href
                };
            ! function(e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
            }(t, "message", function(i) {
                try {
                    var n = JSON.parse(atob(i.data))
                } catch (i) {}
                if (n) {
                    if (n && n.ut_udms) {
                        for (var r in n) t[r] = n[r];
                        e.additional = l(t, "ut_udms")
                    }
                    Ve || (Ve = !0, Be())
                }
            }), t.parent.postMessage(JSON.stringify(Ne), "*"), setTimeout(function() {
                Ve || (Ve = !0, Be())
            }, 500)
        } else Be()
    } else Fe()
}({
    "external_id": 0,
    "token": "1668358971:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiIxNjY4MzU4OTcxIiwiaWF0IjoxNjY4MzU4OTcxfQ.Z-2Ew4FQFsIJeSTbp8b9godkBFAUOExaChkgrAMC5BQ",
    "uid": "01f59ab0637511ed9f215dd55b700fd3",
    "test_id": "",
    "test_variant": "",
    "placement_id": 92214,
    "system": {
        "system": "2.27.116",
        "iq": "4.8.06",
        "formats": "4.20.199",
        "studio": "3.7.14",
        "admin": "4.13.170",
        "api-admin": "4.8.1"
    },
    "extraData": {
        "geo": {}
    },
    "user": {
        "device": "desktop",
        "browser": "Chrome",
        "version": "107.0.0.0"
    },
    "placement": [640, 120],
    "close": "//creative-p.undertone.com/sparkflow/cb.png",
    "file": [{
        "src": "//creative-p.undertone.com/1149/99859-1664985740/m215-0.html",
        "width": 640,
        "height": 120,
        "name": "Main"
    }],
    "id": 99859,
    "format_type": 22,
    "format_id": 230,
    "template_id": 0,
    "company_id": 112,
    "campaign_id": 12675,
    "advertiser_id": 1149,
    "tracking": {
        "clk": [{
            "url": "https://evt.undertone.com/e?id={id}&zoneid={zoneid}&e=csop9260&eid=background",
            "condition": "{\"tracked_element\":\"^backgroundClicked\"}",
            "type": 1
        }, {
            "url": "https://evt.undertone.com/e?id={id}&zoneid={zoneid}&e=csop9260&eid=collapsedCTA",
            "condition": "{\"tracked_element\":\"^collapsedCTAClicked\"}",
            "type": 1
        }, {
            "url": "https://evt.undertone.com/e?id={id}&zoneid={zoneid}&e=csop9260&eid=expandCTA",
            "condition": "{\"tracked_element\":\"^ctaClicked\"}",
            "type": 1
        }]
    },
    "hosts": {
        "APPS_HOST": "apps.sparkflow.net",
        "IQ_HOST": "ads.sparkflow.net"
    },
    "vars": {
        "clicktag1": "https://www.undertone.com",
        "clicktag2": "https://www.undertone.com",
        "clicktag3": "https://www.undertone.com"
    },
    "time": 1,
    "dynamic": {}
}, window, document, window._spad ? _spad : void 0);
