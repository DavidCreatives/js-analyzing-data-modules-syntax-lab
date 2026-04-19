


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// Function named combineUsers with a rest argument that acquires all values from the argument
function combineUsers(...args){

  // The flatList variable contains all values from the rest operator which are flattened(all nested arrays are eliminated) up to the depth of infinity.
  const flatList = args.flat(Infinity)

  // Combined object to contain the users and the date of the day
  combinedObject = {
    users: [],
    // the date is from the datejs module in the package.json and it is converted to a string and hence can be given a format of ('M/d/yyyy')
    merge_date: Date.today().toString('M/d/yyyy')
  }

  // By use of the spread operator a new array is formed within the users key and the values are obtained from the flatList array 
  combinedObject.users = [...flatList]


  console.log(combinedObject)
  return combinedObject
}

//Used to load the datejs library
require('datejs')

// Calling the function 
combineUsers(['Dave', 'Kamau'], ['Reuben', 'Imani'])