/**
 * @generated SignedSource<<2d16883f35a2b824a8e0ee8c723cdc1b>>
 * @relayHash e77febe64b440314ace386ed82ae2762
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID e77febe64b440314ace386ed82ae2762

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserInterestCategory = "COLLECTED_BEFORE" | "INTERESTED_IN_COLLECTING" | "%future added value";
export type UserInterestInterestType = "ARTIST" | "GENE" | "%future added value";
export type CreateUserInterestsMutationInput = {
  clientMutationId?: string | null | undefined;
  userInterests: ReadonlyArray<UserInterestInput>;
};
export type UserInterestInput = {
  anonymousSessionId?: string | null | undefined;
  body?: string | null | undefined;
  category: UserInterestCategory;
  interestId: string;
  interestType: UserInterestInterestType;
  private?: boolean | null | undefined;
  sessionID?: string | null | undefined;
};
export type createUserInterestsMutation$variables = {
  input: CreateUserInterestsMutationInput;
};
export type createUserInterestsMutation$data = {
  readonly createUserInterests: {
    readonly userInterestsOrErrors: ReadonlyArray<{
      readonly category?: UserInterestCategory;
      readonly interest?: {
        readonly name?: string | null | undefined;
      };
      readonly mutationError?: {
        readonly message: string;
        readonly type: string | null | undefined;
      } | null | undefined;
    }>;
  } | null | undefined;
};
export type createUserInterestsMutation = {
  response: createUserInterestsMutation$data;
  variables: createUserInterestsMutation$variables;
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
  "name": "category",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
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
          "name": "type",
          "storageKey": null
        },
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
  "type": "CreateUserInterestFailure",
  "abstractKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
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
    "name": "createUserInterestsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserInterestsMutationPayload",
        "kind": "LinkedField",
        "name": "createUserInterests",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userInterestsOrErrors",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "interest",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "UserInterest",
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
    "name": "createUserInterestsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserInterestsMutationPayload",
        "kind": "LinkedField",
        "name": "createUserInterests",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userInterestsOrErrors",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "interest",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v6/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "type": "UserInterest",
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
    "id": "e77febe64b440314ace386ed82ae2762",
    "metadata": {},
    "name": "createUserInterestsMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "ed9d0d539bb65662d5e11bd79e70d582";

export default node;
