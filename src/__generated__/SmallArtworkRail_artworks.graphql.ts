/**
 * @generated SignedSource<<9ae246dbf63bee8a12d234576769d075>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SmallArtworkRail_artworks$data = ReadonlyArray<{
  readonly href: string | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkRailCard_artwork">;
  readonly " $fragmentType": "SmallArtworkRail_artworks";
}>;
export type SmallArtworkRail_artworks$key = ReadonlyArray<{
  readonly " $data"?: SmallArtworkRail_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"SmallArtworkRail_artworks">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SmallArtworkRail_artworks",
  "selections": [
    {
      "args": [
        {
          "kind": "Literal",
          "name": "width",
          "value": 155
        }
      ],
      "kind": "FragmentSpread",
      "name": "ArtworkRailCard_artwork"
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
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "98223a176ebc3688a07282156b3a9ef6";

export default node;
