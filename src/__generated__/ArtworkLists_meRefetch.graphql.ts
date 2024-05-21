/**
 * @generated SignedSource<<7ba4344fae0a6aa3c558334a43da58c8>>
 * @relayHash 6e7a0cd73e34d4c1d753767c53ce0c01
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6e7a0cd73e34d4c1d753767c53ce0c01

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkLists_meRefetch$variables = {
  after?: string | null | undefined;
  artworkID: string;
  count?: number | null | undefined;
  id: string;
  includeArtwork?: boolean | null | undefined;
};
export type ArtworkLists_meRefetch$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkLists_me">;
  } | null | undefined;
};
export type ArtworkLists_meRefetch = {
  response: ArtworkLists_meRefetch$data;
  variables: ArtworkLists_meRefetch$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artworkID"
},
v2 = {
  "defaultValue": 20,
  "kind": "LocalArgument",
  "name": "count"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v4 = {
  "defaultValue": true,
  "kind": "LocalArgument",
  "name": "includeArtwork"
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v7 = {
  "kind": "Variable",
  "name": "artworkID",
  "variableName": "artworkID"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v11 = {
  "condition": "includeArtwork",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": [
        (v7/*: any*/)
      ],
      "kind": "ScalarField",
      "name": "isSavedArtwork",
      "storageKey": null
    }
  ]
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shareableWithPartners",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
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
v15 = {
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
            (v9/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "artworksConnection(first:4)"
},
v16 = {
  "kind": "Literal",
  "name": "saves",
  "value": true
},
v17 = [
  (v6/*: any*/),
  {
    "kind": "Literal",
    "name": "default",
    "value": false
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v16/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "UPDATED_AT_DESC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkLists_meRefetch",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "includeArtwork",
                "variableName": "includeArtwork"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ArtworkLists_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ArtworkLists_meRefetch",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "savedArtworksArtworkList",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "id",
                    "value": "saved-artwork"
                  }
                ],
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": "collection(id:\"saved-artwork\")"
              },
              {
                "alias": "customArtworkLists",
                "args": (v17/*: any*/),
                "concreteType": "CollectionsConnection",
                "kind": "LinkedField",
                "name": "collectionsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionsEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Collection",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v9/*: any*/),
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "customArtworkLists",
                "args": (v17/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "ArtworkLists_customArtworkLists",
                "kind": "LinkedHandle",
                "name": "collectionsConnection"
              },
              {
                "alias": "artworkLists",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0
                  },
                  {
                    "kind": "Variable",
                    "name": "includesArtworkID",
                    "variableName": "artworkID"
                  },
                  (v16/*: any*/)
                ],
                "concreteType": "CollectionsConnection",
                "kind": "LinkedField",
                "name": "collectionsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Me",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "6e7a0cd73e34d4c1d753767c53ce0c01",
    "metadata": {},
    "name": "ArtworkLists_meRefetch",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f05f1b6aa8df3bbb372c74db90168d77";

export default node;
