/**
 * @generated SignedSource<<9c7eee0e19e5be6d45529029e6984b1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkPrice_artwork$data = {
  readonly availability: string | null | undefined;
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
    readonly saleMessage: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly isInAuction: boolean | null | undefined;
  readonly isPriceHidden: boolean | null | undefined;
  readonly saleMessage: string | null | undefined;
  readonly taxInfo: {
    readonly displayText: string;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkAuctionBidInfo_artwork">;
  readonly " $fragmentType": "ArtworkPrice_artwork";
};
export type ArtworkPrice_artwork$key = {
  readonly " $data"?: ArtworkPrice_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPrice_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkPrice_artwork",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availability",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInAuction",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPriceHidden",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TaxInfo",
      "kind": "LinkedField",
      "name": "taxInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayText",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkAuctionBidInfo_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "866b39a122ccb262ba30af9e22feaf23";

export default node;
