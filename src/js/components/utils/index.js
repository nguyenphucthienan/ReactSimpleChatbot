export const convertString = (botUsername, messageContent) => {
  switch (botUsername) {
    case 'lowercase':
      return messageContent.toLowerCase();
    case 'UPPERCASE':
      return messageContent.toUpperCase();
    default:
      return messageContent;
  }
};
