// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  const arrPin = pin.split("");

  if (arrPin.length !== 4 && arrPin.length !== 6) {
    return false;
  }

  for (let i = 0; i < arrPin.length; i++) {
    if (isNaN(parseInt(arrPin[i]))) {
      return false;
    }
  }

  return true;
}

console.log(validatePIN("0000234"));
