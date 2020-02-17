"use strict";
(function() {
    var i = null;
    var a = (window.localStorage && "lang" in localStorage) ? localStorage.lang : (navigator.language || navigator.userLanguage).substr(0, 2);
    if (a !== "de") {
        a = "en"
    }
    var k = new function() {
        var u = null;
        var n = {};
        var q = null;
        var s = null;
        var r = false;

        function A(D) {
            u = document.createElement("div");
            u.style.left = "-5000px";
            u.style.opacity = "0";
            if (!("ontouchstart" in window) && !navigator.maxTouchPoints) {
                u.style.transition = "opacity 200ms ease-in-out"
            }
            u.classList.add(D);
            document.body.appendChild(u);
            u.addEventListener("webkitTransitionEnd", o, true);
            u.addEventListener("oTransitionEnd", o, true);
            u.addEventListener("MSTransitionEnd", o, true);
            u.addEventListener("transitionend", o, true);
            document.addEventListener("mousemove", z)
        }

        function B(D, E) {
            n[D] = E;
            if (r) {
                x(D)
            }
        }

        function x(D) {
            if (D in n) {
                u.innerHTML = n[D];
                u.style.opacity = "1";
                if (s !== null) {
                    clearTimeout(s);
                    s = null
                }
                p();
                return true
            }
            r = true;
            return false
        }

        function t() {
            s = setTimeout(k.hideNow(), 100);
            r = false
        }

        function v() {
            u.style.opacity = "0"
        }

        function p() {
            if ("ontouchstart" in window || navigator.maxTouchPoints) {
                u.style.left = "10px";
                u.style.top = (q.pageY + 20) + "px";
                return
            }
            var E = w();
            var D = q.pageX + 20;
            if (D + u.offsetWidth > E.right) {
                D = Math.max(E.left, D - u.offsetWidth)
            }
            var F = Math.max(E.top, q.pageY - u.offsetHeight - 10);
            if (D < q.pageX && D + u.offsetWidth > q.pageX && F < q.pageY && F + u.offsetHeight > q.pageY) {
                D = q.pageX + 20
            }
            u.style.left = D + "px";
            u.style.top = F + "px"
        }

        function o() {
            if (u.style.opacity === "0") {
                u.style.left = "-5000px"
            }
        }

        function y() {
            var D = 0;
            var E = 0;
            if (document.documentElement && document.documentElement.clientHeight) {
                D = document.documentElement.clientWidth;
                E = document.documentElement.clientHeight
            } else {
                if (document.body && document.body.clientHeight) {
                    D = document.body.clientWidth;
                    E = document.body.clientHeight
                } else {
                    if (window.innerHeight) {
                        D = window.innerWidth;
                        E = window.innerHeight
                    }
                }
            }
            return {
                w: D,
                h: E
            }
        }

        function C() {
            var D = 0;
            var E = 0;
            if (window.pageXOffset || window.pageYOffset) {
                D = window.pageXOffset;
                E = window.pageYOffset
            } else {
                if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                    D = document.body.scrollLeft;
                    E = document.body.scrollTop
                } else {
                    if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                        D = document.documentElement.scrollLeft;
                        E = document.documentElement.scrollTop
                    }
                }
            }
            return {
                x: D,
                y: E
            }
        }

        function w() {
            var E = y();
            var D = C();
            return {
                left: D.x,
                top: D.y,
                right: D.x + E.w,
                bottom: D.y + E.h
            }
        }

        function z(D) {
            q = D;
            if (u.style.left !== "-5000px") {
                p()
            }
        }
        this.init = A;
        this.add = B;
        this.show = x;
        this.hide = t;
        this.hideNow = v
    };

    function d(o, n, p) {
        if (o.addEventListener) {
            o.addEventListener(n, p, true)
        } else {
            o.attachEvent("on" + n, p)
        }
    }

    function c() {
        if ("ontouchstart" in window || navigator.maxTouchPoints) {
            d(document, "click", function(n) {
                l(n, e)
            })
        } else {
            d(document, "mouseover", function(n) {
                l(n, h)
            });
            d(document, "mouseout", function(n) {
                l(n, j)
            })
        }
        if (window.localStorage) {
            window.addEventListener("storage", function(n) {
                if ("lang" === n.key) {
                    a = n.newValue === "en" ? "en" : "de"
                }
            })
        }
        d(document, "esblangchanged", function(n) {
            a = n.lang === "en" ? "en" : "de"
        });
        d(document, "esbshowtooltip", function(n) {
            if ("ttcontent" in n) {
                k.add(n.ttkey, n.ttcontent)
            }
        });
        d(document, "esbhidetooltip", function(n) {
            k.hide()
        })
    }

    function g(r) {
        var o = r.type + "-" + a + "-" + r.id;
        if (k.show(o)) {
            return
        }
        var p = "";
        if ("esodbv" in window) {
            p = "?_v=" + window.esodbv
        } else {
            var q = new Date();
            q.setHours(24, 0, 0, 0);
            p = "?_t=" + q.getTime()
        }
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.async = true;
        if (r.type === "skill" || r.type === "set") {
            n.src = "https://www.elderscrollsbote.de/esodb/" + r.type + "-" + a + "/" + r.id + ".js?" + p;
        } else {
            n.src = "https://ewigejagd.github.io/esodb/" + r.type + "-" + a + "/" + r.id + ".js?" + p;
        }
        document.body.appendChild(n)
    }

    function l(o, q) {
        if (!o.target) {
            o.target = o.srcElement
        }
        var p = o.target;
        var n = 0;
        while (p && ++n <= 5) {
            if (p.nodeName.toLowerCase() === "a") {
                if (q(p) === false) {
                    o.preventDefault()
                }
                return
            }
            p = p.parentNode
        }
        q(null)
    }

    function h(n) {
        if (i === n || n === null) {
            return
        }
        var o = b(n);
        if ("id" in o && "type" in o) {
            i = n;
            g(o)
        }
    }

    function j(n) {
        if (i !== null) {
            i = null;
            k.hide()
        }
    }

    function e(n) {
        if (i === n) {
            return
        }
        if (n === null) {
            k.hideNow();
            return false
        }
        var o = b(n);
        if ("id" in o && "type" in o) {
            i = n;
            g(o);
            return false
        }
    }

    function b(n, o) {
        if (typeof n.className !== "undefined" && n.className.indexOf("elderscrollsbote-no-tooltip") > -1) {
            return {}
        }
        if (n.href.match(new RegExp("^https?://[^.]*.elderscrollsbote.(?:local|de)/(skill|set)=([0-9]+)"))) {
            return {
                type: RegExp.$1,
                id: RegExp.$2
            }
        } else if (n.href.match(new RegExp("^https://ewigejagd.github.io/(consumable)=([0-9]+)"))) {
            return {
                type: RegExp.$1,
                id: RegExp.$2
            }
        }
        return {}
    }

    function f() {
        var q = document.createElement("style");
        q.appendChild(document.createTextNode(""));
        document.head.appendChild(q);
        var o = -1;
        var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAACCAYAAABbnTDmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFOUVCQjAzOERENTExRTM5N0YxRDJFRkExRDNBREY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFOUVCQjA0OERENTExRTM5N0YxRDJFRkExRDNBREY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU5RUJCMDE4REQ1MTFFMzk3RjFEMkVGQTFEM0FERjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU5RUJCMDI4REQ1MTFFMzk3RjFEMkVGQTFEM0FERjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6zlJunAAACiUlEQVR42nxUya7bMAykJK9pX4IHBEjQW1H0/78pxxzaIAvseJFUDWU6slM8AYRtmSKHnKHU5tuHp7CMMZRlGSml8El5YSjPc9Ja815ZxGdRFGzwL8uS37VWpMixL87AEEue8FXKkveeDXGqqqK6rvl7GAbyNM7++I9Yzjm63W50uVzo96+fs/84jtT3PW23W/bruo6kBjHESO18PjNW5JW6sJADJnVK/ek7lqV+2jfs70cX961nLJI/jQOTmmHP55N2ux37Xq/X2OepX2Rs6EPI0g/UPQeOaaYY1g603++57rZt2R913O93xnI8HmmCE7F5pnTuFUz7Fy6pWXw5R2gHsEvfrY184RucZKqnQuVkA8Y8L4my2OPm/gjaKGgoO3r87WlXf1JVl4HPhgbf0f3S0v7zB/XGzZjSp/Q4RKP1Ep+UJ/TwdDrR4XBgbJvNhnn1rmd9gA/Y9yoPfWxpDDFaG+BqWvCJWFhSsw+8Ih/qlvrF2NeblxamvXWvoWP5B/6appm1cf3TMG+PtuEaYq6YD/odVOBqcKyBsR0oD1CVDtiHJ7Vj4JzK2K+q/ojAjfOpUKUQEWCmDROPRK8hVDPhhrqF2OWcPL23c8HL/RdxImwZOhSDBULCGM8CFAxoAHzQFGf8TEA6LFIDBcEKIYJzFiv2tAvv0S9EmWJEPM6PvL8eaCEPmGTo055JDs6j/aL+mOddoGshyz5iymWJBXHwRTf9m/S3iCH1At/6QknzrPlJByXFvLZFfYlmuGeTmOf+K/eGbTGQ9N6PxWA7T18tXKQp7+n5OFzjl/U49RpEXB7cJ+3nwYTCYzz134vHuyV+8JEOtVX6jdv0wpQhXmJOeuYtH/onwACD9CNSDS5OLAAAAABJRU5ErkJggg==";
        var r = ".esb-tooltip";
        q.sheet.insertRule(r + "-wrapper {position:absolute;overflow:visible!important;z-index:100000006}", ++o);
        if ("ontouchstart" in window || navigator.maxTouchPoints) {
            q.sheet.insertRule(r + "-container {min-height:50px;background-image:none!important}", ++o)
        } else {
            q.sheet.insertRule(r + "-container {min-height:50px;padding-left:55px;background:transparent no-repeat top left}", ++o)
        }
        q.sheet.insertRule(r + " {width:98%;max-width:350px;line-height:170%;font-size:12px;color:#C5C29E;background-color: rgba(0, 0, 0, 0.9);padding:10px;border:2px solid #685E39;border-top-color: #9F9B86;border-radius:3px}", ++o);
        q.sheet.insertRule(r + "-skillname {font-size:18px;text-align:center;background:url(" + n + ") no-repeat center bottom;color:#fff;padding-bottom:5px;margin-bottom:5px;text-transform:uppercase}", ++o);
        q.sheet.insertRule(r + "-skilldescription {clear:both;padding-top:10px;text-align:center}", ++o);
        q.sheet.insertRule(r + "-skilllevel {color:#f00;padding-top:15px;text-align:center}", ++o);
        q.sheet.insertRule(r + "-setname{color:#EECA2A;font-size:1.8em;margin:0}", ++o);
        q.sheet.insertRule(r + "-stats {clear:both}", ++o);
        q.sheet.insertRule(r + "-stats strong {float:right}", ++o);
        q.sheet.insertRule(r + " strong {color:#fff}", ++o);
        q.sheet.insertRule(r + "-m {color:#50A7FC}", ++o);
        q.sheet.insertRule(r + "-s {color:#96DA43}", ++o);
        q.sheet.insertRule(r + "-h {color:#DB4F36}", ++o);
        q.sheet.insertRule(r + "-ne {color:#27CC20;padding-top:15px;text-align:center}", ++o);
        q.sheet.insertRule(r + "-center{text-align:center}", ++o);
        q.sheet.insertRule(r + "-seperator{height:3px;background:url(" + n + ") no-repeat center bottom;padding-bottom:10px;margin-bottom:5px}", ++o)
    }

    function m() {
        if (document.body) {
            f();
            k.init("esb-tooltip-wrapper");
            c()
        } else {
            setTimeout(m, 10)
        }
    }
    m()
})();
if (typeof ElderScrollsBote === "undefined") {
    var ElderScrollsBote = {}
}
if (typeof ElderScrollsBote.Tooltips === "undefined") {
    ElderScrollsBote.Tooltips = {
        registerData: function(b) {
            var a = document.createEvent("Event");
            a.initEvent("esbshowtooltip", true, false);
            a.ttkey = b.params.type + "-" + b.params.lang + "-" + b.params.id;
            a.ttcontent = b.html;
            document.dispatchEvent(a)
        },
        hideTooltip: function() {
            var a = document.createEvent("Event");
            a.initEvent("esbhidetooltip", true, false);
            document.dispatchEvent(a)
        },
        setLanguage: function(b) {
            var a = document.createEvent("Event");
            a.initEvent("esblangchanged", true, false);
            a.lang = b;
            document.dispatchEvent(a)
        },
    }
};