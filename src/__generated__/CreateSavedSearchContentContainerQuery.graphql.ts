/**
 * @generated SignedSource<<6c0bef2cfb4ef1eac17401832685bcaf>>
 * @relayHash 4fe966daba97e5b207762bc62578490a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 4fe966daba97e5b207762bc62578490a

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainerQuery$variables = Record<PropertyKey, never>;
export type CreateSavedSearchContentContainerQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainer_viewer">;
  } | null | undefined;
};
export type CreateSavedSearchContentContainerQuery = {
  response: CreateSavedSearchContentContainerQuery$data;
  variables: CreateSavedSearchContentContainerQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSavedSearchContentContainerQuery",
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
    "name": "CreateSavedSearchContentContainerQuery",
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
    "id": "4fe966daba97e5b207762bc62578490a",
    "metadata": {},
    "name": "CreateSavedSearchContentContainerQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "1d40ff93ddb8a38322b67dbcff4523ca";

export default node;
