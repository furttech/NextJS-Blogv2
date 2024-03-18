'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const VISIBILITY = ['Hidden', 'Public', 'Followers'] as const;

const UpdateProfile = z.object({
    profileVisibility: z.enum(VISIBILITY, {
        required_error: 'Please Select Visibility!',
        invalid_type_error: 'Improper Input Parameter Type!',
        description: 'Selects Profile Visibility Status.',
    }),
    name: z.string({
        required_error: 'Profile Name is Required!',
        invalid_type_error: 'Profile Name Must be a String!',
        description: 'Public Visible Profile Name.',
    }).min(8, {
        message: 'Minimum Length : 8',
    }).max(25, {
        message: 'Maximum Length : 25',
    }),
    about: z.string({
        required_error: 'About is Required!',
        invalid_type_error: 'About Must be a String!',
        description: 'Information About the User',
    }).min(10, {
        message: 'Minimum Length : 10',
    }).max(1024, {
        message: 'Maximum Length : 1024',
    }),
    interest: z.string({
        required_error: 'Interests are Required!',
        invalid_type_error: 'Interests Must be a String!',
        description: 'User\'s Personal Interests',
    }).min(8, {
        message: 'Minimum Length : 8',
    }).max(512, {
        message: 'Maximum Length : 512',
    }),
    topics: z.string({
        required_error: 'Topics are Required!',
        invalid_type_error: 'Topics Must be Strings!',
        description: 'List Relatable Profile Topics for Other Users to Identify With.'
    }).startsWith("#", {
        message: "Topics Must Begin With a '#'"
    }).array().min(1, {
        message: "At Least One Topic is Required"
    }).max(10, {
        message: "Topics Limit: 10"
    }),

})

// temporary state object
export type State = {
    errors?: {
        profileVisibility?: string[];
        name?: string[];
        about?: string[];
        interest?: string[];
        image?: string[];
        topics?: string[];
    };
    message?: (string | null);
}

export async function updateProfile(prevState: State, formData: FormData) {

    const validateFields = UpdateProfile.safeParse({
        profileVisibility: formData.get('profileVisibility'),
        name: formData.get("name"),
        about: formData.get("about"),
        interest: formData.get("interest"),
        topics: formData.get("topics"),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Invalid Entries : Please Retry',
        }
    }

    return ({ message: "success", })

}