/**
 * @generated SignedSource<<5ba1bd92797aec1bc619dffe98874b84>>
 * @relayHash f99d3ea4db38671ae424c854d5d3ab21
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f99d3ea4db38671ae424c854d5d3ab21

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotificationsTestQuery$variables = Record<PropertyKey, never>;
export type MyProfilePushNotificationsTestQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
  } | null | undefined;
};
export type MyProfilePushNotificationsTestQuery = {
  response: MyProfilePushNotificationsTestQuery$data;
  variables: MyProfilePushNotificationsTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfilePushNotificationsTestQuery",
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
            "name": "MyProfilePushNotifications_me"
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
    "name": "MyProfilePushNotificationsTestQuery",
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
            "name": "receiveLotOpeningSoonNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveNewSalesNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveNewWorksNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveOutbidNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePromotionNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePurchaseNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveSaleOpeningClosingNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveOrderNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveViewingRoomNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePartnerShowNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePartnerOfferNotification",
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
    "id": "f99d3ea4db38671ae424c854d5d3ab21",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "me.receiveLotOpeningSoonNotification": (v0/*: any*/),
        "me.receiveNewSalesNotification": (v0/*: any*/),
        "me.receiveNewWorksNotification": (v0/*: any*/),
        "me.receiveOrderNotification": (v0/*: any*/),
        "me.receiveOutbidNotification": (v0/*: any*/),
        "me.receivePartnerOfferNotification": (v0/*: any*/),
        "me.receivePartnerShowNotification": (v0/*: any*/),
        "me.receivePromotionNotification": (v0/*: any*/),
        "me.receivePurchaseNotification": (v0/*: any*/),
        "me.receiveSaleOpeningClosingNotification": (v0/*: any*/),
        "me.receiveViewingRoomNotification": (v0/*: any*/)
      }
    },
    "name": "MyProfilePushNotificationsTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e9b3867a5f57f3259cd1d73f0149b7a8";

export default node;
