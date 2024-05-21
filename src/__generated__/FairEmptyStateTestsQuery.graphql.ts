/**
 * @generated SignedSource<<f3ce7b0ac6bd7bf7dbb184249c0e7fe2>>
 * @relayHash 94481037b78580510f85f58c80304466
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 94481037b78580510f85f58c80304466

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairEmptyStateTestsQuery$variables = Record<PropertyKey, never>;
export type FairEmptyStateTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairEmptyState_fair">;
  } | null | undefined;
};
export type FairEmptyStateTestsQuery = {
  response: FairEmptyStateTestsQuery$data;
  variables: FairEmptyStateTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "example-fair-id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FairEmptyStateTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairEmptyState_fair"
          }
        ],
        "storageKey": "fair(id:\"example-fair-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FairEmptyStateTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isActive",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endAt",
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
        "storageKey": "fair(id:\"example-fair-id\")"
      }
    ]
  },
  "params": {
    "id": "94481037b78580510f85f58c80304466",
    "metadata": {},
    "name": "FairEmptyStateTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "93bd17a10f37ff96b8b7da13a16bff0b";

export default node;
