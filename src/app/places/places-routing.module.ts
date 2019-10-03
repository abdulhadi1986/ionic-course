import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { PlacesPage } from './places.page';
// the order of path maters, hardcoded routes should be declared first and then the ones with parameteres.
const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children:   [
                        { path: 'discover',
                        children: [
                            {
                                path: '',
                                loadChildren: './discover/discover.module#DiscoverPageModule'
                            },
                            {
                                path: ':placeId',
                                loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule'
                            }
                        ]
                        },
                        {
                            path: 'offers',
                            children: [
                                {
                                    path: '',
                                     loadChildren: './offers/offers.module#OffersPageModule'
                                },
                                {
                                    path: 'new',
                                    loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
                                },
                                {
                                    path: 'edit/:placeId',
                                    loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
                                },
                                {
                                    path: ':placeId',
                                    loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
                                }
                            ]
                        },
                        {
                            // this is necessary for lazy loading
                            path: '',
                            redirectTo: '/places/tabs/discover',
                            pathMatch: 'full'
                        }
                    ]
    },
    {
        // this is important for lazy loading
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule {}
