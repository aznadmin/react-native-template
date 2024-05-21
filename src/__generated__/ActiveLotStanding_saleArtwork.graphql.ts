/**
 * @generated SignedSource<<c98a65c6866ac59d6392aa6ae200168b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActiveLotStanding_saleArtwork$data = {
  readonly artwork: {
    readonly href: string | null | undefined;
    readonly internalID: string;
    readonly slug: string;
  } | null | undefined;
  readonly currentBid: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly estimate: string | null | undefined;
  readonly isHighestBidder: boolean | null | undefined;
  readonly lotState: {
    readonly bidCount: number | null | undefined;
    readonly reserveStatus: string | null | undefined;
    readonly sellingPrice: {
      readonly display: string | null | undefined;
    } | null | undefined;
    readonly soldStatus: string | null | undefined;
  } | null | undefined;
  readonly sale: {
    readonly endAt: string | null | undefined;
    readonly liveStartAt: string | null | undefined;
    readonly status: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"Lot_saleArtwork">;
  readonly " $fragmentType": "ActiveLotStanding_saleArtwork";
};
export type ActiveLotStanding_saleArtwork$key = {
  readonly " $data"?: ActiveLotStanding_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActiveLotStanding_saleArtwork">;
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
  "name": "ActiveLotStanding_saleArtwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Lot_saleArtwork"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isHighestBidder",
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
          "name": "status",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "liveStartAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CausalityLotState",
      "kind": "LinkedField",
      "name": "lotState",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bidCount",
          "storageKey": null
        },
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
          "kind": "ScalarField",
          "name": "soldStatus",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Money",
          "kind": "LinkedField",
          "name": "sellingPrice",
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
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "artwork",
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
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
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
      "kind": "ScalarField",
      "name": "estimate",
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};
})();

(node as any).hash = "8005426fb9bbdc747ee1dd3d7b71a403";

export default node;
