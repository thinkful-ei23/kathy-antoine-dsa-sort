const numArr1 = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

const numArr = [89, 30, 25, 32, 72, 14, 11, 29, 70];

let count = 0;
const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const qSort = (array, start = 0, end = array.length) => {
  count++;
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
};

const partition = (array, start, end) => {
  let swaps = 0;
  console.log('Counter:', swaps);
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
      swaps++;
    }
  }
  swap(array, end - 1, j);
  swaps++;
  return j;
};

qSort(numArr);
console.log(count, 'Count Vlad');
//==========================
let countMSort = 0;
let countMerge = 0;

const mSort = array => {
  countMSort++;
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
};
const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

mSort(numArr);
console.log(countMSort, 'Count Chocular');
//========================================================================================================

// BUCKET SORT
// InsertionSort to be used within bucket sort
const insertionSort = array => {
  let length = array.length;

  for (let i = 1; i < length; i++) {
    let temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
};

// Implement bucket sort
const bucketSort = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  let i;
  let minValue = array[0];
  let maxValue = array[0];
  bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function(currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  console.log('BUCKET COUNT:', bucketCount);
  let allBuckets = new Array(bucketCount);
  console.log('ALL BUCKETS:', allBuckets);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function(currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
    console.log('BUCKETS PUSHED:', allBuckets);
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function(bucket) {
    insertionSort(bucket);
    bucket.forEach(function(element) {
      array.push(element);
    });
    console.log('SORTED BUCKET:', bucket);
  });
  return array;
};

console.log('THE WHOLE BUCKET:', bucketSort(numArr));
