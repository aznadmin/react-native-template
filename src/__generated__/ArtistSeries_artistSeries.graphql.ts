/**
 * @generated SignedSource<<354b91d9725a1c372b7264bca6fc19eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeries_artistSeries$data = {
  readonly artist: ReadonlyArray<{
    readonly artistSeriesConnection: {
      readonly totalCount: number;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesMoreSeries_artist">;
  } | null | undefined> | null | undefined;
  readonly artistIDs: ReadonlyArray<string>;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesArtworks_artistSeries" | "ArtistSeriesHeader_artistSeries" | "ArtistSeriesMeta_artistSeries">;
  readonly " $fragmentType": "ArtistSeries_artistSeries";
};
export type ArtistSeries_artistSeries$key = {
  readonly " $data"?: ArtistSeries_artistSeries$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistSeries_artistSeries">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistSeries_artistSeries",
  "selections": [
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistIDs",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistSeriesHeader_artistSeries"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistSeriesMeta_artistSeries"
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "-decayed_merch"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "ArtistSeriesArtworks_artistSeries"
    },
    {
      "alias": "artist",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 1
        }
      ],
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistSeriesMoreSeries_artist"
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 4
            }
          ],
          "concreteType": "ArtistSeriesConnection",
          "kind": "LinkedField",
          "name": "artistSeriesConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "storageKey": "artistSeriesConnection(first:4)"
        }
      ],
      "storageKey": "artists(size:1)"
    }
  ],
  "type": "ArtistSeries",
  "abstractKey": null
};

(node as any).hash = "0822690bade2f2381f36c59407be5d40";

export default node;
