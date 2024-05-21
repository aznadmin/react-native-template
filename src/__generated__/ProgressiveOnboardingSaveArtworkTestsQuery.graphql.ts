/**
 * @generated SignedSource<<99e7b47e53bc2159ba7be2e811a497cb>>
 * @relayHash 1347d779f5f793bca7e61d8f14923fbf
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 1347d779f5f793bca7e61d8f14923fbf

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProgressiveOnboardingSaveArtworkTestsQuery$variables = Record<PropertyKey, never>;
export type ProgressiveOnboardingSaveArtworkTestsQuery$data = {
  readonly me: {
    readonly counts: {
      readonly savedArtworks: number;
    } | null | undefined;
  } | null | undefined;
};
export type ProgressiveOnboardingSaveArtworkTestsQuery = {
  response: ProgressiveOnboardingSaveArtworkTestsQuery$data;
  variables: ProgressiveOnboardingSaveArtworkTestsQuery$variables;
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
    "name": "ProgressiveOnboardingSaveArtworkTestsQuery",
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
    "name": "ProgressiveOnboardingSaveArtworkTestsQuery",
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
    "id": "1347d779f5f793bca7e61d8f14923fbf",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MeCounts"
        },
        "me.counts.savedArtworks": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "ProgressiveOnboardingSaveArtworkTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "7840c0821602dd63b8b4a514060bbfdb";

export default node;
