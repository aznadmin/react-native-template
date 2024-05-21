/**
 * @generated SignedSource<<9195732e1a8487286401176365d1af9c>>
 * @relayHash 09e438feec326b14526de8bd9302e70b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 09e438feec326b14526de8bd9302e70b

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAttributionClassFAQQuery$variables = Record<PropertyKey, never>;
export type ArtworkAttributionClassFAQQuery$data = {
  readonly artworkAttributionClasses: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkAttributionClassFAQ_artworkAttributionClasses">;
  } | null | undefined> | null | undefined;
};
export type ArtworkAttributionClassFAQQuery = {
  response: ArtworkAttributionClassFAQQuery$data;
  variables: ArtworkAttributionClassFAQQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkAttributionClassFAQQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AttributionClass",
        "kind": "LinkedField",
        "name": "artworkAttributionClasses",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworkAttributionClassFAQ_artworkAttributionClasses"
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
    "name": "ArtworkAttributionClassFAQQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AttributionClass",
        "kind": "LinkedField",
        "name": "artworkAttributionClasses",
        "plural": true,
        "selections": [
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
            "name": "longDescription",
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
    "id": "09e438feec326b14526de8bd9302e70b",
    "metadata": {},
    "name": "ArtworkAttributionClassFAQQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "87f390482264f567dde7a47f2b01a405";

export default node;
