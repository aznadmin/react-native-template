/**
 * @generated SignedSource<<8f8e4cde70b559cb5eb57f62235af673>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WatchedLot_saleArtwork$data = {
  readonly artwork: {
    readonly href: string | null | undefined;
    readonly internalID: string;
    readonly slug: string;
  } | null | undefined;
  readonly currentBid: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly estimate: string | null | undefined;
  readonly lotState: {
    readonly bidCount: number | null | undefined;
    readonly sellingPrice: {
      readonly display: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"Lot_saleArtwork">;
  readonly " $fragmentType": "WatchedLot_saleArtwork";
};
export type WatchedLot_saleArtwork$key = {
  readonly " $data"?: WatchedLot_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"WatchedLot_saleArtwork">;
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
  "name": "WatchedLot_saleArtwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Lot_saleArtwork"
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

(node as any).hash = "450abac109a59586a70143a4828bfa2f";

export default node;
