/**
 * @generated SignedSource<<f60d6ff58a86d3f75a4934fc0593d704>>
 * @relayHash 6a07dc472314b750f9f12fec368ec8ae
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6a07dc472314b750f9f12fec368ec8ae

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewBuyNowArtworksRailTestsQuery$variables = {
  id: string;
};
export type NewBuyNowArtworksRailTestsQuery$data = {
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"NewBuyNowArtworksRail_sale">;
  } | null | undefined;
};
export type NewBuyNowArtworksRailTestsQuery = {
  response: NewBuyNowArtworksRailTestsQuery$data;
  variables: NewBuyNowArtworksRailTestsQuery$variables;
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
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v18 = {
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
    "name": "NewBuyNowArtworksRailTestsQuery",
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
            "name": "NewBuyNowArtworksRail_sale"
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
    "name": "NewBuyNowArtworksRailTestsQuery",
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
                          },
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
                "storageKey": "artworksConnection(first:20)"
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "NewBuyNowArtworksRail_artworksConnection",
                "kind": "LinkedHandle",
                "name": "artworksConnection"
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
    "id": "6a07dc472314b750f9f12fec368ec8ae",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "sale": (v9/*: any*/),
        "sale.id": (v10/*: any*/),
        "sale.internalID": (v10/*: any*/),
        "sale.promotedSale": (v9/*: any*/),
        "sale.promotedSale.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "sale.promotedSale.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "sale.promotedSale.artworksConnection.edges.cursor": (v11/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "sale.promotedSale.artworksConnection.edges.node.__typename": (v11/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artistNames": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artists": (v13/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artists.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artists.name": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artistsArray": (v13/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artistsArray.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artistsArray.internalID": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.artistsArray.name": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "sale.promotedSale.artworksConnection.edges.node.attributionClass.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.attributionClass.internalID": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.availability": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "sale.promotedSale.artworksConnection.edges.node.customArtworkLists.totalCount": (v14/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.date": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.heightCm": (v15/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.href": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image": (v16/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "sale.promotedSale.artworksConnection.edges.node.image.blurhash": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "sale.promotedSale.artworksConnection.edges.node.image.resized.height": (v14/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.resized.src": (v11/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.resized.srcSet": (v11/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.resized.width": (v14/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.image.url": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.internalID": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isAcquireable": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isBiddable": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isEligibleToCreateAlert": (v18/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isHangable": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isInquireable": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isOfferable": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isSaved": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.isUnlisted": (v18/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "sale.promotedSale.artworksConnection.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "sale.promotedSale.artworksConnection.edges.node.mediumType.filterGene.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.mediumType.filterGene.name": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.mediumType.filterGene.slug": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "sale.promotedSale.artworksConnection.edges.node.partner.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.partner.name": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.preview": (v16/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.preview.url": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.realizedPrice": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.sale": (v9/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.sale.endAt": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.sale.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.sale.isAuction": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.sale.isClosed": (v17/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.currentBid.display": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.endAt": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.extendedBiddingEndAt": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.saleArtwork.id": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.saleMessage": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.slug": (v10/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.title": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.edges.node.widthCm": (v15/*: any*/),
        "sale.promotedSale.artworksConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "sale.promotedSale.artworksConnection.pageInfo.endCursor": (v12/*: any*/),
        "sale.promotedSale.artworksConnection.pageInfo.hasNextPage": (v18/*: any*/),
        "sale.promotedSale.id": (v10/*: any*/)
      }
    },
    "name": "NewBuyNowArtworksRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a596e3c1816e95050054675dec282ca1";

export default node;
