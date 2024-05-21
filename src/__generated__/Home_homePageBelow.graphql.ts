/**
 * @generated SignedSource<<802c995b0960e66dab36f1601a0c27a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_homePageBelow$data = {
  readonly _onboardingModule: {
    readonly showMyCollectionCard: boolean;
    readonly showSWACard: boolean;
  } | null | undefined;
  readonly fairsModule: {
    readonly " $fragmentSpreads": FragmentRefs<"FairsRail_fairsModule">;
  } | null | undefined;
  readonly marketingCollectionsModule: {
    readonly " $fragmentSpreads": FragmentRefs<"CollectionsRail_collectionsModule">;
  } | null | undefined;
  readonly onboardingModule: {
    readonly " $fragmentSpreads": FragmentRefs<"HomeFeedOnboardingRail_onboardingModule">;
  } | null | undefined;
  readonly popularArtistsArtistModule: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistRail_rail">;
  } | null | undefined;
  readonly recentlyViewedWorksArtworkModule: {
    readonly results: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
  } | null | undefined;
  readonly similarToRecentlyViewedArtworkModule: {
    readonly results: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
  } | null | undefined;
  readonly worksFromGalleriesYouFollowArtworkModule: {
    readonly results: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
  } | null | undefined;
  readonly " $fragmentType": "Home_homePageBelow";
};
export type Home_homePageBelow$key = {
  readonly " $data"?: Home_homePageBelow$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ArtworkModuleRail_rail"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_homePageBelow",
  "selections": [
    {
      "alias": "recentlyViewedWorksArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "RECENTLY_VIEWED_WORKS"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "artworkModule(key:\"RECENTLY_VIEWED_WORKS\")"
    },
    {
      "alias": "similarToRecentlyViewedArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "SIMILAR_TO_RECENTLY_VIEWED"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "artworkModule(key:\"SIMILAR_TO_RECENTLY_VIEWED\")"
    },
    {
      "alias": "worksFromGalleriesYouFollowArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "FOLLOWED_GALLERIES"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "artworkModule(key:\"FOLLOWED_GALLERIES\")"
    },
    {
      "alias": "popularArtistsArtistModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "CURATED_TRENDING"
        }
      ],
      "concreteType": "HomePageArtistModule",
      "kind": "LinkedField",
      "name": "artistModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistRail_rail"
        }
      ],
      "storageKey": "artistModule(key:\"CURATED_TRENDING\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageFairsModule",
      "kind": "LinkedField",
      "name": "fairsModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FairsRail_fairsModule"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageMarketingCollectionsModule",
      "kind": "LinkedField",
      "name": "marketingCollectionsModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CollectionsRail_collectionsModule"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "_onboardingModule",
      "args": null,
      "concreteType": "HomePageMyCollectionOnboardingModule",
      "kind": "LinkedField",
      "name": "onboardingModule",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showMyCollectionCard",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showSWACard",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageMyCollectionOnboardingModule",
      "kind": "LinkedField",
      "name": "onboardingModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HomeFeedOnboardingRail_onboardingModule"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};
})();

(node as any).hash = "8ad690900792397b5cc0948fef51c463";

export default node;
