function encrypt(plainText) {
  // Encrypted character(s)
  let encryptedText = ''
  for (let i = 0; i < plainText.length; i++) {
    // From ASCII Table
    let asciiNumber = plainText[i].charCodeAt()
    // Check if character(s) falls within A - M or a - m
    if (
      (asciiNumber >= 65 && asciiNumber <= 77) ||
      (asciiNumber >= 97 && asciiNumber <= 109)
    ) {
      encryptedText += String.fromCharCode(asciiNumber + 13)
    } // Check if character(s) falls within N - Z or n - z
    else if (
      (asciiNumber >= 78 && asciiNumber <= 90) ||
      (asciiNumber >= 110 && asciiNumber <= 122)
    ) {
      encryptedText += String.fromCharCode(asciiNumber - 13)
    } // Return character(s)/text as it is (for spaces, numbers or punctuation marks)
    else {
      encryptedText += plainText[i]
    }
  }
  return encryptedText
}
encrypt('Web3 Bridge Cipher')
