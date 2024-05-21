/**
 * @generated SignedSource<<43961da80879355cde85aae790c1b84e>>
 * @relayHash 01ae504eb54c6bc918783c164524698b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 01ae504eb54c6bc918783c164524698b

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditEmailTestsQuery$variables = Record<PropertyKey, never>;
export type MyAccountEditEmailTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditEmail_me">;
  } | null | undefined;
};
export type MyAccountEditEmailTestsQuery = {
  response: MyAccountEditEmailTestsQuery$data;
  variables: MyAccountEditEmailTestsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditEmailTestsQuery",
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
    "name": "MyAccountEditEmailTestsQuery",
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
    "id": "01ae504eb54c6bc918783c164524698b",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.email": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "MyAccountEditEmailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "84d6e5b476f56bba389a10a1f9c37140";

export default node;
