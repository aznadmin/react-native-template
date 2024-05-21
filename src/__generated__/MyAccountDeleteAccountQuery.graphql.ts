/**
 * @generated SignedSource<<e92acc37d68127461c43643b48b12398>>
 * @relayHash 8137f5d1530de7cda0a0e17aff48b8d5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 8137f5d1530de7cda0a0e17aff48b8d5

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountDeleteAccountQuery$variables = Record<PropertyKey, never>;
export type MyAccountDeleteAccountQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountDeleteAccount_me">;
  } | null | undefined;
};
export type MyAccountDeleteAccountQuery = {
  response: MyAccountDeleteAccountQuery$data;
  variables: MyAccountDeleteAccountQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountDeleteAccountQuery",
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
            "name": "MyAccountDeleteAccount_me"
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
    "name": "MyAccountDeleteAccountQuery",
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
            "name": "hasPassword",
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
    "id": "8137f5d1530de7cda0a0e17aff48b8d5",
    "metadata": {},
    "name": "MyAccountDeleteAccountQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "d036158770916d1a826eb480c593b33d";

export default node;
