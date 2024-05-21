/**
 * @generated SignedSource<<344c90708ab6557c7ee45f436eaeb274>>
 * @relayHash 42ace9c783f709183f9c8f1fbe8caaa9
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 42ace9c783f709183f9c8f1fbe8caaa9

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerOverviewTestsQuery$variables = Record<PropertyKey, never>;
export type PartnerOverviewTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerOverview_partner">;
  } | null | undefined;
};
export type PartnerOverviewTestsQuery$rawResponse = {
  readonly partner: {
    readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly displayArtistsSection: boolean | null | undefined;
    readonly id: string;
    readonly locations: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
    readonly profile: {
      readonly bio: string | null | undefined;
      readonly id: string;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined;
};
export type PartnerOverviewTestsQuery = {
  rawResponse: PartnerOverviewTestsQuery$rawResponse;
  response: PartnerOverviewTestsQuery$data;
  variables: PartnerOverviewTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "gagosian"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerOverviewTestsQuery",
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
            "name": "PartnerOverview_partner"
          }
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerOverviewTestsQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cities",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayArtistsSection",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": "locations",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 0
              }
            ],
            "concreteType": "LocationConnection",
            "kind": "LinkedField",
            "name": "locationsConnection",
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
            "storageKey": "locationsConnection(first:0)"
          },
          (v1/*: any*/)
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "id": "42ace9c783f709183f9c8f1fbe8caaa9",
    "metadata": {},
    "name": "PartnerOverviewTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "9d7ba1102dd3bf9fc758cb46ae6e9cb4";

export default node;
