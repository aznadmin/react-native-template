/**
 * @generated SignedSource<<a1d5c14358e206b390a36069a53ae371>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type About_gene$data = {
  readonly trending_artists: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RelatedArtists_artists">;
  } | null | undefined> | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"Biography_gene">;
  readonly " $fragmentType": "About_gene";
};
export type About_gene$key = {
  readonly " $data"?: About_gene$data;
  readonly " $fragmentSpreads": FragmentRefs<"About_gene">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "About_gene",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Biography_gene"
    },
    {
      "alias": "trending_artists",
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "trendingArtists",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelatedArtists_artists"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Gene",
  "abstractKey": null
};

(node as any).hash = "09c3e04568ab6b702258dcaf97a58477";

export default node;
