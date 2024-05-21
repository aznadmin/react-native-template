/**
 * @generated SignedSource<<776c81e3356aebde31da331dce9f0f8a>>
 * @relayHash 34dadb8b4360ea832bea84658f832e1e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 34dadb8b4360ea832bea84658f832e1e

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DislikeArtworkInput = {
  artworkID: string;
  clientMutationId?: string | null | undefined;
  remove: boolean;
};
export type ArtQuizArtworksDislikeMutation$variables = {
  input: DislikeArtworkInput;
};
export type ArtQuizArtworksDislikeMutation$data = {
  readonly dislikeArtwork: {
    readonly artwork: {
      readonly isDisliked: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type ArtQuizArtworksDislikeMutation = {
  response: ArtQuizArtworksDislikeMutation$data;
  variables: ArtQuizArtworksDislikeMutation$variables;
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
  "name": "isDisliked",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizArtworksDislikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DislikeArtworkPayload",
        "kind": "LinkedField",
        "name": "dislikeArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "artwork",
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
    "name": "ArtQuizArtworksDislikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DislikeArtworkPayload",
        "kind": "LinkedField",
        "name": "dislikeArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "artwork",
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
    "id": "34dadb8b4360ea832bea84658f832e1e",
    "metadata": {},
    "name": "ArtQuizArtworksDislikeMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "ca9a4b414c63f479456d0b23f0af3d6e";

export default node;
