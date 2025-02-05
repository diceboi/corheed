import { ZodError } from "zod";

export const getErrorMessages = (error) => {
    if (error instanceof ZodError) {
        message = error.errors.map((err) => err.message).join(", ");
    }   else if (error instanceof Error) {
            message = error.message;
        } else if (error && typeof error === "object" && "message" in error) {
            message = String(error.message);
        } else if (typeof error === "string") {
            message = error;
        } else {
            message = "An unknown error occurred.";
        }
        return message;
    }