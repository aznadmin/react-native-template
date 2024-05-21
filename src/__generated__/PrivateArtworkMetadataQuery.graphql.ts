/**
 * @generated SignedSource<<da4bc4634ac4be6a0aef7869cdf49365>>
 * @relayHash 3fc27e88f2fffed929109f41d0f8b51c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3fc27e88f2fffed929109f41d0f8b51c

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateArtworkMetadataQuery$variables = Record<PropertyKey, never>;
export type PrivateArtworkMetadataQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"PrivateArtworkMetadata_artwork">;
  } | null | undefined;
};
export type PrivateArtworkMetadataQuery = {
  response: PrivateArtworkMetadataQuery$data;
  variables: PrivateArtworkMetadataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PrivateArtworkMetadataQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PrivateArtworkMetadata_artwork"
          }
        ],
        "storageKey": "artwork(id:\"foo\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PrivateArtworkMetadataQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "conditionDescription",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "details",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "privateProvenance",
            "args": (v1/*: any*/),
            "kind": "ScalarField",
            "name": "provenance",
            "storageKey": "provenance(format:\"HTML\")"
          },
          {
            "alias": "privateExhibitionHistory",
            "args": (v1/*: any*/),
            "kind": "ScalarField",
            "name": "exhibitionHistory",
            "storageKey": "exhibitionHistory(format:\"HTML\")"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"foo\")"
      }
    ]
  },
  "params": {
    "id": "3fc27e88f2fffed929109f41d0f8b51c",
    "metadata": {},
    "name": "PrivateArtworkMetadataQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "abc40414095f0f3a259a9af13006c804";

export default node;
