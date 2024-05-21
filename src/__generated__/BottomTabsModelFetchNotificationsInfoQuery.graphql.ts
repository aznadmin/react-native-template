/**
 * @generated SignedSource<<0f1e727884402bbd15a90601e0c79527>>
 * @relayHash c7d169bc381003439b33c1c7e862b611
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c7d169bc381003439b33c1c7e862b611

import { ConcreteRequest, Query } from 'relay-runtime';
export type BottomTabsModelFetchNotificationsInfoQuery$variables = Record<PropertyKey, never>;
export type BottomTabsModelFetchNotificationsInfoQuery$data = {
  readonly me: {
    readonly unreadConversationCount: number;
    readonly unseenNotificationsCount: number;
  } | null | undefined;
};
export type BottomTabsModelFetchNotificationsInfoQuery = {
  response: BottomTabsModelFetchNotificationsInfoQuery$data;
  variables: BottomTabsModelFetchNotificationsInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unreadConversationCount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unseenNotificationsCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BottomTabsModelFetchNotificationsInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
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
    "name": "BottomTabsModelFetchNotificationsInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "id": "c7d169bc381003439b33c1c7e862b611",
    "metadata": {},
    "name": "BottomTabsModelFetchNotificationsInfoQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e470226c2454e54f243721eff8477346";

export default node;
