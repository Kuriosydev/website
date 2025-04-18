import { contactEmail } from "@/api/functions/contactEmail";
import { useMutation } from "@tanstack/react-query";

export const useSendEmail = () => {
    return useMutation({
        mutationFn: contactEmail,
        onSuccess: (response) => {
            console.log(response);
            return response
        },
        onError: (error) => {
            throw error
        }
    });
};