import UpdateProfileForm from "@/app/_components/_blog/_profile/updateProfile-form";
import Breadcrumbs from "@/app/_components/_nav/breadcrumbs";

export default function editUserPage() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Edit Profile',
                        href: '/blog/user/profile',
                        active: true,
                    },                    {
                        label: 'User Settings',
                        href: '/blog/user',
                        active: false,
                    },

                ]} />
            <div>
                <UpdateProfileForm />
            </div>
        </main>
    )
}