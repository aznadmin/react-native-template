/**
 * @generated SignedSource<<ea65cce5e29f173c2cbf45d197660b9d>>
 * @relayHash c60b9d583cb5fac799b9e7a47a91e2ab
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c60b9d583cb5fac799b9e7a47a91e2ab

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArtistArticlesTestsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionArtworkArtistArticlesTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistArticles_artwork">;
  } | null | undefined;
};
export type MyCollectionArtworkArtistArticlesTestsQuery = {
  response: MyCollectionArtworkArtistArticlesTestsQuery$data;
  variables: MyCollectionArtworkArtistArticlesTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkArtistArticlesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkArtistArticles_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-slug\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionArtworkArtistArticlesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 3
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "PUBLISHED_AT_DESC"
                  }
                ],
                "concreteType": "ArticleConnection",
                "kind": "LinkedField",
                "name": "articlesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArticleEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Article",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "href",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "thumbnailTitle",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Author",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "MMM Do, YYYY"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "publishedAt",
                            "storageKey": "publishedAt(format:\"MMM Do, YYYY\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnailImage",
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
                "storageKey": "articlesConnection(first:3,sort:\"PUBLISHED_AT_DESC\")"
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": "artwork(id:\"some-slug\")"
      }
    ]
  },
  "params": {
    "id": "c60b9d583cb5fac799b9e7a47a91e2ab",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artwork.artist.articlesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleConnection"
        },
        "artwork.artist.articlesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArticleEdge"
        },
        "artwork.artist.articlesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "artwork.artist.articlesConnection.edges.node.author": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Author"
        },
        "artwork.artist.articlesConnection.edges.node.author.id": (v5/*: any*/),
        "artwork.artist.articlesConnection.edges.node.author.name": (v6/*: any*/),
        "artwork.artist.articlesConnection.edges.node.href": (v6/*: any*/),
        "artwork.artist.articlesConnection.edges.node.id": (v5/*: any*/),
        "artwork.artist.articlesConnection.edges.node.internalID": (v5/*: any*/),
        "artwork.artist.articlesConnection.edges.node.publishedAt": (v6/*: any*/),
        "artwork.artist.articlesConnection.edges.node.slug": (v6/*: any*/),
        "artwork.artist.articlesConnection.edges.node.thumbnailImage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artwork.artist.articlesConnection.edges.node.thumbnailImage.url": (v6/*: any*/),
        "artwork.artist.articlesConnection.edges.node.thumbnailTitle": (v6/*: any*/),
        "artwork.artist.id": (v5/*: any*/),
        "artwork.artist.internalID": (v5/*: any*/),
        "artwork.artist.name": (v6/*: any*/),
        "artwork.artist.slug": (v5/*: any*/),
        "artwork.id": (v5/*: any*/),
        "artwork.internalID": (v5/*: any*/),
        "artwork.slug": (v5/*: any*/)
      }
    },
    "name": "MyCollectionArtworkArtistArticlesTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6d7c0fa4882d5b78c9701268a9c74623";

export default node;
