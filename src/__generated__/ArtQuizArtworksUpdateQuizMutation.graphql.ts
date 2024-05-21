/**
 * @generated SignedSource<<b03edaabe8004a3d477179f8fc9d0b44>>
 * @relayHash 7a1947d7cd07202fa69de9b7a308e503
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7a1947d7cd07202fa69de9b7a308e503

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateQuizMutationInput = {
  artworkId: string;
  clearInteraction?: boolean | null | undefined;
  clientMutationId?: string | null | undefined;
  userId: string;
};
export type ArtQuizArtworksUpdateQuizMutation$variables = {
  input: updateQuizMutationInput;
};
export type ArtQuizArtworksUpdateQuizMutation$data = {
  readonly updateQuiz: {
    readonly quiz: {
      readonly completedAt: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtQuizArtworksUpdateQuizMutation = {
  response: ArtQuizArtworksUpdateQuizMutation$data;
  variables: ArtQuizArtworksUpdateQuizMutation$variables;
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
  "name": "completedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizArtworksUpdateQuizMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateQuizMutationPayload",
        "kind": "LinkedField",
        "name": "updateQuiz",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
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
    "name": "ArtQuizArtworksUpdateQuizMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateQuizMutationPayload",
        "kind": "LinkedField",
        "name": "updateQuiz",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
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
    "id": "7a1947d7cd07202fa69de9b7a308e503",
    "metadata": {},
    "name": "ArtQuizArtworksUpdateQuizMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "f205d8daee102aa7d7880778309dcf57";

export default node;
