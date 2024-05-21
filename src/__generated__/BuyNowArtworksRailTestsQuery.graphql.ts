/**
 * @generated SignedSource<<ba2c9783a4fbeb4738466ce962ffecc1>>
 * @relayHash 6d338487a8c8f7e9fe3123e4847f5b81
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6d338487a8c8f7e9fe3123e4847f5b81

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BuyNowArtworksRailTestsQuery$variables = {
  id: string;
};
export type BuyNowArtworksRailTestsQuery$data = {
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"BuyNowArtworksRail_sale">;
  } | null | undefined;
};
export type BuyNowArtworksRailTestsQuery = {
  response: BuyNowArtworksRailTestsQuery$data;
  variables: BuyNowArtworksRailTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Sale"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v11 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtwork"
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
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v19 = {
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
    "name": "BuyNowArtworksRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BuyNowArtworksRail_sale"
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
    "name": "BuyNowArtworksRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "promotedSale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v3/*: any*/),
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
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                              },
                              (v2/*: any*/),
                              (v4/*: any*/),
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
                                  (v5/*: any*/),
                                  (v6/*: any*/)
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
                                  (v6/*: any*/)
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
                                      (v4/*: any*/),
                                      (v5/*: any*/),
                                      (v6/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v6/*: any*/),
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
                                  (v6/*: any*/)
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
                                  (v6/*: any*/)
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
                          },
                          (v6/*: any*/),
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
                "storageKey": "saleArtworksConnection(first:20)"
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Sale_saleArtworksConnection",
                "kind": "LinkedHandle",
                "name": "saleArtworksConnection"
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "6d338487a8c8f7e9fe3123e4847f5b81",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "sale": (v9/*: any*/),
        "sale.id": (v10/*: any*/),
        "sale.internalID": (v10/*: any*/),
        "sale.promotedSale": (v9/*: any*/),
        "sale.promotedSale.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkConnection"
        },
        "sale.promotedSale.saleArtworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SaleArtworkEdge"
        },
        "sale.promotedSale.saleArtworksConnection.edges.cursor": (v11/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node": (v12/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.__typename": (v11/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artistNames": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artists": (v14/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artists.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artists.name": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artistsArray": (v14/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artistsArray.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artistsArray.internalID": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.artistsArray.name": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.attributionClass.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.attributionClass.internalID": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.availability": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.customArtworkLists.totalCount": (v15/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.date": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.heightCm": (v16/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.href": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image": (v17/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.blurhash": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.resized.height": (v15/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.resized.src": (v11/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.resized.srcSet": (v11/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.resized.width": (v15/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.image.url": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.internalID": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isAcquireable": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isBiddable": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isEligibleToCreateAlert": (v19/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isHangable": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isInquireable": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isOfferable": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isSaved": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.isUnlisted": (v19/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.mediumType.filterGene.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.mediumType.filterGene.name": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.mediumType.filterGene.slug": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.partner.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.partner.name": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.preview": (v17/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.preview.url": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.realizedPrice": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.sale": (v9/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.sale.endAt": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.sale.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.sale.isAuction": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.sale.isClosed": (v18/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork": (v12/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.currentBid.display": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.endAt": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.extendedBiddingEndAt": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleArtwork.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.saleMessage": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.slug": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.title": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.artwork.widthCm": (v16/*: any*/),
        "sale.promotedSale.saleArtworksConnection.edges.node.id": (v10/*: any*/),
        "sale.promotedSale.saleArtworksConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "sale.promotedSale.saleArtworksConnection.pageInfo.endCursor": (v13/*: any*/),
        "sale.promotedSale.saleArtworksConnection.pageInfo.hasNextPage": (v19/*: any*/)
      }
    },
    "name": "BuyNowArtworksRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "83497160b713fbb1057034de3ab1812a";

export default node;
