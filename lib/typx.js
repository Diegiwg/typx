/**
 * @typedef {Object} SafeString
 * @property {string} get Value of the string.
 * @property {(value: string) => void} set Setter of the string.
 */

/**
 * Create a safe string.
 *
 * @param {string} value Value of the string
 * @returns {SafeString}
 */
export const safeString = function (value) {
    // Checker
    if (typeof value !== "string" || value == null) {
        throw TypeError("value must be a string");
    }

    return {
        get: value,
        /** @param {string} value */
        set: function (value) {
            const result = safeString(value);
            this.get = result.get;
        },
    };
};

/**
 * @typedef {Object} SafeNumber
 * @property {number} get Value of the number.
 * @property {(value: number) => void} set Setter of the number.
 */

/**
 * Create a safe number.
 *
 * @param {number} value Value of the number
 * @returns {SafeNumber}
 */
export const safeNumber = function (value) {
    // Checker
    if (typeof value !== "number" || isNaN(value) || value == null) {
        throw TypeError("value must be a number");
    }

    return {
        get: value,
        /** @param {number} value */
        set: function (value) {
            const result = safeNumber(value);
            this.get = result.get;
        },
    };
};

/**
 * @typedef {Object} SafeBoolean
 * @property {boolean} get Value of the boolean.
 * @property {(value: boolean) => void} set Setter of the boolean.
 */

/**
 * Create a safe boolean.
 *
 * @param {boolean} value Value of the boolean
 * @returns {SafeBoolean}
 */
export const safeBoolean = function (value) {
    // Checker
    if (typeof value !== "boolean" || value == null) {
        throw TypeError("value must be a boolean");
    }

    return {
        get: value,
        /** @param {boolean} value */
        set: function (value) {
            const result = safeBoolean(value);
            this.get = result.get;
        },
    };
};

/**
 * @typedef {Object} SafeArray
 * @property {Array} get Value of the array.
 * @property {(value: Array) => void} set Setter of the array.
 */

/**
 * Create a safe array.
 *
 * @param {Array} value Value of the array
 * @returns {SafeArray}
 */

export const safeArray = function (value) {
    // Checker
    if (!Array.isArray(value) || value == null) {
        throw TypeError("value must be an array");
    }

    return {
        get: value,
        /** @param {Array} value */
        set: function (value) {
            const result = safeArray(value);
            this.get = result.get;
        },
    };
};

/**
 * @typedef {{}} SafeObject
 * @property {{}} get Value of the object.
 * @property {(value: {}) => void} set Setter of the object.
 */

/**
 * Create a safe object.
 *
 * @param {{}} value Value of the object
 * @returns {SafeObject}
 */
export const safeObject = function (value) {
    // Checker
    if ((typeof value === "object" && !Array.isArray(value)) || value == null) {
        throw TypeError("value must be an object");
    }

    return {
        get: value,
        /** @param {{}} value */
        set: function (value) {
            const result = safeObject(value);
            this.get = result.get;
        },
    };
};
