import xss from "xss";
import type { MessageDto } from "../../../dto/message.dto";
import type { XssValidationDto } from "../../../dto/xss-validation.dto";

export const xssValidation = (data: MessageDto): XssValidationDto => {
    const xssValidationMessage = xss(data.message);
    const xssValidationAuthor = xss(data.author);

    return {
        messageXSS: xssValidationMessage,
        authorXSS: xssValidationAuthor,
    };
};