/**
 * @generated SignedSource<<e18da08ce2df99639262db202448cdb1>>
 * @relayHash 12accc639f5666503b51a05d322e2e22
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 12accc639f5666503b51a05d322e2e22

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightsBigCardsSwiperQuery$variables = Record<PropertyKey, never>;
export type CareerHighlightsBigCardsSwiperQuery$data = {
  readonly me: {
    readonly myCollectionInfo: {
      readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBigCardBiennial_myCollectionInfo" | "CareerHighlightBigCardCollected_myCollectionInfo" | "CareerHighlightBigCardGroupShow_myCollectionInfo" | "CareerHighlightBigCardReviewed_myCollectionInfo" | "CareerHighlightBigCardSoloShow_myCollectionInfo">;
    } | null | undefined;
  } | null | undefined;
};
export type CareerHighlightsBigCardsSwiperQuery = {
  response: CareerHighlightsBigCardsSwiperQuery$data;
  variables: CareerHighlightsBigCardsSwiperQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artist",
    "kind": "LinkedField",
    "name": "artist",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "birthday",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deathday",
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
        "kind": "ScalarField",
        "name": "nationality",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "kind",
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
    "name": "entities",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CareerHighlightsBigCardsSwiperQuery",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "CareerHighlightBigCardBiennial_myCollectionInfo"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CareerHighlightBigCardCollected_myCollectionInfo"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CareerHighlightBigCardGroupShow_myCollectionInfo"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CareerHighlightBigCardSoloShow_myCollectionInfo"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CareerHighlightBigCardReviewed_myCollectionInfo"
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
    "name": "CareerHighlightsBigCardsSwiperQuery",
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
                "alias": "biennialInsights",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kind",
                    "value": "BIENNIAL"
                  }
                ],
                "concreteType": "ArtistInsight",
                "kind": "LinkedField",
                "name": "artistInsights",
                "plural": true,
                "selections": (v1/*: any*/),
                "storageKey": "artistInsights(kind:\"BIENNIAL\")"
              },
              {
                "alias": "collectedInsights",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kind",
                    "value": "COLLECTED"
                  }
                ],
                "concreteType": "ArtistInsight",
                "kind": "LinkedField",
                "name": "artistInsights",
                "plural": true,
                "selections": (v1/*: any*/),
                "storageKey": "artistInsights(kind:\"COLLECTED\")"
              },
              {
                "alias": "groupShowInsights",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kind",
                    "value": "GROUP_SHOW"
                  }
                ],
                "concreteType": "ArtistInsight",
                "kind": "LinkedField",
                "name": "artistInsights",
                "plural": true,
                "selections": (v1/*: any*/),
                "storageKey": "artistInsights(kind:\"GROUP_SHOW\")"
              },
              {
                "alias": "soloShowInsights",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kind",
                    "value": "SOLO_SHOW"
                  }
                ],
                "concreteType": "ArtistInsight",
                "kind": "LinkedField",
                "name": "artistInsights",
                "plural": true,
                "selections": (v1/*: any*/),
                "storageKey": "artistInsights(kind:\"SOLO_SHOW\")"
              },
              {
                "alias": "reviewedInsights",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "kind",
                    "value": "REVIEWED"
                  }
                ],
                "concreteType": "ArtistInsight",
                "kind": "LinkedField",
                "name": "artistInsights",
                "plural": true,
                "selections": (v1/*: any*/),
                "storageKey": "artistInsights(kind:\"REVIEWED\")"
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "12accc639f5666503b51a05d322e2e22",
    "metadata": {},
    "name": "CareerHighlightsBigCardsSwiperQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f79fd1bf45a36b1372cc01c9b12623ff";

export default node;
