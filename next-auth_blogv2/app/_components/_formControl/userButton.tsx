import { userEmailNav, userPassNav, userProfileNav } from "@/app/_actions/_profileActions/credentialsFormActions";
import { DocumentPlusIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../_nav/button";

export async function EditUserCredentialsButtons() {

    return (
        <>
            <section className='flex-row'>
                <article className='border rounded-sm border-solid border-red-950' >
                    <table className='p-4'>
                        <tr className='border rounded-sm border-solid border-red-500'>
                            <td>
                                <form action={userProfileNav}>
                                    <Button>
                                        <DocumentPlusIcon className="w-4 h-4" />
                                        Edit Profile
                                    </Button>
                                </form>
                            </td>
                            <td className='p-1 w-auto'>
                                <form action={userEmailNav}>
                                    <Button>
                                        <UserPlusIcon className="w-4 h-4" />
                                        <h5 className="">Update Email</h5>
                                    </Button>
                                </form>
                            </td>
                            <td className='p-1 w-auto'>
                                <form action={userPassNav}>
                                    <Button>
                                        <UserPlusIcon className="w-4 h-4" />
                                        <h5 className="">Update PassWord</h5>
                                    </Button>
                                </form>
                            </td>
                        </tr>
                    </table>
                </article>
            </section>
        </>
    )
}
