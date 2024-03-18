import { fetchUserDiscovery } from "@/app/_actions/_postActions/discoveryActions";
import { ProfileDiscovery } from "@/app/_lib/definitions";
import Image from "next/image";
import UserImage from "@/public/images/user.png";

export default async function DiscoveryTable({ currentPage }: { currentPage: number }) {

    const discovery: ProfileDiscovery = await fetchUserDiscovery(currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    {
                        discovery?.map((profile) => (
                            
                            <li key={profile.name} className="max-w-sm pt-2 rounded overflow-hidden shadow-lg">
                                <div className="w-full flex-row items-center justify-between border-2 rounded-sm border-gray-400">
                                    <Image
                                        className="text-gray-700 text-base"
                                        src={profile.image ? profile.image : UserImage}
                                        alt="Post Image Location"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-gray-400">
                                        {profile.name}
                                    </div>
                                    <p className="text-gray-700 text-base border-2 rounded-sm border-cyan-500">
                                        {profile.about}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                            </li>

                        ))
                    }
                </div>
            </div>
        </div>

    )


}