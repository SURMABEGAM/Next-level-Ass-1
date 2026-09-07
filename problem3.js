function validateUsername(username) {
  //length
  if (username.length < 4) {
    return "Too Short";
  }
  //no space

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  // check word
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

// console.log(validateUsername("suman"));
// console.log(validateUsername("su"));
// console.log(validateUsername("suman kumar"));
// console.log(validateUsername("admin123"));
