/**
 * @generated SignedSource<<9a424029297fb32fc544f4375c662f80>>
 * @relayHash cffe85f9bf62a19db6ac6b8419b09aed
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID cffe85f9bf62a19db6ac6b8419b09aed

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
export type useCreateUserInterestsMutation$variables = {
  input: CreateUserInterestsMutationInput;
};
export type useCreateUserInterestsMutation$data = {
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
export type useCreateUserInterestsMutation = {
  response: useCreateUserInterestsMutation$data;
  variables: useCreateUserInterestsMutation$variables;
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
    "name": "useCreateUserInterestsMutation",
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
    "name": "useCreateUserInterestsMutation",
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
    "id": "cffe85f9bf62a19db6ac6b8419b09aed",
    "metadata": {},
    "name": "useCreateUserInterestsMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "785c3281c206f1c3c1c015a2dc9feeae";

export default node;
