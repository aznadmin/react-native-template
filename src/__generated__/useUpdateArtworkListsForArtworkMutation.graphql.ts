/**
 * @generated SignedSource<<454b0737a89b30642fffbcbfbbb1b8ed>>
 * @relayHash 470fd269efe77b266fbac45c915d1ae5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 470fd269efe77b266fbac45c915d1ae5

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworksCollectionsBatchUpdateInput = {
  addToCollectionIDs?: ReadonlyArray<string> | null | undefined;
  artworkIDs: ReadonlyArray<string>;
  clientMutationId?: string | null | undefined;
  removeFromCollectionIDs?: ReadonlyArray<string> | null | undefined;
};
export type useUpdateArtworkListsForArtworkMutation$variables = {
  artworkID: string;
  input: ArtworksCollectionsBatchUpdateInput;
};
export type useUpdateArtworkListsForArtworkMutation$data = {
  readonly artworksCollectionsBatchUpdate: {
    readonly responseOrError: {
      readonly addedToArtworkLists?: ReadonlyArray<{
        readonly default: boolean;
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection" | "ArtworkListItem_item">;
      } | null | undefined> | null | undefined;
      readonly mutationError?: {
        readonly statusCode: number | null | undefined;
      } | null | undefined;
      readonly removedFromArtworkLists?: ReadonlyArray<{
        readonly default: boolean;
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection" | "ArtworkListItem_item">;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type useUpdateArtworkListsForArtworkMutation = {
  response: useUpdateArtworkListsForArtworkMutation$data;
  variables: useUpdateArtworkListsForArtworkMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  },
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "default",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "artworkID",
    "variableName": "artworkID"
  }
],
v5 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "args": (v4/*: any*/),
    "kind": "FragmentSpread",
    "name": "ArtworkListItem_item"
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ArtworkListItem_collection"
  }
],
v6 = {
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
          "name": "statusCode",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtworksCollectionsBatchUpdateFailure",
  "abstractKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v4/*: any*/),
    "kind": "ScalarField",
    "name": "isSavedArtwork",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "shareableWithPartners",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "onlyVisible",
        "value": true
      }
    ],
    "kind": "ScalarField",
    "name": "artworksCount",
    "storageKey": "artworksCount(onlyVisible:true)"
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 4
      }
    ],
    "concreteType": "ArtworkConnection",
    "kind": "LinkedField",
    "name": "artworksConnection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ArtworkEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 300
                      },
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "normalized"
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 300
                      }
                    ],
                    "concreteType": "ResizedImageUrl",
                    "kind": "LinkedField",
                    "name": "resized",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": "resized(height:300,version:\"normalized\",width:300)"
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "artworksConnection(first:4)"
  },
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateArtworkListsForArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ArtworksCollectionsBatchUpdatePayload",
        "kind": "LinkedField",
        "name": "artworksCollectionsBatchUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "addedToArtworkLists",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "addedToCollections",
                    "plural": true,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": "removedFromArtworkLists",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "removedFromCollections",
                    "plural": true,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "ArtworksCollectionsBatchUpdateSuccess",
                "abstractKey": null
              },
              (v6/*: any*/)
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
    "name": "useUpdateArtworkListsForArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ArtworksCollectionsBatchUpdatePayload",
        "kind": "LinkedField",
        "name": "artworksCollectionsBatchUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "responseOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": "addedToArtworkLists",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "addedToCollections",
                    "plural": true,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": "removedFromArtworkLists",
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "removedFromCollections",
                    "plural": true,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "ArtworksCollectionsBatchUpdateSuccess",
                "abstractKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "470fd269efe77b266fbac45c915d1ae5",
    "metadata": {},
    "name": "useUpdateArtworkListsForArtworkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "d72cbc8e9d0746a97c569c5125800231";

export default node;
