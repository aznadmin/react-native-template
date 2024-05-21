/**
 * @generated SignedSource<<e15d83038c759763d4ce7ed96a1f9ce7>>
 * @relayHash a2ca114fcfc6e2e7a0368e1df265e07e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a2ca114fcfc6e2e7a0368e1df265e07e

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkListsContextTestQuery$variables = Record<PropertyKey, never>;
export type ArtworkListsContextTestQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkLists_collectionsConnection">;
};
export type ArtworkListsContextTestQuery = {
  response: ArtworkListsContextTestQuery$data;
  variables: ArtworkListsContextTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shareableWithPartners",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
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
            (v4/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "artworksConnection(first:4)"
},
v6 = [
  {
    "kind": "Literal",
    "name": "default",
    "value": false
  },
  {
    "kind": "Literal",
    "name": "saves",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "UPDATED_AT_DESC"
  }
],
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Collection"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkConnection"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "ArtworkEdge"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ResizedImageUrl"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkListsContextTestQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ArtworkLists_collectionsConnection"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkListsContextTestQuery",
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
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": "collection(id:\"saved-artwork\")"
          },
          {
            "alias": "customArtworkLists",
            "args": (v6/*: any*/),
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
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
            "storageKey": "collectionsConnection(default:false,saves:true,sort:\"UPDATED_AT_DESC\")"
          },
          {
            "alias": "customArtworkLists",
            "args": (v6/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "ArtworkLists_customArtworkLists",
            "kind": "LinkedHandle",
            "name": "collectionsConnection"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "a2ca114fcfc6e2e7a0368e1df265e07e",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "me.customArtworkLists.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CollectionsEdge"
        },
        "me.customArtworkLists.edges.cursor": (v7/*: any*/),
        "me.customArtworkLists.edges.node": (v8/*: any*/),
        "me.customArtworkLists.edges.node.__typename": (v7/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection": (v9/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges": (v10/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges.node": (v11/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges.node.id": (v12/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges.node.image": (v13/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges.node.image.resized": (v14/*: any*/),
        "me.customArtworkLists.edges.node.artworksConnection.edges.node.image.resized.url": (v7/*: any*/),
        "me.customArtworkLists.edges.node.artworksCount": (v15/*: any*/),
        "me.customArtworkLists.edges.node.id": (v12/*: any*/),
        "me.customArtworkLists.edges.node.internalID": (v12/*: any*/),
        "me.customArtworkLists.edges.node.name": (v7/*: any*/),
        "me.customArtworkLists.edges.node.shareableWithPartners": (v16/*: any*/),
        "me.customArtworkLists.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.customArtworkLists.pageInfo.endCursor": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "me.customArtworkLists.pageInfo.hasNextPage": (v16/*: any*/),
        "me.id": (v12/*: any*/),
        "me.savedArtworksArtworkList": (v8/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection": (v9/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges": (v10/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges.node": (v11/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges.node.id": (v12/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges.node.image": (v13/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges.node.image.resized": (v14/*: any*/),
        "me.savedArtworksArtworkList.artworksConnection.edges.node.image.resized.url": (v7/*: any*/),
        "me.savedArtworksArtworkList.artworksCount": (v15/*: any*/),
        "me.savedArtworksArtworkList.id": (v12/*: any*/),
        "me.savedArtworksArtworkList.internalID": (v12/*: any*/),
        "me.savedArtworksArtworkList.name": (v7/*: any*/),
        "me.savedArtworksArtworkList.shareableWithPartners": (v16/*: any*/)
      }
    },
    "name": "ArtworkListsContextTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "3e1a733ab6896cc0fcbd7eab35e17b68";

export default node;
