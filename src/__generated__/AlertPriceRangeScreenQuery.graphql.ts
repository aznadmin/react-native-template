/**
 * @generated SignedSource<<35bfad8297f910fd3ea7f03792b23686>>
 * @relayHash 4738cd97a3d6459f95309c11142a2cc0
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 4738cd97a3d6459f95309c11142a2cc0

import { ConcreteRequest, Query } from 'relay-runtime';
export type ArtworkAggregation = "ARTIST" | "ARTIST_NATIONALITY" | "ARTIST_SERIES" | "ATTRIBUTION_CLASS" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "LOCATION_CITY" | "MAJOR_PERIOD" | "MATERIALS_TERMS" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "SIMPLE_PRICE_HISTOGRAM" | "TOTAL" | "%future added value";
export type AlertPriceRangeScreenQuery$variables = {
  artistID: string;
};
export type AlertPriceRangeScreenQuery$data = {
  readonly artist: {
    readonly filterArtworksConnection: {
      readonly aggregations: ReadonlyArray<{
        readonly counts: ReadonlyArray<{
          readonly count: number;
          readonly name: string;
          readonly value: string;
        } | null | undefined> | null | undefined;
        readonly slice: ArtworkAggregation | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type AlertPriceRangeScreenQuery = {
  response: AlertPriceRangeScreenQuery$data;
  variables: AlertPriceRangeScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "SIMPLE_PRICE_HISTOGRAM"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworksAggregationResults",
  "kind": "LinkedField",
  "name": "aggregations",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slice",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AggregationCount",
      "kind": "LinkedField",
      "name": "counts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
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
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AlertPriceRangeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"SIMPLE_PRICE_HISTOGRAM\"],first:0)"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AlertPriceRangeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"SIMPLE_PRICE_HISTOGRAM\"],first:0)"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "4738cd97a3d6459f95309c11142a2cc0",
    "metadata": {},
    "name": "AlertPriceRangeScreenQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6c7e342123aac7425301913679da9444";

export default node;
