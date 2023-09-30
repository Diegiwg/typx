import ava from "ava";

import { safeObject } from "../lib/typx.js";

ava("Create a Object", (t) => {
    const obj = safeObject([]);

    const result = obj.get;
    const expected = [];

    t.is(typeof result, typeof expected);
});

ava("Set a Object", (t) => {
    const obj = safeObject([]);
    obj.set([1, 2, 3]);

    const result = obj.get;
    const expected = [1, 2, 3];

    t.is(typeof result, typeof expected);
});

ava("Get a Object", (t) => {
    const obj = safeObject([1, 2, 3]);

    const result = obj.get;
    const expected = [1, 2, 3];

    t.is(typeof result, typeof expected);
});

ava("Trow TypeError if value is null", (t) => {
    t.throws(() => {
        safeObject(null);
    });
});

ava("Trow TypeError if value is not a Object", (t) => {
    t.throws(() => {
        safeObject({});
    });
});
