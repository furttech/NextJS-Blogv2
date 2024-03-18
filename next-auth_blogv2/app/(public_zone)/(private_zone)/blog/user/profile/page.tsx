import UpdateProfileForm from "@/app/_components/_blog/_profile/updateProfile-form";

export default function editUserPage(){
    return(
        <main>
            <div>
                <h1>Edit User</h1>
                <p>This is where the user details are edited!</p>
                <UpdateProfileForm />
            </div>
        </main>
    )
}