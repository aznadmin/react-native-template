/**
 * @generated SignedSource<<038e7048cb4234ba2a46935839444ce1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PriceSummary_calculatedCost$data = {
  readonly buyersPremium: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly subtotal: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "PriceSummary_calculatedCost";
};
export type PriceSummary_calculatedCost$key = {
  readonly " $data"?: PriceSummary_calculatedCost$data;
  readonly " $fragmentSpreads": FragmentRefs<"PriceSummary_calculatedCost">;
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
  "name": "PriceSummary_calculatedCost",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Money",
      "kind": "LinkedField",
      "name": "buyersPremium",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Money",
      "kind": "LinkedField",
      "name": "subtotal",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "CalculatedCost",
  "abstractKey": null
};
})();

(node as any).hash = "9c7744edb1c8e9493c18b47100faee78";

export default node;
