function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return type + " | " + truthiness;
}

// console.log(describeValue(null));"
// console.log(describeValue(undefined));
// console.log(describeValue("suman"));
// console.log(describeValue(0));
