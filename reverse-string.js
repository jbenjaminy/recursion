'use strict';

/*Exercise 3: Take a string as input, reverse the string, and return the new string. */

let reverse = (string, string2) => {
  string2 = !string2 ? '' : string2;

  if (string.length == 0) return string2;

  string2 = string2 + string[string.length - 1];

  string = string.substring(0, string.length - 1);

  return reverse(string, string2);

  }

  console.log(reverse('t'));
