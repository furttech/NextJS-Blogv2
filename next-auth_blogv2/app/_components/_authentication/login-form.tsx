'use client';

import { lusitana } from '@/app/_components/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/_components/_nav/button';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { SignInUserForm } from '@/app/_lib/definitions';
import { State, authentication } from '@/app/_actions/_authActions/loginFormActions';
import Link from 'next/link';
import { InputFormControl } from '../_formControl/input-form';
import { PassWordFormControl } from '../_formControl/passWord-input-form';

export default function Form(formDetails: SignInUserForm) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(authentication, initialState);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <InputFormControl
          header={'Please Log In To Continue'}
          inputType={'email'}
          labelName={'email'}
          labelText={'Email'}
          defaultValue={""}
          required={true}
          placeHolder='Enter Email Address'
          aria={'email-error'}
          icon={<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
        />
        <div id='email-error' aria-live='polite' aria-atomic='true'>
          {
            state?.errors?.email &&
            state?.errors.email.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>
        <PassWordFormControl
          labelName={'password'}
          labelText={'Password'}
          placeHolder={'Enter Password'}
          defaultValue={""}
          aria='pass-error'
        />
        <div id='pass-error' aria-live='polite' aria-atomic='true'>
          {
            state?.errors?.password &&
            state?.errors.password.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>
        <div className='mt-4'>
          <LoginButton />
        </div>
        <div className='mt-4'>
          <ErrorState value={state} />
        </div>
      </div>
    </form>
  );
}

function ErrorState(taco: { value: State }) {

  if (taco.value.context === "Register") {
    return (
      <>
        <Link className='text-grey' href="/register">
          <Button className='mt-4 w-full '>
            Register
            <KeyIcon className="ml-auto h-5 w-5 text-gray-50" />
          </ Button>
        </Link>
      </>
    );
  }

}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full"
      aria-disabled={pending}
    >
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );

}