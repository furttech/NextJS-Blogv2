'use client'

import { useFormState } from "react-dom";
import { Button } from "../../_nav/button";
import { lusitana } from "../../fonts";
import { ProfileDetailsForm } from "@/app/_lib/definitions";
import { updateProfile } from "@/app/_actions/_profileActions/profileFormActions";
import { FolderMinusIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { InputFormControl } from "../../_formControl/input-form";
import { RadioFormControl } from "../../_formControl/radio-form";


export default function UpdateProfileForm(profileDetails?: ProfileDetailsForm | undefined) {

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updateProfile, initialState);

    return (

        <form action={dispatch}>
            <section>
                <h1 className={`${lusitana.className} text-black mb-3 text-2xl`}>
                    Update Profile
                </h1>
                <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                    <div className="flex flex-col gap-2">

                        {/* Label for Name Section */}
                        <div className="flex items-start">
                            <InputFormControl
                                labelName={"name"}
                                labelText={"Public Profile Name:"}
                                defaultValue={profileDetails?.name}
                                placeHolder={"Enter Profile Name"}
                                aria={"name-error"}
                            />
                            <div id='name-error' aria-live='polite' aria-atomic='true'>
                                {
                                    state.errors?.name &&
                                    state.errors.name.map((error: string) => (
                                        <p className='mt-2 text-sm text-red-500' key={error}>
                                            {error}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Label for About Section */}
                        <div className="flex items-start">
                            <InputFormControl
                                labelName={"about"}
                                labelText={"About:"}
                                defaultValue={profileDetails?.interest}
                                placeHolder={"Tell Us About Your Self..."}
                                aria={"about-error"}
                            />
                            <div id='about-error' aria-live='polite' aria-atomic='true'>
                                {
                                    state.errors?.about &&
                                    state.errors.about.map((error: string) => (
                                        <p className='mt-2 text-sm text-red-500' key={error}>
                                            {error}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>


                        {/* Label for Interests Section  */}
                        <div className="flex items-start">
                            <InputFormControl
                                labelName={"interest"}
                                labelText={"Profile Interests:"}
                                defaultValue={profileDetails?.interest}
                                placeHolder={"Profile Interests Help Users Find This Profile"}
                                aria="interest-error"
                            />
                            <div id='interest-error' aria-live='polite' aria-atomic='true'>
                                {
                                    state.errors?.interest &&
                                    state.errors.interest.map((error: string) => (
                                        <p className='mt-2 text-sm text-red-500' key={error}>
                                            {error}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                        {/* HashTag Selection Field */}
                        <div className="flex items-start">
                            <InputFormControl
                                labelName={"tags"}
                                labelText={"HashTag:"}
                                defaultValue={profileDetails?.topics}
                                placeHolder={"Enter Hashtag Selection"}
                                aria={"tags-error"}
                            />
                            <div id='tags-error' aria-live='polite' aria-atomic='true'>
                                {
                                    state.errors?.topics &&
                                    state.errors.topics.map((error: string) => (
                                        <p className='mt-2 text-sm text-red-500' key={error}>
                                            {error}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Visibility Status Radio Button Selection */}
                <div>
                    <fieldset>
                        <legend>
                            Select Profile Visibility
                        </legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-3">

                                <RadioFormControl
                                    id={"profileVisPublic"}
                                    name={"profileVis"}
                                    value={"public"}
                                    checked={false}
                                    aria={"profile-vis-error"}
                                    ico={<UserIcon className="h-4 w-4" />}
                                />

                                <RadioFormControl
                                    id={"profileVisHidden"}
                                    name={"profileVis"}
                                    value={"hidden"}
                                    checked={true}
                                    aria={"profile-vis-error"}
                                    ico={<FolderMinusIcon className="h-4 w-4" />}
                                />

                                <RadioFormControl
                                    id={"profileVisFollower"}
                                    name={"profileVis"}
                                    value={"follower"}
                                    checked={true}
                                    aria={"profile-vis-error"}
                                    ico={<UserGroupIcon className="h-4 w-4" />}
                                />
                                <div id='profile-vis-error' aria-live="polite" aria-atomic='true'>
                                    {
                                        // handles error state from react hook
                                        state?.errors?.profileVisibility &&
                                        state?.errors?.profileVisibility.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </fieldset>
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