/**
 * @generated SignedSource<<ad5913dbdb1fcbc668a2c44c9698b6a2>>
 * @relayHash ab613abc57adc32a3bb6a7b7fba649ed
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ab613abc57adc32a3bb6a7b7fba649ed

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerArtworkTestsQuery$variables = Record<PropertyKey, never>;
export type PartnerArtworkTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerArtwork_partner">;
  } | null | undefined;
};
export type PartnerArtworkTestsQuery = {
  response: PartnerArtworkTestsQuery$data;
  variables: PartnerArtworkTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "anderson-fine-art-gallery-flickinger-collection"
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
v3 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "COLOR",
      "DIMENSION_RANGE",
      "ARTIST",
      "MAJOR_PERIOD",
      "MEDIUM",
      "PRICE_RANGE",
      "MATERIALS_TERMS",
      "ARTIST_NATIONALITY"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
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
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
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
  "type": "Partner"
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
},
v17 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerArtworkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PartnerArtwork_partner"
          }
        ],
        "storageKey": "partner(id:\"anderson-fine-art-gallery-flickinger-collection\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerArtworkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": "artworks",
            "args": (v3/*: any*/),
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
                      (v4/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v1/*: any*/),
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
                          (v1/*: any*/),
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
                          (v1/*: any*/),
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
                              (v2/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/)
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
              },
              (v5/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"ARTIST\",\"MAJOR_PERIOD\",\"MEDIUM\",\"PRICE_RANGE\",\"MATERIALS_TERMS\",\"ARTIST_NATIONALITY\"],first:10)"
          },
          {
            "alias": "artworks",
            "args": (v3/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "Partner_artworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          },
          (v5/*: any*/)
        ],
        "storageKey": "partner(id:\"anderson-fine-art-gallery-flickinger-collection\")"
      }
    ]
  },
  "params": {
    "id": "ab613abc57adc32a3bb6a7b7fba649ed",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "partner": (v8/*: any*/),
        "partner.artworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "partner.artworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "partner.artworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "partner.artworks.aggregations.counts.name": (v9/*: any*/),
        "partner.artworks.aggregations.counts.value": (v9/*: any*/),
        "partner.artworks.aggregations.slice": {
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
        "partner.artworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "FilterArtworksEdge"
        },
        "partner.artworks.edges.cursor": (v9/*: any*/),
        "partner.artworks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "partner.artworks.edges.node.__typename": (v9/*: any*/),
        "partner.artworks.edges.node.artistNames": (v10/*: any*/),
        "partner.artworks.edges.node.artists": (v11/*: any*/),
        "partner.artworks.edges.node.artists.id": (v12/*: any*/),
        "partner.artworks.edges.node.artists.name": (v10/*: any*/),
        "partner.artworks.edges.node.artistsArray": (v11/*: any*/),
        "partner.artworks.edges.node.artistsArray.id": (v12/*: any*/),
        "partner.artworks.edges.node.artistsArray.internalID": (v12/*: any*/),
        "partner.artworks.edges.node.artistsArray.name": (v10/*: any*/),
        "partner.artworks.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "partner.artworks.edges.node.attributionClass.id": (v12/*: any*/),
        "partner.artworks.edges.node.attributionClass.internalID": (v12/*: any*/),
        "partner.artworks.edges.node.availability": (v10/*: any*/),
        "partner.artworks.edges.node.customArtworkLists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CollectionsConnection"
        },
        "partner.artworks.edges.node.customArtworkLists.totalCount": (v13/*: any*/),
        "partner.artworks.edges.node.date": (v10/*: any*/),
        "partner.artworks.edges.node.heightCm": (v14/*: any*/),
        "partner.artworks.edges.node.href": (v10/*: any*/),
        "partner.artworks.edges.node.id": (v12/*: any*/),
        "partner.artworks.edges.node.image": (v15/*: any*/),
        "partner.artworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "partner.artworks.edges.node.image.blurhash": (v10/*: any*/),
        "partner.artworks.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "partner.artworks.edges.node.image.resized.height": (v13/*: any*/),
        "partner.artworks.edges.node.image.resized.src": (v9/*: any*/),
        "partner.artworks.edges.node.image.resized.srcSet": (v9/*: any*/),
        "partner.artworks.edges.node.image.resized.width": (v13/*: any*/),
        "partner.artworks.edges.node.image.url": (v10/*: any*/),
        "partner.artworks.edges.node.internalID": (v12/*: any*/),
        "partner.artworks.edges.node.isAcquireable": (v16/*: any*/),
        "partner.artworks.edges.node.isBiddable": (v16/*: any*/),
        "partner.artworks.edges.node.isEligibleToCreateAlert": (v17/*: any*/),
        "partner.artworks.edges.node.isHangable": (v16/*: any*/),
        "partner.artworks.edges.node.isInquireable": (v16/*: any*/),
        "partner.artworks.edges.node.isOfferable": (v16/*: any*/),
        "partner.artworks.edges.node.isSaved": (v16/*: any*/),
        "partner.artworks.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "partner.artworks.edges.node.mediumType.filterGene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "partner.artworks.edges.node.mediumType.filterGene.id": (v12/*: any*/),
        "partner.artworks.edges.node.mediumType.filterGene.name": (v10/*: any*/),
        "partner.artworks.edges.node.mediumType.filterGene.slug": (v12/*: any*/),
        "partner.artworks.edges.node.partner": (v8/*: any*/),
        "partner.artworks.edges.node.partner.id": (v12/*: any*/),
        "partner.artworks.edges.node.partner.name": (v10/*: any*/),
        "partner.artworks.edges.node.preview": (v15/*: any*/),
        "partner.artworks.edges.node.preview.url": (v10/*: any*/),
        "partner.artworks.edges.node.realizedPrice": (v10/*: any*/),
        "partner.artworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "partner.artworks.edges.node.sale.cascadingEndTimeIntervalMinutes": (v13/*: any*/),
        "partner.artworks.edges.node.sale.displayTimelyAt": (v10/*: any*/),
        "partner.artworks.edges.node.sale.endAt": (v10/*: any*/),
        "partner.artworks.edges.node.sale.extendedBiddingIntervalMinutes": (v13/*: any*/),
        "partner.artworks.edges.node.sale.extendedBiddingPeriodMinutes": (v13/*: any*/),
        "partner.artworks.edges.node.sale.id": (v12/*: any*/),
        "partner.artworks.edges.node.sale.isAuction": (v16/*: any*/),
        "partner.artworks.edges.node.sale.isClosed": (v16/*: any*/),
        "partner.artworks.edges.node.sale.startAt": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "partner.artworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "partner.artworks.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "partner.artworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "partner.artworks.edges.node.saleArtwork.currentBid.display": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork.endAt": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork.extendedBiddingEndAt": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork.formattedEndDateTime": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork.id": (v12/*: any*/),
        "partner.artworks.edges.node.saleArtwork.lotID": (v10/*: any*/),
        "partner.artworks.edges.node.saleArtwork.lotLabel": (v10/*: any*/),
        "partner.artworks.edges.node.saleMessage": (v10/*: any*/),
        "partner.artworks.edges.node.slug": (v12/*: any*/),
        "partner.artworks.edges.node.title": (v10/*: any*/),
        "partner.artworks.edges.node.widthCm": (v14/*: any*/),
        "partner.artworks.id": (v12/*: any*/),
        "partner.artworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "partner.artworks.pageInfo.endCursor": (v10/*: any*/),
        "partner.artworks.pageInfo.hasNextPage": (v17/*: any*/),
        "partner.id": (v12/*: any*/),
        "partner.internalID": (v12/*: any*/),
        "partner.slug": (v12/*: any*/)
      }
    },
    "name": "PartnerArtworkTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2fd761c566bd478c3168270742ff38bf";

export default node;
