import americanOnly from "./american-only.js";
import americanToBritishSpelling from "./american-to-british-spelling.js";
import americanToBritishTitles from "./american-to-british-titles.js";
import britishOnly from "./british-only.js";

class Translator {
  static adjustCase(inputText) {
    // match first letter and return it as uppercased
    const substituteTextMatch = new RegExp("^[a-z]", "gi")
    const upperCasedCharFn = (char) => char.toUpperCase()
    const uppercasedText = inputText.replace(substituteTextMatch, upperCasedCharFn)
    return uppercasedText
  }
  static highlightAndReplace(_ignore, replacement, shouldHighlight=true, needsAdjustment=false) {
    if (needsAdjustment) {
      // call upper casing function
      replacement = Translator.adjustCase(replacement)
    }
    return () => {
      // replace whitespace with null character
      const newStrWithNullChar = replacement.replace(/\s/g, "\0")
      shouldHighlight ? `<span class="highlight">${newStrWithNullChar}</span>` :`~${newStrWithNullChar}~`
    }
  }
  static translateAmericanToBritish(input) {
  }
  static translateBritishToAmerican(input) {
  }
}

export {
  Translator
}
