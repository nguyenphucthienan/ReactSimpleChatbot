export const convertString = (botUsername, messageContent) => {
  switch (botUsername) {
    case 'lowercase':
      return messageContent.toLowerCase();
    case 'UPPERCASE':
      return messageContent.toUpperCase();
    case 'TitleCase':
      return titleCase(messageContent);
    case 'AlTeRnAtEcAsE':
      return alternateCase(messageContent);
    case 'SwApcAsE':
      return swapCase(messageContent);
    default:
      return messageContent;
  }
};

function titleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

function alternateCase(text) {
  return text
    .split('')
    .map((char, index) => (
      (index % 2)
        ? char.toUpperCase()
        : char.toLowerCase())
    ).join('');
}

function swapCase(text) {
  return text
    .split('')
    .map(char => (
      char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase())
    ).join('');
}
