/**
 * @generated SignedSource<<68ce6bb041eb93caf37605d182954eba>>
 * @relayHash 509a767685bdcadb763123b2fa1e4c49
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 509a767685bdcadb763123b2fa1e4c49

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SaveArtworkInput = {
  artworkID?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  remove?: boolean | null | undefined;
};
export type ArtQuizArtworksSaveMutation$variables = {
  input: SaveArtworkInput;
};
export type ArtQuizArtworksSaveMutation$data = {
  readonly saveArtwork: {
    readonly artwork: {
      readonly isSaved: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtQuizArtworksSaveMutation = {
  response: ArtQuizArtworksSaveMutation$data;
  variables: ArtQuizArtworksSaveMutation$variables;
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
  "name": "isSaved",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizArtworksSaveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SaveArtworkPayload",
        "kind": "LinkedField",
        "name": "saveArtwork",
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
    "name": "ArtQuizArtworksSaveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SaveArtworkPayload",
        "kind": "LinkedField",
        "name": "saveArtwork",
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
    "id": "509a767685bdcadb763123b2fa1e4c49",
    "metadata": {},
    "name": "ArtQuizArtworksSaveMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "a6a664fd2e965e5853389a4c7007ab2e";

export default node;
