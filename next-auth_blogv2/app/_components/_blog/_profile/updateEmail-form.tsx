'use client'

import { updateEmail } from "@/app/_actions/_profileActions/credentialsFormActions";
import { UpdateEmailForm } from "@/app/_lib/definitions";
import { useFormState } from "react-dom";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { Button } from "../../_nav/button";
import { InputFormControl } from "../../_formControl/input-form";
import { PassWordFormControl } from "../../_formControl/passWord-input-form";

export default function UpdateEmailCredentialsForm(userDetails?: UpdateEmailForm | undefined) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(updateEmail, initialState);

  return (
    <form action={dispatch}>
      <section>

        <article className="p-2">
          <InputFormControl
            header={"Register Alternate Email"}
            labelName={"email"}
            inputType={"email"}
            labelText={"Email"}
            defaultValue={userDetails?.email}
            placeHolder={"Enter Email Address"}
            aria={"email-error"}
            icon={<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
          />
          <div id='email-error' aria-live='polite' aria-atomic='true'>
            {
              state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </article>

        <article className="p-2">
          <PassWordFormControl
            labelName={"password"}
            labelText={"Verify Existing Password"}
            defaultValue={userDetails?.password}
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
          <Button type='submit' aria-describedby='sub-error' >Update</Button>
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