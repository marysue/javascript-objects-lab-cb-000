/*global describe, it */

//defines a `recipes` object

var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
    //returns an object with the orignal key value pairs and the new key value pair'
    //test:  prop: 1, prop2: 2
    //  expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
    //    prop: 1,
    //    prop2: 2

    //it does not modify the original, but rather returns a clone with the new data'
    // updateObjectWithKeyAndValue(obj, 'prop2', 2)

    //  expect(obj['prop2']).toBe(undefined)
    return Object.assign( {}, object, { [key] : value} ) ;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
    //updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
    //  var obj = { prop: 1 }

    //  expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
    //    prop: 1,
    //    prop2: 2


    //  expect(obj).toMatch({
    //    prop: 1,
    //    prop2: 2
    object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key) {
    //deletes `key` from a clone of object and returns the new object (it is non-destructive)
    //  var obj = { prop: 1 }
    //  var newObj = deleteFromObjectByKey(obj, 'prop')

   //    expect(newObj['prop']).toBe(undefined)


    // it('does not modify the original object (it is non-destructive)
    //  var obj = { prop: 1 }

    //  deleteFromObjectByKey(obj, 'prop')
    //  expect(obj['prop']).toBe(1)
    var newObj = Object.assign( {}, object);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
    //returns object without the delete key/value pair', function() {
    //  var obj = { prop: 1 }
    //  var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

    //  expect(newObj['prop']).toBe(undefined)


    // it('modifies the original object', function() {
    //  var obj = { prop: 1 }
    //  var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

    //  expect(obj['prop']).toBe(undefined)
    delete object[key];
    return object;
}
