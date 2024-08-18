import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById'
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';

interface IParams {
    listingId?: string;
}

const page = async ({params}: {params: IParams}) => {

    const listing = await getListingById(params)

    if(!listing) {
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }

    const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
        <ListingClient listing={listing} currentUser={currentUser}/>
    </ClientOnly>
  )
}

export default page