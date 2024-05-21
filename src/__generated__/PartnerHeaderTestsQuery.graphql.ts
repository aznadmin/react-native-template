/**
 * @generated SignedSource<<f2d852d2a9ac4f5cbb6a0e6c9697090c>>
 * @relayHash c018eea2480648360cb74e24bdd0edf7
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c018eea2480648360cb74e24bdd0edf7

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerHeaderTestsQuery$variables = Record<PropertyKey, never>;
export type PartnerHeaderTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerHeader_partner">;
  } | null | undefined;
};
export type PartnerHeaderTestsQuery$rawResponse = {
  readonly partner: {
    readonly categories: ReadonlyArray<{
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly counts: {
      readonly eligibleArtworks: any | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly internalID: string;
    readonly profile: {
      readonly counts: {
        readonly follows: any | null | undefined;
      } | null | undefined;
      readonly id: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined;
};
export type PartnerHeaderTestsQuery = {
  rawResponse: PartnerHeaderTestsQuery$rawResponse;
  response: PartnerHeaderTestsQuery$data;
  variables: PartnerHeaderTestsQuery$variables;
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
  "name": "name",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerHeaderTestsQuery",
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
            "name": "PartnerHeader_partner"
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
    "name": "PartnerHeaderTestsQuery",
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
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
                "concreteType": "ProfileCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "follows",
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
            "concreteType": "PartnerCategory",
            "kind": "LinkedField",
            "name": "categories",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PartnerCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "eligibleArtworks",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "id": "c018eea2480648360cb74e24bdd0edf7",
    "metadata": {},
    "name": "PartnerHeaderTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "d333b5c461fbfb6443bf11449f66f0e3";

export default node;
