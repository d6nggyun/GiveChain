(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseController",
    ()=>BaseController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$safeEventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/safeEventEmitter.js [app-client] (ecmascript)");
;
;
;
/**
 * Controller class that provides configuration, state management, and subscriptions
 */ class BaseController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$safeEventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeEventEmitter"] {
    /**
   * Creates a BaseController instance. Both initial state and initial
   * configuration options are merged with defaults upon initialization.
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */ constructor({ config = {}, state = {} }){
        super();
        // Use assign since generics can't be spread: https://git.io/vpRhY
        /**
     * Default options used to configure this controller
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "defaultConfig", {});
        /**
     * Default state set on this controller
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "defaultState", {});
        /**
     * Determines if listeners are notified of state changes
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "disabled", false);
        /**
     * Name of this controller used during composition
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "name", "BaseController");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "initialConfig", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "initialState", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "internalConfig", this.defaultConfig);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "internalState", this.defaultState);
        this.initialState = state;
        this.initialConfig = config;
    }
    /**
   * Retrieves current controller configuration options
   *
   * @returns - Current configuration
   */ get config() {
        return this.internalConfig;
    }
    /**
   * Retrieves current controller state
   *
   * @returns - Current state
   */ get state() {
        return this.internalState;
    }
    /**
   * Updates controller configuration
   *
   * @param config - New configuration options
   * @param overwrite - Overwrite config instead of merging
   * @param fullUpdate - Boolean that defines if the update is partial or not
   */ configure(config, overwrite = false, fullUpdate = true) {
        if (fullUpdate) {
            this.internalConfig = overwrite ? config : Object.assign(this.internalConfig, config);
            for(const key in this.internalConfig){
                if (typeof this.internalConfig[key] !== "undefined") {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this[key] = this.internalConfig[key];
                }
            }
        } else {
            for(const key in config){
                /* istanbul ignore else */ if (typeof this.internalConfig[key] !== "undefined") {
                    this.internalConfig[key] = config[key];
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this[key] = config[key];
                }
            }
        }
    }
    /**
   * Updates controller state
   *
   * @param state - New state
   * @param overwrite - Overwrite state instead of merging
   */ update(state, overwrite = false) {
        this.internalState = overwrite ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.internalState), state);
        this.emit("store", this.internalState);
    }
    /**
   * Enables the controller. This sets each config option as a member
   * variable on this instance and triggers any defined setters. This
   * also sets initial state and triggers any listeners.
   *
   * @returns - This controller instance
   */ initialize() {
        this.internalState = this.defaultState;
        this.internalConfig = this.defaultConfig;
        this.configure(this.initialConfig);
        this.update(this.initialState);
        return this;
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Transaction/ITransactionController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The status of the transaction. Each status represents the state of the transaction internally
 * in the wallet. Some of these correspond with the state of the transaction on the network, but
 * some are wallet-specific.
 */ __turbopack_context__.s([
    "TRANSACTION_TYPES",
    ()=>TRANSACTION_TYPES,
    "TX_EVENTS",
    ()=>TX_EVENTS,
    "TransactionStatus",
    ()=>TransactionStatus
]);
let TransactionStatus = /*#__PURE__*/ function(TransactionStatus) {
    TransactionStatus["approved"] = "approved";
    TransactionStatus["cancelled"] = "cancelled";
    TransactionStatus["cancelling"] = "cancelling";
    TransactionStatus["confirmed"] = "confirmed";
    TransactionStatus["failed"] = "failed";
    TransactionStatus["finalized"] = "finalized";
    TransactionStatus["processed"] = "processed";
    TransactionStatus["rejected"] = "rejected";
    TransactionStatus["signed"] = "signed";
    TransactionStatus["submitted"] = "submitted";
    TransactionStatus["unapproved"] = "unapproved";
    TransactionStatus["dropped"] = "dropped";
    TransactionStatus["expired"] = "expired";
    TransactionStatus["pending"] = "pending";
    return TransactionStatus;
}({});
const TRANSACTION_TYPES = {
    CANCEL: "cancel",
    RETRY: "retry",
    CONTRACT_INTERACTION: "contractInteraction",
    DEPLOY_CONTRACT: "contractDeployment",
    WASM_BASED_DEPLOY: "wasmBasedDeploy",
    STANDARD_TRANSACTION: "transaction",
    STANDARD_PAYMENT_TRANSACTION: "payment_transaction",
    // specific to chains like solana and casper
    SENT_ETHER: "sentEther",
    SENT_SOL: "sentSol",
    TOKEN_METHOD_TRANSFER: "transfer",
    TOKEN_METHOD_TRANSFER_FROM: "transferFrom",
    TOKEN_METHOD_APPROVE: "approve",
    TOKEN_BURN: "burn",
    COLLECTIBLE_METHOD_SAFE_TRANSFER_FROM: "safeTransferFrom",
    SET_APPROVAL_FOR_ALL: "setApprovalForAll"
};
const TX_EVENTS = {
    TX_WARNING: "tx:warning",
    TX_ERROR: "tx:error",
    TX_FAILED: "tx:failed",
    TX_CONFIRMED: "tx:confirmed",
    TX_DROPPED: "tx:dropped",
    TX_EXPIRED: "tx:expired",
    TX_STATUS_UPDATE: "tx:status_update",
    TX_UNAPPROVED: "tx:unapproved",
    TX_RETRY: "tx:retry",
    TX_BLOCK_UPDATE: "tx:block_update"
};
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Block/BaseBlockTracker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseBlockTracker",
    ()=>BaseBlockTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
;
;
const sec = 1000;
const calculateSum = (accumulator, currentValue)=>accumulator + currentValue;
class BaseBlockTracker extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    constructor({ config = {}, state = {} }){
        super({
            config,
            state
        });
        // config
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "name", "BaseBlockTracker");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "_blockResetTimeout", void 0);
        this.defaultState = {
            _currentBlock: {
                idempotencyKey: ""
            },
            _isRunning: false
        };
        this.defaultConfig = {
            blockResetDuration: 20 * sec
        };
        this.initialize();
        // bind functions for internal use
        this._onNewListener = this._onNewListener.bind(this);
        this._onRemoveListener = this._onRemoveListener.bind(this);
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
        // listen for handler changes
        this._setupInternalEvents();
    }
    isRunning() {
        return this.state._isRunning;
    }
    getCurrentBlock() {
        return this.state._currentBlock;
    }
    async getLatestBlock() {
        // return if available
        if (this.state._currentBlock.idempotencyKey) {
            return this.state._currentBlock;
        }
        // wait for a new latest block
        const latestBlock = await new Promise((resolve)=>{
            this.once("latest", (block)=>{
                if (block) {
                    resolve(block);
                }
            });
        });
        // return newly set current block
        return latestBlock;
    }
    // dont allow module consumer to remove our internal event listeners
    removeAllListeners(eventName) {
        if (eventName) {
            super.removeAllListeners(eventName);
        } else {
            super.removeAllListeners();
        }
        // re-add internal events
        this._setupInternalEvents();
        // trigger stop check just in case
        this._onRemoveListener();
        return this;
    }
    /**
   * To be implemented in subclass.
   */ _start() {
    // default behavior is noop
    }
    /**
   * To be implemented in subclass.
   */ _end() {
    // default behavior is noop
    }
    _newPotentialLatest(newBlock) {
        const currentBlock = this.state._currentBlock;
        // only update if block number is higher
        if (currentBlock && newBlock.idempotencyKey === currentBlock.idempotencyKey) {
            return;
        }
        this._setCurrentBlock(newBlock);
    }
    _setupInternalEvents() {
        // first remove listeners for idempotency
        this.removeListener("newListener", this._onNewListener);
        this.removeListener("removeListener", this._onRemoveListener);
        // then add them
        this.on("removeListener", this._onRemoveListener);
        this.on("newListener", this._onNewListener);
    }
    _onNewListener() {
        this._maybeStart();
    }
    _onRemoveListener() {
        // `removeListener` is called *after* the listener is removed
        if (this._getBlockTrackerEventCount() > 0) {
            return;
        }
        this._maybeEnd();
    }
    _maybeStart() {
        if (this.state._isRunning) {
            return;
        }
        this.state._isRunning = true;
        // cancel setting latest block to stale
        this._cancelBlockResetTimeout();
        this._start();
    }
    _maybeEnd() {
        if (!this.state._isRunning) {
            return;
        }
        this.state._isRunning = false;
        this._setupBlockResetTimeout();
        this._end();
    }
    _getBlockTrackerEventCount() {
        const blockTrackerEvents = [
            "latest",
            "sync"
        ];
        return blockTrackerEvents.map((eventName)=>this.listenerCount(eventName)).reduce(calculateSum);
    }
    _setCurrentBlock(newBlock) {
        const oldBlock = this.state._currentBlock;
        this.update({
            _currentBlock: newBlock
        });
        this.emit("latest", newBlock);
        this.emit("sync", {
            oldBlock,
            newBlock
        });
    }
    _setupBlockResetTimeout() {
        // clear any existing timeout
        this._cancelBlockResetTimeout();
        // clear latest block when stale
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this.config.blockResetDuration);
        // nodejs - dont hold process open
        if (this._blockResetTimeout.unref) {
            this._blockResetTimeout.unref();
        }
    }
    _cancelBlockResetTimeout() {
        if (this._blockResetTimeout) {
            clearTimeout(this._blockResetTimeout);
        }
    }
    _resetCurrentBlock() {
        this.update({
            _currentBlock: {
                idempotencyKey: ""
            }
        });
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/PollingManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PollingManager",
    ()=>PollingManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
;
class PollingManager {
    constructor(idleTimeTracker, pollingInterval){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "idleTimeTracker", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "pollingInterval", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "isPolling", false);
        this.pollingInterval = pollingInterval;
        this.idleTimeTracker = idleTimeTracker;
    }
    start(action) {
        this.idleTimeTracker.on("active", this.poll.bind(this, action));
        this.idleTimeTracker.on("idle", this.stop.bind(this));
        this.poll(action);
    }
    stop() {
        this.isPolling = false;
    }
    async poll(action) {
        if (this.isPolling) return;
        this.isPolling = true;
        while(this.isPolling){
            if (this.idleTimeTracker.checkIfIdle()) {
                this.isPolling = false;
                return;
            }
            try {
                await action();
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeout"])(this.pollingInterval);
        }
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Currency/BaseCurrencyController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseCurrencyController",
    ()=>BaseCurrencyController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
;
// every ten minutes
const POLLING_INTERVAL = 600000;
class BaseCurrencyController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    constructor({ config = {}, state }){
        super({
            config,
            state
        });
        this.defaultState = {
            currentCurrency: "usd",
            conversionRate: 0,
            conversionDate: "N/A",
            nativeCurrency: "ETH"
        };
        this.defaultConfig = {
            pollInterval: POLLING_INTERVAL
        };
        this.initialize();
    }
    //
    // PUBLIC METHODS
    //
    getNativeCurrency() {
        return this.state.nativeCurrency;
    }
    setNativeCurrency(nativeCurrency) {
        this.update({
            nativeCurrency,
            ticker: nativeCurrency
        });
    }
    getCurrentCurrency() {
        return this.state.currentCurrency;
    }
    setCurrentCurrency(currentCurrency) {
        this.update({
            currentCurrency
        });
    }
    /**
   * A getter for the conversionRate property
   *
   * @returns The conversion rate from ETH to the selected currency.
   *
   */ getConversionRate() {
        return this.state.conversionRate;
    }
    setConversionRate(conversionRate) {
        this.update({
            conversionRate
        });
    }
    /**
   * A getter for the conversionDate property
   *
   * @returns The date at which the conversion rate was set. Expressed in milliseconds since midnight of
   * January 1, 1970
   *
   */ getConversionDate() {
        return this.state.conversionDate;
    }
    setConversionDate(conversionDate) {
        this.update({
            conversionDate
        });
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/lodashUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneDeep",
    ()=>cloneDeep,
    "keyBy",
    ()=>keyBy,
    "mapValues",
    ()=>mapValues,
    "omitBy",
    ()=>omitBy,
    "pickBy",
    ()=>pickBy,
    "sortBy",
    ()=>sortBy
]);
function omitBy(object, predicate) {
    // Create a new object to store the results
    const result = {};
    // Iterate over all own properties of the object
    for (const [key, value] of Object.entries(object)){
        if (!predicate(value, key)) {
            result[key] = value;
        }
    }
    return result;
}
function pickBy(object, predicate) {
    // Create a new object to store the results
    const result = {};
    for (const [key, value] of Object.entries(object)){
        if (predicate(value, key)) {
            result[key] = value;
        }
    }
    return result;
}
function cloneDeep(object) {
    try {
        return structuredClone(object);
    } catch  {
        return JSON.parse(JSON.stringify(object, (_, v)=>typeof v === "bigint" ? v.toString() : v));
    }
}
function sortBy(arr, key) {
    return arr.slice().sort((a, b)=>{
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}
function keyBy(arr, key) {
    return arr.reduce((acc, item)=>{
        const keyValue = item[key];
        if (typeof keyValue === "string" || typeof keyValue === "number") {
            acc[keyValue.toString()] = item;
        }
        return acc;
    }, {});
}
function mapValues(obj, iteratee) {
    return Object.fromEntries(Object.entries(obj).map(([key, value])=>[
            key,
            iteratee(value, key)
        ]));
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Keyring/BaseKeyringController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseKeyringController",
    ()=>BaseKeyringController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
class BaseKeyringController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    constructor({ config = {}, state }){
        var _state$wallets;
        super({
            config,
            state
        });
        this.defaultState = {
            wallets: (_state$wallets = state.wallets) !== null && _state$wallets !== void 0 ? _state$wallets : []
        };
        this.initialize();
    }
    // for signing auth message
    async signAuthMessage(address, message) {
        const keyring = this.state.wallets.find((x)=>x.address === address);
        if (!keyring) {
            throw new Error("key does not exist");
        }
        const hashedMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message).toString("hex");
        const rawMessageSig = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"])(keyring.privateKey, hashedMessage);
        return rawMessageSig;
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Message/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MESSAGE_EVENTS",
    ()=>MESSAGE_EVENTS,
    "MessageStatus",
    ()=>MessageStatus
]);
const MessageStatus = {
    UNAPPROVED: "unapproved",
    SIGNED: "signed",
    PENDING: "pending",
    APPROVED: "approved",
    REJECTED: "rejected",
    FAILED: "failed"
};
const MESSAGE_EVENTS = {
    UNAPPROVED_MESSAGE: "unapprovedMessage"
};
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Message/AbstractMessagecontroller.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractMessageController",
    ()=>AbstractMessageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/errors/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Message/constants.js [app-client] (ecmascript)");
;
;
;
;
class AbstractMessageController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    /**
   * Controller in charge of managing - storing, adding, removing, updating - Messages.
   *
   */ constructor({ config, state }){
        super({
            config,
            state
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "messages", void 0);
        this.defaultState = {
            unapprovedMessages: {},
            unapprovedMessagesCount: 0
        };
        this.messages = [];
        this.defaultConfig = {};
        super.initialize();
    }
    getMessage(messageId) {
        return this.messages.find((message)=>message.id === messageId);
    }
    getAllMessages() {
        return this.messages;
    }
    setMetadata(messageId, metadata) {
        const message = this.getMessage(messageId);
        if (!message) {
            throw new Error(`${this.name}: Message not found for id: ${messageId}.`);
        }
        message.metadata = metadata;
        this.updateMessage(message);
    }
    getUnapprovedMessages() {
        return this.messages.filter((message)=>message.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].UNAPPROVED).reduce((result, message)=>{
            result[message.id] = message;
            return result;
        }, {});
    }
    async addMessage(message) {
        this.messages.push(message);
        this.saveMessageList();
    }
    approveMessage(messageId, messageParams) {
        this.setMessageStatus(messageId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].APPROVED);
        return this.prepMessageForSigning(messageParams);
    }
    setMessageStatus(messageId, status) {
        const message = this.getMessage(messageId);
        if (!message) {
            throw new Error(`${this.name}: Message not found for id: ${messageId}.`);
        }
        message.status = status;
        this.updateMessage(message);
        this.emit(`${messageId}:${status}`, message);
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].REJECTED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].SIGNED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].FAILED) {
            this.emit(`${messageId}:finished`, message);
        }
    }
    async waitForFinishStatus(msgParams, messageName) {
        return new Promise((resolve, reject)=>{
            const handleFinished = (msg)=>{
                if (msg.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].REJECTED) {
                    return reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerErrors"].userRejectedRequest(`${messageName} Signature: User denied message signature`));
                }
                if (msg.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].FAILED) {
                    return reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal(`${messageName} Signature: failed to sign message ${msg.error}`));
                }
                if (msg.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Message$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageStatus"].SIGNED) {
                    return resolve(msg.rawSig);
                }
                return reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal(`${messageName} Signature: Unknown problem: ${JSON.stringify(msgParams)}`));
            };
            this.once(`${msgParams.id}:finished`, handleFinished);
        });
    }
    updateMessage(message) {
        const index = this.messages.findIndex((msg)=>message.id === msg.id);
        if (index !== -1) {
            this.messages[index] = message;
        }
        this.saveMessageList();
    }
    saveMessageList() {
        const unapprovedMessages = this.getUnapprovedMessages();
        const unapprovedMessagesCount = Object.keys(unapprovedMessages).length;
        this.update({
            unapprovedMessages,
            unapprovedMessagesCount
        });
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVITY_ACTION_ACCEPT_NFT_OFFER",
    ()=>ACTIVITY_ACTION_ACCEPT_NFT_OFFER,
    "ACTIVITY_ACTION_ALL",
    ()=>ACTIVITY_ACTION_ALL,
    "ACTIVITY_ACTION_BURN",
    ()=>ACTIVITY_ACTION_BURN,
    "ACTIVITY_ACTION_CANCEL_NFT_OFFER",
    ()=>ACTIVITY_ACTION_CANCEL_NFT_OFFER,
    "ACTIVITY_ACTION_CREATE_NFT_OFFER",
    ()=>ACTIVITY_ACTION_CREATE_NFT_OFFER,
    "ACTIVITY_ACTION_CREATE_TRUSTLINE",
    ()=>ACTIVITY_ACTION_CREATE_TRUSTLINE,
    "ACTIVITY_ACTION_RECEIVE",
    ()=>ACTIVITY_ACTION_RECEIVE,
    "ACTIVITY_ACTION_REMOVE_TRUSTLINE",
    ()=>ACTIVITY_ACTION_REMOVE_TRUSTLINE,
    "ACTIVITY_ACTION_SEND",
    ()=>ACTIVITY_ACTION_SEND,
    "ACTIVITY_ACTION_TOPUP",
    ()=>ACTIVITY_ACTION_TOPUP,
    "ACTIVITY_PERIOD_ALL",
    ()=>ACTIVITY_PERIOD_ALL,
    "ACTIVITY_PERIOD_MONTH_ONE",
    ()=>ACTIVITY_PERIOD_MONTH_ONE,
    "ACTIVITY_PERIOD_MONTH_SIX",
    ()=>ACTIVITY_PERIOD_MONTH_SIX,
    "ACTIVITY_PERIOD_WEEK_ONE",
    ()=>ACTIVITY_PERIOD_WEEK_ONE,
    "ACTIVITY_STATUS_CANCELLED",
    ()=>ACTIVITY_STATUS_CANCELLED,
    "ACTIVITY_STATUS_CANCELLING",
    ()=>ACTIVITY_STATUS_CANCELLING,
    "ACTIVITY_STATUS_PENDING",
    ()=>ACTIVITY_STATUS_PENDING,
    "ACTIVITY_STATUS_SUCCESSFUL",
    ()=>ACTIVITY_STATUS_SUCCESSFUL,
    "ACTIVITY_STATUS_UNSUCCESSFUL",
    ()=>ACTIVITY_STATUS_UNSUCCESSFUL,
    "BROADCAST_CHANNELS",
    ()=>BROADCAST_CHANNELS,
    "BROADCAST_CHANNELS_MSGS",
    ()=>BROADCAST_CHANNELS_MSGS,
    "COMMUNICATION_JRPC_METHODS",
    ()=>COMMUNICATION_JRPC_METHODS,
    "COMMUNICATION_NOTIFICATIONS",
    ()=>COMMUNICATION_NOTIFICATIONS,
    "ControllerEvents",
    ()=>ControllerEvents,
    "FEATURES_CONFIRM_WINDOW",
    ()=>FEATURES_CONFIRM_WINDOW,
    "FEATURES_DEFAULT_POPUP_WINDOW",
    ()=>FEATURES_DEFAULT_POPUP_WINDOW,
    "FEATURES_DEFAULT_WALLET_WINDOW",
    ()=>FEATURES_DEFAULT_WALLET_WINDOW,
    "FEATURES_PROVIDER_CHANGE_WINDOW",
    ()=>FEATURES_PROVIDER_CHANGE_WINDOW,
    "POPUP_LOADED",
    ()=>POPUP_LOADED,
    "POPUP_RESULT",
    ()=>POPUP_RESULT,
    "PROVIDER_JRPC_METHODS",
    ()=>PROVIDER_JRPC_METHODS,
    "PROVIDER_NOTIFICATIONS",
    ()=>PROVIDER_NOTIFICATIONS,
    "SETUP_COMPLETE",
    ()=>SETUP_COMPLETE
]);
const FEATURES_PROVIDER_CHANGE_WINDOW = {
    height: 660,
    width: 375
};
const FEATURES_DEFAULT_WALLET_WINDOW = {
    height: 740,
    width: 1315
};
const FEATURES_DEFAULT_POPUP_WINDOW = {
    height: 700,
    width: 1200
};
const FEATURES_CONFIRM_WINDOW = {
    height: 700,
    width: 450
};
const POPUP_LOADED = "popup_loaded";
const POPUP_RESULT = "popup_result";
const SETUP_COMPLETE = "setup_complete";
const ACTIVITY_ACTION_ALL = "walletActivity.allTransactions";
const ACTIVITY_ACTION_SEND = "walletActivity.send";
const ACTIVITY_ACTION_BURN = "walletActivity.burn";
const ACTIVITY_ACTION_RECEIVE = "walletActivity.receive";
const ACTIVITY_ACTION_TOPUP = "walletActivity.topup";
const ACTIVITY_ACTION_CREATE_TRUSTLINE = "walletActivity.createTrustline";
const ACTIVITY_ACTION_REMOVE_TRUSTLINE = "walletActivity.removeTrustline";
const ACTIVITY_ACTION_CREATE_NFT_OFFER = "walletActivity.createNftOffer";
const ACTIVITY_ACTION_ACCEPT_NFT_OFFER = "walletActivity.acceptNftOffer";
const ACTIVITY_ACTION_CANCEL_NFT_OFFER = "walletActivity.cancelNftOffer";
const ACTIVITY_PERIOD_ALL = "walletActivity.all";
const ACTIVITY_PERIOD_WEEK_ONE = "walletActivity.lastOneWeek";
const ACTIVITY_PERIOD_MONTH_ONE = "walletActivity.lastOneMonth";
const ACTIVITY_PERIOD_MONTH_SIX = "walletActivity.lastSixMonts";
const ACTIVITY_STATUS_SUCCESSFUL = "walletActivity.successful";
const ACTIVITY_STATUS_UNSUCCESSFUL = "walletActivity.unsuccessful";
const ACTIVITY_STATUS_PENDING = "walletActivity.pending";
const ACTIVITY_STATUS_CANCELLED = "walletActivity.cancelled";
const ACTIVITY_STATUS_CANCELLING = "walletActivity.cancelling";
const COMMUNICATION_NOTIFICATIONS = {
    IFRAME_STATUS: "iframe_status",
    // Tell embed to close the window
    CLOSE_WINDOW: "close_window",
    USER_LOGGED_IN: "user_logged_in",
    USER_LOGGED_OUT: "user_logged_out",
    // toggle widget button based on gating and config
    TOGGLE_WIDGET_BUTTON: "toggle_widget_button",
    // allow wallet service based on gating
    ALLOW_WALLET_SERVICE: "allow_wallet_service"
};
const COMMUNICATION_JRPC_METHODS = {
    LOGOUT: "logout",
    WALLET_INSTANCE_ID: "wallet_instance_id",
    USER_INFO: "user_info",
    SET_PROVIDER: "set_provider",
    TOPUP: "topup",
    IFRAME_STATUS: "iframe_status",
    // user has closed the window from embed's side
    CLOSED_WINDOW: "closed_window",
    WINDOW_BLOCKED: "window_blocked",
    GET_PROVIDER_STATE: "get_provider_state",
    LOGIN_WITH_PRIVATE_KEY: "login_with_private_key",
    SHOW_WALLET_CONNECT: "show_wallet_connect",
    SHOW_FUNDING: "show_funding",
    SHOW_CHECKOUT: "show_checkout",
    SHOW_RECEIVE: "show_receive",
    SHOW_WALLET_UI: "show_wallet_ui",
    SHOW_SWAP: "show_swap",
    LOGIN_WITH_SESSION_ID: "login_with_session_id"
};
const PROVIDER_JRPC_METHODS = {
    GET_PROVIDER_STATE: "wallet_get_provider_state",
    WALLET_SWITCH_CHAIN: "wallet_switchChain"
};
const PROVIDER_NOTIFICATIONS = {
    ACCOUNTS_CHANGED: "wallet_accounts_changed",
    CHAIN_CHANGED: "wallet_chain_changed",
    UNLOCK_STATE_CHANGED: "wallet_unlock_state_changed"
};
const BROADCAST_CHANNELS = {
    REDIRECT_CHANNEL: "redirect_channel",
    PROVIDER_CHANGE_CHANNEL: "torus_provider_change_channel",
    TRANSACTION_CHANNEL: "torus_channel",
    MESSAGE_CHANNEL: "torus_message_channel",
    WALLET_LOGOUT_CHANNEL: "wallet_logout_channel",
    WALLET_SELECTED_ADDRESS_CHANNEL: "wallet_selected_address_channel",
    WALLET_NETWORK_CHANGE_CHANNEL: "wallet_network_change_channel",
    WALLET_ACCOUNT_IMPORT_CHANNEL: "wallet_account_import_channel",
    THEME_CHANGE: "theme_change_channel",
    TOP_UP_CHANNEL: "top_up_channel"
};
const BROADCAST_CHANNELS_MSGS = {
    LOGOUT: "logout",
    ACCOUNT_IMPORTED: "account_imported",
    SELECTED_ADDRESS_CHANGE: "selected_address_change",
    NETWORK_CHANGE: "network_change",
    SET_THEME: "set_theme"
};
let ControllerEvents = /*#__PURE__*/ function(ControllerEvents) {
    ControllerEvents["UserUnauthorized"] = "user.unauthorized";
    return ControllerEvents;
}({});
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Network/createFetchMiddleware.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFetchConfigFromReq",
    ()=>createFetchConfigFromReq,
    "createFetchMiddleware",
    ()=>createFetchMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/jrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/customauth/dist/lib.esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/errors/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Network/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
;
;
const RETRIABLE_ERRORS = [
    // ignore server overload errors
    "Gateway timeout",
    "ETIMEDOUT",
    // ignore server sent html error pages
    // or truncated json responses
    "failed to parse response body",
    // ignore errors where http req failed to establish
    "Failed to fetch"
];
function checkForHttpErrors(fetchRes) {
    // check for errors
    switch(fetchRes.status){
        case 405:
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].methodNotFound();
        case 418:
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal({
                message: `Request is being rate limited.`,
                data: {
                    cause: fetchRes
                }
            });
        case 503:
        case 504:
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal({
                message: `Gateway timeout. The request took too long to process.` + `This can happen when querying over too wide a block range.`,
                data: {
                    cause: fetchRes
                }
            });
    }
}
function timeout(duration) {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
}
function parseResponse(fetchRes, body) {
    // check for error code
    if (fetchRes.status !== 200) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal({
            message: `Non-200 status code: '${fetchRes.status}'`,
            data: body
        });
    }
    // check for rpc error
    if (body.error) {
        var _body$error;
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$errors$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrors"].internal({
            data: body.error,
            message: (_body$error = body.error) === null || _body$error === void 0 ? void 0 : _body$error.message
        });
    }
    // return successful result
    return body.result;
}
function createFetchConfigFromReq({ req, rpcTarget, originHttpHeaderKey }) {
    const parsedUrl = new URL(rpcTarget);
    // prepare payload
    // copy only canonical json rpc properties
    const payload = {
        id: req.id,
        jsonrpc: req.jsonrpc,
        method: req.method,
        params: req.params
    };
    // extract 'origin' parameter from request
    const originDomain = req.origin;
    // serialize request body
    const serializedPayload = JSON.stringify(payload);
    // configure fetch params
    const fetchParams = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: serializedPayload
    };
    // optional: add request origin as header
    if (originHttpHeaderKey && originDomain) {
        fetchParams.headers[originHttpHeaderKey] = originDomain;
    }
    return {
        fetchUrl: parsedUrl.href,
        fetchParams
    };
}
function createFetchMiddleware({ rpcTarget, originHttpHeaderKey, analytics, providerConfig }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncMiddleware"])(async (req, res, _next)=>{
        const { fetchUrl, fetchParams } = createFetchConfigFromReq({
            req,
            rpcTarget,
            originHttpHeaderKey
        });
        // attempt request multiple times
        const maxAttempts = 5;
        const retryInterval = 1000;
        const startTime = Date.now();
        const isSkippedAnalytics = !Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_TRACKED_NETWORK_JPRC_METHODS"]).includes(req.method);
        const trackData = {
            chain_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCaipChainId"])(providerConfig),
            chain_rpc_target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostname"])(fetchUrl),
            method: req.method
        };
        for(let attempt = 0; attempt < maxAttempts; attempt++){
            try {
                const fetchRes = await fetch(fetchUrl, fetchParams);
                // check for http errors
                checkForHttpErrors(fetchRes);
                // parse response body
                const fetchBody = await fetchRes.json();
                const result = parseResponse(fetchRes, fetchBody);
                // set result and exit retry loop
                res.result = result;
                if (!isSkippedAnalytics) {
                    analytics === null || analytics === void 0 || analytics.track(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_EVENTS"].JRPC_REQUEST_COMPLETED, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        request_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_JRPC_REQUEST_TYPES"].NETWORK
                    }, trackData), {}, {
                        duration: Date.now() - startTime
                    }));
                }
                return;
            } catch (err) {
                const errMsg = (err.message || err).toString();
                const isRetriable = RETRIABLE_ERRORS.some((phrase)=>errMsg.includes(phrase));
                // re-throw error if not retriable
                if (!isRetriable) {
                    if (!isSkippedAnalytics) {
                        analytics === null || analytics === void 0 || analytics.track(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_EVENTS"].JRPC_REQUEST_FAILED, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            request_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_JRPC_REQUEST_TYPES"].NETWORK
                        }, trackData), {}, {
                            error_code: err === null || err === void 0 ? void 0 : err.code,
                            error_message: errMsg,
                            duration: Date.now() - startTime
                        }));
                    }
                    const error = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeError"])(err);
                    throw error;
                }
            }
            // delay before retrying
            await timeout(retryInterval);
        }
    });
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Embed/CommunicationMethodMiddleware.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createChangeProviderMiddlewareMiddleware",
    ()=>createChangeProviderMiddlewareMiddleware,
    "createCommunicationMiddleware",
    ()=>createCommunicationMiddleware,
    "createGenericJRPCMiddleware",
    ()=>createGenericJRPCMiddleware,
    "createTopupMiddleware",
    ()=>createTopupMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/jrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpcEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/jrpcEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/enums.js [app-client] (ecmascript)");
;
;
function createChangeProviderMiddlewareMiddleware({ changeProvider }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncMiddleware"])(async (request, response, next)=>{
        const { method } = request;
        if (method !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SET_PROVIDER) return next();
        if (!changeProvider) throw new Error("CommunicationMiddleware - opts.changeProvider not provided");
        response.result = await changeProvider(request);
    });
}
function createTopupMiddleware({ topup }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncMiddleware"])(async (request, response, next)=>{
        const { method } = request;
        if (method !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].TOPUP) return next();
        if (!topup) throw new Error("CommunicationMiddleware - opts.topup not provided");
        response.result = await topup(request);
    });
}
function createGenericJRPCMiddleware(targetMethod, handler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncMiddleware"])(async (request, response, next)=>{
        const { method } = request;
        if (method !== targetMethod) return next();
        if (!handler) throw new Error(`CommunicationMiddleware - ${targetMethod} not provided`);
        const result = await handler(request);
        if (!result) {
            return next();
        }
        response.result = result;
        return undefined;
    });
}
function createCommunicationMiddleware(providerHandlers) {
    const { getUserInfo, getWalletInstanceId, topup, logout, changeProvider, setIFrameStatus, handleWindowRpc, getProviderState, loginWithPrivateKey, showWalletConnect, showFunding, showCheckout, showReceive, showWalletUi, showSwap, showWindowBlockAlert, loginWithSessionId } = providerHandlers;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpcEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMiddleware"])([
        createChangeProviderMiddlewareMiddleware({
            changeProvider
        }),
        createTopupMiddleware({
            topup
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaffoldMiddleware"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].LOGOUT]: logout,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].WALLET_INSTANCE_ID]: getWalletInstanceId,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].USER_INFO]: getUserInfo,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].IFRAME_STATUS]: setIFrameStatus,
            // Do this in the orchestrator because communicationWindowManager needs to be passed into PopupHandlers
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].CLOSED_WINDOW]: handleWindowRpc,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].GET_PROVIDER_STATE]: getProviderState,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_WALLET_CONNECT]: showWalletConnect,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_FUNDING]: showFunding,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_CHECKOUT]: showCheckout,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_RECEIVE]: showReceive,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_WALLET_UI]: showWalletUi,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].SHOW_SWAP]: showSwap,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].WINDOW_BLOCKED]: showWindowBlockAlert
        }),
        createGenericJRPCMiddleware(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].LOGIN_WITH_PRIVATE_KEY, loginWithPrivateKey),
        createGenericJRPCMiddleware(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMUNICATION_JRPC_METHODS"].LOGIN_WITH_SESSION_ID, loginWithSessionId)
    ]);
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Network/createInflightCacheMiddleware.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInflightCacheMiddleware",
    ()=>createInflightCacheMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@web3auth/auth/dist/lib.esm/jrpc/jrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/lodashUtils.js [app-client] (ecmascript)");
;
;
;
function deferredPromise() {
    let resolve;
    const promise = new Promise((_resolve)=>{
        resolve = _resolve;
    });
    return {
        resolve,
        promise
    };
}
function createInflightCacheMiddleware({ cacheIdentifierForRequest }) {
    const inflightRequests = {};
    async function createActiveRequestHandler(res, activeRequestHandlers) {
        const { resolve, promise } = deferredPromise();
        activeRequestHandlers.push((handledRes)=>{
            // append a copy of the result and error to the response
            res.result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneDeep"])(handledRes.result);
            res.error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneDeep"])(handledRes.error);
            resolve();
        });
        return promise;
    }
    function handleActiveRequest(res, activeRequestHandlers) {
        // use setTimeout so we can resolve our original request first
        setTimeout(()=>{
            activeRequestHandlers.forEach((handler)=>{
                try {
                    handler(res);
                } catch (err) {
                    // catch error so all requests are handled correctly
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err);
                }
            });
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$jrpc$2f$jrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncMiddleware"])(async (req, res, next)=>{
        // allow cach to be skipped if so specified
        if (req.skipCache) {
            return next();
        }
        // get cacheId, if cacheable
        const cacheId = cacheIdentifierForRequest(req);
        // if not cacheable, skip
        if (!cacheId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("Request is not cacheable, proceeding. req = %o", req);
            return next();
        }
        // check for matching requests
        let activeRequestHandlers = inflightRequests[cacheId];
        // if found, wait for the active request to be handled
        if (activeRequestHandlers) {
            // setup the response listener and wait for it to be called
            // it will handle copying the result and request fields
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("Running %i handler(s) for request %o", activeRequestHandlers.length, req);
            await createActiveRequestHandler(res, activeRequestHandlers);
            return undefined;
        }
        // setup response handler array for subsequent requests
        activeRequestHandlers = [];
        inflightRequests[cacheId] = activeRequestHandlers;
        // allow request to be handled normally
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("Carrying original request forward %o", req);
        await next();
        // clear inflight requests
        delete inflightRequests[cacheId];
        // schedule activeRequestHandlers to be handled
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("Running %i collected handler(s) for request %o", activeRequestHandlers.length, req);
        handleActiveRequest(res, activeRequestHandlers);
        // complete
        return undefined;
    });
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Network/createAnalyticsMiddleware.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnalyticsMiddleware",
    ()=>createAnalyticsMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Network/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
;
function createAnalyticsMiddleware({ analytics, providerConfig }) {
    return (request, response, next)=>{
        // skip if the request method is not in the ANALYTICS_TRACKED_JPRC_METHODS
        if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_TRACKED_INTERNAL_JPRC_METHODS"]).includes(request.method)) {
            return next();
        }
        const startTime = Date.now();
        next((callback)=>{
            const trackData = {
                method: request.method,
                chain_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCaipChainId"])(providerConfig),
                chain_rpc_target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostname"])(providerConfig.rpcTarget),
                is_aa_provider_request: request.isAAProviderRequest
            };
            if (response.error) {
                analytics === null || analytics === void 0 || analytics.track(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_EVENTS"].JRPC_REQUEST_FAILED, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    request_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_JRPC_REQUEST_TYPES"].INTERNAL
                }, trackData), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorAnalyticsProperties"])(response.error)), {}, {
                    duration: Date.now() - startTime
                }));
            } else {
                analytics === null || analytics === void 0 || analytics.track(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_EVENTS"].JRPC_REQUEST_COMPLETED, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    request_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Network$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_JRPC_REQUEST_TYPES"].INTERNAL
                }, trackData), {}, {
                    duration: Date.now() - startTime
                }));
            }
            callback();
        });
    };
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/createSwappableProxy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSwappableProxy",
    ()=>createSwappableProxy
]);
function createSwappableProxy(initialTarget) {
    let target = initialTarget;
    let setTarget = (newTarget)=>{
        target = newTarget;
    };
    const proxy = new Proxy({}, {
        get: (_, name)=>{
            // override `setTarget` access
            if (name === "setTarget") return setTarget;
            return target[name];
        },
        set: (_, name, value)=>{
            // allow `setTarget` overrides
            if (name === "setTarget") {
                setTarget = value;
                return true;
            }
            target[name] = value;
            return true;
        },
        has: (_, key)=>{
            if (key[0] === "_") {
                return false;
            }
            return key in target;
        }
    });
    return proxy;
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/createEventEmitterProxy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventEmitterProxy",
    ()=>createEventEmitterProxy
]);
const filterNoop = ()=>true;
const internalEvents = [
    "newListener",
    "removeListener"
];
const externalEventFilter = (name)=>!internalEvents.includes(name);
function getRawListeners(eventEmitter, name) {
    // prefer native
    return typeof eventEmitter.rawListeners !== "undefined" ? eventEmitter.rawListeners(name) : eventEmitter.listeners(name);
}
function createEventEmitterProxy(initialTarget, opts) {
    // parse options
    const finalOpts = opts || {};
    let eventFilter = finalOpts.eventFilter || filterNoop;
    if (typeof eventFilter === "string" && eventFilter === "skipInternal") eventFilter = externalEventFilter;
    if (typeof eventFilter !== "function") throw new Error("createEventEmitterProxy - Invalid eventFilter");
    let target = initialTarget;
    let setTarget = (newTarget)=>{
        if (target === newTarget) return;
        const oldTarget = target;
        target = newTarget;
        const eventNames = oldTarget.eventNames();
        eventNames.filter(eventFilter).forEach((name)=>{
            getRawListeners(oldTarget, name).forEach((handler)=>{
                newTarget.on(name, handler);
            });
        });
        // remove old listeners
        oldTarget.removeAllListeners();
    };
    const proxy = new Proxy({}, {
        get: (_, name)=>{
            // override `setTarget` access
            if (name === "setTarget") return setTarget;
            return target[name];
        },
        set: (_, name, value)=>{
            // allow `setTarget` overrides
            if (name === "setTarget") {
                setTarget = value;
                return true;
            }
            target[name] = value;
            return true;
        },
        has: (_, key)=>{
            if (key[0] === "_") {
                return false;
            }
            return key in target;
        }
    });
    return proxy;
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/WSApiClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WSApiClient",
    ()=>WSApiClient,
    "constructAuthHeaders",
    ()=>constructAuthHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var HTTP_METHOD = /*#__PURE__*/ function(HTTP_METHOD) {
    HTTP_METHOD[HTTP_METHOD["GET"] = 0] = "GET";
    HTTP_METHOD[HTTP_METHOD["POST"] = 1] = "POST";
    HTTP_METHOD[HTTP_METHOD["PUT"] = 2] = "PUT";
    HTTP_METHOD[HTTP_METHOD["PATCH"] = 3] = "PATCH";
    HTTP_METHOD[HTTP_METHOD["DELETE"] = 4] = "DELETE";
    return HTTP_METHOD;
}(HTTP_METHOD || {});
const constructAuthHeaders = ({ jwtToken, publicAddress, eoaAddress, chainNamespace })=>{
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "public-address": publicAddress,
        "chain-namespace": chainNamespace
    };
    if (eoaAddress) {
        headers["eoa-address"] = eoaAddress;
    }
    return {
        headers
    };
};
const withUnauthorizedHandler = async (fn, emitter)=>{
    try {
        const response = await fn();
        return response;
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnauthorizedError"])(e)) {
            emitter.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControllerEvents"].UserUnauthorized);
        }
        throw e;
    }
};
const jwtTokenExpired = (jwt)=>{
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(jwt);
    const jwtExpiry = decoded.exp * 1000;
    const currentTime = new Date().getTime();
    return currentTime >= jwtExpiry;
};
const WSApiClient = (baseApiUrl, emitter)=>{
    const authRequest = (method, url, data, authCredentials, customOptions)=>{
        if (jwtTokenExpired(authCredentials.jwtToken)) {
            emitter.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControllerEvents"].UserUnauthorized);
            throw new Response(null, {
                status: 401,
                statusText: "Unauthorized"
            });
        }
        const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "Content-Type": "application/json; charset=utf-8"
        }, constructAuthHeaders(authCredentials));
        if (method === HTTP_METHOD.GET) {
            return withUnauthorizedHandler(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(url, headers, customOptions), emitter);
        }
        if (method === HTTP_METHOD.POST) {
            return withUnauthorizedHandler(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(url, data, headers, customOptions), emitter);
        }
        if (method === HTTP_METHOD.PUT) {
            return withUnauthorizedHandler(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["put"])(url, data, headers, customOptions), emitter);
        }
        if (method === HTTP_METHOD.PATCH) {
            return withUnauthorizedHandler(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patch"])(url, data, headers, customOptions), emitter);
        }
        if (method === HTTP_METHOD.DELETE) {
            return withUnauthorizedHandler(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])(url, data, headers, customOptions), emitter);
        }
    };
    return {
        authGet: (url, authCredentials, customOptions)=>authRequest(HTTP_METHOD.GET, `${baseApiUrl}/${url}`, {}, authCredentials, customOptions),
        authPost: (url, data, authCredentials, customOptions)=>authRequest(HTTP_METHOD.POST, `${baseApiUrl}/${url}`, data, authCredentials, customOptions),
        authPut: (url, data, authCredentials, customOptions)=>authRequest(HTTP_METHOD.PUT, `${baseApiUrl}/${url}`, data, authCredentials, customOptions),
        authPatch: (url, data, authCredentials, customOptions)=>authRequest(HTTP_METHOD.PATCH, `${baseApiUrl}/${url}`, data, authCredentials, customOptions),
        authRemove: (url, data, authCredentials, customOptions)=>authRequest(HTTP_METHOD.DELETE, `${baseApiUrl}/${url}`, data, authCredentials, customOptions)
    };
};
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Preferences/IPreferencesController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNT_CATEGORY",
    ()=>ACCOUNT_CATEGORY,
    "ACTIVITY_ACTION",
    ()=>ACTIVITY_ACTION
]);
const ACTIVITY_ACTION = {
    ACTIVITY_ACTION_ALL: "walletActivity.allTransactions",
    ACTIVITY_ACTION_SEND: "walletActivity.send",
    ACTIVITY_ACTION_RECEIVE: "walletActivity.receive",
    ACTIVITY_ACTION_TOPUP: "walletActivity.topup"
};
const ACCOUNT_CATEGORY = {
    NORMAL: "normal",
    THRESHOLD: "threshold",
    IMPORTED: "imported",
    // we have private key here
    APP_SCOPED: "app_scoped",
    ACCOUNT_ABSTRACTION: "account_abstraction",
    EXTERNAL: "external",
    // like metamask, wallet connect
    MPC: "mpc",
    SFA: "sfa",
    SFA_ACCOUNT_ABSTRACTION: "sfa_account_abstraction",
    APP_SCOPED_DERIVED: "app_scoped_derived"
};
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Preferences/BasePreferencesController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasePreferencesController",
    ()=>BasePreferencesController,
    "DEFAULT_PREFERENCES",
    ()=>DEFAULT_PREFERENCES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bowser/es5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/lodashUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$WSApiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/WSApiClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Preferences/IPreferencesController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
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
// By default, poll every 3 minutes
const DEFAULT_INTERVAL = 180 * 1000;
const DEFAULT_PREFERENCES = {
    selectedCurrency: "USD",
    theme: "dark",
    locale: "en",
    accountType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].NORMAL,
    contacts: [],
    jwtToken: "",
    fetchedPastTx: [],
    pastTransactions: [],
    paymentTx: [],
    defaultPublicAddress: "",
    customTokens: [],
    customNfts: [],
    crashReport: true,
    userInfo: {
        email: "",
        name: "",
        profileImage: "",
        authConnectionId: "",
        userId: "",
        authConnection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].GOOGLE,
        groupedAuthConnectionId: ""
    }
};
/**
 * Controller that stores shared settings and exposes convenience methods
 */ class BasePreferencesController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    /**
   * Creates a PreferencesController instance
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */ constructor({ config, state, defaultPreferences, signAuthMessage, validateSignMessage }){
        super({
            config,
            state
        });
        /**
     * Name of this controller used during composition
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "name", "PreferencesController");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "iframeOrigin", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "wsApiClient", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "chainNamespace", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "signAuthMessage", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "validateSignMessage", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "defaultPreferences", void 0);
        if (!config.api) {
            throw new Error("PreferencesController - no api specified in config.");
        }
        this.defaultState = {
            identities: {},
            selectedAddress: "",
            lastErrorMessage: "",
            lastSuccessMessage: ""
        };
        this.defaultConfig = {
            api: config.api,
            pollInterval: DEFAULT_INTERVAL
        };
        this.initialize();
        this.defaultPreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, DEFAULT_PREFERENCES), defaultPreferences);
        this.signAuthMessage = signAuthMessage;
        this.validateSignMessage = validateSignMessage;
        this.wsApiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$WSApiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WSApiClient"])(this.config.api, this);
    }
    setIframeOrigin(origin) {
        this.iframeOrigin = origin;
    }
    getAddressState(address) {
        const selectedAddress = address || this.state.selectedAddress;
        return this.state.identities[selectedAddress];
    }
    /**
   * Sets selected address
   *
   * @param selectedAddress - casper account hash
   */ setSelectedAddress(selectedAddress) {
        this.update({
            selectedAddress
        });
    }
    async getUser(address) {
        const user = await this.wsApiClient.authGet("user?fetchTx=false", this.authCredentials(address), {
            useAPIKey: true
        });
        return user.data;
    }
    async createUser(params) {
        const { selectedCurrency, theme, authConnectionId, groupedAuthConnectionId, userId, locale, address, idToken, type, web3AuthNetwork, metadata } = params;
        const userPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            default_currency: selectedCurrency,
            theme,
            verifier: groupedAuthConnectionId || authConnectionId,
            verifier_id: userId,
            locale,
            idToken,
            account_type: type,
            web3auth_network: web3AuthNetwork
        }, metadata);
        await this.wsApiClient.authPost("user", userPayload, this.authCredentials(address), {
            useAPIKey: true
        });
        this.updateState({
            theme,
            defaultPublicAddress: address,
            selectedCurrency,
            locale,
            accountType: type
        }, address);
    }
    async storeUserLogin(params) {
        const { authConnectionId, groupedAuthConnectionId, userId, options, address, idToken, web3AuthClientId, web3AuthNetwork, sessionPubKey, loginMode } = params;
        if (!options.rehydrate) {
            const browser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getParser(window.navigator.userAgent);
            const specialBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomDeviceInfo"])();
            const recordLoginPayload = {
                os: browser.getOSName(),
                os_version: browser.getOSVersion() || "unidentified",
                browser: (specialBrowser === null || specialBrowser === void 0 ? void 0 : specialBrowser.browser) || browser.getBrowserName() || "unidentified",
                browser_version: browser.getBrowserVersion() || "unidentified",
                platform: browser.getPlatform().type || "desktop",
                hostname: this.iframeOrigin,
                verifier: groupedAuthConnectionId || authConnectionId,
                verifier_id: userId,
                idToken,
                web3auth_client_id: web3AuthClientId,
                web3auth_network: web3AuthNetwork,
                session_pub_key: sessionPubKey,
                login_mode: loginMode
            };
            await this.wsApiClient.authPost("user/recordLogin", recordLoginPayload, this.authCredentials(address), {
                useAPIKey: true
            });
        }
    }
    async setCrashReport(isEnabled) {
        var _this$getAddressState;
        if (isEnabled === ((_this$getAddressState = this.getAddressState()) === null || _this$getAddressState === void 0 ? void 0 : _this$getAddressState.crashReport)) return true;
        try {
            await this.wsApiClient.authPatch("user", {
                enable_crash_reporter: isEnabled
            }, this.authCredentials(), {
                useAPIKey: true
            });
            this.updateState({
                crashReport: isEnabled
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
            return false;
        }
    }
    async setUserTheme(theme) {
        var _this$getAddressState2;
        if (theme === ((_this$getAddressState2 = this.getAddressState()) === null || _this$getAddressState2 === void 0 ? void 0 : _this$getAddressState2.theme)) return true;
        try {
            await this.wsApiClient.authPatch("user", {
                theme
            }, this.authCredentials(), {
                useAPIKey: true
            });
            this.updateState({
                theme
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
            return false;
        }
    }
    async setUserLocale(locale) {
        var _this$getAddressState3;
        if (locale === ((_this$getAddressState3 = this.getAddressState()) === null || _this$getAddressState3 === void 0 ? void 0 : _this$getAddressState3.locale)) return;
        try {
            await this.wsApiClient.authPatch("user", {
                locale
            }, this.authCredentials(), {
                useAPIKey: true
            });
            this.updateState({
                locale
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to set locale", error);
            return false;
        }
    }
    async setSelectedCurrency(payload) {
        var _this$getAddressState4;
        if (payload.selectedCurrency === ((_this$getAddressState4 = this.getAddressState()) === null || _this$getAddressState4 === void 0 ? void 0 : _this$getAddressState4.selectedCurrency)) return true;
        try {
            await this.wsApiClient.authPatch("user", {
                default_currency: payload.selectedCurrency
            }, this.authCredentials(), {
                useAPIKey: true
            });
            this.updateState({
                selectedCurrency: payload.selectedCurrency
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
            return false;
        }
    }
    async addContact(contact) {
        try {
            var _this$getAddressState5;
            const response = await this.wsApiClient.authPost("contact", contact, this.authCredentials(), {
                useAPIKey: true
            });
            this.updateState({
                contacts: [
                    ...((_this$getAddressState5 = this.getAddressState()) === null || _this$getAddressState5 === void 0 ? void 0 : _this$getAddressState5.contacts) || [],
                    response.data
                ]
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to add contact", error);
            return false;
        }
    }
    async deleteContact(contactId) {
        try {
            var _this$getAddressState6;
            const response = await this.wsApiClient.authRemove(`contact/${contactId}`, {}, this.authCredentials(), {
                useAPIKey: true
            });
            const finalContacts = (_this$getAddressState6 = this.getAddressState()) === null || _this$getAddressState6 === void 0 ? void 0 : _this$getAddressState6.contacts.filter((contact)=>contact.id !== response.data.id);
            if (finalContacts) this.updateState({
                contacts: [
                    ...finalContacts
                ]
            });
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to delete contact", error);
            return false;
        }
    }
    async revokeDiscord(idToken) {
        try {
            const resp = await this.wsApiClient.authPost("revoke/discord", {
                token: idToken
            }, this.authCredentials(), {
                useAPIKey: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info(resp);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
        }
    }
    async patchPastTx(body, address) {
        try {
            const response = await this.wsApiClient.authPatch("transaction", body, this.authCredentials(address), {
                useAPIKey: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("successfully patched", response);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to patch tx", error);
        }
    }
    async postPastTx(tx, address) {
        try {
            const response = await this.wsApiClient.authPost("transaction", tx, this.authCredentials(address), {
                useAPIKey: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("successfully posted tx", response);
            return response;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error, "unable to insert transaction");
        }
    }
    async getWalletOrders(address) {
        try {
            const response = await this.wsApiClient.authGet("transaction", this.authCredentials(address), {
                useAPIKey: true
            });
            return response.success ? response.data ? response.data : [] : [];
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to get wallet orders tx", error);
            return [];
        }
    }
    async getTopUpOrders(address) {
        try {
            const response = await this.wsApiClient.authGet("transaction", this.authCredentials(address), {
                useAPIKey: true
            });
            return response.data || [];
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to fetch past Top up orders", error);
        }
    }
    async getBillBoardData() {
        try {
            const response = await this.wsApiClient.authGet("billboard", this.authCredentials(), {
                useAPIKey: true
            });
            return response.success ? response.data : [];
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to get billboard data", error);
            return [];
        }
    }
    async getMessageForSigning(publicAddress, web3AuthIdToken) {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`${this.config.api}/auth/message`, {
            public_address: publicAddress,
            id_token: web3AuthIdToken,
            chain_namespace: this.chainNamespace
        }, {}, {
            useAPIKey: true
        });
        return response.message;
    }
    async getTwitterId(payload) {
        const res = await this.wsApiClient.authGet(`twitter?screen_name=${payload.nick}`, this.authCredentials(), {
            useAPIKey: true
        });
        return `${payload.typeOfLogin.toLowerCase()}|${res.data.toString()}`;
    }
    async sendEmail(payload) {
        return this.wsApiClient.authPost("transaction/sendemail", payload.emailObject, this.authCredentials(), {
            useAPIKey: true
        });
    }
    async refreshJwt() {
        const address = this.state.selectedAddress;
        const messageToSign = await this.getMessageForSigning(address);
        await this.validateSignMessage(messageToSign);
        const signedMessage = await this.signAuthMessage(address, messageToSign);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`${this.config.api}/auth/verify`, {
            challenge: messageToSign,
            public_address: address,
            signed_message: signedMessage,
            chain_namespace: this.chainNamespace
        }, {}, {
            useAPIKey: true
        });
        this.updateState({
            jwtToken: response.token
        }, address);
    }
    async getDappList() {
        try {
            const response = await this.wsApiClient.authGet("dapps", this.authCredentials(), {
                useAPIKey: true
            });
            return response.success ? response.data : [];
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("unable to get dapps list", error);
            return [];
        }
    }
    /**
   * Strategy
   * For account type: threshold, normal (web3auth login)
   * idToken from web3auth login must be present. We use it directly
   *
   * For account type: app_scoped, IMPORTED
   * idToken from web3auth login must be present. We request a message for signing using the idToken
   * and sign it using the private key of the account. We then send the signed message to the backend
   * to verify the signature and return a new jwtToken that includes the app_scoped address
   *
   * For account type: Account abstraction
   * idToken from web3auth login must be present. We use it to exchange for a new jwtToken.
   * Because backend can derive AA address from public address and issue this token easily.
   *
   * For account type: external
   * idToken from web3auth `authenticateUser` (siww) login must be present. We use it directly
   */ async init(params) {
        const { address, userInfo, idToken, metadata = {}, type } = params;
        if (this.getAddressState(address)) return;
        let jwtToken;
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].EXTERNAL:
                {
                    if (!idToken) throw new Error("SIWW idToken must be present");
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`${this.config.api}/auth/verify`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        account_type: type,
                        public_address: address,
                        id_token: idToken,
                        verifier: userInfo.groupedAuthConnectionId || userInfo.authConnectionId,
                        verifier_id: userInfo.userId,
                        chain_namespace: this.chainNamespace
                    }, metadata), {}, {
                        useAPIKey: true
                    });
                    jwtToken = response.token;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].IMPORTED:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].APP_SCOPED_DERIVED:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].ACCOUNT_ABSTRACTION:
                {
                    if (!idToken) throw new Error("Web3Auth idToken must be present");
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`${this.config.api}/auth/verify`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        public_address: address,
                        id_token: idToken,
                        verifier: userInfo.groupedAuthConnectionId || userInfo.authConnectionId,
                        verifier_id: userInfo.userId,
                        account_type: type,
                        chain_namespace: this.chainNamespace
                    }, metadata), {}, {
                        useAPIKey: true
                    });
                    jwtToken = response.token;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].MPC:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].SFA:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].SFA_ACCOUNT_ABSTRACTION:
                {
                    if (!metadata.signatures) throw new Error("web3auth signatures must be present");
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`${this.config.api}/auth/verify`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        public_address: address,
                        verifier: userInfo.groupedAuthConnectionId || userInfo.authConnectionId,
                        verifier_id: userInfo.userId,
                        account_type: type,
                        chain_namespace: this.chainNamespace
                    }, metadata), {}, {
                        useAPIKey: true
                    });
                    jwtToken = response.token;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].NORMAL:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].THRESHOLD:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Preferences$2f$IPreferencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCOUNT_CATEGORY"].APP_SCOPED:
            default:
                if (!idToken) throw new Error("Web3Auth idToken must be present");
                jwtToken = idToken;
                break;
        }
        this.updateState({
            jwtToken,
            userInfo,
            accountType: type !== null && type !== void 0 ? type : this.defaultPreferences.accountType
        }, address);
    }
    updateState(preferences, address) {
        const selectedAddress = address || this.state.selectedAddress;
        const currentState = this.getAddressState(selectedAddress) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneDeep"])(this.defaultPreferences);
        const mergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, currentState), preferences);
        this.update({
            identities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.state.identities), {}, {
                [selectedAddress]: mergedState
            })
        });
        return mergedState;
    }
    authCredentials(address) {
        var _this$getAddressState7;
        const selectedAddress = address || this.state.selectedAddress;
        const jwtToken = ((_this$getAddressState7 = this.getAddressState(selectedAddress)) === null || _this$getAddressState7 === void 0 ? void 0 : _this$getAddressState7.jwtToken) || "";
        return {
            jwtToken,
            publicAddress: selectedAddress,
            chainNamespace: this.chainNamespace
        };
    }
    headers(address) {
        var _this$getAddressState8;
        const selectedAddress = address || this.state.selectedAddress;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeaders"])(((_this$getAddressState8 = this.getAddressState(selectedAddress)) === null || _this$getAddressState8 === void 0 ? void 0 : _this$getAddressState8.jwtToken) || "", selectedAddress);
    }
}
;
}),
"[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Transaction/BaseTransactionStateController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTransactionStateManager",
    ()=>BaseTransactionStateManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/BaseController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/lodashUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/Transaction/ITransactionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toruslabs/ethereum-controllers/node_modules/@toruslabs/base-controllers/dist/lib.esm/utils/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
class BaseTransactionStateManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$BaseController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseController"] {
    constructor({ config, state, getCurrentChainId }){
        super({
            config,
            state
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "getCurrentChainId", void 0);
        this.defaultConfig = {
            txHistoryLimit: 40
        };
        this.defaultState = {
            transactions: {},
            unapprovedTxs: {},
            currentNetworkTxsList: []
        };
        this.initialize();
        this.getCurrentChainId = getCurrentChainId;
    }
    getUnapprovedTxList() {
        const chainId = this.getCurrentChainId();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickBy"])(this.state.transactions, (transaction)=>transaction.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].unapproved && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionMatchesNetwork"])(transaction, chainId));
    }
    getTransaction(txId) {
        const { transactions } = this.state;
        return transactions[txId];
    }
    updateTransaction(txMeta) {
        // commit txMeta to state
        const txId = txMeta.id;
        txMeta.updated_at = new Date().toISOString();
        this.update({
            transactions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.state.transactions), {}, {
                [txId]: txMeta
            })
        });
    }
    setTxStatusRejected(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].rejected);
        this._deleteTransaction(txId);
    }
    /**
   * The implementing controller can override this functionality and add custom logic + call super.()
   */ setTxStatusUnapproved(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].unapproved);
    }
    setTxStatusApproved(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].approved);
    }
    setTxStatusSigned(txId, isFinalStep) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].signed, isFinalStep);
    }
    setTxStatusSubmitted(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].submitted);
    }
    setTxStatusDropped(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].dropped);
    }
    setTxStatusExpired(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].expired);
    }
    setTxStatusConfirmed(txId) {
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].confirmed);
    }
    setTxStatusFailed(txId, error_) {
        const error = !error_ ? new Error("Internal torus failure") : error_;
        const txMeta = this.getTransaction(txId);
        txMeta.error = error;
        this.updateTransaction(txMeta);
        this._setTransactionStatus(txId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].failed);
    }
    /**
   * Method to determine if the transaction is in a final state
   * @param status - Transaction status
   * @returns boolean if the transaction is in a final state
   */ isFinalState(status) {
        return status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].rejected || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].submitted || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].confirmed || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].failed || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].cancelled || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].expired;
    }
    /**
   * Filters out the unapproved transactions from state
   */ clearUnapprovedTxs() {
        this.update({
            transactions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$utils$2f$lodashUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omitBy"])(this.state.transactions, (transaction)=>transaction.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionStatus"].unapproved)
        });
    }
    /**
   * will append new transactions to old txns.
   */ _addTransactionsToState(transactions) {
        this.update({
            transactions: transactions.reduce((result, newTx)=>{
                result[newTx.id] = newTx;
                return result;
            }, this.state.transactions)
        });
    }
    /**
   * will set new txns, override existing if any in state.
   */ _setTransactionsToState(transactions) {
        this.update({
            transactions: transactions.reduce((result, newTx)=>{
                result[newTx.id] = newTx;
                return result;
            }, {})
        });
    }
    _deleteTransaction(targetTransactionId) {
        const { transactions } = this.state;
        delete transactions[targetTransactionId];
        this.update({
            transactions
        });
    }
    _deleteTransactions(targetTransactionIds) {
        const { transactions } = this.state;
        targetTransactionIds.forEach((transactionId)=>{
            delete transactions[transactionId];
        });
        this.update({
            transactions
        });
    }
    _setTransactionStatus(txId, status, isFinalStep) {
        const txMeta = this.getTransaction(txId);
        if (!txMeta) {
            return;
        }
        txMeta.status = status;
        // only updating status so no validation required on txn.
        this.updateTransaction(txMeta);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toruslabs$2f$ethereum$2d$controllers$2f$node_modules$2f40$toruslabs$2f$base$2d$controllers$2f$dist$2f$lib$2e$esm$2f$Transaction$2f$ITransactionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_EVENTS"].TX_STATUS_UPDATE, {
            txId,
            status
        });
        if (this.isFinalState(status) || isFinalStep) {
            this.emit(`${txMeta.id}:finished`, txMeta);
        } else {
            this.emit(`${txMeta.id}:${status}`, txId);
        }
    }
}
;
}),
]);

//# sourceMappingURL=8fa6b_%40toruslabs_base-controllers_dist_lib_esm_7835ed12._.js.map