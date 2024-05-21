/**
 * @generated SignedSource<<a36b063e8613e6a07fa6ae3d687de41a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkHistory_artwork$data = {
  readonly exhibitionHistory: string | null | undefined;
  readonly literature: string | null | undefined;
  readonly provenance: string | null | undefined;
  readonly " $fragmentType": "ArtworkHistory_artwork";
};
export type ArtworkHistory_artwork$key = {
  readonly " $data"?: ArtworkHistory_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkHistory_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkHistory_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "provenance",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "exhibitionHistory",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "literature",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "0cde93b94926cb77be4875a37b911854";

export default node;
