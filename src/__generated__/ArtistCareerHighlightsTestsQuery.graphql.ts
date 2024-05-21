/**
 * @generated SignedSource<<3f87e810411b539baf88173449768bf0>>
 * @relayHash 08868081b98e973a81bd1dfd6c546883
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 08868081b98e973a81bd1dfd6c546883

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistCareerHighlightsTestsQuery$variables = Record<PropertyKey, never>;
export type ArtistCareerHighlightsTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistCareerHighlights_artist">;
  } | null | undefined;
};
export type ArtistCareerHighlightsTestsQuery = {
  response: ArtistCareerHighlightsTestsQuery$data;
  variables: ArtistCareerHighlightsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artist-id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistCareerHighlightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistCareerHighlights_artist"
          }
        ],
        "storageKey": "artist(id:\"artist-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistCareerHighlightsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistInsight",
            "kind": "LinkedField",
            "name": "insights",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "entities",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
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
        "storageKey": "artist(id:\"artist-id\")"
      }
    ]
  },
  "params": {
    "id": "08868081b98e973a81bd1dfd6c546883",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artist.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "artist.insights": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ArtistInsight"
        },
        "artist.insights.description": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "artist.insights.entities": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "String"
        },
        "artist.insights.kind": {
          "enumValues": [
            "ACTIVE_SECONDARY_MARKET",
            "ARTSY_VANGUARD_YEAR",
            "AWARDS",
            "BIENNIAL",
            "COLLECTED",
            "CRITICALLY_ACCLAIMED",
            "CURATORS_PICK_EMERGING",
            "GAINING_FOLLOWERS",
            "GROUP_SHOW",
            "HIGH_AUCTION_RECORD",
            "PRIVATE_COLLECTIONS",
            "RECENT_CAREER_EVENT",
            "RESIDENCIES",
            "REVIEWED",
            "SOLO_SHOW",
            "TRENDING_NOW"
          ],
          "nullable": true,
          "plural": false,
          "type": "ArtistInsightKind"
        },
        "artist.insights.label": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        }
      }
    },
    "name": "ArtistCareerHighlightsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "96e0875c2520755f8d0cbe2635c5bf32";

export default node;
