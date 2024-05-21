/**
 * @generated SignedSource<<80edeb4a230ae21f3acedc184d433b45>>
 * @relayHash f5ae218551757a708fc1be9f0ad74b99
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f5ae218551757a708fc1be9f0ad74b99

import { ConcreteRequest, Query } from 'relay-runtime';
export type ActivityHeaderQuery$variables = Record<PropertyKey, never>;
export type ActivityHeaderQuery$data = {
  readonly viewer: {
    readonly partnerOfferNotifications: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ActivityHeaderQuery = {
  response: ActivityHeaderQuery$data;
  variables: ActivityHeaderQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": "partnerOfferNotifications",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 1
          },
          {
            "kind": "Literal",
            "name": "notificationTypes",
            "value": [
              "PARTNER_OFFER_CREATED"
            ]
          }
        ],
        "concreteType": "NotificationConnection",
        "kind": "LinkedField",
        "name": "notificationsConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": "notificationsConnection(first:1,notificationTypes:[\"PARTNER_OFFER_CREATED\"])"
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActivityHeaderQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ActivityHeaderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "f5ae218551757a708fc1be9f0ad74b99",
    "metadata": {},
    "name": "ActivityHeaderQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "8f5fb31180a3229eab0e9e8c61fbf687";

export default node;
