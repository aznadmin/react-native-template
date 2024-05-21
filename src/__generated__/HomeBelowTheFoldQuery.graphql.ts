/**
 * @generated SignedSource<<840417ed80b00d41e25afebd45ec5f8a>>
 * @relayHash b3ba2eeb09648afe47b8360574a0c060
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b3ba2eeb09648afe47b8360574a0c060

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeBelowTheFoldQuery$variables = Record<PropertyKey, never>;
export type HomeBelowTheFoldQuery$data = {
  readonly articlesConnection: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_articlesConnection">;
  } | null | undefined;
  readonly emergingPicks: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_emergingPicks">;
  } | null | undefined;
  readonly featured: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_featured">;
  } | null | undefined;
  readonly homePage: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
  } | null | undefined;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_meBelow" | "RecommendedArtistsRail_me">;
  } | null | undefined;
  readonly news: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_news">;
  } | null | undefined;
  readonly recommendedAuctionLots: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_recommendedAuctionLots">;
  } | null | undefined;
};
export type HomeBelowTheFoldQuery = {
  response: HomeBelowTheFoldQuery$data;
  variables: HomeBelowTheFoldQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "curators-picks-emerging"
  }
],
v1 = {
  "kind": "Literal",
  "name": "featured",
  "value": true
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v4 = {
  "kind": "Literal",
  "name": "sort",
  "value": "PUBLISHED_AT_DESC"
},
v5 = [
  (v1/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEligibleToCreateAlert",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": "artistsArray",
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v9/*: any*/),
    (v11/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "AttributionClass",
  "kind": "LinkedField",
  "name": "attributionClass",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v14 = {
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
        (v7/*: any*/),
        (v11/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "availability",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAcquireable",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isBiddable",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInquireable",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isOfferable",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v22 = [
  (v11/*: any*/),
  (v6/*: any*/)
],
v23 = {
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
  "selections": (v22/*: any*/),
  "storageKey": "artists(shallow:true)"
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "widthCm",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heightCm",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isHangable",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v28 = {
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
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "src",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v33 = {
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
    (v28/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "width",
          "value": 590
        }
      ],
      "concreteType": "ResizedImageUrl",
      "kind": "LinkedField",
      "name": "resized",
      "plural": false,
      "selections": [
        (v29/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "srcSet",
          "storageKey": null
        },
        (v30/*: any*/),
        (v31/*: any*/)
      ],
      "storageKey": "resized(width:590)"
    },
    (v32/*: any*/)
  ],
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUnlisted",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v36 = {
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
    (v35/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v39 = {
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
        (v38/*: any*/)
      ],
      "storageKey": null
    },
    (v35/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingEndAt",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v22/*: any*/),
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "realizedPrice",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v43 = {
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
v44 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v45 = {
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
  "selections": (v44/*: any*/),
  "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "basedOn",
  "plural": false,
  "selections": (v22/*: any*/),
  "storageKey": null
},
v49 = [
  (v20/*: any*/)
],
v50 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v23/*: any*/),
      (v24/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/),
      (v27/*: any*/),
      (v33/*: any*/),
      (v34/*: any*/),
      (v36/*: any*/),
      (v37/*: any*/),
      (v39/*: any*/),
      (v40/*: any*/),
      (v41/*: any*/),
      (v42/*: any*/),
      (v43/*: any*/),
      (v45/*: any*/)
    ],
    "storageKey": null
  },
  (v8/*: any*/),
  (v46/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "context",
    "plural": false,
    "selections": [
      (v47/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v9/*: any*/),
              (v20/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v48/*: any*/)
        ],
        "type": "HomePageRelatedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v20/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "HomePageFollowedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v49/*: any*/),
        "type": "Fair",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v49/*: any*/),
        "type": "Gene",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v49/*: any*/),
        "type": "Sale",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v6/*: any*/)
        ],
        "type": "Node",
        "abstractKey": "__isNode"
      }
    ],
    "storageKey": null
  },
  (v6/*: any*/)
],
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
},
v53 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v54 = {
  "alias": null,
  "args": [
    (v53/*: any*/),
    {
      "kind": "Literal",
      "name": "sort",
      "value": "-weighted_iconicity"
    }
  ],
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
                      "name": "width",
                      "value": 295
                    }
                  ],
                  "concreteType": "ResizedImageUrl",
                  "kind": "LinkedField",
                  "name": "resized",
                  "plural": false,
                  "selections": [
                    (v29/*: any*/),
                    (v30/*: any*/),
                    (v31/*: any*/)
                  ],
                  "storageKey": "resized(width:295)"
                }
              ],
              "storageKey": null
            },
            (v6/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": "filterArtworksConnection(first:3,sort:\"-weighted_iconicity\")"
},
v55 = [
  (v28/*: any*/)
],
v56 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": (v55/*: any*/),
  "storageKey": null
},
v57 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v58 = {
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
        (v56/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v59 = [
  (v58/*: any*/),
  (v6/*: any*/)
],
v60 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "showMyCollectionCard",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "showSWACard",
    "storageKey": null
  }
],
v61 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v62 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
],
v63 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v64 = [
  (v53/*: any*/)
],
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v67 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v68 = [
  (v61/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeBelowTheFoldQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_homePageBelow"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "emergingPicks",
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_emergingPicks"
          }
        ],
        "storageKey": "marketingCollection(slug:\"curators-picks-emerging\")"
      },
      {
        "alias": "featured",
        "args": (v2/*: any*/),
        "concreteType": "ViewingRoomConnection",
        "kind": "LinkedField",
        "name": "viewingRooms",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_featured"
          }
        ],
        "storageKey": "viewingRooms(featured:true)"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_meBelow"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecommendedArtistsRail_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "ArticleConnection",
        "kind": "LinkedField",
        "name": "articlesConnection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_articlesConnection"
          }
        ],
        "storageKey": "articlesConnection(featured:true,first:10,sort:\"PUBLISHED_AT_DESC\")"
      },
      {
        "alias": "news",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_news"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "recommendedAuctionLots",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_recommendedAuctionLots"
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
    "name": "HomeBelowTheFoldQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": "recentlyViewedWorksArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "RECENTLY_VIEWED_WORKS"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v50/*: any*/),
            "storageKey": "artworkModule(key:\"RECENTLY_VIEWED_WORKS\")"
          },
          {
            "alias": "similarToRecentlyViewedArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "SIMILAR_TO_RECENTLY_VIEWED"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v50/*: any*/),
            "storageKey": "artworkModule(key:\"SIMILAR_TO_RECENTLY_VIEWED\")"
          },
          {
            "alias": "worksFromGalleriesYouFollowArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "FOLLOWED_GALLERIES"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v50/*: any*/),
            "storageKey": "artworkModule(key:\"FOLLOWED_GALLERIES\")"
          },
          {
            "alias": "popularArtistsArtistModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "CURATED_TRENDING"
              }
            ],
            "concreteType": "HomePageArtistModule",
            "kind": "LinkedField",
            "name": "artistModule",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v46/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Artist",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v9/*: any*/),
                  (v20/*: any*/),
                  (v11/*: any*/),
                  (v51/*: any*/),
                  (v48/*: any*/),
                  (v52/*: any*/),
                  (v54/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistModule(key:\"CURATED_TRENDING\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageFairsModule",
            "kind": "LinkedField",
            "name": "fairsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Fair",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v9/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/),
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
                  (v56/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "city",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "country",
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "followedArtistArtworks",
                    "args": [
                      (v57/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "input",
                        "value": {
                          "includeArtworksByFollowedArtists": true
                        }
                      }
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v59/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2,input:{\"includeArtworksByFollowedArtists\":true})"
                  },
                  {
                    "alias": "otherArtworks",
                    "args": [
                      (v57/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v59/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2)"
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
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 5
                      },
                      {
                        "kind": "Literal",
                        "name": "sort",
                        "value": "-decayed_merch"
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
                      (v58/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:5,sort:\"-decayed_merch\")"
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "_onboardingModule",
            "args": null,
            "concreteType": "HomePageMyCollectionOnboardingModule",
            "kind": "LinkedField",
            "name": "onboardingModule",
            "plural": false,
            "selections": (v60/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMyCollectionOnboardingModule",
            "kind": "LinkedField",
            "name": "onboardingModule",
            "plural": false,
            "selections": (v60/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "emergingPicks",
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "headerImage",
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": [
              (v61/*: any*/),
              {
                "kind": "Literal",
                "name": "input",
                "value": {
                  "sort": "-decayed_merch"
                }
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
                      (v9/*: any*/),
                      (v7/*: any*/),
                      (v20/*: any*/),
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v6/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v45/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": "artworksConnection(first:20,input:{\"sort\":\"-decayed_merch\"})"
          },
          (v6/*: any*/)
        ],
        "storageKey": "marketingCollection(slug:\"curators-picks-emerging\")"
      },
      {
        "alias": "featured",
        "args": (v2/*: any*/),
        "concreteType": "ViewingRoomConnection",
        "kind": "LinkedField",
        "name": "viewingRooms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ViewingRoomEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ViewingRoom",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v8/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": "heroImage",
                    "args": null,
                    "concreteType": "ARImage",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageURLs",
                        "kind": "LinkedField",
                        "name": "imageURLs",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "normalized",
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
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v62/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToOpen",
                    "storageKey": "distanceToOpen(short:true)"
                  },
                  {
                    "alias": null,
                    "args": (v62/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToClose",
                    "storageKey": "distanceToClose(short:true)"
                  },
                  (v40/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "viewingRooms(featured:true)"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "artistRecommendationsCounts",
            "args": (v63/*: any*/),
            "concreteType": "ArtistConnection",
            "kind": "LinkedField",
            "name": "artistRecommendations",
            "plural": false,
            "selections": (v44/*: any*/),
            "storageKey": "artistRecommendations(first:1)"
          },
          {
            "alias": null,
            "args": (v64/*: any*/),
            "concreteType": "ArtistConnection",
            "kind": "LinkedField",
            "name": "artistRecommendations",
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
                      (v11/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v9/*: any*/),
                      (v20/*: any*/),
                      (v51/*: any*/),
                      (v48/*: any*/),
                      (v52/*: any*/),
                      (v54/*: any*/),
                      (v47/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v65/*: any*/)
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
                  (v66/*: any*/),
                  (v67/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistRecommendations(first:3)"
          },
          {
            "alias": null,
            "args": (v64/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RecommendedArtistsRail_artistRecommendations",
            "kind": "LinkedHandle",
            "name": "artistRecommendations"
          },
          {
            "alias": "artworkRecommendationsCounts",
            "args": (v63/*: any*/),
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworkRecommendations",
            "plural": false,
            "selections": (v44/*: any*/),
            "storageKey": "artworkRecommendations(first:1)"
          },
          {
            "alias": null,
            "args": (v68/*: any*/),
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworkRecommendations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  (v67/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  (v66/*: any*/)
                ],
                "storageKey": null
              },
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v6/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v45/*: any*/),
                      (v47/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v65/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworkRecommendations(first:20)"
          },
          {
            "alias": null,
            "args": (v68/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ArtworkRecommendationsRail_artworkRecommendations",
            "kind": "LinkedHandle",
            "name": "artworkRecommendations"
          },
          {
            "alias": "auctionResultsByFollowedArtistsPast",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 12
              },
              {
                "kind": "Literal",
                "name": "state",
                "value": "PAST"
              }
            ],
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsByFollowedArtists",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AuctionResultEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuctionResult",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "currency",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dateText",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artistID",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artist",
                        "plural": false,
                        "selections": (v22/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isUpcoming",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isInArtsyAuction",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "externalURL",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotImages",
                        "kind": "LinkedField",
                        "name": "images",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnail",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square140"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:\"square140\")"
                              },
                              (v31/*: any*/),
                              (v30/*: any*/),
                              (v32/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotEstimate",
                        "kind": "LinkedField",
                        "name": "estimate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "low",
                            "storageKey": null
                          },
                          (v38/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dimensionText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mediumText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "organization",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "boughtIn",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotPerformance",
                        "kind": "LinkedField",
                        "name": "performance",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mid",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "kind": "LinkedField",
                        "name": "priceRealized",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cents",
                            "storageKey": null
                          },
                          (v38/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayUSD",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "saleDate",
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "auctionResultsByFollowedArtists(first:12,state:\"PAST\")"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
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
                  (v9/*: any*/),
                  (v7/*: any*/),
                  (v20/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "publishedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "thumbnailImage",
                    "plural": false,
                    "selections": (v55/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "vertical",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "byline",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "articlesConnection(featured:true,first:10,sort:\"PUBLISHED_AT_DESC\")"
      },
      {
        "alias": "news",
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
                "name": "layout",
                "value": "NEWS"
              },
              {
                "kind": "Literal",
                "name": "limit",
                "value": 3
              },
              {
                "kind": "Literal",
                "name": "published",
                "value": true
              },
              (v4/*: any*/)
            ],
            "concreteType": "Article",
            "kind": "LinkedField",
            "name": "articles",
            "plural": true,
            "selections": [
              (v9/*: any*/),
              (v8/*: any*/),
              (v20/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": "articles(layout:\"NEWS\",limit:3,published:true,sort:\"PUBLISHED_AT_DESC\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "recommendedAuctionLots",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              (v3/*: any*/),
              {
                "kind": "Literal",
                "name": "includeBackfill",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "onlyAtAuction",
                "value": true
              }
            ],
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworksForUser",
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
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v7/*: any*/),
                      (v10/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v6/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v45/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworksForUser(first:10,includeBackfill:true,onlyAtAuction:true)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b3ba2eeb09648afe47b8360574a0c060",
    "metadata": {},
    "name": "HomeBelowTheFoldQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "830d66503e1af05ef3a01e519c873950";

export default node;
