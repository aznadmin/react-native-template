/**
 * @generated SignedSource<<e5e13abbe93f8681e090f590c8e6bfeb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShippingAndTaxes_artwork$data = {
  readonly isUnlisted: boolean;
  readonly priceIncludesTaxDisplay: string | null | undefined;
  readonly shippingInfo: string | null | undefined;
  readonly shippingOrigin: string | null | undefined;
  readonly taxInfo: {
    readonly displayText: string;
    readonly moreInfo: {
      readonly displayText: string;
      readonly url: string;
    };
  } | null | undefined;
  readonly " $fragmentType": "ShippingAndTaxes_artwork";
};
export type ShippingAndTaxes_artwork$key = {
  readonly " $data"?: ShippingAndTaxes_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShippingAndTaxes_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayText",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShippingAndTaxes_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isUnlisted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "shippingOrigin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "shippingInfo",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceIncludesTaxDisplay",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "TaxMoreInfo",
          "kind": "LinkedField",
          "name": "moreInfo",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
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

(node as any).hash = "9881791ce10a1dd7c190ba3fa95745f4";

export default node;
