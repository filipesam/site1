(function e(t, n, r)
{
	function i(s, a)
	{
		if(!n[s])
		{
			if(!t[s])
			{
				var c = typeof require == "function" && require;
				if(!a && c) return c(s, !0);
				if(o) return o(s, !0);
				var u = new Error("Cannot find module '" + s + "'");
				throw u.code = "MODULE_NOT_FOUND", u
			}
			var l = n[s] = {
				exports:
				{}
			};
			t[s][0].call(l.exports, function (e)
			{
				var n = t[s][1][e];
				return i(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[s].exports
	}
	var o = typeof require == "function" && require;
	for(var s = 0; s < r.length; s++) i(r[s]);
	return i
})(
{
	1: [
		function (e, t, n)
		{
			"use strict";
			e("angular-mocks");
			var r = e("./routes");
			var i = v(r);
			var o = e("./controllers/aside-controller");
			var s = v(o);
			var a = e("./controllers/settings-controller");
			var c = v(a);
			var u = e("./providers/services/app-service");
			var l = v(u);
			var f = e("./initializers/app");
			var d = v(f);
			var p = e("./initializers/analytics");
			var h = v(p);
			e("fcn-core-config");
			e("fcn-core-services");
			e("fcn-core-storage");
			e("fcn-core-modals");
			e("core-templates");

			function v(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}
			angular.module("fcn").config(["StorageProvider",
				function (e)
				{
					e.setup(
					{
						prefix: "fcn-sc"
					})
				}
			]).service("AppService", l.
				default).controller("AsideController", s.
				default).controller("SettingsController", c.
				default).run(d.
				default).run(h.
				default).config(i.
				default)
		},
		{
			"./controllers/aside-controller": 2,
			"./controllers/settings-controller": 3,
			"./initializers/analytics": 4,
			"./initializers/app": 5,
			"./providers/services/app-service": 6,
			"./routes": 7,
			"angular-mocks": 9,
			"core-templates": 8,
			"fcn-core-config": 11,
			"fcn-core-modals": 13,
			"fcn-core-services": 18,
			"fcn-core-storage": 36
		}
	],
	2: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n)
			{
				var r = $(".widgets-container");
				t.data = {
					isPinned: false,
					isVisible: false
				};
				t.isLogged = n.isAuthenticated;

				function i()
				{
					if(!t.data.isPinned)
					{
						e.$broadcast("ASIDE-RESIZED", true)
					}
				}

				function o()
				{
					if(!t.data.isPinned)
					{
						e.$broadcast("ASIDE-RESIZED", false)
					}
				}
				t.pin = function ()
				{
					t.data.isPinned = !t.data.isPinned;
					if(t.data.isPinned)
					{
						r.off("mouseenter", i);
						r.off("mouseleave", o);
						return
					}
					r.on("mouseenter", i);
					r.on("mouseleave", o)
				};
				t.$on("PIN-ASIDE", function ()
				{
					t.data.isPinned = true;
					e.$broadcast("ASIDE-RESIZED", true)
				});
				t.toggleWidgetVisisbility = function ()
				{
					t.data.isVisible = !t.data.isVisible;
					e.$broadcast("ASIDE-RESIZED", true)
				}
			}
			r.$inject = ["$rootScope", "$scope", "AuthFactory"];
			n.
			default = r
		},
		{}
	],
	3: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t)
			{
				function n()
				{
					e.entries.forEach(function (e)
					{
						e.items.forEach(function (e)
						{
							e.selected = false
						})
					})
				}
				e.templateUrl = "fcn-settings-default.html";
				e.entries = [];
				e.entries.push(
				{
					title: "General",
					items: [
					{
						title: "Language",
						url: ""
					},
					{
						title: "My Account",
						url: ""
					}]
				});
				e.selectEntryItem = function (t)
				{
					n();
					t.selected = true;
					e.templateUrl = t.url
				};
				e.save = function ()
				{
					e.$broadcast("SAVE-USER-PREFERENCES")
				};
				e.entries.push.apply(e.entries, t.settings);
				n()
			}
			r.$injector = ["$scope", "AppRegistryService"];
			n.
			default = r
		},
		{}
	],
	4: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n)
			{
				function r()
				{
					n.create(e.ANALYTICS.GA_APP_KEY);
					n.set("product", t.ANALYTICS.GA_PRODUCT_NAME);
					n.set("orientation", t.ANALYTICS.GA_ORIENTATION)
				}

				function i(e, t, n, r, i, o)
				{
					var s = 1;
					var a;
					var c;
					e.GoogleAnalyticsObject = i;
					e[i] = e[i] || function ()
					{
						(e[i].q = e[i].q || []).push(arguments)
					};
					e[i].l = s * new Date;
					a = t.createElement(n);
					c = t.getElementsByTagName(n)[0];
					a.async = 1;
					a.src = r;
					c.parentNode.insertBefore(a, c);
					a.addEventListener("load", function ()
					{
						o()
					}, false)
				}
				i(window, document, "script", "//www.google-analytics.com/analytics.js", "ga", r)
			}
			r.$inject = ["Environment", "Constants", "BF.Analytics"];
			n.
			default = r
		},
		{}
	],
	5: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n, r, i, o, s)
			{
				e.$state = n;
				e.$stateParams = r;
				e.$on("logout", function ()
				{
					i.redirectToLogin()
				});
				e.$on("LOGGED_OUT", function ()
				{
					i.redirectToLogin()
				});
				e.$on("$stateChangeStart", function (e, n)
				{
					if(!n || !n.data)
					{
						return
					}
					var r = n.data.analyticsConfig ||
					{};
					s.sendPageView(n.url, r);
					if(!n.data.requiresLogin)
					{
						return
					}
					if(i.isAuthenticated())
					{
						return
					}
					e.preventDefault();
					var o = "" + t.location.pathname + t.location.hash;
					i.redirectToLogin(o)
				})
			}
			r.$inject = ["$rootScope", "$window", "$state", "$stateParams", "AuthFactory", "Constants", "BF.Analytics"];
			n.
			default = r
		},
		{}
	],
	6: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t)
			{
				this.applications = e.reduce(function (e, n)
				{
					if(!t[n].hidden)
					{
						e.push(
						{
							name: t[n].fullname,
							acronym: t[n].tla,
							path: ["/", n, "#", t[n].bootstrap.root].join("")
						})
					}
					return e
				}, [])
			}
			r.$inject = ["fcn.apps", "fcn.registry"];
			n.
			default = r
		},
		{}
	],
	7: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = r;

			function r(e)
			{
				e.otherwise("/")
			}
			r.$inject = ["$urlRouterProvider"]
		},
		{}
	],
	8: [
		function (e, t, n)
		{
			"use strict";
			t.exports = angular.module("fcn.core.templates", []).run(["$templateCache",
				function (e)
				{
					e.put("fcn-aside.html", '\n<div id="widgets-container" ng-show="isLogged()" ng-controller="AsideController" ng-class="{\'widgets-container-visible\': data.isVisible, \'widgets-container-hidden\': !data.isVisible}" class="bf-fcn-core">\n  <div class="widgets-slider">\n    <div ng-click="toggleWidgetVisisbility()" class="icon-wrapper"><span ng-show="!data.isVisible" class="chevron-left-icon"></span></div>\n  </div>\n  <div class="widgets-wrapper">\n    <div ng-click="toggleWidgetVisisbility()" class="remove-wrapper"><span ng-show="data.isVisible" class="remove-icon"></span></div>\n    <fcn-notifications></fcn-notifications>\n  </div>\n</div>');
					e.put("fcn-settings-default.html", "\n<h1>Default</h1>");
					e.put("fcn-settings-modal.html", '\n<div ng-controller="SettingsController" class="settings-container">\n  <div class="modal-header">\n    <h4>Settings</h4>\n    <button type="button" data-dismiss="modal" class="btn settings-close">\n      <general-icon icon-name="close-white" icon-set="generic" hover="close-white-hover" transition="fade-in-out" embed-style="image" color="white" class="settings-close-icon"></general-icon>\n    </button>\n  </div>\n  <div class="modal-body">\n    <aside class="settings-sidebar">\n      <ul>\n        <li ng-repeat="entry in entries"><span ng-bind="entry.title" class="settings-sidebar-entry-title"></span>\n          <ul>\n            <li ng-repeat="item in entry.items" ng-click="selectEntryItem(item)" ng-class="{ selected: item.selected}" class="settings-sidebar-item">\n              <div class="settings-sidebar-item-selected"></div><span ng-bind="item.title" class="settings-sidebar-item-title"></span>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </aside>\n    <section class="settings-content">\n      <ng-include src="templateUrl"></ng-include>\n    </section>\n  </div>\n  <div class="modal-footer">\n    <button type="button" data-dismiss="modal" class="btn btn-default">Cancel</button>\n    <button type="button" ng-click="save()" data-dismiss="modal" class="btn btn-primary">Save changes</button>\n  </div>\n</div>');
					e.put("errors/401.html", '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Error 401</title>\n    <link href="/core/styles/errors.css" type="text/css" rel="stylesheet">\n  </head>\n  <body>\n    <div class="top-bar"></div>\n    <div class="bottom-bar"></div>\n    <div class="large-title">\n      <p class="large">Unauthorized</p>\n      <p>Your current permissions won\'t allow you in the requested address.</p>\n    </div>\n    <div class="large-40x">401</div>\n    <div class="warning">\n      <p>It appears that you do not have enough clearance to access the content you just attempted to reach.</p>\n      <p>You can try and reach your account administrator in order to grant you access to the requested content.</p>\n      <p>Feel free to click the guidance cube in the middle of this page to lead you back to safety.</p>\n    </div><a href="/">\n      <div class="container">\n        <figure class="cube">\n          <div class="front"></div>\n          <div class="left"></div>\n          <div class="right"></div>\n          <div class="top"></div>\n          <div class="bottom"></div>\n          <div class="back"></div>\n        </figure>\n      </div></a>\n    <script type="text/javascript" src="/core/scripts/error-page.js"></script>\n  </body>\n</html>');
					e.put("errors/403.html", '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Error 403</title>\n    <link href="/core/styles/errors.css" type="text/css" rel="stylesheet">\n  </head>\n  <body>\n    <div class="top-bar"></div>\n    <div class="bottom-bar"></div>\n    <div class="large-title">\n      <p class="large">Forbidden</p>\n      <p>Your current permissions won\'t allow you in the requested address.</p>\n    </div>\n    <div class="large-40x">401</div>\n    <div class="warning">\n      <p>It appears that you do not have enough clearance to access the content you just attempted to reach.</p>\n      <p>You can try and reach your account administrator in order to grant you access to the requested content.</p>\n      <p>Feel free to click the guidance cube in the middle of this page to lead you back to safety.</p>\n    </div><a href="/">\n      <div class="container">\n        <figure class="cube">\n          <div class="front"></div>\n          <div class="left"></div>\n          <div class="right"></div>\n          <div class="top"></div>\n          <div class="bottom"></div>\n          <div class="back"></div>\n        </figure>\n      </div></a>\n    <script type="text/javascript" src="/core/scripts/error-page.js"></script>\n  </body>\n</html>');
					e.put("errors/500.html", '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Error 500</title>\n    <link href="/core/styles/errors.css" type="text/css" rel="stylesheet">\n  </head>\n  <body>\n    <div class="top-bar"></div>\n    <div class="bottom-bar"></div>\n    <div class="large-title">\n      <p class="large">Internal Server Error</p>\n      <p>We\'re currently experiencing some problems.</p>\n    </div>\n    <div class="large-40x">401</div>\n    <div class="warning">\n      <p>It appears that the request you made originated a server-side error.</p>\n      <p>Please inquire your system administrator for more information.</p>\n      <p>Feel free to click the guidance cube in the middle of this page to try lead you back to safety.</p>\n    </div><a href="/">\n      <div class="container">\n        <figure class="cube">\n          <div class="front"></div>\n          <div class="left"></div>\n          <div class="right"></div>\n          <div class="top"></div>\n          <div class="bottom"></div>\n          <div class="back"></div>\n        </figure>\n      </div></a>\n    <script type="text/javascript" src="/core/scripts/error-page.js"></script>\n  </body>\n</html>');
					e.put("errors/503.html", '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Error 503</title>\n    <link href="/core/styles/errors.css" type="text/css" rel="stylesheet">\n  </head>\n  <body>\n    <div class="top-bar"></div>\n    <div class="bottom-bar"></div>\n    <div class="large-title">\n      <p class="large">Service Unavailable</p>\n      <p>We\'re currently experiencing some problems.</p>\n    </div>\n    <div class="large-40x">401</div>\n    <div class="warning">\n      <p>It appears that the request you made originated a server-side error.</p>\n      <p>The service is currently unavailable.</p>\n      <p>Please inquire your system administrator for more information.</p>\n      <p>Feel free to click the guidance cube in the middle of this page to try lead you back to safety.</p>\n    </div><a href="/">\n      <div class="container">\n        <figure class="cube">\n          <div class="front"></div>\n          <div class="left"></div>\n          <div class="right"></div>\n          <div class="top"></div>\n          <div class="bottom"></div>\n          <div class="back"></div>\n        </figure>\n      </div></a>\n    <script type="text/javascript" src="/core/scripts/error-page.js"></script>\n  </body>\n</html>');
					e.put("errors/error-mixin.html", "")
				}
			])
		},
		{}
	],
	9: [
		function (e, t, n)
		{
			(function (e, t)
			{
				"use strict";
				t.mock = {};
				t.mock.$BrowserProvider = function ()
				{
					this.$get = function ()
					{
						return new t.mock.$Browser
					}
				};
				t.mock.$Browser = function ()
				{
					var e = this;
					this.isMock = true;
					e.$$url = "http://server/";
					e.$$lastUrl = e.$$url;
					e.pollFns = [];
					e.$$completeOutstandingRequest = t.noop;
					e.$$incOutstandingRequestCount = t.noop;
					e.onUrlChange = function (t)
					{
						e.pollFns.push(function ()
						{
							if(e.$$lastUrl !== e.$$url || e.$$state !== e.$$lastState)
							{
								e.$$lastUrl = e.$$url;
								e.$$lastState = e.$$state;
								t(e.$$url, e.$$state)
							}
						});
						return t
					};
					e.$$applicationDestroyed = t.noop;
					e.$$checkUrlChange = t.noop;
					e.deferredFns = [];
					e.deferredNextId = 0;
					e.defer = function (t, n)
					{
						n = n || 0;
						e.deferredFns.push(
						{
							time: e.defer.now + n,
							fn: t,
							id: e.deferredNextId
						});
						e.deferredFns.sort(function (e, t)
						{
							return e.time - t.time
						});
						return e.deferredNextId++
					};
					e.defer.now = 0;
					e.defer.cancel = function (n)
					{
						var r;
						t.forEach(e.deferredFns, function (e, t)
						{
							if(e.id === n) r = t
						});
						if(t.isDefined(r))
						{
							e.deferredFns.splice(r, 1);
							return true
						}
						return false
					};
					e.defer.flush = function (n)
					{
						if(t.isDefined(n))
						{
							e.defer.now += n
						}
						else
						{
							if(e.deferredFns.length)
							{
								e.defer.now = e.deferredFns[e.deferredFns.length - 1].time
							}
							else
							{
								throw new Error("No deferred tasks to be flushed")
							}
						}
						while(e.deferredFns.length && e.deferredFns[0].time <= e.defer.now)
						{
							e.deferredFns.shift().fn()
						}
					};
					e.$$baseHref = "/";
					e.baseHref = function ()
					{
						return this.$$baseHref
					}
				};
				t.mock.$Browser.prototype = {
					poll: function f()
					{
						t.forEach(this.pollFns, function (e)
						{
							e()
						})
					},
					url: function (e, n, r)
					{
						if(t.isUndefined(r))
						{
							r = null
						}
						if(e)
						{
							this.$$url = e;
							this.$$state = t.copy(r);
							return this
						}
						return this.$$url
					},
					state: function ()
					{
						return this.$$state
					},
					notifyWhenNoOutstandingRequests: function (e)
					{
						e()
					}
				};
				t.mock.$ExceptionHandlerProvider = function ()
				{
					var e;
					this.mode = function (t)
					{
						switch(t)
						{
						case "log":
						case "rethrow":
							var n = [];
							e = function (e)
							{
								if(arguments.length == 1)
								{
									n.push(e)
								}
								else
								{
									n.push([].slice.call(arguments, 0))
								} if(t === "rethrow")
								{
									throw e
								}
							};
							e.errors = n;
							break;
						default:
							throw new Error("Unknown mode '" + t + "', only 'log'/'rethrow' modes are allowed!")
						}
					};
					this.$get = function ()
					{
						return e
					};
					this.mode("rethrow")
				};
				t.mock.$LogProvider = function ()
				{
					var e = true;

					function n(e, t, n)
					{
						return e.concat(Array.prototype.slice.call(t, n))
					}
					this.debugEnabled = function (n)
					{
						if(t.isDefined(n))
						{
							e = n;
							return this
						}
						else
						{
							return e
						}
					};
					this.$get = function ()
					{
						var r = {
							log: function ()
							{
								r.log.logs.push(n([], arguments, 0))
							},
							warn: function ()
							{
								r.warn.logs.push(n([], arguments, 0))
							},
							info: function ()
							{
								r.info.logs.push(n([], arguments, 0))
							},
							error: function ()
							{
								r.error.logs.push(n([], arguments, 0))
							},
							debug: function ()
							{
								if(e)
								{
									r.debug.logs.push(n([], arguments, 0))
								}
							}
						};
						r.reset = function ()
						{
							r.log.logs = [];
							r.info.logs = [];
							r.warn.logs = [];
							r.error.logs = [];
							r.debug.logs = []
						};
						r.assertEmpty = function ()
						{
							var e = [];
							t.forEach(["error", "warn", "info", "log", "debug"], function (n)
							{
								t.forEach(r[n].logs, function (r)
								{
									t.forEach(r, function (t)
									{
										e.push("MOCK $log (" + n + "): " + String(t) + "\n" + (t.stack || ""))
									})
								})
							});
							if(e.length)
							{
								e.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " + "an expected log message was not checked and removed:");
								e.push("");
								throw new Error(e.join("\n---------\n"))
							}
						};
						r.reset();
						return r
					}
				};
				t.mock.$IntervalProvider = function ()
				{
					this.$get = ["$browser", "$rootScope", "$q", "$$q",
						function (e, n, r, i)
						{
							var o = [],
								s = 0,
								a = 0;
							var c = function (c, u, l, f)
							{
								var d = arguments.length > 4,
									p = d ? Array.prototype.slice.call(arguments, 4) : [],
									h = 0,
									v = t.isDefined(f) && !f,
									g = (v ? i : r).defer(),
									m = g.promise;
								l = t.isDefined(l) ? l : 0;
								m.then(null, null, !d ? c : function ()
								{
									c.apply(null, p)
								});
								m.$$intervalId = s;

								function E()
								{
									g.notify(h++);
									if(l > 0 && h >= l)
									{
										var r;
										g.resolve(h);
										t.forEach(o, function (e, t)
										{
											if(e.id === m.$$intervalId) r = t
										});
										if(t.isDefined(r))
										{
											o.splice(r, 1)
										}
									}
									if(v)
									{
										e.defer.flush()
									}
									else
									{
										n.$apply()
									}
								}
								o.push(
								{
									nextTime: a + u,
									delay: u,
									fn: E,
									id: s,
									deferred: g
								});
								o.sort(function (e, t)
								{
									return e.nextTime - t.nextTime
								});
								s++;
								return m
							};
							c.cancel = function (e)
							{
								if(!e) return false;
								var n;
								t.forEach(o, function (t, r)
								{
									if(t.id === e.$$intervalId) n = r
								});
								if(t.isDefined(n))
								{
									o[n].deferred.reject("canceled");
									o.splice(n, 1);
									return true
								}
								return false
							};
							c.flush = function (e)
							{
								a += e;
								while(o.length && o[0].nextTime <= a)
								{
									var t = o[0];
									t.fn();
									t.nextTime += t.delay;
									o.sort(function (e, t)
									{
										return e.nextTime - t.nextTime
									})
								}
								return e
							};
							return c
						}
					]
				};
				var n = /^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

				function r(e)
				{
					var t;
					if(t = e.match(n))
					{
						var r = new Date(0),
							o = 0,
							s = 0;
						if(t[9])
						{
							o = i(t[9] + t[10]);
							s = i(t[9] + t[11])
						}
						r.setUTCFullYear(i(t[1]), i(t[2]) - 1, i(t[3]));
						r.setUTCHours(i(t[4] || 0) - o, i(t[5] || 0) - s, i(t[6] || 0), i(t[7] || 0));
						return r
					}
					return e
				}

				function i(e)
				{
					return parseInt(e, 10)
				}

				function o(e, t, n)
				{
					var r = "";
					if(e < 0)
					{
						r = "-";
						e = -e
					}
					e = "" + e;
					while(e.length < t) e = "0" + e;
					if(n)
					{
						e = e.substr(e.length - t)
					}
					return r + e
				}
				t.mock.TzDate = function (e, n)
				{
					var i = new Date(0);
					if(t.isString(n))
					{
						var s = n;
						i.origDate = r(n);
						n = i.origDate.getTime();
						if(isNaN(n))
						{
							throw {
								name: "Illegal Argument",
								message: "Arg '" + s + "' passed into TzDate constructor is not a valid date string"
							}
						}
					}
					else
					{
						i.origDate = new Date(n)
					}
					var a = new Date(n).getTimezoneOffset();
					i.offsetDiff = a * 60 * 1e3 - e * 1e3 * 60 * 60;
					i.date = new Date(n + i.offsetDiff);
					i.getTime = function ()
					{
						return i.date.getTime() - i.offsetDiff
					};
					i.toLocaleDateString = function ()
					{
						return i.date.toLocaleDateString()
					};
					i.getFullYear = function ()
					{
						return i.date.getFullYear()
					};
					i.getMonth = function ()
					{
						return i.date.getMonth()
					};
					i.getDate = function ()
					{
						return i.date.getDate()
					};
					i.getHours = function ()
					{
						return i.date.getHours()
					};
					i.getMinutes = function ()
					{
						return i.date.getMinutes()
					};
					i.getSeconds = function ()
					{
						return i.date.getSeconds()
					};
					i.getMilliseconds = function ()
					{
						return i.date.getMilliseconds()
					};
					i.getTimezoneOffset = function ()
					{
						return e * 60
					};
					i.getUTCFullYear = function ()
					{
						return i.origDate.getUTCFullYear()
					};
					i.getUTCMonth = function ()
					{
						return i.origDate.getUTCMonth()
					};
					i.getUTCDate = function ()
					{
						return i.origDate.getUTCDate()
					};
					i.getUTCHours = function ()
					{
						return i.origDate.getUTCHours()
					};
					i.getUTCMinutes = function ()
					{
						return i.origDate.getUTCMinutes()
					};
					i.getUTCSeconds = function ()
					{
						return i.origDate.getUTCSeconds()
					};
					i.getUTCMilliseconds = function ()
					{
						return i.origDate.getUTCMilliseconds()
					};
					i.getDay = function ()
					{
						return i.date.getDay()
					};
					if(i.toISOString)
					{
						i.toISOString = function ()
						{
							return o(i.origDate.getUTCFullYear(), 4) + "-" + o(i.origDate.getUTCMonth() + 1, 2) + "-" + o(i.origDate.getUTCDate(), 2) + "T" + o(i.origDate.getUTCHours(), 2) + ":" + o(i.origDate.getUTCMinutes(), 2) + ":" + o(i.origDate.getUTCSeconds(), 2) + "." + o(i.origDate.getUTCMilliseconds(), 3) + "Z"
						}
					}
					var c = ["getUTCDay", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toGMTString", "toJSON", "toLocaleFormat", "toLocaleString", "toLocaleTimeString", "toSource", "toString", "toTimeString", "toUTCString", "valueOf"];
					t.forEach(c, function (e)
					{
						i[e] = function ()
						{
							throw new Error("Method '" + e + "' is not implemented in the TzDate mock")
						}
					});
					return i
				};
				t.mock.TzDate.prototype = Date.prototype;
				t.mock.animate = t.module("ngAnimateMock", ["ng"]).config(["$provide",
					function (e)
					{
						e.factory("$$forceReflow", function ()
						{
							function e()
							{
								e.totalReflows++
							}
							e.totalReflows = 0;
							return e
						});
						e.factory("$$animateAsyncRun", function ()
						{
							var e = [];
							var t = function ()
							{
								return function (t)
								{
									e.push(t)
								}
							};
							t.flush = function ()
							{
								if(e.length === 0) return false;
								for(var t = 0; t < e.length; t++)
								{
									e[t]()
								}
								e = [];
								return true
							};
							return t
						});
						e.decorator("$$animateJs", ["$delegate",
							function (e)
							{
								var t = [];
								var n = function ()
								{
									var n = e.apply(e, arguments);
									if(n)
									{
										t.push(n)
									}
									return n
								};
								n.$closeAndFlush = function ()
								{
									t.forEach(function (e)
									{
										e.end()
									});
									t = []
								};
								return n
							}
						]);
						e.decorator("$animateCss", ["$delegate",
							function (e)
							{
								var t = [];
								var n = function (n, r)
								{
									var i = e(n, r);
									t.push(i);
									return i
								};
								n.$closeAndFlush = function ()
								{
									t.forEach(function (e)
									{
										e.end()
									});
									t = []
								};
								return n
							}
						]);
						e.decorator("$animate", ["$delegate", "$timeout", "$browser", "$$rAF", "$animateCss", "$$animateJs", "$$forceReflow", "$$animateAsyncRun", "$rootScope",
							function (e, n, r, i, o, s, a, c, u)
							{
								var l = {
									queue: [],
									cancel: e.cancel,
									on: e.on,
									off: e.off,
									pin: e.pin,
									get reflows()
									{
										return a.totalReflows
									},
									enabled: e.enabled,
									closeAndFlush: function ()
									{
										this.flush(true);
										o.$closeAndFlush();
										s.$closeAndFlush();
										this.flush()
									},
									flush: function (e)
									{
										u.$digest();
										var t, n = false;
										do {
											t = false;
											if(i.queue.length)
											{
												i.flush();
												t = n = true
											}
											if(c.flush())
											{
												t = n = true
											}
										} while (t);
										if(!n && !e)
										{
											throw new Error("No pending animations ready to be closed or flushed")
										}
										u.$digest()
									}
								};
								t.forEach(["animate", "enter", "leave", "move", "addClass", "removeClass", "setClass"], function (t)
								{
									l[t] = function ()
									{
										l.queue.push(
										{
											event: t,
											element: arguments[0],
											options: arguments[arguments.length - 1],
											args: arguments
										});
										return e[t].apply(e, arguments)
									}
								});
								return l
							}
						])
					}
				]);
				t.mock.dump = function (e)
				{
					return n(e);

					function n(e)
					{
						var i;
						if(t.isElement(e))
						{
							e = t.element(e);
							i = t.element("<div></div>");
							t.forEach(e, function (e)
							{
								i.append(t.element(e).clone())
							});
							i = i.html()
						}
						else if(t.isArray(e))
						{
							i = [];
							t.forEach(e, function (e)
							{
								i.push(n(e))
							});
							i = "[ " + i.join(", ") + " ]"
						}
						else if(t.isObject(e))
						{
							if(t.isFunction(e.$eval) && t.isFunction(e.$apply))
							{
								i = r(e)
							}
							else if(e instanceof Error)
							{
								i = e.stack || "" + e.name + ": " + e.message
							}
							else
							{
								i = t.toJson(e, true)
							}
						}
						else
						{
							i = String(e)
						}
						return i
					}

					function r(e, n)
					{
						n = n || "  ";
						var i = [n + "Scope(" + e.$id + "): {"];
						for(var o in e)
						{
							if(Object.prototype.hasOwnProperty.call(e, o) && !o.match(/^(\$|this)/))
							{
								i.push("  " + o + ": " + t.toJson(e[o]))
							}
						}
						var s = e.$$childHead;
						while(s)
						{
							i.push(r(s, n + "  "));
							s = s.$$nextSibling
						}
						i.push("}");
						return i.join("\n" + n)
					}
				};
				t.mock.$HttpBackendProvider = function ()
				{
					this.$get = ["$rootScope", "$timeout", s]
				};

				function s(e, n, r, i)
				{
					var o = [],
						s = [],
						c = [],
						l = t.bind(c, c.push),
						f = t.copy;

					function d(e, n, r, i)
					{
						if(t.isFunction(e)) return e;
						return function ()
						{
							return t.isNumber(e) ? [e, n, r, i] : [200, e, n, r]
						}
					}

					function p(e, a, d, p, h, v, g, m, E, y)
					{
						var b = new u,
							S = s[0],
							A = false;
						b.$$events = E;
						b.upload.$$events = y;

						function $(e)
						{
							return t.isString(e) || t.isFunction(e) || e instanceof RegExp ? e : t.toJson(e)
						}

						function _(t)
						{
							if(!i && v)
							{
								v.then ? v.then(o) : n(o, v)
							}
							return r;

							function r()
							{
								var n = t.response(e, a, d, h, t.params(a));
								b.$$respHeaders = n[2];
								p(f(n[0]), f(n[1]), b.getAllResponseHeaders(), f(n[3] || ""))
							}

							function o()
							{
								for(var e = 0, t = c.length; e < t; e++)
								{
									if(c[e] === r)
									{
										c.splice(e, 1);
										p(-1, undefined, "");
										break
									}
								}
							}
						}
						if(S && S.match(e, a))
						{
							if(!S.matchData(d))
							{
								throw new Error("Expected " + S + " with different data\n" + "EXPECTED: " + $(S.data) + "\nGOT:      " + d)
							}
							if(!S.matchHeaders(h))
							{
								throw new Error("Expected " + S + " with different headers\n" + "EXPECTED: " + $(S.headers) + "\nGOT:      " + $(h))
							}
							s.shift();
							if(S.response)
							{
								c.push(_(S));
								return
							}
							A = true
						}
						var T = -1,
							O;
						while(O = o[++T])
						{
							if(O.match(e, a, d, h ||
							{}))
							{
								if(O.response)
								{
									(i ? i.defer : l)(_(O))
								}
								else if(O.passThrough)
								{
									r(e, a, d, p, h, v, g, m, E, y)
								}
								else throw new Error("No response defined !");
								return
							}
						}
						throw A ? new Error("No response defined !") : new Error("Unexpected request: " + e + " " + a + "\n" + (S ? "Expected " + S : "No more request expected"))
					}
					p.when = function (e, t, n, r, s)
					{
						var c = new a(e, t, n, r, s),
							u = {
								respond: function (e, t, n, r)
								{
									c.passThrough = undefined;
									c.response = d(e, t, n, r);
									return u
								}
							};
						if(i)
						{
							u.passThrough = function ()
							{
								c.response = undefined;
								c.passThrough = true;
								return u
							}
						}
						o.push(c);
						return u
					};
					v("when");
					p.whenRoute = function (e, t)
					{
						var n = h(t);
						return p.when(e, n.regexp, undefined, undefined, n.keys)
					};

					function h(e)
					{
						var n = {
							regexp: e
						}, r = n.keys = [];
						if(!e || !t.isString(e)) return n;
						e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (e, t, n, i)
						{
							var o = i === "?" ? i : null;
							var s = i === "*" ? i : null;
							r.push(
							{
								name: n,
								optional: !! o
							});
							t = t || "";
							return "" + (o ? "" : t) + "(?:" + (o ? t : "") + (s && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
						}).replace(/([\/$\*])/g, "\\$1");
						n.regexp = new RegExp("^" + e, "i");
						return n
					}
					p.expect = function (e, t, n, r, i)
					{
						var o = new a(e, t, n, r, i),
							c = {
								respond: function (e, t, n, r)
								{
									o.response = d(e, t, n, r);
									return c
								}
							};
						s.push(o);
						return c
					};
					v("expect");
					p.expectRoute = function (e, t)
					{
						var n = h(t);
						return p.expect(e, n.regexp, undefined, undefined, n.keys)
					};
					p.flush = function (n, r)
					{
						if(r !== false) e.$digest();
						if(!c.length) throw new Error("No pending request to flush !");
						if(t.isDefined(n) && n !== null)
						{
							while(n--)
							{
								if(!c.length) throw new Error("No more pending request to flush !");
								c.shift()()
							}
						}
						else
						{
							while(c.length)
							{
								c.shift()()
							}
						}
						p.verifyNoOutstandingExpectation(r)
					};
					p.verifyNoOutstandingExpectation = function (t)
					{
						if(t !== false) e.$digest();
						if(s.length)
						{
							throw new Error("Unsatisfied requests: " + s.join(", "))
						}
					};
					p.verifyNoOutstandingRequest = function ()
					{
						if(c.length)
						{
							throw new Error("Unflushed requests: " + c.length)
						}
					};
					p.resetExpectations = function ()
					{
						s.length = 0;
						c.length = 0
					};
					return p;

					function v(e)
					{
						t.forEach(["GET", "DELETE", "JSONP", "HEAD"], function (t)
						{
							p[e + t] = function (n, r, i)
							{
								return p[e](t, n, undefined, r, i)
							}
						});
						t.forEach(["PUT", "POST", "PATCH"], function (t)
						{
							p[e + t] = function (n, r, i, o)
							{
								return p[e](t, n, r, i, o)
							}
						})
					}
				}

				function a(e, n, r, i, o)
				{
					function s(e)
					{
						var t = e.slice(e.indexOf("?") + 1).split("&");
						return t.sort()
					}

					function a(e)
					{
						return n.slice(0, n.indexOf("?")) == e.slice(0, e.indexOf("?")) && s(n).join() == s(e).join()
					}
					this.data = r;
					this.headers = i;
					this.match = function (n, r, i, o)
					{
						if(e != n) return false;
						if(!this.matchUrl(r)) return false;
						if(t.isDefined(i) && !this.matchData(i)) return false;
						if(t.isDefined(o) && !this.matchHeaders(o)) return false;
						return true
					};
					this.matchUrl = function (e)
					{
						if(!n) return true;
						if(t.isFunction(n.test)) return n.test(e);
						if(t.isFunction(n)) return n(e);
						return n == e || a(e)
					};
					this.matchHeaders = function (e)
					{
						if(t.isUndefined(i)) return true;
						if(t.isFunction(i)) return i(e);
						return t.equals(i, e)
					};
					this.matchData = function (e)
					{
						if(t.isUndefined(r)) return true;
						if(r && t.isFunction(r.test)) return r.test(e);
						if(r && t.isFunction(r)) return r(e);
						if(r && !t.isString(r))
						{
							return t.equals(t.fromJson(t.toJson(r)), t.fromJson(e))
						}
						return r == e
					};
					this.toString = function ()
					{
						return e + " " + n
					};
					this.params = function (e)
					{
						return t.extend(i(), r());

						function r()
						{
							var r = {};
							if(!n || !t.isFunction(n.test) || !o || o.length === 0) return r;
							var i = n.exec(e);
							if(!i) return r;
							for(var s = 1, a = i.length; s < a; ++s)
							{
								var c = o[s - 1];
								var u = i[s];
								if(c && u)
								{
									r[c.name || c] = u
								}
							}
							return r
						}

						function i()
						{
							var n = {}, r, i, o = e.indexOf("?") > -1 ? e.substring(e.indexOf("?") + 1) : "";
							t.forEach(o.split("&"), function (e)
							{
								if(e)
								{
									r = e.replace(/\+/g, "%20").split("=");
									i = s(r[0]);
									if(t.isDefined(i))
									{
										var o = t.isDefined(r[1]) ? s(r[1]) : true;
										if(!hasOwnProperty.call(n, i))
										{
											n[i] = o
										}
										else if(t.isArray(n[i]))
										{
											n[i].push(o)
										}
										else
										{
											n[i] = [n[i], o]
										}
									}
								}
							});
							return n
						}

						function s(e)
						{
							try
							{
								return decodeURIComponent(e)
							}
							catch(t)
							{}
						}
					}
				}

				function c()
				{
					return new u
				}

				function u()
				{
					u.$$lastInstance = this;
					this.open = function (e, t, n)
					{
						this.$$method = e;
						this.$$url = t;
						this.$$async = n;
						this.$$reqHeaders = {};
						this.$$respHeaders = {}
					};
					this.send = function (e)
					{
						this.$$data = e
					};
					this.setRequestHeader = function (e, t)
					{
						this.$$reqHeaders[e] = t
					};
					this.getResponseHeader = function (e)
					{
						var n = this.$$respHeaders[e];
						if(n) return n;
						e = t.lowercase(e);
						n = this.$$respHeaders[e];
						if(n) return n;
						n = undefined;
						t.forEach(this.$$respHeaders, function (r, i)
						{
							if(!n && t.lowercase(i) == e) n = r
						});
						return n
					};
					this.getAllResponseHeaders = function ()
					{
						var e = [];
						t.forEach(this.$$respHeaders, function (t, n)
						{
							e.push(n + ": " + t)
						});
						return e.join("\n")
					};
					this.abort = t.noop;
					this.$$events = {};
					this.addEventListener = function (e, n)
					{
						if(t.isUndefined(this.$$events[e])) this.$$events[e] = [];
						this.$$events[e].push(n)
					};
					this.upload = {
						$$events:
						{},
						addEventListener: this.addEventListener
					}
				}
				t.mock.$TimeoutDecorator = ["$delegate", "$browser",
					function (e, n)
					{
						e.flush = function (e)
						{
							n.defer.flush(e)
						};
						e.verifyNoPendingTasks = function ()
						{
							if(n.deferredFns.length)
							{
								throw new Error("Deferred tasks to flush (" + n.deferredFns.length + "): " + r(n.deferredFns))
							}
						};

						function r(e)
						{
							var n = [];
							t.forEach(e, function (e)
							{
								n.push("{id: " + e.id + ", " + "time: " + e.time + "}")
							});
							return n.join(", ")
						}
						return e
					}
				];
				t.mock.$RAFDecorator = ["$delegate",
					function (e)
					{
						var t = function (e)
						{
							var n = t.queue.length;
							t.queue.push(e);
							return function ()
							{
								t.queue.splice(n, 1)
							}
						};
						t.queue = [];
						t.supported = e.supported;
						t.flush = function ()
						{
							if(t.queue.length === 0)
							{
								throw new Error("No rAF callbacks present")
							}
							var e = t.queue.length;
							for(var n = 0; n < e; n++)
							{
								t.queue[n]()
							}
							t.queue = t.queue.slice(n)
						};
						return t
					}
				];
				var l;
				t.mock.$RootElementProvider = function ()
				{
					this.$get = ["$injector",
						function (e)
						{
							l = t.element("<div ng-app></div>").data("$injector", e);
							return l
						}
					]
				};
				t.mock.$ControllerDecorator = ["$delegate",
					function (e)
					{
						return function (n, r, i, o)
						{
							if(i && typeof i === "object")
							{
								var s = e(n, r, true, o);
								t.extend(s.instance, i);
								var a = s();
								if(a !== s.instance)
								{
									t.extend(a, i)
								}
								return a
							}
							return e(n, r, i, o)
						}
					}
				];
				t.mock.$ComponentControllerProvider = ["$compileProvider",
					function (e)
					{
						this.$get = ["$controller", "$injector", "$rootScope",
							function (e, t, n)
							{
								return function r(i, o, s, a)
								{
									var c = t.get(i + "Directive");
									var u = c.filter(function (e)
									{
										return e.controller && e.controllerAs && e.restrict === "E"
									});
									if(u.length === 0)
									{
										throw new Error("No component found")
									}
									if(u.length > 1)
									{
										throw new Error("Too many components found")
									}
									var l = u[0];
									o = o ||
									{};
									o.$scope = o.$scope || n.$new(true);
									return e(l.controller, o, s, a || l.controllerAs)
								}
							}
						]
					}
				];
				t.module("ngMock", ["ng"]).provider(
				{
					$browser: t.mock.$BrowserProvider,
					$exceptionHandler: t.mock.$ExceptionHandlerProvider,
					$log: t.mock.$LogProvider,
					$interval: t.mock.$IntervalProvider,
					$httpBackend: t.mock.$HttpBackendProvider,
					$rootElement: t.mock.$RootElementProvider,
					$componentController: t.mock.$ComponentControllerProvider
				}).config(["$provide",
					function (e)
					{
						e.decorator("$timeout", t.mock.$TimeoutDecorator);
						e.decorator("$$rAF", t.mock.$RAFDecorator);
						e.decorator("$rootScope", t.mock.$RootScopeDecorator);
						e.decorator("$controller", t.mock.$ControllerDecorator)
					}
				]);
				t.module("ngMockE2E", ["ng"]).config(["$provide",
					function (e)
					{
						e.value("$httpBackend", t.injector(["ng"]).get("$httpBackend"));
						e.decorator("$httpBackend", t.mock.e2e.$httpBackendDecorator)
					}
				]);
				t.mock.e2e = {};
				t.mock.e2e.$httpBackendDecorator = ["$rootScope", "$timeout", "$delegate", "$browser", s];
				t.mock.$RootScopeDecorator = ["$delegate",
					function (e)
					{
						var t = Object.getPrototypeOf(e);
						t.$countChildScopes = n;
						t.$countWatchers = r;
						return e;

						function n()
						{
							var e = 0;
							var t = [this.$$childHead];
							var n;
							while(t.length)
							{
								n = t.shift();
								while(n)
								{
									e += 1;
									t.push(n.$$childHead);
									n = n.$$nextSibling
								}
							}
							return e
						}

						function r()
						{
							var e = this.$$watchers ? this.$$watchers.length : 0;
							var t = [this.$$childHead];
							var n;
							while(t.length)
							{
								n = t.shift();
								while(n)
								{
									e += n.$$watchers ? n.$$watchers.length : 0;
									t.push(n.$$childHead);
									n = n.$$nextSibling
								}
							}
							return e
						}
					}
				];
				! function (n)
				{
					if(!n)
					{
						return
					}
					var r = null,
						i = new f,
						o = [],
						s = function ()
						{
							return !!r
						};
					t.mock.$$annotate = t.injector.$$annotate;
					t.injector.$$annotate = function (e)
					{
						if(typeof e === "function" && !e.$inject)
						{
							o.push(e)
						}
						return t.mock.$$annotate.apply(this, arguments)
					};
					var a = e.module = t.mock.module = function ()
					{
						var e = Array.prototype.slice.call(arguments, 0);
						return s() ? n() : n;

						function n()
						{
							if(r.$injector)
							{
								throw new Error("Injector already created, can not register a module!")
							}
							else
							{
								var n, i = r.$modules || (r.$modules = []);
								t.forEach(e, function (e)
								{
									if(t.isObject(e) && !t.isArray(e))
									{
										n = ["$provide",
											function (n)
											{
												t.forEach(e, function (e, t)
												{
													n.value(t, e)
												})
											}
										]
									}
									else
									{
										n = e
									} if(r.$providerInjector)
									{
										r.$providerInjector.invoke(n)
									}
									else
									{
										i.push(n)
									}
								})
							}
						}
					};
					a.$$beforeAllHook = e.before || e.beforeAll;
					a.$$afterAllHook = e.after || e.afterAll;
					a.$$currentSpec = function (e)
					{
						if(arguments.length === 0) return e;
						r = e
					};
					a.sharedInjector = function ()
					{
						if(!(a.$$beforeAllHook && a.$$afterAllHook))
						{
							throw Error("sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll")
						}
						var e = false;
						a.$$beforeAllHook(function ()
						{
							if(i.shared)
							{
								i.sharedError = Error("sharedInjector() cannot be called inside a context that has already called sharedInjector()");
								throw i.sharedError
							}
							e = true;
							r = this;
							i.shared = true
						});
						a.$$afterAllHook(function ()
						{
							if(e)
							{
								i = new f;
								a.$$cleanup()
							}
							else
							{
								i.sharedError = null
							}
						})
					};
					a.$$beforeEach = function ()
					{
						if(i.shared && r && r != this)
						{
							var e = r;
							r = this;
							t.forEach(["$injector", "$modules", "$providerInjector", "$injectorStrict"], function (t)
							{
								r[t] = e[t];
								e[t] = null
							})
						}
						else
						{
							r = this;
							l = null;
							o = []
						}
					};
					a.$$afterEach = function ()
					{
						if(i.cleanupAfterEach())
						{
							a.$$cleanup()
						}
					};
					a.$$cleanup = function ()
					{
						var e = r.$injector;
						o.forEach(function (e)
						{
							delete e.$inject
						});
						t.forEach(r.$modules, function (e)
						{
							if(e && e.$$hashKey)
							{
								e.$$hashKey = undefined
							}
						});
						r.$injector = null;
						r.$modules = null;
						r.$providerInjector = null;
						r = null;
						if(e)
						{
							var n = e.get("$rootElement");
							var i = n && n[0];
							var s = !l ? [] : [l[0]];
							if(i && (!l || i !== l[0]))
							{
								s.push(i)
							}
							t.element.cleanData(s);
							var a = e.get("$rootScope");
							if(a && a.$destroy) a.$destroy()
						}
						t.forEach(t.element.fragments, function (e, n)
						{
							delete t.element.fragments[n]
						});
						u.$$lastInstance = null;
						t.forEach(t.callbacks, function (e, n)
						{
							delete t.callbacks[n]
						});
						t.callbacks.counter = 0
					};
					(e.beforeEach || e.setup)(a.$$beforeEach);
					(e.afterEach || e.teardown)(a.$$afterEach);
					var c = function (e, t)
					{
						this.message = e.message;
						this.name = e.name;
						if(e.line) this.line = e.line;
						if(e.sourceId) this.sourceId = e.sourceId;
						if(e.stack && t) this.stack = e.stack + "\n" + t.stack;
						if(e.stackArray) this.stackArray = e.stackArray
					};
					c.prototype.toString = Error.prototype.toString;
					e.inject = t.mock.inject = function ()
					{
						var e = Array.prototype.slice.call(arguments, 0);
						var n = new Error("Declaration Location");
						if(!n.stack)
						{
							try
							{
								throw n
							}
							catch(i)
							{}
						}
						return s() ? o.call(r) : o;

						function o()
						{
							var i = r.$modules || [];
							var o = !! r.$injectorStrict;
							i.unshift(["$injector",
								function (e)
								{
									r.$providerInjector = e
								}
							]);
							i.unshift("ngMock");
							i.unshift("ng");
							var s = r.$injector;
							if(!s)
							{
								if(o)
								{
									t.forEach(i, function (e)
									{
										if(typeof e === "function")
										{
											t.injector.$$annotate(e)
										}
									})
								}
								s = r.$injector = t.injector(i, o);
								r.$injectorStrict = o
							}
							for(var a = 0, u = e.length; a < u; a++)
							{
								if(r.$injectorStrict)
								{
									s.annotate(e[a])
								}
								try
								{
									s.invoke(e[a] || t.noop, this)
								}
								catch(l)
								{
									if(l.stack && n)
									{
										throw new c(l, n)
									}
									throw l
								}
								finally
								{
									n = null
								}
							}
						}
					};
					t.mock.inject.strictDi = function (e)
					{
						e = arguments.length ? !! e : true;
						return s() ? t() : t;

						function t()
						{
							if(e !== r.$injectorStrict)
							{
								if(r.$injector)
								{
									throw new Error("Injector already created, can not modify strict annotations")
								}
								else
								{
									r.$injectorStrict = e
								}
							}
						}
					};

					function f()
					{
						this.shared = false;
						this.sharedError = null;
						this.cleanupAfterEach = function ()
						{
							return !this.shared || this.sharedError
						}
					}
				}(e.jasmine || e.mocha)
			})(window, window.angular)
		},
		{}
	],
	10: [
		function (e, t, n)
		{
			function r()
			{
				this._events = this._events ||
				{};
				this._maxListeners = this._maxListeners || undefined
			}
			t.exports = r;
			r.EventEmitter = r;
			r.prototype._events = undefined;
			r.prototype._maxListeners = undefined;
			r.defaultMaxListeners = 10;
			r.prototype.setMaxListeners = function (e)
			{
				if(!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
				this._maxListeners = e;
				return this
			};
			r.prototype.emit = function (e)
			{
				var t, n, r, o, c, u;
				if(!this._events) this._events = {};
				if(e === "error")
				{
					if(!this._events.error || s(this._events.error) && !this._events.error.length)
					{
						t = arguments[1];
						if(t instanceof Error)
						{
							throw t
						}
						throw TypeError('Uncaught, unspecified "error" event.')
					}
				}
				n = this._events[e];
				if(a(n)) return false;
				if(i(n))
				{
					switch(arguments.length)
					{
					case 1:
						n.call(this);
						break;
					case 2:
						n.call(this, arguments[1]);
						break;
					case 3:
						n.call(this, arguments[1], arguments[2]);
						break;
					default:
						o = Array.prototype.slice.call(arguments, 1);
						n.apply(this, o)
					}
				}
				else if(s(n))
				{
					o = Array.prototype.slice.call(arguments, 1);
					u = n.slice();
					r = u.length;
					for(c = 0; c < r; c++) u[c].apply(this, o)
				}
				return true
			};
			r.prototype.addListener = function (e, t)
			{
				var n;
				if(!i(t)) throw TypeError("listener must be a function");
				if(!this._events) this._events = {};
				if(this._events.newListener) this.emit("newListener", e, i(t.listener) ? t.listener : t);
				if(!this._events[e]) this._events[e] = t;
				else if(s(this._events[e])) this._events[e].push(t);
				else this._events[e] = [this._events[e], t]; if(s(this._events[e]) && !this._events[e].warned)
				{
					if(!a(this._maxListeners))
					{
						n = this._maxListeners
					}
					else
					{
						n = r.defaultMaxListeners
					} if(n && n > 0 && this._events[e].length > n)
					{
						this._events[e].warned = true;
						console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this._events[e].length);
						if(typeof console.trace === "function")
						{
							console.trace()
						}
					}
				}
				return this
			};
			r.prototype.on = r.prototype.addListener;
			r.prototype.once = function (e, t)
			{
				if(!i(t)) throw TypeError("listener must be a function");
				var n = false;

				function r()
				{
					this.removeListener(e, r);
					if(!n)
					{
						n = true;
						t.apply(this, arguments)
					}
				}
				r.listener = t;
				this.on(e, r);
				return this
			};
			r.prototype.removeListener = function (e, t)
			{
				var n, r, o, a;
				if(!i(t)) throw TypeError("listener must be a function");
				if(!this._events || !this._events[e]) return this;
				n = this._events[e];
				o = n.length;
				r = -1;
				if(n === t || i(n.listener) && n.listener === t)
				{
					delete this._events[e];
					if(this._events.removeListener) this.emit("removeListener", e, t)
				}
				else if(s(n))
				{
					for(a = o; a-- > 0;)
					{
						if(n[a] === t || n[a].listener && n[a].listener === t)
						{
							r = a;
							break
						}
					}
					if(r < 0) return this;
					if(n.length === 1)
					{
						n.length = 0;
						delete this._events[e]
					}
					else
					{
						n.splice(r, 1)
					} if(this._events.removeListener) this.emit("removeListener", e, t)
				}
				return this
			};
			r.prototype.removeAllListeners = function (e)
			{
				var t, n;
				if(!this._events) return this;
				if(!this._events.removeListener)
				{
					if(arguments.length === 0) this._events = {};
					else if(this._events[e]) delete this._events[e];
					return this
				}
				if(arguments.length === 0)
				{
					for(t in this._events)
					{
						if(t === "removeListener") continue;
						this.removeAllListeners(t)
					}
					this.removeAllListeners("removeListener");
					this._events = {};
					return this
				}
				n = this._events[e];
				if(i(n))
				{
					this.removeListener(e, n)
				}
				else if(n)
				{
					while(n.length) this.removeListener(e, n[n.length - 1])
				}
				delete this._events[e];
				return this
			};
			r.prototype.listeners = function (e)
			{
				var t;
				if(!this._events || !this._events[e]) t = [];
				else if(i(this._events[e])) t = [this._events[e]];
				else t = this._events[e].slice();
				return t
			};
			r.prototype.listenerCount = function (e)
			{
				if(this._events)
				{
					var t = this._events[e];
					if(i(t)) return 1;
					else if(t) return t.length
				}
				return 0
			};
			r.listenerCount = function (e, t)
			{
				return e.listenerCount(t)
			};

			function i(e)
			{
				return typeof e === "function"
			}

			function o(e)
			{
				return typeof e === "number"
			}

			function s(e)
			{
				return typeof e === "object" && e !== null
			}

			function a(e)
			{
				return e === void 0
			}
		},
		{}
	],
	11: [
		function (e, t, n)
		{
			t.exports = angular.module("fcn.core.config").constant("Constants", e("./dist/constants"))
		},
		{
			"./dist/constants": 12
		}
	],
	12: [
		function (e, t, n)
		{
			t.exports = {
				ALERTS:
				{
					NEW_ALERT: "NEW_ALERT",
					SUCCESS: "success",
					INFO: "info",
					WARNING: "warning",
					DANGER: "danger"
				},
				ANALYTICS:
				{
					GA_PRODUCT_NAME: "FCN",
					GA_ORIENTATION: "Web",
					PAGES:
					{
						DASHBOARD:
						{
							module: "Main Nav",
							pageArea: "Header",
							tab: "Dashboard"
						},
						MARKETMANAGEMENT:
						{
							module: "Main Nav",
							pageArea: "Header",
							tab: "Market Management"
						},
						TOOLS:
						{
							module: "Main Nav",
							pageArea: "Header",
							tab: "Tools"
						},
						ACTIONS:
						{
							module: "Main Nav",
							pageArea: "Header",
							tab: "Actions"
						},
						LIVE_MANAGER:
						{
							module: "Main Nav",
							pageArea: "Header",
							tab: "Live Manager"
						}
					}
				},
				COUGAR:
				{
					"DSC-0008": "Error parsing response data.",
					"DSC-0015": "Security error.",
					"DSC-0018": "Mandatory field not provided."
				},
				ERROR:
				{
					MARKETS:
					{
						JSONRPC:
						{
							BAD_ANSWER: "Error: not a valid response."
						}
					},
					TRANSPORT:
					{
						MESSAGE: "Transport not supported."
					}
				},
				EVENT_MANAGER:
				{
					WIDGETS:
					{
						GENERALSPORTS:
						{
							DEFAULT: ["A", "B"],
							FOCUSED: ["A", "B", "C"]
						},
						7522:
						{
							DEFAULT: ["A", "B"],
							FOCUSED: ["A", "B", "C", "D"]
						}
					},
					ACTIONS:
					{
						ACTIVATE_MARKETS:
						{
							CODE: "ACTIVATE_MARKET",
							DESCRIPTION: "Activate Market"
						},
						SUSPEND_MARKETS:
						{
							CODE: "SUSPEND_MARKET",
							DESCRIPTION: "Suspend Market"
						},
						REMOVE_AUTO_SUSPEND:
						{
							CODE: "AUTO_SUSPEND",
							DESCRIPTION: "Removing Auto Suspend"
						},
						SET_PRESET_BET_DELAY:
						{
							CODE: "SET_PRESET_BET_DELAY",
							DESCRIPTION: "Preset bet delay set to {{betDelay}} seconds"
						},
						APPLY_PRESET_BET_DELAY:
						{
							CODE: "APPLY_PRESET_BET_DELAY",
							DESCRIPTION: "Preset bet delay applied to markets"
						},
						REMOVE_BET_DELAY:
						{
							CODE: "REMOVE_BET_DELAY",
							DESCRIPTION: "Remove Bet Delay confirmed"
						},
						START_RACE:
						{
							CODE: "START_RACE",
							DESCRIPTION: "Start Race confirmed"
						},
						END_RACE:
						{
							CODE: "END_RACE",
							DESCRIPTION: "Start Race confirmed"
						},
						FALSE_START:
						{
							CODE: "FALSE_START",
							DESCRIPTION: "False start declared - BSP markets {{unReconciled}}"
						},
						BULK:
						{
							TURN_IN_PLAY:
							{
								CODE: "TURN_IN_PLAY",
								SUCCESS: "Events were started successfully.",
								ERROR: "Unable to start selected events."
							},
							SUSPEND:
							{
								CODE: "SUSPEND",
								SUCCESS: "Events were successfully suspended.",
								ERROR: "Unable to suspend selected events."
							},
							ACTIVATE:
							{
								CODE: "ACTIVATE",
								SUCCESS: "Events were successfully activated.",
								ERROR: "Unable to activate selected events."
							}
						}
					},
					INCIDENTS:
					{
						TURN_IN_PLAY:
						{
							CODE: "TURN_IN_PLAY",
							DESCRIPTION: "Start event confirmed"
						},
						SUSPEND_CANC:
						{
							CODE: "SUSPEND_CANC",
							DESCRIPTION: "Cancel Unmatched Bets confirmed",
							CONTENTS:
							{
								CANCEL_PERSISTED_KEEP_BETS:
								{
									yesNoValue: false
								}
							}
						}
					},
					BULK_SELECTED_DEFAULT: true,
					EVENTS:
					{
						LOCK:
						{
							ON: "LM:EVENT_CARD:LOCK:ON",
							OFF: "LM:EVENT_CARD:LOCK:OFF"
						}
					},
					ERRORS:
					{}
				},
				EVENTS:
				{
					CANNOT_BE_TURN_IN_PLAY: [4339]
				},
				HTTP:
				{
					MAX_UNIT: 17,
					CAP_LIMIT: 3512
				},
				INDEXED_DB:
				{
					VERSION: 1,
					NAME: "FCN-CORE-DB"
				},
				JSONRPC:
				{
					HEADER:
					{
						jsonrpc: "2.0"
					},
					POOL:
					{
						maxSize: 20,
						maxPools: 200
					},
					ERROR:
					{
						POOL:
						{
							MAX_SIZE: "Data length out of bounds. Reason: pool limit is `{{ maxSize }}`"
						},
						MMX:
						{
							NO_MARKETS: "No markets selected.",
							EMPTY_RESPONSE: "Response is empty."
						}
					}
				},
				LOADING:
				{
					BROADCASTS:
					{
						START: "START_LOAD_STATE",
						STOP: "STOP_LOAD_STATE"
					},
					TYPES:
					{
						DEFAULT: "spinner-default",
						SPIN: "spinner-spin"
					},
					THEMES:
					{
						DARK: "dark",
						LIGHT: "light"
					},
					SIZES:
					{
						S: "s",
						M: "m",
						L: "l"
					},
					CLASS_PREFIX: "bf-loading-",
					DIRECTIVE_CLASS: "bf-loading"
				},
				MARKETS:
				{
					DB:
					{
						USAGE: "local",
						NAME: "_ems_"
					},
					SETTINGS:
					{
						sortMarketsBy:
						{
							enabled: true,
							active: true,
							type: "sort",
							action: "sortMarketsBy",
							description: "Sort Markets",
							order: 0,
							options:
							{
								status:
								{
									action: "status",
									active: true,
									enabled: false,
									visible: true,
									description: "Status",
									type: "property",
									property: "status",
									ordertype: "property",
									value: ["ACTIVE_MARKET", "INACTIVE_MARKET", "SUSPENDED_MARKET", "SETTLED_MARKET"],
									hasSymbol: false
								},
								priority:
								{
									action: "priority",
									active: true,
									enabled: true,
									visible: true,
									description: "Priority",
									type: "property",
									property: "orderId",
									orderType: "number",
									value: [],
									hasSymbol: false
								}
							}
						},
						displayStatus:
						{
							enabled: true,
							active: true,
							type: "filter",
							action: "displayStatus",
							description: "Display Status",
							order: 1,
							options:
							{
								active:
								{
									action: "active",
									active: true,
									enabled: true,
									visible: true,
									description: "Active",
									order: 0,
									type: "property",
									property: "status",
									value: "ACTIVE_MARKET",
									hasSymbol: true
								},
								inactive:
								{
									action: "inactive",
									active: true,
									enabled: true,
									visible: true,
									description: "Inactive",
									order: 1,
									type: "property",
									property: "status",
									value: "INACTIVE_MARKET",
									hasSymbol: true
								},
								suspended:
								{
									action: "suspended",
									active: true,
									enabled: true,
									visible: true,
									description: "Suspended",
									order: 2,
									type: "property",
									property: "status",
									value: "SUSPENDED_MARKET",
									hasSymbol: true
								},
								settled:
								{
									action: "settled",
									active: true,
									enabled: false,
									visible: true,
									description: "Closed",
									order: 3,
									type: "property",
									property: "status",
									value: "SETTLED_MARKET",
									hasSymbol: true
								}
							}
						},
						displayJurisdiction:
						{
							enabled: true,
							active: true,
							type: "filter",
							action: "displayJurisdiction",
							description: "Display Jurisdiction",
							order: 2,
							options:
							{
								uk:
								{
									action: "uk",
									active: true,
									enabled: true,
									visible: true,
									description: "UK",
									order: 0,
									type: "property",
									property: "jurisdiction",
									value: "UK",
									hasSymbol: false
								},
								italy:
								{
									action: "italy",
									active: true,
									enabled: true,
									visible: true,
									description: "Italy",
									order: 1,
									type: "property",
									property: "jurisdiction",
									value: "ITA",
									hasSymbol: false
								},
								spain:
								{
									action: "spain",
									active: true,
									enabled: true,
									visible: true,
									description: "Spain",
									order: 2,
									type: "property",
									property: "jurisdiction",
									value: "ES",
									hasSymbol: false
								}
							}
						}
					},
					REGULATORS:
					{
						MR_INT: ["UK", "TGC", "ES"],
						MR_ITA: ["ITA"],
						MR_IND: ["IND"],
						MR_USA: ["USA"],
						MR_ESP: ["ES"]
					},
					NO_REGULATOR: "",
					WORKFLOW_STATUS_INTERVAL: 1e3,
					DEFAULT_BET_DELAY: 5,
					UNCHECKED_MARKETS_SPORT_ID: [7, 4339]
				},
				NOTIFICATIONS:
				{
					ADDED: "NOTIFICATION_ADDED_",
					CLOSED: "NOTIFICATION_CLOSED_",
					CHECKED: "NOTIFICATION_CHECKED_",
					ANY_CHANGE: "NOTIFICATIONS_CHANGED"
				},
				PLATFORM:
				{
					SPORTS:
					{
						name:
						{
							1: "FOOTBALL",
							2: "TENNIS",
							3: "GOLF",
							4: "CRICKET",
							5: "RUGBY_UNION",
							6: "BOXING",
							7: "HORSE_RACING",
							8: "MOTOR_SPORT",
							10: "SPECIAL_BETS",
							11: "CYCLING",
							12: "ROWING",
							1477: "RUGBY_LEAGUE",
							3503: "DARTS",
							3988: "ATHLETICS",
							4339: "GREYHOUND_RACING",
							6231: "FINANCIAL_BETS",
							6422: "SNOOKER",
							6423: "AMERICAN_FOOTBALL",
							7511: "BASEBALL",
							7522: "BASKETBALL",
							7523: "HOCKEY",
							7524: "ICE_HOCKEY",
							7525: "SUMO_WRESTLING",
							61420: "AUSTRALIAN_RULES",
							66599: "GAELIC_FOOTBALL",
							72382: "POOL",
							136332: "CHESS",
							189929: "POKER_ROOM",
							256284: "TROTTING",
							3e5: "COMMONWEALTH_GAMES",
							315220: "POKER",
							451485: "WINTER_SPORTS",
							468328: "HANDBALL",
							606611: "NETBALL",
							620576: "SWIMMING",
							627555: "BADMINTON",
							678378: "INTERNATIONAL_RULES",
							982477: "BRIDGE",
							998916: "YACHTING",
							998917: "VOLLEYBALL",
							998918: "BOWLS",
							998919: "BANDY",
							998920: "FLOORBALL",
							1444073: "EXCHANGE_POKER",
							1444076: "EXCHANGE_BLACKJACK",
							1444085: "EXCHANGE_BACCARAT",
							1444092: "EXCHANGE_HI_LO",
							1444099: "EXCHANGE_OMAHA_HI",
							1444120: "CASINO",
							1444130: "EXCHANGE_ROULETTE",
							1938544: "BACKGAMMON",
							2030972: "GAA_SPORTS",
							2152880: "GAELIC_GAMES",
							2264869: "INTERNAL_MARKETS",
							2378961: "POLITICS",
							2593174: "TABLE_TENNIS",
							2791893: "YAHOO_RACING",
							2872194: "BEACH_VOLLEYBALL",
							2872196: "CANOEING",
							2901849: "WATER_POLO",
							2977e3: "POLO",
							3088925: "FISHING",
							3130721: "ROLLER_HOCKEY",
							3145419: "CROSS_SPORT_ACCUMULATORS",
							4609466: "SQUASH",
							4726642: "SURFING",
							4968929: "COMBAT_SPORTS",
							5402258: "EXCHANGE_GAMES",
							5412697: "PELOTA",
							5545197: "FEATURED_MARKETS",
							10196203: "EXCHANGE_CASINO",
							26420387: "MIXED_MARTIAL_ARTS",
							26686903: "OLYMPICS_2012",
							26397698: "HORSE_RACING_VIRTUAL",
							15826206: "FUTSAL",
							18643353: "EQUESTRIAN",
							15826207: "FUSSBALL",
							16872235: "HARNESS_RACING",
							10390264: "TENPIN_BOWLING",
							27105927: "WINTER_OLYMPICS"
						},
						nameById:
						{
							1: "football",
							2: "tennis",
							3: "golf",
							4: "cricket",
							5: "rugby-union",
							6: "boxing",
							7: "horse-racing",
							8: "motor-sport",
							10: "special-bets",
							11: "cycling",
							12: "rowing",
							1477: "rugby-league",
							3503: "darts",
							3988: "athletics",
							4339: "greyhound-racing",
							6231: "financial-bets",
							6422: "snooker",
							6423: "american-football",
							7511: "baseball",
							7522: "basketball",
							7523: "hockey",
							7524: "ice-hockey",
							7525: "sumo-wrestling",
							61420: "australian-rules",
							66599: "gaelic-football",
							72382: "pool",
							136332: "chess",
							189929: "poker-room",
							256284: "trotting",
							3e5: "commonwealth-games",
							315220: "poker",
							451485: "winter-sports",
							468328: "handball",
							606611: "netball",
							620576: "swimming",
							627555: "badminton",
							678378: "international-rules",
							982477: "bridge",
							998916: "yachting",
							998917: "volleyball",
							998918: "bowls",
							998919: "bandy",
							998920: "floorball",
							1444073: "exchange-poker",
							1444076: "exchange-blackjack",
							1444085: "exchange-baccarat",
							1444092: "exchange-hi-lo",
							1444099: "exchange-omaha-hi",
							1444120: "casino",
							1444130: "exchange-roulette",
							1938544: "backgammon",
							2030972: "gaa-sports",
							2152880: "gaelic-games",
							2264869: "internal-markets",
							2378961: "politics",
							2593174: "table-tennis",
							2791893: "yahoo-racing",
							2872194: "beach-volleyball",
							2872196: "canoeing",
							2901849: "water-polo",
							2977e3: "polo",
							3088925: "fishing",
							3130721: "roller-hockey",
							3145419: "cross-sport-accumulators",
							4609466: "squash",
							4726642: "surfing",
							4968929: "combat-sports",
							5402258: "exchange-games",
							5412697: "pelota",
							5545197: "featured-markets",
							10196203: "exchange-casino",
							26420387: "mixed-martial-arts",
							26686903: "olympics-2012",
							26397698: "horse-racing-virtual",
							15826206: "futsal",
							18643353: "equestrian",
							15826207: "fussball",
							16872235: "harness-racing",
							10390264: "tenpin-bowling",
							27105927: "winter-olympics"
						},
						idByName:
						{
							football: 1,
							tennis: 2,
							golf: 3,
							cricket: 4,
							"rugby-union": 5,
							boxing: 6,
							"horse-racing": 7,
							"motor-sport": 8,
							"special-bets": 10,
							cycling: 11,
							rowing: 12,
							"rugby-league": 1477,
							darts: 3503,
							athletics: 3988,
							"greyhound-racing": 4339,
							"financial-bets": 6231,
							snooker: 6422,
							"american-football": 6423,
							baseball: 7511,
							basketball: 7522,
							hockey: 7523,
							"ice-hockey": 7524,
							"sumo-wrestling": 7525,
							"australian-rules": 61420,
							"gaelic-football": 66599,
							pool: 72382,
							chess: 136332,
							"poker-room": 189929,
							trotting: 256284,
							"commonwealth-games": 3e5,
							poker: 315220,
							"winter-sports": 451485,
							handball: 468328,
							netball: 606611,
							swimming: 620576,
							badminton: 627555,
							"international-rules": 678378,
							bridge: 982477,
							yachting: 998916,
							volleyball: 998917,
							bowls: 998918,
							bandy: 998919,
							floorball: 998920,
							"exchange-poker": 1444073,
							"exchange-blackjack": 1444076,
							"exchange-baccarat": 1444085,
							"exchange-hi-lo": 1444092,
							"exchange-omaha-hi": 1444099,
							casino: 1444120,
							"exchange-roulette": 1444130,
							backgammon: 1938544,
							"gaa-sports": 2030972,
							"gaelic-games": 2152880,
							"internal-markets": 2264869,
							politics: 2378961,
							"table-tennis": 2593174,
							"yahoo-racing": 2791893,
							"beach-volleyball": 2872194,
							canoeing: 2872196,
							"water-polo": 2901849,
							polo: 2977e3,
							fishing: 3088925,
							"roller-hockey": 3130721,
							"cross-sport-accumulators": 3145419,
							squash: 4609466,
							surfing: 4726642,
							"combat-sports": 4968929,
							"exchange-games": 5402258,
							pelota: 5412697,
							"featured-markets": 5545197,
							"exchange-casino": 10196203,
							"mixed-martial-arts": 26420387,
							"olympics-2012": 26686903,
							"horse-racing-virtual": 26397698,
							futsal: 15826206,
							equestrian: 18643353,
							fussball: 15826207,
							"harness-racing": 16872235,
							"tenpin-bowling": 10390264,
							"winter-olympics": 27105927
						}
					},
					LOCALIZATION:
					{
						codes:
						{
							bg: "bg",
							da: "da",
							de: "de",
							el: "el",
							en: "en",
							es: "es",
							it: "it",
							pt: "pt",
							ru: "ru",
							sv: "sv"
						}
					},
					COUNTRIES:
					{
						GB: "GB",
						IE: "IE",
						US: "US",
						ZA: "ZA",
						SG: "SG",
						FR: "FR"
					},
					MARKETCOUNTRYACRONYMS:
					{
						AR: "(ARG)",
						AU: "(AUS)",
						CA: "(CAN)",
						CL: "(CHL)",
						CZ: "(CZE)",
						SP: "(ESP)",
						FR: "(FRA)",
						DE: "(GER)",
						HK: "(HKG)",
						IT: "(ITA)",
						JP: "(JPN)",
						NZ: "(NZL)",
						ZA: "(RSA)",
						SG: "(SIN)",
						CH: "(SUI)",
						SE: "(SWE)",
						TR: "(TUR)",
						AE: "(UAE)",
						UI: "(URY)",
						US: "(USA)",
						ZW: "(ZIM)"
					},
					KEYCODES:
					{
						enter: 13,
						arrowDown: 40,
						arrowUp: 38,
						escape: 27
					}
				},
				TEMPLATES:
				{
					EVENT_CARD:
					{
						CONFIG:
						{
							RACING:
							{
								className: "racing",
								extraControls:
								{
									templateURL: "views/directives/templates/event-manager-extra-controls-racing.html",
									controllers:
									{
										actions: "EventManagerRacingActionsController",
										markets: "EventManagerRacingMarketsController"
									}
								}
							},
							GENERAL_SPORTS:
							{
								className: "general-sports",
								extraControls:
								{
									templateURL: null
								},
								settlement:
								{
									templateURL: null,
									controllers:
									{
										base: "EventManagerGeneralSettlementController"
									}
								}
							}
						},
						SPORTS_LIST:
						{
							7: "RACING",
							4339: "RACING",
							DEFAULT: "GENERAL_SPORTS"
						}
					}
				}
			}
		},
		{}
	],
	13: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("./lib/directives/yes-no-modal-directive");
			var i = f(r);
			var o = e("./lib/directives/ok-modal-directive");
			var s = f(o);
			var a = e("./lib/factories/modal-factory");
			var c = f(a);
			var u = e("./lib/values/template-builder");
			var l = f(u);

			function f(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}
			n.
			default = angular.module("fcn.core.modals", []).directive("yesNoModal", i.
				default).directive("okModal", s.
				default).value("templateBuilder", l.
				default).factory("modal", c.
				default)
		},
		{
			"./lib/directives/ok-modal-directive": 14,
			"./lib/directives/yes-no-modal-directive": 15,
			"./lib/factories/modal-factory": 16,
			"./lib/values/template-builder": 17
		}
	],
	14: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r()
			{
				return {
					restrice: "E",
					scope:
					{
						title: "=",
						message: "=",
						large: "=",
						onOk: "&",
						onDestroy: "&"
					},
					transclude: true,
					controller: function e(t)
					{
						t.ok = function ()
						{
							t.onOk()
						};
						t.$on("$destroy", function ()
						{
							t.onDestroy()
						});
						t.onOk = t.onOk() || angular.noop;
						t.onDestroy = t.onDestroy() || angular.noop
					},
					link: function t(e, n)
					{
						var r = n.find(".modal");
						r.modal(
						{
							show: true
						});
						r.on("hide.bs.modal", function ()
						{
							r.off("hide.bs.modal");
							n.remove();
							e.$destroy()
						})
					},
					template: '\n        <div role="dialog" data-show="true" data-backdrop="static" class="bf-fcn-core modal fade">\n            <div ng-class="{ \'modal-lg\': large }" class="modal-dialog">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 ng-bind="title" class="modal-title"></h4>\n                    </div>\n                    <div class="modal-body">\n                        <h5 ng-bind="message"></h5>\n                        <ng-transclude />\n                    </div>\n                    <div class="modal-footer">\n                        <div class="text-center">\n                        <button type="button" ng-click="ok()" data-dismiss="modal" class="btn btn-primary btn-yes">Ok</button>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        '
				}
			}
			r.$inject = ["modal"];
			n.
			default = r
		},
		{}
	],
	15: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r()
			{
				return {
					restrict: "E",
					scope:
					{
						title: "=",
						message: "=",
						large: "=",
						onYes: "&",
						onNo: "&",
						onDestroy: "&"
					},
					transclude: true,
					controller: function e(t)
					{
						t.yes = function ()
						{
							t.onYes()
						};
						t.no = function ()
						{
							t.onNo()
						};
						t.$on("$destroy", function ()
						{
							t.onDestroy()
						});
						t.onYes = t.onYes() || angular.noop;
						t.onNo = t.onNo() || angular.noop;
						t.onDestroy = t.onDestroy() || angular.noop
					},
					link: function t(e, n)
					{
						var r = n.find(".modal");
						r.modal(
						{
							show: true
						});
						r.on("hide.bs.modal", function ()
						{
							r.off("hide.bs.modal");
							n.remove();
							e.$destroy()
						})
					},
					template: '\n        <div role="dialog" data-show="true" data-backdrop="static" class="bf-fcn-core modal fade">\n            <div ng-class="{ \'modal-lg\': large }" class="modal-dialog">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 ng-bind="title" class="modal-title"></h4>\n                    </div>\n                    <div class="modal-body">\n                        <h5 ng-bind="message"></h5>\n                        <ng-transclude />\n                    </div>\n                    <div class="modal-footer">\n                        <div class="text-center">\n                        <button type="button" ng-click="yes()" data-dismiss="modal" class="btn btn-primary btn-yes">Yes</button>\n                        <button type="button" ng-click="no()" data-dismiss="modal" class="btn btn-no">No</button>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>'
				}
			}
			r.$inject = ["modal"];
			n.
			default = r
		},
		{}
	],
	16: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n, r)
			{
				var i = t.find("body");
				var o = [];

				function s(e)
				{
					e.parent.append(e.modal)
				}

				function a(e, t, a, c)
				{
					var u = c && c.parent || i;
					var l = r(e, a);
					var f = n(l)(t);
					var d = f.isolateScope();
					var p = {
						parent: u,
						modal: f
					};
					o.push(p);
					d.$on("$destroy", function ()
					{
						var e = o.indexOf(p);
						o.splice(e, 1);
						if(o.length)
						{
							s(o[0])
						}
					});
					if(o.length === 1)
					{
						s(p)
					}
					return d
				}
				return {
					show: a
				}
			}
			r.$inject = ["$rootScope", "$document", "$compile", "templateBuilder"];
			n.
			default = r
		},
		{}
	],
	17: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = r;

			function r(e, t)
			{
				var n;
				if(angular.isObject(t))
				{
					n = Object.keys(t).map(function (e)
					{
						return e + '="' + t[e] + '"'
					}).join(" ")
				}
				else
				{
					n = []
				}
				return "<" + e + " " + n + "></" + e + ">"
			}
		},
		{}
	],
	18: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("./lib/providers/factories/auth-factory");
			var i = T(r);
			var o = e("./lib/providers/factories/ad-auth-factory");
			var s = T(o);
			var a = e("./lib/providers/factories/gs-auth-factory");
			var c = T(a);
			var u = e("./lib/providers/factories/session");
			var l = T(u);
			var f = e("./lib/providers/services/polling-service");
			var d = T(f);
			var p = e("./lib/providers/factories/cougar-transport");
			var h = T(p);
			var v = e("./lib/providers/factories/jsonrpc-transport");
			var g = T(v);
			var m = e("./lib/providers/factories/pool");
			var E = T(m);
			var y = e("./lib/providers/factories/indexed-db");
			var b = T(y);
			var S = e("./lib/providers/services/http-headers-service");
			var A = T(S);
			var $ = e("./lib/providers/factories/app-registry-factory");
			var _ = T($);
			e("fcn-core-config");

			function T(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}
			n.
			default = angular.module("fcn.core.services", ["ngCookies", "fcn.core.config", "fcn.core.storage", "betfair.extensions"]).factory("AppRegistryService", _.
				default).factory("AuthFactory", i.
				default).factory("ADAuthFactory", s.
				default).factory("GSAuthFactory", c.
				default).factory("session", l.
				default).factory("CougarTransport", h.
				default).factory("JsonRPCTransport", g.
				default).factory("PoolFactory", E.
				default).service("PollingService", d.
				default).service("FcnIndexedDB", b.
				default).service("FcnHttpHeadersService", A.
				default)
		},
		{
			"./lib/providers/factories/ad-auth-factory": 25,
			"./lib/providers/factories/app-registry-factory": 26,
			"./lib/providers/factories/auth-factory": 27,
			"./lib/providers/factories/cougar-transport": 28,
			"./lib/providers/factories/gs-auth-factory": 29,
			"./lib/providers/factories/indexed-db": 30,
			"./lib/providers/factories/jsonrpc-transport": 31,
			"./lib/providers/factories/pool": 32,
			"./lib/providers/factories/session": 33,
			"./lib/providers/services/http-headers-service": 34,
			"./lib/providers/services/polling-service": 35,
			"fcn-core-config": 11
		}
	],
	19: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = {
				REQUEST_TIMED_OUT: "REQUEST_TIMED_OUT",
				SUCCESS: "SUCCESS",
				INVALID_USERNAME_OR_PASSWORD: "INVALID_USERNAME_OR_PASSWORD"
			}
		},
		{}
	],
	20: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = {
				LOGIN:
				{
					CATEGORY: "Account",
					ACTION: "Clicked Login"
				}
			}
		},
		{}
	],
	21: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("fcn-core-config/dist/constants");
			var i = o(r);

			function o(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}
			n.
			default = {
				SESSION_EXPIRED:
				{
					type: i.
					default.ALERTS.WARNING,
					message: "Session expired"
				}
			}
		},
		{
			"fcn-core-config/dist/constants": 12
		}
	],
	22: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = {
				GLOBAL_SERVICE: "GLOBAL_SERVICE",
				IDENTITY_SSO: "IDENTITY_SSO",
				UNKNOWN_AUTH_SERIVCE_ERROR: "Unknown service for authentication"
			}
		},
		{}
	],
	23: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = {
				INVALID_PASSWORD: "InvalidPassword",
				INVALID_ACCOUNT: "InvalidAccount",
				OK: "OK"
			}
		},
		{}
	],
	24: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			n.
			default = {
				INVALID_REQUEST: "Something wrong while building the request!"
			}
		},
		{}
	],
	25: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("../constants/ad-auth-constants");
			var i = o(r);

			function o(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}

			function s(e, t, n, r)
			{
				var o = i.
				default.REQUEST_TIMED_OUT;
				var s = i.
				default.SUCCESS;
				var a = i.
				default.INVALID_USERNAME_OR_PASSWORD;
				var c = r.STRANDS.AUTH;

				function u(e)
				{
					return angular.isNumber(e.timeout)
				}

				function l(e)
				{
					return e.status !== s
				}

				function f(e, t, n)
				{
					return {
						sessionId: n.mainSessionToken.sessionToken,
						accountId: n.details.ACCOUNT_ID,
						userId: n.details.USER_ID,
						username: [e, t].join("\\")
					}
				}

				function d(r, i, s)
				{
					var a = {
						method: "POST",
						data:
						{
							domain: r,
							username: i,
							password: s
						}
					};
					return t.makeRequest(c, a).then(function (e)
					{
						return e.data
					}).then(function (t)
					{
						return u(t) ? e.reject(
						{
							reason: o
						}) : t
					}).then(function (t)
					{
						return l(t) ? e.reject(
						{
							reason: t.status
						}) : t
					}).then(function (e)
					{
						return f(r, i, e)
					}).then(function (e)
					{
						return n.create(e)
					})
				}
				return {
					login: d,
					REQUEST_TIMED_OUT: o,
					SUCCESS: s,
					INVALID_USERNAME_OR_PASSWORD: a
				}
			}
			s.$inject = ["$q", "BF.Transport", "session", "Environment"];
			n.
			default = s
		},
		{
			"../constants/ad-auth-constants": 19
		}
	],
	26: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r()
			{
				var e = "bf-fcn-app";
				var t = "-";
				var n = "@";
				var r = {};
				var i = {};
				var o = [];
				var s = [];

				function a(e)
				{
					return r[e] || null
				}

				function c(e)
				{
					r[e.key] = e
				}

				function u(e)
				{
					if(i[e] !== null && i[e] !== undefined)
					{
						i[e] += 1
					}
					else
					{
						i[e] = 0
					}
					return i[e]
				}

				function l(n)
				{
					return e + t + n
				}

				function f(e, t, r)
				{
					if(r)
					{
						e = l(e)
					}
					return e + n + t
				}

				function d(e)
				{
					var t = l(e.name);
					var n = e;
					if(!e.name)
					{
						return
					}
					t = l(e.name);
					n = e;
					n.instanceId = u(t);
					t = f(t, n.instanceId, false);
					n.key = t;
					return n
				}

				function p(e)
				{
					var t = d(e);
					if(t)
					{
						c(t)
					}
					o.push.apply(o, e.tabs);
					s.push.apply(s, e.settings)
				}

				function h(e)
				{
					if(!angular.isArray(e))
					{
						return
					}
					e.forEach(function (e)
					{
						p(e)
					})
				}

				function v(e, t)
				{
					var n;
					if(!e && !t)
					{
						return
					}
					n = f(e, t, true);
					if(r[n])
					{
						delete r[n]
					}
				}

				function g(e)
				{
					if(!angular.isArray(e))
					{
						return
					}
					e.forEach(function (e)
					{
						if(e.name && e.instanceId !== null && !angular.isUndefined(e.instanceId))
						{
							v(e.name, e.instanceId)
						}
					})
				}

				function m(e, t)
				{
					var n;
					if(!e)
					{
						return
					}
					n = f(e, t || 0, true);
					return a(n)
				}

				function E()
				{
					return r
				}

				function y(e)
				{
					var t = {};
					angular.forEach(r, function (n, r)
					{
						if(n && n.name && n.name === e)
						{
							t[r] = n
						}
					});
					return Object.keys(t).length ? t : null
				}
				return {
					register: p,
					tabs: o,
					settings: s,
					bulkRegister: h,
					unregister: v,
					bulkUnregister: g,
					get: m,
					getAll: E,
					getInstancesByName: y
				}
			}
			n.
			default = r
		},
		{}
	],
	27: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("../constants/auth-constants");
			var i = u(r);
			var o = e("../constants/auth-alerts");
			var s = u(o);
			var a = e("../constants/analytics-constants");
			var c = u(a);

			function u(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}

			function l(e, t, n, r, o, a, u, l)
			{
				var f = i.
				default.GLOBAL_SERVICE;
				var d = i.
				default.IDENTITY_SSO;
				var p = u.ALERTS;

				function h(e)
				{
					l.sendEvent(e.category, e.action, e.label)
				}

				function v(e)
				{
					var t = undefined;
					switch(e)
					{
					case f:
						t = r.login.bind(r);
						break;
					case d:
						t = o.login.bind(o);
						break;
					default:
						throw new Error(i.
							default.UNKNOWN_AUTH_SERIVCE_ERROR)
					}
					for(var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
					{
						s[a - 1] = arguments[a]
					}
					return t.apply(t, s).then(function (e)
					{
						h(
						{
							category: c.
							default.LOGIN.CATEGORY,
							action: c.
							default.LOGIN.ACTION,
							label: e.accountId
						});
						return e
					})
				}

				function g()
				{
					var t = arguments.length <= 0 || arguments[0] === undefined ?
					{} : arguments[0];
					a.destroy();
					if(t.sessionExpired)
					{
						e.$broadcast(p.NEW_ALERT, s.
							default.SESSION_EXPIRED)
					}
				}

				function m()
				{
					return !!a.sessionId
				}

				function E()
				{
					return a
				}

				function y(e)
				{
					if(e)
					{
						var r = n.use("session");
						r.set("next_url", e)
					}
					t.location.href = "/#/login"
				}
				return {
					login: v,
					logout: g,
					redirectToLogin: y,
					getSession: E,
					isAuthenticated: m,
					GLOBAL_SERVICE: f,
					IDENTITY_SSO: d
				}
			}
			l.$inject = ["$rootScope", "$window", "Storage", "GSAuthFactory", "ADAuthFactory", "session", "Constants", "BF.Analytics"];
			n.
			default = l
		},
		{
			"../constants/analytics-constants": 20,
			"../constants/auth-alerts": 21,
			"../constants/auth-constants": 22
		}
	],
	28: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n)
			{
				var r = {
					INVALID_SESSION: "DSC-0015"
				};

				function i(e)
				{
					e.headers = e.headers ||
					{};
					angular.extend(e.headers,
					{
						"X-Authentication": n.getSession().sessionId,
						FCN: "Fusion-Console"
					})
				}

				function o(t)
				{
					if(t.data.faultstring)
					{
						switch(t.data.faultstring)
						{
						case r.INVALID_SESSION:
							n.logout(
							{
								sessionExpired: true
							});
							return e.reject(t);
						default:
							return e.reject(t)
						}
					}
					return t
				}

				function s(e, n)
				{
					i(n);
					return t.makeRequest(e, n).
					catch(o).then(o)
				}
				return {
					makeRequest: s
				}
			}
			r.$inject = ["$q", "BF.Transport", "AuthFactory"];
			n.
			default = r
		},
		{}
	],
	29: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("../constants/gs-auth-constants");
			var i = o(r);

			function o(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}

			function s(e, t, n, r)
			{
				var o = r.GLOBAL_SERVICE;
				var s = i.
				default.INVALID_PASSWORD;
				var a = i.
				default.INVALID_ACCOUNT;
				var c = i.
				default.OK;

				function u(e)
				{
					return e.Status !== c
				}

				function l(e, t)
				{
					return {
						sessionId: t.SessionId,
						accountId: t.AdminAccountID,
						userId: t.UserID,
						name: t.Firstname + " " + t.Surname,
						username: e
					}
				}

				function f(r, i)
				{
					var s = {
						UserName: r,
						Password: i
					};
					return e.post(o.Login, s).then(function (e)
					{
						return e.data
					}).then(function (e)
					{
						return u(e) ? t.reject(
						{
							reason: e.Status
						}) : e
					}).then(function (e)
					{
						return l(r, e)
					}).then(function (e)
					{
						return n.create(e)
					})
				}
				return {
					login: f,
					INVALID_PASSWORD: s,
					INVALID_ACCOUNT: a,
					OK: c
				}
			}
			s.$inject = ["$http", "$q", "session", "Environment"];
			n.
			default = s
		},
		{
			"../constants/gs-auth-constants": 23
		}
	],
	30: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e)
			{
				this.init = function (t)
				{
					if(this.db)
					{
						this.db.close()
					}
					this.db = new Dexie(e.INDEXED_DB.NAME);
					this.db.version(e.INDEXED_DB.VERSION).stores(t.objectStores);
					return this.db.open()
				}
			}
			r.$inject = ["Constants"];
			n.
			default = r
		},
		{}
	],
	31: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e, t, n)
			{
				function r(e)
				{
					e.headers = e.headers ||
					{};
					angular.extend(e.headers,
					{
						"X-Authentication": n.getSession().sessionId,
						FCN: "Fusion-Console"
					})
				}

				function i(n, i, o)
				{
					r(i);
					return t.makeRequest(n, i, o).
					catch(function (t)
					{
						return e.reject(t)
					})
				}
				return {
					makeRequest: i
				}
			}
			r.$inject = ["$q", "BF.JsonRPC", "AuthFactory"];
			n.
			default = r
		},
		{}
	],
	32: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("events");

			function i()
			{
				var e = function t(e)
				{
					this.options = e ||
					{};
					this.options.maxSize = this.options.maxSize || 20;
					r.EventEmitter.call(this);
					this.id = this.options.id || Date.now();
					this.queue = [];
					this.locked = false;
					this.on("full", function ()
					{
						this.locked = true;
						this.emit("locked")
					});
					this.on("add", function ()
					{
						if(this.queue.length === this.options.maxSize)
						{
							this.emit("full",
							{
								length: this.queue.length
							})
						}
					});
					this.on("get", function ()
					{
						if(this.isLocked())
						{
							this.locked = false;
							this.emit("unlocked",
							{
								length: this.queue.length
							})
						}
						if(this.isEmpty())
						{
							this.emit("empty")
						}
					});
					this.length = this.queue.length
				};
				e.prototype = Object.create(r.EventEmitter.prototype);
				e.prototype.reset = function (e)
				{
					e = e || [];
					if(!Array.isArray(e))
					{
						e = [e]
					}
					if(e.length > this.options.maxSize)
					{
						throw new Error("Cannot reset pool. Reason: given array is bigger than maximum allowed size.")
					}
					this.queue = e;
					this.length = this.queue.length;
					this.emit("reset",
					{
						length: this.length
					})
				};
				e.prototype.add = function (e)
				{
					if(!this.isLocked() && !this.isFull())
					{
						this.queue.push(e);
						this.length = this.queue.length;
						this.emit("add",
						{
							value: e,
							length: this.queue.length
						})
					}
					else
					{
						this.emit("full",
						{
							value: "The queue is full; value not added"
						})
					}
				};
				e.prototype.get = function (e)
				{
					var t;
					if(this.isEmpty())
					{
						throw new Error("Cannot get item from queue. Reason: queue is empty.")
					}
					if(e >= this.queue.length || e < 0)
					{
						throw new Error("Cannot get item from queue. Reason: index out of bounds.")
					}
					t = this.queue.splice(e, 1).shift();
					this.length = this.queue.length;
					this.emit("get",
					{
						value: t
					});
					return t
				};
				e.prototype.pop = function ()
				{
					return this.get(0)
				};
				e.prototype.filter = function (e)
				{
					var t = [];
					this.queue.forEach(function (n, r)
					{
						if(typeof e === "function" && e(n))
						{
							t.push(this.get(r))
						}
					}, this);
					return t
				};
				e.prototype.isLocked = function n()
				{
					return this.locked
				};
				e.prototype.isFull = function i()
				{
					return this.queue.length === this.options.maxSize
				};
				e.prototype.isEmpty = function o()
				{
					return !this.queue.length
				};
				e.prototype.destroy = function s()
				{
					this.queue = undefined;
					this.locked = false;
					this.removeAllListeners()
				};
				return {
					create: function a(t)
					{
						return new e(t)
					}
				}
			}
			n.
			default = i
		},
		{
			events: 10
		}
	],
	33: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e)
			{
				var t = "session";

				function n()
				{
					return e.get(t)
				}

				function r(n)
				{
					var r = n.userId;
					var i = n.accountId;
					var o = n.sessionId;
					var s = n.username;
					var a = n.name;
					var c = a === undefined ? undefined : a;
					if(angular.isUndefined(r) || angular.isUndefined(i) || angular.isUndefined(s) || angular.isUndefined(o))
					{
						throw new Error("Mandatory session data not set")
					}
					e.put(t,
					{
						userId: Number(r),
						accountId: Number(i),
						sessionId: o,
						username: s,
						name: c
					});
					return this
				}

				function i()
				{
					e.remove(t)
				}

				function o()
				{
					var e = n();
					return e && e.username
				}

				function s()
				{
					var e = n();
					return e && e.accountId
				}

				function a()
				{
					var e = n();
					return e && e.sessionId
				}

				function c()
				{
					var e = n();
					return e && e.name
				}
				return {
					get: n,
					create: r,
					destroy: i,
					get username()
					{
						return o()
					},
					get accountId()
					{
						return s()
					},
					get sessionId()
					{
						return a()
					},
					get name()
					{
						return c()
					}
				}
			}
			r.$inject = ["$cookieStore"];
			n.
			default = r
		},
		{}
	],
	34: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});
			var r = e("lodash/defaults");
			var i = s(r);
			var o = e("../constants/http-headers-service-constants");

			function s(e)
			{
				return e && e.__esModule ? e :
				{
					"default": e
				}
			}

			function a(e, t)
			{
				function n(e)
				{
					var t = "";
					if(!e || !e.path)
					{
						throw new Error(o.INVALID_REQUEST)
					}
					if(e.protocol)
					{
						t = e.protocol + "://"
					}
					if(e.host)
					{
						t += e.host
					}
					if(e.port)
					{
						t += ":" + e.port
					}
					return "" + t + e.path
				}

				function r(e)
				{
					e = e ||
					{
						headers:
						{}
					};
					e.headers = e.headers ||
					{};
					return(0, i.
						default)(e.headers,
					{
						"X-Administrator": t.sessionId,
						"Content-Type": "application/json",
						FCN: "Fusion-Console"
					})
				}

				function s(t, i)
				{
					var o = n(t);
					var s = r();
					var a = new FormData;
					a.append("file", i);
					return e.post(o, a,
					{
						headers: s
					}).
					catch(c)
				}

				function a(t, i)
				{
					var s = n(t);
					var a = r(i);
					if(!i || !i.method)
					{
						throw new Error(o.INVALID_REQUEST)
					}
					return e(
					{
						method: i.method,
						url: s,
						data: i.data,
						headers: a
					}).
					catch(c)
				}

				function c(e)
				{
					console.log(e);
					return e
				}
				return {
					makeRequest: a,
					makeMultipartRequest: s
				}
			}
			a.$inject = ["$http", "session"];
			n.
			default = a
		},
		{
			"../constants/http-headers-service-constants": 24,
			"lodash/defaults": 57
		}
	],
	35: [
		function (e, t, n)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: true
			});

			function r(e)
			{
				var t;
				var n = {
					Authentication: e.getSession().sessionId
				};
				this.addPoller = function (e)
				{
					function r(t)
					{
						if(t.data.success)
						{
							e.callback(t.data.response);
							return
						}
						throw t.data.message
					}
					t = new Worker("scripts/workers/polling-worker.js");
					t.addEventListener("message", r, false);
					t.postMessage(
					{
						action: "ADD_POLLER",
						id: e.id,
						url: e.url,
						interval: e.interval,
						firstExecution: e.firstExecution,
						headers: n
					})
				};
				this.removePoller = function (e)
				{
					t.postMessage(
					{
						id: e,
						action: "REMOVE_POLLER"
					})
				}
			}
			r.$inject = ["AuthFactory"];
			n.
			default = r
		},
		{}
	],
	36: [
		function (e, t, n)
		{
			var r = e("./lib");
			t.exports = angular.module(r.name, []).provider(r.StorageProvider.name, r.StorageProvider.module)
		},
		{
			"./lib": 37
		}
	],
	37: [
		function (e, t, n)
		{
			"use strict";
			t.exports = {
				name: "fcn.core.storage",
				StorageProvider:
				{
					name: "Storage",
					module: e("./providers/storage-provider")
				}
			}
		},
		{
			"./providers/storage-provider": 38
		}
	],
	38: [
		function (e, t, n)
		{
			var r = function i()
			{
				"use strict";
				var e;
				var t = {
					prefix: "fcn",
					separator: ".",
					sufix:
					{
						type: "_type",
						value: "_value"
					}
				};
				var n = {
					local: "localStorage",
					session: "sessionStorage"
				};
				this.setup = function (e)
				{
					t = angular.extend(t, e);
					return t
				};
				var r = function o(e)
				{
					return t.prefix + t.separator + e
				};
				var i = function s(e, n)
				{
					return r(e) + t.separator + n
				};
				this.$get = ["$window",
					function (r)
					{
						var o = function s(o)
						{
							e = n.hasOwnProperty(o) ? n[o] : false;
							if(!e)
							{
								throw new Error("Error: Storage of type `" + o + "` doesn't exist.")
							}
							var s = function m(t)
							{
								return r[e].getItem(t)
							};
							var a = function E(e)
							{
								return s(i(e, t.sufix.type))
							};
							var c = function y(e)
							{
								return s(i(e, t.sufix.value))
							};
							var u = function b(e)
							{
								var t = a(e);
								var n = c(e);
								if(!t || !n)
								{
									return null
								}
								if(t === "object" || t === "array")
								{
									n = JSON.parse(n)
								}
								return n
							};
							var l = function S(t, n)
							{
								return !r[e].setItem(t, n)
							};
							var f = function A(e, n)
							{
								var r = $.type(n);
								if($.isPlainObject(n) || $.isArray(n))
								{
									n = JSON.stringify(n)
								}
								return l(i(e, t.sufix.type), r) && l(i(e, t.sufix.value), n)
							};
							var d = function (t)
							{
								return !r[e].removeItem(t)
							};
							var p = function (e)
							{
								return d(i(e, t.sufix.type)) && d(i(e, t.sufix.value))
							};
							var h = function _(e)
							{
								var t;
								t = u(e);
								if(t && p(e))
								{
									return t
								}
								return false
							};
							var v = function T()
							{
								return !r[e].clear()
							};
							var g = function O()
							{
								var t = r[e].length;
								return t && t % 2 === 0 ? t / 2 : t
							};
							return {
								get: u,
								set: f,
								pop: h,
								reset: v,
								size: g
							}
						};
						return {
							use: o
						}
					}
				]
			};
			t.exports = r
		},
		{}
	],
	39: [
		function (e, t, n)
		{
			var r = e("./_root");
			var i = r.Reflect;
			t.exports = i
		},
		{
			"./_root": 55
		}
	],
	40: [
		function (e, t, n)
		{
			function r(e, t, n)
			{
				var r = n.length;
				switch(r)
				{
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2])
				}
				return e.apply(t, n)
			}
			t.exports = r
		},
		{}
	],
	41: [
		function (e, t, n)
		{
			var r = e("./eq");
			var i = Object.prototype;
			var o = i.hasOwnProperty;

			function s(e, t, n, s)
			{
				if(e === undefined || r(e, i[n]) && !o.call(s, n))
				{
					return t
				}
				return e
			}
			t.exports = s
		},
		{
			"./eq": 58
		}
	],
	42: [
		function (e, t, n)
		{
			var r = e("./eq");
			var i = Object.prototype;
			var o = i.hasOwnProperty;

			function s(e, t, n)
			{
				var i = e[t];
				if(!(o.call(e, t) && r(i, n)) || n === undefined && !(t in e))
				{
					e[t] = n
				}
			}
			t.exports = s
		},
		{
			"./eq": 58
		}
	],
	43: [
		function (e, t, n)
		{
			var r = e("./_Reflect"),
				i = e("./_iteratorToArray");
			var o = Object.prototype;
			var s = r ? r.enumerate : undefined,
				a = o.propertyIsEnumerable;

			function c(e)
			{
				e = e == null ? e : Object(e);
				var t = [];
				for(var n in e)
				{
					t.push(n)
				}
				return t
			}
			if(s && !a.call(
			{
				valueOf: 1
			}, "valueOf"))
			{
				c = function (e)
				{
					return i(s(e))
				}
			}
			t.exports = c
		},
		{
			"./_Reflect": 39,
			"./_iteratorToArray": 54
		}
	],
	44: [
		function (e, t, n)
		{
			function r(e)
			{
				return function (t)
				{
					return t == null ? undefined : t[e]
				}
			}
			t.exports = r
		},
		{}
	],
	45: [
		function (e, t, n)
		{
			function r(e, t)
			{
				var n = -1,
					r = Array(e);
				while(++n < e)
				{
					r[n] = t(n)
				}
				return r
			}
			t.exports = r
		},
		{}
	],
	46: [
		function (e, t, n)
		{
			function r(e)
			{
				return e && e.Object === Object ? e : null
			}
			t.exports = r
		},
		{}
	],
	47: [
		function (e, t, n)
		{
			var r = e("./_assignValue");

			function i(e, t, n, i)
			{
				n || (n = {});
				var o = -1,
					s = t.length;
				while(++o < s)
				{
					var a = t[o];
					var c = i ? i(n[a], e[a], a, n, e) : e[a];
					r(n, a, c)
				}
				return n
			}
			t.exports = i
		},
		{
			"./_assignValue": 42
		}
	],
	48: [
		function (e, t, n)
		{
			var r = e("./_isIterateeCall"),
				i = e("./rest");

			function o(e)
			{
				return i(function (t, n)
				{
					var i = -1,
						o = n.length,
						s = o > 1 ? n[o - 1] : undefined,
						a = o > 2 ? n[2] : undefined;
					s = e.length > 3 && typeof s == "function" ? (o--, s) : undefined;
					if(a && r(n[0], n[1], a))
					{
						s = o < 3 ? undefined : s;
						o = 1
					}
					t = Object(t);
					while(++i < o)
					{
						var c = n[i];
						if(c)
						{
							e(t, c, i, s)
						}
					}
					return t
				})
			}
			t.exports = o
		},
		{
			"./_isIterateeCall": 52,
			"./rest": 70
		}
	],
	49: [
		function (e, t, n)
		{
			var r = e("./_baseProperty");
			var i = r("length");
			t.exports = i
		},
		{
			"./_baseProperty": 44
		}
	],
	50: [
		function (e, t, n)
		{
			var r = e("./_baseTimes"),
				i = e("./isArguments"),
				o = e("./isArray"),
				s = e("./isLength"),
				a = e("./isString");

			function c(e)
			{
				var t = e ? e.length : undefined;
				if(s(t) && (o(e) || a(e) || i(e)))
				{
					return r(t, String)
				}
				return null
			}
			t.exports = c
		},
		{
			"./_baseTimes": 45,
			"./isArguments": 59,
			"./isArray": 60,
			"./isLength": 64,
			"./isString": 67
		}
	],
	51: [
		function (e, t, n)
		{
			var r = 9007199254740991;
			var i = /^(?:0|[1-9]\d*)$/;

			function o(e, t)
			{
				t = t == null ? r : t;
				return !!t && (typeof e == "number" || i.test(e)) && (e > -1 && e % 1 == 0 && e < t)
			}
			t.exports = o
		},
		{}
	],
	52: [
		function (e, t, n)
		{
			var r = e("./eq"),
				i = e("./isArrayLike"),
				o = e("./_isIndex"),
				s = e("./isObject");

			function a(e, t, n)
			{
				if(!s(n))
				{
					return false
				}
				var a = typeof t;
				if(a == "number" ? i(n) && o(t, n.length) : a == "string" && t in n)
				{
					return r(n[t], e)
				}
				return false
			}
			t.exports = a
		},
		{
			"./_isIndex": 51,
			"./eq": 58,
			"./isArrayLike": 61,
			"./isObject": 65
		}
	],
	53: [
		function (e, t, n)
		{
			var r = Object.prototype;

			function i(e)
			{
				var t = e && e.constructor,
					n = typeof t == "function" && t.prototype || r;
				return e === n
			}
			t.exports = i
		},
		{}
	],
	54: [
		function (e, t, n)
		{
			function r(e)
			{
				var t, n = [];
				while(!(t = e.next()).done)
				{
					n.push(t.value)
				}
				return n
			}
			t.exports = r
		},
		{}
	],
	55: [
		function (e, t, n)
		{
			(function (n)
			{
				var r = e("./_checkGlobal");
				var i = r(typeof n == "object" && n);
				var o = r(typeof self == "object" && self);
				var s = r(typeof this == "object" && this);
				var a = i || o || s || Function("return this")();
				t.exports = a
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window :
			{})
		},
		{
			"./_checkGlobal": 46
		}
	],
	56: [
		function (e, t, n)
		{
			var r = e("./_copyObject"),
				i = e("./_createAssigner"),
				o = e("./keysIn");
			var s = i(function (e, t, n, i)
			{
				r(t, o(t), e, i)
			});
			t.exports = s
		},
		{
			"./_copyObject": 47,
			"./_createAssigner": 48,
			"./keysIn": 69
		}
	],
	57: [
		function (e, t, n)
		{
			var r = e("./_apply"),
				i = e("./_assignInDefaults"),
				o = e("./assignInWith"),
				s = e("./rest");
			var a = s(function (e)
			{
				e.push(undefined, i);
				return r(o, undefined, e)
			});
			t.exports = a
		},
		{
			"./_apply": 40,
			"./_assignInDefaults": 41,
			"./assignInWith": 56,
			"./rest": 70
		}
	],
	58: [
		function (e, t, n)
		{
			function r(e, t)
			{
				return e === t || e !== e && t !== t
			}
			t.exports = r
		},
		{}
	],
	59: [
		function (e, t, n)
		{
			var r = e("./isArrayLikeObject");
			var i = "[object Arguments]";
			var o = Object.prototype;
			var s = o.hasOwnProperty;
			var a = o.toString;
			var c = o.propertyIsEnumerable;

			function u(e)
			{
				return r(e) && s.call(e, "callee") && (!c.call(e, "callee") || a.call(e) == i)
			}
			t.exports = u
		},
		{
			"./isArrayLikeObject": 62
		}
	],
	60: [
		function (e, t, n)
		{
			var r = Array.isArray;
			t.exports = r
		},
		{}
	],
	61: [
		function (e, t, n)
		{
			var r = e("./_getLength"),
				i = e("./isFunction"),
				o = e("./isLength");

			function s(e)
			{
				return e != null && o(r(e)) && !i(e)
			}
			t.exports = s
		},
		{
			"./_getLength": 49,
			"./isFunction": 63,
			"./isLength": 64
		}
	],
	62: [
		function (e, t, n)
		{
			var r = e("./isArrayLike"),
				i = e("./isObjectLike");

			function o(e)
			{
				return i(e) && r(e)
			}
			t.exports = o
		},
		{
			"./isArrayLike": 61,
			"./isObjectLike": 66
		}
	],
	63: [
		function (e, t, n)
		{
			var r = e("./isObject");
			var i = "[object Function]",
				o = "[object GeneratorFunction]";
			var s = Object.prototype;
			var a = s.toString;

			function c(e)
			{
				var t = r(e) ? a.call(e) : "";
				return t == i || t == o
			}
			t.exports = c
		},
		{
			"./isObject": 65
		}
	],
	64: [
		function (e, t, n)
		{
			var r = 9007199254740991;

			function i(e)
			{
				return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r
			}
			t.exports = i
		},
		{}
	],
	65: [
		function (e, t, n)
		{
			function r(e)
			{
				var t = typeof e;
				return !!e && (t == "object" || t == "function")
			}
			t.exports = r
		},
		{}
	],
	66: [
		function (e, t, n)
		{
			function r(e)
			{
				return !!e && typeof e == "object"
			}
			t.exports = r
		},
		{}
	],
	67: [
		function (e, t, n)
		{
			var r = e("./isArray"),
				i = e("./isObjectLike");
			var o = "[object String]";
			var s = Object.prototype;
			var a = s.toString;

			function c(e)
			{
				return typeof e == "string" || !r(e) && i(e) && a.call(e) == o
			}
			t.exports = c
		},
		{
			"./isArray": 60,
			"./isObjectLike": 66
		}
	],
	68: [
		function (e, t, n)
		{
			var r = e("./isObjectLike");
			var i = "[object Symbol]";
			var o = Object.prototype;
			var s = o.toString;

			function a(e)
			{
				return typeof e == "symbol" || r(e) && s.call(e) == i
			}
			t.exports = a
		},
		{
			"./isObjectLike": 66
		}
	],
	69: [
		function (e, t, n)
		{
			var r = e("./_baseKeysIn"),
				i = e("./_indexKeys"),
				o = e("./_isIndex"),
				s = e("./_isPrototype");
			var a = Object.prototype;
			var c = a.hasOwnProperty;

			function u(e)
			{
				var t = -1,
					n = s(e),
					a = r(e),
					u = a.length,
					l = i(e),
					f = !! l,
					d = l || [],
					p = d.length;
				while(++t < u)
				{
					var h = a[t];
					if(!(f && (h == "length" || o(h, p))) && !(h == "constructor" && (n || !c.call(e, h))))
					{
						d.push(h)
					}
				}
				return d
			}
			t.exports = u
		},
		{
			"./_baseKeysIn": 43,
			"./_indexKeys": 50,
			"./_isIndex": 51,
			"./_isPrototype": 53
		}
	],
	70: [
		function (e, t, n)
		{
			var r = e("./_apply"),
				i = e("./toInteger");
			var o = "Expected a function";
			var s = Math.max;

			function a(e, t)
			{
				if(typeof e != "function")
				{
					throw new TypeError(o)
				}
				t = s(t === undefined ? e.length - 1 : i(t), 0);
				return function ()
				{
					var n = arguments,
						i = -1,
						o = s(n.length - t, 0),
						a = Array(o);
					while(++i < o)
					{
						a[i] = n[t + i]
					}
					switch(t)
					{
					case 0:
						return e.call(this, a);
					case 1:
						return e.call(this, n[0], a);
					case 2:
						return e.call(this, n[0], n[1], a)
					}
					var c = Array(t + 1);
					i = -1;
					while(++i < t)
					{
						c[i] = n[i]
					}
					c[t] = a;
					return r(e, this, c)
				}
			}
			t.exports = a
		},
		{
			"./_apply": 40,
			"./toInteger": 72
		}
	],
	71: [
		function (e, t, n)
		{
			var r = e("./toNumber");
			var i = 1 / 0,
				o = 1.7976931348623157e308;

			function s(e)
			{
				if(!e)
				{
					return e === 0 ? e : 0
				}
				e = r(e);
				if(e === i || e === -i)
				{
					var t = e < 0 ? -1 : 1;
					return t * o
				}
				return e === e ? e : 0
			}
			t.exports = s
		},
		{
			"./toNumber": 73
		}
	],
	72: [
		function (e, t, n)
		{
			var r = e("./toFinite");

			function i(e)
			{
				var t = r(e),
					n = t % 1;
				return t === t ? n ? t - n : t : 0
			}
			t.exports = i
		},
		{
			"./toFinite": 71
		}
	],
	73: [
		function (e, t, n)
		{
			var r = e("./isFunction"),
				i = e("./isObject"),
				o = e("./isSymbol");
			var s = 0 / 0;
			var a = /^\s+|\s+$/g;
			var c = /^[-+]0x[0-9a-f]+$/i;
			var u = /^0b[01]+$/i;
			var l = /^0o[0-7]+$/i;
			var f = parseInt;

			function d(e)
			{
				if(typeof e == "number")
				{
					return e
				}
				if(o(e))
				{
					return s
				}
				if(i(e))
				{
					var t = r(e.valueOf) ? e.valueOf() : e;
					e = i(t) ? t + "" : t
				}
				if(typeof e != "string")
				{
					return e === 0 ? e : +e
				}
				e = e.replace(a, "");
				var n = u.test(e);
				return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : c.test(e) ? s : +e
			}
			t.exports = d
		},
		{
			"./isFunction": 63,
			"./isObject": 65,
			"./isSymbol": 68
		}
	]
},
{}, [1]);
//# sourceMappingURL=app.451.js.map
