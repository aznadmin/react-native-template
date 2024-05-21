/**
 * @generated SignedSource<<b6c6ebd1be3fd08dde7a56be0b08a632>>
 * @relayHash cf05c2c48aa4b220d46325df32edb5bf
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID cf05c2c48aa4b220d46325df32edb5bf

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionTestsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollection_me">;
  } | null | undefined;
};
export type MyCollectionTestsQuery = {
  response: MyCollectionTestsQuery$data;
  variables: MyCollectionTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "category",
    "value": "COLLECTED_BEFORE"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  {
    "kind": "Literal",
    "name": "interestType",
    "value": "ARTIST"
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
  "name": "__typename",
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
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v10 = [
  "category",
  "interestType"
],
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "CREATED_AT_DESC"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v14 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "demandRank",
    "storageKey": null
  }
],
v15 = [
  {
    "kind": "Literal",
    "name": "includeAll",
    "value": true
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "versions",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blurhash",
  "storageKey": null
},
v18 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtworkPriceInsights"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v26 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ID"
},
v27 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "String"
},
v28 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "PageInfo"
},
v29 = {
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
    "name": "MyCollectionTestsQuery",
    "selections": [
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
            "name": "MyCollection_me"
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
    "name": "MyCollectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MyCollectionInfo",
            "kind": "LinkedField",
            "name": "myCollectionInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "includesPurchasedArtworks",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "artworksCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UserInterestConnection",
            "kind": "LinkedField",
            "name": "userInterestsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserInterestEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "private",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/),
                          (v0/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "initials",
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
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Artist",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v0/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v0/*: any*/)
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
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": "userInterestsConnection(category:\"COLLECTED_BEFORE\",first:20,interestType:\"ARTIST\")"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": (v10/*: any*/),
            "handle": "connection",
            "key": "MyCollectionCollectedArtistsView_userInterestsConnection",
            "kind": "LinkedHandle",
            "name": "userInterestsConnection"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": (v10/*: any*/),
            "handle": "connection",
            "key": "MyCollectionCollectedArtistsRail_userInterestsConnection",
            "kind": "LinkedHandle",
            "name": "userInterestsConnection"
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "concreteType": "MyCollectionConnection",
            "kind": "LinkedField",
            "name": "myCollectionConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MyCollectionEdge",
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
                      (v0/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "medium",
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
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
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
                        "concreteType": "Money",
                        "kind": "LinkedField",
                        "name": "pricePaid",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "minor",
                            "storageKey": null
                          }
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
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "sizeBucket",
                        "storageKey": null
                      },
                      (v12/*: any*/),
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artist",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/),
                          (v0/*: any*/),
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
                                "name": "isP1",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "priority",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": "_marketPriceInsights",
                        "args": null,
                        "concreteType": "ArtworkPriceInsights",
                        "kind": "LinkedField",
                        "name": "marketPriceInsights",
                        "plural": false,
                        "selections": (v14/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkConsignmentSubmission",
                        "kind": "LinkedField",
                        "name": "consignmentSubmission",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayText",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "small"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"small\")"
                          },
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "aspectRatio",
                            "storageKey": null
                          },
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v17/*: any*/)
                        ],
                        "storageKey": "image(includeAll:true)"
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
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkPriceInsights",
                        "kind": "LinkedField",
                        "name": "marketPriceInsights",
                        "plural": false,
                        "selections": (v14/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "submissionId",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "images",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isDefault",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/)
                        ],
                        "storageKey": "images(includeAll:true)"
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
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
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "myCollectionConnection(first:30,sort:\"CREATED_AT_DESC\")"
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "MyCollection_myCollectionConnection",
            "kind": "LinkedHandle",
            "name": "myCollectionConnection"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "cf05c2c48aa4b220d46325df32edb5bf",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v18/*: any*/),
        "me.myCollectionConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MyCollectionConnection"
        },
        "me.myCollectionConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "MyCollectionEdge"
        },
        "me.myCollectionConnection.edges.cursor": (v19/*: any*/),
        "me.myCollectionConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "me.myCollectionConnection.edges.node.__typename": (v19/*: any*/),
        "me.myCollectionConnection.edges.node._marketPriceInsights": (v20/*: any*/),
        "me.myCollectionConnection.edges.node._marketPriceInsights.demandRank": (v21/*: any*/),
        "me.myCollectionConnection.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "me.myCollectionConnection.edges.node.artist.id": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.artist.internalID": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.artist.name": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.artist.targetSupply": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ArtistTargetSupply"
        },
        "me.myCollectionConnection.edges.node.artist.targetSupply.isP1": (v23/*: any*/),
        "me.myCollectionConnection.edges.node.artist.targetSupply.priority": {
          "enumValues": [
            "FALSE",
            "TRUE"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistTargetSupplyPriority"
        },
        "me.myCollectionConnection.edges.node.artistNames": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.attributionClass": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AttributionClass"
        },
        "me.myCollectionConnection.edges.node.attributionClass.id": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.attributionClass.name": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.consignmentSubmission": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConsignmentSubmission"
        },
        "me.myCollectionConnection.edges.node.consignmentSubmission.displayText": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.date": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.height": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.id": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.image": (v24/*: any*/),
        "me.myCollectionConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "me.myCollectionConnection.edges.node.image.blurhash": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.image.height": (v25/*: any*/),
        "me.myCollectionConnection.edges.node.image.internalID": (v26/*: any*/),
        "me.myCollectionConnection.edges.node.image.url": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.image.versions": (v27/*: any*/),
        "me.myCollectionConnection.edges.node.image.width": (v25/*: any*/),
        "me.myCollectionConnection.edges.node.images": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Image"
        },
        "me.myCollectionConnection.edges.node.images.blurhash": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.images.internalID": (v26/*: any*/),
        "me.myCollectionConnection.edges.node.images.isDefault": (v23/*: any*/),
        "me.myCollectionConnection.edges.node.images.url": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.images.versions": (v27/*: any*/),
        "me.myCollectionConnection.edges.node.internalID": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.marketPriceInsights": (v20/*: any*/),
        "me.myCollectionConnection.edges.node.marketPriceInsights.demandRank": (v21/*: any*/),
        "me.myCollectionConnection.edges.node.medium": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.mediumType": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkMedium"
        },
        "me.myCollectionConnection.edges.node.mediumType.name": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.pricePaid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Money"
        },
        "me.myCollectionConnection.edges.node.pricePaid.minor": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Long"
        },
        "me.myCollectionConnection.edges.node.sizeBucket": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.slug": (v18/*: any*/),
        "me.myCollectionConnection.edges.node.submissionId": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.title": (v22/*: any*/),
        "me.myCollectionConnection.edges.node.width": (v22/*: any*/),
        "me.myCollectionConnection.pageInfo": (v28/*: any*/),
        "me.myCollectionConnection.pageInfo.endCursor": (v22/*: any*/),
        "me.myCollectionConnection.pageInfo.hasNextPage": (v29/*: any*/),
        "me.myCollectionConnection.pageInfo.startCursor": (v22/*: any*/),
        "me.myCollectionInfo": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MyCollectionInfo"
        },
        "me.myCollectionInfo.artworksCount": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "me.myCollectionInfo.includesPurchasedArtworks": (v29/*: any*/),
        "me.userInterestsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "UserInterestConnection"
        },
        "me.userInterestsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "UserInterestEdge"
        },
        "me.userInterestsConnection.edges.cursor": (v19/*: any*/),
        "me.userInterestsConnection.edges.id": (v18/*: any*/),
        "me.userInterestsConnection.edges.internalID": (v18/*: any*/),
        "me.userInterestsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "UserInterestInterest"
        },
        "me.userInterestsConnection.edges.node.__isNode": (v19/*: any*/),
        "me.userInterestsConnection.edges.node.__typename": (v19/*: any*/),
        "me.userInterestsConnection.edges.node.birthday": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.deathday": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.href": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.id": (v18/*: any*/),
        "me.userInterestsConnection.edges.node.image": (v24/*: any*/),
        "me.userInterestsConnection.edges.node.image.url": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.initials": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.internalID": (v18/*: any*/),
        "me.userInterestsConnection.edges.node.is_followed": (v23/*: any*/),
        "me.userInterestsConnection.edges.node.name": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.nationality": (v22/*: any*/),
        "me.userInterestsConnection.edges.node.slug": (v18/*: any*/),
        "me.userInterestsConnection.edges.private": (v29/*: any*/),
        "me.userInterestsConnection.pageInfo": (v28/*: any*/),
        "me.userInterestsConnection.pageInfo.endCursor": (v22/*: any*/),
        "me.userInterestsConnection.pageInfo.hasNextPage": (v29/*: any*/),
        "me.userInterestsConnection.totalCount": (v25/*: any*/)
      }
    },
    "name": "MyCollectionTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f92871534f578770b84dd56aca4132bc";

export default node;
