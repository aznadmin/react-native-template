/**
 * @generated SignedSource<<3b6b2d2713d638d54050aaf15e606c43>>
 * @relayHash f7a3cda0b94bb3e45be24d4c13c6f9a9
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f7a3cda0b94bb3e45be24d4c13c6f9a9

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtistsRailTestsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionCollectedArtistsRailTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsRail_me">;
  } | null | undefined;
};
export type MyCollectionCollectedArtistsRailTestsQuery = {
  response: MyCollectionCollectedArtistsRailTestsQuery$data;
  variables: MyCollectionCollectedArtistsRailTestsQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionCollectedArtistsRailTestsQuery",
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
            "name": "MyCollectionCollectedArtistsRail_me"
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
    "name": "MyCollectionCollectedArtistsRailTestsQuery",
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
            "key": "MyCollectionCollectedArtistsRail_userInterestsConnection",
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
    "id": "f7a3cda0b94bb3e45be24d4c13c6f9a9",
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
        "me.userInterestsConnection.edges.node.name": (v5/*: any*/),
        "me.userInterestsConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.userInterestsConnection.pageInfo.endCursor": (v5/*: any*/),
        "me.userInterestsConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        }
      }
    },
    "name": "MyCollectionCollectedArtistsRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "5d258682d81367ef9062420df14cfe4e";

export default node;
