/**
 * @generated SignedSource<<5b43a9a90f17185672387cea91c65f20>>
 * @relayHash 5f53465029dab702c75f1af2153f8b99
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 5f53465029dab702c75f1af2153f8b99

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddAssetToConsignmentSubmissionInput = {
  assetType?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  externalSubmissionId?: string | null | undefined;
  filename?: string | null | undefined;
  geminiToken: string;
  sessionID?: string | null | undefined;
  size?: string | null | undefined;
  submissionID?: string | null | undefined;
};
export type addAssetToConsignmentMutation$variables = {
  input: AddAssetToConsignmentSubmissionInput;
};
export type addAssetToConsignmentMutation$data = {
  readonly addAssetToConsignmentSubmission: {
    readonly asset: {
      readonly id: string;
      readonly submissionID: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type addAssetToConsignmentMutation = {
  response: addAssetToConsignmentMutation$data;
  variables: addAssetToConsignmentMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddAssetToConsignmentSubmissionPayload",
    "kind": "LinkedField",
    "name": "addAssetToConsignmentSubmission",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ConsignmentSubmissionCategoryAsset",
        "kind": "LinkedField",
        "name": "asset",
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
            "name": "submissionID",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addAssetToConsignmentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addAssetToConsignmentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "5f53465029dab702c75f1af2153f8b99",
    "metadata": {},
    "name": "addAssetToConsignmentMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "8c0c5988058b24eba7b4de5a8517c618";

export default node;
