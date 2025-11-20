(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@segment/analytics-next/dist/pkg/plugins/remote-middleware/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "remoteMiddlewares",
    ()=>remoteMiddlewares
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$core$2f$environment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@segment/analytics-next/dist/pkg/core/environment/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$lib$2f$load$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@segment/analytics-next/dist/pkg/lib/load-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$lib$2f$parse$2d$cdn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@segment/analytics-next/dist/pkg/lib/parse-cdn.js [app-client] (ecmascript)");
;
;
;
;
function remoteMiddlewares(ctx, settings, obfuscate) {
    var _a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var path, remoteMiddleware, names, scripts, middleware;
        var _this = this;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$core$2f$environment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"])()) {
                        return [
                            2 /*return*/ ,
                            []
                        ];
                    }
                    path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$lib$2f$parse$2d$cdn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextIntegrationsURL"])();
                    remoteMiddleware = (_a = settings.enabledMiddleware) !== null && _a !== void 0 ? _a : {};
                    names = Object.entries(remoteMiddleware).filter(function(_a) {
                        var _ = _a[0], enabled = _a[1];
                        return enabled;
                    }).map(function(_a) {
                        var name = _a[0];
                        return name;
                    });
                    scripts = names.map(function(name) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                            var nonNamespaced, bundleName, fullPath, error_1;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                                switch(_a.label){
                                    case 0:
                                        nonNamespaced = name.replace('@segment/', '');
                                        bundleName = nonNamespaced;
                                        if (obfuscate) {
                                            bundleName = btoa(nonNamespaced).replace(/=/g, '');
                                        }
                                        fullPath = "".concat(path, "/middleware/").concat(bundleName, "/latest/").concat(bundleName, ".js.gz");
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([
                                            1,
                                            3,
                                            ,
                                            4
                                        ]);
                                        return [
                                            4 /*yield*/ ,
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$segment$2f$analytics$2d$next$2f$dist$2f$pkg$2f$lib$2f$load$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadScript"])(fullPath)
                                        ];
                                    case 2:
                                        _a.sent();
                                        // @ts-ignore
                                        return [
                                            2 /*return*/ ,
                                            window["".concat(nonNamespaced, "Middleware")]
                                        ];
                                    case 3:
                                        error_1 = _a.sent();
                                        ctx.log('error', error_1);
                                        ctx.stats.increment('failed_remote_middleware');
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 4:
                                        return [
                                            2 /*return*/ 
                                        ];
                                }
                            });
                        });
                    });
                    return [
                        4 /*yield*/ ,
                        Promise.all(scripts)
                    ];
                case 1:
                    middleware = _b.sent();
                    middleware = middleware.filter(Boolean);
                    return [
                        2 /*return*/ ,
                        middleware
                    ];
            }
        });
    });
} //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=a9bf9_%40segment_analytics-next_dist_pkg_plugins_remote-middleware_index_3a056f68.js.map