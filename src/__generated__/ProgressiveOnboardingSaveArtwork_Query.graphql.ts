/**
 * @generated SignedSource<<31fccb7be709ee93690c7b37b09508f5>>
 * @relayHash 569fec4446da055da1abc54467d6b193
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 569fec4446da055da1abc54467d6b193

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProgressiveOnboardingSaveArtwork_Query$variables = Record<PropertyKey, never>;
export type ProgressiveOnboardingSaveArtwork_Query$data = {
  readonly me: {
    readonly counts: {
      readonly savedArtworks: number;
    };
  };
} | null | undefined;
export type ProgressiveOnboardingSaveArtwork_Query = {
  response: ProgressiveOnboardingSaveArtwork_Query$data;
  variables: ProgressiveOnboardingSaveArtwork_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "MeCounts",
  "kind": "LinkedField",
  "name": "counts",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "savedArtworks",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProgressiveOnboardingSaveArtwork_Query",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "Me",
          "kind": "LinkedField",
          "name": "me",
          "plural": false,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v0/*: any*/),
              "action": "NONE",
              "path": "me.counts"
            }
          ],
          "storageKey": null
        },
        "action": "NONE",
        "path": "me"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProgressiveOnboardingSaveArtwork_Query",
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
    "id": "569fec4446da055da1abc54467d6b193",
    "metadata": {},
    "name": "ProgressiveOnboardingSaveArtwork_Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "036516af99d75a422d0c56069982b8fe";

export default node;
