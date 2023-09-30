import ava from "ava";

import { safeArray } from "../lib/typx.js";

ava("Create a Array", (t) => {
    const obj = safeArray([]);

    const result = obj.get;
    const expected = [];

    t.is(typeof result, typeof expected);
});

ava("Set a Array", (t) => {
    const obj = safeArray([]);
    obj.set([1, 2, 3]);

    const result = obj.get;
    const expected = [1, 2, 3];

    t.is(typeof result, typeof expected);
});

ava("Get a Array", (t) => {
    const obj = safeArray([1, 2, 3]);

    const result = obj.get;
    const expected = [1, 2, 3];

    t.is(typeof result, typeof expected);
});

ava("Trow TypeError if value is null", (t) => {
    t.throws(() => {
        safeArray(null);
    });
});

ava("Trow TypeError if value is not a Array", (t) => {
    t.throws(() => {
        safeArray({});
    });
});
