/**
 * @generated SignedSource<<d3c3460fcb54e4b3a7d391b22a2b0dad>>
 * @relayHash 14b50c099186fe640c62758c775ab30f
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 14b50c099186fe640c62758c775ab30f

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtistsViewTestsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionCollectedArtistsViewTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsView_me">;
  } | null | undefined;
};
export type MyCollectionCollectedArtistsViewTestsQuery = {
  response: MyCollectionCollectedArtistsViewTestsQuery$data;
  variables: MyCollectionCollectedArtistsViewTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v6 = {
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
    "name": "MyCollectionCollectedArtistsViewTestsQuery",
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
            "name": "MyCollectionCollectedArtistsView_me"
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
    "name": "MyCollectionCollectedArtistsViewTestsQuery",
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
            "alias": null,
            "args": (v0/*: any*/),
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
                  (v1/*: any*/),
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
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "slug",
                            "storageKey": null
                          },
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
                        "type": "Artist",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
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
                  },
                  (v2/*: any*/)
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
            "storageKey": "userInterestsConnection(category:\"COLLECTED_BEFORE\",first:20,interestType:\"ARTIST\")"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [
              "category",
              "interestType"
            ],
            "handle": "connection",
            "key": "MyCollectionCollectedArtistsView_userInterestsConnection",
            "kind": "LinkedHandle",
            "name": "userInterestsConnection"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "14b50c099186fe640c62758c775ab30f",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v3/*: any*/),
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
        "me.userInterestsConnection.edges.cursor": (v4/*: any*/),
        "me.userInterestsConnection.edges.id": (v3/*: any*/),
        "me.userInterestsConnection.edges.internalID": (v3/*: any*/),
        "me.userInterestsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "UserInterestInterest"
        },
        "me.userInterestsConnection.edges.node.__isNode": (v4/*: any*/),
        "me.userInterestsConnection.edges.node.__typename": (v4/*: any*/),
        "me.userInterestsConnection.edges.node.birthday": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.deathday": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.href": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.id": (v3/*: any*/),
        "me.userInterestsConnection.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "me.userInterestsConnection.edges.node.image.url": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.initials": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.internalID": (v3/*: any*/),
        "me.userInterestsConnection.edges.node.is_followed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "me.userInterestsConnection.edges.node.name": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.nationality": (v5/*: any*/),
        "me.userInterestsConnection.edges.node.slug": (v3/*: any*/),
        "me.userInterestsConnection.edges.private": (v6/*: any*/),
        "me.userInterestsConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.userInterestsConnection.pageInfo.endCursor": (v5/*: any*/),
        "me.userInterestsConnection.pageInfo.hasNextPage": (v6/*: any*/)
      }
    },
    "name": "MyCollectionCollectedArtistsViewTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2e6d746b0d8ceef3d799eb9cbf78196e";

export default node;
