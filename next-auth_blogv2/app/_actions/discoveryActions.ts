'use server'

import prisma from "./prisma";

const ITEMS_PER_PAGE = 6;

export async function fetchUserDiscovery(currentPage: number) {

    const offSet = (currentPage - 1) * ITEMS_PER_PAGE;

    try {

        const profileResults = await prisma.profile.findMany({

            include: {
                following: true,
                blocked: true,
            },
            take: ITEMS_PER_PAGE,
            skip: offSet,
        });


        console.log("User Name: ", profileResults[0].name);

        return profileResults;

    } catch (error) {

    }

}

/*
export async function discoveryList(currentPage: number) {


    
}
*/