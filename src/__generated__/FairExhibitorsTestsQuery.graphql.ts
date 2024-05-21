/**
 * @generated SignedSource<<abcc1a36d3179e7d1885d6998e485170>>
 * @relayHash 8008a07a33a862f661855e70cb06ab26
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 8008a07a33a862f661855e70cb06ab26

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairExhibitorsTestsQuery$variables = {
  fairID: string;
};
export type FairExhibitorsTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairExhibitors_fair">;
  } | null | undefined;
};
export type FairExhibitorsTestsQuery = {
  response: FairExhibitorsTestsQuery$data;
  variables: FairExhibitorsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fairID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fairID"
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
  "name": "slug",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "FEATURED_ASC"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = [
  (v8/*: any*/),
  (v5/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Fair"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v20 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FairExhibitorsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairExhibitors_fair"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FairExhibitorsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "exhibitors",
            "args": (v4/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ShowCounts",
                        "kind": "LinkedField",
                        "name": "counts",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworks",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v9/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Fair",
                        "kind": "LinkedField",
                        "name": "fair",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 20
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
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  (v2/*: any*/),
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isEligibleToCreateAlert",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "artistsArray",
                                    "args": null,
                                    "concreteType": "Artist",
                                    "kind": "LinkedField",
                                    "name": "artists",
                                    "plural": true,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v8/*: any*/),
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AttributionClass",
                                    "kind": "LinkedField",
                                    "name": "attributionClass",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ArtworkMedium",
                                    "kind": "LinkedField",
                                    "name": "mediumType",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Gene",
                                        "kind": "LinkedField",
                                        "name": "filterGene",
                                        "plural": false,
                                        "selections": [
                                          (v3/*: any*/),
                                          (v8/*: any*/),
                                          (v5/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "availability",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isAcquireable",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isBiddable",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isInquireable",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isOfferable",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "artistNames",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "shallow",
                                        "value": true
                                      }
                                    ],
                                    "concreteType": "Artist",
                                    "kind": "LinkedField",
                                    "name": "artists",
                                    "plural": true,
                                    "selections": (v9/*: any*/),
                                    "storageKey": "artists(shallow:true)"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "widthCm",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "heightCm",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isHangable",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "date",
                                    "storageKey": null
                                  },
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
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "blurhash",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "version",
                                            "value": "large"
                                          }
                                        ],
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": "url(version:\"large\")"
                                      },
                                      {
                                        "alias": null,
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "width",
                                            "value": 155
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
                                            "name": "src",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "srcSet",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "width",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "height",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": "resized(width:155)"
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "aspectRatio",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isUnlisted",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Sale",
                                    "kind": "LinkedField",
                                    "name": "sale",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isAuction",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isClosed",
                                        "storageKey": null
                                      },
                                      (v10/*: any*/),
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "saleMessage",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "SaleArtwork",
                                    "kind": "LinkedField",
                                    "name": "saleArtwork",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "SaleArtworkCounts",
                                        "kind": "LinkedField",
                                        "name": "counts",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "bidderPositions",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "SaleArtworkCurrentBid",
                                        "kind": "LinkedField",
                                        "name": "currentBid",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "display",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v10/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "extendedBiddingEndAt",
                                        "storageKey": null
                                      },
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Partner",
                                    "kind": "LinkedField",
                                    "name": "partner",
                                    "plural": false,
                                    "selections": (v9/*: any*/),
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "realizedPrice",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isSaved",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "preview",
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
                                            "name": "version",
                                            "value": "square"
                                          }
                                        ],
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": "url(version:\"square\")"
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "customArtworkLists",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "default",
                                        "value": false
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 0
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "saves",
                                        "value": true
                                      }
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
                                    "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "artworksConnection(first:20)"
                      },
                      (v7/*: any*/)
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
            "storageKey": "showsConnection(first:30,sort:\"FEATURED_ASC\")"
          },
          {
            "alias": "exhibitors",
            "args": (v4/*: any*/),
            "filters": [
              "sort"
            ],
            "handle": "connection",
            "key": "FairExhibitorsQuery_exhibitors",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "8008a07a33a862f661855e70cb06ab26",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "fair": (v11/*: any*/),
        "fair.exhibitors": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ShowConnection"
        },
        "fair.exhibitors.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ShowEdge"
        },
        "fair.exhibitors.edges.cursor": (v12/*: any*/),
        "fair.exhibitors.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "fair.exhibitors.edges.node.__typename": (v12/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistNames": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists": (v14/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists.name": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray": (v14/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.internalID": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.name": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass.internalID": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.availability": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.customArtworkLists.totalCount": (v16/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.date": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.heightCm": (v17/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.href": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image": (v18/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.blurhash": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.height": (v16/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.src": (v12/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.srcSet": (v12/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.width": (v16/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.url": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.internalID": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isAcquireable": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isBiddable": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isEligibleToCreateAlert": (v20/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isHangable": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isInquireable": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isOfferable": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isSaved": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isUnlisted": (v20/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.name": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.slug": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner.name": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.preview": (v18/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.preview.url": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.realizedPrice": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.endAt": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.isAuction": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.isClosed": (v19/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.currentBid.display": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.endAt": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleMessage": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.slug": (v15/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.title": (v13/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.widthCm": (v17/*: any*/),
        "fair.exhibitors.edges.node.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ShowCounts"
        },
        "fair.exhibitors.edges.node.counts.artworks": (v16/*: any*/),
        "fair.exhibitors.edges.node.fair": (v11/*: any*/),
        "fair.exhibitors.edges.node.fair.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.fair.internalID": (v15/*: any*/),
        "fair.exhibitors.edges.node.fair.slug": (v15/*: any*/),
        "fair.exhibitors.edges.node.href": (v13/*: any*/),
        "fair.exhibitors.edges.node.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.internalID": (v15/*: any*/),
        "fair.exhibitors.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "fair.exhibitors.edges.node.partner.__isNode": (v12/*: any*/),
        "fair.exhibitors.edges.node.partner.__typename": (v12/*: any*/),
        "fair.exhibitors.edges.node.partner.id": (v15/*: any*/),
        "fair.exhibitors.edges.node.partner.name": (v13/*: any*/),
        "fair.exhibitors.edges.node.slug": (v15/*: any*/),
        "fair.exhibitors.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "fair.exhibitors.pageInfo.endCursor": (v13/*: any*/),
        "fair.exhibitors.pageInfo.hasNextPage": (v20/*: any*/),
        "fair.id": (v15/*: any*/),
        "fair.internalID": (v15/*: any*/),
        "fair.slug": (v15/*: any*/)
      }
    },
    "name": "FairExhibitorsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1dacda2b4e158ae544388af88ff58eb2";

export default node;
