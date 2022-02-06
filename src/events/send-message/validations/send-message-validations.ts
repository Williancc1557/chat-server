export const sendMessageValidation = (author: string, message: string) => {
    const authorLenght = author.length;
    const messageLenght = message.length;

    const maxLenghtMessage = 2500;
    const maxLenghtAuthor = 30;

    const invalidLenght = 0;
    // eslint-disable-next-line
    const validateLenght = (messageLenght == invalidLenght || authorLenght == invalidLenght || messageLenght > maxLenghtMessage || author.length > maxLenghtAuthor);
    if (validateLenght) return false;
    return true;
};