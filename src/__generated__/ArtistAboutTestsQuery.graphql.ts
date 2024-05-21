/**
 * @generated SignedSource<<005f25c7774583c10e4973f7442b10ca>>
 * @relayHash b82fd3c433802d057f93af27c27726fe
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b82fd3c433802d057f93af27c27726fe

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistAboutTestsQuery$variables = {
  artistID: string;
};
export type ArtistAboutTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistAbout_artist">;
  } | null | undefined;
};
export type ArtistAboutTestsQuery = {
  response: ArtistAboutTestsQuery$data;
  variables: ArtistAboutTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = {
  "kind": "Literal",
  "name": "partnerBio",
  "value": false
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "entities",
  "storageKey": null
},
v9 = {
  "kind": "Literal",
  "name": "sort",
  "value": "END_AT_ASC"
},
v10 = {
  "kind": "Literal",
  "name": "status",
  "value": "running"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
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
  "kind": "Literal",
  "name": "first",
  "value": 12
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v16 = [
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
  }
],
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
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
  "plural": false,
  "type": "Image"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtistSeriesConnection"
},
v22 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v23 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtistBlurb"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v26 = {
  "enumValues": null,
  "nullable": false,
  "plural": true,
  "type": "ArtistInsight"
},
v27 = {
  "enumValues": null,
  "nullable": false,
  "plural": true,
  "type": "String"
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ShowConnection"
},
v29 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistAboutTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistAbout_artist"
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
    "name": "ArtistAboutTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": "hasArtistSeriesConnection",
            "args": [
              (v2/*: any*/)
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "artistSeriesConnection(first:1)"
          },
          {
            "alias": "hasBiographyBlurb",
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "PLAIN"
              },
              (v5/*: any*/)
            ],
            "concreteType": "ArtistBlurb",
            "kind": "LinkedField",
            "name": "biographyBlurb",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": "biographyBlurb(format:\"PLAIN\",partnerBio:false)"
          },
          (v7/*: any*/),
          {
            "alias": "hasArtistInsights",
            "args": null,
            "concreteType": "ArtistInsight",
            "kind": "LinkedField",
            "name": "insights",
            "plural": true,
            "selections": [
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "hasArtistShows",
            "args": [
              (v2/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "showsConnection(first:1,sort:\"END_AT_ASC\",status:\"running\")"
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "HTML"
              },
              (v5/*: any*/)
            ],
            "concreteType": "ArtistBlurb",
            "kind": "LinkedField",
            "name": "biographyBlurb",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": "biographyBlurb(format:\"HTML\",partnerBio:false)"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 4
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistSeriesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeries",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "featured",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artworksCountMessage",
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
                            "name": "url",
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
              }
            ],
            "storageKey": "artistSeriesConnection(first:4)"
          },
          (v12/*: any*/),
          {
            "alias": null,
            "args": [
              (v13/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
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
                      (v7/*: any*/),
                      (v11/*: any*/),
                      (v14/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFairBooth",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/),
                              (v15/*: any*/)
                            ],
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v15/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": (v16/*: any*/),
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:12,sort:\"END_AT_ASC\",status:\"running\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistInsight",
            "kind": "LinkedField",
            "name": "insights",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "articles",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "relatedArtists",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "kind": "LinkedField",
            "name": "related",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  (v13/*: any*/)
                ],
                "concreteType": "ArtistConnection",
                "kind": "LinkedField",
                "name": "artistsConnection",
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
                          (v15/*: any*/),
                          (v11/*: any*/),
                          (v7/*: any*/),
                          (v12/*: any*/),
                          (v14/*: any*/),
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
                            "kind": "ScalarField",
                            "name": "isFollowed",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "coverArtwork",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": (v16/*: any*/),
                                "storageKey": null
                              },
                              (v15/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistsConnection(first:12)"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GeneConnection",
                "kind": "LinkedField",
                "name": "genes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GeneEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Gene",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v14/*: any*/),
                          (v12/*: any*/),
                          (v15/*: any*/)
                        ],
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
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v11/*: any*/),
                      (v14/*: any*/),
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
                        "selections": (v16/*: any*/),
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
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "articlesConnection(first:5)"
          },
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b82fd3c433802d057f93af27c27726fe",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": (v17/*: any*/),
        "artist.articlesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArticleConnection"
        },
        "artist.articlesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArticleEdge"
        },
        "artist.articlesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "artist.articlesConnection.edges.node.byline": (v18/*: any*/),
        "artist.articlesConnection.edges.node.href": (v18/*: any*/),
        "artist.articlesConnection.edges.node.id": (v19/*: any*/),
        "artist.articlesConnection.edges.node.internalID": (v19/*: any*/),
        "artist.articlesConnection.edges.node.publishedAt": (v18/*: any*/),
        "artist.articlesConnection.edges.node.slug": (v18/*: any*/),
        "artist.articlesConnection.edges.node.thumbnailImage": (v20/*: any*/),
        "artist.articlesConnection.edges.node.thumbnailImage.url": (v18/*: any*/),
        "artist.articlesConnection.edges.node.thumbnailTitle": (v18/*: any*/),
        "artist.articlesConnection.edges.node.vertical": (v18/*: any*/),
        "artist.artistSeriesConnection": (v21/*: any*/),
        "artist.artistSeriesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtistSeriesEdge"
        },
        "artist.artistSeriesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistSeries"
        },
        "artist.artistSeriesConnection.edges.node.artworksCountMessage": (v18/*: any*/),
        "artist.artistSeriesConnection.edges.node.featured": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artist.artistSeriesConnection.edges.node.image": (v20/*: any*/),
        "artist.artistSeriesConnection.edges.node.image.url": (v18/*: any*/),
        "artist.artistSeriesConnection.edges.node.internalID": (v19/*: any*/),
        "artist.artistSeriesConnection.edges.node.slug": (v22/*: any*/),
        "artist.artistSeriesConnection.edges.node.title": (v22/*: any*/),
        "artist.artistSeriesConnection.totalCount": (v23/*: any*/),
        "artist.biographyBlurb": (v24/*: any*/),
        "artist.biographyBlurb.text": (v18/*: any*/),
        "artist.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistCounts"
        },
        "artist.counts.articles": (v25/*: any*/),
        "artist.counts.relatedArtists": (v25/*: any*/),
        "artist.hasArtistInsights": (v26/*: any*/),
        "artist.hasArtistInsights.entities": (v27/*: any*/),
        "artist.hasArtistSeriesConnection": (v21/*: any*/),
        "artist.hasArtistSeriesConnection.totalCount": (v23/*: any*/),
        "artist.hasArtistShows": (v28/*: any*/),
        "artist.hasArtistShows.totalCount": (v25/*: any*/),
        "artist.hasBiographyBlurb": (v24/*: any*/),
        "artist.hasBiographyBlurb.text": (v18/*: any*/),
        "artist.id": (v19/*: any*/),
        "artist.insights": (v26/*: any*/),
        "artist.insights.description": (v18/*: any*/),
        "artist.insights.entities": (v27/*: any*/),
        "artist.insights.kind": {
          "enumValues": [
            "ACTIVE_SECONDARY_MARKET",
            "ARTSY_VANGUARD_YEAR",
            "AWARDS",
            "BIENNIAL",
            "COLLECTED",
            "CRITICALLY_ACCLAIMED",
            "CURATORS_PICK_EMERGING",
            "GAINING_FOLLOWERS",
            "GROUP_SHOW",
            "HIGH_AUCTION_RECORD",
            "PRIVATE_COLLECTIONS",
            "RECENT_CAREER_EVENT",
            "RESIDENCIES",
            "REVIEWED",
            "SOLO_SHOW",
            "TRENDING_NOW"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistInsightKind"
        },
        "artist.insights.label": (v22/*: any*/),
        "artist.internalID": (v19/*: any*/),
        "artist.name": (v18/*: any*/),
        "artist.related": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistRelatedData"
        },
        "artist.related.artistsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistConnection"
        },
        "artist.related.artistsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtistEdge"
        },
        "artist.related.artistsConnection.edges.node": (v17/*: any*/),
        "artist.related.artistsConnection.edges.node.coverArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artist.related.artistsConnection.edges.node.coverArtwork.id": (v19/*: any*/),
        "artist.related.artistsConnection.edges.node.coverArtwork.image": (v20/*: any*/),
        "artist.related.artistsConnection.edges.node.coverArtwork.image.url": (v18/*: any*/),
        "artist.related.artistsConnection.edges.node.formattedNationalityAndBirthday": (v18/*: any*/),
        "artist.related.artistsConnection.edges.node.href": (v18/*: any*/),
        "artist.related.artistsConnection.edges.node.id": (v19/*: any*/),
        "artist.related.artistsConnection.edges.node.internalID": (v19/*: any*/),
        "artist.related.artistsConnection.edges.node.isFollowed": (v29/*: any*/),
        "artist.related.artistsConnection.edges.node.name": (v18/*: any*/),
        "artist.related.artistsConnection.edges.node.slug": (v19/*: any*/),
        "artist.related.genes": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "GeneConnection"
        },
        "artist.related.genes.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "GeneEdge"
        },
        "artist.related.genes.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "artist.related.genes.edges.node.href": (v18/*: any*/),
        "artist.related.genes.edges.node.id": (v19/*: any*/),
        "artist.related.genes.edges.node.internalID": (v19/*: any*/),
        "artist.related.genes.edges.node.name": (v18/*: any*/),
        "artist.showsConnection": (v28/*: any*/),
        "artist.showsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ShowEdge"
        },
        "artist.showsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "artist.showsConnection.edges.node.coverImage": (v20/*: any*/),
        "artist.showsConnection.edges.node.coverImage.url": (v18/*: any*/),
        "artist.showsConnection.edges.node.exhibitionPeriod": (v18/*: any*/),
        "artist.showsConnection.edges.node.href": (v18/*: any*/),
        "artist.showsConnection.edges.node.id": (v19/*: any*/),
        "artist.showsConnection.edges.node.internalID": (v19/*: any*/),
        "artist.showsConnection.edges.node.isFairBooth": (v29/*: any*/),
        "artist.showsConnection.edges.node.name": (v18/*: any*/),
        "artist.showsConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "artist.showsConnection.edges.node.partner.__isNode": (v22/*: any*/),
        "artist.showsConnection.edges.node.partner.__typename": (v22/*: any*/),
        "artist.showsConnection.edges.node.partner.id": (v19/*: any*/),
        "artist.showsConnection.edges.node.partner.name": (v18/*: any*/),
        "artist.showsConnection.edges.node.slug": (v19/*: any*/),
        "artist.slug": (v19/*: any*/)
      }
    },
    "name": "ArtistAboutTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c72c24d942a4c8891c7123da929e4bab";

export default node;
