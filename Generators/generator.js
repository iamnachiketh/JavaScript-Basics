// Iterators are a pattern which has a method next() which returns an object which has two properties value, done

// We can make our own custom iterators

function makeIterator(start = 0,end = Infinity, jumpBy = 1){
    let iteratorCount = 0;
    let nextStart = start;
    let result = 0;

    return {
        next(){
            if(iteratorCount<end){
                result = {value:nextStart,done:false}
                nextStart = nextStart + jumpBy
                iteratorCount++;
                return result;
            }
            return {value:iteratorCount,done:true}
        }
    }
}

let myIterator = makeIterator(1,10);

let result = myIterator.next();

while(!result.done){
    console.log(result.value);
    result = myIterator.next();
}

// This is a custom iterator 

//Custom Iterator are very usefool but we have to carefully program it to maintain their internal state 

// But generative function is very prowerfull where we can writte our iterative algorithm by using a single function whise execution is not continuous

// Syntax for generative functions are function*

// yield keyword allways has to be used inside generative function 

// If we make a generative function we can use it inside for...of loop 

//Example 

function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

let even = count();

for(const val of even){
    console.log(val);
}

// Custom iterator using generative functions

function* generativeIterator(start,end,stepSize = 1){
    for(let i=start;i<=end;i+=stepSize){
        yield i;
    }
}

let myNewIterator = generativeIterator(1,10);

for(let val of myNewIterator){
    console.log(val);
}

// In generator also we have next(), value, done

// Uses of this generative is you can iterate different users in the Frontend or you can render user one by one.

// next() in generative function can be user for one by one display

// How to use : myIterator.next().value;