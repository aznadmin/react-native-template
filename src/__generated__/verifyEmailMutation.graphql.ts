/**
 * @generated SignedSource<<098841bd95bf89bd28c51f69a4b61a71>>
 * @relayHash 3829cfedf7697d8003b474016174ad35
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3829cfedf7697d8003b474016174ad35

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type verifyEmailMutation$variables = Record<PropertyKey, never>;
export type verifyEmailMutation$data = {
  readonly sendConfirmationEmail: {
    readonly confirmationOrError: {
      readonly mutationError?: {
        readonly error: string | null | undefined;
        readonly message: string;
      } | null | undefined;
      readonly unconfirmedEmail?: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type verifyEmailMutation = {
  response: verifyEmailMutation$data;
  variables: verifyEmailMutation$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unconfirmedEmail",
      "storageKey": null
    }
  ],
  "type": "SendConfirmationEmailMutationSuccess",
  "abstractKey": null
},
v2 = {
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
          "name": "error",
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
  "type": "SendConfirmationEmailMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "verifyEmailMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SendConfirmationEmailMutationPayload",
        "kind": "LinkedField",
        "name": "sendConfirmationEmail",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "confirmationOrError",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "sendConfirmationEmail(input:{})"
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "verifyEmailMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SendConfirmationEmailMutationPayload",
        "kind": "LinkedField",
        "name": "sendConfirmationEmail",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "confirmationOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "sendConfirmationEmail(input:{})"
      }
    ]
  },
  "params": {
    "id": "3829cfedf7697d8003b474016174ad35",
    "metadata": {},
    "name": "verifyEmailMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "69c843183da787e03abf1b3bb8bb5fed";

export default node;
