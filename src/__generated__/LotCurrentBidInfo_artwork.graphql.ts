/**
 * @generated SignedSource<<91f66191ed5d0c774d6d5c65a363b529>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotCurrentBidInfo_artwork$data = {
  readonly myLotStanding: ReadonlyArray<{
    readonly activeBid: {
      readonly isWinning: boolean | null | undefined;
    } | null | undefined;
    readonly mostRecentBid: {
      readonly maxBid: {
        readonly display: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
  }> | null | undefined;
  readonly saleArtwork: {
    readonly counts: {
      readonly bidderPositions: any | null | undefined;
    } | null | undefined;
    readonly currentBid: {
      readonly display: string | null | undefined;
    } | null | undefined;
    readonly reserveMessage: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "LotCurrentBidInfo_artwork";
};
export type LotCurrentBidInfo_artwork$key = {
  readonly " $data"?: LotCurrentBidInfo_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotCurrentBidInfo_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LotCurrentBidInfo_artwork",
  "selections": [
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
          "name": "activeBid",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isWinning",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
              "selections": (v0/*: any*/),
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
          "kind": "ScalarField",
          "name": "reserveMessage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtworkCurrentBid",
          "kind": "LinkedField",
          "name": "currentBid",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtworkCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "bidderPositions",
              "storageKey": null
            }
          ],
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

(node as any).hash = "82c87e01b7fd16443a6a6c9eeeeab794";

export default node;
