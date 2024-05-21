/**
 * @generated SignedSource<<1e548f3e2ff560f7dee0a59046e7d4f4>>
 * @relayHash 25d236f527161f3734995f53e930fdea
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 25d236f527161f3734995f53e930fdea

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MarkNotificationsAsSeenInput = {
  clientMutationId?: string | null | undefined;
  until: string;
};
export type useMarkNotificationsAsSeenMutation$variables = {
  input: MarkNotificationsAsSeenInput;
};
export type useMarkNotificationsAsSeenMutation$data = {
  readonly markNotificationsAsSeen: {
    readonly responseOrError: {
      readonly me?: {
        readonly unseenNotificationsCount: number;
      };
      readonly mutationError?: {
        readonly message: string;
      } | null | undefined;
      readonly success?: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type useMarkNotificationsAsSeenMutation = {
  response: useMarkNotificationsAsSeenMutation$data;
  variables: useMarkNotificationsAsSeenMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unseenNotificationsCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v4 = {
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
  "type": "MarkNotificationsAsSeenFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useMarkNotificationsAsSeenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarkNotificationsAsSeenPayload",
        "kind": "LinkedField",
        "name": "markNotificationsAsSeen",
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
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "type": "MarkNotificationsAsSeenSuccess",
                "abstractKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useMarkNotificationsAsSeenMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarkNotificationsAsSeenPayload",
        "kind": "LinkedField",
        "name": "markNotificationsAsSeen",
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
                  },
                  (v3/*: any*/)
                ],
                "type": "MarkNotificationsAsSeenSuccess",
                "abstractKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "25d236f527161f3734995f53e930fdea",
    "metadata": {},
    "name": "useMarkNotificationsAsSeenMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "69626feeb091e71dcf13255e3b8fc4bd";

export default node;
