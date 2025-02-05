import { z } from "zod";

const mailformSchema = z.object({
    name: z.string().min(1, "Név kitöltése kötelező"),
    email: z.string().email("Hibás e-mail cím"),
    phone: z.string().min(1, "Telefonszám kitöltése kötelező"),
    message: z.string().min(1, "Üzenet kitöltése kötelező"),
    subject: z.string().min(1, "Tárgy megadása kötelező"),
});

export default mailformSchema;