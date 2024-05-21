/**
 * @generated SignedSource<<3075a12c22308725056ad5fc9c5e430e>>
 * @relayHash ebad95a035f198e045c048a3f88a8a04
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ebad95a035f198e045c048a3f88a8a04

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainerRefetchQuery$variables = Record<PropertyKey, never>;
export type CreateSavedSearchContentContainerRefetchQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainer_viewer">;
  } | null | undefined;
};
export type CreateSavedSearchContentContainerRefetchQuery = {
  response: CreateSavedSearchContentContainerRefetchQuery$data;
  variables: CreateSavedSearchContentContainerRefetchQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSavedSearchContentContainerRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateSavedSearchContentContainer_viewer"
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
    "name": "CreateSavedSearchContentContainerRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NotificationPreference",
            "kind": "LinkedField",
            "name": "notificationPreferences",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "channel",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "ebad95a035f198e045c048a3f88a8a04",
    "metadata": {},
    "name": "CreateSavedSearchContentContainerRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "7a26cf1648f94866d4e7b171045dc3bb";

export default node;
