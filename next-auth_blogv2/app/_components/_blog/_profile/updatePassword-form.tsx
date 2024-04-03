'use client'

import { useFormState } from "react-dom";
import { updatePassWord } from "@/app/_actions/_profileActions/credentialsFormActions";
import { Button } from "../../_nav/button";
import { UpdatePasswordForm } from "@/app/_lib/definitions";
import { PassWordFormControl } from "../../_formControl/passWord-input-form";

export default function UpdatePasswordCredentialsForm(passwordDetails?: UpdatePasswordForm | undefined) {

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updatePassWord, initialState);

    return (
        <form action={dispatch}>
            <section className="p-1" >
                <article className="p-2">
                    <div className="mt-4">
                        <PassWordFormControl
                            header={"Update User PassWord"}
                            labelName={"password"}
                            labelText={"PassWord"}
                            defaultValue={passwordDetails?.password}
                            placeHolder={"Enter New PassWord"}
                            aria={"std-pass-error"}
                        />
                        <div id='std-pass-error' aria-live='polite' aria-atomic='true'>
                            {
                                state.errors?.ver_password &&
                                state.errors.ver_password.map((error: string) => (
                                    <p className='mt-2 text-sm text-red-500' key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>

                        <PassWordFormControl
                            labelName="cmp_password"
                            defaultValue={passwordDetails?.cmp_password}
                            placeHolder={"Confirm New PassWord"}
                            aria={"cmp-pass-error"}
                        />
                        <div id='cmp-pass-error' aria-live='polite' aria-atomic='true'>
                            {
                                state.errors?.cmp_password &&
                                state.errors.cmp_password.map((error: string) => (
                                    <p className='mt-2 text-sm text-red-500' key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </article>
                <article className="p-2">
                    <PassWordFormControl
                        labelName={"password"}
                        labelText={"Verify Existing Password"}
                        defaultValue={passwordDetails?.password}
                        placeHolder={"Existing Password"}
                        aria={"ver-pass-error"}
                    />
                    <div id='ver-pass-error' aria-live='polite' aria-atomic='true'>
                        {
                            state.errors?.password &&
                            state.errors.password.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))
                        }
                    </div>
                </article>
                <article className="p-2">
                    <Button type='submit' aria-describedby='sub-error' >Register</Button>
                    <div id='sub-error' aria-live='polite' aria-atomic='true'>
                        {
                            state?.message
                        }
                    </div>
                </article>
            </section>
        </form>
    )
}