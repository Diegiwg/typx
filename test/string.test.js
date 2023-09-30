import ava from "ava";

import { safeString } from "../lib/typx.js";

ava("Create a String", (t) => {
    const obj = safeString("test");

    const result = obj.get;
    const expected = "test";

    t.is(result, expected);
});

ava("Set a String", (t) => {
    const obj = safeString("test");
    obj.set("test2");

    const result = obj.get;
    const expected = "test2";

    t.is(result, expected);
});

ava("Get a String", (t) => {
    const obj = safeString("test");

    const result = obj.get;
    const expected = "test";

    t.is(typeof result, typeof expected);
});

ava("Trow TypeError if value is null", (t) => {
    t.throws(() => {
        safeString(null);
    });
});

ava("Trow TypeError if value is not a String", (t) => {
    t.throws(() => {
        safeString(0);
    });
});
