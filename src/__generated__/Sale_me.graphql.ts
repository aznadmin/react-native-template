/**
 * @generated SignedSource<<929d2111993da418e4b90e0c91b4f005>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Sale_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_me" | "SaleActiveBids_me" | "SaleArtworksRail_me">;
  readonly " $fragmentType": "Sale_me";
};
export type Sale_me$key = {
  readonly " $data"?: Sale_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Sale_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "saleID",
    "variableName": "saleID"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "saleID"
    },
    {
      "kind": "RootArgument",
      "name": "saleSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sale_me",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "saleID",
          "variableName": "saleSlug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "SaleArtworksRail_me"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "SaleActiveBids_me"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "6793da247045421b27663314a98a8421";

export default node;
