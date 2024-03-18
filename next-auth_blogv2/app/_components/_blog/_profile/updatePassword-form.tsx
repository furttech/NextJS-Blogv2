'use client'

import { useFormState } from "react-dom";
import { updatePassWord } from "@/app/_actions/_profileActions/credentialsFormActions";
import { KeyIcon } from "@heroicons/react/24/solid";
import { Button } from "../../_nav/button";
import { lusitana } from "../../fonts";
import { UpdatePasswordForm } from "@/app/_lib/definitions";

export default function UpdatePasswordCredentialsForm(passwordDetails?: UpdatePasswordForm | undefined) {

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updatePassWord, initialState);

    return (
        <form action={dispatch}>
            <section>
                <h1 className={`${lusitana.className} text-black  mb-3 text-2xl`}>
                    Verify Existing Password
                </h1>
                <div className="mt-4">
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="password"
                    >
                       Existing Password
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border text-black border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="ver_password"
                            type="ver_password"
                            name="ver_password"
                            placeholder="Verify password"
                            required
                            minLength={10}
                            aria-describedby='ver-pass-error'
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id='ver-pass-error' aria-live='polite' aria-atomic='true'>
                        {
                            state.errors?.ver_password &&
                            state.errors.ver_password.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section>
                <h1 className={`${lusitana.className} text-black  mb-3 text-2xl`}>
                    Update User PassWord
                </h1>
                <div className="mt-4">
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border text-black border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={10}
                            aria-describedby='pass-error'
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                    <div id='pass-error' aria-live='polite' aria-atomic='true'>
                        {
                            state.errors?.password &&
                            state.errors.password.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border text-black border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="cmp_password"
                            type="cmp_password"
                            name="cmp_password"
                            placeholder="Re-Enter Password"
                            required
                            minLength={10}
                            aria-describedby='cmp-pass-error'
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
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
                    <Button type='submit' aria-describedby='sub-error' >Register</Button>
                    <div id='sub-error' aria-live='polite' aria-atomic='true'>
                        {
                            state?.message
                        }
                    </div>
                </div>
            </section>
        </form>
    )


}