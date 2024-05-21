/**
 * @generated SignedSource<<adc51838eeac2ba653756ad88fc80e77>>
 * @relayHash 9fcc3bdc711b8a302f8bd21289fae194
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9fcc3bdc711b8a302f8bd21289fae194

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditEmailQuery$variables = Record<PropertyKey, never>;
export type MyAccountEditEmailQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditEmail_me">;
  } | null | undefined;
};
export type MyAccountEditEmailQuery = {
  response: MyAccountEditEmailQuery$data;
  variables: MyAccountEditEmailQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditEmailQuery",
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
            "name": "MyAccountEditEmail_me"
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
    "name": "MyAccountEditEmailQuery",
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
            "name": "email",
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
    "id": "9fcc3bdc711b8a302f8bd21289fae194",
    "metadata": {},
    "name": "MyAccountEditEmailQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "2b7fc72c78f1fe29014ef6fa30a83077";

export default node;
