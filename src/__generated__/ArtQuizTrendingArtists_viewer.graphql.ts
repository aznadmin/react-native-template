/**
 * @generated SignedSource<<4834941ad862be06a85b6e55a2ca1221>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizTrendingArtists_viewer$data = {
  readonly curatedTrendingArtists: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtQuizArtist_artist">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArtQuizTrendingArtists_viewer";
};
export type ArtQuizTrendingArtists_viewer$key = {
  readonly " $data"?: ArtQuizTrendingArtists_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizTrendingArtists_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtQuizTrendingArtists_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 16
        }
      ],
      "concreteType": "ArtistConnection",
      "kind": "LinkedField",
      "name": "curatedTrendingArtists",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArtQuizArtist_artist"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "curatedTrendingArtists(first:16)"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "6e304c9e35099c1eae4ee625ed0a9e4c";

export default node;
