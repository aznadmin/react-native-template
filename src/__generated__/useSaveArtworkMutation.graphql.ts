/**
 * @generated SignedSource<<52a7bf9864cae21ccda4ae3fd6a10fa9>>
 * @relayHash 7057f619fd61cb62dd51bee239932b1b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7057f619fd61cb62dd51bee239932b1b

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSaveArtworkMutation$variables = {
  artworkID: string;
  remove?: boolean | null | undefined;
};
export type useSaveArtworkMutation$data = {
  readonly saveArtwork: {
    readonly artwork: {
      readonly id: string;
      readonly isSaved: boolean | null | undefined;
    } | null | undefined;
    readonly me: {
      readonly collection: {
        readonly internalID: string;
        readonly isSavedArtwork: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection">;
      } | null | undefined;
    };
  } | null | undefined;
};
export type useSaveArtworkMutation = {
  response: useSaveArtworkMutation$data;
  variables: useSaveArtworkMutation$variables;
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
    "name": "remove"
  }
],
v1 = {
  "kind": "Variable",
  "name": "artworkID",
  "variableName": "artworkID"
},
v2 = [
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Variable",
        "name": "remove",
        "variableName": "remove"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Artwork",
  "kind": "LinkedField",
  "name": "artwork",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSaved",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "saved-artwork"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": [
    (v1/*: any*/)
  ],
  "kind": "ScalarField",
  "name": "isSavedArtwork",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSaveArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "SaveArtworkPayload",
        "kind": "LinkedField",
        "name": "saveArtwork",
        "plural": false,
        "selections": [
          (v4/*: any*/),
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
                "args": (v5/*: any*/),
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ArtworkListItem_collection"
                  }
                ],
                "storageKey": "collection(id:\"saved-artwork\")"
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
    "name": "useSaveArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "SaveArtworkPayload",
        "kind": "LinkedField",
        "name": "saveArtwork",
        "plural": false,
        "selections": [
          (v4/*: any*/),
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
                "args": (v5/*: any*/),
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "artworksConnection(first:4)"
                  },
                  (v3/*: any*/)
                ],
                "storageKey": "collection(id:\"saved-artwork\")"
              },
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
    "id": "7057f619fd61cb62dd51bee239932b1b",
    "metadata": {},
    "name": "useSaveArtworkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "372cd0e77f4e1e1d27e5d9630b82bebb";

export default node;
