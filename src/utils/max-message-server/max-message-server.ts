import { dataChat } from "../../server";
import { removeMessage } from "./remove-messages";
import { isMaxMessage } from "./validations/is-max-message";

export const maxMessageServer = (maxMessages: number): void => {
    const length = dataChat.length;
    const deleteMessageQuantity = 100;
    const checkMessages = isMaxMessage(length, maxMessages);
    if (checkMessages) removeMessage(deleteMessageQuantity);
};