/**
 * @generated SignedSource<<51bd657afff69e1b623d0f5dfeb846c1>>
 * @relayHash 53c73f80bf3ace285163c1e7c655bb4d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 53c73f80bf3ace285163c1e7c655bb4d

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionTestsQuery$variables = Record<PropertyKey, never>;
export type CollectionTestsQuery$data = {
  readonly marketingCollection: {
    readonly " $fragmentSpreads": FragmentRefs<"Collection_collection">;
  } | null | undefined;
};
export type CollectionTestsQuery = {
  response: CollectionTestsQuery$data;
  variables: CollectionTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "doesn't matter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionMarkdown",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v6 = {
  "kind": "Literal",
  "name": "sort",
  "value": "-decayed_merch"
},
v7 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "ARTIST",
      "ARTIST_NATIONALITY",
      "COLOR",
      "DIMENSION_RANGE",
      "LOCATION_CITY",
      "MAJOR_PERIOD",
      "MATERIALS_TERMS",
      "MEDIUM",
      "PARTNER",
      "PRICE_RANGE"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-decayed_merch"
    }
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v12 = [
  (v8/*: any*/),
  (v1/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v15/*: any*/)
  ],
  "storageKey": null
},
v17 = {
  "kind": "Literal",
  "name": "aggregations",
  "value": [
    "TOTAL"
  ]
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FilterArtworksConnection"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v24 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v26 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v27 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v29 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v30 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "FilterArtworksEdge"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Collection_collection"
          }
        ],
        "storageKey": "marketingCollection(slug:\"doesn't matter\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CollectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDepartment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "showFeaturedArtists",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "headerImage",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": "image",
            "args": [
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
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
                                "name": "version",
                                "value": "larger"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"larger\")"
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": "artworksConnection(first:1,sort:\"-decayed_merch\")"
          },
          {
            "alias": "collectionArtworks",
            "args": (v7/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "kind": "LinkedField",
                "name": "aggregations",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slice",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "count",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "total",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
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
                      (v1/*: any*/),
                      (v9/*: any*/)
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
              },
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
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
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "includeAll",
                                "value": false
                              }
                            ],
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "aspectRatio",
                                "storageKey": null
                              },
                              (v10/*: any*/),
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
                                "args": null,
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
                                "storageKey": null
                              }
                            ],
                            "storageKey": "image(includeAll:false)"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artist",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ArtistTargetSupply",
                                "kind": "LinkedField",
                                "name": "targetSupply",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "priority",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          (v11/*: any*/),
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
                              (v11/*: any*/),
                              (v8/*: any*/),
                              (v1/*: any*/)
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
                              (v11/*: any*/),
                              (v1/*: any*/)
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
                                  (v2/*: any*/),
                                  (v8/*: any*/),
                                  (v1/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
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
                            "name": "date",
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
                            "selections": (v12/*: any*/),
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isSaved",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          (v13/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "displayTimelyAt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cascadingEndTimeIntervalMinutes",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "extendedBiddingPeriodMinutes",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "extendedBiddingIntervalMinutes",
                                "storageKey": null
                              },
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startAt",
                                "storageKey": null
                              },
                              (v1/*: any*/)
                            ],
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
                                "kind": "ScalarField",
                                "name": "formattedEndDateTime",
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lotID",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lotLabel",
                                "storageKey": null
                              },
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "extendedBiddingEndAt",
                                "storageKey": null
                              },
                              (v1/*: any*/)
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
                            "selections": (v12/*: any*/),
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
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v1/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArtworkConnectionInterface",
                "abstractKey": "__isArtworkConnectionInterface"
              }
            ],
            "storageKey": "artworksConnection(aggregations:[\"ARTIST\",\"ARTIST_NATIONALITY\",\"COLOR\",\"DIMENSION_RANGE\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:10,input:{\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "collectionArtworks",
            "args": (v7/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "Collection_collectionArtworks",
            "kind": "LinkedHandle",
            "name": "artworksConnection"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "MERCHANDISABLE_ARTISTS"
                ]
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 0
              },
              (v6/*: any*/)
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 4
                  }
                ],
                "concreteType": "Artist",
                "kind": "LinkedField",
                "name": "merchandisableArtists",
                "plural": true,
                "selections": [
                  (v11/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "initials",
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  {
                    "alias": "is_followed",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFollowed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nationality",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "birthday",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deathday",
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": "merchandisableArtists(size:4)"
              },
              (v1/*: any*/)
            ],
            "storageKey": "artworksConnection(aggregations:[\"MERCHANDISABLE_ARTISTS\"],size:0,sort:\"-decayed_merch\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionQuery",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "artistIDs",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "featuredArtistExclusionIds",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "groupType",
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v1/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "priceGuidance",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      (v17/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      },
                      (v6/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterArtworksEdge",
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
                              (v3/*: any*/),
                              (v16/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:3,sort:\"-decayed_merch\")"
                  },
                  (v4/*: any*/),
                  {
                    "alias": "featuredCollectionArtworks",
                    "args": [
                      (v17/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterArtworksEdge",
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
                                  (v15/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:1,sort:\"-decayed_merch\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"doesn't matter\")"
      }
    ]
  },
  "params": {
    "id": "53c73f80bf3ace285163c1e7c655bb4d",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "marketingCollection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MarketingCollection"
        },
        "marketingCollection.artworksConnection": (v18/*: any*/),
        "marketingCollection.artworksConnection.id": (v19/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists": (v20/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.birthday": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.deathday": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.href": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.id": (v19/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.image": (v22/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.image.url": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.initials": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.internalID": (v19/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.is_followed": (v23/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.name": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.nationality": (v21/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.slug": (v19/*: any*/),
        "marketingCollection.collectionArtworks": (v18/*: any*/),
        "marketingCollection.collectionArtworks.__isArtworkConnectionInterface": (v24/*: any*/),
        "marketingCollection.collectionArtworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "marketingCollection.collectionArtworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "marketingCollection.collectionArtworks.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "marketingCollection.collectionArtworks.aggregations.counts.name": (v24/*: any*/),
        "marketingCollection.collectionArtworks.aggregations.counts.value": (v24/*: any*/),
        "marketingCollection.collectionArtworks.aggregations.slice": {
          "enumValues": [
            "ARTIST",
            "ARTIST_NATIONALITY",
            "ARTIST_SERIES",
            "ATTRIBUTION_CLASS",
            "COLOR",
            "DIMENSION_RANGE",
            "FOLLOWED_ARTISTS",
            "GALLERY",
            "INSTITUTION",
            "LOCATION_CITY",
            "MAJOR_PERIOD",
            "MATERIALS_TERMS",
            "MEDIUM",
            "MERCHANDISABLE_ARTISTS",
            "PARTNER",
            "PARTNER_CITY",
            "PERIOD",
            "PRICE_RANGE",
            "SIMPLE_PRICE_HISTOGRAM",
            "TOTAL"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtworkAggregation"
        },
        "marketingCollection.collectionArtworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "marketingCollection.collectionArtworks.counts.total": (v25/*: any*/),
        "marketingCollection.collectionArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "marketingCollection.collectionArtworks.edges.__isNode": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.__typename": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.cursor": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node": (v26/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.__typename": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "marketingCollection.collectionArtworks.edges.node.artist.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "marketingCollection.collectionArtworks.edges.node.artist.targetSupply.priority": {
          "enumValues": [
            "FALSE",
            "TRUE"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyPriority"
        },
        "marketingCollection.collectionArtworks.edges.node.artistNames": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artists": (v20/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artists.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artists.name": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artistsArray": (v20/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artistsArray.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artistsArray.internalID": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artistsArray.name": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "marketingCollection.collectionArtworks.edges.node.attributionClass.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.attributionClass.internalID": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.availability": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "marketingCollection.collectionArtworks.edges.node.customArtworkLists.totalCount": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.date": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.heightCm": (v28/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.href": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image": (v22/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "marketingCollection.collectionArtworks.edges.node.image.blurhash": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "marketingCollection.collectionArtworks.edges.node.image.resized.height": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.resized.src": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.resized.srcSet": (v24/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.resized.width": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.url": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.internalID": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isAcquireable": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isBiddable": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isEligibleToCreateAlert": (v29/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isHangable": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isInquireable": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isOfferable": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.isSaved": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "marketingCollection.collectionArtworks.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "marketingCollection.collectionArtworks.edges.node.mediumType.filterGene.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.mediumType.filterGene.name": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.mediumType.filterGene.slug": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "marketingCollection.collectionArtworks.edges.node.partner.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.partner.name": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.preview": (v22/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.preview.url": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.realizedPrice": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "marketingCollection.collectionArtworks.edges.node.sale.cascadingEndTimeIntervalMinutes": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.displayTimelyAt": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.endAt": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.extendedBiddingIntervalMinutes": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.extendedBiddingPeriodMinutes": (v27/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.isAuction": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.isClosed": (v23/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.startAt": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.counts.bidderPositions": (v25/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.currentBid.display": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.endAt": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.extendedBiddingEndAt": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.formattedEndDateTime": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.lotID": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.lotLabel": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleMessage": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.slug": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.title": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.widthCm": (v28/*: any*/),
        "marketingCollection.collectionArtworks.id": (v19/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "marketingCollection.collectionArtworks.pageInfo.endCursor": (v21/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo.hasNextPage": (v29/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo.startCursor": (v21/*: any*/),
        "marketingCollection.descriptionMarkdown": (v21/*: any*/),
        "marketingCollection.featuredArtistExclusionIds": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "String"
        },
        "marketingCollection.headerImage": (v21/*: any*/),
        "marketingCollection.id": (v19/*: any*/),
        "marketingCollection.image": (v18/*: any*/),
        "marketingCollection.image.edges": (v30/*: any*/),
        "marketingCollection.image.edges.node": (v26/*: any*/),
        "marketingCollection.image.edges.node.id": (v19/*: any*/),
        "marketingCollection.image.edges.node.image": (v22/*: any*/),
        "marketingCollection.image.edges.node.image.url": (v21/*: any*/),
        "marketingCollection.image.id": (v19/*: any*/),
        "marketingCollection.isDepartment": (v29/*: any*/),
        "marketingCollection.linkedCollections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "MarketingCollectionGroup"
        },
        "marketingCollection.linkedCollections.groupType": {
          "enumValues": [
            "ArtistSeries",
            "FeaturedCollections",
            "OtherCollections"
          ],
          "nullable": false,
          "plural": false,
          "type": "MarketingCollectionGroupTypeEnum"
        },
        "marketingCollection.linkedCollections.members": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "MarketingCollection"
        },
        "marketingCollection.linkedCollections.members.artworksConnection": (v18/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges": (v30/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node": (v26/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.id": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.image": (v22/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.image.url": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.title": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.id": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.descriptionMarkdown": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks": (v18/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges": (v30/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node": (v26/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.id": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.image": (v22/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.image.blurhash": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.image.url": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.id": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.id": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.priceGuidance": (v28/*: any*/),
        "marketingCollection.linkedCollections.members.slug": (v24/*: any*/),
        "marketingCollection.linkedCollections.members.title": (v24/*: any*/),
        "marketingCollection.linkedCollections.name": (v24/*: any*/),
        "marketingCollection.query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "MarketingCollectionQuery"
        },
        "marketingCollection.query.artistIDs": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "marketingCollection.query.id": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "marketingCollection.showFeaturedArtists": (v29/*: any*/),
        "marketingCollection.slug": (v24/*: any*/),
        "marketingCollection.title": (v24/*: any*/)
      }
    },
    "name": "CollectionTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "fbe5831179fb6d1e2f66b7360c128d63";

export default node;
