/**
 * @generated SignedSource<<c758b66e1c0906e336ab7f672d7da415>>
 * @relayHash 046e3fa4d2ec01b1571748678e4d2f04
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 046e3fa4d2ec01b1571748678e4d2f04

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeRefetchQuery$variables = {
  version?: string | null | undefined;
};
export type HomeRefetchQuery$data = {
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
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageAbove">;
  } | null | undefined;
  readonly homePageBelow: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
  } | null | undefined;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_meAbove" | "RecommendedArtistsRail_me">;
  } | null | undefined;
  readonly meBelow: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_meBelow">;
  } | null | undefined;
  readonly newWorksForYou: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_newWorksForYou">;
  } | null | undefined;
  readonly news: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_news">;
  } | null | undefined;
  readonly notificationsConnection: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_notificationsConnection">;
  } | null | undefined;
  readonly recommendedAuctionLots: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_recommendedAuctionLots">;
  } | null | undefined;
};
export type HomeRefetchQuery = {
  response: HomeRefetchQuery$data;
  variables: HomeRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "version"
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
v6 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "curators-picks-emerging"
  }
],
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEligibleToCreateAlert",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = {
  "alias": "artistsArray",
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v10/*: any*/),
    (v12/*: any*/),
    (v9/*: any*/)
  ],
  "storageKey": null
},
v14 = [
  (v10/*: any*/),
  (v9/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "AttributionClass",
  "kind": "LinkedField",
  "name": "attributionClass",
  "plural": false,
  "selections": (v14/*: any*/),
  "storageKey": null
},
v16 = {
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
        (v12/*: any*/),
        (v9/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "availability",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAcquireable",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isBiddable",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInquireable",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isOfferable",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v24 = [
  (v12/*: any*/),
  (v9/*: any*/)
],
v25 = {
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
  "selections": (v24/*: any*/),
  "storageKey": "artists(shallow:true)"
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "widthCm",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "heightCm",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isHangable",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v31 = {
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
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "src",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v30/*: any*/),
    (v31/*: any*/),
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
        (v32/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "srcSet",
          "storageKey": null
        },
        (v33/*: any*/),
        (v34/*: any*/)
      ],
      "storageKey": "resized(width:590)"
    },
    (v35/*: any*/)
  ],
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUnlisted",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v39 = {
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
    (v38/*: any*/),
    (v9/*: any*/)
  ],
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v42 = {
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
        (v41/*: any*/)
      ],
      "storageKey": null
    },
    (v38/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingEndAt",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "realizedPrice",
  "storageKey": null
},
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v46 = {
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
v47 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v48 = {
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
  "selections": (v47/*: any*/),
  "storageKey": "collectionsConnection(default:false,first:0,saves:true)"
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "basedOn",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v52 = [
  (v22/*: any*/)
],
v53 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v9/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v13/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v22/*: any*/),
      (v23/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/),
      (v27/*: any*/),
      (v28/*: any*/),
      (v29/*: any*/),
      (v36/*: any*/),
      (v37/*: any*/),
      (v39/*: any*/),
      (v40/*: any*/),
      (v42/*: any*/),
      (v43/*: any*/),
      (v44/*: any*/),
      (v45/*: any*/),
      (v46/*: any*/),
      (v48/*: any*/)
    ],
    "storageKey": null
  },
  (v8/*: any*/),
  (v49/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "context",
    "plural": false,
    "selections": [
      (v50/*: any*/),
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
              (v10/*: any*/),
              (v22/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v51/*: any*/)
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
              (v22/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "HomePageFollowedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v52/*: any*/),
        "type": "Fair",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v52/*: any*/),
        "type": "Gene",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v52/*: any*/),
        "type": "Sale",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v9/*: any*/)
        ],
        "type": "Node",
        "abstractKey": "__isNode"
      }
    ],
    "storageKey": null
  },
  (v9/*: any*/)
],
v54 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v55 = [
  (v54/*: any*/)
],
v56 = [
  (v31/*: any*/)
],
v57 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": (v56/*: any*/),
  "storageKey": null
},
v58 = [
  (v57/*: any*/),
  (v9/*: any*/)
],
v59 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "node",
    "plural": false,
    "selections": (v58/*: any*/),
    "storageKey": null
  }
],
v60 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v61 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
},
v62 = {
  "alias": null,
  "args": [
    (v54/*: any*/),
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
                    (v32/*: any*/),
                    (v33/*: any*/),
                    (v34/*: any*/)
                  ],
                  "storageKey": "resized(width:295)"
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
    },
    (v9/*: any*/)
  ],
  "storageKey": "filterArtworksConnection(first:3,sort:\"-weighted_iconicity\")"
},
v63 = [
  (v9/*: any*/),
  (v49/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Artist",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v9/*: any*/),
      (v7/*: any*/),
      (v10/*: any*/),
      (v22/*: any*/),
      (v12/*: any*/),
      (v60/*: any*/),
      (v51/*: any*/),
      (v61/*: any*/),
      (v62/*: any*/)
    ],
    "storageKey": null
  }
],
v64 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v65 = {
  "alias": null,
  "args": null,
  "concreteType": "FilterArtworksEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": (v59/*: any*/),
  "storageKey": null
},
v66 = [
  (v65/*: any*/),
  (v9/*: any*/)
],
v67 = [
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
v68 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v69 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v71 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v72 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v70/*: any*/),
    (v71/*: any*/)
  ],
  "storageKey": null
},
v73 = {
  "alias": null,
  "args": (v55/*: any*/),
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
            (v12/*: any*/),
            (v9/*: any*/),
            (v7/*: any*/),
            (v10/*: any*/),
            (v22/*: any*/),
            (v60/*: any*/),
            (v51/*: any*/),
            (v61/*: any*/),
            (v62/*: any*/),
            (v50/*: any*/)
          ],
          "storageKey": null
        },
        (v69/*: any*/)
      ],
      "storageKey": null
    },
    (v72/*: any*/)
  ],
  "storageKey": "artistRecommendations(first:3)"
},
v74 = {
  "alias": null,
  "args": (v55/*: any*/),
  "filters": null,
  "handle": "connection",
  "key": "RecommendedArtistsRail_artistRecommendations",
  "kind": "LinkedHandle",
  "name": "artistRecommendations"
},
v75 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v76 = [
  (v75/*: any*/)
],
v77 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
],
v78 = {
  "kind": "Literal",
  "name": "includeBackfill",
  "value": true
},
v79 = [
  {
    "kind": "Literal",
    "name": "excludeDislikedArtworks",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 40
  },
  (v78/*: any*/),
  {
    "kind": "Literal",
    "name": "maxWorksPerArtist",
    "value": 3
  },
  {
    "kind": "Variable",
    "name": "version",
    "variableName": "version"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRefetchQuery",
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
            "name": "Home_homePageAbove"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "homePageBelow",
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
        "alias": "notificationsConnection",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_notificationsConnection"
          }
        ],
        "storageKey": null
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
            "name": "Home_meAbove"
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
        "alias": "meBelow",
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
          }
        ],
        "storageKey": null
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
        "alias": "newWorksForYou",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_newWorksForYou"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "emergingPicks",
        "args": (v6/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeRefetchQuery",
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
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "platform",
                "value": "MOBILE"
              }
            ],
            "concreteType": "HomePageHeroUnit",
            "kind": "LinkedField",
            "name": "heroUnits",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "subtitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "backgroundImageURL",
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": "heroUnits(platform:\"MOBILE\")"
          },
          {
            "alias": "activeBidsArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "ACTIVE_BIDS"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v53/*: any*/),
            "storageKey": "artworkModule(key:\"ACTIVE_BIDS\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageSalesModule",
            "kind": "LinkedField",
            "name": "salesModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Sale",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v9/*: any*/),
                  (v7/*: any*/),
                  (v10/*: any*/),
                  (v22/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "liveURLIfOpen",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "formattedStartDateTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v55/*: any*/),
                    "concreteType": "SaleArtworkConnection",
                    "kind": "LinkedField",
                    "name": "saleArtworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtworkEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SaleArtwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Artwork",
                                "kind": "LinkedField",
                                "name": "artwork",
                                "plural": false,
                                "selections": (v58/*: any*/),
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
                    "storageKey": "saleArtworksConnection(first:3)"
                  },
                  {
                    "alias": null,
                    "args": (v55/*: any*/),
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
                        "selections": (v59/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": "artworksConnection(first:3)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "recommendedArtistsArtistModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "SUGGESTED"
              }
            ],
            "concreteType": "HomePageArtistModule",
            "kind": "LinkedField",
            "name": "artistModule",
            "plural": false,
            "selections": (v63/*: any*/),
            "storageKey": "artistModule(key:\"SUGGESTED\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "homePageBelow",
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
            "selections": (v53/*: any*/),
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
            "selections": (v53/*: any*/),
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
            "selections": (v53/*: any*/),
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
            "selections": (v63/*: any*/),
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
                  (v9/*: any*/),
                  (v10/*: any*/),
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
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/),
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
                  (v57/*: any*/),
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
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "followedArtistArtworks",
                    "args": [
                      (v64/*: any*/),
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
                    "selections": (v66/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2,input:{\"includeArtworksByFollowedArtists\":true})"
                  },
                  {
                    "alias": "otherArtworks",
                    "args": [
                      (v64/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v66/*: any*/),
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
                      (v65/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:5,sort:\"-decayed_merch\")"
                  },
                  (v9/*: any*/)
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
            "selections": (v67/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMyCollectionOnboardingModule",
            "kind": "LinkedField",
            "name": "onboardingModule",
            "plural": false,
            "selections": (v67/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "notificationsConnection",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              (v3/*: any*/)
            ],
            "concreteType": "NotificationConnection",
            "kind": "LinkedField",
            "name": "notificationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "NotificationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Notification",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "notificationType",
                        "storageKey": null
                      },
                      {
                        "alias": "artworks",
                        "args": null,
                        "concreteType": "ArtworkConnection",
                        "kind": "LinkedField",
                        "name": "artworksConnection",
                        "plural": false,
                        "selections": (v47/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "item",
                        "plural": false,
                        "selections": [
                          (v50/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": (v68/*: any*/),
                                "concreteType": "ViewingRoomsConnection",
                                "kind": "LinkedField",
                                "name": "viewingRoomsConnection",
                                "plural": false,
                                "selections": (v47/*: any*/),
                                "storageKey": "viewingRoomsConnection(first:1)"
                              }
                            ],
                            "type": "ViewingRoomPublishedNotificationItem",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Article",
                                "kind": "LinkedField",
                                "name": "article",
                                "plural": false,
                                "selections": (v14/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "ArticleFeaturedArtistNotificationItem",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "available",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "expiresAt",
                                "storageKey": null
                              }
                            ],
                            "type": "PartnerOfferCreatedNotificationItem",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "headline",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "message",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "RELATIVE"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "publishedAt",
                        "storageKey": "publishedAt(format:\"RELATIVE\")"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "targetHref",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isUnread",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "objectsCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": 1
                          }
                        ],
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "previewImages",
                        "plural": true,
                        "selections": [
                          (v30/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "thumbnail"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"thumbnail\")"
                          }
                        ],
                        "storageKey": "previewImages(size:1)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "notificationsConnection(first:10)"
          }
        ],
        "storageKey": null
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
            "alias": null,
            "args": null,
            "concreteType": "MeCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "savedArtworks",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canRequestEmailConfirmation",
            "storageKey": null
          },
          (v73/*: any*/),
          (v74/*: any*/),
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "meBelow",
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "artistRecommendationsCounts",
            "args": (v68/*: any*/),
            "concreteType": "ArtistConnection",
            "kind": "LinkedField",
            "name": "artistRecommendations",
            "plural": false,
            "selections": (v47/*: any*/),
            "storageKey": "artistRecommendations(first:1)"
          },
          (v73/*: any*/),
          (v74/*: any*/),
          {
            "alias": "artworkRecommendationsCounts",
            "args": (v68/*: any*/),
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworkRecommendations",
            "plural": false,
            "selections": (v47/*: any*/),
            "storageKey": "artworkRecommendations(first:1)"
          },
          {
            "alias": null,
            "args": (v76/*: any*/),
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
                  (v71/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  (v70/*: any*/)
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
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v9/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/),
                      (v46/*: any*/),
                      (v48/*: any*/),
                      (v50/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v69/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworkRecommendations(first:20)"
          },
          {
            "alias": null,
            "args": (v76/*: any*/),
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
                      (v9/*: any*/),
                      (v10/*: any*/),
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
                        "selections": (v24/*: any*/),
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
                              (v34/*: any*/),
                              (v33/*: any*/),
                              (v35/*: any*/)
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
                          (v41/*: any*/)
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
                          (v41/*: any*/),
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
          (v9/*: any*/)
        ],
        "storageKey": null
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
                  (v10/*: any*/),
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
                    "args": (v77/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToOpen",
                    "storageKey": "distanceToOpen(short:true)"
                  },
                  {
                    "alias": null,
                    "args": (v77/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToClose",
                    "storageKey": "distanceToClose(short:true)"
                  },
                  (v43/*: any*/)
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
                  (v10/*: any*/),
                  (v7/*: any*/),
                  (v22/*: any*/),
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
                    "selections": (v56/*: any*/),
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
                  (v9/*: any*/)
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
              (v10/*: any*/),
              (v8/*: any*/),
              (v22/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": "articles(layout:\"NEWS\",limit:3,published:true,sort:\"PUBLISHED_AT_DESC\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "newWorksForYou",
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v79/*: any*/),
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
                      (v10/*: any*/),
                      (v7/*: any*/),
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v9/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/),
                      (v46/*: any*/),
                      (v48/*: any*/),
                      (v50/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v69/*: any*/)
                ],
                "storageKey": null
              },
              (v72/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v79/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "NewWorksForYou_artworksForUser",
            "kind": "LinkedHandle",
            "name": "artworksForUser"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "emergingPicks",
        "args": (v6/*: any*/),
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
              (v75/*: any*/),
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
                      (v10/*: any*/),
                      (v7/*: any*/),
                      (v22/*: any*/),
                      (v8/*: any*/),
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v9/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/),
                      (v46/*: any*/),
                      (v48/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": "artworksConnection(first:20,input:{\"sort\":\"-decayed_merch\"})"
          },
          (v9/*: any*/)
        ],
        "storageKey": "marketingCollection(slug:\"curators-picks-emerging\")"
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
              (v78/*: any*/),
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
                      (v10/*: any*/),
                      (v7/*: any*/),
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v9/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/),
                      (v46/*: any*/),
                      (v48/*: any*/)
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
    "id": "046e3fa4d2ec01b1571748678e4d2f04",
    "metadata": {},
    "name": "HomeRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "3692be5f00e18a909e58bb04ed2a1e04";

export default node;
