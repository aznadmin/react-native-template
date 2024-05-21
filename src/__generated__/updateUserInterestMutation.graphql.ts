/**
 * @generated SignedSource<<101aa1de93daa50efddb06c1f3aa34b4>>
 * @relayHash 925c2a1023044b99fea91d5a6c6f997c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 925c2a1023044b99fea91d5a6c6f997c

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInterestMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
  private?: boolean | null | undefined;
};
export type updateUserInterestMutation$variables = {
  input: UpdateUserInterestMutationInput;
};
export type updateUserInterestMutation$data = {
  readonly updateUserInterest: {
    readonly userInterestOrError: {
      readonly userInterest?: {
        readonly id: string;
        readonly private: boolean;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type updateUserInterestMutation$rawResponse = {
  readonly updateUserInterest: {
    readonly userInterestOrError: {
      readonly __typename: "UpdateUserInterestSuccess";
      readonly userInterest: {
        readonly id: string;
        readonly private: boolean;
      } | null | undefined;
    } | {
      readonly __typename: string;
    } | null | undefined;
  } | null | undefined;
};
export type updateUserInterestMutation = {
  rawResponse: updateUserInterestMutation$rawResponse;
  response: updateUserInterestMutation$data;
  variables: updateUserInterestMutation$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserInterest",
      "kind": "LinkedField",
      "name": "userInterest",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "private",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UpdateUserInterestSuccess",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "updateUserInterestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserInterestMutationPayload",
        "kind": "LinkedField",
        "name": "updateUserInterest",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userInterestOrError",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateUserInterestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserInterestMutationPayload",
        "kind": "LinkedField",
        "name": "updateUserInterest",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userInterestOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "925c2a1023044b99fea91d5a6c6f997c",
    "metadata": {},
    "name": "updateUserInterestMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "b5b8d442b4bd7f14c1973d93a2f268dd";

export default node;
