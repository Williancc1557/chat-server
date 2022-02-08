export const isMaxMessage = (length: number, maxMessage: number): boolean => {
    const maxLength = maxMessage;
    const isMaxLength = (length >= maxLength) ? true : false;
    return isMaxLength;
};