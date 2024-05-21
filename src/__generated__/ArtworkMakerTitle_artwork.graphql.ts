/**
 * @generated SignedSource<<0b689ce402f2833d97b3801e5952ebe9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkMakerTitle_artwork$data = {
  readonly artists: ReadonlyArray<{
    readonly href: string | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly culturalMaker: string | null | undefined;
  readonly " $fragmentType": "ArtworkMakerTitle_artwork";
};
export type ArtworkMakerTitle_artwork$key = {
  readonly " $data"?: ArtworkMakerTitle_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkMakerTitle_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkMakerTitle_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "culturalMaker",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
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
          "name": "href",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "28da659cbcc29585f2a0292cf076eaf3";

export default node;
