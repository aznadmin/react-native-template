/**
 * @generated SignedSource<<3edcd9692b9d3e92fa07dc08d8418a91>>
 * @relayHash 43d613166558903611fea207ddd36e42
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 43d613166558903611fea207ddd36e42

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotificationsRefetchQuery$variables = Record<PropertyKey, never>;
export type MyProfilePushNotificationsRefetchQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
  } | null | undefined;
};
export type MyProfilePushNotificationsRefetchQuery = {
  response: MyProfilePushNotificationsRefetchQuery$data;
  variables: MyProfilePushNotificationsRefetchQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfilePushNotificationsRefetchQuery",
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
    "name": "MyProfilePushNotificationsRefetchQuery",
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
    "id": "43d613166558903611fea207ddd36e42",
    "metadata": {},
    "name": "MyProfilePushNotificationsRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "e0fa2c50a8493ca1b991b926194d6abc";

export default node;
