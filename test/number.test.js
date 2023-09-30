import ava from "ava";

import { safeNumber } from "../lib/typx.js";

ava("Create a Number", (t) => {
    const obj = safeNumber(0);

    const result = obj.get;
    const expected = 0;

    t.is(result, expected);
});

ava("Set a Number", (t) => {
    const obj = safeNumber(0);
    obj.set(1);

    const result = obj.get;
    const expected = 1;

    t.is(result, expected);
});

ava("Get a Number", (t) => {
    const obj = safeNumber(0);

    const result = obj.get;
    const expected = 0;

    t.is(typeof result, typeof expected);
});

ava("Trow TypeError if value is null", (t) => {
    t.throws(() => {
        safeNumber(null);
    });
});

ava("Trow TypeError if value is not a Number", (t) => {
    t.throws(() => {
        safeNumber("0");
    });
});
