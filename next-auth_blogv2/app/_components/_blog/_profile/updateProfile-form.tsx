'use client'

import { useFormState } from "react-dom";
import { Button } from "../../_nav/button";
import { lusitana } from "../../fonts";
import { ProfileDetailsForm } from "@/app/_lib/definitions";
import { updateProfile } from "@/app/_actions/_profileActions/profileFormActions";

export default function UpdateProfileForm(profileDetails?: ProfileDetailsForm | undefined) {

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updateProfile, initialState);

    return (

        <form action={dispatch}>
            <section>
                <h1 className={`${lusitana.className} text-black mb-3 text-2xl`}>
                    Update Profile
                </h1>
                <div>
                    <label id="name" htmlFor="name">
                        Public Profile Name
                    </label>
                    <div className="relative">
                        <input 
                            type="text"
                            name="name" 
                            id="name"
                            placeholder="Enter Public Profile Name"
                            defaultValue={profileDetails?.name}
                        />
                    </div>
                </div>
                <Button type="submit" aria-describedby="sub-error">Update Profile</Button>
                <div id="sub-error" aria-live="polite" aria-atomic='true'>
                    {
                        state?.message
                    }
                </div>
            </section>
        </form>
    )

}