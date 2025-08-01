var _STRINGS = {
	Ad: {
	  Mobile: {
		Preroll: {
		  ReadyIn: "The game is ready in ",
		  Loading: "Your game is loading...",
		  Close: "Close"
		},
		Header: {
		  ReadyIn: "The game is ready in ",
		  Loading: "Your game is loading...",
		  Close: "Close"
		},
		End: {
		  ReadyIn: "Advertisement ends in ",
		  Loading: "Please wait ...",
		  Close: "Close"
		}
	  }
	},
	Splash: {
	  Loading: "LOADING",
	  TapToStart: "TAP TO START"
	},
	Home: {
	  SelectLevel: "SELECT LEVEL"
	},
	Tutorial: {
	  Desktop: ["Connect 2 dots to draw a line.", "Next, follow the guide to complete the bridge.", "Ready? Let's test your bridge."],
	  Mobile: ["Connect 2 dots to draw a line.", "Next, follow the guide to complete the bridge.", "Ready? Let's test your bridge."]
	},
	Game: {
	  Level: "Level",
	  Finish: "Finish",
	  Reset: "RESET",
	  ConfirmReset: "Delete current design?",
	  BackToHome: "BACK TO MAIN MENU",
	  ConfirmBackToHome: "Abandon existing design?",
	  BackToLevel: "BACK TO LEVEL SELECTION",
	  ConfirmBackToLevel: "Abandon existing design?",
	  Settings: "SETTINGS",
	  Paused: "PAUSED"
	},
	Result: {
	  Completed: "COMPLETED!",
	  Failed: "FAILED",
	  Time: "Time",
	  Cost: "Cost"
	},
	Button: {
	  Ok: "OK",
	  Yes: "Yes",
	  No: "No",
	  Play: "PLAY",
	  MoreGames: "MORE GAMES"
	}
  };
  var _SETTINGS = {
	API: {
	  Enabled: !0,
	  Log: {
		Events: {
		  InitializeGame: !0,
		  EndGame: !0,
		  Level: {
			Begin: !0,
			End: !0,
			Win: !0,
			Lose: !0,
			Draw: !0
		  }
		}
	  }
	},
	Ad: {
	  Mobile: {
		Preroll: {
		  Enabled: !0,
		  Duration: 5,
		  Width: 300,
		  Height: 250,
		  Rotation: {
			Enabled: !1,
			Weight: {
			  MobileAdInGamePreroll: 40,
			  MobileAdInGamePreroll2: 40,
			  MobileAdInGamePreroll3: 20
			}
		  }
		},
		Header: {
		  Enabled: !1,
		  Duration: 5,
		  Width: 320,
		  Height: 50,
		  Rotation: {
			Enabled: !1,
			Weight: {
			  MobileAdInGameHeader: 40,
			  MobileAdInGameHeader2: 40,
			  MobileAdInGameHeader3: 20
			}
		  }
		},
		Footer: {
		  Enabled: !1,
		  Duration: 5,
		  Width: 320,
		  Height: 50,
		  Rotation: {
			Enabled: !1,
			Weight: {
			  MobileAdInGameFooter: 40,
			  MobileAdInGameFooter2: 40,
			  MobileAdInGameFooter3: 20
			}
		  }
		},
		End: {
		  Enabled: !1,
		  Duration: 1,
		  Width: 300,
		  Height: 250,
		  Rotation: {
			Enabled: !1,
			Weight: {
			  MobileAdInGameEnd: 40,
			  MobileAdInGameEnd2: 40,
			  MobileAdInGameEnd3: 20
			}
		  }
		}
	  }
	},
	Language: {
	  Default: "en"
	},
	DeveloperBranding: {
	  Splash: {
		Enabled: !1
	  },
	  Logo: {
		Enabled: !0,
		Link: "http://marketjs.com",
		LinkEnabled: !1,
		NewWindow: !0,
		Width: 166,
		Height: 61
	  }
	},
	Branding: {
	  Splash: {
		Enabled: !1
	  },
	  Logo: {
		Enabled: !1,
		Link: "http://google.com",
		LinkEnabled: !0,
		NewWindow: !0,
		Width: 280,
		Height: 34
	  }
	},
	MoreGames: {
	  Enabled: !0,
	  Link: "http://www.marketjs.com/game/links/mobile",
	  NewWindow: !0
	},
	Gamecenter: {
	  Enabled: !0
	}
  };
  var MobileAdInGamePreroll = {
	ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
	ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
	ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
	loading: _STRINGS.Ad.Mobile.Preroll.Loading,
	close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	Initialize: function () {
	  if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
		var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
		  c = b.MobileAdInGamePreroll,
		  d = c + b.MobileAdInGamePreroll2,
		  b = d + b.MobileAdInGamePreroll3,
		  e = Math.floor(100 * Math.random());
		console.log("seed: ", e);
		e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
		console.log("Ad rotating preroll enabled");
	  } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
	  console.log("selected:", this.selectedOverlayName);
	  this.overlay = $("#" + this.selectedOverlayName);
	  this.box = $("#" + this.selectedOverlayName + "-Box");
	  this.game = $("#game");
	  this.boxContents = {
		footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
		header: $("#" + this.selectedOverlayName + "-Box-Header"),
		close: $("#" + this.selectedOverlayName + "-Box-Close"),
		body: $("#" + this.selectedOverlayName + "-Box-Body")
	  };
	  this.box.width(this.ad_width);
	  this.box.height(this.ad_height);
	  this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
	  this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
	  this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
	  var c = b,
		d = setInterval(function () {
		  MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
		  MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
		  c--;
		  0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(""));
		}, 1E3);
	},
	Close: function () {
	  this.boxContents.close.hide();
	  this.overlay.hide();
	}
  };
  var MobileAdInGameHeader = {
	ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Header.Width,
	ad_height: _SETTINGS.Ad.Mobile.Header.Height,
	Initialize: function () {
	  if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
		var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
		  c = b.MobileAdInGameHeader,
		  d = c + b.MobileAdInGameHeader2,
		  b = d + b.MobileAdInGameHeader3,
		  e = Math.floor(100 * Math.random());
		console.log("seed: ", e);
		e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
		console.log("Ad rotating header enabled");
	  } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
	  this.div = $("#" + this.selectedOverlayName);
	  this.game = $("#game");
	  this.div.width(this.ad_width);
	  this.div.height(this.ad_height);
	  this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
	  this.div.css("top", 0);
	  this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
	  var c = setInterval(function () {
		b--;
		0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c));
	  }, 1E3);
	}
  };
  var MobileAdInGameFooter = {
	ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
	ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
	Initialize: function () {
	  if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
		var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
		  c = b.MobileAdInGameFooter,
		  d = c + b.MobileAdInGameFooter2,
		  b = d + b.MobileAdInGameFooter3,
		  e = Math.floor(100 * Math.random());
		console.log("seed: ", e);
		e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
		console.log("Ad rotating footer enabled");
	  } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
	  this.div = $("#" + this.selectedOverlayName);
	  this.game = $("#game");
	  this.div.width(this.ad_width);
	  this.div.height(this.ad_height);
	  this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
	  this.div.css("top", this.game.height() - this.div.height() - 5);
	  this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
	  var c = setInterval(function () {
		b--;
		0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c));
	  }, 1E3);
	}
  };
  var MobileAdInGameEnd = {
	ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
	ad_width: _SETTINGS.Ad.Mobile.End.Width,
	ad_height: _SETTINGS.Ad.Mobile.End.Height,
	ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
	loading: _STRINGS.Ad.Mobile.End.Loading,
	close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	Initialize: function () {
	  if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
		var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
		  c = b.MobileAdInGameEnd,
		  d = c + b.MobileAdInGameEnd2,
		  b = d + b.MobileAdInGameEnd3,
		  e = Math.floor(100 * Math.random());
		console.log("seed: ", e);
		e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
		console.log("Ad rotating end enabled");
	  } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
	  console.log("selected:", this.selectedOverlayName);
	  this.overlay = $("#" + this.selectedOverlayName);
	  this.box = $("#" + this.selectedOverlayName + "-Box");
	  this.game = $("#game");
	  this.boxContents = {
		footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
		header: $("#" + this.selectedOverlayName + "-Box-Header"),
		close: $("#" + this.selectedOverlayName + "-Box-Close"),
		body: $("#" + this.selectedOverlayName + "-Box-Body")
	  };
	  this.box.width(this.ad_width);
	  this.box.height(this.ad_height);
	  this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
	  this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
	  this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
	  var c = b,
		d = setInterval(function () {
		  MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
		  MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
		  c--;
		  0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""));
		}, 1E3);
	},
	Close: function () {
	  this.boxContents.close.hide();
	  this.overlay.hide();
	}
  };
  !function (b, c) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function (b) {
	  if (!b.document) throw Error("jQuery requires a window with a document");
	  return c(b);
	} : c(b);
  }("undefined" != typeof window ? window : this, function (b, c) {
	function d(b, c) {
	  c = c || Y;
	  var d = c.createElement("script");
	  d.text = b;
	  c.head.appendChild(d).parentNode.removeChild(d);
	}
	function e(b) {
	  var c = !!b && "length" in b && b.length,
		d = p.type(b);
	  return "function" !== d && !p.isWindow(b) && ("array" === d || 0 === c || "number" == typeof c && 0 < c && c - 1 in b);
	}
	function f(b, c) {
	  return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase();
	}
	function j(b, c, d) {
	  return p.isFunction(c) ? p.grep(b, function (b, W) {
		return !!c.call(b, W, b) !== d;
	  }) : c.nodeType ? p.grep(b, function (b) {
		return b === c !== d;
	  }) : "string" != typeof c ? p.grep(b, function (b) {
		return -1 < Ja.call(c, b) !== d;
	  }) : Gc.test(c) ? p.filter(c, b, d) : (c = p.filter(c, b), p.grep(b, function (b) {
		return -1 < Ja.call(c, b) !== d && 1 === b.nodeType;
	  }));
	}
	function n(b, c) {
	  for (; (b = b[c]) && 1 !== b.nodeType;);
	  return b;
	}
	function m(b) {
	  return b;
	}
	function g(b) {
	  throw b;
	}
	function t(b, c, d, g) {
	  var l;
	  try {
		b && p.isFunction(l = b.promise) ? l.call(b).done(c).fail(d) : b && p.isFunction(l = b.then) ? l.call(b, c, d) : c.apply(void 0, [b].slice(g));
	  } catch (r) {
		d.apply(void 0, [r]);
	  }
	}
	function y() {
	  Y.removeEventListener("DOMContentLoaded", y);
	  b.removeEventListener("load", y);
	  p.ready();
	}
	function z() {
	  this.expando = p.expando + z.uid++;
	}
	function A(b, c, d) {
	  var g;
	  if (void 0 === d && 1 === b.nodeType) if (g = "data-" + c.replace(Hc, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
		try {
		  d = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Ic.test(d) ? JSON.parse(d) : d);
		} catch (l) {}
		pa.set(b, c, d);
	  } else d = void 0;
	  return d;
	}
	function B(b, c, d, g) {
	  var l,
		r = 1,
		e = 20,
		f = g ? function () {
		  return g.cur();
		} : function () {
		  return p.css(b, c, "");
		},
		q = f(),
		s = d && d[3] || (p.cssNumber[c] ? "" : "px"),
		m = (p.cssNumber[c] || "px" !== s && +q) && mb.exec(p.css(b, c));
	  if (m && m[3] !== s) {
		s = s || m[3];
		d = d || [];
		m = +q || 1;
		do r = r || ".5", m /= r, p.style(b, c, m + s); while (r !== (r = f() / q) && 1 !== r && --e);
	  }
	  return d && (m = +m || +q || 0, l = d[1] ? m + (d[1] + 1) * d[2] : +d[2], g && (g.unit = s, g.start = m, g.end = l)), l;
	}
	function D(b, c) {
	  for (var d, g, l = [], r = 0, e = b.length; r < e; r++) if (g = b[r], g.style) if (d = g.style.display, c) {
		if ("none" === d && (l[r] = S.get(g, "display") || null, l[r] || (g.style.display = "")), "" === g.style.display && Ab(g)) {
		  d = l;
		  var f = r,
			q,
			s = void 0;
		  q = g.ownerDocument;
		  var m = g.nodeName;
		  q = (g = Yb[m]) ? g : (s = q.body.appendChild(q.createElement(m)), g = p.css(s, "display"), s.parentNode.removeChild(s), "none" === g && (g = "block"), Yb[m] = g, g);
		  d[f] = q;
		}
	  } else "none" !== d && (l[r] = "none", S.set(g, "display", d));
	  for (r = 0; r < e; r++) null != l[r] && (b[r].style.display = l[r]);
	  return b;
	}
	function E(b, c) {
	  var d;
	  return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? p.merge([b], d) : d;
	}
	function u(b, c) {
	  for (var d = 0, g = b.length; d < g; d++) S.set(b[d], "globalEval", !c || S.get(c[d], "globalEval"));
	}
	function F(b, c, d, g, l) {
	  for (var r, e, f, q, s = c.createDocumentFragment(), m = [], j = 0, M = b.length; j < M; j++) if (r = b[j], r || 0 === r) if ("object" === p.type(r)) p.merge(m, r.nodeType ? [r] : r);else if (Jc.test(r)) {
		e = e || s.appendChild(c.createElement("div"));
		f = (Zb.exec(r) || ["", ""])[1].toLowerCase();
		f = sa[f] || sa._default;
		e.innerHTML = f[1] + p.htmlPrefilter(r) + f[2];
		for (f = f[0]; f--;) e = e.lastChild;
		p.merge(m, e.childNodes);
		e = s.firstChild;
		e.textContent = "";
	  } else m.push(c.createTextNode(r));
	  s.textContent = "";
	  for (j = 0; r = m[j++];) if (g && -1 < p.inArray(r, g)) l && l.push(r);else if (q = p.contains(r.ownerDocument, r), e = E(s.appendChild(r), "script"), q && u(e), d) for (f = 0; r = e[f++];) $b.test(r.type || "") && d.push(r);
	  return s;
	}
	function K() {
	  return !0;
	}
	function L() {
	  return !1;
	}
	function N() {
	  try {
		return Y.activeElement;
	  } catch (b) {}
	}
	function Q(b, c, d, g, l, r) {
	  var e, f;
	  if ("object" == typeof c) {
		"string" != typeof d && (g = g || d, d = void 0);
		for (f in c) Q(b, f, d, g, c[f], r);
		return b;
	  }
	  if (null == g && null == l ? (l = d, g = d = void 0) : null == l && ("string" == typeof d ? (l = g, g = void 0) : (l = g, g = d, d = void 0)), !1 === l) l = L;else if (!l) return b;
	  return 1 === r && (e = l, l = function (b) {
		return p().off(b), e.apply(this, arguments);
	  }, l.guid = e.guid || (e.guid = p.guid++)), b.each(function () {
		p.event.add(this, c, l, g, d);
	  });
	}
	function I(b, c) {
	  return f(b, "table") && f(11 !== c.nodeType ? c : c.firstChild, "tr") ? p(">tbody", b)[0] || b : b;
	}
	function fa(b) {
	  return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b;
	}
	function O(b) {
	  var c = Kc.exec(b.type);
	  return c ? b.type = c[1] : b.removeAttribute("type"), b;
	}
	function P(b, c) {
	  var d, g, l, r, e, f;
	  if (1 === c.nodeType) {
		if (S.hasData(b) && (d = S.access(b), g = S.set(c, d), f = d.events)) for (l in delete g.handle, g.events = {}, f) {
		  d = 0;
		  for (g = f[l].length; d < g; d++) p.event.add(c, l, f[l][d]);
		}
		pa.hasData(b) && (r = pa.access(b), e = p.extend({}, r), pa.set(c, e));
	  }
	}
	function ba(b, c, g, l) {
	  c = ab.apply([], c);
	  var r,
		e,
		f,
		q,
		s = 0,
		m = b.length,
		j = m - 1,
		M = c[0],
		t = p.isFunction(M);
	  if (t || 1 < m && "string" == typeof M && !da.checkClone && Lc.test(M)) return b.each(function (d) {
		var r = b.eq(d);
		t && (c[0] = M.call(this, d, r.html()));
		ba(r, c, g, l);
	  });
	  if (m && (r = F(c, b[0].ownerDocument, !1, b, l), e = r.firstChild, 1 === r.childNodes.length && (r = e), e || l)) {
		e = p.map(E(r, "script"), fa);
		for (f = e.length; s < m; s++) q = r, s !== j && (q = p.clone(q, !0, !0), f && p.merge(e, E(q, "script"))), g.call(b[s], q, s);
		if (f) {
		  r = e[e.length - 1].ownerDocument;
		  p.map(e, O);
		  for (s = 0; s < f; s++) q = e[s], $b.test(q.type || "") && !S.access(q, "globalEval") && p.contains(r, q) && (q.src ? p._evalUrl && p._evalUrl(q.src) : d(q.textContent.replace(Nc, ""), r));
		}
	  }
	  return b;
	}
	function U(b, c, d) {
	  for (var g = c ? p.filter(c, b) : b, l = 0; null != (c = g[l]); l++) d || 1 !== c.nodeType || p.cleanData(E(c)), c.parentNode && (d && p.contains(c.ownerDocument, c) && u(E(c, "script")), c.parentNode.removeChild(c));
	  return b;
	}
	function s(b, c, d) {
	  var g,
		l,
		r,
		e,
		f = b.style;
	  return d = d || Bb(b), d && (e = d.getPropertyValue(c) || d[c], "" !== e || p.contains(b.ownerDocument, b) || (e = p.style(b, c)), !da.pixelMarginRight() && Qb.test(e) && ac.test(c) && (g = f.width, l = f.minWidth, r = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = d.width, f.width = g, f.minWidth = l, f.maxWidth = r)), void 0 !== e ? e + "" : e;
	}
	function x(b, c) {
	  return {
		get: function () {
		  return b() ? void delete this.get : (this.get = c).apply(this, arguments);
		}
	  };
	}
	function G(b) {
	  var c = p.cssProps[b];
	  if (!c) {
		var c = p.cssProps,
		  d;
		a: if (d = b, !(d in bc)) {
		  for (var g = d[0].toUpperCase() + d.slice(1), l = cc.length; l--;) if (d = cc[l] + g, d in bc) break a;
		  d = void 0;
		}
		c = c[b] = d || b;
	  }
	  return c;
	}
	function C(b, c, d) {
	  return (b = mb.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c;
	}
	function H(b, c, d, g, l) {
	  var r = 0;
	  for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (r += p.css(b, d + Sa[c], !0, l)), g ? ("content" === d && (r -= p.css(b, "padding" + Sa[c], !0, l)), "margin" !== d && (r -= p.css(b, "border" + Sa[c] + "Width", !0, l))) : (r += p.css(b, "padding" + Sa[c], !0, l), "padding" !== d && (r += p.css(b, "border" + Sa[c] + "Width", !0, l)));
	  return r;
	}
	function aa(b, c, d) {
	  var g,
		l = Bb(b),
		r = s(b, c, l),
		e = "border-box" === p.css(b, "boxSizing", !1, l);
	  return Qb.test(r) ? r : (g = e && (da.boxSizingReliable() || r === b.style[c]), "auto" === r && (r = b["offset" + c[0].toUpperCase() + c.slice(1)]), r = parseFloat(r) || 0, r + H(b, c, d || (e ? "border" : "content"), g, l) + "px");
	}
	function R(b, c, d, g, l) {
	  return new R.prototype.init(b, c, d, g, l);
	}
	function l() {
	  Cb && (!1 === Y.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(l) : b.setTimeout(l, p.fx.interval), p.fx.tick());
	}
	function q() {
	  return b.setTimeout(function () {
		bb = void 0;
	  }), bb = p.now();
	}
	function J(b, c) {
	  var d,
		g = 0,
		l = {
		  height: b
		};
	  for (c = c ? 1 : 0; 4 > g; g += 2 - c) d = Sa[g], l["margin" + d] = l["padding" + d] = b;
	  return c && (l.opacity = l.width = b), l;
	}
	function r(b, c, d) {
	  for (var g, l = (M.tweeners[c] || []).concat(M.tweeners["*"]), r = 0, e = l.length; r < e; r++) if (g = l[r].call(d, c, b)) return g;
	}
	function M(b, c, d) {
	  var g,
		l,
		e = 0,
		f = M.prefilters.length,
		s = p.Deferred().always(function () {
		  delete m.elem;
		}),
		m = function () {
		  if (l) return !1;
		  for (var c = bb || q(), c = Math.max(0, j.startTime + j.duration - c), d = 1 - (c / j.duration || 0), g = 0, r = j.tweens.length; g < r; g++) j.tweens[g].run(d);
		  return s.notifyWith(b, [j, d, c]), 1 > d && r ? c : (r || s.notifyWith(b, [j, 1, 0]), s.resolveWith(b, [j]), !1);
		},
		j = s.promise({
		  elem: b,
		  props: p.extend({}, c),
		  opts: p.extend(!0, {
			specialEasing: {},
			easing: p.easing._default
		  }, d),
		  originalProperties: c,
		  originalOptions: d,
		  startTime: bb || q(),
		  duration: d.duration,
		  tweens: [],
		  createTween: function (c, d) {
			var g = p.Tween(b, j.opts, c, d, j.opts.specialEasing[c] || j.opts.easing);
			return j.tweens.push(g), g;
		  },
		  stop: function (c) {
			var d = 0,
			  g = c ? j.tweens.length : 0;
			if (l) return this;
			for (l = !0; d < g; d++) j.tweens[d].run(1);
			return c ? (s.notifyWith(b, [j, 1, 0]), s.resolveWith(b, [j, c])) : s.rejectWith(b, [j, c]), this;
		  }
		});
	  c = j.props;
	  d = j.opts.specialEasing;
	  var t, x, C, V;
	  for (g in c) if (t = p.camelCase(g), x = d[t], C = c[g], Array.isArray(C) && (x = C[1], C = c[g] = C[0]), g !== t && (c[t] = C, delete c[g]), V = p.cssHooks[t], V && "expand" in V) for (g in C = V.expand(C), delete c[t], C) g in c || (c[g] = C[g], d[g] = x);else d[t] = x;
	  for (; e < f; e++) if (g = M.prefilters[e].call(j, b, c, j.opts)) return p.isFunction(g.stop) && (p._queueHooks(j.elem, j.opts.queue).stop = p.proxy(g.stop, g)), g;
	  return p.map(c, r, j), p.isFunction(j.opts.start) && j.opts.start.call(b, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), p.fx.timer(p.extend(m, {
		elem: b,
		anim: j,
		queue: j.opts.queue
	  })), j;
	}
	function V(b) {
	  return (b.match(ta) || []).join(" ");
	}
	function ga(b) {
	  return b.getAttribute && b.getAttribute("class") || "";
	}
	function ha(b, c, d, g) {
	  var l;
	  if (Array.isArray(c)) p.each(c, function (c, l) {
		d || Oc.test(b) ? g(b, l) : ha(b + "[" + ("object" == typeof l && null != l ? c : "") + "]", l, d, g);
	  });else if (d || "object" !== p.type(c)) g(b, c);else for (l in c) ha(b + "[" + l + "]", c[l], d, g);
	}
	function ka(b) {
	  return function (c, d) {
		"string" != typeof c && (d = c, c = "*");
		var g,
		  l = 0,
		  r = c.toLowerCase().match(ta) || [];
		if (p.isFunction(d)) for (; g = r[l++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d);
	  };
	}
	function qa(b, c, d, g) {
	  function l(f) {
		var q;
		return r[f] = !0, p.each(b[f] || [], function (b, W) {
		  var f = W(c, d, g);
		  return "string" != typeof f || e || r[f] ? e ? !(q = f) : void 0 : (c.dataTypes.unshift(f), l(f), !1);
		}), q;
	  }
	  var r = {},
		e = b === Rb;
	  return l(c.dataTypes[0]) || !r["*"] && l("*");
	}
	function na(b, c) {
	  var d,
		g,
		l = p.ajaxSettings.flatOptions || {};
	  for (d in c) void 0 !== c[d] && ((l[d] ? b : g || (g = {}))[d] = c[d]);
	  return g && p.extend(!0, b, g), b;
	}
	var ua = [],
	  Y = b.document,
	  Db = Object.getPrototypeOf,
	  ya = ua.slice,
	  ab = ua.concat,
	  cb = ua.push,
	  Ja = ua.indexOf,
	  Ka = {},
	  db = Ka.toString,
	  La = Ka.hasOwnProperty,
	  nb = La.toString,
	  ob = nb.call(Object),
	  da = {},
	  p = function (b, c) {
		return new p.fn.init(b, c);
	  },
	  pb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	  Eb = /^-ms-/,
	  Fb = /-([a-z])/g,
	  qb = function (b, c) {
		return c.toUpperCase();
	  };
	p.fn = p.prototype = {
	  jquery: "3.2.1",
	  constructor: p,
	  length: 0,
	  toArray: function () {
		return ya.call(this);
	  },
	  get: function (b) {
		return null == b ? ya.call(this) : 0 > b ? this[b + this.length] : this[b];
	  },
	  pushStack: function (b) {
		b = p.merge(this.constructor(), b);
		return b.prevObject = this, b;
	  },
	  each: function (b) {
		return p.each(this, b);
	  },
	  map: function (b) {
		return this.pushStack(p.map(this, function (c, d) {
		  return b.call(c, d, c);
		}));
	  },
	  slice: function () {
		return this.pushStack(ya.apply(this, arguments));
	  },
	  first: function () {
		return this.eq(0);
	  },
	  last: function () {
		return this.eq(-1);
	  },
	  eq: function (b) {
		var c = this.length;
		b = +b + (0 > b ? c : 0);
		return this.pushStack(0 <= b && b < c ? [this[b]] : []);
	  },
	  end: function () {
		return this.prevObject || this.constructor();
	  },
	  push: cb,
	  sort: ua.sort,
	  splice: ua.splice
	};
	p.extend = p.fn.extend = function () {
	  var b,
		c,
		d,
		g,
		l,
		r,
		e = arguments[0] || {},
		f = 1,
		q = arguments.length,
		s = !1;
	  "boolean" == typeof e && (s = e, e = arguments[f] || {}, f++);
	  "object" == typeof e || p.isFunction(e) || (e = {});
	  for (f === q && (e = this, f--); f < q; f++) if (null != (b = arguments[f])) for (c in b) d = e[c], g = b[c], e !== g && (s && g && (p.isPlainObject(g) || (l = Array.isArray(g))) ? (l ? (l = !1, r = d && Array.isArray(d) ? d : []) : r = d && p.isPlainObject(d) ? d : {}, e[c] = p.extend(s, r, g)) : void 0 !== g && (e[c] = g));
	  return e;
	};
	p.extend({
	  expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
	  isReady: !0,
	  error: function (b) {
		throw Error(b);
	  },
	  noop: function () {},
	  isFunction: function (b) {
		return "function" === p.type(b);
	  },
	  isWindow: function (b) {
		return null != b && b === b.window;
	  },
	  isNumeric: function (b) {
		var c = p.type(b);
		return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b));
	  },
	  isPlainObject: function (b) {
		var c, d;
		return !(!b || "[object Object]" !== db.call(b)) && (!(c = Db(b)) || (d = La.call(c, "constructor") && c.constructor, "function" == typeof d && nb.call(d) === ob));
	  },
	  isEmptyObject: function (b) {
		for (var c in b) return !1;
		return !0;
	  },
	  type: function (b) {
		return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Ka[db.call(b)] || "object" : typeof b;
	  },
	  globalEval: function (b) {
		d(b);
	  },
	  camelCase: function (b) {
		return b.replace(Eb, "ms-").replace(Fb, qb);
	  },
	  each: function (b, c) {
		var d,
		  g = 0;
		if (e(b)) for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);else for (g in b) if (!1 === c.call(b[g], g, b[g])) break;
		return b;
	  },
	  trim: function (b) {
		return null == b ? "" : (b + "").replace(pb, "");
	  },
	  makeArray: function (b, c) {
		var d = c || [];
		return null != b && (e(Object(b)) ? p.merge(d, "string" == typeof b ? [b] : b) : cb.call(d, b)), d;
	  },
	  inArray: function (b, c, d) {
		return null == c ? -1 : Ja.call(c, b, d);
	  },
	  merge: function (b, c) {
		for (var d = +c.length, g = 0, l = b.length; g < d; g++) b[l++] = c[g];
		return b.length = l, b;
	  },
	  grep: function (b, c, d) {
		for (var g = [], l = 0, r = b.length, e = !d; l < r; l++) d = !c(b[l], l), d !== e && g.push(b[l]);
		return g;
	  },
	  map: function (b, c, d) {
		var g,
		  l,
		  r = 0,
		  f = [];
		if (e(b)) for (g = b.length; r < g; r++) l = c(b[r], r, d), null != l && f.push(l);else for (r in b) l = c(b[r], r, d), null != l && f.push(l);
		return ab.apply([], f);
	  },
	  guid: 1,
	  proxy: function (b, c) {
		var d, g, l;
		if ("string" == typeof c && (d = b[c], c = b, b = d), p.isFunction(b)) return g = ya.call(arguments, 2), l = function () {
		  return b.apply(c || this, g.concat(ya.call(arguments)));
		}, l.guid = b.guid = b.guid || p.guid++, l;
	  },
	  now: Date.now,
	  support: da
	});
	"function" == typeof Symbol && (p.fn[Symbol.iterator] = ua[Symbol.iterator]);
	p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (b, c) {
	  Ka["[object " + c + "]"] = c.toLowerCase();
	});
	var za,
	  eb = b,
	  ca = function (b, c, d, g) {
		var l,
		  r,
		  e,
		  f,
		  q,
		  s = c && c.ownerDocument,
		  j = c ? c.nodeType : 9;
		if (d = d || [], "string" != typeof b || !b || 1 !== j && 9 !== j && 11 !== j) return d;
		if (!g && ((c ? c.ownerDocument || c : va) !== Z && wa(c), c = c || Z, la)) {
		  if (11 !== j && (f = Pc.exec(b))) if (l = f[1]) {
			if (9 === j) {
			  if (!(r = c.getElementById(l))) return d;
			  if (r.id === l) return d.push(r), d;
			} else {
			  if (s && (r = s.getElementById(l)) && rb(c, r) && r.id === l) return d.push(r), d;
			}
		  } else {
			if (f[2]) return Ma.apply(d, c.getElementsByTagName(b)), d;
			if ((l = f[3]) && ea.getElementsByClassName && c.getElementsByClassName) return Ma.apply(d, c.getElementsByClassName(l)), d;
		  }
		  if (ea.qsa && !Gb[b + " "] && (!ja || !ja.test(b))) {
			if (1 !== j) s = c, q = b;else if ("object" !== c.nodeName.toLowerCase()) {
			  (e = c.getAttribute("id")) ? e = e.replace(dc, ec) : c.setAttribute("id", e = ia);
			  r = Na(b);
			  for (l = r.length; l--;) r[l] = "#" + e + " " + Ta(r[l]);
			  q = r.join(",");
			  s = Sb.test(b) && fb(c.parentNode) || c;
			}
			if (q) try {
			  return Ma.apply(d, s.querySelectorAll(q)), d;
			} catch (m) {} finally {
			  e === ia && c.removeAttribute("id");
			}
		  }
		}
		return gb(b.replace(Hb, "$1"), c, d, g);
	  },
	  hb = function () {
		function b(d, g) {
		  return c.push(d + " ") > X.cacheLength && delete b[c.shift()], b[d + " "] = g;
		}
		var c = [];
		return b;
	  },
	  oa = function (b) {
		return b[ia] = !0, b;
	  },
	  ra = function (b) {
		var c = Z.createElement("fieldset");
		try {
		  return !!b(c);
		} catch (d) {
		  return !1;
		} finally {
		  c.parentNode && c.parentNode.removeChild(c);
		}
	  },
	  ib = function (b, c) {
		for (var d = b.split("|"), g = d.length; g--;) X.attrHandle[d[g]] = c;
	  },
	  sb = function (b, c) {
		var d = c && b,
		  g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
		if (g) return g;
		if (d) for (; d = d.nextSibling;) if (d === c) return -1;
		return b ? 1 : -1;
	  },
	  tb = function (b) {
		return function (c) {
		  return "input" === c.nodeName.toLowerCase() && c.type === b;
		};
	  },
	  Ib = function (b) {
		return function (c) {
		  var d = c.nodeName.toLowerCase();
		  return ("input" === d || "button" === d) && c.type === b;
		};
	  },
	  ub = function (b) {
		return function (c) {
		  return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Qc(c) === b : c.disabled === b : "label" in c && c.disabled === b;
		};
	  },
	  Ca = function (b) {
		return oa(function (c) {
		  return c = +c, oa(function (d, g) {
			for (var l, r = b([], d.length, c), e = r.length; e--;) d[l = r[e]] && (d[l] = !(g[l] = d[l]));
		  });
		});
	  },
	  fb = function (b) {
		return b && "undefined" != typeof b.getElementsByTagName && b;
	  },
	  vb = function () {},
	  Ta = function (b) {
		for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
		return g;
	  },
	  Ua = function (b, c, d) {
		var g = c.dir,
		  l = c.next,
		  r = l || g,
		  e = d && "parentNode" === r,
		  f = Rc++;
		return c.first ? function (c, d, l) {
		  for (; c = c[g];) if (1 === c.nodeType || e) return b(c, d, l);
		  return !1;
		} : function (c, d, q) {
		  var s,
			T,
			j,
			m = [Da, f];
		  if (q) for (; c = c[g];) {
			if ((1 === c.nodeType || e) && b(c, d, q)) return !0;
		  } else for (; c = c[g];) if (1 === c.nodeType || e) if (j = c[ia] || (c[ia] = {}), T = j[c.uniqueID] || (j[c.uniqueID] = {}), l && l === c.nodeName.toLowerCase()) c = c[g] || c;else {
			if ((s = T[r]) && s[0] === Da && s[1] === f) return m[2] = s[2];
			if (T[r] = m, m[2] = b(c, d, q)) return !0;
		  }
		  return !1;
		};
	  },
	  Va = function (b) {
		return 1 < b.length ? function (c, d, g) {
		  for (var l = b.length; l--;) if (!b[l](c, d, g)) return !1;
		  return !0;
		} : b[0];
	  },
	  Oa = function (b, c, d, g, l) {
		for (var r, e = [], f = 0, q = b.length, s = null != c; f < q; f++) (r = b[f]) && (d && !d(r, g, l) || (e.push(r), s && c.push(f)));
		return e;
	  },
	  Wa = function (b, c, d, g, l, r) {
		return g && !g[ia] && (g = Wa(g)), l && !l[ia] && (l = Wa(l, r)), oa(function (r, e, f, q) {
		  var s,
			j,
			m = [],
			M = [],
			t = e.length,
			p;
		  if (!(p = r)) {
			p = c || "*";
			for (var x = f.nodeType ? [f] : f, C = [], V = 0, J = x.length; V < J; V++) ca(p, x[V], C);
			p = C;
		  }
		  p = !b || !r && c ? p : Oa(p, m, b, f, q);
		  x = d ? l || (r ? b : t || g) ? [] : e : p;
		  if (d && d(p, x, f, q), g) {
			s = Oa(x, M);
			g(s, [], f, q);
			for (f = s.length; f--;) (j = s[f]) && (x[M[f]] = !(p[M[f]] = j));
		  }
		  if (r) {
			if (l || b) {
			  if (l) {
				s = [];
				for (f = x.length; f--;) (j = x[f]) && s.push(p[f] = j);
				l(null, x = [], s, q);
			  }
			  for (f = x.length; f--;) (j = x[f]) && -1 < (s = l ? Xa(r, j) : m[f]) && (r[s] = !(e[s] = j));
			}
		  } else x = Oa(x === e ? x.splice(t, x.length) : x), l ? l(null, e, x, q) : Ma.apply(e, x);
		});
	  },
	  Ya = function (b) {
		var c,
		  d,
		  g,
		  l = b.length,
		  r = X.relative[b[0].type];
		d = r || X.relative[" "];
		for (var e = r ? 1 : 0, f = Ua(function (b) {
			return b === c;
		  }, d, !0), s = Ua(function (b) {
			return -1 < Xa(c, b);
		  }, d, !0), q = [function (b, d, g) {
			b = !r && (g || d !== Pa) || ((c = d).nodeType ? f(b, d, g) : s(b, d, g));
			return c = null, b;
		  }]; e < l; e++) if (d = X.relative[b[e].type]) q = [Ua(Va(q), d)];else {
		  if (d = X.filter[b[e].type].apply(null, b[e].matches), d[ia]) {
			for (g = ++e; g < l && !X.relative[b[g].type]; g++);
			return Wa(1 < e && Va(q), 1 < e && Ta(b.slice(0, e - 1).concat({
			  value: " " === b[e - 2].type ? "*" : ""
			})).replace(Hb, "$1"), d, e < g && Ya(b.slice(e, g)), g < l && Ya(b = b.slice(g)), g < l && Ta(b));
		  }
		  q.push(d);
		}
		return Va(q);
	  },
	  Ea,
	  ea,
	  X,
	  Qa,
	  jb,
	  Na,
	  Za,
	  gb,
	  Pa,
	  xa,
	  Fa,
	  wa,
	  Z,
	  ma,
	  la,
	  ja,
	  Aa,
	  Ra,
	  rb,
	  ia = "sizzle" + 1 * new Date(),
	  va = eb.document,
	  Da = 0,
	  Rc = 0,
	  fc = hb(),
	  gc = hb(),
	  Gb = hb(),
	  Tb = function (b, c) {
		return b === c && (Fa = !0), 0;
	  },
	  Sc = {}.hasOwnProperty,
	  $a = [],
	  Tc = $a.pop,
	  Uc = $a.push,
	  Ma = $a.push,
	  hc = $a.slice,
	  Xa = function (b, c) {
		for (var d = 0, g = b.length; d < g; d++) if (b[d] === c) return d;
		return -1;
	  },
	  Vc = /[\x20\t\r\n\f]+/g,
	  Hb = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
	  Wc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
	  Xc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
	  Yc = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
	  Zc = RegExp(":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
	  $c = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
	  Jb = {
		ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
		CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
		TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
		ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
		PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
		CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
		bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
		needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
	  },
	  ad = /^(?:input|select|textarea|button)$/i,
	  bd = /^h\d$/i,
	  wb = /^[^{]+\{\s*\[native \w/,
	  Pc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	  Sb = /[+~]/,
	  Ga = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
	  Ha = function (b, c, d) {
		b = "0x" + c - 65536;
		return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320);
	  },
	  dc = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	  ec = function (b, c) {
		return c ? "\0" === b ? "�" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b;
	  },
	  ic = function () {
		wa();
	  },
	  Qc = Ua(function (b) {
		return !0 === b.disabled && ("form" in b || "label" in b);
	  }, {
		dir: "parentNode",
		next: "legend"
	  });
	try {
	  Ma.apply($a = hc.call(va.childNodes), va.childNodes), $a[va.childNodes.length].nodeType;
	} catch (Ed) {
	  Ma = {
		apply: $a.length ? function (b, c) {
		  Uc.apply(b, hc.call(c));
		} : function (b, c) {
		  for (var d = b.length, g = 0; b[d++] = c[g++];);
		  b.length = d - 1;
		}
	  };
	}
	ea = ca.support = {};
	jb = ca.isXML = function (b) {
	  b = b && (b.ownerDocument || b).documentElement;
	  return !!b && "HTML" !== b.nodeName;
	};
	wa = ca.setDocument = function (b) {
	  var c, d;
	  b = b ? b.ownerDocument || b : va;
	  return b !== Z && 9 === b.nodeType && b.documentElement ? (Z = b, ma = Z.documentElement, la = !jb(Z), va !== Z && (d = Z.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", ic, !1) : d.attachEvent && d.attachEvent("onunload", ic)), ea.attributes = ra(function (b) {
		return b.className = "i", !b.getAttribute("className");
	  }), ea.getElementsByTagName = ra(function (b) {
		return b.appendChild(Z.createComment("")), !b.getElementsByTagName("*").length;
	  }), ea.getElementsByClassName = wb.test(Z.getElementsByClassName), ea.getById = ra(function (b) {
		return ma.appendChild(b).id = ia, !Z.getElementsByName || !Z.getElementsByName(ia).length;
	  }), ea.getById ? (X.filter.ID = function (b) {
		var c = b.replace(Ga, Ha);
		return function (b) {
		  return b.getAttribute("id") === c;
		};
	  }, X.find.ID = function (b, c) {
		if ("undefined" != typeof c.getElementById && la) {
		  var d = c.getElementById(b);
		  return d ? [d] : [];
		}
	  }) : (X.filter.ID = function (b) {
		var c = b.replace(Ga, Ha);
		return function (b) {
		  return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c;
		};
	  }, X.find.ID = function (b, c) {
		if ("undefined" != typeof c.getElementById && la) {
		  var d,
			g,
			l,
			W = c.getElementById(b);
		  if (W) {
			if (d = W.getAttributeNode("id"), d && d.value === b) return [W];
			l = c.getElementsByName(b);
			for (g = 0; W = l[g++];) if (d = W.getAttributeNode("id"), d && d.value === b) return [W];
		  }
		  return [];
		}
	  }), X.find.TAG = ea.getElementsByTagName ? function (b, c) {
		return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : ea.qsa ? c.querySelectorAll(b) : void 0;
	  } : function (b, c) {
		var d,
		  g = [],
		  l = 0,
		  W = c.getElementsByTagName(b);
		if ("*" === b) {
		  for (; d = W[l++];) 1 === d.nodeType && g.push(d);
		  return g;
		}
		return W;
	  }, X.find.CLASS = ea.getElementsByClassName && function (b, c) {
		if ("undefined" != typeof c.getElementsByClassName && la) return c.getElementsByClassName(b);
	  }, Aa = [], ja = [], (ea.qsa = wb.test(Z.querySelectorAll)) && (ra(function (b) {
		ma.appendChild(b).innerHTML = "<a id='" + ia + "'></a><select id='" + ia + "-\r\\' msallowcapture=''><option selected=''></option></select>";
		b.querySelectorAll("[msallowcapture^='']").length && ja.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
		b.querySelectorAll("[selected]").length || ja.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
		b.querySelectorAll("[id~=" + ia + "-]").length || ja.push("~=");
		b.querySelectorAll(":checked").length || ja.push(":checked");
		b.querySelectorAll("a#" + ia + "+*").length || ja.push(".#.+[+~]");
	  }), ra(function (b) {
		b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
		var c = Z.createElement("input");
		c.setAttribute("type", "hidden");
		b.appendChild(c).setAttribute("name", "D");
		b.querySelectorAll("[name=d]").length && ja.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
		2 !== b.querySelectorAll(":enabled").length && ja.push(":enabled", ":disabled");
		ma.appendChild(b).disabled = !0;
		2 !== b.querySelectorAll(":disabled").length && ja.push(":enabled", ":disabled");
		b.querySelectorAll("*,:x");
		ja.push(",.*:");
	  })), (ea.matchesSelector = wb.test(Ra = ma.matches || ma.webkitMatchesSelector || ma.mozMatchesSelector || ma.oMatchesSelector || ma.msMatchesSelector)) && ra(function (b) {
		ea.disconnectedMatch = Ra.call(b, "*");
		Ra.call(b, "[s!='']:x");
		Aa.push("!=", ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
	  }), ja = ja.length && RegExp(ja.join("|")), Aa = Aa.length && RegExp(Aa.join("|")), c = wb.test(ma.compareDocumentPosition), rb = c || wb.test(ma.contains) ? function (b, c) {
		var d = 9 === b.nodeType ? b.documentElement : b,
		  g = c && c.parentNode;
		return b === g || !(!g || 1 !== g.nodeType || !(d.contains ? d.contains(g) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(g)));
	  } : function (b, c) {
		if (c) for (; c = c.parentNode;) if (c === b) return !0;
		return !1;
	  }, Tb = c ? function (b, c) {
		if (b === c) return Fa = !0, 0;
		var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
		return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !ea.sortDetached && c.compareDocumentPosition(b) === d ? b === Z || b.ownerDocument === va && rb(va, b) ? -1 : c === Z || c.ownerDocument === va && rb(va, c) ? 1 : xa ? Xa(xa, b) - Xa(xa, c) : 0 : 4 & d ? -1 : 1);
	  } : function (b, c) {
		if (b === c) return Fa = !0, 0;
		var d,
		  g = 0;
		d = b.parentNode;
		var l = c.parentNode,
		  W = [b],
		  r = [c];
		if (!d || !l) return b === Z ? -1 : c === Z ? 1 : d ? -1 : l ? 1 : xa ? Xa(xa, b) - Xa(xa, c) : 0;
		if (d === l) return sb(b, c);
		for (d = b; d = d.parentNode;) W.unshift(d);
		for (d = c; d = d.parentNode;) r.unshift(d);
		for (; W[g] === r[g];) g++;
		return g ? sb(W[g], r[g]) : W[g] === va ? -1 : r[g] === va ? 1 : 0;
	  }, Z) : Z;
	};
	ca.matches = function (b, c) {
	  return ca(b, null, null, c);
	};
	ca.matchesSelector = function (b, c) {
	  if ((b.ownerDocument || b) !== Z && wa(b), c = c.replace(Yc, "='$1']"), ea.matchesSelector && la && !Gb[c + " "] && (!Aa || !Aa.test(c)) && (!ja || !ja.test(c))) try {
		var d = Ra.call(b, c);
		if (d || ea.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d;
	  } catch (g) {}
	  return 0 < ca(c, Z, null, [b]).length;
	};
	ca.contains = function (b, c) {
	  return (b.ownerDocument || b) !== Z && wa(b), rb(b, c);
	};
	ca.attr = function (b, c) {
	  (b.ownerDocument || b) !== Z && wa(b);
	  var d = X.attrHandle[c.toLowerCase()],
		d = d && Sc.call(X.attrHandle, c.toLowerCase()) ? d(b, c, !la) : void 0;
	  return void 0 !== d ? d : ea.attributes || !la ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null;
	};
	ca.escape = function (b) {
	  return (b + "").replace(dc, ec);
	};
	ca.error = function (b) {
	  throw Error("Syntax error, unrecognized expression: " + b);
	};
	ca.uniqueSort = function (b) {
	  var c,
		d = [],
		g = 0,
		l = 0;
	  if (Fa = !ea.detectDuplicates, xa = !ea.sortStable && b.slice(0), b.sort(Tb), Fa) {
		for (; c = b[l++];) c === b[l] && (g = d.push(l));
		for (; g--;) b.splice(d[g], 1);
	  }
	  return xa = null, b;
	};
	Qa = ca.getText = function (b) {
	  var c,
		d = "",
		g = 0;
	  if (c = b.nodeType) {
		if (1 === c || 9 === c || 11 === c) {
		  if ("string" == typeof b.textContent) return b.textContent;
		  for (b = b.firstChild; b; b = b.nextSibling) d += Qa(b);
		} else {
		  if (3 === c || 4 === c) return b.nodeValue;
		}
	  } else for (; c = b[g++];) d += Qa(c);
	  return d;
	};
	X = ca.selectors = {
	  cacheLength: 50,
	  createPseudo: oa,
	  match: Jb,
	  attrHandle: {},
	  find: {},
	  relative: {
		">": {
		  dir: "parentNode",
		  first: !0
		},
		" ": {
		  dir: "parentNode"
		},
		"+": {
		  dir: "previousSibling",
		  first: !0
		},
		"~": {
		  dir: "previousSibling"
		}
	  },
	  preFilter: {
		ATTR: function (b) {
		  return b[1] = b[1].replace(Ga, Ha), b[3] = (b[3] || b[4] || b[5] || "").replace(Ga, Ha), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4);
		},
		CHILD: function (b) {
		  return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || ca.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && ca.error(b[0]), b;
		},
		PSEUDO: function (b) {
		  var c,
			d = !b[6] && b[2];
		  return Jb.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && Zc.test(d) && (c = Na(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3));
		}
	  },
	  filter: {
		TAG: function (b) {
		  var c = b.replace(Ga, Ha).toLowerCase();
		  return "*" === b ? function () {
			return !0;
		  } : function (b) {
			return b.nodeName && b.nodeName.toLowerCase() === c;
		  };
		},
		CLASS: function (b) {
		  var c = fc[b + " "];
		  return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && fc(b, function (b) {
			return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "");
		  });
		},
		ATTR: function (b, c, d) {
		  return function (g) {
			g = ca.attr(g, b);
			return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(Vc, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"));
		  };
		},
		CHILD: function (b, c, d, g, l) {
		  var r = "nth" !== b.slice(0, 3),
			e = "last" !== b.slice(-4),
			f = "of-type" === c;
		  return 1 === g && 0 === l ? function (b) {
			return !!b.parentNode;
		  } : function (c, d, q) {
			var s, j, m, T, M, p;
			d = r !== e ? "nextSibling" : "previousSibling";
			var t = c.parentNode,
			  x = f && c.nodeName.toLowerCase();
			q = !q && !f;
			var C = !1;
			if (t) {
			  if (r) {
				for (; d;) {
				  for (T = c; T = T[d];) if (f ? T.nodeName.toLowerCase() === x : 1 === T.nodeType) return !1;
				  p = d = "only" === b && !p && "nextSibling";
				}
				return !0;
			  }
			  if (p = [e ? t.firstChild : t.lastChild], e && q) {
				T = t;
				m = T[ia] || (T[ia] = {});
				j = m[T.uniqueID] || (m[T.uniqueID] = {});
				s = j[b] || [];
				C = (M = s[0] === Da && s[1]) && s[2];
				for (T = M && t.childNodes[M]; T = ++M && T && T[d] || (C = M = 0) || p.pop();) if (1 === T.nodeType && ++C && T === c) {
				  j[b] = [Da, M, C];
				  break;
				}
			  } else if (q && (T = c, m = T[ia] || (T[ia] = {}), j = m[T.uniqueID] || (m[T.uniqueID] = {}), s = j[b] || [], M = s[0] === Da && s[1], C = M), !1 === C) for (; (T = ++M && T && T[d] || (C = M = 0) || p.pop()) && (!(f ? T.nodeName.toLowerCase() === x : 1 === T.nodeType) || !++C || !(q && (m = T[ia] || (T[ia] = {}), j = m[T.uniqueID] || (m[T.uniqueID] = {}), j[b] = [Da, C]), T === c)););
			  return C -= l, C === g || 0 === C % g && 0 <= C / g;
			}
		  };
		},
		PSEUDO: function (b, c) {
		  var d,
			g = X.pseudos[b] || X.setFilters[b.toLowerCase()] || ca.error("unsupported pseudo: " + b);
		  return g[ia] ? g(c) : 1 < g.length ? (d = [b, b, "", c], X.setFilters.hasOwnProperty(b.toLowerCase()) ? oa(function (b, d) {
			for (var l, r = g(b, c), W = r.length; W--;) l = Xa(b, r[W]), b[l] = !(d[l] = r[W]);
		  }) : function (b) {
			return g(b, 0, d);
		  }) : g;
		}
	  },
	  pseudos: {
		not: oa(function (b) {
		  var c = [],
			d = [],
			g = Za(b.replace(Hb, "$1"));
		  return g[ia] ? oa(function (b, c, d, l) {
			var r;
			d = g(b, null, l, []);
			for (l = b.length; l--;) (r = d[l]) && (b[l] = !(c[l] = r));
		  }) : function (b, l, r) {
			return c[0] = b, g(c, null, r, d), c[0] = null, !d.pop();
		  };
		}),
		has: oa(function (b) {
		  return function (c) {
			return 0 < ca(b, c).length;
		  };
		}),
		contains: oa(function (b) {
		  return b = b.replace(Ga, Ha), function (c) {
			return -1 < (c.textContent || c.innerText || Qa(c)).indexOf(b);
		  };
		}),
		lang: oa(function (b) {
		  return $c.test(b || "") || ca.error("unsupported lang: " + b), b = b.replace(Ga, Ha).toLowerCase(), function (c) {
			var d;
			do if (d = la ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
			return !1;
		  };
		}),
		target: function (b) {
		  var c = eb.location && eb.location.hash;
		  return c && c.slice(1) === b.id;
		},
		root: function (b) {
		  return b === ma;
		},
		focus: function (b) {
		  return b === Z.activeElement && (!Z.hasFocus || Z.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex);
		},
		enabled: ub(!1),
		disabled: ub(!0),
		checked: function (b) {
		  var c = b.nodeName.toLowerCase();
		  return "input" === c && !!b.checked || "option" === c && !!b.selected;
		},
		selected: function (b) {
		  return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected;
		},
		empty: function (b) {
		  for (b = b.firstChild; b; b = b.nextSibling) if (6 > b.nodeType) return !1;
		  return !0;
		},
		parent: function (b) {
		  return !X.pseudos.empty(b);
		},
		header: function (b) {
		  return bd.test(b.nodeName);
		},
		input: function (b) {
		  return ad.test(b.nodeName);
		},
		button: function (b) {
		  var c = b.nodeName.toLowerCase();
		  return "input" === c && "button" === b.type || "button" === c;
		},
		text: function (b) {
		  var c;
		  return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase());
		},
		first: Ca(function () {
		  return [0];
		}),
		last: Ca(function (b, c) {
		  return [c - 1];
		}),
		eq: Ca(function (b, c, d) {
		  return [0 > d ? d + c : d];
		}),
		even: Ca(function (b, c) {
		  for (var d = 0; d < c; d += 2) b.push(d);
		  return b;
		}),
		odd: Ca(function (b, c) {
		  for (var d = 1; d < c; d += 2) b.push(d);
		  return b;
		}),
		lt: Ca(function (b, c, d) {
		  for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
		  return b;
		}),
		gt: Ca(function (b, c, d) {
		  for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
		  return b;
		})
	  }
	};
	X.pseudos.nth = X.pseudos.eq;
	for (Ea in {
	  radio: !0,
	  checkbox: !0,
	  file: !0,
	  password: !0,
	  image: !0
	}) X.pseudos[Ea] = tb(Ea);
	for (Ea in {
	  submit: !0,
	  reset: !0
	}) X.pseudos[Ea] = Ib(Ea);
	vb.prototype = X.filters = X.pseudos;
	X.setFilters = new vb();
	Na = ca.tokenize = function (b, c) {
	  var d, g, l, r, e, f, s;
	  if (e = gc[b + " "]) return c ? 0 : e.slice(0);
	  e = b;
	  f = [];
	  for (s = X.preFilter; e;) {
		d && !(g = Wc.exec(e)) || (g && (e = e.slice(g[0].length) || e), f.push(l = []));
		d = !1;
		(g = Xc.exec(e)) && (d = g.shift(), l.push({
		  value: d,
		  type: g[0].replace(Hb, " ")
		}), e = e.slice(d.length));
		for (r in X.filter) !(g = Jb[r].exec(e)) || s[r] && !(g = s[r](g)) || (d = g.shift(), l.push({
		  value: d,
		  type: r,
		  matches: g
		}), e = e.slice(d.length));
		if (!d) break;
	  }
	  return c ? e.length : e ? ca.error(b) : gc(b, f).slice(0);
	};
	za = (Za = ca.compile = function (b, c) {
	  var d,
		g = [],
		l = [],
		r = Gb[b + " "];
	  if (!r) {
		c || (c = Na(b));
		for (d = c.length; d--;) r = Ya(c[d]), r[ia] ? g.push(r) : l.push(r);
		d = Gb;
		var e = 0 < g.length,
		  f = 0 < l.length,
		  r = function (b, c, d, r, W) {
			var s,
			  q,
			  j,
			  m = 0,
			  M = "0",
			  T = b && [],
			  p = [],
			  t = Pa,
			  x = b || f && X.find.TAG("*", W),
			  C = Da += null == t ? 1 : Math.random() || 0.1,
			  V = x.length;
			for (W && (Pa = c === Z || c || W); M !== V && null != (s = x[M]); M++) {
			  if (f && s) {
				q = 0;
				for (c || s.ownerDocument === Z || (wa(s), d = !la); j = l[q++];) if (j(s, c || Z, d)) {
				  r.push(s);
				  break;
				}
				W && (Da = C);
			  }
			  e && ((s = !j && s) && m--, b && T.push(s));
			}
			if (m += M, e && M !== m) {
			  for (q = 0; j = g[q++];) j(T, p, c, d);
			  if (b) {
				if (0 < m) for (; M--;) T[M] || p[M] || (p[M] = Tc.call(r));
				p = Oa(p);
			  }
			  Ma.apply(r, p);
			  W && !b && 0 < p.length && 1 < m + g.length && ca.uniqueSort(r);
			}
			return W && (Da = C, Pa = t), T;
		  },
		  r = e ? oa(r) : r,
		  r = d(b, r);
		r.selector = b;
	  }
	  return r;
	}, gb = ca.select = function (b, c, d, g) {
	  var l,
		r,
		e,
		f,
		s,
		q = "function" == typeof b && b,
		j = !g && Na(b = q.selector || b);
	  if (d = d || [], 1 === j.length) {
		if (r = j[0] = j[0].slice(0), 2 < r.length && "ID" === (e = r[0]).type && 9 === c.nodeType && la && X.relative[r[1].type]) {
		  if (c = (X.find.ID(e.matches[0].replace(Ga, Ha), c) || [])[0], !c) return d;
		  q && (c = c.parentNode);
		  b = b.slice(r.shift().value.length);
		}
		for (l = Jb.needsContext.test(b) ? 0 : r.length; l-- && !(e = r[l], X.relative[f = e.type]);) if ((s = X.find[f]) && (g = s(e.matches[0].replace(Ga, Ha), Sb.test(r[0].type) && fb(c.parentNode) || c))) {
		  if (r.splice(l, 1), b = g.length && Ta(r), !b) return Ma.apply(d, g), d;
		  break;
		}
	  }
	  return (q || Za(b, j))(g, c, !la, d, !c || Sb.test(b) && fb(c.parentNode) || c), d;
	}, ea.sortStable = ia.split("").sort(Tb).join("") === ia, ea.detectDuplicates = !!Fa, wa(), ea.sortDetached = ra(function (b) {
	  return 1 & b.compareDocumentPosition(Z.createElement("fieldset"));
	}), ra(function (b) {
	  return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href");
	}) || ib("type|href|height|width", function (b, c, d) {
	  if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2);
	}), ea.attributes && ra(function (b) {
	  return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value");
	}) || ib("value", function (b, c, d) {
	  if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue;
	}), ra(function (b) {
	  return null == b.getAttribute("disabled");
	}) || ib("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (b, c, d) {
	  var g;
	  if (!d) return !0 === b[c] ? c.toLowerCase() : (g = b.getAttributeNode(c)) && g.specified ? g.value : null;
	}), ca);
	p.find = za;
	p.expr = za.selectors;
	p.expr[":"] = p.expr.pseudos;
	p.uniqueSort = p.unique = za.uniqueSort;
	p.text = za.getText;
	p.isXMLDoc = za.isXML;
	p.contains = za.contains;
	p.escapeSelector = za.escape;
	var kb = function (b, c, d) {
		for (var g = [], l = void 0 !== d; (b = b[c]) && 9 !== b.nodeType;) if (1 === b.nodeType) {
		  if (l && p(b).is(d)) break;
		  g.push(b);
		}
		return g;
	  },
	  jc = function (b, c) {
		for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
		return d;
	  },
	  kc = p.expr.match.needsContext,
	  lc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	  Gc = /^.[^:#\[\.,]*$/;
	p.filter = function (b, c, d) {
	  var g = c[0];
	  return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? p.find.matchesSelector(g, b) ? [g] : [] : p.find.matches(b, p.grep(c, function (b) {
		return 1 === b.nodeType;
	  }));
	};
	p.fn.extend({
	  find: function (b) {
		var c,
		  d,
		  g = this.length,
		  l = this;
		if ("string" != typeof b) return this.pushStack(p(b).filter(function () {
		  for (c = 0; c < g; c++) if (p.contains(l[c], this)) return !0;
		}));
		d = this.pushStack([]);
		for (c = 0; c < g; c++) p.find(b, l[c], d);
		return 1 < g ? p.uniqueSort(d) : d;
	  },
	  filter: function (b) {
		return this.pushStack(j(this, b || [], !1));
	  },
	  not: function (b) {
		return this.pushStack(j(this, b || [], !0));
	  },
	  is: function (b) {
		return !!j(this, "string" == typeof b && kc.test(b) ? p(b) : b || [], !1).length;
	  }
	});
	var mc,
	  cd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(p.fn.init = function (b, c, d) {
	  var g, l;
	  if (!b) return this;
	  if (d = d || mc, "string" == typeof b) {
		if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : cd.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
		if (g[1]) {
		  if (c = c instanceof p ? c[0] : c, p.merge(this, p.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), lc.test(g[1]) && p.isPlainObject(c)) for (g in c) p.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
		  return this;
		}
		return l = Y.getElementById(g[2]), l && (this[0] = l, this.length = 1), this;
	  }
	  return b.nodeType ? (this[0] = b, this.length = 1, this) : p.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(p) : p.makeArray(b, this);
	}).prototype = p.fn;
	mc = p(Y);
	var dd = /^(?:parents|prev(?:Until|All))/,
	  ed = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	  };
	p.fn.extend({
	  has: function (b) {
		var c = p(b, this),
		  d = c.length;
		return this.filter(function () {
		  for (var b = 0; b < d; b++) if (p.contains(this, c[b])) return !0;
		});
	  },
	  closest: function (b, c) {
		var d,
		  g = 0,
		  l = this.length,
		  r = [],
		  e = "string" != typeof b && p(b);
		if (!kc.test(b)) for (; g < l; g++) for (d = this[g]; d && d !== c; d = d.parentNode) if (11 > d.nodeType && (e ? -1 < e.index(d) : 1 === d.nodeType && p.find.matchesSelector(d, b))) {
		  r.push(d);
		  break;
		}
		return this.pushStack(1 < r.length ? p.uniqueSort(r) : r);
	  },
	  index: function (b) {
		return b ? "string" == typeof b ? Ja.call(p(b), this[0]) : Ja.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	  },
	  add: function (b, c) {
		return this.pushStack(p.uniqueSort(p.merge(this.get(), p(b, c))));
	  },
	  addBack: function (b) {
		return this.add(null == b ? this.prevObject : this.prevObject.filter(b));
	  }
	});
	p.each({
	  parent: function (b) {
		return (b = b.parentNode) && 11 !== b.nodeType ? b : null;
	  },
	  parents: function (b) {
		return kb(b, "parentNode");
	  },
	  parentsUntil: function (b, c, d) {
		return kb(b, "parentNode", d);
	  },
	  next: function (b) {
		return n(b, "nextSibling");
	  },
	  prev: function (b) {
		return n(b, "previousSibling");
	  },
	  nextAll: function (b) {
		return kb(b, "nextSibling");
	  },
	  prevAll: function (b) {
		return kb(b, "previousSibling");
	  },
	  nextUntil: function (b, c, d) {
		return kb(b, "nextSibling", d);
	  },
	  prevUntil: function (b, c, d) {
		return kb(b, "previousSibling", d);
	  },
	  siblings: function (b) {
		return jc((b.parentNode || {}).firstChild, b);
	  },
	  children: function (b) {
		return jc(b.firstChild);
	  },
	  contents: function (b) {
		return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), p.merge([], b.childNodes));
	  }
	}, function (b, c) {
	  p.fn[b] = function (d, g) {
		var l = p.map(this, c, d);
		return "Until" !== b.slice(-5) && (g = d), g && "string" == typeof g && (l = p.filter(g, l)), 1 < this.length && (ed[b] || p.uniqueSort(l), dd.test(b) && l.reverse()), this.pushStack(l);
	  };
	});
	var ta = /[^\x20\t\r\n\f]+/g;
	p.Callbacks = function (b) {
	  var c;
	  if ("string" == typeof b) {
		var d = {};
		c = (p.each(b.match(ta) || [], function (b, c) {
		  d[c] = !0;
		}), d);
	  } else c = p.extend({}, b);
	  b = c;
	  var g,
		l,
		r,
		e,
		f = [],
		s = [],
		q = -1,
		j = function () {
		  e = e || b.once;
		  for (r = g = !0; s.length; q = -1) for (l = s.shift(); ++q < f.length;) !1 === f[q].apply(l[0], l[1]) && b.stopOnFalse && (q = f.length, l = !1);
		  b.memory || (l = !1);
		  g = !1;
		  e && (f = l ? [] : "");
		},
		m = {
		  add: function () {
			return f && (l && !g && (q = f.length - 1, s.push(l)), function Mc(c) {
			  p.each(c, function (c, d) {
				p.isFunction(d) ? b.unique && m.has(d) || f.push(d) : d && d.length && "string" !== p.type(d) && Mc(d);
			  });
			}(arguments), l && !g && j()), this;
		  },
		  remove: function () {
			return p.each(arguments, function (b, c) {
			  for (var d; -1 < (d = p.inArray(c, f, d));) f.splice(d, 1), d <= q && q--;
			}), this;
		  },
		  has: function (b) {
			return b ? -1 < p.inArray(b, f) : 0 < f.length;
		  },
		  empty: function () {
			return f && (f = []), this;
		  },
		  disable: function () {
			return e = s = [], f = l = "", this;
		  },
		  disabled: function () {
			return !f;
		  },
		  lock: function () {
			return e = s = [], l || g || (f = l = ""), this;
		  },
		  locked: function () {
			return !!e;
		  },
		  fireWith: function (b, c) {
			return e || (c = c || [], c = [b, c.slice ? c.slice() : c], s.push(c), g || j()), this;
		  },
		  fire: function () {
			return m.fireWith(this, arguments), this;
		  },
		  fired: function () {
			return !!r;
		  }
		};
	  return m;
	};
	p.extend({
	  Deferred: function (c) {
		var d = [["notify", "progress", p.Callbacks("memory"), p.Callbacks("memory"), 2], ["resolve", "done", p.Callbacks("once memory"), p.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", p.Callbacks("once memory"), p.Callbacks("once memory"), 1, "rejected"]],
		  l = "pending",
		  r = {
			state: function () {
			  return l;
			},
			always: function () {
			  return e.done(arguments).fail(arguments), this;
			},
			"catch": function (b) {
			  return r.then(null, b);
			},
			pipe: function () {
			  var b = arguments;
			  return p.Deferred(function (c) {
				p.each(d, function (d, g) {
				  var l = p.isFunction(b[g[4]]) && b[g[4]];
				  e[g[1]](function () {
					var b = l && l.apply(this, arguments);
					b && p.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, l ? [b] : arguments);
				  });
				});
				b = null;
			  }).promise();
			},
			then: function (c, l, r) {
			  function e(c, d, l, r) {
				return function () {
				  var s = this,
					q = arguments,
					W = function () {
					  var b, W;
					  if (!(c < f)) {
						if (b = l.apply(s, q), b === d.promise()) throw new TypeError("Thenable self-resolution");
						W = b && ("object" == typeof b || "function" == typeof b) && b.then;
						p.isFunction(W) ? r ? W.call(b, e(f, d, m, r), e(f, d, g, r)) : (f++, W.call(b, e(f, d, m, r), e(f, d, g, r), e(f, d, m, d.notifyWith))) : (l !== m && (s = void 0, q = [b]), (r || d.resolveWith)(s, q));
					  }
					},
					j = r ? W : function () {
					  try {
						W();
					  } catch (b) {
						p.Deferred.exceptionHook && p.Deferred.exceptionHook(b, j.stackTrace), c + 1 >= f && (l !== g && (s = void 0, q = [b]), d.rejectWith(s, q));
					  }
					};
				  c ? j() : (p.Deferred.getStackHook && (j.stackTrace = p.Deferred.getStackHook()), b.setTimeout(j));
				};
			  }
			  var f = 0;
			  return p.Deferred(function (b) {
				d[0][3].add(e(0, b, p.isFunction(r) ? r : m, b.notifyWith));
				d[1][3].add(e(0, b, p.isFunction(c) ? c : m));
				d[2][3].add(e(0, b, p.isFunction(l) ? l : g));
			  }).promise();
			},
			promise: function (b) {
			  return null != b ? p.extend(b, r) : r;
			}
		  },
		  e = {};
		return p.each(d, function (b, c) {
		  var g = c[2],
			f = c[5];
		  r[c[1]] = g.add;
		  f && g.add(function () {
			l = f;
		  }, d[3 - b][2].disable, d[0][2].lock);
		  g.add(c[3].fire);
		  e[c[0]] = function () {
			return e[c[0] + "With"](this === e ? void 0 : this, arguments), this;
		  };
		  e[c[0] + "With"] = g.fireWith;
		}), r.promise(e), c && c.call(e, e), e;
	  },
	  when: function (b) {
		var c = arguments.length,
		  d = c,
		  g = Array(d),
		  l = ya.call(arguments),
		  r = p.Deferred(),
		  e = function (b) {
			return function (d) {
			  g[b] = this;
			  l[b] = 1 < arguments.length ? ya.call(arguments) : d;
			  --c || r.resolveWith(g, l);
			};
		  };
		if (1 >= c && (t(b, r.done(e(d)).resolve, r.reject, !c), "pending" === r.state() || p.isFunction(l[d] && l[d].then))) return r.then();
		for (; d--;) t(l[d], e(d), r.reject);
		return r.promise();
	  }
	});
	var fd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	p.Deferred.exceptionHook = function (c, d) {
	  b.console && b.console.warn && c && fd.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d);
	};
	p.readyException = function (c) {
	  b.setTimeout(function () {
		throw c;
	  });
	};
	var Ub = p.Deferred();
	p.fn.ready = function (b) {
	  return Ub.then(b)["catch"](function (b) {
		p.readyException(b);
	  }), this;
	};
	p.extend({
	  isReady: !1,
	  readyWait: 1,
	  ready: function (b) {
		(!0 === b ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== b && 0 < --p.readyWait || Ub.resolveWith(Y, [p]));
	  }
	});
	p.ready.then = Ub.then;
	"complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? b.setTimeout(p.ready) : (Y.addEventListener("DOMContentLoaded", y), b.addEventListener("load", y));
	var Ia = function (b, c, d, g, l, r, e) {
		var f = 0,
		  s = b.length,
		  q = null == d;
		if ("object" === p.type(d)) for (f in l = !0, d) Ia(b, c, f, d[f], !0, r, e);else if (void 0 !== g && (l = !0, p.isFunction(g) || (e = !0), q && (e ? (c.call(b, g), c = null) : (q = c, c = function (b, c, d) {
		  return q.call(p(b), d);
		})), c)) for (; f < s; f++) c(b[f], d, e ? g : g.call(b[f], f, c(b[f], d)));
		return l ? b : q ? c.call(b) : s ? c(b[0], d) : r;
	  },
	  Kb = function (b) {
		return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType;
	  };
	z.uid = 1;
	z.prototype = {
	  cache: function (b) {
		var c = b[this.expando];
		return c || (c = {}, Kb(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
		  value: c,
		  configurable: !0
		}))), c;
	  },
	  set: function (b, c, d) {
		var g;
		b = this.cache(b);
		if ("string" == typeof c) b[p.camelCase(c)] = d;else for (g in c) b[p.camelCase(g)] = c[g];
		return b;
	  },
	  get: function (b, c) {
		return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][p.camelCase(c)];
	  },
	  access: function (b, c, d) {
		return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c);
	  },
	  remove: function (b, c) {
		var d,
		  g = b[this.expando];
		if (void 0 !== g) {
		  if (void 0 !== c) {
			Array.isArray(c) ? c = c.map(p.camelCase) : (c = p.camelCase(c), c = c in g ? [c] : c.match(ta) || []);
			for (d = c.length; d--;) delete g[c[d]];
		  }
		  (void 0 === c || p.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando]);
		}
	  },
	  hasData: function (b) {
		b = b[this.expando];
		return void 0 !== b && !p.isEmptyObject(b);
	  }
	};
	var S = new z(),
	  pa = new z(),
	  Ic = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	  Hc = /[A-Z]/g;
	p.extend({
	  hasData: function (b) {
		return pa.hasData(b) || S.hasData(b);
	  },
	  data: function (b, c, d) {
		return pa.access(b, c, d);
	  },
	  removeData: function (b, c) {
		pa.remove(b, c);
	  },
	  _data: function (b, c, d) {
		return S.access(b, c, d);
	  },
	  _removeData: function (b, c) {
		S.remove(b, c);
	  }
	});
	p.fn.extend({
	  data: function (b, c) {
		var d,
		  g,
		  l,
		  r = this[0],
		  e = r && r.attributes;
		if (void 0 === b) {
		  if (this.length && (l = pa.get(r), 1 === r.nodeType && !S.get(r, "hasDataAttrs"))) {
			for (d = e.length; d--;) e[d] && (g = e[d].name, 0 === g.indexOf("data-") && (g = p.camelCase(g.slice(5)), A(r, g, l[g])));
			S.set(r, "hasDataAttrs", !0);
		  }
		  return l;
		}
		return "object" == typeof b ? this.each(function () {
		  pa.set(this, b);
		}) : Ia(this, function (c) {
		  var d;
		  if (r && void 0 === c) {
			if ((d = pa.get(r, b), void 0 !== d) || (d = A(r, b), void 0 !== d)) return d;
		  } else this.each(function () {
			pa.set(this, b, c);
		  });
		}, null, c, 1 < arguments.length, null, !0);
	  },
	  removeData: function (b) {
		return this.each(function () {
		  pa.remove(this, b);
		});
	  }
	});
	p.extend({
	  queue: function (b, c, d) {
		var g;
		if (b) return c = (c || "fx") + "queue", g = S.get(b, c), d && (!g || Array.isArray(d) ? g = S.access(b, c, p.makeArray(d)) : g.push(d)), g || [];
	  },
	  dequeue: function (b, c) {
		c = c || "fx";
		var d = p.queue(b, c),
		  g = d.length,
		  l = d.shift(),
		  r = p._queueHooks(b, c),
		  e = function () {
			p.dequeue(b, c);
		  };
		"inprogress" === l && (l = d.shift(), g--);
		l && ("fx" === c && d.unshift("inprogress"), delete r.stop, l.call(b, e, r));
		!g && r && r.empty.fire();
	  },
	  _queueHooks: function (b, c) {
		var d = c + "queueHooks";
		return S.get(b, d) || S.access(b, d, {
		  empty: p.Callbacks("once memory").add(function () {
			S.remove(b, [c + "queue", d]);
		  })
		});
	  }
	});
	p.fn.extend({
	  queue: function (b, c) {
		var d = 2;
		return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? p.queue(this[0], b) : void 0 === c ? this : this.each(function () {
		  var d = p.queue(this, b, c);
		  p._queueHooks(this, b);
		  "fx" === b && "inprogress" !== d[0] && p.dequeue(this, b);
		});
	  },
	  dequeue: function (b) {
		return this.each(function () {
		  p.dequeue(this, b);
		});
	  },
	  clearQueue: function (b) {
		return this.queue(b || "fx", []);
	  },
	  promise: function (b, c) {
		var d,
		  g = 1,
		  l = p.Deferred(),
		  r = this,
		  e = this.length,
		  f = function () {
			--g || l.resolveWith(r, [r]);
		  };
		"string" != typeof b && (c = b, b = void 0);
		for (b = b || "fx"; e--;) (d = S.get(r[e], b + "queueHooks")) && d.empty && (g++, d.empty.add(f));
		return f(), l.promise(c);
	  }
	});
	var nc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	  mb = RegExp("^(?:([+-])=|)(" + nc + ")([a-z%]*)$", "i"),
	  Sa = ["Top", "Right", "Bottom", "Left"],
	  Ab = function (b, c) {
		return b = c || b, "none" === b.style.display || "" === b.style.display && p.contains(b.ownerDocument, b) && "none" === p.css(b, "display");
	  },
	  oc = function (b, c, d, g) {
		var l,
		  r = {};
		for (l in c) r[l] = b.style[l], b.style[l] = c[l];
		d = d.apply(b, g || []);
		for (l in c) b.style[l] = r[l];
		return d;
	  },
	  Yb = {};
	p.fn.extend({
	  show: function () {
		return D(this, !0);
	  },
	  hide: function () {
		return D(this);
	  },
	  toggle: function (b) {
		return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function () {
		  Ab(this) ? p(this).show() : p(this).hide();
		});
	  }
	});
	var pc = /^(?:checkbox|radio)$/i,
	  Zb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	  $b = /^$|\/(?:java|ecma)script/i,
	  sa = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	  };
	sa.optgroup = sa.option;
	sa.tbody = sa.tfoot = sa.colgroup = sa.caption = sa.thead;
	sa.th = sa.td;
	var Jc = /<|&#?\w+;/,
	  Lb = Y.createDocumentFragment().appendChild(Y.createElement("div")),
	  Mb = Y.createElement("input");
	Mb.setAttribute("type", "radio");
	Mb.setAttribute("checked", "checked");
	Mb.setAttribute("name", "t");
	Lb.appendChild(Mb);
	da.checkClone = Lb.cloneNode(!0).cloneNode(!0).lastChild.checked;
	Lb.innerHTML = "<textarea>x</textarea>";
	da.noCloneChecked = !!Lb.cloneNode(!0).lastChild.defaultValue;
	!0;
	var Nb = Y.documentElement,
	  gd = /^key/,
	  hd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	  qc = /^([^.]*)(?:\.(.+)|)/;
	p.event = {
	  global: {},
	  add: function (b, c, d, g, l) {
		var r, e, f, s, q, j, m, M, t, x;
		if (q = S.get(b)) {
		  d.handler && (r = d, d = r.handler, l = r.selector);
		  l && p.find.matchesSelector(Nb, l);
		  d.guid || (d.guid = p.guid++);
		  (s = q.events) || (s = q.events = {});
		  (e = q.handle) || (e = q.handle = function (c) {
			return "undefined" != typeof p && p.event.triggered !== c.type ? p.event.dispatch.apply(b, arguments) : void 0;
		  });
		  c = (c || "").match(ta) || [""];
		  for (q = c.length; q--;) f = qc.exec(c[q]) || [], t = x = f[1], f = (f[2] || "").split(".").sort(), t && (m = p.event.special[t] || {}, t = (l ? m.delegateType : m.bindType) || t, m = p.event.special[t] || {}, j = p.extend({
			type: t,
			origType: x,
			data: g,
			handler: d,
			guid: d.guid,
			selector: l,
			needsContext: l && p.expr.match.needsContext.test(l),
			namespace: f.join(".")
		  }, r), (M = s[t]) || (M = s[t] = [], M.delegateCount = 0, m.setup && !1 !== m.setup.call(b, g, f, e) || b.addEventListener && b.addEventListener(t, e)), m.add && (m.add.call(b, j), j.handler.guid || (j.handler.guid = d.guid)), l ? M.splice(M.delegateCount++, 0, j) : M.push(j), p.event.global[t] = !0);
		}
	  },
	  remove: function (b, c, d, g, l) {
		var r,
		  e,
		  f,
		  s,
		  q,
		  j,
		  m,
		  M,
		  t,
		  x,
		  C,
		  V = S.hasData(b) && S.get(b);
		if (V && (s = V.events)) {
		  c = (c || "").match(ta) || [""];
		  for (q = c.length; q--;) if (f = qc.exec(c[q]) || [], t = C = f[1], x = (f[2] || "").split(".").sort(), t) {
			m = p.event.special[t] || {};
			t = (g ? m.delegateType : m.bindType) || t;
			M = s[t] || [];
			f = f[2] && RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)");
			for (e = r = M.length; r--;) j = M[r], !l && C !== j.origType || d && d.guid !== j.guid || f && !f.test(j.namespace) || g && g !== j.selector && ("**" !== g || !j.selector) || (M.splice(r, 1), j.selector && M.delegateCount--, m.remove && m.remove.call(b, j));
			e && !M.length && (m.teardown && !1 !== m.teardown.call(b, x, V.handle) || p.removeEvent(b, t, V.handle), delete s[t]);
		  } else for (t in s) p.event.remove(b, t + c[q], d, g, !0);
		  p.isEmptyObject(s) && S.remove(b, "handle events");
		}
	  },
	  dispatch: function (b) {
		var c = p.event.fix(b),
		  d,
		  g,
		  l,
		  r,
		  e,
		  f,
		  s = Array(arguments.length);
		g = (S.get(this, "events") || {})[c.type] || [];
		var q = p.event.special[c.type] || {};
		s[0] = c;
		for (d = 1; d < arguments.length; d++) s[d] = arguments[d];
		if (c.delegateTarget = this, !q.preDispatch || !1 !== q.preDispatch.call(this, c)) {
		  f = p.event.handlers.call(this, c, g);
		  for (d = 0; (r = f[d++]) && !c.isPropagationStopped();) {
			c.currentTarget = r.elem;
			for (g = 0; (e = r.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(e.namespace) || (c.handleObj = e, c.data = e.data, l = ((p.event.special[e.origType] || {}).handle || e.handler).apply(r.elem, s), void 0 !== l && !1 === (c.result = l) && (c.preventDefault(), c.stopPropagation()));
		  }
		  return q.postDispatch && q.postDispatch.call(this, c), c.result;
		}
	  },
	  handlers: function (b, c) {
		var d,
		  g,
		  l,
		  r,
		  e,
		  f = [],
		  s = c.delegateCount,
		  q = b.target;
		if (s && q.nodeType && !("click" === b.type && 1 <= b.button)) for (; q !== this; q = q.parentNode || this) if (1 === q.nodeType && ("click" !== b.type || !0 !== q.disabled)) {
		  r = [];
		  e = {};
		  for (d = 0; d < s; d++) g = c[d], l = g.selector + " ", void 0 === e[l] && (e[l] = g.needsContext ? -1 < p(l, this).index(q) : p.find(l, this, null, [q]).length), e[l] && r.push(g);
		  r.length && f.push({
			elem: q,
			handlers: r
		  });
		}
		return q = this, s < c.length && f.push({
		  elem: q,
		  handlers: c.slice(s)
		}), f;
	  },
	  addProp: function (b, c) {
		Object.defineProperty(p.Event.prototype, b, {
		  enumerable: !0,
		  configurable: !0,
		  get: p.isFunction(c) ? function () {
			if (this.originalEvent) return c(this.originalEvent);
		  } : function () {
			if (this.originalEvent) return this.originalEvent[b];
		  },
		  set: function (c) {
			Object.defineProperty(this, b, {
			  enumerable: !0,
			  configurable: !0,
			  writable: !0,
			  value: c
			});
		  }
		});
	  },
	  fix: function (b) {
		return b[p.expando] ? b : new p.Event(b);
	  },
	  special: {
		load: {
		  noBubble: !0
		},
		focus: {
		  trigger: function () {
			if (this !== N() && this.focus) return this.focus(), !1;
		  },
		  delegateType: "focusin"
		},
		blur: {
		  trigger: function () {
			if (this === N() && this.blur) return this.blur(), !1;
		  },
		  delegateType: "focusout"
		},
		click: {
		  trigger: function () {
			if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1;
		  },
		  _default: function (b) {
			return f(b.target, "a");
		  }
		},
		beforeunload: {
		  postDispatch: function (b) {
			void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result);
		  }
		}
	  }
	};
	p.removeEvent = function (b, c, d) {
	  b.removeEventListener && b.removeEventListener(c, d);
	};
	p.Event = function (b, c) {
	  return this instanceof p.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? K : L, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && p.extend(this, c), this.timeStamp = b && b.timeStamp || p.now(), void (this[p.expando] = !0)) : new p.Event(b, c);
	};
	p.Event.prototype = {
	  constructor: p.Event,
	  isDefaultPrevented: L,
	  isPropagationStopped: L,
	  isImmediatePropagationStopped: L,
	  isSimulated: !1,
	  preventDefault: function () {
		var b = this.originalEvent;
		this.isDefaultPrevented = K;
		b && !this.isSimulated && b.preventDefault();
	  },
	  stopPropagation: function () {
		var b = this.originalEvent;
		this.isPropagationStopped = K;
		b && !this.isSimulated && b.stopPropagation();
	  },
	  stopImmediatePropagation: function () {
		var b = this.originalEvent;
		this.isImmediatePropagationStopped = K;
		b && !this.isSimulated && b.stopImmediatePropagation();
		this.stopPropagation();
	  }
	};
	p.each({
	  altKey: !0,
	  bubbles: !0,
	  cancelable: !0,
	  changedTouches: !0,
	  ctrlKey: !0,
	  detail: !0,
	  eventPhase: !0,
	  metaKey: !0,
	  pageX: !0,
	  pageY: !0,
	  shiftKey: !0,
	  view: !0,
	  "char": !0,
	  charCode: !0,
	  key: !0,
	  keyCode: !0,
	  button: !0,
	  buttons: !0,
	  clientX: !0,
	  clientY: !0,
	  offsetX: !0,
	  offsetY: !0,
	  pointerId: !0,
	  pointerType: !0,
	  screenX: !0,
	  screenY: !0,
	  targetTouches: !0,
	  toElement: !0,
	  touches: !0,
	  which: function (b) {
		var c = b.button;
		return null == b.which && gd.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && hd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which;
	  }
	}, p.event.addProp);
	p.each({
	  mouseenter: "mouseover",
	  mouseleave: "mouseout",
	  pointerenter: "pointerover",
	  pointerleave: "pointerout"
	}, function (b, c) {
	  p.event.special[b] = {
		delegateType: c,
		bindType: c,
		handle: function (b) {
		  var d,
			g = b.relatedTarget,
			l = b.handleObj;
		  return g && (g === this || p.contains(this, g)) || (b.type = l.origType, d = l.handler.apply(this, arguments), b.type = c), d;
		}
	  };
	});
	p.fn.extend({
	  on: function (b, c, d, g) {
		return Q(this, b, c, d, g);
	  },
	  one: function (b, c, d, g) {
		return Q(this, b, c, d, g, 1);
	  },
	  off: function (b, c, d) {
		var g, l;
		if (b && b.preventDefault && b.handleObj) return g = b.handleObj, p(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
		if ("object" == typeof b) {
		  for (l in b) this.off(l, c, b[l]);
		  return this;
		}
		return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = L), this.each(function () {
		  p.event.remove(this, b, d, c);
		});
	  }
	});
	var id = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	  jd = /<script|<style|<link/i,
	  Lc = /checked\s*(?:[^=]|=\s*.checked.)/i,
	  Kc = /^true\/(.*)/,
	  Nc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	p.extend({
	  htmlPrefilter: function (b) {
		return b.replace(id, "<$1></$2>");
	  },
	  clone: function (b, c, d) {
		var g,
		  l,
		  r,
		  e,
		  f = b.cloneNode(!0),
		  q = p.contains(b.ownerDocument, b);
		if (!da.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || p.isXMLDoc(b))) {
		  e = E(f);
		  r = E(b);
		  g = 0;
		  for (l = r.length; g < l; g++) {
			var s = r[g],
			  j = e[g],
			  m = j.nodeName.toLowerCase();
			"input" === m && pc.test(s.type) ? j.checked = s.checked : "input" !== m && "textarea" !== m || (j.defaultValue = s.defaultValue);
		  }
		}
		if (c) if (d) {
		  r = r || E(b);
		  e = e || E(f);
		  g = 0;
		  for (l = r.length; g < l; g++) P(r[g], e[g]);
		} else P(b, f);
		return e = E(f, "script"), 0 < e.length && u(e, !q && E(b, "script")), f;
	  },
	  cleanData: function (b) {
		for (var c, d, g, l = p.event.special, r = 0; void 0 !== (d = b[r]); r++) if (Kb(d)) {
		  if (c = d[S.expando]) {
			if (c.events) for (g in c.events) l[g] ? p.event.remove(d, g) : p.removeEvent(d, g, c.handle);
			d[S.expando] = void 0;
		  }
		  d[pa.expando] && (d[pa.expando] = void 0);
		}
	  }
	});
	p.fn.extend({
	  detach: function (b) {
		return U(this, b, !0);
	  },
	  remove: function (b) {
		return U(this, b);
	  },
	  text: function (b) {
		return Ia(this, function (b) {
		  return void 0 === b ? p.text(this) : this.empty().each(function () {
			1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b);
		  });
		}, null, b, arguments.length);
	  },
	  append: function () {
		return ba(this, arguments, function (b) {
		  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && I(this, b).appendChild(b);
		});
	  },
	  prepend: function () {
		return ba(this, arguments, function (b) {
		  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
			var c = I(this, b);
			c.insertBefore(b, c.firstChild);
		  }
		});
	  },
	  before: function () {
		return ba(this, arguments, function (b) {
		  this.parentNode && this.parentNode.insertBefore(b, this);
		});
	  },
	  after: function () {
		return ba(this, arguments, function (b) {
		  this.parentNode && this.parentNode.insertBefore(b, this.nextSibling);
		});
	  },
	  empty: function () {
		for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (p.cleanData(E(b, !1)), b.textContent = "");
		return this;
	  },
	  clone: function (b, c) {
		return b = null != b && b, c = null == c ? b : c, this.map(function () {
		  return p.clone(this, b, c);
		});
	  },
	  html: function (b) {
		return Ia(this, function (b) {
		  var c = this[0] || {},
			d = 0,
			g = this.length;
		  if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
		  if ("string" == typeof b && !jd.test(b) && !sa[(Zb.exec(b) || ["", ""])[1].toLowerCase()]) {
			b = p.htmlPrefilter(b);
			try {
			  for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (p.cleanData(E(c, !1)), c.innerHTML = b);
			  c = 0;
			} catch (l) {}
		  }
		  c && this.empty().append(b);
		}, null, b, arguments.length);
	  },
	  replaceWith: function () {
		var b = [];
		return ba(this, arguments, function (c) {
		  var d = this.parentNode;
		  0 > p.inArray(this, b) && (p.cleanData(E(this)), d && d.replaceChild(c, this));
		}, b);
	  }
	});
	p.each({
	  appendTo: "append",
	  prependTo: "prepend",
	  insertBefore: "before",
	  insertAfter: "after",
	  replaceAll: "replaceWith"
	}, function (b, c) {
	  p.fn[b] = function (b) {
		for (var d = [], g = p(b), l = g.length - 1, r = 0; r <= l; r++) b = r === l ? this : this.clone(!0), p(g[r])[c](b), cb.apply(d, b.get());
		return this.pushStack(d);
	  };
	});
	var ac = /^margin/,
	  Qb = RegExp("^(" + nc + ")(?!px)[a-z%]+$", "i"),
	  Bb = function (c) {
		var d = c.ownerDocument.defaultView;
		return d && d.opener || (d = b), d.getComputedStyle(c);
	  },
	  Pb = function () {
		if (Ba) {
		  Ba.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
		  Ba.innerHTML = "";
		  Nb.appendChild(Ob);
		  var c = b.getComputedStyle(Ba);
		  rc = "1%" !== c.top;
		  sc = "2px" === c.marginLeft;
		  tc = "4px" === c.width;
		  Ba.style.marginRight = "50%";
		  uc = "4px" === c.marginRight;
		  Nb.removeChild(Ob);
		  Ba = null;
		}
	  },
	  rc,
	  tc,
	  uc,
	  sc,
	  Ob = Y.createElement("div"),
	  Ba = Y.createElement("div");
	Ba.style && (Ba.style.backgroundClip = "content-box", Ba.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === Ba.style.backgroundClip, Ob.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Ob.appendChild(Ba), p.extend(da, {
	  pixelPosition: function () {
		return Pb(), rc;
	  },
	  boxSizingReliable: function () {
		return Pb(), tc;
	  },
	  pixelMarginRight: function () {
		return Pb(), uc;
	  },
	  reliableMarginLeft: function () {
		return Pb(), sc;
	  }
	}));
	!0;
	var kd = /^(none|table(?!-c[ea]).+)/,
	  vc = /^--/,
	  ld = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	  },
	  wc = {
		letterSpacing: "0",
		fontWeight: "400"
	  },
	  cc = ["Webkit", "Moz", "ms"],
	  bc = Y.createElement("div").style;
	p.extend({
	  cssHooks: {
		opacity: {
		  get: function (b, c) {
			if (c) {
			  var d = s(b, "opacity");
			  return "" === d ? "1" : d;
			}
		  }
		}
	  },
	  cssNumber: {
		animationIterationCount: !0,
		columnCount: !0,
		fillOpacity: !0,
		flexGrow: !0,
		flexShrink: !0,
		fontWeight: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0
	  },
	  cssProps: {
		"float": "cssFloat"
	  },
	  style: function (b, c, d, g) {
		if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
		  var l,
			r,
			e,
			f = p.camelCase(c),
			q = vc.test(c),
			s = b.style;
		  return q || (c = G(f)), e = p.cssHooks[c] || p.cssHooks[f], void 0 === d ? e && "get" in e && void 0 !== (l = e.get(b, !1, g)) ? l : s[c] : (r = typeof d, "string" === r && (l = mb.exec(d)) && l[1] && (d = B(b, c, l), r = "number"), null != d && d === d && ("number" === r && (d += l && l[3] || (p.cssNumber[f] ? "" : "px")), da.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (s[c] = "inherit"), e && "set" in e && void 0 === (d = e.set(b, d, g)) || (q ? s.setProperty(c, d) : s[c] = d)), void 0);
		}
	  },
	  css: function (b, c, d, g) {
		var l,
		  r,
		  e,
		  f = p.camelCase(c);
		return vc.test(c) || (c = G(f)), e = p.cssHooks[c] || p.cssHooks[f], e && "get" in e && (l = e.get(b, !0, d)), void 0 === l && (l = s(b, c, g)), "normal" === l && c in wc && (l = wc[c]), "" === d || d ? (r = parseFloat(l), !0 === d || isFinite(r) ? r || 0 : l) : l;
	  }
	});
	p.each(["height", "width"], function (b, c) {
	  p.cssHooks[c] = {
		get: function (b, d, g) {
		  if (d) return !kd.test(p.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? aa(b, c, g) : oc(b, ld, function () {
			return aa(b, c, g);
		  });
		},
		set: function (b, d, g) {
		  var l,
			r = g && Bb(b);
		  g = g && H(b, c, g, "border-box" === p.css(b, "boxSizing", !1, r), r);
		  return g && (l = mb.exec(d)) && "px" !== (l[3] || "px") && (b.style[c] = d, d = p.css(b, c)), C(b, d, g);
		}
	  };
	});
	p.cssHooks.marginLeft = x(da.reliableMarginLeft, function (b, c) {
	  if (c) return (parseFloat(s(b, "marginLeft")) || b.getBoundingClientRect().left - oc(b, {
		marginLeft: 0
	  }, function () {
		return b.getBoundingClientRect().left;
	  })) + "px";
	});
	p.each({
	  margin: "",
	  padding: "",
	  border: "Width"
	}, function (b, c) {
	  p.cssHooks[b + c] = {
		expand: function (d) {
		  var g = 0,
			l = {};
		  for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) l[b + Sa[g] + c] = d[g] || d[g - 2] || d[0];
		  return l;
		}
	  };
	  ac.test(b) || (p.cssHooks[b + c].set = C);
	});
	p.fn.extend({
	  css: function (b, c) {
		return Ia(this, function (b, c, d) {
		  var g,
			l = {},
			r = 0;
		  if (Array.isArray(c)) {
			d = Bb(b);
			for (g = c.length; r < g; r++) l[c[r]] = p.css(b, c[r], !1, d);
			return l;
		  }
		  return void 0 !== d ? p.style(b, c, d) : p.css(b, c);
		}, b, c, 1 < arguments.length);
	  }
	});
	p.Tween = R;
	R.prototype = {
	  constructor: R,
	  init: function (b, c, d, g, l, r) {
		this.elem = b;
		this.prop = d;
		this.easing = l || p.easing._default;
		this.options = c;
		this.start = this.now = this.cur();
		this.end = g;
		this.unit = r || (p.cssNumber[d] ? "" : "px");
	  },
	  cur: function () {
		var b = R.propHooks[this.prop];
		return b && b.get ? b.get(this) : R.propHooks._default.get(this);
	  },
	  run: function (b) {
		var c,
		  d = R.propHooks[this.prop];
		return this.options.duration ? this.pos = c = p.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this;
	  }
	};
	R.prototype.init.prototype = R.prototype;
	R.propHooks = {
	  _default: {
		get: function (b) {
		  var c;
		  return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = p.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0);
		},
		set: function (b) {
		  p.fx.step[b.prop] ? p.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[p.cssProps[b.prop]] && !p.cssHooks[b.prop] ? b.elem[b.prop] = b.now : p.style(b.elem, b.prop, b.now + b.unit);
		}
	  }
	};
	R.propHooks.scrollTop = R.propHooks.scrollLeft = {
	  set: function (b) {
		b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now);
	  }
	};
	p.easing = {
	  linear: function (b) {
		return b;
	  },
	  swing: function (b) {
		return 0.5 - Math.cos(b * Math.PI) / 2;
	  },
	  _default: "swing"
	};
	p.fx = R.prototype.init;
	p.fx.step = {};
	var bb,
	  Cb,
	  md = /^(?:toggle|show|hide)$/,
	  nd = /queueHooks$/;
	p.Animation = p.extend(M, {
	  tweeners: {
		"*": [function (b, c) {
		  var d = this.createTween(b, c);
		  return B(d.elem, b, mb.exec(c), d), d;
		}]
	  },
	  tweener: function (b, c) {
		p.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(ta);
		for (var d, g = 0, l = b.length; g < l; g++) d = b[g], M.tweeners[d] = M.tweeners[d] || [], M.tweeners[d].unshift(c);
	  },
	  prefilters: [function (b, c, d) {
		var g,
		  l,
		  e,
		  f,
		  q,
		  s,
		  j,
		  m,
		  M = "width" in c || "height" in c,
		  t = this,
		  x = {},
		  C = b.style,
		  V = b.nodeType && Ab(b),
		  J = S.get(b, "fxshow");
		d.queue || (f = p._queueHooks(b, "fx"), null == f.unqueued && (f.unqueued = 0, q = f.empty.fire, f.empty.fire = function () {
		  f.unqueued || q();
		}), f.unqueued++, t.always(function () {
		  t.always(function () {
			f.unqueued--;
			p.queue(b, "fx").length || f.empty.fire();
		  });
		}));
		for (g in c) if (l = c[g], md.test(l)) {
		  if (delete c[g], e = e || "toggle" === l, l === (V ? "hide" : "show")) {
			if ("show" !== l || !J || void 0 === J[g]) continue;
			V = !0;
		  }
		  x[g] = J && J[g] || p.style(b, g);
		}
		if (s = !p.isEmptyObject(c), s || !p.isEmptyObject(x)) for (g in M && 1 === b.nodeType && (d.overflow = [C.overflow, C.overflowX, C.overflowY], j = J && J.display, null == j && (j = S.get(b, "display")), m = p.css(b, "display"), "none" === m && (j ? m = j : (D([b], !0), j = b.style.display || j, m = p.css(b, "display"), D([b]))), ("inline" === m || "inline-block" === m && null != j) && "none" === p.css(b, "float") && (s || (t.done(function () {
		  C.display = j;
		}), null == j && (m = C.display, j = "none" === m ? "" : m)), C.display = "inline-block")), d.overflow && (C.overflow = "hidden", t.always(function () {
		  C.overflow = d.overflow[0];
		  C.overflowX = d.overflow[1];
		  C.overflowY = d.overflow[2];
		})), s = !1, x) s || (J ? "hidden" in J && (V = J.hidden) : J = S.access(b, "fxshow", {
		  display: j
		}), e && (J.hidden = !V), V && D([b], !0), t.done(function () {
		  V || D([b]);
		  S.remove(b, "fxshow");
		  for (g in x) p.style(b, g, x[g]);
		})), s = r(V ? J[g] : 0, g, t), g in J || (J[g] = s.start, V && (s.end = s.start, s.start = 0));
	  }],
	  prefilter: function (b, c) {
		c ? M.prefilters.unshift(b) : M.prefilters.push(b);
	  }
	});
	p.speed = function (b, c, d) {
	  var g = b && "object" == typeof b ? p.extend({}, b) : {
		complete: d || !d && c || p.isFunction(b) && b,
		duration: b,
		easing: d && c || c && !p.isFunction(c) && c
	  };
	  return p.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in p.fx.speeds ? g.duration = p.fx.speeds[g.duration] : g.duration = p.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue = "fx"), g.old = g.complete, g.complete = function () {
		p.isFunction(g.old) && g.old.call(this);
		g.queue && p.dequeue(this, g.queue);
	  }, g;
	};
	p.fn.extend({
	  fadeTo: function (b, c, d, g) {
		return this.filter(Ab).css("opacity", 0).show().end().animate({
		  opacity: c
		}, b, d, g);
	  },
	  animate: function (b, c, d, g) {
		var l = p.isEmptyObject(b),
		  r = p.speed(c, d, g);
		c = function () {
		  var c = M(this, p.extend({}, b), r);
		  (l || S.get(this, "finish")) && c.stop(!0);
		};
		return c.finish = c, l || !1 === r.queue ? this.each(c) : this.queue(r.queue, c);
	  },
	  stop: function (b, c, d) {
		var g = function (b) {
		  var c = b.stop;
		  delete b.stop;
		  c(d);
		};
		return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function () {
		  var c = !0,
			l = null != b && b + "queueHooks",
			r = p.timers,
			e = S.get(this);
		  if (l) e[l] && e[l].stop && g(e[l]);else for (l in e) e[l] && e[l].stop && nd.test(l) && g(e[l]);
		  for (l = r.length; l--;) r[l].elem !== this || null != b && r[l].queue !== b || (r[l].anim.stop(d), c = !1, r.splice(l, 1));
		  !c && d || p.dequeue(this, b);
		});
	  },
	  finish: function (b) {
		return !1 !== b && (b = b || "fx"), this.each(function () {
		  var c,
			d = S.get(this),
			g = d[b + "queue"];
		  c = d[b + "queueHooks"];
		  var l = p.timers,
			r = g ? g.length : 0;
		  d.finish = !0;
		  p.queue(this, b, []);
		  c && c.stop && c.stop.call(this, !0);
		  for (c = l.length; c--;) l[c].elem === this && l[c].queue === b && (l[c].anim.stop(!0), l.splice(c, 1));
		  for (c = 0; c < r; c++) g[c] && g[c].finish && g[c].finish.call(this);
		  delete d.finish;
		});
	  }
	});
	p.each(["toggle", "show", "hide"], function (b, c) {
	  var d = p.fn[c];
	  p.fn[c] = function (b, g, l) {
		return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(J(c, !0), b, g, l);
	  };
	});
	p.each({
	  slideDown: J("show"),
	  slideUp: J("hide"),
	  slideToggle: J("toggle"),
	  fadeIn: {
		opacity: "show"
	  },
	  fadeOut: {
		opacity: "hide"
	  },
	  fadeToggle: {
		opacity: "toggle"
	  }
	}, function (b, c) {
	  p.fn[b] = function (b, d, g) {
		return this.animate(c, b, d, g);
	  };
	});
	p.timers = [];
	p.fx.tick = function () {
	  var b,
		c = 0,
		d = p.timers;
	  for (bb = p.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
	  d.length || p.fx.stop();
	  bb = void 0;
	};
	p.fx.timer = function (b) {
	  p.timers.push(b);
	  p.fx.start();
	};
	p.fx.interval = 13;
	p.fx.start = function () {
	  Cb || (Cb = !0, l());
	};
	p.fx.stop = function () {
	  Cb = null;
	};
	p.fx.speeds = {
	  slow: 600,
	  fast: 200,
	  _default: 400
	};
	p.fn.delay = function (c, d) {
	  return c = p.fx ? p.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function (d, g) {
		var l = b.setTimeout(d, c);
		g.stop = function () {
		  b.clearTimeout(l);
		};
	  });
	};
	var lb = Y.createElement("input"),
	  od = Y.createElement("select").appendChild(Y.createElement("option"));
	lb.type = "checkbox";
	da.checkOn = "" !== lb.value;
	da.optSelected = od.selected;
	lb = Y.createElement("input");
	lb.value = "t";
	lb.type = "radio";
	da.radioValue = "t" === lb.value;
	var xc,
	  xb = p.expr.attrHandle;
	p.fn.extend({
	  attr: function (b, c) {
		return Ia(this, p.attr, b, c, 1 < arguments.length);
	  },
	  removeAttr: function (b) {
		return this.each(function () {
		  p.removeAttr(this, b);
		});
	  }
	});
	p.extend({
	  attr: function (b, c, d) {
		var g,
		  l,
		  r = b.nodeType;
		if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof b.getAttribute ? p.prop(b, c, d) : (1 === r && p.isXMLDoc(b) || (l = p.attrHooks[c.toLowerCase()] || (p.expr.match.bool.test(c) ? xc : void 0)), void 0 !== d ? null === d ? void p.removeAttr(b, c) : l && "set" in l && void 0 !== (g = l.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : l && "get" in l && null !== (g = l.get(b, c)) ? g : (g = p.find.attr(b, c), null == g ? void 0 : g));
	  },
	  attrHooks: {
		type: {
		  set: function (b, c) {
			if (!da.radioValue && "radio" === c && f(b, "input")) {
			  var d = b.value;
			  return b.setAttribute("type", c), d && (b.value = d), c;
			}
		  }
		}
	  },
	  removeAttr: function (b, c) {
		var d,
		  g = 0,
		  l = c && c.match(ta);
		if (l && 1 === b.nodeType) for (; d = l[g++];) b.removeAttribute(d);
	  }
	});
	xc = {
	  set: function (b, c, d) {
		return !1 === c ? p.removeAttr(b, d) : b.setAttribute(d, d), d;
	  }
	};
	p.each(p.expr.match.bool.source.match(/\w+/g), function (b, c) {
	  var d = xb[c] || p.find.attr;
	  xb[c] = function (b, c, g) {
		var l,
		  r,
		  e = c.toLowerCase();
		return g || (r = xb[e], xb[e] = l, l = null != d(b, c, g) ? e : null, xb[e] = r), l;
	  };
	});
	var pd = /^(?:input|select|textarea|button)$/i,
	  qd = /^(?:a|area)$/i;
	p.fn.extend({
	  prop: function (b, c) {
		return Ia(this, p.prop, b, c, 1 < arguments.length);
	  },
	  removeProp: function (b) {
		return this.each(function () {
		  delete this[p.propFix[b] || b];
		});
	  }
	});
	p.extend({
	  prop: function (b, c, d) {
		var g,
		  l,
		  r = b.nodeType;
		if (3 !== r && 8 !== r && 2 !== r) return 1 === r && p.isXMLDoc(b) || (c = p.propFix[c] || c, l = p.propHooks[c]), void 0 !== d ? l && "set" in l && void 0 !== (g = l.set(b, d, c)) ? g : b[c] = d : l && "get" in l && null !== (g = l.get(b, c)) ? g : b[c];
	  },
	  propHooks: {
		tabIndex: {
		  get: function (b) {
			var c = p.find.attr(b, "tabindex");
			return c ? parseInt(c, 10) : pd.test(b.nodeName) || qd.test(b.nodeName) && b.href ? 0 : -1;
		  }
		}
	  },
	  propFix: {
		"for": "htmlFor",
		"class": "className"
	  }
	});
	da.optSelected || (p.propHooks.selected = {
	  get: function (b) {
		b = b.parentNode;
		return b && b.parentNode && b.parentNode.selectedIndex, null;
	  },
	  set: function (b) {
		b = b.parentNode;
		b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	  }
	});
	p.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
	  p.propFix[this.toLowerCase()] = this;
	});
	p.fn.extend({
	  addClass: function (b) {
		var c,
		  d,
		  g,
		  l,
		  r,
		  e,
		  f = 0;
		if (p.isFunction(b)) return this.each(function (c) {
		  p(this).addClass(b.call(this, c, ga(this)));
		});
		if ("string" == typeof b && b) for (c = b.match(ta) || []; d = this[f++];) if (l = ga(d), g = 1 === d.nodeType && " " + V(l) + " ") {
		  for (e = 0; r = c[e++];) 0 > g.indexOf(" " + r + " ") && (g += r + " ");
		  g = V(g);
		  l !== g && d.setAttribute("class", g);
		}
		return this;
	  },
	  removeClass: function (b) {
		var c,
		  d,
		  g,
		  l,
		  r,
		  e,
		  f = 0;
		if (p.isFunction(b)) return this.each(function (c) {
		  p(this).removeClass(b.call(this, c, ga(this)));
		});
		if (!arguments.length) return this.attr("class", "");
		if ("string" == typeof b && b) for (c = b.match(ta) || []; d = this[f++];) if (l = ga(d), g = 1 === d.nodeType && " " + V(l) + " ") {
		  for (e = 0; r = c[e++];) for (; -1 < g.indexOf(" " + r + " ");) g = g.replace(" " + r + " ", " ");
		  g = V(g);
		  l !== g && d.setAttribute("class", g);
		}
		return this;
	  },
	  toggleClass: function (b, c) {
		var d = typeof b;
		return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : p.isFunction(b) ? this.each(function (d) {
		  p(this).toggleClass(b.call(this, d, ga(this), c), c);
		}) : this.each(function () {
		  var c, g, l, r;
		  if ("string" === d) {
			g = 0;
			l = p(this);
			for (r = b.match(ta) || []; c = r[g++];) l.hasClass(c) ? l.removeClass(c) : l.addClass(c);
		  } else void 0 !== b && "boolean" !== d || (c = ga(this), c && S.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : S.get(this, "__className__") || ""));
		});
	  },
	  hasClass: function (b) {
		var c,
		  d = 0;
		for (b = " " + b + " "; c = this[d++];) if (1 === c.nodeType && -1 < (" " + V(ga(c)) + " ").indexOf(b)) return !0;
		return !1;
	  }
	});
	var rd = /\r/g;
	p.fn.extend({
	  val: function (b) {
		var c,
		  d,
		  g,
		  l = this[0];
		if (arguments.length) return g = p.isFunction(b), this.each(function (d) {
		  var l;
		  1 === this.nodeType && (l = g ? b.call(this, d, p(this).val()) : b, null == l ? l = "" : "number" == typeof l ? l += "" : Array.isArray(l) && (l = p.map(l, function (b) {
			return null == b ? "" : b + "";
		  })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, l, "value") || (this.value = l));
		});
		if (l) return c = p.valHooks[l.type] || p.valHooks[l.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(l, "value")) ? d : (d = l.value, "string" == typeof d ? d.replace(rd, "") : null == d ? "" : d);
	  }
	});
	p.extend({
	  valHooks: {
		option: {
		  get: function (b) {
			var c = p.find.attr(b, "value");
			return null != c ? c : V(p.text(b));
		  }
		},
		select: {
		  get: function (b) {
			var c,
			  d,
			  g = b.options,
			  l = b.selectedIndex,
			  r = "select-one" === b.type,
			  e = r ? null : [],
			  s = r ? l + 1 : g.length;
			for (d = 0 > l ? s : r ? l : 0; d < s; d++) if (c = g[d], (c.selected || d === l) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
			  if (b = p(c).val(), r) return b;
			  e.push(b);
			}
			return e;
		  },
		  set: function (b, c) {
			for (var d, g, l = b.options, r = p.makeArray(c), e = l.length; e--;) g = l[e], (g.selected = -1 < p.inArray(p.valHooks.option.get(g), r)) && (d = !0);
			return d || (b.selectedIndex = -1), r;
		  }
		}
	  }
	});
	p.each(["radio", "checkbox"], function () {
	  p.valHooks[this] = {
		set: function (b, c) {
		  if (Array.isArray(c)) return b.checked = -1 < p.inArray(p(b).val(), c);
		}
	  };
	  da.checkOn || (p.valHooks[this].get = function (b) {
		return null === b.getAttribute("value") ? "on" : b.value;
	  });
	});
	var yc = /^(?:focusinfocus|focusoutblur)$/;
	p.extend(p.event, {
	  trigger: function (c, d, g, l) {
		var r,
		  e,
		  f,
		  s,
		  q,
		  j,
		  m,
		  M = [g || Y],
		  t = La.call(c, "type") ? c.type : c;
		r = La.call(c, "namespace") ? c.namespace.split(".") : [];
		if (e = f = g = g || Y, 3 !== g.nodeType && 8 !== g.nodeType && !yc.test(t + p.event.triggered) && (-1 < t.indexOf(".") && (r = t.split("."), t = r.shift(), r.sort()), q = 0 > t.indexOf(":") && "on" + t, c = c[p.expando] ? c : new p.Event(t, "object" == typeof c && c), c.isTrigger = l ? 2 : 3, c.namespace = r.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : p.makeArray(d, [c]), m = p.event.special[t] || {}, l || !m.trigger || !1 !== m.trigger.apply(g, d))) {
		  if (!l && !m.noBubble && !p.isWindow(g)) {
			s = m.delegateType || t;
			for (yc.test(s + t) || (e = e.parentNode); e; e = e.parentNode) M.push(e), f = e;
			f === (g.ownerDocument || Y) && M.push(f.defaultView || f.parentWindow || b);
		  }
		  for (r = 0; (e = M[r++]) && !c.isPropagationStopped();) c.type = 1 < r ? s : m.bindType || t, (j = (S.get(e, "events") || {})[c.type] && S.get(e, "handle")) && j.apply(e, d), (j = q && e[q]) && j.apply && Kb(e) && (c.result = j.apply(e, d), !1 === c.result && c.preventDefault());
		  return c.type = t, l || c.isDefaultPrevented() || m._default && !1 !== m._default.apply(M.pop(), d) || !Kb(g) || q && p.isFunction(g[t]) && !p.isWindow(g) && (f = g[q], f && (g[q] = null), p.event.triggered = t, g[t](), p.event.triggered = void 0, f && (g[q] = f)), c.result;
		}
	  },
	  simulate: function (b, c, d) {
		b = p.extend(new p.Event(), d, {
		  type: b,
		  isSimulated: !0
		});
		p.event.trigger(b, null, c);
	  }
	});
	p.fn.extend({
	  trigger: function (b, c) {
		return this.each(function () {
		  p.event.trigger(b, c, this);
		});
	  },
	  triggerHandler: function (b, c) {
		var d = this[0];
		if (d) return p.event.trigger(b, c, d, !0);
	  }
	});
	p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (b, c) {
	  p.fn[c] = function (b, d) {
		return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c);
	  };
	});
	p.fn.extend({
	  hover: function (b, c) {
		return this.mouseenter(b).mouseleave(c || b);
	  }
	});
	da.focusin = "onfocusin" in b;
	da.focusin || p.each({
	  focus: "focusin",
	  blur: "focusout"
	}, function (b, c) {
	  var d = function (b) {
		p.event.simulate(c, b.target, p.event.fix(b));
	  };
	  p.event.special[c] = {
		setup: function () {
		  var g = this.ownerDocument || this,
			l = S.access(g, c);
		  l || g.addEventListener(b, d, !0);
		  S.access(g, c, (l || 0) + 1);
		},
		teardown: function () {
		  var g = this.ownerDocument || this,
			l = S.access(g, c) - 1;
		  l ? S.access(g, c, l) : (g.removeEventListener(b, d, !0), S.remove(g, c));
		}
	  };
	});
	var yb = b.location,
	  zc = p.now(),
	  Vb = /\?/;
	p.parseXML = function (c) {
	  var d;
	  if (!c || "string" != typeof c) return null;
	  try {
		d = new b.DOMParser().parseFromString(c, "text/xml");
	  } catch (g) {
		d = void 0;
	  }
	  return d && !d.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + c), d;
	};
	var Oc = /\[\]$/,
	  Ac = /\r?\n/g,
	  sd = /^(?:submit|button|image|reset|file)$/i,
	  td = /^(?:input|select|textarea|keygen)/i;
	p.param = function (b, c) {
	  var d,
		g = [],
		l = function (b, c) {
		  var d = p.isFunction(c) ? c() : c;
		  g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d);
		};
	  if (Array.isArray(b) || b.jquery && !p.isPlainObject(b)) p.each(b, function () {
		l(this.name, this.value);
	  });else for (d in b) ha(d, b[d], c, l);
	  return g.join("&");
	};
	p.fn.extend({
	  serialize: function () {
		return p.param(this.serializeArray());
	  },
	  serializeArray: function () {
		return this.map(function () {
		  var b = p.prop(this, "elements");
		  return b ? p.makeArray(b) : this;
		}).filter(function () {
		  var b = this.type;
		  return this.name && !p(this).is(":disabled") && td.test(this.nodeName) && !sd.test(b) && (this.checked || !pc.test(b));
		}).map(function (b, c) {
		  var d = p(this).val();
		  return null == d ? null : Array.isArray(d) ? p.map(d, function (b) {
			return {
			  name: c.name,
			  value: b.replace(Ac, "\r\n")
			};
		  }) : {
			name: c.name,
			value: d.replace(Ac, "\r\n")
		  };
		}).get();
	  }
	});
	var ud = /%20/g,
	  vd = /#.*$/,
	  wd = /([?&])_=[^&]*/,
	  xd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	  yd = /^(?:GET|HEAD)$/,
	  zd = /^\/\//,
	  Bc = {},
	  Rb = {},
	  Cc = "*/".concat("*"),
	  Wb = Y.createElement("a");
	Wb.href = yb.href;
	p.extend({
	  active: 0,
	  lastModified: {},
	  etag: {},
	  ajaxSettings: {
		url: yb.href,
		type: "GET",
		isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yb.protocol),
		global: !0,
		processData: !0,
		async: !0,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		accepts: {
		  "*": Cc,
		  text: "text/plain",
		  html: "text/html",
		  xml: "application/xml, text/xml",
		  json: "application/json, text/javascript"
		},
		contents: {
		  xml: /\bxml\b/,
		  html: /\bhtml/,
		  json: /\bjson\b/
		},
		responseFields: {
		  xml: "responseXML",
		  text: "responseText",
		  json: "responseJSON"
		},
		converters: {
		  "* text": String,
		  "text html": !0,
		  "text json": JSON.parse,
		  "text xml": p.parseXML
		},
		flatOptions: {
		  url: !0,
		  context: !0
		}
	  },
	  ajaxSetup: function (b, c) {
		return c ? na(na(b, p.ajaxSettings), c) : na(p.ajaxSettings, b);
	  },
	  ajaxPrefilter: ka(Bc),
	  ajaxTransport: ka(Rb),
	  ajax: function (c, d) {
		function g(c, d, f, q) {
		  var M,
			t,
			G,
			R,
			ga = d;
		  if (!j) {
			j = !0;
			s && b.clearTimeout(s);
			l = void 0;
			e = q || "";
			H.readyState = 0 < c ? 4 : 0;
			q = 200 <= c && 300 > c || 304 === c;
			if (f) {
			  G = x;
			  for (var z = H, A, aa, n, ha, B = G.contents, K = G.dataTypes; "*" === K[0];) K.shift(), void 0 === A && (A = G.mimeType || z.getResponseHeader("Content-Type"));
			  if (A) for (aa in B) if (B[aa] && B[aa].test(A)) {
				K.unshift(aa);
				break;
			  }
			  if (K[0] in f) n = K[0];else {
				for (aa in f) {
				  if (!K[0] || G.converters[aa + " " + K[0]]) {
					n = aa;
					break;
				  }
				  ha || (ha = aa);
				}
				n = n || ha;
			  }
			  G = f = n ? (n !== K[0] && K.unshift(n), f[n]) : void 0;
			}
			var na;
			a: {
			  f = x;
			  A = G;
			  aa = H;
			  n = q;
			  var ka, qa, F;
			  G = {};
			  z = f.dataTypes.slice();
			  if (z[1]) for (ka in f.converters) G[ka.toLowerCase()] = f.converters[ka];
			  for (ha = z.shift(); ha;) if (f.responseFields[ha] && (aa[f.responseFields[ha]] = A), !F && n && f.dataFilter && (A = f.dataFilter(A, f.dataType)), F = ha, ha = z.shift()) if ("*" === ha) ha = F;else if ("*" !== F && F !== ha) {
				if (ka = G[F + " " + ha] || G["* " + ha], !ka) for (na in G) if (qa = na.split(" "), qa[1] === ha && (ka = G[F + " " + qa[0]] || G["* " + qa[0]])) {
				  !0 === ka ? ka = G[na] : !0 !== G[na] && (ha = qa[0], z.unshift(qa[1]));
				  break;
				}
				if (!0 !== ka) if (ka && f.throws) A = ka(A);else try {
				  A = ka(A);
				} catch (ua) {
				  na = {
					state: "parsererror",
					error: ka ? ua : "No conversion from " + F + " to " + ha
				  };
				  break a;
				}
			  }
			  na = {
				state: "success",
				data: A
			  };
			}
			G = na;
			q ? (x.ifModified && (R = H.getResponseHeader("Last-Modified"), R && (p.lastModified[r] = R), R = H.getResponseHeader("etag"), R && (p.etag[r] = R)), 204 === c || "HEAD" === x.type ? ga = "nocontent" : 304 === c ? ga = "notmodified" : (ga = G.state, M = G.data, t = G.error, q = !t)) : (t = ga, !c && ga || (ga = "error", 0 > c && (c = 0)));
			H.status = c;
			H.statusText = (d || ga) + "";
			q ? J.resolveWith(C, [M, ga, H]) : J.rejectWith(C, [H, ga, t]);
			H.statusCode(y);
			y = void 0;
			m && V.trigger(q ? "ajaxSuccess" : "ajaxError", [H, x, q ? M : t]);
			u.fireWith(C, [H, ga]);
			m && (V.trigger("ajaxComplete", [H, x]), --p.active || p.event.trigger("ajaxStop"));
		  }
		}
		"object" == typeof c && (d = c, c = void 0);
		d = d || {};
		var l,
		  r,
		  e,
		  f,
		  s,
		  q,
		  j,
		  m,
		  M,
		  t,
		  x = p.ajaxSetup({}, d),
		  C = x.context || x,
		  V = x.context && (C.nodeType || C.jquery) ? p(C) : p.event,
		  J = p.Deferred(),
		  u = p.Callbacks("once memory"),
		  y = x.statusCode || {},
		  G = {},
		  R = {},
		  ga = "canceled",
		  H = {
			readyState: 0,
			getResponseHeader: function (b) {
			  var c;
			  if (j) {
				if (!f) for (f = {}; c = xd.exec(e);) f[c[1].toLowerCase()] = c[2];
				c = f[b.toLowerCase()];
			  }
			  return null == c ? null : c;
			},
			getAllResponseHeaders: function () {
			  return j ? e : null;
			},
			setRequestHeader: function (b, c) {
			  return null == j && (b = R[b.toLowerCase()] = R[b.toLowerCase()] || b, G[b] = c), this;
			},
			overrideMimeType: function (b) {
			  return null == j && (x.mimeType = b), this;
			},
			statusCode: function (b) {
			  var c;
			  if (b) if (j) H.always(b[H.status]);else for (c in b) y[c] = [y[c], b[c]];
			  return this;
			},
			abort: function (b) {
			  b = b || ga;
			  return l && l.abort(b), g(0, b), this;
			}
		  };
		if (J.promise(H), x.url = ((c || x.url || yb.href) + "").replace(zd, yb.protocol + "//"), x.type = d.method || d.type || x.method || x.type, x.dataTypes = (x.dataType || "*").toLowerCase().match(ta) || [""], null == x.crossDomain) {
		  q = Y.createElement("a");
		  try {
			q.href = x.url, q.href = q.href, x.crossDomain = Wb.protocol + "//" + Wb.host != q.protocol + "//" + q.host;
		  } catch (z) {
			x.crossDomain = !0;
		  }
		}
		if (x.data && x.processData && "string" != typeof x.data && (x.data = p.param(x.data, x.traditional)), qa(Bc, x, d, H), j) return H;
		(m = p.event && x.global) && 0 === p.active++ && p.event.trigger("ajaxStart");
		x.type = x.type.toUpperCase();
		x.hasContent = !yd.test(x.type);
		r = x.url.replace(vd, "");
		x.hasContent ? x.data && x.processData && 0 === (x.contentType || "").indexOf("application/x-www-form-urlencoded") && (x.data = x.data.replace(ud, "+")) : (t = x.url.slice(r.length), x.data && (r += (Vb.test(r) ? "&" : "?") + x.data, delete x.data), !1 === x.cache && (r = r.replace(wd, "$1"), t = (Vb.test(r) ? "&" : "?") + "_=" + zc++ + t), x.url = r + t);
		x.ifModified && (p.lastModified[r] && H.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && H.setRequestHeader("If-None-Match", p.etag[r]));
		(x.data && x.hasContent && !1 !== x.contentType || d.contentType) && H.setRequestHeader("Content-Type", x.contentType);
		H.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + Cc + "; q=0.01" : "") : x.accepts["*"]);
		for (M in x.headers) H.setRequestHeader(M, x.headers[M]);
		if (x.beforeSend && (!1 === x.beforeSend.call(C, H, x) || j)) return H.abort();
		if (ga = "abort", u.add(x.complete), H.done(x.success), H.fail(x.error), l = qa(Rb, x, d, H)) {
		  if (H.readyState = 1, m && V.trigger("ajaxSend", [H, x]), j) return H;
		  x.async && 0 < x.timeout && (s = b.setTimeout(function () {
			H.abort("timeout");
		  }, x.timeout));
		  try {
			j = !1, l.send(G, g);
		  } catch (A) {
			if (j) throw A;
			g(-1, A);
		  }
		} else g(-1, "No Transport");
		return H;
	  },
	  getJSON: function (b, c, d) {
		return p.get(b, c, d, "json");
	  },
	  getScript: function (b, c) {
		return p.get(b, void 0, c, "script");
	  }
	});
	p.each(["get", "post"], function (b, c) {
	  p[c] = function (b, d, g, l) {
		return p.isFunction(d) && (l = l || g, g = d, d = void 0), p.ajax(p.extend({
		  url: b,
		  type: c,
		  dataType: l,
		  data: d,
		  success: g
		}, p.isPlainObject(b) && b));
	  };
	});
	p._evalUrl = function (b) {
	  return p.ajax({
		url: b,
		type: "GET",
		dataType: "script",
		cache: !0,
		async: !1,
		global: !1,
		"throws": !0
	  });
	};
	p.fn.extend({
	  wrapAll: function (b) {
		var c;
		return this[0] && (p.isFunction(b) && (b = b.call(this[0])), c = p(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
		  for (var b = this; b.firstElementChild;) b = b.firstElementChild;
		  return b;
		}).append(this)), this;
	  },
	  wrapInner: function (b) {
		return p.isFunction(b) ? this.each(function (c) {
		  p(this).wrapInner(b.call(this, c));
		}) : this.each(function () {
		  var c = p(this),
			d = c.contents();
		  d.length ? d.wrapAll(b) : c.append(b);
		});
	  },
	  wrap: function (b) {
		var c = p.isFunction(b);
		return this.each(function (d) {
		  p(this).wrapAll(c ? b.call(this, d) : b);
		});
	  },
	  unwrap: function (b) {
		return this.parent(b).not("body").each(function () {
		  p(this).replaceWith(this.childNodes);
		}), this;
	  }
	});
	p.expr.pseudos.hidden = function (b) {
	  return !p.expr.pseudos.visible(b);
	};
	p.expr.pseudos.visible = function (b) {
	  return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length);
	};
	p.ajaxSettings.xhr = function () {
	  try {
		return new b.XMLHttpRequest();
	  } catch (c) {}
	};
	var Ad = {
		"0": 200,
		1223: 204
	  },
	  zb = p.ajaxSettings.xhr();
	da.cors = !!zb && "withCredentials" in zb;
	da.ajax = zb = !!zb;
	p.ajaxTransport(function (c) {
	  var d, g;
	  if (da.cors || zb && !c.crossDomain) return {
		send: function (l, r) {
		  var e,
			f = c.xhr();
		  if (f.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields) for (e in c.xhrFields) f[e] = c.xhrFields[e];
		  c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType);
		  c.crossDomain || l["X-Requested-With"] || (l["X-Requested-With"] = "XMLHttpRequest");
		  for (e in l) f.setRequestHeader(e, l[e]);
		  d = function (b) {
			return function () {
			  d && (d = g = f.onload = f.onerror = f.onabort = f.onreadystatechange = null, "abort" === b ? f.abort() : "error" === b ? "number" != typeof f.status ? r(0, "error") : r(f.status, f.statusText) : r(Ad[f.status] || f.status, f.statusText, "text" !== (f.responseType || "text") || "string" != typeof f.responseText ? {
				binary: f.response
			  } : {
				text: f.responseText
			  }, f.getAllResponseHeaders()));
			};
		  };
		  f.onload = d();
		  g = f.onerror = d("error");
		  void 0 !== f.onabort ? f.onabort = g : f.onreadystatechange = function () {
			4 === f.readyState && b.setTimeout(function () {
			  d && g();
			});
		  };
		  d = d("abort");
		  try {
			f.send(c.hasContent && c.data || null);
		  } catch (q) {
			if (d) throw q;
		  }
		},
		abort: function () {
		  d && d();
		}
	  };
	});
	p.ajaxPrefilter(function (b) {
	  b.crossDomain && (b.contents.script = !1);
	});
	p.ajaxSetup({
	  accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	  },
	  contents: {
		script: /\b(?:java|ecma)script\b/
	  },
	  converters: {
		"text script": function (b) {
		  return p.globalEval(b), b;
		}
	  }
	});
	p.ajaxPrefilter("script", function (b) {
	  void 0 === b.cache && (b.cache = !1);
	  b.crossDomain && (b.type = "GET");
	});
	p.ajaxTransport("script", function (b) {
	  if (b.crossDomain) {
		var c, d;
		return {
		  send: function (g, l) {
			c = p("<script>").prop({
			  charset: b.scriptCharset,
			  src: b.url
			}).on("load error", d = function (b) {
			  c.remove();
			  d = null;
			  b && l("error" === b.type ? 404 : 200, b.type);
			});
			Y.head.appendChild(c[0]);
		  },
		  abort: function () {
			d && d();
		  }
		};
	  }
	});
	var Dc = [],
	  Xb = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
	  jsonp: "callback",
	  jsonpCallback: function () {
		var b = Dc.pop() || p.expando + "_" + zc++;
		return this[b] = !0, b;
	  }
	});
	p.ajaxPrefilter("json jsonp", function (c, d, g) {
	  var l,
		r,
		e,
		f = !1 !== c.jsonp && (Xb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && Xb.test(c.data) && "data");
	  if (f || "jsonp" === c.dataTypes[0]) return l = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, f ? c[f] = c[f].replace(Xb, "$1" + l) : !1 !== c.jsonp && (c.url += (Vb.test(c.url) ? "&" : "?") + c.jsonp + "=" + l), c.converters["script json"] = function () {
		return e || p.error(l + " was not called"), e[0];
	  }, c.dataTypes[0] = "json", r = b[l], b[l] = function () {
		e = arguments;
	  }, g.always(function () {
		void 0 === r ? p(b).removeProp(l) : b[l] = r;
		c[l] && (c.jsonpCallback = d.jsonpCallback, Dc.push(l));
		e && p.isFunction(r) && r(e[0]);
		e = r = void 0;
	  }), "script";
	});
	var Bd = da,
	  Ec,
	  Fc = Y.implementation.createHTMLDocument("").body;
	Ec = (Fc.innerHTML = "<form></form><form></form>", 2 === Fc.childNodes.length);
	Bd.createHTMLDocument = Ec;
	p.parseHTML = function (b, c, d) {
	  if ("string" != typeof b) return [];
	  "boolean" == typeof c && (d = c, c = !1);
	  var g, l, r;
	  return c || (da.createHTMLDocument ? (c = Y.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = Y.location.href, c.head.appendChild(g)) : c = Y), l = lc.exec(b), r = !d && [], l ? [c.createElement(l[1])] : (l = F([b], c, r), r && r.length && p(r).remove(), p.merge([], l.childNodes));
	};
	p.fn.load = function (b, c, d) {
	  var g,
		l,
		r,
		e = this,
		f = b.indexOf(" ");
	  return -1 < f && (g = V(b.slice(f)), b = b.slice(0, f)), p.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (l = "POST"), 0 < e.length && p.ajax({
		url: b,
		type: l || "GET",
		dataType: "html",
		data: c
	  }).done(function (b) {
		r = arguments;
		e.html(g ? p("<div>").append(p.parseHTML(b)).find(g) : b);
	  }).always(d && function (b, c) {
		e.each(function () {
		  d.apply(this, r || [b.responseText, c, b]);
		});
	  }), this;
	};
	p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
	  p.fn[c] = function (b) {
		return this.on(c, b);
	  };
	});
	p.expr.pseudos.animated = function (b) {
	  return p.grep(p.timers, function (c) {
		return b === c.elem;
	  }).length;
	};
	p.offset = {
	  setOffset: function (b, c, d) {
		var g,
		  l,
		  r,
		  e,
		  f,
		  q,
		  s = p.css(b, "position"),
		  j = p(b),
		  m = {};
		"static" === s && (b.style.position = "relative");
		f = j.offset();
		r = p.css(b, "top");
		q = p.css(b, "left");
		("absolute" === s || "fixed" === s) && -1 < (r + q).indexOf("auto") ? (g = j.position(), e = g.top, l = g.left) : (e = parseFloat(r) || 0, l = parseFloat(q) || 0);
		p.isFunction(c) && (c = c.call(b, d, p.extend({}, f)));
		null != c.top && (m.top = c.top - f.top + e);
		null != c.left && (m.left = c.left - f.left + l);
		"using" in c ? c.using.call(b, m) : j.css(m);
	  }
	};
	p.fn.extend({
	  offset: function (b) {
		if (arguments.length) return void 0 === b ? this : this.each(function (c) {
		  p.offset.setOffset(this, b, c);
		});
		var c,
		  d,
		  g,
		  l,
		  r = this[0];
		if (r) return r.getClientRects().length ? (g = r.getBoundingClientRect(), c = r.ownerDocument, d = c.documentElement, l = c.defaultView, {
		  top: g.top + l.pageYOffset - d.clientTop,
		  left: g.left + l.pageXOffset - d.clientLeft
		}) : {
		  top: 0,
		  left: 0
		};
	  },
	  position: function () {
		if (this[0]) {
		  var b,
			c,
			d = this[0],
			g = {
			  top: 0,
			  left: 0
			};
		  return "fixed" === p.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
			top: g.top + p.css(b[0], "borderTopWidth", !0),
			left: g.left + p.css(b[0], "borderLeftWidth", !0)
		  }), {
			top: c.top - g.top - p.css(d, "marginTop", !0),
			left: c.left - g.left - p.css(d, "marginLeft", !0)
		  };
		}
	  },
	  offsetParent: function () {
		return this.map(function () {
		  for (var b = this.offsetParent; b && "static" === p.css(b, "position");) b = b.offsetParent;
		  return b || Nb;
		});
	  }
	});
	p.each({
	  scrollLeft: "pageXOffset",
	  scrollTop: "pageYOffset"
	}, function (b, c) {
	  var d = "pageYOffset" === c;
	  p.fn[b] = function (g) {
		return Ia(this, function (b, g, l) {
		  var r;
		  return p.isWindow(b) ? r = b : 9 === b.nodeType && (r = b.defaultView), void 0 === l ? r ? r[c] : b[g] : void (r ? r.scrollTo(d ? r.pageXOffset : l, d ? l : r.pageYOffset) : b[g] = l);
		}, b, g, arguments.length);
	  };
	});
	p.each(["top", "left"], function (b, c) {
	  p.cssHooks[c] = x(da.pixelPosition, function (b, d) {
		if (d) return d = s(b, c), Qb.test(d) ? p(b).position()[c] + "px" : d;
	  });
	});
	p.each({
	  Height: "height",
	  Width: "width"
	}, function (b, c) {
	  p.each({
		padding: "inner" + b,
		content: c,
		"": "outer" + b
	  }, function (d, g) {
		p.fn[g] = function (l, r) {
		  var e = arguments.length && (d || "boolean" != typeof l),
			f = d || (!0 === l || !0 === r ? "margin" : "border");
		  return Ia(this, function (c, d, l) {
			var r;
			return p.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (r = c.documentElement, Math.max(c.body["scroll" + b], r["scroll" + b], c.body["offset" + b], r["offset" + b], r["client" + b])) : void 0 === l ? p.css(c, d, f) : p.style(c, d, l, f);
		  }, c, e ? l : void 0, e);
		};
	  });
	});
	p.fn.extend({
	  bind: function (b, c, d) {
		return this.on(b, null, c, d);
	  },
	  unbind: function (b, c) {
		return this.off(b, null, c);
	  },
	  delegate: function (b, c, d, g) {
		return this.on(c, b, d, g);
	  },
	  undelegate: function (b, c, d) {
		return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d);
	  }
	});
	p.holdReady = function (b) {
	  b ? p.readyWait++ : p.ready(!0);
	};
	p.isArray = Array.isArray;
	p.parseJSON = JSON.parse;
	p.nodeName = f;
	"function" == typeof define && define.amd && define("jquery", [], function () {
	  return p;
	});
	var Cd = b.jQuery,
	  Dd = b.$;
	return p.noConflict = function (c) {
	  return b.$ === p && (b.$ = Dd), c && b.jQuery === p && (b.jQuery = Cd), p;
	}, c || (b.jQuery = b.$ = p), p;
  });
  function getInternetExplorerVersion() {
	var b = -1;
	"Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
	return b;
  }
  var ie = getInternetExplorerVersion();
  function getQueryVariable(b) {
	for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
	  var e = c[d].split("=");
	  if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]);
	}
  }
  this.jukebox = {};
  jukebox.Player = function (b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ("[object Object]" === Object.prototype.toString.call(b)) for (var e in b) this.settings[e] = b[e];
	"[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager());
	this.resource = this.isPlaying = null;
	this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
	if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this;
  };
  jukebox.__jukeboxId = 0;
  jukebox.Player.prototype = {
	defaults: {
	  resources: [],
	  autoplay: !1,
	  spritemap: {},
	  flashMediaElement: "./swf/FlashMediaElement.swf",
	  timeout: 1E3
	},
	__addToManager: function () {
	  !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0);
	},
	__init: function () {
	  var b = this,
		c = this.settings,
		d = {},
		e;
	  jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
	  if (!0 === d.html5audio) {
		this.context = new Audio();
		this.context.src = this.resource;
		if (null === this.origin) {
		  var f = function (c) {
			b.__addToManager(c);
		  };
		  this.context.addEventListener("canplaythrough", f, !0);
		  window.setTimeout(function () {
			b.context.removeEventListener("canplaythrough", f, !0);
			f("timeout");
		  }, c.timeout);
		}
		this.context.autobuffer = !0;
		this.context.preload = !0;
		for (e in this.HTML5API) this[e] = this.HTML5API[e];
		1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date(), this.play(c.autoplay));
		1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function () {
		  null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0);
		}), window.addEventListener("pageshow", function () {
		  b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused);
		}));
	  } else if (!0 === d.flashaudio) {
		for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
		d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
		this.__initFlashContext(d);
		!0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay);
	  } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
	},
	__initFlashContext: function (b) {
	  var c,
		d = this.settings.flashMediaElement,
		e,
		f = {
		  flashvars: b.join("&"),
		  quality: "high",
		  bgcolor: "#000000",
		  wmode: "transparent",
		  allowscriptaccess: "always",
		  allowfullscreen: "true"
		};
	  if (navigator.userAgent.match(/MSIE/)) {
		c = document.createElement("div");
		document.getElementsByTagName("body")[0].appendChild(c);
		var j = document.createElement("object");
		j.id = "jukebox-flashstream-" + this.id;
		j.setAttribute("type", "application/x-shockwave-flash");
		j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
		j.setAttribute("width", "0");
		j.setAttribute("height", "0");
		f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date());
		f.flashvars = b.join("&amp;");
		for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), j.appendChild(b);
		c.outerHTML = j.outerHTML;
		this.context = document.getElementById("jukebox-flashstream-" + this.id);
	  } else {
		c = document.createElement("embed");
		c.id = "jukebox-flashstream-" + this.id;
		c.setAttribute("type", "application/x-shockwave-flash");
		c.setAttribute("width", "100");
		c.setAttribute("height", "100");
		f.play = !1;
		f.loop = !1;
		f.src = d + "?x=" + (Date.now ? Date.now() : +new Date());
		for (e in f) c.setAttribute(e, f[e]);
		document.getElementsByTagName("body")[0].appendChild(c);
		this.context = c;
	  }
	},
	backgroundHackForiOS: function () {
	  if (void 0 !== this.backgroundMusic) {
		var b = Date.now ? Date.now() : +new Date();
		void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer));
	  }
	},
	play: function (b, c) {
	  if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);else {
		var d = this.settings.spritemap,
		  e;
		if (void 0 !== d[b]) e = d[b].start;else if ("number" === typeof b) {
		  e = b;
		  for (var f in d) if (e >= d[f].start && e <= d[f].end) {
			b = f;
			break;
		  }
		}
		void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e));
	  }
	},
	stop: function () {
	  this.__lastPosition = 0;
	  this.isPlaying = null;
	  this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
	  return !0;
	},
	pause: function () {
	  this.isPlaying = null;
	  this.__lastPosition = this.getCurrentTime();
	  this.context.pause();
	  return this.__lastPosition;
	},
	resume: function (b) {
	  b = "number" === typeof b ? b : this.__lastPosition;
	  if (null !== b) return this.play(b), this.__lastPosition = null, !0;
	  this.context.play();
	  return !1;
	},
	HTML5API: {
	  getVolume: function () {
		return this.context.volume || 1;
	  },
	  setVolume: function (b) {
		this.context.volume = b;
		return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1;
	  },
	  getCurrentTime: function () {
		return this.context.currentTime || 0;
	  },
	  setCurrentTime: function (b) {
		try {
		  return this.context.currentTime = b, !0;
		} catch (c) {
		  return !1;
		}
	  }
	},
	FLASHAPI: {
	  getVolume: function () {
		return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1;
	  },
	  setVolume: function (b) {
		return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1;
	  },
	  getCurrentTime: function () {
		return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0;
	  },
	  setCurrentTime: function (b) {
		return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1;
	  }
	}
  };
  if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
  jukebox.Manager = function (b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
	  jukebox.Manager.loop();
	}, 20) : !0;
  };
  jukebox.Manager.prototype = {
	defaults: {
	  useFlash: !1,
	  useGameLoop: !1
	},
	__detectFeatures: function () {
	  var b = window.Audio && new Audio();
	  if (b && b.canPlayType && !1 === this.settings.useFlash) {
		for (var c = [{
			e: "3gp",
			m: ["audio/3gpp", "audio/amr"]
		  }, {
			e: "aac",
			m: ["audio/aac", "audio/aacp"]
		  }, {
			e: "amr",
			m: ["audio/amr", "audio/3gpp"]
		  }, {
			e: "caf",
			m: ["audio/IMA-ADPCM", "audio/x-adpcm", "audio/x-aiff; codecs=\"IMA-ADPCM, ADPCM\""]
		  }, {
			e: "m4a",
			m: "audio/mp4{audio/mp4; codecs=\"mp4a.40.2,avc1.42E01E\"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a".split("{")
		  }, {
			e: "mp3",
			m: ["audio/mp3", "audio/mpeg", "audio/mpeg; codecs=\"mp3\"", "audio/MPA", "audio/mpa-robust"]
		  }, {
			e: "mpga",
			m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
		  }, {
			e: "mp4",
			m: ["audio/mp4", "video/mp4"]
		  }, {
			e: "ogg",
			m: ["application/ogg", "audio/ogg", "audio/ogg; codecs=\"theora, vorbis\"", "video/ogg", "video/ogg; codecs=\"theora, vorbis\""]
		  }, {
			e: "wav",
			m: ["audio/wave", "audio/wav", "audio/wav; codecs=\"1\"", "audio/x-wav", "audio/x-pn-wav"]
		  }, {
			e: "webm",
			m: ["audio/webm", "audio/webm; codecs=\"vorbis\"", "video/webm"]
		  }], d, e, f = 0, j = c.length; f < j; f++) if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m) for (var n = 0, m = c[f].m.length; n < m; n++) if (d = c[f].m[n], "" !== b.canPlayType(d)) {
		  this.codecs[e] = d;
		  break;
		} else this.codecs[e] || (this.codecs[e] = !1);
		this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
		this.features.channels = 8;
		b.volume = 0.1337;
		this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
		navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1);
	  }
	  this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
	  if (window.ActiveXObject) try {
		new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0;
	  } catch (g) {}
	  !0 === this.settings.useFlash && (this.features.flashaudio = !0);
	  !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1);
	},
	__getPlayerById: function (b) {
	  return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null;
	},
	__getClone: function (b, c) {
	  for (var d in this.__clones) {
		var e = this.__clones[d];
		if (null === e.isPlaying && e.origin === b) return e;
	  }
	  if ("[object Object]" === Object.prototype.toString.call(c)) {
		d = {};
		for (var f in c) d[f] = c[f];
		d.autoplay = !1;
		f = new jukebox.Player(d, b);
		f.isClone = !0;
		f.wasReady = !1;
		return this.__clones[f.id] = f;
	  }
	  return null;
	},
	loop: function () {
	  if (0 !== this.__playersLength) if (this.__queue.length && this.__playersLength < this.features.channels) {
		var b = this.__queue[0],
		  c = this.__getPlayerById(b.origin);
		if (null !== c) {
		  var d = this.__getClone(b.origin, c.settings);
		  null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0));
		}
		this.__queue.splice(0, 1);
	  } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS();
	},
	getPlayableResource: function (b) {
	  "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
	  for (var c = 0, d = b.length; c < d; c++) {
		var e = b[c],
		  f = e.match(/\.([^\.]*)$/)[1];
		if (f && this.codecs[f]) return e;
	  }
	  return null;
	},
	add: function (b) {
	  return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1;
	},
	remove: function (b) {
	  return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1;
	},
	addToQueue: function (b, c) {
	  return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
		pointer: b,
		origin: c
	  }), !0) : !1;
	}
  };
  (function () {
	var b = function () {
	  this.init();
	};
	b.prototype = {
	  init: function () {
		var b = this || c;
		b._counter = 1E3;
		b._codecs = {};
		b._howls = [];
		b._muted = !1;
		b._volume = 1;
		b._canPlayEvent = "canplaythrough";
		b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
		b.masterGain = null;
		b.noAudio = !1;
		b.usingWebAudio = !0;
		b.autoSuspend = !0;
		b.ctx = null;
		b.mobileAutoEnable = !0;
		b._setup();
		return b;
	  },
	  volume: function (b) {
		var d = this || c;
		b = parseFloat(b);
		d.ctx || m();
		if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
		  d._volume = b;
		  if (d._muted) return d;
		  d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
		  for (var e = 0; e < d._howls.length; e++) if (!d._howls[e]._webAudio) for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
			var n = d._howls[e]._soundById(f[j]);
			n && n._node && (n._node.volume = n._volume * b);
		  }
		  return d;
		}
		return d._volume;
	  },
	  mute: function (b) {
		var d = this || c;
		d.ctx || m();
		d._muted = b;
		d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
		for (var e = 0; e < d._howls.length; e++) if (!d._howls[e]._webAudio) for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
		  var n = d._howls[e]._soundById(f[j]);
		  n && n._node && (n._node.muted = b ? !0 : n._muted);
		}
		return d;
	  },
	  unload: function () {
		for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
		b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, m());
		return b;
	  },
	  codecs: function (b) {
		return (this || c)._codecs[b.replace(/^x-/, "")];
	  },
	  _setup: function () {
		var b = this || c;
		b.state = b.ctx ? b.ctx.state || "running" : "running";
		b._autoSuspend();
		if (!b.usingWebAudio) if ("undefined" !== typeof Audio) try {
		  var d = new Audio();
		  "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay");
		} catch (e) {
		  b.noAudio = !0;
		} else b.noAudio = !0;
		try {
		  d = new Audio(), d.muted && (b.noAudio = !0);
		} catch (f) {}
		b.noAudio || b._setupCodecs();
		return b;
	  },
	  _setupCodecs: function () {
		var b = this || c,
		  d = null;
		try {
		  d = "undefined" !== typeof Audio ? new Audio() : null;
		} catch (e) {
		  return b;
		}
		if (!d || "function" !== typeof d.canPlayType) return b;
		var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
		  j = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
		  j = j && 33 > parseInt(j[0].split("/")[1], 10);
		b._codecs = {
		  mp3: !(j || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
		  mpeg: !!f,
		  opus: !!d.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
		  ogg: !!d.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
		  oga: !!d.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
		  wav: !!d.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ""),
		  aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
		  caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
		  m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
		  mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
		  weba: !!d.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
		  webm: !!d.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
		  dolby: !!d.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
		  flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
		};
		return b;
	  },
	  _enableMobileAudio: function () {
		var b = this || c,
		  d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
		  e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
		if (!b._mobileEnabled && b.ctx && (d || e)) {
		  b._mobileEnabled = !1;
		  !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
		  b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
		  var f = function () {
			c._autoResume();
			var d = b.ctx.createBufferSource();
			d.buffer = b._scratchBuffer;
			d.connect(b.ctx.destination);
			"undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
			"function" === typeof b.ctx.resume && b.ctx.resume();
			d.onended = function () {
			  d.disconnect(0);
			  b._mobileEnabled = !0;
			  b.mobileAutoEnable = !1;
			  document.removeEventListener("touchstart", f, !0);
			  document.removeEventListener("touchend", f, !0);
			};
		  };
		  document.addEventListener("touchstart", f, !0);
		  document.addEventListener("touchend", f, !0);
		  return b;
		}
	  },
	  _autoSuspend: function () {
		var b = this;
		if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
		  for (var d = 0; d < b._howls.length; d++) if (b._howls[d]._webAudio) for (var e = 0; e < b._howls[d]._sounds.length; e++) if (!b._howls[d]._sounds[e]._paused) return b;
		  b._suspendTimer && clearTimeout(b._suspendTimer);
		  b._suspendTimer = setTimeout(function () {
			b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function () {
			  b.state = "suspended";
			  b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume());
			}));
		  }, 3E4);
		  return b;
		}
	  },
	  _autoResume: function () {
		var b = this;
		if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.ctx.resume().then(function () {
		  b.state = "running";
		  for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume");
		}), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b;
	  }
	};
	var c = new b(),
	  d = function (b) {
		!b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b);
	  };
	d.prototype = {
	  init: function (b) {
		var d = this;
		c.ctx || m();
		d._autoplay = b.autoplay || !1;
		d._format = "string" !== typeof b.format ? b.format : [b.format];
		d._html5 = b.html5 || !1;
		d._muted = b.mute || !1;
		d._loop = b.loop || !1;
		d._pool = b.pool || 5;
		d._preload = "boolean" === typeof b.preload ? b.preload : !0;
		d._rate = b.rate || 1;
		d._sprite = b.sprite || {};
		d._src = "string" !== typeof b.src ? b.src : [b.src];
		d._volume = void 0 !== b.volume ? b.volume : 1;
		d._xhrWithCredentials = b.xhrWithCredentials || !1;
		d._duration = 0;
		d._state = "unloaded";
		d._sounds = [];
		d._endTimers = {};
		d._queue = [];
		d._playLock = !1;
		d._onend = b.onend ? [{
		  fn: b.onend
		}] : [];
		d._onfade = b.onfade ? [{
		  fn: b.onfade
		}] : [];
		d._onload = b.onload ? [{
		  fn: b.onload
		}] : [];
		d._onloaderror = b.onloaderror ? [{
		  fn: b.onloaderror
		}] : [];
		d._onplayerror = b.onplayerror ? [{
		  fn: b.onplayerror
		}] : [];
		d._onpause = b.onpause ? [{
		  fn: b.onpause
		}] : [];
		d._onplay = b.onplay ? [{
		  fn: b.onplay
		}] : [];
		d._onstop = b.onstop ? [{
		  fn: b.onstop
		}] : [];
		d._onmute = b.onmute ? [{
		  fn: b.onmute
		}] : [];
		d._onvolume = b.onvolume ? [{
		  fn: b.onvolume
		}] : [];
		d._onrate = b.onrate ? [{
		  fn: b.onrate
		}] : [];
		d._onseek = b.onseek ? [{
		  fn: b.onseek
		}] : [];
		d._onresume = [];
		d._webAudio = c.usingWebAudio && !d._html5;
		"undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
		c._howls.push(d);
		d._autoplay && d._queue.push({
		  event: "play",
		  action: function () {
			d.play();
		  }
		});
		d._preload && d.load();
		return d;
	  },
	  load: function () {
		var b = null;
		if (c.noAudio) this._emit("loaderror", null, "No audio support.");else {
		  "string" === typeof this._src && (this._src = [this._src]);
		  for (var d = 0; d < this._src.length; d++) {
			var m, z;
			if (this._format && this._format[d]) m = this._format[d];else {
			  z = this._src[d];
			  if ("string" !== typeof z) {
				this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
				continue;
			  }
			  (m = /^data:audio\/([^;,]+);/i.exec(z)) || (m = /\.([^.]+)$/.exec(z.split("?", 1)[0]));
			  m && (m = m[1].toLowerCase());
			}
			m || console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
			if (m && c.codecs(m)) {
			  b = this._src[d];
			  break;
			}
		  }
		  if (b) {
			this._src = b;
			this._state = "loading";
			"https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
			new e(this);
			if (this._webAudio) {
			  var A = this,
				B = A._src;
			  if (f[B]) A._duration = f[B].duration, n(A);else if (/^data:[^;]+;base64,/.test(B)) {
				b = atob(B.split(",")[1]);
				d = new Uint8Array(b.length);
				for (m = 0; m < b.length; ++m) d[m] = b.charCodeAt(m);
				j(d.buffer, A);
			  } else {
				var D = new XMLHttpRequest();
				D.open("GET", B, !0);
				D.withCredentials = A._xhrWithCredentials;
				D.responseType = "arraybuffer";
				D.onload = function () {
				  var b = (D.status + "")[0];
				  "0" !== b && "2" !== b && "3" !== b ? A._emit("loaderror", null, "Failed loading audio file with status: " + D.status + ".") : j(D.response, A);
				};
				D.onerror = function () {
				  A._webAudio && (A._html5 = !0, A._webAudio = !1, A._sounds = [], delete f[B], A.load());
				};
				try {
				  D.send();
				} catch (E) {
				  D.onerror();
				}
			  }
			}
			return this;
		  }
		  this._emit("loaderror", null, "No codec support for selected audio sources.");
		}
	  },
	  play: function (b, d) {
		var e = this,
		  f = null;
		if ("number" === typeof b) f = b, b = null;else {
		  if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
		  if ("undefined" === typeof b) {
			b = "__default";
			for (var j = 0, m = 0; m < e._sounds.length; m++) e._sounds[m]._paused && !e._sounds[m]._ended && (j++, f = e._sounds[m]._id);
			1 === j ? b = null : f = null;
		  }
		}
		var n = f ? e._soundById(f) : e._inactiveSound();
		if (!n) return null;
		f && !b && (b = n._sprite || "__default");
		if ("loaded" !== e._state) {
		  n._sprite = b;
		  n._ended = !1;
		  var E = n._id;
		  e._queue.push({
			event: "play",
			action: function () {
			  e.play(E);
			}
		  });
		  return E;
		}
		if (f && !n._paused) return d || e._loadQueue("play"), n._id;
		e._webAudio && c._autoResume();
		var u = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1E3),
		  F = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - u),
		  K = 1E3 * F / Math.abs(n._rate);
		n._paused = !1;
		n._ended = !1;
		n._sprite = b;
		n._seek = u;
		n._start = e._sprite[b][0] / 1E3;
		n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
		n._loop = !(!n._loop && !e._sprite[b][2]);
		var L = n._node;
		if (e._webAudio) f = function () {
		  e._refreshBuffer(n);
		  L.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
		  n._playStart = c.ctx.currentTime;
		  "undefined" === typeof L.bufferSource.start ? n._loop ? L.bufferSource.noteGrainOn(0, u, 86400) : L.bufferSource.noteGrainOn(0, u, F) : n._loop ? L.bufferSource.start(0, u, 86400) : L.bufferSource.start(0, u, F);
		  Infinity !== K && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), K));
		  d || setTimeout(function () {
			e._emit("play", n._id);
		  }, 0);
		}, "running" === c.state ? f() : (e.once("resume", f), e._clearTimer(n._id));else {
		  var N = function () {
			  L.currentTime = u;
			  L.muted = n._muted || e._muted || c._muted || L.muted;
			  L.volume = n._volume * c.volume();
			  L.playbackRate = n._rate;
			  try {
				var f = L.play();
				if ("undefined" !== typeof Promise && f instanceof Promise) {
				  e._playLock = !0;
				  var j = function () {
					e._playLock = !1;
					d || e._emit("play", n._id);
				  };
				  f.then(j, j);
				} else d || e._emit("play", n._id);
				L.playbackRate = n._rate;
				L.paused ? e._emit("playerror", n._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.") : "__default" !== b || n._loop ? e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), K) : (e._endTimers[n._id] = function () {
				  e._ended(n);
				  L.removeEventListener("ended", e._endTimers[n._id], !1);
				}, L.addEventListener("ended", e._endTimers[n._id], !1));
			  } catch (m) {
				e._emit("playerror", n._id, m);
			  }
			},
			f = window && window.ejecta || !L.readyState && c._navigator.isCocoonJS;
		  if (3 <= L.readyState || f) N();else {
			var Q = function () {
			  N();
			  L.removeEventListener(c._canPlayEvent, Q, !1);
			};
			L.addEventListener(c._canPlayEvent, Q, !1);
			e._clearTimer(n._id);
		  }
		}
		return n._id;
	  },
	  pause: function (b, c) {
		var d = this;
		if ("loaded" !== d._state || d._playLock) return d._queue.push({
		  event: "pause",
		  action: function () {
			d.pause(b);
		  }
		}), d;
		for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
		  d._clearTimer(e[f]);
		  var j = d._soundById(e[f]);
		  if (j && !j._paused && (j._seek = d.seek(e[f]), j._rateSeek = 0, j._paused = !0, d._stopFade(e[f]), j._node)) if (d._webAudio) {
			if (!j._node.bufferSource) continue;
			"undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
			d._cleanBuffer(j._node);
		  } else (!isNaN(j._node.duration) || Infinity === j._node.duration) && j._node.pause();
		  c || d._emit("pause", j ? j._id : null);
		}
		return d;
	  },
	  stop: function (b, c) {
		var d = this;
		if ("loaded" !== d._state) return d._queue.push({
		  event: "stop",
		  action: function () {
			d.stop(b);
		  }
		}), d;
		for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
		  d._clearTimer(e[f]);
		  var j = d._soundById(e[f]);
		  if (j) {
			j._seek = j._start || 0;
			j._rateSeek = 0;
			j._paused = !0;
			j._ended = !0;
			d._stopFade(e[f]);
			if (j._node) if (d._webAudio) j._node.bufferSource && ("undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0), d._cleanBuffer(j._node));else if (!isNaN(j._node.duration) || Infinity === j._node.duration) j._node.currentTime = j._start || 0, j._node.pause();
			c || d._emit("stop", j._id);
		  }
		}
		return d;
	  },
	  mute: function (b, d) {
		var e = this;
		if ("loaded" !== e._state) return e._queue.push({
		  event: "mute",
		  action: function () {
			e.mute(b, d);
		  }
		}), e;
		if ("undefined" === typeof d) if ("boolean" === typeof b) e._muted = b;else return e._muted;
		for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
		  var m = e._soundById(f[j]);
		  m && (m._muted = b, m._interval && e._stopFade(m._id), e._webAudio && m._node ? m._node.gain.setValueAtTime(b ? 0 : m._volume, c.ctx.currentTime) : m._node && (m._node.muted = c._muted ? !0 : b), e._emit("mute", m._id));
		}
		return e;
	  },
	  volume: function () {
		var b = this,
		  d = arguments,
		  e,
		  f;
		if (0 === d.length) return b._volume;
		1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
		var j;
		if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
		  if ("loaded" !== b._state) return b._queue.push({
			event: "volume",
			action: function () {
			  b.volume.apply(b, d);
			}
		  }), b;
		  "undefined" === typeof f && (b._volume = e);
		  f = b._getSoundIds(f);
		  for (var m = 0; m < f.length; m++) if (j = b._soundById(f[m])) j._volume = e, d[2] || b._stopFade(f[m]), b._webAudio && j._node && !j._muted ? j._node.gain.setValueAtTime(e, c.ctx.currentTime) : j._node && !j._muted && (j._node.volume = e * c.volume()), b._emit("volume", j._id);
		} else return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
		return b;
	  },
	  fade: function (b, d, e, f) {
		var j = this;
		if ("loaded" !== j._state) return j._queue.push({
		  event: "fade",
		  action: function () {
			j.fade(b, d, e, f);
		  }
		}), j;
		j.volume(b, f);
		for (var m = j._getSoundIds(f), n = 0; n < m.length; n++) {
		  var E = j._soundById(m[n]);
		  if (E) {
			f || j._stopFade(m[n]);
			if (j._webAudio && !E._muted) {
			  var u = c.ctx.currentTime,
				F = u + e / 1E3;
			  E._volume = b;
			  E._node.gain.setValueAtTime(b, u);
			  E._node.gain.linearRampToValueAtTime(d, F);
			}
			j._startFadeInterval(E, b, d, e, m[n], "undefined" === typeof f);
		  }
		}
		return j;
	  },
	  _startFadeInterval: function (b, c, d, e, f, j) {
		var m = this,
		  n = c,
		  u = d - c;
		f = Math.abs(u / 0.01);
		f = Math.max(4, 0 < f ? e / f : e);
		var F = Date.now();
		b._fadeTo = d;
		b._interval = setInterval(function () {
		  var f = (Date.now() - F) / e;
		  F = Date.now();
		  n += u * f;
		  n = Math.max(0, n);
		  n = Math.min(1, n);
		  n = Math.round(100 * n) / 100;
		  m._webAudio ? b._volume = n : m.volume(n, b._id, !0);
		  j && (m._volume = n);
		  if (d < c && n <= d || d > c && n >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, m.volume(d, b._id), m._emit("fade", b._id);
		}, f);
	  },
	  _stopFade: function (b) {
		var d = this._soundById(b);
		d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
		return this;
	  },
	  loop: function () {
		var b = arguments,
		  c,
		  d;
		if (0 === b.length) return this._loop;
		if (1 === b.length) {
		  if ("boolean" === typeof b[0]) this._loop = c = b[0];else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
		} else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
		d = this._getSoundIds(d);
		for (var e = 0; e < d.length; e++) if (b = this._soundById(d[e])) if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
		return this;
	  },
	  rate: function () {
		var b = this,
		  d = arguments,
		  e,
		  f;
		0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
		var j;
		if ("number" === typeof e) {
		  if ("loaded" !== b._state) return b._queue.push({
			event: "rate",
			action: function () {
			  b.rate.apply(b, d);
			}
		  }), b;
		  "undefined" === typeof f && (b._rate = e);
		  f = b._getSoundIds(f);
		  for (var m = 0; m < f.length; m++) if (j = b._soundById(f[m])) {
			j._rateSeek = b.seek(f[m]);
			j._playStart = b._webAudio ? c.ctx.currentTime : j._playStart;
			j._rate = e;
			b._webAudio && j._node && j._node.bufferSource ? j._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime) : j._node && (j._node.playbackRate = e);
			var n = b.seek(f[m]),
			  n = 1E3 * ((b._sprite[j._sprite][0] + b._sprite[j._sprite][1]) / 1E3 - n) / Math.abs(j._rate);
			if (b._endTimers[f[m]] || !j._paused) b._clearTimer(f[m]), b._endTimers[f[m]] = setTimeout(b._ended.bind(b, j), n);
			b._emit("rate", j._id);
		  }
		} else return (j = b._soundById(f)) ? j._rate : b._rate;
		return b;
	  },
	  seek: function () {
		var b = this,
		  d = arguments,
		  e,
		  f;
		0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
		if ("undefined" === typeof f) return b;
		if ("loaded" !== b._state) return b._queue.push({
		  event: "seek",
		  action: function () {
			b.seek.apply(b, d);
		  }
		}), b;
		var j = b._soundById(f);
		if (j) if ("number" === typeof e && 0 <= e) {
		  var m = b.playing(f);
		  m && b.pause(f, !0);
		  j._seek = e;
		  j._ended = !1;
		  b._clearTimer(f);
		  m && b.play(f, !0);
		  !b._webAudio && j._node && (j._node.currentTime = e);
		  if (m && !b._webAudio) {
			var n = function () {
			  b._playLock ? setTimeout(n, 0) : b._emit("seek", f);
			};
			setTimeout(n, 0);
		  } else b._emit("seek", f);
		} else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - j._playStart : 0, j._seek + ((j._rateSeek ? j._rateSeek - j._seek : 0) + e * Math.abs(j._rate))) : j._node.currentTime;
		return b;
	  },
	  playing: function (b) {
		if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
		for (b = 0; b < this._sounds.length; b++) if (!this._sounds[b]._paused) return !0;
		return !1;
	  },
	  duration: function (b) {
		var c = this._duration;
		(b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
		return c;
	  },
	  state: function () {
		return this._state;
	  },
	  unload: function () {
		for (var b = this._sounds, d = 0; d < b.length; d++) b[d]._paused || this.stop(b[d]._id), this._webAudio || (/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b[d]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1)), delete b[d]._node, this._clearTimer(b[d]._id);
		d = c._howls.indexOf(this);
		0 <= d && c._howls.splice(d, 1);
		b = !0;
		for (d = 0; d < c._howls.length; d++) if (c._howls[d]._src === this._src) {
		  b = !1;
		  break;
		}
		f && b && delete f[this._src];
		c.noAudio = !1;
		this._state = "unloaded";
		this._sounds = [];
		return null;
	  },
	  on: function (b, c, d, e) {
		b = this["_on" + b];
		"function" === typeof c && b.push(e ? {
		  id: d,
		  fn: c,
		  once: e
		} : {
		  id: d,
		  fn: c
		});
		return this;
	  },
	  off: function (b, c, d) {
		var e = this["_on" + b],
		  f = 0;
		"number" === typeof c && (d = c, c = null);
		if (c || d) for (f = 0; f < e.length; f++) {
		  if (b = d === e[f].id, c === e[f].fn && b || !c && b) {
			e.splice(f, 1);
			break;
		  }
		} else if (b) this["_on" + b] = [];else {
		  c = Object.keys(this);
		  for (f = 0; f < c.length; f++) 0 === c[f].indexOf("_on") && Array.isArray(this[c[f]]) && (this[c[f]] = []);
		}
		return this;
	  },
	  once: function (b, c, d) {
		this.on(b, c, d, 1);
		return this;
	  },
	  _emit: function (b, c, d) {
		for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--) if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function (b) {
		  b.call(this, c, d);
		}.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
		this._loadQueue(b);
		return this;
	  },
	  _loadQueue: function (b) {
		if (0 < this._queue.length) {
		  var c = this._queue[0];
		  c.event === b && (this._queue.shift(), this._loadQueue());
		  b || c.action();
		}
		return this;
	  },
	  _ended: function (b) {
		var d = b._sprite;
		if (!this._webAudio && b._node && !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
		d = !(!b._loop && !this._sprite[d][2]);
		this._emit("end", b._id);
		!this._webAudio && d && this.stop(b._id, !0).play(b._id);
		if (this._webAudio && d) {
		  this._emit("play", b._id);
		  b._seek = b._start || 0;
		  b._rateSeek = 0;
		  b._playStart = c.ctx.currentTime;
		  var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
		  this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e);
		}
		this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
		!this._webAudio && !d && this.stop(b._id, !0);
		return this;
	  },
	  _clearTimer: function (b) {
		if (this._endTimers[b]) {
		  if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);else {
			var c = this._soundById(b);
			c && c._node && c._node.removeEventListener("ended", this._endTimers[b], !1);
		  }
		  delete this._endTimers[b];
		}
		return this;
	  },
	  _soundById: function (b) {
		for (var c = 0; c < this._sounds.length; c++) if (b === this._sounds[c]._id) return this._sounds[c];
		return null;
	  },
	  _inactiveSound: function () {
		this._drain();
		for (var b = 0; b < this._sounds.length; b++) if (this._sounds[b]._ended) return this._sounds[b].reset();
		return new e(this);
	  },
	  _drain: function () {
		var b = this._pool,
		  c = 0,
		  d = 0;
		if (!(this._sounds.length < b)) {
		  for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
		  for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--);
		}
	  },
	  _getSoundIds: function (b) {
		if ("undefined" === typeof b) {
		  b = [];
		  for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
		  return b;
		}
		return [b];
	  },
	  _refreshBuffer: function (b) {
		b._node.bufferSource = c.ctx.createBufferSource();
		b._node.bufferSource.buffer = f[this._src];
		b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
		if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
		b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
		return this;
	  },
	  _cleanBuffer: function (b) {
		if (c._scratchBuffer && b.bufferSource) {
		  b.bufferSource.onended = null;
		  b.bufferSource.disconnect(0);
		  try {
			b.bufferSource.buffer = c._scratchBuffer;
		  } catch (d) {}
		}
		b.bufferSource = null;
		return this;
	  }
	};
	var e = function (b) {
	  this._parent = b;
	  this.init();
	};
	e.prototype = {
	  init: function () {
		var b = this._parent;
		this._muted = b._muted;
		this._loop = b._loop;
		this._volume = b._volume;
		this._rate = b._rate;
		this._seek = 0;
		this._ended = this._paused = !0;
		this._sprite = "__default";
		this._id = ++c._counter;
		b._sounds.push(this);
		this.create();
		return this;
	  },
	  create: function () {
		var b = this._parent,
		  d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
		b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
		return this;
	  },
	  reset: function () {
		var b = this._parent;
		this._muted = b._muted;
		this._loop = b._loop;
		this._volume = b._volume;
		this._rate = b._rate;
		this._rateSeek = this._seek = 0;
		this._ended = this._paused = !0;
		this._sprite = "__default";
		this._id = ++c._counter;
		return this;
	  },
	  _errorListener: function () {
		this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
		this._node.removeEventListener("error", this._errorFn, !1);
	  },
	  _loadListener: function () {
		var b = this._parent;
		b._duration = Math.ceil(10 * this._node.duration) / 10;
		0 === Object.keys(b._sprite).length && (b._sprite = {
		  __default: [0, 1E3 * b._duration]
		});
		"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
		this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1);
	  }
	};
	var f = {},
	  j = function (b, d) {
		c.ctx.decodeAudioData(b, function (b) {
		  b && 0 < d._sounds.length && (f[d._src] = b, n(d, b));
		}, function () {
		  d._emit("loaderror", null, "Decoding audio data failed.");
		});
	  },
	  n = function (b, c) {
		c && !b._duration && (b._duration = c.duration);
		0 === Object.keys(b._sprite).length && (b._sprite = {
		  __default: [0, 1E3 * b._duration]
		});
		"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
	  },
	  m = function () {
		try {
		  "undefined" !== typeof AudioContext ? c.ctx = new AudioContext() : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext() : c.usingWebAudio = !1;
		} catch (b) {
		  c.usingWebAudio = !1;
		}
		var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
		  e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
		  e = e ? parseInt(e[1], 10) : null;
		if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
		c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : 1, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination));
		c._setup();
	  };
	"function" === typeof define && define.amd && define([], function () {
	  return {
		Howler: c,
		Howl: d
	  };
	});
	"undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
	"undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e);
  })();
  (function () {
	HowlerGlobal.prototype._pos = [0, 0, 0];
	HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	HowlerGlobal.prototype.stereo = function (b) {
	  if (!this.ctx || !this.ctx.listener) return this;
	  for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
	  return this;
	};
	HowlerGlobal.prototype.pos = function (b, c, d) {
	  if (!this.ctx || !this.ctx.listener) return this;
	  c = "number" !== typeof c ? this._pos[1] : c;
	  d = "number" !== typeof d ? this._pos[2] : d;
	  if ("number" === typeof b) this._pos = [b, c, d], "undefined" !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);else return this._pos;
	  return this;
	};
	HowlerGlobal.prototype.orientation = function (b, c, d, e, g, t) {
	  if (!this.ctx || !this.ctx.listener) return this;
	  var y = this._orientation;
	  c = "number" !== typeof c ? y[1] : c;
	  d = "number" !== typeof d ? y[2] : d;
	  e = "number" !== typeof e ? y[3] : e;
	  g = "number" !== typeof g ? y[4] : g;
	  t = "number" !== typeof t ? y[5] : t;
	  if ("number" === typeof b) this._orientation = [b, c, d, e, g, t], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, e, g, t);else return y;
	  return this;
	};
	var b = Howl.prototype.init;
	Howl.prototype.init = function (c) {
	  this._orientation = c.orientation || [1, 0, 0];
	  this._stereo = c.stereo || null;
	  this._pos = c.pos || null;
	  this._pannerAttr = {
		coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
		coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
		coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
		distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
		maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
		panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
		refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
		rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
	  };
	  this._onstereo = c.onstereo ? [{
		fn: c.onstereo
	  }] : [];
	  this._onpos = c.onpos ? [{
		fn: c.onpos
	  }] : [];
	  this._onorientation = c.onorientation ? [{
		fn: c.onorientation
	  }] : [];
	  return b.call(this, c);
	};
	Howl.prototype.stereo = function (b, c) {
	  var d = this;
	  if (!d._webAudio) return d;
	  if ("loaded" !== d._state) return d._queue.push({
		event: "stereo",
		action: function () {
		  d.stereo(b, c);
		}
	  }), d;
	  var m = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
	  if ("undefined" === typeof c) if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];else return d._stereo;
	  for (var g = d._getSoundIds(c), t = 0; t < g.length; t++) {
		var y = d._soundById(g[t]);
		if (y) if ("number" === typeof b) y._stereo = b, y._pos = [b, 0, 0], y._node && (y._pannerAttr.panningModel = "equalpower", (!y._panner || !y._panner.pan) && e(y, m), "spatial" === m ? "undefined" !== typeof y._panner.positionX ? (y._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), y._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), y._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : y._panner.setPosition(b, 0, 0) : y._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", y._id);else return y._stereo;
	  }
	  return d;
	};
	Howl.prototype.pos = function (b, c, d, m) {
	  var g = this;
	  if (!g._webAudio) return g;
	  if ("loaded" !== g._state) return g._queue.push({
		event: "pos",
		action: function () {
		  g.pos(b, c, d, m);
		}
	  }), g;
	  c = "number" !== typeof c ? 0 : c;
	  d = "number" !== typeof d ? -0.5 : d;
	  if ("undefined" === typeof m) if ("number" === typeof b) g._pos = [b, c, d];else return g._pos;
	  for (var t = g._getSoundIds(m), y = 0; y < t.length; y++) {
		var z = g._soundById(t[y]);
		if (z) if ("number" === typeof b) z._pos = [b, c, d], z._node && ((!z._panner || z._panner.pan) && e(z, "spatial"), "undefined" !== typeof z._panner.positionX ? (z._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), z._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime), z._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)) : z._panner.setOrientation(b, c, d)), g._emit("pos", z._id);else return z._pos;
	  }
	  return g;
	};
	Howl.prototype.orientation = function (b, c, d, m) {
	  var g = this;
	  if (!g._webAudio) return g;
	  if ("loaded" !== g._state) return g._queue.push({
		event: "orientation",
		action: function () {
		  g.orientation(b, c, d, m);
		}
	  }), g;
	  c = "number" !== typeof c ? g._orientation[1] : c;
	  d = "number" !== typeof d ? g._orientation[2] : d;
	  if ("undefined" === typeof m) if ("number" === typeof b) g._orientation = [b, c, d];else return g._orientation;
	  for (var t = g._getSoundIds(m), y = 0; y < t.length; y++) {
		var z = g._soundById(t[y]);
		if (z) if ("number" === typeof b) z._orientation = [b, c, d], z._node && (z._panner || (z._pos || (z._pos = g._pos || [0, 0, -0.5]), e(z, "spatial")), z._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), z._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime), z._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime)), g._emit("orientation", z._id);else return z._orientation;
	  }
	  return g;
	};
	Howl.prototype.pannerAttr = function () {
	  var b = arguments,
		c,
		d;
	  if (!this._webAudio) return this;
	  if (0 === b.length) return this._pannerAttr;
	  if (1 === b.length) {
		if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (c.pannerAttr || (c.pannerAttr = {
		  coneInnerAngle: c.coneInnerAngle,
		  coneOuterAngle: c.coneOuterAngle,
		  coneOuterGain: c.coneOuterGain,
		  distanceModel: c.distanceModel,
		  maxDistance: c.maxDistance,
		  refDistance: c.refDistance,
		  rolloffFactor: c.rolloffFactor,
		  panningModel: c.panningModel
		}), this._pannerAttr = {
		  coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle,
		  coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
		  coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain,
		  distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ? c.pannerAttr.distanceModel : this._distanceModel,
		  maxDistance: "undefined" !== typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
		  refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance,
		  rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
		  panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
		});else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
	  } else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
	  d = this._getSoundIds(d);
	  for (var m = 0; m < d.length; m++) if (b = this._soundById(d[m])) {
		var g = b._pannerAttr,
		  g = {
			coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
			coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
			coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
			distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
			maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
			refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
			rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor,
			panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
		  },
		  t = b._panner;
		t ? (t.coneInnerAngle = g.coneInnerAngle, t.coneOuterAngle = g.coneOuterAngle, t.coneOuterGain = g.coneOuterGain, t.distanceModel = g.distanceModel, t.maxDistance = g.maxDistance, t.refDistance = g.refDistance, t.rolloffFactor = g.rolloffFactor, t.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"));
	  }
	  return this;
	};
	var c = Sound.prototype.init;
	Sound.prototype.init = function () {
	  var b = this._parent;
	  this._orientation = b._orientation;
	  this._stereo = b._stereo;
	  this._pos = b._pos;
	  this._pannerAttr = b._pannerAttr;
	  c.call(this);
	  this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id);
	};
	var d = Sound.prototype.reset;
	Sound.prototype.reset = function () {
	  var b = this._parent;
	  this._orientation = b._orientation;
	  this._stereo = b._stereo;
	  this._pos = b._pos;
	  this._pannerAttr = b._pannerAttr;
	  this._stereo ? b.stereo(this._stereo) : this._pos ? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, b._refreshBuffer(this));
	  return d.call(this);
	};
	var e = function (b, c) {
	  "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.panningModel = b._pannerAttr.panningModel, "undefined" !== typeof b._panner.positionX ? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime), b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime)) : b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), "undefined" !== typeof b._panner.orientationX ? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
	  b._panner.connect(b._node);
	  b._paused || b._parent.pause(b._id, !0).play(b._id, !0);
	};
  })();
  (function (b) {
	Number.prototype.map = function (b, c, d, e) {
	  return d + (e - d) * ((this - b) / (c - b));
	};
	Number.prototype.limit = function (b, c) {
	  return Math.min(c, Math.max(b, this));
	};
	Number.prototype.round = function (b) {
	  b = Math.pow(10, b || 0);
	  return Math.round(this * b) / b;
	};
	Number.prototype.floor = function () {
	  return Math.floor(this);
	};
	Number.prototype.ceil = function () {
	  return Math.ceil(this);
	};
	Number.prototype.toInt = function () {
	  return this | 0;
	};
	Number.prototype.toRad = function () {
	  return this / 180 * Math.PI;
	};
	Number.prototype.toDeg = function () {
	  return 180 * this / Math.PI;
	};
	Array.prototype.erase = function (b) {
	  for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
	  return this;
	};
	Array.prototype.random = function () {
	  return this[Math.floor(Math.random() * this.length)];
	};
	Function.prototype.bind = Function.prototype.bind || function (b) {
	  if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	  var c = Array.prototype.slice.call(arguments, 1),
		d = this,
		e = function () {},
		f = function () {
		  return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)));
		};
	  e.prototype = this.prototype;
	  f.prototype = new e();
	  return f;
	};
	b.ig = {
	  game: null,
	  debug: null,
	  version: "1.23",
	  global: b,
	  modules: {},
	  resources: [],
	  ready: !1,
	  baked: !1,
	  nocache: "",
	  ua: {},
	  prefix: b.ImpactPrefix || "",
	  lib: "lib/",
	  _current: null,
	  _loadQueue: [],
	  _waitForOnload: 0,
	  $: function (b) {
		return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b);
	  },
	  $new: function (b) {
		return document.createElement(b);
	  },
	  copy: function (b) {
		if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
		if (b instanceof Array) for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);else for (d in c = {}, b) c[d] = ig.copy(b[d]);
		return c;
	  },
	  merge: function (b, c) {
		for (var d in c) {
		  var e = c[d];
		  if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;else {
			if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
			ig.merge(b[d], e);
		  }
		}
		return b;
	  },
	  ksort: function (b) {
		if (!b || "object" != typeof b) return [];
		var c = [],
		  d = [],
		  e;
		for (e in b) c.push(e);
		c.sort();
		for (e = 0; e < c.length; e++) d.push(b[c[e]]);
		return d;
	  },
	  setVendorAttribute: function (b, c, d) {
		var e = c.charAt(0).toUpperCase() + c.substr(1);
		b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d;
	  },
	  getVendorAttribute: function (b, c) {
		var d = c.charAt(0).toUpperCase() + c.substr(1);
		return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d];
	  },
	  normalizeVendorAttribute: function (b, c) {
		var d = ig.getVendorAttribute(b, c);
		!b[c] && d && (b[c] = d);
	  },
	  getImagePixels: function (b, c, d, e, f) {
		var j = ig.$new("canvas");
		j.width = b.width;
		j.height = b.height;
		var n = j.getContext("2d");
		ig.System.SCALE.CRISP(j, n);
		var D = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
		ig.normalizeVendorAttribute(n, "getImageDataHD");
		var E = b.width / D,
		  u = b.height / D;
		j.width = Math.ceil(E);
		j.height = Math.ceil(u);
		n.drawImage(b, 0, 0, E, u);
		return 1 === D ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f);
	  },
	  module: function (b) {
		if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
		if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
		ig._current = {
		  name: b,
		  requires: [],
		  loaded: !1,
		  body: null
		};
		ig.modules[b] = ig._current;
		ig._loadQueue.push(ig._current);
		return ig;
	  },
	  requires: function () {
		ig._current.requires = Array.prototype.slice.call(arguments);
		return ig;
	  },
	  defines: function (b) {
		ig._current.body = b;
		ig._current = null;
		ig._initDOMReady();
	  },
	  addResource: function (b) {
		ig.resources.push(b);
	  },
	  setNocache: function (b) {
		ig.nocache = b ? "?" + Date.now() : "";
	  },
	  log: function () {},
	  assert: function () {},
	  show: function () {},
	  mark: function () {},
	  _loadScript: function (b, c) {
		ig.modules[b] = {
		  name: b,
		  requires: [],
		  loaded: !1,
		  body: null
		};
		ig._waitForOnload++;
		var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
		  e = ig.$new("script");
		e.type = "text/javascript";
		e.src = d;
		e.onload = function () {
		  ig._waitForOnload--;
		  ig._execModules();
		};
		e.onerror = function () {
		  throw "Failed to load module " + b + " at " + d + " required from " + c;
		};
		ig.$("head")[0].appendChild(e);
	  },
	  _execModules: function () {
		for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
		  for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
			var j = d.requires[f];
			ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name));
		  }
		  e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--);
		}
		if (b) ig._execModules();else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
		  b = [];
		  for (c = 0; c < ig._loadQueue.length; c++) {
			e = [];
			j = ig._loadQueue[c].requires;
			for (f = 0; f < j.length; f++) d = ig.modules[j[f]], (!d || !d.loaded) && e.push(j[f]);
			b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")");
		  }
		  throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
		}
	  },
	  _DOMReady: function () {
		if (!ig.modules["dom.ready"].loaded) {
		  if (!document.body) return setTimeout(ig._DOMReady, 13);
		  ig.modules["dom.ready"].loaded = !0;
		  ig._waitForOnload--;
		  ig._execModules();
		}
		return 0;
	  },
	  _boot: function () {
		document.location.href.match(/\?nocache/) && ig.setNocache(!0);
		ig.ua.pixelRatio = b.devicePixelRatio || 1;
		ig.ua.viewport = {
		  width: b.innerWidth,
		  height: b.innerHeight
		};
		ig.ua.screen = {
		  width: b.screen.availWidth * ig.ua.pixelRatio,
		  height: b.screen.availHeight * ig.ua.pixelRatio
		};
		ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
		ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
		ig.ua.iPad = /iPad/i.test(navigator.userAgent);
		ig.ua.android = /android/i.test(navigator.userAgent);
		ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
		ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
		ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
		ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
		ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
		ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
		ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
		ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
		ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
		ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
		ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
		ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent);
	  },
	  _initDOMReady: function () {
		ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
		  requires: [],
		  loaded: !1,
		  body: null
		}, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)));
	  }
	};
	ig.normalizeVendorAttribute(b, "requestAnimationFrame");
	if (b.requestAnimationFrame) {
	  var c = 1,
		d = {};
	  b.ig.setAnimation = function (e, g) {
		var f = c++;
		d[f] = !0;
		var j = function () {
		  d[f] && (b.requestAnimationFrame(j, g), e());
		};
		b.requestAnimationFrame(j, g);
		return f;
	  };
	  b.ig.clearAnimation = function (b) {
		delete d[b];
	  };
	} else b.ig.setAnimation = function (c) {
	  return b.setInterval(c, 1E3 / 60);
	}, b.ig.clearAnimation = function (c) {
	  b.clearInterval(c);
	};
	var e = !1,
	  f = /xyz/.test(function () {
		xyz;
	  }) ? /\bparent\b/ : /.*/,
	  j = 0;
	b.ig.Class = function () {};
	var n = function (b) {
	  var c = this.prototype,
		d = {},
		e;
	  for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function (b, c) {
		return function () {
		  var e = this.parent;
		  this.parent = d[b];
		  var f = c.apply(this, arguments);
		  this.parent = e;
		  return f;
		};
	  }(e, b[e])) : c[e] = b[e];
	};
	b.ig.Class.extend = function (c) {
	  function d() {
		if (!e) {
		  if (this.staticInstantiate) {
			var b = this.staticInstantiate.apply(this, arguments);
			if (b) return b;
		  }
		  for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
		  this.init && this.init.apply(this, arguments);
		}
		return this;
	  }
	  var t = this.prototype;
	  e = !0;
	  var y = new this();
	  e = !1;
	  for (var z in c) y[z] = "function" == typeof c[z] && "function" == typeof t[z] && f.test(c[z]) ? function (b, c) {
		return function () {
		  var d = this.parent;
		  this.parent = t[b];
		  var e = c.apply(this, arguments);
		  this.parent = d;
		  return e;
		};
	  }(z, c[z]) : c[z];
	  d.prototype = y;
	  d.prototype.constructor = d;
	  d.extend = b.ig.Class.extend;
	  d.inject = n;
	  d.classId = y.classId = ++j;
	  return d;
	};
	b.ImpactMixin && ig.merge(ig, b.ImpactMixin);
  })(window);
  ig.baked = !0;
  ig.module("impact.image").defines(function () {
	ig.Image = ig.Class.extend({
	  data: null,
	  width: 0,
	  height: 0,
	  loaded: !1,
	  failed: !1,
	  loadCallback: null,
	  path: "",
	  staticInstantiate: function (b) {
		return ig.Image.cache[b] || null;
	  },
	  init: function (b) {
		this.path = b;
		this.load();
	  },
	  load: function (b) {
		this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this);
	  },
	  reload: function () {
		this.loaded = !1;
		this.data = new Image();
		this.data.onload = this.onload.bind(this);
		this.data.src = this.path + "?" + Date.now();
	  },
	  onload: function () {
		this.width = this.data.width;
		this.height = this.data.height;
		this.loaded = !0;
		1 != ig.system.scale && this.resize(ig.system.scale);
		this.loadCallback && this.loadCallback(this.path, !0);
	  },
	  onerror: function () {
		this.failed = !0;
		this.loadCallback && this.loadCallback(this.path, !1);
	  },
	  resize: function (b) {
		var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
		  d = this.width * b,
		  e = this.height * b,
		  f = ig.$new("canvas");
		f.width = d;
		f.height = e;
		for (var j = f.getContext("2d"), n = j.getImageData(0, 0, d, e), m = 0; m < e; m++) for (var g = 0; g < d; g++) {
		  var t = 4 * (Math.floor(m / b) * this.width + Math.floor(g / b)),
			y = 4 * (m * d + g);
		  n.data[y] = c.data[t];
		  n.data[y + 1] = c.data[t + 1];
		  n.data[y + 2] = c.data[t + 2];
		  n.data[y + 3] = c.data[t + 3];
		}
		j.putImageData(n, 0, 0);
		this.data = f;
	  },
	  draw: function (b, c, d, e, f, j) {
		if (this.loaded) {
		  var n = ig.system.scale;
		  f = (f ? f : this.width) * n;
		  j = (j ? j : this.height) * n;
		  ig.system.context.drawImage(this.data, d ? d * n : 0, e ? e * n : 0, f, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, j);
		  ig.Image.drawCount++;
		}
	  },
	  drawTile: function (b, c, d, e, f, j, n) {
		f = f ? f : e;
		if (this.loaded && !(e > this.width || f > this.height)) {
		  var m = ig.system.scale,
			g = Math.floor(e * m),
			t = Math.floor(f * m),
			y = j ? -1 : 1,
			z = n ? -1 : 1;
		  if (j || n) ig.system.context.save(), ig.system.context.scale(y, z);
		  ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * m, Math.floor(d * e / this.width) * f * m, g, t, ig.system.getDrawPos(b) * y - (j ? g : 0), ig.system.getDrawPos(c) * z - (n ? t : 0), g, t);
		  (j || n) && ig.system.context.restore();
		  ig.Image.drawCount++;
		}
	  }
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function () {
	  for (var b in ig.Image.cache) ig.Image.cache[b].reload();
	};
  });
  ig.baked = !0;
  ig.module("impact.font").requires("impact.image").defines(function () {
	ig.Font = ig.Image.extend({
	  widthMap: [],
	  indices: [],
	  firstChar: 32,
	  alpha: 1,
	  letterSpacing: 1,
	  lineSpacing: 0,
	  onload: function (b) {
		this._loadMetrics(this.data);
		this.parent(b);
	  },
	  widthForString: function (b) {
		if (-1 !== b.indexOf("\n")) {
		  b = b.split("\n");
		  for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
		  return c;
		}
		return this._widthForLine(b);
	  },
	  _widthForLine: function (b) {
		for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
		return c;
	  },
	  heightForString: function (b) {
		return b.split("\n").length * (this.height + this.lineSpacing);
	  },
	  draw: function (b, c, d, e) {
		"string" != typeof b && (b = b.toString());
		if (-1 !== b.indexOf("\n")) {
		  b = b.split("\n");
		  for (var f = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * f, e);
		} else {
		  if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
		  1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
		  for (j = 0; j < b.length; j++) e = b.charCodeAt(j), c += this._drawChar(e - this.firstChar, c, d);
		  1 !== this.alpha && (ig.system.context.globalAlpha = 1);
		  ig.Image.drawCount += b.length;
		}
	  },
	  _drawChar: function (b, c, d) {
		if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
		var e = ig.system.scale,
		  f = this.widthMap[b] * e,
		  j = (this.height - 2) * e;
		ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, j);
		return this.widthMap[b] + this.letterSpacing;
	  },
	  _loadMetrics: function (b) {
		this.height = b.height - 1;
		this.widthMap = [];
		this.indices = [];
		for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
		  var j = 4 * f + 3;
		  127 < c.data[j] ? e++ : 128 > c.data[j] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0);
		}
		this.widthMap.push(e);
		this.indices.push(f - e);
	  }
	});
	ig.Font.ALIGN = {
	  LEFT: 0,
	  RIGHT: 1,
	  CENTER: 2
	};
  });
  ig.baked = !0;
  ig.module("impact.sound").defines(function () {
	ig.SoundManager = ig.Class.extend({
	  clips: {},
	  volume: 1,
	  format: null,
	  init: function () {
		if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;else {
		  for (var b = new Audio(), c = 0; c < ig.Sound.use.length; c++) {
			var d = ig.Sound.use[c];
			if (b.canPlayType(d.mime)) {
			  this.format = d;
			  break;
			}
		  }
		  this.format || (ig.Sound.enabled = !1);
		}
	  },
	  load: function (b, c, d) {
		var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
		if (this.clips[b]) {
		  if (c && this.clips[b].length < ig.Sound.channels) for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
			var f = new Audio(e);
			f.load();
			this.clips[b].push(f);
		  }
		  return this.clips[b][0];
		}
		var j = new Audio(e);
		d && (j.addEventListener("canplaythrough", function m(c) {
		  j.removeEventListener("canplaythrough", m, !1);
		  d(b, !0, c);
		}, !1), j.addEventListener("error", function (c) {
		  d(b, !1, c);
		}, !1));
		j.preload = "auto";
		j.load();
		this.clips[b] = [j];
		if (c) for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
		return j;
	  },
	  get: function (b) {
		b = this.clips[b];
		for (var c = 0, d; d = b[c++];) if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
		b[0].pause();
		b[0].currentTime = 0;
		return b[0];
	  }
	});
	ig.Music = ig.Class.extend({
	  tracks: [],
	  namedTracks: {},
	  currentTrack: null,
	  currentIndex: 0,
	  random: !1,
	  _volume: 1,
	  _loop: !1,
	  _fadeInterval: 0,
	  _fadeTimer: null,
	  _endedCallbackBound: null,
	  init: function () {
		this._endedCallbackBound = this._endedCallback.bind(this);
		Object.defineProperty ? (Object.defineProperty(this, "volume", {
		  get: this.getVolume.bind(this),
		  set: this.setVolume.bind(this)
		}), Object.defineProperty(this, "loop", {
		  get: this.getLooping.bind(this),
		  set: this.setLooping.bind(this)
		})) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)));
	  },
	  add: function (b, c) {
		if (ig.Sound.enabled) {
		  var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
		  d.loop = this._loop;
		  d.volume = this._volume;
		  d.addEventListener("ended", this._endedCallbackBound, !1);
		  this.tracks.push(d);
		  c && (this.namedTracks[c] = d);
		  this.currentTrack || (this.currentTrack = d);
		}
	  },
	  next: function () {
		this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play());
	  },
	  pause: function () {
		this.currentTrack && this.currentTrack.pause();
	  },
	  stop: function () {
		this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0);
	  },
	  play: function (b) {
		if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);else if (!this.currentTrack) return;
		this.currentTrack.play();
	  },
	  getLooping: function () {
		return this._loop;
	  },
	  setLooping: function (b) {
		this._loop = b;
		for (var c in this.tracks) this.tracks[c].loop = b;
	  },
	  getVolume: function () {
		return this._volume;
	  },
	  setVolume: function (b) {
		this._volume = b.limit(0, 1);
		for (var c in this.tracks) this.tracks[c].volume = this._volume;
	  },
	  fadeOut: function (b) {
		this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50));
	  },
	  _fadeStep: function () {
		var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
		0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b;
	  },
	  _endedCallback: function () {
		this._loop ? this.play() : this.next();
	  }
	});
	ig.Sound = ig.Class.extend({
	  path: "",
	  volume: 1,
	  currentClip: null,
	  multiChannel: !0,
	  init: function (b, c) {
		this.path = b;
		this.multiChannel = !1 !== c;
		this.load();
	  },
	  load: function (b) {
		ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0);
	  },
	  play: function () {
		ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play());
	  },
	  stop: function () {
		this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0);
	  }
	});
	ig.Sound.FORMAT = {
	  MP3: {
		ext: "mp3",
		mime: "audio/mpeg"
	  },
	  M4A: {
		ext: "m4a",
		mime: "audio/mp4; codecs=mp4a"
	  },
	  OGG: {
		ext: "ogg",
		mime: "audio/ogg; codecs=vorbis"
	  },
	  WEBM: {
		ext: "webm",
		mime: "audio/webm; codecs=vorbis"
	  },
	  CAF: {
		ext: "caf",
		mime: "audio/x-caf"
	  }
	};
	ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0;
  });
  ig.baked = !0;
  ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function () {
	ig.Loader = ig.Class.extend({
	  resources: [],
	  gameClass: null,
	  status: 0,
	  done: !1,
	  _unloaded: [],
	  _drawStatus: 0,
	  _intervalId: 0,
	  _loadCallbackBound: null,
	  init: function (b, c) {
		this.gameClass = b;
		this.resources = c;
		this._loadCallbackBound = this._loadCallback.bind(this);
		for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path);
	  },
	  load: function () {
		ig.system.clear("#000");
		if (this.resources.length) {
		  for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
		  this._intervalId = setInterval(this.draw.bind(this), 16);
		} else this.end();
	  },
	  loadResource: function (b) {
		b.load(this._loadCallbackBound);
	  },
	  end: function () {
		this.done || (this.done = !0, clearInterval(this._intervalId));
	  },
	  draw: function () {},
	  _loadCallback: function (b, c) {
		if (c) this._unloaded.erase(b);else throw "Failed to load resource: " + b;
		this.status = 1 - this._unloaded.length / this.resources.length;
		0 == this._unloaded.length && setTimeout(this.end.bind(this), 250);
	  }
	});
  });
  ig.baked = !0;
  ig.module("impact.timer").defines(function () {
	ig.Timer = ig.Class.extend({
	  target: 0,
	  base: 0,
	  last: 0,
	  pausedAt: 0,
	  init: function (b) {
		this.last = this.base = ig.Timer.time;
		this.target = b || 0;
	  },
	  set: function (b) {
		this.target = b || 0;
		this.base = ig.Timer.time;
		this.pausedAt = 0;
	  },
	  reset: function () {
		this.base = ig.Timer.time;
		this.pausedAt = 0;
	  },
	  tick: function () {
		var b = ig.Timer.time - this.last;
		this.last = ig.Timer.time;
		return this.pausedAt ? 0 : b;
	  },
	  delta: function () {
		return (this.pausedAt || ig.Timer.time) - this.base - this.target;
	  },
	  pause: function () {
		this.pausedAt || (this.pausedAt = ig.Timer.time);
	  },
	  unpause: function () {
		this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0);
	  }
	});
	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function () {
	  var b = Date.now();
	  ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
	  ig.Timer._last = b;
	};
  });
  ig.baked = !0;
  ig.module("impact.system").requires("impact.timer", "impact.image").defines(function () {
	ig.System = ig.Class.extend({
	  fps: 30,
	  width: 320,
	  height: 240,
	  realWidth: 320,
	  realHeight: 240,
	  scale: 1,
	  tick: 0,
	  animationId: 0,
	  newGameClass: null,
	  running: !1,
	  delegate: null,
	  clock: null,
	  canvas: null,
	  context: null,
	  init: function (b, c, d, e, f) {
		this.fps = c;
		this.clock = new ig.Timer();
		this.canvas = ig.$(b);
		this.resize(d, e, f);
		this.context = this.canvas.getContext("2d");
		this.getDrawPos = ig.System.drawMode;
		1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
		ig.System.scaleMode(this.canvas, this.context);
	  },
	  resize: function (b, c, d) {
		this.width = b;
		this.height = c;
		this.scale = d || this.scale;
		this.realWidth = this.width * this.scale;
		this.realHeight = this.height * this.scale;
		this.canvas.width = this.realWidth;
		this.canvas.height = this.realHeight;
	  },
	  setGame: function (b) {
		this.running ? this.newGameClass = b : this.setGameNow(b);
	  },
	  setGameNow: function (b) {
		ig.game = new b();
		ig.system.setDelegate(ig.game);
	  },
	  setDelegate: function (b) {
		if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();else throw "System.setDelegate: No run() function in object";
	  },
	  stopRunLoop: function () {
		ig.clearAnimation(this.animationId);
		this.running = !1;
	  },
	  startRunLoop: function () {
		this.stopRunLoop();
		this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
		this.running = !0;
	  },
	  clear: function (b) {
		this.context.fillStyle = b;
		this.context.fillRect(0, 0, this.realWidth, this.realHeight);
	  },
	  run: function () {
		ig.Timer.step();
		this.tick = this.clock.tick();
		this.delegate.run();
		ig.input.clearPressed();
		this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null);
	  },
	  getDrawPos: null
	});
	ig.System.DRAW = {
	  AUTHENTIC: function (b) {
		return Math.round(b) * this.scale;
	  },
	  SMOOTH: function (b) {
		return Math.round(b * this.scale);
	  },
	  SUBPIXEL: function (b) {
		return b * this.scale;
	  }
	};
	ig.System.drawMode = ig.System.DRAW.SMOOTH;
	ig.System.SCALE = {
	  CRISP: function (b, c) {
		ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
		b.style.imageRendering = "-moz-crisp-edges";
		b.style.imageRendering = "-o-crisp-edges";
		b.style.imageRendering = "-webkit-optimize-contrast";
		b.style.imageRendering = "crisp-edges";
		b.style.msInterpolationMode = "nearest-neighbor";
	  },
	  SMOOTH: function (b, c) {
		ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
		b.style.imageRendering = "";
		b.style.msInterpolationMode = "";
	  }
	};
	ig.System.scaleMode = ig.System.SCALE.SMOOTH;
  });
  ig.baked = !0;
  ig.module("impact.input").defines(function () {
	ig.KEY = {
	  MOUSE1: -1,
	  MOUSE2: -3,
	  MWHEEL_UP: -4,
	  MWHEEL_DOWN: -5,
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  PAUSE: 19,
	  CAPS: 20,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT_ARROW: 37,
	  UP_ARROW: 38,
	  RIGHT_ARROW: 39,
	  DOWN_ARROW: 40,
	  INSERT: 45,
	  DELETE: 46,
	  _0: 48,
	  _1: 49,
	  _2: 50,
	  _3: 51,
	  _4: 52,
	  _5: 53,
	  _6: 54,
	  _7: 55,
	  _8: 56,
	  _9: 57,
	  A: 65,
	  B: 66,
	  C: 67,
	  D: 68,
	  E: 69,
	  F: 70,
	  G: 71,
	  H: 72,
	  I: 73,
	  J: 74,
	  K: 75,
	  L: 76,
	  M: 77,
	  N: 78,
	  O: 79,
	  P: 80,
	  Q: 81,
	  R: 82,
	  S: 83,
	  T: 84,
	  U: 85,
	  V: 86,
	  W: 87,
	  X: 88,
	  Y: 89,
	  Z: 90,
	  NUMPAD_0: 96,
	  NUMPAD_1: 97,
	  NUMPAD_2: 98,
	  NUMPAD_3: 99,
	  NUMPAD_4: 100,
	  NUMPAD_5: 101,
	  NUMPAD_6: 102,
	  NUMPAD_7: 103,
	  NUMPAD_8: 104,
	  NUMPAD_9: 105,
	  MULTIPLY: 106,
	  ADD: 107,
	  SUBSTRACT: 109,
	  DECIMAL: 110,
	  DIVIDE: 111,
	  F1: 112,
	  F2: 113,
	  F3: 114,
	  F4: 115,
	  F5: 116,
	  F6: 117,
	  F7: 118,
	  F8: 119,
	  F9: 120,
	  F10: 121,
	  F11: 122,
	  F12: 123,
	  SHIFT: 16,
	  CTRL: 17,
	  ALT: 18,
	  PLUS: 187,
	  COMMA: 188,
	  MINUS: 189,
	  PERIOD: 190
	};
	ig.Input = ig.Class.extend({
	  bindings: {},
	  actions: {},
	  presses: {},
	  locks: {},
	  delayedKeyup: {},
	  isUsingMouse: !1,
	  isUsingKeyboard: !1,
	  isUsingAccelerometer: !1,
	  mouse: {
		x: 0,
		y: 0
	  },
	  accel: {
		x: 0,
		y: 0,
		z: 0
	  },
	  initMouse: function () {
		if (!this.isUsingMouse) {
		  this.isUsingMouse = !0;
		  var b = this.mousewheel.bind(this);
		  ig.system.canvas.addEventListener("mousewheel", b, !1);
		  ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
		  ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
		  ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
		  ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
		  ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
		  ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none");
		}
	  },
	  initKeyboard: function () {
		this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1));
	  },
	  initAccelerometer: function () {
		this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1);
	  },
	  mousewheel: function (b) {
		var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
		c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault());
	  },
	  mousemove: function (b) {
		var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
		ig.ua.mobile && (c = ig.system.realWidth);
		var c = ig.system.scale * (c / ig.system.realWidth),
		  d = {
			left: 0,
			top: 0
		  };
		ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
		b = b.touches ? b.touches[0] : b;
		this.mouse.x = (b.clientX - d.left) / c;
		this.mouse.y = (b.clientY - d.top) / c;
	  },
	  contextmenu: function (b) {
		this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault());
	  },
	  keydown: function (b) {
		var c = b.target.tagName;
		if (!("INPUT" == c || "TEXTAREA" == c)) if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault();
	  },
	  keyup: function (b) {
		var c = b.target.tagName;
		if (!("INPUT" == c || "TEXTAREA" == c)) if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault();
	  },
	  devicemotion: function (b) {
		this.accel = b.accelerationIncludingGravity;
	  },
	  bind: function (b, c) {
		0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
		this.bindings[b] = c;
	  },
	  bindTouch: function (b, c) {
		var d = ig.$(b),
		  e = this;
		d.addEventListener("touchstart", function (b) {
		  e.touchStart(b, c);
		}, !1);
		d.addEventListener("touchend", function (b) {
		  e.touchEnd(b, c);
		}, !1);
		d.addEventListener("MSPointerDown", function (b) {
		  e.touchStart(b, c);
		}, !1);
		d.addEventListener("MSPointerUp", function (b) {
		  e.touchEnd(b, c);
		}, !1);
	  },
	  unbind: function (b) {
		this.delayedKeyup[this.bindings[b]] = !0;
		this.bindings[b] = null;
	  },
	  unbindAll: function () {
		this.bindings = {};
		this.actions = {};
		this.presses = {};
		this.locks = {};
		this.delayedKeyup = {};
	  },
	  state: function (b) {
		return this.actions[b];
	  },
	  pressed: function (b) {
		return this.presses[b];
	  },
	  released: function (b) {
		return !!this.delayedKeyup[b];
	  },
	  clearPressed: function () {
		for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
		this.delayedKeyup = {};
		this.presses = {};
	  },
	  touchStart: function (b, c) {
		this.actions[c] = !0;
		this.presses[c] = !0;
		b.stopPropagation();
		b.preventDefault();
		return !1;
	  },
	  touchEnd: function (b, c) {
		this.delayedKeyup[c] = !0;
		b.stopPropagation();
		b.preventDefault();
		return !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function () {
	ig.main = function (b, c, d, e, f, j, n) {
	  ig.system = new ig.System(b, d, e, f, j || 1);
	  ig.input = new ig.Input();
	  ig.soundManager = new ig.SoundManager();
	  ig.music = new ig.Music();
	  ig.ready = !0;
	  new (n || ig.Loader)(c, ig.resources).load();
	};
  });
  ig.baked = !0;
  ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function () {
	ig.AnimationSheet = ig.Class.extend({
	  width: 8,
	  height: 8,
	  image: null,
	  init: function (b, c, d) {
		this.width = c;
		this.height = d;
		this.image = new ig.Image(b);
	  }
	});
	ig.Animation = ig.Class.extend({
	  sheet: null,
	  timer: null,
	  sequence: [],
	  flip: {
		x: !1,
		y: !1
	  },
	  pivot: {
		x: 0,
		y: 0
	  },
	  frame: 0,
	  tile: 0,
	  loopCount: 0,
	  alpha: 1,
	  angle: 0,
	  init: function (b, c, d, e) {
		this.sheet = b;
		this.pivot = {
		  x: b.width / 2,
		  y: b.height / 2
		};
		this.timer = new ig.Timer();
		this.frameTime = c;
		this.sequence = d;
		this.stop = !!e;
		this.tile = this.sequence[0];
	  },
	  rewind: function () {
		this.timer.set();
		this.frame = this.loopCount = 0;
		this.tile = this.sequence[0];
		return this;
	  },
	  gotoFrame: function (b) {
		this.timer.set(this.frameTime * -b - 1E-4);
		this.update();
	  },
	  gotoRandomFrame: function () {
		this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
	  },
	  update: function () {
		var b = Math.floor(this.timer.delta() / this.frameTime);
		this.loopCount = Math.floor(b / this.sequence.length);
		this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
		this.tile = this.sequence[this.frame];
	  },
	  draw: function (b, c) {
		var d = Math.max(this.sheet.width, this.sheet.height);
		b > ig.system.width || c > ig.system.height || 0 > b + d || 0 > c + d || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1));
	  }
	});
  });
  ig.baked = !0;
  ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function () {
	ig.Entity = ig.Class.extend({
	  id: 0,
	  settings: {},
	  size: {
		x: 16,
		y: 16
	  },
	  offset: {
		x: 0,
		y: 0
	  },
	  pos: {
		x: 0,
		y: 0
	  },
	  last: {
		x: 0,
		y: 0
	  },
	  vel: {
		x: 0,
		y: 0
	  },
	  accel: {
		x: 0,
		y: 0
	  },
	  friction: {
		x: 0,
		y: 0
	  },
	  maxVel: {
		x: 100,
		y: 100
	  },
	  zIndex: 0,
	  gravityFactor: 1,
	  standing: !1,
	  bounciness: 0,
	  minBounceVelocity: 40,
	  anims: {},
	  animSheet: null,
	  currentAnim: null,
	  health: 10,
	  type: 0,
	  checkAgainst: 0,
	  collides: 0,
	  _killed: !1,
	  slopeStanding: {
		min: 44 .toRad(),
		max: 136 .toRad()
	  },
	  init: function (b, c, d) {
		this.id = ++ig.Entity._lastId;
		this.pos.x = this.last.x = b;
		this.pos.y = this.last.y = c;
		ig.merge(this, d);
	  },
	  reset: function (b, c, d) {
		var e = this.constructor.prototype;
		this.pos.x = b;
		this.pos.y = c;
		this.last.x = b;
		this.last.y = c;
		this.vel.x = e.vel.x;
		this.vel.y = e.vel.y;
		this.accel.x = e.accel.x;
		this.accel.y = e.accel.y;
		this.health = e.health;
		this._killed = e._killed;
		this.standing = e.standing;
		this.type = e.type;
		this.checkAgainst = e.checkAgainst;
		this.collides = e.collides;
		ig.merge(this, d);
	  },
	  addAnim: function (b, c, d, e) {
		if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
		c = new ig.Animation(this.animSheet, c, d, e);
		this.anims[b] = c;
		this.currentAnim || (this.currentAnim = c);
		return c;
	  },
	  update: function () {
		this.last.x = this.pos.x;
		this.last.y = this.pos.y;
		this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
		this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
		this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
		var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
		this.handleMovementTrace(b);
		this.currentAnim && this.currentAnim.update();
	  },
	  getNewVelocity: function (b, c, d, e) {
		return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e);
	  },
	  handleMovementTrace: function (b) {
		this.standing = !1;
		b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
		b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
		if (b.collision.slope) {
		  var c = b.collision.slope;
		  if (0 < this.bounciness) {
			var d = this.vel.x * c.nx + this.vel.y * c.ny;
			this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
			this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness;
		  } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0);
		}
		this.pos = b.pos;
	  },
	  draw: function () {
		this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
	  },
	  kill: function () {
		ig.game.removeEntity(this);
	  },
	  receiveDamage: function (b) {
		this.health -= b;
		0 >= this.health && this.kill();
	  },
	  touches: function (b) {
		return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y);
	  },
	  distanceTo: function (b) {
		var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
		b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
		return Math.sqrt(c * c + b * b);
	  },
	  angleTo: function (b) {
		return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2));
	  },
	  check: function () {},
	  collideWith: function () {},
	  ready: function () {},
	  erase: function () {}
	});
	ig.Entity._lastId = 0;
	ig.Entity.COLLIDES = {
	  NEVER: 0,
	  LITE: 1,
	  PASSIVE: 2,
	  ACTIVE: 4,
	  FIXED: 8
	};
	ig.Entity.TYPE = {
	  NONE: 0,
	  A: 1,
	  B: 2,
	  BOTH: 3
	};
	ig.Entity.checkPair = function (b, c) {
	  b.checkAgainst & c.type && b.check(c);
	  c.checkAgainst & b.type && c.check(b);
	  b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c);
	};
	ig.Entity.solveCollision = function (b, c) {
	  var d = null;
	  if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
	  b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"));
	};
	ig.Entity.seperateOnXAxis = function (b, c, d) {
	  var e = b.pos.x + b.size.x - c.pos.x;
	  d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x));
	};
	ig.Entity.seperateOnYAxis = function (b, c, d) {
	  var e = b.pos.y + b.size.y - c.pos.y;
	  if (d) {
		c = b === d ? c : b;
		d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
		var f = 0;
		d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
		b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
		d.pos.y = b.pos.y;
		d.pos.x = b.pos.x;
	  } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y);
	};
  });
  ig.baked = !0;
  ig.module("impact.map").defines(function () {
	ig.Map = ig.Class.extend({
	  tilesize: 8,
	  width: 1,
	  height: 1,
	  data: [[]],
	  name: null,
	  init: function (b, c) {
		this.tilesize = b;
		this.data = c;
		this.height = c.length;
		this.width = c[0].length;
		this.pxWidth = this.width * this.tilesize;
		this.pxHeight = this.height * this.tilesize;
	  },
	  getTile: function (b, c) {
		var d = Math.floor(b / this.tilesize),
		  e = Math.floor(c / this.tilesize);
		return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0;
	  },
	  setTile: function (b, c, d) {
		b = Math.floor(b / this.tilesize);
		c = Math.floor(c / this.tilesize);
		0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d);
	  }
	});
  });
  ig.baked = !0;
  ig.module("impact.collision-map").requires("impact.map").defines(function () {
	ig.CollisionMap = ig.Map.extend({
	  lastSlope: 1,
	  tiledef: null,
	  init: function (b, c, f) {
		this.parent(b, c);
		this.tiledef = f || ig.CollisionMap.defaultTileDef;
		for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0);
	  },
	  trace: function (b, c, f, j, n, m) {
		var g = {
			collision: {
			  x: !1,
			  y: !1,
			  slope: !1
			},
			pos: {
			  x: b,
			  y: c
			},
			tile: {
			  x: 0,
			  y: 0
			}
		  },
		  t = Math.ceil(Math.max(Math.abs(f), Math.abs(j)) / this.tilesize);
		if (1 < t) for (var y = f / t, z = j / t, A = 0; A < t && (y || z) && !(this._traceStep(g, b, c, y, z, n, m, f, j, A), b = g.pos.x, c = g.pos.y, g.collision.x && (f = y = 0), g.collision.y && (j = z = 0), g.collision.slope); A++);else this._traceStep(g, b, c, f, j, n, m, f, j, 0);
		return g;
	  },
	  _traceStep: function (b, c, f, j, n, m, g, t, y, z) {
		b.pos.x += j;
		b.pos.y += n;
		var A = 0;
		if (j) {
		  var B = 0 < j ? m : 0,
			D = 0 > j ? this.tilesize : 0,
			A = Math.max(Math.floor(f / this.tilesize), 0),
			E = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
		  j = Math.floor((b.pos.x + B) / this.tilesize);
		  var u = Math.floor((c + B) / this.tilesize);
		  if (0 < z || j == u || 0 > u || u >= this.width) u = -1;
		  if (0 <= j && j < this.width) for (var F = A; F < E && !(-1 != u && (A = this.data[F][u], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, f, t, y, m, g, u, F))); F++) if (A = this.data[F][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, f, t, y, m, g, j, F)) {
			if (1 < A && A <= this.lastSlope && b.collision.slope) break;
			b.collision.x = !0;
			b.tile.x = A;
			c = b.pos.x = j * this.tilesize - B + D;
			t = 0;
			break;
		  }
		}
		if (n) {
		  B = 0 < n ? g : 0;
		  n = 0 > n ? this.tilesize : 0;
		  A = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
		  D = Math.min(Math.ceil((b.pos.x + m) / this.tilesize), this.width);
		  F = Math.floor((b.pos.y + B) / this.tilesize);
		  E = Math.floor((f + B) / this.tilesize);
		  if (0 < z || F == E || 0 > E || E >= this.height) E = -1;
		  if (0 <= F && F < this.height) for (j = A; j < D && !(-1 != E && (A = this.data[E][j], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, f, t, y, m, g, j, E))); j++) if (A = this.data[F][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, f, t, y, m, g, j, F)) {
			if (1 < A && A <= this.lastSlope && b.collision.slope) break;
			b.collision.y = !0;
			b.tile.y = A;
			b.pos.y = F * this.tilesize - B + n;
			break;
		  }
		}
	  },
	  _checkTileDef: function (b, c, f, j, n, m, g, t, y, z) {
		var A = this.tiledef[c];
		if (!A) return !1;
		c = (A[2] - A[0]) * this.tilesize;
		var B = (A[3] - A[1]) * this.tilesize,
		  D = A[4];
		g = f + n + (0 > B ? g : 0) - (y + A[0]) * this.tilesize;
		t = j + m + (0 < c ? t : 0) - (z + A[1]) * this.tilesize;
		if (0 < c * t - B * g) {
		  if (0 > n * -B + m * c) return D;
		  y = Math.sqrt(c * c + B * B);
		  z = B / y;
		  y = -c / y;
		  var E = g * z + t * y,
			A = z * E,
			E = y * E;
		  if (A * A + E * E >= n * n + m * m) return D || 0.5 > c * (t - m) - B * (g - n);
		  b.pos.x = f + n - A;
		  b.pos.y = j + m - E;
		  b.collision.slope = {
			x: c,
			y: B,
			nx: z,
			ny: y
		  };
		  return !0;
		}
		return !1;
	  }
	});
	var b = 1 / 3,
	  c = 2 / 3;
	ig.CollisionMap.defaultTileDef = {
	  5: [0, 1, 1, c, !0],
	  6: [0, c, 1, b, !0],
	  7: [0, b, 1, 0, !0],
	  3: [0, 1, 1, 0.5, !0],
	  4: [0, 0.5, 1, 0, !0],
	  2: [0, 1, 1, 0, !0],
	  10: [0.5, 1, 1, 0, !0],
	  21: [0, 1, 0.5, 0, !0],
	  32: [c, 1, 1, 0, !0],
	  43: [b, 1, c, 0, !0],
	  54: [0, 1, b, 0, !0],
	  27: [0, 0, 1, b, !0],
	  28: [0, b, 1, c, !0],
	  29: [0, c, 1, 1, !0],
	  25: [0, 0, 1, 0.5, !0],
	  26: [0, 0.5, 1, 1, !0],
	  24: [0, 0, 1, 1, !0],
	  11: [0, 0, 0.5, 1, !0],
	  22: [0.5, 0, 1, 1, !0],
	  33: [0, 0, b, 1, !0],
	  44: [b, 0, c, 1, !0],
	  55: [c, 0, 1, 1, !0],
	  16: [1, b, 0, 0, !0],
	  17: [1, c, 0, b, !0],
	  18: [1, 1, 0, c, !0],
	  14: [1, 0.5, 0, 0, !0],
	  15: [1, 1, 0, 0.5, !0],
	  13: [1, 1, 0, 0, !0],
	  8: [0.5, 1, 0, 0, !0],
	  19: [1, 1, 0.5, 0, !0],
	  30: [b, 1, 0, 0, !0],
	  41: [c, 1, b, 0, !0],
	  52: [1, 1, c, 0, !0],
	  38: [1, c, 0, 1, !0],
	  39: [1, b, 0, c, !0],
	  40: [1, 0, 0, b, !0],
	  36: [1, 0.5, 0, 1, !0],
	  37: [1, 0, 0, 0.5, !0],
	  35: [1, 0, 0, 1, !0],
	  9: [1, 0, 0.5, 1, !0],
	  20: [0.5, 0, 0, 1, !0],
	  31: [1, 0, c, 1, !0],
	  42: [c, 0, b, 1, !0],
	  53: [b, 0, 0, 1, !0],
	  12: [0, 0, 1, 0, !1],
	  23: [1, 1, 0, 1, !1],
	  34: [1, 0, 1, 1, !1],
	  45: [0, 1, 0, 0, !1]
	};
	ig.CollisionMap.staticNoCollision = {
	  trace: function (b, c, f, j) {
		return {
		  collision: {
			x: !1,
			y: !1,
			slope: !1
		  },
		  pos: {
			x: b + f,
			y: c + j
		  },
		  tile: {
			x: 0,
			y: 0
		  }
		};
	  }
	};
  });
  ig.baked = !0;
  ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function () {
	ig.BackgroundMap = ig.Map.extend({
	  tiles: null,
	  scroll: {
		x: 0,
		y: 0
	  },
	  distance: 1,
	  repeat: !1,
	  tilesetName: "",
	  foreground: !1,
	  enabled: !0,
	  preRender: !1,
	  preRenderedChunks: null,
	  chunkSize: 512,
	  debugChunks: !1,
	  anims: {},
	  init: function (b, c, d) {
		this.parent(b, c);
		this.setTileset(d);
	  },
	  setTileset: function (b) {
		this.tilesetName = b instanceof ig.Image ? b.path : b;
		this.tiles = new ig.Image(this.tilesetName);
		this.preRenderedChunks = null;
	  },
	  setScreenPos: function (b, c) {
		this.scroll.x = b / this.distance;
		this.scroll.y = c / this.distance;
	  },
	  preRenderMapToChunks: function () {
		var b = this.width * this.tilesize * ig.system.scale,
		  c = this.height * this.tilesize * ig.system.scale;
		this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
		var d = Math.ceil(b / this.chunkSize),
		  e = Math.ceil(c / this.chunkSize);
		this.preRenderedChunks = [];
		for (var f = 0; f < e; f++) {
		  this.preRenderedChunks[f] = [];
		  for (var j = 0; j < d; j++) this.preRenderedChunks[f][j] = this.preRenderChunk(j, f, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, f == e - 1 ? c - f * this.chunkSize : this.chunkSize);
		}
	  },
	  preRenderChunk: function (b, c, d, e) {
		var f = d / this.tilesize / ig.system.scale + 1,
		  j = e / this.tilesize / ig.system.scale + 1,
		  n = b * this.chunkSize / ig.system.scale % this.tilesize,
		  m = c * this.chunkSize / ig.system.scale % this.tilesize;
		b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
		c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
		var g = ig.$new("canvas");
		g.width = d;
		g.height = e;
		g.retinaResolutionEnabled = !1;
		e = g.getContext("2d");
		ig.System.scaleMode(g, e);
		d = ig.system.context;
		ig.system.context = e;
		for (e = 0; e < f; e++) for (var t = 0; t < j; t++) if (e + b < this.width && t + c < this.height) {
		  var y = this.data[t + c][e + b];
		  y && this.tiles.drawTile(e * this.tilesize - n, t * this.tilesize - m, y - 1, this.tilesize);
		}
		ig.system.context = d;
		return g;
	  },
	  draw: function () {
		this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled());
	  },
	  drawPreRendered: function () {
		this.preRenderedChunks || this.preRenderMapToChunks();
		var b = ig.system.getDrawPos(this.scroll.x),
		  c = ig.system.getDrawPos(this.scroll.y);
		if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
		  b = (b % d + d) % d,
		  d = this.height * this.tilesize * ig.system.scale,
		  c = (c % d + d) % d;
		var d = Math.max(Math.floor(b / this.chunkSize), 0),
		  e = Math.max(Math.floor(c / this.chunkSize), 0),
		  f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
		  j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
		  n = this.preRenderedChunks[0].length,
		  m = this.preRenderedChunks.length;
		this.repeat || (f = Math.min(f, n), j = Math.min(j, m));
		for (var g = 0; e < j; e++) {
		  for (var t = 0, y = d; y < f; y++) {
			var z = this.preRenderedChunks[e % m][y % n],
			  A = -b + y * this.chunkSize - t,
			  B = -c + e * this.chunkSize - g;
			ig.system.context.drawImage(z, A, B);
			ig.Image.drawCount++;
			this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(A, B, this.chunkSize, this.chunkSize));
			this.repeat && z.width < this.chunkSize && A + z.width < ig.system.realWidth && (t += this.chunkSize - z.width, f++);
		  }
		  this.repeat && z.height < this.chunkSize && B + z.height < ig.system.realHeight && (g += this.chunkSize - z.height, j++);
		}
	  },
	  drawTiled: function () {
		for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -f - this.tilesize, f = ig.system.width + this.tilesize - f, m = ig.system.height + this.tilesize - j, g = -1, j = -j - this.tilesize; j < m; g++, j += this.tilesize) {
		  var t = g + e;
		  if (t >= this.height || 0 > t) {
			if (!this.repeat) continue;
			t = (t % this.height + this.height) % this.height;
		  }
		  for (var y = -1, z = n; z < f; y++, z += this.tilesize) {
			b = y + d;
			if (b >= this.width || 0 > b) {
			  if (!this.repeat) continue;
			  b = (b % this.width + this.width) % this.width;
			}
			if (b = this.data[t][b]) (c = this.anims[b - 1]) ? c.draw(z, j) : this.tiles.drawTile(z, j, b - 1, this.tilesize);
		  }
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function () {
	ig.Game = ig.Class.extend({
	  clearColor: "#000000",
	  gravity: 0,
	  screen: {
		x: 0,
		y: 0
	  },
	  _rscreen: {
		x: 0,
		y: 0
	  },
	  entities: [],
	  namedEntities: {},
	  collisionMap: ig.CollisionMap.staticNoCollision,
	  backgroundMaps: [],
	  backgroundAnims: {},
	  autoSort: !1,
	  sortBy: null,
	  cellSize: 64,
	  _deferredKill: [],
	  _levelToLoad: null,
	  _doSortEntities: !1,
	  staticInstantiate: function () {
		this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
		ig.game = this;
		return null;
	  },
	  loadLevel: function (b) {
		this.screen = {
		  x: 0,
		  y: 0
		};
		this.entities = [];
		this.namedEntities = {};
		for (var c = 0; c < b.entities.length; c++) {
		  var d = b.entities[c];
		  this.spawnEntity(d.type, d.x, d.y, d.settings);
		}
		this.sortEntities();
		this.collisionMap = ig.CollisionMap.staticNoCollision;
		this.backgroundMaps = [];
		for (c = 0; c < b.layer.length; c++) if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);else {
		  var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
		  e.anims = this.backgroundAnims[d.tilesetName] || {};
		  e.repeat = d.repeat;
		  e.distance = d.distance;
		  e.foreground = !!d.foreground;
		  e.preRender = !!d.preRender;
		  e.name = d.name;
		  this.backgroundMaps.push(e);
		}
		for (c = 0; c < this.entities.length; c++) this.entities[c].ready();
	  },
	  loadLevelDeferred: function (b) {
		this._levelToLoad = b;
	  },
	  getMapByName: function (b) {
		if ("collision" == b) return this.collisionMap;
		for (var c = 0; c < this.backgroundMaps.length; c++) if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
		return null;
	  },
	  getEntityByName: function (b) {
		return this.namedEntities[b];
	  },
	  getEntitiesByType: function (b) {
		b = "string" === typeof b ? ig.global[b] : b;
		for (var c = [], d = 0; d < this.entities.length; d++) {
		  var e = this.entities[d];
		  e instanceof b && !e._killed && c.push(e);
		}
		return c;
	  },
	  spawnEntity: function (b, c, d, e) {
		var f = "string" === typeof b ? ig.global[b] : b;
		if (!f) throw "Can't spawn entity of type " + b;
		b = new f(c, d, e || {});
		this.entities.push(b);
		b.name && (this.namedEntities[b.name] = b);
		return b;
	  },
	  sortEntities: function () {
		this.entities.sort(this.sortBy);
	  },
	  sortEntitiesDeferred: function () {
		this._doSortEntities = !0;
	  },
	  removeEntity: function (b) {
		b.name && delete this.namedEntities[b.name];
		b._killed = !0;
		b.type = ig.Entity.TYPE.NONE;
		b.checkAgainst = ig.Entity.TYPE.NONE;
		b.collides = ig.Entity.COLLIDES.NEVER;
		this._deferredKill.push(b);
	  },
	  run: function () {
		this.update();
		this.draw();
	  },
	  update: function () {
		this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
		this.updateEntities();
		this.checkEntities();
		for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
		this._deferredKill = [];
		if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
		for (var c in this.backgroundAnims) {
		  var b = this.backgroundAnims[c],
			d;
		  for (d in b) b[d].update();
		}
	  },
	  updateEntities: function () {
		for (var b = 0; b < this.entities.length; b++) {
		  var c = this.entities[b];
		  c._killed || c.update();
		}
	  },
	  draw: function () {
		this.clearColor && ig.system.clear(this.clearColor);
		this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
		this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
		var b;
		for (b = 0; b < this.backgroundMaps.length; b++) {
		  var c = this.backgroundMaps[b];
		  if (c.foreground) break;
		  c.setScreenPos(this.screen.x, this.screen.y);
		  c.draw();
		}
		this.drawEntities();
		for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw();
	  },
	  drawEntities: function () {
		for (var b = 0; b < this.entities.length; b++) this.entities[b].draw();
	  },
	  checkEntities: function () {
		for (var b = {}, c = 0; c < this.entities.length; c++) {
		  var d = this.entities[c];
		  if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER)) for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, m = Math.floor(d.pos.x / this.cellSize); m < j; m++) for (var g = f; g < n; g++) if (b[m]) {
			if (b[m][g]) {
			  for (var t = b[m][g], y = 0; y < t.length; y++) d.touches(t[y]) && !e[t[y].id] && (e[t[y].id] = !0, ig.Entity.checkPair(d, t[y]));
			  t.push(d);
			} else b[m][g] = [d];
		  } else b[m] = {}, b[m][g] = [d];
		}
	  }
	});
	ig.Game.SORT = {
	  Z_INDEX: function (b, c) {
		return b.zIndex - c.zIndex;
	  },
	  POS_X: function (b, c) {
		return b.pos.x + b.size.x - (c.pos.x + c.size.x);
	  },
	  POS_Y: function (b, c) {
		return b.pos.y + b.size.y - (c.pos.y + c.size.y);
	  }
	};
  });
  var Box2D = {
	SCALE: 0.1
  };
  (function (b, c) {
	function d() {}
	!(Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function (b, c, d) {
	  d.get instanceof Function && b.__defineGetter__(c, d.get);
	  d.set instanceof Function && b.__defineSetter__(c, d.set);
	});
	b.inherit = function (b, c) {
	  d.prototype = c.prototype;
	  b.prototype = new d();
	  b.prototype.constructor = b;
	};
	b.generateCallback = function (b, c) {
	  return function () {
		c.apply(b, arguments);
	  };
	};
	b.NVector = function (b) {
	  b === c && (b = 0);
	  for (var d = Array(b || 0), j = 0; j < b; ++j) d[j] = 0;
	  return d;
	};
	b.is = function (b, d) {
	  return null === b ? !1 : d instanceof Function && b instanceof d || b.constructor.__implements != c && b.constructor.__implements[d] ? !0 : !1;
	};
	b.parseUInt = function (b) {
	  return Math.abs(parseInt(b));
	};
  })(Box2D);
  var Vector = Array,
	Vector_a2j_Number = Box2D.NVector;
  "undefined" === typeof Box2D && (Box2D = {});
  "undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
  "undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
  "undefined" === typeof Box2D.Common && (Box2D.Common = {});
  "undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
  "undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
  "undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
  "undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
  "undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
  (function () {
	function b() {
	  b.b2AABB.apply(this, arguments);
	}
	function c() {
	  c.b2Bound.apply(this, arguments);
	}
	function d() {
	  d.b2BoundValues.apply(this, arguments);
	  this.constructor === d && this.b2BoundValues.apply(this, arguments);
	}
	function e() {
	  e.b2Collision.apply(this, arguments);
	}
	function f() {
	  f.b2ContactID.apply(this, arguments);
	  this.constructor === f && this.b2ContactID.apply(this, arguments);
	}
	function j() {
	  j.b2ContactPoint.apply(this, arguments);
	}
	function n() {
	  n.b2Distance.apply(this, arguments);
	}
	function m() {
	  m.b2DistanceInput.apply(this, arguments);
	}
	function g() {
	  g.b2DistanceOutput.apply(this, arguments);
	}
	function t() {
	  t.b2DistanceProxy.apply(this, arguments);
	}
	function y() {
	  y.b2DynamicTree.apply(this, arguments);
	  this.constructor === y && this.b2DynamicTree.apply(this, arguments);
	}
	function z() {
	  z.b2DynamicTreeBroadPhase.apply(this, arguments);
	}
	function A() {
	  A.b2DynamicTreeNode.apply(this, arguments);
	}
	function B() {
	  B.b2DynamicTreePair.apply(this, arguments);
	}
	function D() {
	  D.b2Manifold.apply(this, arguments);
	  this.constructor === D && this.b2Manifold.apply(this, arguments);
	}
	function E() {
	  E.b2ManifoldPoint.apply(this, arguments);
	  this.constructor === E && this.b2ManifoldPoint.apply(this, arguments);
	}
	function u() {
	  u.b2Point.apply(this, arguments);
	}
	function F() {
	  F.b2RayCastInput.apply(this, arguments);
	  this.constructor === F && this.b2RayCastInput.apply(this, arguments);
	}
	function K() {
	  K.b2RayCastOutput.apply(this, arguments);
	}
	function L() {
	  L.b2Segment.apply(this, arguments);
	}
	function N() {
	  N.b2SeparationFunction.apply(this, arguments);
	}
	function Q() {
	  Q.b2Simplex.apply(this, arguments);
	  this.constructor === Q && this.b2Simplex.apply(this, arguments);
	}
	function I() {
	  I.b2SimplexCache.apply(this, arguments);
	}
	function fa() {
	  fa.b2SimplexVertex.apply(this, arguments);
	}
	function O() {
	  O.b2TimeOfImpact.apply(this, arguments);
	}
	function P() {
	  P.b2TOIInput.apply(this, arguments);
	}
	function ba() {
	  ba.b2WorldManifold.apply(this, arguments);
	  this.constructor === ba && this.b2WorldManifold.apply(this, arguments);
	}
	function U() {
	  U.ClipVertex.apply(this, arguments);
	}
	function s() {
	  s.Features.apply(this, arguments);
	}
	function x() {
	  x.b2CircleShape.apply(this, arguments);
	  this.constructor === x && this.b2CircleShape.apply(this, arguments);
	}
	function G() {
	  G.b2EdgeChainDef.apply(this, arguments);
	  this.constructor === G && this.b2EdgeChainDef.apply(this, arguments);
	}
	function C() {
	  C.b2EdgeShape.apply(this, arguments);
	  this.constructor === C && this.b2EdgeShape.apply(this, arguments);
	}
	function H() {
	  H.b2MassData.apply(this, arguments);
	}
	function aa() {
	  aa.b2PolygonShape.apply(this, arguments);
	  this.constructor === aa && this.b2PolygonShape.apply(this, arguments);
	}
	function R() {
	  R.b2Shape.apply(this, arguments);
	  this.constructor === R && this.b2Shape.apply(this, arguments);
	}
	function l() {
	  l.b2Color.apply(this, arguments);
	  this.constructor === l && this.b2Color.apply(this, arguments);
	}
	function q() {
	  q.b2Settings.apply(this, arguments);
	}
	function J() {
	  J.b2Mat22.apply(this, arguments);
	  this.constructor === J && this.b2Mat22.apply(this, arguments);
	}
	function r() {
	  r.b2Mat33.apply(this, arguments);
	  this.constructor === r && this.b2Mat33.apply(this, arguments);
	}
	function M() {
	  M.b2Math.apply(this, arguments);
	}
	function V() {
	  V.b2Sweep.apply(this, arguments);
	}
	function ga() {
	  ga.b2Transform.apply(this, arguments);
	  this.constructor === ga && this.b2Transform.apply(this, arguments);
	}
	function ha() {
	  ha.b2Vec2.apply(this, arguments);
	  this.constructor === ha && this.b2Vec2.apply(this, arguments);
	}
	function ka() {
	  ka.b2Vec3.apply(this, arguments);
	  this.constructor === ka && this.b2Vec3.apply(this, arguments);
	}
	function qa() {
	  qa.b2Body.apply(this, arguments);
	  this.constructor === qa && this.b2Body.apply(this, arguments);
	}
	function na() {
	  na.b2BodyDef.apply(this, arguments);
	  this.constructor === na && this.b2BodyDef.apply(this, arguments);
	}
	function ua() {
	  ua.b2ContactFilter.apply(this, arguments);
	}
	function Y() {
	  Y.b2ContactImpulse.apply(this, arguments);
	}
	function Db() {
	  Db.b2ContactListener.apply(this, arguments);
	}
	function ya() {
	  ya.b2ContactManager.apply(this, arguments);
	  this.constructor === ya && this.b2ContactManager.apply(this, arguments);
	}
	function ab() {
	  ab.b2DebugDraw.apply(this, arguments);
	  this.constructor === ab && this.b2DebugDraw.apply(this, arguments);
	}
	function cb() {
	  cb.b2DestructionListener.apply(this, arguments);
	}
	function Ja() {
	  Ja.b2FilterData.apply(this, arguments);
	}
	function Ka() {
	  Ka.b2Fixture.apply(this, arguments);
	  this.constructor === Ka && this.b2Fixture.apply(this, arguments);
	}
	function db() {
	  db.b2FixtureDef.apply(this, arguments);
	  this.constructor === db && this.b2FixtureDef.apply(this, arguments);
	}
	function La() {
	  La.b2Island.apply(this, arguments);
	  this.constructor === La && this.b2Island.apply(this, arguments);
	}
	function nb() {
	  nb.b2TimeStep.apply(this, arguments);
	}
	function ob() {
	  ob.b2World.apply(this, arguments);
	  this.constructor === ob && this.b2World.apply(this, arguments);
	}
	function da() {
	  da.b2CircleContact.apply(this, arguments);
	}
	function p() {
	  p.b2Contact.apply(this, arguments);
	  this.constructor === p && this.b2Contact.apply(this, arguments);
	}
	function pb() {
	  pb.b2ContactConstraint.apply(this, arguments);
	  this.constructor === pb && this.b2ContactConstraint.apply(this, arguments);
	}
	function Eb() {
	  Eb.b2ContactConstraintPoint.apply(this, arguments);
	}
	function Fb() {
	  Fb.b2ContactEdge.apply(this, arguments);
	}
	function qb() {
	  qb.b2ContactFactory.apply(this, arguments);
	  this.constructor === qb && this.b2ContactFactory.apply(this, arguments);
	}
	function za() {
	  za.b2ContactRegister.apply(this, arguments);
	}
	function eb() {
	  eb.b2ContactResult.apply(this, arguments);
	}
	function ca() {
	  ca.b2ContactSolver.apply(this, arguments);
	  this.constructor === ca && this.b2ContactSolver.apply(this, arguments);
	}
	function hb() {
	  hb.b2EdgeAndCircleContact.apply(this, arguments);
	}
	function oa() {
	  oa.b2NullContact.apply(this, arguments);
	  this.constructor === oa && this.b2NullContact.apply(this, arguments);
	}
	function ra() {
	  ra.b2PolyAndCircleContact.apply(this, arguments);
	}
	function ib() {
	  ib.b2PolyAndEdgeContact.apply(this, arguments);
	}
	function sb() {
	  sb.b2PolygonContact.apply(this, arguments);
	}
	function tb() {
	  tb.b2PositionSolverManifold.apply(this, arguments);
	  this.constructor === tb && this.b2PositionSolverManifold.apply(this, arguments);
	}
	function Ib() {
	  Ib.b2BuoyancyController.apply(this, arguments);
	}
	function ub() {
	  ub.b2ConstantAccelController.apply(this, arguments);
	}
	function Ca() {
	  Ca.b2ConstantForceController.apply(this, arguments);
	}
	function fb() {
	  fb.b2Controller.apply(this, arguments);
	}
	function vb() {
	  vb.b2ControllerEdge.apply(this, arguments);
	}
	function Ta() {
	  Ta.b2GravityController.apply(this, arguments);
	}
	function Ua() {
	  Ua.b2TensorDampingController.apply(this, arguments);
	}
	function Va() {
	  Va.b2DistanceJoint.apply(this, arguments);
	  this.constructor === Va && this.b2DistanceJoint.apply(this, arguments);
	}
	function Oa() {
	  Oa.b2DistanceJointDef.apply(this, arguments);
	  this.constructor === Oa && this.b2DistanceJointDef.apply(this, arguments);
	}
	function Wa() {
	  Wa.b2FrictionJoint.apply(this, arguments);
	  this.constructor === Wa && this.b2FrictionJoint.apply(this, arguments);
	}
	function Ya() {
	  Ya.b2FrictionJointDef.apply(this, arguments);
	  this.constructor === Ya && this.b2FrictionJointDef.apply(this, arguments);
	}
	function Ea() {
	  Ea.b2GearJoint.apply(this, arguments);
	  this.constructor === Ea && this.b2GearJoint.apply(this, arguments);
	}
	function ea() {
	  ea.b2GearJointDef.apply(this, arguments);
	  this.constructor === ea && this.b2GearJointDef.apply(this, arguments);
	}
	function X() {
	  X.b2Jacobian.apply(this, arguments);
	}
	function Qa() {
	  Qa.b2Joint.apply(this, arguments);
	  this.constructor === Qa && this.b2Joint.apply(this, arguments);
	}
	function jb() {
	  jb.b2JointDef.apply(this, arguments);
	  this.constructor === jb && this.b2JointDef.apply(this, arguments);
	}
	function Na() {
	  Na.b2JointEdge.apply(this, arguments);
	}
	function Za() {
	  Za.b2LineJoint.apply(this, arguments);
	  this.constructor === Za && this.b2LineJoint.apply(this, arguments);
	}
	function gb() {
	  gb.b2LineJointDef.apply(this, arguments);
	  this.constructor === gb && this.b2LineJointDef.apply(this, arguments);
	}
	function Pa() {
	  Pa.b2MouseJoint.apply(this, arguments);
	  this.constructor === Pa && this.b2MouseJoint.apply(this, arguments);
	}
	function xa() {
	  xa.b2MouseJointDef.apply(this, arguments);
	  this.constructor === xa && this.b2MouseJointDef.apply(this, arguments);
	}
	function Fa() {
	  Fa.b2PrismaticJoint.apply(this, arguments);
	  this.constructor === Fa && this.b2PrismaticJoint.apply(this, arguments);
	}
	function wa() {
	  wa.b2PrismaticJointDef.apply(this, arguments);
	  this.constructor === wa && this.b2PrismaticJointDef.apply(this, arguments);
	}
	function Z() {
	  Z.b2PulleyJoint.apply(this, arguments);
	  this.constructor === Z && this.b2PulleyJoint.apply(this, arguments);
	}
	function ma() {
	  ma.b2PulleyJointDef.apply(this, arguments);
	  this.constructor === ma && this.b2PulleyJointDef.apply(this, arguments);
	}
	function la() {
	  la.b2RevoluteJoint.apply(this, arguments);
	  this.constructor === la && this.b2RevoluteJoint.apply(this, arguments);
	}
	function ja() {
	  ja.b2RevoluteJointDef.apply(this, arguments);
	  this.constructor === ja && this.b2RevoluteJointDef.apply(this, arguments);
	}
	function Aa() {
	  Aa.b2WeldJoint.apply(this, arguments);
	  this.constructor === Aa && this.b2WeldJoint.apply(this, arguments);
	}
	function Ra() {
	  Ra.b2WeldJointDef.apply(this, arguments);
	  this.constructor === Ra && this.b2WeldJointDef.apply(this, arguments);
	}
	Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
	Box2D.Collision.b2AABB = b;
	Box2D.Collision.b2Bound = c;
	Box2D.Collision.b2BoundValues = d;
	Box2D.Collision.b2Collision = e;
	Box2D.Collision.b2ContactID = f;
	Box2D.Collision.b2ContactPoint = j;
	Box2D.Collision.b2Distance = n;
	Box2D.Collision.b2DistanceInput = m;
	Box2D.Collision.b2DistanceOutput = g;
	Box2D.Collision.b2DistanceProxy = t;
	Box2D.Collision.b2DynamicTree = y;
	Box2D.Collision.b2DynamicTreeBroadPhase = z;
	Box2D.Collision.b2DynamicTreeNode = A;
	Box2D.Collision.b2DynamicTreePair = B;
	Box2D.Collision.b2Manifold = D;
	Box2D.Collision.b2ManifoldPoint = E;
	Box2D.Collision.b2Point = u;
	Box2D.Collision.b2RayCastInput = F;
	Box2D.Collision.b2RayCastOutput = K;
	Box2D.Collision.b2Segment = L;
	Box2D.Collision.b2SeparationFunction = N;
	Box2D.Collision.b2Simplex = Q;
	Box2D.Collision.b2SimplexCache = I;
	Box2D.Collision.b2SimplexVertex = fa;
	Box2D.Collision.b2TimeOfImpact = O;
	Box2D.Collision.b2TOIInput = P;
	Box2D.Collision.b2WorldManifold = ba;
	Box2D.Collision.ClipVertex = U;
	Box2D.Collision.Features = s;
	Box2D.Collision.Shapes.b2CircleShape = x;
	Box2D.Collision.Shapes.b2EdgeChainDef = G;
	Box2D.Collision.Shapes.b2EdgeShape = C;
	Box2D.Collision.Shapes.b2MassData = H;
	Box2D.Collision.Shapes.b2PolygonShape = aa;
	Box2D.Collision.Shapes.b2Shape = R;
	Box2D.Common.b2internal = "Box2D.Common.b2internal";
	Box2D.Common.b2Color = l;
	Box2D.Common.b2Settings = q;
	Box2D.Common.Math.b2Mat22 = J;
	Box2D.Common.Math.b2Mat33 = r;
	Box2D.Common.Math.b2Math = M;
	Box2D.Common.Math.b2Sweep = V;
	Box2D.Common.Math.b2Transform = ga;
	Box2D.Common.Math.b2Vec2 = ha;
	Box2D.Common.Math.b2Vec3 = ka;
	Box2D.Dynamics.b2Body = qa;
	Box2D.Dynamics.b2BodyDef = na;
	Box2D.Dynamics.b2ContactFilter = ua;
	Box2D.Dynamics.b2ContactImpulse = Y;
	Box2D.Dynamics.b2ContactListener = Db;
	Box2D.Dynamics.b2ContactManager = ya;
	Box2D.Dynamics.b2DebugDraw = ab;
	Box2D.Dynamics.b2DestructionListener = cb;
	Box2D.Dynamics.b2FilterData = Ja;
	Box2D.Dynamics.b2Fixture = Ka;
	Box2D.Dynamics.b2FixtureDef = db;
	Box2D.Dynamics.b2Island = La;
	Box2D.Dynamics.b2TimeStep = nb;
	Box2D.Dynamics.b2World = ob;
	Box2D.Dynamics.Contacts.b2CircleContact = da;
	Box2D.Dynamics.Contacts.b2Contact = p;
	Box2D.Dynamics.Contacts.b2ContactConstraint = pb;
	Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Eb;
	Box2D.Dynamics.Contacts.b2ContactEdge = Fb;
	Box2D.Dynamics.Contacts.b2ContactFactory = qb;
	Box2D.Dynamics.Contacts.b2ContactRegister = za;
	Box2D.Dynamics.Contacts.b2ContactResult = eb;
	Box2D.Dynamics.Contacts.b2ContactSolver = ca;
	Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = hb;
	Box2D.Dynamics.Contacts.b2NullContact = oa;
	Box2D.Dynamics.Contacts.b2PolyAndCircleContact = ra;
	Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = ib;
	Box2D.Dynamics.Contacts.b2PolygonContact = sb;
	Box2D.Dynamics.Contacts.b2PositionSolverManifold = tb;
	Box2D.Dynamics.Controllers.b2BuoyancyController = Ib;
	Box2D.Dynamics.Controllers.b2ConstantAccelController = ub;
	Box2D.Dynamics.Controllers.b2ConstantForceController = Ca;
	Box2D.Dynamics.Controllers.b2Controller = fb;
	Box2D.Dynamics.Controllers.b2ControllerEdge = vb;
	Box2D.Dynamics.Controllers.b2GravityController = Ta;
	Box2D.Dynamics.Controllers.b2TensorDampingController = Ua;
	Box2D.Dynamics.Joints.b2DistanceJoint = Va;
	Box2D.Dynamics.Joints.b2DistanceJointDef = Oa;
	Box2D.Dynamics.Joints.b2FrictionJoint = Wa;
	Box2D.Dynamics.Joints.b2FrictionJointDef = Ya;
	Box2D.Dynamics.Joints.b2GearJoint = Ea;
	Box2D.Dynamics.Joints.b2GearJointDef = ea;
	Box2D.Dynamics.Joints.b2Jacobian = X;
	Box2D.Dynamics.Joints.b2Joint = Qa;
	Box2D.Dynamics.Joints.b2JointDef = jb;
	Box2D.Dynamics.Joints.b2JointEdge = Na;
	Box2D.Dynamics.Joints.b2LineJoint = Za;
	Box2D.Dynamics.Joints.b2LineJointDef = gb;
	Box2D.Dynamics.Joints.b2MouseJoint = Pa;
	Box2D.Dynamics.Joints.b2MouseJointDef = xa;
	Box2D.Dynamics.Joints.b2PrismaticJoint = Fa;
	Box2D.Dynamics.Joints.b2PrismaticJointDef = wa;
	Box2D.Dynamics.Joints.b2PulleyJoint = Z;
	Box2D.Dynamics.Joints.b2PulleyJointDef = ma;
	Box2D.Dynamics.Joints.b2RevoluteJoint = la;
	Box2D.Dynamics.Joints.b2RevoluteJointDef = ja;
	Box2D.Dynamics.Joints.b2WeldJoint = Aa;
	Box2D.Dynamics.Joints.b2WeldJointDef = Ra;
  })();
  Box2D.postDefs = [];
  (function () {
	var b = Box2D.Collision.Shapes.b2CircleShape,
	  c = Box2D.Collision.Shapes.b2PolygonShape,
	  d = Box2D.Collision.Shapes.b2Shape,
	  e = Box2D.Common.b2Settings,
	  f = Box2D.Common.Math.b2Math,
	  j = Box2D.Common.Math.b2Sweep,
	  n = Box2D.Common.Math.b2Transform,
	  m = Box2D.Common.Math.b2Vec2,
	  g = Box2D.Collision.b2AABB,
	  t = Box2D.Collision.b2Bound,
	  y = Box2D.Collision.b2BoundValues,
	  z = Box2D.Collision.b2Collision,
	  A = Box2D.Collision.b2ContactID,
	  B = Box2D.Collision.b2ContactPoint,
	  D = Box2D.Collision.b2Distance,
	  E = Box2D.Collision.b2DistanceInput,
	  u = Box2D.Collision.b2DistanceOutput,
	  F = Box2D.Collision.b2DistanceProxy,
	  K = Box2D.Collision.b2DynamicTree,
	  L = Box2D.Collision.b2DynamicTreeBroadPhase,
	  N = Box2D.Collision.b2DynamicTreeNode,
	  Q = Box2D.Collision.b2DynamicTreePair,
	  I = Box2D.Collision.b2Manifold,
	  fa = Box2D.Collision.b2ManifoldPoint,
	  O = Box2D.Collision.b2Point,
	  P = Box2D.Collision.b2RayCastInput,
	  ba = Box2D.Collision.b2RayCastOutput,
	  U = Box2D.Collision.b2Segment,
	  s = Box2D.Collision.b2SeparationFunction,
	  x = Box2D.Collision.b2Simplex,
	  G = Box2D.Collision.b2SimplexCache,
	  C = Box2D.Collision.b2SimplexVertex,
	  H = Box2D.Collision.b2TimeOfImpact,
	  aa = Box2D.Collision.b2TOIInput,
	  R = Box2D.Collision.b2WorldManifold,
	  l = Box2D.Collision.ClipVertex,
	  q = Box2D.Collision.Features,
	  J = Box2D.Collision.IBroadPhase;
	g.b2AABB = function () {
	  this.lowerBound = new m();
	  this.upperBound = new m();
	};
	g.prototype.IsValid = function () {
	  var b = this.upperBound.y - this.lowerBound.y;
	  return 0 <= this.upperBound.x - this.lowerBound.x && 0 <= b && this.lowerBound.IsValid() && this.upperBound.IsValid();
	};
	g.prototype.GetCenter = function () {
	  return new m((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
	};
	g.prototype.GetExtents = function () {
	  return new m((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
	};
	g.prototype.Contains = function (b) {
	  return this.lowerBound.x <= b.lowerBound.x && this.lowerBound.y <= b.lowerBound.y && b.upperBound.x <= this.upperBound.x && b.upperBound.y <= this.upperBound.y;
	};
	g.prototype.RayCast = function (b, c) {
	  var d = -Number.MAX_VALUE,
		l = Number.MAX_VALUE,
		e = c.p1.x,
		g = c.p1.y,
		f = c.p2.x - c.p1.x,
		q = c.p2.y - c.p1.y,
		s = Math.abs(q),
		j = b.normal,
		m = 0,
		x = 0,
		C = 0;
	  if (Math.abs(f) < Number.MIN_VALUE) {
		if (e < this.lowerBound.x || this.upperBound.x < e) return !1;
	  } else if (m = 1 / f, x = (this.lowerBound.x - e) * m, m *= this.upperBound.x - e, C = -1, x > m && (C = x, x = m, m = C, C = 1), x > d && (j.x = C, j.y = 0, d = x), l = Math.min(l, m), d > l) return !1;
	  if (s < Number.MIN_VALUE) {
		if (g < this.lowerBound.y || this.upperBound.y < g) return !1;
	  } else if (m = 1 / q, x = (this.lowerBound.y - g) * m, m *= this.upperBound.y - g, C = -1, x > m && (C = x, x = m, m = C, C = 1), x > d && (j.y = C, j.x = 0, d = x), l = Math.min(l, m), d > l) return !1;
	  b.fraction = d;
	  return !0;
	};
	g.prototype.TestOverlap = function (b) {
	  var c = b.lowerBound.y - this.upperBound.y,
		d = this.lowerBound.y - b.upperBound.y;
	  return 0 < b.lowerBound.x - this.upperBound.x || 0 < c || 0 < this.lowerBound.x - b.upperBound.x || 0 < d ? !1 : !0;
	};
	g.Combine = function (b, c) {
	  var d = new g();
	  d.Combine(b, c);
	  return d;
	};
	g.prototype.Combine = function (b, c) {
	  this.lowerBound.x = Math.min(b.lowerBound.x, c.lowerBound.x);
	  this.lowerBound.y = Math.min(b.lowerBound.y, c.lowerBound.y);
	  this.upperBound.x = Math.max(b.upperBound.x, c.upperBound.x);
	  this.upperBound.y = Math.max(b.upperBound.y, c.upperBound.y);
	};
	t.b2Bound = function () {};
	t.prototype.IsLower = function () {
	  return 0 == (this.value & 1);
	};
	t.prototype.IsUpper = function () {
	  return 1 == (this.value & 1);
	};
	t.prototype.Swap = function (b) {
	  var c = this.value,
		d = this.proxy,
		l = this.stabbingCount;
	  this.value = b.value;
	  this.proxy = b.proxy;
	  this.stabbingCount = b.stabbingCount;
	  b.value = c;
	  b.proxy = d;
	  b.stabbingCount = l;
	};
	y.b2BoundValues = function () {};
	y.prototype.b2BoundValues = function () {
	  this.lowerValues = new Vector_a2j_Number();
	  this.lowerValues[0] = 0;
	  this.lowerValues[1] = 0;
	  this.upperValues = new Vector_a2j_Number();
	  this.upperValues[0] = 0;
	  this.upperValues[1] = 0;
	};
	z.b2Collision = function () {};
	z.ClipSegmentToLine = function (b, c, d, l) {
	  void 0 === l && (l = 0);
	  var e,
		g = 0;
	  e = c[0];
	  var f = e.v;
	  e = c[1];
	  var q = e.v,
		s = d.x * f.x + d.y * f.y - l;
	  e = d.x * q.x + d.y * q.y - l;
	  0 >= s && b[g++].Set(c[0]);
	  0 >= e && b[g++].Set(c[1]);
	  0 > s * e && (d = s / (s - e), e = b[g], e = e.v, e.x = f.x + d * (q.x - f.x), e.y = f.y + d * (q.y - f.y), e = b[g], e.id = (0 < s ? c[0] : c[1]).id, ++g);
	  return g;
	};
	z.EdgeSeparation = function (b, c, d, l, e) {
	  void 0 === d && (d = 0);
	  parseInt(b.m_vertexCount);
	  var g = b.m_vertices;
	  b = b.m_normals;
	  var f = parseInt(l.m_vertexCount),
		q = l.m_vertices,
		s,
		j;
	  s = c.R;
	  j = b[d];
	  b = s.col1.x * j.x + s.col2.x * j.y;
	  l = s.col1.y * j.x + s.col2.y * j.y;
	  s = e.R;
	  var m = s.col1.x * b + s.col1.y * l;
	  s = s.col2.x * b + s.col2.y * l;
	  for (var x = 0, C = Number.MAX_VALUE, J = 0; J < f; ++J) j = q[J], j = j.x * m + j.y * s, j < C && (C = j, x = J);
	  j = g[d];
	  s = c.R;
	  d = c.position.x + (s.col1.x * j.x + s.col2.x * j.y);
	  c = c.position.y + (s.col1.y * j.x + s.col2.y * j.y);
	  j = q[x];
	  s = e.R;
	  g = e.position.x + (s.col1.x * j.x + s.col2.x * j.y);
	  e = e.position.y + (s.col1.y * j.x + s.col2.y * j.y);
	  return (g - d) * b + (e - c) * l;
	};
	z.FindMaxSeparation = function (b, c, d, l, e) {
	  var g = parseInt(c.m_vertexCount),
		f = c.m_normals,
		s,
		q;
	  q = e.R;
	  s = l.m_centroid;
	  var j = e.position.x + (q.col1.x * s.x + q.col2.x * s.y),
		m = e.position.y + (q.col1.y * s.x + q.col2.y * s.y);
	  q = d.R;
	  s = c.m_centroid;
	  j -= d.position.x + (q.col1.x * s.x + q.col2.x * s.y);
	  m -= d.position.y + (q.col1.y * s.x + q.col2.y * s.y);
	  q = j * d.R.col1.x + m * d.R.col1.y;
	  for (var m = j * d.R.col2.x + m * d.R.col2.y, j = 0, x = -Number.MAX_VALUE, C = 0; C < g; ++C) s = f[C], s = s.x * q + s.y * m, s > x && (x = s, j = C);
	  f = z.EdgeSeparation(c, d, j, l, e);
	  s = parseInt(0 <= j - 1 ? j - 1 : g - 1);
	  q = z.EdgeSeparation(c, d, s, l, e);
	  var m = parseInt(j + 1 < g ? j + 1 : 0),
		x = z.EdgeSeparation(c, d, m, l, e),
		J = 0,
		G = 0;
	  if (q > f && q > x) G = -1, C = s, J = q;else if (x > f) G = 1, C = m, J = x;else return b[0] = j, f;
	  for (;;) if (j = -1 == G ? 0 <= C - 1 ? C - 1 : g - 1 : C + 1 < g ? C + 1 : 0, f = z.EdgeSeparation(c, d, j, l, e), f > J) C = j, J = f;else break;
	  b[0] = C;
	  return J;
	};
	z.FindIncidentEdge = function (b, c, d, l, e, g) {
	  void 0 === l && (l = 0);
	  parseInt(c.m_vertexCount);
	  var f = c.m_normals,
		s = parseInt(e.m_vertexCount);
	  c = e.m_vertices;
	  e = e.m_normals;
	  var q;
	  q = d.R;
	  d = f[l];
	  var f = q.col1.x * d.x + q.col2.x * d.y,
		j = q.col1.y * d.x + q.col2.y * d.y;
	  q = g.R;
	  d = q.col1.x * f + q.col1.y * j;
	  j = q.col2.x * f + q.col2.y * j;
	  f = d;
	  q = 0;
	  for (var m = Number.MAX_VALUE, x = 0; x < s; ++x) d = e[x], d = f * d.x + j * d.y, d < m && (m = d, q = x);
	  e = parseInt(q);
	  f = parseInt(e + 1 < s ? e + 1 : 0);
	  s = b[0];
	  d = c[e];
	  q = g.R;
	  s.v.x = g.position.x + (q.col1.x * d.x + q.col2.x * d.y);
	  s.v.y = g.position.y + (q.col1.y * d.x + q.col2.y * d.y);
	  s.id.features.referenceEdge = l;
	  s.id.features.incidentEdge = e;
	  s.id.features.incidentVertex = 0;
	  s = b[1];
	  d = c[f];
	  q = g.R;
	  s.v.x = g.position.x + (q.col1.x * d.x + q.col2.x * d.y);
	  s.v.y = g.position.y + (q.col1.y * d.x + q.col2.y * d.y);
	  s.id.features.referenceEdge = l;
	  s.id.features.incidentEdge = f;
	  s.id.features.incidentVertex = 1;
	};
	z.MakeClipPointVector = function () {
	  var b = new Vector(2);
	  b[0] = new l();
	  b[1] = new l();
	  return b;
	};
	z.CollidePolygons = function (b, c, d, l, g) {
	  var f;
	  b.m_pointCount = 0;
	  var s = c.m_radius + l.m_radius;
	  z.s_edgeAO[0] = 0;
	  var q = z.FindMaxSeparation(z.s_edgeAO, c, d, l, g);
	  f = z.s_edgeAO[0];
	  if (!(q > s)) {
		var j;
		z.s_edgeBO[0] = 0;
		var m = z.FindMaxSeparation(z.s_edgeBO, l, g, c, d);
		j = z.s_edgeBO[0];
		if (!(m > s)) {
		  var x = 0,
			C = 0;
		  m > 0.98 * q + 0.001 ? (q = l, l = c, c = g, x = j, b.m_type = I.e_faceB, C = 1) : (q = c, c = d, d = g, x = f, b.m_type = I.e_faceA, C = 0);
		  f = z.s_incidentEdge;
		  z.FindIncidentEdge(f, q, c, x, l, d);
		  j = parseInt(q.m_vertexCount);
		  g = q.m_vertices;
		  var q = g[x],
			J;
		  J = x + 1 < j ? g[parseInt(x + 1)] : g[0];
		  x = z.s_localTangent;
		  x.Set(J.x - q.x, J.y - q.y);
		  x.Normalize();
		  g = z.s_localNormal;
		  g.x = x.y;
		  g.y = -x.x;
		  l = z.s_planePoint;
		  l.Set(0.5 * (q.x + J.x), 0.5 * (q.y + J.y));
		  m = z.s_tangent;
		  j = c.R;
		  m.x = j.col1.x * x.x + j.col2.x * x.y;
		  m.y = j.col1.y * x.x + j.col2.y * x.y;
		  var G = z.s_tangent2;
		  G.x = -m.x;
		  G.y = -m.y;
		  x = z.s_normal;
		  x.x = m.y;
		  x.y = -m.x;
		  var u = z.s_v11,
			H = z.s_v12;
		  u.x = c.position.x + (j.col1.x * q.x + j.col2.x * q.y);
		  u.y = c.position.y + (j.col1.y * q.x + j.col2.y * q.y);
		  H.x = c.position.x + (j.col1.x * J.x + j.col2.x * J.y);
		  H.y = c.position.y + (j.col1.y * J.x + j.col2.y * J.y);
		  c = x.x * u.x + x.y * u.y;
		  j = m.x * H.x + m.y * H.y + s;
		  J = z.s_clipPoints1;
		  q = z.s_clipPoints2;
		  H = z.ClipSegmentToLine(J, f, G, -m.x * u.x - m.y * u.y + s);
		  if (!(2 > H) && (H = z.ClipSegmentToLine(q, J, m, j), !(2 > H))) {
			b.m_localPlaneNormal.SetV(g);
			b.m_localPoint.SetV(l);
			for (l = g = 0; l < e.b2_maxManifoldPoints; ++l) f = q[l], x.x * f.v.x + x.y * f.v.y - c <= s && (m = b.m_points[g], j = d.R, G = f.v.x - d.position.x, u = f.v.y - d.position.y, m.m_localPoint.x = G * j.col1.x + u * j.col1.y, m.m_localPoint.y = G * j.col2.x + u * j.col2.y, m.m_id.Set(f.id), m.m_id.features.flip = C, ++g);
			b.m_pointCount = g;
		  }
		}
	  }
	};
	z.CollideCircles = function (b, c, d, l, e) {
	  b.m_pointCount = 0;
	  var g, f;
	  g = d.R;
	  f = c.m_p;
	  var q = d.position.x + (g.col1.x * f.x + g.col2.x * f.y);
	  d = d.position.y + (g.col1.y * f.x + g.col2.y * f.y);
	  g = e.R;
	  f = l.m_p;
	  q = e.position.x + (g.col1.x * f.x + g.col2.x * f.y) - q;
	  e = e.position.y + (g.col1.y * f.x + g.col2.y * f.y) - d;
	  g = c.m_radius + l.m_radius;
	  q * q + e * e > g * g || (b.m_type = I.e_circles, b.m_localPoint.SetV(c.m_p), b.m_localPlaneNormal.SetZero(), b.m_pointCount = 1, b.m_points[0].m_localPoint.SetV(l.m_p), b.m_points[0].m_id.key = 0);
	};
	z.CollidePolygonAndCircle = function (b, c, d, l, e) {
	  var g = b.m_pointCount = 0,
		f = 0,
		q,
		s;
	  s = e.R;
	  q = l.m_p;
	  var j = e.position.y + (s.col1.y * q.x + s.col2.y * q.y),
		g = e.position.x + (s.col1.x * q.x + s.col2.x * q.y) - d.position.x,
		f = j - d.position.y;
	  s = d.R;
	  d = g * s.col1.x + f * s.col1.y;
	  s = g * s.col2.x + f * s.col2.y;
	  var m = 0,
		j = -Number.MAX_VALUE;
	  e = c.m_radius + l.m_radius;
	  var x = parseInt(c.m_vertexCount),
		C = c.m_vertices;
	  c = c.m_normals;
	  for (var J = 0; J < x; ++J) {
		q = C[J];
		g = d - q.x;
		f = s - q.y;
		q = c[J];
		g = q.x * g + q.y * f;
		if (g > e) return;
		g > j && (j = g, m = J);
	  }
	  g = parseInt(m);
	  f = parseInt(g + 1 < x ? g + 1 : 0);
	  q = C[g];
	  C = C[f];
	  if (j < Number.MIN_VALUE) b.m_pointCount = 1, b.m_type = I.e_faceA, b.m_localPlaneNormal.SetV(c[m]), b.m_localPoint.x = 0.5 * (q.x + C.x), b.m_localPoint.y = 0.5 * (q.y + C.y);else if (j = (d - C.x) * (q.x - C.x) + (s - C.y) * (q.y - C.y), 0 >= (d - q.x) * (C.x - q.x) + (s - q.y) * (C.y - q.y)) {
		if ((d - q.x) * (d - q.x) + (s - q.y) * (s - q.y) > e * e) return;
		b.m_pointCount = 1;
		b.m_type = I.e_faceA;
		b.m_localPlaneNormal.x = d - q.x;
		b.m_localPlaneNormal.y = s - q.y;
		b.m_localPlaneNormal.Normalize();
		b.m_localPoint.SetV(q);
	  } else if (0 >= j) {
		if ((d - C.x) * (d - C.x) + (s - C.y) * (s - C.y) > e * e) return;
		b.m_pointCount = 1;
		b.m_type = I.e_faceA;
		b.m_localPlaneNormal.x = d - C.x;
		b.m_localPlaneNormal.y = s - C.y;
		b.m_localPlaneNormal.Normalize();
		b.m_localPoint.SetV(C);
	  } else {
		m = 0.5 * (q.x + C.x);
		q = 0.5 * (q.y + C.y);
		j = (d - m) * c[g].x + (s - q) * c[g].y;
		if (j > e) return;
		b.m_pointCount = 1;
		b.m_type = I.e_faceA;
		b.m_localPlaneNormal.x = c[g].x;
		b.m_localPlaneNormal.y = c[g].y;
		b.m_localPlaneNormal.Normalize();
		b.m_localPoint.Set(m, q);
	  }
	  b.m_points[0].m_localPoint.SetV(l.m_p);
	  b.m_points[0].m_id.key = 0;
	};
	z.TestOverlap = function (b, c) {
	  var d = c.lowerBound,
		l = b.upperBound,
		e = d.x - l.x,
		g = d.y - l.y,
		d = b.lowerBound,
		l = c.upperBound,
		f = d.y - l.y;
	  return 0 < e || 0 < g || 0 < d.x - l.x || 0 < f ? !1 : !0;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.b2Collision.s_incidentEdge = z.MakeClipPointVector();
	  Box2D.Collision.b2Collision.s_clipPoints1 = z.MakeClipPointVector();
	  Box2D.Collision.b2Collision.s_clipPoints2 = z.MakeClipPointVector();
	  Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
	  Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
	  Box2D.Collision.b2Collision.s_localTangent = new m();
	  Box2D.Collision.b2Collision.s_localNormal = new m();
	  Box2D.Collision.b2Collision.s_planePoint = new m();
	  Box2D.Collision.b2Collision.s_normal = new m();
	  Box2D.Collision.b2Collision.s_tangent = new m();
	  Box2D.Collision.b2Collision.s_tangent2 = new m();
	  Box2D.Collision.b2Collision.s_v11 = new m();
	  Box2D.Collision.b2Collision.s_v12 = new m();
	  Box2D.Collision.b2Collision.b2CollidePolyTempVec = new m();
	  Box2D.Collision.b2Collision.b2_nullFeature = 255;
	});
	A.b2ContactID = function () {
	  this.features = new q();
	};
	A.prototype.b2ContactID = function () {
	  this.features._m_id = this;
	};
	A.prototype.Set = function (b) {
	  this.key = b._key;
	};
	A.prototype.Copy = function () {
	  var b = new A();
	  b.key = this.key;
	  return b;
	};
	Object.defineProperty(A.prototype, "key", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._key;
	  }
	});
	Object.defineProperty(A.prototype, "key", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._key = b;
		this.features._referenceEdge = this._key & 255;
		this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
		this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
		this.features._flip = (this._key & 4278190080) >> 24 & 255;
	  }
	});
	B.b2ContactPoint = function () {
	  this.position = new m();
	  this.velocity = new m();
	  this.normal = new m();
	  this.id = new A();
	};
	D.b2Distance = function () {};
	D.Distance = function (b, c, d) {
	  ++D.b2_gjkCalls;
	  var l = d.proxyA,
		g = d.proxyB,
		q = d.transformA,
		s = d.transformB,
		j = D.s_simplex;
	  j.ReadCache(c, l, q, g, s);
	  var x = j.m_vertices,
		C = D.s_saveA,
		J = D.s_saveB,
		G = 0;
	  j.GetClosestPoint().LengthSquared();
	  for (var u = 0, H, R = 0; 20 > R;) {
		G = j.m_count;
		for (u = 0; u < G; u++) C[u] = x[u].indexA, J[u] = x[u].indexB;
		switch (j.m_count) {
		  case 1:
			break;
		  case 2:
			j.Solve2();
			break;
		  case 3:
			j.Solve3();
			break;
		  default:
			e.b2Assert(!1);
		}
		if (3 == j.m_count) break;
		H = j.GetClosestPoint();
		H.LengthSquared();
		u = j.GetSearchDirection();
		if (u.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
		H = x[j.m_count];
		H.indexA = l.GetSupport(f.MulTMV(q.R, u.GetNegative()));
		H.wA = f.MulX(q, l.GetVertex(H.indexA));
		H.indexB = g.GetSupport(f.MulTMV(s.R, u));
		H.wB = f.MulX(s, g.GetVertex(H.indexB));
		H.w = f.SubtractVV(H.wB, H.wA);
		++R;
		++D.b2_gjkIters;
		for (var n = !1, u = 0; u < G; u++) if (H.indexA == C[u] && H.indexB == J[u]) {
		  n = !0;
		  break;
		}
		if (n) break;
		++j.m_count;
	  }
	  D.b2_gjkMaxIters = f.Max(D.b2_gjkMaxIters, R);
	  j.GetWitnessPoints(b.pointA, b.pointB);
	  b.distance = f.SubtractVV(b.pointA, b.pointB).Length();
	  b.iterations = R;
	  j.WriteCache(c);
	  d.useRadii && (c = l.m_radius, g = g.m_radius, b.distance > c + g && b.distance > Number.MIN_VALUE ? (b.distance -= c + g, d = f.SubtractVV(b.pointB, b.pointA), d.Normalize(), b.pointA.x += c * d.x, b.pointA.y += c * d.y, b.pointB.x -= g * d.x, b.pointB.y -= g * d.y) : (H = new m(), H.x = 0.5 * (b.pointA.x + b.pointB.x), H.y = 0.5 * (b.pointA.y + b.pointB.y), b.pointA.x = b.pointB.x = H.x, b.pointA.y = b.pointB.y = H.y, b.distance = 0));
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.b2Distance.s_simplex = new x();
	  Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
	  Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
	});
	E.b2DistanceInput = function () {};
	u.b2DistanceOutput = function () {
	  this.pointA = new m();
	  this.pointB = new m();
	};
	F.b2DistanceProxy = function () {};
	F.prototype.Set = function (l) {
	  switch (l.GetType()) {
		case d.e_circleShape:
		  l = l instanceof b ? l : null;
		  this.m_vertices = new Vector(1, !0);
		  this.m_vertices[0] = l.m_p;
		  this.m_count = 1;
		  this.m_radius = l.m_radius;
		  break;
		case d.e_polygonShape:
		  l = l instanceof c ? l : null;
		  this.m_vertices = l.m_vertices;
		  this.m_count = l.m_vertexCount;
		  this.m_radius = l.m_radius;
		  break;
		default:
		  e.b2Assert(!1);
	  }
	};
	F.prototype.GetSupport = function (b) {
	  for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, l = 1; l < this.m_count; ++l) {
		var e = this.m_vertices[l].x * b.x + this.m_vertices[l].y * b.y;
		e > d && (c = l, d = e);
	  }
	  return c;
	};
	F.prototype.GetSupportVertex = function (b) {
	  for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, l = 1; l < this.m_count; ++l) {
		var e = this.m_vertices[l].x * b.x + this.m_vertices[l].y * b.y;
		e > d && (c = l, d = e);
	  }
	  return this.m_vertices[c];
	};
	F.prototype.GetVertexCount = function () {
	  return this.m_count;
	};
	F.prototype.GetVertex = function (b) {
	  void 0 === b && (b = 0);
	  e.b2Assert(0 <= b && b < this.m_count);
	  return this.m_vertices[b];
	};
	K.b2DynamicTree = function () {};
	K.prototype.b2DynamicTree = function () {
	  this.m_freeList = this.m_root = null;
	  this.m_insertionCount = this.m_path = 0;
	};
	K.prototype.CreateProxy = function (b, c) {
	  var d = this.AllocateNode(),
		l = e.b2_aabbExtension,
		g = e.b2_aabbExtension;
	  d.aabb.lowerBound.x = b.lowerBound.x - l;
	  d.aabb.lowerBound.y = b.lowerBound.y - g;
	  d.aabb.upperBound.x = b.upperBound.x + l;
	  d.aabb.upperBound.y = b.upperBound.y + g;
	  d.userData = c;
	  this.InsertLeaf(d);
	  return d;
	};
	K.prototype.DestroyProxy = function (b) {
	  this.RemoveLeaf(b);
	  this.FreeNode(b);
	};
	K.prototype.MoveProxy = function (b, c, d) {
	  e.b2Assert(b.IsLeaf());
	  if (b.aabb.Contains(c)) return !1;
	  this.RemoveLeaf(b);
	  var l = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.x ? d.x : -d.x);
	  d = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.y ? d.y : -d.y);
	  b.aabb.lowerBound.x = c.lowerBound.x - l;
	  b.aabb.lowerBound.y = c.lowerBound.y - d;
	  b.aabb.upperBound.x = c.upperBound.x + l;
	  b.aabb.upperBound.y = c.upperBound.y + d;
	  this.InsertLeaf(b);
	  return !0;
	};
	K.prototype.Rebalance = function (b) {
	  void 0 === b && (b = 0);
	  if (null != this.m_root) for (var c = 0; c < b; c++) {
		for (var d = this.m_root, l = 0; !1 == d.IsLeaf();) d = this.m_path >> l & 1 ? d.child2 : d.child1, l = l + 1 & 31;
		++this.m_path;
		this.RemoveLeaf(d);
		this.InsertLeaf(d);
	  }
	};
	K.prototype.GetFatAABB = function (b) {
	  return b.aabb;
	};
	K.prototype.GetUserData = function (b) {
	  return b.userData;
	};
	K.prototype.Query = function (b, c) {
	  if (null != this.m_root) {
		var d = new Vector(),
		  l = 0;
		for (d[l++] = this.m_root; 0 < l;) {
		  var e = d[--l];
		  if (e.aabb.TestOverlap(c)) if (e.IsLeaf()) {
			if (!b(e)) break;
		  } else d[l++] = e.child1, d[l++] = e.child2;
		}
	  }
	};
	K.prototype.RayCast = function (b, c) {
	  if (null != this.m_root) {
		var d = c.p1,
		  l = c.p2,
		  e = f.SubtractVV(d, l);
		e.Normalize();
		var e = f.CrossFV(1, e),
		  q = f.AbsV(e),
		  s = c.maxFraction,
		  j = new g(),
		  m = 0,
		  x = 0,
		  m = d.x + s * (l.x - d.x),
		  x = d.y + s * (l.y - d.y);
		j.lowerBound.x = Math.min(d.x, m);
		j.lowerBound.y = Math.min(d.y, x);
		j.upperBound.x = Math.max(d.x, m);
		j.upperBound.y = Math.max(d.y, x);
		var C = new Vector(),
		  J = 0;
		for (C[J++] = this.m_root; 0 < J;) if (s = C[--J], !1 != s.aabb.TestOverlap(j) && (m = s.aabb.GetCenter(), x = s.aabb.GetExtents(), !(0 < Math.abs(e.x * (d.x - m.x) + e.y * (d.y - m.y)) - q.x * x.x - q.y * x.y))) if (s.IsLeaf()) {
		  m = new P();
		  m.p1 = c.p1;
		  m.p2 = c.p2;
		  m.maxFraction = c.maxFraction;
		  s = b(m, s);
		  if (0 == s) break;
		  0 < s && (m = d.x + s * (l.x - d.x), x = d.y + s * (l.y - d.y), j.lowerBound.x = Math.min(d.x, m), j.lowerBound.y = Math.min(d.y, x), j.upperBound.x = Math.max(d.x, m), j.upperBound.y = Math.max(d.y, x));
		} else C[J++] = s.child1, C[J++] = s.child2;
	  }
	};
	K.prototype.AllocateNode = function () {
	  if (this.m_freeList) {
		var b = this.m_freeList;
		this.m_freeList = b.parent;
		b.parent = null;
		b.child1 = null;
		b.child2 = null;
		return b;
	  }
	  return new N();
	};
	K.prototype.FreeNode = function (b) {
	  b.parent = this.m_freeList;
	  this.m_freeList = b;
	};
	K.prototype.InsertLeaf = function (b) {
	  ++this.m_insertionCount;
	  if (null == this.m_root) this.m_root = b, this.m_root.parent = null;else {
		var c = b.aabb.GetCenter(),
		  d = this.m_root;
		if (!1 == d.IsLeaf()) {
		  do var l = d.child1,
			d = d.child2,
			d = Math.abs((l.aabb.lowerBound.x + l.aabb.upperBound.x) / 2 - c.x) + Math.abs((l.aabb.lowerBound.y + l.aabb.upperBound.y) / 2 - c.y) < Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - c.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) / 2 - c.y) ? l : d; while (!1 == d.IsLeaf());
		}
		c = d.parent;
		l = this.AllocateNode();
		l.parent = c;
		l.userData = null;
		l.aabb.Combine(b.aabb, d.aabb);
		if (c) {
		  d.parent.child1 == d ? c.child1 = l : c.child2 = l;
		  l.child1 = d;
		  l.child2 = b;
		  d.parent = l;
		  b.parent = l;
		  do {
			if (c.aabb.Contains(l.aabb)) break;
			c.aabb.Combine(c.child1.aabb, c.child2.aabb);
			l = c;
			c = c.parent;
		  } while (c);
		} else l.child1 = d, l.child2 = b, d.parent = l, this.m_root = b.parent = l;
	  }
	};
	K.prototype.RemoveLeaf = function (b) {
	  if (b == this.m_root) this.m_root = null;else {
		var c = b.parent,
		  d = c.parent;
		b = c.child1 == b ? c.child2 : c.child1;
		if (d) {
		  d.child1 == c ? d.child1 = b : d.child2 = b;
		  b.parent = d;
		  for (this.FreeNode(c); d;) {
			c = d.aabb;
			d.aabb = g.Combine(d.child1.aabb, d.child2.aabb);
			if (c.Contains(d.aabb)) break;
			d = d.parent;
		  }
		} else this.m_root = b, b.parent = null, this.FreeNode(c);
	  }
	};
	L.b2DynamicTreeBroadPhase = function () {
	  this.m_tree = new K();
	  this.m_moveBuffer = new Vector();
	  this.m_pairBuffer = new Vector();
	  this.m_pairCount = 0;
	};
	L.prototype.CreateProxy = function (b, c) {
	  var d = this.m_tree.CreateProxy(b, c);
	  ++this.m_proxyCount;
	  this.BufferMove(d);
	  return d;
	};
	L.prototype.DestroyProxy = function (b) {
	  this.UnBufferMove(b);
	  --this.m_proxyCount;
	  this.m_tree.DestroyProxy(b);
	};
	L.prototype.MoveProxy = function (b, c, d) {
	  this.m_tree.MoveProxy(b, c, d) && this.BufferMove(b);
	};
	L.prototype.TestOverlap = function (b, c) {
	  var d = this.m_tree.GetFatAABB(b),
		l = this.m_tree.GetFatAABB(c);
	  return d.TestOverlap(l);
	};
	L.prototype.GetUserData = function (b) {
	  return this.m_tree.GetUserData(b);
	};
	L.prototype.GetFatAABB = function (b) {
	  return this.m_tree.GetFatAABB(b);
	};
	L.prototype.GetProxyCount = function () {
	  return this.m_proxyCount;
	};
	L.prototype.UpdatePairs = function (b) {
	  for (var c = this, d = c.m_pairCount = 0, l, d = 0; d < c.m_moveBuffer.length; ++d) {
		l = c.m_moveBuffer[d];
		var e = c.m_tree.GetFatAABB(l);
		c.m_tree.Query(function (b) {
		  if (b == l) return !0;
		  c.m_pairCount == c.m_pairBuffer.length && (c.m_pairBuffer[c.m_pairCount] = new Q());
		  var d = c.m_pairBuffer[c.m_pairCount];
		  d.proxyA = b < l ? b : l;
		  d.proxyB = b >= l ? b : l;
		  ++c.m_pairCount;
		  return !0;
		}, e);
	  }
	  for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount;) {
		var e = c.m_pairBuffer[d],
		  g = c.m_tree.GetUserData(e.proxyA),
		  f = c.m_tree.GetUserData(e.proxyB);
		b(g, f);
		for (++d; d < c.m_pairCount;) {
		  g = c.m_pairBuffer[d];
		  if (g.proxyA != e.proxyA || g.proxyB != e.proxyB) break;
		  ++d;
		}
	  }
	};
	L.prototype.Query = function (b, c) {
	  this.m_tree.Query(b, c);
	};
	L.prototype.RayCast = function (b, c) {
	  this.m_tree.RayCast(b, c);
	};
	L.prototype.Validate = function () {};
	L.prototype.Rebalance = function (b) {
	  void 0 === b && (b = 0);
	  this.m_tree.Rebalance(b);
	};
	L.prototype.BufferMove = function (b) {
	  this.m_moveBuffer[this.m_moveBuffer.length] = b;
	};
	L.prototype.UnBufferMove = function (b) {
	  this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)), 1);
	};
	L.prototype.ComparePairs = function () {
	  return 0;
	};
	L.__implements = {};
	L.__implements[J] = !0;
	N.b2DynamicTreeNode = function () {
	  this.aabb = new g();
	};
	N.prototype.IsLeaf = function () {
	  return null == this.child1;
	};
	Q.b2DynamicTreePair = function () {};
	I.b2Manifold = function () {
	  this.m_pointCount = 0;
	};
	I.prototype.b2Manifold = function () {
	  this.m_points = new Vector(e.b2_maxManifoldPoints);
	  for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] = new fa();
	  this.m_localPlaneNormal = new m();
	  this.m_localPoint = new m();
	};
	I.prototype.Reset = function () {
	  for (var b = 0; b < e.b2_maxManifoldPoints; b++) (this.m_points[b] instanceof fa ? this.m_points[b] : null).Reset();
	  this.m_localPlaneNormal.SetZero();
	  this.m_localPoint.SetZero();
	  this.m_pointCount = this.m_type = 0;
	};
	I.prototype.Set = function (b) {
	  this.m_pointCount = b.m_pointCount;
	  for (var c = 0; c < e.b2_maxManifoldPoints; c++) (this.m_points[c] instanceof fa ? this.m_points[c] : null).Set(b.m_points[c]);
	  this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
	  this.m_localPoint.SetV(b.m_localPoint);
	  this.m_type = b.m_type;
	};
	I.prototype.Copy = function () {
	  var b = new I();
	  b.Set(this);
	  return b;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.b2Manifold.e_circles = 1;
	  Box2D.Collision.b2Manifold.e_faceA = 2;
	  Box2D.Collision.b2Manifold.e_faceB = 4;
	});
	fa.b2ManifoldPoint = function () {
	  this.m_localPoint = new m();
	  this.m_id = new A();
	};
	fa.prototype.b2ManifoldPoint = function () {
	  this.Reset();
	};
	fa.prototype.Reset = function () {
	  this.m_localPoint.SetZero();
	  this.m_tangentImpulse = this.m_normalImpulse = 0;
	  this.m_id.key = 0;
	};
	fa.prototype.Set = function (b) {
	  this.m_localPoint.SetV(b.m_localPoint);
	  this.m_normalImpulse = b.m_normalImpulse;
	  this.m_tangentImpulse = b.m_tangentImpulse;
	  this.m_id.Set(b.m_id);
	};
	O.b2Point = function () {
	  this.p = new m();
	};
	O.prototype.Support = function () {
	  return this.p;
	};
	O.prototype.GetFirstVertex = function () {
	  return this.p;
	};
	P.b2RayCastInput = function () {
	  this.p1 = new m();
	  this.p2 = new m();
	};
	P.prototype.b2RayCastInput = function (b, c, d) {
	  void 0 === b && (b = null);
	  void 0 === c && (c = null);
	  void 0 === d && (d = 1);
	  b && this.p1.SetV(b);
	  c && this.p2.SetV(c);
	  this.maxFraction = d;
	};
	ba.b2RayCastOutput = function () {
	  this.normal = new m();
	};
	U.b2Segment = function () {
	  this.p1 = new m();
	  this.p2 = new m();
	};
	U.prototype.TestSegment = function (b, c, d, l) {
	  void 0 === l && (l = 0);
	  var e = d.p1,
		g = d.p2.x - e.x,
		f = d.p2.y - e.y;
	  d = this.p2.y - this.p1.y;
	  var q = -(this.p2.x - this.p1.x),
		s = 100 * Number.MIN_VALUE,
		j = -(g * d + f * q);
	  if (j > s) {
		var m = e.x - this.p1.x,
		  x = e.y - this.p1.y,
		  e = m * d + x * q;
		if (0 <= e && e <= l * j && (l = -g * x + f * m, -s * j <= l && l <= j * (1 + s))) return e /= j, l = Math.sqrt(d * d + q * q), b[0] = e, c.Set(d / l, q / l), !0;
	  }
	  return !1;
	};
	U.prototype.Extend = function (b) {
	  this.ExtendForward(b);
	  this.ExtendBackward(b);
	};
	U.prototype.ExtendForward = function (b) {
	  var c = this.p2.x - this.p1.x,
		d = this.p2.y - this.p1.y;
	  b = Math.min(0 < c ? (b.upperBound.x - this.p1.x) / c : 0 > c ? (b.lowerBound.x - this.p1.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y - this.p1.y) / d : 0 > d ? (b.lowerBound.y - this.p1.y) / d : Number.POSITIVE_INFINITY);
	  this.p2.x = this.p1.x + c * b;
	  this.p2.y = this.p1.y + d * b;
	};
	U.prototype.ExtendBackward = function (b) {
	  var c = -this.p2.x + this.p1.x,
		d = -this.p2.y + this.p1.y;
	  b = Math.min(0 < c ? (b.upperBound.x - this.p2.x) / c : 0 > c ? (b.lowerBound.x - this.p2.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y - this.p2.y) / d : 0 > d ? (b.lowerBound.y - this.p2.y) / d : Number.POSITIVE_INFINITY);
	  this.p1.x = this.p2.x + c * b;
	  this.p1.y = this.p2.y + d * b;
	};
	s.b2SeparationFunction = function () {
	  this.m_localPoint = new m();
	  this.m_axis = new m();
	};
	s.prototype.Initialize = function (b, c, d, l, g) {
	  this.m_proxyA = c;
	  this.m_proxyB = l;
	  var q = parseInt(b.count);
	  e.b2Assert(0 < q && 3 > q);
	  var j,
		x,
		C,
		J,
		u = 0,
		G = 0;
	  1 == q ? (this.m_type = s.e_points, j = this.m_proxyA.GetVertex(b.indexA[0]), x = this.m_proxyB.GetVertex(b.indexB[0]), q = j, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), l = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = x, b = g.R, C = g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), this.m_axis.x = C - c, this.m_axis.y = J - l, this.m_axis.Normalize()) : (b.indexB[0] == b.indexB[1] ? (this.m_type = s.e_faceA, c = this.m_proxyA.GetVertex(b.indexA[0]), l = this.m_proxyA.GetVertex(b.indexA[1]), x = this.m_proxyB.GetVertex(b.indexB[0]), this.m_localPoint.x = 0.5 * (c.x + l.x), this.m_localPoint.y = 0.5 * (c.y + l.y), this.m_axis = f.CrossVF(f.SubtractVV(l, c), 1), this.m_axis.Normalize(), q = this.m_axis, b = d.R, u = b.col1.x * q.x + b.col2.x * q.y, G = b.col1.y * q.x + b.col2.y * q.y, q = this.m_localPoint, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), l = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = x, b = g.R, C = g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), u = (C - c) * u + (J - l) * G) : b.indexA[0] == b.indexA[0] ? (this.m_type = s.e_faceB, C = this.m_proxyB.GetVertex(b.indexB[0]), J = this.m_proxyB.GetVertex(b.indexB[1]), j = this.m_proxyA.GetVertex(b.indexA[0]), this.m_localPoint.x = 0.5 * (C.x + J.x), this.m_localPoint.y = 0.5 * (C.y + J.y), this.m_axis = f.CrossVF(f.SubtractVV(J, C), 1), this.m_axis.Normalize(), q = this.m_axis, b = g.R, u = b.col1.x * q.x + b.col2.x * q.y, G = b.col1.y * q.x + b.col2.y * q.y, q = this.m_localPoint, b = g.R, C = g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = j, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), l = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), u = (c - C) * u + (l - J) * G) : (c = this.m_proxyA.GetVertex(b.indexA[0]), l = this.m_proxyA.GetVertex(b.indexA[1]), C = this.m_proxyB.GetVertex(b.indexB[0]), J = this.m_proxyB.GetVertex(b.indexB[1]), f.MulX(d, j), j = f.MulMV(d.R, f.SubtractVV(l, c)), f.MulX(g, x), u = f.MulMV(g.R, f.SubtractVV(J, C)), g = j.x * j.x + j.y * j.y, x = u.x * u.x + u.y * u.y, b = f.SubtractVV(u, j), d = j.x * b.x + j.y * b.y, b = u.x * b.x + u.y * b.y, j = j.x * u.x + j.y * u.y, G = g * x - j * j, u = 0, 0 != G && (u = f.Clamp((j * b - d * x) / G, 0, 1)), 0 > (j * u + b) / x && (u = f.Clamp((j - d) / g, 0, 1)), j = new m(), j.x = c.x + u * (l.x - c.x), j.y = c.y + u * (l.y - c.y), x = new m(), x.x = C.x + u * (J.x - C.x), x.y = C.y + u * (J.y - C.y), 0 == u || 1 == u ? (this.m_type = s.e_faceB, this.m_axis = f.CrossVF(f.SubtractVV(J, C), 1), this.m_axis.Normalize(), this.m_localPoint = x) : (this.m_type = s.e_faceA, this.m_axis = f.CrossVF(f.SubtractVV(l, c), 1), this.m_localPoint = j)), 0 > u && this.m_axis.NegativeSelf());
	};
	s.prototype.Evaluate = function (b, c) {
	  var d,
		l,
		g = 0;
	  switch (this.m_type) {
		case s.e_points:
		  return d = f.MulTMV(b.R, this.m_axis), l = f.MulTMV(c.R, this.m_axis.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), l = this.m_proxyB.GetSupportVertex(l), d = f.MulX(b, d), l = f.MulX(c, l), (l.x - d.x) * this.m_axis.x + (l.y - d.y) * this.m_axis.y;
		case s.e_faceA:
		  return g = f.MulMV(b.R, this.m_axis), d = f.MulX(b, this.m_localPoint), l = f.MulTMV(c.R, g.GetNegative()), l = this.m_proxyB.GetSupportVertex(l), l = f.MulX(c, l), (l.x - d.x) * g.x + (l.y - d.y) * g.y;
		case s.e_faceB:
		  return g = f.MulMV(c.R, this.m_axis), l = f.MulX(c, this.m_localPoint), d = f.MulTMV(b.R, g.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), d = f.MulX(b, d), (d.x - l.x) * g.x + (d.y - l.y) * g.y;
		default:
		  return e.b2Assert(!1), 0;
	  }
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.b2SeparationFunction.e_points = 1;
	  Box2D.Collision.b2SeparationFunction.e_faceA = 2;
	  Box2D.Collision.b2SeparationFunction.e_faceB = 4;
	});
	x.b2Simplex = function () {
	  this.m_v1 = new C();
	  this.m_v2 = new C();
	  this.m_v3 = new C();
	  this.m_vertices = new Vector(3);
	};
	x.prototype.b2Simplex = function () {
	  this.m_vertices[0] = this.m_v1;
	  this.m_vertices[1] = this.m_v2;
	  this.m_vertices[2] = this.m_v3;
	};
	x.prototype.ReadCache = function (b, c, d, l, g) {
	  e.b2Assert(0 <= b.count && 3 >= b.count);
	  var q, s;
	  this.m_count = b.count;
	  for (var j = this.m_vertices, m = 0; m < this.m_count; m++) {
		var x = j[m];
		x.indexA = b.indexA[m];
		x.indexB = b.indexB[m];
		q = c.GetVertex(x.indexA);
		s = l.GetVertex(x.indexB);
		x.wA = f.MulX(d, q);
		x.wB = f.MulX(g, s);
		x.w = f.SubtractVV(x.wB, x.wA);
		x.a = 0;
	  }
	  if (1 < this.m_count && (b = b.metric, q = this.GetMetric(), q < 0.5 * b || 2 * b < q || q < Number.MIN_VALUE)) this.m_count = 0;
	  0 == this.m_count && (x = j[0], x.indexA = 0, x.indexB = 0, q = c.GetVertex(0), s = l.GetVertex(0), x.wA = f.MulX(d, q), x.wB = f.MulX(g, s), x.w = f.SubtractVV(x.wB, x.wA), this.m_count = 1);
	};
	x.prototype.WriteCache = function (b) {
	  b.metric = this.GetMetric();
	  b.count = Box2D.parseUInt(this.m_count);
	  for (var c = this.m_vertices, d = 0; d < this.m_count; d++) b.indexA[d] = Box2D.parseUInt(c[d].indexA), b.indexB[d] = Box2D.parseUInt(c[d].indexB);
	};
	x.prototype.GetSearchDirection = function () {
	  switch (this.m_count) {
		case 1:
		  return this.m_v1.w.GetNegative();
		case 2:
		  var b = f.SubtractVV(this.m_v2.w, this.m_v1.w);
		  return 0 < f.CrossVV(b, this.m_v1.w.GetNegative()) ? f.CrossFV(1, b) : f.CrossVF(b, 1);
		default:
		  return e.b2Assert(!1), new m();
	  }
	};
	x.prototype.GetClosestPoint = function () {
	  switch (this.m_count) {
		case 0:
		  return e.b2Assert(!1), new m();
		case 1:
		  return this.m_v1.w;
		case 2:
		  return new m(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
		default:
		  return e.b2Assert(!1), new m();
	  }
	};
	x.prototype.GetWitnessPoints = function (b, c) {
	  switch (this.m_count) {
		case 0:
		  e.b2Assert(!1);
		  break;
		case 1:
		  b.SetV(this.m_v1.wA);
		  c.SetV(this.m_v1.wB);
		  break;
		case 2:
		  b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
		  b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
		  c.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
		  c.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
		  break;
		case 3:
		  c.x = b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
		  c.y = b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
		  break;
		default:
		  e.b2Assert(!1);
	  }
	};
	x.prototype.GetMetric = function () {
	  switch (this.m_count) {
		case 0:
		  return e.b2Assert(!1), 0;
		case 1:
		  return 0;
		case 2:
		  return f.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
		case 3:
		  return f.CrossVV(f.SubtractVV(this.m_v2.w, this.m_v1.w), f.SubtractVV(this.m_v3.w, this.m_v1.w));
		default:
		  return e.b2Assert(!1), 0;
	  }
	};
	x.prototype.Solve2 = function () {
	  var b = this.m_v1.w,
		c = this.m_v2.w,
		d = f.SubtractVV(c, b),
		b = -(b.x * d.x + b.y * d.y);
	  0 >= b ? this.m_count = this.m_v1.a = 1 : (c = c.x * d.x + c.y * d.y, 0 >= c ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (d = 1 / (c + b), this.m_v1.a = c * d, this.m_v2.a = b * d, this.m_count = 2));
	};
	x.prototype.Solve3 = function () {
	  var b = this.m_v1.w,
		c = this.m_v2.w,
		d = this.m_v3.w,
		l = f.SubtractVV(c, b),
		e = f.Dot(b, l),
		g = f.Dot(c, l),
		e = -e,
		q = f.SubtractVV(d, b),
		s = f.Dot(b, q),
		j = f.Dot(d, q),
		s = -s,
		m = f.SubtractVV(d, c),
		x = f.Dot(c, m),
		m = f.Dot(d, m),
		x = -x,
		q = f.CrossVV(l, q),
		l = q * f.CrossVV(c, d),
		d = q * f.CrossVV(d, b),
		b = q * f.CrossVV(b, c);
	  0 >= e && 0 >= s ? this.m_count = this.m_v1.a = 1 : 0 < g && 0 < e && 0 >= b ? (j = 1 / (g + e), this.m_v1.a = g * j, this.m_v2.a = e * j, this.m_count = 2) : 0 < j && 0 < s && 0 >= d ? (g = 1 / (j + s), this.m_v1.a = j * g, this.m_v3.a = s * g, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= g && 0 >= x ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= j && 0 >= m ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < m && 0 < x && 0 >= l ? (g = 1 / (m + x), this.m_v2.a = m * g, this.m_v3.a = x * g, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (g = 1 / (l + d + b), this.m_v1.a = l * g, this.m_v2.a = d * g, this.m_v3.a = b * g, this.m_count = 3);
	};
	G.b2SimplexCache = function () {
	  this.indexA = new Vector_a2j_Number(3);
	  this.indexB = new Vector_a2j_Number(3);
	};
	C.b2SimplexVertex = function () {};
	C.prototype.Set = function (b) {
	  this.wA.SetV(b.wA);
	  this.wB.SetV(b.wB);
	  this.w.SetV(b.w);
	  this.a = b.a;
	  this.indexA = b.indexA;
	  this.indexB = b.indexB;
	};
	H.b2TimeOfImpact = function () {};
	H.TimeOfImpact = function (b) {
	  ++H.b2_toiCalls;
	  var c = b.proxyA,
		d = b.proxyB,
		l = b.sweepA,
		g = b.sweepB;
	  e.b2Assert(l.t0 == g.t0);
	  e.b2Assert(1 - l.t0 > Number.MIN_VALUE);
	  var q = c.m_radius + d.m_radius;
	  b = b.tolerance;
	  var s = 0,
		j = 0,
		m = 0;
	  H.s_cache.count = 0;
	  for (H.s_distanceInput.useRadii = !1;;) {
		l.GetTransform(H.s_xfA, s);
		g.GetTransform(H.s_xfB, s);
		H.s_distanceInput.proxyA = c;
		H.s_distanceInput.proxyB = d;
		H.s_distanceInput.transformA = H.s_xfA;
		H.s_distanceInput.transformB = H.s_xfB;
		D.Distance(H.s_distanceOutput, H.s_cache, H.s_distanceInput);
		if (0 >= H.s_distanceOutput.distance) {
		  s = 1;
		  break;
		}
		H.s_fcn.Initialize(H.s_cache, c, H.s_xfA, d, H.s_xfB);
		var x = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
		if (0 >= x) {
		  s = 1;
		  break;
		}
		0 == j && (m = x > q ? f.Max(q - b, 0.75 * q) : f.Max(x - b, 0.02 * q));
		if (x - m < 0.5 * b) {
		  if (0 == j) {
			s = 1;
			break;
		  }
		  break;
		}
		var C = s,
		  J = s,
		  u = 1;
		l.GetTransform(H.s_xfA, u);
		g.GetTransform(H.s_xfB, u);
		var G = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
		if (G >= m) {
		  s = 1;
		  break;
		}
		for (var R = 0;;) {
		  var n = 0,
			n = R & 1 ? J + (m - x) * (u - J) / (G - x) : 0.5 * (J + u);
		  l.GetTransform(H.s_xfA, n);
		  g.GetTransform(H.s_xfB, n);
		  var aa = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
		  if (f.Abs(aa - m) < 0.025 * b) {
			C = n;
			break;
		  }
		  aa > m ? (J = n, x = aa) : (u = n, G = aa);
		  ++R;
		  ++H.b2_toiRootIters;
		  if (50 == R) break;
		}
		H.b2_toiMaxRootIters = f.Max(H.b2_toiMaxRootIters, R);
		if (C < (1 + 100 * Number.MIN_VALUE) * s) break;
		s = C;
		j++;
		++H.b2_toiIters;
		if (1E3 == j) break;
	  }
	  H.b2_toiMaxIters = f.Max(H.b2_toiMaxIters, j);
	  return s;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
	  Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
	  Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
	  Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
	  Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
	  Box2D.Collision.b2TimeOfImpact.s_cache = new G();
	  Box2D.Collision.b2TimeOfImpact.s_distanceInput = new E();
	  Box2D.Collision.b2TimeOfImpact.s_xfA = new n();
	  Box2D.Collision.b2TimeOfImpact.s_xfB = new n();
	  Box2D.Collision.b2TimeOfImpact.s_fcn = new s();
	  Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new u();
	});
	aa.b2TOIInput = function () {
	  this.proxyA = new F();
	  this.proxyB = new F();
	  this.sweepA = new j();
	  this.sweepB = new j();
	};
	R.b2WorldManifold = function () {
	  this.m_normal = new m();
	};
	R.prototype.b2WorldManifold = function () {
	  this.m_points = new Vector(e.b2_maxManifoldPoints);
	  for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] = new m();
	};
	R.prototype.Initialize = function (b, c, d, l, e) {
	  void 0 === d && (d = 0);
	  void 0 === e && (e = 0);
	  if (0 != b.m_pointCount) {
		var g = 0,
		  f,
		  q,
		  s = 0,
		  j = 0,
		  m = 0,
		  x = 0,
		  C = 0;
		switch (b.m_type) {
		  case I.e_circles:
			q = c.R;
			f = b.m_localPoint;
			g = c.position.x + q.col1.x * f.x + q.col2.x * f.y;
			c = c.position.y + q.col1.y * f.x + q.col2.y * f.y;
			q = l.R;
			f = b.m_points[0].m_localPoint;
			b = l.position.x + q.col1.x * f.x + q.col2.x * f.y;
			l = l.position.y + q.col1.y * f.x + q.col2.y * f.y;
			f = b - g;
			q = l - c;
			s = f * f + q * q;
			s > Number.MIN_VALUE * Number.MIN_VALUE ? (s = Math.sqrt(s), this.m_normal.x = f / s, this.m_normal.y = q / s) : (this.m_normal.x = 1, this.m_normal.y = 0);
			f = c + d * this.m_normal.y;
			l -= e * this.m_normal.y;
			this.m_points[0].x = 0.5 * (g + d * this.m_normal.x + (b - e * this.m_normal.x));
			this.m_points[0].y = 0.5 * (f + l);
			break;
		  case I.e_faceA:
			q = c.R;
			f = b.m_localPlaneNormal;
			s = q.col1.x * f.x + q.col2.x * f.y;
			j = q.col1.y * f.x + q.col2.y * f.y;
			q = c.R;
			f = b.m_localPoint;
			m = c.position.x + q.col1.x * f.x + q.col2.x * f.y;
			x = c.position.y + q.col1.y * f.x + q.col2.y * f.y;
			this.m_normal.x = s;
			this.m_normal.y = j;
			for (g = 0; g < b.m_pointCount; g++) q = l.R, f = b.m_points[g].m_localPoint, C = l.position.x + q.col1.x * f.x + q.col2.x * f.y, f = l.position.y + q.col1.y * f.x + q.col2.y * f.y, this.m_points[g].x = C + 0.5 * (d - (C - m) * s - (f - x) * j - e) * s, this.m_points[g].y = f + 0.5 * (d - (C - m) * s - (f - x) * j - e) * j;
			break;
		  case I.e_faceB:
			q = l.R;
			f = b.m_localPlaneNormal;
			s = q.col1.x * f.x + q.col2.x * f.y;
			j = q.col1.y * f.x + q.col2.y * f.y;
			q = l.R;
			f = b.m_localPoint;
			m = l.position.x + q.col1.x * f.x + q.col2.x * f.y;
			x = l.position.y + q.col1.y * f.x + q.col2.y * f.y;
			this.m_normal.x = -s;
			this.m_normal.y = -j;
			for (g = 0; g < b.m_pointCount; g++) q = c.R, f = b.m_points[g].m_localPoint, C = c.position.x + q.col1.x * f.x + q.col2.x * f.y, f = c.position.y + q.col1.y * f.x + q.col2.y * f.y, this.m_points[g].x = C + 0.5 * (e - (C - m) * s - (f - x) * j - d) * s, this.m_points[g].y = f + 0.5 * (e - (C - m) * s - (f - x) * j - d) * j;
		}
	  }
	};
	l.ClipVertex = function () {
	  this.v = new m();
	  this.id = new A();
	};
	l.prototype.Set = function (b) {
	  this.v.SetV(b.v);
	  this.id.Set(b.id);
	};
	q.Features = function () {};
	Object.defineProperty(q.prototype, "referenceEdge", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._referenceEdge;
	  }
	});
	Object.defineProperty(q.prototype, "referenceEdge", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._referenceEdge = b;
		this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255;
	  }
	});
	Object.defineProperty(q.prototype, "incidentEdge", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._incidentEdge;
	  }
	});
	Object.defineProperty(q.prototype, "incidentEdge", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._incidentEdge = b;
		this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280;
	  }
	});
	Object.defineProperty(q.prototype, "incidentVertex", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._incidentVertex;
	  }
	});
	Object.defineProperty(q.prototype, "incidentVertex", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._incidentVertex = b;
		this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680;
	  }
	});
	Object.defineProperty(q.prototype, "flip", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._flip;
	  }
	});
	Object.defineProperty(q.prototype, "flip", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._flip = b;
		this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080;
	  }
	});
  })();
  (function () {
	var b = Box2D.Common.b2Settings,
	  c = Box2D.Collision.Shapes.b2CircleShape,
	  d = Box2D.Collision.Shapes.b2EdgeChainDef,
	  e = Box2D.Collision.Shapes.b2EdgeShape,
	  f = Box2D.Collision.Shapes.b2MassData,
	  j = Box2D.Collision.Shapes.b2PolygonShape,
	  n = Box2D.Collision.Shapes.b2Shape,
	  m = Box2D.Common.Math.b2Mat22,
	  g = Box2D.Common.Math.b2Math,
	  t = Box2D.Common.Math.b2Transform,
	  y = Box2D.Common.Math.b2Vec2,
	  z = Box2D.Collision.b2Distance,
	  A = Box2D.Collision.b2DistanceInput,
	  B = Box2D.Collision.b2DistanceOutput,
	  D = Box2D.Collision.b2DistanceProxy,
	  E = Box2D.Collision.b2SimplexCache;
	Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
	c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	c.b2CircleShape = function () {
	  Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
	  this.m_p = new y();
	};
	c.prototype.Copy = function () {
	  var b = new c();
	  b.Set(this);
	  return b;
	};
	c.prototype.Set = function (b) {
	  this.__super.Set.call(this, b);
	  Box2D.is(b, c) && this.m_p.SetV((b instanceof c ? b : null).m_p);
	};
	c.prototype.TestPoint = function (b, c) {
	  var d = b.R,
		e = b.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
		d = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
		e = c.x - e,
		d = c.y - d;
	  return e * e + d * d <= this.m_radius * this.m_radius;
	};
	c.prototype.RayCast = function (b, c, d) {
	  var e = d.R,
		g = c.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
	  d = c.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
	  var e = c.p2.x - c.p1.x,
		f = c.p2.y - c.p1.y,
		j = g * e + d * f,
		m = e * e + f * f,
		n = j * j - m * (g * g + d * d - this.m_radius * this.m_radius);
	  if (0 > n || m < Number.MIN_VALUE) return !1;
	  j = -(j + Math.sqrt(n));
	  return 0 <= j && j <= c.maxFraction * m ? (j /= m, b.fraction = j, b.normal.x = g + j * e, b.normal.y = d + j * f, b.normal.Normalize(), !0) : !1;
	};
	c.prototype.ComputeAABB = function (b, c) {
	  var d = c.R,
		e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
		d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
	  b.lowerBound.Set(e - this.m_radius, d - this.m_radius);
	  b.upperBound.Set(e + this.m_radius, d + this.m_radius);
	};
	c.prototype.ComputeMass = function (c, d) {
	  void 0 === d && (d = 0);
	  c.mass = d * b.b2_pi * this.m_radius * this.m_radius;
	  c.center.SetV(this.m_p);
	  c.I = c.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
	};
	c.prototype.ComputeSubmergedArea = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  d = g.MulX(d, this.m_p);
	  var f = -(g.Dot(b, d) - c);
	  if (f < -this.m_radius + Number.MIN_VALUE) return 0;
	  if (f > this.m_radius) return e.SetV(d), Math.PI * this.m_radius * this.m_radius;
	  c = this.m_radius * this.m_radius;
	  var j = f * f,
		f = c * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(c - j);
	  c = -2 / 3 * Math.pow(c - j, 1.5) / f;
	  e.x = d.x + b.x * c;
	  e.y = d.y + b.y * c;
	  return f;
	};
	c.prototype.GetLocalPosition = function () {
	  return this.m_p;
	};
	c.prototype.SetLocalPosition = function (b) {
	  this.m_p.SetV(b);
	};
	c.prototype.GetRadius = function () {
	  return this.m_radius;
	};
	c.prototype.SetRadius = function (b) {
	  void 0 === b && (b = 0);
	  this.m_radius = b;
	};
	c.prototype.b2CircleShape = function (b) {
	  void 0 === b && (b = 0);
	  this.__super.b2Shape.call(this);
	  this.m_type = n.e_circleShape;
	  this.m_radius = b;
	};
	d.b2EdgeChainDef = function () {};
	d.prototype.b2EdgeChainDef = function () {
	  this.vertexCount = 0;
	  this.isALoop = !0;
	  this.vertices = [];
	};
	Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape);
	e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	e.b2EdgeShape = function () {
	  Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
	  this.s_supportVec = new y();
	  this.m_v1 = new y();
	  this.m_v2 = new y();
	  this.m_coreV1 = new y();
	  this.m_coreV2 = new y();
	  this.m_normal = new y();
	  this.m_direction = new y();
	  this.m_cornerDir1 = new y();
	  this.m_cornerDir2 = new y();
	};
	e.prototype.TestPoint = function () {
	  return !1;
	};
	e.prototype.RayCast = function (b, c, d) {
	  var e,
		g = c.p2.x - c.p1.x,
		f = c.p2.y - c.p1.y;
	  e = d.R;
	  var j = d.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
		m = d.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
		n = d.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - m;
	  d = -(d.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - j);
	  e = 100 * Number.MIN_VALUE;
	  var t = -(g * n + f * d);
	  if (t > e) {
		var j = c.p1.x - j,
		  z = c.p1.y - m,
		  m = j * n + z * d;
		if (0 <= m && m <= c.maxFraction * t && (c = -g * z + f * j, -e * t <= c && c <= t * (1 + e))) return b.fraction = m / t, c = Math.sqrt(n * n + d * d), b.normal.x = n / c, b.normal.y = d / c, !0;
	  }
	  return !1;
	};
	e.prototype.ComputeAABB = function (b, c) {
	  var d = c.R,
		e = c.position.x + (d.col1.x * this.m_v1.x + d.col2.x * this.m_v1.y),
		g = c.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
		f = c.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
		d = c.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
	  e < f ? (b.lowerBound.x = e, b.upperBound.x = f) : (b.lowerBound.x = f, b.upperBound.x = e);
	  g < d ? (b.lowerBound.y = g, b.upperBound.y = d) : (b.lowerBound.y = d, b.upperBound.y = g);
	};
	e.prototype.ComputeMass = function (b) {
	  b.mass = 0;
	  b.center.SetV(this.m_v1);
	  b.I = 0;
	};
	e.prototype.ComputeSubmergedArea = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  var f = new y(b.x * c, b.y * c),
		j = g.MulX(d, this.m_v1);
	  d = g.MulX(d, this.m_v2);
	  var m = g.Dot(b, j) - c;
	  b = g.Dot(b, d) - c;
	  if (0 < m) {
		if (0 < b) return 0;
		j.x = -b / (m - b) * j.x + m / (m - b) * d.x;
		j.y = -b / (m - b) * j.y + m / (m - b) * d.y;
	  } else 0 < b && (d.x = -b / (m - b) * j.x + m / (m - b) * d.x, d.y = -b / (m - b) * j.y + m / (m - b) * d.y);
	  e.x = (f.x + j.x + d.x) / 3;
	  e.y = (f.y + j.y + d.y) / 3;
	  return 0.5 * ((j.x - f.x) * (d.y - f.y) - (j.y - f.y) * (d.x - f.x));
	};
	e.prototype.GetLength = function () {
	  return this.m_length;
	};
	e.prototype.GetVertex1 = function () {
	  return this.m_v1;
	};
	e.prototype.GetVertex2 = function () {
	  return this.m_v2;
	};
	e.prototype.GetCoreVertex1 = function () {
	  return this.m_coreV1;
	};
	e.prototype.GetCoreVertex2 = function () {
	  return this.m_coreV2;
	};
	e.prototype.GetNormalVector = function () {
	  return this.m_normal;
	};
	e.prototype.GetDirectionVector = function () {
	  return this.m_direction;
	};
	e.prototype.GetCorner1Vector = function () {
	  return this.m_cornerDir1;
	};
	e.prototype.GetCorner2Vector = function () {
	  return this.m_cornerDir2;
	};
	e.prototype.Corner1IsConvex = function () {
	  return this.m_cornerConvex1;
	};
	e.prototype.Corner2IsConvex = function () {
	  return this.m_cornerConvex2;
	};
	e.prototype.GetFirstVertex = function (b) {
	  var c = b.R;
	  return new y(b.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y), b.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y));
	};
	e.prototype.GetNextEdge = function () {
	  return this.m_nextEdge;
	};
	e.prototype.GetPrevEdge = function () {
	  return this.m_prevEdge;
	};
	e.prototype.Support = function (b, c, d) {
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  var e = b.R,
		g = b.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
		f = b.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
		j = b.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
	  b = b.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
	  g * c + f * d > j * c + b * d ? (this.s_supportVec.x = g, this.s_supportVec.y = f) : (this.s_supportVec.x = j, this.s_supportVec.y = b);
	  return this.s_supportVec;
	};
	e.prototype.b2EdgeShape = function (c, d) {
	  this.__super.b2Shape.call(this);
	  this.m_type = n.e_edgeShape;
	  this.m_nextEdge = this.m_prevEdge = null;
	  this.m_v1 = c;
	  this.m_v2 = d;
	  this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
	  this.m_length = this.m_direction.Normalize();
	  this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
	  this.m_coreV1.Set(-b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
	  this.m_coreV2.Set(-b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
	  this.m_cornerDir1 = this.m_normal;
	  this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y);
	};
	e.prototype.SetPrevEdge = function (b, c, d, e) {
	  this.m_prevEdge = b;
	  this.m_coreV1 = c;
	  this.m_cornerDir1 = d;
	  this.m_cornerConvex1 = e;
	};
	e.prototype.SetNextEdge = function (b, c, d, e) {
	  this.m_nextEdge = b;
	  this.m_coreV2 = c;
	  this.m_cornerDir2 = d;
	  this.m_cornerConvex2 = e;
	};
	f.b2MassData = function () {
	  this.mass = 0;
	  this.center = new y(0, 0);
	  this.I = 0;
	};
	Box2D.inherit(j, Box2D.Collision.Shapes.b2Shape);
	j.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	j.b2PolygonShape = function () {
	  Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
	};
	j.prototype.Copy = function () {
	  var b = new j();
	  b.Set(this);
	  return b;
	};
	j.prototype.Set = function (b) {
	  this.__super.Set.call(this, b);
	  if (Box2D.is(b, j)) {
		b = b instanceof j ? b : null;
		this.m_centroid.SetV(b.m_centroid);
		this.m_vertexCount = b.m_vertexCount;
		this.Reserve(this.m_vertexCount);
		for (var c = 0; c < this.m_vertexCount; c++) this.m_vertices[c].SetV(b.m_vertices[c]), this.m_normals[c].SetV(b.m_normals[c]);
	  }
	};
	j.prototype.SetAsArray = function (b, c) {
	  void 0 === c && (c = 0);
	  for (var d = new Vector(), e = 0, g, e = 0; e < b.length; ++e) g = b[e], d.push(g);
	  this.SetAsVector(d, c);
	};
	j.AsArray = function (b, c) {
	  void 0 === c && (c = 0);
	  var d = new j();
	  d.SetAsArray(b, c);
	  return d;
	};
	j.prototype.SetAsVector = function (c, d) {
	  void 0 === d && (d = 0);
	  0 == d && (d = c.length);
	  b.b2Assert(2 <= d);
	  this.m_vertexCount = d;
	  this.Reserve(d);
	  for (var e = 0, e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(c[e]);
	  for (e = 0; e < this.m_vertexCount; ++e) {
		var f = parseInt(e),
		  m = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
		  f = g.SubtractVV(this.m_vertices[m], this.m_vertices[f]);
		b.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
		this.m_normals[e].SetV(g.CrossVF(f, 1));
		this.m_normals[e].Normalize();
	  }
	  this.m_centroid = j.ComputeCentroid(this.m_vertices, this.m_vertexCount);
	};
	j.AsVector = function (b, c) {
	  void 0 === c && (c = 0);
	  var d = new j();
	  d.SetAsVector(b, c);
	  return d;
	};
	j.prototype.SetAsBox = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.m_vertexCount = 4;
	  this.Reserve(4);
	  this.m_vertices[0].Set(-b, -c);
	  this.m_vertices[1].Set(b, -c);
	  this.m_vertices[2].Set(b, c);
	  this.m_vertices[3].Set(-b, c);
	  this.m_normals[0].Set(0, -1);
	  this.m_normals[1].Set(1, 0);
	  this.m_normals[2].Set(0, 1);
	  this.m_normals[3].Set(-1, 0);
	  this.m_centroid.SetZero();
	};
	j.AsBox = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  var d = new j();
	  d.SetAsBox(b, c);
	  return d;
	};
	j.prototype.SetAsOrientedBox = function (b, c, d, e) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = null);
	  void 0 === e && (e = 0);
	  this.m_vertexCount = 4;
	  this.Reserve(4);
	  this.m_vertices[0].Set(-b, -c);
	  this.m_vertices[1].Set(b, -c);
	  this.m_vertices[2].Set(b, c);
	  this.m_vertices[3].Set(-b, c);
	  this.m_normals[0].Set(0, -1);
	  this.m_normals[1].Set(1, 0);
	  this.m_normals[2].Set(0, 1);
	  this.m_normals[3].Set(-1, 0);
	  this.m_centroid = d;
	  b = new t();
	  b.position = d;
	  b.R.Set(e);
	  for (d = 0; d < this.m_vertexCount; ++d) this.m_vertices[d] = g.MulX(b, this.m_vertices[d]), this.m_normals[d] = g.MulMV(b.R, this.m_normals[d]);
	};
	j.AsOrientedBox = function (b, c, d, e) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = null);
	  void 0 === e && (e = 0);
	  var g = new j();
	  g.SetAsOrientedBox(b, c, d, e);
	  return g;
	};
	j.prototype.SetAsEdge = function (b, c) {
	  this.m_vertexCount = 2;
	  this.Reserve(2);
	  this.m_vertices[0].SetV(b);
	  this.m_vertices[1].SetV(c);
	  this.m_centroid.x = 0.5 * (b.x + c.x);
	  this.m_centroid.y = 0.5 * (b.y + c.y);
	  this.m_normals[0] = g.CrossVF(g.SubtractVV(c, b), 1);
	  this.m_normals[0].Normalize();
	  this.m_normals[1].x = -this.m_normals[0].x;
	  this.m_normals[1].y = -this.m_normals[0].y;
	};
	j.AsEdge = function (b, c) {
	  var d = new j();
	  d.SetAsEdge(b, c);
	  return d;
	};
	j.prototype.TestPoint = function (b, c) {
	  var d;
	  d = b.R;
	  for (var e = c.x - b.position.x, g = c.y - b.position.y, f = e * d.col1.x + g * d.col1.y, j = e * d.col2.x + g * d.col2.y, m = 0; m < this.m_vertexCount; ++m) if (d = this.m_vertices[m], e = f - d.x, g = j - d.y, d = this.m_normals[m], 0 < d.x * e + d.y * g) return !1;
	  return !0;
	};
	j.prototype.RayCast = function (b, c, d) {
	  var e = 0,
		g = c.maxFraction,
		f = 0,
		j = 0,
		m,
		n,
		f = c.p1.x - d.position.x,
		j = c.p1.y - d.position.y;
	  m = d.R;
	  var t = f * m.col1.x + j * m.col1.y,
		z = f * m.col2.x + j * m.col2.y,
		f = c.p2.x - d.position.x,
		j = c.p2.y - d.position.y;
	  m = d.R;
	  c = f * m.col1.x + j * m.col1.y - t;
	  m = f * m.col2.x + j * m.col2.y - z;
	  for (var A = -1, s = 0; s < this.m_vertexCount; ++s) {
		n = this.m_vertices[s];
		f = n.x - t;
		j = n.y - z;
		n = this.m_normals[s];
		f = n.x * f + n.y * j;
		j = n.x * c + n.y * m;
		if (0 == j) {
		  if (0 > f) return !1;
		} else 0 > j && f < e * j ? (e = f / j, A = s) : 0 < j && f < g * j && (g = f / j);
		if (g < e - Number.MIN_VALUE) return !1;
	  }
	  return 0 <= A ? (b.fraction = e, m = d.R, n = this.m_normals[A], b.normal.x = m.col1.x * n.x + m.col2.x * n.y, b.normal.y = m.col1.y * n.x + m.col2.y * n.y, !0) : !1;
	};
	j.prototype.ComputeAABB = function (b, c) {
	  for (var d = c.R, e = this.m_vertices[0], g = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), f = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), j = g, m = f, n = 1; n < this.m_vertexCount; ++n) var e = this.m_vertices[n], t = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), g = g < t ? g : t, f = f < e ? f : e, j = j > t ? j : t, m = m > e ? m : e;
	  b.lowerBound.x = g - this.m_radius;
	  b.lowerBound.y = f - this.m_radius;
	  b.upperBound.x = j + this.m_radius;
	  b.upperBound.y = m + this.m_radius;
	};
	j.prototype.ComputeMass = function (b, c) {
	  void 0 === c && (c = 0);
	  if (2 == this.m_vertexCount) b.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x), b.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y), b.mass = 0, b.I = 0;else {
		for (var d = 0, e = 0, g = 0, f = 0, j = 1 / 3, m = 0; m < this.m_vertexCount; ++m) var n = this.m_vertices[m], t = m + 1 < this.m_vertexCount ? this.m_vertices[parseInt(m + 1)] : this.m_vertices[0], z = n.x - 0, A = n.y - 0, s = t.x - 0, x = t.y - 0, G = z * x - A * s, C = 0.5 * G, g = g + C, d = d + C * j * (0 + n.x + t.x), e = e + C * j * (0 + n.y + t.y), n = z, f = f + G * (j * (0.25 * (n * n + s * n + s * s) + (0 * n + 0 * s)) + 0 + (j * (0.25 * (A * A + x * A + x * x) + (0 * A + 0 * x)) + 0));
		b.mass = c * g;
		b.center.Set(d * (1 / g), e * (1 / g));
		b.I = c * f;
	  }
	};
	j.prototype.ComputeSubmergedArea = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  var j = g.MulTMV(d.R, b),
		m = c - g.Dot(b, d.position),
		n = new Vector_a2j_Number(),
		t = 0,
		z = -1;
	  c = -1;
	  var A = !1;
	  for (b = b = 0; b < this.m_vertexCount; ++b) {
		n[b] = g.Dot(j, this.m_vertices[b]) - m;
		var B = n[b] < -Number.MIN_VALUE;
		0 < b && (B ? A || (z = b - 1, t++) : A && (c = b - 1, t++));
		A = B;
	  }
	  switch (t) {
		case 0:
		  return A ? (b = new f(), this.ComputeMass(b, 1), e.SetV(g.MulX(d, b.center)), b.mass) : 0;
		case 1:
		  -1 == z ? z = this.m_vertexCount - 1 : c = this.m_vertexCount - 1;
	  }
	  b = parseInt((z + 1) % this.m_vertexCount);
	  j = parseInt((c + 1) % this.m_vertexCount);
	  m = (0 - n[z]) / (n[b] - n[z]);
	  n = (0 - n[c]) / (n[j] - n[c]);
	  z = new y(this.m_vertices[z].x * (1 - m) + this.m_vertices[b].x * m, this.m_vertices[z].y * (1 - m) + this.m_vertices[b].y * m);
	  c = new y(this.m_vertices[c].x * (1 - n) + this.m_vertices[j].x * n, this.m_vertices[c].y * (1 - n) + this.m_vertices[j].y * n);
	  n = 0;
	  m = new y();
	  for (t = this.m_vertices[b]; b != j;) b = (b + 1) % this.m_vertexCount, A = b == j ? c : this.m_vertices[b], B = 0.5 * ((t.x - z.x) * (A.y - z.y) - (t.y - z.y) * (A.x - z.x)), n += B, m.x += B * (z.x + t.x + A.x) / 3, m.y += B * (z.y + t.y + A.y) / 3, t = A;
	  m.Multiply(1 / n);
	  e.SetV(g.MulX(d, m));
	  return n;
	};
	j.prototype.GetVertexCount = function () {
	  return this.m_vertexCount;
	};
	j.prototype.GetVertices = function () {
	  return this.m_vertices;
	};
	j.prototype.GetNormals = function () {
	  return this.m_normals;
	};
	j.prototype.GetSupport = function (b) {
	  for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
		var g = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
		g > d && (c = e, d = g);
	  }
	  return c;
	};
	j.prototype.GetSupportVertex = function (b) {
	  for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
		var g = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
		g > d && (c = e, d = g);
	  }
	  return this.m_vertices[c];
	};
	j.prototype.Validate = function () {
	  return !1;
	};
	j.prototype.b2PolygonShape = function () {
	  this.__super.b2Shape.call(this);
	  this.m_type = n.e_polygonShape;
	  this.m_centroid = new y();
	  this.m_vertices = new Vector();
	  this.m_normals = new Vector();
	};
	j.prototype.Reserve = function (b) {
	  void 0 === b && (b = 0);
	  for (var c = parseInt(this.m_vertices.length); c < b; c++) this.m_vertices[c] = new y(), this.m_normals[c] = new y();
	};
	j.ComputeCentroid = function (b, c) {
	  void 0 === c && (c = 0);
	  for (var d = new y(), e = 0, g = 1 / 3, f = 0; f < c; ++f) {
		var j = b[f],
		  m = f + 1 < c ? b[parseInt(f + 1)] : b[0],
		  n = 0.5 * ((j.x - 0) * (m.y - 0) - (j.y - 0) * (m.x - 0)),
		  e = e + n;
		d.x += n * g * (0 + j.x + m.x);
		d.y += n * g * (0 + j.y + m.y);
	  }
	  d.x *= 1 / e;
	  d.y *= 1 / e;
	  return d;
	};
	j.ComputeOBB = function (b, c, d) {
	  void 0 === d && (d = 0);
	  for (var e = 0, g = new Vector(d + 1), e = 0; e < d; ++e) g[e] = c[e];
	  g[d] = g[0];
	  c = Number.MAX_VALUE;
	  for (e = 1; e <= d; ++e) {
		for (var f = g[parseInt(e - 1)], j = g[e].x - f.x, m = g[e].y - f.y, n = Math.sqrt(j * j + m * m), j = j / n, m = m / n, t = -m, z = j, A = n = Number.MAX_VALUE, s = -Number.MAX_VALUE, x = -Number.MAX_VALUE, G = 0; G < d; ++G) {
		  var C = g[G].x - f.x,
			H = g[G].y - f.y,
			aa = j * C + m * H,
			C = t * C + z * H;
		  aa < n && (n = aa);
		  C < A && (A = C);
		  aa > s && (s = aa);
		  C > x && (x = C);
		}
		G = (s - n) * (x - A);
		G < 0.95 * c && (c = G, b.R.col1.x = j, b.R.col1.y = m, b.R.col2.x = t, b.R.col2.y = z, j = 0.5 * (n + s), m = 0.5 * (A + x), t = b.R, b.center.x = f.x + (t.col1.x * j + t.col2.x * m), b.center.y = f.y + (t.col1.y * j + t.col2.y * m), b.extents.x = 0.5 * (s - n), b.extents.y = 0.5 * (x - A));
	  }
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.Shapes.b2PolygonShape.s_mat = new m();
	});
	n.b2Shape = function () {};
	n.prototype.Copy = function () {
	  return null;
	};
	n.prototype.Set = function (b) {
	  this.m_radius = b.m_radius;
	};
	n.prototype.GetType = function () {
	  return this.m_type;
	};
	n.prototype.TestPoint = function () {
	  return !1;
	};
	n.prototype.RayCast = function () {
	  return !1;
	};
	n.prototype.ComputeAABB = function () {};
	n.prototype.ComputeMass = function () {};
	n.prototype.ComputeSubmergedArea = function () {
	  return 0;
	};
	n.TestOverlap = function (b, c, d, e) {
	  var g = new A();
	  g.proxyA = new D();
	  g.proxyA.Set(b);
	  g.proxyB = new D();
	  g.proxyB.Set(d);
	  g.transformA = c;
	  g.transformB = e;
	  g.useRadii = !0;
	  b = new E();
	  b.count = 0;
	  c = new B();
	  z.Distance(c, b, g);
	  return c.distance < 10 * Number.MIN_VALUE;
	};
	n.prototype.b2Shape = function () {
	  this.m_type = n.e_unknownShape;
	  this.m_radius = b.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
	  Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
	  Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
	  Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
	  Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
	  Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
	  Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
	  Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1;
	});
  })();
  (function () {
	var b = Box2D.Common.b2Color,
	  c = Box2D.Common.b2Settings,
	  d = Box2D.Common.Math.b2Math;
	b.b2Color = function () {
	  this._b = this._g = this._r = 0;
	};
	b.prototype.b2Color = function (b, c, j) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === j && (j = 0);
	  this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
	  this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
	  this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1));
	};
	b.prototype.Set = function (b, c, j) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === j && (j = 0);
	  this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
	  this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
	  this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1));
	};
	Object.defineProperty(b.prototype, "r", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
	  }
	});
	Object.defineProperty(b.prototype, "g", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._g = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
	  }
	});
	Object.defineProperty(b.prototype, "b", {
	  enumerable: !1,
	  configurable: !0,
	  set: function (b) {
		void 0 === b && (b = 0);
		this._b = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
	  }
	});
	Object.defineProperty(b.prototype, "color", {
	  enumerable: !1,
	  configurable: !0,
	  get: function () {
		return this._r << 16 | this._g << 8 | this._b;
	  }
	});
	c.b2Settings = function () {};
	c.b2MixFriction = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  return Math.sqrt(b * c);
	};
	c.b2MixRestitution = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  return b > c ? b : c;
	};
	c.b2Assert = function (b) {
	  if (!b) throw "Assertion Failed";
	};
	Box2D.postDefs.push(function () {
	  Box2D.Common.b2Settings.VERSION = "2.1alpha";
	  Box2D.Common.b2Settings.USHRT_MAX = 65535;
	  Box2D.Common.b2Settings.b2_pi = Math.PI;
	  Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
	  Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
	  Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
	  Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
	  Box2D.Common.b2Settings.b2_linearSlop = 0.005;
	  Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
	  Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
	  Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
	  Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
	  Box2D.Common.b2Settings.b2_velocityThreshold = 1;
	  Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
	  Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
	  Box2D.Common.b2Settings.b2_maxTranslation = 2;
	  Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
	  Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
	  Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
	  Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
	  Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
	  Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
	  Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi;
	});
  })();
  (function () {
	var b = Box2D.Common.Math.b2Mat22,
	  c = Box2D.Common.Math.b2Mat33,
	  d = Box2D.Common.Math.b2Math,
	  e = Box2D.Common.Math.b2Sweep,
	  f = Box2D.Common.Math.b2Transform,
	  j = Box2D.Common.Math.b2Vec2,
	  n = Box2D.Common.Math.b2Vec3;
	b.b2Mat22 = function () {
	  this.col1 = new j();
	  this.col2 = new j();
	};
	b.prototype.b2Mat22 = function () {
	  this.SetIdentity();
	};
	b.FromAngle = function (c) {
	  void 0 === c && (c = 0);
	  var d = new b();
	  d.Set(c);
	  return d;
	};
	b.FromVV = function (c, d) {
	  var e = new b();
	  e.SetVV(c, d);
	  return e;
	};
	b.prototype.Set = function (b) {
	  void 0 === b && (b = 0);
	  var c = Math.cos(b);
	  b = Math.sin(b);
	  this.col1.x = c;
	  this.col2.x = -b;
	  this.col1.y = b;
	  this.col2.y = c;
	};
	b.prototype.SetVV = function (b, c) {
	  this.col1.SetV(b);
	  this.col2.SetV(c);
	};
	b.prototype.Copy = function () {
	  var c = new b();
	  c.SetM(this);
	  return c;
	};
	b.prototype.SetM = function (b) {
	  this.col1.SetV(b.col1);
	  this.col2.SetV(b.col2);
	};
	b.prototype.AddM = function (b) {
	  this.col1.x += b.col1.x;
	  this.col1.y += b.col1.y;
	  this.col2.x += b.col2.x;
	  this.col2.y += b.col2.y;
	};
	b.prototype.SetIdentity = function () {
	  this.col1.x = 1;
	  this.col2.x = 0;
	  this.col1.y = 0;
	  this.col2.y = 1;
	};
	b.prototype.SetZero = function () {
	  this.col1.x = 0;
	  this.col2.x = 0;
	  this.col1.y = 0;
	  this.col2.y = 0;
	};
	b.prototype.GetAngle = function () {
	  return Math.atan2(this.col1.y, this.col1.x);
	};
	b.prototype.GetInverse = function (b) {
	  var c = this.col1.x,
		d = this.col2.x,
		e = this.col1.y,
		f = this.col2.y,
		j = c * f - d * e;
	  0 != j && (j = 1 / j);
	  b.col1.x = j * f;
	  b.col2.x = -j * d;
	  b.col1.y = -j * e;
	  b.col2.y = j * c;
	  return b;
	};
	b.prototype.Solve = function (b, c, d) {
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  var e = this.col1.x,
		f = this.col2.x,
		j = this.col1.y,
		n = this.col2.y,
		D = e * n - f * j;
	  0 != D && (D = 1 / D);
	  b.x = D * (n * c - f * d);
	  b.y = D * (e * d - j * c);
	  return b;
	};
	b.prototype.Abs = function () {
	  this.col1.Abs();
	  this.col2.Abs();
	};
	c.b2Mat33 = function () {
	  this.col1 = new n();
	  this.col2 = new n();
	  this.col3 = new n();
	};
	c.prototype.b2Mat33 = function (b, c, d) {
	  void 0 === b && (b = null);
	  void 0 === c && (c = null);
	  void 0 === d && (d = null);
	  !b && !c && !d ? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero()) : (this.col1.SetV(b), this.col2.SetV(c), this.col3.SetV(d));
	};
	c.prototype.SetVVV = function (b, c, d) {
	  this.col1.SetV(b);
	  this.col2.SetV(c);
	  this.col3.SetV(d);
	};
	c.prototype.Copy = function () {
	  return new c(this.col1, this.col2, this.col3);
	};
	c.prototype.SetM = function (b) {
	  this.col1.SetV(b.col1);
	  this.col2.SetV(b.col2);
	  this.col3.SetV(b.col3);
	};
	c.prototype.AddM = function (b) {
	  this.col1.x += b.col1.x;
	  this.col1.y += b.col1.y;
	  this.col1.z += b.col1.z;
	  this.col2.x += b.col2.x;
	  this.col2.y += b.col2.y;
	  this.col2.z += b.col2.z;
	  this.col3.x += b.col3.x;
	  this.col3.y += b.col3.y;
	  this.col3.z += b.col3.z;
	};
	c.prototype.SetIdentity = function () {
	  this.col1.x = 1;
	  this.col2.x = 0;
	  this.col3.x = 0;
	  this.col1.y = 0;
	  this.col2.y = 1;
	  this.col3.y = 0;
	  this.col1.z = 0;
	  this.col2.z = 0;
	  this.col3.z = 1;
	};
	c.prototype.SetZero = function () {
	  this.col1.x = 0;
	  this.col2.x = 0;
	  this.col3.x = 0;
	  this.col1.y = 0;
	  this.col2.y = 0;
	  this.col3.y = 0;
	  this.col1.z = 0;
	  this.col2.z = 0;
	  this.col3.z = 0;
	};
	c.prototype.Solve22 = function (b, c, d) {
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  var e = this.col1.x,
		f = this.col2.x,
		j = this.col1.y,
		n = this.col2.y,
		D = e * n - f * j;
	  0 != D && (D = 1 / D);
	  b.x = D * (n * c - f * d);
	  b.y = D * (e * d - j * c);
	  return b;
	};
	c.prototype.Solve33 = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  void 0 === e && (e = 0);
	  var f = this.col1.x,
		j = this.col1.y,
		n = this.col1.z,
		D = this.col2.x,
		E = this.col2.y,
		u = this.col2.z,
		F = this.col3.x,
		K = this.col3.y,
		L = this.col3.z,
		N = f * (E * L - u * K) + j * (u * F - D * L) + n * (D * K - E * F);
	  0 != N && (N = 1 / N);
	  b.x = N * (c * (E * L - u * K) + d * (u * F - D * L) + e * (D * K - E * F));
	  b.y = N * (f * (d * L - e * K) + j * (e * F - c * L) + n * (c * K - d * F));
	  b.z = N * (f * (E * e - u * d) + j * (u * c - D * e) + n * (D * d - E * c));
	  return b;
	};
	d.b2Math = function () {};
	d.IsValid = function (b) {
	  void 0 === b && (b = 0);
	  return isFinite(b);
	};
	d.Dot = function (b, c) {
	  return b.x * c.x + b.y * c.y;
	};
	d.CrossVV = function (b, c) {
	  return b.x * c.y - b.y * c.x;
	};
	d.CrossVF = function (b, c) {
	  void 0 === c && (c = 0);
	  return new j(c * b.y, -c * b.x);
	};
	d.CrossFV = function (b, c) {
	  void 0 === b && (b = 0);
	  return new j(-b * c.y, b * c.x);
	};
	d.MulMV = function (b, c) {
	  return new j(b.col1.x * c.x + b.col2.x * c.y, b.col1.y * c.x + b.col2.y * c.y);
	};
	d.MulTMV = function (b, c) {
	  return new j(d.Dot(c, b.col1), d.Dot(c, b.col2));
	};
	d.MulX = function (b, c) {
	  var e = d.MulMV(b.R, c);
	  e.x += b.position.x;
	  e.y += b.position.y;
	  return e;
	};
	d.MulXT = function (b, c) {
	  var e = d.SubtractVV(c, b.position),
		f = e.x * b.R.col1.x + e.y * b.R.col1.y;
	  e.y = e.x * b.R.col2.x + e.y * b.R.col2.y;
	  e.x = f;
	  return e;
	};
	d.AddVV = function (b, c) {
	  return new j(b.x + c.x, b.y + c.y);
	};
	d.SubtractVV = function (b, c) {
	  return new j(b.x - c.x, b.y - c.y);
	};
	d.Distance = function (b, c) {
	  var d = b.x - c.x,
		e = b.y - c.y;
	  return Math.sqrt(d * d + e * e);
	};
	d.DistanceSquared = function (b, c) {
	  var d = b.x - c.x,
		e = b.y - c.y;
	  return d * d + e * e;
	};
	d.MulFV = function (b, c) {
	  void 0 === b && (b = 0);
	  return new j(b * c.x, b * c.y);
	};
	d.AddMM = function (c, e) {
	  return b.FromVV(d.AddVV(c.col1, e.col1), d.AddVV(c.col2, e.col2));
	};
	d.MulMM = function (c, e) {
	  return b.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2));
	};
	d.MulTMM = function (c, e) {
	  var f = new j(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
		n = new j(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
	  return b.FromVV(f, n);
	};
	d.Abs = function (b) {
	  void 0 === b && (b = 0);
	  return 0 < b ? b : -b;
	};
	d.AbsV = function (b) {
	  return new j(d.Abs(b.x), d.Abs(b.y));
	};
	d.AbsM = function (c) {
	  return b.FromVV(d.AbsV(c.col1), d.AbsV(c.col2));
	};
	d.Min = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  return b < c ? b : c;
	};
	d.MinV = function (b, c) {
	  return new j(d.Min(b.x, c.x), d.Min(b.y, c.y));
	};
	d.Max = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  return b > c ? b : c;
	};
	d.MaxV = function (b, c) {
	  return new j(d.Max(b.x, c.x), d.Max(b.y, c.y));
	};
	d.Clamp = function (b, c, d) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  return b < c ? c : b > d ? d : b;
	};
	d.ClampV = function (b, c, e) {
	  return d.MaxV(c, d.MinV(b, e));
	};
	d.Swap = function (b, c) {
	  var d = b[0];
	  b[0] = c[0];
	  c[0] = d;
	};
	d.Random = function () {
	  return 2 * Math.random() - 1;
	};
	d.RandomRange = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  var d = Math.random();
	  return (c - b) * d + b;
	};
	d.NextPowerOfTwo = function (b) {
	  void 0 === b && (b = 0);
	  b |= b >> 1 & 2147483647;
	  b |= b >> 2 & 1073741823;
	  b |= b >> 4 & 268435455;
	  b |= b >> 8 & 16777215;
	  return (b | b >> 16 & 65535) + 1;
	};
	d.IsPowerOfTwo = function (b) {
	  void 0 === b && (b = 0);
	  return 0 < b && 0 == (b & b - 1);
	};
	Box2D.postDefs.push(function () {
	  Box2D.Common.Math.b2Math.b2Vec2_zero = new j(0, 0);
	  Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(new j(1, 0), new j(0, 1));
	  Box2D.Common.Math.b2Math.b2Transform_identity = new f(d.b2Vec2_zero, d.b2Mat22_identity);
	});
	e.b2Sweep = function () {
	  this.localCenter = new j();
	  this.c0 = new j();
	  this.c = new j();
	};
	e.prototype.Set = function (b) {
	  this.localCenter.SetV(b.localCenter);
	  this.c0.SetV(b.c0);
	  this.c.SetV(b.c);
	  this.a0 = b.a0;
	  this.a = b.a;
	  this.t0 = b.t0;
	};
	e.prototype.Copy = function () {
	  var b = new e();
	  b.localCenter.SetV(this.localCenter);
	  b.c0.SetV(this.c0);
	  b.c.SetV(this.c);
	  b.a0 = this.a0;
	  b.a = this.a;
	  b.t0 = this.t0;
	  return b;
	};
	e.prototype.GetTransform = function (b, c) {
	  void 0 === c && (c = 0);
	  b.position.x = (1 - c) * this.c0.x + c * this.c.x;
	  b.position.y = (1 - c) * this.c0.y + c * this.c.y;
	  b.R.Set((1 - c) * this.a0 + c * this.a);
	  var d = b.R;
	  b.position.x -= d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
	  b.position.y -= d.col1.y * this.localCenter.x + d.col2.y * this.localCenter.y;
	};
	e.prototype.Advance = function (b) {
	  void 0 === b && (b = 0);
	  if (this.t0 < b && 1 - this.t0 > Number.MIN_VALUE) {
		var c = (b - this.t0) / (1 - this.t0);
		this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
		this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
		this.a0 = (1 - c) * this.a0 + c * this.a;
		this.t0 = b;
	  }
	};
	f.b2Transform = function () {
	  this.position = new j();
	  this.R = new b();
	};
	f.prototype.b2Transform = function (b, c) {
	  void 0 === b && (b = null);
	  void 0 === c && (c = null);
	  b && (this.position.SetV(b), this.R.SetM(c));
	};
	f.prototype.Initialize = function (b, c) {
	  this.position.SetV(b);
	  this.R.SetM(c);
	};
	f.prototype.SetIdentity = function () {
	  this.position.SetZero();
	  this.R.SetIdentity();
	};
	f.prototype.Set = function (b) {
	  this.position.SetV(b.position);
	  this.R.SetM(b.R);
	};
	f.prototype.GetAngle = function () {
	  return Math.atan2(this.R.col1.y, this.R.col1.x);
	};
	j.b2Vec2 = function () {};
	j.prototype.b2Vec2 = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.x = b;
	  this.y = c;
	};
	j.prototype.SetZero = function () {
	  this.y = this.x = 0;
	};
	j.prototype.Set = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.x = b;
	  this.y = c;
	};
	j.prototype.SetV = function (b) {
	  this.x = b.x;
	  this.y = b.y;
	};
	j.prototype.GetNegative = function () {
	  return new j(-this.x, -this.y);
	};
	j.prototype.NegativeSelf = function () {
	  this.x = -this.x;
	  this.y = -this.y;
	};
	j.Make = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  return new j(b, c);
	};
	j.prototype.Copy = function () {
	  return new j(this.x, this.y);
	};
	j.prototype.Add = function (b) {
	  this.x += b.x;
	  this.y += b.y;
	};
	j.prototype.Subtract = function (b) {
	  this.x -= b.x;
	  this.y -= b.y;
	};
	j.prototype.Multiply = function (b) {
	  void 0 === b && (b = 0);
	  this.x *= b;
	  this.y *= b;
	};
	j.prototype.MulM = function (b) {
	  var c = this.x;
	  this.x = b.col1.x * c + b.col2.x * this.y;
	  this.y = b.col1.y * c + b.col2.y * this.y;
	};
	j.prototype.MulTM = function (b) {
	  var c = d.Dot(this, b.col1);
	  this.y = d.Dot(this, b.col2);
	  this.x = c;
	};
	j.prototype.CrossVF = function (b) {
	  void 0 === b && (b = 0);
	  var c = this.x;
	  this.x = b * this.y;
	  this.y = -b * c;
	};
	j.prototype.CrossFV = function (b) {
	  void 0 === b && (b = 0);
	  var c = this.x;
	  this.x = -b * this.y;
	  this.y = b * c;
	};
	j.prototype.MinV = function (b) {
	  this.x = this.x < b.x ? this.x : b.x;
	  this.y = this.y < b.y ? this.y : b.y;
	};
	j.prototype.MaxV = function (b) {
	  this.x = this.x > b.x ? this.x : b.x;
	  this.y = this.y > b.y ? this.y : b.y;
	};
	j.prototype.Abs = function () {
	  0 > this.x && (this.x = -this.x);
	  0 > this.y && (this.y = -this.y);
	};
	j.prototype.Length = function () {
	  return Math.sqrt(this.x * this.x + this.y * this.y);
	};
	j.prototype.LengthSquared = function () {
	  return this.x * this.x + this.y * this.y;
	};
	j.prototype.Normalize = function () {
	  var b = Math.sqrt(this.x * this.x + this.y * this.y);
	  if (b < Number.MIN_VALUE) return 0;
	  var c = 1 / b;
	  this.x *= c;
	  this.y *= c;
	  return b;
	};
	j.prototype.IsValid = function () {
	  return d.IsValid(this.x) && d.IsValid(this.y);
	};
	n.b2Vec3 = function () {};
	n.prototype.b2Vec3 = function (b, c, d) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  this.x = b;
	  this.y = c;
	  this.z = d;
	};
	n.prototype.SetZero = function () {
	  this.x = this.y = this.z = 0;
	};
	n.prototype.Set = function (b, c, d) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  this.x = b;
	  this.y = c;
	  this.z = d;
	};
	n.prototype.SetV = function (b) {
	  this.x = b.x;
	  this.y = b.y;
	  this.z = b.z;
	};
	n.prototype.GetNegative = function () {
	  return new n(-this.x, -this.y, -this.z);
	};
	n.prototype.NegativeSelf = function () {
	  this.x = -this.x;
	  this.y = -this.y;
	  this.z = -this.z;
	};
	n.prototype.Copy = function () {
	  return new n(this.x, this.y, this.z);
	};
	n.prototype.Add = function (b) {
	  this.x += b.x;
	  this.y += b.y;
	  this.z += b.z;
	};
	n.prototype.Subtract = function (b) {
	  this.x -= b.x;
	  this.y -= b.y;
	  this.z -= b.z;
	};
	n.prototype.Multiply = function (b) {
	  void 0 === b && (b = 0);
	  this.x *= b;
	  this.y *= b;
	  this.z *= b;
	};
  })();
  (function () {
	var b = Box2D.Common.Math.b2Math,
	  c = Box2D.Common.Math.b2Sweep,
	  d = Box2D.Common.Math.b2Transform,
	  e = Box2D.Common.Math.b2Vec2,
	  f = Box2D.Common.b2Color,
	  j = Box2D.Common.b2Settings,
	  n = Box2D.Collision.b2AABB,
	  m = Box2D.Collision.b2ContactPoint,
	  g = Box2D.Collision.b2DynamicTreeBroadPhase,
	  t = Box2D.Collision.b2RayCastInput,
	  y = Box2D.Collision.b2RayCastOutput,
	  z = Box2D.Collision.Shapes.b2CircleShape,
	  A = Box2D.Collision.Shapes.b2EdgeShape,
	  B = Box2D.Collision.Shapes.b2MassData,
	  D = Box2D.Collision.Shapes.b2PolygonShape,
	  E = Box2D.Collision.Shapes.b2Shape,
	  u = Box2D.Dynamics.b2Body,
	  F = Box2D.Dynamics.b2BodyDef,
	  K = Box2D.Dynamics.b2ContactFilter,
	  L = Box2D.Dynamics.b2ContactImpulse,
	  N = Box2D.Dynamics.b2ContactListener,
	  Q = Box2D.Dynamics.b2ContactManager,
	  I = Box2D.Dynamics.b2DebugDraw,
	  fa = Box2D.Dynamics.b2DestructionListener,
	  O = Box2D.Dynamics.b2FilterData,
	  P = Box2D.Dynamics.b2Fixture,
	  ba = Box2D.Dynamics.b2FixtureDef,
	  U = Box2D.Dynamics.b2Island,
	  s = Box2D.Dynamics.b2TimeStep,
	  x = Box2D.Dynamics.b2World,
	  G = Box2D.Dynamics.Contacts.b2Contact,
	  C = Box2D.Dynamics.Contacts.b2ContactFactory,
	  H = Box2D.Dynamics.Contacts.b2ContactSolver,
	  aa = Box2D.Dynamics.Joints.b2Joint,
	  R = Box2D.Dynamics.Joints.b2PulleyJoint;
	u.b2Body = function () {
	  this.m_xf = new d();
	  this.m_sweep = new c();
	  this.m_linearVelocity = new e();
	  this.m_force = new e();
	};
	u.prototype.connectEdges = function (c, d, e) {
	  void 0 === e && (e = 0);
	  var f = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x);
	  e = b.MulFV(Math.tan(0.5 * (f - e)), d.GetDirectionVector());
	  e = b.SubtractVV(e, d.GetNormalVector());
	  e = b.MulFV(j.b2_toiSlop, e);
	  e = b.AddVV(e, d.GetVertex1());
	  var g = b.AddVV(c.GetDirectionVector(), d.GetDirectionVector());
	  g.Normalize();
	  var s = 0 < b.Dot(c.GetDirectionVector(), d.GetNormalVector());
	  c.SetNextEdge(d, e, g, s);
	  d.SetPrevEdge(c, e, g, s);
	  return f;
	};
	u.prototype.CreateFixture = function (b) {
	  if (!0 == this.m_world.IsLocked()) return null;
	  var c = new P();
	  c.Create(this, this.m_xf, b);
	  this.m_flags & u.e_activeFlag && c.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
	  c.m_next = this.m_fixtureList;
	  this.m_fixtureList = c;
	  ++this.m_fixtureCount;
	  c.m_body = this;
	  0 < c.m_density && this.ResetMassData();
	  this.m_world.m_flags |= x.e_newFixture;
	  return c;
	};
	u.prototype.CreateFixture2 = function (b, c) {
	  void 0 === c && (c = 0);
	  var d = new ba();
	  d.shape = b;
	  d.density = c;
	  return this.CreateFixture(d);
	};
	u.prototype.DestroyFixture = function (b) {
	  if (!0 != this.m_world.IsLocked()) {
		for (var c = this.m_fixtureList, d = null; null != c;) {
		  if (c == b) {
			d ? d.m_next = b.m_next : this.m_fixtureList = b.m_next;
			break;
		  }
		  d = c;
		  c = c.m_next;
		}
		for (c = this.m_contactList; c;) {
		  var d = c.contact,
			c = c.next,
			e = d.GetFixtureA(),
			f = d.GetFixtureB();
		  (b == e || b == f) && this.m_world.m_contactManager.Destroy(d);
		}
		this.m_flags & u.e_activeFlag && b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
		b.Destroy();
		b.m_body = null;
		b.m_next = null;
		--this.m_fixtureCount;
		this.ResetMassData();
	  }
	};
	u.prototype.SetPositionAndAngle = function (b, c) {
	  void 0 === c && (c = 0);
	  var d;
	  if (!0 != this.m_world.IsLocked()) {
		this.m_xf.R.Set(c);
		this.m_xf.position.SetV(b);
		d = this.m_xf.R;
		var e = this.m_sweep.localCenter;
		this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
		this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		this.m_sweep.c0.SetV(this.m_sweep.c);
		this.m_sweep.a0 = this.m_sweep.a = c;
		e = this.m_world.m_contactManager.m_broadPhase;
		for (d = this.m_fixtureList; d; d = d.m_next) d.Synchronize(e, this.m_xf, this.m_xf);
		this.m_world.m_contactManager.FindNewContacts();
	  }
	};
	u.prototype.SetTransform = function (b) {
	  this.SetPositionAndAngle(b.position, b.GetAngle());
	};
	u.prototype.GetTransform = function () {
	  return this.m_xf;
	};
	u.prototype.GetPosition = function () {
	  return this.m_xf.position;
	};
	u.prototype.SetPosition = function (b) {
	  this.SetPositionAndAngle(b, this.GetAngle());
	};
	u.prototype.GetAngle = function () {
	  return this.m_sweep.a;
	};
	u.prototype.SetAngle = function (b) {
	  void 0 === b && (b = 0);
	  this.SetPositionAndAngle(this.GetPosition(), b);
	};
	u.prototype.GetWorldCenter = function () {
	  return this.m_sweep.c;
	};
	u.prototype.GetLocalCenter = function () {
	  return this.m_sweep.localCenter;
	};
	u.prototype.SetLinearVelocity = function (b) {
	  this.m_type != u.b2_staticBody && this.m_linearVelocity.SetV(b);
	};
	u.prototype.GetLinearVelocity = function () {
	  return this.m_linearVelocity;
	};
	u.prototype.SetAngularVelocity = function (b) {
	  void 0 === b && (b = 0);
	  this.m_type != u.b2_staticBody && (this.m_angularVelocity = b);
	};
	u.prototype.GetAngularVelocity = function () {
	  return this.m_angularVelocity;
	};
	u.prototype.GetDefinition = function () {
	  var b = new F();
	  b.type = this.GetType();
	  b.allowSleep = (this.m_flags & u.e_allowSleepFlag) == u.e_allowSleepFlag;
	  b.angle = this.GetAngle();
	  b.angularDamping = this.m_angularDamping;
	  b.angularVelocity = this.m_angularVelocity;
	  b.fixedRotation = (this.m_flags & u.e_fixedRotationFlag) == u.e_fixedRotationFlag;
	  b.bullet = (this.m_flags & u.e_bulletFlag) == u.e_bulletFlag;
	  b.awake = (this.m_flags & u.e_awakeFlag) == u.e_awakeFlag;
	  b.linearDamping = this.m_linearDamping;
	  b.linearVelocity.SetV(this.GetLinearVelocity());
	  b.position = this.GetPosition();
	  b.userData = this.GetUserData();
	  return b;
	};
	u.prototype.ApplyForce = function (b, c) {
	  this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += b.x, this.m_force.y += b.y, this.m_torque += (c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x);
	};
	u.prototype.ApplyTorque = function (b) {
	  void 0 === b && (b = 0);
	  this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_torque += b);
	};
	u.prototype.ApplyImpulse = function (b, c) {
	  this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * b.x, this.m_linearVelocity.y += this.m_invMass * b.y, this.m_angularVelocity += this.m_invI * ((c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x));
	};
	u.prototype.Split = function (c) {
	  for (var d = this.GetLinearVelocity().Copy(), e = this.GetAngularVelocity(), f = this.GetWorldCenter(), g = this.m_world.CreateBody(this.GetDefinition()), j, s = this.m_fixtureList; s;) if (c(s)) {
		var x = s.m_next;
		j ? j.m_next = x : this.m_fixtureList = x;
		this.m_fixtureCount--;
		s.m_next = g.m_fixtureList;
		g.m_fixtureList = s;
		g.m_fixtureCount++;
		s.m_body = g;
		s = x;
	  } else j = s, s = s.m_next;
	  this.ResetMassData();
	  g.ResetMassData();
	  j = this.GetWorldCenter();
	  c = g.GetWorldCenter();
	  j = b.AddVV(d, b.CrossFV(e, b.SubtractVV(j, f)));
	  d = b.AddVV(d, b.CrossFV(e, b.SubtractVV(c, f)));
	  this.SetLinearVelocity(j);
	  g.SetLinearVelocity(d);
	  this.SetAngularVelocity(e);
	  g.SetAngularVelocity(e);
	  this.SynchronizeFixtures();
	  g.SynchronizeFixtures();
	  return g;
	};
	u.prototype.Merge = function (b) {
	  var c;
	  for (c = b.m_fixtureList; c;) {
		var d = c.m_next;
		b.m_fixtureCount--;
		c.m_next = this.m_fixtureList;
		this.m_fixtureList = c;
		this.m_fixtureCount++;
		c.m_body = f;
		c = d;
	  }
	  e.m_fixtureCount = 0;
	  var e = this,
		f = b;
	  e.GetWorldCenter();
	  f.GetWorldCenter();
	  e.GetLinearVelocity().Copy();
	  f.GetLinearVelocity().Copy();
	  e.GetAngularVelocity();
	  f.GetAngularVelocity();
	  e.ResetMassData();
	  this.SynchronizeFixtures();
	};
	u.prototype.GetMass = function () {
	  return this.m_mass;
	};
	u.prototype.GetInertia = function () {
	  return this.m_I;
	};
	u.prototype.GetMassData = function (b) {
	  b.mass = this.m_mass;
	  b.I = this.m_I;
	  b.center.SetV(this.m_sweep.localCenter);
	};
	u.prototype.SetMassData = function (c) {
	  j.b2Assert(!1 == this.m_world.IsLocked());
	  if (!0 != this.m_world.IsLocked() && this.m_type == u.b2_dynamicBody) {
		this.m_invI = this.m_I = this.m_invMass = 0;
		this.m_mass = c.mass;
		0 >= this.m_mass && (this.m_mass = 1);
		this.m_invMass = 1 / this.m_mass;
		0 < c.I && 0 == (this.m_flags & u.e_fixedRotationFlag) && (this.m_I = c.I - this.m_mass * (c.center.x * c.center.x + c.center.y * c.center.y), this.m_invI = 1 / this.m_I);
		var d = this.m_sweep.c.Copy();
		this.m_sweep.localCenter.SetV(c.center);
		this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
		this.m_sweep.c.SetV(this.m_sweep.c0);
		this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
		this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x);
	  }
	};
	u.prototype.ResetMassData = function () {
	  this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
	  this.m_sweep.localCenter.SetZero();
	  if (!(this.m_type == u.b2_staticBody || this.m_type == u.b2_kinematicBody)) {
		for (var c = e.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next) if (0 != d.m_density) {
		  var f = d.GetMassData();
		  this.m_mass += f.mass;
		  c.x += f.center.x * f.mass;
		  c.y += f.center.y * f.mass;
		  this.m_I += f.I;
		}
		0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, c.x *= this.m_invMass, c.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
		0 < this.m_I && 0 == (this.m_flags & u.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y), this.m_I *= this.m_inertiaScale, j.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
		d = this.m_sweep.c.Copy();
		this.m_sweep.localCenter.SetV(c);
		this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
		this.m_sweep.c.SetV(this.m_sweep.c0);
		this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
		this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x);
	  }
	};
	u.prototype.GetWorldPoint = function (b) {
	  var c = this.m_xf.R;
	  b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
	  b.x += this.m_xf.position.x;
	  b.y += this.m_xf.position.y;
	  return b;
	};
	u.prototype.GetWorldVector = function (c) {
	  return b.MulMV(this.m_xf.R, c);
	};
	u.prototype.GetLocalPoint = function (c) {
	  return b.MulXT(this.m_xf, c);
	};
	u.prototype.GetLocalVector = function (c) {
	  return b.MulTMV(this.m_xf.R, c);
	};
	u.prototype.GetLinearVelocityFromWorldPoint = function (b) {
	  return new e(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x));
	};
	u.prototype.GetLinearVelocityFromLocalPoint = function (b) {
	  var c = this.m_xf.R;
	  b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
	  b.x += this.m_xf.position.x;
	  b.y += this.m_xf.position.y;
	  return new e(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x));
	};
	u.prototype.GetLinearDamping = function () {
	  return this.m_linearDamping;
	};
	u.prototype.SetLinearDamping = function (b) {
	  void 0 === b && (b = 0);
	  this.m_linearDamping = b;
	};
	u.prototype.GetAngularDamping = function () {
	  return this.m_angularDamping;
	};
	u.prototype.SetAngularDamping = function (b) {
	  void 0 === b && (b = 0);
	  this.m_angularDamping = b;
	};
	u.prototype.SetType = function (b) {
	  void 0 === b && (b = 0);
	  if (this.m_type != b) {
		this.m_type = b;
		this.ResetMassData();
		this.m_type == u.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0);
		this.SetAwake(!0);
		this.m_force.SetZero();
		this.m_torque = 0;
		for (b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering();
	  }
	};
	u.prototype.GetType = function () {
	  return this.m_type;
	};
	u.prototype.SetBullet = function (b) {
	  this.m_flags = b ? this.m_flags | u.e_bulletFlag : this.m_flags & ~u.e_bulletFlag;
	};
	u.prototype.IsBullet = function () {
	  return (this.m_flags & u.e_bulletFlag) == u.e_bulletFlag;
	};
	u.prototype.SetSleepingAllowed = function (b) {
	  b ? this.m_flags |= u.e_allowSleepFlag : (this.m_flags &= ~u.e_allowSleepFlag, this.SetAwake(!0));
	};
	u.prototype.SetAwake = function (b) {
	  b ? (this.m_flags |= u.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~u.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0);
	};
	u.prototype.IsAwake = function () {
	  return (this.m_flags & u.e_awakeFlag) == u.e_awakeFlag;
	};
	u.prototype.SetFixedRotation = function (b) {
	  this.m_flags = b ? this.m_flags | u.e_fixedRotationFlag : this.m_flags & ~u.e_fixedRotationFlag;
	  this.ResetMassData();
	};
	u.prototype.IsFixedRotation = function () {
	  return (this.m_flags & u.e_fixedRotationFlag) == u.e_fixedRotationFlag;
	};
	u.prototype.SetActive = function (b) {
	  if (b != this.IsActive()) {
		var c;
		if (b) {
		  this.m_flags |= u.e_activeFlag;
		  b = this.m_world.m_contactManager.m_broadPhase;
		  for (c = this.m_fixtureList; c; c = c.m_next) c.CreateProxy(b, this.m_xf);
		} else {
		  this.m_flags &= ~u.e_activeFlag;
		  b = this.m_world.m_contactManager.m_broadPhase;
		  for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(b);
		  for (b = this.m_contactList; b;) c = b, b = b.next, this.m_world.m_contactManager.Destroy(c.contact);
		  this.m_contactList = null;
		}
	  }
	};
	u.prototype.IsActive = function () {
	  return (this.m_flags & u.e_activeFlag) == u.e_activeFlag;
	};
	u.prototype.IsSleepingAllowed = function () {
	  return (this.m_flags & u.e_allowSleepFlag) == u.e_allowSleepFlag;
	};
	u.prototype.GetFixtureList = function () {
	  return this.m_fixtureList;
	};
	u.prototype.GetJointList = function () {
	  return this.m_jointList;
	};
	u.prototype.GetControllerList = function () {
	  return this.m_controllerList;
	};
	u.prototype.GetContactList = function () {
	  return this.m_contactList;
	};
	u.prototype.GetNext = function () {
	  return this.m_next;
	};
	u.prototype.GetUserData = function () {
	  return this.m_userData;
	};
	u.prototype.SetUserData = function (b) {
	  this.m_userData = b;
	};
	u.prototype.GetWorld = function () {
	  return this.m_world;
	};
	u.prototype.b2Body = function (b, c) {
	  this.m_flags = 0;
	  b.bullet && (this.m_flags |= u.e_bulletFlag);
	  b.fixedRotation && (this.m_flags |= u.e_fixedRotationFlag);
	  b.allowSleep && (this.m_flags |= u.e_allowSleepFlag);
	  b.awake && (this.m_flags |= u.e_awakeFlag);
	  b.active && (this.m_flags |= u.e_activeFlag);
	  this.m_world = c;
	  this.m_xf.position.SetV(b.position);
	  this.m_xf.R.Set(b.angle);
	  this.m_sweep.localCenter.SetZero();
	  this.m_sweep.t0 = 1;
	  this.m_sweep.a0 = this.m_sweep.a = b.angle;
	  var d = this.m_xf.R,
		e = this.m_sweep.localCenter;
	  this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
	  this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
	  this.m_sweep.c.x += this.m_xf.position.x;
	  this.m_sweep.c.y += this.m_xf.position.y;
	  this.m_sweep.c0.SetV(this.m_sweep.c);
	  this.m_contactList = this.m_controllerList = this.m_jointList = null;
	  this.m_controllerCount = 0;
	  this.m_next = this.m_prev = null;
	  this.m_linearVelocity.SetV(b.linearVelocity);
	  this.m_angularVelocity = b.angularVelocity;
	  this.m_linearDamping = b.linearDamping;
	  this.m_angularDamping = b.angularDamping;
	  this.m_force.Set(0, 0);
	  this.m_sleepTime = this.m_torque = 0;
	  this.m_type = b.type;
	  this.m_invMass = this.m_type == u.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
	  this.m_invI = this.m_I = 0;
	  this.m_inertiaScale = b.inertiaScale;
	  this.m_userData = b.userData;
	  this.m_fixtureList = null;
	  this.m_fixtureCount = 0;
	};
	u.prototype.SynchronizeFixtures = function () {
	  var b = u.s_xf1;
	  b.R.Set(this.m_sweep.a0);
	  var c = b.R,
		d = this.m_sweep.localCenter;
	  b.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
	  b.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
	  d = this.m_world.m_contactManager.m_broadPhase;
	  for (c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(d, b, this.m_xf);
	};
	u.prototype.SynchronizeTransform = function () {
	  this.m_xf.R.Set(this.m_sweep.a);
	  var b = this.m_xf.R,
		c = this.m_sweep.localCenter;
	  this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * c.x + b.col2.x * c.y);
	  this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * c.x + b.col2.y * c.y);
	};
	u.prototype.ShouldCollide = function (b) {
	  if (this.m_type != u.b2_dynamicBody && b.m_type != u.b2_dynamicBody) return !1;
	  for (var c = this.m_jointList; c; c = c.next) if (c.other == b && !1 == c.joint.m_collideConnected) return !1;
	  return !0;
	};
	u.prototype.Advance = function (b) {
	  void 0 === b && (b = 0);
	  this.m_sweep.Advance(b);
	  this.m_sweep.c.SetV(this.m_sweep.c0);
	  this.m_sweep.a = this.m_sweep.a0;
	  this.SynchronizeTransform();
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2Body.s_xf1 = new d();
	  Box2D.Dynamics.b2Body.e_islandFlag = 1;
	  Box2D.Dynamics.b2Body.e_awakeFlag = 2;
	  Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
	  Box2D.Dynamics.b2Body.e_bulletFlag = 8;
	  Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
	  Box2D.Dynamics.b2Body.e_activeFlag = 32;
	  Box2D.Dynamics.b2Body.b2_staticBody = 0;
	  Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
	  Box2D.Dynamics.b2Body.b2_dynamicBody = 2;
	});
	F.b2BodyDef = function () {
	  this.position = new e();
	  this.linearVelocity = new e();
	};
	F.prototype.b2BodyDef = function () {
	  this.userData = null;
	  this.position.Set(0, 0);
	  this.angle = 0;
	  this.linearVelocity.Set(0, 0);
	  this.angularDamping = this.linearDamping = this.angularVelocity = 0;
	  this.awake = this.allowSleep = !0;
	  this.bullet = this.fixedRotation = !1;
	  this.type = u.b2_staticBody;
	  this.active = !0;
	  this.inertiaScale = 1;
	};
	K.b2ContactFilter = function () {};
	K.prototype.ShouldCollide = function (b, c) {
	  var d = b.GetFilterData(),
		e = c.GetFilterData();
	  return d.groupIndex == e.groupIndex && 0 != d.groupIndex ? 0 < d.groupIndex : 0 != (d.maskBits & e.categoryBits) && 0 != (d.categoryBits & e.maskBits);
	};
	K.prototype.RayCollide = function (b, c) {
	  return !b ? !0 : this.ShouldCollide(b instanceof P ? b : null, c);
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new K();
	});
	L.b2ContactImpulse = function () {
	  this.normalImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
	  this.tangentImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
	};
	N.b2ContactListener = function () {};
	N.prototype.BeginContact = function () {};
	N.prototype.EndContact = function () {};
	N.prototype.PreSolve = function () {};
	N.prototype.PostSolve = function () {};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2ContactListener.b2_defaultListener = new N();
	});
	Q.b2ContactManager = function () {};
	Q.prototype.b2ContactManager = function () {
	  this.m_world = null;
	  this.m_contactCount = 0;
	  this.m_contactFilter = K.b2_defaultFilter;
	  this.m_contactListener = N.b2_defaultListener;
	  this.m_contactFactory = new C(this.m_allocator);
	  this.m_broadPhase = new g();
	};
	Q.prototype.AddPair = function (b, c) {
	  var d = b instanceof P ? b : null,
		e = c instanceof P ? c : null,
		f = d.GetBody(),
		g = e.GetBody();
	  if (f != g) {
		for (var j = g.GetContactList(); j;) {
		  if (j.other == f) {
			var s = j.contact.GetFixtureA(),
			  x = j.contact.GetFixtureB();
			if (s == d && x == e || s == e && x == d) return;
		  }
		  j = j.next;
		}
		!1 != g.ShouldCollide(f) && !1 != this.m_contactFilter.ShouldCollide(d, e) && (j = this.m_contactFactory.Create(d, e), d = j.GetFixtureA(), e = j.GetFixtureB(), f = d.m_body, g = e.m_body, j.m_prev = null, j.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = j), this.m_world.m_contactList = j, j.m_nodeA.contact = j, j.m_nodeA.other = g, j.m_nodeA.prev = null, j.m_nodeA.next = f.m_contactList, null != f.m_contactList && (f.m_contactList.prev = j.m_nodeA), f.m_contactList = j.m_nodeA, j.m_nodeB.contact = j, j.m_nodeB.other = f, j.m_nodeB.prev = null, j.m_nodeB.next = g.m_contactList, null != g.m_contactList && (g.m_contactList.prev = j.m_nodeB), g.m_contactList = j.m_nodeB, ++this.m_world.m_contactCount);
	  }
	};
	Q.prototype.FindNewContacts = function () {
	  this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair));
	};
	Q.prototype.Destroy = function (b) {
	  var c = b.GetFixtureA(),
		d = b.GetFixtureB(),
		c = c.GetBody(),
		d = d.GetBody();
	  b.IsTouching() && this.m_contactListener.EndContact(b);
	  b.m_prev && (b.m_prev.m_next = b.m_next);
	  b.m_next && (b.m_next.m_prev = b.m_prev);
	  b == this.m_world.m_contactList && (this.m_world.m_contactList = b.m_next);
	  b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
	  b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
	  b.m_nodeA == c.m_contactList && (c.m_contactList = b.m_nodeA.next);
	  b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
	  b.m_nodeB.next && (b.m_nodeB.next.prev = b.m_nodeB.prev);
	  b.m_nodeB == d.m_contactList && (d.m_contactList = b.m_nodeB.next);
	  this.m_contactFactory.Destroy(b);
	  --this.m_contactCount;
	};
	Q.prototype.Collide = function () {
	  for (var b = this.m_world.m_contactList; b;) {
		var c = b.GetFixtureA(),
		  d = b.GetFixtureB(),
		  e = c.GetBody(),
		  f = d.GetBody();
		if (!1 == e.IsAwake() && !1 == f.IsAwake()) b = b.GetNext();else {
		  if (b.m_flags & G.e_filterFlag) {
			if (!1 == f.ShouldCollide(e)) {
			  c = b;
			  b = c.GetNext();
			  this.Destroy(c);
			  continue;
			}
			if (!1 == this.m_contactFilter.ShouldCollide(c, d)) {
			  c = b;
			  b = c.GetNext();
			  this.Destroy(c);
			  continue;
			}
			b.m_flags &= ~G.e_filterFlag;
		  }
		  !1 == this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy) ? (c = b, b = c.GetNext(), this.Destroy(c)) : (b.Update(this.m_contactListener), b = b.GetNext());
		}
	  }
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2ContactManager.s_evalCP = new m();
	});
	I.b2DebugDraw = function () {};
	I.prototype.b2DebugDraw = function () {};
	I.prototype.SetFlags = function () {};
	I.prototype.GetFlags = function () {};
	I.prototype.AppendFlags = function () {};
	I.prototype.ClearFlags = function () {};
	I.prototype.SetSprite = function () {};
	I.prototype.GetSprite = function () {};
	I.prototype.SetDrawScale = function () {};
	I.prototype.GetDrawScale = function () {};
	I.prototype.SetLineThickness = function () {};
	I.prototype.GetLineThickness = function () {};
	I.prototype.SetAlpha = function () {};
	I.prototype.GetAlpha = function () {};
	I.prototype.SetFillAlpha = function () {};
	I.prototype.GetFillAlpha = function () {};
	I.prototype.SetXFormScale = function () {};
	I.prototype.GetXFormScale = function () {};
	I.prototype.DrawPolygon = function () {};
	I.prototype.DrawSolidPolygon = function () {};
	I.prototype.DrawCircle = function () {};
	I.prototype.DrawSolidCircle = function () {};
	I.prototype.DrawSegment = function () {};
	I.prototype.DrawTransform = function () {};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
	  Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
	  Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
	  Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
	  Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
	  Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32;
	});
	fa.b2DestructionListener = function () {};
	fa.prototype.SayGoodbyeJoint = function () {};
	fa.prototype.SayGoodbyeFixture = function () {};
	O.b2FilterData = function () {
	  this.categoryBits = 1;
	  this.maskBits = 65535;
	  this.groupIndex = 0;
	};
	O.prototype.Copy = function () {
	  var b = new O();
	  b.categoryBits = this.categoryBits;
	  b.maskBits = this.maskBits;
	  b.groupIndex = this.groupIndex;
	  return b;
	};
	P.b2Fixture = function () {
	  this.m_filter = new O();
	};
	P.prototype.GetType = function () {
	  return this.m_shape.GetType();
	};
	P.prototype.GetShape = function () {
	  return this.m_shape;
	};
	P.prototype.SetSensor = function (b) {
	  if (this.m_isSensor != b && (this.m_isSensor = b, null != this.m_body)) for (b = this.m_body.GetContactList(); b;) {
		var c = b.contact,
		  d = c.GetFixtureA(),
		  e = c.GetFixtureB();
		if (d == this || e == this) c.SetSensor(d.IsSensor() || e.IsSensor());
		b = b.next;
	  }
	};
	P.prototype.IsSensor = function () {
	  return this.m_isSensor;
	};
	P.prototype.SetFilterData = function (b) {
	  this.m_filter = b.Copy();
	  if (!this.m_body) for (b = this.m_body.GetContactList(); b;) {
		var c = b.contact,
		  d = c.GetFixtureA(),
		  e = c.GetFixtureB();
		(d == this || e == this) && c.FlagForFiltering();
		b = b.next;
	  }
	};
	P.prototype.GetFilterData = function () {
	  return this.m_filter.Copy();
	};
	P.prototype.GetBody = function () {
	  return this.m_body;
	};
	P.prototype.GetNext = function () {
	  return this.m_next;
	};
	P.prototype.GetUserData = function () {
	  return this.m_userData;
	};
	P.prototype.SetUserData = function (b) {
	  this.m_userData = b;
	};
	P.prototype.TestPoint = function (b) {
	  return this.m_shape.TestPoint(this.m_body.GetTransform(), b);
	};
	P.prototype.RayCast = function (b, c) {
	  return this.m_shape.RayCast(b, c, this.m_body.GetTransform());
	};
	P.prototype.GetMassData = function (b) {
	  void 0 === b && (b = null);
	  null == b && (b = new B());
	  this.m_shape.ComputeMass(b, this.m_density);
	  return b;
	};
	P.prototype.SetDensity = function (b) {
	  void 0 === b && (b = 0);
	  this.m_density = b;
	};
	P.prototype.GetDensity = function () {
	  return this.m_density;
	};
	P.prototype.GetFriction = function () {
	  return this.m_friction;
	};
	P.prototype.SetFriction = function (b) {
	  void 0 === b && (b = 0);
	  this.m_friction = b;
	};
	P.prototype.GetRestitution = function () {
	  return this.m_restitution;
	};
	P.prototype.SetRestitution = function (b) {
	  void 0 === b && (b = 0);
	  this.m_restitution = b;
	};
	P.prototype.GetAABB = function () {
	  return this.m_aabb;
	};
	P.prototype.b2Fixture = function () {
	  this.m_aabb = new n();
	  this.m_shape = this.m_next = this.m_body = this.m_userData = null;
	  this.m_restitution = this.m_friction = this.m_density = 0;
	};
	P.prototype.Create = function (b, c, d) {
	  this.m_userData = d.userData;
	  this.m_friction = d.friction;
	  this.m_restitution = d.restitution;
	  this.m_body = b;
	  this.m_next = null;
	  this.m_filter = d.filter.Copy();
	  this.m_isSensor = d.isSensor;
	  this.m_shape = d.shape.Copy();
	  this.m_density = d.density;
	};
	P.prototype.Destroy = function () {
	  this.m_shape = null;
	};
	P.prototype.CreateProxy = function (b, c) {
	  this.m_shape.ComputeAABB(this.m_aabb, c);
	  this.m_proxy = b.CreateProxy(this.m_aabb, this);
	};
	P.prototype.DestroyProxy = function (b) {
	  null != this.m_proxy && (b.DestroyProxy(this.m_proxy), this.m_proxy = null);
	};
	P.prototype.Synchronize = function (c, d, e) {
	  if (this.m_proxy) {
		var f = new n(),
		  j = new n();
		this.m_shape.ComputeAABB(f, d);
		this.m_shape.ComputeAABB(j, e);
		this.m_aabb.Combine(f, j);
		d = b.SubtractVV(e.position, d.position);
		c.MoveProxy(this.m_proxy, this.m_aabb, d);
	  }
	};
	ba.b2FixtureDef = function () {
	  this.filter = new O();
	};
	ba.prototype.b2FixtureDef = function () {
	  this.userData = this.shape = null;
	  this.friction = 0.2;
	  this.density = this.restitution = 0;
	  this.filter.categoryBits = 1;
	  this.filter.maskBits = 65535;
	  this.filter.groupIndex = 0;
	  this.isSensor = !1;
	};
	U.b2Island = function () {};
	U.prototype.b2Island = function () {
	  this.m_bodies = new Vector();
	  this.m_contacts = new Vector();
	  this.m_joints = new Vector();
	};
	U.prototype.Initialize = function (b, c, d, e, f, j) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  var g = 0;
	  this.m_bodyCapacity = b;
	  this.m_contactCapacity = c;
	  this.m_jointCapacity = d;
	  this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
	  this.m_allocator = e;
	  this.m_listener = f;
	  this.m_contactSolver = j;
	  for (g = this.m_bodies.length; g < b; g++) this.m_bodies[g] = null;
	  for (g = this.m_contacts.length; g < c; g++) this.m_contacts[g] = null;
	  for (g = this.m_joints.length; g < d; g++) this.m_joints[g] = null;
	};
	U.prototype.Clear = function () {
	  this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
	};
	U.prototype.Solve = function (c, d, e) {
	  for (var f = 0, g = 0, s, f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() == u.b2_dynamicBody && (g.m_linearVelocity.x += c.dt * (d.x + g.m_invMass * g.m_force.x), g.m_linearVelocity.y += c.dt * (d.y + g.m_invMass * g.m_force.y), g.m_angularVelocity += c.dt * g.m_invI * g.m_torque, g.m_linearVelocity.Multiply(b.Clamp(1 - c.dt * g.m_linearDamping, 0, 1)), g.m_angularVelocity *= b.Clamp(1 - c.dt * g.m_angularDamping, 0, 1));
	  this.m_contactSolver.Initialize(c, this.m_contacts, this.m_contactCount, this.m_allocator);
	  d = this.m_contactSolver;
	  d.InitVelocityConstraints(c);
	  for (f = 0; f < this.m_jointCount; ++f) s = this.m_joints[f], s.InitVelocityConstraints(c);
	  for (f = 0; f < c.velocityIterations; ++f) {
		for (g = 0; g < this.m_jointCount; ++g) s = this.m_joints[g], s.SolveVelocityConstraints(c);
		d.SolveVelocityConstraints();
	  }
	  for (f = 0; f < this.m_jointCount; ++f) s = this.m_joints[f], s.FinalizeVelocityConstraints();
	  d.FinalizeVelocityConstraints();
	  for (f = 0; f < this.m_bodyCount; ++f) if (g = this.m_bodies[f], g.GetType() != u.b2_staticBody) {
		var x = c.dt * g.m_linearVelocity.x,
		  C = c.dt * g.m_linearVelocity.y;
		x * x + C * C > j.b2_maxTranslationSquared && (g.m_linearVelocity.Normalize(), g.m_linearVelocity.x *= j.b2_maxTranslation * c.inv_dt, g.m_linearVelocity.y *= j.b2_maxTranslation * c.inv_dt);
		x = c.dt * g.m_angularVelocity;
		x * x > j.b2_maxRotationSquared && (g.m_angularVelocity = 0 > g.m_angularVelocity ? -j.b2_maxRotation * c.inv_dt : j.b2_maxRotation * c.inv_dt);
		g.m_sweep.c0.SetV(g.m_sweep.c);
		g.m_sweep.a0 = g.m_sweep.a;
		g.m_sweep.c.x += c.dt * g.m_linearVelocity.x;
		g.m_sweep.c.y += c.dt * g.m_linearVelocity.y;
		g.m_sweep.a += c.dt * g.m_angularVelocity;
		g.SynchronizeTransform();
	  }
	  for (f = 0; f < c.positionIterations; ++f) {
		x = d.SolvePositionConstraints(j.b2_contactBaumgarte);
		C = !0;
		for (g = 0; g < this.m_jointCount; ++g) s = this.m_joints[g], s = s.SolvePositionConstraints(j.b2_contactBaumgarte), C = C && s;
		if (x && C) break;
	  }
	  this.Report(d.m_constraints);
	  if (e) {
		e = Number.MAX_VALUE;
		d = j.b2_linearSleepTolerance * j.b2_linearSleepTolerance;
		x = j.b2_angularSleepTolerance * j.b2_angularSleepTolerance;
		for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() != u.b2_staticBody && (0 == (g.m_flags & u.e_allowSleepFlag) && (e = g.m_sleepTime = 0), 0 == (g.m_flags & u.e_allowSleepFlag) || g.m_angularVelocity * g.m_angularVelocity > x || b.Dot(g.m_linearVelocity, g.m_linearVelocity) > d ? e = g.m_sleepTime = 0 : (g.m_sleepTime += c.dt, e = b.Min(e, g.m_sleepTime)));
		if (e >= j.b2_timeToSleep) for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.SetAwake(!1);
	  }
	};
	U.prototype.SolveTOI = function (b) {
	  var c = 0,
		d = 0;
	  this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
	  for (var e = this.m_contactSolver, c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(b);
	  for (c = 0; c < b.velocityIterations; ++c) {
		e.SolveVelocityConstraints();
		for (d = 0; d < this.m_jointCount; ++d) this.m_joints[d].SolveVelocityConstraints(b);
	  }
	  for (c = 0; c < this.m_bodyCount; ++c) if (d = this.m_bodies[c], d.GetType() != u.b2_staticBody) {
		var f = b.dt * d.m_linearVelocity.x,
		  g = b.dt * d.m_linearVelocity.y;
		f * f + g * g > j.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt, d.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt);
		f = b.dt * d.m_angularVelocity;
		f * f > j.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -j.b2_maxRotation * b.inv_dt : j.b2_maxRotation * b.inv_dt);
		d.m_sweep.c0.SetV(d.m_sweep.c);
		d.m_sweep.a0 = d.m_sweep.a;
		d.m_sweep.c.x += b.dt * d.m_linearVelocity.x;
		d.m_sweep.c.y += b.dt * d.m_linearVelocity.y;
		d.m_sweep.a += b.dt * d.m_angularVelocity;
		d.SynchronizeTransform();
	  }
	  for (c = 0; c < b.positionIterations; ++c) {
		f = e.SolvePositionConstraints(0.75);
		g = !0;
		for (d = 0; d < this.m_jointCount; ++d) var s = this.m_joints[d].SolvePositionConstraints(j.b2_contactBaumgarte), g = g && s;
		if (f && g) break;
	  }
	  this.Report(e.m_constraints);
	};
	U.prototype.Report = function (b) {
	  if (null != this.m_listener) for (var c = 0; c < this.m_contactCount; ++c) {
		for (var d = this.m_contacts[c], e = b[c], f = 0; f < e.pointCount; ++f) U.s_impulse.normalImpulses[f] = e.points[f].normalImpulse, U.s_impulse.tangentImpulses[f] = e.points[f].tangentImpulse;
		this.m_listener.PostSolve(d, U.s_impulse);
	  }
	};
	U.prototype.AddBody = function (b) {
	  b.m_islandIndex = this.m_bodyCount;
	  this.m_bodies[this.m_bodyCount++] = b;
	};
	U.prototype.AddContact = function (b) {
	  this.m_contacts[this.m_contactCount++] = b;
	};
	U.prototype.AddJoint = function (b) {
	  this.m_joints[this.m_jointCount++] = b;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2Island.s_impulse = new L();
	});
	s.b2TimeStep = function () {};
	s.prototype.Set = function (b) {
	  this.dt = b.dt;
	  this.inv_dt = b.inv_dt;
	  this.positionIterations = b.positionIterations;
	  this.velocityIterations = b.velocityIterations;
	  this.warmStarting = b.warmStarting;
	};
	x.b2World = function () {
	  this.s_stack = new Vector();
	  this.m_contactManager = new Q();
	  this.m_contactSolver = new H();
	  this.m_island = new U();
	};
	x.prototype.b2World = function (b, c) {
	  this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
	  this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
	  x.m_warmStarting = !0;
	  x.m_continuousPhysics = !0;
	  this.m_allowSleep = c;
	  this.m_gravity = b;
	  this.m_inv_dt0 = 0;
	  this.m_contactManager.m_world = this;
	  this.m_groundBody = this.CreateBody(new F());
	};
	x.prototype.SetDestructionListener = function (b) {
	  this.m_destructionListener = b;
	};
	x.prototype.SetContactFilter = function (b) {
	  this.m_contactManager.m_contactFilter = b;
	};
	x.prototype.SetContactListener = function (b) {
	  this.m_contactManager.m_contactListener = b;
	};
	x.prototype.SetDebugDraw = function (b) {
	  this.m_debugDraw = b;
	};
	x.prototype.SetBroadPhase = function (b) {
	  var c = this.m_contactManager.m_broadPhase;
	  this.m_contactManager.m_broadPhase = b;
	  for (var d = this.m_bodyList; d; d = d.m_next) for (var e = d.m_fixtureList; e; e = e.m_next) e.m_proxy = b.CreateProxy(c.GetFatAABB(e.m_proxy), e);
	};
	x.prototype.Validate = function () {
	  this.m_contactManager.m_broadPhase.Validate();
	};
	x.prototype.GetProxyCount = function () {
	  return this.m_contactManager.m_broadPhase.GetProxyCount();
	};
	x.prototype.CreateBody = function (b) {
	  if (!0 == this.IsLocked()) return null;
	  b = new u(b, this);
	  b.m_prev = null;
	  if (b.m_next = this.m_bodyList) this.m_bodyList.m_prev = b;
	  this.m_bodyList = b;
	  ++this.m_bodyCount;
	  return b;
	};
	x.prototype.DestroyBody = function (b) {
	  if (!0 != this.IsLocked()) {
		for (var c = b.m_jointList; c;) {
		  var d = c,
			c = c.next;
		  this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
		  this.DestroyJoint(d.joint);
		}
		for (c = b.m_controllerList; c;) d = c, c = c.nextController, d.controller.RemoveBody(b);
		for (c = b.m_contactList; c;) d = c, c = c.next, this.m_contactManager.Destroy(d.contact);
		b.m_contactList = null;
		for (c = b.m_fixtureList; c;) d = c, c = c.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(d), d.DestroyProxy(this.m_contactManager.m_broadPhase), d.Destroy();
		b.m_fixtureList = null;
		b.m_fixtureCount = 0;
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		b == this.m_bodyList && (this.m_bodyList = b.m_next);
		--this.m_bodyCount;
	  }
	};
	x.prototype.CreateJoint = function (b) {
	  var c = aa.Create(b, null);
	  c.m_prev = null;
	  if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
	  this.m_jointList = c;
	  ++this.m_jointCount;
	  c.m_edgeA.joint = c;
	  c.m_edgeA.other = c.m_bodyB;
	  c.m_edgeA.prev = null;
	  if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
	  c.m_bodyA.m_jointList = c.m_edgeA;
	  c.m_edgeB.joint = c;
	  c.m_edgeB.other = c.m_bodyA;
	  c.m_edgeB.prev = null;
	  if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
	  c.m_bodyB.m_jointList = c.m_edgeB;
	  var d = b.bodyA,
		e = b.bodyB;
	  if (!1 == b.collideConnected) for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next;
	  return c;
	};
	x.prototype.DestroyJoint = function (b) {
	  var c = b.m_collideConnected;
	  b.m_prev && (b.m_prev.m_next = b.m_next);
	  b.m_next && (b.m_next.m_prev = b.m_prev);
	  b == this.m_jointList && (this.m_jointList = b.m_next);
	  var d = b.m_bodyA,
		e = b.m_bodyB;
	  d.SetAwake(!0);
	  e.SetAwake(!0);
	  b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
	  b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
	  b.m_edgeA == d.m_jointList && (d.m_jointList = b.m_edgeA.next);
	  b.m_edgeA.prev = null;
	  b.m_edgeA.next = null;
	  b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
	  b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
	  b.m_edgeB == e.m_jointList && (e.m_jointList = b.m_edgeB.next);
	  b.m_edgeB.prev = null;
	  b.m_edgeB.next = null;
	  aa.Destroy(b, null);
	  --this.m_jointCount;
	  if (!1 == c) for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next;
	};
	x.prototype.AddController = function (b) {
	  b.m_next = this.m_controllerList;
	  b.m_prev = null;
	  this.m_controllerList = b;
	  b.m_world = this;
	  this.m_controllerCount++;
	  return b;
	};
	x.prototype.RemoveController = function (b) {
	  b.m_prev && (b.m_prev.m_next = b.m_next);
	  b.m_next && (b.m_next.m_prev = b.m_prev);
	  this.m_controllerList == b && (this.m_controllerList = b.m_next);
	  this.m_controllerCount--;
	};
	x.prototype.CreateController = function (b) {
	  if (b.m_world != this) throw Error("Controller can only be a member of one world");
	  b.m_next = this.m_controllerList;
	  b.m_prev = null;
	  this.m_controllerList && (this.m_controllerList.m_prev = b);
	  this.m_controllerList = b;
	  ++this.m_controllerCount;
	  b.m_world = this;
	  return b;
	};
	x.prototype.DestroyController = function (b) {
	  b.Clear();
	  b.m_next && (b.m_next.m_prev = b.m_prev);
	  b.m_prev && (b.m_prev.m_next = b.m_next);
	  b == this.m_controllerList && (this.m_controllerList = b.m_next);
	  --this.m_controllerCount;
	};
	x.prototype.SetWarmStarting = function (b) {
	  x.m_warmStarting = b;
	};
	x.prototype.SetContinuousPhysics = function (b) {
	  x.m_continuousPhysics = b;
	};
	x.prototype.GetBodyCount = function () {
	  return this.m_bodyCount;
	};
	x.prototype.GetJointCount = function () {
	  return this.m_jointCount;
	};
	x.prototype.GetContactCount = function () {
	  return this.m_contactCount;
	};
	x.prototype.SetGravity = function (b) {
	  this.m_gravity = b;
	};
	x.prototype.GetGravity = function () {
	  return this.m_gravity;
	};
	x.prototype.GetGroundBody = function () {
	  return this.m_groundBody;
	};
	x.prototype.Step = function (b, c, d) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  void 0 === d && (d = 0);
	  this.m_flags & x.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~x.e_newFixture);
	  this.m_flags |= x.e_locked;
	  var e = x.s_timestep2;
	  e.dt = b;
	  e.velocityIterations = c;
	  e.positionIterations = d;
	  e.inv_dt = 0 < b ? 1 / b : 0;
	  e.dtRatio = this.m_inv_dt0 * b;
	  e.warmStarting = x.m_warmStarting;
	  this.m_contactManager.Collide();
	  0 < e.dt && this.Solve(e);
	  x.m_continuousPhysics && 0 < e.dt && this.SolveTOI(e);
	  0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
	  this.m_flags &= ~x.e_locked;
	};
	x.prototype.ClearForces = function () {
	  for (var b = this.m_bodyList; b; b = b.m_next) b.m_force.SetZero(), b.m_torque = 0;
	};
	x.prototype.DrawDebugData = function () {
	  if (null != this.m_debugDraw) {
		this.m_debugDraw.m_sprite.graphics.clear();
		var b = this.m_debugDraw.GetFlags(),
		  c,
		  d,
		  g;
		new e();
		new e();
		new e();
		var j;
		new n();
		new n();
		new e();
		new e();
		new e();
		new e();
		var s = new f(0, 0, 0);
		if (b & I.e_shapeBit) for (c = this.m_bodyList; c; c = c.m_next) {
		  j = c.m_xf;
		  for (d = c.GetFixtureList(); d; d = d.m_next) g = d.GetShape(), !1 == c.IsActive() ? s.Set(0.5, 0.5, 0.3) : c.GetType() == u.b2_staticBody ? s.Set(0.5, 0.9, 0.5) : c.GetType() == u.b2_kinematicBody ? s.Set(0.5, 0.5, 0.9) : !1 == c.IsAwake() ? s.Set(0.6, 0.6, 0.6) : s.Set(0.9, 0.7, 0.7), this.DrawShape(g, j, s);
		}
		if (b & I.e_jointBit) for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
		if (b & I.e_controllerBit) for (c = this.m_controllerList; c; c = c.m_next) c.Draw(this.m_debugDraw);
		if (b & I.e_pairBit) {
		  s.Set(0.3, 0.9, 0.9);
		  for (c = this.m_contactManager.m_contactList; c; c = c.GetNext()) g = c.GetFixtureA(), d = c.GetFixtureB(), g = g.GetAABB().GetCenter(), d = d.GetAABB().GetCenter(), this.m_debugDraw.DrawSegment(g, d, s);
		}
		if (b & I.e_aabbBit) {
		  g = this.m_contactManager.m_broadPhase;
		  j = [new e(), new e(), new e(), new e()];
		  for (c = this.m_bodyList; c; c = c.GetNext()) if (!1 != c.IsActive()) for (d = c.GetFixtureList(); d; d = d.GetNext()) {
			var C = g.GetFatAABB(d.m_proxy);
			j[0].Set(C.lowerBound.x, C.lowerBound.y);
			j[1].Set(C.upperBound.x, C.lowerBound.y);
			j[2].Set(C.upperBound.x, C.upperBound.y);
			j[3].Set(C.lowerBound.x, C.upperBound.y);
			this.m_debugDraw.DrawPolygon(j, 4, s);
		  }
		}
		if (b & I.e_centerOfMassBit) for (c = this.m_bodyList; c; c = c.m_next) j = x.s_xf, j.R = c.m_xf.R, j.position = c.GetWorldCenter(), this.m_debugDraw.DrawTransform(j);
	  }
	};
	x.prototype.QueryAABB = function (b, c) {
	  var d = this.m_contactManager.m_broadPhase;
	  d.Query(function (c) {
		return b(d.GetUserData(c));
	  }, c);
	};
	x.prototype.QueryShape = function (b, c, e) {
	  void 0 === e && (e = null);
	  null == e && (e = new d(), e.SetIdentity());
	  var f = this.m_contactManager.m_broadPhase,
		g = new n();
	  c.ComputeAABB(g, e);
	  f.Query(function (d) {
		d = f.GetUserData(d) instanceof P ? f.GetUserData(d) : null;
		return E.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform()) ? b(d) : !0;
	  }, g);
	};
	x.prototype.QueryPoint = function (b, c) {
	  var d = this.m_contactManager.m_broadPhase,
		e = new n();
	  e.lowerBound.Set(c.x - j.b2_linearSlop, c.y - j.b2_linearSlop);
	  e.upperBound.Set(c.x + j.b2_linearSlop, c.y + j.b2_linearSlop);
	  d.Query(function (e) {
		e = d.GetUserData(e) instanceof P ? d.GetUserData(e) : null;
		return e.TestPoint(c) ? b(e) : !0;
	  }, e);
	};
	x.prototype.RayCast = function (b, c, d) {
	  var f = this.m_contactManager.m_broadPhase,
		g = new y(),
		j = new t(c, d);
	  f.RayCast(function (j, s) {
		var x = f.GetUserData(s),
		  x = x instanceof P ? x : null;
		if (x.RayCast(g, j)) {
		  var C = g.fraction,
			m = new e((1 - C) * c.x + C * d.x, (1 - C) * c.y + C * d.y);
		  return b(x, m, g.normal, C);
		}
		return j.maxFraction;
	  }, j);
	};
	x.prototype.RayCastOne = function (b, c) {
	  var d;
	  this.RayCast(function (b, c, e, f) {
		void 0 === f && (f = 0);
		d = b;
		return f;
	  }, b, c);
	  return d;
	};
	x.prototype.RayCastAll = function (b, c) {
	  var d = new Vector();
	  this.RayCast(function (b) {
		d[d.length] = b;
		return 1;
	  }, b, c);
	  return d;
	};
	x.prototype.GetBodyList = function () {
	  return this.m_bodyList;
	};
	x.prototype.GetJointList = function () {
	  return this.m_jointList;
	};
	x.prototype.GetContactList = function () {
	  return this.m_contactList;
	};
	x.prototype.IsLocked = function () {
	  return 0 < (this.m_flags & x.e_locked);
	};
	x.prototype.Solve = function (b) {
	  for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(b);
	  d = this.m_island;
	  d.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
	  for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~u.e_islandFlag;
	  for (var e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~G.e_islandFlag;
	  for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
	  parseInt(this.m_bodyCount);
	  for (var e = this.s_stack, f = this.m_bodyList; f; f = f.m_next) if (!(f.m_flags & u.e_islandFlag) && !(!1 == f.IsAwake() || !1 == f.IsActive()) && f.GetType() != u.b2_staticBody) {
		d.Clear();
		var g = 0;
		e[g++] = f;
		for (f.m_flags |= u.e_islandFlag; 0 < g;) if (c = e[--g], d.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() != u.b2_staticBody) {
		  for (var j, s = c.m_contactList; s; s = s.next) if (!(s.contact.m_flags & G.e_islandFlag) && !(!0 == s.contact.IsSensor() || !1 == s.contact.IsEnabled() || !1 == s.contact.IsTouching())) d.AddContact(s.contact), s.contact.m_flags |= G.e_islandFlag, j = s.other, j.m_flags & u.e_islandFlag || (e[g++] = j, j.m_flags |= u.e_islandFlag);
		  for (c = c.m_jointList; c; c = c.next) !0 != c.joint.m_islandFlag && (j = c.other, !1 != j.IsActive() && (d.AddJoint(c.joint), c.joint.m_islandFlag = !0, j.m_flags & u.e_islandFlag || (e[g++] = j, j.m_flags |= u.e_islandFlag)));
		}
		d.Solve(b, this.m_gravity, this.m_allowSleep);
		for (g = 0; g < d.m_bodyCount; ++g) c = d.m_bodies[g], c.GetType() == u.b2_staticBody && (c.m_flags &= ~u.e_islandFlag);
	  }
	  for (g = 0; g < e.length && e[g]; ++g) e[g] = null;
	  for (c = this.m_bodyList; c; c = c.m_next) !1 == c.IsAwake() || !1 == c.IsActive() || c.GetType() != u.b2_staticBody && c.SynchronizeFixtures();
	  this.m_contactManager.FindNewContacts();
	};
	x.prototype.SolveTOI = function (b) {
	  var c,
		d,
		e,
		f = this.m_island;
	  f.Initialize(this.m_bodyCount, j.b2_maxTOIContactsPerIsland, j.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
	  var g = x.s_queue;
	  for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~u.e_islandFlag, c.m_sweep.t0 = 0;
	  for (e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~(G.e_toiFlag | G.e_islandFlag);
	  for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
	  for (;;) {
		var s = null,
		  C = 1;
		for (e = this.m_contactList; e; e = e.m_next) if (!(!0 == e.IsSensor() || !1 == e.IsEnabled() || !1 == e.IsContinuous())) {
		  if (e.m_flags & G.e_toiFlag) c = e.m_toi;else {
			c = e.m_fixtureA;
			d = e.m_fixtureB;
			c = c.m_body;
			d = d.m_body;
			if ((c.GetType() != u.b2_dynamicBody || !1 == c.IsAwake()) && (d.GetType() != u.b2_dynamicBody || !1 == d.IsAwake())) continue;
			var m = c.m_sweep.t0;
			c.m_sweep.t0 < d.m_sweep.t0 ? (m = d.m_sweep.t0, c.m_sweep.Advance(m)) : d.m_sweep.t0 < c.m_sweep.t0 && (m = c.m_sweep.t0, d.m_sweep.Advance(m));
			c = e.ComputeTOI(c.m_sweep, d.m_sweep);
			j.b2Assert(0 <= c && 1 >= c);
			0 < c && 1 > c && (c = (1 - c) * m + c, 1 < c && (c = 1));
			e.m_toi = c;
			e.m_flags |= G.e_toiFlag;
		  }
		  Number.MIN_VALUE < c && c < C && (s = e, C = c);
		}
		if (null == s || 1 - 100 * Number.MIN_VALUE < C) break;
		c = s.m_fixtureA;
		d = s.m_fixtureB;
		c = c.m_body;
		d = d.m_body;
		x.s_backupA.Set(c.m_sweep);
		x.s_backupB.Set(d.m_sweep);
		c.Advance(C);
		d.Advance(C);
		s.Update(this.m_contactManager.m_contactListener);
		s.m_flags &= ~G.e_toiFlag;
		if (!0 == s.IsSensor() || !1 == s.IsEnabled()) c.m_sweep.Set(x.s_backupA), d.m_sweep.Set(x.s_backupB), c.SynchronizeTransform(), d.SynchronizeTransform();else if (!1 != s.IsTouching()) {
		  c.GetType() != u.b2_dynamicBody && (c = d);
		  f.Clear();
		  s = e = 0;
		  g[e + s++] = c;
		  for (c.m_flags |= u.e_islandFlag; 0 < s;) if (c = g[e++], --s, f.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() == u.b2_dynamicBody) {
			for (d = c.m_contactList; d && f.m_contactCount != f.m_contactCapacity; d = d.next) if (!(d.contact.m_flags & G.e_islandFlag) && !(!0 == d.contact.IsSensor() || !1 == d.contact.IsEnabled() || !1 == d.contact.IsTouching())) f.AddContact(d.contact), d.contact.m_flags |= G.e_islandFlag, m = d.other, m.m_flags & u.e_islandFlag || (m.GetType() != u.b2_staticBody && (m.Advance(C), m.SetAwake(!0)), g[e + s] = m, ++s, m.m_flags |= u.e_islandFlag);
			for (c = c.m_jointList; c; c = c.next) f.m_jointCount != f.m_jointCapacity && !0 != c.joint.m_islandFlag && (m = c.other, !1 != m.IsActive() && (f.AddJoint(c.joint), c.joint.m_islandFlag = !0, m.m_flags & u.e_islandFlag || (m.GetType() != u.b2_staticBody && (m.Advance(C), m.SetAwake(!0)), g[e + s] = m, ++s, m.m_flags |= u.e_islandFlag)));
		  }
		  e = x.s_timestep;
		  e.warmStarting = !1;
		  e.dt = (1 - C) * b.dt;
		  e.inv_dt = 1 / e.dt;
		  e.dtRatio = 0;
		  e.velocityIterations = b.velocityIterations;
		  e.positionIterations = b.positionIterations;
		  f.SolveTOI(e);
		  for (C = C = 0; C < f.m_bodyCount; ++C) if (c = f.m_bodies[C], c.m_flags &= ~u.e_islandFlag, !1 != c.IsAwake() && c.GetType() == u.b2_dynamicBody) {
			c.SynchronizeFixtures();
			for (d = c.m_contactList; d; d = d.next) d.contact.m_flags &= ~G.e_toiFlag;
		  }
		  for (C = 0; C < f.m_contactCount; ++C) e = f.m_contacts[C], e.m_flags &= ~(G.e_toiFlag | G.e_islandFlag);
		  for (C = 0; C < f.m_jointCount; ++C) e = f.m_joints[C], e.m_islandFlag = !1;
		  this.m_contactManager.FindNewContacts();
		}
	  }
	};
	x.prototype.DrawJoint = function (b) {
	  var c = b.GetBodyA(),
		d = b.GetBodyB(),
		e = c.m_xf.position,
		f = d.m_xf.position,
		g = b.GetAnchorA(),
		j = b.GetAnchorB(),
		s = x.s_jointColor;
	  switch (b.m_type) {
		case aa.e_distanceJoint:
		  this.m_debugDraw.DrawSegment(g, j, s);
		  break;
		case aa.e_pulleyJoint:
		  c = b instanceof R ? b : null;
		  b = c.GetGroundAnchorA();
		  c = c.GetGroundAnchorB();
		  this.m_debugDraw.DrawSegment(b, g, s);
		  this.m_debugDraw.DrawSegment(c, j, s);
		  this.m_debugDraw.DrawSegment(b, c, s);
		  break;
		case aa.e_mouseJoint:
		  this.m_debugDraw.DrawSegment(g, j, s);
		  break;
		default:
		  c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, g, s), this.m_debugDraw.DrawSegment(g, j, s), d != this.m_groundBody && this.m_debugDraw.DrawSegment(f, j, s);
	  }
	};
	x.prototype.DrawShape = function (c, d, e) {
	  switch (c.m_type) {
		case E.e_circleShape:
		  var f = c instanceof z ? c : null;
		  this.m_debugDraw.DrawSolidCircle(b.MulX(d, f.m_p), f.m_radius, d.R.col1, e);
		  break;
		case E.e_polygonShape:
		  f = c instanceof D ? c : null;
		  c = parseInt(f.GetVertexCount());
		  for (var g = f.GetVertices(), j = new Vector(c), f = 0; f < c; ++f) j[f] = b.MulX(d, g[f]);
		  this.m_debugDraw.DrawSolidPolygon(j, c, e);
		  break;
		case E.e_edgeShape:
		  f = c instanceof A ? c : null, this.m_debugDraw.DrawSegment(b.MulX(d, f.GetVertex1()), b.MulX(d, f.GetVertex2()), e);
	  }
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.b2World.s_timestep2 = new s();
	  Box2D.Dynamics.b2World.s_xf = new d();
	  Box2D.Dynamics.b2World.s_backupA = new c();
	  Box2D.Dynamics.b2World.s_backupB = new c();
	  Box2D.Dynamics.b2World.s_timestep = new s();
	  Box2D.Dynamics.b2World.s_queue = new Vector();
	  Box2D.Dynamics.b2World.s_jointColor = new f(0.5, 0.8, 0.8);
	  Box2D.Dynamics.b2World.e_newFixture = 1;
	  Box2D.Dynamics.b2World.e_locked = 2;
	});
  })();
  (function () {
	var b = Box2D.Collision.Shapes.b2CircleShape,
	  c = Box2D.Collision.Shapes.b2EdgeShape,
	  d = Box2D.Collision.Shapes.b2PolygonShape,
	  e = Box2D.Collision.Shapes.b2Shape,
	  f = Box2D.Dynamics.Contacts.b2CircleContact,
	  j = Box2D.Dynamics.Contacts.b2Contact,
	  n = Box2D.Dynamics.Contacts.b2ContactConstraint,
	  m = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
	  g = Box2D.Dynamics.Contacts.b2ContactEdge,
	  t = Box2D.Dynamics.Contacts.b2ContactFactory,
	  y = Box2D.Dynamics.Contacts.b2ContactRegister,
	  z = Box2D.Dynamics.Contacts.b2ContactResult,
	  A = Box2D.Dynamics.Contacts.b2ContactSolver,
	  B = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
	  D = Box2D.Dynamics.Contacts.b2NullContact,
	  E = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
	  u = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
	  F = Box2D.Dynamics.Contacts.b2PolygonContact,
	  K = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
	  L = Box2D.Dynamics.b2Body,
	  N = Box2D.Dynamics.b2TimeStep,
	  Q = Box2D.Common.b2Settings,
	  I = Box2D.Common.Math.b2Mat22,
	  fa = Box2D.Common.Math.b2Math,
	  O = Box2D.Common.Math.b2Vec2,
	  P = Box2D.Collision.b2Collision,
	  ba = Box2D.Collision.b2ContactID,
	  U = Box2D.Collision.b2Manifold,
	  s = Box2D.Collision.b2TimeOfImpact,
	  x = Box2D.Collision.b2TOIInput,
	  G = Box2D.Collision.b2WorldManifold;
	Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact);
	f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	f.b2CircleContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	f.Create = function () {
	  return new f();
	};
	f.Destroy = function () {};
	f.prototype.Reset = function (b, c) {
	  this.__super.Reset.call(this, b, c);
	};
	f.prototype.Evaluate = function () {
	  var c = this.m_fixtureA.GetBody(),
		d = this.m_fixtureB.GetBody();
	  P.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof b ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, d.m_xf);
	};
	j.b2Contact = function () {
	  this.m_nodeA = new g();
	  this.m_nodeB = new g();
	  this.m_manifold = new U();
	  this.m_oldManifold = new U();
	};
	j.prototype.GetManifold = function () {
	  return this.m_manifold;
	};
	j.prototype.GetWorldManifold = function (b) {
	  var c = this.m_fixtureA.GetBody(),
		d = this.m_fixtureB.GetBody(),
		e = this.m_fixtureA.GetShape(),
		f = this.m_fixtureB.GetShape();
	  b.Initialize(this.m_manifold, c.GetTransform(), e.m_radius, d.GetTransform(), f.m_radius);
	};
	j.prototype.IsTouching = function () {
	  return (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag;
	};
	j.prototype.IsContinuous = function () {
	  return (this.m_flags & j.e_continuousFlag) == j.e_continuousFlag;
	};
	j.prototype.SetSensor = function (b) {
	  this.m_flags = b ? this.m_flags | j.e_sensorFlag : this.m_flags & ~j.e_sensorFlag;
	};
	j.prototype.IsSensor = function () {
	  return (this.m_flags & j.e_sensorFlag) == j.e_sensorFlag;
	};
	j.prototype.SetEnabled = function (b) {
	  this.m_flags = b ? this.m_flags | j.e_enabledFlag : this.m_flags & ~j.e_enabledFlag;
	};
	j.prototype.IsEnabled = function () {
	  return (this.m_flags & j.e_enabledFlag) == j.e_enabledFlag;
	};
	j.prototype.GetNext = function () {
	  return this.m_next;
	};
	j.prototype.GetFixtureA = function () {
	  return this.m_fixtureA;
	};
	j.prototype.GetFixtureB = function () {
	  return this.m_fixtureB;
	};
	j.prototype.FlagForFiltering = function () {
	  this.m_flags |= j.e_filterFlag;
	};
	j.prototype.b2Contact = function () {};
	j.prototype.Reset = function (b, c) {
	  void 0 === b && (b = null);
	  void 0 === c && (c = null);
	  this.m_flags = j.e_enabledFlag;
	  if (!b || !c) this.m_fixtureB = this.m_fixtureA = null;else {
		if (b.IsSensor() || c.IsSensor()) this.m_flags |= j.e_sensorFlag;
		var d = b.GetBody(),
		  e = c.GetBody();
		if (d.GetType() != L.b2_dynamicBody || d.IsBullet() || e.GetType() != L.b2_dynamicBody || e.IsBullet()) this.m_flags |= j.e_continuousFlag;
		this.m_fixtureA = b;
		this.m_fixtureB = c;
		this.m_manifold.m_pointCount = 0;
		this.m_next = this.m_prev = null;
		this.m_nodeA.contact = null;
		this.m_nodeA.prev = null;
		this.m_nodeA.next = null;
		this.m_nodeA.other = null;
		this.m_nodeB.contact = null;
		this.m_nodeB.prev = null;
		this.m_nodeB.next = null;
		this.m_nodeB.other = null;
	  }
	};
	j.prototype.Update = function (b) {
	  var c = this.m_oldManifold;
	  this.m_oldManifold = this.m_manifold;
	  this.m_manifold = c;
	  this.m_flags |= j.e_enabledFlag;
	  var d = !1,
		c = (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag,
		f = this.m_fixtureA.m_body,
		g = this.m_fixtureB.m_body,
		s = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
	  if (this.m_flags & j.e_sensorFlag) s && (d = this.m_fixtureA.GetShape(), s = this.m_fixtureB.GetShape(), f = f.GetTransform(), g = g.GetTransform(), d = e.TestOverlap(d, f, s, g)), this.m_manifold.m_pointCount = 0;else {
		this.m_flags = f.GetType() != L.b2_dynamicBody || f.IsBullet() || g.GetType() != L.b2_dynamicBody || g.IsBullet() ? this.m_flags | j.e_continuousFlag : this.m_flags & ~j.e_continuousFlag;
		if (s) {
		  this.Evaluate();
		  d = 0 < this.m_manifold.m_pointCount;
		  for (s = 0; s < this.m_manifold.m_pointCount; ++s) {
			var x = this.m_manifold.m_points[s];
			x.m_normalImpulse = 0;
			x.m_tangentImpulse = 0;
			for (var r = x.m_id, m = 0; m < this.m_oldManifold.m_pointCount; ++m) {
			  var G = this.m_oldManifold.m_points[m];
			  if (G.m_id.key == r.key) {
				x.m_normalImpulse = G.m_normalImpulse;
				x.m_tangentImpulse = G.m_tangentImpulse;
				break;
			  }
			}
		  }
		} else this.m_manifold.m_pointCount = 0;
		d != c && (f.SetAwake(!0), g.SetAwake(!0));
	  }
	  this.m_flags = d ? this.m_flags | j.e_touchingFlag : this.m_flags & ~j.e_touchingFlag;
	  !1 == c && !0 == d && b.BeginContact(this);
	  !0 == c && !1 == d && b.EndContact(this);
	  0 == (this.m_flags & j.e_sensorFlag) && b.PreSolve(this, this.m_oldManifold);
	};
	j.prototype.Evaluate = function () {};
	j.prototype.ComputeTOI = function (b, c) {
	  j.s_input.proxyA.Set(this.m_fixtureA.GetShape());
	  j.s_input.proxyB.Set(this.m_fixtureB.GetShape());
	  j.s_input.sweepA = b;
	  j.s_input.sweepB = c;
	  j.s_input.tolerance = Q.b2_linearSlop;
	  return s.TimeOfImpact(j.s_input);
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
	  Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
	  Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
	  Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
	  Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
	  Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
	  Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
	  Box2D.Dynamics.Contacts.b2Contact.s_input = new x();
	});
	n.b2ContactConstraint = function () {
	  this.localPlaneNormal = new O();
	  this.localPoint = new O();
	  this.normal = new O();
	  this.normalMass = new I();
	  this.K = new I();
	};
	n.prototype.b2ContactConstraint = function () {
	  this.points = new Vector(Q.b2_maxManifoldPoints);
	  for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.points[b] = new m();
	};
	m.b2ContactConstraintPoint = function () {
	  this.localPoint = new O();
	  this.rA = new O();
	  this.rB = new O();
	};
	g.b2ContactEdge = function () {};
	t.b2ContactFactory = function () {};
	t.prototype.b2ContactFactory = function (b) {
	  this.m_allocator = b;
	  this.InitializeRegisters();
	};
	t.prototype.AddType = function (b, c, d, e) {
	  void 0 === d && (d = 0);
	  void 0 === e && (e = 0);
	  this.m_registers[d][e].createFcn = b;
	  this.m_registers[d][e].destroyFcn = c;
	  this.m_registers[d][e].primary = !0;
	  d != e && (this.m_registers[e][d].createFcn = b, this.m_registers[e][d].destroyFcn = c, this.m_registers[e][d].primary = !1);
	};
	t.prototype.InitializeRegisters = function () {
	  this.m_registers = new Vector(e.e_shapeTypeCount);
	  for (var b = 0; b < e.e_shapeTypeCount; b++) {
		this.m_registers[b] = new Vector(e.e_shapeTypeCount);
		for (var c = 0; c < e.e_shapeTypeCount; c++) this.m_registers[b][c] = new y();
	  }
	  this.AddType(f.Create, f.Destroy, e.e_circleShape, e.e_circleShape);
	  this.AddType(E.Create, E.Destroy, e.e_polygonShape, e.e_circleShape);
	  this.AddType(F.Create, F.Destroy, e.e_polygonShape, e.e_polygonShape);
	  this.AddType(B.Create, B.Destroy, e.e_edgeShape, e.e_circleShape);
	  this.AddType(u.Create, u.Destroy, e.e_polygonShape, e.e_edgeShape);
	};
	t.prototype.Create = function (b, c) {
	  var d = parseInt(b.GetType()),
		e = parseInt(c.GetType()),
		d = this.m_registers[d][e];
	  if (d.pool) return e = d.pool, d.pool = e.m_next, d.poolCount--, e.Reset(b, c), e;
	  e = d.createFcn;
	  return null != e ? (d.primary ? (e = e(this.m_allocator), e.Reset(b, c)) : (e = e(this.m_allocator), e.Reset(c, b)), e) : null;
	};
	t.prototype.Destroy = function (b) {
	  0 < b.m_manifold.m_pointCount && (b.m_fixtureA.m_body.SetAwake(!0), b.m_fixtureB.m_body.SetAwake(!0));
	  var c = parseInt(b.m_fixtureA.GetType()),
		d = parseInt(b.m_fixtureB.GetType()),
		c = this.m_registers[c][d];
	  c.poolCount++;
	  b.m_next = c.pool;
	  c.pool = b;
	  c = c.destroyFcn;
	  c(b, this.m_allocator);
	};
	y.b2ContactRegister = function () {};
	z.b2ContactResult = function () {
	  this.position = new O();
	  this.normal = new O();
	  this.id = new ba();
	};
	A.b2ContactSolver = function () {
	  this.m_step = new N();
	  this.m_constraints = new Vector();
	};
	A.prototype.b2ContactSolver = function () {};
	A.prototype.Initialize = function (b, c, d, e) {
	  void 0 === d && (d = 0);
	  var f;
	  this.m_step.Set(b);
	  this.m_allocator = e;
	  for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new n();
	  for (b = 0; b < d; ++b) {
		f = c[b];
		e = f.m_fixtureA;
		var g = f.m_fixtureB,
		  j = e.m_shape.m_radius,
		  s = g.m_shape.m_radius,
		  x = e.m_body,
		  m = g.m_body,
		  G = f.GetManifold(),
		  u = Q.b2MixFriction(e.GetFriction(), g.GetFriction()),
		  z = Q.b2MixRestitution(e.GetRestitution(), g.GetRestitution()),
		  t = x.m_linearVelocity.x,
		  B = x.m_linearVelocity.y,
		  y = m.m_linearVelocity.x,
		  D = m.m_linearVelocity.y,
		  E = x.m_angularVelocity,
		  K = m.m_angularVelocity;
		Q.b2Assert(0 < G.m_pointCount);
		A.s_worldManifold.Initialize(G, x.m_xf, j, m.m_xf, s);
		g = A.s_worldManifold.m_normal.x;
		f = A.s_worldManifold.m_normal.y;
		e = this.m_constraints[b];
		e.bodyA = x;
		e.bodyB = m;
		e.manifold = G;
		e.normal.x = g;
		e.normal.y = f;
		e.pointCount = G.m_pointCount;
		e.friction = u;
		e.restitution = z;
		e.localPlaneNormal.x = G.m_localPlaneNormal.x;
		e.localPlaneNormal.y = G.m_localPlaneNormal.y;
		e.localPoint.x = G.m_localPoint.x;
		e.localPoint.y = G.m_localPoint.y;
		e.radius = j + s;
		e.type = G.m_type;
		for (j = 0; j < e.pointCount; ++j) {
		  u = G.m_points[j];
		  s = e.points[j];
		  s.normalImpulse = u.m_normalImpulse;
		  s.tangentImpulse = u.m_tangentImpulse;
		  s.localPoint.SetV(u.m_localPoint);
		  var u = s.rA.x = A.s_worldManifold.m_points[j].x - x.m_sweep.c.x,
			z = s.rA.y = A.s_worldManifold.m_points[j].y - x.m_sweep.c.y,
			F = s.rB.x = A.s_worldManifold.m_points[j].x - m.m_sweep.c.x,
			L = s.rB.y = A.s_worldManifold.m_points[j].y - m.m_sweep.c.y,
			I = u * f - z * g,
			N = F * f - L * g,
			I = I * I,
			N = N * N;
		  s.normalMass = 1 / (x.m_invMass + m.m_invMass + x.m_invI * I + m.m_invI * N);
		  var O = x.m_mass * x.m_invMass + m.m_mass * m.m_invMass,
			O = O + (x.m_mass * x.m_invI * I + m.m_mass * m.m_invI * N);
		  s.equalizedMass = 1 / O;
		  N = f;
		  O = -g;
		  I = u * O - z * N;
		  N = F * O - L * N;
		  I *= I;
		  N *= N;
		  s.tangentMass = 1 / (x.m_invMass + m.m_invMass + x.m_invI * I + m.m_invI * N);
		  s.velocityBias = 0;
		  u = e.normal.x * (y + -K * L - t - -E * z) + e.normal.y * (D + K * F - B - E * u);
		  u < -Q.b2_velocityThreshold && (s.velocityBias += -e.restitution * u);
		}
		2 == e.pointCount && (D = e.points[0], y = e.points[1], G = x.m_invMass, x = x.m_invI, t = m.m_invMass, m = m.m_invI, B = D.rA.x * f - D.rA.y * g, D = D.rB.x * f - D.rB.y * g, E = y.rA.x * f - y.rA.y * g, y = y.rB.x * f - y.rB.y * g, g = G + t + x * B * B + m * D * D, f = G + t + x * E * E + m * y * y, m = G + t + x * B * E + m * D * y, g * g < 100 * (g * f - m * m) ? (e.K.col1.Set(g, m), e.K.col2.Set(m, f), e.K.GetInverse(e.normalMass)) : e.pointCount = 1);
	  }
	};
	A.prototype.InitVelocityConstraints = function (b) {
	  for (var c = 0; c < this.m_constraintCount; ++c) {
		var d = this.m_constraints[c],
		  e = d.bodyA,
		  f = d.bodyB,
		  g = e.m_invMass,
		  j = e.m_invI,
		  s = f.m_invMass,
		  x = f.m_invI,
		  m = d.normal.x,
		  G = d.normal.y,
		  n = G,
		  u = -m,
		  z = 0,
		  t = 0;
		if (b.warmStarting) {
		  t = d.pointCount;
		  for (z = 0; z < t; ++z) {
			var A = d.points[z];
			A.normalImpulse *= b.dtRatio;
			A.tangentImpulse *= b.dtRatio;
			var B = A.normalImpulse * m + A.tangentImpulse * n,
			  y = A.normalImpulse * G + A.tangentImpulse * u;
			e.m_angularVelocity -= j * (A.rA.x * y - A.rA.y * B);
			e.m_linearVelocity.x -= g * B;
			e.m_linearVelocity.y -= g * y;
			f.m_angularVelocity += x * (A.rB.x * y - A.rB.y * B);
			f.m_linearVelocity.x += s * B;
			f.m_linearVelocity.y += s * y;
		  }
		} else {
		  t = d.pointCount;
		  for (z = 0; z < t; ++z) e = d.points[z], e.normalImpulse = 0, e.tangentImpulse = 0;
		}
	  }
	};
	A.prototype.SolveVelocityConstraints = function () {
	  for (var b = 0, c, d = 0, e = 0, f = 0, g = 0, j = 0, s = 0, x = 0, m, G = 0; G < this.m_constraintCount; ++G) {
		var f = this.m_constraints[G],
		  n = f.bodyA,
		  u = f.bodyB,
		  z = n.m_angularVelocity,
		  t = u.m_angularVelocity,
		  A = n.m_linearVelocity,
		  B = u.m_linearVelocity,
		  y = n.m_invMass,
		  D = n.m_invI,
		  E = u.m_invMass,
		  K = u.m_invI,
		  s = f.normal.x,
		  F = x = f.normal.y;
		m = -s;
		j = f.friction;
		for (b = 0; b < f.pointCount; b++) c = f.points[b], d = B.x - t * c.rB.y - A.x + z * c.rA.y, e = B.y + t * c.rB.x - A.y - z * c.rA.x, d = d * F + e * m, d = c.tangentMass * -d, e = j * c.normalImpulse, e = fa.Clamp(c.tangentImpulse + d, -e, e), d = e - c.tangentImpulse, g = d * F, d *= m, A.x -= y * g, A.y -= y * d, z -= D * (c.rA.x * d - c.rA.y * g), B.x += E * g, B.y += E * d, t += K * (c.rB.x * d - c.rB.y * g), c.tangentImpulse = e;
		parseInt(f.pointCount);
		if (1 == f.pointCount) c = f.points[0], d = B.x + -t * c.rB.y - A.x - -z * c.rA.y, e = B.y + t * c.rB.x - A.y - z * c.rA.x, f = d * s + e * x, d = -c.normalMass * (f - c.velocityBias), e = c.normalImpulse + d, e = 0 < e ? e : 0, d = e - c.normalImpulse, g = d * s, d *= x, A.x -= y * g, A.y -= y * d, z -= D * (c.rA.x * d - c.rA.y * g), B.x += E * g, B.y += E * d, t += K * (c.rB.x * d - c.rB.y * g), c.normalImpulse = e;else {
		  c = f.points[0];
		  var b = f.points[1],
			d = c.normalImpulse,
			j = b.normalImpulse,
			L = (B.x - t * c.rB.y - A.x + z * c.rA.y) * s + (B.y + t * c.rB.x - A.y - z * c.rA.x) * x,
			I = (B.x - t * b.rB.y - A.x + z * b.rA.y) * s + (B.y + t * b.rB.x - A.y - z * b.rA.x) * x,
			e = L - c.velocityBias,
			g = I - b.velocityBias;
		  m = f.K;
		  e -= m.col1.x * d + m.col2.x * j;
		  for (g -= m.col1.y * d + m.col2.y * j;;) {
			m = f.normalMass;
			F = -(m.col1.x * e + m.col2.x * g);
			m = -(m.col1.y * e + m.col2.y * g);
			if (0 <= F && 0 <= m) {
			  d = F - d;
			  j = m - j;
			  f = d * s;
			  d *= x;
			  s *= j;
			  x *= j;
			  A.x -= y * (f + s);
			  A.y -= y * (d + x);
			  z -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
			  B.x += E * (f + s);
			  B.y += E * (d + x);
			  t += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
			  c.normalImpulse = F;
			  b.normalImpulse = m;
			  break;
			}
			F = -c.normalMass * e;
			m = 0;
			I = f.K.col1.y * F + g;
			if (0 <= F && 0 <= I) {
			  d = F - d;
			  j = m - j;
			  f = d * s;
			  d *= x;
			  s *= j;
			  x *= j;
			  A.x -= y * (f + s);
			  A.y -= y * (d + x);
			  z -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
			  B.x += E * (f + s);
			  B.y += E * (d + x);
			  t += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
			  c.normalImpulse = F;
			  b.normalImpulse = m;
			  break;
			}
			F = 0;
			m = -b.normalMass * g;
			L = f.K.col2.x * m + e;
			if (0 <= m && 0 <= L) {
			  d = F - d;
			  j = m - j;
			  f = d * s;
			  d *= x;
			  s *= j;
			  x *= j;
			  A.x -= y * (f + s);
			  A.y -= y * (d + x);
			  z -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
			  B.x += E * (f + s);
			  B.y += E * (d + x);
			  t += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
			  c.normalImpulse = F;
			  b.normalImpulse = m;
			  break;
			}
			m = F = 0;
			L = e;
			I = g;
			if (0 <= L && 0 <= I) {
			  d = F - d;
			  j = m - j;
			  f = d * s;
			  d *= x;
			  s *= j;
			  x *= j;
			  A.x -= y * (f + s);
			  A.y -= y * (d + x);
			  z -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
			  B.x += E * (f + s);
			  B.y += E * (d + x);
			  t += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
			  c.normalImpulse = F;
			  b.normalImpulse = m;
			  break;
			}
			break;
		  }
		}
		n.m_angularVelocity = z;
		u.m_angularVelocity = t;
	  }
	};
	A.prototype.FinalizeVelocityConstraints = function () {
	  for (var b = 0; b < this.m_constraintCount; ++b) for (var c = this.m_constraints[b], d = c.manifold, e = 0; e < c.pointCount; ++e) {
		var f = d.m_points[e],
		  g = c.points[e];
		f.m_normalImpulse = g.normalImpulse;
		f.m_tangentImpulse = g.tangentImpulse;
	  }
	};
	A.prototype.SolvePositionConstraints = function (b) {
	  void 0 === b && (b = 0);
	  for (var c = 0, d = 0; d < this.m_constraintCount; d++) {
		var e = this.m_constraints[d],
		  f = e.bodyA,
		  g = e.bodyB,
		  j = f.m_mass * f.m_invMass,
		  s = f.m_mass * f.m_invI,
		  x = g.m_mass * g.m_invMass,
		  m = g.m_mass * g.m_invI;
		A.s_psm.Initialize(e);
		for (var G = A.s_psm.m_normal, n = 0; n < e.pointCount; n++) {
		  var z = e.points[n],
			u = A.s_psm.m_points[n],
			t = A.s_psm.m_separations[n],
			B = u.x - f.m_sweep.c.x,
			y = u.y - f.m_sweep.c.y,
			D = u.x - g.m_sweep.c.x,
			u = u.y - g.m_sweep.c.y,
			c = c < t ? c : t,
			t = fa.Clamp(b * (t + Q.b2_linearSlop), -Q.b2_maxLinearCorrection, 0),
			t = -z.equalizedMass * t,
			z = t * G.x,
			t = t * G.y;
		  f.m_sweep.c.x -= j * z;
		  f.m_sweep.c.y -= j * t;
		  f.m_sweep.a -= s * (B * t - y * z);
		  f.SynchronizeTransform();
		  g.m_sweep.c.x += x * z;
		  g.m_sweep.c.y += x * t;
		  g.m_sweep.a += m * (D * t - u * z);
		  g.SynchronizeTransform();
		}
	  }
	  return c > -1.5 * Q.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new G();
	  Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new K();
	});
	Box2D.inherit(B, Box2D.Dynamics.Contacts.b2Contact);
	B.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	B.b2EdgeAndCircleContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	B.Create = function () {
	  return new B();
	};
	B.Destroy = function () {};
	B.prototype.Reset = function (b, c) {
	  this.__super.Reset.call(this, b, c);
	};
	B.prototype.Evaluate = function () {
	  var d = this.m_fixtureA.GetBody(),
		e = this.m_fixtureB.GetBody();
	  this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, d.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf);
	};
	B.prototype.b2CollideEdgeAndCircle = function () {};
	Box2D.inherit(D, Box2D.Dynamics.Contacts.b2Contact);
	D.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	D.b2NullContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	D.prototype.b2NullContact = function () {
	  this.__super.b2Contact.call(this);
	};
	D.prototype.Evaluate = function () {};
	Box2D.inherit(E, Box2D.Dynamics.Contacts.b2Contact);
	E.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	E.b2PolyAndCircleContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	E.Create = function () {
	  return new E();
	};
	E.Destroy = function () {};
	E.prototype.Reset = function (b, c) {
	  this.__super.Reset.call(this, b, c);
	  Q.b2Assert(b.GetType() == e.e_polygonShape);
	  Q.b2Assert(c.GetType() == e.e_circleShape);
	};
	E.prototype.Evaluate = function () {
	  var c = this.m_fixtureA.m_body,
		e = this.m_fixtureB.m_body;
	  P.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf);
	};
	Box2D.inherit(u, Box2D.Dynamics.Contacts.b2Contact);
	u.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	u.b2PolyAndEdgeContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	u.Create = function () {
	  return new u();
	};
	u.Destroy = function () {};
	u.prototype.Reset = function (b, c) {
	  this.__super.Reset.call(this, b, c);
	  Q.b2Assert(b.GetType() == e.e_polygonShape);
	  Q.b2Assert(c.GetType() == e.e_edgeShape);
	};
	u.prototype.Evaluate = function () {
	  var b = this.m_fixtureA.GetBody(),
		e = this.m_fixtureB.GetBody();
	  this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, b.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf);
	};
	u.prototype.b2CollidePolyAndEdge = function () {};
	Box2D.inherit(F, Box2D.Dynamics.Contacts.b2Contact);
	F.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	F.b2PolygonContact = function () {
	  Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	F.Create = function () {
	  return new F();
	};
	F.Destroy = function () {};
	F.prototype.Reset = function (b, c) {
	  this.__super.Reset.call(this, b, c);
	};
	F.prototype.Evaluate = function () {
	  var b = this.m_fixtureA.GetBody(),
		c = this.m_fixtureB.GetBody();
	  P.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, b.m_xf, this.m_fixtureB.GetShape() instanceof d ? this.m_fixtureB.GetShape() : null, c.m_xf);
	};
	K.b2PositionSolverManifold = function () {};
	K.prototype.b2PositionSolverManifold = function () {
	  this.m_normal = new O();
	  this.m_separations = new Vector_a2j_Number(Q.b2_maxManifoldPoints);
	  this.m_points = new Vector(Q.b2_maxManifoldPoints);
	  for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.m_points[b] = new O();
	};
	K.prototype.Initialize = function (b) {
	  Q.b2Assert(0 < b.pointCount);
	  var c = 0,
		d = 0,
		e = 0,
		f,
		g = 0,
		j = 0;
	  switch (b.type) {
		case U.e_circles:
		  f = b.bodyA.m_xf.R;
		  e = b.localPoint;
		  c = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
		  d = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
		  f = b.bodyB.m_xf.R;
		  e = b.points[0].localPoint;
		  g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
		  f = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
		  var e = g - c,
			j = f - d,
			s = e * e + j * j;
		  s > Number.MIN_VALUE * Number.MIN_VALUE ? (s = Math.sqrt(s), this.m_normal.x = e / s, this.m_normal.y = j / s) : (this.m_normal.x = 1, this.m_normal.y = 0);
		  this.m_points[0].x = 0.5 * (c + g);
		  this.m_points[0].y = 0.5 * (d + f);
		  this.m_separations[0] = e * this.m_normal.x + j * this.m_normal.y - b.radius;
		  break;
		case U.e_faceA:
		  f = b.bodyA.m_xf.R;
		  e = b.localPlaneNormal;
		  this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
		  this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
		  f = b.bodyA.m_xf.R;
		  e = b.localPoint;
		  g = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
		  j = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
		  f = b.bodyB.m_xf.R;
		  for (c = 0; c < b.pointCount; ++c) e = b.points[c].localPoint, d = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - j) * this.m_normal.y - b.radius, this.m_points[c].x = d, this.m_points[c].y = e;
		  break;
		case U.e_faceB:
		  f = b.bodyB.m_xf.R;
		  e = b.localPlaneNormal;
		  this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
		  this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
		  f = b.bodyB.m_xf.R;
		  e = b.localPoint;
		  g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
		  j = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
		  f = b.bodyA.m_xf.R;
		  for (c = 0; c < b.pointCount; ++c) e = b.points[c].localPoint, d = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - j) * this.m_normal.y - b.radius, this.m_points[c].Set(d, e);
		  this.m_normal.x *= -1;
		  this.m_normal.y *= -1;
	  }
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new O();
	  Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new O();
	});
  })();
  (function () {
	var b = Box2D.Common.Math.b2Mat22,
	  c = Box2D.Common.Math.b2Math,
	  d = Box2D.Common.Math.b2Vec2,
	  e = Box2D.Common.b2Color,
	  f = Box2D.Dynamics.Controllers.b2BuoyancyController,
	  j = Box2D.Dynamics.Controllers.b2ConstantAccelController,
	  n = Box2D.Dynamics.Controllers.b2ConstantForceController,
	  m = Box2D.Dynamics.Controllers.b2Controller,
	  g = Box2D.Dynamics.Controllers.b2ControllerEdge,
	  t = Box2D.Dynamics.Controllers.b2GravityController,
	  y = Box2D.Dynamics.Controllers.b2TensorDampingController;
	Box2D.inherit(f, Box2D.Dynamics.Controllers.b2Controller);
	f.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	f.b2BuoyancyController = function () {
	  Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
	  this.normal = new d(0, -1);
	  this.density = this.offset = 0;
	  this.velocity = new d(0, 0);
	  this.linearDrag = 2;
	  this.angularDrag = 1;
	  this.useDensity = !1;
	  this.useWorldGravity = !0;
	  this.gravity = null;
	};
	f.prototype.Step = function () {
	  if (this.m_bodyList) {
		this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
		for (var b = this.m_bodyList; b; b = b.nextBody) {
		  var c = b.body;
		  if (!1 != c.IsAwake()) {
			for (var e = new d(), f = new d(), g = 0, j = 0, m = c.GetFixtureList(); m; m = m.GetNext()) {
			  var n = new d(),
				t = m.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), n),
				g = g + t;
			  e.x += t * n.x;
			  e.y += t * n.y;
			  var y = 0,
				y = 1,
				j = j + t * y;
			  f.x += t * n.x * y;
			  f.y += t * n.y * y;
			}
			e.x /= g;
			e.y /= g;
			f.x /= j;
			f.y /= j;
			g < Number.MIN_VALUE || (j = this.gravity.GetNegative(), j.Multiply(this.density * g), c.ApplyForce(j, f), f = c.GetLinearVelocityFromWorldPoint(e), f.Subtract(this.velocity), f.Multiply(-this.linearDrag * g), c.ApplyForce(f, e), c.ApplyTorque(-c.GetInertia() / c.GetMass() * g * c.GetAngularVelocity() * this.angularDrag));
		  }
		}
	  }
	};
	f.prototype.Draw = function (b) {
	  var c = new d(),
		f = new d();
	  c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
	  c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
	  f.x = this.normal.x * this.offset - 1E3 * this.normal.y;
	  f.y = this.normal.y * this.offset + 1E3 * this.normal.x;
	  var g = new e(0, 0, 1);
	  b.DrawSegment(c, f, g);
	};
	Box2D.inherit(j, Box2D.Dynamics.Controllers.b2Controller);
	j.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	j.b2ConstantAccelController = function () {
	  Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
	  this.A = new d(0, 0);
	};
	j.prototype.Step = function (b) {
	  b = new d(this.A.x * b.dt, this.A.y * b.dt);
	  for (var c = this.m_bodyList; c; c = c.nextBody) {
		var e = c.body;
		e.IsAwake() && e.SetLinearVelocity(new d(e.GetLinearVelocity().x + b.x, e.GetLinearVelocity().y + b.y));
	  }
	};
	Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller);
	n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	n.b2ConstantForceController = function () {
	  Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
	  this.F = new d(0, 0);
	};
	n.prototype.Step = function () {
	  for (var b = this.m_bodyList; b; b = b.nextBody) {
		var c = b.body;
		c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter());
	  }
	};
	m.b2Controller = function () {};
	m.prototype.Step = function () {};
	m.prototype.Draw = function () {};
	m.prototype.AddBody = function (b) {
	  var c = new g();
	  c.controller = this;
	  c.body = b;
	  c.nextBody = this.m_bodyList;
	  c.prevBody = null;
	  this.m_bodyList = c;
	  c.nextBody && (c.nextBody.prevBody = c);
	  this.m_bodyCount++;
	  c.nextController = b.m_controllerList;
	  c.prevController = null;
	  b.m_controllerList = c;
	  c.nextController && (c.nextController.prevController = c);
	  b.m_controllerCount++;
	};
	m.prototype.RemoveBody = function (b) {
	  for (var c = b.m_controllerList; c && c.controller != this;) c = c.nextController;
	  c.prevBody && (c.prevBody.nextBody = c.nextBody);
	  c.nextBody && (c.nextBody.prevBody = c.prevBody);
	  c.nextController && (c.nextController.prevController = c.prevController);
	  c.prevController && (c.prevController.nextController = c.nextController);
	  this.m_bodyList == c && (this.m_bodyList = c.nextBody);
	  b.m_controllerList == c && (b.m_controllerList = c.nextController);
	  b.m_controllerCount--;
	  this.m_bodyCount--;
	};
	m.prototype.Clear = function () {
	  for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body);
	};
	m.prototype.GetNext = function () {
	  return this.m_next;
	};
	m.prototype.GetWorld = function () {
	  return this.m_world;
	};
	m.prototype.GetBodyList = function () {
	  return this.m_bodyList;
	};
	g.b2ControllerEdge = function () {};
	Box2D.inherit(t, Box2D.Dynamics.Controllers.b2Controller);
	t.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	t.b2GravityController = function () {
	  Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
	  this.G = 1;
	  this.invSqr = !0;
	};
	t.prototype.Step = function () {
	  var b = null,
		c = null,
		e = null,
		f = 0,
		g = null,
		j = null,
		m = null,
		n = 0,
		t = 0,
		y = 0;
	  if (this.invSqr) for (b = this.m_bodyList; b; b = b.nextBody) {
		c = b.body;
		e = c.GetWorldCenter();
		f = c.GetMass();
		for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, m = j.GetWorldCenter(), n = m.x - e.x, t = m.y - e.y, y = n * n + t * t, y < Number.MIN_VALUE || (n = new d(n, t), n.Multiply(this.G / y / Math.sqrt(y) * f * j.GetMass()), c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, m));
	  } else for (b = this.m_bodyList; b; b = b.nextBody) {
		c = b.body;
		e = c.GetWorldCenter();
		f = c.GetMass();
		for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, m = j.GetWorldCenter(), n = m.x - e.x, t = m.y - e.y, y = n * n + t * t, y < Number.MIN_VALUE || (n = new d(n, t), n.Multiply(this.G / y * f * j.GetMass()), c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, m));
	  }
	};
	Box2D.inherit(y, Box2D.Dynamics.Controllers.b2Controller);
	y.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	y.b2TensorDampingController = function () {
	  Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
	  this.T = new b();
	  this.maxTimestep = 0;
	};
	y.prototype.SetAxisAligned = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.T.col1.x = -b;
	  this.T.col1.y = 0;
	  this.T.col2.x = 0;
	  this.T.col2.y = -c;
	  this.maxTimestep = 0 < b || 0 < c ? 1 / Math.max(b, c) : 0;
	};
	y.prototype.Step = function (b) {
	  b = b.dt;
	  if (!(b <= Number.MIN_VALUE)) {
		b > this.maxTimestep && 0 < this.maxTimestep && (b = this.maxTimestep);
		for (var e = this.m_bodyList; e; e = e.nextBody) {
		  var f = e.body;
		  if (f.IsAwake()) {
			var g = f.GetWorldVector(c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity())));
			f.SetLinearVelocity(new d(f.GetLinearVelocity().x + g.x * b, f.GetLinearVelocity().y + g.y * b));
		  }
		}
	  }
	};
  })();
  (function () {
	var b = Box2D.Common.b2Settings,
	  c = Box2D.Common.Math.b2Mat22,
	  d = Box2D.Common.Math.b2Mat33,
	  e = Box2D.Common.Math.b2Math,
	  f = Box2D.Common.Math.b2Vec2,
	  j = Box2D.Common.Math.b2Vec3,
	  n = Box2D.Dynamics.Joints.b2DistanceJoint,
	  m = Box2D.Dynamics.Joints.b2DistanceJointDef,
	  g = Box2D.Dynamics.Joints.b2FrictionJoint,
	  t = Box2D.Dynamics.Joints.b2FrictionJointDef,
	  y = Box2D.Dynamics.Joints.b2GearJoint,
	  z = Box2D.Dynamics.Joints.b2GearJointDef,
	  A = Box2D.Dynamics.Joints.b2Jacobian,
	  B = Box2D.Dynamics.Joints.b2Joint,
	  D = Box2D.Dynamics.Joints.b2JointDef,
	  E = Box2D.Dynamics.Joints.b2JointEdge,
	  u = Box2D.Dynamics.Joints.b2LineJoint,
	  F = Box2D.Dynamics.Joints.b2LineJointDef,
	  K = Box2D.Dynamics.Joints.b2MouseJoint,
	  L = Box2D.Dynamics.Joints.b2MouseJointDef,
	  N = Box2D.Dynamics.Joints.b2PrismaticJoint,
	  Q = Box2D.Dynamics.Joints.b2PrismaticJointDef,
	  I = Box2D.Dynamics.Joints.b2PulleyJoint,
	  fa = Box2D.Dynamics.Joints.b2PulleyJointDef,
	  O = Box2D.Dynamics.Joints.b2RevoluteJoint,
	  P = Box2D.Dynamics.Joints.b2RevoluteJointDef,
	  ba = Box2D.Dynamics.Joints.b2WeldJoint,
	  U = Box2D.Dynamics.Joints.b2WeldJointDef;
	Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
	n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	n.b2DistanceJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_u = new f();
	};
	n.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	n.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	n.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse * this.m_u.x, b * this.m_impulse * this.m_u.y);
	};
	n.prototype.GetReactionTorque = function () {
	  return 0;
	};
	n.prototype.GetLength = function () {
	  return this.m_length;
	};
	n.prototype.SetLength = function (b) {
	  void 0 === b && (b = 0);
	  this.m_length = b;
	};
	n.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};
	n.prototype.SetFrequency = function (b) {
	  void 0 === b && (b = 0);
	  this.m_frequencyHz = b;
	};
	n.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};
	n.prototype.SetDampingRatio = function (b) {
	  void 0 === b && (b = 0);
	  this.m_dampingRatio = b;
	};
	n.prototype.b2DistanceJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchor1.SetV(b.localAnchorA);
	  this.m_localAnchor2.SetV(b.localAnchorB);
	  this.m_length = b.length;
	  this.m_frequencyHz = b.frequencyHz;
	  this.m_dampingRatio = b.dampingRatio;
	  this.m_bias = this.m_gamma = this.m_impulse = 0;
	};
	n.prototype.InitVelocityConstraints = function (c) {
	  var d,
		e = 0,
		f = this.m_bodyA,
		g = this.m_bodyB;
	  d = f.m_xf.R;
	  var j = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
		m = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
		e = d.col1.x * j + d.col2.x * m,
		m = d.col1.y * j + d.col2.y * m,
		j = e;
	  d = g.m_xf.R;
	  var l = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
		q = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
		e = d.col1.x * l + d.col2.x * q,
		q = d.col1.y * l + d.col2.y * q,
		l = e;
	  this.m_u.x = g.m_sweep.c.x + l - f.m_sweep.c.x - j;
	  this.m_u.y = g.m_sweep.c.y + q - f.m_sweep.c.y - m;
	  e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
	  e > b.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
	  d = j * this.m_u.y - m * this.m_u.x;
	  var n = l * this.m_u.y - q * this.m_u.x;
	  d = f.m_invMass + f.m_invI * d * d + g.m_invMass + g.m_invI * n * n;
	  this.m_mass = 0 != d ? 1 / d : 0;
	  if (0 < this.m_frequencyHz) {
		var e = e - this.m_length,
		  n = 2 * Math.PI * this.m_frequencyHz,
		  r = this.m_mass * n * n;
		this.m_gamma = c.dt * (2 * this.m_mass * this.m_dampingRatio * n + c.dt * r);
		this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
		this.m_bias = e * c.dt * r * this.m_gamma;
		this.m_mass = d + this.m_gamma;
		this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0;
	  }
	  c.warmStarting ? (this.m_impulse *= c.dtRatio, c = this.m_impulse * this.m_u.x, d = this.m_impulse * this.m_u.y, f.m_linearVelocity.x -= f.m_invMass * c, f.m_linearVelocity.y -= f.m_invMass * d, f.m_angularVelocity -= f.m_invI * (j * d - m * c), g.m_linearVelocity.x += g.m_invMass * c, g.m_linearVelocity.y += g.m_invMass * d, g.m_angularVelocity += g.m_invI * (l * d - q * c)) : this.m_impulse = 0;
	};
	n.prototype.SolveVelocityConstraints = function () {
	  var b,
		c = this.m_bodyA,
		d = this.m_bodyB;
	  b = c.m_xf.R;
	  var e = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
		f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
		g = b.col1.x * e + b.col2.x * f,
		f = b.col1.y * e + b.col2.y * f,
		e = g;
	  b = d.m_xf.R;
	  var j = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
		l = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
		g = b.col1.x * j + b.col2.x * l,
		l = b.col1.y * j + b.col2.y * l,
		j = g,
		g = -this.m_mass * (this.m_u.x * (d.m_linearVelocity.x + -d.m_angularVelocity * l - (c.m_linearVelocity.x + -c.m_angularVelocity * f)) + this.m_u.y * (d.m_linearVelocity.y + d.m_angularVelocity * j - (c.m_linearVelocity.y + c.m_angularVelocity * e)) + this.m_bias + this.m_gamma * this.m_impulse);
	  this.m_impulse += g;
	  b = g * this.m_u.x;
	  g *= this.m_u.y;
	  c.m_linearVelocity.x -= c.m_invMass * b;
	  c.m_linearVelocity.y -= c.m_invMass * g;
	  c.m_angularVelocity -= c.m_invI * (e * g - f * b);
	  d.m_linearVelocity.x += d.m_invMass * b;
	  d.m_linearVelocity.y += d.m_invMass * g;
	  d.m_angularVelocity += d.m_invI * (j * g - l * b);
	};
	n.prototype.SolvePositionConstraints = function () {
	  var c;
	  if (0 < this.m_frequencyHz) return !0;
	  var d = this.m_bodyA,
		f = this.m_bodyB;
	  c = d.m_xf.R;
	  var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
		j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
		m = c.col1.x * g + c.col2.x * j,
		j = c.col1.y * g + c.col2.y * j,
		g = m;
	  c = f.m_xf.R;
	  var n = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
		l = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
		m = c.col1.x * n + c.col2.x * l,
		l = c.col1.y * n + c.col2.y * l,
		n = m,
		m = f.m_sweep.c.x + n - d.m_sweep.c.x - g,
		q = f.m_sweep.c.y + l - d.m_sweep.c.y - j;
	  c = Math.sqrt(m * m + q * q);
	  m /= c;
	  q /= c;
	  c -= this.m_length;
	  c = e.Clamp(c, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
	  var t = -this.m_mass * c;
	  this.m_u.Set(m, q);
	  m = t * this.m_u.x;
	  q = t * this.m_u.y;
	  d.m_sweep.c.x -= d.m_invMass * m;
	  d.m_sweep.c.y -= d.m_invMass * q;
	  d.m_sweep.a -= d.m_invI * (g * q - j * m);
	  f.m_sweep.c.x += f.m_invMass * m;
	  f.m_sweep.c.y += f.m_invMass * q;
	  f.m_sweep.a += f.m_invI * (n * q - l * m);
	  d.SynchronizeTransform();
	  f.SynchronizeTransform();
	  return e.Abs(c) < b.b2_linearSlop;
	};
	Box2D.inherit(m, Box2D.Dynamics.Joints.b2JointDef);
	m.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	m.b2DistanceJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	};
	m.prototype.b2DistanceJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_distanceJoint;
	  this.length = 1;
	  this.dampingRatio = this.frequencyHz = 0;
	};
	m.prototype.Initialize = function (b, c, d, e) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
	  this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
	  b = e.x - d.x;
	  d = e.y - d.y;
	  this.length = Math.sqrt(b * b + d * d);
	  this.dampingRatio = this.frequencyHz = 0;
	};
	Box2D.inherit(g, Box2D.Dynamics.Joints.b2Joint);
	g.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	g.b2FrictionJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_localAnchorA = new f();
	  this.m_localAnchorB = new f();
	  this.m_linearMass = new c();
	  this.m_linearImpulse = new f();
	};
	g.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
	};
	g.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
	};
	g.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_linearImpulse.x, b * this.m_linearImpulse.y);
	};
	g.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  return b * this.m_angularImpulse;
	};
	g.prototype.SetMaxForce = function (b) {
	  void 0 === b && (b = 0);
	  this.m_maxForce = b;
	};
	g.prototype.GetMaxForce = function () {
	  return this.m_maxForce;
	};
	g.prototype.SetMaxTorque = function (b) {
	  void 0 === b && (b = 0);
	  this.m_maxTorque = b;
	};
	g.prototype.GetMaxTorque = function () {
	  return this.m_maxTorque;
	};
	g.prototype.b2FrictionJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchorA.SetV(b.localAnchorA);
	  this.m_localAnchorB.SetV(b.localAnchorB);
	  this.m_linearMass.SetZero();
	  this.m_angularMass = 0;
	  this.m_linearImpulse.SetZero();
	  this.m_angularImpulse = 0;
	  this.m_maxForce = b.maxForce;
	  this.m_maxTorque = b.maxTorque;
	};
	g.prototype.InitVelocityConstraints = function (b) {
	  var d,
		e = 0,
		f = this.m_bodyA,
		g = this.m_bodyB;
	  d = f.m_xf.R;
	  var j = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
		m = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
		e = d.col1.x * j + d.col2.x * m,
		m = d.col1.y * j + d.col2.y * m,
		j = e;
	  d = g.m_xf.R;
	  var l = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
		q = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
		e = d.col1.x * l + d.col2.x * q,
		q = d.col1.y * l + d.col2.y * q,
		l = e;
	  d = f.m_invMass;
	  var e = g.m_invMass,
		n = f.m_invI,
		r = g.m_invI,
		t = new c();
	  t.col1.x = d + e;
	  t.col2.x = 0;
	  t.col1.y = 0;
	  t.col2.y = d + e;
	  t.col1.x += n * m * m;
	  t.col2.x += -n * j * m;
	  t.col1.y += -n * j * m;
	  t.col2.y += n * j * j;
	  t.col1.x += r * q * q;
	  t.col2.x += -r * l * q;
	  t.col1.y += -r * l * q;
	  t.col2.y += r * l * l;
	  t.GetInverse(this.m_linearMass);
	  this.m_angularMass = n + r;
	  0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
	  b.warmStarting ? (this.m_linearImpulse.x *= b.dtRatio, this.m_linearImpulse.y *= b.dtRatio, this.m_angularImpulse *= b.dtRatio, b = this.m_linearImpulse, f.m_linearVelocity.x -= d * b.x, f.m_linearVelocity.y -= d * b.y, f.m_angularVelocity -= n * (j * b.y - m * b.x + this.m_angularImpulse), g.m_linearVelocity.x += e * b.x, g.m_linearVelocity.y += e * b.y, g.m_angularVelocity += r * (l * b.y - q * b.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0);
	};
	g.prototype.SolveVelocityConstraints = function (b) {
	  var c,
		d = 0,
		g = this.m_bodyA,
		j = this.m_bodyB,
		m = g.m_linearVelocity,
		n = g.m_angularVelocity,
		l = j.m_linearVelocity,
		q = j.m_angularVelocity,
		t = g.m_invMass,
		r = j.m_invMass,
		u = g.m_invI,
		z = j.m_invI;
	  c = g.m_xf.R;
	  var y = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
		A = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
		d = c.col1.x * y + c.col2.x * A,
		A = c.col1.y * y + c.col2.y * A,
		y = d;
	  c = j.m_xf.R;
	  var B = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
		D = this.m_localAnchorB.y - j.m_sweep.localCenter.y,
		d = c.col1.x * B + c.col2.x * D,
		D = c.col1.y * B + c.col2.y * D,
		B = d,
		d = -this.m_angularMass * (q - n),
		E = this.m_angularImpulse;
	  c = b.dt * this.m_maxTorque;
	  this.m_angularImpulse = e.Clamp(this.m_angularImpulse + d, -c, c);
	  d = this.m_angularImpulse - E;
	  n -= u * d;
	  q += z * d;
	  c = e.MulMV(this.m_linearMass, new f(-(l.x - q * D - m.x + n * A), -(l.y + q * B - m.y - n * y)));
	  d = this.m_linearImpulse.Copy();
	  this.m_linearImpulse.Add(c);
	  c = b.dt * this.m_maxForce;
	  this.m_linearImpulse.LengthSquared() > c * c && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(c));
	  c = e.SubtractVV(this.m_linearImpulse, d);
	  m.x -= t * c.x;
	  m.y -= t * c.y;
	  n -= u * (y * c.y - A * c.x);
	  l.x += r * c.x;
	  l.y += r * c.y;
	  q += z * (B * c.y - D * c.x);
	  g.m_angularVelocity = n;
	  j.m_angularVelocity = q;
	};
	g.prototype.SolvePositionConstraints = function () {
	  return !0;
	};
	Box2D.inherit(t, Box2D.Dynamics.Joints.b2JointDef);
	t.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	t.b2FrictionJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	};
	t.prototype.b2FrictionJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_frictionJoint;
	  this.maxTorque = this.maxForce = 0;
	};
	t.prototype.Initialize = function (b, c, d) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
	  this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
	};
	Box2D.inherit(y, Box2D.Dynamics.Joints.b2Joint);
	y.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	y.b2GearJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_groundAnchor1 = new f();
	  this.m_groundAnchor2 = new f();
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_J = new A();
	};
	y.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	y.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	y.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse * this.m_J.linearB.x, b * this.m_impulse * this.m_J.linearB.y);
	};
	y.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  var c = this.m_bodyB.m_xf.R,
		d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
		e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
		f = c.col1.x * d + c.col2.x * e,
		e = c.col1.y * d + c.col2.y * e;
	  return b * (this.m_impulse * this.m_J.angularB - f * this.m_impulse * this.m_J.linearB.y + e * this.m_impulse * this.m_J.linearB.x);
	};
	y.prototype.GetRatio = function () {
	  return this.m_ratio;
	};
	y.prototype.SetRatio = function (b) {
	  void 0 === b && (b = 0);
	  this.m_ratio = b;
	};
	y.prototype.b2GearJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  var c = parseInt(b.joint1.m_type),
		d = parseInt(b.joint2.m_type);
	  this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
	  var e = 0,
		f = 0;
	  this.m_ground1 = b.joint1.GetBodyA();
	  this.m_bodyA = b.joint1.GetBodyB();
	  c == B.e_revoluteJoint ? (this.m_revolute1 = b.joint1 instanceof O ? b.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), e = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = b.joint1 instanceof N ? b.joint1 : null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), e = this.m_prismatic1.GetJointTranslation());
	  this.m_ground2 = b.joint2.GetBodyA();
	  this.m_bodyB = b.joint2.GetBodyB();
	  d == B.e_revoluteJoint ? (this.m_revolute2 = b.joint2 instanceof O ? b.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), f = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = b.joint2 instanceof N ? b.joint2 : null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), f = this.m_prismatic2.GetJointTranslation());
	  this.m_ratio = b.ratio;
	  this.m_constant = e + this.m_ratio * f;
	  this.m_impulse = 0;
	};
	y.prototype.InitVelocityConstraints = function (b) {
	  var c = this.m_ground1,
		d = this.m_ground2,
		e = this.m_bodyA,
		f = this.m_bodyB,
		g = 0,
		j = 0,
		l = 0,
		m = 0,
		n = 0,
		r = 0;
	  this.m_J.SetZero();
	  this.m_revolute1 ? (this.m_J.angularA = -1, r += e.m_invI) : (c = c.m_xf.R, j = this.m_prismatic1.m_localXAxis1, g = c.col1.x * j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = e.m_xf.R, l = this.m_localAnchor1.x - e.m_sweep.localCenter.x, m = this.m_localAnchor1.y - e.m_sweep.localCenter.y, n = c.col1.x * l + c.col2.x * m, m = c.col1.y * l + c.col2.y * m, l = n * j - m * g, this.m_J.linearA.Set(-g, -j), this.m_J.angularA = -l, r += e.m_invMass + e.m_invI * l * l);
	  this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, r += this.m_ratio * this.m_ratio * f.m_invI) : (c = d.m_xf.R, j = this.m_prismatic2.m_localXAxis1, g = c.col1.x * j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = f.m_xf.R, l = this.m_localAnchor2.x - f.m_sweep.localCenter.x, m = this.m_localAnchor2.y - f.m_sweep.localCenter.y, n = c.col1.x * l + c.col2.x * m, m = c.col1.y * l + c.col2.y * m, l = n * j - m * g, this.m_J.linearB.Set(-this.m_ratio * g, -this.m_ratio * j), this.m_J.angularB = -this.m_ratio * l, r += this.m_ratio * this.m_ratio * (f.m_invMass + f.m_invI * l * l));
	  this.m_mass = 0 < r ? 1 / r : 0;
	  b.warmStarting ? (e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearA.x, e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearA.y, e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularA, f.m_linearVelocity.x += f.m_invMass * this.m_impulse * this.m_J.linearB.x, f.m_linearVelocity.y += f.m_invMass * this.m_impulse * this.m_J.linearB.y, f.m_angularVelocity += f.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0;
	};
	y.prototype.SolveVelocityConstraints = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d = -this.m_mass * this.m_J.Compute(b.m_linearVelocity, b.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity);
	  this.m_impulse += d;
	  b.m_linearVelocity.x += b.m_invMass * d * this.m_J.linearA.x;
	  b.m_linearVelocity.y += b.m_invMass * d * this.m_J.linearA.y;
	  b.m_angularVelocity += b.m_invI * d * this.m_J.angularA;
	  c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
	  c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
	  c.m_angularVelocity += c.m_invI * d * this.m_J.angularB;
	};
	y.prototype.SolvePositionConstraints = function () {
	  var c = this.m_bodyA,
		d = this.m_bodyB,
		e = 0,
		f = 0,
		e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
		f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
		e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
	  c.m_sweep.c.x += c.m_invMass * e * this.m_J.linearA.x;
	  c.m_sweep.c.y += c.m_invMass * e * this.m_J.linearA.y;
	  c.m_sweep.a += c.m_invI * e * this.m_J.angularA;
	  d.m_sweep.c.x += d.m_invMass * e * this.m_J.linearB.x;
	  d.m_sweep.c.y += d.m_invMass * e * this.m_J.linearB.y;
	  d.m_sweep.a += d.m_invI * e * this.m_J.angularB;
	  c.SynchronizeTransform();
	  d.SynchronizeTransform();
	  return 0 < b.b2_linearSlop;
	};
	Box2D.inherit(z, Box2D.Dynamics.Joints.b2JointDef);
	z.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	z.b2GearJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	};
	z.prototype.b2GearJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_gearJoint;
	  this.joint2 = this.joint1 = null;
	  this.ratio = 1;
	};
	A.b2Jacobian = function () {
	  this.linearA = new f();
	  this.linearB = new f();
	};
	A.prototype.SetZero = function () {
	  this.linearA.SetZero();
	  this.angularA = 0;
	  this.linearB.SetZero();
	  this.angularB = 0;
	};
	A.prototype.Set = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  void 0 === e && (e = 0);
	  this.linearA.SetV(b);
	  this.angularA = c;
	  this.linearB.SetV(d);
	  this.angularB = e;
	};
	A.prototype.Compute = function (b, c, d, e) {
	  void 0 === c && (c = 0);
	  void 0 === e && (e = 0);
	  return this.linearA.x * b.x + this.linearA.y * b.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e;
	};
	B.b2Joint = function () {
	  this.m_edgeA = new E();
	  this.m_edgeB = new E();
	  this.m_localCenterA = new f();
	  this.m_localCenterB = new f();
	};
	B.prototype.GetType = function () {
	  return this.m_type;
	};
	B.prototype.GetAnchorA = function () {
	  return null;
	};
	B.prototype.GetAnchorB = function () {
	  return null;
	};
	B.prototype.GetReactionForce = function () {
	  return null;
	};
	B.prototype.GetReactionTorque = function () {
	  return 0;
	};
	B.prototype.GetBodyA = function () {
	  return this.m_bodyA;
	};
	B.prototype.GetBodyB = function () {
	  return this.m_bodyB;
	};
	B.prototype.GetNext = function () {
	  return this.m_next;
	};
	B.prototype.GetUserData = function () {
	  return this.m_userData;
	};
	B.prototype.SetUserData = function (b) {
	  this.m_userData = b;
	};
	B.prototype.IsActive = function () {
	  return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
	};
	B.Create = function (b) {
	  var c = null;
	  switch (b.type) {
		case B.e_distanceJoint:
		  c = new n(b instanceof m ? b : null);
		  break;
		case B.e_mouseJoint:
		  c = new K(b instanceof L ? b : null);
		  break;
		case B.e_prismaticJoint:
		  c = new N(b instanceof Q ? b : null);
		  break;
		case B.e_revoluteJoint:
		  c = new O(b instanceof P ? b : null);
		  break;
		case B.e_pulleyJoint:
		  c = new I(b instanceof fa ? b : null);
		  break;
		case B.e_gearJoint:
		  c = new y(b instanceof z ? b : null);
		  break;
		case B.e_lineJoint:
		  c = new u(b instanceof F ? b : null);
		  break;
		case B.e_weldJoint:
		  c = new ba(b instanceof U ? b : null);
		  break;
		case B.e_frictionJoint:
		  c = new g(b instanceof t ? b : null);
	  }
	  return c;
	};
	B.Destroy = function () {};
	B.prototype.b2Joint = function (c) {
	  b.b2Assert(c.bodyA != c.bodyB);
	  this.m_type = c.type;
	  this.m_next = this.m_prev = null;
	  this.m_bodyA = c.bodyA;
	  this.m_bodyB = c.bodyB;
	  this.m_collideConnected = c.collideConnected;
	  this.m_islandFlag = !1;
	  this.m_userData = c.userData;
	};
	B.prototype.InitVelocityConstraints = function () {};
	B.prototype.SolveVelocityConstraints = function () {};
	B.prototype.FinalizeVelocityConstraints = function () {};
	B.prototype.SolvePositionConstraints = function () {
	  return !1;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
	  Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
	  Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
	  Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
	  Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
	  Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
	  Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
	  Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
	  Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
	  Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
	  Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
	  Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
	  Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
	  Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
	});
	D.b2JointDef = function () {};
	D.prototype.b2JointDef = function () {
	  this.type = B.e_unknownJoint;
	  this.bodyB = this.bodyA = this.userData = null;
	  this.collideConnected = !1;
	};
	E.b2JointEdge = function () {};
	Box2D.inherit(u, Box2D.Dynamics.Joints.b2Joint);
	u.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	u.b2LineJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_localXAxis1 = new f();
	  this.m_localYAxis1 = new f();
	  this.m_axis = new f();
	  this.m_perp = new f();
	  this.m_K = new c();
	  this.m_impulse = new f();
	};
	u.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	u.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	u.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y));
	};
	u.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  return b * this.m_impulse.y;
	};
	u.prototype.GetJointTranslation = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d = b.GetWorldPoint(this.m_localAnchor1),
		e = c.GetWorldPoint(this.m_localAnchor2),
		c = e.x - d.x,
		d = e.y - d.y,
		b = b.GetWorldVector(this.m_localXAxis1);
	  return b.x * c + b.y * d;
	};
	u.prototype.GetJointSpeed = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d;
	  d = b.m_xf.R;
	  var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
		f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
		g = d.col1.x * e + d.col2.x * f,
		f = d.col1.y * e + d.col2.y * f,
		e = g;
	  d = c.m_xf.R;
	  var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
		l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
		g = d.col1.x * j + d.col2.x * l,
		l = d.col1.y * j + d.col2.y * l,
		j = g;
	  d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
	  var g = c.m_sweep.c.y + l - (b.m_sweep.c.y + f),
		m = b.GetWorldVector(this.m_localXAxis1),
		n = b.m_linearVelocity,
		r = c.m_linearVelocity,
		b = b.m_angularVelocity,
		c = c.m_angularVelocity;
	  return d * -b * m.y + g * b * m.x + (m.x * (r.x + -c * l - n.x - -b * f) + m.y * (r.y + c * j - n.y - b * e));
	};
	u.prototype.IsLimitEnabled = function () {
	  return this.m_enableLimit;
	};
	u.prototype.EnableLimit = function (b) {
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_enableLimit = b;
	};
	u.prototype.GetLowerLimit = function () {
	  return this.m_lowerTranslation;
	};
	u.prototype.GetUpperLimit = function () {
	  return this.m_upperTranslation;
	};
	u.prototype.SetLimits = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_lowerTranslation = b;
	  this.m_upperTranslation = c;
	};
	u.prototype.IsMotorEnabled = function () {
	  return this.m_enableMotor;
	};
	u.prototype.EnableMotor = function (b) {
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_enableMotor = b;
	};
	u.prototype.SetMotorSpeed = function (b) {
	  void 0 === b && (b = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_motorSpeed = b;
	};
	u.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};
	u.prototype.SetMaxMotorForce = function (b) {
	  void 0 === b && (b = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_maxMotorForce = b;
	};
	u.prototype.GetMaxMotorForce = function () {
	  return this.m_maxMotorForce;
	};
	u.prototype.GetMotorForce = function () {
	  return this.m_motorImpulse;
	};
	u.prototype.b2LineJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchor1.SetV(b.localAnchorA);
	  this.m_localAnchor2.SetV(b.localAnchorB);
	  this.m_localXAxis1.SetV(b.localAxisA);
	  this.m_localYAxis1.x = -this.m_localXAxis1.y;
	  this.m_localYAxis1.y = this.m_localXAxis1.x;
	  this.m_impulse.SetZero();
	  this.m_motorImpulse = this.m_motorMass = 0;
	  this.m_lowerTranslation = b.lowerTranslation;
	  this.m_upperTranslation = b.upperTranslation;
	  this.m_maxMotorForce = b.maxMotorForce;
	  this.m_motorSpeed = b.motorSpeed;
	  this.m_enableLimit = b.enableLimit;
	  this.m_enableMotor = b.enableMotor;
	  this.m_limitState = B.e_inactiveLimit;
	  this.m_axis.SetZero();
	  this.m_perp.SetZero();
	};
	u.prototype.InitVelocityConstraints = function (c) {
	  var d = this.m_bodyA,
		f = this.m_bodyB,
		g,
		j = 0;
	  this.m_localCenterA.SetV(d.GetLocalCenter());
	  this.m_localCenterB.SetV(f.GetLocalCenter());
	  var m = d.GetTransform();
	  f.GetTransform();
	  g = d.m_xf.R;
	  var n = this.m_localAnchor1.x - this.m_localCenterA.x,
		l = this.m_localAnchor1.y - this.m_localCenterA.y,
		j = g.col1.x * n + g.col2.x * l,
		l = g.col1.y * n + g.col2.y * l,
		n = j;
	  g = f.m_xf.R;
	  var q = this.m_localAnchor2.x - this.m_localCenterB.x,
		t = this.m_localAnchor2.y - this.m_localCenterB.y,
		j = g.col1.x * q + g.col2.x * t,
		t = g.col1.y * q + g.col2.y * t,
		q = j;
	  g = f.m_sweep.c.x + q - d.m_sweep.c.x - n;
	  j = f.m_sweep.c.y + t - d.m_sweep.c.y - l;
	  this.m_invMassA = d.m_invMass;
	  this.m_invMassB = f.m_invMass;
	  this.m_invIA = d.m_invI;
	  this.m_invIB = f.m_invI;
	  this.m_axis.SetV(e.MulMV(m.R, this.m_localXAxis1));
	  this.m_a1 = (g + n) * this.m_axis.y - (j + l) * this.m_axis.x;
	  this.m_a2 = q * this.m_axis.y - t * this.m_axis.x;
	  this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
	  this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
	  this.m_perp.SetV(e.MulMV(m.R, this.m_localYAxis1));
	  this.m_s1 = (g + n) * this.m_perp.y - (j + l) * this.m_perp.x;
	  this.m_s2 = q * this.m_perp.y - t * this.m_perp.x;
	  m = this.m_invMassA;
	  n = this.m_invMassB;
	  l = this.m_invIA;
	  q = this.m_invIB;
	  this.m_K.col1.x = m + n + l * this.m_s1 * this.m_s1 + q * this.m_s2 * this.m_s2;
	  this.m_K.col1.y = l * this.m_s1 * this.m_a1 + q * this.m_s2 * this.m_a2;
	  this.m_K.col2.x = this.m_K.col1.y;
	  this.m_K.col2.y = m + n + l * this.m_a1 * this.m_a1 + q * this.m_a2 * this.m_a2;
	  this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.y = 0) : g >= this.m_upperTranslation ? this.m_limitState != B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = B.e_inactiveLimit;
	  !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
	  c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, j = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, m = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * m) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
	};
	u.prototype.SolveVelocityConstraints = function (b) {
	  var c = this.m_bodyA,
		d = this.m_bodyB,
		g = c.m_linearVelocity,
		j = c.m_angularVelocity,
		m = d.m_linearVelocity,
		n = d.m_angularVelocity,
		l = 0,
		q = 0,
		t = 0,
		r = 0;
	  this.m_enableMotor && this.m_limitState != B.e_equalLimits && (r = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (m.x - g.x) + this.m_axis.y * (m.y - g.y) + this.m_a2 * n - this.m_a1 * j)), l = this.m_motorImpulse, q = b.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + r, -q, q), r = this.m_motorImpulse - l, l = r * this.m_axis.x, q = r * this.m_axis.y, t = r * this.m_a1, r *= this.m_a2, g.x -= this.m_invMassA * l, g.y -= this.m_invMassA * q, j -= this.m_invIA * t, m.x += this.m_invMassB * l, m.y += this.m_invMassB * q, n += this.m_invIB * r);
	  q = this.m_perp.x * (m.x - g.x) + this.m_perp.y * (m.y - g.y) + this.m_s2 * n - this.m_s1 * j;
	  this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (t = this.m_axis.x * (m.x - g.x) + this.m_axis.y * (m.y - g.y) + this.m_a2 * n - this.m_a1 * j, l = this.m_impulse.Copy(), b = this.m_K.Solve(new f(), -q, -t), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.y = e.Max(this.m_impulse.y, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.y = e.Min(this.m_impulse.y, 0)), q = -q - (this.m_impulse.y - l.y) * this.m_K.col2.x, t = 0 != this.m_K.col1.x ? q / this.m_K.col1.x + l.x : l.x, this.m_impulse.x = t, b.x = this.m_impulse.x - l.x, b.y = this.m_impulse.y - l.y, l = b.x * this.m_perp.x + b.y * this.m_axis.x, q = b.x * this.m_perp.y + b.y * this.m_axis.y, t = b.x * this.m_s1 + b.y * this.m_a1, r = b.x * this.m_s2 + b.y * this.m_a2) : (b = 0 != this.m_K.col1.x ? -q / this.m_K.col1.x : 0, this.m_impulse.x += b, l = b * this.m_perp.x, q = b * this.m_perp.y, t = b * this.m_s1, r = b * this.m_s2);
	  g.x -= this.m_invMassA * l;
	  g.y -= this.m_invMassA * q;
	  j -= this.m_invIA * t;
	  m.x += this.m_invMassB * l;
	  m.y += this.m_invMassB * q;
	  n += this.m_invIB * r;
	  c.m_linearVelocity.SetV(g);
	  c.m_angularVelocity = j;
	  d.m_linearVelocity.SetV(m);
	  d.m_angularVelocity = n;
	};
	u.prototype.SolvePositionConstraints = function () {
	  var d = this.m_bodyA,
		g = this.m_bodyB,
		j = d.m_sweep.c,
		m = d.m_sweep.a,
		n = g.m_sweep.c,
		t = g.m_sweep.a,
		u,
		l = 0,
		q = 0,
		z = 0,
		r = 0,
		y = 0,
		A = 0,
		q = !1,
		B = 0,
		D = c.FromAngle(m),
		z = c.FromAngle(t);
	  u = D;
	  var A = this.m_localAnchor1.x - this.m_localCenterA.x,
		E = this.m_localAnchor1.y - this.m_localCenterA.y,
		l = u.col1.x * A + u.col2.x * E,
		E = u.col1.y * A + u.col2.y * E,
		A = l;
	  u = z;
	  z = this.m_localAnchor2.x - this.m_localCenterB.x;
	  r = this.m_localAnchor2.y - this.m_localCenterB.y;
	  l = u.col1.x * z + u.col2.x * r;
	  r = u.col1.y * z + u.col2.y * r;
	  z = l;
	  u = n.x + z - j.x - A;
	  l = n.y + r - j.y - E;
	  if (this.m_enableLimit) {
		this.m_axis = e.MulMV(D, this.m_localXAxis1);
		this.m_a1 = (u + A) * this.m_axis.y - (l + E) * this.m_axis.x;
		this.m_a2 = z * this.m_axis.y - r * this.m_axis.x;
		var F = this.m_axis.x * u + this.m_axis.y * l;
		e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (B = e.Clamp(F, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection), y = e.Abs(F), q = !0) : F <= this.m_lowerTranslation ? (B = e.Clamp(F - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), y = this.m_lowerTranslation - F, q = !0) : F >= this.m_upperTranslation && (B = e.Clamp(F - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), y = F - this.m_upperTranslation, q = !0);
	  }
	  this.m_perp = e.MulMV(D, this.m_localYAxis1);
	  this.m_s1 = (u + A) * this.m_perp.y - (l + E) * this.m_perp.x;
	  this.m_s2 = z * this.m_perp.y - r * this.m_perp.x;
	  D = new f();
	  E = this.m_perp.x * u + this.m_perp.y * l;
	  y = e.Max(y, e.Abs(E));
	  A = 0;
	  q ? (q = this.m_invMassA, z = this.m_invMassB, r = this.m_invIA, u = this.m_invIB, this.m_K.col1.x = q + z + r * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, this.m_K.col1.y = r * this.m_s1 * this.m_a1 + u * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = q + z + r * this.m_a1 * this.m_a1 + u * this.m_a2 * this.m_a2, this.m_K.Solve(D, -E, -B)) : (q = this.m_invMassA, z = this.m_invMassB, r = this.m_invIA, u = this.m_invIB, B = q + z + r * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, D.x = 0 != B ? -E / B : 0, D.y = 0);
	  B = D.x * this.m_perp.x + D.y * this.m_axis.x;
	  q = D.x * this.m_perp.y + D.y * this.m_axis.y;
	  E = D.x * this.m_s1 + D.y * this.m_a1;
	  D = D.x * this.m_s2 + D.y * this.m_a2;
	  j.x -= this.m_invMassA * B;
	  j.y -= this.m_invMassA * q;
	  m -= this.m_invIA * E;
	  n.x += this.m_invMassB * B;
	  n.y += this.m_invMassB * q;
	  t += this.m_invIB * D;
	  d.m_sweep.a = m;
	  g.m_sweep.a = t;
	  d.SynchronizeTransform();
	  g.SynchronizeTransform();
	  return y <= b.b2_linearSlop && A <= b.b2_angularSlop;
	};
	Box2D.inherit(F, Box2D.Dynamics.Joints.b2JointDef);
	F.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	F.b2LineJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	  this.localAxisA = new f();
	};
	F.prototype.b2LineJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_lineJoint;
	  this.localAxisA.Set(1, 0);
	  this.enableLimit = !1;
	  this.upperTranslation = this.lowerTranslation = 0;
	  this.enableMotor = !1;
	  this.motorSpeed = this.maxMotorForce = 0;
	};
	F.prototype.Initialize = function (b, c, d, e) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA = this.bodyA.GetLocalPoint(d);
	  this.localAnchorB = this.bodyB.GetLocalPoint(d);
	  this.localAxisA = this.bodyA.GetLocalVector(e);
	};
	Box2D.inherit(K, Box2D.Dynamics.Joints.b2Joint);
	K.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	K.b2MouseJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.K = new c();
	  this.K1 = new c();
	  this.K2 = new c();
	  this.m_localAnchor = new f();
	  this.m_target = new f();
	  this.m_impulse = new f();
	  this.m_mass = new c();
	  this.m_C = new f();
	};
	K.prototype.GetAnchorA = function () {
	  return this.m_target;
	};
	K.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
	};
	K.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	K.prototype.GetReactionTorque = function () {
	  return 0;
	};
	K.prototype.GetTarget = function () {
	  return this.m_target;
	};
	K.prototype.SetTarget = function (b) {
	  !1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
	  this.m_target = b;
	};
	K.prototype.GetMaxForce = function () {
	  return this.m_maxForce;
	};
	K.prototype.SetMaxForce = function (b) {
	  void 0 === b && (b = 0);
	  this.m_maxForce = b;
	};
	K.prototype.GetFrequency = function () {
	  return this.m_frequencyHz;
	};
	K.prototype.SetFrequency = function (b) {
	  void 0 === b && (b = 0);
	  this.m_frequencyHz = b;
	};
	K.prototype.GetDampingRatio = function () {
	  return this.m_dampingRatio;
	};
	K.prototype.SetDampingRatio = function (b) {
	  void 0 === b && (b = 0);
	  this.m_dampingRatio = b;
	};
	K.prototype.b2MouseJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_target.SetV(b.target);
	  var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
		d = this.m_target.y - this.m_bodyB.m_xf.position.y,
		e = this.m_bodyB.m_xf.R;
	  this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
	  this.m_localAnchor.y = c * e.col2.x + d * e.col2.y;
	  this.m_maxForce = b.maxForce;
	  this.m_impulse.SetZero();
	  this.m_frequencyHz = b.frequencyHz;
	  this.m_dampingRatio = b.dampingRatio;
	  this.m_gamma = this.m_beta = 0;
	};
	K.prototype.InitVelocityConstraints = function (b) {
	  var c = this.m_bodyB,
		d = c.GetMass(),
		e = 2 * Math.PI * this.m_frequencyHz,
		f = d * e * e;
	  this.m_gamma = b.dt * (2 * d * this.m_dampingRatio * e + b.dt * f);
	  this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
	  this.m_beta = b.dt * f * this.m_gamma;
	  var f = c.m_xf.R,
		d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
		e = this.m_localAnchor.y - c.m_sweep.localCenter.y,
		g = f.col1.x * d + f.col2.x * e,
		e = f.col1.y * d + f.col2.y * e,
		d = g,
		f = c.m_invMass,
		g = c.m_invI;
	  this.K1.col1.x = f;
	  this.K1.col2.x = 0;
	  this.K1.col1.y = 0;
	  this.K1.col2.y = f;
	  this.K2.col1.x = g * e * e;
	  this.K2.col2.x = -g * d * e;
	  this.K2.col1.y = -g * d * e;
	  this.K2.col2.y = g * d * d;
	  this.K.SetM(this.K1);
	  this.K.AddM(this.K2);
	  this.K.col1.x += this.m_gamma;
	  this.K.col2.y += this.m_gamma;
	  this.K.GetInverse(this.m_mass);
	  this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
	  this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
	  c.m_angularVelocity *= 0.98;
	  this.m_impulse.x *= b.dtRatio;
	  this.m_impulse.y *= b.dtRatio;
	  c.m_linearVelocity.x += f * this.m_impulse.x;
	  c.m_linearVelocity.y += f * this.m_impulse.y;
	  c.m_angularVelocity += g * (d * this.m_impulse.y - e * this.m_impulse.x);
	};
	K.prototype.SolveVelocityConstraints = function (b) {
	  var c = this.m_bodyB,
		d,
		e = 0,
		f = 0;
	  d = c.m_xf.R;
	  var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
		j = this.m_localAnchor.y - c.m_sweep.localCenter.y,
		e = d.col1.x * g + d.col2.x * j,
		j = d.col1.y * g + d.col2.y * j,
		g = e,
		e = c.m_linearVelocity.x + -c.m_angularVelocity * j,
		l = c.m_linearVelocity.y + c.m_angularVelocity * g;
	  d = this.m_mass;
	  e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
	  f = l + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
	  l = -(d.col1.x * e + d.col2.x * f);
	  f = -(d.col1.y * e + d.col2.y * f);
	  d = this.m_impulse.x;
	  e = this.m_impulse.y;
	  this.m_impulse.x += l;
	  this.m_impulse.y += f;
	  b = b.dt * this.m_maxForce;
	  this.m_impulse.LengthSquared() > b * b && this.m_impulse.Multiply(b / this.m_impulse.Length());
	  l = this.m_impulse.x - d;
	  f = this.m_impulse.y - e;
	  c.m_linearVelocity.x += c.m_invMass * l;
	  c.m_linearVelocity.y += c.m_invMass * f;
	  c.m_angularVelocity += c.m_invI * (g * f - j * l);
	};
	K.prototype.SolvePositionConstraints = function () {
	  return !0;
	};
	Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
	L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	L.b2MouseJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.target = new f();
	};
	L.prototype.b2MouseJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_mouseJoint;
	  this.maxForce = 0;
	  this.frequencyHz = 5;
	  this.dampingRatio = 0.7;
	};
	Box2D.inherit(N, Box2D.Dynamics.Joints.b2Joint);
	N.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	N.b2PrismaticJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_localXAxis1 = new f();
	  this.m_localYAxis1 = new f();
	  this.m_axis = new f();
	  this.m_perp = new f();
	  this.m_K = new d();
	  this.m_impulse = new j();
	};
	N.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	N.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	N.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
	};
	N.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  return b * this.m_impulse.y;
	};
	N.prototype.GetJointTranslation = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d = b.GetWorldPoint(this.m_localAnchor1),
		e = c.GetWorldPoint(this.m_localAnchor2),
		c = e.x - d.x,
		d = e.y - d.y,
		b = b.GetWorldVector(this.m_localXAxis1);
	  return b.x * c + b.y * d;
	};
	N.prototype.GetJointSpeed = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d;
	  d = b.m_xf.R;
	  var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
		f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
		g = d.col1.x * e + d.col2.x * f,
		f = d.col1.y * e + d.col2.y * f,
		e = g;
	  d = c.m_xf.R;
	  var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
		l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
		g = d.col1.x * j + d.col2.x * l,
		l = d.col1.y * j + d.col2.y * l,
		j = g;
	  d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
	  var g = c.m_sweep.c.y + l - (b.m_sweep.c.y + f),
		m = b.GetWorldVector(this.m_localXAxis1),
		n = b.m_linearVelocity,
		r = c.m_linearVelocity,
		b = b.m_angularVelocity,
		c = c.m_angularVelocity;
	  return d * -b * m.y + g * b * m.x + (m.x * (r.x + -c * l - n.x - -b * f) + m.y * (r.y + c * j - n.y - b * e));
	};
	N.prototype.IsLimitEnabled = function () {
	  return this.m_enableLimit;
	};
	N.prototype.EnableLimit = function (b) {
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_enableLimit = b;
	};
	N.prototype.GetLowerLimit = function () {
	  return this.m_lowerTranslation;
	};
	N.prototype.GetUpperLimit = function () {
	  return this.m_upperTranslation;
	};
	N.prototype.SetLimits = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_lowerTranslation = b;
	  this.m_upperTranslation = c;
	};
	N.prototype.IsMotorEnabled = function () {
	  return this.m_enableMotor;
	};
	N.prototype.EnableMotor = function (b) {
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_enableMotor = b;
	};
	N.prototype.SetMotorSpeed = function (b) {
	  void 0 === b && (b = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_motorSpeed = b;
	};
	N.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};
	N.prototype.SetMaxMotorForce = function (b) {
	  void 0 === b && (b = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_maxMotorForce = b;
	};
	N.prototype.GetMotorForce = function () {
	  return this.m_motorImpulse;
	};
	N.prototype.b2PrismaticJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchor1.SetV(b.localAnchorA);
	  this.m_localAnchor2.SetV(b.localAnchorB);
	  this.m_localXAxis1.SetV(b.localAxisA);
	  this.m_localYAxis1.x = -this.m_localXAxis1.y;
	  this.m_localYAxis1.y = this.m_localXAxis1.x;
	  this.m_refAngle = b.referenceAngle;
	  this.m_impulse.SetZero();
	  this.m_motorImpulse = this.m_motorMass = 0;
	  this.m_lowerTranslation = b.lowerTranslation;
	  this.m_upperTranslation = b.upperTranslation;
	  this.m_maxMotorForce = b.maxMotorForce;
	  this.m_motorSpeed = b.motorSpeed;
	  this.m_enableLimit = b.enableLimit;
	  this.m_enableMotor = b.enableMotor;
	  this.m_limitState = B.e_inactiveLimit;
	  this.m_axis.SetZero();
	  this.m_perp.SetZero();
	};
	N.prototype.InitVelocityConstraints = function (c) {
	  var d = this.m_bodyA,
		f = this.m_bodyB,
		g,
		j = 0;
	  this.m_localCenterA.SetV(d.GetLocalCenter());
	  this.m_localCenterB.SetV(f.GetLocalCenter());
	  var m = d.GetTransform();
	  f.GetTransform();
	  g = d.m_xf.R;
	  var n = this.m_localAnchor1.x - this.m_localCenterA.x,
		l = this.m_localAnchor1.y - this.m_localCenterA.y,
		j = g.col1.x * n + g.col2.x * l,
		l = g.col1.y * n + g.col2.y * l,
		n = j;
	  g = f.m_xf.R;
	  var q = this.m_localAnchor2.x - this.m_localCenterB.x,
		t = this.m_localAnchor2.y - this.m_localCenterB.y,
		j = g.col1.x * q + g.col2.x * t,
		t = g.col1.y * q + g.col2.y * t,
		q = j;
	  g = f.m_sweep.c.x + q - d.m_sweep.c.x - n;
	  j = f.m_sweep.c.y + t - d.m_sweep.c.y - l;
	  this.m_invMassA = d.m_invMass;
	  this.m_invMassB = f.m_invMass;
	  this.m_invIA = d.m_invI;
	  this.m_invIB = f.m_invI;
	  this.m_axis.SetV(e.MulMV(m.R, this.m_localXAxis1));
	  this.m_a1 = (g + n) * this.m_axis.y - (j + l) * this.m_axis.x;
	  this.m_a2 = q * this.m_axis.y - t * this.m_axis.x;
	  this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
	  this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
	  this.m_perp.SetV(e.MulMV(m.R, this.m_localYAxis1));
	  this.m_s1 = (g + n) * this.m_perp.y - (j + l) * this.m_perp.x;
	  this.m_s2 = q * this.m_perp.y - t * this.m_perp.x;
	  m = this.m_invMassA;
	  n = this.m_invMassB;
	  l = this.m_invIA;
	  q = this.m_invIB;
	  this.m_K.col1.x = m + n + l * this.m_s1 * this.m_s1 + q * this.m_s2 * this.m_s2;
	  this.m_K.col1.y = l * this.m_s1 + q * this.m_s2;
	  this.m_K.col1.z = l * this.m_s1 * this.m_a1 + q * this.m_s2 * this.m_a2;
	  this.m_K.col2.x = this.m_K.col1.y;
	  this.m_K.col2.y = l + q;
	  this.m_K.col2.z = l * this.m_a1 + q * this.m_a2;
	  this.m_K.col3.x = this.m_K.col1.z;
	  this.m_K.col3.y = this.m_K.col2.z;
	  this.m_K.col3.z = m + n + l * this.m_a1 * this.m_a1 + q * this.m_a2 * this.m_a2;
	  this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.z = 0) : g >= this.m_upperTranslation ? this.m_limitState != B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState = B.e_inactiveLimit;
	  !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
	  c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, j = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, m = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * m) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
	};
	N.prototype.SolveVelocityConstraints = function (b) {
	  var c = this.m_bodyA,
		d = this.m_bodyB,
		g = c.m_linearVelocity,
		m = c.m_angularVelocity,
		n = d.m_linearVelocity,
		t = d.m_angularVelocity,
		l = 0,
		q = 0,
		u = 0,
		r = 0;
	  this.m_enableMotor && this.m_limitState != B.e_equalLimits && (r = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * t - this.m_a1 * m)), l = this.m_motorImpulse, b = b.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + r, -b, b), r = this.m_motorImpulse - l, l = r * this.m_axis.x, q = r * this.m_axis.y, u = r * this.m_a1, r *= this.m_a2, g.x -= this.m_invMassA * l, g.y -= this.m_invMassA * q, m -= this.m_invIA * u, n.x += this.m_invMassB * l, n.y += this.m_invMassB * q, t += this.m_invIB * r);
	  u = this.m_perp.x * (n.x - g.x) + this.m_perp.y * (n.y - g.y) + this.m_s2 * t - this.m_s1 * m;
	  q = t - m;
	  this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (b = this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * t - this.m_a1 * m, l = this.m_impulse.Copy(), b = this.m_K.Solve33(new j(), -u, -q, -b), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.z = e.Max(this.m_impulse.z, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.z = e.Min(this.m_impulse.z, 0)), u = -u - (this.m_impulse.z - l.z) * this.m_K.col3.x, q = -q - (this.m_impulse.z - l.z) * this.m_K.col3.y, q = this.m_K.Solve22(new f(), u, q), q.x += l.x, q.y += l.y, this.m_impulse.x = q.x, this.m_impulse.y = q.y, b.x = this.m_impulse.x - l.x, b.y = this.m_impulse.y - l.y, b.z = this.m_impulse.z - l.z, l = b.x * this.m_perp.x + b.z * this.m_axis.x, q = b.x * this.m_perp.y + b.z * this.m_axis.y, u = b.x * this.m_s1 + b.y + b.z * this.m_a1, r = b.x * this.m_s2 + b.y + b.z * this.m_a2) : (b = this.m_K.Solve22(new f(), -u, -q), this.m_impulse.x += b.x, this.m_impulse.y += b.y, l = b.x * this.m_perp.x, q = b.x * this.m_perp.y, u = b.x * this.m_s1 + b.y, r = b.x * this.m_s2 + b.y);
	  g.x -= this.m_invMassA * l;
	  g.y -= this.m_invMassA * q;
	  m -= this.m_invIA * u;
	  n.x += this.m_invMassB * l;
	  n.y += this.m_invMassB * q;
	  t += this.m_invIB * r;
	  c.m_linearVelocity.SetV(g);
	  c.m_angularVelocity = m;
	  d.m_linearVelocity.SetV(n);
	  d.m_angularVelocity = t;
	};
	N.prototype.SolvePositionConstraints = function () {
	  var d = this.m_bodyA,
		g = this.m_bodyB,
		m = d.m_sweep.c,
		n = d.m_sweep.a,
		t = g.m_sweep.c,
		u = g.m_sweep.a,
		z,
		l = 0,
		q = 0,
		y = 0,
		r = 0,
		A = 0,
		q = !1,
		B = 0,
		D = c.FromAngle(n),
		E = c.FromAngle(u);
	  z = D;
	  var A = this.m_localAnchor1.x - this.m_localCenterA.x,
		F = this.m_localAnchor1.y - this.m_localCenterA.y,
		l = z.col1.x * A + z.col2.x * F,
		F = z.col1.y * A + z.col2.y * F,
		A = l;
	  z = E;
	  E = this.m_localAnchor2.x - this.m_localCenterB.x;
	  y = this.m_localAnchor2.y - this.m_localCenterB.y;
	  l = z.col1.x * E + z.col2.x * y;
	  y = z.col1.y * E + z.col2.y * y;
	  E = l;
	  z = t.x + E - m.x - A;
	  l = t.y + y - m.y - F;
	  if (this.m_enableLimit) {
		this.m_axis = e.MulMV(D, this.m_localXAxis1);
		this.m_a1 = (z + A) * this.m_axis.y - (l + F) * this.m_axis.x;
		this.m_a2 = E * this.m_axis.y - y * this.m_axis.x;
		var I = this.m_axis.x * z + this.m_axis.y * l;
		e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (B = e.Clamp(I, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection), r = e.Abs(I), q = !0) : I <= this.m_lowerTranslation ? (B = e.Clamp(I - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), r = this.m_lowerTranslation - I, q = !0) : I >= this.m_upperTranslation && (B = e.Clamp(I - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), r = I - this.m_upperTranslation, q = !0);
	  }
	  this.m_perp = e.MulMV(D, this.m_localYAxis1);
	  this.m_s1 = (z + A) * this.m_perp.y - (l + F) * this.m_perp.x;
	  this.m_s2 = E * this.m_perp.y - y * this.m_perp.x;
	  D = new j();
	  F = this.m_perp.x * z + this.m_perp.y * l;
	  E = u - n - this.m_refAngle;
	  r = e.Max(r, e.Abs(F));
	  A = e.Abs(E);
	  q ? (q = this.m_invMassA, y = this.m_invMassB, z = this.m_invIA, l = this.m_invIB, this.m_K.col1.x = q + y + z * this.m_s1 * this.m_s1 + l * this.m_s2 * this.m_s2, this.m_K.col1.y = z * this.m_s1 + l * this.m_s2, this.m_K.col1.z = z * this.m_s1 * this.m_a1 + l * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = z + l, this.m_K.col2.z = z * this.m_a1 + l * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = q + y + z * this.m_a1 * this.m_a1 + l * this.m_a2 * this.m_a2, this.m_K.Solve33(D, -F, -E, -B)) : (q = this.m_invMassA, y = this.m_invMassB, z = this.m_invIA, l = this.m_invIB, B = z * this.m_s1 + l * this.m_s2, I = z + l, this.m_K.col1.Set(q + y + z * this.m_s1 * this.m_s1 + l * this.m_s2 * this.m_s2, B, 0), this.m_K.col2.Set(B, I, 0), B = this.m_K.Solve22(new f(), -F, -E), D.x = B.x, D.y = B.y, D.z = 0);
	  B = D.x * this.m_perp.x + D.z * this.m_axis.x;
	  q = D.x * this.m_perp.y + D.z * this.m_axis.y;
	  F = D.x * this.m_s1 + D.y + D.z * this.m_a1;
	  D = D.x * this.m_s2 + D.y + D.z * this.m_a2;
	  m.x -= this.m_invMassA * B;
	  m.y -= this.m_invMassA * q;
	  n -= this.m_invIA * F;
	  t.x += this.m_invMassB * B;
	  t.y += this.m_invMassB * q;
	  u += this.m_invIB * D;
	  d.m_sweep.a = n;
	  g.m_sweep.a = u;
	  d.SynchronizeTransform();
	  g.SynchronizeTransform();
	  return r <= b.b2_linearSlop && A <= b.b2_angularSlop;
	};
	Box2D.inherit(Q, Box2D.Dynamics.Joints.b2JointDef);
	Q.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	Q.b2PrismaticJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	  this.localAxisA = new f();
	};
	Q.prototype.b2PrismaticJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_prismaticJoint;
	  this.localAxisA.Set(1, 0);
	  this.referenceAngle = 0;
	  this.enableLimit = !1;
	  this.upperTranslation = this.lowerTranslation = 0;
	  this.enableMotor = !1;
	  this.motorSpeed = this.maxMotorForce = 0;
	};
	Q.prototype.Initialize = function (b, c, d, e) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA = this.bodyA.GetLocalPoint(d);
	  this.localAnchorB = this.bodyB.GetLocalPoint(d);
	  this.localAxisA = this.bodyA.GetLocalVector(e);
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
	Box2D.inherit(I, Box2D.Dynamics.Joints.b2Joint);
	I.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	I.b2PulleyJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_groundAnchor1 = new f();
	  this.m_groundAnchor2 = new f();
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_u1 = new f();
	  this.m_u2 = new f();
	};
	I.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	I.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	I.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse * this.m_u2.x, b * this.m_impulse * this.m_u2.y);
	};
	I.prototype.GetReactionTorque = function () {
	  return 0;
	};
	I.prototype.GetGroundAnchorA = function () {
	  var b = this.m_ground.m_xf.position.Copy();
	  b.Add(this.m_groundAnchor1);
	  return b;
	};
	I.prototype.GetGroundAnchorB = function () {
	  var b = this.m_ground.m_xf.position.Copy();
	  b.Add(this.m_groundAnchor2);
	  return b;
	};
	I.prototype.GetLength1 = function () {
	  var b = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
		c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
		b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
	  return Math.sqrt(c * c + b * b);
	};
	I.prototype.GetLength2 = function () {
	  var b = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
		c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
		b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
	  return Math.sqrt(c * c + b * b);
	};
	I.prototype.GetRatio = function () {
	  return this.m_ratio;
	};
	I.prototype.b2PulleyJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_ground = this.m_bodyA.m_world.m_groundBody;
	  this.m_groundAnchor1.x = b.groundAnchorA.x - this.m_ground.m_xf.position.x;
	  this.m_groundAnchor1.y = b.groundAnchorA.y - this.m_ground.m_xf.position.y;
	  this.m_groundAnchor2.x = b.groundAnchorB.x - this.m_ground.m_xf.position.x;
	  this.m_groundAnchor2.y = b.groundAnchorB.y - this.m_ground.m_xf.position.y;
	  this.m_localAnchor1.SetV(b.localAnchorA);
	  this.m_localAnchor2.SetV(b.localAnchorB);
	  this.m_ratio = b.ratio;
	  this.m_constant = b.lengthA + this.m_ratio * b.lengthB;
	  this.m_maxLength1 = e.Min(b.maxLengthA, this.m_constant - this.m_ratio * I.b2_minPulleyLength);
	  this.m_maxLength2 = e.Min(b.maxLengthB, (this.m_constant - I.b2_minPulleyLength) / this.m_ratio);
	  this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
	};
	I.prototype.InitVelocityConstraints = function (c) {
	  var d = this.m_bodyA,
		e = this.m_bodyB,
		f;
	  f = d.m_xf.R;
	  var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
		j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
		m = f.col1.x * g + f.col2.x * j,
		j = f.col1.y * g + f.col2.y * j,
		g = m;
	  f = e.m_xf.R;
	  var l = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
		n = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
		m = f.col1.x * l + f.col2.x * n,
		n = f.col1.y * l + f.col2.y * n,
		l = m;
	  f = e.m_sweep.c.x + l;
	  var m = e.m_sweep.c.y + n,
		t = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
		r = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
	  this.m_u1.Set(d.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + j - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
	  this.m_u2.Set(f - t, m - r);
	  f = this.m_u1.Length();
	  m = this.m_u2.Length();
	  f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
	  m > b.b2_linearSlop ? this.m_u2.Multiply(1 / m) : this.m_u2.SetZero();
	  0 < this.m_constant - f - this.m_ratio * m ? (this.m_state = B.e_inactiveLimit, this.m_impulse = 0) : this.m_state = B.e_atUpperLimit;
	  f < this.m_maxLength1 ? (this.m_limitState1 = B.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = B.e_atUpperLimit;
	  m < this.m_maxLength2 ? (this.m_limitState2 = B.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = B.e_atUpperLimit;
	  f = g * this.m_u1.y - j * this.m_u1.x;
	  m = l * this.m_u2.y - n * this.m_u2.x;
	  this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
	  this.m_limitMass2 = e.m_invMass + e.m_invI * m * m;
	  this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
	  this.m_limitMass1 = 1 / this.m_limitMass1;
	  this.m_limitMass2 = 1 / this.m_limitMass2;
	  this.m_pulleyMass = 1 / this.m_pulleyMass;
	  c.warmStarting ? (this.m_impulse *= c.dtRatio, this.m_limitImpulse1 *= c.dtRatio, this.m_limitImpulse2 *= c.dtRatio, c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, m = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, t = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, d.m_linearVelocity.x += d.m_invMass * c, d.m_linearVelocity.y += d.m_invMass * f, d.m_angularVelocity += d.m_invI * (g * f - j * c), e.m_linearVelocity.x += e.m_invMass * m, e.m_linearVelocity.y += e.m_invMass * t, e.m_angularVelocity += e.m_invI * (l * t - n * m)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
	};
	I.prototype.SolveVelocityConstraints = function () {
	  var b = this.m_bodyA,
		c = this.m_bodyB,
		d;
	  d = b.m_xf.R;
	  var f = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
		g = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
		j = d.col1.x * f + d.col2.x * g,
		g = d.col1.y * f + d.col2.y * g,
		f = j;
	  d = c.m_xf.R;
	  var m = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
		l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
		j = d.col1.x * m + d.col2.x * l,
		l = d.col1.y * m + d.col2.y * l,
		m = j,
		n = 0,
		t = 0;
	  this.m_state == B.e_atUpperLimit && (d = b.m_linearVelocity.x + -b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * f, n = c.m_linearVelocity.x + -c.m_angularVelocity * l, t = c.m_linearVelocity.y + c.m_angularVelocity * m, d = -(this.m_u1.x * d + this.m_u1.y * j) - this.m_ratio * (this.m_u2.x * n + this.m_u2.y * t), t = this.m_pulleyMass * -d, d = this.m_impulse, this.m_impulse = e.Max(0, this.m_impulse + t), t = this.m_impulse - d, d = -t * this.m_u1.x, j = -t * this.m_u1.y, n = -this.m_ratio * t * this.m_u2.x, t = -this.m_ratio * t * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (f * j - g * d), c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * t, c.m_angularVelocity += c.m_invI * (m * t - l * n));
	  this.m_limitState1 == B.e_atUpperLimit && (d = b.m_linearVelocity.x + -b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * f, d = -(this.m_u1.x * d + this.m_u1.y * j), t = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = e.Max(0, this.m_limitImpulse1 + t), t = this.m_limitImpulse1 - d, d = -t * this.m_u1.x, j = -t * this.m_u1.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (f * j - g * d));
	  this.m_limitState2 == B.e_atUpperLimit && (n = c.m_linearVelocity.x + -c.m_angularVelocity * l, t = c.m_linearVelocity.y + c.m_angularVelocity * m, d = -(this.m_u2.x * n + this.m_u2.y * t), t = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = e.Max(0, this.m_limitImpulse2 + t), t = this.m_limitImpulse2 - d, n = -t * this.m_u2.x, t = -t * this.m_u2.y, c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * t, c.m_angularVelocity += c.m_invI * (m * t - l * n));
	};
	I.prototype.SolvePositionConstraints = function () {
	  var c = this.m_bodyA,
		d = this.m_bodyB,
		f,
		g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
		j = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
		m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
		n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
		l = 0,
		q = 0,
		t = 0,
		r = 0,
		u = 0,
		z = 0,
		y = 0,
		A = 0;
	  this.m_state == B.e_atUpperLimit && (f = c.m_xf.R, l = this.m_localAnchor1.x - c.m_sweep.localCenter.x, q = this.m_localAnchor1.y - c.m_sweep.localCenter.y, u = f.col1.x * l + f.col2.x * q, q = f.col1.y * l + f.col2.y * q, l = u, f = d.m_xf.R, t = this.m_localAnchor2.x - d.m_sweep.localCenter.x, r = this.m_localAnchor2.y - d.m_sweep.localCenter.y, u = f.col1.x * t + f.col2.x * r, r = f.col1.y * t + f.col2.y * r, t = u, f = c.m_sweep.c.x + l, u = c.m_sweep.c.y + q, z = d.m_sweep.c.x + t, y = d.m_sweep.c.y + r, this.m_u1.Set(f - g, u - j), this.m_u2.Set(z - m, y - n), f = this.m_u1.Length(), u = this.m_u2.Length(), f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero(), u > b.b2_linearSlop ? this.m_u2.Multiply(1 / u) : this.m_u2.SetZero(), f = this.m_constant - f - this.m_ratio * u, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), y = -this.m_pulleyMass * f, f = -y * this.m_u1.x, u = -y * this.m_u1.y, z = -this.m_ratio * y * this.m_u2.x, y = -this.m_ratio * y * this.m_u2.y, c.m_sweep.c.x += c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * u, c.m_sweep.a += c.m_invI * (l * u - q * f), d.m_sweep.c.x += d.m_invMass * z, d.m_sweep.c.y += d.m_invMass * y, d.m_sweep.a += d.m_invI * (t * y - r * z), c.SynchronizeTransform(), d.SynchronizeTransform());
	  this.m_limitState1 == B.e_atUpperLimit && (f = c.m_xf.R, l = this.m_localAnchor1.x - c.m_sweep.localCenter.x, q = this.m_localAnchor1.y - c.m_sweep.localCenter.y, u = f.col1.x * l + f.col2.x * q, q = f.col1.y * l + f.col2.y * q, l = u, f = c.m_sweep.c.x + l, u = c.m_sweep.c.y + q, this.m_u1.Set(f - g, u - j), f = this.m_u1.Length(), f > b.b2_linearSlop ? (this.m_u1.x *= 1 / f, this.m_u1.y *= 1 / f) : this.m_u1.SetZero(), f = this.m_maxLength1 - f, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), y = -this.m_limitMass1 * f, f = -y * this.m_u1.x, u = -y * this.m_u1.y, c.m_sweep.c.x += c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * u, c.m_sweep.a += c.m_invI * (l * u - q * f), c.SynchronizeTransform());
	  this.m_limitState2 == B.e_atUpperLimit && (f = d.m_xf.R, t = this.m_localAnchor2.x - d.m_sweep.localCenter.x, r = this.m_localAnchor2.y - d.m_sweep.localCenter.y, u = f.col1.x * t + f.col2.x * r, r = f.col1.y * t + f.col2.y * r, t = u, z = d.m_sweep.c.x + t, y = d.m_sweep.c.y + r, this.m_u2.Set(z - m, y - n), u = this.m_u2.Length(), u > b.b2_linearSlop ? (this.m_u2.x *= 1 / u, this.m_u2.y *= 1 / u) : this.m_u2.SetZero(), f = this.m_maxLength2 - u, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), y = -this.m_limitMass2 * f, z = -y * this.m_u2.x, y = -y * this.m_u2.y, d.m_sweep.c.x += d.m_invMass * z, d.m_sweep.c.y += d.m_invMass * y, d.m_sweep.a += d.m_invI * (t * y - r * z), d.SynchronizeTransform());
	  return A < b.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2;
	});
	Box2D.inherit(fa, Box2D.Dynamics.Joints.b2JointDef);
	fa.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	fa.b2PulleyJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.groundAnchorA = new f();
	  this.groundAnchorB = new f();
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	};
	fa.prototype.b2PulleyJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_pulleyJoint;
	  this.groundAnchorA.Set(-1, 1);
	  this.groundAnchorB.Set(1, 1);
	  this.localAnchorA.Set(-1, 0);
	  this.localAnchorB.Set(1, 0);
	  this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
	  this.ratio = 1;
	  this.collideConnected = !0;
	};
	fa.prototype.Initialize = function (b, c, d, e, f, g, j) {
	  void 0 === j && (j = 0);
	  this.bodyA = b;
	  this.bodyB = c;
	  this.groundAnchorA.SetV(d);
	  this.groundAnchorB.SetV(e);
	  this.localAnchorA = this.bodyA.GetLocalPoint(f);
	  this.localAnchorB = this.bodyB.GetLocalPoint(g);
	  b = f.x - d.x;
	  d = f.y - d.y;
	  this.lengthA = Math.sqrt(b * b + d * d);
	  d = g.x - e.x;
	  e = g.y - e.y;
	  this.lengthB = Math.sqrt(d * d + e * e);
	  this.ratio = j;
	  j = this.lengthA + this.ratio * this.lengthB;
	  this.maxLengthA = j - this.ratio * I.b2_minPulleyLength;
	  this.maxLengthB = (j - I.b2_minPulleyLength) / this.ratio;
	};
	Box2D.inherit(O, Box2D.Dynamics.Joints.b2Joint);
	O.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	O.b2RevoluteJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.K = new c();
	  this.K1 = new c();
	  this.K2 = new c();
	  this.K3 = new c();
	  this.impulse3 = new j();
	  this.impulse2 = new f();
	  this.reduced = new f();
	  this.m_localAnchor1 = new f();
	  this.m_localAnchor2 = new f();
	  this.m_impulse = new j();
	  this.m_mass = new d();
	};
	O.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	O.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	O.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	O.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  return b * this.m_impulse.z;
	};
	O.prototype.GetJointAngle = function () {
	  return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
	};
	O.prototype.GetJointSpeed = function () {
	  return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
	};
	O.prototype.IsLimitEnabled = function () {
	  return this.m_enableLimit;
	};
	O.prototype.EnableLimit = function (b) {
	  this.m_enableLimit = b;
	};
	O.prototype.GetLowerLimit = function () {
	  return this.m_lowerAngle;
	};
	O.prototype.GetUpperLimit = function () {
	  return this.m_upperAngle;
	};
	O.prototype.SetLimits = function (b, c) {
	  void 0 === b && (b = 0);
	  void 0 === c && (c = 0);
	  this.m_lowerAngle = b;
	  this.m_upperAngle = c;
	};
	O.prototype.IsMotorEnabled = function () {
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  return this.m_enableMotor;
	};
	O.prototype.EnableMotor = function (b) {
	  this.m_enableMotor = b;
	};
	O.prototype.SetMotorSpeed = function (b) {
	  void 0 === b && (b = 0);
	  this.m_bodyA.SetAwake(!0);
	  this.m_bodyB.SetAwake(!0);
	  this.m_motorSpeed = b;
	};
	O.prototype.GetMotorSpeed = function () {
	  return this.m_motorSpeed;
	};
	O.prototype.SetMaxMotorTorque = function (b) {
	  void 0 === b && (b = 0);
	  this.m_maxMotorTorque = b;
	};
	O.prototype.GetMotorTorque = function () {
	  return this.m_maxMotorTorque;
	};
	O.prototype.b2RevoluteJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchor1.SetV(b.localAnchorA);
	  this.m_localAnchor2.SetV(b.localAnchorB);
	  this.m_referenceAngle = b.referenceAngle;
	  this.m_impulse.SetZero();
	  this.m_motorImpulse = 0;
	  this.m_lowerAngle = b.lowerAngle;
	  this.m_upperAngle = b.upperAngle;
	  this.m_maxMotorTorque = b.maxMotorTorque;
	  this.m_motorSpeed = b.motorSpeed;
	  this.m_enableLimit = b.enableLimit;
	  this.m_enableMotor = b.enableMotor;
	  this.m_limitState = B.e_inactiveLimit;
	};
	O.prototype.InitVelocityConstraints = function (c) {
	  var d = this.m_bodyA,
		f = this.m_bodyB,
		g,
		j = 0;
	  g = d.m_xf.R;
	  var m = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
		n = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
		j = g.col1.x * m + g.col2.x * n,
		n = g.col1.y * m + g.col2.y * n,
		m = j;
	  g = f.m_xf.R;
	  var l = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
		q = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
		j = g.col1.x * l + g.col2.x * q,
		q = g.col1.y * l + g.col2.y * q,
		l = j;
	  g = d.m_invMass;
	  var j = f.m_invMass,
		t = d.m_invI,
		r = f.m_invI;
	  this.m_mass.col1.x = g + j + n * n * t + q * q * r;
	  this.m_mass.col2.x = -n * m * t - q * l * r;
	  this.m_mass.col3.x = -n * t - q * r;
	  this.m_mass.col1.y = this.m_mass.col2.x;
	  this.m_mass.col2.y = g + j + m * m * t + l * l * r;
	  this.m_mass.col3.y = m * t + l * r;
	  this.m_mass.col1.z = this.m_mass.col3.x;
	  this.m_mass.col2.z = this.m_mass.col3.y;
	  this.m_mass.col3.z = t + r;
	  this.m_motorMass = 1 / (t + r);
	  !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
	  if (this.m_enableLimit) {
		var u = f.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
		e.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop ? this.m_limitState = B.e_equalLimits : u <= this.m_lowerAngle ? (this.m_limitState != B.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = B.e_atLowerLimit) : u >= this.m_upperAngle ? (this.m_limitState != B.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = B.e_atUpperLimit) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0);
	  } else this.m_limitState = B.e_inactiveLimit;
	  c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x, u = this.m_impulse.y, d.m_linearVelocity.x -= g * c, d.m_linearVelocity.y -= g * u, d.m_angularVelocity -= t * (m * u - n * c + this.m_motorImpulse + this.m_impulse.z), f.m_linearVelocity.x += j * c, f.m_linearVelocity.y += j * u, f.m_angularVelocity += r * (l * u - q * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
	};
	O.prototype.SolveVelocityConstraints = function (b) {
	  var c = this.m_bodyA,
		d = this.m_bodyB,
		f = 0,
		g = 0,
		j = 0,
		m = 0,
		l = 0,
		n = c.m_linearVelocity,
		t = c.m_angularVelocity,
		r = d.m_linearVelocity,
		u = d.m_angularVelocity,
		z = c.m_invMass,
		y = d.m_invMass,
		A = c.m_invI,
		D = d.m_invI;
	  this.m_enableMotor && this.m_limitState != B.e_equalLimits && (g = this.m_motorMass * -(u - t - this.m_motorSpeed), j = this.m_motorImpulse, m = b.dt * this.m_maxMotorTorque, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + g, -m, m), g = this.m_motorImpulse - j, t -= A * g, u += D * g);
	  if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
		b = c.m_xf.R;
		g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
		j = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
		f = b.col1.x * g + b.col2.x * j;
		j = b.col1.y * g + b.col2.y * j;
		g = f;
		b = d.m_xf.R;
		m = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
		l = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
		f = b.col1.x * m + b.col2.x * l;
		l = b.col1.y * m + b.col2.y * l;
		m = f;
		b = r.x + -u * l - n.x - -t * j;
		var E = r.y + u * m - n.y - t * g;
		this.m_mass.Solve33(this.impulse3, -b, -E, -(u - t));
		this.m_limitState == B.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == B.e_atLowerLimit ? (f = this.m_impulse.z + this.impulse3.z, 0 > f && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == B.e_atUpperLimit && (f = this.m_impulse.z + this.impulse3.z, 0 < f && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
		n.x -= z * this.impulse3.x;
		n.y -= z * this.impulse3.y;
		t -= A * (g * this.impulse3.y - j * this.impulse3.x + this.impulse3.z);
		r.x += y * this.impulse3.x;
		r.y += y * this.impulse3.y;
		u += D * (m * this.impulse3.y - l * this.impulse3.x + this.impulse3.z);
	  } else b = c.m_xf.R, g = this.m_localAnchor1.x - c.m_sweep.localCenter.x, j = this.m_localAnchor1.y - c.m_sweep.localCenter.y, f = b.col1.x * g + b.col2.x * j, j = b.col1.y * g + b.col2.y * j, g = f, b = d.m_xf.R, m = this.m_localAnchor2.x - d.m_sweep.localCenter.x, l = this.m_localAnchor2.y - d.m_sweep.localCenter.y, f = b.col1.x * m + b.col2.x * l, l = b.col1.y * m + b.col2.y * l, m = f, this.m_mass.Solve22(this.impulse2, -(r.x + -u * l - n.x - -t * j), -(r.y + u * m - n.y - t * g)), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, n.x -= z * this.impulse2.x, n.y -= z * this.impulse2.y, t -= A * (g * this.impulse2.y - j * this.impulse2.x), r.x += y * this.impulse2.x, r.y += y * this.impulse2.y, u += D * (m * this.impulse2.y - l * this.impulse2.x);
	  c.m_linearVelocity.SetV(n);
	  c.m_angularVelocity = t;
	  d.m_linearVelocity.SetV(r);
	  d.m_angularVelocity = u;
	};
	O.prototype.SolvePositionConstraints = function () {
	  var c = 0,
		d,
		f = this.m_bodyA,
		g = this.m_bodyB,
		j = 0,
		m = 0,
		n = 0,
		l = 0;
	  if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
		var c = g.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
		  q = 0;
		this.m_limitState == B.e_equalLimits ? (c = e.Clamp(c - this.m_lowerAngle, -b.b2_maxAngularCorrection, b.b2_maxAngularCorrection), q = -this.m_motorMass * c, j = e.Abs(c)) : this.m_limitState == B.e_atLowerLimit ? (c -= this.m_lowerAngle, j = -c, c = e.Clamp(c + b.b2_angularSlop, -b.b2_maxAngularCorrection, 0), q = -this.m_motorMass * c) : this.m_limitState == B.e_atUpperLimit && (j = c -= this.m_upperAngle, c = e.Clamp(c - b.b2_angularSlop, 0, b.b2_maxAngularCorrection), q = -this.m_motorMass * c);
		f.m_sweep.a -= f.m_invI * q;
		g.m_sweep.a += g.m_invI * q;
		f.SynchronizeTransform();
		g.SynchronizeTransform();
	  }
	  d = f.m_xf.R;
	  q = this.m_localAnchor1.x - f.m_sweep.localCenter.x;
	  c = this.m_localAnchor1.y - f.m_sweep.localCenter.y;
	  m = d.col1.x * q + d.col2.x * c;
	  c = d.col1.y * q + d.col2.y * c;
	  q = m;
	  d = g.m_xf.R;
	  var t = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
		r = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
		m = d.col1.x * t + d.col2.x * r,
		r = d.col1.y * t + d.col2.y * r,
		t = m,
		n = g.m_sweep.c.x + t - f.m_sweep.c.x - q,
		l = g.m_sweep.c.y + r - f.m_sweep.c.y - c,
		u = n * n + l * l;
	  d = Math.sqrt(u);
	  var m = f.m_invMass,
		z = g.m_invMass,
		y = f.m_invI,
		A = g.m_invI,
		D = 10 * b.b2_linearSlop;
	  u > D * D && (u = 1 / (m + z), n = u * -n, l = u * -l, f.m_sweep.c.x -= 0.5 * m * n, f.m_sweep.c.y -= 0.5 * m * l, g.m_sweep.c.x += 0.5 * z * n, g.m_sweep.c.y += 0.5 * z * l, n = g.m_sweep.c.x + t - f.m_sweep.c.x - q, l = g.m_sweep.c.y + r - f.m_sweep.c.y - c);
	  this.K1.col1.x = m + z;
	  this.K1.col2.x = 0;
	  this.K1.col1.y = 0;
	  this.K1.col2.y = m + z;
	  this.K2.col1.x = y * c * c;
	  this.K2.col2.x = -y * q * c;
	  this.K2.col1.y = -y * q * c;
	  this.K2.col2.y = y * q * q;
	  this.K3.col1.x = A * r * r;
	  this.K3.col2.x = -A * t * r;
	  this.K3.col1.y = -A * t * r;
	  this.K3.col2.y = A * t * t;
	  this.K.SetM(this.K1);
	  this.K.AddM(this.K2);
	  this.K.AddM(this.K3);
	  this.K.Solve(O.tImpulse, -n, -l);
	  n = O.tImpulse.x;
	  l = O.tImpulse.y;
	  f.m_sweep.c.x -= f.m_invMass * n;
	  f.m_sweep.c.y -= f.m_invMass * l;
	  f.m_sweep.a -= f.m_invI * (q * l - c * n);
	  g.m_sweep.c.x += g.m_invMass * n;
	  g.m_sweep.c.y += g.m_invMass * l;
	  g.m_sweep.a += g.m_invI * (t * l - r * n);
	  f.SynchronizeTransform();
	  g.SynchronizeTransform();
	  return d <= b.b2_linearSlop && j <= b.b2_angularSlop;
	};
	Box2D.postDefs.push(function () {
	  Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new f();
	});
	Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
	P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	P.b2RevoluteJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	};
	P.prototype.b2RevoluteJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_revoluteJoint;
	  this.localAnchorA.Set(0, 0);
	  this.localAnchorB.Set(0, 0);
	  this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
	  this.enableMotor = this.enableLimit = !1;
	};
	P.prototype.Initialize = function (b, c, d) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA = this.bodyA.GetLocalPoint(d);
	  this.localAnchorB = this.bodyB.GetLocalPoint(d);
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
	Box2D.inherit(ba, Box2D.Dynamics.Joints.b2Joint);
	ba.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	ba.b2WeldJoint = function () {
	  Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
	  this.m_localAnchorA = new f();
	  this.m_localAnchorB = new f();
	  this.m_impulse = new j();
	  this.m_mass = new d();
	};
	ba.prototype.GetAnchorA = function () {
	  return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
	};
	ba.prototype.GetAnchorB = function () {
	  return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
	};
	ba.prototype.GetReactionForce = function (b) {
	  void 0 === b && (b = 0);
	  return new f(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	ba.prototype.GetReactionTorque = function (b) {
	  void 0 === b && (b = 0);
	  return b * this.m_impulse.z;
	};
	ba.prototype.b2WeldJoint = function (b) {
	  this.__super.b2Joint.call(this, b);
	  this.m_localAnchorA.SetV(b.localAnchorA);
	  this.m_localAnchorB.SetV(b.localAnchorB);
	  this.m_referenceAngle = b.referenceAngle;
	  this.m_impulse.SetZero();
	  this.m_mass = new d();
	};
	ba.prototype.InitVelocityConstraints = function (b) {
	  var c,
		d = 0,
		e = this.m_bodyA,
		f = this.m_bodyB;
	  c = e.m_xf.R;
	  var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
		j = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
		d = c.col1.x * g + c.col2.x * j,
		j = c.col1.y * g + c.col2.y * j,
		g = d;
	  c = f.m_xf.R;
	  var l = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
		m = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
		d = c.col1.x * l + c.col2.x * m,
		m = c.col1.y * l + c.col2.y * m,
		l = d;
	  c = e.m_invMass;
	  var d = f.m_invMass,
		n = e.m_invI,
		r = f.m_invI;
	  this.m_mass.col1.x = c + d + j * j * n + m * m * r;
	  this.m_mass.col2.x = -j * g * n - m * l * r;
	  this.m_mass.col3.x = -j * n - m * r;
	  this.m_mass.col1.y = this.m_mass.col2.x;
	  this.m_mass.col2.y = c + d + g * g * n + l * l * r;
	  this.m_mass.col3.y = g * n + l * r;
	  this.m_mass.col1.z = this.m_mass.col3.x;
	  this.m_mass.col2.z = this.m_mass.col3.y;
	  this.m_mass.col3.z = n + r;
	  b.warmStarting ? (this.m_impulse.x *= b.dtRatio, this.m_impulse.y *= b.dtRatio, this.m_impulse.z *= b.dtRatio, e.m_linearVelocity.x -= c * this.m_impulse.x, e.m_linearVelocity.y -= c * this.m_impulse.y, e.m_angularVelocity -= n * (g * this.m_impulse.y - j * this.m_impulse.x + this.m_impulse.z), f.m_linearVelocity.x += d * this.m_impulse.x, f.m_linearVelocity.y += d * this.m_impulse.y, f.m_angularVelocity += r * (l * this.m_impulse.y - m * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero();
	};
	ba.prototype.SolveVelocityConstraints = function () {
	  var b,
		c = 0,
		d = this.m_bodyA,
		e = this.m_bodyB,
		f = d.m_linearVelocity,
		g = d.m_angularVelocity,
		m = e.m_linearVelocity,
		l = e.m_angularVelocity,
		n = d.m_invMass,
		t = e.m_invMass,
		r = d.m_invI,
		u = e.m_invI;
	  b = d.m_xf.R;
	  var z = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
		y = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
		c = b.col1.x * z + b.col2.x * y,
		y = b.col1.y * z + b.col2.y * y,
		z = c;
	  b = e.m_xf.R;
	  var A = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
		B = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
		c = b.col1.x * A + b.col2.x * B,
		B = b.col1.y * A + b.col2.y * B,
		A = c;
	  b = m.x - l * B - f.x + g * y;
	  var c = m.y + l * A - f.y - g * z,
		D = l - g,
		E = new j();
	  this.m_mass.Solve33(E, -b, -c, -D);
	  this.m_impulse.Add(E);
	  f.x -= n * E.x;
	  f.y -= n * E.y;
	  g -= r * (z * E.y - y * E.x + E.z);
	  m.x += t * E.x;
	  m.y += t * E.y;
	  l += u * (A * E.y - B * E.x + E.z);
	  d.m_angularVelocity = g;
	  e.m_angularVelocity = l;
	};
	ba.prototype.SolvePositionConstraints = function () {
	  var c,
		d = 0,
		f = this.m_bodyA,
		g = this.m_bodyB;
	  c = f.m_xf.R;
	  var m = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
		n = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
		d = c.col1.x * m + c.col2.x * n,
		n = c.col1.y * m + c.col2.y * n,
		m = d;
	  c = g.m_xf.R;
	  var t = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
		l = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
		d = c.col1.x * t + c.col2.x * l,
		l = c.col1.y * t + c.col2.y * l,
		t = d;
	  c = f.m_invMass;
	  var d = g.m_invMass,
		q = f.m_invI,
		u = g.m_invI,
		r = g.m_sweep.c.x + t - f.m_sweep.c.x - m,
		z = g.m_sweep.c.y + l - f.m_sweep.c.y - n,
		y = g.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
		A = 10 * b.b2_linearSlop,
		B = Math.sqrt(r * r + z * z),
		D = e.Abs(y);
	  B > A && (q *= 1, u *= 1);
	  this.m_mass.col1.x = c + d + n * n * q + l * l * u;
	  this.m_mass.col2.x = -n * m * q - l * t * u;
	  this.m_mass.col3.x = -n * q - l * u;
	  this.m_mass.col1.y = this.m_mass.col2.x;
	  this.m_mass.col2.y = c + d + m * m * q + t * t * u;
	  this.m_mass.col3.y = m * q + t * u;
	  this.m_mass.col1.z = this.m_mass.col3.x;
	  this.m_mass.col2.z = this.m_mass.col3.y;
	  this.m_mass.col3.z = q + u;
	  A = new j();
	  this.m_mass.Solve33(A, -r, -z, -y);
	  f.m_sweep.c.x -= c * A.x;
	  f.m_sweep.c.y -= c * A.y;
	  f.m_sweep.a -= q * (m * A.y - n * A.x + A.z);
	  g.m_sweep.c.x += d * A.x;
	  g.m_sweep.c.y += d * A.y;
	  g.m_sweep.a += u * (t * A.y - l * A.x + A.z);
	  f.SynchronizeTransform();
	  g.SynchronizeTransform();
	  return B <= b.b2_linearSlop && D <= b.b2_angularSlop;
	};
	Box2D.inherit(U, Box2D.Dynamics.Joints.b2JointDef);
	U.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	U.b2WeldJointDef = function () {
	  Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	  this.localAnchorA = new f();
	  this.localAnchorB = new f();
	};
	U.prototype.b2WeldJointDef = function () {
	  this.__super.b2JointDef.call(this);
	  this.type = B.e_weldJoint;
	  this.referenceAngle = 0;
	};
	U.prototype.Initialize = function (b, c, d) {
	  this.bodyA = b;
	  this.bodyB = c;
	  this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
	  this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
	  this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
  })();
  (function () {
	var b = Box2D.Dynamics.b2DebugDraw;
	b.b2DebugDraw = function () {
	  this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
	  var b = this;
	  this.m_sprite = {
		graphics: {
		  clear: function () {
			b.m_ctx.clearRect(0, 0, b.m_ctx.canvas.width, b.m_ctx.canvas.height);
		  }
		}
	  };
	};
	b.prototype._color = function (b, d) {
	  return "rgba(" + ((b & 16711680) >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + d + ")";
	};
	b.prototype.b2DebugDraw = function () {
	  this.m_drawFlags = 0;
	};
	b.prototype.SetFlags = function (b) {
	  void 0 === b && (b = 0);
	  this.m_drawFlags = b;
	};
	b.prototype.GetFlags = function () {
	  return this.m_drawFlags;
	};
	b.prototype.AppendFlags = function (b) {
	  void 0 === b && (b = 0);
	  this.m_drawFlags |= b;
	};
	b.prototype.ClearFlags = function (b) {
	  void 0 === b && (b = 0);
	  this.m_drawFlags &= ~b;
	};
	b.prototype.SetSprite = function (b) {
	  this.m_ctx = b;
	};
	b.prototype.GetSprite = function () {
	  return this.m_ctx;
	};
	b.prototype.SetDrawScale = function (b) {
	  void 0 === b && (b = 0);
	  this.m_drawScale = b;
	};
	b.prototype.GetDrawScale = function () {
	  return this.m_drawScale;
	};
	b.prototype.SetLineThickness = function (b) {
	  void 0 === b && (b = 0);
	  this.m_lineThickness = b;
	  this.m_ctx.strokeWidth = b;
	};
	b.prototype.GetLineThickness = function () {
	  return this.m_lineThickness;
	};
	b.prototype.SetAlpha = function (b) {
	  void 0 === b && (b = 0);
	  this.m_alpha = b;
	};
	b.prototype.GetAlpha = function () {
	  return this.m_alpha;
	};
	b.prototype.SetFillAlpha = function (b) {
	  void 0 === b && (b = 0);
	  this.m_fillAlpha = b;
	};
	b.prototype.GetFillAlpha = function () {
	  return this.m_fillAlpha;
	};
	b.prototype.SetXFormScale = function (b) {
	  void 0 === b && (b = 0);
	  this.m_xformScale = b;
	};
	b.prototype.GetXFormScale = function () {
	  return this.m_xformScale;
	};
	b.prototype.DrawPolygon = function (b, d, e) {
	  if (d) {
		var f = this.m_ctx,
		  j = this.m_drawScale;
		f.beginPath();
		f.strokeStyle = this._color(e.color, this.m_alpha);
		f.moveTo(b[0].x * j, b[0].y * j);
		for (e = 1; e < d; e++) f.lineTo(b[e].x * j, b[e].y * j);
		f.lineTo(b[0].x * j, b[0].y * j);
		f.closePath();
		f.stroke();
	  }
	};
	b.prototype.DrawSolidPolygon = function (b, d, e) {
	  if (d) {
		var f = this.m_ctx,
		  j = this.m_drawScale;
		f.beginPath();
		f.strokeStyle = this._color(e.color, this.m_alpha);
		f.fillStyle = this._color(e.color, this.m_fillAlpha);
		f.moveTo(b[0].x * j, b[0].y * j);
		for (e = 1; e < d; e++) f.lineTo(b[e].x * j, b[e].y * j);
		f.lineTo(b[0].x * j, b[0].y * j);
		f.closePath();
		f.fill();
		f.stroke();
	  }
	};
	b.prototype.DrawCircle = function (b, d, e) {
	  if (d) {
		var f = this.m_ctx,
		  j = this.m_drawScale;
		f.beginPath();
		f.strokeStyle = this._color(e.color, this.m_alpha);
		f.arc(b.x * j, b.y * j, d * j, 0, 2 * Math.PI, !0);
		f.closePath();
		f.stroke();
	  }
	};
	b.prototype.DrawSolidCircle = function (b, d, e, f) {
	  if (d) {
		var j = this.m_ctx,
		  n = this.m_drawScale,
		  m = b.x * n,
		  g = b.y * n;
		j.moveTo(0, 0);
		j.beginPath();
		j.strokeStyle = this._color(f.color, this.m_alpha);
		j.fillStyle = this._color(f.color, this.m_fillAlpha);
		j.arc(m, g, d * n, 0, 2 * Math.PI, !0);
		j.moveTo(m, g);
		j.lineTo((b.x + e.x * d) * n, (b.y + e.y * d) * n);
		j.closePath();
		j.fill();
		j.stroke();
	  }
	};
	b.prototype.DrawSegment = function (b, d, e) {
	  var f = this.m_ctx,
		j = this.m_drawScale;
	  f.strokeStyle = this._color(e.color, this.m_alpha);
	  f.beginPath();
	  f.moveTo(b.x * j, b.y * j);
	  f.lineTo(d.x * j, d.y * j);
	  f.closePath();
	  f.stroke();
	};
	b.prototype.DrawTransform = function (b) {
	  var d = this.m_ctx,
		e = this.m_drawScale;
	  d.beginPath();
	  d.strokeStyle = this._color(16711680, this.m_alpha);
	  d.moveTo(b.position.x * e, b.position.y * e);
	  d.lineTo((b.position.x + this.m_xformScale * b.R.col1.x) * e, (b.position.y + this.m_xformScale * b.R.col1.y) * e);
	  d.strokeStyle = this._color(65280, this.m_alpha);
	  d.moveTo(b.position.x * e, b.position.y * e);
	  d.lineTo((b.position.x + this.m_xformScale * b.R.col2.x) * e, (b.position.y + this.m_xformScale * b.R.col2.y) * e);
	  d.closePath();
	  d.stroke();
	};
  })();
  var i;
  for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
  delete Box2D.postDefs;
  "undefined" != typeof global && (global.Box2D = Box2D);
  ig.baked = !0;
  ig.module("plugins.box2d.lib").defines(function () {});
  ig.baked = !0;
  ig.module("plugins.box2d.game").requires("plugins.box2d.lib", "impact.game").defines(function () {
	ig.Box2DGame = ig.Game.extend({
	  collisionRects: [],
	  debugCollisionRects: !1,
	  worldVelocityIterations: 6,
	  worldPositionIterations: 6,
	  updateTimestep: 1 / 60,
	  updateTimestepAccumulator: 0,
	  updateTimestepAccumulatorRatio: 0,
	  lastUpdateTime: -1,
	  nWorldSteps: 0,
	  stepMultiplier: 1,
	  bodyDestroyQueue: [],
	  defaultTileSegmentsDef: {},
	  defaultTileVerticesDef: {},
	  loadLevel: function (b) {
		this.collisionMap = ig.CollisionMap.staticNoCollision;
		for (var c = 0; c < b.layer.length; c++) {
		  var d = b.layer[c];
		  "collision" == d.name && (this.collisionMap = new ig.CollisionMap(d.tilesize, d.data));
		}
		this.mergedShape = this.mergeRectangles(this.collisionMap);
		ig.world = this.createWorldFromCollisionMap(this.collisionMap, this.mergedShape);
		this.setupContactListener();
		this.parent(b);
	  },
	  createWorldFromMap: function (b, c, d, e) {
		var f = new Box2D.Collision.b2AABB();
		f.lowerBound.Set(0, 0);
		f.upperBound.Set((c + 1) * e * Box2D.SCALE, (d + 1) * e * Box2D.SCALE);
		f = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
		world = new Box2D.Dynamics.b2World(f, !0);
		b = ig.copy(b);
		this.collisionRects = [];
		for (f = 0; f < d; f++) for (var j = 0; j < c; j++) if (b[f][j]) {
		  var n = this._extractRectFromMap(b, c, d, j, f);
		  this.collisionRects.push(n);
		}
		for (c = 0; c < this.collisionRects.length; c++) d = this.collisionRects[c], b = new Box2D.Dynamics.b2BodyDef(), b.position.Set(d.x * e * Box2D.SCALE + d.width * e / 2 * Box2D.SCALE, d.y * e * Box2D.SCALE + d.height * e / 2 * Box2D.SCALE), b = world.CreateBody(b), f = new Box2D.Collision.Shapes.b2PolygonShape(), f.SetAsBox(d.width * e / 2 * Box2D.SCALE, d.height * e / 2 * Box2D.SCALE), b.CreateFixture2(f);
		return world;
	  },
	  _extractRectFromMap: function (b, c, d, e, f) {
		for (var j = {
			x: e,
			y: f,
			width: 1,
			height: 1
		  }, n = e + 1; n < c && b[f][n]; n++) j.width++, b[f][n] = 0;
		for (c = f + 1; c < d; c++) {
		  f = 0;
		  for (n = e; n < e + j.width && b[c][n]; n++) f++;
		  if (f == j.width) {
			j.height++;
			for (n = e; n < e + j.width; n++) b[c][n] = 0;
		  } else break;
		}
		return j;
	  },
	  update: function () {
		if (!ig.game.box2dPaused && ig.world) {
		  var b = ig.system.clock.delta() - this.lastUpdateTime;
		  this.lastUpdateTime = ig.system.clock.delta();
		  this.updateTimestepAccumulator += b;
		  this.nWorldSteps = Math.floor(this.updateTimestepAccumulator / this.updateTimestep);
		  0 < this.nWorldSteps && (this.updateTimestepAccumulator -= this.nWorldSteps * this.updateTimestep);
		  this.updateTimestepAccumulatorRatio = this.updateTimestepAccumulator / this.updateTimestep;
		  for (var b = Math.min(this.nWorldSteps, 5) * this.stepMultiplier, c = 0; c < b; c++) {
			this.resetSmoothStates();
			ig.world.Step(this.updateTimestep, this.worldVelocityIterations, this.worldPositionIterations);
			for (var d = ig.world.GetBodyList(); d; d = d.m_next) if (d.IsAwake()) {
			  var e = d.GetFixtureList();
			  if (!e || !e.IsSensor()) {
				var e = 0.6 > Math.abs(d.GetAngularVelocity()),
				  f = 0.6 > Math.abs(d.GetLinearVelocity().Length());
				e && f ? 30 < d.slowTime ? (d.slowTime = 0, d.SetAwake(!1)) : d.slowTime += 1 : d.slowTime = 0;
			  }
			}
		  }
		  ig.world.ClearForces();
		  this.smoothStates();
		}
		this.parent();
		if (0 < this.bodyDestroyQueue.length) {
		  for (c = 0; c < this.bodyDestroyQueue.length; c++) ig.world.DestroyBody(this.bodyDestroyQueue[c]);
		  this.bodyDestroyQueue = [];
		}
	  },
	  smoothStates: function () {
		for (var b = 1 - this.updateTimestepAccumulatorRatio, c = 0; c < this.entities.length; c++) {
		  var d = this.entities[c];
		  null != d.body && d.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody && (d.pos.x = this.updateTimestepAccumulatorRatio * d.body.GetPosition().x + b * d.previousBodyPosition.x, d.pos.y = this.updateTimestepAccumulatorRatio * d.body.GetPosition().y + b * d.previousBodyPosition.y, d.angle = this.updateTimestepAccumulatorRatio * d.body.GetAngle() + b * d.previousBodyAngle, d.currentAnim && (d.currentAnim.update(), d.currentAnim.angle = d.angle));
		}
	  },
	  resetSmoothStates: function () {
		for (var b = 0; b < this.entities.length; b++) {
		  var c = this.entities[b];
		  null != c.body && c.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody && (c.pos.x = c.body.GetPosition().x, c.previousBodyPosition.x = c.pos.x, c.pos.y = c.body.GetPosition().y, c.previousBodyPosition.y = c.pos.y, c.angle = c.body.GetAngle(), c.previousBodyAngle = c.body.GetAngle(), c.currentAnim && (c.currentAnim.update(), c.currentAnim.angle = c.angle));
		}
	  },
	  draw: function () {
		this.parent();
		if (this.debugCollisionRects) for (var b = this.collisionMap.tilesize, c = 0; c < this.collisionRects.length; c++) {
		  var d = this.collisionRects[c];
		  ig.system.context.strokeStyle = "#00ff00";
		  ig.system.context.strokeRect(ig.system.getDrawPos(d.x * b - this.screen.x), ig.system.getDrawPos(d.y * b - this.screen.y), ig.system.getDrawPos(d.width * b), ig.system.getDrawPos(d.height * b));
		}
	  },
	  queueDestroyBody: function (b) {
		this.bodyDestroyQueue.push(b);
	  },
	  mergeRectangles: function (b) {
		if (void 0 != b.data) {
		  for (var c = ig.copy(b.data), d = [], e = 0; e < c.length; e++) {
			void 0 == d[e] && (d[e] = []);
			for (var f = 0; f < c[0].length; f++) d[e].push(0);
		  }
		  c = this._shapesFromCollisionMap(b);
		  b = [];
		  f = [];
		  for (e = 0; e < c.length; e++) 1 == c[e].id ? (f.push(c[e]), d[c[e].tile.y][c[e].tile.x] = f[f.length - 1]) : b.push(c[e]);
		  for (e = f.length - 1; 0 <= e; e--) 1 == f[e].id && (f[e].neighbours = this.checkNeighbour(d, f[e].tile.x, f[e].tile.y));
		  d = this.linkSquares(f, d);
		  return b.concat(d);
		}
	  },
	  sideAbleCheck: function (b, c, d, e) {
		return b ? b[d] ? b[d][c] ? b[d][c].neighbours ? -1 < b[d][c].neighbours.indexOf(e) ? !0 : !1 : !1 : !1 : !1 : !1;
	  },
	  linkSquares: function (b, c) {
		for (var d = [], e = [], f = 0; f < b.length; f++) {
		  var j = b[f],
			n = j.tile.x,
			m = j.tile.y;
		  if (!(-1 < d.indexOf(j))) if (d.push(j), -1 < j.neighbours.indexOf("right")) {
			for (var g = 1; !0 == this.sideAbleCheck(c, j.tile.x + g, j.tile.y, "right");) j.tile.x + g < n && (n = j.tile.x + g), d.push(c[j.tile.y][j.tile.x + g]), g++;
			c[j.tile.y][n].settings.size.x *= g + 1;
			for (var t = c[j.tile.y][n].settings.vertices, y = 0; y < t.length; y++) t[y].x *= g + 1;
			d.push(c[j.tile.y][j.tile.x + g + 1]);
			e.push(c[j.tile.y][n]);
		  } else if (-1 < j.neighbours.indexOf("down") && -1 == j.neighbours.indexOf("right") && -1 == j.neighbours.indexOf("left")) {
			j.tile.y + g < m && (m = j.tile.y + g);
			t = 0;
			for (n = 1; !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "down") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left");) t = 1, d.push(c[j.tile.y + n][j.tile.x]), n++;
			!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") ? t = 1 : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") ? (d.splice(d.indexOf(c[j.tile.y + n][j.tile.x]), 1), n--) : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") && (d.splice(d.indexOf(c[j.tile.y + n][j.tile.x]), 1), n--);
			if (1 == t) {
			  c[m][j.tile.x].settings.size.y *= n + 1;
			  t = c[m][j.tile.x].settings.vertices;
			  for (y = 0; y < t.length; y++) t[y].y *= n + 1;
			  c[j.tile.y + n] && d.push(c[j.tile.y + n][j.tile.x]);
			}
			e.push(c[m][j.tile.x]);
		  } else if (!(-1 < j.neighbours.indexOf("left"))) if (-1 < j.neighbours.indexOf("up")) {
			if (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "down") && (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "right") || !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "left"))) d.push(c[j.tile.y][j.tile.x]), e.push(c[j.tile.y][j.tile.x]);
		  } else d.push(c[j.tile.y][j.tile.x]), e.push(c[j.tile.y][j.tile.x]);
		}
		return e;
	  },
	  getNeighbourTiles: function (b, c, d, e) {
		switch (e) {
		  case "left":
			return [{
			  x: c - 1,
			  y: d
			}];
		  case "right":
			return [{
			  x: c + 1,
			  y: d
			}];
		  case "up":
			return [{
			  x: c,
			  y: d - 1
			}];
		  case "down":
			return [{
			  x: c,
			  y: d + 1
			}];
		  case "topL":
			return [{
			  x: c,
			  y: d - 1
			}, {
			  x: c - 1,
			  y: d
			}, {
			  x: c - 1,
			  y: d - 1
			}];
		  case "topR":
			return [{
			  x: c,
			  y: d - 1
			}, {
			  x: c + 1,
			  y: d
			}, {
			  x: c + 1,
			  y: d - 1
			}];
		  case "bottomL":
			return [{
			  x: c,
			  y: d + 1
			}, {
			  x: c - 1,
			  y: d
			}, {
			  x: c - 1,
			  y: d + 1
			}];
		  case "bottomR":
			return [{
			  x: c,
			  y: d + 1
			}, {
			  x: c + 1,
			  y: d
			}, {
			  x: c + 1,
			  y: d + 1
			}];
		}
	  },
	  checkNeighbour: function (b, c, d) {
		var e = [];
		0 != this.checkArr(b, c - 1, d) && e.push("left");
		0 != this.checkArr(b, c, d + 1) && e.push("down");
		0 != this.checkArr(b, c + 1, d) && e.push("right");
		0 != this.checkArr(b, c, d - 1) && e.push("up");
		return e;
	  },
	  checkArr: function (b, c, d) {
		return void 0 == b[d] ? 0 : void 0 == b[d][c] ? 0 : b[d][c];
	  },
	  createWorldFromCollisionMap: function (b, c) {
		var d = new Box2D.Common.Math.b2Vec2(0, 0),
		  d = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
		world = new Box2D.Dynamics.b2World(d, !0);
		for (var d = void 0 != c ? c : this._shapesFromCollisionMap(this.collisionMap), e = 0; e < d.length; e++) {
		  var f = d[e],
			j = f.settings.size.x,
			n = f.settings.size.y,
			m = f.settings.vertices,
			g = new Box2D.Dynamics.b2BodyDef();
		  g.position.Set(f.x * Box2D.SCALE + j / 2 * Box2D.SCALE, f.y * Box2D.SCALE + n / 2 * Box2D.SCALE);
		  j = world.CreateBody(g);
		  f = new Box2D.Collision.Shapes.b2PolygonShape();
		  f.SetAsArray(m, m.length);
		  j.CreateFixture2(f);
		}
		return world;
	  },
	  setupContactListener: function () {
		var b = function (b, c, f) {
			var j = c.GetFixtureA().GetBody().entity,
			  n = c.GetFixtureB().GetBody().entity;
			if (j && n) j[b](n, c, f), n[b](j, c, f);else if (j && !n) j[b](null, c, f);else if (n && !j) n[b](null, c, f);
		  },
		  c = new Box2D.Dynamics.b2ContactListener();
		c.BeginContact = function (c) {
		  b("beginContact", c);
		};
		c.EndContact = function (c) {
		  b("endContact", c);
		};
		c.PostSolve = function (c, e) {
		  b("postSolve", c, e);
		};
		c.PreSolve = function (c, e) {
		  b("preSolve", c, e);
		};
		ig.world.SetContactListener(c);
	  },
	  _shapesFromCollisionMap: function (b) {
		var c = [];
		if (b instanceof ig.CollisionMap) {
		  var d = ig.copy(b.data),
			e = b.tilesize,
			f = b.width,
			j = b.height,
			n,
			m,
			g,
			t,
			y,
			z,
			A,
			B,
			D,
			E;
		  for (z = 0; z < j; z++) for (y = 0; y < f; y++) {
			E = this._shapeFromTile(b, y, z);
			D = {
			  id: b.data[z][y],
			  ix: y,
			  iy: z,
			  x: y * e,
			  y: z * e,
			  width: e,
			  height: e,
			  shape: E
			};
			if (0 < E.vertices.length) {
			  m = [];
			  n = E.vertices;
			  g = E.segments;
			  A = 0;
			  for (B = g.length; A < B; A++) {
				t = g[A];
				var u = n[t.a],
				  F = D.width / 20,
				  K = D.height / 20;
				m[t.a] = {
				  x: u.x.map(0, 1, -F, F),
				  y: u.y.map(0, 1, -K, K)
				};
			  }
			  E.vertices = m;
			  E.vertices[E.vertices.length - 1].x === E.vertices[0].x && E.vertices[E.vertices.length - 1].y === E.vertices[0].y && E.vertices.pop();
			  n = {
				id: D.id,
				settings: {
				  size: {
					x: D.width,
					y: D.height
				  },
				  vertices: ig.copy(E.vertices)
				},
				x: D.x,
				y: D.y,
				tile: {
				  x: y,
				  y: z
				}
			  };
			  c.push(n);
			}
			d[z][y] = D;
		  }
		}
		return c;
	  },
	  _shapeFromTile: function (b, c, d) {
		var e;
		e = b.data[d][c];
		b = this._verticesFromTile(b, c, d);
		var f;
		if (b) if (this.defaultTileSegmentsDef[e]) f = this.defaultTileSegmentsDef[e];else {
		  this.defaultTileSegmentsDef[e] = f = [];
		  e = 0;
		  for (c = b.length; e < c; e++) {
			var j = b[e];
			d = e === c - 1 ? 0 : e + 1;
			var n = b[d],
			  m = n.x - j.x,
			  j = n.y - j.y,
			  n = Math.sqrt(m * m + j * j);
			f.push({
			  a: e,
			  b: d,
			  normal: {
				x: j / n,
				y: -m / n
			  }
			});
		  }
		}
		return {
		  vertices: b,
		  segments: f || []
		};
	  },
	  _verticesFromTile: function (b, c, d) {
		c = b.data[d][c];
		if (this.defaultTileVerticesDef[c]) d = this.defaultTileVerticesDef[c];else if (1 === c) d = [{
		  x: 0,
		  y: 0
		}, {
		  x: 1,
		  y: 0
		}, {
		  x: 1,
		  y: 1
		}, {
		  x: 0,
		  y: 1
		}];else {
		  d = [];
		  if (b = b.tiledef[c]) {
			var e = d[0] = {
				x: b[0],
				y: b[1]
			  },
			  f = d[1] = {
				x: b[2],
				y: b[3]
			  };
			b = e.x;
			var e = e.y,
			  j = f.x,
			  f = f.y,
			  n = j - b,
			  m = f - e,
			  g = d[2] = {
				x: 0 > m ? 1 : 0,
				y: 0 < n ? 1 : 0
			  },
			  t = g.x,
			  g = g.y,
			  y;
			y = !1;
			if (1 > Math.abs(n) && 1 > Math.abs(m)) {
			  var n = _utv2.pointQuadrant(b, e, 0.5, 0.5),
				m = _utv2.pointQuadrant(j, f, 0.5, 0.5),
				z = _utv2.pointQuadrant(t, g, 0.5, 0.5);
			  !(n & z) && !(m & z) && (y = !0);
			}
			!0 === y ? (t !== g ? (y = t, m = g, 1 == t ? (g = 1, n = 0) : (g = 0, n = 1)) : (n = t, m = 1 == t ? y = 0 : y = 1), d[3] = {
			  x: y,
			  y: g
			}, d[4] = {
			  x: n,
			  y: m
			}) : (t !== g ? (y = t, m = g, 1 == t ? (g = Math.max(e, f), n = Math.min(b, j)) : (g = Math.min(e, f), n = Math.max(b, j))) : (n = t, 1 == t ? (y = Math.min(b, j), m = Math.min(e, f)) : (y = Math.max(b, j), m = Math.max(e, f))), y === b && g === e || y === j && g === f ? n === b && m === e || n === j && m === f || (d[3] = {
			  x: n,
			  y: m
			}) : d[3] = {
			  x: y,
			  y: g
			});
			d = this._pointsToConvexHull(d);
		  }
		  this.defaultTileVerticesDef[c] = d;
		}
		return d;
	  },
	  _pointsToConvexHull: function (b) {
		if (3 > b.length) return b;
		var c,
		  d,
		  e = 0,
		  f = b[e],
		  j;
		c = 1;
		for (d = b.length; c < d; c++) j = b[c], j.y === f.y ? j.x < f.x && (e = c, f = j) : j.y < f.y && (e = c, f = j);
		var n = [],
		  m;
		c = 0;
		for (d = b.length; c < d; c++) c !== e && (j = b[c], m = {
		  x: j.x,
		  y: j.y
		}, m.angle = Math.atan((j.y - f.y) / (j.x - f.x)), 0 > m.angle && (m.angle += Math.PI), m.distance = (j.x - f.x) * (j.x - f.x) + (j.y - f.y) * (j.y - f.y), m.index = c, n.push(m));
		n.sort(function (b, c) {
		  return b.angle < c.angle ? -1 : b.angle > c.angle ? 1 : b.distance < c.distance ? -1 : b.distance > c.distance ? 1 : 0;
		});
		n.unshift(n[n.length - 1], {
		  x: f.x,
		  y: f.y,
		  index: e
		});
		e = 2;
		c = 3;
		for (d = b.length; c <= d; c++) {
		  for (; 0 >= this._pointsCW(n[e - 1], n[e], n[c]);) e--;
		  e++;
		  f = n[c];
		  n[c] = n[e];
		  n[e] = f;
		}
		d = [];
		for (c = 0; c <= e; c++) d[c] = b[n[c].index];
		return d;
	  },
	  _pointsCW: function (b, c, d) {
		return (c.x - b.x) * (d.y - b.y) - (c.y - b.y) * (d.x - b.x);
	  }
	});
	Box2D.Common.b2Settings.b2_maxTranslation = 10;
	Box2D.Common.b2Settings.b2_maxTranslationSquared = 100;
	Box2D.Common.b2Settings.b2_velocityThreshold = 1;
  });
  ig.baked = !0;
  ig.module("plugins.box2d.entity").requires("impact.entity", "plugins.box2d.game").defines(function () {
	ig.Box2DEntity = ig.Entity.extend({
	  body: null,
	  angle: 0,
	  box2dType: null,
	  dynamicType: null,
	  density: null,
	  friction: null,
	  restitution: null,
	  rotate: 0,
	  gravityFactor: 0,
	  collides: ig.Entity.COLLIDES.NEVER,
	  previousBodyPosition: {
		x: 0,
		y: 0
	  },
	  previousBodyAngle: 0,
	  slowTime: 0,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || this.createBody();
	  },
	  createBody: function () {
		var b = new Box2D.Dynamics.b2BodyDef();
		b.position = new Box2D.Common.Math.b2Vec2((this.pos.x + this.size.x / 2) * Box2D.SCALE, (this.pos.y + this.size.y / 2) * Box2D.SCALE);
		this.previousBodyPosition = {
		  x: b.position.x,
		  y: b.position.y
		};
		this.angle && (b.angle = this.angle);
		this.previousBodyAngle = b.angle;
		null == this.dynamicType || 0 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_dynamicBody : 1 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_kinematicBody : 2 == this.dynamicType && (b.type = Box2D.Dynamics.b2Body.b2_staticBody);
		this.body = ig.world.CreateBody(b);
		this.body.entity = this;
		b = this.fixture = new Box2D.Dynamics.b2FixtureDef();
		null == this.box2dType || 0 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2PolygonShape(), b.shape.SetAsBox(this.size.x / 2 * Box2D.SCALE, this.size.y / 2 * Box2D.SCALE)) : 1 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2CircleShape(), b.shape.SetRadius(this.size.x / 2 * Box2D.SCALE)) : 2 == this.box2dType && (b.shape = new Box2D.Collision.Shapes.b2PolygonShape(), b.shape.SetAsArray(this.vertices, this.vertices.length));
		this.density && (b.density = this.density);
		this.friction && (b.friction = this.friction);
		this.restitution && (b.restitution = this.restitution);
		this.body.CreateFixture(b);
		this.body.SetUserData(this);
	  },
	  update: function () {
		var b = this.body.GetPosition();
		this.previousBodyPosition = {
		  x: this.pos.x,
		  y: this.pos.y
		};
		this.pos = {
		  x: b.x / Box2D.SCALE - this.size.x / 2,
		  y: b.y / Box2D.SCALE - this.size.y / 2
		};
		this.previousBodyAngle = this.angle;
		this.angle = this.body.GetAngle().round(2);
		this.currentAnim && (this.currentAnim.update(), this.currentAnim.angle = this.angle);
	  },
	  beginContact: function () {},
	  endContact: function () {},
	  postSolve: function () {},
	  preSolve: function () {},
	  processCollisionQueues: function () {
		for (var b in this.checkQueue) {
		  var c = this.checkQueue[b];
		  0 < this.entityContactCount[b] ? this.check(c) : delete this.checkQueue[b];
		}
		for (var d in this.collideQueue) for (b in this.collideQueue[d]) c = this.collideQueue[d][b], this.collideWith(c, d), delete this.collideQueue[d][b];
	  },
	  kill: function () {
		this.body && ig.game.queueDestroyBody(this.body);
		this.parent();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.level-provider").defines(function () {
	LevelProvider = ig.Class.extend({
	  lands: {
		1: [{
		  pos: {
			x: 0,
			y: 10
		  },
		  size: {
			x: 20,
			y: 10
		  },
		  joints: [{
			x: 20,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 30,
			y: 10
		  },
		  size: {
			x: 20,
			y: 10
		  },
		  joints: [{
			x: 30,
			y: 10,
			floor: !0
		  }]
		}],
		2: [{
		  pos: {
			x: 0,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 15,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 30,
			y: 10
		  },
		  size: {
			x: 20,
			y: 10
		  },
		  joints: [{
			x: 30,
			y: 10,
			floor: !0
		  }]
		}],
		3: [{
		  pos: {
			x: 0,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 15,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 35,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 35,
			y: 10,
			floor: !0
		  }]
		}],
		4: [{
		  pos: {
			x: 0,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 10,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 24,
			y: 3
		  },
		  size: {
			x: 2,
			y: 5
		  },
		  joints: [{
			x: 24,
			y: 3,
			floor: !1
		  }, {
			x: 26,
			y: 3,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 40,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 40,
			y: 10,
			floor: !0
		  }]
		}],
		5: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 21,
			y: 0
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 21,
			y: 0,
			floor: !1
		  }, {
			x: 24,
			y: 0,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 40,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 40,
			y: 10,
			floor: !0
		  }]
		}],
		6: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 24,
			y: 10
		  },
		  size: {
			x: 2,
			y: 10
		  },
		  joints: [{
			x: 24,
			y: 10,
			floor: !0
		  }, {
			x: 26,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 45,
			y: 10
		  },
		  size: {
			x: 15,
			y: 15
		  },
		  joints: [{
			x: 45,
			y: 10,
			floor: !0
		  }]
		}],
		7: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 18,
			y: 3
		  },
		  size: {
			x: 14,
			y: 5
		  },
		  joints: [{
			x: 18,
			y: 3,
			floor: !1
		  }, {
			x: 32,
			y: 3,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 45,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 45,
			y: 10,
			floor: !0
		  }]
		}],
		8: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }]
		}, {
		  pos: {
			x: 24,
			y: 1
		  },
		  size: {
			x: 2,
			y: 1
		  },
		  joints: [{
			x: 24,
			y: 1,
			floor: !1
		  }, {
			x: 26,
			y: 1,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 45,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 45,
			y: 10,
			floor: !0
		  }]
		}],
		9: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }, {
			x: 5,
			y: 5,
			floor: !1
		  }, {
			x: 5,
			y: 0,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 45,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 45,
			y: 10,
			floor: !0
		  }, {
			x: 45,
			y: 5,
			floor: !1
		  }, {
			x: 45,
			y: 0,
			floor: !1
		  }]
		}],
		10: [{
		  pos: {
			x: -5,
			y: 10
		  },
		  size: {
			x: 10,
			y: 10
		  },
		  joints: [{
			x: 5,
			y: 10,
			floor: !0
		  }, {
			x: 5,
			y: 4,
			floor: !1
		  }]
		}, {
		  pos: {
			x: 45,
			y: 10
		  },
		  size: {
			x: 15,
			y: 10
		  },
		  joints: [{
			x: 45,
			y: 10,
			floor: !0
		  }, {
			x: 45,
			y: 4,
			floor: !1
		  }]
		}]
	  },
	  walls: {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [{
		  pos: {
			x: 3,
			y: 12
		  },
		  size: {
			x: 2,
			y: 2
		  },
		  joints: [{
			x: 5,
			y: 12
		  }],
		  left: !0
		}, {
		  pos: {
			x: 40,
			y: 12
		  },
		  size: {
			x: 2,
			y: 2
		  },
		  joints: [{
			x: 40,
			y: 12
		  }],
		  left: !1
		}],
		6: [],
		7: [{
		  pos: {
			x: 2,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 5,
			y: 15
		  }],
		  left: !0
		}, {
		  pos: {
			x: 45,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 45,
			y: 15
		  }],
		  left: !1
		}],
		8: [{
		  pos: {
			x: 2,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 5,
			y: 15
		  }],
		  left: !0
		}, {
		  pos: {
			x: 45,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 45,
			y: 15
		  }],
		  left: !1
		}],
		9: [{
		  pos: {
			x: 2,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 5,
			y: 15
		  }],
		  left: !0
		}, {
		  pos: {
			x: 45,
			y: 15
		  },
		  size: {
			x: 3,
			y: 5
		  },
		  joints: [{
			x: 45,
			y: 15
		  }],
		  left: !1
		}],
		10: []
	  },
	  solve: {
		1: {
		  lands: [{
			_id: 52,
			position: {
			  x: 0,
			  y: 348
			},
			size: {
			  x: 384,
			  y: 192
			}
		  }, {
			_id: 53,
			position: {
			  x: 576,
			  y: 348
			},
			size: {
			  x: 384,
			  y: 192
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 57,
			fixed: !0,
			floor: !0,
			land: {
			  id: 52,
			  connect: {
				x: 192,
				y: -96
			  }
			},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [71, 73]
		  }, {
			_id: 58,
			fixed: !0,
			floor: !0,
			land: {
			  id: 53,
			  connect: {
				x: -192,
				y: -96
			  }
			},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [76, 77]
		  }, {
			_id: 72,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [71, 75, 76]
		  }, {
			_id: 74,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 290.4
			},
			lines: [73, 75, 77]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 57,
			  end: 72
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 432,
			  y: 319.2
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 57,
			  end: 74
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 74,
			  end: 72
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 72,
			  end: 58
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 528,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 58,
			  end: 74
			}
		  }]
		},
		2: {
		  lands: [{
			_id: 361,
			position: {
			  x: 0,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }, {
			_id: 362,
			position: {
			  x: 576,
			  y: 348
			},
			size: {
			  x: 384,
			  y: 192
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 366,
			fixed: !0,
			floor: !0,
			land: {
			  id: 361,
			  connect: {
				x: 144,
				y: -96
			  }
			},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [380, 391]
		  }, {
			_id: 367,
			fixed: !0,
			floor: !0,
			land: {
			  id: 362,
			  connect: {
				x: -192,
				y: -96
			  }
			},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [384, 385]
		  }, {
			_id: 381,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [380, 382, 390, 393]
		  }, {
			_id: 383,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [382, 384, 387, 392]
		  }, {
			_id: 386,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 290.4
			},
			lines: [385, 387, 388, 393]
		  }, {
			_id: 389,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 384,
			  y: 290.4
			},
			lines: [388, 390, 391, 392]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 366,
			  end: 381
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 381,
			  end: 383
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 383,
			  end: 367
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 528,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 367,
			  end: 386
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 386,
			  end: 383
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 290.4
			},
			center: {
			  x: 432,
			  y: 290.4
			},
			angle: 3.141592653589793,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 386,
			  end: 389
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 384,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 389,
			  end: 381
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 389,
			  end: 366
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 319.2
			},
			angle: 0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 389,
			  end: 383
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 386,
			  end: 381
			}
		  }]
		},
		3: {
		  lands: [{
			_id: 702,
			position: {
			  x: 0,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }, {
			_id: 703,
			position: {
			  x: 672,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 704,
			fixed: !0,
			floor: !0,
			land: {
			  id: 702,
			  connect: {
				x: 144,
				y: -96
			  }
			},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [712, 715]
		  }, {
			_id: 705,
			fixed: !0,
			floor: !0,
			land: {
			  id: 703,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [714, 722]
		  }, {
			_id: 706,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [712, 713, 738]
		  }, {
			_id: 707,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [713, 716, 717, 719, 721]
		  }, {
			_id: 708,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 576,
			  y: 309.6
			},
			lines: [714, 717, 720, 739]
		  }, {
			_id: 709,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 384,
			  y: 309.6
			},
			lines: [715, 716, 718, 738]
		  }, {
			_id: 710,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 309.6
			},
			lines: [718, 719, 720]
		  }, {
			_id: 711,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [721, 722, 739]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 704,
			  end: 706
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 706,
			  end: 707
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 309.6
			},
			center: {
			  x: 624,
			  y: 328.8
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 705,
			  end: 708
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 328.8
			},
			angle: 2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 709,
			  end: 704
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 709,
			  end: 707
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 309.6
			},
			center: {
			  x: 528,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 707,
			  end: 708
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 309.6
			},
			center: {
			  x: 432,
			  y: 309.6
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 709,
			  end: 710
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 710,
			  end: 707
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 309.6
			},
			center: {
			  x: 528,
			  y: 309.6
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 710,
			  end: 708
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 707,
			  end: 711
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 711,
			  end: 705
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 384,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 709,
			  end: 706
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 576,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 576,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 708,
			  end: 711
			}
		  }]
		},
		4: {
		  lands: [{
			_id: 981,
			position: {
			  x: 0,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 982,
			position: {
			  x: 460.8,
			  y: 482.4
			},
			size: {
			  x: 38.4,
			  y: 96
			}
		  }, {
			_id: 983,
			position: {
			  x: 768,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 984,
			fixed: !0,
			floor: !0,
			land: {
			  id: 981,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [996, 1008]
		  }, {
			_id: 985,
			fixed: !0,
			floor: !1,
			land: {
			  id: 982,
			  connect: {
				x: -19.2,
				y: -48
			  }
			},
			center: {
			  x: 460.8,
			  y: 482.4
			},
			lines: [1002]
		  }, {
			_id: 986,
			fixed: !0,
			floor: !1,
			land: {
			  id: 982,
			  connect: {
				x: 19.2,
				y: -48
			  }
			},
			center: {
			  x: 499.2,
			  y: 482.4
			},
			lines: [1003]
		  }, {
			_id: 987,
			fixed: !0,
			floor: !0,
			land: {
			  id: 983,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [1001, 1010]
		  }, {
			_id: 988,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [996, 997, 1026]
		  }, {
			_id: 989,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [997, 998, 1005, 1007]
		  }, {
			_id: 990,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [998, 999, 1004]
		  }, {
			_id: 991,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [999, 1E3, 1006, 1009]
		  }, {
			_id: 992,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [1E3, 1001, 1027]
		  }, {
			_id: 993,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 405.6
			},
			lines: [1002, 1003, 1004, 1005, 1006]
		  }, {
			_id: 994,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 288,
			  y: 290.4
			},
			lines: [1007, 1008, 1026]
		  }, {
			_id: 995,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 672,
			  y: 290.4
			},
			lines: [1009, 1010, 1027]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 984,
			  end: 988
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 988,
			  end: 989
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 989,
			  end: 990
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 990,
			  end: 991
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 991,
			  end: 992
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 992,
			  end: 987
			}
		  }, {
			lngth: 79.2,
			width: 6,
			start: {
			  x: 460.8,
			  y: 482.4
			},
			end: {
			  x: 480,
			  y: 405.6
			},
			center: {
			  x: 470.4,
			  y: 444
			},
			angle: -1.3258176636680326,
			floor: !1,
			price: 800,
			joints: {
			  start: 985,
			  end: 993
			}
		  }, {
			lngth: 79.2,
			width: 6,
			start: {
			  x: 499.2,
			  y: 482.4
			},
			end: {
			  x: 480,
			  y: 405.6
			},
			center: {
			  x: 489.6,
			  y: 444
			},
			angle: -1.8157749899217608,
			floor: !1,
			price: 800,
			joints: {
			  start: 986,
			  end: 993
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 480,
			  y: 405.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 376.8
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 993,
			  end: 990
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 480,
			  y: 405.6
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 376.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 993,
			  end: 989
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 480,
			  y: 405.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 376.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 993,
			  end: 991
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 290.4
			},
			center: {
			  x: 336,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 989,
			  end: 994
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 994,
			  end: 984
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 290.4
			},
			center: {
			  x: 624,
			  y: 319.2
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 991,
			  end: 995
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 319.2
			},
			angle: 0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 995,
			  end: 987
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 288,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 994,
			  end: 988
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 672,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 995,
			  end: 992
			}
		  }]
		},
		5: {
		  lands: [{
			_id: 2132,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 2133,
			position: {
			  x: 403.2,
			  y: 540
			},
			size: {
			  x: 57.6,
			  y: 96
			}
		  }, {
			_id: 2134,
			position: {
			  x: 768,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [{
			_id: 2135,
			vertices: [{
			  x: 96,
			  y: 309.6
			}, {
			  x: 76.8,
			  y: 309.6
			}, {
			  x: 57.6,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 309.6
			}, {
			  x: 76.8,
			  y: 309.6
			}, {
			  x: 57.6,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 309.6
			}, {
			  x: 76.8,
			  y: 309.6
			}, {
			  x: 57.6,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}],
			pos: {
			  x: 57.6,
			  y: 309.6
			},
			size: {
			  x: 38.4,
			  y: 38.4
			},
			left: !0
		  }, {
			_id: 2136,
			vertices: [{
			  x: 787.2,
			  y: 309.6
			}, {
			  x: 768,
			  y: 309.6
			}, {
			  x: 768,
			  y: 348
			}, {
			  x: 806.4,
			  y: 348
			}, {
			  x: 787.2,
			  y: 309.6
			}, {
			  x: 768,
			  y: 309.6
			}, {
			  x: 768,
			  y: 348
			}, {
			  x: 806.4,
			  y: 348
			}, {
			  x: 787.2,
			  y: 309.6
			}, {
			  x: 768,
			  y: 309.6
			}, {
			  x: 768,
			  y: 348
			}, {
			  x: 806.4,
			  y: 348
			}],
			pos: {
			  x: 768,
			  y: 309.6
			},
			size: {
			  x: 38.4,
			  y: 38.4
			},
			left: !1
		  }],
		  joints: [{
			_id: 2137,
			fixed: !0,
			floor: !0,
			land: {
			  id: 2132,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [2155, 2158]
		  }, {
			_id: 2138,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2133,
			  connect: {
				x: -28.8,
				y: -48
			  }
			},
			center: {
			  x: 403.2,
			  y: 540
			},
			lines: [2168]
		  }, {
			_id: 2139,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2133,
			  connect: {
				x: 28.8,
				y: -48
			  }
			},
			center: {
			  x: 460.8,
			  y: 540
			},
			lines: [2169]
		  }, {
			_id: 2140,
			fixed: !0,
			floor: !0,
			land: {
			  id: 2134,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [2160, 2162]
		  }, {
			_id: 2141,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2135,
			  connect: {
				x: 19.2,
				y: -19.2
			  }
			},
			center: {
			  x: 96,
			  y: 309.6
			},
			lines: [2194]
		  }, {
			_id: 2142,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2136,
			  connect: {
				x: -19.2,
				y: -19.2
			  }
			},
			center: {
			  x: 768,
			  y: 309.6
			},
			lines: [2195]
		  }, {
			_id: 2143,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [2155, 2156, 2159]
		  }, {
			_id: 2144,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [2156, 2157, 2165, 2174]
		  }, {
			_id: 2145,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 309.6
			},
			lines: [2157, 2158, 2159, 2194]
		  }, {
			_id: 2146,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 672,
			  y: 309.6
			},
			lines: [2160, 2161, 2163, 2195]
		  }, {
			_id: 2147,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [2161, 2164, 2167, 2178]
		  }, {
			_id: 2148,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [2162, 2163, 2164]
		  }, {
			_id: 2149,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [2165, 2166, 2172, 2175]
		  }, {
			_id: 2150,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [2166, 2167, 2171, 2177]
		  }, {
			_id: 2151,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 403.2,
			  y: 444
			},
			lines: [2168, 2170, 2172, 2173]
		  }, {
			_id: 2152,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 460.8,
			  y: 444
			},
			lines: [2169, 2170, 2171, 2176]
		  }, {
			_id: 2153,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 345.6,
			  y: 386.4
			},
			lines: [2173, 2174, 2175]
		  }, {
			_id: 2154,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 518.4,
			  y: 386.4
			},
			lines: [2176, 2177, 2178]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2137,
			  end: 2143
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2143,
			  end: 2144
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 309.6
			},
			center: {
			  x: 240,
			  y: 328.8
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2144,
			  end: 2145
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 96,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 328.8
			},
			angle: 2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2145,
			  end: 2137
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 2145,
			  end: 2143
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 309.6
			},
			center: {
			  x: 720,
			  y: 328.8
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2140,
			  end: 2146
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 672,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 328.8
			},
			angle: 2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2146,
			  end: 2147
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2140,
			  end: 2148
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 672,
			  y: 309.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 672,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 2146,
			  end: 2148
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2148,
			  end: 2147
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2144,
			  end: 2149
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2149,
			  end: 2150
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2150,
			  end: 2147
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 403.2,
			  y: 540
			},
			end: {
			  x: 403.2,
			  y: 444
			},
			center: {
			  x: 403.2,
			  y: 492
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2138,
			  end: 2151
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 460.8,
			  y: 540
			},
			end: {
			  x: 460.8,
			  y: 444
			},
			center: {
			  x: 460.8,
			  y: 492
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2139,
			  end: 2152
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 403.2,
			  y: 444
			},
			end: {
			  x: 460.8,
			  y: 444
			},
			center: {
			  x: 432,
			  y: 444
			},
			angle: 0,
			floor: !1,
			price: 600,
			joints: {
			  start: 2151,
			  end: 2152
			}
		  }, {
			lngth: 97.9,
			width: 6,
			start: {
			  x: 460.8,
			  y: 444
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 470.4,
			  y: 396
			},
			angle: -1.373400766945016,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2152,
			  end: 2150
			}
		  }, {
			lngth: 97.9,
			width: 6,
			start: {
			  x: 403.2,
			  y: 444
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 393.6,
			  y: 396
			},
			angle: -1.7681918866447774,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2151,
			  end: 2149
			}
		  }, {
			lngth: 81.5,
			width: 6,
			start: {
			  x: 403.2,
			  y: 444
			},
			end: {
			  x: 345.6,
			  y: 386.4
			},
			center: {
			  x: 374.4,
			  y: 415.2
			},
			angle: -2.3561944901923444,
			floor: !1,
			price: 800,
			joints: {
			  start: 2151,
			  end: 2153
			}
		  }, {
			lngth: 69.2,
			width: 6,
			start: {
			  x: 345.6,
			  y: 386.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 316.8,
			  y: 367.2
			},
			angle: -2.553590050042226,
			floor: !1,
			price: 800,
			joints: {
			  start: 2153,
			  end: 2144
			}
		  }, {
			lngth: 54.3,
			width: 6,
			start: {
			  x: 345.6,
			  y: 386.4
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 364.8,
			  y: 367.2
			},
			angle: -0.7853981633974483,
			floor: !1,
			price: 600,
			joints: {
			  start: 2153,
			  end: 2149
			}
		  }, {
			lngth: 81.5,
			width: 6,
			start: {
			  x: 460.8,
			  y: 444
			},
			end: {
			  x: 518.4,
			  y: 386.4
			},
			center: {
			  x: 489.6,
			  y: 415.2
			},
			angle: -0.7853981633974487,
			floor: !1,
			price: 800,
			joints: {
			  start: 2152,
			  end: 2154
			}
		  }, {
			lngth: 54.3,
			width: 6,
			start: {
			  x: 518.4,
			  y: 386.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 499.2,
			  y: 367.2
			},
			angle: -2.356194490192345,
			floor: !1,
			price: 600,
			joints: {
			  start: 2154,
			  end: 2150
			}
		  }, {
			lngth: 69.2,
			width: 6,
			start: {
			  x: 518.4,
			  y: 386.4
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 547.2,
			  y: 367.2
			},
			angle: -0.5880026035475671,
			floor: !1,
			price: 800,
			joints: {
			  start: 2154,
			  end: 2147
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 96,
			  y: 309.6
			},
			center: {
			  x: 144,
			  y: 309.6
			},
			angle: 3.141592653589793,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2145,
			  end: 2141
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 309.6
			},
			end: {
			  x: 768,
			  y: 309.6
			},
			center: {
			  x: 720,
			  y: 309.6
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2146,
			  end: 2142
			}
		  }]
		},
		6: {
		  lands: [{
			_id: 1722,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 1723,
			position: {
			  x: 460.8,
			  y: 348
			},
			size: {
			  x: 38.4,
			  y: 192
			}
		  }, {
			_id: 1724,
			position: {
			  x: 864,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 288
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 1725,
			fixed: !0,
			floor: !0,
			land: {
			  id: 1722,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [1742, 1757]
		  }, {
			_id: 1726,
			fixed: !0,
			floor: !0,
			land: {
			  id: 1723,
			  connect: {
				x: -19.2,
				y: -96
			  }
			},
			center: {
			  x: 460.8,
			  y: 348
			},
			lines: [1766, 1767, 1770, 1787]
		  }, {
			_id: 1727,
			fixed: !0,
			floor: !0,
			land: {
			  id: 1723,
			  connect: {
				x: 19.2,
				y: -96
			  }
			},
			center: {
			  x: 499.2,
			  y: 348
			},
			lines: [1768, 1769, 1771, 1787]
		  }, {
			_id: 1728,
			fixed: !0,
			floor: !0,
			land: {
			  id: 1724,
			  connect: {
				x: -144,
				y: -144
			  }
			},
			center: {
			  x: 864,
			  y: 348
			},
			lines: [1747, 1748]
		  }, {
			_id: 1729,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [1742, 1743, 1756]
		  }, {
			_id: 1730,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [1743, 1744, 1754, 1755, 1764]
		  }, {
			_id: 1731,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [1744, 1753, 1767]
		  }, {
			_id: 1732,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [1745, 1752, 1769]
		  }, {
			_id: 1733,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [1745, 1746, 1750, 1751, 1765]
		  }, {
			_id: 1734,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [1746, 1747, 1749]
		  }, {
			_id: 1735,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 290.4
			},
			lines: [1748, 1749, 1750, 1763]
		  }, {
			_id: 1736,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 576,
			  y: 290.4
			},
			lines: [1751, 1752, 1761, 1762, 1768]
		  }, {
			_id: 1737,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 384,
			  y: 290.4
			},
			lines: [1753, 1754, 1759, 1760, 1766]
		  }, {
			_id: 1738,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 290.4
			},
			lines: [1755, 1756, 1757, 1758]
		  }, {
			_id: 1739,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 288,
			  y: 290.4
			},
			lines: [1758, 1759, 1764]
		  }, {
			_id: 1740,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 290.4
			},
			lines: [1760, 1761, 1770, 1771]
		  }, {
			_id: 1741,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 672,
			  y: 290.4
			},
			lines: [1762, 1763, 1765]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1725,
			  end: 1729
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1729,
			  end: 1730
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1730,
			  end: 1731
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1732,
			  end: 1733
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1733,
			  end: 1734
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 1734,
			  end: 1728
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 864,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 290.4
			},
			center: {
			  x: 816,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1728,
			  end: 1735
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 768,
			  y: 290.4
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1735,
			  end: 1734
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1735,
			  end: 1733
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 290.4
			},
			center: {
			  x: 624,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1733,
			  end: 1736
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 576,
			  y: 290.4
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 576,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1736,
			  end: 1732
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 384,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1737,
			  end: 1731
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1737,
			  end: 1730
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 290.4
			},
			center: {
			  x: 240,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1730,
			  end: 1738
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 192,
			  y: 290.4
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1738,
			  end: 1729
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 290.4
			},
			end: {
			  x: 96,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 1738,
			  end: 1725
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 290.4
			},
			center: {
			  x: 240,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1738,
			  end: 1739
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 290.4
			},
			center: {
			  x: 336,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1739,
			  end: 1737
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 432,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1737,
			  end: 1740
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 576,
			  y: 290.4
			},
			center: {
			  x: 528,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1740,
			  end: 1736
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 290.4
			},
			center: {
			  x: 624,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1736,
			  end: 1741
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 768,
			  y: 290.4
			},
			center: {
			  x: 720,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1741,
			  end: 1735
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 288,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1739,
			  end: 1730
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 672,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 1741,
			  end: 1733
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 460.8,
			  y: 348
			},
			center: {
			  x: 422.4,
			  y: 319.2
			},
			angle: 0.6435011087932845,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1737,
			  end: 1726
			}
		  }, {
			lngth: 76.8,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 460.8,
			  y: 348
			},
			center: {
			  x: 422.4,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 800,
			joints: {
			  start: 1731,
			  end: 1726
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 499.2,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 290.4
			},
			center: {
			  x: 537.6,
			  y: 319.2
			},
			angle: -0.6435011087932845,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 1727,
			  end: 1736
			}
		  }, {
			lngth: 76.8,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 499.2,
			  y: 348
			},
			center: {
			  x: 537.6,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 800,
			joints: {
			  start: 1732,
			  end: 1727
			}
		  }, {
			lngth: 60.7,
			width: 6,
			start: {
			  x: 460.8,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 470.4,
			  y: 319.2
			},
			angle: -1.2490457723982549,
			floor: !1,
			price: 600,
			joints: {
			  start: 1726,
			  end: 1740
			}
		  }, {
			lngth: 60.7,
			width: 6,
			start: {
			  x: 499.2,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 489.6,
			  y: 319.2
			},
			angle: -1.8925468811915385,
			floor: !1,
			price: 600,
			joints: {
			  start: 1727,
			  end: 1740
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 460.8,
			  y: 348
			},
			end: {
			  x: 499.2,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 400,
			joints: {
			  start: 1726,
			  end: 1727
			}
		  }]
		},
		7: {
		  lands: [{
			_id: 169,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 170,
			position: {
			  x: 345.6,
			  y: 482.4
			},
			size: {
			  x: 268.8,
			  y: 96
			}
		  }, {
			_id: 171,
			position: {
			  x: 864,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [{
			_id: 172,
			vertices: [{
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}],
			pos: {
			  x: 38.4,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !0
		  }, {
			_id: 173,
			vertices: [{
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}, {
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}],
			pos: {
			  x: 864,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !1
		  }],
		  joints: [{
			_id: 174,
			fixed: !0,
			floor: !0,
			land: {
			  id: 169,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [191, 205]
		  }, {
			_id: 175,
			fixed: !0,
			floor: !1,
			land: {
			  id: 170,
			  connect: {
				x: -134.4,
				y: -48
			  }
			},
			center: {
			  x: 345.6,
			  y: 482.4
			},
			lines: [202]
		  }, {
			_id: 176,
			fixed: !0,
			floor: !1,
			land: {
			  id: 170,
			  connect: {
				x: 134.4,
				y: -48
			  }
			},
			center: {
			  x: 614.4,
			  y: 482.4
			},
			lines: [199]
		  }, {
			_id: 177,
			fixed: !0,
			floor: !0,
			land: {
			  id: 171,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 864,
			  y: 348
			},
			lines: [198, 209]
		  }, {
			_id: 178,
			fixed: !0,
			floor: !1,
			land: {
			  id: 172,
			  connect: {
				x: 28.8,
				y: -48
			  }
			},
			center: {
			  x: 96,
			  y: 252
			},
			lines: [212]
		  }, {
			_id: 179,
			fixed: !0,
			floor: !1,
			land: {
			  id: 173,
			  connect: {
				x: -28.8,
				y: -48
			  }
			},
			center: {
			  x: 864,
			  y: 252
			},
			lines: [211]
		  }, {
			_id: 180,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [191, 192, 207]
		  }, {
			_id: 181,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [192, 193, 204, 206]
		  }, {
			_id: 182,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [193, 194, 203, 228]
		  }, {
			_id: 183,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [194, 195, 231]
		  }, {
			_id: 184,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [195, 196, 200, 230]
		  }, {
			_id: 185,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [196, 197, 201, 208]
		  }, {
			_id: 186,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [197, 198, 210]
		  }, {
			_id: 187,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 614.4,
			  y: 405.6
			},
			lines: [199, 200, 201]
		  }, {
			_id: 188,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 345.6,
			  y: 405.6
			},
			lines: [202, 203, 204]
		  }, {
			_id: 189,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 309.6
			},
			lines: [205, 206, 207, 212]
		  }, {
			_id: 190,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 309.6
			},
			lines: [208, 209, 210, 211]
		  }, {
			_id: 229,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 309.6
			},
			lines: [228, 230, 231]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 174,
			  end: 180
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 180,
			  end: 181
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 181,
			  end: 182
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 182,
			  end: 183
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 183,
			  end: 184
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 184,
			  end: 185
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 185,
			  end: 186
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 186,
			  end: 177
			}
		  }, {
			lngth: 76.8,
			width: 6,
			start: {
			  x: 614.4,
			  y: 482.4
			},
			end: {
			  x: 614.4,
			  y: 405.6
			},
			center: {
			  x: 614.4,
			  y: 444
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 800,
			joints: {
			  start: 176,
			  end: 187
			}
		  }, {
			lngth: 69.2,
			width: 6,
			start: {
			  x: 614.4,
			  y: 405.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 595.2,
			  y: 376.8
			},
			angle: -2.1587989303424635,
			floor: !1,
			price: 800,
			joints: {
			  start: 187,
			  end: 184
			}
		  }, {
			lngth: 81.5,
			width: 6,
			start: {
			  x: 614.4,
			  y: 405.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 643.2,
			  y: 376.8
			},
			angle: -0.7853981633974483,
			floor: !1,
			price: 800,
			joints: {
			  start: 187,
			  end: 185
			}
		  }, {
			lngth: 76.8,
			width: 6,
			start: {
			  x: 345.6,
			  y: 482.4
			},
			end: {
			  x: 345.6,
			  y: 405.6
			},
			center: {
			  x: 345.6,
			  y: 444
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 800,
			joints: {
			  start: 175,
			  end: 188
			}
		  }, {
			lngth: 69.2,
			width: 6,
			start: {
			  x: 345.6,
			  y: 405.6
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 364.8,
			  y: 376.8
			},
			angle: -0.9827937232473295,
			floor: !1,
			price: 800,
			joints: {
			  start: 188,
			  end: 182
			}
		  }, {
			lngth: 81.5,
			width: 6,
			start: {
			  x: 345.6,
			  y: 405.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 316.8,
			  y: 376.8
			},
			angle: -2.356194490192345,
			floor: !1,
			price: 800,
			joints: {
			  start: 188,
			  end: 181
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 309.6
			},
			center: {
			  x: 144,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 174,
			  end: 189
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 189,
			  end: 181
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 189,
			  end: 180
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 309.6
			},
			center: {
			  x: 720,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 185,
			  end: 190
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 190,
			  end: 177
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 190,
			  end: 186
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 864,
			  y: 252
			},
			center: {
			  x: 816,
			  y: 280.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 190,
			  end: 179
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 96,
			  y: 252
			},
			center: {
			  x: 144,
			  y: 280.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 189,
			  end: 178
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 309.6
			},
			center: {
			  x: 432,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 182,
			  end: 229
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 229,
			  end: 184
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 229,
			  end: 183
			}
		  }]
		},
		8: {
		  lands: [{
			_id: 2681,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 2682,
			position: {
			  x: 460.8,
			  y: 520.8
			},
			size: {
			  x: 38.4,
			  y: 19.2
			}
		  }, {
			_id: 2683,
			position: {
			  x: 864,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [{
			_id: 2684,
			vertices: [{
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}],
			pos: {
			  x: 38.4,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !0
		  }, {
			_id: 2685,
			vertices: [{
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}, {
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}],
			pos: {
			  x: 864,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !1
		  }],
		  joints: [{
			_id: 2686,
			fixed: !0,
			floor: !0,
			land: {
			  id: 2681,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [2703, 2714]
		  }, {
			_id: 2687,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2682,
			  connect: {
				x: -19.2,
				y: -9.6
			  }
			},
			center: {
			  x: 460.8,
			  y: 520.8
			},
			lines: [2717]
		  }, {
			_id: 2688,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2682,
			  connect: {
				x: 19.2,
				y: -9.6
			  }
			},
			center: {
			  x: 499.2,
			  y: 520.8
			},
			lines: [2718]
		  }, {
			_id: 2689,
			fixed: !0,
			floor: !0,
			land: {
			  id: 2683,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 864,
			  y: 348
			},
			lines: [2710, 2711]
		  }, {
			_id: 2690,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2684,
			  connect: {
				x: 28.8,
				y: -48
			  }
			},
			center: {
			  x: 96,
			  y: 252
			},
			lines: [2742]
		  }, {
			_id: 2691,
			fixed: !0,
			floor: !1,
			land: {
			  id: 2685,
			  connect: {
				x: -28.8,
				y: -48
			  }
			},
			center: {
			  x: 864,
			  y: 252
			},
			lines: [2743]
		  }, {
			_id: 2692,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [2703, 2704, 2715]
		  }, {
			_id: 2693,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [2704, 2705, 2716]
		  }, {
			_id: 2694,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [2705, 2706, 2720]
		  }, {
			_id: 2695,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [2706, 2707, 2722, 2723]
		  }, {
			_id: 2696,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [2707, 2708, 2721]
		  }, {
			_id: 2697,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [2708, 2709, 2713]
		  }, {
			_id: 2698,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [2709, 2710, 2712]
		  }, {
			_id: 2699,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 309.6
			},
			lines: [2711, 2712, 2713, 2743]
		  }, {
			_id: 2700,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 309.6
			},
			lines: [2714, 2715, 2716, 2742]
		  }, {
			_id: 2701,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 460.8,
			  y: 424.8
			},
			lines: [2717, 2719, 2720, 2723]
		  }, {
			_id: 2702,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 499.2,
			  y: 424.8
			},
			lines: [2718, 2719, 2721, 2722]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2686,
			  end: 2692
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2692,
			  end: 2693
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2693,
			  end: 2694
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2694,
			  end: 2695
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2695,
			  end: 2696
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2696,
			  end: 2697
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2697,
			  end: 2698
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 2698,
			  end: 2689
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 864,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 309.6
			},
			center: {
			  x: 816,
			  y: 328.8
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2689,
			  end: 2699
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 2699,
			  end: 2698
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 328.8
			},
			angle: 2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2699,
			  end: 2697
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 309.6
			},
			center: {
			  x: 144,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2686,
			  end: 2700
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 2700,
			  end: 2692
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2700,
			  end: 2693
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 460.8,
			  y: 520.8
			},
			end: {
			  x: 460.8,
			  y: 424.8
			},
			center: {
			  x: 460.8,
			  y: 472.79999999999995
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2687,
			  end: 2701
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 499.2,
			  y: 520.8
			},
			end: {
			  x: 499.2,
			  y: 424.8
			},
			center: {
			  x: 499.2,
			  y: 472.79999999999995
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 2688,
			  end: 2702
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 460.8,
			  y: 424.8
			},
			end: {
			  x: 499.2,
			  y: 424.8
			},
			center: {
			  x: 480,
			  y: 424.8
			},
			angle: 0,
			floor: !1,
			price: 400,
			joints: {
			  start: 2701,
			  end: 2702
			}
		  }, {
			lngth: 108.6,
			width: 6,
			start: {
			  x: 460.8,
			  y: 424.8
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 422.4,
			  y: 386.4
			},
			angle: -2.356194490192345,
			floor: !1,
			price: 1200,
			joints: {
			  start: 2701,
			  end: 2694
			}
		  }, {
			lngth: 108.6,
			width: 6,
			start: {
			  x: 499.2,
			  y: 424.8
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 537.6,
			  y: 386.4
			},
			angle: -0.7853981633974483,
			floor: !1,
			price: 1200,
			joints: {
			  start: 2702,
			  end: 2696
			}
		  }, {
			lngth: 79.2,
			width: 6,
			start: {
			  x: 499.2,
			  y: 424.8
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 489.6,
			  y: 386.4
			},
			angle: -1.8157749899217608,
			floor: !1,
			price: 800,
			joints: {
			  start: 2702,
			  end: 2695
			}
		  }, {
			lngth: 79.2,
			width: 6,
			start: {
			  x: 460.8,
			  y: 424.8
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 470.4,
			  y: 386.4
			},
			angle: -1.3258176636680326,
			floor: !1,
			price: 800,
			joints: {
			  start: 2701,
			  end: 2695
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 96,
			  y: 252
			},
			center: {
			  x: 144,
			  y: 280.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 2700,
			  end: 2690
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 864,
			  y: 252
			},
			center: {
			  x: 816,
			  y: 280.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 2699,
			  end: 2691
			}
		  }]
		},
		9: {
		  lands: [{
			_id: 52,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 53,
			position: {
			  x: 864,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [{
			_id: 54,
			vertices: [{
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}, {
			  x: 96,
			  y: 252
			}, {
			  x: 67.2,
			  y: 252
			}, {
			  x: 38.4,
			  y: 348
			}, {
			  x: 96,
			  y: 348
			}],
			pos: {
			  x: 38.4,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !0
		  }, {
			_id: 55,
			vertices: [{
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}, {
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}, {
			  x: 892.8,
			  y: 252
			}, {
			  x: 864,
			  y: 252
			}, {
			  x: 864,
			  y: 348
			}, {
			  x: 921.6,
			  y: 348
			}],
			pos: {
			  x: 864,
			  y: 252
			},
			size: {
			  x: 57.6,
			  y: 96
			},
			left: !1
		  }],
		  joints: [{
			_id: 56,
			fixed: !0,
			floor: !0,
			land: {
			  id: 52,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [78, 79, 123]
		  }, {
			_id: 57,
			fixed: !0,
			floor: !1,
			land: {
			  id: 52,
			  connect: {
				x: 96,
				y: 0
			  }
			},
			center: {
			  x: 96,
			  y: 444
			},
			lines: [101]
		  }, {
			_id: 58,
			fixed: !0,
			floor: !1,
			land: {
			  id: 52,
			  connect: {
				x: 96,
				y: 96
			  }
			},
			center: {
			  x: 96,
			  y: 540
			},
			lines: []
		  }, {
			_id: 59,
			fixed: !0,
			floor: !0,
			land: {
			  id: 53,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 864,
			  y: 348
			},
			lines: [83, 85, 124]
		  }, {
			_id: 60,
			fixed: !0,
			floor: !1,
			land: {
			  id: 53,
			  connect: {
				x: -144,
				y: 0
			  }
			},
			center: {
			  x: 864,
			  y: 444
			},
			lines: [98]
		  }, {
			_id: 61,
			fixed: !0,
			floor: !1,
			land: {
			  id: 53,
			  connect: {
				x: -144,
				y: 96
			  }
			},
			center: {
			  x: 864,
			  y: 540
			},
			lines: []
		  }, {
			_id: 62,
			fixed: !0,
			floor: !1,
			land: {
			  id: 54,
			  connect: {
				x: 28.8,
				y: -48
			  }
			},
			center: {
			  x: 96,
			  y: 252
			},
			lines: [122]
		  }, {
			_id: 63,
			fixed: !0,
			floor: !1,
			land: {
			  id: 55,
			  connect: {
				x: -28.8,
				y: -48
			  }
			},
			center: {
			  x: 864,
			  y: 252
			},
			lines: [125]
		  }, {
			_id: 64,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [78, 81, 82, 102]
		  }, {
			_id: 65,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 309.6
			},
			lines: [79, 80, 82, 122]
		  }, {
			_id: 66,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [80, 81, 91, 92, 103]
		  }, {
			_id: 67,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [83, 84, 86, 100]
		  }, {
			_id: 68,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [84, 87, 88, 96, 99]
		  }, {
			_id: 69,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 309.6
			},
			lines: [85, 86, 87, 125]
		  }, {
			_id: 70,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [88, 89, 97]
		  }, {
			_id: 71,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [89, 90, 93, 95, 106]
		  }, {
			_id: 72,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [90, 91, 94]
		  }, {
			_id: 73,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 384,
			  y: 309.6
			},
			lines: [92, 93, 94, 104]
		  }, {
			_id: 74,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 576,
			  y: 309.6
			},
			lines: [95, 96, 97, 105]
		  }, {
			_id: 75,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 386.4
			},
			lines: [98, 99, 100, 124]
		  }, {
			_id: 76,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 386.4
			},
			lines: [101, 102, 103, 123]
		  }, {
			_id: 77,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 309.6
			},
			lines: [104, 105, 106]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 56,
			  end: 64
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 309.6
			},
			center: {
			  x: 144,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 56,
			  end: 65
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 65,
			  end: 66
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 64,
			  end: 66
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 65,
			  end: 64
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 864,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 59,
			  end: 67
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 67,
			  end: 68
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 864,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 309.6
			},
			center: {
			  x: 816,
			  y: 328.8
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 59,
			  end: 69
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 69,
			  end: 67
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 328.8
			},
			angle: 2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 69,
			  end: 68
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 68,
			  end: 70
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 70,
			  end: 71
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 71,
			  end: 72
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 3.141592653589793,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 72,
			  end: 66
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 309.6
			},
			center: {
			  x: 336,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 66,
			  end: 73
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 73,
			  end: 71
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 384,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 73,
			  end: 72
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 309.6
			},
			center: {
			  x: 528,
			  y: 328.8
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 71,
			  end: 74
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 576,
			  y: 309.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 328.8
			},
			angle: 0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 74,
			  end: 68
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 576,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 576,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 74,
			  end: 70
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 864,
			  y: 444
			},
			end: {
			  x: 768,
			  y: 386.4
			},
			center: {
			  x: 816,
			  y: 415.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 60,
			  end: 75
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 386.4
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 367.2
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 75,
			  end: 68
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 768,
			  y: 386.4
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 367.2
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 75,
			  end: 67
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 96,
			  y: 444
			},
			end: {
			  x: 192,
			  y: 386.4
			},
			center: {
			  x: 144,
			  y: 415.2
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 57,
			  end: 76
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 386.4
			},
			center: {
			  x: 192,
			  y: 367.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 64,
			  end: 76
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 386.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 367.2
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 76,
			  end: 66
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 309.6
			},
			center: {
			  x: 432,
			  y: 309.6
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 73,
			  end: 77
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 576,
			  y: 309.6
			},
			center: {
			  x: 528,
			  y: 309.6
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 77,
			  end: 74
			}
		  }, {
			lngth: 38.4,
			width: 6,
			start: {
			  x: 480,
			  y: 309.6
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 328.8
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 400,
			joints: {
			  start: 77,
			  end: 71
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 309.6
			},
			end: {
			  x: 96,
			  y: 252
			},
			center: {
			  x: 144,
			  y: 280.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 65,
			  end: 62
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 192,
			  y: 386.4
			},
			end: {
			  x: 96,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 367.2
			},
			angle: -2.7610862764774287,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 76,
			  end: 56
			}
		  }, {
			lngth: 103.4,
			width: 6,
			start: {
			  x: 768,
			  y: 386.4
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 367.2
			},
			angle: -0.3805063771123647,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 75,
			  end: 59
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 309.6
			},
			end: {
			  x: 864,
			  y: 252
			},
			center: {
			  x: 816,
			  y: 280.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 69,
			  end: 63
			}
		  }]
		},
		10: {
		  lands: [{
			_id: 487,
			position: {
			  x: -96,
			  y: 348
			},
			size: {
			  x: 192,
			  y: 192
			}
		  }, {
			_id: 488,
			position: {
			  x: 864,
			  y: 348
			},
			size: {
			  x: 288,
			  y: 192
			}
		  }],
		  walls: [],
		  joints: [{
			_id: 489,
			fixed: !0,
			floor: !0,
			land: {
			  id: 487,
			  connect: {
				x: 96,
				y: -96
			  }
			},
			center: {
			  x: 96,
			  y: 348
			},
			lines: [505, 519]
		  }, {
			_id: 490,
			fixed: !0,
			floor: !1,
			land: {
			  id: 487,
			  connect: {
				x: 96,
				y: 19.2
			  }
			},
			center: {
			  x: 96,
			  y: 463.2
			},
			lines: [516]
		  }, {
			_id: 491,
			fixed: !0,
			floor: !0,
			land: {
			  id: 488,
			  connect: {
				x: -144,
				y: -96
			  }
			},
			center: {
			  x: 864,
			  y: 348
			},
			lines: [512, 520]
		  }, {
			_id: 492,
			fixed: !0,
			floor: !1,
			land: {
			  id: 488,
			  connect: {
				x: -144,
				y: 19.2
			  }
			},
			center: {
			  x: 864,
			  y: 463.2
			},
			lines: [513]
		  }, {
			_id: 493,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 192,
			  y: 348
			},
			lines: [505, 506, 517, 553]
		  }, {
			_id: 494,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 288,
			  y: 348
			},
			lines: [506, 507, 518, 521, 554]
		  }, {
			_id: 495,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 384,
			  y: 348
			},
			lines: [507, 508, 523]
		  }, {
			_id: 496,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 480,
			  y: 348
			},
			lines: [508, 509, 522, 525, 529]
		  }, {
			_id: 497,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 576,
			  y: 348
			},
			lines: [509, 510, 526]
		  }, {
			_id: 498,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 672,
			  y: 348
			},
			lines: [510, 511, 515, 524, 549]
		  }, {
			_id: 499,
			fixed: !1,
			floor: !0,
			land: {},
			center: {
			  x: 768,
			  y: 348
			},
			lines: [511, 512, 514, 550]
		  }, {
			_id: 500,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 768,
			  y: 405.6
			},
			lines: [513, 514, 515, 520]
		  }, {
			_id: 501,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 192,
			  y: 405.6
			},
			lines: [516, 517, 518, 519]
		  }, {
			_id: 502,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 384,
			  y: 290.4
			},
			lines: [521, 522, 523, 527, 551]
		  }, {
			_id: 503,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 576,
			  y: 290.4
			},
			lines: [524, 525, 526, 528, 547]
		  }, {
			_id: 504,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 480,
			  y: 290.4
			},
			lines: [527, 528, 529]
		  }, {
			_id: 548,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 672,
			  y: 290.4
			},
			lines: [547, 549, 550]
		  }, {
			_id: 552,
			fixed: !1,
			floor: !1,
			land: {},
			center: {
			  x: 288,
			  y: 290.4
			},
			lines: [551, 553, 554]
		  }],
		  lines: [{
			lngth: 96,
			width: 6,
			start: {
			  x: 96,
			  y: 348
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 489,
			  end: 493
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 192,
			  y: 348
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 493,
			  end: 494
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 336,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 494,
			  end: 495
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 348
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 495,
			  end: 496
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 496,
			  end: 497
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 348
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 624,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 497,
			  end: 498
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 498,
			  end: 499
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 768,
			  y: 348
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 348
			},
			angle: 0,
			floor: !0,
			price: 1E3,
			joints: {
			  start: 499,
			  end: 491
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 864,
			  y: 463.2
			},
			end: {
			  x: 768,
			  y: 405.6
			},
			center: {
			  x: 816,
			  y: 434.4
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 492,
			  end: 500
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 768,
			  y: 405.6
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 768,
			  y: 376.8
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 500,
			  end: 499
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 405.6
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 376.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 500,
			  end: 498
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 96,
			  y: 463.2
			},
			end: {
			  x: 192,
			  y: 405.6
			},
			center: {
			  x: 144,
			  y: 434.4
			},
			angle: -0.5404195002705839,
			floor: !1,
			price: 1200,
			joints: {
			  start: 490,
			  end: 501
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 192,
			  y: 405.6
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 192,
			  y: 376.8
			},
			angle: -1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 501,
			  end: 493
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 405.6
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 376.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 501,
			  end: 494
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 192,
			  y: 405.6
			},
			end: {
			  x: 96,
			  y: 348
			},
			center: {
			  x: 144,
			  y: 376.8
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 501,
			  end: 489
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 768,
			  y: 405.6
			},
			end: {
			  x: 864,
			  y: 348
			},
			center: {
			  x: 816,
			  y: 376.8
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 500,
			  end: 491
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 288,
			  y: 348
			},
			end: {
			  x: 384,
			  y: 290.4
			},
			center: {
			  x: 336,
			  y: 319.2
			},
			angle: -0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 494,
			  end: 502
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 432,
			  y: 319.2
			},
			angle: 0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 502,
			  end: 496
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 384,
			  y: 348
			},
			center: {
			  x: 384,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 502,
			  end: 495
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 672,
			  y: 348
			},
			end: {
			  x: 576,
			  y: 290.4
			},
			center: {
			  x: 624,
			  y: 319.2
			},
			angle: -2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 498,
			  end: 503
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 576,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 528,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 503,
			  end: 496
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 576,
			  y: 290.4
			},
			end: {
			  x: 576,
			  y: 348
			},
			center: {
			  x: 576,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 503,
			  end: 497
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 290.4
			},
			center: {
			  x: 432,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 502,
			  end: 504
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 576,
			  y: 290.4
			},
			center: {
			  x: 528,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 504,
			  end: 503
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 480,
			  y: 290.4
			},
			end: {
			  x: 480,
			  y: 348
			},
			center: {
			  x: 480,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 504,
			  end: 496
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 576,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 290.4
			},
			center: {
			  x: 624,
			  y: 290.4
			},
			angle: 0,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 503,
			  end: 548
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 672,
			  y: 348
			},
			center: {
			  x: 672,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 548,
			  end: 498
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 672,
			  y: 290.4
			},
			end: {
			  x: 768,
			  y: 348
			},
			center: {
			  x: 720,
			  y: 319.2
			},
			angle: 0.5404195002705843,
			floor: !1,
			price: 1200,
			joints: {
			  start: 548,
			  end: 499
			}
		  }, {
			lngth: 96,
			width: 6,
			start: {
			  x: 384,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 290.4
			},
			center: {
			  x: 336,
			  y: 290.4
			},
			angle: 3.141592653589793,
			floor: !1,
			price: 1E3,
			joints: {
			  start: 502,
			  end: 552
			}
		  }, {
			lngth: 112,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 192,
			  y: 348
			},
			center: {
			  x: 240,
			  y: 319.2
			},
			angle: 2.601173153319209,
			floor: !1,
			price: 1200,
			joints: {
			  start: 552,
			  end: 493
			}
		  }, {
			lngth: 57.6,
			width: 6,
			start: {
			  x: 288,
			  y: 290.4
			},
			end: {
			  x: 288,
			  y: 348
			},
			center: {
			  x: 288,
			  y: 319.2
			},
			angle: 1.5707963267948966,
			floor: !1,
			price: 600,
			joints: {
			  start: 552,
			  end: 494
			}
		  }]
		}
	  },
	  money: {
		1: 1E4,
		2: 2E4,
		3: 3E4,
		4: 4E4,
		5: 5E4,
		6: 6E4,
		7: 5E4,
		8: 5E4,
		9: 6E4,
		10: 7E4
	  },
	  GRID_WIDTH: 1,
	  init: function (b) {
		this.GRID_WIDTH = b;
	  },
	  getMap: function (b) {
		var c = {};
		c.lands = this.getLands(b);
		c.walls = this.getWalls(b);
		return c;
	  },
	  getLands: function (b) {
		b = ig.copy(this.lands[b]);
		for (var c = 0; c < b.length; c++) {
		  var d = b[c];
		  d.pos.x *= this.GRID_WIDTH;
		  d.pos.y = ig.system.realHeight - d.pos.y * this.GRID_WIDTH;
		  d.pos.x = Math.round(10 * d.pos.x) / 10;
		  d.pos.y = Math.round(10 * d.pos.y) / 10;
		  d.size.x *= this.GRID_WIDTH;
		  d.size.y *= this.GRID_WIDTH;
		  d.size.x = Math.round(10 * d.size.x) / 10;
		  d.size.y = Math.round(10 * d.size.y) / 10;
		  for (var e = 0; e < d.joints.length; e++) {
			var f = d.joints[e];
			f.x *= this.GRID_WIDTH;
			f.y = ig.system.realHeight - f.y * this.GRID_WIDTH;
			f.x = Math.round(10 * f.x) / 10;
			f.y = Math.round(10 * f.y) / 10;
		  }
		}
		return b;
	  },
	  getWalls: function (b) {
		b = ig.copy(this.walls[b]);
		for (var c = 0; c < b.length; c++) {
		  var d = b[c];
		  d.pos.x *= this.GRID_WIDTH;
		  d.pos.y = ig.system.realHeight - d.pos.y * this.GRID_WIDTH;
		  d.pos.x = Math.round(10 * d.pos.x) / 10;
		  d.pos.y = Math.round(10 * d.pos.y) / 10;
		  d.size.x *= this.GRID_WIDTH;
		  d.size.y *= this.GRID_WIDTH;
		  d.size.x = Math.round(10 * d.size.x) / 10;
		  d.size.y = Math.round(10 * d.size.y) / 10;
		  for (var e = 0; e < d.joints.length; e++) {
			var f = d.joints[e];
			f.x *= this.GRID_WIDTH;
			f.y = ig.system.realHeight - f.y * this.GRID_WIDTH;
			f.x = Math.round(10 * f.x) / 10;
			f.y = Math.round(10 * f.y) / 10;
		  }
		}
		return b;
	  },
	  getMoney: function (b) {
		return this.money[b];
	  },
	  getSolve: function (b) {
		return this.solve[b];
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.text").requires("impact.entity").defines(function () {
	EntityText = ig.Entity.extend({
	  manager: null,
	  text: "",
	  size: 24,
	  font: "Arial",
	  color: "#000000",
	  align: "center",
	  baseline: "middle",
	  stroke: {
		enable: !1,
		color: "#FFFFFF",
		width: 3
	  },
	  multipleLines: !1,
	  init: function (b, c, d) {
		ig.global.wm || (this.context = ig.system.context, this.pos.x = b, this.pos.y = c, ig.merge(this, d), this.size = d.size, isNaN(this.size) && (this.size = 24), "undefined" === typeof this.color && (this.color = "#000000"), "undefined" === typeof this.align && (this.align = "center"), "undefined" === typeof this.baseline && (this.baseline = "middle"), this.zIndex = this.manager.zIndex + 1, ig.game.sortEntitiesDeferred());
	  },
	  update: function () {},
	  draw: function () {
		this.context.save();
		this.context.font = this.size + "px " + this.font;
		this.context.fillStyle = this.color;
		this.context.textAlign = this.align;
		this.context.textBaseline = this.baseline;
		this.multipleLines || (this.stroke.enable && (this.context.strokeStyle = this.stroke.color, this.context.lineWidth = this.stroke.width, this.context.strokeText(this.text, this.pos.x, this.pos.y)), this.context.fillText(this.text, this.pos.x, this.pos.y));
		this.context.restore();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.text-manager").defines(function () {
	ig.TextManager = ig.Class.extend({
	  id: "marketjs-impactjs-text-manager",
	  div: null,
	  fontSize: 1,
	  font: "Arial",
	  init: function () {
		this.div = document.getElementById(this.id);
		null === this.div && (this.div = document.createElement("div"), this.div.id = this.id, document.body.appendChild(this.div));
		this.div.style.visibility = "hidden";
		this.div.style.position = "absolute";
		this.div.style.height = "auto";
		this.div.style.width = "auto";
		this.div.style.float = "left";
		this.div.style.whiteSpace = "nowrap";
	  },
	  setFont: function (b, c) {
		this.font = "undefined" != typeof b ? b : this.font;
		this.fontSize = isNaN(c) ? this.size : c;
		this.div.style.fontFamily = this.font;
		this.div.style.fontSize = this.fontSize + "px";
	  },
	  getTextSize: function (b, c, d) {
		this.setFont(c, d);
		this.div.style.display = "block";
		this.div.innerHTML = b;
		b = Math.ceil(this.div.offsetWidth);
		c = Math.ceil(this.div.offsetHeight);
		this.div.style.display = "none";
		return {
		  width: b,
		  height: c
		};
	  },
	  wrapToWidth: function (b, c, d, e) {
		var f = {};
		b = b.split(" ");
		for (var j = []; b.length;) j.push(b.pop());
		for (var n = 0, m = 0, g = ""; j.length;) {
		  var t = j[j.length - 1];
		  0 < g.length && (t = " " + t);
		  var y = this.getTextSize(g + t, c, d);
		  y.width < e ? (g += t, n < y.width && (n = y.width), m < y.height && (m = y.height), j.pop()) : (b.push(g), g = "");
		}
		b.push(g);
		f.text = b;
		f.width = n;
		f.height = m;
		return this.result = f;
	  },
	  getHighestWidth: function (b, c, d) {
		for (var e = 0, f = 0; f < b.length; f++) {
		  var j = this.getTextSize(b[f], c, d);
		  j > e && (e = j);
		}
		return e;
	  },
	  wrapToBox: function (b, c, d, e, f) {
		for (var j = this.wrapToWidth(b, c, d, e), n = j.text.length * j.height; n > f;) d -= 0.5, j = this.wrapToWidth(b, c, d, e), n = j.text.length * j.height;
		j.fontSize = d;
		return j;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.construct-a-bridge").requires("impact.game", "plugins.box2d.game", "plugins.box2d.entity", "plugins.level-provider", "game.entities.text", "plugins.text-manager").defines(function () {
	ConstructABridge = ig.Box2DGame.extend({
	  name: "Construct A Bridge",
	  version: "1.0",
	  level: 1,
	  drawingData: {},
	  build: {
		time: new ig.Timer(0),
		cost: 0,
		provide: 0
	  },
	  propeller: 0,
	  gravity: 0,
	  textManager: new ig.TextManager(),
	  stepMultiplier: 1,
	  homeMode: "menu",
	  LINE: {
		WIDTH: 6,
		COLORS: {
		  IDLE: "#e99042",
		  DRAW: "#e64550"
		},
		PRICE: 200,
		TIME: 2
	  },
	  TOAST: {
		COLORS: {
		  RED: "#e64550"
		}
	  },
	  SCORE: {
		TIME: 1,
		COST: 0.5
	  },
	  TOTAL_LEVELS: 10,
	  init: function () {
		this.parent();
		this.theme = ig.global.theme;
		this.build.time.pause();
	  },
	  initData: function () {
		for (var b = {}, c = 0; c < this.TOTAL_LEVELS; c++) {
		  var d = c + 1;
		  b[d] = {
			unlocked: 1 === d,
			stars: 0,
			time: 0,
			cost: 0
		  };
		}
		return this.sessionData = {
		  sfx: 0.5,
		  bgm: 0.5,
		  levels: b,
		  tutorial: !0
		};
	  },
	  getHighestZIndex: function () {
		for (var b = 0, c = 0; c < this.entities.length; c++) {
		  var d = this.entities[c];
		  !(d instanceof EntityPointer) && d.zIndex > b && (b = d.zIndex);
		}
		return b + 1;
	  },
	  createText: function (b, c, d, e, f, j, n, m, g) {
		return ig.game.spawnEntity(EntityText, c, d, {
		  manager: b,
		  text: e,
		  font: f,
		  size: j,
		  color: n,
		  align: m,
		  baseline: g
		});
	  },
	  convertToCurrency: function (b) {
		b = b.toString();
		var c = "",
		  d = 1;
		if (3 < b.length) for (var e = b.length - 1; 0 <= e; e--) 0 === d % 4 && (c = "." + c), c = b[e] + c.toString(), d++;else c = b;
		return c;
	  },
	  removeEntity: function (b) {
		b.name && delete this.namedEntities[b.name];
		b._killed = !0;
		b.extype = b.type;
		b.excheckAgainst = b.checkAgainst;
		b.excollides = b.collides;
		b.exzindex = b.zIndex;
		b.type = ig.Entity.TYPE.NONE;
		b.checkAgainst = ig.Entity.TYPE.NONE;
		b.collides = ig.Entity.COLLIDES.NEVER;
		b.zIndex = -1;
		this._deferredKill.push(b);
		this.sortEntitiesDeferred();
	  },
	  restoreEntity: function (b) {
		b.name && (this.namedEntities[b.name] = b);
		b._killed = !1;
		b.type = b.extype;
		b.checkAgainst = b.excheckAgainst;
		b.collides = b.excollides;
		b.zIndex = b.exzindex;
		this.entities.push(b);
		this.sortEntitiesDeferred();
	  },
	  setGravity: function (b, c) {
		ig.world.SetGravity(new Box2D.Common.Math.b2Vec2(b, c));
	  },
	  hasDrawingData: function () {
		return this.drawingData.hasOwnProperty("joints") && this.drawingData.joints.length && this.drawingData.lines.length ? !0 : !1;
	  },
	  clearDrawingData: function () {
		this.drawingData = {};
	  },
	  setDrawingData: function (b) {
		this.drawingData = b;
	  },
	  autoSolve: function (b) {
		b = this.levelProvider.getSolve(b);
		this.setDrawingData(b);
	  },
	  killAllEntities: function () {
		for (var b = 0; b < this.entities.length; b++) this.entities[b].kill();
	  },
	  setBox2DUpdate: function (b) {
		this.box2dPaused = !b;
	  },
	  restartBuildTime: function () {
		this.build.time.reset();
	  },
	  pauseBuildTime: function () {
		this.build.time.pause();
	  },
	  unpauseBuildTime: function () {
		this.build.time.unpause();
	  },
	  setBuildCost: function (b, c) {
		this.build.cost = b - c;
		this.build.provide = b;
		this.build.percentage = this.build.cost / this.build.provide;
	  },
	  getBuildCost: function () {
		return ig.copy(this.build);
	  },
	  getBuildTime: function () {
		var b = Math.round(this.build.time.delta()),
		  c = this.build.cost / ig.game.LINE.PRICE * ig.game.LINE.TIME;
		return {
		  spend: b,
		  max: c,
		  percentage: b / c
		};
	  },
	  onShowResult: function () {
		this.setUpdateMultiplier(1);
		this.setBox2DUpdate(!1);
		this.build.time.pause();
	  },
	  setUpdateMultiplier: function (b) {
		this.stepMultiplier = b;
	  },
	  getLevelsData: function () {
		return this.sessionData.levels;
	  },
	  unlockNextLevel: function () {
		this.level < this.TOTAL_LEVELS && (this.sessionData.levels[this.level + 1].unlocked = !0, ig.game.save("levels", this.sessionData.levels));
	  },
	  unlockAllLevels: function () {
		for (var b in this.sessionData.levels) this.sessionData.levels[b].unlocked = !0;
		this.director.jumpTo(LevelHome);
	  },
	  roundDecimal: function (b, c) {
		var d = 10 * c;
		return Math.round(b * d) / d;
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function () {
	ig.System && (ig.System.SCALE = {
	  CRISP: function (b, c) {
		c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
		b.style.imageRendering = "-moz-crisp-edges";
		b.style.imageRendering = "-o-crisp-edges";
		b.style.imageRendering = "-webkit-optimize-contrast";
		b.style.imageRendering = "crisp-edges";
		b.style.msInterpolationMode = "nearest-neighbor";
	  },
	  SMOOTH: function (b, c) {
		c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
		b.style.imageRendering = "";
		b.style.msInterpolationMode = "";
	  }
	}, ig.System.scaleMode = ig.System.SCALE.SMOOTH);
  });
  ig.baked = !0;
  ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function () {
	var b = !1;
	try {
	  b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length);
	} catch (c) {
	  b = !0;
	}
	ig.Input.inject({
	  keydown: function (c) {
		var e = c.target.tagName;
		if (!("INPUT" == e || "TEXTAREA" == e)) if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.handlers.dom-handler").defines(function () {
	ig.DomHandler = ig.Class.extend({
	  JQUERYAVAILABLE: !1,
	  init: function () {
		this.JQUERYAVAILABLE = this._jqueryAvailable();
	  },
	  _jqueryAvailable: function () {
		return "undefined" !== typeof jQuery;
	  },
	  addEvent: function (b, c, d, e) {
		if (this.JQUERYAVAILABLE) b.on(c, d);else b.addEventListener(c, d, e);
	  },
	  create: function (b) {
		return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b);
	  },
	  getElementByClass: function (b) {
		return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b);
	  },
	  getElementById: function (b) {
		return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b);
	  },
	  appendChild: function (b, c) {
		this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c);
	  },
	  appendToBody: function (b) {
		this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b);
	  },
	  resize: function (b, c, d) {
		if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));else {
		  var e = b.style.visibility;
		  c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
		  this.attr(b, "style", c);
		  b.style.visibility = e;
		}
	  },
	  resizeOffsetLeft: function (b, c, d, e) {
		if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);else {
		  var f = b.style.visibility;
		  c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
		  this.attr(b, "style", c);
		  b.style.visibility = f;
		}
	  },
	  resizeOffset: function (b, c, d, e, f) {
		if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e), b.css("top", f);else {
		  var j = b.style.visibility;
		  c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px; top: " + f.toFixed(2) + "px;";
		  this.attr(b, "style", c);
		  b.style.visibility = j;
		}
	  },
	  css: function (b, c) {
		if (this.JQUERYAVAILABLE) b.css(c);else {
		  var d = "",
			e;
		  for (e in c) d += e + ":" + c[e] + ";";
		  this.attr(b, "style", d);
		}
	  },
	  getOffsets: function (b) {
		return this.JQUERYAVAILABLE ? (b = b.offset(), {
		  left: b.left,
		  top: b.top
		}) : {
		  left: b.offsetLeft,
		  top: b.offsetTop
		};
	  },
	  attr: function (b, c, d) {
		if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
		this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d);
	  },
	  show: function (b) {
		this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"));
	  },
	  hide: function (b) {
		this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"));
	  },
	  getQueryVariable: function (b) {
		for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
		  var e = c[d].split("=");
		  if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]);
		}
	  },
	  forcedDeviceDetection: function () {
		var b = this.getQueryVariable("device");
		if (b) switch (b) {
		  case "mobile":
			console.log("serving mobile version ...");
			ig.ua.mobile = !0;
			break;
		  case "desktop":
			console.log("serving desktop version ...");
			ig.ua.mobile = !1;
			break;
		  default:
			console.log("serving universal version ...");
		} else console.log("serving universal version ...");
	  },
	  forcedDeviceRotation: function () {
		var b = this.getQueryVariable("force-rotate");
		if (b) switch (b) {
		  case "portrait":
			console.log("force rotate to portrait");
			window.orientation = 0;
			break;
		  case "landscape":
			console.log("force rotate to horizontal");
			window.orientation = 90;
			break;
		  default:
			alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0;
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.data.vector").defines(function () {
	Vector2 = function (b, c) {
	  this.x = b || 0;
	  this.y = c || 0;
	};
	Vector2.prototype = {
	  valType: "number",
	  neg: function () {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	  },
	  row: function (b) {
		typeof b === this.valType && (this.y = b);
		return this.y;
	  },
	  col: function (b) {
		typeof b === this.valType && (this.x = b);
		return this.x;
	  },
	  add: function (b) {
		b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
		return this;
	  },
	  sub: function (b) {
		b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -= b);
		return this;
	  },
	  mul: function (b) {
		b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
		return this;
	  },
	  div: function (b) {
		b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
		return this;
	  },
	  equals: function (b) {
		return this.x == b.x && this.y == b.y;
	  },
	  dot: function (b) {
		return this.x * b.x + this.y * b.y;
	  },
	  cross: function (b) {
		return this.x * b.y - this.y * b.x;
	  },
	  length: function () {
		return Math.sqrt(this.dot(this));
	  },
	  norm: function () {
		return this.divide(this.length());
	  },
	  min: function () {
		return Math.min(this.x, this.y);
	  },
	  max: function () {
		return Math.max(this.x, this.y);
	  },
	  toAngles: function () {
		return -Math.atan2(-this.y, this.x);
	  },
	  angleTo: function (b) {
		return Math.acos(this.dot(b) / (this.length() * b.length()));
	  },
	  toArray: function (b) {
		return [this.x, this.y].slice(0, b || 2);
	  },
	  clone: function () {
		return new Vector2(this.x, this.y);
	  },
	  set: function (b, c) {
		this.x = b;
		this.y = c;
		return this;
	  },
	  unit: function () {
		var b = this.length();
		if (0 < b) return new Vector2(this.x / b, this.y / b);
		throw "Divide by 0 error in unitVector function of vector:" + this;
	  },
	  turnRight: function () {
		var b = this.x;
		this.x = -this.y;
		this.y = b;
		return this;
	  },
	  turnLeft: function () {
		var b = this.x;
		this.x = this.y;
		this.y = -b;
		return this;
	  },
	  rotate: function (b) {
		var c = this.clone();
		this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
		this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
		return this;
	  }
	};
	Vector2.negative = function (b) {
	  return new Vector2(-b.x, -b.y);
	};
	Vector2.add = function (b, c) {
	  return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v);
	};
	Vector2.subtract = function (b, c) {
	  return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) : new Vector2(b.x - v, b.y - v);
	};
	Vector2.multiply = function (b, c) {
	  return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v);
	};
	Vector2.divide = function (b, c) {
	  return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v);
	};
	Vector2.equals = function (b, c) {
	  return b.x == c.x && b.y == c.y;
	};
	Vector2.dot = function (b, c) {
	  return b.x * c.x + b.y * c.y;
	};
	Vector2.cross = function (b, c) {
	  return b.x * c.y - b.y * c.x;
	};
  });
  ig.baked = !0;
  ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function () {
	ig.SizeHandler = ig.Class.extend({
	  portraitMode: !1,
	  disableStretchToFitOnMobileFlag: !1,
	  enableStretchToFitOnAntiPortraitModeFlag: !0,
	  enableScalingLimitsOnMobileFlag: !1,
	  minScalingOnMobile: 0,
	  maxScalingOnMobile: 1,
	  enableStretchToFitOnDesktopFlag: !1,
	  enableScalingLimitsOnDesktopFlag: !1,
	  minScalingOnDesktop: 0,
	  maxScalingOnDesktop: 1,
	  desktop: {
		actualSize: new Vector2(window.innerWidth, window.innerHeight),
		actualResolution: new Vector2(960, 540)
	  },
	  mobile: {
		actualSize: new Vector2(window.innerWidth, window.innerHeight),
		actualResolution: new Vector2(960, 540)
	  },
	  windowSize: new Vector2(window.innerWidth, window.innerHeight),
	  scaleRatioMultiplier: new Vector2(1, 1),
	  sizeRatio: new Vector2(1, 1),
	  scale: 1,
	  domHandler: null,
	  dynamicClickableEntityDivs: {},
	  coreDivsToResize: ["#canvas", "#play", "#orientate"],
	  adsToResize: {
		MobileAdInGamePreroll: {
		  "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd: {
		  "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		},
		MobileAdInGamePreroll2: {
		  "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd2: {
		  "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		},
		MobileAdInGamePreroll3: {
		  "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd3: {
		  "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
		  "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		}
	  },
	  init: function (b) {
		this.domHandler = b;
		if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
		this.sizeCalcs();
		this.eventListenerSetup();
		this.samsungFix();
	  },
	  sizeCalcs: function () {
		this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
		if (ig.ua.mobile) {
		  this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
		  var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
		  this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
		  if (this.disableStretchToFitOnMobileFlag) {
			var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
			this.enableScalingLimitsOnMobileFlag && (c > this.maxScalingOnMobile && (c = this.maxScalingOnMobile), c < this.maxScalingOnMobile && (c = this.maxScalingOnMobile));
			this.mobile.actualSize.x = b.x * c;
			this.mobile.actualSize.y = b.y * c;
			this.scaleRatioMultiplier.x = c;
			this.scaleRatioMultiplier.y = c;
		  } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1;
		} else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (c > this.maxScalingOnDesktop && (c = this.maxScalingOnDesktop), c < this.minScalingOnDesktop && (c = this.minScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c);
	  },
	  resizeLayers: function () {
		for (var b = 0; b < this.coreDivsToResize.length; b++) {
		  var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
		  if (ig.ua.mobile) {
			if (this.disableStretchToFitOnMobileFlag) {
			  var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
				e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.mobile.actualSize.y / 2);
			  0 > d && (d = 0);
			  0 > e && (e = 0);
			  ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
			  var f = !1;
			  if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);else {
				var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
				  d = Math.min(f.x, f.y),
				  f = this.mobile.actualResolution.y * d,
				  j = this.mobile.actualResolution.x * d,
				  d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
				  e = Math.floor(ig.sizeHandler.windowSize.y / 2 - j / 2);
				0 > d && (d = 0);
				0 > e && (e = 0);
				ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(j), d, e);
			  }
			} else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
		  } else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), d, e));
		}
		for (var n in this.adsToResize) b = ig.domHandler.getElementById("#" + n), c = ig.domHandler.getElementById("#" + n + "-Box"), f = (window.innerWidth - this.adsToResize[n]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[n]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
		  width: window.innerWidth,
		  height: window.innerHeight
		}), c && ig.domHandler.css(c, {
		  left: f,
		  top: d
		});
		for (n in this.dynamicClickableEntityDivs) {
		  b = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
		  c = ig.domHandler.getElementById("#" + n);
		  if (ig.ua.mobile) var m = this.dynamicClickableEntityDivs[n].entity_pos_x,
			j = this.dynamicClickableEntityDivs[n].entity_pos_y,
			d = this.dynamicClickableEntityDivs[n].width,
			f = this.dynamicClickableEntityDivs[n].height,
			e = Math.floor(m * this.scaleRatioMultiplier.x) + "px",
			j = Math.floor(j * this.scaleRatioMultiplier.y) + "px",
			d = Math.floor(d * this.scaleRatioMultiplier.x) + "px",
			f = Math.floor(f * this.scaleRatioMultiplier.y) + "px";else var f = ig.domHandler.getElementById("#canvas"),
			f = ig.domHandler.getOffsets(f),
			e = f.left,
			g = f.top,
			m = this.dynamicClickableEntityDivs[n].entity_pos_x,
			j = this.dynamicClickableEntityDivs[n].entity_pos_y,
			d = this.dynamicClickableEntityDivs[n].width,
			f = this.dynamicClickableEntityDivs[n].height,
			e = Math.floor(e + m * b) + "px",
			j = Math.floor(g + j * b) + "px",
			d = Math.floor(d * b) + "px",
			f = Math.floor(f * b) + "px";
		  ig.domHandler.css(c, {
			"float": "left",
			position: "absolute",
			left: e,
			top: j,
			width: d,
			height: f,
			"z-index": 3
		  });
		  this.dynamicClickableEntityDivs[n]["font-size"] && ig.domHandler.css(c, {
			"font-size": this.dynamicClickableEntityDivs[n]["font-size"] * b + "px"
		  });
		}
	  },
	  resize: function () {
		this.sizeCalcs();
		this.resizeLayers();
	  },
	  reorient: function () {
		console.log("Changing orientation ...");
		if (ig.ua.mobile) {
		  var b = !1,
			b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
			c = this.domHandler.getElementById("#orientate"),
			d = this.domHandler.getElementById("#game");
		  b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c));
		}
		ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize();
	  },
	  resizeAds: function () {
		for (var b in this.adsToResize) {
		  var c = ig.domHandler.getElementById("#" + b),
			d = ig.domHandler.getElementById("#" + b + "-Box"),
			e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
			f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
		  c && ig.domHandler.css(c, {
			width: window.innerWidth,
			height: window.innerHeight
		  });
		  d && ig.domHandler.css(d, {
			left: e,
			top: f
		  });
		}
	  },
	  samsungFix: function () {
		ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox")) && (document.addEventListener("touchstart", function (b) {
		  b.preventDefault();
		  return !1;
		}, !1), document.addEventListener("touchmove", function (b) {
		  b.preventDefault();
		  return !1;
		}, !1), document.addEventListener("touchend", function (b) {
		  b.preventDefault();
		  return !1;
		}, !1));
	  },
	  orientationInterval: null,
	  orientationTimeout: null,
	  orientationHandler: function () {
		this.reorient();
		window.scrollTo(0, 1);
	  },
	  orientationDelayHandler: function () {
		null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
		null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function () {
		  this.clearAllIntervals();
		}.bind(this), 2E3));
	  },
	  clearAllIntervals: function () {
		window.clearInterval(this.orientationInterval);
		this.orientationInterval = null;
		window.clearTimeout(this.orientationTimeout);
		this.orientationTimeout = null;
	  },
	  eventListenerSetup: function () {
		ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
		document.ontouchmove = function (b) {
		  window.scrollTo(0, 1);
		  b.preventDefault();
		};
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.handlers.api-handler").defines(function () {
	ig.ApiHandler = ig.Class.extend({
	  apiAvailable: {
		MJSPreroll: function () {
		  ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
		},
		MJSHeader: function () {
		  ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize();
		},
		MJSFooter: function () {
		  ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
		},
		MJSEnd: function () {
		  ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize();
		}
	  },
	  run: function (b, c) {
		if (this.apiAvailable[b]) this.apiAvailable[b](c);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.sound-player").defines(function () {
	SoundPlayer = ig.Class.extend({
	  tagName: "SoundPlayer",
	  stayMuteFlag: !1,
	  debug: !1,
	  init: function () {
		this.debug && console.log(this.tagName);
	  },
	  play: function (b) {
		this.debug && console.log("play sound ", b);
	  },
	  stop: function () {
		this.debug && console.log("stop sound ");
	  },
	  volume: function () {
		this.debug && console.log("set volume");
	  },
	  mute: function (b) {
		this.debug && console.log("mute");
		"undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0);
	  },
	  unmute: function (b) {
		this.debug && console.log("unmute");
		"undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function () {
	ImpactMusicPlayer = SoundPlayer.extend({
	  tagName: "ImpactMusicPlayer",
	  bgmPlaying: !1,
	  soundList: {},
	  init: function (b, c) {
		this.parent(b, c);
		for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
		c && c.loop && (ig.music.loop = c.loop);
	  },
	  play: function (b) {
		this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play());
	  },
	  stop: function () {
		this.bgmPlaying = !1;
		ig.music.pause();
	  },
	  volume: function (b) {
		console.log("impactmusic:", b);
		ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
	  },
	  getVolume: function () {
		return ig.music.volume;
	  },
	  mute: function (b) {
		this.parent(b);
		this.bgmPlaying && this.stop();
	  },
	  unmute: function (b) {
		this.parent(b);
		this.play();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function () {
	ImpactSoundPlayer = SoundPlayer.extend({
	  tagName: "ImpactSoundPlayer",
	  soundList: {},
	  init: function (b, c) {
		this.parent(b, c);
		for (var d in b) {
		  var e = new ig.Sound(b[d].path + ".*");
		  this.soundList[d] = e;
		}
	  },
	  play: function (b) {
		this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play());
	  },
	  stop: function (b) {
		this.parent(b);
		b.stop();
	  },
	  volume: function (b) {
		ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
	  },
	  getVolume: function () {
		return ig.soundManager.volume;
	  },
	  mute: function (b) {
		this.parent(b);
		ig.Sound.enabled = !1;
	  },
	  unmute: function (b) {
		this.parent(b);
		ig.Sound.enabled = !0;
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function () {
	HowlerPlayer = SoundPlayer.extend({
	  tagName: "HowlerPlayer",
	  soundList: {},
	  init: function (b, c) {
		this.parent(b, c);
		for (var d in b) {
		  var e = b[d].path,
			e = new Howl({
			  src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
			});
		  this.soundList[d] = e;
		}
	  },
	  play: function (b) {
		this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play());
	  },
	  stop: function (b) {
		this.parent(b);
		"object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop();
	  },
	  volume: function (b) {
		for (var c in this.soundList) {
		  if (0 > b) {
			this.soundList[c].volume(0);
			break;
		  }
		  isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b);
		}
	  },
	  getVolume: function () {
		for (var b in this.soundList) return this.soundList[b].volume();
	  },
	  mute: function (b) {
		this.parent(b);
		Howler.mute(!0);
	  },
	  unmute: function (b) {
		this.parent(b);
		Howler.mute(!1);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function () {
	HowlerMusicPlayer = SoundPlayer.extend({
	  tagName: "HowlerMusicPlayer",
	  bgmPlaying: !1,
	  soundList: {},
	  init: function (b, c) {
		this.parent(b, c);
		for (var d in b) {
		  var e = b[d].path,
			e = new Howl({
			  src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
			  loop: !0,
			  autoplay: !1,
			  onend: function () {}.bind(this)
			});
		  this.soundList[d] = e;
		}
	  },
	  play: function (b) {
		if (!this.stayMuteFlag && !this.bgmPlaying) if ("object" === typeof b) this.bgmPlaying = !0, b.play();else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();else for (var c in this.soundList) {
		  this.soundList[c].play();
		  this.bgmPlaying = !0;
		  break;
		}
	  },
	  stop: function (b) {
		this.parent(b);
		if (this.bgmPlaying) {
		  for (var c in this.soundList) this.soundList[c].stop();
		  this.bgmPlaying = !1;
		}
	  },
	  volume: function (b) {
		console.log("howler", b);
		for (var c in this.soundList) {
		  if (0 > b) {
			this.soundList[c].volume(0);
			break;
		  }
		  isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b);
		}
	  },
	  getVolume: function () {
		for (var b in this.soundList) return this.soundList[b].volume();
	  },
	  mute: function (b) {
		this.parent(b);
		Howler.mute(!0);
	  },
	  unmute: function (b) {
		this.parent(b);
		Howler.mute(!1);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function () {
	JukeboxPlayer = SoundPlayer.extend({
	  tagName: "JukeboxPlayer",
	  bgmPlaying: !1,
	  soundList: {},
	  jukeboxPlayer: null,
	  pausePosition: 0,
	  premuteVolume: 0,
	  minVolume: 0.001,
	  init: function (b, c) {
		this.parent(b, c);
		for (var d in b) {
		  this.soundList[d] = d;
		  var e = b[d].path;
		  this.jukeboxPlayer = new jukebox.Player({
			resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
			autoplay: !1,
			spritemap: {
			  music: {
				start: b[d].startMp3,
				end: b[d].endMp3,
				loop: !0
			  }
			}
		  });
		}
	  },
	  play: function () {
		this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume());
	  },
	  stop: function () {
		this.bgmPlaying = !1;
		this.pausePosition = this.jukeboxPlayer.pause();
	  },
	  volume: function (b) {
		console.log("jukebox:", b);
		0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b);
	  },
	  getVolume: function () {
		return this.jukeboxPlayer.getVolume();
	  },
	  mute: function (b) {
		this.parent(b);
		this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume));
	  },
	  unmute: function (b) {
		this.parent(b);
		this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume());
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function () {
	WebaudioMusicPlayer = SoundPlayer.extend({
	  tagName: "WebaudioMusicPlayer",
	  bgmPlaying: !1,
	  isSupported: !1,
	  muteFlag: !1,
	  pausedTime: 0,
	  webaudio: null,
	  useHTML5Audio: !1,
	  audio: null,
	  inactiveAudio: null,
	  codecs: null,
	  reinitOnPlay: !1,
	  inputList: null,
	  _volume: 1,
	  soundList: {},
	  init: function (b) {
		this.webaudio = {
		  compatibility: {},
		  gainNode: null,
		  buffer: null,
		  source_loop: {},
		  source_once: {}
		};
		try {
		  Howler && Howler.ctx ? this.webaudio.context = Howler.ctx : ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext(), ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0;
		} catch (c) {
		  console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0;
		}
		if (this.useHTML5Audio) if ("undefined" !== typeof Audio) try {
		  new Audio();
		} catch (d) {
		  this.useHTML5Audio = !1;
		} else this.useHTML5Audio = !1;
		this.useHTML5Audio && (this.audio = new Audio(), this.isSupported = !0, this.initHTML5Audio(b));
		if (!this.isSupported) return null;
		this.webaudio && (this.inputList = b, this.initWebAudio(b));
	  },
	  initWebAudio: function (b) {
		ig.ua.iOS && this.initIOSWebAudioUnlock();
		this.webaudio.gainNode = this.webaudio.context.createGain();
		this.webaudio.gainNode.connect(this.webaudio.context.destination);
		this.webaudio.gainNode.gain.value = this._volume;
		this.webaudio.buffer = null;
		var c = "start",
		  d = "stop",
		  e = this.webaudio.context.createBufferSource();
		"function" !== typeof e.start && (c = "noteOn");
		this.webaudio.compatibility.start = c;
		"function" !== typeof e.stop && (d = "noteOff");
		this.webaudio.compatibility.stop = d;
		for (var f in b) {
		  this.soundList[f] = f;
		  var d = b[f].path,
			c = d + "." + ig.Sound.FORMAT.MP3.ext,
			j = d + "." + ig.Sound.FORMAT.OGG.ext;
		  ig.ua.mobile ? ig.ua.iOS && (j = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (j = c), d.indexOf("win64") && (j = c));
		  var n = new XMLHttpRequest();
		  n.open("GET", j, !0);
		  n.responseType = "arraybuffer";
		  n.onload = function () {
			this.webaudio.context.decodeAudioData(n.response, function (b) {
			  this.webaudio.buffer = b;
			  this.webaudio.source_loop = {};
			  this.bgmPlaying ? this.play(null, !0) : this.stop();
			}.bind(this), function () {
			  console.log("Error decoding audio \"" + j + "\".");
			});
		  }.bind(this);
		  n.send();
		  if (4 == n.readyState && "undefined" !== typeof Audio) {
			this.useHTML5Audio = !0;
			try {
			  new Audio();
			} catch (m) {
			  this.useHTML5Audio = !1;
			}
			this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio(), this.isSupported = !0, this.initHTML5Audio(b));
		  }
		  break;
		}
	  },
	  initIOSWebAudioUnlock: function () {
		if (this.webaudio) {
		  webaudio = this.webaudio;
		  var b = function () {
			var c = webaudio.context,
			  d = c.createBuffer(1, 1, 22050),
			  e = c.createBufferSource();
			e.buffer = d;
			e.connect(c.destination);
			"undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
			setTimeout(function () {
			  (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1);
			}.bind(this), 0);
		  };
		  window.addEventListener("touchend", b, !1);
		}
	  },
	  initHTML5Audio: function (b) {
		if (this.useHTML5Audio && this.audio) {
		  var c = this.audio;
		  this.codecs = {};
		  this.codecs = {
			mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
			opus: !!c.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
			ogg: !!c.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
			wav: !!c.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ""),
			aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
			m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
			mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
			weba: !!c.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, "")
		  };
		  this.is = {
			ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
			ie: Boolean(document.all && !window.opera),
			opera: Boolean(window.opera),
			chrome: Boolean(window.chrome),
			safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
		  };
		  this.playDelay = -60;
		  this.stopDelay = 30;
		  this.is.chrome && (this.playDelay = -25);
		  this.is.chrome && (this.stopDelay = 25);
		  this.is.ff && (this.playDelay = -25);
		  this.is.ff && (this.stopDelay = 85);
		  this.is.opera && (this.playDelay = 5);
		  this.is.opera && (this.stopDelay = 0);
		  for (var d in b) {
			this.soundList[d] = d;
			var e = b[d].path,
			  c = e + "." + ig.Sound.FORMAT.OGG.ext,
			  e = e + "." + ig.Sound.FORMAT.MP3.ext,
			  f = null;
			this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
			if (f) {
			  ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
			  this.audio.addEventListener("error", function () {
				this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1);
			  }, !1);
			  this.audio.src = f;
			  this.audio._pos = 0;
			  this.audio.preload = "auto";
			  this.audio.volume = this._volume;
			  this.inactiveAudio = new Audio();
			  this.inactiveAudio.src = f;
			  this.inactiveAudio._pos = 0;
			  this.inactiveAudio.preload = "auto";
			  this.inactiveAudio.volume = this._volume;
			  this.inactiveAudio.load();
			  var j = function () {
				this._duration = this.audio.duration;
				this._loaded || (this._loaded = !0);
				this.bgmPlaying ? this.play(null, !0) : this.stop();
				this.audio.removeEventListener("canplaythrough", j, !1);
			  }.bind(this);
			  this.audio.addEventListener("canplaythrough", j, !1);
			  this.audio.load();
			  break;
			}
		  }
		}
	  },
	  play: function (b, c) {
		if (this.isSupported) if (this.bgmPlaying = !0, this.webaudio) {
		  if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
			if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
			try {
			  this.webaudio.context.close();
			  this.webaudio.context = new this.AudioContext();
			  this.webaudio.gainNode = this.webaudio.context.createGain();
			  this.webaudio.gainNode.connect(this.webaudio.context.destination);
			  this.webaudio.gainNode.gain.value = this._volume;
			  var d = "start",
				e = "stop",
				f = this.webaudio.context.createBufferSource();
			  "function" !== typeof f.start && (d = "noteOn");
			  this.webaudio.compatibility.start = d;
			  "function" !== typeof f.stop && (e = "noteOff");
			  this.webaudio.compatibility.stop = e;
			  this.webaudio.source_loop = {};
			  this.play(null, !0);
			} catch (j) {}
		  }
		  if (this.webaudio.buffer) {
			if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
			  this.webaudio.source_loop = this.webaudio.context.createBufferSource();
			  this.webaudio.source_loop.buffer = this.webaudio.buffer;
			  this.webaudio.source_loop.loop = !0;
			  this.webaudio.source_loop.connect(this.webaudio.gainNode);
			  if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
			  this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
			  if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
			  this.webaudio.source_loop._playing = !0;
			}
		  } else this.bgmPlaying = !0;
		} else if (this.audio) {
		  var n = this.audio;
		  if (!this.muteFlag) if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function () {
			this.audio.currentTime = 0;
			this.audio.pause();
			this.pausedTime = 0;
			if (this.inactiveAudio) {
			  var b = this.audio;
			  this.audio = this.inactiveAudio;
			  this.inactiveAudio = b;
			}
			this.play();
		  }.bind(this), 1E3 * d + this.playDelay), 4 === n.readyState || !n.readyState && navigator.isCocoonJS) n.readyState = 4, n.currentTime = b, n.muted = this.muteFlag || n.muted, n.volume = this._volume, setTimeout(function () {
			n.play();
		  }, 0);else {
			clearTimeout(this._onEndTimer);
			this._onEndTimer = null;
			var m = function () {
			  typeof ("function" == this.play) && (this.play(), n.removeEventListener("canplaythrough", m, !1));
			}.bind(this);
			n.addEventListener("canplaythrough", m, !1);
		  }
		}
	  },
	  stop: function () {
		this.bgmPlaying = !1;
		if (this.isSupported) if (this.webaudio) {
		  if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
		} else if (this.audio) {
		  var b = this.audio;
		  4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null);
		}
	  },
	  volume: function (b) {
		if (isNaN(b) || null == b) return this.getVolume();
		this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)));
	  },
	  getVolume: function () {
		return !this.isSupported ? 0 : this._volume;
	  },
	  mute: function (b) {
		this.parent(b);
		!1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0));
	  },
	  unmute: function (b) {
		this.parent(b);
		!this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play());
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.sound-info").defines(function () {
	SoundInfo = ig.Class.extend({
	  FORMATS: {
		OGG: ".ogg",
		MP3: ".mp3"
	  },
	  sfx: {
		kittyopeningSound: {
		  path: "media/audio/opening/kittyopening"
		},
		staticSound: {
		  path: "media/audio/play/static"
		},
		openingSound: {
		  path: "media/audio/opening/opening"
		},
		button: {
		  path: "media/audio/button"
		},
		carRun: {
		  path: "media/audio/car-run"
		},
		build: {
		  path: "media/audio/build"
		},
		destroy: {
		  path: "media/audio/destroy"
		},
		"break": {
		  path: "media/audio/break"
		},
		success: {
		  path: "media/audio/success"
		},
		fail: {
		  path: "media/audio/fail"
		},
		star: {
		  path: "media/audio/star"
		}
	  },
	  bgm: {
		background: {
		  path: "media/audio/bgm",
		  startOgg: 0,
		  endOgg: 15.978,
		  startMp3: 0,
		  endMp3: 15.978
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function () {
	ig.SoundHandler = ig.Class.extend({
	  bgmPlayer: null,
	  sfxPlayer: null,
	  focusBlurMute: !1,
	  soundInfo: new SoundInfo(),
	  init: function () {
		console.log("Initiating sound handler");
		this.initWindowHandler();
		ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
		  loop: !0
		}), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
		  loop: !0
		}))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
		  loop: !0
		}), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
		  loop: !0
		})));
		this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx);
	  },
	  checkBGM: function () {
		return this.bgmPlayer.stayMuteFlag;
	  },
	  checkSFX: function () {
		return this.sfxPlayer.stayMuteFlag;
	  },
	  muteSFX: function (b) {
		this.sfxPlayer && this.sfxPlayer.mute(b);
	  },
	  muteBGM: function (b) {
		this.bgmPlayer && this.bgmPlayer.mute(b);
	  },
	  unmuteSFX: function (b) {
		this.sfxPlayer && this.sfxPlayer.unmute(b);
	  },
	  unmuteBGM: function (b) {
		this.bgmPlayer && this.bgmPlayer.unmute(b);
	  },
	  muteAll: function (b) {
		this.muteSFX(b);
		this.muteBGM(b);
	  },
	  unmuteAll: function (b) {
		this.unmuteSFX(b);
		this.unmuteBGM(b);
	  },
	  forceMuteAll: function () {
		this.focusBlurMute || this.muteAll(!1);
		this.focusBlurMute = !0;
	  },
	  forceUnMuteAll: function () {
		this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1);
	  },
	  initWindowHandler: function () {
		"true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function () {
		  ig.soundHandler && ig.soundHandler.forceUnMuteAll();
		}), $(window).blur(function () {
		  ig.soundHandler && ig.soundHandler.forceMuteAll();
		})) : (window.onfocus = function () {
		  ig.soundHandler && ig.soundHandler.forceUnMuteAll();
		}, window.onblur = function () {
		  ig.soundHandler && ig.soundHandler.forceMuteAll();
		});
	  },
	  initPowerButtonFix: function () {
		var b = this.getHiddenProp();
		b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
		window.addEventListener("pagehide", function () {
		  ig.soundHandler && ig.soundHandler.forceMuteAll();
		}, !1);
		window.addEventListener("pageshow", function () {
		  ig.soundHandler && ig.soundHandler.forceUnMuteAll();
		}, !1);
	  },
	  getHiddenProp: function () {
		var b = ["webkit", "moz", "ms", "o"];
		if ("hidden" in document) return "hidden";
		for (var c = 0; c < b.length; c++) if (b[c] + "Hidden" in document) return b[c] + "Hidden";
		return null;
	  },
	  isHidden: function () {
		var b = this.getHiddenProp();
		return !b ? !1 : document[b];
	  },
	  visChange: function () {
		ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll();
	  },
	  saveVolume: function () {
		this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
		this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume());
	  },
	  forceLoopBGM: function () {
		var b;
		if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
		  var c = this.bgmPlayer.jukeboxPlayer;
		  if (c) {
			null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
			b = Boolean(window.chrome);
			!window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
			var d = 0.1;
			ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
			c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function () {
			  ig.soundHandler.forcelooped = !1;
			}, d)) : c.setCurrentTime(b)));
		  } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function () {
			ig.soundHandler.forcelooped = !1;
		  }, d)) : ig.music.currentTrack.currentTime = c)));
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.storage").defines(function () {
	ig.Storage = ig.Class.extend({
	  staticInstantiate: function () {
		return !ig.Storage.instance ? null : ig.Storage.instance;
	  },
	  init: function () {
		ig.Storage.instance = this;
	  },
	  isCapable: function () {
		return "undefined" !== typeof window.localStorage;
	  },
	  isSet: function (b) {
		return null !== this.get(b);
	  },
	  initUnset: function (b, c) {
		null === this.get(b) && this.set(b, c);
	  },
	  get: function (b) {
		if (!this.isCapable()) return null;
		try {
		  return JSON.parse(localStorage.getItem(b));
		} catch (c) {
		  return window.localStorage.getItem(b);
		}
	  },
	  getInt: function (b) {
		return ~~this.get(b);
	  },
	  getFloat: function (b) {
		return parseFloat(this.get(b));
	  },
	  getBool: function (b) {
		return !!this.get(b);
	  },
	  key: function (b) {
		return this.isCapable() ? window.localStorage.key(b) : null;
	  },
	  set: function (b, c) {
		if (!this.isCapable()) return null;
		try {
		  window.localStorage.setItem(b, JSON.stringify(c));
		} catch (d) {
		  console.log(d);
		}
	  },
	  setHighest: function (b, c) {
		c > this.getFloat(b) && this.set(b, c);
	  },
	  remove: function (b) {
		if (!this.isCapable()) return null;
		window.localStorage.removeItem(b);
	  },
	  clear: function () {
		if (!this.isCapable()) return null;
		window.localStorage.clear();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.mouse").defines(function () {
	Mouse = ig.Class.extend({
	  bindings: {
		click: [ig.KEY.MOUSE1]
	  },
	  init: function () {
		ig.input.initMouse();
		for (var b in this.bindings) {
		  this[b] = b;
		  for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b);
		}
	  },
	  getPos: function () {
		if (ig.ua.mobile) {
		  var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
			c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
		  return new Vector2(b / ig.sizeHandler.scaleRatioMultiplier.x, c / ig.sizeHandler.scaleRatioMultiplier.y);
		}
		b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x;
		c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
		return new Vector2(b, c);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.keyboard").defines(function () {
	Keyboard = ig.Class.extend({
	  bindings: {
		jump: [ig.KEY.W, ig.KEY.UP_ARROW],
		moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
		moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
		shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
	  },
	  init: function () {
		for (var b in this.bindings) {
		  this[b] = b;
		  for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b);
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.gamepad-input").defines(function () {
	ig.PADKEY = {
	  BUTTON_0: 0,
	  PADBUTTON_1: 1,
	  BUTTON_2: 2,
	  BUTTON_3: 3,
	  BUTTON_LEFT_BUMPER: 4,
	  BUTTON_RIGHT_BUMPER: 5,
	  BUTTON_LEFT_TRIGGER: 6,
	  BUTTON_RIGHT_TRIGGER: 7,
	  BUTTON_LEFT_JOYSTICK: 10,
	  BUTTON_RIGHT_JOYSTICK: 11,
	  BUTTON_DPAD_UP: 12,
	  BUTTON_DPAD_DOWN: 13,
	  BUTTON_DPAD_LEFT: 14,
	  BUTTON_DPAD_RIGHT: 15,
	  BUTTON_MENU: 16,
	  AXIS_LEFT_JOYSTICK_X: 0,
	  AXIS_LEFT_JOYSTICK_Y: 1,
	  AXIS_RIGHT_JOYSTICK_X: 2,
	  AXIS_RIGHT_JOYSTICK_Y: 3
	};
	ig.GamepadInput = ig.Class.extend({
	  isInit: !1,
	  isSupported: !1,
	  list: [],
	  bindings: {},
	  states: {},
	  presses: {},
	  releases: {},
	  downLocks: {},
	  upLocks: {},
	  leftStick: {
		x: 0,
		y: 0
	  },
	  rightStick: {
		x: 0,
		y: 0
	  },
	  start: function () {
		if (!this.isInit) {
		  this.isInit = !0;
		  var b = navigator.getGamepads || navigator.webkitGetGamepads;
		  b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
		  this.isSupported = b;
		}
	  },
	  isAvailable: function () {
		return this.isInit && this.isSupported;
	  },
	  buttonPressed: function (b) {
		return "object" == typeof b ? b.pressed : 1 == b;
	  },
	  buttonDown: function (b) {
		if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0);
	  },
	  buttonUp: function (b) {
		if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0;
	  },
	  clearPressed: function () {
		for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
		this.releases = {};
		this.presses = {};
		this.upLocks = {};
	  },
	  bind: function (b, c) {
		this.bindings[b] = c;
	  },
	  unbind: function (b) {
		this.releases[this.bindings[b]] = !0;
		this.bindings[b] = null;
	  },
	  unbindAll: function () {
		this.bindings = {};
		this.states = {};
		this.presses = {};
		this.releases = {};
		this.downLocks = {};
		this.upLocks = {};
	  },
	  state: function (b) {
		return this.states[b];
	  },
	  pressed: function (b) {
		return this.presses[b];
	  },
	  released: function (b) {
		return this.releases[b];
	  },
	  clamp: function (b, c, d) {
		return b < c ? c : b > d ? d : b;
	  },
	  pollGamepads: function () {
		if (this.isSupported) {
		  this.leftStick.x = 0;
		  this.leftStick.y = 0;
		  this.rightStick.x = 0;
		  this.rightStick.y = 0;
		  this.list = navigator.getGamepads();
		  for (var b in this.bindings) {
			for (var c = !1, d = 0; d < this.list.length; d++) {
			  var e = this.list[d];
			  if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
				c = !0;
				break;
			  }
			}
			c ? this.buttonDown(b) : this.buttonUp(b);
		  }
		  for (d = 0; d < this.list.length; d++) if ((e = this.list[d]) && e.axes) {
			b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
			var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
			  f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
			  e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
			this.leftStick.x += isNaN(b) ? 0 : b;
			this.leftStick.y += isNaN(c) ? 0 : c;
			this.rightStick.x += isNaN(f) ? 0 : f;
			this.rightStick.y += isNaN(e) ? 0 : e;
		  }
		  0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1));
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function () {
	Gamepad = ig.Class.extend({
	  bindings: {
		padJump: [ig.PADKEY.BUTTON_0]
	  },
	  init: function () {
		ig.gamepadInput.start();
		for (var b in this.bindings) for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b);
	  },
	  press: function () {},
	  held: function () {},
	  release: function () {}
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.multitouch").defines(function () {
	Multitouch = ig.Class.extend({
	  init: function () {
		ig.multitouchInput.start();
	  },
	  getTouchesPos: function () {
		if (ig.ua.mobile) {
		  if (0 < ig.multitouchInput.touches.length) {
			for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
			  var d = ig.multitouchInput.touches[c];
			  b.push({
				x: d.x,
				y: d.y
			  });
			}
			return b;
		  }
		  return null;
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.multitouch-input").defines(function () {
	ig.MultitouchInput = ig.Class.extend({
	  isStart: !1,
	  touches: [],
	  multitouchCapable: !1,
	  lastEventUp: null,
	  start: function () {
		this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)));
	  },
	  touchmove: function (b) {
		if (ig.ua.touchDevice) {
		  var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
			d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
			c = ig.system.scale * (c / ig.system.realWidth),
			d = ig.system.scale * (d / ig.system.realHeight);
		  if (b.touches) {
			for (; 0 < this.touches.length;) this.touches.pop();
			!this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
			var e = {
			  left: 0,
			  top: 0
			};
			ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
			for (var f = 0; f < b.touches.length; f++) {
			  var j = b.touches[f];
			  j && this.touches.push({
				x: (j.clientX - e.left) / c,
				y: (j.clientY - e.top) / d
			  });
			}
		  } else this.windowMove(b);
		}
	  },
	  touchdown: function (b) {
		var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
		  d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
		  c = ig.system.scale * (c / ig.system.realWidth),
		  d = ig.system.scale * (d / ig.system.realHeight);
		if (window.navigator.msPointerEnabled) this.windowKeyDown(b);else if (ig.ua.touchDevice && b.touches) {
		  for (; 0 < this.touches.length;) this.touches.pop();
		  !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
		  var e = {
			left: 0,
			top: 0
		  };
		  ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
		  for (var f = 0; f < b.touches.length; f++) {
			var j = b.touches[f];
			j && this.touches.push({
			  x: (j.clientX - e.left) / c,
			  y: (j.clientY - e.top) / d
			});
		  }
		}
	  },
	  touchup: function (b) {
		var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
		parseInt(ig.system.canvas.offsetHeight);
		c = ig.system.scale * (c / ig.system.realWidth);
		if (window.navigator.msPointerEnabled) this.windowKeyUp(b);else {
		  this.lastEventUp = b;
		  var d = {
			left: 0,
			top: 0
		  };
		  ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
		  if (ig.ua.touchDevice) {
			b = (b.changedTouches[0].clientX - d.left) / c;
			for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1);
		  }
		}
	  },
	  windowKeyDown: function (b) {
		var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
		  d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
		  c = ig.system.scale * (c / ig.system.realWidth),
		  d = ig.system.scale * (d / ig.system.realHeight);
		if (window.navigator.msPointerEnabled) {
		  var e = {
			left: 0,
			top: 0
		  };
		  ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
		  b = b.changedTouches ? b.changedTouches : [b];
		  for (var f = 0; f < b.length; ++f) {
			for (var j = b[f], n = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, m = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == n && this.touches.splice(g, 1);
			this.touches.push({
			  x: m,
			  y: j,
			  identifier: n
			});
		  }
		  for (c = 0; c < this.touches.length; c++);
		}
	  },
	  windowKeyUp: function (b) {
		b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1;
		for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
		for (; 0 < this.touches.length;) this.touches.pop();
	  },
	  windowMove: function (b) {
		var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
		  d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
		  c = ig.system.scale * (c / ig.system.realWidth),
		  d = ig.system.scale * (d / ig.system.realHeight),
		  e = {
			left: 0,
			top: 0
		  };
		ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
		if (window.navigator.msPointerEnabled) for (var f = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j) if (this.touches[j].identifier == f) {
		  var n = (b.clientY - e.top) / d;
		  this.touches[j].x = (b.clientX - e.left) / c;
		  this.touches[j].y = n;
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.fake-storage").requires("impact.game").defines(function () {
	ig.FakeStorage = ig.Class.extend({
	  tempData: {},
	  init: function () {
		ig.FakeStorage.instance = this;
	  },
	  initUnset: function (b, c) {
		null === this.get(b) && this.set(b, c);
	  },
	  set: function (b, c) {
		this.tempData[b] = JSON.stringify(c);
	  },
	  setHighest: function (b, c) {
		c > this.getFloat(b) && this.set(b, c);
	  },
	  get: function (b) {
		return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b]);
	  },
	  getInt: function (b) {
		return ~~this.get(b);
	  },
	  getFloat: function (b) {
		return parseFloat(this.get(b));
	  },
	  getBool: function (b) {
		return !!this.get(b);
	  },
	  isSet: function (b) {
		return null !== this.get(b);
	  },
	  remove: function (b) {
		delete this.tempData[b];
	  },
	  clear: function () {
		this.tempData = {};
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function () {
	IoManager = ig.Class.extend({
	  storage: null,
	  localStorageSupport: !1,
	  mouse: null,
	  keyboard: null,
	  multitouch: null,
	  gamepad: null,
	  init: function () {
		ig.multitouchInput = new ig.MultitouchInput();
		ig.gamepadInput = new ig.GamepadInput();
		this.unbindAll();
		this.initStorage();
		this.initMouse();
		this.initKeyboard();
	  },
	  unbindAll: function () {
		ig.input.unbindAll();
		ig.gamepadInput.unbindAll();
	  },
	  initStorage: function () {
		try {
		  window.localStorage.setItem("test", "test"), this.storage = new ig.Storage();
		} catch (b) {
		  console.log("using fake storage"), this.storage = new ig.FakeStorage();
		} finally {
		  window.localStorage.removeItem("test");
		}
	  },
	  initMouse: function () {
		this.mouse = new Mouse();
	  },
	  initKeyboard: function () {
		this.keyboard = new Keyboard();
	  },
	  initMultitouch: function () {
		this.multitouch = new Multitouch();
	  },
	  initGamepad: function () {
		this.gamepad = new Gamepad();
	  },
	  press: function (b) {
		return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1;
	  },
	  held: function (b) {
		return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1;
	  },
	  release: function (b) {
		return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1;
	  },
	  getClickPos: function () {
		return this.mouse.getPos();
	  },
	  getTouchesPos: function () {
		return this.multitouch.getTouchesPos();
	  },
	  checkOverlap: function (b, c, d, e, f) {
		return b.x > c + e || b.x < c || b.y > d + f || b.y < d ? !1 : !0;
	  },
	  _supportsLocalStorage: function () {
		try {
		  return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage;
		} catch (b) {
		  return this.localStorageSupport;
		}
	  },
	  storageIsSet: function (b) {
		return !this.localStorageSupport ? null : this.storage.isSet(b);
	  },
	  storageGet: function (b) {
		return !this.localStorageSupport ? null : this.storage.get(b);
	  },
	  storageSet: function (b, c) {
		if (!this.localStorageSupport) return null;
		this.storage.set(b, c);
	  },
	  assert: function (b, c, d) {
		if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function () {
	ig.Game.prototype.name = "MJS-Game";
	ig.Game.prototype.version = "1.0";
	ig.Game.prototype.sessionData = {};
	ig.Game.prototype.storageName = "";
	ig.Game.prototype.setupStorageManager = function () {
	  "undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") : (this.io || (this.io = new IoManager(), console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll());
	};
	ig.Game.prototype.initData = function () {
	  return this.sessionData = {
		sfx: 0.5,
		bgm: 0.5,
		level: 1
	  };
	};
	ig.Game.prototype.loadAll = function () {
	  var b = this.storage.get(this.storageName);
	  if (null === b || "undefined" === typeof b) b = this.initData(), ig.game.saveAll();
	  for (var c in b) this.sessionData[c] = b[c];
	  this.storage.set(this.storageName, b);
	};
	ig.Game.prototype.saveAll = function () {
	  var b = this.storage.get(this.storageName),
		c;
	  for (c in b) b[c] = this.sessionData[c];
	  this.storage.set(this.storageName, b);
	};
	ig.Game.prototype.load = function (b) {
	  return this.storage.get(this.storageName)[b];
	};
	ig.Game.prototype.save = function (b, c) {
	  var d = this.storage.get(this.storageName);
	  d[b] = c;
	  this.storage.set(this.storageName, d);
	};
  });
  ig.baked = !0;
  ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
	ig.SplashLoader = ig.Loader.extend({
	  background: new ig.Image("media/graphics/game/background/splash-day.png"),
	  title: new ig.Image("media/graphics/game/item/title.png"),
	  bar: new ig.Image("media/graphics/game/ui/load-bar.png"),
	  barFill: new ig.Image("media/graphics/game/ui/load-bar-fill.png"),
	  propeller: {
		image: new ig.Image("media/graphics/game/item/propeller.png"),
		positions: [{
		  x: 180,
		  y: 277
		}, {
		  x: 246,
		  y: 285
		}, {
		  x: 212,
		  y: 296
		}],
		scales: [0.9, 0.8, 1],
		rotation: 0,
		iteration: 0
	  },
	  anims: [],
	  desktopCoverDIVID: "play-desktop",
	  resources: [new ig.Image("media/graphics/game/background/cover.png"), new ig.Image("media/graphics/game/background/day-land.png"), new ig.Image("media/graphics/game/background/day-sky.png"), new ig.Image("media/graphics/game/background/night-land.png"), new ig.Image("media/graphics/game/background/night-sky.png"), new ig.Image("media/graphics/game/background/orientate.png"), new ig.Image("media/graphics/game/background/splash-day.png"), new ig.Image("media/graphics/game/background/splash-night.png"), new ig.Image("media/graphics/game/button/close.png"), new ig.Image("media/graphics/game/button/edit-big.png"), new ig.Image("media/graphics/game/button/edit.png"), new ig.Image("media/graphics/game/button/home.png"), new ig.Image("media/graphics/game/button/level-locked.png"), new ig.Image("media/graphics/game/button/level-unlocked.png"), new ig.Image("media/graphics/game/button/play-big.png"), new ig.Image("media/graphics/game/button/play.png"), new ig.Image("media/graphics/game/button/settings.png"), new ig.Image("media/graphics/game/button/shadow-127x61.png"), new ig.Image("media/graphics/game/button/shadow-178x52.png"), new ig.Image("media/graphics/game/button/shadow-288x61.png"), new ig.Image("media/graphics/game/button/shadow-70x60.png"), new ig.Image("media/graphics/game/button/shadow-81x70.png"), new ig.Image("media/graphics/game/button/shadow-95x95.png"), new ig.Image("media/graphics/game/button/shadow-98x86.png"), new ig.Image("media/graphics/game/button/speed-up.png"), new ig.Image("media/graphics/game/button/text-green-small.png"), new ig.Image("media/graphics/game/button/text-long-orange.png"), new ig.Image("media/graphics/game/button/text-red-small.png"), new ig.Image("media/graphics/game/button/text-red.png"), new ig.Image("media/graphics/game/button/tool-delete.png"), new ig.Image("media/graphics/game/button/tool-hand.png"), new ig.Image("media/graphics/game/button/tool-line.png"), new ig.Image("media/graphics/game/button/tool-redo.png"), new ig.Image("media/graphics/game/button/tool-reset.png"), new ig.Image("media/graphics/game/button/tool-undo.png"), new ig.Image("media/graphics/game/item/board-sign.png"), new ig.Image("media/graphics/game/item/boat.png"), new ig.Image("media/graphics/game/item/car.png"), new ig.Image("media/graphics/game/item/cloud.png"), new ig.Image("media/graphics/game/item/joint.png"), new ig.Image("media/graphics/game/item/land-day.png"), new ig.Image("media/graphics/game/item/land-night.png"), new ig.Image("media/graphics/game/item/pointer.png"), new ig.Image("media/graphics/game/item/propeller-shadow.png"), new ig.Image("media/graphics/game/item/propeller.png"), new ig.Image("media/graphics/game/item/star.png"), new ig.Image("media/graphics/game/item/sun-sparkle.png"), new ig.Image("media/graphics/game/item/sun.png"), new ig.Image("media/graphics/game/item/title.png"), new ig.Image("media/graphics/game/opening/kitty.png"), new ig.Image("media/graphics/game/opening/kittytitle.png"), new ig.Image("media/graphics/game/opening/m_icon.png"), new ig.Image("media/graphics/game/opening/shield.png"), new ig.Image("media/graphics/game/opening/title.png"), new ig.Image("media/graphics/game/tile/day.png"), new ig.Image("media/graphics/game/tile/night.png"), new ig.Image("media/graphics/game/ui/dialog.png"), new ig.Image("media/graphics/game/ui/grid.png"), new ig.Image("media/graphics/game/ui/icon-bgm.png"), new ig.Image("media/graphics/game/ui/icon-sfx.png"), new ig.Image("media/graphics/game/ui/level-star.png"), new ig.Image("media/graphics/game/ui/level.png"), new ig.Image("media/graphics/game/ui/load-bar-fill.png"), new ig.Image("media/graphics/game/ui/load-bar.png"), new ig.Image("media/graphics/game/ui/money.png"), new ig.Image("media/graphics/game/ui/ribbon.png"), new ig.Image("media/graphics/game/ui/slider-bar.png"), new ig.Image("media/graphics/game/ui/slider-fill.png"), new ig.Image("media/graphics/game/ui/slider-knob.png"), new ig.Image("media/graphics/game/ui/star-empty.png"), new ig.Image("media/graphics/game/ui/star-fill.png"), new ig.Image("media/graphics/game/ui/star-filled.png")],
	  init: function (b, c) {
		this.parent(b, c);
		this.context = ig.system.context;
		this.totalLoad = this._unloaded.length;
		ig.apiHandler.run("MJSPreroll");
		ig.global.NIGHT_STARTS = 18;
		ig.global.theme = new Date().getHours() >= ig.global.NIGHT_STARTS ? "night" : "day";
		this.background = new ig.Image("media/graphics/game/background/splash-" + ig.global.theme + ".png");
	  },
	  load: function () {
		this.parent();
		this._updateInterval = setInterval(this.update.bind(this), 1E3 / 60);
		this._drawInterval = setInterval(this.draw.bind(this), 1E3 / 60);
	  },
	  tapToStartDiv: function (b) {
		this.desktopCoverDIV = document.createElement("div");
		this.desktopCoverDIV.id = this.desktopCoverDIVID;
		this.desktopCoverDIV.setAttribute("class", "play");
		this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
		this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" + _STRINGS.Splash.TapToStart + "</div></div>";
		(document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
		try {
		  "undefined" !== typeof ig.sizeHandler ? "undefined" !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push("#" + this.desktopCoverDIVID), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.desktopCoverDIVID), "function" === typeof sizeHandler && sizeHandler());
		} catch (c) {
		  console.log(c);
		}
		this.desktopCoverDIV.addEventListener("click", function () {
		  try {
			"undefined" !== typeof ig.soundHandler ? ("undefined" !== typeof ig.soundHandler.bgmPlayer ? "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio && "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio.context && ig.soundHandler.bgmPlayer.webaudio.context.resume() : (ig.soundHandler = null, ig.soundHandler = "undefined" !== typeof ig.soundList ? new ig.SoundHandler(ig.soundList) : new ig.SoundHandler()), "undefined" !== typeof ig.soundHandler.sfxPlayer ? "function" === typeof ig.soundHandler.sfxPlayer.play && ig.soundHandler.sfxPlayer.play("staticSound") : "undefined" !== typeof ig.soundHandler.staticSound ? "function" === typeof ig.soundHandler.staticSound.play && ig.soundHandler.staticSound.play() : "function" === typeof ig.soundHandler.playSound && ig.soundHandler.playSound("staticSound")) : "undefined" !== typeof Howl ? (ig.global.staticSound = new Howl({
			  src: ["media/audio/play/static.ogg", "media/audio/play/static.mp3"]
			}), ig.global.staticSound.play()) : "undefined" !== typeof createjs && "undefined" !== typeof createjs.Sound && "function" === typeof createjs.Sound.play && createjs.Sound.play("opening");
		  } catch (c) {
			console.log(c);
		  }
		  this.setAttribute("style", "visibility: hidden;");
		  "function" === typeof b && b();
		  ig.system.setGame(MyGame);
		});
	  },
	  addAnim: function (b) {
		this.anims.push(b);
	  },
	  update: function () {
		if (this.anims.length) for (var b = 0; b < this.anims.length; b++) this.anims[b].update();
		this._drawStatus += (this.status - this._drawStatus) / 5;
	  },
	  draw: function () {
		this.context.fillStyle = "#000";
		this.context.clearRect(0, 0, ig.system.realWidth, ig.system.realHeight);
		var b = (ig.system.width - this.background.width) / 2,
		  c = (ig.system.height - this.background.height) / 2;
		this.context.drawImage(this.background.data, b, c);
		b = (ig.system.width - this.title.width) / 2;
		c = ig.system.height / 10;
		this.context.drawImage(this.title.data, b, c);
		b = (ig.system.width - this.bar.width) / 2;
		c += this.title.height + 10;
		this.context.drawImage(this.bar.data, b, c);
		b += (this.bar.width - this.barFill.width) / 2;
		c += (this.bar.height - this.barFill.height) / 2 - 1;
		w = this._drawStatus * this.barFill.width;
		h = this.barFill.height;
		0 < w && this.context.drawImage(this.barFill.data, 0, 0, w, h, b, c, w, h);
		this.context.font = "24px acrom-bold";
		this.context.fillStyle = "#FFFFFF";
		this.context.textAlign = "center";
		b = ig.system.width / 2;
		c = ig.system.height - 20;
		this.context.fillText(_STRINGS.Splash.Loading, b, c);
		this.drawPropeller();
	  },
	  drawPropeller: function () {
		for (var b = 0; b < this.propeller.positions.length; b++) {
		  var c = this.propeller.positions[b],
			d = this.propeller.scales[b];
		  this.context.save();
		  this.context.translate(c.x, c.y);
		  this.context.scale(d, d);
		  this.context.drawImage(this.propeller.image.data, -25, -25);
		  this.context.restore();
		}
	  },
	  end: function () {
		this.parent();
		clearInterval(this._drawInterval);
		clearInterval(this._updateInterval);
		this._drawStatus = 1;
		this.draw();
		if (ig.ua.mobile) {
		  var b = ig.domHandler.getElementById("#play");
		  ig.domHandler.show(b);
		  ig.system.setGame(MyGame);
		} else this.tapToStartDiv();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.tween").requires("impact.entity").defines(function () {
	Array.prototype.indexOf || (Array.prototype.indexOf = function (b) {
	  for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
	  return -1;
	});
	ig.Entity.prototype.tweens = [];
	ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
	ig.Entity.prototype.update = function () {
	  this._preTweenUpdate();
	  if (0 < this.tweens.length) {
		for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
		this.tweens = b;
	  }
	};
	ig.Entity.prototype.tween = function (b, c, d) {
	  b = new ig.Tween(this, b, c, d);
	  this.tweens.push(b);
	  return b;
	};
	ig.Entity.prototype.pauseTweens = function () {
	  for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause();
	};
	ig.Entity.prototype.resumeTweens = function () {
	  for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume();
	};
	ig.Entity.prototype.stopTweens = function (b) {
	  for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b);
	};
	ig.Tween = function (b, c, d, e) {
	  var f = {},
		j = {},
		n = {},
		m = 0,
		g = !1,
		t = !1,
		y = !1;
	  this.duration = d;
	  this.paused = this.complete = !1;
	  this.easing = ig.Tween.Easing.Linear.EaseNone;
	  this.onComplete = !1;
	  this.loop = this.delay = 0;
	  this.loopCount = -1;
	  ig.merge(this, e);
	  this.loopNum = this.loopCount;
	  this.chain = function (b) {
		y = b;
	  };
	  this.initEnd = function (b, c, d) {
		if ("object" !== typeof c[b]) d[b] = c[b];else for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b]);
	  };
	  this.initStart = function (b, c, d, e) {
		if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);else for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b]);
	  };
	  this.start = function () {
		this.paused = this.complete = !1;
		this.loopNum = this.loopCount;
		m = 0;
		-1 == b.tweens.indexOf(this) && b.tweens.push(this);
		t = !0;
		g = new ig.Timer();
		for (var d in c) this.initEnd(d, c, j);
		for (d in j) this.initStart(d, j, b, f), this.initDelta(d, n, b, j);
	  };
	  this.initDelta = function (b, c, d, e) {
		if ("object" !== typeof e[b]) c[b] = e[b] - d[b];else for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b]);
	  };
	  this.propUpdate = function (b, c, d, e, f) {
		if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f : c[b];else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f);
	  };
	  this.propSet = function (b, c, d) {
		if ("object" !== typeof c[b]) d[b] = c[b];else for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b]);
	  };
	  this.update = function () {
		if (!t) return !1;
		if (this.delay) {
		  if (g.delta() < this.delay) return;
		  this.delay = 0;
		  g.reset();
		}
		if (this.paused || this.complete) return !1;
		var c = (g.delta() + m) / this.duration,
		  c = 1 < c ? 1 : c,
		  d = this.easing(c);
		for (property in n) this.propUpdate(property, b, f, n, d);
		if (1 <= c) {
		  if (0 == this.loopNum || !this.loop) {
			this.complete = !0;
			if (this.onComplete) this.onComplete();
			y && y.start();
			return !1;
		  }
		  if (this.loop == ig.Tween.Loop.Revert) {
			for (property in f) this.propSet(property, f, b);
			m = 0;
			g.reset();
			-1 != this.loopNum && this.loopNum--;
		  } else if (this.loop == ig.Tween.Loop.Reverse) {
			c = {};
			d = {};
			ig.merge(c, j);
			ig.merge(d, f);
			ig.merge(f, c);
			ig.merge(j, d);
			for (property in j) this.initDelta(property, n, b, j);
			m = 0;
			g.reset();
			-1 != this.loopNum && this.loopNum--;
		  }
		}
	  };
	  this.pause = function () {
		this.paused = !0;
		g && g.delta && (m += g.delta());
	  };
	  this.resume = function () {
		this.paused = !1;
		g && g.reset && g.reset();
	  };
	  this.stop = function (b) {
		b && (this.loop = this.complete = this.paused = !1, m += d, this.update());
		this.complete = !0;
	  };
	};
	ig.Tween.Loop = {
	  Revert: 1,
	  Reverse: 2
	};
	ig.Tween.Easing = {
	  Linear: {},
	  Quadratic: {},
	  Cubic: {},
	  Quartic: {},
	  Quintic: {},
	  Sinusoidal: {},
	  Exponential: {},
	  Circular: {},
	  Elastic: {},
	  Back: {},
	  Bounce: {}
	};
	ig.Tween.Easing.Linear.EaseNone = function (b) {
	  return b;
	};
	ig.Tween.Easing.Quadratic.EaseIn = function (b) {
	  return b * b;
	};
	ig.Tween.Easing.Quadratic.EaseOut = function (b) {
	  return -b * (b - 2);
	};
	ig.Tween.Easing.Quadratic.EaseInOut = function (b) {
	  return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1);
	};
	ig.Tween.Easing.Cubic.EaseIn = function (b) {
	  return b * b * b;
	};
	ig.Tween.Easing.Cubic.EaseOut = function (b) {
	  return --b * b * b + 1;
	};
	ig.Tween.Easing.Cubic.EaseInOut = function (b) {
	  return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2);
	};
	ig.Tween.Easing.Quartic.EaseIn = function (b) {
	  return b * b * b * b;
	};
	ig.Tween.Easing.Quartic.EaseOut = function (b) {
	  return -(--b * b * b * b - 1);
	};
	ig.Tween.Easing.Quartic.EaseInOut = function (b) {
	  return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2);
	};
	ig.Tween.Easing.Quintic.EaseIn = function (b) {
	  return b * b * b * b * b;
	};
	ig.Tween.Easing.Quintic.EaseOut = function (b) {
	  return (b -= 1) * b * b * b * b + 1;
	};
	ig.Tween.Easing.Quintic.EaseInOut = function (b) {
	  return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2);
	};
	ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
	  return -Math.cos(b * Math.PI / 2) + 1;
	};
	ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
	  return Math.sin(b * Math.PI / 2);
	};
	ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
	  return -0.5 * (Math.cos(Math.PI * b) - 1);
	};
	ig.Tween.Easing.Exponential.EaseIn = function (b) {
	  return 0 == b ? 0 : Math.pow(2, 10 * (b - 1));
	};
	ig.Tween.Easing.Exponential.EaseOut = function (b) {
	  return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1;
	};
	ig.Tween.Easing.Exponential.EaseInOut = function (b) {
	  return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2);
	};
	ig.Tween.Easing.Circular.EaseIn = function (b) {
	  return -(Math.sqrt(1 - b * b) - 1);
	};
	ig.Tween.Easing.Circular.EaseOut = function (b) {
	  return Math.sqrt(1 - --b * b);
	};
	ig.Tween.Easing.Circular.EaseInOut = function (b) {
	  return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1);
	};
	ig.Tween.Easing.Elastic.EaseIn = function (b) {
	  var c,
		d = 0.1,
		e = 0.4;
	  if (0 == b) return 0;
	  if (1 == b) return 1;
	  e || (e = 0.3);
	  !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
	  return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e));
	};
	ig.Tween.Easing.Elastic.EaseOut = function (b) {
	  var c,
		d = 0.1,
		e = 0.4;
	  if (0 == b) return 0;
	  if (1 == b) return 1;
	  e || (e = 0.3);
	  !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
	  return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1;
	};
	ig.Tween.Easing.Elastic.EaseInOut = function (b) {
	  var c,
		d = 0.1,
		e = 0.4;
	  if (0 == b) return 0;
	  if (1 == b) return 1;
	  e || (e = 0.3);
	  !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
	  return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1;
	};
	ig.Tween.Easing.Back.EaseIn = function (b) {
	  return b * b * (2.70158 * b - 1.70158);
	};
	ig.Tween.Easing.Back.EaseOut = function (b) {
	  return (b -= 1) * b * (2.70158 * b + 1.70158) + 1;
	};
	ig.Tween.Easing.Back.EaseInOut = function (b) {
	  return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2);
	};
	ig.Tween.Easing.Bounce.EaseIn = function (b) {
	  return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b);
	};
	ig.Tween.Easing.Bounce.EaseOut = function (b) {
	  return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375;
	};
	ig.Tween.Easing.Bounce.EaseInOut = function (b) {
	  return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5;
	};
	ig.Tween.Interpolation = {
	  Linear: function (b, c) {
		var d = b.length - 1,
		  e = d * c,
		  f = Math.floor(e),
		  j = TWEEN.Interpolation.Utils.Linear;
		return 0 > c ? j(b[0], b[1], e) : 1 < c ? j(b[d], b[d - 1], d - e) : j(b[f], b[f + 1 > d ? d : f + 1], e - f);
	  }
	};
  });
  ig.baked = !0;
  ig.module("plugins.url-parameters").defines(function () {
	ig.UrlParameters = ig.Class.extend({
	  init: function () {
		switch (getQueryVariable("iphone")) {
		  case "true":
			ig.ua.iPhone = !0, console.log("iPhone mode");
		}
		var b = getQueryVariable("webview");
		if (b) switch (b) {
		  case "true":
			ig.ua.is_uiwebview = !0, console.log("webview mode");
		}
		if (b = getQueryVariable("debug")) switch (b) {
		  case "true":
			ig.game.showDebugMenu(), console.log("debug mode");
		}
		switch (getQueryVariable("view")) {
		  case "stats":
			ig.game.resetPlayerStats(), ig.game.endGame();
		}
		getQueryVariable("ad");
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.director").requires("impact.impact").defines(function () {
	ig.Director = ig.Class.extend({
	  init: function (b, c) {
		this.game = b;
		this.levels = [];
		this.currentLevel = 0;
		this.append(c);
	  },
	  loadLevel: function (b) {
		for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
		  var d = ig.domHandler.getElementById("#" + c);
		  ig.domHandler.hide(d);
		}
		this.currentLevel = b;
		this.game.loadLevel(this.levels[b]);
		return !0;
	  },
	  loadLevelWithoutEntities: function (b) {
		this.currentLevel = b;
		this.game.loadLevelWithoutEntities(this.levels[b]);
		return !0;
	  },
	  append: function (b) {
		newLevels = [];
		return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1;
	  },
	  nextLevel: function () {
		return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1;
	  },
	  previousLevel: function () {
		return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1;
	  },
	  jumpTo: function (b) {
		var c = null;
		for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
		return 0 <= c ? this.loadLevel(c) : !1;
	  },
	  firstLevel: function () {
		return this.loadLevel(0);
	  },
	  lastLevel: function () {
		return this.loadLevel(this.levels.length - 1);
	  },
	  reloadLevel: function () {
		return this.loadLevel(this.currentLevel);
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
	ig.Storage = ig.Class.extend({
	  staticInstantiate: function () {
		return !ig.Storage.instance ? null : ig.Storage.instance;
	  },
	  init: function () {
		ig.Storage.instance = this;
	  },
	  isCapable: function () {
		return "undefined" !== typeof window.localStorage;
	  },
	  isSet: function (b) {
		return null !== this.get(b);
	  },
	  initUnset: function (b, c) {
		null === this.get(b) && this.set(b, c);
	  },
	  get: function (b) {
		if (!this.isCapable()) return null;
		try {
		  return JSON.parse(localStorage.getItem(b));
		} catch (c) {
		  return window.localStorage.getItem(b);
		}
	  },
	  getInt: function (b) {
		return ~~this.get(b);
	  },
	  getFloat: function (b) {
		return parseFloat(this.get(b));
	  },
	  getBool: function (b) {
		return !!this.get(b);
	  },
	  key: function (b) {
		return this.isCapable() ? window.localStorage.key(b) : null;
	  },
	  set: function (b, c) {
		if (!this.isCapable()) return null;
		try {
		  window.localStorage.setItem(b, JSON.stringify(c));
		} catch (d) {
		  console.log(d);
		}
	  },
	  setHighest: function (b, c) {
		c > this.getFloat(b) && this.set(b, c);
	  },
	  remove: function (b) {
		if (!this.isCapable()) return null;
		window.localStorage.removeItem(b);
	  },
	  clear: function () {
		if (!this.isCapable()) return null;
		window.localStorage.clear();
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.data.color-rgb").defines(function () {
	ColorRGB = function (b, c, d, e) {
	  this.r = b || 0;
	  this.g = c || 0;
	  this.b = d || 0;
	  this.a = e || 0;
	};
	ColorRGB.prototype = {
	  setRandomColor: function () {
		this.r = Math.round(255 * Math.random());
		this.g = Math.round(255 * Math.random());
		this.b = Math.round(255 * Math.random());
	  },
	  getStyle: function () {
		return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
	  },
	  getHex: function () {
		for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
		for (; 2 > c.length;) c = "0" + c;
		for (; 2 > d.length;) d = "0" + d;
		return "#" + b + c + d;
	  },
	  getInvertedColor: function () {
		return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a);
	  },
	  clone: function () {
		return new ColorRGB(this.r, this.g, this.b, this.a);
	  }
	};
  });
  this.START_BRANDING_SPLASH;
  ig.baked = !0;
  ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
	ig.BrandingSplash = ig.Class.extend({
	  init: function () {
		ig.game.spawnEntity(EntityBranding, 0, 0);
		console.log("spawn branding");
	  }
	});
	EntityBranding = ig.Entity.extend({
	  gravityFactor: 0,
	  size: {
		x: 32,
		y: 32
	  },
	  splash: new ig.Image("branding/splash1.png"),
	  init: function (b, c, d) {
		this.parent(b, c, d);
		320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
		this.pos.x = (ig.system.width - this.size.x) / 2;
		this.pos.y = -this.size.y - 200;
		this.endPosY = (ig.system.height - this.size.y) / 2;
		b = this.tween({
		  pos: {
			y: this.endPosY
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Bounce.EaseIn
		});
		c = this.tween({}, 2.5, {
		  onComplete: function () {
			ig.game.director.loadLevel(ig.game.director.currentLevel);
		  }
		});
		b.chain(c);
		b.start();
		this.currentAnim = this.anims.idle;
	  },
	  createClickableLayer: function () {
		console.log("Build clickable layer");
		this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow);
	  },
	  doesClickableLayerExist: function (b) {
		for (k in dynamicClickableEntityDivs) if (k == b) return !0;
		return !1;
	  },
	  checkClickableLayer: function (b, c, d) {
		"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/platform/misc/invisible.png", d));
	  },
	  createClickableOutboundLayer: function (b, c, d, e) {
		var f = ig.$new("div");
		f.id = b;
		document.body.appendChild(f);
		f = $("#" + f.id);
		f.css("float", "left");
		f.css("position", "absolute");
		if (ig.ua.mobile) {
		  var j = window.innerHeight / mobileHeight,
			n = window.innerWidth / mobileWidth;
		  f.css("left", this.pos.x * n);
		  f.css("top", this.pos.y * j);
		  f.css("width", this.size.x * n);
		  f.css("height", this.size.y * j);
		} else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), f.css("left", j + this.pos.x * multiplier), f.css("top", n + this.pos.y * multiplier), f.css("width", this.size.x * multiplier), f.css("height", this.size.y * multiplier);
		e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
		dynamicClickableEntityDivs[b] = {};
		dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
		dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
		dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
		dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
	  },
	  draw: function () {
		ig.system.context.fillStyle = "#ffffff";
		ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
		ig.system.context.fillStyle = "#000";
		ig.system.context.font = "12px Arial";
		ig.system.context.textAlign = "left";
		320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
		this.parent();
		this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y);
	  }
	});
  });
  this.END_BRANDING_SPLASH;
  ig.baked = !0;
  ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function () {
	EntityButton = ig.Entity.extend({
	  collides: ig.Entity.COLLIDES.NEVER,
	  type: ig.Entity.TYPE.A,
	  size: new Vector2(48, 48),
	  fillColor: null,
	  zIndex: 95E3,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		!ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
		b = Math.floor(256 * Math.random());
		c = Math.floor(256 * Math.random());
		d = Math.floor(256 * Math.random());
		this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)";
	  },
	  clicked: function () {
		throw "no implementation on clicked()";
	  },
	  clicking: function () {
		throw "no implementation on clicking()";
	  },
	  released: function () {
		throw "no implementation on released()";
	  }
	});
  });
  ig.baked = !0;
  ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function () {
	ClickableDivLayer = ig.Class.extend({
	  pos: new Vector2(0, 0),
	  size: new Vector2(0, 0),
	  identifier: null,
	  invisImagePath: "media/graphics/platform/misc/invisible.png",
	  init: function (b) {
		this.pos = new Vector2(b.pos.x, b.pos.y);
		this.size = new Vector2(b.size.x, b.size.y);
		var c = "more-games",
		  d = "www.google.com",
		  e = !1;
		b.div_layer_name && (c = b.div_layer_name);
		b.link && (d = b.link);
		b.newWindow && (e = b.newWindow);
		this.createClickableLayer(c, d, e);
	  },
	  createClickableLayer: function (b, c, d) {
		this.identifier = b;
		var e = ig.domHandler.getElementById("#" + b);
		e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d);
	  },
	  update: function (b, c) {
		this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y);
	  },
	  createClickableOutboundLayer: function (b, c, d, e) {
		var f = ig.domHandler.create("div");
		ig.domHandler.attr(f, "id", b);
		var j = ig.domHandler.create("a");
		e ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
		c = ig.domHandler.create("img");
		ig.domHandler.css(c, {
		  width: "100%",
		  height: "100%"
		});
		ig.domHandler.attr(c, "src", d);
		d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
		if (ig.ua.mobile) {
		  e = ig.domHandler.getElementById("#canvas");
		  e = ig.domHandler.getOffsets(e);
		  var n = e.left,
			m = e.top;
		  console.log(e.left);
		  ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px");
		} else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), n = e.left, m = e.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(n + this.pos.x * d) + "px", m = Math.floor(m + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
		ig.domHandler.css(f, {
		  "float": "left",
		  position: "absolute",
		  left: e,
		  top: m,
		  width: n,
		  height: d,
		  "z-index": 3
		});
		ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
		ig.domHandler.appendChild(j, c);
		ig.domHandler.appendChild(f, j);
		ig.domHandler.appendToBody(f);
		ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
		ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
		ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
		ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
		ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
	EntityButtonBrandingLogo = EntityButton.extend({
	  type: ig.Entity.TYPE.A,
	  gravityFactor: 0,
	  logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
	  zIndex: 10001,
	  size: {
		x: 64,
		y: 66
	  },
	  clickableLayer: null,
	  link: null,
	  newWindow: !1,
	  div_layer_name: "branding-logo",
	  name: "brandinglogo",
	  init: function (b, c, d) {
		this.parent(b, c, d);
		if (!ig.global.wm) {
		  if ("undefined" == typeof wm) if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));else {
			this.kill();
			return;
		  }
		  this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo";
		}
	  },
	  show: function () {
		var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		ig.domHandler.show(b);
	  },
	  hide: function () {
		var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		ig.domHandler.hide(b);
	  },
	  clicked: function () {},
	  clicking: function () {},
	  released: function () {}
	});
  });
  ig.baked = !0;
  ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function () {
	EntityBrandingLogoPlaceholder = ig.Entity.extend({
	  gravityFactor: 0,
	  size: {
		x: 32,
		y: 32
	  },
	  _wmDrawBox: !0,
	  _wmBoxColor: "rgba(0, 0, 255, 0.7)",
	  init: function (b, c, d) {
		this.parent(b, c, d);
		if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
		  case "true":
			console.log("centralize true");
			centralize = !0;
			break;
		  case "false":
			console.log("centralize false");
			centralize = !1;
			break;
		  default:
			console.log("default ... centralize false"), centralize = !1;
		} else b = "branding-logo", centralize = !1;
		if ("undefined" == typeof wm) {
		  if (_SETTINGS.Branding.Logo.Enabled) try {
			ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
			  div_layer_name: b,
			  centralize: centralize
			});
		  } catch (e) {
			console.log(e);
		  }
		  this.kill();
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
	EntityButtonMoreGames = EntityButton.extend({
	  type: ig.Entity.TYPE.A,
	  gravityFactor: 0,
	  logo: new ig.AnimationSheet("media/graphics/game/button/text-red.png", 64, 66),
	  size: {
		x: 64,
		y: 66
	  },
	  zIndex: 750,
	  clickableLayer: null,
	  link: null,
	  newWindow: !1,
	  div_layer_name: "more-games",
	  name: "moregames",
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill());
	  },
	  show: function () {
		var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		ig.domHandler.show(b);
	  },
	  hide: function () {
		var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		ig.domHandler.hide(b);
	  },
	  clicked: function () {},
	  clicking: function () {},
	  released: function () {}
	});
  });
  ig.baked = !0;
  ig.module("game.entities.opening-shield").requires("impact.entity").defines(function () {
	EntityOpeningShield = ig.Entity.extend({
	  size: {
		x: 48,
		y: 48
	  },
	  move: 0,
	  mIconAnim: 0,
	  shieldAnim: 0,
	  titleAnim: 0,
	  shieldImage: new ig.Image("media/graphics/game/opening/shield.png"),
	  mIconImage: new ig.Image("media/graphics/game/opening/m_icon.png"),
	  titleImage: new ig.Image("media/graphics/game/opening/title.png"),
	  init: function (b, c, d) {
		this.parent(b, c, d);
	  },
	  ready: function () {
		if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
		  this.initTimer = new ig.Timer(0.1);
		  try {
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound);
		  } catch (b) {
			console.log(b);
		  }
		} else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill();
	  },
	  update: function () {
		this.parent();
		this.updateOriginalShieldOpening();
	  },
	  draw: function () {
		this.parent();
		ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening());
	  },
	  updateOriginalShieldOpening: function () {
		this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
		this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
		this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
		this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
		this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
		this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1);
	  },
	  drawOriginalShieldOpening: function () {
		if (this.moveTimer) {
		  var b = ig.system.context;
		  b.save();
		  var c = ig.system.width / 2,
			d = ig.system.height / 2;
		  b.translate(c, d);
		  b.rotate(this.move * Math.PI / 180);
		  b.beginPath();
		  b.moveTo(0, 0);
		  for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
		  b.translate(-c, -d);
		  c = b.createRadialGradient(c, d, 100, c, d, 250);
		  c.addColorStop(0, "rgba(255,255,255,0.1)");
		  c.addColorStop(1, "rgba(0,0,0,0)");
		  b.fillStyle = c;
		  b.fill();
		  b.restore();
		}
		this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
		this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
		ig.system.context.globalAlpha = 1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function () {
	EntityOpeningKitty = ig.Entity.extend({
	  size: {
		x: 48,
		y: 48
	  },
	  kittyAnim: -1,
	  kittyImage: new ig.Image("media/graphics/game/opening/kitty.png"),
	  kittyTitleImage: new ig.Image("media/graphics/game/opening/kittytitle.png"),
	  soundKey: "kittyopeningSound",
	  init: function (b, c, d) {
		this.parent(b, c, d);
	  },
	  ready: function () {
		if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
		  this.initTimer = new ig.Timer(0.1);
		  try {
			ig.soundHandler.sfxPlayer.play(this.soundKey);
		  } catch (b) {
			console.log(b);
		  }
		} else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill();
	  },
	  update: function () {
		this.parent();
		this.updateKittyOpening();
	  },
	  draw: function () {
		this.parent();
		ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening());
	  },
	  updateKittyOpening: function () {
		this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
		this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
		this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1);
	  },
	  drawKittyOpening: function () {
		var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
		b.addColorStop(0, "#ffed94");
		b.addColorStop(1, "#ffcd85");
		ig.system.context.fillStyle = b;
		ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
		0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
		ig.system.context.globalAlpha = 1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
	EntityPointer = ig.Entity.extend({
	  checkAgainst: ig.Entity.TYPE.BOTH,
	  size: new Vector2(16, 16),
	  isFirstPressed: !1,
	  isPressed: !1,
	  isReleased: !1,
	  isHovering: !1,
	  hoveringItem: null,
	  objectArray: [],
	  clickedObjectList: [],
	  ignorePause: !0,
	  zIndex: 5500,
	  check: function (b) {
		this.objectArray.push(b);
	  },
	  clickObject: function (b) {
		this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
		this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
		this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b));
	  },
	  refreshPos: function () {
		this.pos = ig.game.io.getClickPos();
	  },
	  update: function () {
		this.parent();
		this.refreshPos();
		var b = null,
		  c = -1;
		for (a = this.objectArray.length - 1; -1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
		if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
		  for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
		  this.clickedObjectList = [];
		}
		this.isFirstPressed = ig.input.pressed("click");
		this.isReleased = ig.input.released("click");
		this.isPressed = ig.input.state("click");
	  },
	  addToClickedObjectList: function (b) {
		this.clickedObjectList.push(b);
	  },
	  removeFromClickedObjectList: function (b) {
		for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
		  var e = this.clickedObjectList[d];
		  e != b && c.push(e);
		}
		this.clickedObjectList = c;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
	EntityPointerSelector = EntityPointer.extend({
	  zIndex: 1E3,
	  _wmDrawBox: !0,
	  _wmBoxColor: "rgba(0, 0, 255, 0.7)",
	  size: {
		x: 20,
		y: 20
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.select").requires("impact.entity").defines(function () {
	EntitySelect = ig.Entity.extend({
	  type: ig.Entity.TYPE.B,
	  checkAgainst: ig.Entity.TYPE.A,
	  collides: ig.Entity.COLLIDES.NEVER,
	  canSelect: !1,
	  canSelectTimerDuration: 0.35,
	  zIndex: 99999,
	  isHovering: !1,
	  isSelected: !1,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration);
	  },
	  doesClickableLayerExist: function (b) {
		for (k in dynamicClickableEntityDivs) if (k == b) return !0;
		return !1;
	  },
	  checkClickableLayer: function (b, c, d) {
		"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/platform/misc/invisible.png", d));
	  },
	  createClickableOutboundLayer: function (b, c, d, e) {
		var f = ig.$new("div");
		f.id = b;
		document.body.appendChild(f);
		$("#" + f.id).css("float", "left");
		$("#" + f.id).css("width", this.size.x * multiplier);
		$("#" + f.id).css("height", this.size.y * multiplier);
		$("#" + f.id).css("position", "absolute");
		var j = w / 2 - destW / 2,
		  n = h / 2 - destH / 2;
		w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y * multiplier));
		e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
		dynamicClickableEntityDivs[b] = {};
		dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
		dynamicClickableEntityDivs[b].height = $("#" + f.id).height();
		dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
		dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
	  },
	  hovered: function () {
		this.isHovering = !0;
		this.dehoverOthers();
	  },
	  dehoverOthers: function () {
		var b = ig.game.getEntitiesByType(EntitySelect);
		for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1);
	  },
	  deselectOthers: function () {
		var b = ig.game.getEntitiesByType(EntitySelect);
		for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1);
	  },
	  update: function () {
		this.parent();
		this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function () {
	LevelOpening = {
	  entities: [{
		type: "EntityOpeningKitty",
		x: 520,
		y: 212
	  }],
	  layer: []
	};
  });
  ig.baked = !0;
  ig.module("game.entities.background.sun-sparkle").requires("impact.entity").defines(function () {
	EntitySunSparkle = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/sun-sparkle.png"),
	  zIndex: 3,
	  opacity: 0,
	  delay: 1,
	  center: {
		x: 0,
		y: 0
	  },
	  showed: !1,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.zIndex = this.manager.zIndex + 1;
		this.startAnimation();
	  },
	  startAnimation: function () {
		0 === this.opacity ? this.appear() : this.disappear();
	  },
	  appear: function () {
		this._tween = this.tween({
		  opacity: 1
		}, 0.5, {
		  delay: this.getRandomDelay(),
		  onComplete: this.onAppeared.bind(this)
		});
		this._tween.start();
	  },
	  onAppeared: function () {
		this.disappear();
	  },
	  disappear: function () {
		this._tween = this.tween({
		  opacity: 0
		}, 0.5, {
		  delay: this.getRandomDelay(),
		  onComplete: this.onDisappeared.bind(this)
		});
		this._tween.start();
	  },
	  onDisappeared: function () {
		var b = this.manager.generateSparkleDistance();
		this.pos = this.manager.generateSparklePosition(b);
		this.scale = this.manager.generateSparkleScale(b);
		this.appear();
	  },
	  getRandomDelay: function () {
		return 1 + 2 * Math.random();
	  },
	  update: function () {
		this.parent();
		this.center.x = this.pos.x + this.size.x / 2;
		this.center.y = this.pos.y + this.size.y / 2;
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		var b = this.scale * this.opacity;
		this.context.scale(b, b);
		this.context.globalAlpha = this.opacity;
		this.context.drawImage(this.image.data, -this.size.x / 2, -this.size.y / 2);
		this.context.restore();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.sun").requires("impact.entity", "game.entities.background.sun-sparkle").defines(function () {
	EntitySun = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/sun.png"),
	  zIndex: 2,
	  center: {
		x: 0,
		y: 0
	  },
	  sparkles: [],
	  POS: {
		x: 675,
		y: 37
	  },
	  SPARKLE_NUMBER: 5,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos = this.POS;
		this.zIndex = this.manager.zIndex + 3;
		this.createSparkle();
	  },
	  createSparkle: function () {
		for (var b = 0; b < this.SPARKLE_NUMBER; b++) {
		  var c = this.generateSparkleDistance(),
			d = this.generateSparklePosition(c),
			c = this.generateSparkleScale(c),
			d = ig.game.spawnEntity(EntitySunSparkle, d.x, d.y, {
			  manager: this,
			  scale: c
			});
		  this.sparkles.push(d);
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
	  },
	  generateSparkleDistance: function () {
		var b = this.size.x / 2 - 20;
		return 20 + Math.floor(Math.random() * b);
	  },
	  generateSparklePosition: function (b) {
		this.center.x = this.pos.x + this.size.x / 2;
		this.center.y = this.pos.y + this.size.y / 2;
		var c = 2 * Math.random() * Math.PI,
		  d = this.center.x + Math.cos(c) * b;
		b = this.center.y + Math.sin(c) * b;
		return {
		  x: d,
		  y: b
		};
	  },
	  generateSparkleScale: function (b) {
		return 0.1 + Math.ceil(10 * (b / (this.size.x / 2))) / 10;
	  },
	  startAnimate: function () {
		for (var b = 0; b < this.sparkles.length; b++) this.sparkles[b].resumeTweens();
	  },
	  stopAnimate: function () {
		for (var b = 0; b < this.sparkles.length; b++) this.sparkles[b].pauseTweens();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.star").requires("impact.entity").defines(function () {
	EntityStar = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/star.png"),
	  zIndex: 1,
	  scaleMultiplier: 1,
	  center: {
		x: 0,
		y: 0
	  },
	  MARGIN: {
		x: 20,
		y: 20
	  },
	  MAX_Y: 250,
	  MIN_SHINE_DELAY: 5,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.zIndex = this.manager.zIndex + 1;
		this.setRandomPosition();
		this.setRandomScale();
		this.shine();
	  },
	  setRandomPosition: function () {
		var b = ig.system.width - 2 * this.MARGIN.x,
		  c = this.MAX_Y - 2 * this.MARGIN.y;
		this.pos.x = this.MARGIN.x + Math.floor(Math.random() * b);
		this.pos.y = this.MARGIN.y + Math.floor(Math.random() * c);
		this.center.x = this.pos.x + this.size.x / 2;
		this.center.y = this.pos.y + this.size.y / 2;
	  },
	  setRandomScale: function () {
		this.scale = 0.5 + Math.floor(6 * Math.random()) / 10;
	  },
	  getRandomShineDelay: function () {
		return this.MIN_SHINE_DELAY + Math.floor(11 * Math.random());
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		var b = this.scale * this.scaleMultiplier;
		this.context.scale(b, b);
		this.context.drawImage(this.image.data, -this.size.x / 2, -this.size.y / 2);
		this.context.restore();
	  },
	  shine: function () {
		this.tween({
		  scaleMultiplier: 1.5
		}, 0.5, {
		  delay: this.getRandomShineDelay(),
		  loopCount: 1,
		  loop: ig.Tween.Loop.Reverse,
		  onComplete: this.shine.bind(this)
		}).start();
	  },
	  startAnimate: function () {
		this.resumeTweens();
	  },
	  stopAnimate: function () {
		this.pauseTweens();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.cloud").requires("impact.entity").defines(function () {
	EntityCloud = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/cloud.png"),
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width * this.scale;
		this.size.y = this.image.height * this.scale;
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y, this.size.x, this.size.y);
		this.context.restore();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.sky").requires("impact.entity", "game.entities.background.sun", "game.entities.background.star", "game.entities.background.cloud").defines(function () {
	EntitySky = ig.Entity.extend({
	  manager: null,
	  image: null,
	  zIndex: 1,
	  sun: null,
	  clouds: [],
	  stars: [],
	  CLOUDS_MAP: [{
		pos: {
		  x: 360,
		  y: 79
		},
		scale: 1
	  }, {
		pos: {
		  x: 56,
		  y: 118
		},
		scale: 0.512
	  }],
	  STARS_NUMBER: 5,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.image = new ig.Image("media/graphics/game/background/" + this.theme + "-sky.png");
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x = 0;
		this.pos.y = 0;
		"night" === this.theme && this.spawnStars();
		this.spawnClouds();
		this.sun = ig.game.spawnEntity(EntitySun, 0, 0, {
		  manager: this,
		  theme: this.theme,
		  zIndex: this.zIndex + 3
		});
	  },
	  spawnStars: function () {
		for (var b = 0; b < this.STARS_NUMBER; b++) {
		  var c = ig.game.spawnEntity(EntityStar, -1E3, -1E3, {
			manager: this,
			zIndex: this.zIndex + 1
		  });
		  this.stars.push(c);
		}
	  },
	  spawnClouds: function () {
		for (var b = 0; b < this.CLOUDS_MAP.length; b++) {
		  var c = this.CLOUDS_MAP[b];
		  ig.game.spawnEntity(EntityCloud, c.pos.x, c.pos.y, {
			manager: this,
			scale: c.scale,
			zIndex: this.zIndex + 2
		  });
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
	  },
	  drawClouds: function () {
		for (var b = 0; b < this.cloud.positions.length; b++) {
		  var c = this.cloud.positions[b],
			d = this.cloud.scales[b],
			e = this.cloud.image.width * d,
			d = this.cloud.image.height * d;
		  this.context.save();
		  this.context.drawImage(this.cloud.image.data, c.x, c.y, e, d);
		  this.context.restore();
		}
	  },
	  startAnimate: function () {
		this.sun.startAnimate();
		for (var b = 0; b < this.stars.length; b++) this.stars[b].startAnimate();
	  },
	  stopAnimate: function () {
		this.sun.stopAnimate();
		for (var b = 0; b < this.stars.length; b++) this.stars[b].stopAnimate();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.boat").requires("impact.entity").defines(function () {
	EntityBoat = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/boat.png"),
	  zIndex: 2,
	  stop: !1,
	  STOP_POS: {
		x: 400,
		y: 457
	  },
	  TRAVEL_DURATION: 10,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos = this.getOutPosition();
		this.zIndex = this.manager.zIndex + 1;
		this.moveIn();
	  },
	  getOutPosition: function () {
		return {
		  x: Math.floor(2 * Math.random()) ? ig.system.width : -this.size.x,
		  y: 498
		};
	  },
	  moveIn: function () {
		this.tween({
		  pos: this.STOP_POS
		}, this.TRAVEL_DURATION, {
		  delay: this.getRandomDelay(),
		  onComplete: this.onMoveInComplete.bind(this)
		}).start();
	  },
	  onMoveInComplete: function () {
		this.moveOut();
	  },
	  moveOut: function () {
		this.tween({
		  pos: this.getOutPosition()
		}, this.TRAVEL_DURATION, {
		  delay: this.getRandomDelay(),
		  onComplete: this.onMoveOutComplete.bind(this)
		}).start();
	  },
	  onMoveOutComplete: function () {
		this.pos = this.getOutPosition();
		this.moveIn();
	  },
	  getRandomDelay: function () {
		return Math.floor(7 * Math.random());
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
	  },
	  startAnimate: function () {
		this.resumeTweens();
	  },
	  stopAnimate: function () {
		this.pauseTweens();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.background.land").requires("impact.entity", "game.entities.background.boat").defines(function () {
	EntityLand = ig.Entity.extend({
	  manager: null,
	  propeller: {
		image: new ig.Image("media/graphics/game/item/propeller.png"),
		positions: [{
		  x: 180,
		  y: 277
		}, {
		  x: 246,
		  y: 285
		}, {
		  x: 212,
		  y: 296
		}],
		scales: [0.9, 0.8, 1],
		rotation: 0,
		iteration: 0
	  },
	  boat: null,
	  zIndex: 1,
	  animate: !0,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.image = new ig.Image("media/graphics/game/background/" + this.theme + "-land.png");
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x = (ig.system.width - this.size.x) / 2;
		this.pos.y = ig.system.height - this.size.y;
		this.zIndex = this.manager.zIndex + 3;
		this.propeller.iteration = Math.PI / ig.system.fps;
		this.boat = ig.game.spawnEntity(EntityBoat, -1E3, -1E3, {
		  manager: this
		});
	  },
	  update: function () {
		this.parent();
		this.animate && (ig.game.propeller = (ig.game.propeller + this.propeller.iteration) % (2 * Math.PI));
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
		this.drawPropeller();
	  },
	  drawPropeller: function () {
		for (var b = 0; b < this.propeller.positions.length; b++) {
		  var c = this.propeller.positions[b],
			d = this.propeller.scales[b];
		  this.context.save();
		  this.context.translate(c.x, c.y);
		  this.context.scale(d, d);
		  this.context.rotate(ig.game.propeller);
		  this.context.drawImage(this.propeller.image.data, -25, -25);
		  this.context.restore();
		}
	  },
	  startAnimate: function () {
		this.animate = !0;
		this.boat.startAnimate();
	  },
	  stopAnimate: function () {
		this.animate = !1;
		this.boat.stopAnimate();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.background").requires("impact.entity", "game.entities.background.sky", "game.entities.background.land").defines(function () {
	EntityBackground = ig.Entity.extend({
	  manager: null,
	  theme: "",
	  sky: null,
	  land: {},
	  zIndex: 1,
	  animate: !0,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.sky = ig.game.spawnEntity(EntitySky, 0, 0, {
		  manager: this,
		  theme: this.theme
		});
		this.land = ig.game.spawnEntity(EntityLand, 0, 0, {
		  manager: this,
		  theme: this.theme
		});
		this.animate ? this.startAnimate() : this.stopAnimate();
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
	  },
	  startAnimate: function () {
		this.sky.startAnimate();
		this.land.startAnimate();
	  },
	  stopAnimate: function () {
		this.sky.stopAnimate();
		this.land.stopAnimate();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.menu-title").requires("impact.entity").defines(function () {
	EntityMenuTitle = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/title.png"),
	  drawPos: {
		x: 0,
		y: 0
	  },
	  translate: {
		x: 0,
		y: 0
	  },
	  scale: {
		x: 1,
		y: 1
	  },
	  autoShow: !0,
	  _tween: null,
	  SCALE: {
		SHOW: 1.2
	  },
	  TITLE_POS: {
		x: 312.5,
		y: 54
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
		this.autoShow ? this.animate() : this.scale = {
		  x: 0,
		  y: 0
		};
	  },
	  update: function () {
		this.parent();
		this.moving && (this.translate.x = this.pos.x + this.size.x / 2, this.translate.y = this.pos.y + this.size.y / 2);
	  },
	  draw: function () {
		this.context.save();
		this.context.translate(this.translate.x, this.translate.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.drawImage(this.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  getBottomPos: function () {
		return this.pos.y + this.size.y;
	  },
	  cancelRunningTween: function () {
		null !== this._tween && this._tween.stop(!1);
	  },
	  animate: function () {
		this.cancelRunningTween();
		this._tween = this.tween({
		  scale: {
			x: this.SCALE.SHOW,
			y: this.SCALE.SHOW
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Quadratic.EaseInOut,
		  loop: ig.Tween.Loop.Reverse,
		  loopCount: 1,
		  onComplete: this.onAnimationCompleted.bind(this)
		});
		this._tween.start();
	  },
	  onAnimationCompleted: function () {
		this.manager.onTitleAnimationCompleted();
	  },
	  show: function () {
		this.cancelRunningTween();
		this.tween({
		  scale: {
			x: 1,
			y: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  hide: function () {
		this.cancelRunningTween();
		this.tween({
		  scale: {
			x: 0,
			y: 0
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.manager.onTitleHidden();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.menu-land").requires("impact.entity").defines(function () {
	EntityMenuLand = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/land-day.png"),
	  moving: !1,
	  splitPercent: 0,
	  splitted: !1,
	  _tween: null,
	  left: {
		sx: 0,
		sy: 0,
		sw: 0,
		sh: 0,
		x: 0,
		y: 0,
		w: 0,
		h: 0
	  },
	  right: {
		sx: 0,
		sy: 0,
		sw: 0,
		sh: 0,
		x: 0,
		y: 0,
		w: 0,
		h: 0
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x = (ig.system.width - this.size.x) / 2;
		this.pos.y = ig.system.height - this.size.y;
		this.image = new ig.Image("media/graphics/game/item/land-" + ig.global.theme + ".png");
	  },
	  draw: function () {
		this.moving ? (this.context.save(), this.context.drawImage(this.image.data, 0, 0, this.size.x / 2, this.size.y, this.pos.x - this.size.x / 2 * this.splitPercent, this.pos.y, this.size.x / 2, this.size.y), this.context.drawImage(this.image.data, this.size.x / 2, 0, this.size.x / 2, this.size.y, this.pos.x + this.size.x / 2 + this.size.x / 2 * this.splitPercent, this.pos.y, this.size.x / 2, this.size.y), this.context.restore()) : this.splitted || (this.context.save(), this.context.drawImage(this.image.data, this.pos.x, this.pos.y), this.context.restore());
	  },
	  split: function () {
		null !== this._tween && !this._tween.complete && this._tween.stop(!1);
		this.moving = !0;
		this._tween = this.tween({
		  splitPercent: 1
		}, 1, {
		  easing: ig.Tween.Easing.Quadratic.EaseOut,
		  onComplete: this.onSplitted.bind(this)
		});
		this._tween.start();
	  },
	  combine: function () {
		null !== this._tween && !this._tween.complete && this._tween.stop(!1);
		this.moving = !0;
		this._tween = this.tween({
		  splitPercent: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Quadratic.EaseIn,
		  onComplete: this.onCombined.bind(this)
		});
		this._tween.start();
	  },
	  onSplitted: function () {
		this.moving = !1;
		this.splitted = !0;
	  },
	  onCombined: function () {
		this.splitted = this.moving = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.menu-car").requires("impact.entity").defines(function () {
	EntityMenuCar = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/car.png"),
	  inPos: {
		x: 0,
		y: 0
	  },
	  outPos: {
		x: 0,
		y: 0
	  },
	  _tween: null,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x -= this.size.x;
		this.pos.y -= this.size.y;
		this.inPos = ig.copy(this.pos);
		this.pos.x = -this.size.x;
		this.outPos = ig.copy(this.pos);
	  },
	  draw: function () {
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
	  },
	  moveIn: function () {
		null !== this._tween && !this._tween.complete && this._tween.stop(!1);
		this._tween = this.tween({
		  pos: this.inPos
		}, 1, {
		  easing: ig.Tween.Easing.Quadratic.EaseOut
		});
		this._tween.start();
	  },
	  moveOut: function () {
		null !== this._tween && !this._tween.complete && this._tween.stop(!1);
		this._tween = this.tween({
		  pos: this.outPos
		}, 0.5, {
		  easing: ig.Tween.Easing.Quadratic.EaseIn
		});
		this._tween.start();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.menu-finish-board").requires("impact.entity").defines(function () {
	EntityMenuFinishBoard = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/board-sign.png"),
	  inPos: {
		x: 0,
		y: 0
	  },
	  outPos: {
		x: 0,
		y: 0
	  },
	  text: {
		x: 0,
		y: 0,
		size: 12,
		font: "acrom-bold",
		fill: "#FFFFFF",
		align: "center",
		text: ""
	  },
	  moving: !1,
	  _tween: null,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x -= this.size.x;
		this.pos.y -= this.size.y;
		this.inPos = ig.copy(this.pos);
		this.pos.y = -this.size.y;
		this.outPos = ig.copy(this.pos);
		this.text.text = _STRINGS.Game.Finish;
		this.text.x = this.pos.x + this.size.x / 2;
		this.text.y = this.pos.y + 23;
	  },
	  update: function () {
		this.parent();
		this.moving && (this.text.x = this.pos.x + this.size.x / 2, this.text.y = this.pos.y + 23);
	  },
	  draw: function () {
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.font = this.text.size + "px " + this.text.font;
		this.context.fillStyle = this.text.fill;
		this.context.textAlign = this.text.align;
		this.context.fillText(this.text.text, this.text.x, this.text.y);
		this.context.restore();
	  },
	  moveIn: function () {
		null !== this._tween && this._tween.stop(!1);
		this.moving = !0;
		this._tween = this.tween({
		  pos: this.inPos
		}, 1, {
		  easing: ig.Tween.Easing.Quadratic.EaseOut,
		  onComplete: this.onMoveCompleted.bind(this)
		});
		this._tween.start();
	  },
	  moveOut: function () {
		null !== this._tween && this._tween.stop(!1);
		this.moving = !0;
		this._tween = this.tween({
		  pos: this.outPos
		}, 0.5, {
		  easing: ig.Tween.Easing.Quadratic.EaseIn,
		  onComplete: this.onMoveCompleted.bind(this)
		});
		this._tween.start();
	  },
	  onMoveCompleted: function () {
		this.moving = !1;
		this._tween = null;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-shadow").requires("impact.entity", "plugins.data.vector").defines(function () {
	EntityButtonShadow = ig.Entity.extend({
	  collides: ig.Entity.COLLIDES.NEVER,
	  type: ig.Entity.TYPE.A,
	  size: new Vector2(48, 48),
	  fillColor: null,
	  scale: 0,
	  zIndex: 1,
	  align: "left top",
	  autoShow: !0,
	  image: null,
	  shadow: null,
	  _type: null,
	  showed: !1,
	  enabled: !1,
	  pressed: !1,
	  hovered: !1,
	  animating: !1,
	  active: !1,
	  position: {
		image: {},
		shadow: {}
	  },
	  showText: !1,
	  text: "Button",
	  textProps: {
		text: "Button",
		size: 20,
		translate: {
		  x: 0,
		  y: 0
		},
		color: "#FFFFFF"
	  },
	  MARGIN_SHADOW: {
		x: 0,
		y: 0.06
	  },
	  SHADOW_PATH: "media/graphics/game/button/shadow-",
	  PATH: "media/graphics/game/button/",
	  SCALE: {
		IDLE: 1,
		HOVER: 1.05
	  },
	  ZINDEX: -1,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.setType(), this.setPosition(), this.autoShow && (this.show(), this.enabled = !0));
	  },
	  setType: function () {
		this._type && (this.image = new ig.Image(this.PATH + this._type + ".png"), this.size.x = this.image.width, this.size.y = this.image.height, this.shadow = new ig.Image(this.SHADOW_PATH + (this.size.x + "x" + this.size.y) + ".png"), this.shadow.failed && (this.shadow = !1));
	  },
	  setPosition: function () {
		this.setAlign();
		this.position.image.pos = {};
		this.position.image.pos.x = -this.image.width / 2;
		this.position.image.pos.y = -this.image.height / 2;
		this.position.image.translate = {};
		this.position.image.translate.x = this.pos.x + this.image.width / 2;
		this.position.image.translate.y = this.pos.y + this.image.height / 2;
		this.shadow && (this.position.shadow.pos = ig.copy(this.position.image.pos), this.position.shadow.translate = ig.copy(this.position.image.translate), this.position.shadow.translate.x += Math.ceil(this.size.x * this.MARGIN_SHADOW.x), this.position.shadow.translate.y += Math.ceil(this.size.y * this.MARGIN_SHADOW.y));
		this.ZINDEX = this.zIndex;
		this.setZIndex(-1);
	  },
	  setZIndex: function (b) {
		this.zIndex = b;
		ig.game.sortEntitiesDeferred();
	  },
	  setAlign: function () {
		this.align = this.align.split(" ");
		if ("object" === typeof this.align) {
		  switch (this.align[0]) {
			case "center":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		  switch (this.align[1]) {
			case "middle":
			  this.pos.y -= this.size.y / 2;
			  break;
			case "bottom":
			  this.pos.y -= this.size.y;
		  }
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.shadow && !this.pressed && !this.active && this.drawShadow();
		this.drawImage();
	  },
	  drawShadow: function () {
		this.context.save();
		this.context.translate(this.position.shadow.translate.x, this.position.shadow.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.shadow.data, this.position.shadow.pos.x, this.position.shadow.pos.y);
		this.context.restore();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.position.image.translate.x, this.position.image.translate.y);
		(this.pressed || this.active) && !this.animating ? this.context.scale(this.SCALE.IDLE, this.SCALE.IDLE) : this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.position.image.pos.x, this.position.image.pos.y);
		this.showText && this.drawText();
		this.context.restore();
	  },
	  drawText: function () {
		this.context.font = this.textProps.size + "px acrom-bold";
		this.context.fillStyle = this.textProps.color;
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		this.context.fillText(this.text, 0, 0);
	  },
	  clicked: function () {
		this.enabled && this.showed && !this.animating && (this.pressed = !0);
	  },
	  clicking: function () {},
	  released: function () {
		this.pressed && (this.showed && (ig.soundHandler.sfxPlayer.play("button"), this.manager.onButtonClick(this._type, this.text)), this.pressed = !1);
	  },
	  releasedOutside: function () {
		this.hovered = !1;
		this.pressed && (this.pressed = !1);
	  },
	  over: function () {
		this.enabled && !this.animating && (this.hovered = !0, this.scale = this.SCALE.HOVER);
	  },
	  leave: function () {
		this.enabled && !this.animating && (this.releasedOutside(), this.scale = this.SCALE.IDLE);
	  },
	  show: function () {
		this.setZIndex(this.ZINDEX);
		this.animating = !0;
		this.tween({
		  scale: this.SCALE.IDLE
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.showed = !0;
		this.animating = !1;
		this.enabled = !0;
		if ("function" === typeof this.manager.onButtonShowed) this.manager.onButtonShowed(this);
	  },
	  hide: function () {
		this.animating = !0;
		this.enabled = !1;
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.animating = this.showed = !1;
		this.setZIndex(-1);
		if ("function" === typeof this.manager.onButtonHidden) this.manager.onButtonHidden(this);
	  },
	  enable: function () {
		this.enabled = !0;
	  },
	  disable: function () {
		this.enabled = !1;
	  },
	  setActive: function (b) {
		this.active = b;
	  },
	  isActivated: function () {
		return this.active;
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-shadow-div").requires("game.entities.buttons.button-shadow", "plugins.clickable-div-layer").defines(function () {
	EntityButtonShadowDiv = EntityButtonShadow.extend({
	  clickableLayer: null,
	  link: null,
	  newWindow: !1,
	  div_layer_name: "more-games",
	  name: "moregames",
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games";
		_SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill();
		this.autoShow ? this.show() : this.hide();
	  },
	  show: function () {
		if (this.clickableLayer) {
		  var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		  ig.domHandler.show(b);
		}
		this.parent();
	  },
	  hide: function () {
		this.parent();
		if (this.clickableLayer) {
		  var b = ig.domHandler.getElementById("#" + this.div_layer_name);
		  ig.domHandler.hide(b);
		}
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.slider").requires("impact.entity").defines(function () {
	EntitySlider = ig.Entity.extend({
	  manager: null,
	  icon: {
		image: new ig.Image("media/graphics/game/ui/icon-bgm.png"),
		pos: {
		  x: 0,
		  y: 0
		},
		offset: {
		  x: -37,
		  y: 0
		}
	  },
	  bar: {
		image: new ig.Image("media/graphics/game/ui/slider-bar.png"),
		pos: {
		  x: 0,
		  y: 0
		}
	  },
	  fill: {
		image: new ig.Image("media/graphics/game/ui/slider-fill.png"),
		pos: {
		  x: 0,
		  y: 0
		},
		size: {
		  x: 0,
		  y: 0
		},
		offset: {
		  x: 0,
		  y: -1
		}
	  },
	  knob: {
		image: new ig.Image("media/graphics/game/ui/slider-knob.png"),
		pos: {
		  x: 0,
		  y: 0
		},
		margin: {
		  min: 10,
		  max: 10
		}
	  },
	  actualSize: {
		x: 0,
		y: 0
	  },
	  align: "center middle",
	  value: 0.5,
	  type: ig.Entity.TYPE.A,
	  enabled: !0,
	  updatingValue: !1,
	  pointer: null,
	  slide: {
		min: 0,
		max: 0,
		length: 0
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.icon.image = new ig.Image("media/graphics/game/ui/icon-" + this.index + ".png"), this.initSize(), this.initPos(), this.initSlide());
	  },
	  initSize: function () {
		this.size.x = this.bar.image.width;
		this.size.y = this.bar.image.height;
		this.fill.size.y = this.fill.image.height;
		this.actualSize.x = this.size.x - this.icon.offset.x;
		this.actualSize.y = this.icon.image.height;
	  },
	  initPos: function () {
		this.pos.x += (this.actualSize.x - this.size.x) / 2;
		this.pos.y += (this.actualSize.y - this.size.y) / 2;
		this.updateAlign();
		this.bar.pos.x = this.pos.x;
		this.bar.pos.y = this.pos.y;
		this.fill.pos.x = this.pos.x + (this.bar.image.width - this.fill.image.width) / 2 + this.fill.offset.x;
		this.fill.pos.y = this.pos.y + (this.bar.image.height - this.fill.image.height) / 2 + this.fill.offset.y;
		this.knob.pos.x = this.fill.pos.x + this.fill.size.x - this.knob.image.width / 2;
		this.knob.pos.y = this.fill.pos.y + (this.fill.image.height - this.knob.image.height) / 2;
		this.icon.pos.x = this.pos.x + this.icon.offset.x;
		this.icon.pos.y = this.pos.y + (this.bar.image.height - this.icon.image.height) / 2 + this.icon.offset.y;
	  },
	  initSlide: function () {
		this.slide.min = this.fill.pos.x + this.knob.margin.min;
		this.slide.max = this.fill.pos.x + this.fill.image.width - this.knob.margin.max;
		this.slide.length = this.slide.max - this.slide.min;
		this.knob.pos.x = this.slide.min + this.slide.length * this.value - this.knob.image.width / 2;
		this.fill.size.x = this.knob.pos.x - this.fill.pos.x + this.knob.image.width / 2;
	  },
	  updateAlign: function () {
		var b = this.align.split(" ");
		switch (b[0]) {
		  case "center":
			this.pos.x -= this.size.x / 2;
			break;
		  case "right":
			this.pos.x -= this.size.x;
		}
		switch (b[1]) {
		  case "middle":
			this.pos.y -= this.size.y / 2;
			break;
		  case "bottom":
			this.pos.y -= this.size.y;
		}
	  },
	  update: function () {
		this.pressed && (this.checkRelease(), this.updateValue());
		this.parent();
	  },
	  updateValue: function () {
		var b = this.pointer.pos.x - this.slide.min;
		0 > b ? b = 0 : b > this.slide.length && (b = this.slide.length);
		var c = b / this.slide.length;
		this.value !== c && (this.value = c, this.manager.onSliderChanged(this.index, this.value));
		this.knob.pos.x = this.slide.min + b - this.knob.image.width / 2;
		this.fill.size.x = this.knob.pos.x - this.fill.pos.x + this.knob.image.width / 2;
	  },
	  checkRelease: function () {
		ig.input.released("click") && this.released();
	  },
	  draw: function () {
		this.context.save();
		this.context.drawImage(this.bar.image.data, this.pos.x, this.pos.y);
		this.fill.size.x && this.context.drawImage(this.fill.image.data, 0, 0, this.fill.size.x, this.fill.size.y, this.fill.pos.x, this.fill.pos.y, this.fill.size.x, this.fill.size.y);
		this.context.drawImage(this.knob.image.data, this.knob.pos.x, this.knob.pos.y);
		this.context.drawImage(this.icon.image.data, this.icon.pos.x, this.icon.pos.y);
		this.context.restore();
	  },
	  clicked: function () {
		this.enabled && (this.pressed = !0);
	  },
	  released: function () {
		this.pressed = !1;
		ig.soundHandler.sfxPlayer.play("button");
		this.manager.onSliderReleased(this.index, this.value);
	  },
	  releasedOutside: function () {
		this.released();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.settings-slider").requires("game.entities.slider").defines(function () {
	EntitySettingsSlider = EntitySlider.extend({
	  enabled: !1,
	  scale: 0,
	  center: {
		parent: {},
		bar: {},
		fill: {},
		knob: {},
		icon: {}
	  },
	  translate: {
		bar: {},
		fill: {},
		knob: {},
		icon: {}
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.initTranslate();
		this.show();
	  },
	  initSlide: function () {
		this.parent();
		this.translate.knob.x = this.knob.pos.x - this.center.parent.x + this.knob.image.width / 2;
	  },
	  initTranslate: function () {
		this.center.parent = this.manager.getCenter();
		this.center.bar.x = -this.bar.image.width / 2;
		this.center.bar.y = -this.bar.image.height / 2;
		this.center.fill.x = -this.fill.image.width / 2;
		this.center.fill.y = -this.fill.image.height / 2;
		this.center.knob.x = -this.knob.image.width / 2;
		this.center.knob.y = -this.knob.image.height / 2;
		this.center.icon.x = -this.icon.image.width / 2;
		this.center.icon.y = -this.icon.image.height / 2;
		this.translate.bar.x = this.bar.pos.x - this.center.parent.x + this.bar.image.width / 2;
		this.translate.bar.y = this.bar.pos.y - this.center.parent.y + this.bar.image.height / 2;
		this.translate.fill.x = this.fill.pos.x - this.center.parent.x + this.fill.image.width / 2;
		this.translate.fill.y = this.fill.pos.y - this.center.parent.y + this.fill.image.height / 2;
		this.translate.knob.x = this.knob.pos.x - this.center.parent.x + this.knob.image.width / 2;
		this.translate.knob.y = this.knob.pos.y - this.center.parent.y + this.knob.image.height / 2;
		this.translate.icon.x = this.icon.pos.x - this.center.parent.x + this.icon.image.width / 2;
		this.translate.icon.y = this.icon.pos.y - this.center.parent.y + this.icon.image.height / 2;
	  },
	  updateValue: function () {
		this.parent();
		this.translate.knob.x = this.knob.pos.x - this.center.parent.x + this.knob.image.width / 2;
	  },
	  draw: function () {
		this.drawBar();
		this.drawFill();
		this.drawKnob();
		this.drawIcon();
	  },
	  drawBar: function () {
		this.context.save();
		this.context.translate(this.center.parent.x, this.center.parent.y);
		this.context.scale(this.scale, 1);
		this.context.translate(this.translate.bar.x, this.translate.bar.y);
		this.context.drawImage(this.bar.image.data, this.center.bar.x, this.center.bar.y);
		this.context.restore();
	  },
	  drawFill: function () {
		this.fill.size.x && (this.context.save(), this.context.translate(this.center.parent.x, this.center.parent.y), this.context.scale(this.scale, 1), this.context.translate(this.translate.fill.x, this.translate.fill.y), this.context.drawImage(this.fill.image.data, 0, 0, this.fill.size.x, this.fill.size.y, this.center.fill.x, this.center.fill.y, this.fill.size.x, this.fill.size.y), this.context.restore());
	  },
	  drawKnob: function () {
		this.context.save();
		this.context.translate(this.center.parent.x, this.center.parent.y);
		this.context.scale(this.scale, 1);
		this.context.translate(this.translate.knob.x, this.translate.knob.y);
		this.context.drawImage(this.knob.image.data, this.center.knob.x, this.center.knob.y);
		this.context.restore();
	  },
	  drawIcon: function () {
		this.context.save();
		this.context.translate(this.center.parent.x, this.center.parent.y);
		this.context.scale(this.scale, 1);
		this.context.translate(this.translate.icon.x, this.translate.icon.y);
		this.context.drawImage(this.icon.image.data, this.center.icon.x, this.center.icon.y);
		this.context.restore();
	  },
	  show: function () {
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.enabled = !0;
	  },
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.kill();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-shadow-dialog").requires("game.entities.buttons.button-shadow").defines(function () {
	EntityButtonShadowDialog = EntityButtonShadow.extend({
	  setPosition: function () {
		this.parent();
		this.position.animation = {};
		var b = this.position.animation.center = this.manager.getCenter();
		this.position.animation.translate = new Vector2(this.pos.x - b.x + this.image.width / 2, this.pos.y - b.y + this.image.height / 2);
	  },
	  draw: function () {
		this.animating ? this.drawAnimation() : (this.shadow && !this.pressed && !this.active && this.drawShadow(), this.drawImage());
	  },
	  drawShadow: function () {
		this.context.save();
		this.context.translate(this.position.shadow.translate.x, this.position.shadow.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.shadow.data, this.position.shadow.pos.x, this.position.shadow.pos.y);
		this.context.restore();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.position.image.translate.x, this.position.image.translate.y);
		(this.pressed || this.active) && !this.animating ? this.context.scale(this.SCALE.IDLE, this.SCALE.IDLE) : this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.position.image.pos.x, this.position.image.pos.y);
		this.showText && this.drawText();
		this.context.restore();
	  },
	  drawText: function () {
		this.context.font = this.textProps.size + "px acrom-bold";
		this.context.fillStyle = this.textProps.color;
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		this.context.fillText(this.text, 0, 0);
	  },
	  drawAnimation: function () {
		this.context.save();
		this.manager.getCenter();
		this.context.translate(this.position.animation.center.x, this.position.animation.center.y);
		this.context.scale(this.scale, this.scale);
		this.context.translate(this.position.animation.translate.x, this.position.animation.translate.y);
		this.context.drawImage(this.image.data, this.position.image.pos.x, this.position.image.pos.y);
		this.showText && this.drawText();
		this.context.restore();
	  },
	  setZIndex: function () {
		this.zIndex = this.manager.zIndex + 1;
		ig.game.sortEntitiesDeferred();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.settings").requires("impact.entity", "game.entities.settings-slider", "game.entities.buttons.button-shadow-dialog").defines(function () {
	EntitySettings = ig.Entity.extend({
	  manager: null,
	  type: ig.Entity.TYPE.A,
	  scale: 0,
	  pointer: null,
	  title: "Settings",
	  text: {
		text: "",
		size: 30,
		font: "acrom-bold",
		fill: "#FFFFFF",
		align: "center",
		baseline: "middle",
		center: {
		  x: 0,
		  y: 0
		},
		translateA: {
		  x: 0,
		  y: 0
		},
		translateB: {
		  x: 0,
		  y: -85
		}
	  },
	  sliders: {
		bgm: null,
		sfx: null
	  },
	  buttons: {},
	  ignorePause: !0,
	  calledFromMenu: !0,
	  SLIDER_DISTANCE: 55,
	  POSITION: {},
	  OVERLAY_OPACITY: 0.75,
	  BUTTON_GAP: 100,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.size.x = ig.system.width, this.size.y = ig.system.height, this.pos.x = 0, this.pos.y = 0, this.zIndex = ig.game.getHighestZIndex(), ig.game.sortEntitiesDeferred(), this.text.translateA.x = ig.system.width / 2, this.text.translateA.y = ig.system.height / 2, this.text.text = this.title, this.calledFromMenu = this.manager instanceof EntityMenu, this.spawnSliders(), this.spawnButtons(), this.show());
	  },
	  spawnSliders: function () {
		var b = ig.system.width / 2,
		  c = (ig.system.height - this.SLIDER_DISTANCE) / 2,
		  d;
		for (d in this.sliders) {
		  var e = ig.game.load(d);
		  this.sliders[d] = ig.game.spawnEntity(EntitySettingsSlider, b, c, {
			manager: this,
			zIndex: this.zIndex + 1,
			index: d,
			value: e,
			pointer: this.pointer,
			ignorePause: !0
		  });
		  c += this.SLIDER_DISTANCE;
		}
	  },
	  spawnButtons: function () {
		var b = ig.system.width / 2,
		  c = 0.75 * ig.system.height;
		this.title === _STRINGS.Game.Settings && (this.buttons.home = ig.game.spawnEntity(EntityButtonShadowDialog, b - this.BUTTON_GAP, c, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  _type: "home",
		  align: "center middle",
		  ignorePause: !0
		}), this.buttons.back = ig.game.spawnEntity(EntityButtonShadowDialog, b + this.BUTTON_GAP, c, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  _type: "tool-undo",
		  align: "center middle",
		  ignorePause: !0
		}));
		this.buttons.play = this.calledFromMenu ? ig.game.spawnEntity(EntityButtonShadowDialog, b, c, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  _type: "home",
		  align: "center middle",
		  ignorePause: !0
		}) : ig.game.spawnEntity(EntityButtonShadowDialog, b, c, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  _type: "play-big",
		  align: "center middle",
		  ignorePause: !0
		});
	  },
	  show: function () {
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  hide: function () {
		for (var b in this.buttons) this.buttons[b].hide();
		for (b in this.sliders) this.sliders[b].hide();
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.kill();
	  },
	  kill: function () {
		for (var b in this.buttons) this.buttons[b].kill();
		this.parent();
		if ("function" === typeof this.manager.onSettingsClosed) this.manager.onSettingsClosed();
	  },
	  draw: function () {
		this.parent();
		this.drawOverlay();
		this.drawText();
	  },
	  drawOverlay: function () {
		this.context.save();
		this.context.globalAlpha = this.OVERLAY_OPACITY * this.scale;
		this.context.fillStyle = "#000000";
		this.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
		this.context.globalAlpha = 1;
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.text.translateA.x, this.text.translateA.y);
		this.context.scale(this.scale, this.scale);
		this.context.translate(this.text.translateB.x, this.text.translateB.y);
		this.context.font = this.text.size + "px " + this.text.font;
		this.context.fillStyle = this.text.fill;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.text, this.text.center.x, this.text.center.y);
		this.context.restore();
	  },
	  onButtonClick: function (b) {
		switch (b) {
		  case "home":
			this.manager.onButtonClick("home");
			break;
		  case "tool-undo":
			this.manager.onButtonClick("back");
		}
		this.hide();
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  },
	  onSliderChanged: function (b, c) {
		switch (b) {
		  case "bgm":
			ig.soundHandler.bgmPlayer.volume(c);
			break;
		  case "sfx":
			ig.soundHandler.sfxPlayer.volume(c);
		}
	  },
	  onSliderReleased: function (b, c) {
		c = Math.round(100 * c) / 100;
		ig.game.save(b, c);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.menu").requires("impact.entity", "game.entities.menu-title", "game.entities.menu-land", "game.entities.menu-car", "game.entities.menu-finish-board", "game.entities.buttons.button-shadow", "game.entities.buttons.button-shadow-div", "game.entities.controller.settings").defines(function () {
	EntityMenu = ig.Entity.extend({
	  theme: "day",
	  land: null,
	  buttons: {
		play: null,
		settings: null
	  },
	  buttonTexts: [],
	  buttonClick: [],
	  autoShow: !1,
	  callback: null,
	  BUTTON_HEIGHT: 52,
	  BUTTON_DISTANCE: 10,
	  TITLE_POS: {
		x: 312.5,
		y: 54
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.title = ig.game.spawnEntity(EntityMenuTitle, this.TITLE_POS.x, this.TITLE_POS.y, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  autoShow: this.autoShow
		});
		this.land = ig.game.spawnEntity(EntityMenuLand, 0, 0, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  splitted: !this.autoShow
		});
		this.spawnButtons();
		b = this.land.pos.x + 0.25 * this.land.size.x;
		c = this.land.pos.y;
		this.car = ig.game.spawnEntity(EntityMenuCar, b, c, {
		  manager: this,
		  zIndex: this.zIndex + 1
		});
		b = this.land.pos.x + 0.85 * this.land.size.x;
		this.finishBoard = ig.game.spawnEntity(EntityMenuFinishBoard, b, c, {
		  manager: this,
		  zIndex: this.zIndex + 1
		});
	  },
	  spawnButtons: function () {
		this.buttonTexts = [_STRINGS.Button.Play, _STRINGS.Game.Settings, _STRINGS.Button.MoreGames];
		this.buttonClick = [this.showSelect.bind(this), this.showSettings.bind(this)];
		var b = 0,
		  c = ig.system.width / 2,
		  d = this.title.getBottomPos() + this.BUTTON_HEIGHT,
		  e;
		for (e in this.buttons) this.buttonTexts[b] !== _STRINGS.Button.MoreGames && (this.buttons[e] = ig.game.spawnEntity(EntityButtonShadow, c, d, {
		  manager: this,
		  _type: "text-red",
		  align: "center middle",
		  zIndex: this.zIndex + 1,
		  showText: !0,
		  text: this.buttonTexts[b],
		  autoShow: this.autoShow
		})), b++, d += this.BUTTON_HEIGHT + this.BUTTON_DISTANCE;
		_SETTINGS.MoreGames.Enabled && (this.buttons.moreGames = ig.game.spawnEntity(EntityButtonShadowDiv, c, d, {
		  manager: this,
		  _type: "text-red",
		  align: "center middle",
		  zIndex: this.zIndex + 1,
		  showText: !0,
		  text: _STRINGS.Button.MoreGames,
		  autoShow: this.autoShow
		}));
	  },
	  onButtonClick: function (b, c) {
		for (var d = 0; d < this.buttonClick.length; d++) if (this.buttonTexts[d] === c) this.buttonClick[d]();
	  },
	  showSelect: function () {
		this.callback = this.manager.showSelect.bind(this.manager);
		this.hide();
	  },
	  showSettings: function () {
		this.title.hide();
		this.setButtonsShow(!1);
		this.callback = this.createSettings.bind(this);
	  },
	  createSettings: function () {
		this.settings = ig.game.spawnEntity(EntitySettings, 0, 0, {
		  manager: this,
		  pointer: this.pointer,
		  zIndex: this.zIndex + 2
		});
	  },
	  setButtonsShow: function (b) {
		b = b ? "show" : "hide";
		for (var c in this.buttons) {
		  var d = this.buttons[c];
		  if ("object" === typeof d) d[b]();
		}
	  },
	  onSettingsClosed: function () {
		this.title.show();
		this.setButtonsShow(!0);
	  },
	  onTitleAnimationCompleted: function () {
		this.car.moveIn();
		this.finishBoard.moveIn();
	  },
	  hide: function () {
		this.title.hide();
		this.setButtonsShow(!1);
		this.car.moveOut();
		this.finishBoard.moveOut();
		this.land.split();
	  },
	  onTitleHidden: function () {
		this.callback();
	  },
	  show: function () {
		this.title.show();
		this.setButtonsShow(!0);
		this.car.moveIn();
		this.finishBoard.moveIn();
		this.land.combine();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.ui-title").requires("impact.entity").defines(function () {
	EntityUiTitle = ig.Entity.extend({
	  manager: null,
	  size: new Vector2(48, 48),
	  scale: 0,
	  zIndex: 1,
	  align: "left top",
	  autoShow: !0,
	  image: new ig.Image("media/graphics/game/button/text-long-orange.png"),
	  shadow: {
		image: new ig.Image("media/graphics/game/button/shadow-288x61.png"),
		translate: {
		  x: 0,
		  y: 0
		}
	  },
	  showed: !1,
	  drawPos: {},
	  translate: {},
	  title: "TITLE",
	  text: {
		value: "",
		size: 32,
		color: "#FFFFFF",
		align: "center",
		baseline: "middle",
		offset: {
		  x: 0,
		  y: 0
		}
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.size.x = this.image.width, this.size.y = this.image.height, this.setPosition(), this.text.value = this.title, this.text.pos = ig.copy(this.translate), this.autoShow && this.show());
	  },
	  setPosition: function () {
		this.setAlign();
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
		this.shadow.translate = ig.copy(this.translate);
		this.shadow.translate.y += 4;
	  },
	  setAlign: function () {
		this.align = this.align.split(" ");
		if ("object" === typeof this.align) {
		  switch (this.align[0]) {
			case "center":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		  switch (this.align[1]) {
			case "middle":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		}
	  },
	  draw: function () {
		this.parent();
		this.drawShadow();
		this.drawImage();
		this.drawText();
	  },
	  drawShadow: function () {
		this.context.save();
		this.context.translate(this.shadow.translate.x, this.shadow.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.shadow.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.translate.x, this.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.translate.x + this.text.offset.x, this.translate.y + this.text.offset.y);
		this.context.scale(this.scale, this.scale);
		this.context.font = this.text.size + "px acrom-bold";
		this.context.fillStyle = this.text.color;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.value, 0, 0);
		this.context.restore();
	  },
	  show: function () {
		this.showed = !0;
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showed = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.select-level").requires("impact.entity").defines(function () {
	EntitySelectLevel = ig.Entity.extend({
	  manager: null,
	  type: ig.Entity.TYPE.NONE,
	  images: {
		locked: new ig.Image("media/graphics/game/button/level-locked.png"),
		unlocked: new ig.Image("media/graphics/game/button/level-unlocked.png"),
		star: new ig.Image("media/graphics/game/ui/level-star.png")
	  },
	  currentImage: new ig.Image("media/graphics/game/button/level-locked.png"),
	  shadowImage: new ig.Image("media/graphics/game/button/shadow-95x95.png"),
	  stars: 0,
	  level: 0,
	  center: {
		x: 0,
		y: 0
	  },
	  drawPos: {
		x: 0,
		y: 0
	  },
	  translate: {
		x: 0,
		y: 0
	  },
	  shadowTranslate: {
		x: 0,
		y: 0
	  },
	  textTranslate: {
		x: 0,
		y: 0
	  },
	  translate2: {
		x: 0,
		y: 0
	  },
	  shadowTranslate2: {
		x: 0,
		y: 0
	  },
	  textTranslate2: {
		x: 0,
		y: 0
	  },
	  starDrawPos: {
		x: 0,
		y: 0
	  },
	  starTranslate: {
		x: 0,
		y: 0
	  },
	  starTranslate2: [],
	  scale: {
		x: 0,
		y: 0
	  },
	  showed: !1,
	  pressed: !1,
	  animating: !1,
	  hovered: !1,
	  zIndex: -1,
	  text: {
		value: "",
		size: 28,
		color: "#FFFFFF",
		align: "center",
		baseline: "middle",
		offset: {
		  x: 0,
		  y: -4
		}
	  },
	  ZINDEX: -1,
	  TEXT_OFFSET: {
		x: 0,
		y: -20
	  },
	  SHADOW_OFFSET: {
		x: 0,
		y: 5
	  },
	  SCALE: {
		IDLE: 1,
		HOVER: 1.05,
		PRESS: 0.95
	  },
	  STAR_POSITIONS: [{
		x: 25.5,
		y: 60
	  }, {
		x: 48.5,
		y: 60
	  }, {
		x: 69.5,
		y: 60
	  }],
	  init: function (b, c, d) {
		this.parent(b, c, d);
		if (!ig.global.wm) {
		  this.context = ig.system.context;
		  this.ZINDEX = this.zIndex;
		  this.size.x = this.currentImage.width;
		  this.size.y = this.currentImage.height;
		  this.drawPos.x = -this.size.x / 2;
		  this.drawPos.y = -this.size.y / 2;
		  this.text.value = this.level;
		  this.translate2.x = this.pos.x + this.size.x / 2;
		  this.translate2.y = this.pos.y + this.size.y / 2;
		  this.translate = ig.copy(this.translate2);
		  this.translate.x -= this.center.x;
		  this.translate.y -= this.center.y;
		  this.shadowTranslate2 = ig.copy(this.translate2);
		  this.shadowTranslate2.x += this.SHADOW_OFFSET.x;
		  this.shadowTranslate2.y += this.SHADOW_OFFSET.y;
		  this.shadowTranslate = ig.copy(this.shadowTranslate2);
		  this.shadowTranslate.x -= this.center.x;
		  this.shadowTranslate.y -= this.center.y;
		  this.textTranslate2 = ig.copy(this.translate2);
		  this.textTranslate2.x += this.TEXT_OFFSET.x;
		  this.textTranslate2.y += this.TEXT_OFFSET.y;
		  this.textTranslate = ig.copy(this.textTranslate2);
		  this.textTranslate.x -= this.center.x;
		  this.textTranslate.y -= this.center.y;
		  this.starDrawPos.x = -this.images.star.width / 2;
		  this.starDrawPos.y = -this.images.star.height / 2;
		  this.starTranslate.x = this.pos.x + this.size.x / 2;
		  this.starTranslate.y = this.pos.y + this.size.y / 2;
		  for (d = 0; d < this.STAR_POSITIONS.length; d++) c = this.STAR_POSITIONS[d], b = this.pos.x + c.x - this.starTranslate.x, c = this.pos.y + c.y - this.starTranslate.y, this.starTranslate2.push({
			x: b,
			y: c
		  });
		  this.unlocked && (this.currentImage = this.images.unlocked);
		}
	  },
	  draw: function () {
		this.parent();
		this.showed && (this.animating ? (this.drawAnimateShadow(), this.drawAnimateImage(), this.drawAnimateText(), this.drawAnimateStars()) : (this.pressed || this.drawShadow(), this.drawImage(), this.drawText(), this.drawStars()));
	  },
	  drawAnimateImage: function () {
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.translate(this.translate.x, this.translate.y);
		this.context.drawImage(this.currentImage.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawAnimateShadow: function () {
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.translate(this.shadowTranslate.x, this.shadowTranslate.y);
		this.context.drawImage(this.shadowImage.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawAnimateText: function () {
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.translate(this.textTranslate.x, this.textTranslate.y);
		this.context.font = this.text.size + "px acrom-bold";
		this.context.fillStyle = this.text.color;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.value, 0, 0);
		this.context.restore();
	  },
	  drawAnimateStars: function () {
		for (var b = 0; b < this.stars; b++) {
		  var c = this.STAR_POSITIONS[b];
		  this.context.save();
		  this.context.translate(this.center.x, this.center.y);
		  this.context.scale(this.scale.x, this.scale.y);
		  this.context.translate(c.x + this.pos.x - this.center.x, c.y + this.pos.y - this.center.y);
		  this.context.drawImage(this.images.star.data, this.starDrawPos.x, this.starDrawPos.y);
		  this.context.restore();
		}
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.translate2.x, this.translate2.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.drawImage(this.currentImage.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawShadow: function () {
		this.context.save();
		this.context.translate(this.shadowTranslate2.x, this.shadowTranslate2.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.drawImage(this.shadowImage.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.textTranslate2.x, this.textTranslate2.y);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.font = this.text.size + "px acrom-bold";
		this.context.fillStyle = this.text.color;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.value, 0, 0);
		this.context.restore();
	  },
	  drawStars: function () {
		for (var b = 0; b < this.stars; b++) {
		  var c = this.starTranslate2[b];
		  this.context.save();
		  this.context.translate(this.starTranslate.x, this.starTranslate.y);
		  this.context.scale(this.scale.x, this.scale.y);
		  this.context.translate(c.x, c.y);
		  this.context.drawImage(this.images.star.data, this.starDrawPos.x, this.starDrawPos.y);
		  this.context.restore();
		}
	  },
	  show: function () {
		this.animating = this.showed = !0;
		this.zIndex = this.ZINDEX;
		this.type = ig.Entity.TYPE.A;
		ig.game.sortEntitiesDeferred();
		this.tween({
		  scale: {
			x: this.SCALE.IDLE,
			y: this.SCALE.IDLE
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.animating = !1;
	  },
	  hide: function () {
		this.animating = !0;
		this.tween({
		  scale: {
			x: 0,
			y: this.SCALE.IDLE
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showed = !1;
		this.zIndex = -1;
		this.type = ig.Entity.TYPE.NONE;
		ig.game.sortEntitiesDeferred();
		this.animating = !1;
	  },
	  over: function () {
		this.unlocked && !this.hovered && (this.hovered = !0, this.scale.x = this.SCALE.HOVER, this.scale.y = this.SCALE.HOVER);
	  },
	  leave: function () {
		this.hovered && this.releasedOutside();
	  },
	  clicked: function () {
		this.unlocked && this.showed && !this.animating && !this.pressed && (this.pressed = !0, this.scale.x = this.SCALE.PRESS, this.scale.y = this.SCALE.PRESS, ig.soundHandler.sfxPlayer.play("button"));
	  },
	  released: function () {
		this.showed && !this.animating && this.pressed && (this.manager.onLevelSelected(this.level), this.releasedOutside());
	  },
	  releasedOutside: function () {
		this.hovered = this.pressed = !1;
		this.scale.x = this.SCALE.IDLE;
		this.scale.y = this.SCALE.IDLE;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.select").requires("impact.entity", "game.entities.ui-title", "game.entities.select-level", "game.entities.buttons.button-shadow-dialog").defines(function () {
	EntitySelect = ig.Entity.extend({
	  manager: null,
	  autoShow: !1,
	  background: {
		color: "#000000",
		opacity: 0.25,
		size: {
		  x: 960,
		  y: 560
		}
	  },
	  drawPos: {
		x: 0,
		y: 0
	  },
	  translate: {
		x: 0,
		y: 0
	  },
	  scale: {
		x: 0,
		y: 0
	  },
	  showed: !1,
	  _tween: null,
	  levelImage: new ig.Image("media/graphics/game/button/level-unlocked.png"),
	  levels: [],
	  levelCount: 10,
	  levelsData: {},
	  _loadLevel: null,
	  backButton: null,
	  COL: 5,
	  ROW: 2,
	  MARGIN: {
		TOP: 20,
		RIGHT: 20,
		BOTTOM: 20,
		LEFT: 20
	  },
	  OFFSET: {
		x: 0,
		y: -30
	  },
	  GAP: 10,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.levelCount = ig.game.TOTAL_LEVELS;
		this.ROW = Math.ceil(this.levelCount / this.COL);
		this.levelsData = ig.game.getLevelsData();
		this.size.x = this.COL * this.levelImage.width + (this.COL - 1) * this.GAP + this.MARGIN.LEFT + this.MARGIN.RIGHT;
		this.size.y = this.ROW * this.levelImage.height + (this.ROW - 1) * this.GAP + this.MARGIN.TOP + this.MARGIN.BOTTOM;
		this.pos.x = (ig.system.width - this.size.x) / 2 + this.OFFSET.x;
		this.pos.y = (ig.system.height - this.size.y) / 2 + this.OFFSET.y;
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
		this.title = ig.game.spawnEntity(EntityUiTitle, ig.system.width / 2, 25, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  align: "center top",
		  title: _STRINGS.Home.SelectLevel,
		  autoShow: !1
		});
		this.spawnLevels();
		this.backButton = ig.game.spawnEntity(EntityButtonShadowDialog, ig.system.width / 2, 430, {
		  manager: this,
		  zIndex: this.zIndex + 1,
		  _type: "home",
		  align: "center middle",
		  ignorePause: !0,
		  autoShow: !1
		});
		this.autoShow && this.show();
	  },
	  spawnLevels: function () {
		for (var b = 1, c = this.getCenter(), d = this.pos.y + this.MARGIN.TOP, e = 0; e < this.ROW; e++) {
		  for (var f = this.pos.x + this.MARGIN.LEFT, j = 0; j < this.COL; j++) if (b <= this.levelCount) {
			var n = ig.game.spawnEntity(EntitySelectLevel, f, d, {
			  manager: this,
			  center: c,
			  zIndex: this.zIndex + 1,
			  level: b,
			  unlocked: this.levelsData[b].unlocked,
			  stars: this.levelsData[b].stars
			});
			this.levels.push(n);
			b++;
			f += this.levelImage.width + this.GAP;
		  }
		  d += this.levelImage.height + this.GAP;
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.showed && (this.context.save(), this.context.fillStyle = this.background.color, this.context.globalAlpha = this.background.opacity, this.context.translate(this.translate.x, this.translate.y), this.context.scale(this.scale.x, this.scale.y), this.context.fillRect(this.drawPos.x, this.drawPos.y, this.size.x, this.size.y), this.context.globalAlpha = 1, this.context.restore());
	  },
	  show: function () {
		null !== this._tween && this._tween.stop(!1);
		this.title.show();
		this.setLevelsShow(!0);
		this.backButton.show();
		this.showed = !0;
		this._tween = this.tween({
		  scale: {
			x: 1,
			y: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		});
		this._tween.start();
	  },
	  onShowed: function () {},
	  hide: function () {
		null !== this._tween && this._tween.stop(!1);
		this.title.hide();
		this.setLevelsShow(!1);
		this.backButton.hide();
		this._tween = this.tween({
		  scale: {
			x: 0,
			y: 0
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		});
		this._tween.start();
	  },
	  onHidden: function () {
		this.showed = !1;
		null !== this._loadLevel ? (ig.game.level = this._loadLevel, ig.game.clearDrawingData(), ig.game.sessionData.tutorial && 1 === ig.game.level ? ig.game.loadLevel(LevelTutorial) : ig.game.loadLevel(LevelDraw)) : this.manager.showMenu();
	  },
	  setLevelsShow: function (b) {
		b = b ? "show" : "hide";
		for (var c = 0; c < this.levels.length; c++) this.levels[c][b]();
	  },
	  onLevelSelected: function (b) {
		this._loadLevel = b;
		this.hide();
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  },
	  onButtonClick: function (b) {
		"home" === b && this.hide();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.home").requires("impact.entity", "game.entities.controller.background", "game.entities.controller.menu", "game.entities.controller.select").defines(function () {
	EntityHome = ig.Entity.extend({
	  theme: "day",
	  background: null,
	  title: null,
	  menu: null,
	  select: null,
	  startWithMenu: !0,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.theme = ig.global.theme;
		this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0, {
		  manager: this
		});
		this.background = ig.game.spawnEntity(EntityBackground, 0, 0, {
		  theme: this.theme
		});
		this.startWithMenu = "menu" === ig.game.homeMode;
		b = ig.game.getHighestZIndex();
		this.menu = ig.game.spawnEntity(EntityMenu, 0, 0, {
		  manager: this,
		  zIndex: b,
		  theme: this.theme,
		  autoShow: this.startWithMenu,
		  pointer: this.pointer
		});
		this.select = ig.game.spawnEntity(EntitySelect, 0, 0, {
		  manager: this,
		  zIndex: b + 1,
		  autoShow: !this.startWithMenu,
		  pointer: this.pointer
		});
	  },
	  showSelect: function () {
		this.select.show();
	  },
	  showMenu: function () {
		this.menu.show();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.levels.home").requires("impact.image", "game.entities.controller.home").defines(function () {
	LevelHome = {
	  entities: [{
		type: "EntityHome",
		x: 0,
		y: 0
	  }],
	  layer: []
	};
  });
  ig.baked = !0;
  ig.module("game.entities.draw-grid").requires("impact.entity").defines(function () {
	EntityDrawGrid = ig.Entity.extend({
	  image: new ig.Image("media/graphics/game/ui/grid.png"),
	  opacity: 0,
	  autoShow: !1,
	  showed: !0,
	  type: ig.Entity.TYPE.A,
	  OVERLAY_OPACITY: 0.25,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = ig.system.width;
		this.size.y = ig.system.height;
		this.autoShow && this.show();
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.globalAlpha = this.opacity;
		this.context.save();
		this.context.fillStyle = "rgba(0, 0, 0, " + this.OVERLAY_OPACITY + ")";
		this.context.fillRect(0, 0, ig.system.realWidth, ig.system.realHeight);
		this.context.restore();
		this.context.drawImage(this.image.data, 0, 0);
		this.context.restore();
	  },
	  show: function () {
		this.tween({
		  opacity: 1
		}, 1, {
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.manager.onGridShowed();
	  },
	  hide: function () {
		this.tween({
		  opacity: 0
		}, 1, {
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.manager.onGridHidden();
	  },
	  clicked: function () {
		this.manager.onGridClick();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-land").requires("impact.entity").defines(function () {
	EntityDrawLand = ig.Entity.extend({
	  theme: "day|night",
	  tileImage: new ig.Image("media/graphics/game/tile/day.png"),
	  tiles: [],
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.createTiles();
	  },
	  createTiles: function () {
		this.tileImage = new ig.Image("media/graphics/game/tile/" + this.theme + ".png");
		this.tiles = [];
		for (var b = Math.ceil(this.size.x / this.tileImage.width), c = Math.ceil(this.size.y / this.tileImage.height), d = 0, e = 0; e < c; e++) {
		  var f = this.pos.y + d,
			j = this.tileImage.height;
		  e === c - 1 && (j = this.size.y - d);
		  for (var n = 0, m = 0; m < b; m++) {
			var g = this.pos.x + n,
			  t = this.tileImage.width;
			m === b - 1 && (t = this.size.x - n);
			this.tiles.push({
			  x: g,
			  y: f,
			  w: t,
			  h: j
			});
			n += this.tileImage.width;
		  }
		  d += this.tileImage.height;
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.drawTiles();
	  },
	  drawTiles: function () {
		this.context.save();
		for (var b = 0; b < this.tiles.length; b++) {
		  var c = this.tiles[b];
		  this.context.drawImage(this.tileImage.data, 0, 0, c.w, c.h, c.x, c.y, c.w, c.h);
		}
		this.context.restore();
	  },
	  getRunData: function () {
		var b = {};
		b._id = this.id;
		b.position = ig.copy(this.pos);
		b.size = ig.copy(this.size);
		return b;
	  },
	  hasId: function (b) {
		return this._id === b;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-wall").requires("impact.entity").defines(function () {
	EntityDrawWall = ig.Entity.extend({
	  manager: null,
	  color: "#777777",
	  vertices: [],
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.createVertices();
	  },
	  createVertices: function () {
		this.left ? (this.vertices.push({
		  x: this.pos.x + this.size.x,
		  y: this.pos.y
		}), this.vertices.push({
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y
		})) : (this.vertices.push({
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y
		}), this.vertices.push({
		  x: this.pos.x,
		  y: this.pos.y
		}));
		this.vertices.push({
		  x: this.pos.x,
		  y: this.pos.y + this.size.y
		});
		this.vertices.push({
		  x: this.pos.x + this.size.x,
		  y: this.pos.y + this.size.y
		});
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.drawFromVertices();
	  },
	  drawFromVertices: function () {
		this.context.save();
		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.moveTo(this.vertices[0].x, this.vertices[0].y);
		for (var b = 1; b < this.vertices.length; b++) {
		  var c = this.vertices[b];
		  this.context.lineTo(c.x, c.y);
		}
		this.context.fill();
		this.context.closePath();
		this.context.restore();
	  },
	  getRunData: function () {
		var b = {};
		b._id = this.id;
		b.vertices = ig.copy(this.vertices);
		b.pos = ig.copy(this.pos);
		b.size = ig.copy(this.size);
		b.left = this.left;
		return b;
	  },
	  hasId: function (b) {
		return this._id === b;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-joint").requires("impact.entity").defines(function () {
	EntityDrawJoint = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/joint.png"),
	  scale: 0,
	  zIndex: 0,
	  type: ig.Entity.TYPE.A,
	  drawPos: {},
	  pointer: null,
	  enabled: !0,
	  pressed: !1,
	  lines: [],
	  fixed: !1,
	  floor: !1,
	  land: {},
	  directShow: !1,
	  tracer: !1,
	  tutorial: null,
	  tutorialLocked: !1,
	  activated: !1,
	  SCALE: {
		CLICKED: 0.95,
		IDLE: 1,
		HOVER: 1.05,
		ACTIVE: 1.1
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.center = ig.copy(this.pos);
		this.pos.x -= this.size.x / 2;
		this.pos.y -= this.size.y / 2;
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.directShow ? this.scale = this.SCALE.IDLE : this.show();
	  },
	  update: function () {
		this.pressed && ig.input.released("click") && !this.hovered && this.releasedOutside();
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.translate(this.center.x, this.center.y);
		this.activated ? this.context.scale(this.SCALE.ACTIVE, this.SCALE.ACTIVE) : this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  show: function () {
		this.tween({
		  scale: this.SCALE.IDLE
		}, 0.5, {
		  easing: ig.Tween.Easing.Bounce.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.enabled = !0;
		if ("function" === typeof this.manager.onButtonShowed) this.manager.onJointShowed(this);
	  },
	  over: function () {
		this.enabled && (this.hovered = !0, this.scale = this.SCALE.HOVER, this.setLinesFocus(!0));
	  },
	  leave: function () {
		this.setLinesFocus(!1);
		this.scale = this.SCALE.IDLE;
		this.hovered = !1;
	  },
	  setLand: function (b) {
		this.land.id = b.id;
		this.land.connect = {};
		this.land.connect.x = this.center.x - b.pos.x - b.size.x / 2;
		this.land.connect.y = this.center.y - b.pos.y - b.size.y / 2;
		this.land.connect.x = Math.round(10 * this.land.connect.x) / 10;
		this.land.connect.y = Math.round(10 * this.land.connect.y) / 10;
	  },
	  setLinesFocus: function (b) {
		for (var c = 0; c < this.lines.length; c++) this.lines[c].setFocus(b);
	  },
	  clicked: function () {
		this.enabled && !this.pressed && (this.scale = this.SCALE.CLICKED, this.manager.onJointClick(this), this.pressed = !0);
	  },
	  released: function () {
		this.releasedOutside();
	  },
	  releasedOutside: function () {
		this.enabled && this.pressed && (this.scale = this.SCALE.IDLE, this.manager.onJointReleasedOutside(this), this.pressed = !1);
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  },
	  addLine: function (b) {
		this.lines.push(b);
		this.updateExistence();
	  },
	  removeLine: function (b) {
		for (var c = [], d = 0; d < this.lines.length; d++) {
		  var e = this.lines[d];
		  b.id !== e.id && c.push(e);
		}
		this.lines = c;
		this.updateExistence();
	  },
	  updateExistence: function () {
		this.fixed || (0 === this.lines.length ? this.kill() : this._killed && this.life());
	  },
	  getLines: function () {
		return ig.copy(this.lines);
	  },
	  removeAllLines: function () {
		for (var b = ig.copy(this.lines), c = 0; c < b.length; c++) b[c].kill();
		this.lines = [];
	  },
	  kill: function () {
		this.manager.removeJoint(this);
		ig.game.removeEntity(this);
	  },
	  life: function () {
		ig.game.restoreEntity(this);
		this.manager.addJoint(this);
	  },
	  isFloor: function () {
		return this.floor;
	  },
	  isFixed: function () {
		return this.fixed;
	  },
	  setFloor: function (b) {
		this.floor = b;
	  },
	  getRunData: function () {
		var b = {};
		b._id = this.id;
		b.fixed = this.fixed;
		b.floor = this.floor;
		b.land = this.land;
		b.center = this.getCenter();
		b.lines = [];
		for (var c = 0; c < this.lines.length; c++) b.lines.push(this.lines[c].id);
		return b;
	  },
	  hasId: function (b) {
		return this._id === b;
	  },
	  setEnability: function (b) {
		this.enabled = b;
	  },
	  getBigger: function () {
		this.activated = !0;
	  },
	  getNormal: function () {
		this.activated = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-line").requires("impact.entity").defines(function () {
	EntityDrawLine = ig.Entity.extend({
	  manager: null,
	  pointer: null,
	  type: ig.Entity.TYPE.A,
	  checkAgainst: ig.Entity.TYPE.BOTH,
	  clickWidth: 0,
	  start: {
		x: 0,
		y: 0
	  },
	  end: {
		x: 0,
		y: 0
	  },
	  joints: {
		start: null,
		end: null
	  },
	  hovered: !1,
	  externalFocus: !1,
	  scale: 1,
	  floor: !1,
	  enabled: !0,
	  SCALE: {
		IDLE: 1,
		HOVER: 1.2
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.initProperties();
	  },
	  initProperties: function () {
		this.start.x = Math.round(10 * this.start.x) / 10;
		this.start.y = Math.round(10 * this.start.y) / 10;
		this.end.x = Math.round(10 * this.end.x) / 10;
		this.end.y = Math.round(10 * this.end.y) / 10;
		this.clickWidth = 2 * ig.game.LINE.WIDTH;
		this.size.x = Math.abs(this.start.x - this.end.x);
		this.size.y = Math.abs(this.start.y - this.end.y);
		this.pos.x = this.end.x < this.start.x ? this.end.x : this.start.x;
		this.pos.y = this.end.y < this.start.y ? this.end.y : this.start.y;
		0 === this.size.x && (this.size.x = ig.game.LINE.WIDTH, this.pos.x -= this.size.x / 2);
		0 === this.size.y && (this.size.y = ig.game.LINE.WIDTH, this.pos.y -= this.size.y / 2);
		this.angle = this.getAngle();
		ig.game.sortEntitiesDeferred();
	  },
	  setJoints: function (b, c) {
		this.joints.start = b;
		this.joints.end = c;
		0 === 2 * (this.angle % Math.PI) && (this.floor = b.isFloor() || c.isFloor(), b.setFloor(this.floor), c.setFloor(this.floor));
	  },
	  getAngle: function () {
		return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x);
	  },
	  update: function () {
		this.parent();
		this.hovered && !this.externalFocus && this.updateHovered();
	  },
	  updateHovered: function () {
		this.getCheckScore() > ig.game.LINE.WIDTH && (this.hovered = !1, this.scale = this.SCALE.IDLE);
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.lineWidth = ig.game.LINE.WIDTH * this.scale;
		this.context.strokeStyle = ig.game.LINE.COLORS.IDLE;
		this.context.beginPath();
		this.context.moveTo(this.start.x, this.start.y);
		this.context.lineTo(this.end.x, this.end.y);
		this.context.stroke();
		this.context.closePath();
		this.context.restore();
	  },
	  hasPosition: function (b, c) {
		return this.start.x !== b.x || this.start.y !== b.y || this.end.x !== c.x || this.end.y !== c.y ? !1 : !0;
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  },
	  getLength: function () {
		var b = this.end.y - this.start.y,
		  b = Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(b, 2));
		return Math.round(10 * b) / 10;
	  },
	  clicked: function () {
		if (this.enabled) this.manager.onLineClick(this);
	  },
	  getCheckScore: function () {
		var b = this.pointer.getPos(),
		  c = new Vector2(b.x - this.start.x, b.y - this.start.y),
		  d = Math.sqrt(Math.pow(c.x, 2) + Math.pow(c.y, 2)),
		  c = new Vector2(this.start.x, this.start.y);
		c.x += Math.cos(this.angle) * d;
		c.y += Math.sin(this.angle) * d;
		d = Math.abs(b.x - c.x);
		b = Math.abs(b.y - c.y);
		return (d + b) / 2;
	  },
	  check: function (b) {
		this.enabled && "pointer" === b.name && !this.hovered && !this.externalFocus && this.getCheckScore() <= ig.game.LINE.WIDTH && (this.hovered = !0, this.scale = this.SCALE.HOVER);
	  },
	  setFocus: function (b) {
		this.scale = (this.externalFocus = this.hovered = b) ? this.SCALE.HOVER : this.SCALE.IDLE;
	  },
	  isHovered: function () {
		return this.hovered && !this.externalFocus;
	  },
	  kill: function () {
		if (!this._killed) {
		  for (var b in this.joints) this.joints[b].removeLine(this);
		  this.manager.removeLine(this);
		  ig.game.removeEntity(this);
		}
	  },
	  life: function () {
		if (this._killed) {
		  for (var b in this.joints) this.joints[b].addLine(this);
		  this.manager.addLine(this);
		  ig.game.restoreEntity(this);
		}
	  },
	  getRunData: function () {
		var b = {};
		b.lngth = this.getLength();
		b.width = ig.game.LINE.WIDTH;
		b.start = ig.copy(this.start);
		b.end = ig.copy(this.end);
		b.center = this.getCenter();
		b.angle = this.getAngle();
		b.floor = this.floor;
		b.price = this.price;
		b.joints = {};
		b.joints.start = this.joints.start.id;
		b.joints.end = this.joints.end.id;
		return b;
	  },
	  setEnability: function (b) {
		this.enabled = b;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-car").requires("impact.entity").defines(function () {
	EntityDrawCar = ig.Entity.extend({
	  manager: null,
	  targetLand: null,
	  image: new ig.Image("media/graphics/game/item/car.png"),
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.setInitPos();
	  },
	  setInitPos: function () {
		this.pos.x = this.targetLand.pos.x + this.targetLand.size.x / 2 - this.size.x;
		this.pos.y = this.targetLand.pos.y - this.size.y;
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-finish-board").requires("impact.entity").defines(function () {
	EntityDrawFinishBoard = ig.Entity.extend({
	  manager: null,
	  targetLand: null,
	  image: new ig.Image("media/graphics/game/item/board-sign.png"),
	  text: {
		x: 0,
		y: 0,
		size: 12,
		font: "acrom-bold",
		fill: "#FFFFFF",
		align: "center",
		text: ""
	  },
	  car: !1,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.pos.x = this.targetLand.pos.x + this.targetLand.size.x / 2;
		this.pos.y = this.targetLand.pos.y - this.size.y;
		this.text.text = _STRINGS.Game.Finish;
		this.text.x = this.pos.x + this.size.x / 2;
		this.text.y = this.pos.y + 23;
		this.car && this.car.setFinishPos(this.pos.x + this.size.x / 2, this.pos.y + this.size.y);
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.font = this.text.size + "px " + this.text.font;
		this.context.fillStyle = this.text.fill;
		this.context.textAlign = this.text.align;
		this.context.fillText(this.text.text, this.text.x, this.text.y);
		this.context.restore();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-pointer").requires("game.entities.pointer").defines(function () {
	EntityDrawPointer = EntityPointer.extend({
	  name: "pointer",
	  size: {
		x: 8,
		y: 8
	  },
	  currentMode: null,
	  type: ig.Entity.TYPE.B,
	  setMode: function (b) {
		this.currentMode = b;
	  },
	  getMode: function () {
		return this.currentMode;
	  },
	  getPos: function () {
		return ig.copy(this.pos);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.draw-recorder").defines(function () {
	EntityDrawRecorder = ig.Class.extend({
	  records: [],
	  undoRecords: [],
	  record: function (b, c) {
		var d = {
		  action: b,
		  entities: []
		};
		c instanceof Array ? d.entities = c : d.entities.push(c);
		this.records.push(d);
	  },
	  undo: function () {
		if (this.records.length) {
		  for (var b = this.records.pop(), c = "line" === b.action ? "kill" : "life", d = 0; d < b.entities.length; d++) b.entities[d][c]();
		  this.undoRecords.push(b);
		}
	  },
	  redo: function () {
		if (this.undoRecords.length) {
		  for (var b = this.undoRecords.pop(), c = "line" === b.action ? "life" : "kill", d = 0; d < b.entities.length; d++) b.entities[d][c]();
		  this.records.push(b);
		}
	  },
	  reset: function () {
		this.records = [];
		this.undoRecords = [];
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-shadow-tool").requires("game.entities.buttons.button-shadow").defines(function () {
	EntityButtonShadowTool = EntityButtonShadow.extend({
	  PATH: "media/graphics/game/button/tool-",
	  showHint: !1,
	  hint: {
		text: "",
		size: 20,
		color: "#e64156",
		opacity: 0,
		width: 0,
		height: 0,
		pos: {}
	  },
	  hintBox: {
		pos: {},
		size: {},
		padding: {
		  left: 7,
		  top: 0,
		  right: 15,
		  bottom: 0
		},
		offset: {
		  x: 12,
		  y: 0
		},
		color: "#FFFFFF"
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.textManager = ig.game.textManager;
		this.showHint = !ig.ua.mobile;
		this.initHint();
	  },
	  initHint: function () {
		var b = this._type.toString(),
		  b = b.charAt(0).toUpperCase() + b.slice(1),
		  c = this.textManager.getTextSize(b, "acrom-bold", this.hint.size);
		this.hint.text = b;
		this.hint.width = c.width;
		this.hint.height = c.height;
		this.hintBox.size.x = this.hint.width + this.hintBox.padding.left + this.hintBox.padding.right;
		this.hintBox.size.y = this.hint.height + this.hintBox.padding.top + this.hintBox.padding.left;
		this.hintBox.pos.x = this.pos.x - this.hintBox.size.x + this.hintBox.offset.x;
		this.hintBox.pos.y = this.pos.y + (this.size.y - this.hintBox.size.y) / 2;
		this.hint.pos.x = this.hintBox.pos.x + this.hintBox.padding.left;
		this.hint.pos.y = this.hintBox.pos.y + this.hintBox.size.y / 2;
	  },
	  update: function () {
		this.parent();
		this.hint.show && 1 > this.hint.opacity && (this.hint.opacity += 2 * (1 / ig.system.fps));
	  },
	  draw: function () {
		this.showHint && this.hint.show && this.drawHint();
		this.parent();
	  },
	  drawHint: function () {
		this.context.save();
		this.context.globalAlpha = this.hint.opacity;
		this.context.fillStyle = this.hintBox.color;
		this.context.fillRect(this.hintBox.pos.x, this.hintBox.pos.y, this.hintBox.size.x, this.hintBox.size.y);
		this.context.font = this.hint.size + "px acrom-bold";
		this.context.fillStyle = this.hint.color;
		this.context.textAlign = "left";
		this.context.textBaseline = "middle";
		this.context.fillText(this.hint.text, this.hint.pos.x, this.hint.pos.y);
		this.context.globalAlpha = 1;
		this.context.restore();
	  },
	  over: function () {
		this.parent();
		this.enabled && !this.animating && this.showHint && (this.hint.show = !0);
	  },
	  leave: function () {
		this.parent();
		this.enabled && !this.animating && (this.hint.show = !1, this.hint.opacity = 0);
	  },
	  disable: function () {
		this.parent();
		this.hint.show = !1;
		this.hint.opacity = 0;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.ui-level").requires("impact.entity").defines(function () {
	EntityUiLevel = ig.Entity.extend({
	  size: new Vector2(48, 48),
	  scale: 0,
	  zIndex: 1,
	  align: "left top",
	  autoShow: !0,
	  image: new ig.Image("media/graphics/game/ui/level.png"),
	  showed: !1,
	  drawPos: {},
	  translate: {},
	  text: {
		value: "",
		size: 32,
		color: "#FFFFFF",
		align: "center",
		baseline: "middle",
		offset: {
		  x: 0,
		  y: -4
		}
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.size.x = this.image.width, this.size.y = this.image.height, this.setPosition(), this.text.value = _STRINGS.Game.Level + " " + ig.game.level, this.text.pos = ig.copy(this.translate), this.autoShow && this.show());
	  },
	  setPosition: function () {
		this.setAlign();
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
	  },
	  setAlign: function () {
		this.align = this.align.split(" ");
		if ("object" === typeof this.align) {
		  switch (this.align[0]) {
			case "center":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		  switch (this.align[1]) {
			case "middle":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		}
	  },
	  draw: function () {
		this.parent();
		this.drawImage();
		this.drawText();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.translate.x, this.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.translate.x + this.text.offset.x, this.translate.y + this.text.offset.y);
		this.context.scale(this.scale, this.scale);
		this.context.font = this.text.size + "px acrom-bold";
		this.context.fillStyle = this.text.color;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.value, 0, 0);
		this.context.restore();
	  },
	  show: function () {
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.showed = !0;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.ui-money").requires("impact.entity").defines(function () {
	EntityUiMoney = ig.Entity.extend({
	  size: new Vector2(48, 48),
	  scale: 0,
	  zIndex: 1,
	  align: "left top",
	  autoShow: !0,
	  image: new ig.Image("media/graphics/game/ui/money.png"),
	  showed: !1,
	  drawPos: {},
	  translate: {},
	  text: {
		value: "",
		size: 22,
		color: "#FFFFFF",
		align: "right",
		baseline: "middle",
		pos: {
		  x: 0,
		  y: 0
		},
		offset: {
		  x: -55,
		  y: -2
		}
	  },
	  value: 0,
	  valueToText: 0,
	  VALUE_INCREMENT: 200,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.size.x = this.image.width, this.size.y = this.image.height, this.setPosition(), this.text.value = "10.000", this.text.pos.x = this.pos.x + this.size.x, this.text.pos.y = this.pos.y + this.size.y / 2, this.autoShow && this.show());
	  },
	  setPosition: function () {
		this.setAlign();
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
	  },
	  setAlign: function () {
		this.align = this.align.split(" ");
		if ("object" === typeof this.align) {
		  switch (this.align[0]) {
			case "center":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		  switch (this.align[1]) {
			case "middle":
			  this.pos.x -= this.size.x / 2;
			  break;
			case "right":
			  this.pos.x -= this.size.x;
		  }
		}
	  },
	  update: function () {
		this.parent();
		this.valueToText !== this.value && (this.valueToText = this.valueToText < this.value ? this.valueToText + this.VALUE_INCREMENT : this.valueToText - this.VALUE_INCREMENT, this.text.value = ig.game.convertToCurrency(this.valueToText));
	  },
	  draw: function () {
		this.parent();
		this.drawImage();
		this.drawText();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.translate.x, this.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.drawPos.x, this.drawPos.y);
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.text.pos.x + this.text.offset.x, this.text.pos.y + this.text.offset.y);
		this.context.scale(this.scale, this.scale);
		this.context.font = this.text.size + "px acrom-bold";
		this.context.fillStyle = this.text.color;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.value, 0, 0);
		this.context.restore();
	  },
	  show: function () {
		this.showed = !0;
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showed = !1;
	  },
	  add: function (b) {
		this.value += b;
		this.animateChange(b);
	  },
	  sub: function (b) {
		this.value -= b;
		this.animateChange(-b);
	  },
	  canAfford: function (b) {
		return this.value >= b;
	  },
	  animateChange: function () {
		this.tween({
		  scale: 1.1
		}, 0.25, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  loop: ig.Tween.Loop.Reverse,
		  loopCount: 1,
		  onComplete: this.onAnimateChanged.bind(this)
		}).start();
	  },
	  onAnimateChanged: function () {},
	  getValue: function () {
		return this.value;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.ui-toast").requires("impact.entity").defines(function () {
	EntityUiToast = ig.Entity.extend({
	  text: "",
	  color: "",
	  alpha: 1,
	  showed: !1,
	  texPos: {
		x: 0,
		y: 0
	  },
	  currentTween: !1,
	  ALIGN: "center",
	  BASELINE: "middle",
	  SIZE: 24,
	  STROKE_COLOR: "#FFFFFF",
	  STROKE_WIDTH: 3,
	  DURATION: 2,
	  DISTANCE: 50,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context);
	  },
	  draw: function () {
		this.parent();
		this.showed && this.drawText();
	  },
	  drawText: function () {
		this.context.save();
		this.context.font = this.SIZE + "px acrom-bold";
		this.context.fillStyle = this.color;
		this.context.strokeStyle = this.STROKE_COLOR;
		this.context.lineWidth = this.STROKE_WIDTH;
		this.context.textAlign = this.ALIGN;
		this.context.textBaseline = this.BASELINE;
		this.context.globalAlpha = this.alpha;
		this.context.strokeText(this.text, this.texPos.x, this.texPos.y);
		this.context.fillText(this.text, this.texPos.x, this.texPos.y);
		this.context.globalAlpha = 1;
		this.context.restore();
	  },
	  toast: function (b, c, d, e) {
		this.text = b;
		this.texPos.x = c;
		this.texPos.y = d;
		this.color = e;
		this.alpha = 1;
		this.show();
	  },
	  show: function () {
		this.currentTween && !this.currentTween.complete && this.currentTween.stop(!1);
		this.showed = !0;
		this.currentTween = this.tween({
		  alpha: 0,
		  texPos: {
			y: this.texPos.y - this.DISTANCE
		  }
		}, this.DURATION, {
		  onComplete: this.onToastCompleted.bind(this)
		});
		this.currentTween.start();
	  },
	  onToastCompleted: function () {
		this.showed = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.ui-dialog").requires("impact.entity", "plugins.text-manager", "game.entities.buttons.button-shadow-dialog").defines(function () {
	EntityUiDialog = ig.Entity.extend({
	  manager: null,
	  zIndex: 0,
	  baseImage: new ig.Image("media/graphics/game/ui/dialog.png"),
	  align: "left top",
	  title: {
		text: "Dialog Title",
		size: 26,
		heightRatio: 0.25,
		color: "#FFF",
		align: "center",
		baseline: "middle",
		pos: {
		  x: 0,
		  y: 0
		}
	  },
	  content: {
		text: "These texts will be the dialog content's texts.",
		size: 22,
		heightRatio: 0.4,
		color: "#FFF",
		align: "left",
		baseline: "top",
		pos: {
		  x: 0,
		  y: 0
		},
		width: 0,
		height: 0,
		texts: []
	  },
	  drawPos: {
		x: 0,
		y: 0
	  },
	  translate: {
		x: 0,
		y: 0
	  },
	  innerPos: {
		x: 0,
		y: 0
	  },
	  innerSize: {
		x: 0,
		y: 0
	  },
	  scale: 0,
	  showed: !1,
	  margin: {
		left: 40,
		top: 10,
		right: 40,
		bottom: 10
	  },
	  buttons: {},
	  confirmMode: !0,
	  affirmativeCallback: null,
	  negativeCallback: null,
	  closeCallback: null,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.textManager = ig.game.textManager, this.initSize(), this.initPos(), this.initTexts(), this.spawnButtons());
	  },
	  initSize: function () {
		this.size.x = this.baseImage.width;
		this.size.y = this.baseImage.height;
		this.innerSize.x = this.size.x - this.margin.left - this.margin.right;
		this.innerSize.y = this.size.y - this.margin.top - this.margin.bottom;
	  },
	  initPos: function () {
		var b = this.align.split(" ");
		switch (b[0]) {
		  case "center":
			this.pos.x = (ig.system.width - this.size.x) / 2;
			break;
		  case "right":
			this.pos.x = ig.system.width - this.size.x;
			break;
		  default:
			this.pos.x = 0;
		}
		switch (b[1]) {
		  case "middle":
			this.pos.y = (ig.system.height - this.size.y) / 2;
			break;
		  case "bottom":
			this.pos.y = ig.system.height - this.size.y;
			break;
		  default:
			this.pos.y = 0;
		}
		this.drawPos.x = -this.size.x / 2;
		this.drawPos.y = -this.size.y / 2;
		this.translate.x = this.pos.x + this.size.x / 2;
		this.translate.y = this.pos.y + this.size.y / 2;
		this.title.pos.x = this.drawPos.x + this.margin.left + this.innerSize.x / 2;
		this.title.pos.y = this.drawPos.y + this.margin.top + this.innerSize.y * this.title.heightRatio / 2;
		this.content.pos.x = this.drawPos.x + this.margin.left;
		this.content.pos.y = this.drawPos.y + this.margin.top + this.innerSize.y * this.title.heightRatio;
	  },
	  initTexts: function () {
		var b = this.textManager.wrapToBox(this.title.text, "acrom-bold", this.title.size, this.innerSize.x, this.innerSize.y * this.title.heightRatio);
		this.title.size = b.fontSize;
		b = this.textManager.wrapToBox(this.content.text, "acrom-bold", this.content.size, this.innerSize.x, this.innerSize.y * this.content.heightRatio);
		this.content.size = b.fontSize;
		this.content.texts = b.text;
		this.content.width = b.width;
		this.content.height = b.height;
	  },
	  setContent: function (b, c) {
		"undefined" !== typeof b && (this.title.text = b);
		"undefined" !== typeof c && (this.content.text = c);
		this.initTexts();
	  },
	  spawnButtons: function () {
		var b = this.pos.y + this.margin.top + this.innerSize.y * (this.title.heightRatio + this.content.heightRatio) + this.innerSize.y * (1 - this.title.heightRatio - this.content.heightRatio) / 2;
		if (this.confirmMode) {
		  var c = this.innerSize.x / 4,
			d = this.pos.x + this.margin.left + c;
		  this.buttons.yes = ig.game.spawnEntity(EntityButtonShadowDialog, d, b, {
			manager: this,
			align: "center middle",
			_type: "text-green-small",
			zIndex: this.zIndex + 1,
			text: _STRINGS.Button.Yes,
			autoShow: this.showed,
			showText: !0
		  });
		  this.buttons.no = ig.game.spawnEntity(EntityButtonShadowDialog, d + 2 * c, b, {
			manager: this,
			align: "center middle",
			_type: "text-red-small",
			zIndex: this.zIndex + 1,
			text: _STRINGS.Button.No,
			autoShow: this.showed,
			showText: !0
		  });
		} else d = this.pos.x + this.margin.left + this.innerSize.x / 2, this.buttons.ok = ig.game.spawnEntity(EntityButtonShadowDialog, d, b, {
		  manager: this,
		  align: "center middle",
		  _type: "text-green-small",
		  zIndex: this.zIndex + 1,
		  text: _STRINGS.Button.Ok,
		  autoShow: this.showed,
		  showText: !0
		});
		ig.game.sortEntitiesDeferred();
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.showed && (this.context.save(), this.context.translate(this.translate.x, this.translate.y), this.context.scale(this.scale, this.scale), this.context.drawImage(this.baseImage.data, this.drawPos.x, this.drawPos.y), this.drawTitle(), this.drawContent(), this.context.restore());
	  },
	  drawTitle: function () {
		this.context.font = this.title.size + "px acrom-bold";
		this.context.fillStyle = this.title.color;
		this.context.textAlign = this.title.align;
		this.context.textBaseline = this.title.baseline;
		this.context.fillText(this.title.text, this.title.pos.x, this.title.pos.y);
	  },
	  drawContent: function () {
		this.context.font = this.content.size + "px acrom-bold";
		this.context.fillStyle = this.content.color;
		this.context.textAlign = this.content.align;
		this.context.textBaseline = this.content.baseline;
		for (var b = this.content.pos.x, c = this.content.pos.y, d = 0; d < this.content.texts.length; d++) this.context.fillText(this.content.texts[d], b, c), c += this.content.height;
	  },
	  onButtonClick: function (b) {
		switch (b) {
		  case "text-green-small":
			this.closeCallback = this.affirmativeCallback;
			break;
		  default:
			this.closeCallback = this.negativeCallback;
		}
		this.hide();
	  },
	  show: function (b, c, d, e) {
		this.manager.onDialogOpen();
		this.showed = !0;
		this.setZIndex(ig.game.getHighestZIndex());
		this.setContent(b, c);
		this.affirmativeCallback = d;
		this.negativeCallback = e;
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
		this.setButtonShow(!0);
	  },
	  onShowed: function () {},
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
		this.setButtonShow(!1);
	  },
	  onHidden: function () {
		this.showed = !1;
		this.setZIndex(-2);
		"function" === typeof this.closeCallback && this.closeCallback();
		this.manager.onDialogClose();
	  },
	  setButtonShow: function (b) {
		b = b ? "show" : "hide";
		for (var c in this.buttons) this.buttons[c][b]();
	  },
	  setZIndex: function (b) {
		this.zIndex = b;
		ig.game.sortEntitiesDeferred();
	  },
	  getCenter: function () {
		return new Vector2(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.draw").requires("impact.entity", "game.entities.controller.background", "game.entities.controller.settings", "game.entities.draw-grid", "game.entities.draw-land", "game.entities.draw-wall", "game.entities.draw-joint", "game.entities.draw-line", "game.entities.draw-car", "game.entities.draw-finish-board", "game.entities.draw-pointer", "game.entities.draw-recorder", "game.entities.buttons.button-shadow", "game.entities.buttons.button-shadow-tool", "game.entities.ui-level", "game.entities.ui-money", "game.entities.ui-toast", "game.entities.ui-dialog").defines(function () {
	EntityDraw = ig.Entity.extend({
	  background: null,
	  map: {},
	  money: 0,
	  lands: [],
	  walls: [],
	  lines: [],
	  joints: [],
	  ui: {
		level: null,
		money: null
	  },
	  buttons: {
		play: null,
		line: null,
		"delete": null,
		undo: null,
		reset: null,
		settings: null
	  },
	  currentMode: "line",
	  drawing: !1,
	  line: {
		start: {
		  x: 0,
		  y: 0
		},
		end: {
		  x: 0,
		  y: 0
		},
		joints: {
		  start: null,
		  end: null
		}
	  },
	  records: [],
	  useExistedDraw: !1,
	  settings: null,
	  JOINT_Z: 0,
	  LINE_Z: 0,
	  GRID_LENGTH: 19.2,
	  AXIS_MAX_GRID: 5,
	  LINE_MAX_GRID: 8,
	  MARGIN: {
		MAIN: {
		  x: 20,
		  y: 20
		},
		TOOL: {
		  x: 0,
		  y: 20
		}
	  },
	  ZINDEX: {
		LAND: 0,
		GRID: 0,
		LINE: 0,
		JOINT: 0,
		UI: 0
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.theme = ig.global.theme;
		ig.game.theme = this.theme;
		ig.game.setGravity(0, 0);
		ig.game.setBox2DUpdate(!1);
		this.pointer = ig.game.spawnEntity(EntityDrawPointer, 0, 0, {
		  manager: this
		});
		this.background = ig.game.spawnEntity(EntityBackground, 0, 0, {
		  manager: this,
		  theme: this.theme,
		  animate: !1
		});
		this.map = ig.game.levelProvider.getMap(ig.game.level);
		this.money = ig.game.levelProvider.getMoney(ig.game.level);
		this.recorder = new EntityDrawRecorder();
		this.initZIndex();
		ig.game.autoSolving && ig.game.autoSolve(ig.game.level);
		(this.useExistedDraw = ig.game.hasDrawingData()) ? (this.spawnExistedLands(), this.spawnExistedWalls(), this.spawnExistedJoints(), this.spawnExistedLines()) : (this.spawnLands(), this.spawnWalls());
		this.spawnEnvironments();
	  },
	  initZIndex: function () {
		var b = ig.game.getHighestZIndex();
		this.ZINDEX.LAND = b + 1;
		this.ZINDEX.GRID = b + 2;
		this.ZINDEX.LINE = b + 3;
		this.ZINDEX.JOINT = b + 5;
		this.ZINDEX.UI = b + 4;
		this.zIndex = this.ZINDEX.LINE;
	  },
	  spawnLands: function () {
		for (var b = 0; b < this.map.lands.length; b++) {
		  var c = this.map.lands[b];
		  c.manager = this;
		  c.theme = this.theme;
		  c.zIndex = this.ZINDEX.LAND;
		  c = ig.game.spawnEntity(EntityDrawLand, c.pos.x, c.pos.y, c);
		  this.lands.push(c);
		}
	  },
	  spawnWalls: function () {
		for (var b = 0; b < this.map.walls.length; b++) {
		  var c = this.map.walls[b];
		  c.manager = this;
		  c.zIndex = this.ZINDEX.LAND;
		  c = ig.game.spawnEntity(EntityDrawWall, c.pos.x, c.pos.y, c);
		  this.walls.push(c);
		}
	  },
	  spawnEnvironments: function () {
		for (var b = this.lands[0], c = this.lands[0], d = 1; d < this.lands.length; d++) {
		  var e = this.lands[d];
		  e.pos.x < b.pos.x && (b = e);
		  e.pos.x > c.pos.x && (c = e);
		}
		this.car = ig.game.spawnEntity(EntityDrawCar, -1E3, -1E3, {
		  manager: this,
		  targetLand: b,
		  zIndex: this.ZINDEX.LAND
		});
		this.finishBoard = ig.game.spawnEntity(EntityDrawFinishBoard, -1E3, -1E3, {
		  manager: this,
		  targetLand: c,
		  zIndex: this.ZINDEX.LAND
		});
		this.grid = ig.game.spawnEntity(EntityDrawGrid, 0, 0, {
		  manager: this,
		  zIndex: this.ZINDEX.GRID,
		  autoShow: !0
		});
	  },
	  onGridShowed: function () {
		this.useExistedDraw ? ig.game.unpauseBuildTime() : (this.spawnJoints(), ig.game.restartBuildTime());
		this.spawnUI();
		this.spawnButtons();
		ig.game.sortEntitiesDeferred();
	  },
	  spawnJoints: function () {
		for (var b = 0; b < this.lands.length; b++) for (var c = this.lands[b], d = c.joints, e = 0; e < d.length; e++) {
		  var f = d[e],
			f = this.createJoint(f.x, f.y, !0, f.floor);
		  f.setLand(c);
		}
		for (b = 0; b < this.walls.length; b++) {
		  c = this.walls[b];
		  d = c.joints;
		  for (e = 0; e < d.length; e++) f = d[e], f = this.createJoint(f.x, f.y, !0, !1), f.setLand(c);
		}
	  },
	  spawnExistedLands: function () {
		for (var b = ig.copy(ig.game.drawingData.lands), c = 0; c < b.length; c++) {
		  var d = b[c];
		  d.manager = this;
		  d.theme = this.theme;
		  d.zIndex = this.ZINDEX.LAND;
		  d = ig.game.spawnEntity(EntityDrawLand, d.position.x, d.position.y, d);
		  this.lands.push(d);
		}
	  },
	  spawnExistedWalls: function () {
		if (ig.game.drawingData.walls) for (var b = ig.copy(ig.game.drawingData.walls), c = 0; c < b.length; c++) {
		  var d = b[c];
		  d.manager = this;
		  d.zIndex = this.ZINDEX.LAND;
		  d = ig.game.spawnEntity(EntityDrawWall, d.pos.x, d.pos.y, d);
		  this.walls.push(d);
		}
	  },
	  spawnExistedJoints: function () {
		for (var b = ig.copy(ig.game.drawingData.joints), c = 0; c < b.length; c++) {
		  var d = b[c],
			e = ig.game.spawnEntity(EntityDrawJoint, d.center.x, d.center.y, {
			  _id: d._id,
			  manager: this,
			  pointer: this.pointer,
			  zIndex: this.ZINDEX.JOINT,
			  fixed: d.fixed,
			  floor: d.floor,
			  directShow: !0
			});
		  this.joints.push(e);
		  d.fixed && (d = this.getLandById(d.land.id), e.setLand(d));
		}
	  },
	  spawnExistedLines: function () {
		for (var b = ig.copy(ig.game.drawingData.lines), c = 0; c < b.length; c++) {
		  var d = b[c],
			e = this.createLine(d.start, d.end, d.price),
			f = this.getJointById(d.joints.start),
			j = this.getJointById(d.joints.end);
		  e.setJoints(f, j);
		  f.addLine(e);
		  j.addLine(e);
		  this.money -= d.price;
		}
	  },
	  getJointById: function (b) {
		for (var c = 0; c < this.joints.length; c++) {
		  var d = this.joints[c];
		  if (d.hasId(b)) return d;
		}
	  },
	  getLandById: function (b) {
		for (var c = 0; c < this.lands.length; c++) {
		  var d = this.lands[c];
		  if (d.hasId(b)) return d;
		}
		for (c = 0; c < this.walls.length; c++) if (d = this.walls[c], d.hasId(b)) return d;
		return !1;
	  },
	  spawnUI: function () {
		this.ui.level = ig.game.spawnEntity(EntityUiLevel, ig.system.width / 2, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "center top",
		  zIndex: this.ZINDEX.UI
		});
		this.ui.money = ig.game.spawnEntity(EntityUiMoney, ig.system.width - this.MARGIN.MAIN.x, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "right top",
		  zIndex: this.ZINDEX.UI,
		  value: this.money
		});
		this.ui.toast = ig.game.spawnEntity(EntityUiToast, 0, 0, {
		  manager: this,
		  zIndex: this.ZINDEX.UI
		});
		this.ui.dialog = ig.game.spawnEntity(EntityUiDialog, 0, 0, {
		  manager: this,
		  align: "center middle"
		});
	  },
	  spawnButtons: function () {
		var b = this.MARGIN.MAIN.x,
		  c = this.MARGIN.MAIN.y;
		this.buttons.play = ig.game.spawnEntity(EntityButtonShadow, b, c, {
		  manager: this,
		  _type: "play",
		  zIndex: this.ZINDEX.UI
		});
		var b = ig.system.width - this.MARGIN.MAIN.x,
		  c = this.ui.money.pos.y + this.ui.money.size.y + this.MARGIN.MAIN.y,
		  d;
		for (d in this.buttons) "play" !== d && "settings" !== d && (this.buttons[d] = ig.game.spawnEntity(EntityButtonShadowTool, b, c, {
		  manager: this,
		  _type: d,
		  align: "right top",
		  zIndex: this.ZINDEX.UI
		}), c += this.buttons[d].size.y + this.MARGIN.TOOL.y);
		this.buttons.settings = ig.game.spawnEntity(EntityButtonShadow, this.MARGIN.MAIN.x, ig.system.height - this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "left bottom",
		  zIndex: this.ZINDEX.UI,
		  _type: "settings"
		});
		this.setActiveButton(this.currentMode);
	  },
	  spawnSettings: function () {
		this.settings = ig.game.spawnEntity(EntitySettings, 0, 0, {
		  manager: this,
		  title: _STRINGS.Game.Settings,
		  pointer: this.pointer
		});
	  },
	  update: function () {
		this.parent();
		this.drawing && this.updateDrawingLine();
	  },
	  updateDrawingLine: function () {
		var b = this.pointer.pos.x - this.line.start.x,
		  c = this.pointer.pos.y - this.line.start.y,
		  d = b / Math.abs(b),
		  e = c / Math.abs(c),
		  f = this.LINE_MAX_GRID,
		  b = Math.round(Math.abs(b) / this.GRID_LENGTH),
		  c = Math.round(Math.abs(c) / this.GRID_LENGTH),
		  b = b > this.AXIS_MAX_GRID ? this.AXIS_MAX_GRID : b,
		  c = c > this.AXIS_MAX_GRID ? this.AXIS_MAX_GRID : c,
		  f = f - b;
		this.line.end.x = this.line.start.x + b * this.GRID_LENGTH * d;
		this.line.end.y = this.line.start.y + (c > f ? f : c) * this.GRID_LENGTH * e;
	  },
	  draw: function () {
		this.parent();
		this.drawing && this.drawLine();
	  },
	  drawLine: function () {
		this.context.save();
		this.context.lineWidth = ig.game.LINE.WIDTH;
		this.context.strokeStyle = ig.game.LINE.COLORS.DRAW;
		this.context.beginPath();
		this.context.moveTo(this.line.start.x, this.line.start.y);
		this.context.lineTo(this.line.end.x, this.line.end.y);
		this.context.stroke();
		this.context.closePath();
		this.context.restore();
	  },
	  enableButtons: function () {
		for (var b in this.buttons) this.buttons[b].enable();
	  },
	  disableButtons: function () {
		for (var b in this.buttons) null !== this.buttons[b] && this.buttons[b].disable();
	  },
	  onButtonClick: function (b) {
		switch (b) {
		  case "play":
			this.run();
			break;
		  case "line":
			this.setActiveButton(b);
			this.currentMode = b;
			break;
		  case "delete":
			this.lines.length && (this.setActiveButton(b), this.currentMode = b);
			break;
		  case "undo":
			this.recorder.undo();
			break;
		  case "reset":
			this.confirmReset();
			break;
		  case "settings":
			this.spawnSettings();
			break;
		  case "back":
			this.confirmToLevel();
			break;
		  case "home":
			this.confirmToHome();
		}
	  },
	  setActiveButton: function (b) {
		this.currentMode.length && this.buttons[this.currentMode].setActive(!1);
		this.buttons[b].setActive(!0);
	  },
	  onJointClick: function (b) {
		if ("line" === this.currentMode) this.drawing ? this.stopDrawingLine() : this.startDrawingLine(b);else if ("delete" === this.currentMode) {
		  ig.soundHandler.sfxPlayer.play("destroy");
		  var c = b.getLines();
		  this.recorder.record(this.currentMode, c);
		  b.removeAllLines();
		}
	  },
	  onJointReleasedOutside: function () {},
	  onGridClick: function () {
		"line" === this.currentMode && this.drawing && this.stopDrawingLine(!1);
	  },
	  startDrawingLine: function (b) {
		this.disableButtons();
		this.line.start = b.getCenter();
		this.line.end = b.getCenter();
		this.line.joints.start = b;
		this.drawing = !0;
		this.startJoint = b;
		this.startJoint.getBigger();
	  },
	  stopDrawingLine: function () {
		this.startJoint.getNormal();
		this.line.start.x = ig.game.roundDecimal(this.line.start.x, 1);
		this.line.start.y = ig.game.roundDecimal(this.line.start.y, 1);
		this.line.end.x = ig.game.roundDecimal(this.line.end.x, 1);
		this.line.end.y = ig.game.roundDecimal(this.line.end.y, 1);
		var b = this.isExistedLine(this.line.start, this.line.end),
		  c = this.getLineLength(this.line.start, this.line.end),
		  d = Math.round(c / this.GRID_LENGTH) * ig.game.LINE.PRICE,
		  e = this.ui.money.canAfford(d);
		!b && 0 < c && e && (ig.soundHandler.sfxPlayer.play("build"), b = this.createLine(this.line.start, this.line.end, d), d = ig.game.convertToCurrency(d), c = b.getCenter(), this.ui.toast.toast(d, c.x, c.y, ig.game.TOAST.COLORS.RED), this.line.joints.end = this.getJoint(this.line.end.x, this.line.end.y), b.setJoints(this.line.joints.start, this.line.joints.end), this.line.joints.start.addLine(b), this.line.joints.end.addLine(b));
		this.drawing = !1;
		this.enableButtons();
		ig.game.sortEntitiesDeferred();
	  },
	  isExistedLine: function (b, c) {
		for (var d = 0; d < this.lines.length; d++) {
		  var e = this.lines[d];
		  if (e.hasPosition(b, c) || e.hasPosition(c, b)) return !0;
		}
		return !1;
	  },
	  getLineLength: function (b, c) {
		var d = c.y - b.y;
		return Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(d, 2));
	  },
	  createLine: function (b, c, d) {
		b = ig.game.spawnEntity(EntityDrawLine, b.x, b.y, {
		  manager: this,
		  start: b,
		  end: c,
		  zIndex: this.ZINDEX.LINE,
		  pointer: this.pointer,
		  price: d
		});
		this.addLine(b);
		this.recorder.record(this.currentMode, b);
		return b;
	  },
	  addLine: function (b) {
		this.lines.push(b);
		this.ui.money && this.ui.money.sub(b.price);
	  },
	  removeLine: function (b) {
		for (var c = [], d = 0; d < this.lines.length; d++) {
		  var e = this.lines[d];
		  b.id !== e.id && c.push(e);
		}
		this.ui.money.add(b.price);
		this.lines = c;
	  },
	  sortLines: function () {
		for (var b = 0; b < this.lines.length - 1; b++) for (var c = 1; c < this.lines.length; c++) if (this.lines[b].pos.y > this.lines[c].pos.y) {
		  var d = ig.copy(this.lines[b]);
		  this.lines[b] = ig.copy(this.lines[c]);
		  this.lines[c] = d;
		}
		console.log(this.lines);
	  },
	  getJoint: function (b, c) {
		b = Math.round(1E3 * b) / 1E3;
		c = Math.round(1E3 * c) / 1E3;
		var d = this.getExistedJoint(b, c);
		d || (d = this.createJoint(this.line.end.x, this.line.end.y, !1, !1));
		return d;
	  },
	  getExistedJoint: function (b, c) {
		for (var d = 0; d < this.joints.length; d++) {
		  var e = this.joints[d].getCenter();
		  if (e.x === b && e.y === c) return this.joints[d];
		}
		return !1;
	  },
	  createJoint: function (b, c, d, e) {
		b = Math.round(10 * b) / 10;
		c = Math.round(10 * c) / 10;
		b = ig.game.spawnEntity(EntityDrawJoint, b, c, {
		  manager: this,
		  pointer: this.pointer,
		  zIndex: this.ZINDEX.JOINT,
		  fixed: d,
		  floor: e
		});
		this.joints.push(b);
		return b;
	  },
	  addJoint: function (b) {
		this.joints.push(b);
	  },
	  removeJoint: function (b) {
		for (var c = [], d = 0; d < this.joints.length; d++) {
		  var e = this.joints[d];
		  b.id !== e.id && c.push(e);
		}
		this.joints = c;
	  },
	  onLineClick: function () {
		if ("line" === this.currentMode) this.drawing && this.stopDrawingLine(!1);else if ("delete" === this.currentMode) {
		  var b = this.findClickedLine();
		  b && (ig.soundHandler.sfxPlayer.play("destroy"), this.recorder.record(this.currentMode, b), b.kill());
		}
	  },
	  findClickedLine: function () {
		for (var b = 0; b < this.lines.length; b++) {
		  var c = this.lines[b];
		  if (c.isHovered()) return c;
		}
	  },
	  confirmReset: function () {
		this.lines.length && (1 < this.lines.length ? this.ui.dialog.show(_STRINGS.Game.Reset, _STRINGS.Game.ConfirmReset, this.removeAllLines.bind(this), null) : this.removeAllLines());
	  },
	  confirmToHome: function () {
		1 < this.lines.length ? this.ui.dialog.show(_STRINGS.Game.BackToHome, _STRINGS.Game.ConfirmBackToHome, this.backToHome.bind(this), null) : this.backToHome();
	  },
	  confirmToLevel: function () {
		1 < this.lines.length ? this.ui.dialog.show(_STRINGS.Game.BackToLevel, _STRINGS.Game.ConfirmBackToLevel, this.backToLevelSelection.bind(this), null) : this.backToLevelSelection();
	  },
	  backToHome: function () {
		ig.game.homeMode = "menu";
		ig.game.loadLevel(LevelHome);
	  },
	  backToLevelSelection: function () {
		ig.game.homeMode = "select";
		ig.game.loadLevel(LevelHome);
	  },
	  removeAllLines: function () {
		for (var b = ig.copy(this.lines), c = 0; c < b.length; c++) b[c].kill();
		this.recorder.reset();
		ig.game.restartBuildTime();
	  },
	  onDialogOpen: function () {
		this.disableButtons();
	  },
	  onDialogClose: function () {
		this.enableButtons();
	  },
	  run: function () {
		this.save();
		this.setButtonsShow(!1);
		this.ui.money.hide();
		this.grid.hide();
		var b = ig.game.levelProvider.getMoney(ig.game.level),
		  c = this.ui.money.getValue();
		ig.game.pauseBuildTime();
		ig.game.setBuildCost(b, c);
	  },
	  setButtonsShow: function (b) {
		b = b ? "show" : "hide";
		for (var c in this.buttons) "function" === typeof this.buttons[c][b] && (this.buttons[c].setActive(!1), this.buttons[c][b]());
	  },
	  onGridHidden: function () {
		ig.game.killAllEntities();
		ig.game.loadLevel(LevelRun);
	  },
	  save: function () {
		ig.game.drawingData = {};
		for (var b = {
			lands: [],
			walls: [],
			joints: [],
			lines: []
		  }, c = 0; c < this.lands.length; c++) {
		  var d = this.lands[c].getRunData();
		  b.lands.push(d);
		}
		for (c = 0; c < this.walls.length; c++) d = this.walls[c].getRunData(), b.walls.push(d);
		for (c = 0; c < this.joints.length; c++) d = this.joints[c].getRunData(), b.joints.push(d);
		for (c = 0; c < this.lines.length; c++) d = this.lines[c].getRunData(), b.lines.push(d);
		ig.game.drawingData = b;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.tutorial-hand").requires("impact.entity").defines(function () {
	EntityTutorialHand = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/item/hand.png"),
	  showed: !1,
	  animSheet: null,
	  offset: {
		x: 19,
		y: 14
	  },
	  _tween: null,
	  clickToContinue: !1,
	  _clickToContinue: !1,
	  releasedCount: 0,
	  clickingStartEnd: !1,
	  PIXELS_PER_SECOND: 150,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.size.x = this.image.width / 2 - this.offset.x;
		this.size.y = this.image.height - this.offset.y;
		this.animSheet = new ig.AnimationSheet(this.image.path, this.image.width / 2, this.image.height);
		this.addAnim("idle", 0.1, [0], !0);
		this.addAnim("click", 0.1, [1], !0);
		this.addAnim("spamClick", 0.5, [0, 1], !1);
	  },
	  moveTo: function (b, c) {
		this.pos.x = b;
		this.pos.y = c;
	  },
	  setTarget: function (b, c) {
		this.startPos = ig.copy(this.pos);
		this.endPos = {
		  x: b,
		  y: c
		};
	  },
	  clickDrag: function () {
		this.stopTweens(!1);
		this.animationDelay = window.setTimeout(this.showClick.bind(this), 500);
		var b = this.getDuration();
		this._tween = this.tween({
		  pos: this.endPos
		}, b, {
		  delay: 1
		});
		this._tweenRevert = this.tween({
		  pos: this.startPos
		}, 0, {
		  onComplete: this.onRevertCompleted.bind(this),
		  delay: 0.5
		});
		this._tween.chain(this._tweenRevert);
		this._tween.start();
	  },
	  click: function (b, c) {
		this.stopTweens(!1);
		this.moveTo(b, c);
		this.currentAnim = this.anims.spamClick;
	  },
	  clickStartEnd: function () {
		this.currentAnim.rewind();
		this.clickingStartEnd = !0;
		this.click(this.startPos.x, this.startPos.y);
	  },
	  disableClickStartEnd: function () {
		this.clickingStartEnd = !1;
		this.moveTo(this.startPos.x, this.startPos.y);
	  },
	  enableClickToContinue: function () {
		this._clickToContinue = !0;
	  },
	  onRevertCompleted: function () {
		this.currentAnim = this.anims.idle;
		window.clearTimeout(this.animationDelay);
		this.clickDrag();
	  },
	  getDuration: function () {
		var b = this.endPos.y - this.startPos.y,
		  b = Math.sqrt(Math.pow(this.endPos.x - this.startPos.x, 2) + Math.pow(b, 2));
		return Math.round(10 * (b / this.PIXELS_PER_SECOND)) / 10;
	  },
	  showClick: function () {
		this.currentAnim = this.anims.click;
	  },
	  setShowed: function (b) {
		this.showed = b;
	  },
	  update: function () {
		this.showed ? (this.parent(), ig.input.state("click") && this.setShowed(!1), this.clickingStartEnd && (2 == this.currentAnim.loopCount ? this.click(this.endPos.x, this.endPos.y) : 4 == this.currentAnim.loopCount && (this.currentAnim.rewind(), this.click(this.startPos.x, this.startPos.y)))) : ig.input.released("click") && (this.setShowed(!0), this.clickToContinue && (this.manager.continue(), this.clickToContinue = !1), this._clickToContinue && (this.clickToContinue = !0, this._clickToContinue = !1));
	  },
	  draw: function () {
		this.showed && this.parent();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.tutorial-text").requires("impact.entity").defines(function () {
	EntityTutorialText = ig.Entity.extend({
	  manager: null,
	  context: null,
	  showed: !1,
	  source: [],
	  lastText: "",
	  lastBox: {},
	  text: [],
	  translate: [],
	  scale: {
		x: 0,
		y: 0
	  },
	  index: 0,
	  box: {
		x: 0,
		y: 0,
		w: 0,
		h: 0,
		tx: 0,
		ty: 0
	  },
	  _next: !1,
	  PADDING: {
		x: 15,
		y: 15
	  },
	  MARGIN: {
		BOTTOM: 28.8
	  },
	  FONT: "acrom-bold",
	  FONT_SIZE: 26,
	  MAX_WIDTH: 720,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.textManager = ig.game.textManager;
		this.source = ig.ua.mobile ? _STRINGS.Tutorial.Mobile : _STRINGS.Tutorial.Desktop;
	  },
	  start: function () {
		this.index = 0;
		this.updateDraw();
		this.show();
	  },
	  next: function () {
		this._next = !0;
		this.hide();
	  },
	  updateDraw: function () {
		var b = this.textManager.wrapToWidth(this.source[this.index], this.FONT, this.FONT_SIZE, this.MAX_WIDTH);
		this.text = b.text;
		this.lineHeight = b.height;
		this.box.w = b.width + 2 * this.PADDING.x;
		this.box.h = b.height * this.text.length + 2 * this.PADDING.y;
		this.box.x = 0;
		this.box.y = -this.box.h / 2;
		this.box.tx = (ig.system.width - this.box.w) / 2;
		this.box.ty = ig.system.height - this.box.h / 2 - this.MARGIN.BOTTOM;
		this.updateText();
		this.zIndex = ig.game.getHighestZIndex();
		ig.game.sortEntitiesDeferred();
	  },
	  updateText: function () {
		this.translate = [];
		for (var b = this.box.tx + this.PADDING.x, c = this.box.ty - this.box.h / 2 + this.PADDING.y + this.lineHeight / 2, d = 0; d < this.text.length; d++) this.translate.push({
		  x: b,
		  y: c
		}), c += this.lineHeight;
	  },
	  draw: function () {
		this.showed && (this.parent(), this.drawBox(), this.drawText());
	  },
	  drawBox: function () {
		this.context.save();
		this.context.fillStyle = "rgba(0, 0, 0, .5)";
		this.context.translate(this.box.tx, this.box.ty);
		this.context.scale(this.scale.x, this.scale.y);
		this.context.fillRect(this.box.x, this.box.y, this.box.w, this.box.h);
		this.context.restore();
	  },
	  drawText: function () {
		for (var b = 0; b < this.text.length; b++) {
		  var c = this.text[b],
			d = this.translate[b];
		  this.context.save();
		  this.context.fillStyle = "#FFFFFF";
		  this.context.textAlign = "left";
		  this.context.textBaseline = "middle";
		  this.context.font = this.FONT_SIZE + "px " + this.FONT;
		  this.context.translate(d.x, d.y);
		  this.context.scale(this.scale.x, this.scale.y);
		  this.context.fillText(c, 0, 0);
		  this.context.restore();
		}
	  },
	  show: function () {
		this.stopTweens(!1);
		this.showed = !0;
		this._tween = this.tween({
		  scale: {
			x: 1,
			y: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		});
		this._tween.start();
	  },
	  onShowed: function () {},
	  hide: function () {
		this.stopTweens(!1);
		this._tween = this.tween({
		  scale: {
			x: 0,
			y: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		});
		this._tween.start();
	  },
	  onHidden: function () {
		this._next && (this.index++, this.updateDraw(), this.show());
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.tutorial").requires("game.entities.controller.draw", "game.entities.tutorial-hand", "game.entities.tutorial-text").defines(function () {
	EntityTutorial = EntityDraw.extend({
	  manager: null,
	  tutorPointer: {},
	  tutorText: {},
	  step: 1,
	  target: null,
	  FROM: [{
		x: 384,
		y: 348
	  }, {
		x: 384,
		y: 348
	  }, {
		x: 480,
		y: 290.4
	  }, {
		x: 480,
		y: 348
	  }, {
		x: 576,
		y: 348
	  }],
	  TARGET: [{
		x: 480,
		y: 348
	  }, {
		x: 384,
		y: 290.4
	  }, {
		x: 480,
		y: 348
	  }, {
		x: 576,
		y: 348
	  }, {
		x: 384,
		y: 290.4
	  }],
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context);
	  },
	  onGridShowed: function () {
		this.parent();
		var b = ig.game.getHighestZIndex();
		this.tutorPointer = ig.game.spawnEntity(EntityTutorialHand, -1E3, -1E3, {
		  manager: this,
		  zIndex: b
		});
		this.tutorText = ig.game.spawnEntity(EntityTutorialText, ig.system.width / 2, 0, {
		  manager: this,
		  zIndex: b
		});
		window.setTimeout(this.showTutorial.bind(this), 600);
	  },
	  showTutorial: function () {
		window.clearTimeout();
		this.disableButtons();
		this.setJointsEnability(!1);
		this.setLinesEnability(!1);
		if (1 === this.step) {
		  this.target = this.joints[0];
		  this.target.setEnability(!0);
		  var b = this.target.getCenter();
		  this.tutorPointer.moveTo(b.x, b.y);
		  this.tutorPointer.setTarget(b.x + 5 * ig.game.GRID_WIDTH, b.y);
		  this.tutorPointer.clickStartEnd();
		  this.tutorText.start();
		} else 2 === this.step ? (this.target = this.joints[0], this.target.setEnability(!0), b = this.target.getCenter(), this.tutorPointer.moveTo(b.x, b.y), this.tutorPointer.setTarget(b.x + 5 * ig.game.GRID_WIDTH, b.y - 3 * ig.game.GRID_WIDTH), this.tutorPointer.clickStartEnd(), this.tutorText.next()) : 3 === this.step ? (this.target = this.joints[3], this.target.setEnability(!0), this.joints[2].setEnability(!0), b = this.target.getCenter(), this.tutorPointer.moveTo(b.x, b.y), this.tutorPointer.setTarget(b.x, b.y + 3 * ig.game.GRID_WIDTH), this.tutorPointer.clickStartEnd()) : 4 === this.step ? (this.target = this.joints[2], this.target.setEnability(!0), this.joints[1].setEnability(!0), b = this.target.getCenter(), this.tutorPointer.moveTo(b.x, b.y), this.tutorPointer.setTarget(b.x + 5 * ig.game.GRID_WIDTH, b.y), this.tutorPointer.clickStartEnd()) : 5 === this.step ? (this.target = this.joints[1], this.joints[3].setEnability(!0), this.target.setEnability(!0), b = this.target.getCenter(), this.tutorPointer.moveTo(b.x, b.y), this.tutorPointer.setTarget(b.x - 5 * ig.game.GRID_WIDTH, b.y - 3 * ig.game.GRID_WIDTH), this.tutorPointer.clickStartEnd()) : 6 === this.step && (this.target = this.buttons.play, this.target.enable(), b = this.target.getCenter(), this.tutorPointer.disableClickStartEnd(), this.tutorPointer.moveTo(b.x, b.y), this.tutorPointer.click(b.x, b.y), this.tutorText.next());
		this.tutorPointer.setShowed(!0);
	  },
	  "continue": function () {
		this.step++;
		this.showTutorial();
	  },
	  update: function () {
		this.parent();
		if (1 === this.step) {
		  if (this.lines.length) {
			var b = this.lines[0];
			this.isCorrectLine(b, 384, 348, 480, 348) ? this.continue() : (b.kill(), this.disableButtons());
		  }
		} else 2 === this.step ? 1 < this.lines.length && (b = this.lines[1], this.isCorrectLine(b, 384, 348, 480, 290.4) ? this.continue() : (b.kill(), this.disableButtons())) : 3 === this.step ? 2 < this.lines.length && (b = this.lines[2], this.isCorrectLine(b, 480, 290.4, 480, 348) ? this.continue() : (b.kill(), this.disableButtons())) : 4 === this.step ? 3 < this.lines.length && (b = this.lines[3], this.isCorrectLine(b, 480, 348, 576, 348) ? this.continue() : (b.kill(), this.disableButtons())) : 5 === this.step && 4 < this.lines.length && (b = this.lines[4], this.isCorrectLine(b, 576, 348, 480, 290.4) ? (this.continue(), this.finishTutorial()) : (b.kill(), this.disableButtons()));
	  },
	  isCorrectLine: function (b, c, d, e, f) {
		return b.start.x === c && b.start.y === d && b.end.x === e && b.end.y === f || b.end.x === c && b.end.y === d && b.start.x === e && b.start.y === f;
	  },
	  setJointsEnability: function (b) {
		for (var c = 0; c < this.joints.length; c++) this.joints[c].setEnability(b);
	  },
	  setLinesEnability: function (b) {
		for (var c = 0; c < this.lines.length; c++) this.lines[c].setEnability(b);
	  },
	  onButtonShowed: function (b) {
		b.disable();
	  },
	  onButtonHidden: function () {},
	  onJointShowed: function () {},
	  onLineShowed: function () {},
	  finishTutorial: function () {
		ig.game.sessionData.tutorial = !1;
		ig.game.save("tutorial", ig.game.sessionData.tutorial);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.levels.tutorial").requires("impact.image", "game.entities.controller.tutorial").defines(function () {
	LevelTutorial = {
	  entities: [{
		type: "EntityTutorial",
		x: 0,
		y: 0
	  }],
	  layer: []
	};
  });
  ig.baked = !0;
  ig.module("game.levels.draw").requires("impact.image", "game.entities.controller.draw").defines(function () {
	LevelDraw = {
	  entities: [{
		type: "EntityDraw",
		x: 0,
		y: 0
	  }],
	  layer: []
	};
  });
  ig.baked = !0;
  ig.module("game.entities.buttons.button-toggle").requires("impact.entity", "plugins.data.vector").defines(function () {
	EntityButtonToggle = ig.Entity.extend({
	  manager: null,
	  showed: !1,
	  enabled: !1,
	  align: "left top",
	  scale: 0,
	  action: "",
	  image: null,
	  imageName: "",
	  drawIndex: 0,
	  drawPos: {
		start: {
		  x: 0,
		  y: 0
		},
		translate: {
		  x: 0,
		  y: 0
		},
		image: {
		  x: 0,
		  y: 0
		}
	  },
	  type: ig.Entity.TYPE.A,
	  SCALE: {
		IDLE: 1,
		HOVER: 1.05,
		CLICKED: 0.95
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.initSize(), this.initPosition(), this.autoShow && this.show());
	  },
	  initSize: function () {
		this.image = new ig.Image("media/graphics/game/button/" + this.imageName + ".png");
		this.size.x = this.image.width / 2;
		this.size.y = this.image.height;
	  },
	  initPosition: function () {
		var b = this.align.split(" ");
		switch (b[0]) {
		  case "center":
			this.pos.x -= this.size.x / 2;
			break;
		  case "right":
			this.pos.x -= this.size.x;
		}
		switch (b[1]) {
		  case "middle":
			this.pos.y -= this.size.y / 2;
			break;
		  case "bottom":
			this.pos.y -= this.size.y;
		}
		this.drawPos.image.x = -this.size.x / 2;
		this.drawPos.image.y = -this.size.y / 2;
		this.drawPos.translate.x = this.pos.x + this.size.x / 2;
		this.drawPos.translate.y = this.pos.y + this.size.y / 2;
		this.updateDrawStart();
	  },
	  update: function () {
		this.parent();
	  },
	  updateDrawStart: function () {
		this.drawPos.start.x = this.size.x * this.drawIndex;
		this.drawPos.start.y = 0;
	  },
	  draw: function () {
		this.parent();
		this.showed && this.drawImage();
	  },
	  drawImage: function () {
		this.context.save();
		this.context.translate(this.drawPos.translate.x, this.drawPos.translate.y);
		this.context.scale(this.scale, this.scale);
		this.context.drawImage(this.image.data, this.drawPos.start.x, this.drawPos.start.y, this.size.x, this.size.y, this.drawPos.image.x, this.drawPos.image.y, this.size.x, this.size.y);
		this.context.restore();
	  },
	  toggle: function () {
		this.drawIndex = 0 === this.drawIndex ? 1 : 0;
		this.updateDrawStart();
	  },
	  show: function () {
		this.showed = !0;
		this.tween({
		  scale: this.SCALE.IDLE
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.enabled = !0;
	  },
	  hide: function () {
		this.enabled = !1;
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showed = !1;
		this.manager.onButtonHidden(this.action);
	  },
	  over: function () {
		this.enabled && (this.scale = this.SCALE.HOVER);
	  },
	  leave: function () {
		this.enabled && this.releasedOutside();
	  },
	  clicked: function () {
		this.enabled && (this.scale = this.SCALE.CLICKED, this.pressed = !0);
	  },
	  released: function () {
		this.enabled && this.pressed && (this.toggle(), this.manager.onButtonToggled(this.action, 1 === this.drawIndex), this.releasedOutside());
	  },
	  releasedOutside: function () {
		this.pressed = !1;
		this.scale = this.SCALE.IDLE;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-car-wheel").requires("plugins.box2d.entity").defines(function () {
	EntityRunCarWheel = ig.Box2DEntity.extend({
	  car: null,
	  body: null,
	  size: {
		x: 12,
		y: 12
	  },
	  box2dType: 1,
	  dynamicType: 0,
	  density: 99,
	  friction: 0,
	  restitution: 0,
	  rotate: 360,
	  anchor: {},
	  joint: null,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.attachToCar(), this.initFilter());
	  },
	  initFilter: function () {
		var b = new Box2D.Dynamics.b2FilterData();
		b.categoryBits = this.category;
		b.maskBits = this.mask;
		this.body.GetFixtureList().SetFilterData(b);
	  },
	  attachToCar: function () {
		var b = new Box2D.Dynamics.Joints.b2RevoluteJointDef();
		b.bodyA = this.body;
		b.bodyB = this.car.body;
		b.referenceAngle = 0;
		b.localAnchorA.SetV(this.getVector(0, 0));
		b.localAnchorB.SetV(this.anchor);
		b.enableLimit = !1;
		b.enableMotor = !0;
		b.maxMotorTorque = 1E4;
		this.joint = ig.world.CreateJoint(b);
	  },
	  getVector: function (b, c) {
		return new Box2D.Common.Math.b2Vec2(b, c);
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
	  },
	  setSpeed: function (b) {
		this.joint.SetMotorSpeed(-b);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-car").requires("impact.entity", "plugins.box2d.entity", "game.entities.run-car-wheel").defines(function () {
	EntityRunCar = ig.Box2DEntity.extend({
	  body: null,
	  box2dType: 0,
	  dynamicType: 0,
	  density: 2,
	  restitution: 0,
	  size: {
		x: 100,
		y: 40
	  },
	  image: new ig.Image("media/graphics/game/item/car.png"),
	  imagePos: {
		x: 0,
		y: 0
	  },
	  imageTranslate: {
		x: 0,
		y: 0
	  },
	  wheels: {},
	  joints: {},
	  collisionCount: 0,
	  angle: 0,
	  zIndex: 2,
	  WHEEL_RADIAN: 12,
	  WHEEL_OFFSET: {
		REAR: 35.5,
		FRONT: -18.5
	  },
	  stopUpdateCount: 0,
	  MAX_STOP_UPDATE: 100,
	  landed: !1,
	  targetLand: null,
	  checkCrossing: !1,
	  finishPos: {
		x: 0,
		y: 0
	  },
	  category: null,
	  mask: null,
	  init: function (b, c, d) {
		ig.global.wm ? this.parent(b, c, d) : (this.context = ig.system.context, this.initProperties(d), this.parent(this.pos.x, this.pos.y, d), this.initFilter(), this.createWheels(this.pos.x, this.pos.y));
	  },
	  initFilter: function () {
		if (null !== this.category && null !== this.mask) {
		  var b = new Box2D.Dynamics.b2FilterData();
		  b.categoryBits = this.category;
		  b.maskBits = this.mask;
		  this.body.GetFixtureList().SetFilterData(b);
		}
	  },
	  initProperties: function (b) {
		this.size.x = this.image.width;
		this.size.y = this.image.height - this.WHEEL_RADIAN;
		this.pos.x = b.targetLand.pos.x + b.targetLand.size.x / 2 - this.size.x;
		this.pos.y = b.targetLand.pos.y - this.size.y - this.WHEEL_RADIAN;
		this.imagePos.x = -this.size.x / 2;
		this.imagePos.y = -this.size.y / 2;
		this.imageTranslate.x = this.pos.x + this.size.x / 2;
		this.imageTranslate.y = this.pos.y + this.size.y / 2;
	  },
	  createWheels: function () {
		var b = 2 * this.WHEEL_RADIAN,
		  c = this.body.GetFixtureList().GetShape().GetVertices(),
		  d = c[3].Copy(),
		  c = c[2].Copy();
		d.x += this.WHEEL_OFFSET.REAR * Box2D.SCALE;
		c.x += this.WHEEL_OFFSET.FRONT * Box2D.SCALE;
		this.wheels.rear = ig.game.spawnEntity(EntityRunCarWheel, this.pos.x + this.WHEEL_OFFSET.REAR - this.WHEEL_RADIAN, this.pos.y + this.size.y - this.WHEEL_RADIAN, {
		  car: this,
		  anchor: d,
		  size: {
			x: b,
			y: b
		  },
		  category: this.body.GetFixtureList().GetFilterData().categoryBits,
		  mask: this.body.GetFixtureList().GetFilterData().maskBits
		});
		this.wheels.front = ig.game.spawnEntity(EntityRunCarWheel, this.pos.x + this.size.x + this.WHEEL_OFFSET.FRONT - this.WHEEL_RADIAN, this.pos.y + this.size.y - this.WHEEL_RADIAN, {
		  car: this,
		  anchor: c,
		  size: {
			x: b,
			y: b
		  },
		  category: this.body.GetFixtureList().GetFilterData().categoryBits,
		  mask: this.body.GetFixtureList().GetFilterData().maskBits
		});
	  },
	  setFinishPos: function (b, c) {
		this.finishPos = {
		  x: b,
		  y: c
		};
	  },
	  update: function () {
		this.parent();
		this.imageTranslate.x = this.pos.x + this.size.x / 2;
		this.imageTranslate.y = this.pos.y + this.size.y / 2;
		this.checkCrossing && (this.checkResult(), this.checkStop());
	  },
	  checkResult: function () {
		this.pos.x + this.size.x > this.finishPos.x && this.pos.y < this.finishPos.y ? (this.manager.onCarSucceed(), this.checkCrossing = !1) : this.pos.y > ig.system.height && (this.manager.onCarFailed(), this.checkCrossing = !1);
	  },
	  checkStop: function () {
		this.previousBodyPosition.x === this.pos.x && this.previousBodyPosition.y === this.pos.y && (this.stopUpdateCount++, this.stopUpdateCount >= this.MAX_STOP_UPDATE && (this.checkCrossing = !1, this.manager.onCarFailed()));
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.translate(this.imageTranslate.x, this.imageTranslate.y);
		this.context.rotate(this.angle);
		this.context.drawImage(this.image.data, this.imagePos.x, this.imagePos.y);
		this.context.restore();
	  },
	  getVector: function (b, c) {
		return new Box2D.Common.Math.b2Vec2(b, c);
	  },
	  setSpeed: function (b) {
		for (var c in this.wheels) this.wheels[c].setSpeed(b), this.checkCrossing = 0 < b;
	  },
	  toggleMove: function () {
		this.moving ? this.setSpeed(0) : this.setSpeed(3);
		this.moving = !this.moving;
	  },
	  beginContact: function () {}
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-land").requires("plugins.box2d.entity").defines(function () {
	EntityRunLand = ig.Box2DEntity.extend({
	  body: null,
	  size: {
		x: 0,
		y: 0
	  },
	  zIndex: 2,
	  gravityFactor: 0,
	  previousBodyPosition: {
		x: 0,
		y: 0
	  },
	  previousBodyAngle: 0,
	  theme: "day|night",
	  tileImage: new ig.Image("media/graphics/game/tile/day.png"),
	  tiles: [],
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.createBody(), this.createTiles(), this.initFilter());
	  },
	  createBody: function () {
		var b = (this.pos.x + this.size.x / 2) * Box2D.SCALE,
		  c = (this.pos.y + this.size.y / 2) * Box2D.SCALE,
		  d = new Box2D.Dynamics.b2BodyDef();
		d.position.Set(b, c);
		this.previousBodyPosition = {
		  x: d.position.x,
		  y: d.position.y
		};
		d.angle = this.angle;
		this.previousBodyAngle = d.angle;
		this.body = ig.world.CreateBody(d);
		b = this.size.x / 2 * Box2D.SCALE;
		c = this.size.y / 2 * Box2D.SCALE;
		d = new Box2D.Collision.Shapes.b2PolygonShape();
		d.SetAsBox(b, c);
		this.body.CreateFixture2(d);
	  },
	  initFilter: function () {
		this.setFilterData(this.category, this.mask);
	  },
	  setFilterData: function (b, c) {
		var d = new Box2D.Dynamics.b2FilterData();
		d.categoryBits = b;
		d.maskBits = c;
		this.body.GetFixtureList().SetFilterData(d);
	  },
	  createTiles: function () {
		this.tileImage = new ig.Image("media/graphics/game/tile/" + this.theme + ".png");
		this.tiles = [];
		for (var b = Math.ceil(this.size.x / this.tileImage.width), c = Math.ceil(this.size.y / this.tileImage.height), d = 0, e = 0; e < c; e++) {
		  var f = this.pos.y + d,
			j = this.tileImage.height;
		  e === c - 1 && (j = this.size.y - d);
		  for (var n = 0, m = 0; m < b; m++) {
			var g = this.pos.x + n,
			  t = this.tileImage.width;
			m === b - 1 && (t = this.size.x - n);
			this.tiles.push({
			  x: g,
			  y: f,
			  w: t,
			  h: j
			});
			n += this.tileImage.width;
		  }
		  d += this.tileImage.height;
		}
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.drawTiles();
	  },
	  drawTiles: function () {
		this.context.save();
		for (var b = 0; b < this.tiles.length; b++) {
		  var c = this.tiles[b];
		  this.context.drawImage(this.tileImage.data, 0, 0, c.w, c.h, c.x, c.y, c.w, c.h);
		}
		this.context.restore();
	  },
	  createVector: function (b, c) {
		return new Box2D.Common.Math.b2Vec2(b, c);
	  },
	  getAnchorFromPos: function (b) {
		return this.createVector((b.x - (this.pos.x + this.size.x / 2)) * Box2D.SCALE, (b.y - (this.pos.y + this.size.y / 2)) * Box2D.SCALE);
	  },
	  hasAttachId: function (b) {
		return b == this._id;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-line").requires("plugins.box2d.entity").defines(function () {
	EntityRunLine = ig.Box2DEntity.extend({
	  manager: null,
	  body: null,
	  size: {
		x: 0,
		y: 0
	  },
	  zIndex: 2,
	  box2dType: 0,
	  dynamicType: 0,
	  density: 100,
	  friction: null,
	  restitution: 0,
	  rotate: 0,
	  position: null,
	  joints: null,
	  center: {},
	  land: !1,
	  color: {
		r: 230,
		g: 133,
		b: 58
	  },
	  COLOR: {
		R: 230,
		G: 133,
		B: 58
	  },
	  MIN_FORCE: 2.26,
	  MAX_FORCE: 3.7,
	  calculatingForce: !1,
	  init: function (b, c, d) {
		if (ig.global.wm) this.parent(b, c, d);else {
		  this.context = ig.system.context;
		  for (var e in d) this[e] = d[e];
		  this.initProperties();
		  this.createBody();
		  this.initFilter();
		  this.attachToJoints();
		}
	  },
	  initProperties: function () {
		this.size.x = this.lngth;
		this.size.y = this.width;
		this.pos.x = this.center.x - this.size.x / 2;
		this.pos.y = this.center.y - this.size.y / 2;
	  },
	  initFilter: function () {
		this.setFilterData(this.category, this.mask);
	  },
	  setFilterData: function (b, c) {
		var d = new Box2D.Dynamics.b2FilterData();
		d.categoryBits = b;
		d.maskBits = c;
		this.body.GetFixtureList().SetFilterData(d);
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.translate(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2);
		this.context.rotate(this.angle);
		this.context.fillStyle = "rgb(" + this.color.r + "," + this.color.g + "," + this.color.b + ")";
		this.context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
		this.context.restore();
	  },
	  attachToJoints: function () {
		for (var b in this.joints) {
		  var c = this.manager.getJointById(this.joints[b]),
			d = this.getBodyVerticeToJoint(b);
		  c.attach(this, d);
		  this.joints[b] = c;
		}
		this.calculatingForce = !0;
	  },
	  getBodyVerticeToJoint: function (b) {
		return {
		  x: ("start" === b ? -this.size.x / 2 : this.size.x / 2) * Box2D.SCALE,
		  y: 0 * Box2D.SCALE
		};
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-joint").requires("plugins.box2d.entity").defines(function () {
	EntityRunJoint = ig.Box2DEntity.extend({
	  body: null,
	  size: {
		x: 10,
		y: 10
	  },
	  center: {},
	  zIndex: 3,
	  image: new ig.Image("media/graphics/game/item/joint.png"),
	  box2dType: 1,
	  dynamicType: 0,
	  density: 100,
	  friction: 0,
	  restitution: 1,
	  bodies: [],
	  joints: [],
	  attachedEntities: [],
	  broke: !1,
	  jointDef: null,
	  anchor: {},
	  angleLimit: 0,
	  radian: 0,
	  maxForce: 2.8,
	  scale: 1,
	  init: function (b, c, d) {
		ig.global.wm ? this.parent(b, c, d) : (this.size.x = this.image.width, this.size.y = this.image.height, b -= this.size.x / 2, c -= this.size.y / 2, this.parent(b, c, d), this.context = ig.system.context, this.jointDef = new Box2D.Dynamics.Joints.b2RevoluteJointDef(), this.anchor = new Box2D.Common.Math.b2Vec2(0, 0), this.radian = this.size.x / 2, this.angleLimit = 2 * Math.PI, this.initFilter(), this.fixed && this.attachToLand());
	  },
	  initFilter: function () {
		this.setFilterData(this.category, this.mask);
	  },
	  setFilterData: function (b, c) {
		var d = new Box2D.Dynamics.b2FilterData();
		d.categoryBits = b;
		d.maskBits = c;
		this.body.GetFixtureList().SetFilterData(d);
	  },
	  attachToLand: function () {
		var b = this.manager.getLandById(this.land.id),
		  c = this.land.connect,
		  c = this.createVector(c.x * Box2D.SCALE, c.y * Box2D.SCALE);
		this.attach(b, c);
	  },
	  attach: function (b, c) {
		this.jointDef.bodyA = this.body;
		this.jointDef.bodyB = b.body;
		this.jointDef.localAnchorA = this.createVector(0, 0);
		this.jointDef.localAnchorB = c;
		this.jointDef.enableLimit = !1;
		this.jointDef.enableMotor = !1;
		this.jointDef.collideConnected = !1;
		this.jointDef.upperAngle = this.angleLimit;
		this.jointDef.lowerAngle = -this.jointDef.upperAngle;
		this.joints.push(ig.world.CreateJoint(this.jointDef));
		this.attachedEntities.push(b);
	  },
	  update: function () {
		this.parent();
		!this.fixed && !this.broke && this.checkJointForceToBreak();
	  },
	  createVector: function (b, c) {
		return new Box2D.Common.Math.b2Vec2(b, c);
	  },
	  getCenter: function () {
		this.center.x = this.pos.x + this.size.x / 2;
		this.center.y = this.pos.y + this.size.y / 2;
		return ig.copy(this.center);
	  },
	  getTotalForces: function () {
		for (var b = 0, c = 0; c < this.joints.length; c++) var d = this.joints[c].GetReactionForce(ig.game.updateTimestep).y, b = b + d;
		return ig.game.roundDecimal(b, 2);
	  },
	  checkJointForceToBreak: function () {
		this.getTotalForces() > this.maxForce && this.breakJoint();
	  },
	  breakJoint: function () {
		for (var b = 0; b < this.joints.length - 1; b++) ig.world.DestroyJoint(this.joints[b]);
		this.manager.onJointBroken(this);
		this.broke = !0;
		ig.soundHandler.sfxPlayer.play("break");
	  },
	  draw: function () {
		this.parent();
		this.context.save();
		this.context.drawImage(this.image.data, this.pos.x, this.pos.y);
		this.context.restore();
	  },
	  hasAttachId: function (b) {
		return b == this._id;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.run-wall").requires("plugins.box2d.entity").defines(function () {
	EntityRunWall = ig.Box2DEntity.extend({
	  manager: null,
	  body: null,
	  box2dType: 0,
	  dynamicType: 2,
	  density: 1,
	  color: "#777777",
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.initFilter();
	  },
	  initFilter: function () {
		this.setFilterData(this.category, this.mask);
	  },
	  setFilterData: function (b, c) {
		var d = new Box2D.Dynamics.b2FilterData();
		d.categoryBits = b;
		d.maskBits = c;
		this.body.GetFixtureList().SetFilterData(d);
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.drawFromVertices();
	  },
	  drawFromVertices: function () {
		this.context.save();
		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.moveTo(this.vertices[0].x, this.vertices[0].y);
		for (var b = 1; b < this.vertices.length; b++) {
		  var c = this.vertices[b];
		  this.context.lineTo(c.x, c.y);
		}
		this.context.fill();
		this.context.closePath();
		this.context.restore();
	  },
	  hasAttachId: function (b) {
		return b == this._id;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.result-star").requires("impact.entity").defines(function () {
	EntityResultStar = ig.Entity.extend({
	  manager: null,
	  images: {
		empty: new ig.Image("media/graphics/game/ui/star-empty.png"),
		fill: new ig.Image("media/graphics/game/ui/star-fill.png"),
		filled: new ig.Image("media/graphics/game/ui/star-filled.png")
	  },
	  empty: {
		image: new ig.Image("media/graphics/game/ui/star-empty.png"),
		center: {
		  x: 0,
		  y: 0
		},
		translateA: {
		  x: 0,
		  y: 0
		},
		translateB: {
		  x: 0,
		  y: 0
		},
		scale: 0
	  },
	  fill: {
		image: new ig.Image("media/graphics/game/ui/star-fill.png"),
		center: {
		  x: 0,
		  y: 0
		},
		translate: {
		  x: 0,
		  y: 0
		},
		margin: {
		  x: 7,
		  y: 7
		},
		scale: 0
	  },
	  showing: !1,
	  showingFill: !1,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.images.empty.width;
		this.size.y = this.images.empty.height;
		this.empty.center.x = -this.empty.image.width / 2;
		this.empty.center.y = -this.empty.image.height / 2;
		this.empty.translateA.x = ig.system.width / 2;
		this.empty.translateA.y = ig.system.height / 2;
		this.empty.translateB.x = this.pos.x - this.empty.translateA.x + this.empty.image.width / 2;
		this.empty.translateB.y = this.pos.y - this.empty.translateA.y + this.empty.image.height / 2;
		this.fill.center.x = -this.fill.image.width / 2;
		this.fill.center.y = -this.fill.image.height / 2;
		this.fill.translate.x = this.pos.x + this.empty.image.width / 2;
		this.fill.translate.y = this.pos.y + this.empty.image.height / 2;
		this.show();
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.showing && (this.drawEmptyStar(), this.showingFill && this.drawFillStar());
	  },
	  drawEmptyStar: function () {
		this.context.save();
		this.context.translate(this.empty.translateA.x, this.empty.translateA.y);
		this.context.scale(this.empty.scale, this.empty.scale);
		this.context.translate(this.empty.translateB.x, this.empty.translateB.y);
		this.context.drawImage(this.empty.image.data, this.empty.center.x, this.empty.center.y);
		this.context.restore();
	  },
	  drawFillStar: function () {
		this.context.save();
		this.context.translate(this.fill.translate.x, this.fill.translate.y);
		this.context.scale(this.fill.scale, this.fill.scale);
		this.context.drawImage(this.fill.image.data, this.fill.center.x, this.fill.center.y);
		this.context.restore();
	  },
	  show: function () {
		this.showing = !0;
		this.tween({
		  empty: {
			scale: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  showFill: function () {
		this.showingFill = !0;
		this.tween({
		  fill: {
			scale: 1
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onFillShowed.bind(this)
		}).start();
	  },
	  onFillShowed: function () {
		this.empty.image = this.images.filled;
		this.showingFill = !1;
		this.manager.onStarFilled();
		ig.soundHandler.sfxPlayer.play("star");
	  },
	  hide: function () {
		this.tween({
		  empty: {
			scale: 0
		  }
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showing = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.result-board").requires("impact.entity").defines(function () {
	EntityResultBoard = ig.Entity.extend({
	  manager: null,
	  image: new ig.Image("media/graphics/game/ui/ribbon.png"),
	  imagePos: {
		x: 0,
		y: 0
	  },
	  translateA: {
		x: 0,
		y: 0
	  },
	  translateB: {
		x: 0,
		y: 0
	  },
	  scale: 0,
	  showing: !1,
	  text: {
		size: 26,
		font: "acrom-bold",
		fill: "#FFFFFF",
		align: "center",
		baseline: "middle",
		lines: 2,
		lineSpace: 0,
		left: [],
		right: [],
		x: {
		  left: 0,
		  right: 0
		},
		translate: {
		  x: 0,
		  y: 0
		},
		positions: []
	  },
	  time: 0,
	  cost: 0,
	  MARGIN: {
		LEFT: 80,
		TOP: 35,
		RIGHT: 80,
		BOTTOM: 25
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		this.context = ig.system.context;
		this.size.x = this.image.width;
		this.size.y = this.image.height;
		this.initBoardPos();
		this.initTextPos();
		this.show();
	  },
	  initBoardPos: function () {
		this.imagePos.x = -this.size.x / 2;
		this.imagePos.y = -this.size.y / 2;
		this.translateA.x = ig.system.width / 2;
		this.translateA.y = ig.system.height / 2;
		this.translateB.x = this.pos.x - this.translateA.x + this.size.x / 2;
		this.translateB.y = this.pos.y - this.translateA.y + this.size.y / 2;
	  },
	  initTextPos: function () {
		this.text.lineSpace = (this.size.y - this.MARGIN.TOP - this.MARGIN.BOTTOM) / this.text.lines;
		this.text.left = [_STRINGS.Result.Time, _STRINGS.Result.Cost];
		this.text.right = [this.time, this.cost];
		this.text.x.left = this.pos.x + this.MARGIN.LEFT;
		this.text.x.right = this.pos.x + this.size.x - this.MARGIN.RIGHT;
		this.text.translate = this.getCenter();
		for (var b = this.pos.y + this.MARGIN.TOP, c = 0; c < this.text.lines; c++) {
		  var d = {};
		  d.left = {
			x: this.text.x.left - this.text.translate.x,
			y: b - this.text.translate.y
		  };
		  d.right = {
			x: this.text.x.right - this.text.translate.x,
			y: b - this.text.translate.y
		  };
		  this.text.positions.push(d);
		  b += this.text.lineSpace;
		}
	  },
	  getCenter: function () {
		return {
		  x: this.pos.x + this.size.x / 2,
		  y: this.pos.y + this.size.y / 2
		};
	  },
	  update: function () {
		this.parent();
	  },
	  draw: function () {
		this.parent();
		this.showing && (this.drawBoard(), this.drawTexts());
	  },
	  drawBoard: function () {
		this.context.save();
		this.context.translate(this.translateA.x, this.translateA.y);
		this.context.scale(this.scale, 1);
		this.context.translate(this.translateB.x, this.translateB.y);
		this.context.drawImage(this.image.data, this.imagePos.x, this.imagePos.y);
		this.context.restore();
	  },
	  drawTexts: function () {
		this.context.save();
		this.context.font = this.text.size + "px " + this.text.font;
		this.context.fillStyle = this.text.fill;
		this.context.textBaseline = this.text.baseline;
		this.context.translate(this.text.translate.x, this.text.translate.y);
		this.context.scale(this.scale, 1);
		for (var b = 0; b < this.text.lines; b++) {
		  var c = this.text.positions[b];
		  this.context.textAlign = "left";
		  this.context.fillText(this.text.left[b], c.left.x, c.left.y);
		  this.context.textAlign = "right";
		  this.context.fillText(this.text.right[b], c.right.x, c.right.y);
		}
		this.context.restore();
	  },
	  show: function () {
		this.showing = !0;
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {},
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.showing = !1;
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.result").requires("impact.entity", "game.entities.result-star", "game.entities.result-board").defines(function () {
	EntityResult = ig.Entity.extend({
	  manager: null,
	  type: ig.Entity.TYPE.A,
	  scale: 0,
	  text: {
		text: "",
		size: 30,
		font: "acrom-bold",
		fill: "#FFFFFF",
		align: "center",
		baseline: "middle",
		center: {
		  x: 0,
		  y: 0
		},
		translateA: {
		  x: 0,
		  y: 0
		},
		translateB: {
		  x: 0,
		  y: -145
		}
	  },
	  completed: !0,
	  stars: [],
	  starsCount: 0,
	  starsShowed: 0,
	  buttons: {},
	  onClosed: null,
	  best: {
		time: !1,
		cost: !1
	  },
	  POSITION: {
		STARS: [{
		  x: 333,
		  y: 147
		}, {
		  x: 432,
		  y: 155
		}, {
		  x: 530,
		  y: 147
		}],
		BOARD: {
		  x: 278,
		  y: 257
		},
		HOME: {
		  x: 343,
		  y: 406
		},
		PLAY: {
		  x: 433,
		  y: 397
		},
		EDIT: {
		  x: 441,
		  y: 406
		},
		RESTART: {
		  x: 540,
		  y: 406
		}
	  },
	  OVERLAY_OPACITY: 0.5,
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.size.x = ig.system.width, this.size.y = ig.system.height, this.pos.x = 0, this.pos.y = 0, this.calculateScore(), this.initText(), this.spawnStars(), this.initBoard(), ig.game.sortEntitiesDeferred(), this.show());
	  },
	  calculateScore: function () {
		var b = ig.game.getBuildCost(),
		  c = ig.game.getBuildTime();
		this.time = c.spend;
		this.cost = b.cost;
		this.completed ? (this.text.text = _STRINGS.Result.Completed, this.starsCount = 1 + (c.percentage > ig.game.SCORE.TIME ? 0 : 1) + (b.percentage > ig.game.SCORE.COST ? 0 : 1), this.checkUpdateBestScore(this.time, this.cost, this.starsCount), ig.game.unlockNextLevel(), ig.soundHandler.sfxPlayer.play("success")) : (this.text.text = _STRINGS.Result.Failed, ig.soundHandler.sfxPlayer.play("fail"));
	  },
	  checkUpdateBestScore: function (b, c, d) {
		var e = ig.game.getLevelsData()[ig.game.level];
		if (e.time > b || 0 === e.time) e.time = b, this.best.time = !0;
		if (e.cost > c || 0 === e.cost) e.cost = c, this.best.cost = !0;
		e.stars < d && (e.stars = d);
		ig.game.save("levels", ig.game.sessionData.levels);
	  },
	  initText: function () {
		this.text.translateA.x = ig.system.width / 2;
		this.text.translateA.y = ig.system.height / 2;
	  },
	  spawnStars: function () {
		for (var b = 0; b < this.POSITION.STARS.length; b++) {
		  var c = this.POSITION.STARS[b],
			c = ig.game.spawnEntity(EntityResultStar, c.x, c.y, {
			  manager: this,
			  zIndex: this.zIndex + 1
			});
		  this.stars.push(c);
		}
	  },
	  initBoard: function () {
		this.board = ig.game.spawnEntity(EntityResultBoard, this.POSITION.BOARD.x, this.POSITION.BOARD.y, {
		  manager: this,
		  time: this.timeFormat(this.time),
		  cost: this.thousandFormat(this.cost),
		  zIndex: this.zIndex + 1
		});
	  },
	  show: function () {
		this.tween({
		  scale: 1
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseOut,
		  onComplete: this.onShowed.bind(this)
		}).start();
	  },
	  onShowed: function () {
		this.completed ? (this.manager.onResultShown(), this.fillStar()) : this.spawnButtons();
	  },
	  hide: function () {
		this.tween({
		  scale: 0
		}, 0.5, {
		  easing: ig.Tween.Easing.Back.EaseIn,
		  onComplete: this.onHidden.bind(this)
		}).start();
	  },
	  onHidden: function () {
		this.kill();
		if ("function" === typeof this.onClosed) this.onClosed();
	  },
	  draw: function () {
		this.parent();
		this.drawOverlay();
		this.drawText();
	  },
	  drawOverlay: function () {
		this.context.save();
		this.context.globalAlpha = this.OVERLAY_OPACITY;
		this.context.fillStyle = "#000000";
		this.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
		this.context.globalAlpha = 1;
		this.context.restore();
	  },
	  drawText: function () {
		this.context.save();
		this.context.translate(this.text.translateA.x, this.text.translateA.y);
		this.context.scale(this.scale, this.scale);
		this.context.translate(this.text.translateB.x, this.text.translateB.y);
		this.context.font = this.text.size + "px " + this.text.font;
		this.context.fillStyle = this.text.fill;
		this.context.textAlign = this.text.align;
		this.context.textBaseline = this.text.baseline;
		this.context.fillText(this.text.text, this.text.center.x, this.text.center.y);
		this.context.restore();
	  },
	  fillStar: function () {
		this.stars[this.starsShowed].showFill();
	  },
	  onStarFilled: function () {
		this.starsShowed++;
		this.starsShowed < this.starsCount ? this.fillStar() : this.spawnButtons();
	  },
	  spawnButtons: function () {
		this.buttons.home = ig.game.spawnEntity(EntityButtonShadow, this.POSITION.HOME.x, this.POSITION.HOME.y, {
		  manager: this,
		  align: "left top",
		  _type: "home",
		  zIndex: this.zIndex + 1
		});
		this.completed ? this.buttons.play = ig.game.spawnEntity(EntityButtonShadow, this.POSITION.PLAY.x, this.POSITION.PLAY.y, {
		  manager: this,
		  align: "left top",
		  _type: "play-big",
		  zIndex: this.zIndex + 1
		}) : this.buttons.edit = ig.game.spawnEntity(EntityButtonShadow, this.POSITION.EDIT.x, this.POSITION.EDIT.y, {
		  manager: this,
		  align: "left top",
		  _type: "edit-big",
		  zIndex: this.zIndex + 1
		});
		this.buttons.restart = ig.game.spawnEntity(EntityButtonShadow, this.POSITION.RESTART.x, this.POSITION.RESTART.y, {
		  manager: this,
		  align: "left top",
		  _type: "tool-redo",
		  zIndex: this.zIndex + 1
		});
	  },
	  onButtonClick: function (b) {
		switch (b) {
		  case "home":
			this.onClosed = this.backToHome;
			break;
		  case "play-big":
			this.onClosed = this.goToNextLevel;
			break;
		  case "edit-big":
			this.onClosed = this.backToEdit;
			break;
		  case "tool-redo":
			this.onClosed = this.backToLevelSelection;
		}
		this.close();
	  },
	  backToHome: function () {
		ig.game.homeMode = "menu";
		ig.game.loadLevel(LevelHome);
	  },
	  goToNextLevel: function () {
		ig.game.level < ig.game.TOTAL_LEVELS ? (ig.game.level++, ig.game.clearDrawingData(), ig.game.loadLevel(LevelDraw)) : (ig.game.homeMode = "select", ig.game.loadLevel(LevelHome));
	  },
	  backToEdit: function () {
		ig.game.loadLevel(LevelDraw);
	  },
	  backToLevelSelection: function () {
		ig.game.homeMode = "select";
		ig.game.loadLevel(LevelHome);
	  },
	  close: function () {
		for (var b = 0; b < this.stars.length; b++) this.stars[b].hide();
		this.board.hide();
		for (var c in this.buttons) this.buttons[c].hide();
		this.hide();
	  },
	  kill: function () {
		for (var b = 0; b < this.stars.length; b++) this.stars[b].kill();
		this.board.kill();
		for (var c in this.buttons) this.buttons[c].kill();
		this.parent();
	  },
	  thousandFormat: function (b) {
		return b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	  },
	  timeFormat: function (b) {
		var c = Math.floor(b / 3600);
		b %= 3600;
		var d = Math.floor(b / 60);
		b %= 60;
		return 99 < c ? "99:00:00" : 1 > c ? this.doubleDigitsFormat(d) + ":" + this.doubleDigitsFormat(b) : this.doubleDigitsFormat(c) + ":" + this.doubleDigitsFormat(d) + ":" + this.doubleDigitsFormat(b);
	  },
	  doubleDigitsFormat: function (b) {
		return ("00" + b).slice(-2);
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.entities.controller.run").requires("impact.entity", "game.entities.controller.background", "game.entities.buttons.button-shadow", "game.entities.buttons.button-shadow-tool", "game.entities.buttons.button-toggle", "game.entities.ui-level", "game.entities.run-car", "game.entities.run-land", "game.entities.run-line", "game.entities.run-joint", "game.entities.run-wall", "game.entities.controller.result", "game.entities.controller.settings").defines(function () {
	EntityRun = ig.Entity.extend({
	  background: null,
	  drawingData: {},
	  lands: [],
	  lines: [],
	  joints: [],
	  walls: [],
	  ui: {
		level: null
	  },
	  buttons: {
		edit: null,
		settings: null,
		speedUp: null
	  },
	  success: !1,
	  result: null,
	  _backToEdit: !1,
	  FILTERS: {
		NONE: 1,
		LAND: 2,
		WALL: 4,
		LINE: 8,
		FLOOR: 16,
		JOINT: 32,
		CAR: 64
	  },
	  MARGIN: {
		MAIN: {
		  x: 20,
		  y: 20
		}
	  },
	  init: function (b, c, d) {
		this.parent(b, c, d);
		ig.global.wm || (this.context = ig.system.context, this.drawingData = ig.copy(ig.game.drawingData), this.theme = ig.game.theme, this.pointer = ig.game.spawnEntity(EntityDrawPointer, 0, 0, {
		  manager: this
		}), this.background = ig.game.spawnEntity(EntityBackground, 0, 0, {
		  manager: this,
		  theme: this.theme,
		  animate: !0
		}), this.zIndex = ig.game.getHighestZIndex(), this.spawnUI(), this.constructTheBridge(), this.spawnEnvironments(), this.spawnButtons(), ig.game.setGravity(0, 9.8), ig.game.setBox2DUpdate(!0), ig.soundHandler.sfxPlayer.play("carRun"), window.setTimeout(this.runCar.bind(this), 740));
	  },
	  constructTheBridge: function () {
		for (var b = 0; b < this.drawingData.lands.length; b++) {
		  var c = this.drawingData.lands[b];
		  c.manager = this;
		  c.zIndex = this.zIndex;
		  c.theme = this.theme;
		  c.category = this.FILTERS.LAND;
		  c.mask = this.FILTERS.CAR;
		  c = ig.game.spawnEntity(EntityRunLand, c.position.x, c.position.y, c);
		  this.lands.push(c);
		}
		for (b = 0; b < this.drawingData.walls.length; b++) c = this.drawingData.walls[b], c.manager = this, c.zIndex = this.zIndex + 1, c.category = this.FILTERS.WALL, c.mask = this.FILTERS.NONE, c = ig.game.spawnEntity(EntityRunWall, c.pos.x, c.pos.y, c), this.walls.push(c);
		for (b = 0; b < this.drawingData.joints.length; b++) c = this.drawingData.joints[b], c.manager = this, c.zIndex = this.zIndex + 3, c.category = this.FILTERS.JOINT, c.mask = this.FILTERS.NONE, c = ig.game.spawnEntity(EntityRunJoint, c.center.x, c.center.y, c), this.joints.push(c);
		for (b = 0; b < this.drawingData.lines.length; b++) c = this.drawingData.lines[b], c.manager = this, c.floor ? (c.zIndex = this.zIndex + 1, c.category = this.FILTERS.FLOOR, c.mask = this.FILTERS.CAR) : (c.zIndex = this.zIndex + 2, c.category = this.FILTERS.LINE, c.mask = this.FILTERS.NONE), c = ig.game.spawnEntity(EntityRunLine, 0, 0, c), this.lines.push(c);
	  },
	  spawnEnvironments: function () {
		for (var b = this.lands[0], c = this.lands[0], d = 1; d < this.lands.length; d++) {
		  var e = this.lands[d];
		  e.pos.x < b.pos.x && (b = e);
		  e.pos.x > c.pos.x && (c = e);
		}
		this.car = ig.game.spawnEntity(EntityRunCar, -1E3, -1E3, {
		  manager: this,
		  targetLand: b,
		  zIndex: this.zIndex,
		  category: this.FILTERS.CAR,
		  mask: this.FILTERS.LAND | this.FILTERS.FLOOR
		});
		this.finishBoard = ig.game.spawnEntity(EntityDrawFinishBoard, -1E3, -1E3, {
		  manager: this,
		  targetLand: c,
		  zIndex: this.zIndex - 1,
		  car: this.car
		});
	  },
	  spawnUI: function () {
		this.ui.level = ig.game.spawnEntity(EntityUiLevel, ig.system.width / 2, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "center top",
		  zIndex: this.zIndex,
		  scale: 1
		});
	  },
	  spawnButtons: function () {
		this.buttons.edit = ig.game.spawnEntity(EntityButtonShadow, this.MARGIN.MAIN.x, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "left top",
		  zIndex: this.zIndex + 1,
		  _type: "edit"
		});
		this.buttons.settings = ig.game.spawnEntity(EntityButtonShadow, ig.system.width - this.MARGIN.MAIN.x, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "right top",
		  zIndex: this.zIndex + 1,
		  _type: "settings"
		});
		this.buttons.speedUp = ig.game.spawnEntity(EntityButtonShadow, this.MARGIN.MAIN.x + 150, this.MARGIN.MAIN.y, {
		  manager: this,
		  align: "right top",
		  zIndex: this.zIndex + 1,
		  _type: "speed-up",
		  autoShow: !1
		});
	  },
	  getLandById: function (b) {
		for (var c = 0; c < this.lands.length; c++) {
		  var d = this.lands[c];
		  if (d.hasAttachId(b)) return d;
		}
		for (c = 0; c < this.walls.length; c++) if (d = this.walls[c], d.hasAttachId(b)) return d;
		return !1;
	  },
	  getJointById: function (b) {
		for (var c = 0; c < this.joints.length; c++) {
		  var d = this.joints[c];
		  if (d.hasAttachId(b)) return d;
		}
	  },
	  onButtonClick: function (b) {
		switch (b) {
		  case "edit":
			this.backToEdit();
			break;
		  case "settings":
			this.pauseGame();
			break;
		  case "speed-up":
			this.buttons.speedUp.hide(), ig.game.setUpdateMultiplier(4);
		}
	  },
	  onButtonToggled: function (b) {
		switch (b) {
		  case "run":
			this.setCarRun(!0);
		}
	  },
	  runCar: function () {
		this.setCarRun(!0);
		window.clearTimeout();
	  },
	  setCarRun: function (b) {
		b ? (this.buttons.speedUp.show(), this.car.setSpeed(4)) : (this.buttons.speedUp.hide(), this.car.setSpeed(0));
	  },
	  backToEdit: function () {
		ig.game.setUpdateMultiplier(1);
		this._backToEdit = !0;
		this.setCarRun(!1);
		this.setShowButtons(!1);
	  },
	  setShowButtons: function (b) {
		b = b ? "show" : "hide";
		for (var c in this.buttons) this.buttons[c][b]();
	  },
	  onButtonHidden: function (b) {
		"settings" === b._type && this._backToEdit && (ig.game.killAllEntities(), ig.game.loadLevel(LevelDraw));
	  },
	  onJointBroken: function () {
		for (var b = 0; b < this.lands.length; b++) this.lands[b].setFilterData(this.FILTERS.LAND, this.FILTERS.CAR | this.FILTERS.LINE);
		for (b = 0; b < this.lines.length; b++) this.lines[b].setFilterData(this.FILTERS.LINE, this.FILTERS.LAND);
		this.success = !1;
	  },
	  onCarSucceed: function () {
		this.showResult(!0);
	  },
	  onCarFailed: function () {
		this.showResult(!1);
	  },
	  showResult: function (b) {
		this.setCarRun(!1);
		var c = ig.game.getHighestZIndex();
		this.ui.level.zIndex = c + 1;
		ig.game.onShowResult();
		this.result = ig.game.spawnEntity(EntityResult, 0, 0, {
		  manager: this,
		  zIndex: c,
		  completed: b
		});
	  },
	  onResultShown: function () {},
	  pauseGame: function () {
		ig.game.pauseGame();
		this.settings = ig.game.spawnEntity(EntitySettings, 0, 0, {
		  manager: this,
		  title: _STRINGS.Game.Paused,
		  pointer: this.pointer
		});
	  },
	  resumeGame: function () {
		ig.game.resumeGame();
	  },
	  onSettingsClosed: function () {
		this.resumeGame();
	  }
	});
  });
  ig.baked = !0;
  ig.module("game.levels.run").requires("game.entities.controller.run").defines(function () {
	LevelRun = {
	  entities: [{
		type: "EntityRun",
		x: -16,
		y: -16
	  }],
	  layer: []
	};
  });
  ig.baked = !0;
  ig.module("game.main").requires("game.construct-a-bridge", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.home", "game.levels.tutorial", "game.levels.draw", "game.levels.run").defines(function () {
	_ = ~[];
	_ = {
	  ___: ++_,
	  $$$$: (![] + "")[_],
	  __$: ++_,
	  $_$_: (![] + "")[_],
	  _$_: ++_,
	  $_$$: ({} + "")[_],
	  $$_$: (_[_] + "")[_],
	  _$$: ++_,
	  $$$_: (!"" + "")[_],
	  $__: ++_,
	  $_$: ++_,
	  $$__: ({} + "")[_],
	  $$_: ++_,
	  $$$: ++_,
	  $___: ++_,
	  $__$: ++_
	};
	_.$_ = (_.$_ = _ + "")[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + "")[_.__$]) + (!_ + "")[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!"" + "")[_.__$]) + (_._ = (!"" + "")[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$;
	_.$$ = _.$ + (!"" + "")[_._$$] + _.__ + _._ + _.$ + _.$$;
	_.$ = _.___[_.$_][_.$_];
	_.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + "(" + _.$$_$ + _._$ + _.$$__ + _._ + "\\" + _.__$ + _.$_$ + _.$_$ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + ".\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + "\\" + _.__$ + _.__$ + _.$$$ + _.$$$$ + "(\\\"\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + "." + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")<" + _.___ + "){\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + "(" + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + "!=\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + "")[_._$_] + _.$$$$ + "){" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "." + (![] + "")[_._$_] + _._$ + "\\" + _.__$ + _.$__ + _.$$$ + "(\\\"\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + "\\" + _.$__ + _.___ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.$__ + _.___ + (![] + "")[_._$_] + _.$_$_ + "\\" + _.__$ + _.$$$ + _.__$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + "...\\\");$(\\\"#" + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\\").\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "();" + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + "." + (![] + "")[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _.___ + (![] + "")[_._$_] + _.$_$_ + _.$$__ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + "")[_._$_] + _.$$$$ + "." + (![] + "")[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$_$ + _.___ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + ");}}" + "\"")())();
	MyGame = ConstructABridge.extend({
	  sessionData: {},
	  io: null,
	  paused: false,
	  tweens: null,
	  GRID_WIDTH: 19.2,
	  init: function () {
		// this.tweens = new ig.TweensHandler();
		// SERVER-SIDE INTEGRATIONS
		this.setupMarketJsGameCenter();
		//The io manager so you can access ig.game.io.mouse
		this.levelProvider = new LevelProvider(ig.game.GRID_WIDTH);
		this.io = new IoManager();
		this.textManager = new ig.TextManager();
		this.setupUrlParams = new ig.UrlParameters();
		this.removeLoadingWheel();
		this.setupStorageManager(); // Uncomment to use Storage Manager
		this.finalize();
	  },
	  setupMarketJsGameCenter: function () {
		if (_SETTINGS) {
		  if (_SETTINGS.MarketJSGameCenter) {
			var el = ig.domHandler.getElementByClass('gamecenter-activator');
			if (_SETTINGS.MarketJSGameCenter.Activator.Enabled) {
			  if (_SETTINGS.MarketJSGameCenter.Activator.Position) {
				console.log('MarketJSGameCenter activator settings present ....');
				ig.domHandler.css(el, {
				  position: "absolute",
				  left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
				  top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
				  "z-index": 3
				});
			  }
			}
			ig.domHandler.show(el);
		  } else {
			console.log('MarketJSGameCenter settings not defined in game settings');
		  }
		}
	  },
	  finalize: function () {
		if (ig.ua.mobile) {
		  // Inject link
		  var elem = ig.domHandler.getElementById("#play");
		  ig.domHandler.attr(elem, 'onclick', "ig.soundHandler.sfxPlayer.play(\"staticSound\");ig.game.splashClick();");
		  ig.domHandler.show(elem);
		} else {
		  this.start();
		}
		ig.sizeHandler.reorient();
	  },
	  removeLoadingWheel: function () {
		// Remove the loading wheel
		try {
		  $('#ajaxbar').css('background', 'none');
		} catch (err) {
		  console.log(err);
		}
	  },
	  showDebugMenu: function () {
		console.log('showing debug menu ...');
		// SHOW DEBUG LINES
		ig.Entity._debugShowBoxes = true;
		// SHOW DEBUG PANELS
		$('.ig_debug').show();
	  },
	  start: function () {
		this.resetPlayerStats();
		// TEST Eg: load level using Director plugin
		this.director = new ig.Director(this, [LevelOpening, LevelHome,
		// LevelTutorial,
		LevelDraw, LevelRun]);
		// CALL LOAD LEVELS
		if (_SETTINGS.Branding.Splash.Enabled) {
		  try {
			this.branding = new ig.BrandingSplash();
		  } catch (err) {
			console.log(err);
			console.log('Loading original levels ...');
			this.director.loadLevel(this.director.currentLevel);
		  }
		} else {
		  this.director.loadLevel(this.director.currentLevel);
		}
		if (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) {
		  this.spawnEntity(EntityPointerSelector, 50, 50);
		}
		// MUSIC
		ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
		ig.soundHandler.bgmPlayer.volume(this.load("bgm"));
		ig.soundHandler.sfxPlayer.volume(this.load("sfx"));
	  },
	  fpsCount: function () {
		if (!this.fpsTimer) {
		  this.fpsTimer = new ig.Timer(1);
		}
		if (this.fpsTimer && this.fpsTimer.delta() < 0) {
		  if (this.fpsCounter != null) {
			this.fpsCounter++;
		  } else {
			this.fpsCounter = 0;
		  }
		} else {
		  ig.game.fps = this.fpsCounter;
		  this.fpsCounter = 0;
		  this.fpsTimer.reset();
		}
	  },
	  endGame: function () {
		console.log('End game');
		// IMPORTANT
		ig.soundHandler.bgmPlayer.stop();
		// SUBMIT STATISTICS - USE ONLY WHEN MARKETJS API IS CONFIGURED
		// this.submitStats();
		ig.apiHandler.run("MJSEnd");
	  },
	  resetPlayerStats: function () {
		ig.log('resetting player stats ...');
		this.playerStats = {
		  // EG: coins,score,lives, etc
		  id: this.playerStats ? this.playerStats.id : null // FOR FACEBOOK LOGIN IDS
		};
	  },
	  splashClick: function () {
		var elem = ig.domHandler.getElementById("#play");
		ig.domHandler.hide(elem);
		// Show ads
		ig.apiHandler.run("MJSFooter");
		ig.apiHandler.run("MJSHeader");
		ig.game.start();
		//ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.bgm);
	  },
	  pauseGame: function () {
		this.paused = true;
	  },
	  resumeGame: function () {
		this.paused = false;
	  },
	  showOverlay: function (divList) {
		for (i = 0; i < divList.length; i++) {
		  if ($('#' + divList[i])) $('#' + divList[i]).show();
		  if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
		}
		// OPTIONAL
		//this.pauseGame();
	  },
	  hideOverlay: function (divList) {
		for (i = 0; i < divList.length; i++) {
		  if ($('#' + divList[i])) $('#' + divList[i]).hide();
		  if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
		}
		// OPTIONAL
		//this.resumeGame();
	  },
	  currentBGMVolume: 1,
	  addition: 0.1,
	  // MODIFIED UPDATE() function to utilize Pause button. See EntityPause (pause.js)
	  update: function () {
		//Optional - to use
		//this.fpsCount();
		if (this.paused) {
		  // only update some of the entities when paused:
		  this.updateWhilePaused();
		  this.checkWhilePaused();
		} else {
		  // call update() as normal when not paused
		  this.parent();
		  /** Update tween time.
		   * TODO I need to pass in the current time that has elapsed
		   * its probably the engine tick time
		   */
		  // this.tweens.update(this.tweens.now());
		  //BGM looping fix for mobile
		  if (ig.ua.mobile && ig.soundHandler)
			// A win phone fix by yew meng added into ig.soundHandler
			{
			  ig.soundHandler.forceLoopBGM();
			}
		}
	  },
	  updateWhilePaused: function () {
		for (var i = 0; i < this.entities.length; i++) {
		  if (this.entities[i].ignorePause) {
			this.entities[i].update();
		  }
		}
	  },
	  checkWhilePaused: function () {
		var hash = {};
		for (var e = 0; e < this.entities.length; e++) {
		  var entity = this.entities[e];
		  if (entity.ignorePause) {
			if (entity.type == ig.Entity.TYPE.NONE && entity.checkAgainst == ig.Entity.TYPE.NONE && entity.collides == ig.Entity.COLLIDES.NEVER) {
			  continue;
			}
			var checked = {},
			  xmin = Math.floor(entity.pos.x / this.cellSize),
			  ymin = Math.floor(entity.pos.y / this.cellSize),
			  xmax = Math.floor((entity.pos.x + entity.size.x) / this.cellSize) + 1,
			  ymax = Math.floor((entity.pos.y + entity.size.y) / this.cellSize) + 1;
			for (var x = xmin; x < xmax; x++) {
			  for (var y = ymin; y < ymax; y++) {
				if (!hash[x]) {
				  hash[x] = {};
				  hash[x][y] = [entity];
				} else if (!hash[x][y]) {
				  hash[x][y] = [entity];
				} else {
				  var cell = hash[x][y];
				  for (var c = 0; c < cell.length; c++) {
					if (entity.touches(cell[c]) && !checked[cell[c].id]) {
					  checked[cell[c].id] = true;
					  ig.Entity.checkPair(entity, cell[c]);
					}
				  }
				  cell.push(entity);
				}
			  }
			}
		  }
		}
	  },
	  draw: function () {
		this.parent();
		//Optional - to use , debug console , e.g : ig.game.debugCL("debug something");
		//hold click on screen for 2s to enable debug console
		//this.drawDebug();
		// COPYRIGHT
		this.dctf();
	  },
	  dctf: function () {
		
	  },
	  /**
	   * A new function to aid old android browser multiple canvas functionality
	   * basically everytime you want to clear rect for android browser
	   * you use this function instead
	   */
	  clearCanvas: function (ctx, width, height) {
		var canvas = ctx.canvas;
		ctx.clearRect(0, 0, width, height);
		/*
		var w=canvas.width;
		canvas.width=1;
		canvas.width=w;
		*/
		/*
		canvas.style.visibility = "hidden"; // Force a change in DOM
		canvas.offsetHeight; // Cause a repaint to take play
		canvas.style.visibility = "inherit"; // Make visible again
		*/
		canvas.style.display = "none"; // Detach from DOM
		canvas.offsetHeight; // Force the detach
		canvas.style.display = "inherit"; // Reattach to DOM
	  },
	  drawDebug: function () {
		//-----draw debug-----
		if (!ig.global.wm) {
		  // enable console
		  this.debugEnable();
		  //debug postion set to top left
		  if (this.viewDebug) {
			//draw debug bg
			ig.system.context.fillStyle = '#000000';
			ig.system.context.globalAlpha = 0.35;
			ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
			ig.system.context.globalAlpha = 1;
			if (this.debug && this.debug.length > 0) {
			  //draw debug console log
			  for (i = 0; i < this.debug.length; i++) {
				ig.system.context.font = "10px Arial";
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
			  }
			}
		  }
		}
	  },
	  debugCL: function (consoleLog) {
		// ----- add debug console log -----
		//add console log to array
		if (!this.debug) {
		  this.debug = [];
		  this.debugLine = 1;
		  this.debug.push(consoleLog);
		} else {
		  if (this.debug.length < 50) {
			this.debug.push(consoleLog);
		  } else {
			this.debug.splice(0, 1);
			this.debug.push(consoleLog);
		  }
		  this.debugLine++;
		}
		console.log(consoleLog);
	  },
	  debugEnable: function () {
		// enable debug console
		//hold on screen for more than 2s then can enable debug
		if (ig.input.pressed('click')) {
		  this.debugEnableTimer = new ig.Timer(2);
		}
		if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
		  if (ig.input.released('click')) {
			this.debugEnableTimer = null;
		  }
		} else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
		  this.debugEnableTimer = null;
		  if (this.viewDebug) {
			this.viewDebug = false;
		  } else {
			this.viewDebug = true;
		  }
		}
	  }
	});
	ig.domHandler = null;
	ig.domHandler = new ig.DomHandler();
	ig.domHandler.forcedDeviceDetection();
	ig.domHandler.forcedDeviceRotation();
	//API handler
	ig.apiHandler = new ig.ApiHandler();
	//Size handler has a dependency on the dom handler so it must be initialize after dom handler
	ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
	//Setup the canvas
	var fps = 60;
	if (ig.ua.mobile) {
	  ig.Sound.enabled = false;
	  ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
	  ig.sizeHandler.resize();
	} else {
	  ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
	}
	//Added sound handler with the tag ig.soundHandler
	ig.soundHandler = null;
	ig.soundHandler = new ig.SoundHandler();
	ig.sizeHandler.reorient();
	_ = ~[];
	_ = {
	  ___: ++_,
	  $$$$: (![] + "")[_],
	  __$: ++_,
	  $_$_: (![] + "")[_],
	  _$_: ++_,
	  $_$$: ({} + "")[_],
	  $$_$: (_[_] + "")[_],
	  _$$: ++_,
	  $$$_: (!"" + "")[_],
	  $__: ++_,
	  $_$: ++_,
	  $$__: ({} + "")[_],
	  $$_: ++_,
	  $$$: ++_,
	  $___: ++_,
	  $__$: ++_
	};
	_.$_ = (_.$_ = _ + "")[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + "")[_.__$]) + (!_ + "")[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!"" + "")[_.__$]) + (_._ = (!"" + "")[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$;
	_.$$ = _.$ + (!"" + "")[_._$$] + _.__ + _._ + _.$ + _.$$;
	_.$ = _.___[_.$_][_.$_];
	_.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + "={},\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + "." + _.$$_$ + (![] + "")[_._$_] + "\\" + _.__$ + _.$$_ + _.$$$ + _.$$$$ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$_$_ + (![] + "")[_._$_] + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "(\\\"\\" + _.__$ + _.___ + _.__$ + _.__ + _.__ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\" + _.__$ + _.$$_ + _.___ + _.__ + _.$$$_ + _.$$_$ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + _.$$$$ + _.__ + "\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.$__ + _.___ + _.$_$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$_$ + _.___ + ".\\" + _.$__ + _.___ + "\\" + _.__$ + _._$_ + _.___ + (![] + "")[_._$_] + _.$$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$_$_ + _.$$__ + _.__ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._ + "\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$$_ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "@\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + "." + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")},\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$_$ + _.$_$$ + _.$_$_ + ");" + "\"")())();
	_ = ~[];
	_ = {
	  ___: ++_,
	  $$$$: (![] + "")[_],
	  __$: ++_,
	  $_$_: (![] + "")[_],
	  _$_: ++_,
	  $_$$: ({} + "")[_],
	  $$_$: (_[_] + "")[_],
	  _$$: ++_,
	  $$$_: (!"" + "")[_],
	  $__: ++_,
	  $_$: ++_,
	  $$__: ({} + "")[_],
	  $$_: ++_,
	  $$$: ++_,
	  $___: ++_,
	  $__$: ++_
	};
	_.$_ = (_.$_ = _ + "")[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + "")[_.__$]) + (!_ + "")[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!"" + "")[_.__$]) + (_._ = (!"" + "")[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$;
	_.$$ = _.$ + (!"" + "")[_._$$] + _.__ + _._ + _.$ + _.$$;
	_.$ = _.___[_.$_][_.$_];
	_.$(_.$(_.$$ + "\"" + "!" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "=\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "." + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ",\\\"" + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + _.$$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$$_ + _.$$_$ + "\\\"!=" + _.__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.__$ + _.$$_ + _.___ + _.$$$_ + _._$ + _.$$$$ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "&&(" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "." + _.__ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + _.$$$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}," + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + "." + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}," + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ".\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "=" + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){}),\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(" + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + "")[_._$_] + _.$$$_ + ");" + _.$$$$ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + "(\\" + _.__$ + _.$$_ + _.$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + _.$$$_ + "," + _._$ + "=\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$__ + _.$$$ + ".$(\\\"" + _.$$__ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _.$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + "\\\"),\\" + _.__$ + _.$_$ + _.$$_ + "=" + _.___ + ";\\" + _.__$ + _.$_$ + _.$$_ + "<" + _._$ + "." + (![] + "")[_._$_] + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + _.__ + "\\" + _.__$ + _.$_$ + _.___ + ";\\" + _.__$ + _.$_$ + _.$$_ + "++)" + _.$$$_ + "=" + _._$ + "[\\" + _.__$ + _.$_$ + _.$$_ + "].\\" + _.__$ + _.$__ + _.$$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.___ + _._$$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + _.__ + "(\\\"" + _._$_ + _.$$_$ + "\\\"),\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + "." + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(" + _.$$$_ + ")}();" + "\"")())();
  });