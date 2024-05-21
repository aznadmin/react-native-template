/**
 * @generated SignedSource<<e14b9b5bf822d79b5e628c612e341704>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidButton_artwork$data = {
  readonly myLotStanding: ReadonlyArray<{
    readonly mostRecentBid: {
      readonly maxBid: {
        readonly cents: number | null | undefined;
      } | null | undefined;
    } | null | undefined;
  }> | null | undefined;
  readonly sale: {
    readonly isClosed: boolean | null | undefined;
    readonly isLiveOpen: boolean | null | undefined;
    readonly isPreview: boolean | null | undefined;
    readonly isRegistrationClosed: boolean | null | undefined;
    readonly registrationStatus: {
      readonly qualifiedForBidding: boolean | null | undefined;
    } | null | undefined;
    readonly requireIdentityVerification: boolean | null | undefined;
    readonly slug: string;
  } | null | undefined;
  readonly saleArtwork: {
    readonly increments: ReadonlyArray<{
      readonly cents: number | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "BidButton_artwork";
};
export type BidButton_artwork$key = {
  readonly " $data"?: BidButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "cents",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidButton_artwork",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Bidder",
          "kind": "LinkedField",
          "name": "registrationStatus",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "qualifiedForBidding",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isPreview",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isLiveOpen",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isRegistrationClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "requireIdentityVerification",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "live",
          "value": true
        }
      ],
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "myLotStanding",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BidderPosition",
          "kind": "LinkedField",
          "name": "mostRecentBid",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "BidderPositionMaxBid",
              "kind": "LinkedField",
              "name": "maxBid",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "myLotStanding(live:true)"
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
          "concreteType": "BidIncrementsFormatted",
          "kind": "LinkedField",
          "name": "increments",
          "plural": true,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "156fcfc4be3111c9e9bc130b3fafeeb2";

export default node;
