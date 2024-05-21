/**
 * @generated SignedSource<<cd9bb7df5f2ad60daf05c0e2e6b10dbb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkLotDetails_artwork$data = {
  readonly artist: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly isForSale: boolean | null | undefined;
  readonly sale: {
    readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
    readonly internalID: string;
    readonly isBenefit: boolean | null | undefined;
    readonly isWithBuyersPremium: boolean | null | undefined;
    readonly partner: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"LotCascadingEndTimesBanner_sale">;
  } | null | undefined;
  readonly saleArtwork: {
    readonly currentBid: {
      readonly display: string | null | undefined;
    } | null | undefined;
    readonly estimate: string | null | undefined;
  } | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"LotCurrentBidInfo_artwork" | "LotEndDateTime_artwork" | "LotUpcomingLiveDateTime_artwork">;
  readonly " $fragmentType": "ArtworkLotDetails_artwork";
};
export type ArtworkLotDetails_artwork$key = {
  readonly " $data"?: ArtworkLotDetails_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkLotDetails_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkLotDetails_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isForSale",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
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
          "kind": "ScalarField",
          "name": "isWithBuyersPremium",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cascadingEndTimeIntervalMinutes",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isBenefit",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Partner",
          "kind": "LinkedField",
          "name": "partner",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LotCascadingEndTimesBanner_sale"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "estimate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtworkCurrentBid",
          "kind": "LinkedField",
          "name": "currentBid",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "display",
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
      "name": "LotCurrentBidInfo_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LotEndDateTime_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LotUpcomingLiveDateTime_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "276440917eb1a5ffa8a93957e0ee0e1e";

export default node;
