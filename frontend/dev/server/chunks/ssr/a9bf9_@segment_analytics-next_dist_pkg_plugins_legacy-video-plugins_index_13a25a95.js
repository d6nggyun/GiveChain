module.exports = [
"[project]/node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadLegacyVideoPlugins",
    ()=>loadLegacyVideoPlugins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function loadLegacyVideoPlugins(analytics) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var plugins;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        __turbopack_context__.A("[project]/node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js [app-ssr] (ecmascript, async loader)")
                    ];
                case 1:
                    plugins = _a.sent();
                    // This is super gross, but we need to support the `window.analytics.plugins` namespace
                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic
                    // @ts-expect-error
                    analytics._plugins = plugins;
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
} //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=a9bf9_%40segment_analytics-next_dist_pkg_plugins_legacy-video-plugins_index_13a25a95.js.map