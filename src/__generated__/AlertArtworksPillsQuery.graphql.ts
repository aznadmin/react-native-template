/**
 * @generated SignedSource<<a7fff299e7af2dfdd6d5baf084ba7fb8>>
 * @relayHash ba1ea129aeb149b8f17ab84e6844c389
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ba1ea129aeb149b8f17ab84e6844c389

import { ConcreteRequest, Query } from 'relay-runtime';
export type AlertArtworksPillsQuery$variables = {
  alertId: string;
};
export type AlertArtworksPillsQuery$data = {
  readonly me: {
    readonly alert: {
      readonly pills: ReadonlyArray<{
        readonly displayValue: string;
        readonly field: string;
      }>;
    } | null | undefined;
  } | null | undefined;
};
export type AlertArtworksPillsQuery = {
  response: AlertArtworksPillsQuery$data;
  variables: AlertArtworksPillsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "alertId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "alertId"
  }
],
v2 = {
  "alias": "pills",
  "args": null,
  "concreteType": "SearchCriteriaLabel",
  "kind": "LinkedField",
  "name": "labels",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayValue",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AlertArtworksPillsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
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
    "name": "AlertArtworksPillsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "alert",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "ba1ea129aeb149b8f17ab84e6844c389",
    "metadata": {},
    "name": "AlertArtworksPillsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a3b2df428d6a2c7deff19dc5b5c2acda";

export default node;
