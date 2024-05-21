/**
 * @generated SignedSource<<36ec3520138406f73cbe6780ce422390>>
 * @relayHash b8c753a400e29d931b90731375c10637
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b8c753a400e29d931b90731375c10637

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteUserInterestMutationInput = {
  anonymousSessionId?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  id: string;
  sessionID?: string | null | undefined;
};
export type deleteUserInterestMutation$variables = {
  input: DeleteUserInterestMutationInput;
};
export type deleteUserInterestMutation$data = {
  readonly deleteUserInterest: {
    readonly userInterest: {
      readonly internalID: string;
    };
  } | null | undefined;
};
export type deleteUserInterestMutation = {
  response: deleteUserInterestMutation$data;
  variables: deleteUserInterestMutation$variables;
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
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteUserInterestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteUserInterestMutationPayload",
        "kind": "LinkedField",
        "name": "deleteUserInterest",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserInterest",
            "kind": "LinkedField",
            "name": "userInterest",
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
    "name": "deleteUserInterestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteUserInterestMutationPayload",
        "kind": "LinkedField",
        "name": "deleteUserInterest",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserInterest",
            "kind": "LinkedField",
            "name": "userInterest",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b8c753a400e29d931b90731375c10637",
    "metadata": {},
    "name": "deleteUserInterestMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "d6bfcce32d52d4e0790e81004b2d7380";

export default node;
