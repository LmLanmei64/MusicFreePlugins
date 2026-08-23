function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var j = Object.create;
var N = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf,
  z = Object.prototype.hasOwnProperty;
var B = function B(t, n, e, r) {
  if (n && _typeof(n) == "object" || typeof n == "function") {
    var _iterator = _createForOfIteratorHelper(q(n)),
      _step;
    try {
      var _loop = function _loop() {
        var a = _step.value;
        !z.call(t, a) && a !== e && N(t, a, {
          get: function get() {
            return n[a];
          },
          enumerable: !(r = Z(n, a)) || r.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return t;
};
var f = function f(t, n, e) {
  return e = t != null ? j(H(t)) : {}, B(n || !t || !t.__esModule ? N(e, "default", {
    value: t,
    enumerable: !0
  }) : e, t);
};
var p = f(require("axios"));
var x = f(require("axios")),
  F = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(t, n) {
      var e, r, a, s;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e = ((n == null ? void 0 : n.method) || "GET").toUpperCase(), r = n == null ? void 0 : n.headers, a = {};
            r && (r instanceof Headers ? r.forEach(function (o, i) {
              a[i] = o;
            }) : Array.isArray(r) ? r.forEach(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                o = _ref3[0],
                i = _ref3[1];
              a[o] = i;
            }) : a = r);
            s = {
              url: t,
              method: e,
              headers: a,
              params: n == null ? void 0 : n.params,
              maxRedirects: n == null ? void 0 : n.maxRedirects,
              data: n == null ? void 0 : n.body
            };
            n != null && n.signal && (s.signal = n.signal);
            _context.n = 1;
            return (0, x.default)(s);
          case 1:
            return _context.a(2, _context.v);
        }
      }, _callee);
    }));
    return function F(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  u = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(t, n) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return F(t, n);
          case 1:
            return _context2.a(2, _context2.v.data);
        }
      }, _callee2);
    }));
    return function u(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
var L = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(t) {
    var n,
      e,
      r,
      _args3 = arguments;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          n = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 2;
          e = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 20;
          r = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 0;
          _context3.n = 1;
          return u("https://u.musicapp.migu.cn/MIGUM3.0/user/comment/stack/v1.0?resourceId=".concat(t, "&resourceType=").concat(n, "&pageSize=").concat(e, "&hotCommentStart=").concat(r, "&platformType=1&commentId=0&queryType=1"));
        case 1:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return function L(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var v = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(t) {
    var n,
      e,
      _args4 = arguments;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          n = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
          e = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 0;
          _context4.n = 1;
          return u("https://app.c.nf.migu.cn/bmw/search/music-list/v1.0?pageNo=".concat(n, "&text=").concat(t, "&typeOrder=").concat(e));
        case 1:
          return _context4.a(2, _context4.v);
      }
    }, _callee4);
  }));
  return function v(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var h = f(require("axios")),
  R = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(t) {
      var n, e, r, a, s;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!(t === "")) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, {
              error: "contentId is empty!",
              success: !1
            });
          case 1:
            _context5.n = 2;
            return h.default.get("https://app.c.nf.migu.cn/resource/song/by-contentids/v2.0?contentId=".concat(t));
          case 2:
            n = _context5.v;
            e = n.data.code.toString() || "";
            r = n.data.data || [];
            if (!(e !== "000000")) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, {
              success: !1,
              status: n.status,
              error: n.data.info || n.data
            });
          case 3:
            if (!(r.length === 0)) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2, {
              error: "data.length = 0 !",
              success: !1,
              data: r
            });
          case 4:
            a = r[0].lrcUrl || "";
            if (!(a === "")) {
              _context5.n = 5;
              break;
            }
            return _context5.a(2, {
              error: "lrcUrl is empty!",
              success: !1,
              data: r
            });
          case 5:
            _context5.n = 6;
            return h.default.get(a);
          case 6:
            s = _context5.v;
            return _context5.a(2, s.status !== 200 ? {
              success: !1,
              status: s.status,
              error: "lrcRes.status !== 200 !",
              data: r
            } : {
              success: !0,
              lrc: s.data || "",
              lrcUrl: a
            });
        }
      }, _callee5);
    }));
    return function R(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
var T = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(t) {
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          t = encodeURIComponent(t);
          _context6.n = 1;
          return u("http://c.musicapp.migu.cn/v1.0/content/get-import-songList?url=".concat(t));
        case 1:
          return _context6.a(2, _context6.v);
      }
    }, _callee6);
  }));
  return function T(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
var Q = f(require("axios"));
var G = ["LQ", "PQ", "HQ", "SQ", "ZQ24", "ZQ32", "Z3D", "3D60"],
  l = encodeURI,
  b = {
    LQ: l("\u5168\u66F2\u8BD5\u542C/Mp3_64_22_16"),
    PQ: l("\u6807\u6E05\u9AD8\u6E05/MP3_128_16_Stero"),
    HQ: l("\u6807\u6E05\u9AD8\u6E05/MP3_320_16_Stero"),
    SQ: l("\u6B4C\u66F2\u4E0B\u8F7D/flac"),
    ZQ24: l("\u6B4C\u66F2\u4E0B\u8F7D/flac_24bit"),
    ZQ32: l("\u6B4C\u66F2\u4E0B\u8F7D/wav_32bit"),
    Z3D: l("\u6B4C\u66F2\u4E0B\u8F7D/wav_3d"),
    "3D60": l("\u6B4C\u66F2\u4E0B\u8F7D/wav_3d_60s")
  },
  U = Object.entries(b),
  S = {
    LQ: ".mp3",
    PQ: ".mp3",
    HQ: ".mp3",
    SQ: ".flac",
    ZQ24: ".flac",
    ZQ32: ".wav",
    Z3D: ".wav",
    "3D60": ".wav"
  };
function I(t) {
  return G.includes(t);
}
function J(t) {
  var n = "";
  if (!n) for (var e = 0; e < U.length; e++) {
    var _U$e = _slicedToArray(U[e], 2),
      r = _U$e[0],
      a = _U$e[1];
    if (t.includes(a)) {
      n = r;
      break;
    }
  }
  return n;
}
function k(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  var a = I(e) ? e : J(t);
  return r && (t = t.split("?")[0]), !I(n) || !I(a) ? t : t.replace(b[a], b[n]).replace(S[a], S[n]);
}
var C = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(t, n) {
      var e,
        o,
        r,
        a,
        s,
        _args7 = arguments;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            e = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "PQ";
            r = {
              birth: "h5page",
              channel: "014X031",
              Referer: "https://y.migu.cn/",
              "location-data": "30.6698676660,104.1229614820",
              "location-info": ""
            };
            _context7.n = 1;
            return Q.default.get("https://c.musicapp.migu.cn/strategy/listen-url/h5/v2.4?contentId=".concat(t, "&copyrightId=").concat(n, "&resourceType=2&netType=01&toneFlag=PQ&scene=&lowerQualityContentId=").concat(t), {
              headers: r,
              responseType: "arraybuffer"
            });
          case 1:
            a = _context7.v;
            _context7.n = 2;
            return X(a.data);
          case 2:
            s = _context7.v;
            return _context7.a(2, ((o = s == null ? void 0 : s.data) == null ? void 0 : o.url) === "" ? {
              success: !1,
              error: "URL \u4E3A\u7A7A"
            } : (s.data.oriUrl = s.data.url || "", s.data.url = k(s.data.url || "", e, "PQ", !0), s));
        }
      }, _callee7);
    }));
    return function C(_x9, _x0) {
      return _ref9.apply(this, arguments);
    };
  }(),
  O = ["Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"];
function V(t) {
  return new TextEncoder().encode(t);
}
function W(t) {
  var n = [];
  var _iterator2 = _createForOfIteratorHelper(t),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var e = _step2.value;
      e < 16 ? n.push(String.fromCharCode(e)) : (n.push("%"), n.push(e.toString(16)));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return decodeURIComponent(n.join(""));
}
function K(t, n) {
  if (n.length == 0) return null;
  var e = t.length;
  if (e < 4 || t[0] != 171 || t[1] != 205 || t[2] != 1) return null;
  for (var r = t[3], a = V(n), s = a.length, o = new Uint8Array(e - 4), i = 0, c = 4; c < e; c++, i++) o[i] = t[c] + r - a[i % s];
  return o;
}
var X = function X(t) {
  var n = K(new Uint8Array(t), O[0]),
    e = W(n);
  return JSON.parse(e);
};
var $ = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _context8.n = 1;
          return u("https://app.u.nf.migu.cn/bmw/rank/rank-index/v2.0");
        case 1:
          return _context8.a(2, _context8.v);
      }
    }, _callee8);
  }));
  return function $() {
    return _ref0.apply(this, arguments);
  };
}();
var P = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(t) {
    var n,
      _args9 = arguments;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          n = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 1;
          _context9.n = 1;
          return u("http://app.c.nf.migu.cn/bmw/rank/rank-info/v1.0?pageNo=".concat(n, "&rankId=").concat(t));
        case 1:
          return _context9.a(2, _context9.v);
      }
    }, _callee9);
  }));
  return function P(_x1) {
    return _ref1.apply(this, arguments);
  };
}();
var D = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(t) {
    var n,
      e,
      _args0 = arguments;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          n = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : 1;
          e = _args0.length > 2 && _args0[2] !== undefined ? _args0[2] : 20;
          _context0.n = 1;
          return u("https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?pageNo=".concat(n, "&pageSize=").concat(e, "&playlistId=").concat(t));
        case 1:
          return _context0.a(2, _context0.v);
      }
    }, _callee0);
  }));
  return function D(_x10) {
    return _ref10.apply(this, arguments);
  };
}();
var E = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(t) {
    var n,
      _args1 = arguments;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          n = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : 1;
          _context1.n = 1;
          return u("http://app.c.nf.migu.cn/bmw/search/lrc/v1.0?pageNo=".concat(n, "&text=").concat(t));
        case 1:
          return _context1.a(2, _context1.v);
      }
    }, _callee1);
  }));
  return function E(_x11) {
    return _ref11.apply(this, arguments);
  };
}();
var w = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    var t,
      n,
      e,
      _args10 = arguments;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          t = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : !0;
          _context10.n = 1;
          return u("https://app.c.nf.migu.cn/pc/bmw/playlist-square/tab/v1.0");
        case 1:
          n = _context10.v;
          if (t) {
            _context10.n = 2;
            break;
          }
          return _context10.a(2, n);
        case 2:
          _context10.n = 3;
          return u("https://app.c.nf.migu.cn/pc/v1.0/template/musiclistplaza-taglist/release");
        case 3:
          e = _context10.v;
          return _context10.a(2, (n.data.moreTag = e.data.map(function (r) {
            var o;
            var a = (o = r == null ? void 0 : r.header) == null ? void 0 : o.title,
              s = r == null ? void 0 : r.content.map(function (i) {
                return {
                  tagName: i.texts[0],
                  tagId: i.texts[1]
                };
              });
            return {
              title: a,
              tagList: s
            };
          }), n));
      }
    }, _callee10);
  }));
  return function w() {
    return _ref12.apply(this, arguments);
  };
}();
var M = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(t, n) {
    var r, a, s, o, i, e;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          _context11.n = 1;
          return u("http://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/musiclistplaza-listbytag?templateVersion=1&tagId=".concat(t, "&pageNumber=").concat(n));
        case 1:
          e = _context11.v;
          return _context11.a(2, (e.data.contentItemList = ((s = (a = (r = e == null ? void 0 : e.data) == null ? void 0 : r.contentItemList) == null ? void 0 : a.itemList) == null ? void 0 : s.reduce(function (c, m) {
            return !m.actionUrl || !m.actionUrl.includes("song-list-info") || (m.playlistId = m.actionUrl.split("id=")[1].split("&")[0] || "", c.push(m)), c;
          }, [])) || [], e.data.hasNext = e.data.contentItemList.length < 30 ? !1 : ((o = e == null ? void 0 : e.data) == null ? void 0 : o.nextPageUrl) !== void 0 && ((i = e == null ? void 0 : e.data) == null ? void 0 : i.nextPageUrl) !== "", e));
      }
    }, _callee11);
  }));
  return function M(_x12, _x13) {
    return _ref13.apply(this, arguments);
  };
}();
var A = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
    var t,
      _args12 = arguments;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          t = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : "";
          t = t.replace(/,/g, "|");
          _context12.n = 1;
          return u("https://app.c.nf.migu.cn/resource/song/by-contentids/v2.0?contentId=".concat(t));
        case 1:
          return _context12.a(2, _context12.v);
      }
    }, _callee12);
  }));
  return function A() {
    return _ref14.apply(this, arguments);
  };
}();
function Y(_x14, _x15) {
  return _Y.apply(this, arguments);
}
function _Y() {
  _Y = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(t, n) {
    var r, a;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          _context14.n = 1;
          return p.default.get("http://app.c.nf.migu.cn/bmw/search/song/v1.0?pageNo=".concat(n, "&text=").concat(t));
        case 1:
          r = _context14.v.data.data;
          a = r.hasNext;
          return _context14.a(2, {
            data: r.items.map(function (i) {
              var c = i.song,
                m = c.singerList.map(function (g) {
                  return g.name;
                });
              return c.artistNames = m.join("/"), d(c);
            }),
            isEnd: !a
          });
      }
    }, _callee14);
  }));
  return _Y.apply(this, arguments);
}
function d(t) {
  return {
    id: t.contentId,
    title: t.songName,
    artist: t.artistNames,
    album: t.album,
    duration: t.duration,
    artwork: "https://d.musicapp.migu.cn" + t.img3,
    albumId: t.albumId,
    lrc: t.lrcUrl,
    singerList: t.singerList,
    resourceType: t.resourceType,
    mvId: t.mvId,
    ringToneId: t.ringToneId,
    ringCopyrightId: t.ringCopyrightId,
    copyrightId: t.copyrightId,
    playNumDesc: t.playNumDesc
  };
}
function tt(_x16, _x17) {
  return _tt.apply(this, arguments);
}
function _tt() {
  _tt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(t, n) {
    var e;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _context15.n = 1;
          return v(t, n);
        case 1:
          e = _context15.v;
          return _context15.a(2, {
            data: e.data.items.map(function (a) {
              var s = a.musicList;
              return {
                platform: "migu",
                id: s.musicListId,
                artist: s.ownerName,
                title: s.title,
                artwork: s.originalImgUrl
              };
            }),
            isEnd: !e.data.hasNext
          });
      }
    }, _callee15);
  }));
  return _tt.apply(this, arguments);
}
function nt(_x18, _x19) {
  return _nt.apply(this, arguments);
}
function _nt() {
  _nt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(t, n) {
    var e;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return E(t, n);
        case 1:
          e = _context16.v;
          return _context16.a(2, {
            data: e.data.items.map(function (a) {
              var s = a.song,
                o = s.singerList.map(function (i) {
                  return i.name;
                });
              return s.artistNames = o.join("/"), d(s);
            }),
            isEnd: !e.data.hasNext
          });
      }
    }, _callee16);
  }));
  return _nt.apply(this, arguments);
}
function et(_x20, _x21) {
  return _et.apply(this, arguments);
}
function _et() {
  _et = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(t, n) {
    var r, a;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _context17.n = 1;
          return p.default.get("http://app.c.nf.migu.cn/bmw/search/album/v1.0?pageNo=".concat(n, "&text=").concat(t));
        case 1:
          r = _context17.v.data.data;
          a = r.hasNext;
          return _context17.a(2, {
            data: r.items.filter(function (i) {
              return i.album !== void 0;
            }).map(function (i) {
              var c = i.album;
              return at(c);
            }),
            isEnd: !a
          });
      }
    }, _callee17);
  }));
  return _et.apply(this, arguments);
}
function at(t) {
  return {
    id: t.albumId,
    title: t.title,
    artist: t.singer,
    artistId: t.singerId,
    artwork: t.imgItems[0].img,
    date: t.publishDate,
    resourceType: t.resourceType,
    totalCount: t.totalCount
  };
}
function rt(_x22, _x23) {
  return _rt.apply(this, arguments);
}
function _rt() {
  _rt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(t, n) {
    var r, a;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _context18.n = 1;
          return p.default.get("http://app.c.nf.migu.cn/bmw/search/singer/v2.0?pageNo=".concat(n, "&text=").concat(t));
        case 1:
          r = _context18.v.data.data;
          a = r.hasNext;
          return _context18.a(2, {
            data: r.items.map(function (i) {
              var c = i.singer;
              return st(c);
            }),
            isEnd: !a
          });
      }
    }, _callee18);
  }));
  return _rt.apply(this, arguments);
}
function st(t) {
  return {
    id: t.singerId,
    name: t.singer,
    fans: t.followNums,
    description: t.summary,
    avatar: t.imgs[0].img,
    worksNum: t.songNum,
    mvNum: t.mvNum,
    albumNum: t.albumNum,
    vrbtNum: t.vrbtNum,
    latestContentId: t.latestContentId,
    columnId: t.columnId,
    videoUserId: t.videoUserId,
    resourceType: t.resourceType
  };
}
function ot(_x24, _x25) {
  return _ot.apply(this, arguments);
}
function _ot() {
  _ot = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(t, n) {
    var e, r, a, _t6;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          e = "";
          _t6 = n;
          _context19.n = _t6 === "standard" ? 1 : _t6 === "low" ? 1 : _t6 === "high" ? 2 : _t6 === "super" ? 3 : 4;
          break;
        case 1:
          e = "PQ";
          return _context19.a(3, 5);
        case 2:
          e = "HQ";
          return _context19.a(3, 5);
        case 3:
          e = "SQ";
          return _context19.a(3, 5);
        case 4:
          e = "PQ";
          return _context19.a(3, 5);
        case 5:
          _context19.n = 6;
          return C(t.id, t.copyrightId || "", e);
        case 6:
          r = _context19.v;
          a = (r == null ? void 0 : r.data) || {};
          return _context19.a(2, {
            url: (a == null ? void 0 : a.url) || ""
          });
      }
    }, _callee19);
  }));
  return _ot.apply(this, arguments);
}
function it(_x26, _x27) {
  return _it.apply(this, arguments);
}
function _it() {
  _it = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(t, n) {
    var s, e;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          _context20.n = 1;
          return p.default.get("http://app.c.nf.migu.cn/MIGUM3.0/resource/album/song/v2.0?albumId=".concat(t.id, "&pageNo=").concat(n || 1));
        case 1:
          e = _context20.v.data;
          return _context20.a(2, {
            isEnd: !0,
            musicList: (((s = e == null ? void 0 : e.data) == null ? void 0 : s.songList) || []).map(function (o) {
              var i = o;
              return i.artistNames = i.singerList.map(function (c) {
                return c.name;
              }).join("/"), ct(i);
            })
          });
      }
    }, _callee20);
  }));
  return _it.apply(this, arguments);
}
function ct(t) {
  return {
    id: t.contentId,
    title: t.songName,
    artist: t.artistNames,
    album: t.album,
    duration: t.duration,
    artwork: t.img3,
    albumId: t.albumId,
    lrc: t.lrcUrl,
    singerList: t.singerList,
    resourceType: t.resourceType,
    copyrightId: t.copyrightId
  };
}
function ut(_x28, _x29, _x30) {
  return _ut.apply(this, arguments);
}
function _ut() {
  _ut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(t, n, e) {
    var o, i, c, m, r, a, _iterator3, _step3, g, s, _t7;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          _context21.n = 1;
          return p.default.get("http://app.c.nf.migu.cn/bmw/singer/song/v1.0?pageNo=".concat(n || 1, "&singerId=").concat(t.id, "&type=1"));
        case 1:
          r = _context21.v.data;
          a = ((c = (i = (o = r == null ? void 0 : r.data) == null ? void 0 : o.contents) == null ? void 0 : i[0]) == null ? void 0 : c.contents) || [];
          _iterator3 = _createForOfIteratorHelper((m = r == null ? void 0 : r.data) == null ? void 0 : m.contents);
          _context21.p = 2;
          _iterator3.s();
        case 3:
          if ((_step3 = _iterator3.n()).done) {
            _context21.n = 5;
            break;
          }
          g = _step3.value;
          if (!((g == null ? void 0 : g.view) === "ZJ-Singer-Song-Scroll")) {
            _context21.n = 4;
            break;
          }
          a = g.contents;
          return _context21.a(3, 5);
        case 4:
          _context21.n = 3;
          break;
        case 5:
          _context21.n = 7;
          break;
        case 6:
          _context21.p = 6;
          _t7 = _context21.v;
          _iterator3.e(_t7);
        case 7:
          _context21.p = 7;
          _iterator3.f();
          return _context21.f(7);
        case 8:
          if (a) {
            _context21.n = 9;
            break;
          }
          return _context21.a(2, {
            isEnd: !0,
            musicList: []
          });
        case 9:
          s = a.map(function (g) {
            var y = g.songItem;
            return y.artistNames = y.singerList.map(function (_) {
              return _.name;
            }).join("/"), d(y);
          });
          return _context21.a(2, {
            isEnd: s.length < 20,
            data: s
          });
      }
    }, _callee21, null, [[2, 6, 7, 8]]);
  }));
  return _ut.apply(this, arguments);
}
function mt(_x31, _x32) {
  return _mt.apply(this, arguments);
}
function _mt() {
  _mt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(t, n) {
    var e;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          _context22.n = 1;
          return D(t.id, n || 1);
        case 1:
          e = _context22.v;
          if (!e) {
            _context22.n = 2;
            break;
          }
          return _context22.a(2, {
            isEnd: (e == null ? void 0 : e.data.totalCount) - 50 * n <= 0,
            musicList: (e == null ? void 0 : e.data.songList.map(function (r) {
              return d(r);
            })) || []
          });
        case 2:
          return _context22.a(2);
      }
    }, _callee22);
  }));
  return _mt.apply(this, arguments);
}
function gt(_x33) {
  return _gt.apply(this, arguments);
}
function _gt() {
  _gt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(t) {
    var n;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          _context23.n = 1;
          return R(t.id);
        case 1:
          n = _context23.v;
          if (!n.success) {
            _context23.n = 2;
            break;
          }
          return _context23.a(2, {
            rawLrc: (n == null ? void 0 : n.lrc) || ""
          });
        case 2:
          return _context23.a(2);
      }
    }, _callee23);
  }));
  return _gt.apply(this, arguments);
}
function lt() {
  return _lt.apply(this, arguments);
}
function _lt() {
  _lt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          _context24.n = 1;
          return $();
        case 1:
          return _context24.a(2, _context24.v.data.contents.map(function (n) {
            var e = n.style,
              r = n.contents.map(function (a) {
                return {
                  title: a.rankName,
                  id: a.rankId,
                  coverImg: a.imageUrl
                };
              });
            return {
              title: e,
              data: r
            };
          }));
      }
    }, _callee24);
  }));
  return _lt.apply(this, arguments);
}
function pt(_x34) {
  return _pt.apply(this, arguments);
}
function _pt() {
  _pt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(t) {
    var n;
    return _regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          _context25.n = 1;
          return P(t.id, t.page);
        case 1:
          n = _context25.v;
          return _context25.a(2, n ? {
            isEnd: !n.data.hasNextPage,
            musicList: n.data.contents.map(function (e) {
              var r = JSON.parse(e.songData);
              return r.artistNames = r.singerList.map(function (a) {
                return a.name;
              }).join("/"), r.img3 = r.img3.replace("https://d.musicapp.migu.cn", ""), d(r);
            }) || []
          } : {
            isEnd: !0,
            musicList: []
          });
      }
    }, _callee25);
  }));
  return _pt.apply(this, arguments);
}
function dt() {
  return _dt.apply(this, arguments);
}
function _dt() {
  _dt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
    var t, n, e;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          _context26.n = 1;
          return w(!0);
        case 1:
          t = _context26.v;
          n = t.data.contentItemList.map(function (r) {
            return {
              title: r.tagName,
              id: r.tagId
            };
          });
          e = t.data.moreTag.map(function (r) {
            var a = r.title,
              s = r.tagList.map(function (o) {
                return {
                  title: o.tagName,
                  id: o.tagId
                };
              });
            return {
              title: a,
              data: s
            };
          });
          return _context26.a(2, {
            pinned: n,
            data: e
          });
      }
    }, _callee26);
  }));
  return _dt.apply(this, arguments);
}
function ft(_x35, _x36) {
  return _ft.apply(this, arguments);
}
function _ft() {
  _ft = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(t, n) {
    var e, a, r;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          if (t.id) {
            _context27.n = 2;
            break;
          }
          _context27.n = 1;
          return w(!1);
        case 1:
          a = _context27.v;
          e = a == null ? void 0 : a.data.contentItemList[0].tagId;
        case 2:
          _context27.n = 3;
          return M(t.id || e, n || 1);
        case 3:
          r = _context27.v;
          return _context27.a(2, r ? {
            isEnd: !r.data.hasNext,
            data: r.data.contentItemList.map(function (a) {
              return a.playDesc = a.playNum, a.playDesc.includes("\u4E07") ? a.playNum = Number(a.playDesc.split("\u4E07")[0]) * 1e4 : a.playDesc.includes("\u5343") ? a.playNum = Number(a.playDesc.split("\u5343")[0]) * 1e3 : a.playNum = Number(a.playDesc), {
                platform: "migu",
                id: a.playlistId,
                title: a.title,
                artwork: a.imageUrl,
                playCount: a.playNum
              };
            }) || []
          } : {
            isEnd: !0,
            musicList: []
          });
      }
    }, _callee27);
  }));
  return _ft.apply(this, arguments);
}
function yt(_x37) {
  return _yt.apply(this, arguments);
}
function _yt() {
  _yt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(t) {
    var n, e, r;
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (!(!t.startsWith("http://") && !t.startsWith("https://"))) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2, []);
        case 1:
          _context28.n = 2;
          return T(t);
        case 2:
          n = _context28.v;
          if (!(n.data.successCount === 0)) {
            _context28.n = 3;
            break;
          }
          return _context28.a(2, []);
        case 3:
          e = n.data.haveCopyrightSongs.map(function (a) {
            return a.contentId;
          }).join(",") || "";
          if (e) {
            _context28.n = 4;
            break;
          }
          return _context28.a(2, []);
        case 4:
          _context28.n = 5;
          return A(e);
        case 5:
          r = _context28.v;
          return _context28.a(2, r.data ? r.data.map(function (a) {
            return a.artistNames = a.singerList.map(function (s) {
              return s.name;
            }).join("/"), d(a);
          }) : []);
      }
    }, _callee28);
  }));
  return _yt.apply(this, arguments);
}
function ht(_x38) {
  return _ht.apply(this, arguments);
}
function _ht() {
  _ht = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(t) {
    var r, a, s, n, e;
    return _regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          e = function _e(o) {
            var i;
            return {
              id: o.commentId,
              nickName: o.user.nickName,
              avatar: o.user.middleIcon,
              comment: o.commentInfo,
              like: o.opNumItem.thumbNum,
              replies: ((i = o == null ? void 0 : o.replyComments) == null ? void 0 : i.map(function (c) {
                return {
                  id: c.replyId,
                  nickName: c.user.nickName,
                  avatar: c.user.middleIcon,
                  comment: c.replyInfo,
                  like: c.haveThumb
                };
              })) || []
            };
          };
          _context29.n = 1;
          return L(t.id, 2, 50);
        case 1:
          n = _context29.v;
          if (n.data.hotComments) {
            _context29.n = 2;
            break;
          }
          return _context29.a(2, {
            isEnd: !0,
            data: []
          });
        case 2:
          return _context29.a(2, {
            isEnd: !0,
            data: ((s = n.data.hotComments) == null ? void 0 : s.map(e).concat((a = (r = n == null ? void 0 : n.data) == null ? void 0 : r.comments) == null ? void 0 : a.map(e))) || []
          });
      }
    }, _callee29);
  }));
  return _ht.apply(this, arguments);
}
module.exports = {
  platform: "Migu",
  version: "0.2.1",
  author: "Domdkw",
  primaryKey: ["id", "singerId", "albumId", "copyrightId", "resourceType", "toneFlag", "totalCount"],
  cacheControl: "cache",
  srcUrl: "https://gitee.com/Domdkw/MusicFree-migu/raw/master/dist/migu-plugin.js",
  search: function search(t, n, e) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var _t, _t2, _t3, _t4, _t5;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            t = encodeURIComponent(t);
            if (!(e === "music")) {
              _context13.n = 2;
              break;
            }
            _context13.n = 1;
            return Y(t, n);
          case 1:
            _t = _context13.v;
            _context13.n = 15;
            break;
          case 2:
            if (!(e === "album")) {
              _context13.n = 4;
              break;
            }
            _context13.n = 3;
            return et(t, n);
          case 3:
            _t2 = _context13.v;
            _context13.n = 14;
            break;
          case 4:
            if (!(e === "artist")) {
              _context13.n = 6;
              break;
            }
            _context13.n = 5;
            return rt(t, n);
          case 5:
            _t3 = _context13.v;
            _context13.n = 13;
            break;
          case 6:
            if (!(e === "sheet")) {
              _context13.n = 8;
              break;
            }
            _context13.n = 7;
            return tt(t, n);
          case 7:
            _t4 = _context13.v;
            _context13.n = 12;
            break;
          case 8:
            if (!(e === "lyric")) {
              _context13.n = 10;
              break;
            }
            _context13.n = 9;
            return nt(t, n);
          case 9:
            _t5 = _context13.v;
            _context13.n = 11;
            break;
          case 10:
            _t5 = {
              data: [],
              isEnd: !0
            };
          case 11:
            _t4 = _t5;
          case 12:
            _t3 = _t4;
          case 13:
            _t2 = _t3;
          case 14:
            _t = _t2;
          case 15:
            return _context13.a(2, _t);
        }
      }, _callee13);
    }))();
  },
  getMediaSource: ot,
  getAlbumInfo: it,
  getArtistWorks: ut,
  getLyric: gt,
  getTopLists: lt,
  getTopListDetail: pt,
  getMusicSheetInfo: mt,
  getRecommendSheetTags: dt,
  getRecommendSheetsByTag: ft,
  importMusicSheet: yt,
  getMusicComments: ht
};
