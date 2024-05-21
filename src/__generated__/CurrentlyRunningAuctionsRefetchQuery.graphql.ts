/**
 * @generated SignedSource<<fb1a0a0ac903fb4fa77a0cc6663d7386>>
 * @relayHash 95a8fabf688a69e11b30bcfeb84ae05c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 95a8fabf688a69e11b30bcfeb84ae05c

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CurrentlyRunningAuctionsRefetchQuery$variables = Record<PropertyKey, never>;
export type CurrentlyRunningAuctionsRefetchQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"CurrentlyRunningAuctions_viewer">;
  } | null | undefined;
};
export type CurrentlyRunningAuctionsRefetchQuery = {
  response: CurrentlyRunningAuctionsRefetchQuery$data;
  variables: CurrentlyRunningAuctionsRefetchQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CurrentlyRunningAuctionsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CurrentlyRunningAuctions_viewer"
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
    "name": "CurrentlyRunningAuctionsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "sales",
            "args": [
              {
                "kind": "Literal",
                "name": "auctionState",
                "value": "OPEN"
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 100
              },
              {
                "kind": "Literal",
                "name": "isAuction",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "live",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "TIMELY_AT_NAME_ASC"
              }
            ],
            "concreteType": "SaleConnection",
            "kind": "LinkedField",
            "name": "salesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Sale",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
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
                        "name": "href",
                        "storageKey": null
                      },
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
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": [
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
                        "storageKey": null
                      },
                      {
                        "alias": "live_start_at",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "liveStartAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "salesConnection(auctionState:\"OPEN\",first:100,isAuction:true,live:true,sort:\"TIMELY_AT_NAME_ASC\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "95a8fabf688a69e11b30bcfeb84ae05c",
    "metadata": {},
    "name": "CurrentlyRunningAuctionsRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "f667cef298c4d936953c549f74ba6429";

export default node;
