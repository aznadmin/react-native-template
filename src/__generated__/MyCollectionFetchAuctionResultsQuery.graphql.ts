/**
 * @generated SignedSource<<f297e95a392faef3aa041aaee312b000>>
 * @relayHash bafe817ff2c5d1287247cc8bd8cb3370
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID bafe817ff2c5d1287247cc8bd8cb3370

import { ConcreteRequest, Query } from 'relay-runtime';
export type MyCollectionFetchAuctionResultsQuery$variables = Record<PropertyKey, never>;
export type MyCollectionFetchAuctionResultsQuery$data = {
  readonly me: {
    readonly auctionResults: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type MyCollectionFetchAuctionResultsQuery = {
  response: MyCollectionFetchAuctionResultsQuery$data;
  variables: MyCollectionFetchAuctionResultsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": "auctionResults",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 3
    }
  ],
  "concreteType": "AuctionResultConnection",
  "kind": "LinkedField",
  "name": "myCollectionAuctionResults",
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
  "storageKey": "myCollectionAuctionResults(first:3)"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionFetchAuctionResultsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "MyCollectionFetchAuctionResultsQuery",
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "bafe817ff2c5d1287247cc8bd8cb3370",
    "metadata": {},
    "name": "MyCollectionFetchAuctionResultsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "de71604d3d325ed3468402f0a8ac378c";

export default node;
