import ava from "ava";

import { safeBoolean } from "../lib/typx.js";

ava("Create a Boolean", (t) => {
    const obj = safeBoolean(false);

    const result = obj.get;
    const expected = false;

    t.is(result, expected);
});

ava("Set a Boolean", (t) => {
    const obj = safeBoolean(false);
    obj.set(true);

    const result = obj.get;
    const expected = true;

    t.is(result, expected);
});

ava("Get a Boolean", (t) => {
    const obj = safeBoolean(true);

    const result = obj.get;
    const expected = true;

    t.is(typeof result, typeof expected);
});

ava("Trow TypeError if value is null", (t) => {
    t.throws(() => {
        safeBoolean(null);
    });
});

ava("Trow TypeError if value is not a Boolean", (t) => {
    t.throws(() => {
        safeBoolean(0);
    });
});
