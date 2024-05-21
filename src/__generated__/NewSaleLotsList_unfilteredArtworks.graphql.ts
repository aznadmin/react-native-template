/**
 * @generated SignedSource<<0890e198ae0bc21fb25f5beb0bc907f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtworkAggregation = "ARTIST" | "ARTIST_NATIONALITY" | "ARTIST_SERIES" | "ATTRIBUTION_CLASS" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "LOCATION_CITY" | "MAJOR_PERIOD" | "MATERIALS_TERMS" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "SIMPLE_PRICE_HISTOGRAM" | "TOTAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type NewSaleLotsList_unfilteredArtworks$data = {
  readonly aggregations: ReadonlyArray<{
    readonly counts: ReadonlyArray<{
      readonly count: number;
      readonly name: string;
      readonly value: string;
    } | null | undefined> | null | undefined;
    readonly slice: ArtworkAggregation | null | undefined;
  } | null | undefined> | null | undefined;
  readonly counts: {
    readonly followedArtists: any | null | undefined;
    readonly total: any | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "NewSaleLotsList_unfilteredArtworks";
};
export type NewSaleLotsList_unfilteredArtworks$key = {
  readonly " $data"?: NewSaleLotsList_unfilteredArtworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewSaleLotsList_unfilteredArtworks">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewSaleLotsList_unfilteredArtworks",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FilterArtworksCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "followedArtists",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "total",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
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
    }
  ],
  "type": "FilterArtworksConnection",
  "abstractKey": null
};

(node as any).hash = "dc4423abac149c7fde5a4ee7ea9443b1";

export default node;
