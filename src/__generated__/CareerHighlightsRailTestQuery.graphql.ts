/**
 * @generated SignedSource<<fce11e454c144bf9d46255971264ff3c>>
 * @relayHash df644a2dbb3f1aa8b2bfd8953221458e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID df644a2dbb3f1aa8b2bfd8953221458e

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightsRailTestQuery$variables = Record<PropertyKey, never>;
export type CareerHighlightsRailTestQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightsRail_me">;
  } | null | undefined;
};
export type CareerHighlightsRailTestQuery = {
  response: CareerHighlightsRailTestQuery$data;
  variables: CareerHighlightsRailTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CareerHighlightsRailTestQuery",
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
            "name": "CareerHighlightsRail_me"
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
    "name": "CareerHighlightsRailTestQuery",
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
            "args": null,
            "concreteType": "MyCollectionInfo",
            "kind": "LinkedField",
            "name": "myCollectionInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistInsightsCount",
                "kind": "LinkedField",
                "name": "artistInsightsCount",
                "plural": false,
                "selections": [
                  {
                    "alias": "BIENNIAL",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "biennialCount",
                    "storageKey": null
                  },
                  {
                    "alias": "COLLECTED",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "collectedCount",
                    "storageKey": null
                  },
                  {
                    "alias": "GROUP_SHOW",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "groupShowCount",
                    "storageKey": null
                  },
                  {
                    "alias": "SOLO_SHOW",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "soloShowCount",
                    "storageKey": null
                  },
                  {
                    "alias": "REVIEWED",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "reviewedCount",
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
    "id": "df644a2dbb3f1aa8b2bfd8953221458e",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "me.myCollectionInfo": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MyCollectionInfo"
        },
        "me.myCollectionInfo.artistInsightsCount": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistInsightsCount"
        },
        "me.myCollectionInfo.artistInsightsCount.BIENNIAL": (v0/*: any*/),
        "me.myCollectionInfo.artistInsightsCount.COLLECTED": (v0/*: any*/),
        "me.myCollectionInfo.artistInsightsCount.GROUP_SHOW": (v0/*: any*/),
        "me.myCollectionInfo.artistInsightsCount.REVIEWED": (v0/*: any*/),
        "me.myCollectionInfo.artistInsightsCount.SOLO_SHOW": (v0/*: any*/)
      }
    },
    "name": "CareerHighlightsRailTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "26314d40002f1fda49cfc9b04e020dbd";

export default node;
