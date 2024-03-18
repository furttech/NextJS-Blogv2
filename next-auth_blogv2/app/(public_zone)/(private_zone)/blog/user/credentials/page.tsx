import UpdateEmailCredentialsForm from "@/app/_components/_blog/_profile/updateEmail-form";
import UpdatePasswordCredentialsForm from "@/app/_components/_blog/_profile/updatePassword-form";

export default function editCredentialsPage(){
    return(
        <main>
            <section>
                <h1>User Credentials</h1>
            <div>
                <UpdateEmailCredentialsForm email={""} />
            </div>
            <div>
                <UpdatePasswordCredentialsForm password={""} cmp_password={""} ver_password={""}  />
            </div>
            </section>
        </main>
    )
}