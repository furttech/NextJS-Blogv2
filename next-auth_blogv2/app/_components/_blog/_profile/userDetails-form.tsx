'use server'

import { fetchUserByEmail, userSessionEmail } from '@/app/_actions/userActions';
import { lusitana } from '../../fonts';
import { User } from '@prisma/client';
import { EditUserCredentialsButtons } from '../../_formControl/userButton';
import UserImage from "@/public/images/user.png"
import Image from "next/image"

export default async function UserDetailsForm() {

    // fetching session data
    const email: (string | null | undefined) = await userSessionEmail();
    let userData: (User | undefined);

    if (email) {
        userData = await fetchUserByEmail(email);

    }

    return (
        <>
            <section className="flex flex-row h-auto w-auto rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <article className='border rounded-sm p-2 border-solid border-indigo-950-500'>
                    <table className='p-4'>
                        <tr className='border rounded-sm border-solid border-indigo-300'>
                            <td className='p-4 border rounded-sm border-solid border-indigo-700'>
                                <Image className=' justify-around p-6' width={512} height={480} src={UserImage} alt={'User Image'} />
                            </td>
                            <td className='p-4 text-blue-600'>
                                Image
                            </td>
                        </tr>
                    </table>
                </article>
                <article className='border w-max h-auto rounded-sm p-2 border-solid border-orange-600'>
                    <label className={`${lusitana.className} mb-3 mt-5 block text-2xl font-medium text-gray-900`}>
                        User Email:  {userData?.email}
                    </label>
                    <label className={`${lusitana.className} mb-3 mt-5 block text-2xl font-medium text-gray-900`}>
                        DataBase UserName:  {userData?.username}
                    </label>
                    <label className={`${lusitana.className} mb-3 mt-5 block text-2xl font-medium text-gray-900`}>
                        DataBase Verify Date:  {userData?.emailVerified?.toDateString()}
                    </label>
                    <label className={`${lusitana.className} mb-3 mt-5 block text-2xl font-medium text-gray-900`}>
                        DataBase Name:  {userData?.name}
                    </label>
                    <label className={`${lusitana.className} mb-3 mt-5 block text-2xl font-medium text-gray-900`}>
                        DataBase Id:  {userData?.id}
                    </label>
                </article>
            </section>
            <EditUserCredentialsButtons />              
        </>
    )

} 