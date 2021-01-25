const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, test) {
  let result = []
    each(collection, function(element) {
      if (test(element)) {
      result.push(element)
    }
  });
  return result
}
// line 29 filter is a fn with collection, test 'callback'
// line 30 starts with empty array
// line 31 filters the array using anonymous fn
// line 32 & 33 if true put in result
// line 34 & 35 if false put in result
// line 37 returns the result

const reject = function (collection, test) {
  let result = []
    filter(collection, function(element) {
    if (!test(element)) {
      result.push(element)
    }
  })
  return result
};
// line 45 reject is a fn (collection, test)
// line 45 result is an empty array
// line 47 anonymous helper & callback fn
// line 48 checks to see if it's not 
// line 49 pushes the non-rejected numbers into the array
// exits line 52 returns the result

const uniq = function (array) {};
const map = function (collection, iterator) {};
const reduce = function (collection, iterator, accumulator) {};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
