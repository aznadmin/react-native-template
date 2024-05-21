/**
 * @generated SignedSource<<ec4cb2bab2890331316abd2725eba908>>
 * @relayHash 728c85d9adf5e99ace6e714cc0f7095b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 728c85d9adf5e99ace6e714cc0f7095b

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useMarkAllNotificationsAsReadMutation$variables = Record<PropertyKey, never>;
export type useMarkAllNotificationsAsReadMutation$data = {
  readonly markAllNotificationsAsRead: {
    readonly responseOrError: {
      readonly me?: {
        readonly unreadNotificationsCount: number;
      };
      readonly mutationError?: {
        readonly message: string;
      } | null | undefined;
      readonly success?: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type useMarkAllNotificationsAsReadMutation = {
  response: useMarkAllNotificationsAsReadMutation$data;
  variables: useMarkAllNotificationsAsReadMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {}
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unreadNotificationsCount",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "kind": "LinkedField",
      "name": "mutationError",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MarkAllNotificationsAsReadFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useMarkAllNotificationsAsReadMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarkAllNotificationsAsReadPayload",
        "kind": "LinkedField",
        "name": "markAllNotificationsAsRead",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Me",
                    "kind": "LinkedField",
                    "name": "me",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "type": "MarkAllNotificationsAsReadSuccess",
                "abstractKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "markAllNotificationsAsRead(input:{})"
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useMarkAllNotificationsAsReadMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarkAllNotificationsAsReadPayload",
        "kind": "LinkedField",
        "name": "markAllNotificationsAsRead",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Me",
                    "kind": "LinkedField",
                    "name": "me",
                    "plural": false,
                    "selections": [
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
                  },
                  (v2/*: any*/)
                ],
                "type": "MarkAllNotificationsAsReadSuccess",
                "abstractKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "markAllNotificationsAsRead(input:{})"
      }
    ]
  },
  "params": {
    "id": "728c85d9adf5e99ace6e714cc0f7095b",
    "metadata": {},
    "name": "useMarkAllNotificationsAsReadMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "ebe4fe0f822a3f1e8aec6d4e2ae99570";

export default node;
