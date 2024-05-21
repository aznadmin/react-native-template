/**
 * @generated SignedSource<<280767a2b09bf00b2a2924c64140ef7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShortContactGallery_artwork$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InquiryButtons_artwork">;
  readonly " $fragmentType": "ShortContactGallery_artwork";
};
export type ShortContactGallery_artwork$key = {
  readonly " $data"?: ShortContactGallery_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShortContactGallery_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShortContactGallery_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryButtons_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "b8e27597d49aac4da0d3a1a477753f58";

export default node;
