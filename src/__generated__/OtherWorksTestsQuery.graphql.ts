/**
 * @generated SignedSource<<2957f4ec1dc77288951f0011259426d7>>
 * @relayHash 276872834e038245d28164a7c567889d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 276872834e038245d28164a7c567889d

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OtherWorksTestsQuery$variables = Record<PropertyKey, never>;
export type OtherWorksTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"OtherWorks_artwork">;
  } | null | undefined;
};
export type OtherWorksTestsQuery = {
  response: OtherWorksTestsQuery$data;
  variables: OtherWorksTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artworkId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  (v2/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
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
  "type": "Int"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OtherWorksTestsQuery",
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
            "name": "OtherWorks_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artworkId\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OtherWorksTestsQuery",
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
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contextGrids",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ctaTitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ctaHref",
                "storageKey": null
              },
              {
                "alias": "artworks",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 6
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
                          (v2/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "aspectRatio",
                                "storageKey": null
                              },
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
                          (v1/*: any*/),
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
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v2/*: any*/)
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
                              (v4/*: any*/),
                              (v2/*: any*/)
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
                                  (v5/*: any*/),
                                  (v2/*: any*/)
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
                            "selections": (v6/*: any*/),
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
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startAt",
                                "storageKey": null
                              },
                              (v2/*: any*/)
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
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "extendedBiddingEndAt",
                                "storageKey": null
                              },
                              (v2/*: any*/)
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
                            "selections": (v6/*: any*/),
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artworksConnection(first:6)"
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"artworkId\")"
      }
    ]
  },
  "params": {
    "id": "276872834e038245d28164a7c567889d",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": (v8/*: any*/),
        "artwork.contextGrids": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkContextGrid"
        },
        "artwork.contextGrids.__typename": (v9/*: any*/),
        "artwork.contextGrids.artworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "artwork.contextGrids.artworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "artwork.contextGrids.artworks.edges.node": (v8/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artistNames": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists": (v11/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists.name": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artistsArray": (v11/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artistsArray.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artistsArray.internalID": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artistsArray.name": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "artwork.contextGrids.artworks.edges.node.attributionClass.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.attributionClass.internalID": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.availability": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "artwork.contextGrids.artworks.edges.node.customArtworkLists.totalCount": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.date": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.heightCm": (v14/*: any*/),
        "artwork.contextGrids.artworks.edges.node.href": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image": (v15/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artwork.contextGrids.artworks.edges.node.image.blurhash": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "artwork.contextGrids.artworks.edges.node.image.resized.height": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.resized.src": (v9/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.resized.srcSet": (v9/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.resized.width": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.url": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.internalID": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isAcquireable": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isBiddable": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isEligibleToCreateAlert": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artwork.contextGrids.artworks.edges.node.isHangable": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isInquireable": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isOfferable": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.isSaved": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "artwork.contextGrids.artworks.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "artwork.contextGrids.artworks.edges.node.mediumType.filterGene.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.mediumType.filterGene.name": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.mediumType.filterGene.slug": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.contextGrids.artworks.edges.node.partner.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.partner.name": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.preview": (v15/*: any*/),
        "artwork.contextGrids.artworks.edges.node.preview.url": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.realizedPrice": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.contextGrids.artworks.edges.node.sale.cascadingEndTimeIntervalMinutes": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.displayTimelyAt": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.endAt": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.extendedBiddingIntervalMinutes": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.extendedBiddingPeriodMinutes": (v13/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.isAuction": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.isClosed": (v16/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.startAt": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.contextGrids.artworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artwork.contextGrids.artworks.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "artwork.contextGrids.artworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "artwork.contextGrids.artworks.edges.node.saleArtwork.currentBid.display": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.endAt": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.extendedBiddingEndAt": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.formattedEndDateTime": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.id": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.lotID": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleArtwork.lotLabel": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.saleMessage": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.slug": (v12/*: any*/),
        "artwork.contextGrids.artworks.edges.node.title": (v10/*: any*/),
        "artwork.contextGrids.artworks.edges.node.widthCm": (v14/*: any*/),
        "artwork.contextGrids.ctaHref": (v10/*: any*/),
        "artwork.contextGrids.ctaTitle": (v10/*: any*/),
        "artwork.contextGrids.title": (v10/*: any*/),
        "artwork.id": (v12/*: any*/)
      }
    },
    "name": "OtherWorksTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e3a384b3a14557bf029d90eb050d9ff1";

export default node;
