/**
 * @generated SignedSource<<8be2f2eb34b4d35cf8bc6a8f94d15658>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionBuyersPremium_sale$data = {
  readonly buyersPremium: ReadonlyArray<{
    readonly amount: string | null | undefined;
    readonly cents: number | null | undefined;
    readonly percent: number | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "AuctionBuyersPremium_sale";
};
export type AuctionBuyersPremium_sale$key = {
  readonly " $data"?: AuctionBuyersPremium_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionBuyersPremium_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionBuyersPremium_sale",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BuyersPremium",
      "kind": "LinkedField",
      "name": "buyersPremium",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cents",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "percent",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "f1ab31aecdf8c3ca269a9182af1a2eae";

export default node;
