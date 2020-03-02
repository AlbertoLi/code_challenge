// Function Composition and Currying

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const flip = fn => a => b => fn(b)(a);
export const trace = value => label => {
    console.log(`${ label }: ${ value }`);
    return value;
};


const flippedTrace = flip(trace);
const g = n => n + 1;
const f = n => n * 2;

const h = pipe(              // 20
    g,                       // g(20)                       returns 21
    flippedTrace('after g'), // flippedTrace(21)('after g') returns 21 and prints 'after g: 21'
    f,                       // f(21)                       returns 42
    flippedTrace('after f')  // flippedTrace(21)('after f') returns 42 and prints 'after f: 42'
);

h(20);