/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable semi */
/* eslint-disable no-var */
var numbers = { x: 1, y: 2, z: 3 };
// for (var i in numbers) {
//   if (numbers.hasOwnProperty(i)) {
//     console.log(i + '-' + numbers[i]);
//   }
// }
var o1 = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 };
// console.log(o1);
//
function createCopy (o, p) {
  for (var prop in p) { // For all props in p.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// var q = {};
// console.log(q);
// q = createCopy(q, o1);
// console.log(q);
//
function merge (o, p) {
  for (var prop in p) { // For all props in p.
    if (prop in o) continue
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
var r = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 };
var s = { a: 100, b: 200, c: 300, d: 400, e: 500, w: 600, x: 700, y: 800, z: 900 };
// var t = merge(r, s);
// var t = merge(s, r);
// console.log(t);
// -------------
/*
* For each property of p, delete the property with the same name from o.
* Return o.
*/
function removeCommonItem (o, p) {
  for (var prop in p) { // For all props in p
    if (o.hasOwnProperty(prop)) {
      delete o[prop]; // Delete from o (deleting a nonexistent prop is harmless)
    }
  }
  return o;
}
// var t1 = removeCommonItem(r, s);
// console.log(t1);
/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function removeUnCommonItem (o, p) {
  for (var prop in o) { // For all props in o
    if (!(prop in p)) delete o[prop] // Delete if not in p
  }
  return o;
}
console.log(r);
// var t2 = removeUnCommonItem(r, s);
// console.log(t2);
// console.log(r);
// -------------
function union (o, p) { return createCopy(createCopy({}, o), p) }
// var t3 = union(r, s);
// console.log(t3);
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
//
/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection (o, p) { return removeUnCommonItem(createCopy({}, o), p) }
var t4 = union(r, s);
console.log(t4);
