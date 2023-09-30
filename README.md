# Typx - Type Safety for JavaScript 🚀

The idea behind the Typx project is to provide a library that offers functions to guarantee type safety in JavaScript. Have you ever received a value from a user and wondered how to ensure it's a number? With Typx, you can have confidence that it's indeed a number! 🧐

## What is Typx? 🤔

Typx is a JavaScript library that empowers you with functions to create safe data types in JavaScript, ensuring type safety in your applications. It's your toolkit to:

- 📜 Create safe strings.
- 🔢 Ensure safe numbers.
- ✔️ Guard your booleans.
- 📦 Secure arrays.
- 🧩 Safeguard objects.

With Typx, you gain better control over your data types and reduce the risk of type-related errors in your code.

## Installation 📦

You can easily install Typx using npm:

```bash
npm install typx
```

## Usage 🛠️

Typx provides several functions to create safe data types. Here are some examples of how to use them:

### SafeString 📜

```javascript
import { string } from 'typx';

const mySafeString = string("Hello, Typx!"); // Creates a safe string
console.log(mySafeString.get); // Get the value
mySafeString.set("New value"); // Set a new value
```

### SafeNumber 🔢

```javascript
import { number } from 'typx';

const mySafeNumber = number(42); // Creates a safe number
console.log(mySafeNumber.get); // Get the value
mySafeNumber.set(99); // Set a new value
```

### SafeBoolean ✔️

```javascript
import { boolean } from 'typx';

const mySafeBoolean = boolean(true); // Creates a safe boolean
console.log(mySafeBoolean.get); // Get the value
mySafeBoolean.set(false); // Set a new value
```

### SafeArray 📦

```javascript
import { array } from 'typx';

const mySafeArray = array([1, 2, 3]); // Creates a safe array
console.log(mySafeArray.get); // Get the value
mySafeArray.set([4, 5, 6]); // Set a new value
```

### SafeObject 🧩

```javascript
import { object } from 'typx';

const mySafeObject = object({ name: 'John', age: 30 }); // Creates a safe object
console.log(mySafeObject.get); // Get the value
mySafeObject.set({ name: 'Alice', age: 25 }); // Set a new value
```

## License 📄

Typx is open-source software licensed under the [MIT License](LICENSE).
