import { dataChat } from "../../server";

export const removeMessage = (deleteQuantity: number): void => {
    const removeFirstItem = 0;
    const removeOneItemOnly = 1;
    for (let i = 1; i <= deleteQuantity; i++) {
        dataChat.splice(removeFirstItem, removeOneItemOnly);
    }
};