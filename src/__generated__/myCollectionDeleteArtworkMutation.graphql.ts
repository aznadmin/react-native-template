/**
 * @generated SignedSource<<d91b5648aa0a8f41ffc1a1f94d8af986>>
 * @relayHash a4c6feed6074e0a2687410700d85f303
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a4c6feed6074e0a2687410700d85f303

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyCollectionDeleteArtworkInput = {
  artworkId: string;
  clientMutationId?: string | null | undefined;
};
export type myCollectionDeleteArtworkMutation$variables = {
  input: MyCollectionDeleteArtworkInput;
};
export type myCollectionDeleteArtworkMutation$data = {
  readonly myCollectionDeleteArtwork: {
    readonly artworkOrError: {
      readonly mutationError?: {
        readonly message: string;
      } | null | undefined;
      readonly success?: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type myCollectionDeleteArtworkMutation = {
  response: myCollectionDeleteArtworkMutation$data;
  variables: myCollectionDeleteArtworkMutation$variables;
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
  "type": "MyCollectionArtworkMutationDeleteSuccess",
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
  "type": "MyCollectionArtworkMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "myCollectionDeleteArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionDeleteArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionDeleteArtwork",
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
    "name": "myCollectionDeleteArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionDeleteArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionDeleteArtwork",
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
    "id": "a4c6feed6074e0a2687410700d85f303",
    "metadata": {},
    "name": "myCollectionDeleteArtworkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "9bf328c100be019ca7da7d3227d14065";

export default node;
