/**
 * @generated SignedSource<<a410588f2855c85d60648e20bede9299>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleActiveBidItem_lotStanding$data = {
  readonly activeBid: {
    readonly isWinning: boolean | null | undefined;
  } | null | undefined;
  readonly mostRecentBid: {
    readonly maxBid: {
      readonly display: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly sale: {
    readonly liveStartAt: string | null | undefined;
  } | null | undefined;
  readonly saleArtwork: {
    readonly artwork: {
      readonly href: string | null | undefined;
    } | null | undefined;
    readonly counts: {
      readonly bidderPositions: any | null | undefined;
    } | null | undefined;
    readonly currentBid: {
      readonly display: string | null | undefined;
    } | null | undefined;
    readonly reserveStatus: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Lot_saleArtwork">;
  } | null | undefined;
  readonly " $fragmentType": "SaleActiveBidItem_lotStanding";
};
export type SaleActiveBidItem_lotStanding$key = {
  readonly " $data"?: SaleActiveBidItem_lotStanding$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleActiveBidItem_lotStanding">;
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
  "name": "SaleActiveBidItem_lotStanding",
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
          "name": "reserveStatus",
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
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "artwork",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "href",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Lot_saleArtwork"
        }
      ],
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
          "name": "liveStartAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LotStanding",
  "abstractKey": null
};
})();

(node as any).hash = "2860939b4f5e1c6d7ca54e2db34d37d2";

export default node;
