/**
 * @generated SignedSource<<30b56613eadcc257674e17c1d6d1967f>>
 * @relayHash 2453dc5a4829c2699e9627c3f450faaf
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2453dc5a4829c2699e9627c3f450faaf

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesHeaderTestsQuery$variables = Record<PropertyKey, never>;
export type ArtistSeriesHeaderTestsQuery$data = {
  readonly artistSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesHeader_artistSeries">;
  } | null | undefined;
};
export type ArtistSeriesHeaderTestsQuery$rawResponse = {
  readonly artistSeries: {
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtistSeriesHeaderTestsQuery = {
  rawResponse: ArtistSeriesHeaderTestsQuery$rawResponse;
  response: ArtistSeriesHeaderTestsQuery$data;
  variables: ArtistSeriesHeaderTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistSeriesHeader_artistSeries"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
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
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "id": "2453dc5a4829c2699e9627c3f450faaf",
    "metadata": {},
    "name": "ArtistSeriesHeaderTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "8195b41790b6eb2e0d25a9d32e318b3f";

export default node;
