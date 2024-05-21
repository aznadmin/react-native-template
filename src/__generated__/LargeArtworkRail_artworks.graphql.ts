/**
 * @generated SignedSource<<699d8302e4079dfb40aaccbeca9f43df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LargeArtworkRail_artworks$data = ReadonlyArray<{
  readonly href: string | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkRailCard_artwork">;
  readonly " $fragmentType": "LargeArtworkRail_artworks";
}>;
export type LargeArtworkRail_artworks$key = ReadonlyArray<{
  readonly " $data"?: LargeArtworkRail_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"LargeArtworkRail_artworks">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "LargeArtworkRail_artworks",
  "selections": [
    {
      "args": [
        {
          "kind": "Literal",
          "name": "width",
          "value": 590
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

(node as any).hash = "768c5f45a6685dfbf10a1d6176b98579";

export default node;
