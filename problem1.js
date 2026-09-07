function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return type + " | " + truthiness;
}

describeValue(42); // "number | truthy"
describeValue("hello"); // "string | truthy"
describeValue(null); // "object | falsy"
describeValue(undefined); // "undefined | falsy"
describeValue(false); // "boolean | falsy"
describeValue(0); // "number | falsy"
