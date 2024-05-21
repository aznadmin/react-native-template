/**
 * @generated SignedSource<<0ef5e0243f0f624bab85f4419df15c7a>>
 * @relayHash c841f909061067fc539654747057c474
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c841f909061067fc539654747057c474

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPhoneQuery$variables = Record<PropertyKey, never>;
export type MyAccountEditPhoneQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPhone_me">;
  } | null | undefined;
};
export type MyAccountEditPhoneQuery = {
  response: MyAccountEditPhoneQuery$data;
  variables: MyAccountEditPhoneQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditPhoneQuery",
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
            "name": "MyAccountEditPhone_me"
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
    "name": "MyAccountEditPhoneQuery",
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
            "name": "phone",
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
    "id": "c841f909061067fc539654747057c474",
    "metadata": {},
    "name": "MyAccountEditPhoneQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "155d1d901e2064798aa49724f0c1a7e7";

export default node;
