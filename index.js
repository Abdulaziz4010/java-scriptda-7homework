// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]
// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         }

//         if (nums[left] <= nums[mid]) {
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//         else {
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

//     return -1;
// }

// let nums = [4, 5, 6, 7, 0, 1, 2];
// let target = 0;
// let index = search(nums, target);
// console.log(index);

// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang
// function search(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
// }

// let nums = [1, 3, 2, 4, 5, 6, 99, 102];
// let target = 5;
// let index = search(nums, target);
// console.log(index);

// 3.ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin
// let myObject = {
//   name: "Abdulaziz",
//   age: 22,
//   city: "Namangan",
// };

// let keys = Object.keys(myObject);
// console.log("Keys:", keys);

// let values = Object.values(myObject);
// console.log("Values:", values);

// 4. 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 1. ularning birlashmasi topilsin 2. birlashmasining keyi topilsin 3. birlashmasining valuesi topilsin 4. birlashmasining valuelarining yig'indisi topilsin
// let obj1 = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
// };

// let obj2 = {
//   e: 50,
//   f: 60,
//   g: 70,
//   h: 80,
// };

// let mergedObject = { ...obj1, ...obj2 };
// console.log("Merged Object:", mergedObject);

// let mergedKeys = Object.keys(mergedObject);
// console.log("Keys:", mergedKeys);

// let mergedValues = Object.values(mergedObject);
// console.log("Values:", mergedValues);

// let sumOfValues = mergedValues.reduce((sum, value) => sum + value, 0);
// console.log("Sum of Values:", sumOfValues);

// 5. Parametr sifatida istalgancha son qabul qiladigan funksiya yarating. Bu funksiyada shu sonlarning yig'indisi hisoblansin.(rast operation bilan qilinsin) 6. Ixtiyoriy function va array yarating, functionga berilgan parametr o'sish tartibida joylashgan array da nechinchi indexda, kamayish tartibida joylashgan arraydagi index toping.

// let myArray = [10, 20, 30, 40, 50, 60, 70, 80];

// function findIndex(arr, target) {
//   let increasingIndex = arr.indexOf(target);

//   let decreasingArr = [...arr].sort((a, b) => b - a);

//   let decreasingIndex = decreasingArr.indexOf(target);

//   return {
//     increasingIndex: increasingIndex,
//     decreasingIndex: decreasingIndex,
//   };
// }

// let target = 50;

// let result = findIndex(myArray, target);

// console.log("Increasing Index:", result.increasingIndex);
// console.log("Decreasing Index:", result.decreasingIndex);
