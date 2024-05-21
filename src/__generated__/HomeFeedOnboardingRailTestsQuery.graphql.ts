/**
 * @generated SignedSource<<cecac956044774d82a8d1f18d53cab34>>
 * @relayHash 9a808f80161f8857c3fd5a382d872c4f
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9a808f80161f8857c3fd5a382d872c4f

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeFeedOnboardingRailTestsQuery$variables = Record<PropertyKey, never>;
export type HomeFeedOnboardingRailTestsQuery$data = {
  readonly homePage: {
    readonly onboardingModule: {
      readonly " $fragmentSpreads": FragmentRefs<"HomeFeedOnboardingRail_onboardingModule">;
    } | null | undefined;
  } | null | undefined;
};
export type HomeFeedOnboardingRailTestsQuery = {
  response: HomeFeedOnboardingRailTestsQuery$data;
  variables: HomeFeedOnboardingRailTestsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeFeedOnboardingRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMyCollectionOnboardingModule",
            "kind": "LinkedField",
            "name": "onboardingModule",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HomeFeedOnboardingRail_onboardingModule"
              }
            ],
            "storageKey": null
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
    "name": "HomeFeedOnboardingRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMyCollectionOnboardingModule",
            "kind": "LinkedField",
            "name": "onboardingModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "showMyCollectionCard",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "showSWACard",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "9a808f80161f8857c3fd5a382d872c4f",
    "metadata": {},
    "name": "HomeFeedOnboardingRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "39b4f8056ed9429bbdcc411e41b48e23";

export default node;
