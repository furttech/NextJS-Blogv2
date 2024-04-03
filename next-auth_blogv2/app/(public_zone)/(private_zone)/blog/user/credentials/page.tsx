import UpdateEmailCredentialsForm from "@/app/_components/_blog/_profile/updateEmail-form";
import UpdatePasswordCredentialsForm from "@/app/_components/_blog/_profile/updatePassword-form";
import Breadcrumbs from "@/app/_components/_nav/breadcrumbs";
import Link from "next/link";
import { SearchParamProps } from "@/app/_lib/definitions"

export default function editCredentialsPage({ searchParams }: SearchParamProps) {

    const show = searchParams?.show;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Edit Credentials',
                        href: '/blog/user/profile',
                        active: true,
                    }, {
                        label: 'User Settings',
                        href: '/blog/user',
                        active: false,
                    },

                ]} />
            <section className="flex flex-col h-auto w-auto rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <article>
                    {show === "email" && <UpdateEmailCredentialsForm />}
                </article>
                <article>
                    {show === "pass" && <UpdatePasswordCredentialsForm />}
                </article>
            </section>
        </main>
    )
}