/**
 * @generated SignedSource<<f3847388b24c85da3215856f7ad78699>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkEditionSetInformation_artwork$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkEditionSets_artwork">;
  readonly " $fragmentType": "ArtworkEditionSetInformation_artwork";
};
export type ArtworkEditionSetInformation_artwork$key = {
  readonly " $data"?: ArtworkEditionSetInformation_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkEditionSetInformation_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkEditionSetInformation_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkEditionSets_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "9531690bd03de049f5d698cea1548d04";

export default node;
