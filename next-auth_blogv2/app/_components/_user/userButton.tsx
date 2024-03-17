import { userProfileNav } from "@/app/_actions/userProfileActions";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

export async function EditUserProfile() {
    
    return(
        <form action={userProfileNav}>
            <button className="rounded-sm border p1 hover:border-blue-300">
                <span className="sr-only">Edit</span>
                <DocumentPlusIcon className="w-5"/>
            </button>
        </form>
    )

}