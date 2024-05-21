/**
 * @generated SignedSource<<1488a4caf6b988f6b6c56cdf87b66362>>
 * @relayHash c6bcc70d6b55ca8c2bedf760fe572508
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c6bcc70d6b55ca8c2bedf760fe572508

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizResultsEmptyTabsQuery$variables = Record<PropertyKey, never>;
export type ArtQuizResultsEmptyTabsQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtQuizTrendingArtists_viewer" | "ArtQuizTrendingCollections_viewer">;
  } | null | undefined;
};
export type ArtQuizResultsEmptyTabsQuery = {
  response: ArtQuizResultsEmptyTabsQuery$data;
  variables: ArtQuizResultsEmptyTabsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 16
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
  "name": "name",
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
  "name": "href",
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "node",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
          (v4/*: any*/),
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
              (v4/*: any*/),
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
        "selections": (v7/*: any*/),
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
          (v8/*: any*/),
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
          (v8/*: any*/),
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
        "selections": (v7/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizResultsEmptyTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtQuizTrendingCollections_viewer"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtQuizTrendingArtists_viewer"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtQuizResultsEmptyTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "slugs",
                "value": [
                  "trending-this-week",
                  "iconic-prints",
                  "street-art-highlights",
                  "artists-on-the-rise",
                  "finds-under-1000-dollars",
                  "top-auction-lots",
                  "curators-picks-emerging",
                  "contemporary-now"
                ]
              }
            ],
            "concreteType": "MarketingCollection",
            "kind": "LinkedField",
            "name": "marketingCollections",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "descriptionMarkdown",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
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
                    "selections": (v9/*: any*/),
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": "artworksConnection(first:16)"
              },
              (v2/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": "marketingCollections(slugs:[\"trending-this-week\",\"iconic-prints\",\"street-art-highlights\",\"artists-on-the-rise\",\"finds-under-1000-dollars\",\"top-auction-lots\",\"curators-picks-emerging\",\"contemporary-now\"])"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ArtistConnection",
            "kind": "LinkedField",
            "name": "curatedTrendingArtists",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v3/*: any*/),
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFollowed",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "formattedNationalityAndBirthday",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistBlurb",
                        "kind": "LinkedField",
                        "name": "biographyBlurb",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "text",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 15
                          },
                          {
                            "kind": "Literal",
                            "name": "sort",
                            "value": "PUBLISHED_AT_DESC"
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
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": "artworksConnection(first:15,sort:\"PUBLISHED_AT_DESC\")"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "curatedTrendingArtists(first:16)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "c6bcc70d6b55ca8c2bedf760fe572508",
    "metadata": {},
    "name": "ArtQuizResultsEmptyTabsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e37dd15e958f491ee35d66b5b5cb82cb";

export default node;
