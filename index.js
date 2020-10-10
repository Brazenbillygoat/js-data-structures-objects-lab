
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
  const newDriver = {...driver}
  newDriver[key] = value;
  
  return newDriver
}

      
const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  const newDriver = {}
  newDriver[key] = value
  Object.assign(driver, newDriver)
  return driver
}


const deleteFromDriverByKey = (driver, key) => {
  const newDriver = {...driver};
  delete newDriver[key];
  return newDriver
}


const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver
}

destructivelyUpdateDriverWithKeyAndValue(driver, "hi", "there")
updateDriverWithKeyAndValue(driver, "hi", "there")