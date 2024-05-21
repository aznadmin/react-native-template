/**
 * @generated SignedSource<<ec7a59edb64de3f5d64758fbd3a74059>>
 * @relayHash e319ff4a9ab82d85dff80c8fbe999663
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e319ff4a9ab82d85dff80c8fbe999663

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPriceRangeQuery$variables = Record<PropertyKey, never>;
export type MyAccountEditPriceRangeQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPriceRange_me">;
  } | null | undefined;
};
export type MyAccountEditPriceRangeQuery = {
  response: MyAccountEditPriceRangeQuery$data;
  variables: MyAccountEditPriceRangeQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditPriceRangeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyAccountEditPriceRange_me"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyAccountEditPriceRangeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRange",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRangeMin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRangeMax",
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
    "id": "e319ff4a9ab82d85dff80c8fbe999663",
    "metadata": {},
    "name": "MyAccountEditPriceRangeQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "f4704d5bb91521c173cbf75a7b062fb3";

export default node;
