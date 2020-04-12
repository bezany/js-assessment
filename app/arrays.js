exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((acc, el) => acc + el, 0);
  },

  remove: function(arr, item) {
    return arr.filter((el) => el !== item);
  },

  removeWithoutCopy: function(arr, item) {
    let i = 0;

    while (i < arr.length) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((count, el) => count + (el === item), 0);
  },

  duplicates: function(arr) {
    const elements = new Set();
    const dublicates = new Set();
    arr.forEach((el) => {
      if (elements.has(el)) {
        dublicates.add(el);
      } else {
        elements.add(el);
      }
    });
    return [...dublicates];
  },

  square: function(arr) {
    return arr.map((el) => Math.pow(el, 2));
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc, item, index) => {
      if (item === target) {
        acc.push(index);
      }
      return acc;
    }, []);
  }
};
