/**
 * @generated SignedSource<<a33246ca6f8a6f8d1a97b7adefb50037>>
 * @relayHash 1b7dd05e9b230a7e6a195024a2484d86
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 1b7dd05e9b230a7e6a195024a2484d86

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionBuyersPremiumQuery$variables = {
  saleID: string;
};
export type AuctionBuyersPremiumQuery$data = {
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"AuctionBuyersPremium_sale">;
  } | null | undefined;
};
export type AuctionBuyersPremiumQuery = {
  response: AuctionBuyersPremiumQuery$data;
  variables: AuctionBuyersPremiumQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "saleID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionBuyersPremiumQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionBuyersPremium_sale"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuctionBuyersPremiumQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "1b7dd05e9b230a7e6a195024a2484d86",
    "metadata": {},
    "name": "AuctionBuyersPremiumQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1040b75c446a2b9bedb87824fc99e585";

export default node;
