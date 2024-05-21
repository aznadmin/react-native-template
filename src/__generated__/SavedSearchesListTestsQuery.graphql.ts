/**
 * @generated SignedSource<<2c0c814dff8fba02291beab0079d1bf8>>
 * @relayHash 2318f2c0d9af9f83844c59cb3efbec21
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2318f2c0d9af9f83844c59cb3efbec21

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchesListTestsQuery$variables = Record<PropertyKey, never>;
export type SavedSearchesListTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SavedSearchesList_me">;
  } | null | undefined;
};
export type SavedSearchesListTestsQuery = {
  response: SavedSearchesListTestsQuery$data;
  variables: SavedSearchesListTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "ENABLED_AT_DESC"
  }
],
v1 = [
  "artistIDs"
],
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
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
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
    "name": "SavedSearchesListTestsQuery",
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
            "name": "SavedSearchesList_me"
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
    "name": "SavedSearchesListTestsQuery",
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
            "concreteType": "AlertConnection",
            "kind": "LinkedField",
            "name": "alertsConnection",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AlertEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Alert",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "internalID",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artistSeriesIDs",
                        "storageKey": null
                      },
                      {
                        "alias": "title",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "only",
                            "value": (v1/*: any*/)
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "displayName",
                        "storageKey": "displayName(only:[\"artistIDs\"])"
                      },
                      {
                        "alias": "subtitle",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "except",
                            "value": (v1/*: any*/)
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "displayName",
                        "storageKey": "displayName(except:[\"artistIDs\"])"
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 1
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
                          (v2/*: any*/)
                        ],
                        "storageKey": "artworksConnection(first:1)"
                      },
                      (v2/*: any*/),
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
              }
            ],
            "storageKey": "alertsConnection(first:20,sort:\"ENABLED_AT_DESC\")"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [
              "sort"
            ],
            "handle": "connection",
            "key": "SavedSearches_alertsConnection",
            "kind": "LinkedHandle",
            "name": "alertsConnection"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "2318f2c0d9af9f83844c59cb3efbec21",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.alertsConnection": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "AlertConnection"
        },
        "me.alertsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AlertEdge"
        },
        "me.alertsConnection.edges.cursor": (v3/*: any*/),
        "me.alertsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Alert"
        },
        "me.alertsConnection.edges.node.__typename": (v3/*: any*/),
        "me.alertsConnection.edges.node.artistSeriesIDs": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "me.alertsConnection.edges.node.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "me.alertsConnection.edges.node.artworksConnection.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "me.alertsConnection.edges.node.artworksConnection.counts.total": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "me.alertsConnection.edges.node.artworksConnection.id": (v4/*: any*/),
        "me.alertsConnection.edges.node.id": (v4/*: any*/),
        "me.alertsConnection.edges.node.internalID": (v4/*: any*/),
        "me.alertsConnection.edges.node.subtitle": (v3/*: any*/),
        "me.alertsConnection.edges.node.title": (v3/*: any*/),
        "me.alertsConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.alertsConnection.pageInfo.endCursor": (v5/*: any*/),
        "me.alertsConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "me.alertsConnection.pageInfo.startCursor": (v5/*: any*/),
        "me.id": (v4/*: any*/)
      }
    },
    "name": "SavedSearchesListTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "d051faa41814d4960f1c8ade69a5748d";

export default node;
