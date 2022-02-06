export const sendMessageValidation = (author: string, message: string) => {
    const authorLenght = author.length;
    const messageLenght = message.length;

    const invalidLenght = 0;
    // eslint-disable-next-line
    const validateLenght = (messageLenght == invalidLenght || authorLenght == invalidLenght || messageLenght > 200 || author.length > 30);
    if (validateLenght) return false;
    return true;
};