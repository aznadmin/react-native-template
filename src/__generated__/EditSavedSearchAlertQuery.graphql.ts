/**
 * @generated SignedSource<<58293cb2aeb114db51bb6b3d9589ad6c>>
 * @relayHash c23327362198a5efafce3bf1d9dd1580
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c23327362198a5efafce3bf1d9dd1580

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditSavedSearchAlertQuery$variables = {
  artistIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type EditSavedSearchAlertQuery$data = {
  readonly artists: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"EditSavedSearchAlert_artists">;
  } | null | undefined> | null | undefined;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"EditSavedSearchAlert_viewer">;
  } | null | undefined;
};
export type EditSavedSearchAlertQuery = {
  response: EditSavedSearchAlertQuery$data;
  variables: EditSavedSearchAlertQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistIDs"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "artistIDs"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditSavedSearchAlertQuery",
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
            "name": "EditSavedSearchAlert_viewer"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artists",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditSavedSearchAlert_artists"
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
    "name": "EditSavedSearchAlertQuery",
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
              (v2/*: any*/),
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artists",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          (v2/*: any*/),
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
    "id": "c23327362198a5efafce3bf1d9dd1580",
    "metadata": {},
    "name": "EditSavedSearchAlertQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "8de95f02d820eb4464ec9daaef6a48e9";

export default node;
