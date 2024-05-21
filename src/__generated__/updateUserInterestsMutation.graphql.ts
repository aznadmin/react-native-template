/**
 * @generated SignedSource<<b3fa154ff157deaed9d5ec27a23a6dd8>>
 * @relayHash 9e04674170750adb86d570cdd72f815b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9e04674170750adb86d570cdd72f815b

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInterestsMutationInput = {
  clientMutationId?: string | null | undefined;
  userInterests: ReadonlyArray<UpdateUserInterestInput>;
};
export type UpdateUserInterestInput = {
  id: string;
  private?: boolean | null | undefined;
};
export type updateUserInterestsMutation$variables = {
  input: UpdateUserInterestsMutationInput;
};
export type updateUserInterestsMutation$data = {
  readonly updateUserInterests: {
    readonly me: {
      readonly userInterestsConnection: {
        readonly edges: ReadonlyArray<{
          readonly internalID: string;
          readonly private: boolean;
        } | null | undefined> | null | undefined;
      } | null | undefined;
    };
  } | null | undefined;
};
export type updateUserInterestsMutation = {
  response: updateUserInterestsMutation$data;
  variables: updateUserInterestsMutation$variables;
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "private",
  "storageKey": null
},
v5 = {
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
    "name": "updateUserInterestsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserInterestsMutationPayload",
        "kind": "LinkedField",
        "name": "updateUserInterests",
        "plural": false,
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
                "args": (v2/*: any*/),
                "concreteType": "UserInterestConnection",
                "kind": "LinkedField",
                "name": "userInterestsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserInterestEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "userInterestsConnection(first:10)"
              }
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
    "name": "updateUserInterestsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserInterestsMutationPayload",
        "kind": "LinkedField",
        "name": "updateUserInterests",
        "plural": false,
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
                "args": (v2/*: any*/),
                "concreteType": "UserInterestConnection",
                "kind": "LinkedField",
                "name": "userInterestsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserInterestEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "userInterestsConnection(first:10)"
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "9e04674170750adb86d570cdd72f815b",
    "metadata": {},
    "name": "updateUserInterestsMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "8b9bf1a98019527b82090889bb4e5de7";

export default node;
