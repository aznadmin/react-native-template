/**
 * @generated SignedSource<<9da6d4e5df5e9bb5919b8e17f9372137>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_newWorksForYou$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NewWorksForYouRail_artworkConnection">;
  readonly " $fragmentType": "Home_newWorksForYou";
};
export type Home_newWorksForYou$key = {
  readonly " $data"?: Home_newWorksForYou$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_newWorksForYou">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_newWorksForYou",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NewWorksForYouRail_artworkConnection"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "f9ed1e0adb9ecfd75925ace2b7ba1877";

export default node;
