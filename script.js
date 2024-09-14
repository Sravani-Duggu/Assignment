// 1. ------------------------------

const p =new Promise((resolve, reject) => {
    resolve('Success!');
});
p.then(data => {
    console.log(data);
    return data.toUpperCase();
})
.then(data => {
    throw new Error('Something went wrong!');
})
.then(data => {
    console.log('This will not run.');
})
.catch(err => {
    console.log(err.message);
})
.then(() => {
    console.log('After the catch');
});

// 2.------------------------------------

async function test() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
    const p2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 500));

    const result1 = await p1;
    const result2 = await p2;

    console.log(result1);
    console.log(result2);
}
test();

// 3.----------------------------------------------------

console.log('Start');
setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');

// 4.--------------------------------------------------

new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
})
.then(result => {
    console.log(result);
    return new Promise((resolve) => setTimeout(() => resolve(result * 2), 1000));
})
.then(result => {
    console.log(result);
    return result * 2;
})
.then(console.log);

// 5.---------------------------------------------

const p1 = new Promise((resolve) => setTimeout(() => resolve('One'), 1000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject('Two'), 500));
const p3 = new Promise((resolve) => setTimeout(() => resolve('Three'), 1200));

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.error(error));

// 6.-----------------------------------------------

async function asyncFunc() {
    return 'Hello';
}
console.log(asyncFunc());

// 7.-------------------------------------------------

Promise.resolve('Success')
    .then((data) => {
        console.log(data);
        return data;
    })
    .finally(() => {
        console.log('Finally!');
    })
    .then((data) => {
        console.log(data);
    });

// 8.------------------------------------------------

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');

// 9.------------------------------------------------

async function test() {
    try{
        await Promise.reject('Oops!');
    } catch (e) {
        console.error(e);
    }
    console.log('After error handling');
}

test();

// 10.----------------------------------------------

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

console.log('End');


