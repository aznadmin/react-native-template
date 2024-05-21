/**
 * @generated SignedSource<<c3f904eddb52785f2bab7efc25bb51de>>
 * @relayHash aec9aeb3cfc8b035e262a6e390fdf206
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID aec9aeb3cfc8b035e262a6e390fdf206

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkListEmptyState_Test_Query$variables = Record<PropertyKey, never>;
export type ArtworkListEmptyState_Test_Query$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkListEmptyState_me">;
  } | null | undefined;
};
export type ArtworkListEmptyState_Test_Query = {
  response: ArtworkListEmptyState_Test_Query$data;
  variables: ArtworkListEmptyState_Test_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "ArtworkListEmptyState_Test_Query",
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
            "args": [
              {
                "kind": "Literal",
                "name": "listID",
                "value": "list-id"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ArtworkListEmptyState_me"
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
    "name": "ArtworkListEmptyState_Test_Query",
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
            "alias": "artworkList",
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "list-id"
              }
            ],
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "default",
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "shareableWithPartners",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": "collection(id:\"list-id\")"
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "aec9aeb3cfc8b035e262a6e390fdf206",
    "metadata": {},
    "name": "ArtworkListEmptyState_Test_Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e877667036513a5152b1edacaf671bb1";

export default node;
