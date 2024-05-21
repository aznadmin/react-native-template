/**
 * @generated SignedSource<<55878aac385f98da04172f09d5c795a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsights_artwork$data = {
  readonly artist: {
    readonly targetSupply: {
      readonly isP1: boolean | null | undefined;
    };
  } | null | undefined;
  readonly id: string;
  readonly internalID: string;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_artworkPriceInsights" | "MyCollectionArtworkDemandIndex_artworkPriceInsights">;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistAuctionResults_artwork" | "MyCollectionArtworkArtistMarket_artwork" | "MyCollectionArtworkComparableWorks_artwork" | "MyCollectionArtworkDemandIndex_artwork" | "MyCollectionWhySell_artwork" | "RequestForPriceEstimateBanner_artwork">;
  readonly " $fragmentType": "MyCollectionArtworkInsights_artwork";
};
export type MyCollectionArtworkInsights_artwork$key = {
  readonly " $data"?: MyCollectionArtworkInsights_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkInsights_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistTargetSupply",
          "kind": "LinkedField",
          "name": "targetSupply",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isP1",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RequestForPriceEstimateBanner_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkDemandIndex_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistMarket_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkComparableWorks_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistAuctionResults_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionWhySell_artwork"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkPriceInsights",
      "kind": "LinkedField",
      "name": "marketPriceInsights",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MyCollectionArtworkArtistMarket_artworkPriceInsights"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MyCollectionArtworkDemandIndex_artworkPriceInsights"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "3cbc81e10e185f4d08c6919cc5069b0c";

export default node;
