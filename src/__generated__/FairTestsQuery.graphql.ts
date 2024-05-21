/**
 * @generated SignedSource<<e711aec3c4bd11f8c812c0e148576382>>
 * @relayHash ee69849660a2b9a9330c90fc4cd40cf7
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ee69849660a2b9a9330c90fc4cd40cf7

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairTestsQuery$variables = {
  fairID: string;
};
export type FairTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"Fair_fair">;
  } | null | undefined;
};
export type FairTestsQuery = {
  response: FairTestsQuery$data;
  variables: FairTestsQuery$variables;
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
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
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artworks",
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v11 = [
  (v10/*: any*/),
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "includeArtworksByFollowedArtists": true
    }
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
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
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v15 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MARKDOWN"
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startAt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v18 = {
  "kind": "Literal",
  "name": "first",
  "value": 30
},
v19 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "ARTIST",
      "ARTIST_NATIONALITY",
      "COLOR",
      "DIMENSION_RANGE",
      "FOLLOWED_ARTISTS",
      "LOCATION_CITY",
      "MAJOR_PERIOD",
      "MATERIALS_TERMS",
      "MEDIUM",
      "PARTNER",
      "PRICE_RANGE"
    ]
  },
  (v18/*: any*/),
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-decayed_merch"
    }
  }
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v21 = {
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
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v23 = {
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
v24 = [
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
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEligibleToCreateAlert",
  "storageKey": null
},
v26 = {
  "alias": "artistsArray",
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v13/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v27 = {
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
v28 = {
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
        (v13/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "availability",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v32 = [
  (v13/*: any*/),
  (v5/*: any*/)
],
v33 = {
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
  "selections": (v32/*: any*/),
  "storageKey": "artists(shallow:true)"
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "widthCm",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heightCm",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isHangable",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAcquireable",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isBiddable",
  "storageKey": null
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInquireable",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isOfferable",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAuction",
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isClosed",
  "storageKey": null
},
v45 = {
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
v46 = {
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
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extendedBiddingEndAt",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v32/*: any*/),
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "realizedPrice",
  "storageKey": null
},
v50 = {
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
v51 = {
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
    (v8/*: any*/)
  ],
  "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
},
v52 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v53 = [
  (v18/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "FEATURED_ASC"
  }
],
v54 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "node",
    "plural": false,
    "selections": [
      (v6/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/),
      (v27/*: any*/),
      (v28/*: any*/),
      (v5/*: any*/),
      (v29/*: any*/),
      (v37/*: any*/),
      (v38/*: any*/),
      (v39/*: any*/),
      (v40/*: any*/),
      (v7/*: any*/),
      (v42/*: any*/),
      (v33/*: any*/),
      (v34/*: any*/),
      (v35/*: any*/),
      (v36/*: any*/),
      (v30/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Image",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": [
          (v22/*: any*/),
          (v23/*: any*/),
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
            "selections": (v24/*: any*/),
            "storageKey": "resized(width:155)"
          },
          (v14/*: any*/)
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
          (v43/*: any*/),
          (v44/*: any*/),
          (v17/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      (v31/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          (v45/*: any*/),
          (v46/*: any*/),
          (v17/*: any*/),
          (v47/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      (v48/*: any*/),
      (v49/*: any*/),
      (v41/*: any*/),
      (v50/*: any*/),
      (v51/*: any*/)
    ],
    "storageKey": null
  }
],
v55 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Fair"
},
v56 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v57 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v58 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v59 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v60 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v61 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v62 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v63 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v64 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "AttributionClass"
},
v65 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CollectionsConnection"
},
v66 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v67 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v68 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ResizedImageUrl"
},
v69 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v70 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v71 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkMedium"
},
v72 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Gene"
},
v73 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Partner"
},
v74 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Sale"
},
v75 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtwork"
},
v76 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCounts"
},
v77 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCurrentBid"
},
v78 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "PageInfo"
},
v79 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FilterArtworksConnection"
},
v80 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "FilterArtworksEdge"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FairTestsQuery",
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
            "name": "Fair_fair"
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
    "name": "FairTestsQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isActive",
            "storageKey": null
          },
          {
            "alias": "articles",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5
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
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
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
                            "alias": "src",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "imageURL",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": "articlesConnection(first:5,sort:\"PUBLISHED_AT_DESC\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 5
              }
            ],
            "concreteType": "MarketingCollection",
            "kind": "LinkedField",
            "name": "marketingCollections",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "category",
                "storageKey": null
              },
              {
                "alias": "artworks",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 3
                  }
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
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": "artworksConnection(first:3)"
              }
            ],
            "storageKey": "marketingCollections(size:5)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FairCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "partnerShows",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "followedArtistArtworks",
            "args": (v11/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
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
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(first:20,input:{\"includeArtworksByFollowedArtists\":true})"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "about",
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "icon",
                "plural": false,
                "selections": [
                  {
                    "alias": "imageUrl",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "untouched-png"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"untouched-png\")"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
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
                "alias": "imageUrl",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "large_rectangle"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"large_rectangle\")"
              },
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "LatLng",
                "kind": "LinkedField",
                "name": "coordinates",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lng",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ticketsLink",
            "storageKey": null
          },
          {
            "alias": "fairHours",
            "args": (v15/*: any*/),
            "kind": "ScalarField",
            "name": "hours",
            "storageKey": "hours(format:\"MARKDOWN\")"
          },
          {
            "alias": "fairLinks",
            "args": (v15/*: any*/),
            "kind": "ScalarField",
            "name": "links",
            "storageKey": "links(format:\"MARKDOWN\")"
          },
          {
            "alias": "fairTickets",
            "args": (v15/*: any*/),
            "kind": "ScalarField",
            "name": "tickets",
            "storageKey": "tickets(format:\"MARKDOWN\")"
          },
          {
            "alias": "fairContact",
            "args": (v15/*: any*/),
            "kind": "ScalarField",
            "name": "contact",
            "storageKey": "contact(format:\"MARKDOWN\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "SHORT"
              }
            ],
            "kind": "ScalarField",
            "name": "exhibitionPeriod",
            "storageKey": "exhibitionPeriod(format:\"SHORT\")"
          },
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "alias": "fairArtworks",
            "args": (v19/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
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
                        "name": "count",
                        "storageKey": null
                      },
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value",
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
                      (v5/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/)
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "followedArtists",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v21/*: any*/),
              (v5/*: any*/),
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
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
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
                              (v14/*: any*/),
                              (v22/*: any*/),
                              (v23/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ResizedImageUrl",
                                "kind": "LinkedField",
                                "name": "resized",
                                "plural": false,
                                "selections": (v24/*: any*/),
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
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v2/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/),
                          (v36/*: any*/),
                          (v37/*: any*/),
                          (v38/*: any*/),
                          (v39/*: any*/),
                          (v40/*: any*/),
                          (v41/*: any*/),
                          (v42/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Sale",
                            "kind": "LinkedField",
                            "name": "sale",
                            "plural": false,
                            "selections": [
                              (v43/*: any*/),
                              (v44/*: any*/),
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
                              (v17/*: any*/),
                              (v16/*: any*/),
                              (v5/*: any*/)
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
                              (v45/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "formattedEndDateTime",
                                "storageKey": null
                              },
                              (v46/*: any*/),
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
                              (v17/*: any*/),
                              (v47/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v48/*: any*/),
                          (v49/*: any*/),
                          (v50/*: any*/),
                          (v51/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v52/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArtworkConnectionInterface",
                "abstractKey": "__isArtworkConnectionInterface"
              }
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"ARTIST\",\"ARTIST_NATIONALITY\",\"COLOR\",\"DIMENSION_RANGE\",\"FOLLOWED_ARTISTS\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:30,input:{\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "fairArtworks",
            "args": (v19/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "Fair_fairArtworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          },
          {
            "alias": "exhibitors",
            "args": (v53/*: any*/),
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
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v13/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v32/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          (v52/*: any*/)
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
                          (v10/*: any*/)
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
                            "selections": (v54/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": "artworksConnection(first:20)"
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": "showsConnection(first:30,sort:\"FEATURED_ASC\")"
          },
          {
            "alias": "exhibitors",
            "args": (v53/*: any*/),
            "filters": [
              "sort"
            ],
            "handle": "connection",
            "key": "FairExhibitorsQuery_exhibitors",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": (v54/*: any*/),
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(first:20,input:{\"includeArtworksByFollowedArtists\":true})"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "ee69849660a2b9a9330c90fc4cd40cf7",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "fair": (v55/*: any*/),
        "fair.about": (v56/*: any*/),
        "fair.articles": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleConnection"
        },
        "fair.articles.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArticleEdge"
        },
        "fair.articles.edges.__typename": (v57/*: any*/),
        "fair.articles.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "fair.articles.edges.node.href": (v56/*: any*/),
        "fair.articles.edges.node.id": (v58/*: any*/),
        "fair.articles.edges.node.internalID": (v58/*: any*/),
        "fair.articles.edges.node.publishedAt": (v56/*: any*/),
        "fair.articles.edges.node.slug": (v56/*: any*/),
        "fair.articles.edges.node.thumbnailImage": (v59/*: any*/),
        "fair.articles.edges.node.thumbnailImage.src": (v56/*: any*/),
        "fair.articles.edges.node.title": (v56/*: any*/),
        "fair.articles.totalCount": (v60/*: any*/),
        "fair.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FairCounts"
        },
        "fair.counts.artworks": (v61/*: any*/),
        "fair.counts.partnerShows": (v61/*: any*/),
        "fair.endAt": (v56/*: any*/),
        "fair.exhibitionPeriod": (v56/*: any*/),
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
        "fair.exhibitors.edges.cursor": (v57/*: any*/),
        "fair.exhibitors.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "fair.exhibitors.edges.node.__typename": (v57/*: any*/),
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
        "fair.exhibitors.edges.node.artworksConnection.edges.node": (v62/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistNames": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists": (v63/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artists.name": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray": (v63/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.internalID": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.artistsArray.name": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass": (v64/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.attributionClass.internalID": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.availability": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.customArtworkLists": (v65/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.customArtworkLists.totalCount": (v60/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.date": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.heightCm": (v66/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.href": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image": (v59/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.aspectRatio": (v67/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.blurhash": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized": (v68/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.height": (v60/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.src": (v57/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.srcSet": (v57/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.resized.width": (v60/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.image.url": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.internalID": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isAcquireable": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isBiddable": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isEligibleToCreateAlert": (v70/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isHangable": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isInquireable": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isOfferable": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isSaved": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.isUnlisted": (v70/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType": (v71/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene": (v72/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.name": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.mediumType.filterGene.slug": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner": (v73/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.partner.name": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.preview": (v59/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.preview.url": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.realizedPrice": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale": (v74/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.endAt": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.isAuction": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.sale.isClosed": (v69/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork": (v75/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.counts": (v76/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.counts.bidderPositions": (v61/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.currentBid": (v77/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.currentBid.display": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.endAt": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleArtwork.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.saleMessage": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.slug": (v58/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.title": (v56/*: any*/),
        "fair.exhibitors.edges.node.artworksConnection.edges.node.widthCm": (v66/*: any*/),
        "fair.exhibitors.edges.node.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ShowCounts"
        },
        "fair.exhibitors.edges.node.counts.artworks": (v60/*: any*/),
        "fair.exhibitors.edges.node.fair": (v55/*: any*/),
        "fair.exhibitors.edges.node.fair.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.fair.internalID": (v58/*: any*/),
        "fair.exhibitors.edges.node.fair.slug": (v58/*: any*/),
        "fair.exhibitors.edges.node.href": (v56/*: any*/),
        "fair.exhibitors.edges.node.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.internalID": (v58/*: any*/),
        "fair.exhibitors.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "fair.exhibitors.edges.node.partner.__isNode": (v57/*: any*/),
        "fair.exhibitors.edges.node.partner.__typename": (v57/*: any*/),
        "fair.exhibitors.edges.node.partner.id": (v58/*: any*/),
        "fair.exhibitors.edges.node.partner.name": (v56/*: any*/),
        "fair.exhibitors.edges.node.slug": (v58/*: any*/),
        "fair.exhibitors.pageInfo": (v78/*: any*/),
        "fair.exhibitors.pageInfo.endCursor": (v56/*: any*/),
        "fair.exhibitors.pageInfo.hasNextPage": (v70/*: any*/),
        "fair.fairArtworks": (v79/*: any*/),
        "fair.fairArtworks.__isArtworkConnectionInterface": (v57/*: any*/),
        "fair.fairArtworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "fair.fairArtworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "fair.fairArtworks.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "fair.fairArtworks.aggregations.counts.name": (v57/*: any*/),
        "fair.fairArtworks.aggregations.counts.value": (v57/*: any*/),
        "fair.fairArtworks.aggregations.slice": {
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
        "fair.fairArtworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "fair.fairArtworks.counts.followedArtists": (v61/*: any*/),
        "fair.fairArtworks.counts.total": (v61/*: any*/),
        "fair.fairArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "fair.fairArtworks.edges.__isNode": (v57/*: any*/),
        "fair.fairArtworks.edges.__typename": (v57/*: any*/),
        "fair.fairArtworks.edges.cursor": (v57/*: any*/),
        "fair.fairArtworks.edges.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node": (v62/*: any*/),
        "fair.fairArtworks.edges.node.__typename": (v57/*: any*/),
        "fair.fairArtworks.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "fair.fairArtworks.edges.node.artist.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "fair.fairArtworks.edges.node.artist.targetSupply.priority": {
          "enumValues": [
            "FALSE",
            "TRUE"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyPriority"
        },
        "fair.fairArtworks.edges.node.artistNames": (v56/*: any*/),
        "fair.fairArtworks.edges.node.artists": (v63/*: any*/),
        "fair.fairArtworks.edges.node.artists.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.artists.name": (v56/*: any*/),
        "fair.fairArtworks.edges.node.artistsArray": (v63/*: any*/),
        "fair.fairArtworks.edges.node.artistsArray.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.artistsArray.internalID": (v58/*: any*/),
        "fair.fairArtworks.edges.node.artistsArray.name": (v56/*: any*/),
        "fair.fairArtworks.edges.node.attributionClass": (v64/*: any*/),
        "fair.fairArtworks.edges.node.attributionClass.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.attributionClass.internalID": (v58/*: any*/),
        "fair.fairArtworks.edges.node.availability": (v56/*: any*/),
        "fair.fairArtworks.edges.node.customArtworkLists": (v65/*: any*/),
        "fair.fairArtworks.edges.node.customArtworkLists.totalCount": (v60/*: any*/),
        "fair.fairArtworks.edges.node.date": (v56/*: any*/),
        "fair.fairArtworks.edges.node.heightCm": (v66/*: any*/),
        "fair.fairArtworks.edges.node.href": (v56/*: any*/),
        "fair.fairArtworks.edges.node.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.image": (v59/*: any*/),
        "fair.fairArtworks.edges.node.image.aspectRatio": (v67/*: any*/),
        "fair.fairArtworks.edges.node.image.blurhash": (v56/*: any*/),
        "fair.fairArtworks.edges.node.image.resized": (v68/*: any*/),
        "fair.fairArtworks.edges.node.image.resized.height": (v60/*: any*/),
        "fair.fairArtworks.edges.node.image.resized.src": (v57/*: any*/),
        "fair.fairArtworks.edges.node.image.resized.srcSet": (v57/*: any*/),
        "fair.fairArtworks.edges.node.image.resized.width": (v60/*: any*/),
        "fair.fairArtworks.edges.node.image.url": (v56/*: any*/),
        "fair.fairArtworks.edges.node.internalID": (v58/*: any*/),
        "fair.fairArtworks.edges.node.isAcquireable": (v69/*: any*/),
        "fair.fairArtworks.edges.node.isBiddable": (v69/*: any*/),
        "fair.fairArtworks.edges.node.isEligibleToCreateAlert": (v70/*: any*/),
        "fair.fairArtworks.edges.node.isHangable": (v69/*: any*/),
        "fair.fairArtworks.edges.node.isInquireable": (v69/*: any*/),
        "fair.fairArtworks.edges.node.isOfferable": (v69/*: any*/),
        "fair.fairArtworks.edges.node.isSaved": (v69/*: any*/),
        "fair.fairArtworks.edges.node.mediumType": (v71/*: any*/),
        "fair.fairArtworks.edges.node.mediumType.filterGene": (v72/*: any*/),
        "fair.fairArtworks.edges.node.mediumType.filterGene.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.mediumType.filterGene.name": (v56/*: any*/),
        "fair.fairArtworks.edges.node.mediumType.filterGene.slug": (v58/*: any*/),
        "fair.fairArtworks.edges.node.partner": (v73/*: any*/),
        "fair.fairArtworks.edges.node.partner.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.partner.name": (v56/*: any*/),
        "fair.fairArtworks.edges.node.preview": (v59/*: any*/),
        "fair.fairArtworks.edges.node.preview.url": (v56/*: any*/),
        "fair.fairArtworks.edges.node.realizedPrice": (v56/*: any*/),
        "fair.fairArtworks.edges.node.sale": (v74/*: any*/),
        "fair.fairArtworks.edges.node.sale.cascadingEndTimeIntervalMinutes": (v60/*: any*/),
        "fair.fairArtworks.edges.node.sale.displayTimelyAt": (v56/*: any*/),
        "fair.fairArtworks.edges.node.sale.endAt": (v56/*: any*/),
        "fair.fairArtworks.edges.node.sale.extendedBiddingIntervalMinutes": (v60/*: any*/),
        "fair.fairArtworks.edges.node.sale.extendedBiddingPeriodMinutes": (v60/*: any*/),
        "fair.fairArtworks.edges.node.sale.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.sale.isAuction": (v69/*: any*/),
        "fair.fairArtworks.edges.node.sale.isClosed": (v69/*: any*/),
        "fair.fairArtworks.edges.node.sale.startAt": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork": (v75/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.counts": (v76/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.counts.bidderPositions": (v61/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.currentBid": (v77/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.currentBid.display": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.endAt": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.extendedBiddingEndAt": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.formattedEndDateTime": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.id": (v58/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.lotID": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.lotLabel": (v56/*: any*/),
        "fair.fairArtworks.edges.node.saleMessage": (v56/*: any*/),
        "fair.fairArtworks.edges.node.slug": (v58/*: any*/),
        "fair.fairArtworks.edges.node.title": (v56/*: any*/),
        "fair.fairArtworks.edges.node.widthCm": (v66/*: any*/),
        "fair.fairArtworks.id": (v58/*: any*/),
        "fair.fairArtworks.pageInfo": (v78/*: any*/),
        "fair.fairArtworks.pageInfo.endCursor": (v56/*: any*/),
        "fair.fairArtworks.pageInfo.hasNextPage": (v70/*: any*/),
        "fair.fairArtworks.pageInfo.startCursor": (v56/*: any*/),
        "fair.fairContact": (v56/*: any*/),
        "fair.fairHours": (v56/*: any*/),
        "fair.fairLinks": (v56/*: any*/),
        "fair.fairTickets": (v56/*: any*/),
        "fair.filterArtworksConnection": (v79/*: any*/),
        "fair.filterArtworksConnection.edges": (v80/*: any*/),
        "fair.filterArtworksConnection.edges.node": (v62/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistNames": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists": (v63/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.artists.name": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray": (v63/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.internalID": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.artistsArray.name": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.attributionClass": (v64/*: any*/),
        "fair.filterArtworksConnection.edges.node.attributionClass.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.attributionClass.internalID": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.availability": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.customArtworkLists": (v65/*: any*/),
        "fair.filterArtworksConnection.edges.node.customArtworkLists.totalCount": (v60/*: any*/),
        "fair.filterArtworksConnection.edges.node.date": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.heightCm": (v66/*: any*/),
        "fair.filterArtworksConnection.edges.node.href": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.image": (v59/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.aspectRatio": (v67/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.blurhash": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized": (v68/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.height": (v60/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.src": (v57/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.srcSet": (v57/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.resized.width": (v60/*: any*/),
        "fair.filterArtworksConnection.edges.node.image.url": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.internalID": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.isAcquireable": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isBiddable": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isEligibleToCreateAlert": (v70/*: any*/),
        "fair.filterArtworksConnection.edges.node.isHangable": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isInquireable": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isOfferable": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isSaved": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.isUnlisted": (v70/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType": (v71/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene": (v72/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.name": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.mediumType.filterGene.slug": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.partner": (v73/*: any*/),
        "fair.filterArtworksConnection.edges.node.partner.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.partner.name": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.preview": (v59/*: any*/),
        "fair.filterArtworksConnection.edges.node.preview.url": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.realizedPrice": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale": (v74/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.endAt": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.isAuction": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.sale.isClosed": (v69/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork": (v75/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.counts": (v76/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.counts.bidderPositions": (v61/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.currentBid": (v77/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.currentBid.display": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.endAt": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleArtwork.id": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.saleMessage": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.slug": (v58/*: any*/),
        "fair.filterArtworksConnection.edges.node.title": (v56/*: any*/),
        "fair.filterArtworksConnection.edges.node.widthCm": (v66/*: any*/),
        "fair.filterArtworksConnection.id": (v58/*: any*/),
        "fair.followedArtistArtworks": (v79/*: any*/),
        "fair.followedArtistArtworks.edges": (v80/*: any*/),
        "fair.followedArtistArtworks.edges.__typename": (v57/*: any*/),
        "fair.followedArtistArtworks.id": (v58/*: any*/),
        "fair.id": (v58/*: any*/),
        "fair.image": (v59/*: any*/),
        "fair.image.aspectRatio": (v67/*: any*/),
        "fair.image.imageUrl": (v56/*: any*/),
        "fair.internalID": (v58/*: any*/),
        "fair.isActive": (v69/*: any*/),
        "fair.location": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Location"
        },
        "fair.location.coordinates": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "LatLng"
        },
        "fair.location.coordinates.lat": (v66/*: any*/),
        "fair.location.coordinates.lng": (v66/*: any*/),
        "fair.location.id": (v58/*: any*/),
        "fair.location.summary": (v56/*: any*/),
        "fair.marketingCollections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "MarketingCollection"
        },
        "fair.marketingCollections.__typename": (v57/*: any*/),
        "fair.marketingCollections.artworks": (v79/*: any*/),
        "fair.marketingCollections.artworks.edges": (v80/*: any*/),
        "fair.marketingCollections.artworks.edges.node": (v62/*: any*/),
        "fair.marketingCollections.artworks.edges.node.id": (v58/*: any*/),
        "fair.marketingCollections.artworks.edges.node.image": (v59/*: any*/),
        "fair.marketingCollections.artworks.edges.node.image.url": (v56/*: any*/),
        "fair.marketingCollections.artworks.id": (v58/*: any*/),
        "fair.marketingCollections.category": (v57/*: any*/),
        "fair.marketingCollections.id": (v58/*: any*/),
        "fair.marketingCollections.slug": (v57/*: any*/),
        "fair.marketingCollections.title": (v57/*: any*/),
        "fair.name": (v56/*: any*/),
        "fair.profile": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Profile"
        },
        "fair.profile.icon": (v59/*: any*/),
        "fair.profile.icon.imageUrl": (v56/*: any*/),
        "fair.profile.id": (v58/*: any*/),
        "fair.slug": (v58/*: any*/),
        "fair.startAt": (v56/*: any*/),
        "fair.summary": (v56/*: any*/),
        "fair.tagline": (v56/*: any*/),
        "fair.ticketsLink": (v56/*: any*/)
      }
    },
    "name": "FairTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "192a14f465374c22910874dbeac69dc1";

export default node;
