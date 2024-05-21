/**
 * @generated SignedSource<<f5b7b4635e28a2a3ec34554c4653789d>>
 * @relayHash 854ac8c3284aad4a8809acda88014a4e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 854ac8c3284aad4a8809acda88014a4e

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteArtworkImageInput = {
  artworkID: string;
  clientMutationId?: string | null | undefined;
  imageID: string;
};
export type deleteArtworkImageMutation$variables = {
  input: DeleteArtworkImageInput;
};
export type deleteArtworkImageMutation$data = {
  readonly deleteArtworkImage: {
    readonly artworkOrError: {
      readonly mutationError?: {
        readonly message: string;
      } | null | undefined;
      readonly success?: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type deleteArtworkImageMutation = {
  response: deleteArtworkImageMutation$data;
  variables: deleteArtworkImageMutation$variables;
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
      "kind": "ScalarField",
      "name": "success",
      "storageKey": null
    }
  ],
  "type": "ArtworkMutationDeleteSuccess",
  "abstractKey": null
},
v3 = {
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
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtworkMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteArtworkImageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteArtworkImagePayload",
        "kind": "LinkedField",
        "name": "deleteArtworkImage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "deleteArtworkImageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteArtworkImagePayload",
        "kind": "LinkedField",
        "name": "deleteArtworkImage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "854ac8c3284aad4a8809acda88014a4e",
    "metadata": {},
    "name": "deleteArtworkImageMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "c33e37969514a50e996505a811a463d5";

export default node;
