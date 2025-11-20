(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
;
;
 // Below here: specific monorepo-wide errors (examples and commented out)
 /*export enum UsageErrorType {
  UNSUPPORTED_FEATURE = 'unsupported feature',
}*

/**
 * Error along API Usage
 *
 * Use directly or in a subclassed context for error comparison (`e instanceof UsageError`)
 */  //export class UsageError extends EthereumJSError<{ code: UsageErrorType }> {}
 //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE
 */ __turbopack_context__.s([
    "arrayContainsArray",
    ()=>arrayContainsArray,
    "fromAscii",
    ()=>fromAscii,
    "fromUtf8",
    ()=>fromUtf8,
    "getBinarySize",
    ()=>getBinarySize,
    "getKeys",
    ()=>getKeys,
    "isHexString",
    ()=>isHexString,
    "padToEven",
    ()=>padToEven,
    "stripHexPrefix",
    ()=>stripHexPrefix,
    "toAscii",
    ()=>toAscii
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
;
;
function isHexString(value, length) {
    if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
    if (typeof length !== 'undefined' && length > 0 && value.length !== 2 + 2 * length) return false;
    return true;
}
const stripHexPrefix = (str)=>{
    if (typeof str !== 'string') throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
    return isHexString(str) ? str.slice(2) : str;
};
function padToEven(value) {
    let a = value;
    if (typeof a !== 'string') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[padToEven] value must be type 'string', received ${typeof a}`);
    }
    if (a.length % 2) a = `0${a}`;
    return a;
}
function getBinarySize(str) {
    if (typeof str !== 'string') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[getBinarySize] method requires input type 'string', received ${typeof str}`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(str).byteLength;
}
function arrayContainsArray(superset, subset, some) {
    if (Array.isArray(superset) !== true) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof superset}'`);
    }
    if (Array.isArray(subset) !== true) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof subset}'`);
    }
    return subset[some === true ? 'some' : 'every']((value)=>superset.indexOf(value) >= 0);
}
function toAscii(hex) {
    let str = '';
    let i = 0;
    const l = hex.length;
    if (hex.substring(0, 2) === '0x') i = 2;
    for(; i < l; i += 2){
        const code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }
    return str;
}
function fromUtf8(stringValue) {
    const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(stringValue);
    return `0x${padToEven((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUnprefixedHex"])(str)).replace(/^0+|0+$/g, '')}`;
}
function fromAscii(stringValue) {
    let hex = '';
    for(let i = 0; i < stringValue.length; i++){
        const code = stringValue.charCodeAt(i);
        const n = code.toString(16);
        hex += n.length < 2 ? `0${n}` : n;
    }
    return `0x${hex}`;
}
function getKeys(params, key, allowEmpty) {
    if (!Array.isArray(params)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[getKeys] method expects input 'params' to be an array, got ${typeof params}`);
    }
    if (typeof key !== 'string') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`[getKeys] method expects input 'key' to be type 'string', got ${typeof params}`);
    }
    const result = [];
    for(let i = 0; i < params.length; i++){
        let value = params[i][key];
        if (allowEmpty === true && !value) {
            value = '';
        } else if (typeof value !== 'string') {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`invalid abi - expected type 'string', received ${typeof value}`);
        }
        result.push(value);
    }
    return result;
} //# sourceMappingURL=internal.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsArray",
    ()=>assertIsArray,
    "assertIsBytes",
    ()=>assertIsBytes,
    "assertIsHexString",
    ()=>assertIsHexString,
    "assertIsString",
    ()=>assertIsString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)");
;
;
const assertIsHexString = function(input) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(input)) {
        const msg = `This method only supports 0x-prefixed hex strings but input was: ${input}`;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(msg);
    }
};
const assertIsBytes = function(input) {
    if (!(input instanceof Uint8Array)) {
        const msg = `This method only supports Uint8Array but input was: ${input}`;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(msg);
    }
};
const assertIsArray = function(input) {
    if (!Array.isArray(input)) {
        const msg = `This method only supports number arrays but input was: ${input}`;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(msg);
    }
};
const assertIsString = function(input) {
    if (typeof input !== 'string') {
        const msg = `This method only supports strings but input was: ${input}`;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(msg);
    }
}; //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHexPrefix",
    ()=>addHexPrefix,
    "bigInt64ToBytes",
    ()=>bigInt64ToBytes,
    "bigIntMax",
    ()=>bigIntMax,
    "bigIntMin",
    ()=>bigIntMin,
    "bigIntToAddressBytes",
    ()=>bigIntToAddressBytes,
    "bigIntToBytes",
    ()=>bigIntToBytes,
    "bigIntToHex",
    ()=>bigIntToHex,
    "bigIntToUnpaddedBytes",
    ()=>bigIntToUnpaddedBytes,
    "bitsToBytes",
    ()=>bitsToBytes,
    "bytesToBigInt",
    ()=>bytesToBigInt,
    "bytesToBigInt64",
    ()=>bytesToBigInt64,
    "bytesToBits",
    ()=>bytesToBits,
    "bytesToHex",
    ()=>bytesToHex,
    "bytesToInt",
    ()=>bytesToInt,
    "bytesToInt32",
    ()=>bytesToInt32,
    "bytesToUnprefixedHex",
    ()=>bytesToUnprefixedHex,
    "compareBytes",
    ()=>compareBytes,
    "concatBytes",
    ()=>concatBytes,
    "equalsBits",
    ()=>equalsBits,
    "fromSigned",
    ()=>fromSigned,
    "hexToBigInt",
    ()=>hexToBigInt,
    "hexToBytes",
    ()=>hexToBytes,
    "int32ToBytes",
    ()=>int32ToBytes,
    "intToBytes",
    ()=>intToBytes,
    "intToHex",
    ()=>intToHex,
    "intToUnpaddedBytes",
    ()=>intToUnpaddedBytes,
    "matchingBitsLength",
    ()=>matchingBitsLength,
    "matchingBytesLength",
    ()=>matchingBytesLength,
    "randomBytes",
    ()=>randomBytes,
    "setLengthLeft",
    ()=>setLengthLeft,
    "setLengthRight",
    ()=>setLengthRight,
    "short",
    ()=>short,
    "toBytes",
    ()=>toBytes,
    "toUnsigned",
    ()=>toUnsigned,
    "unpadArray",
    ()=>unpadArray,
    "unpadBytes",
    ()=>unpadBytes,
    "unpadHex",
    ()=>unpadHex,
    "unprefixedHexToBytes",
    ()=>unprefixedHexToBytes,
    "validateNoLeadingZeroes",
    ()=>validateNoLeadingZeroes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)");
;
;
;
;
;
const BIGINT_0 = BigInt(0);
const bytesToUnprefixedHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"];
const hexToBytes = (hex)=>{
    if (!hex.startsWith('0x')) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('input string must be 0x prefixed');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padToEven"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripHexPrefix"])(hex)));
};
const unprefixedHexToBytes = (hex)=>{
    if (hex.startsWith('0x')) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('input string cannot be 0x prefixed');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padToEven"])(hex));
};
const bytesToHex = (bytes)=>{
    const unprefixedHex = bytesToUnprefixedHex(bytes);
    return `0x${unprefixedHex}`;
};
// BigInt cache for the numbers 0 - 256*256-1 (two-byte bytes)
const BIGINT_CACHE = [];
for(let i = 0; i <= 256 * 256 - 1; i++){
    BIGINT_CACHE[i] = BigInt(i);
}
const bytesToBigInt = (bytes, littleEndian = false)=>{
    if (littleEndian) {
        bytes.reverse();
    }
    const hex = bytesToHex(bytes);
    if (hex === '0x') {
        return BIGINT_0;
    }
    if (hex.length === 4) {
        // If the byte length is 1 (this is faster than checking `bytes.length === 1`)
        return BIGINT_CACHE[bytes[0]];
    }
    if (hex.length === 6) {
        return BIGINT_CACHE[bytes[0] * 256 + bytes[1]];
    }
    return BigInt(hex);
};
const bytesToInt = (bytes)=>{
    const res = Number(bytesToBigInt(bytes));
    if (!Number.isSafeInteger(res)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Number exceeds 53 bits');
    return res;
};
const intToHex = (i)=>{
    if (!Number.isSafeInteger(i) || i < 0) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Received an invalid integer type: ${i}`);
    }
    return `0x${i.toString(16)}`;
};
const intToBytes = (i)=>{
    const hex = intToHex(i);
    return hexToBytes(hex);
};
const bigIntToBytes = (num, littleEndian = false)=>{
    const bytes = hexToBytes(`0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padToEven"])(num.toString(16))}`);
    return littleEndian ? bytes.reverse() : bytes;
};
/**
 * Pads a `Uint8Array` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param {Uint8Array} msg the value to pad
 * @param {number} length the number of bytes the output should be
 * @param {boolean} right whether to start padding form the left or right
 * @return {Uint8Array}
 */ const setLength = (msg, length, right)=>{
    if (right) {
        if (msg.length < length) {
            return new Uint8Array([
                ...msg,
                ...new Uint8Array(length - msg.length)
            ]);
        }
        return msg.subarray(0, length);
    } else {
        if (msg.length < length) {
            return new Uint8Array([
                ...new Uint8Array(length - msg.length),
                ...msg
            ]);
        }
        return msg.subarray(-length);
    }
};
const setLengthLeft = (msg, length)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(msg);
    return setLength(msg, length, false);
};
const setLengthRight = (msg, length)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(msg);
    return setLength(msg, length, true);
};
/**
 * Trims leading zeros from a `Uint8Array`, `number[]` or `string`.
 * @param {Uint8Array|number[]|string} a
 * @return {Uint8Array|number[]|string}
 */ const stripZeros = (a)=>{
    let first = a[0];
    while(a.length > 0 && first.toString() === '0'){
        a = a.slice(1);
        first = a[0];
    }
    return a;
};
const unpadBytes = (a)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(a);
    return stripZeros(a);
};
const unpadArray = (a)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(a);
    return stripZeros(a);
};
const unpadHex = (a)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsHexString"])(a);
    return `0x${stripZeros((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripHexPrefix"])(a))}`;
};
const toBytes = (v)=>{
    if (v === null || v === undefined) {
        return new Uint8Array();
    }
    if (Array.isArray(v) || v instanceof Uint8Array) {
        return Uint8Array.from(v);
    }
    if (typeof v === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(v)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Cannot convert string to Uint8Array. toBytes only supports 0x-prefixed hex strings and this string was given: ${v}`);
        }
        return hexToBytes(v);
    }
    if (typeof v === 'number') {
        return intToBytes(v);
    }
    if (typeof v === 'bigint') {
        if (v < BIGINT_0) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Cannot convert negative bigint to Uint8Array. Given: ${v}`);
        }
        let n = v.toString(16);
        if (n.length % 2) n = '0' + n;
        return unprefixedHexToBytes(n);
    }
    if (v.toBytes !== undefined) {
        // converts a `TransformableToBytes` object to a Uint8Array
        return v.toBytes();
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('invalid type');
};
const fromSigned = (num)=>{
    return BigInt.asIntN(256, bytesToBigInt(num));
};
const toUnsigned = (num)=>{
    return bigIntToBytes(BigInt.asUintN(256, num));
};
const addHexPrefix = (str)=>{
    if (typeof str !== 'string') {
        return str;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(str) ? str : `0x${str}`;
};
const short = (bytes, maxLength = 50)=>{
    const byteStr = bytes instanceof Uint8Array ? bytesToHex(bytes) : bytes;
    const len = byteStr.slice(0, 2) === '0x' ? maxLength + 2 : maxLength;
    if (byteStr.length <= len) {
        return byteStr;
    }
    return byteStr.slice(0, len) + '…';
};
const validateNoLeadingZeroes = (values)=>{
    for (const [k, v] of Object.entries(values)){
        if (v !== undefined && v.length > 0 && v[0] === 0) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`${k} cannot have leading zeroes, received: ${bytesToHex(v)}`);
        }
    }
};
const bigIntToHex = (num)=>{
    return `0x${num.toString(16)}`;
};
const bigIntMax = (...args)=>args.reduce((m, e)=>e > m ? e : m);
const bigIntMin = (...args)=>args.reduce((m, e)=>e < m ? e : m);
const bigIntToUnpaddedBytes = (value)=>{
    return unpadBytes(bigIntToBytes(value));
};
const bigIntToAddressBytes = (value, strict = true)=>{
    const addressBytes = bigIntToBytes(value);
    if (strict && addressBytes.length > 20) {
        throw Error(`Invalid address bytes length=${addressBytes.length} strict=${strict}`);
    }
    // setLength already slices if more than requisite length
    return setLengthLeft(addressBytes, 20);
};
const intToUnpaddedBytes = (value)=>{
    return unpadBytes(intToBytes(value));
};
const compareBytes = (value1, value2)=>{
    const bigIntValue1 = bytesToBigInt(value1);
    const bigIntValue2 = bytesToBigInt(value2);
    return bigIntValue1 > bigIntValue2 ? 1 : bigIntValue1 < bigIntValue2 ? -1 : 0;
};
const randomBytes = (length)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomBytesSync"])(length);
};
const concatBytes = (...arrays)=>{
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
};
function bytesToInt32(bytes, littleEndian = false) {
    if (bytes.length < 4) {
        bytes = setLength(bytes, 4, littleEndian);
    }
    const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return dataView.getUint32(0, littleEndian);
}
function bytesToBigInt64(bytes, littleEndian = false) {
    if (bytes.length < 8) {
        bytes = setLength(bytes, 8, littleEndian);
    }
    const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return dataView.getBigUint64(0, littleEndian);
}
function int32ToBytes(value, littleEndian = false) {
    const buffer = new ArrayBuffer(4);
    const dataView = new DataView(buffer);
    dataView.setUint32(0, value, littleEndian);
    return new Uint8Array(buffer);
}
function bigInt64ToBytes(value, littleEndian = false) {
    const buffer = new ArrayBuffer(8);
    const dataView = new DataView(buffer);
    dataView.setBigUint64(0, value, littleEndian);
    return new Uint8Array(buffer);
}
;
function hexToBigInt(input) {
    return bytesToBigInt(hexToBytes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(input) ? input : `0x${input}`));
}
function bytesToBits(bytes, bitLength) {
    const bits = [];
    for(let i = 0; i < (bitLength ?? bytes.length * 8); i++){
        const byteIndex = Math.floor(i / 8);
        const bitIndex = 7 - i % 8;
        bits.push(bytes[byteIndex] >> bitIndex & 1);
    }
    return bits;
}
function bitsToBytes(bits) {
    const numBytes = Math.ceil(bits.length / 8); // Ensure partial byte storage
    const byteData = new Uint8Array(numBytes);
    for(let i = 0; i < bits.length; i++){
        const byteIndex = Math.floor(i / 8);
        const bitIndex = 7 - i % 8;
        byteData[byteIndex] |= bits[i] << bitIndex;
    }
    return byteData;
}
function matchingBytesLength(bytes1, bytes2) {
    let count = 0;
    const minLength = Math.min(bytes1.length, bytes2.length);
    for(let i = 0; i < minLength; i++){
        if (bytes1[i] === bytes2[i]) {
            count++;
        } else {
            break;
        }
    }
    return count;
}
function matchingBitsLength(bits1, bits2) {
    let count = 0;
    const minLength = Math.min(bits1.length, bits2.length);
    for(let i = 0; i < minLength; i++){
        if (bits1[i] === bits2[i]) {
            count++;
        } else {
            return count;
        }
    }
    return count;
}
function equalsBits(bits1, bits2) {
    if (bits1.length !== bits2.length) {
        return false;
    }
    for(let i = 0; i < bits1.length; i++){
        if (bits1[i] !== bits2[i]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=bytes.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIGINT_0",
    ()=>BIGINT_0,
    "BIGINT_1",
    ()=>BIGINT_1,
    "BIGINT_100",
    ()=>BIGINT_100,
    "BIGINT_128",
    ()=>BIGINT_128,
    "BIGINT_160",
    ()=>BIGINT_160,
    "BIGINT_2",
    ()=>BIGINT_2,
    "BIGINT_224",
    ()=>BIGINT_224,
    "BIGINT_255",
    ()=>BIGINT_255,
    "BIGINT_256",
    ()=>BIGINT_256,
    "BIGINT_27",
    ()=>BIGINT_27,
    "BIGINT_28",
    ()=>BIGINT_28,
    "BIGINT_2EXP160",
    ()=>BIGINT_2EXP160,
    "BIGINT_2EXP224",
    ()=>BIGINT_2EXP224,
    "BIGINT_2EXP256",
    ()=>BIGINT_2EXP256,
    "BIGINT_2EXP96",
    ()=>BIGINT_2EXP96,
    "BIGINT_3",
    ()=>BIGINT_3,
    "BIGINT_31",
    ()=>BIGINT_31,
    "BIGINT_32",
    ()=>BIGINT_32,
    "BIGINT_64",
    ()=>BIGINT_64,
    "BIGINT_7",
    ()=>BIGINT_7,
    "BIGINT_8",
    ()=>BIGINT_8,
    "BIGINT_96",
    ()=>BIGINT_96,
    "BIGINT_NEG1",
    ()=>BIGINT_NEG1,
    "KECCAK256_NULL",
    ()=>KECCAK256_NULL,
    "KECCAK256_NULL_S",
    ()=>KECCAK256_NULL_S,
    "KECCAK256_RLP",
    ()=>KECCAK256_RLP,
    "KECCAK256_RLP_ARRAY",
    ()=>KECCAK256_RLP_ARRAY,
    "KECCAK256_RLP_ARRAY_S",
    ()=>KECCAK256_RLP_ARRAY_S,
    "KECCAK256_RLP_S",
    ()=>KECCAK256_RLP_S,
    "MAX_BLOCK_SIZE",
    ()=>MAX_BLOCK_SIZE,
    "MAX_INTEGER",
    ()=>MAX_INTEGER,
    "MAX_INTEGER_BIGINT",
    ()=>MAX_INTEGER_BIGINT,
    "MAX_RLP_BLOCK_SIZE",
    ()=>MAX_RLP_BLOCK_SIZE,
    "MAX_UINT64",
    ()=>MAX_UINT64,
    "MAX_WITHDRAWALS_PER_PAYLOAD",
    ()=>MAX_WITHDRAWALS_PER_PAYLOAD,
    "RIPEMD160_ADDRESS_STRING",
    ()=>RIPEMD160_ADDRESS_STRING,
    "RLP_EMPTY_STRING",
    ()=>RLP_EMPTY_STRING,
    "SAFETY_MARGIN",
    ()=>SAFETY_MARGIN,
    "SECP256K1_ORDER",
    ()=>SECP256K1_ORDER,
    "SECP256K1_ORDER_DIV_2",
    ()=>SECP256K1_ORDER_DIV_2,
    "SHA256_NULL",
    ()=>SHA256_NULL,
    "TWO_POW256",
    ()=>TWO_POW256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
;
;
;
const MAX_UINT64 = BigInt('0xffffffffffffffff');
const MAX_INTEGER = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
const MAX_INTEGER_BIGINT = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639935');
const SECP256K1_ORDER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].CURVE.n;
const SECP256K1_ORDER_DIV_2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].CURVE.n / BigInt(2);
const TWO_POW256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
const KECCAK256_NULL_S = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
const KECCAK256_NULL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(KECCAK256_NULL_S);
const KECCAK256_RLP_ARRAY_S = '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
const KECCAK256_RLP_ARRAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(KECCAK256_RLP_ARRAY_S);
const KECCAK256_RLP_S = '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
const KECCAK256_RLP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(KECCAK256_RLP_S);
const SHA256_NULL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(new Uint8Array());
const RLP_EMPTY_STRING = Uint8Array.from([
    0x80
]);
const MAX_WITHDRAWALS_PER_PAYLOAD = 16;
const RIPEMD160_ADDRESS_STRING = '0000000000000000000000000000000000000003';
const MAX_BLOCK_SIZE = 10485760; // 10 MiB
const SAFETY_MARGIN = 2097152; // 2 MiB
const MAX_RLP_BLOCK_SIZE = MAX_BLOCK_SIZE - SAFETY_MARGIN; // 8 MiB
const BIGINT_NEG1 = BigInt(-1);
const BIGINT_0 = BigInt(0);
const BIGINT_1 = BigInt(1);
const BIGINT_2 = BigInt(2);
const BIGINT_3 = BigInt(3);
const BIGINT_7 = BigInt(7);
const BIGINT_8 = BigInt(8);
const BIGINT_27 = BigInt(27);
const BIGINT_28 = BigInt(28);
const BIGINT_31 = BigInt(31);
const BIGINT_32 = BigInt(32);
const BIGINT_64 = BigInt(64);
const BIGINT_128 = BigInt(128);
const BIGINT_255 = BigInt(255);
const BIGINT_256 = BigInt(256);
const BIGINT_96 = BigInt(96);
const BIGINT_100 = BigInt(100);
const BIGINT_160 = BigInt(160);
const BIGINT_224 = BigInt(224);
const BIGINT_2EXP96 = BigInt(79228162514264337593543950336);
const BIGINT_2EXP160 = BigInt(1461501637330902918203684832716283019655932542976);
const BIGINT_2EXP224 = BigInt(26959946667150639794667015087019630673637144422540572481103610249216);
const BIGINT_2EXP256 = BIGINT_2 ** BIGINT_256; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/units.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ETHER_TO_WEI",
    ()=>ETHER_TO_WEI,
    "GWEI_TO_WEI",
    ()=>GWEI_TO_WEI,
    "Units",
    ()=>Units,
    "formatBigDecimal",
    ()=>formatBigDecimal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
;
;
const GWEI_TO_WEI = BigInt(10 ** 9); // Multiplier to convert from Gwei to Wei
const ETHER_TO_WEI = BigInt(10 ** 18); // Multiplier to convert from Ether to Wei
function formatBigDecimal(numerator, denominator, maxDecimalFactor) {
    if (denominator === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"]) {
        denominator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_1"];
    }
    const full = numerator / denominator;
    const fraction = (numerator - full * denominator) * maxDecimalFactor / denominator;
    // zeros to be added post decimal are number of zeros in maxDecimalFactor - number of digits in fraction
    const zerosPostDecimal = String(maxDecimalFactor).length - 1 - String(fraction).length;
    return `${full}.${'0'.repeat(zerosPostDecimal)}${fraction}`;
}
class Units {
    static validateInput(amount) {
        if (typeof amount === 'number' && !Number.isInteger(amount)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Input must be an integer number');
        }
        if (BigInt(amount) < 0) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Input must be a positive number');
        }
    }
    /**
     * Convert a number or bigint input of ether to wei
     *
     * @param {number | bigint} amount amount of units of ether to convert to wei
     * @returns {bigint} amount of units in wei
     */ static ether(amount) {
        Units.validateInput(amount);
        return BigInt(amount) * ETHER_TO_WEI;
    }
    /**
     * Convert a number or bigint input of gwei to wei
     *
     * @param amount amount of units of gwei to convert to wei
     * @returns {bigint} amount of units in wei
     */ static gwei(amount) {
        Units.validateInput(amount);
        return BigInt(amount) * GWEI_TO_WEI;
    }
} //# sourceMappingURL=units.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/account.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Account",
    ()=>Account,
    "accountBodyFromSlim",
    ()=>accountBodyFromSlim,
    "accountBodyToRLP",
    ()=>accountBodyToRLP,
    "accountBodyToSlim",
    ()=>accountBodyToSlim,
    "createAccount",
    ()=>createAccount,
    "createAccountFromBytesArray",
    ()=>createAccountFromBytesArray,
    "createAccountFromRLP",
    ()=>createAccountFromRLP,
    "createPartialAccount",
    ()=>createPartialAccount,
    "createPartialAccountFromRLP",
    ()=>createPartialAccountFromRLP,
    "generateAddress",
    ()=>generateAddress,
    "generateAddress2",
    ()=>generateAddress2,
    "importPublic",
    ()=>importPublic,
    "isValidAddress",
    ()=>isValidAddress,
    "isValidChecksumAddress",
    ()=>isValidChecksumAddress,
    "isValidPrivate",
    ()=>isValidPrivate,
    "isValidPublic",
    ()=>isValidPublic,
    "isZeroAddress",
    ()=>isZeroAddress,
    "privateToAddress",
    ()=>privateToAddress,
    "privateToPublic",
    ()=>privateToPublic,
    "pubToAddress",
    ()=>pubToAddress,
    "publicToAddress",
    ()=>publicToAddress,
    "toChecksumAddress",
    ()=>toChecksumAddress,
    "zeroAddress",
    ()=>zeroAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Handles the null indicator for RLP encoded accounts
 * @returns {null} is the null indicator is 0
 * @returns The unchanged value is the null indicator is 1
 * @throws if the null indicator is > 1
 * @throws if the length of values is < 2
 * @param value The value to convert
 * @returns The converted value
 */ function handleNullIndicator(values) {
    // Needed if some values are not provided to the array (e.g. partial account RLP)
    if (values[0] === undefined) {
        return null;
    }
    const nullIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])(values[0]);
    if (nullIndicator === 0) {
        return null;
    }
    if (nullIndicator > 1) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Invalid isNullIndicator=${nullIndicator}`);
    }
    if (values.length < 2) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Invalid values length=${values.length}`);
    }
    return values[1];
}
class Account {
    get version() {
        if (this._version !== null) {
            return this._version;
        } else {
            throw Error(`version=${this._version} not loaded`);
        }
    }
    set version(_version) {
        this._version = _version;
    }
    get nonce() {
        if (this._nonce !== null) {
            return this._nonce;
        } else {
            throw Error(`nonce=${this._nonce} not loaded`);
        }
    }
    set nonce(_nonce) {
        this._nonce = _nonce;
    }
    get balance() {
        if (this._balance !== null) {
            return this._balance;
        } else {
            throw Error(`balance=${this._balance} not loaded`);
        }
    }
    set balance(_balance) {
        this._balance = _balance;
    }
    get storageRoot() {
        if (this._storageRoot !== null) {
            return this._storageRoot;
        } else {
            throw Error(`storageRoot=${this._storageRoot} not loaded`);
        }
    }
    set storageRoot(_storageRoot) {
        this._storageRoot = _storageRoot;
    }
    get codeHash() {
        if (this._codeHash !== null) {
            return this._codeHash;
        } else {
            throw Error(`codeHash=${this._codeHash} not loaded`);
        }
    }
    set codeHash(_codeHash) {
        this._codeHash = _codeHash;
    }
    get codeSize() {
        if (this._codeSize !== null) {
            return this._codeSize;
        } else {
            throw Error(`codeSize=${this._codeSize} not loaded`);
        }
    }
    set codeSize(_codeSize) {
        this._codeSize = _codeSize;
    }
    /**
     * This constructor assigns and validates the values.
     * It is not recommended to use this constructor directly. Instead use the static
     * factory methods to assist in creating an Account from varying data types.
     * undefined get assigned with the defaults, but null args are retained as is
     * @deprecated
     */ constructor(nonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"], balance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"], storageRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_RLP"], codeHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"], codeSize = 0, version = 0){
        this._nonce = null;
        this._balance = null;
        this._storageRoot = null;
        this._codeHash = null;
        // codeSize and version is separately stored in VKT
        this._codeSize = null;
        this._version = null;
        this._nonce = nonce;
        this._balance = balance;
        this._storageRoot = storageRoot;
        this._codeHash = codeHash;
        if (codeSize === null && codeHash !== null && !this.isContract()) {
            codeSize = 0;
        }
        this._codeSize = codeSize;
        this._version = version;
        this._validate();
    }
    _validate() {
        if (this._nonce !== null && this._nonce < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"]) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('nonce must be greater than zero');
        }
        if (this._balance !== null && this._balance < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"]) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('balance must be greater than zero');
        }
        if (this._storageRoot !== null && this._storageRoot.length !== 32) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('storageRoot must have a length of 32');
        }
        if (this._codeHash !== null && this._codeHash.length !== 32) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('codeHash must have a length of 32');
        }
        if (this._codeSize !== null && this._codeSize < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"]) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('codeSize must be greater than zero');
        }
    }
    /**
     * Returns an array of Uint8Arrays of the raw bytes for the account, in order.
     */ raw() {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(this.nonce),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(this.balance),
            this.storageRoot,
            this.codeHash
        ];
    }
    /**
     * Returns the RLP serialization of the account as a `Uint8Array`.
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode(this.raw());
    }
    serializeWithPartialInfo() {
        const partialData = [];
        const zeroEncoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToUnpaddedBytes"])(0);
        const oneEncoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToUnpaddedBytes"])(1);
        if (this._nonce !== null) {
            partialData.push([
                oneEncoded,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(this._nonce)
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        if (this._balance !== null) {
            partialData.push([
                oneEncoded,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(this._balance)
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        if (this._storageRoot !== null) {
            partialData.push([
                oneEncoded,
                this._storageRoot
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        if (this._codeHash !== null) {
            partialData.push([
                oneEncoded,
                this._codeHash
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        if (this._codeSize !== null) {
            partialData.push([
                oneEncoded,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToUnpaddedBytes"])(this._codeSize)
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        if (this._version !== null) {
            partialData.push([
                oneEncoded,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToUnpaddedBytes"])(this._version)
            ]);
        } else {
            partialData.push([
                zeroEncoded
            ]);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode(partialData);
    }
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */ isContract() {
        if (this._codeHash === null && this._codeSize === null) {
            throw Error(`Insufficient data as codeHash=null and codeSize=null`);
        }
        return this._codeHash !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(this._codeHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"]) || this._codeSize !== null && this._codeSize !== 0;
    }
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */ isEmpty() {
        // helpful for determination in partial accounts
        if (this._balance !== null && this.balance !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || this._nonce === null && this.nonce !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || this._codeHash !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(this.codeHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"])) {
            return false;
        }
        return this.balance === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] && this.nonce === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(this.codeHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"]);
    }
}
function createAccount(accountData) {
    const { nonce, balance, storageRoot, codeHash } = accountData;
    if (nonce === null || balance === null || storageRoot === null || codeHash === null) {
        throw Error(`Partial fields not supported in fromAccountData`);
    }
    return new Account(nonce !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(nonce)) : undefined, balance !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(balance)) : undefined, storageRoot !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(storageRoot) : undefined, codeHash !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(codeHash) : undefined);
}
function createAccountFromBytesArray(values) {
    const [nonce, balance, storageRoot, codeHash] = values;
    return new Account((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(nonce), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(balance), storageRoot, codeHash);
}
function createPartialAccount(partialAccountData) {
    const { nonce, balance, storageRoot, codeHash, codeSize, version } = partialAccountData;
    if (nonce === null && balance === null && storageRoot === null && codeHash === null && codeSize === null && version === null) {
        throw Error(`All partial fields null`);
    }
    return new Account(nonce !== undefined && nonce !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(nonce)) : nonce, balance !== undefined && balance !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(balance)) : balance, storageRoot !== undefined && storageRoot !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(storageRoot) : storageRoot, codeHash !== undefined && codeHash !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(codeHash) : codeHash, codeSize !== undefined && codeSize !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(codeSize)) : codeSize, version !== undefined && version !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(version)) : version);
}
function createAccountFromRLP(serialized) {
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].decode(serialized);
    if (!Array.isArray(values)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid serialized account input. Must be array');
    }
    return createAccountFromBytesArray(values);
}
function createPartialAccountFromRLP(serialized) {
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].decode(serialized);
    if (!Array.isArray(values)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid serialized account input. Must be array');
    }
    for (const value of values){
        // Ensure that each array item is an array
        if (!Array.isArray(value)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid partial encoding. Each item must be an array');
        }
    }
    const [nonceRaw, balanceRaw, storageRoot, codeHash, codeSizeRaw, versionRaw] = values.map(handleNullIndicator);
    const nonce = nonceRaw === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(nonceRaw);
    const balance = balanceRaw === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(balanceRaw);
    const codeSize = codeSizeRaw === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])(codeSizeRaw);
    const version = versionRaw === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])(versionRaw);
    return createPartialAccount({
        balance,
        nonce,
        storageRoot,
        codeHash,
        codeSize,
        version
    });
}
const isValidAddress = function(hexAddress) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(hexAddress);
    } catch  {
        return false;
    }
    return /^0x[0-9a-fA-F]{40}$/.test(hexAddress);
};
const toChecksumAddress = function(hexAddress, eip1191ChainId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsHexString"])(hexAddress);
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripHexPrefix"])(hexAddress).toLowerCase();
    let prefix = '';
    if (eip1191ChainId !== undefined) {
        const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(eip1191ChainId));
        prefix = chainId.toString() + '0x';
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(prefix + address);
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(bytes)).slice(2);
    let ret = '';
    for(let i = 0; i < address.length; i++){
        if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
        } else {
            ret += address[i];
        }
    }
    return `0x${ret}`;
};
const isValidChecksumAddress = function(hexAddress, eip1191ChainId) {
    return isValidAddress(hexAddress) && toChecksumAddress(hexAddress, eip1191ChainId) === hexAddress;
};
const generateAddress = function(from, nonce) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(from);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(nonce) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"]) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode([
            from,
            Uint8Array.from([])
        ])).subarray(-20);
    }
    // Only take the lower 160bits of the hash
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode([
        from,
        nonce
    ])).subarray(-20);
};
const generateAddress2 = function(from, salt, initCode) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(from);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(salt);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(initCode);
    if (from.length !== 20) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected from to be of length 20');
    }
    if (salt.length !== 32) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected salt to be of length 32');
    }
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])('0xff'), from, salt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(initCode)));
    return address.subarray(-20);
};
const isValidPrivate = function(privateKey) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].utils.isValidPrivateKey(privateKey);
};
const isValidPublic = function(publicKey, sanitize = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(publicKey);
    if (publicKey.length === 64) {
        // Convert to SEC1 for secp256k1
        // Automatically checks whether point is on curve
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(Uint8Array.from([
                4
            ]), publicKey));
            return true;
        } catch  {
            return false;
        }
    }
    if (!sanitize) {
        return false;
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(publicKey);
        return true;
    } catch  {
        return false;
    }
};
const pubToAddress = function(pubKey, sanitize = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(pubKey).toRawBytes(false).slice(1);
    }
    if (pubKey.length !== 64) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected pubKey to be of length 64');
    }
    // Only take the lower 160bits of the hash
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(pubKey).subarray(-20);
};
const publicToAddress = pubToAddress;
const privateToPublic = function(privateKey) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(privateKey);
    // skip the type flag and use the X, Y points
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(false).slice(1);
};
const privateToAddress = function(privateKey) {
    return publicToAddress(privateToPublic(privateKey));
};
const importPublic = function(publicKey) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(publicKey);
    if (publicKey.length !== 64) {
        publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(publicKey).toRawBytes(false).slice(1);
    }
    return publicKey;
};
const zeroAddress = function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(new Uint8Array(20));
};
const isZeroAddress = function(hexAddress) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(hexAddress);
    } catch  {
        return false;
    }
    const zeroAddr = zeroAddress();
    return zeroAddr === hexAddress;
};
function accountBodyFromSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        storageRoot.length === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_RLP"] : storageRoot,
        codeHash.length === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"] : codeHash
    ];
}
const emptyUint8Arr = new Uint8Array(0);
function accountBodyToSlim(body) {
    const [nonce, balance, storageRoot, codeHash] = body;
    return [
        nonce,
        balance,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(storageRoot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_RLP"]) ? emptyUint8Arr : storageRoot,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(codeHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KECCAK256_NULL"]) ? emptyUint8Arr : codeHash
    ];
}
function accountBodyToRLP(body, couldBeSlim = true) {
    const accountBody = couldBeSlim ? accountBodyFromSlim(body) : body;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode(accountBody);
} //# sourceMappingURL=account.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Address",
    ()=>Address,
    "createAddressFromBigInt",
    ()=>createAddressFromBigInt,
    "createAddressFromPrivateKey",
    ()=>createAddressFromPrivateKey,
    "createAddressFromPublicKey",
    ()=>createAddressFromPublicKey,
    "createAddressFromString",
    ()=>createAddressFromString,
    "createContractAddress",
    ()=>createContractAddress,
    "createContractAddress2",
    ()=>createContractAddress2,
    "createZeroAddress",
    ()=>createZeroAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
;
;
;
;
class Address {
    constructor(bytes){
        if (bytes.length !== 20) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid address length');
        }
        this.bytes = bytes;
    }
    /**
     * Is address equal to another.
     */ equals(address) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"])(this.bytes, address.bytes);
    }
    /**
     * Is address zero.
     */ isZero() {
        return this.equals(new Address(new Uint8Array(20)));
    }
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */ isPrecompileOrSystemAddress() {
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(this.bytes);
        const rangeMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"];
        const rangeMax = BigInt('0xffff');
        return address >= rangeMin && address <= rangeMax;
    }
    /**
     * Returns hex encoding of address.
     */ toString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(this.bytes);
    }
    /**
     * Returns a new Uint8Array representation of address.
     */ toBytes() {
        return new Uint8Array(this.bytes);
    }
}
function createZeroAddress() {
    return new Address(new Uint8Array(20));
}
function createAddressFromBigInt(value) {
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(value);
    if (bytes.length > 20) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Invalid address, too long: ${bytes.length}`);
    }
    return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(bytes, 20));
}
function createAddressFromString(str) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidAddress"])(str)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`Invalid address input=${str}`);
    }
    return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(str));
}
function createAddressFromPublicKey(pubKey) {
    if (!(pubKey instanceof Uint8Array)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Public key should be Uint8Array');
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pubToAddress"])(pubKey);
    return new Address(bytes);
}
function createAddressFromPrivateKey(privateKey) {
    if (!(privateKey instanceof Uint8Array)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Private key should be Uint8Array');
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateToAddress"])(privateKey);
    return new Address(bytes);
}
function createContractAddress(from, nonce) {
    if (typeof nonce !== 'bigint') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected nonce to be a bigint');
    }
    return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAddress"])(from.bytes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(nonce)));
}
function createContractAddress2(from, salt, initCode) {
    if (!(salt instanceof Uint8Array)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected salt to be a Uint8Array');
    }
    if (!(initCode instanceof Uint8Array)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Expected initCode to be a Uint8Array');
    }
    return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAddress2"])(from.bytes, salt, initCode));
} //# sourceMappingURL=address.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/db.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyEncoding",
    ()=>KeyEncoding,
    "ValueEncoding",
    ()=>ValueEncoding
]);
const KeyEncoding = {
    String: 'string',
    Bytes: 'view',
    Number: 'number'
};
const ValueEncoding = {
    String: 'string',
    Bytes: 'view',
    JSON: 'json'
}; //# sourceMappingURL=db.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeOutput",
    ()=>TypeOutput,
    "isEOACode7702AuthorizationList",
    ()=>isEOACode7702AuthorizationList,
    "isEOACode7702AuthorizationListBytes",
    ()=>isEOACode7702AuthorizationListBytes,
    "isNestedUint8Array",
    ()=>isNestedUint8Array,
    "toType",
    ()=>toType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)");
;
;
;
function isNestedUint8Array(value) {
    if (!Array.isArray(value)) {
        return false;
    }
    for (const item of value){
        if (Array.isArray(item)) {
            if (!isNestedUint8Array(item)) {
                return false;
            }
        } else if (!(item instanceof Uint8Array)) {
            return false;
        }
    }
    return true;
}
const TypeOutput = {
    Number: 0,
    BigInt: 1,
    Uint8Array: 2,
    PrefixedHexString: 3
};
function toType(input, outputType) {
    if (input === null) {
        return null;
    }
    if (input === undefined) {
        return undefined;
    }
    if (typeof input === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(input)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`A string must be provided with a 0x-prefix, given: ${input}`);
    } else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(input);
    switch(outputType){
        case TypeOutput.Uint8Array:
            return output;
        case TypeOutput.BigInt:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(output);
        case TypeOutput.Number:
            {
                const bigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(output);
                if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
                }
                return Number(bigInt);
            }
        case TypeOutput.PrefixedHexString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(output);
        default:
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('unknown outputType');
    }
}
function isEOACode7702AuthorizationListBytes(input) {
    if (input.length === 0) {
        return true;
    }
    const firstItem = input[0];
    if (Array.isArray(firstItem)) {
        return true;
    }
    return false;
}
function isEOACode7702AuthorizationList(input) {
    return !isEOACode7702AuthorizationListBytes(input); // This is exactly the same method, except the output is negated.
} //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/withdrawal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Withdrawal",
    ()=>Withdrawal,
    "createWithdrawal",
    ()=>createWithdrawal,
    "createWithdrawalFromBytesArray",
    ()=>createWithdrawalFromBytesArray,
    "withdrawalToBytesArray",
    ()=>withdrawalToBytesArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/types.js [app-client] (ecmascript)");
;
;
;
;
function withdrawalToBytesArray(withdrawal) {
    const { index, validatorIndex, address, amount } = withdrawal;
    const indexBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] ? new Uint8Array() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Uint8Array);
    const validatorIndexBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(validatorIndex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] ? new Uint8Array() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(validatorIndex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Uint8Array);
    const addressBytes = address instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"] ? address.bytes : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(address, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Uint8Array);
    const amountBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(amount, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] ? new Uint8Array() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(amount, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Uint8Array);
    return [
        indexBytes,
        validatorIndexBytes,
        addressBytes,
        amountBytes
    ];
}
class Withdrawal {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating a Withdrawal object from varying data types.
     * Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot
     */ constructor(index, validatorIndex, address, amount){
        this.index = index;
        this.validatorIndex = validatorIndex;
        this.address = address;
        this.amount = amount;
    }
    raw() {
        return withdrawalToBytesArray(this);
    }
    toValue() {
        return {
            index: this.index,
            validatorIndex: this.validatorIndex,
            address: this.address.bytes,
            amount: this.amount
        };
    }
    toJSON() {
        return {
            index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToHex"])(this.index),
            validatorIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToHex"])(this.validatorIndex),
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(this.address.bytes),
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToHex"])(this.amount)
        };
    }
}
function createWithdrawal(withdrawalData) {
    const { index: indexData, validatorIndex: validatorIndexData, address: addressData, amount: amountData } = withdrawalData;
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(indexData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
    const validatorIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(validatorIndexData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
    const address = addressData instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"] ? addressData : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"])(addressData));
    const amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(amountData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
    return new Withdrawal(index, validatorIndex, address, amount);
}
function createWithdrawalFromBytesArray(withdrawalArray) {
    if (withdrawalArray.length !== 4) {
        throw Error(`Invalid withdrawalArray length expected=4 actual=${withdrawalArray.length}`);
    }
    const [index, validatorIndex, address, amount] = withdrawalArray;
    return createWithdrawal({
        index,
        validatorIndex,
        address,
        amount
    });
} //# sourceMappingURL=withdrawal.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/signature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateSigRecovery",
    ()=>calculateSigRecovery,
    "ecrecover",
    ()=>ecrecover,
    "fromRPCSig",
    ()=>fromRPCSig,
    "hashPersonalMessage",
    ()=>hashPersonalMessage,
    "isValidSignature",
    ()=>isValidSignature,
    "toCompactSig",
    ()=>toCompactSig,
    "toRPCSig",
    ()=>toRPCSig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/helpers.js [app-client] (ecmascript)");
;
;
;
;
;
;
function calculateSigRecovery(v, chainId) {
    if (v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_1"]) return v;
    if (chainId === undefined) {
        return v - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_27"];
    }
    return v - (chainId * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_2"] + BigInt(35));
}
function isValidSigRecovery(recovery) {
    return recovery === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || recovery === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_1"];
}
const ecrecover = function(msgHash, v, r, s, chainId) {
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(r, 32), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(s, 32));
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid signature v value');
    }
    const sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature.fromCompact(signature).addRecoveryBit(Number(recovery));
    const senderPubKey = sig.recoverPublicKey(msgHash);
    return senderPubKey.toRawBytes(false).slice(1);
};
const toRPCSig = function(v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(r, 32), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(s, 32), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(v)));
};
const toCompactSig = function(v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid signature v value');
    }
    const ss = Uint8Array.from([
        ...s
    ]);
    if (v > BigInt(28) && v % __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_2"] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_1"] || v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_1"] || v === BigInt(28)) {
        ss[0] |= 0x80;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(r, 32), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(ss, 32)));
};
const fromRPCSig = function(sig) {
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(sig);
    let r;
    let s;
    let v;
    if (bytes.length >= 65) {
        r = bytes.subarray(0, 32);
        s = bytes.subarray(32, 64);
        v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(bytes.subarray(64));
    } else if (bytes.length === 64) {
        // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
        r = bytes.subarray(0, 32);
        s = bytes.subarray(32, 64);
        v = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"])(bytes.subarray(32, 33)) >> 7);
        s[0] &= 0x7f;
    } else {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Invalid signature length');
    }
    // support both versions of `eth_sign` responses
    if (v < 27) {
        // TODO: verify this behavior, and verify in which context this method (`fromRPCSig`) is used
        v = v + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_27"];
    }
    return {
        v,
        r,
        s
    };
};
const isValidSignature = function(v, r, s, homesteadOrLater = true, chainId) {
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    const rBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(r);
    const sBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(s);
    if (rBigInt === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || rBigInt >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECP256K1_ORDER"] || sBigInt === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_0"] || sBigInt >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECP256K1_ORDER"]) {
        return false;
    }
    if (homesteadOrLater && sBigInt >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECP256K1_ORDER_DIV_2"]) {
        return false;
    }
    return true;
};
const hashPersonalMessage = function(message) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes"])(message);
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(`\u0019Ethereum Signed Message:\n${message.length}`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(prefix, message));
}; //# sourceMappingURL=signature.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/authorization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility helpers to convert authorization lists from the byte format and JSON format and vice versa
__turbopack_context__.s([
    "EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC",
    ()=>EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC,
    "eoaCode7702AuthorizationHashedMessageToSign",
    ()=>eoaCode7702AuthorizationHashedMessageToSign,
    "eoaCode7702AuthorizationListBytesItemToJSON",
    ()=>eoaCode7702AuthorizationListBytesItemToJSON,
    "eoaCode7702AuthorizationListJSONItemToBytes",
    ()=>eoaCode7702AuthorizationListJSONItemToBytes,
    "eoaCode7702AuthorizationMessageToSign",
    ()=>eoaCode7702AuthorizationMessageToSign,
    "eoaCode7702RecoverAuthority",
    ()=>eoaCode7702RecoverAuthority,
    "eoaCode7702SignAuthorization",
    ()=>eoaCode7702SignAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/signature.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])('0x05');
function eoaCode7702AuthorizationListBytesItemToJSON(authorizationList) {
    const [chainId, address, nonce, yParity, r, s] = authorizationList;
    return {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(chainId),
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(address),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(nonce),
        yParity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(yParity),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(r),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(s)
    };
}
function eoaCode7702AuthorizationListJSONItemToBytes(authorizationList) {
    const requiredFields = [
        'chainId',
        'address',
        'nonce',
        'yParity',
        'r',
        's'
    ];
    // Validate all required fields are present
    for (const field of requiredFields){
        if (authorizationList[field] === undefined) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`EIP-7702 authorization list invalid: ${field} is not defined`);
        }
    }
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.chainId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.address),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.nonce),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.yParity),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.r),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(authorizationList.s)
    ];
}
/** Authorization signing utility methods */ function unsignedAuthorizationListToBytes(input) {
    const { chainId: chainIdHex, address: addressHex, nonce: nonceHex } = input;
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(chainIdHex);
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(addressHex), 20);
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(nonceHex);
    return [
        chainId,
        address,
        nonce
    ];
}
function eoaCode7702AuthorizationMessageToSign(input) {
    if (Array.isArray(input)) {
        // The address is validated, the chainId and nonce will be `unpadBytes` such that these are valid
        const [chainId, address, nonce] = input;
        if (address.length !== 20) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Cannot sign authority: address length should be 20 bytes');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpadBytes"])(chainId),
            address,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpadBytes"])(nonce)
        ]));
    } else {
        const [chainId, address, nonce] = unsignedAuthorizationListToBytes(input);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RLP"].encode([
            chainId,
            address,
            nonce
        ]));
    }
}
function eoaCode7702AuthorizationHashedMessageToSign(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(eoaCode7702AuthorizationMessageToSign(input));
}
function eoaCode7702SignAuthorization(input, privateKey, ecSign) {
    const msgHash = eoaCode7702AuthorizationHashedMessageToSign(input);
    const secp256k1Sign = ecSign ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].sign;
    const signed = secp256k1Sign(msgHash, privateKey);
    const [chainId, address, nonce] = Array.isArray(input) ? input : unsignedAuthorizationListToBytes(input);
    return [
        chainId,
        address,
        nonce,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(BigInt(signed.recovery)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(signed.r),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"])(signed.s)
    ];
}
function eoaCode7702RecoverAuthority(input) {
    const inputBytes = Array.isArray(input) ? input : eoaCode7702AuthorizationListJSONItemToBytes(input);
    const [chainId, address, nonce, yParity, r, s] = inputBytes;
    const msgHash = eoaCode7702AuthorizationHashedMessageToSign([
        chainId,
        address,
        nonce
    ]);
    const pubKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ecrecover"])(msgHash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(yParity), r, s);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicToAddress"])(pubKey));
} //# sourceMappingURL=authorization.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/binaryTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BINARY_TREE_BALANCE_BYTES_LENGTH",
    ()=>BINARY_TREE_BALANCE_BYTES_LENGTH,
    "BINARY_TREE_BALANCE_OFFSET",
    ()=>BINARY_TREE_BALANCE_OFFSET,
    "BINARY_TREE_BASIC_DATA_LEAF_KEY",
    ()=>BINARY_TREE_BASIC_DATA_LEAF_KEY,
    "BINARY_TREE_CODE_CHUNK_SIZE",
    ()=>BINARY_TREE_CODE_CHUNK_SIZE,
    "BINARY_TREE_CODE_HASH_LEAF_KEY",
    ()=>BINARY_TREE_CODE_HASH_LEAF_KEY,
    "BINARY_TREE_CODE_OFFSET",
    ()=>BINARY_TREE_CODE_OFFSET,
    "BINARY_TREE_CODE_SIZE_BYTES_LENGTH",
    ()=>BINARY_TREE_CODE_SIZE_BYTES_LENGTH,
    "BINARY_TREE_CODE_SIZE_OFFSET",
    ()=>BINARY_TREE_CODE_SIZE_OFFSET,
    "BINARY_TREE_HEADER_STORAGE_OFFSET",
    ()=>BINARY_TREE_HEADER_STORAGE_OFFSET,
    "BINARY_TREE_MAIN_STORAGE_OFFSET",
    ()=>BINARY_TREE_MAIN_STORAGE_OFFSET,
    "BINARY_TREE_NODE_WIDTH",
    ()=>BINARY_TREE_NODE_WIDTH,
    "BINARY_TREE_NONCE_BYTES_LENGTH",
    ()=>BINARY_TREE_NONCE_BYTES_LENGTH,
    "BINARY_TREE_NONCE_OFFSET",
    ()=>BINARY_TREE_NONCE_OFFSET,
    "BINARY_TREE_VERSION_BYTES_LENGTH",
    ()=>BINARY_TREE_VERSION_BYTES_LENGTH,
    "BINARY_TREE_VERSION_OFFSET",
    ()=>BINARY_TREE_VERSION_OFFSET,
    "BinaryTreeLeafType",
    ()=>BinaryTreeLeafType,
    "chunkifyBinaryTreeCode",
    ()=>chunkifyBinaryTreeCode,
    "decodeBinaryTreeLeafBasicData",
    ()=>decodeBinaryTreeLeafBasicData,
    "encodeBinaryTreeLeafBasicData",
    ()=>encodeBinaryTreeLeafBasicData,
    "generateBinaryTreeChunkSuffixes",
    ()=>generateBinaryTreeChunkSuffixes,
    "generateBinaryTreeCodeStems",
    ()=>generateBinaryTreeCodeStems,
    "getBinaryTreeIndicesForCodeChunk",
    ()=>getBinaryTreeIndicesForCodeChunk,
    "getBinaryTreeIndicesForStorageSlot",
    ()=>getBinaryTreeIndicesForStorageSlot,
    "getBinaryTreeKey",
    ()=>getBinaryTreeKey,
    "getBinaryTreeKeyForCodeChunk",
    ()=>getBinaryTreeKeyForCodeChunk,
    "getBinaryTreeKeyForStorageSlot",
    ()=>getBinaryTreeKeyForStorageSlot,
    "getBinaryTreeStem",
    ()=>getBinaryTreeStem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
;
function getBinaryTreeStem(hashFunction, address, treeIndex = 0) {
    const address32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])(address.toBytes(), 32);
    let treeIndexBytes;
    if (typeof treeIndex === 'number') {
        treeIndexBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["int32ToBytes"])(Number(treeIndex), true), 32);
    } else {
        treeIndexBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(BigInt(treeIndex), true).slice(0, 32), 32);
    }
    const treeStem = hashFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(address32, treeIndexBytes)).slice(0, 31);
    return treeStem;
}
const BinaryTreeLeafType = {
    BasicData: 0,
    CodeHash: 1
};
const BINARY_TREE_VERSION_OFFSET = 0;
const BINARY_TREE_CODE_SIZE_OFFSET = 5;
const BINARY_TREE_NONCE_OFFSET = 8;
const BINARY_TREE_BALANCE_OFFSET = 16;
const BINARY_TREE_VERSION_BYTES_LENGTH = 1;
const BINARY_TREE_CODE_SIZE_BYTES_LENGTH = 3;
const BINARY_TREE_NONCE_BYTES_LENGTH = 8;
const BINARY_TREE_BALANCE_BYTES_LENGTH = 16;
const BINARY_TREE_BASIC_DATA_LEAF_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToBytes"])(BinaryTreeLeafType.BasicData);
const BINARY_TREE_CODE_HASH_LEAF_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToBytes"])(BinaryTreeLeafType.CodeHash);
const BINARY_TREE_CODE_CHUNK_SIZE = 31;
const BINARY_TREE_HEADER_STORAGE_OFFSET = 64;
const BINARY_TREE_CODE_OFFSET = 128;
const BINARY_TREE_NODE_WIDTH = 256;
const BINARY_TREE_MAIN_STORAGE_OFFSET = BigInt(256) ** BigInt(BINARY_TREE_CODE_CHUNK_SIZE);
const getBinaryTreeKey = (stem, leaf)=>{
    switch(leaf){
        case BinaryTreeLeafType.BasicData:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(stem, BINARY_TREE_BASIC_DATA_LEAF_KEY);
        case BinaryTreeLeafType.CodeHash:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(stem, BINARY_TREE_CODE_HASH_LEAF_KEY);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(stem, leaf);
    }
};
function getBinaryTreeIndicesForStorageSlot(storageKey) {
    let position;
    if (storageKey < BINARY_TREE_CODE_OFFSET - BINARY_TREE_HEADER_STORAGE_OFFSET) {
        position = BigInt(BINARY_TREE_HEADER_STORAGE_OFFSET) + storageKey;
    } else {
        position = BINARY_TREE_MAIN_STORAGE_OFFSET + storageKey;
    }
    const treeIndex = position / BigInt(BINARY_TREE_NODE_WIDTH);
    const subIndex = Number(position % BigInt(BINARY_TREE_NODE_WIDTH));
    return {
        treeIndex,
        subIndex
    };
}
function getBinaryTreeIndicesForCodeChunk(chunkId) {
    const treeIndex = Math.floor((BINARY_TREE_CODE_OFFSET + chunkId) / BINARY_TREE_NODE_WIDTH);
    const subIndex = (BINARY_TREE_CODE_OFFSET + chunkId) % BINARY_TREE_NODE_WIDTH;
    return {
        treeIndex,
        subIndex
    };
}
const getBinaryTreeKeyForCodeChunk = (address, chunkId, hashFunction)=>{
    const { treeIndex, subIndex } = getBinaryTreeIndicesForCodeChunk(chunkId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(getBinaryTreeStem(hashFunction, address, treeIndex), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToBytes"])(subIndex));
};
const chunkifyBinaryTreeCode = (code)=>{
    const PUSH1 = 0x60; // Assuming PUSH1 is defined as 0x60
    const PUSH32 = 0x7f; // Assuming PUSH32 is defined as 0x7f
    const PUSH_OFFSET = 0x5f; // Assuming PUSH_OFFSET is defined as 0x5f
    // Calculate padding length
    const paddingLength = (31 - code.length % 31) % 31;
    const paddedCode = new Uint8Array(code.length + paddingLength);
    paddedCode.set(code);
    // Pre-allocate the bytesToExecData array
    const bytesToExecData = new Uint8Array(paddedCode.length + 32);
    let pos = 0;
    while(pos < paddedCode.length){
        let pushdataBytes = 0;
        if (PUSH1 <= paddedCode[pos] && paddedCode[pos] <= PUSH32) {
            pushdataBytes = paddedCode[pos] - PUSH_OFFSET;
        }
        pos += 1;
        for(let x = 0; x < pushdataBytes; x++){
            bytesToExecData[pos + x] = pushdataBytes - x;
        }
        pos += pushdataBytes;
    }
    // Pre-allocate the chunks array
    const numChunks = Math.ceil(paddedCode.length / 31);
    const chunks = new Array(numChunks);
    for(let i = 0, pos = 0; i < numChunks; i++, pos += 31){
        const chunk = new Uint8Array(32);
        chunk[0] = Math.min(bytesToExecData[pos], 31);
        chunk.set(paddedCode.subarray(pos, pos + 31), 1);
        chunks[i] = chunk;
    }
    return chunks;
};
const getBinaryTreeKeyForStorageSlot = (address, storageKey, hashFunction)=>{
    const { treeIndex, subIndex } = getBinaryTreeIndicesForStorageSlot(storageKey);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(getBinaryTreeStem(hashFunction, address, treeIndex), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToBytes"])(subIndex));
};
function decodeBinaryTreeLeafBasicData(encodedBasicData) {
    const versionBytes = encodedBasicData.slice(0, BINARY_TREE_VERSION_BYTES_LENGTH);
    const nonceBytes = encodedBasicData.slice(BINARY_TREE_NONCE_OFFSET, BINARY_TREE_NONCE_OFFSET + BINARY_TREE_NONCE_BYTES_LENGTH);
    const codeSizeBytes = encodedBasicData.slice(BINARY_TREE_CODE_SIZE_OFFSET, BINARY_TREE_CODE_SIZE_OFFSET + BINARY_TREE_CODE_SIZE_BYTES_LENGTH);
    const balanceBytes = encodedBasicData.slice(BINARY_TREE_BALANCE_OFFSET, BINARY_TREE_BALANCE_OFFSET + BINARY_TREE_BALANCE_BYTES_LENGTH);
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt32"])(versionBytes);
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(nonceBytes);
    const codeSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt32"])(codeSizeBytes);
    const balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"])(balanceBytes);
    return {
        version,
        nonce,
        codeSize,
        balance
    };
}
function encodeBinaryTreeLeafBasicData(account) {
    const encodedVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["int32ToBytes"])(account.version), BINARY_TREE_VERSION_BYTES_LENGTH);
    // Per EIP-7864, bytes 1-4 are reserved for future use
    const reservedBytes = new Uint8Array([
        0,
        0,
        0,
        0
    ]);
    const encodedNonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(account.nonce), BINARY_TREE_NONCE_BYTES_LENGTH);
    const encodedCodeSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["int32ToBytes"])(account.codeSize), BINARY_TREE_CODE_SIZE_BYTES_LENGTH);
    const encodedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"])(account.balance), BINARY_TREE_BALANCE_BYTES_LENGTH);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(encodedVersion, reservedBytes, encodedCodeSize, encodedNonce, encodedBalance);
}
const generateBinaryTreeChunkSuffixes = (numChunks)=>{
    if (numChunks === 0) return [];
    const chunkSuffixes = new Array(numChunks);
    let currentSuffix = BINARY_TREE_CODE_OFFSET;
    for(let x = 0; x < numChunks; x++){
        chunkSuffixes[x] = currentSuffix;
        currentSuffix++;
        // Reset suffix to 0 if exceeds BINARY_TREE_NODE_WIDTH
        if (currentSuffix >= BINARY_TREE_NODE_WIDTH) currentSuffix = 0;
    }
    return chunkSuffixes;
};
function generateBinaryTreeCodeStems(numChunks, address, hashFunction) {
    // The maximum number of chunks is 793 (maxCodeSize - 24576) / (bytes per chunk 31) + (round up - 1)
    // Code is stored in chunks starting at leaf index 128 of the leaf node corresponding to the stem of the code's address
    // Code chunks beyond the initial 128 are stored in additional leaf nodes in batches up of up to 256 chunks per leaf node
    // so the maximum number of leaf nodes that can hold contract code for a specific address is 4 leaf nodes (128 chunks in
    // the first leaf node and 256 chunks in up to 3 additional leaf nodes)
    // So, instead of computing every single leaf key (which is a heavy operation), we just compute the stem for the first
    // chunk in each leaf node and can then know that the chunks in between have tree keys in monotonically increasing order
    const numStems = numChunks > BINARY_TREE_CODE_OFFSET ? Math.ceil(numChunks / BINARY_TREE_NODE_WIDTH) + 1 : 1;
    const chunkStems = new Array(numStems);
    // Compute the stem for the initial set of code chunks
    chunkStems[0] = getBinaryTreeKeyForCodeChunk(address, 0, hashFunction).slice(0, 31);
    for(let stemNum = 0; stemNum < numStems - 1; stemNum++){
        // Generate additional stems
        const firstChunkKey = getBinaryTreeKeyForCodeChunk(address, BINARY_TREE_CODE_OFFSET + stemNum * BINARY_TREE_NODE_WIDTH, hashFunction);
        chunkStems[stemNum + 1] = firstChunkKey.slice(0, 31);
    }
    return chunkStems;
} //# sourceMappingURL=binaryTree.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/blobs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CELLS_PER_EXT_BLOB",
    ()=>CELLS_PER_EXT_BLOB,
    "blobsToCellProofs",
    ()=>blobsToCellProofs,
    "blobsToCells",
    ()=>blobsToCells,
    "blobsToCellsAndProofs",
    ()=>blobsToCellsAndProofs,
    "blobsToCommitments",
    ()=>blobsToCommitments,
    "blobsToProofs",
    ()=>blobsToProofs,
    "commitmentsToVersionedHashes",
    ()=>commitmentsToVersionedHashes,
    "computeVersionedHash",
    ()=>computeVersionedHash,
    "getBlobs",
    ()=>getBlobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
/**
 * These utilities for constructing blobs are borrowed from https://github.com/Inphi/eip4844-interop.git
 */ const BYTES_PER_FIELD_ELEMENT = 32; // EIP-4844
const FIELD_ELEMENTS_PER_BLOB = 4096; // EIP-4844
const BLOB_SIZE = BYTES_PER_FIELD_ELEMENT * FIELD_ELEMENTS_PER_BLOB;
const MAX_BLOBS_PER_TX = 6; // EIP-7691: Blob throughput increase, Pectra HF
const MAX_BLOB_BYTES_PER_TX = BLOB_SIZE * MAX_BLOBS_PER_TX - 1;
const CELLS_PER_EXT_BLOB = 128; // EIP-4844, Consensus Spec, 2 * FIELD_ELEMENTS_PER_BLOB // 64 (FIELD_ELEMENTS_PER_CELL)
/**
 * Pads input data to blob boundaries with 0x80 marker and zeros.
 * @param data Input data to pad
 * @param blobs_len Number of blobs the data should span
 * @returns Padded data aligned to blob boundaries
 */ function getPadded(data, blobs_len) {
    const pData = new Uint8Array(blobs_len * BLOB_SIZE);
    pData.set(data);
    pData[data.byteLength] = 0x80;
    return pData;
}
/**
 * Converts arbitrary byte data into EIP-4844 blob format.
 * Splits data into 4096 field elements of 32 bytes each, with proper alignment.
 * @param data Input data (must be exactly BLOB_SIZE bytes)
 * @returns Hex-prefixed blob string
 */ function getBlob(data) {
    const blob = new Uint8Array(BLOB_SIZE);
    for(let i = 0; i < FIELD_ELEMENTS_PER_BLOB; i++){
        const chunk = new Uint8Array(32);
        chunk.set(data.subarray(i * 31, (i + 1) * 31), 0);
        blob.set(chunk, i * 32);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(blob);
}
const getBlobs = (input)=>{
    const inputArray = Array.isArray(input) ? input : [
        input
    ];
    const blobs = [];
    for (const input of inputArray){
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(input);
        const len = data.byteLength;
        if (len === 0) {
            throw Error('invalid blob data (0 bytes)');
        }
        if (len > MAX_BLOB_BYTES_PER_TX) {
            throw Error(`blob data is too large (${len} bytes > ${MAX_BLOB_BYTES_PER_TX} bytes)`);
        }
        const blobs_len = Math.ceil(len / BLOB_SIZE);
        const pData = getPadded(data, blobs_len);
        for(let i = 0; i < blobs_len; i++){
            const chunk = pData.subarray(i * BLOB_SIZE, (i + 1) * BLOB_SIZE);
            const blob = getBlob(chunk);
            blobs.push(blob);
        }
    }
    return blobs;
};
const blobsToCommitments = (kzg, blobs)=>{
    const commitments = [];
    for (const blob of blobs){
        commitments.push(kzg.blobToKzgCommitment(blob).toLowerCase());
    }
    return commitments;
};
const blobsToProofs = (kzg, blobs, commitments)=>{
    const proofs = blobs.map((blob, ctx)=>kzg.computeBlobProof(blob, commitments[ctx]).toLowerCase());
    return proofs;
};
const computeVersionedHash = (commitment, blobCommitmentVersion)=>{
    const computedVersionedHash = new Uint8Array(32);
    computedVersionedHash.set([
        blobCommitmentVersion
    ], 0);
    computedVersionedHash.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"])(commitment)).subarray(1), 1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"])(computedVersionedHash);
};
const commitmentsToVersionedHashes = (commitments)=>{
    const hashes = [];
    for (const commitment of commitments){
        hashes.push(computeVersionedHash(commitment, 0x01));
    }
    return hashes;
};
const blobsToCells = (kzg, blobs)=>{
    const cells = blobs.reduce((acc, elem)=>{
        return [
            ...acc,
            ...kzg.computeCells(elem)
        ];
    }, []);
    const indices = Array.from({
        length: CELLS_PER_EXT_BLOB
    }, (_, i)=>i);
    return [
        cells,
        indices
    ];
};
const blobsToCellsAndProofs = (kzg, blobs)=>{
    const blobsAndCells = blobs.reduce(([cellsAcc, proofsAcc], elem)=>{
        const blobCellsAndProofs = kzg.computeCellsAndProofs(elem);
        return [
            [
                ...cellsAcc,
                ...blobCellsAndProofs[0]
            ],
            [
                ...proofsAcc,
                ...blobCellsAndProofs[1]
            ]
        ];
    }, [
        [],
        []
    ]);
    const indices = Array.from({
        length: CELLS_PER_EXT_BLOB
    }, (_, i)=>i);
    return [
        ...blobsAndCells,
        indices
    ];
};
const blobsToCellProofs = (kzg, blobs)=>{
    return blobsToCellsAndProofs(kzg, blobs)[1];
}; //# sourceMappingURL=blobs.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/kzg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=kzg.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Based on https://github.com/jsoendermann/semaphore-async-await/blob/master/src/Semaphore.ts
__turbopack_context__.s([
    "Lock",
    ()=>Lock
]);
class Lock {
    constructor(){
        this.permits = 1;
        this.promiseResolverQueue = [];
    }
    /**
     * Returns a promise used to wait for a permit to become available. This method should be awaited on.
     * @returns  A promise that gets resolved when execution is allowed to proceed.
     */ async acquire() {
        if (this.permits > 0) {
            this.permits -= 1;
            return Promise.resolve(true);
        }
        // If there is no permit available, we return a promise that resolves once the semaphore gets
        // signaled enough times that permits is equal to one.
        return new Promise((resolver)=>this.promiseResolverQueue.push(resolver));
    }
    /**
     * Increases the number of permits by one. If there are other functions waiting, one of them will
     * continue to execute in a future iteration of the event loop.
     */ release() {
        this.permits += 1;
        if (this.permits > 1 && this.promiseResolverQueue.length > 0) {
            // eslint-disable-next-line no-console
            console.warn('Lock.permits should never be > 0 when there is someone waiting.');
        } else if (this.permits === 1 && this.promiseResolverQueue.length > 0) {
            // If there is someone else waiting, immediately consume the permit that was released
            // at the beginning of this function and let the waiting function resume.
            this.permits -= 1;
            const nextResolver = this.promiseResolverQueue.shift();
            if (nextResolver) {
                nextResolver(true);
            }
        }
    }
} //# sourceMappingURL=lock.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/mapDB.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapDB",
    ()=>MapDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
;
class MapDB {
    constructor(database){
        this._database = database ?? new Map();
    }
    async get(key) {
        const dbKey = key instanceof Uint8Array ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUnprefixedHex"])(key) : key.toString();
        return this._database.get(dbKey);
    }
    async put(key, val) {
        const dbKey = key instanceof Uint8Array ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUnprefixedHex"])(key) : key.toString();
        this._database.set(dbKey, val);
    }
    async del(key) {
        const dbKey = key instanceof Uint8Array ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUnprefixedHex"])(key) : key.toString();
        this._database.delete(dbKey);
    }
    async batch(opStack) {
        for (const op of opStack){
            if (op.type === 'del') {
                await this.del(op.key);
            }
            if (op.type === 'put') {
                await this.put(op.key, op.value);
            }
        }
    }
    /**
     * Note that the returned shallow copy will share the underlying database with the original
     *
     * @returns DB
     */ shallowCopy() {
        return new MapDB(this._database);
    }
    open() {
        return Promise.resolve();
    }
} //# sourceMappingURL=mapDB.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchFromProvider",
    ()=>fetchFromProvider,
    "getProvider",
    ()=>getProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/rlp/dist/esm/errors.js [app-client] (ecmascript)");
;
const fetchFromProvider = async (url, params)=>{
    const data = JSON.stringify({
        method: params.method,
        params: params.params,
        jsonrpc: '2.0',
        id: 1
    });
    const res = await fetch(url, {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: data
    });
    if (!res.ok) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])(`JSONRPCError: ${JSON.stringify({
            method: params.method,
            status: res.status,
            message: await res.text().catch(()=>{
                return 'Could not parse error message likely because of a network error';
            })
        }, null, 2)}`);
    }
    const json = await res.json();
    // TODO we should check json.error here
    return json.result;
};
const getProvider = (provider)=>{
    if (typeof provider === 'string') {
        return provider;
    } else if (typeof provider === 'object' && provider._getConnection !== undefined) {
        return provider._getConnection().url;
    } else {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumJSErrorWithoutCode"])('Must provide valid provider URL or Web3Provider');
    }
}; //# sourceMappingURL=provider.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/request.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLRequest",
    ()=>CLRequest,
    "CLRequestType",
    ()=>CLRequestType,
    "createCLRequest",
    ()=>createCLRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
;
const CLRequestType = {
    Deposit: 0,
    Withdrawal: 1,
    Consolidation: 2
};
class CLRequest {
    get type() {
        return this.bytes[0];
    }
    get data() {
        return this.bytes.subarray(1);
    }
    constructor(requestType, requestData){
        this.bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"])(new Uint8Array([
            requestType
        ]), requestData);
    }
}
function createCLRequest(bytes) {
    switch(bytes[0]){
        case CLRequestType.Deposit:
            return new CLRequest(CLRequestType.Deposit, bytes.subarray(1));
        case CLRequestType.Withdrawal:
            return new CLRequest(CLRequestType.Withdrawal, bytes.subarray(1));
        case CLRequestType.Consolidation:
            return new CLRequest(CLRequestType.Consolidation, bytes.subarray(1));
        default:
            throw Error(`Invalid request type=${bytes[0]}`);
    }
} //# sourceMappingURL=request.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/tasks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrioritizedTaskExecutor",
    ()=>PrioritizedTaskExecutor
]);
class PrioritizedTaskExecutor {
    /**
     * Executes tasks up to maxPoolSize at a time, other items are put in a priority queue.
     * @class PrioritizedTaskExecutor
     * @private
     * @param maxPoolSize The maximum size of the pool
     */ constructor(maxPoolSize){
        this.maxPoolSize = maxPoolSize;
        this.currentPoolSize = 0;
        this.queue = [];
    }
    /**
     * Executes the task or queues it if no spots are available.
     * When a task is added, check if there are spots left in the pool.
     * If a spot is available, claim that spot and give back the spot once the asynchronous task has been resolved.
     * When no spots are available, add the task to the task queue. The task will be executed at some point when another task has been resolved.
     * @private
     * @param priority The priority of the task
     * @param fn The function that accepts the callback, which must be called upon the task completion.
     */ executeOrQueue(priority, fn) {
        if (this.currentPoolSize < this.maxPoolSize) {
            this.currentPoolSize++;
            fn(()=>{
                this.currentPoolSize--;
                if (this.queue.length > 0) {
                    this.queue.sort((a, b)=>b.priority - a.priority);
                    const item = this.queue.shift();
                    this.executeOrQueue(item.priority, item.fn);
                }
            });
        } else {
            this.queue.push({
                priority,
                fn
            });
        }
    }
    /**
     * Checks if the taskExecutor is finished.
     * @private
     * @returns Returns `true` if the taskExecutor is finished, otherwise returns `false`.
     */ finished() {
        return this.currentPoolSize === 0;
    }
} //# sourceMappingURL=tasks.js.map
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Constants
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/constants.js [app-client] (ecmascript)");
/**
 * Errors
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/errors.js [app-client] (ecmascript) <locals>");
/**
 * Units helpers
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/units.js [app-client] (ecmascript)");
/**
 * Account class and helper functions
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/account.js [app-client] (ecmascript)");
/**
 * Address type
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/address.js [app-client] (ecmascript)");
/**
 * DB type
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/db.js [app-client] (ecmascript)");
/**
 * Withdrawal type
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$withdrawal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/withdrawal.js [app-client] (ecmascript)");
/**
 * ECDSA signature
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/signature.js [app-client] (ecmascript)");
/**
 * Utilities for manipulating bytes, Uint8Arrays, etc.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
/**
 * Helpful TypeScript types
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/types.js [app-client] (ecmascript)");
/**
 * Export ethjs-util methods
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$binaryTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/binaryTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$blobs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/blobs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$kzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/kzg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$mapDB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/mapDB.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/request.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$tasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/tasks.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHexPrefix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addHexPrefix"],
    "bigInt64ToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigInt64ToBytes"],
    "bigIntMax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntMax"],
    "bigIntMin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntMin"],
    "bigIntToAddressBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToAddressBytes"],
    "bigIntToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToBytes"],
    "bigIntToHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToHex"],
    "bigIntToUnpaddedBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bigIntToUnpaddedBytes"],
    "bitsToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bitsToBytes"],
    "bytesToBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt"],
    "bytesToBigInt64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBigInt64"],
    "bytesToBits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToBits"],
    "bytesToHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToHex"],
    "bytesToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt"],
    "bytesToInt32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToInt32"],
    "bytesToUnprefixedHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUnprefixedHex"],
    "bytesToUtf8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUtf8"],
    "compareBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compareBytes"],
    "concatBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatBytes"],
    "equalsBits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBits"],
    "equalsBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalsBytes"],
    "fromSigned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromSigned"],
    "hexToBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"],
    "hexToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBytes"],
    "int32ToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["int32ToBytes"],
    "intToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToBytes"],
    "intToHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToHex"],
    "intToUnpaddedBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["intToUnpaddedBytes"],
    "matchingBitsLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["matchingBitsLength"],
    "matchingBytesLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["matchingBytesLength"],
    "randomBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomBytes"],
    "setLengthLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthLeft"],
    "setLengthRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLengthRight"],
    "short",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["short"],
    "toBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toBytes"],
    "toUnsigned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toUnsigned"],
    "unpadArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpadArray"],
    "unpadBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpadBytes"],
    "unpadHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpadHex"],
    "unprefixedHexToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unprefixedHexToBytes"],
    "utf8ToBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"],
    "validateNoLeadingZeroes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateNoLeadingZeroes"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$ethereumjs$2f$util$2f$dist$2f$esm$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@ethereumjs/util/dist/esm/bytes.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=8fa6b_%40ethereumjs_util_dist_esm_4ce76e84._.js.map