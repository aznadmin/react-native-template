/**
 * @generated SignedSource<<5eb55b52d39c80971c7e8c7efc688949>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_news$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArticlesCards_viewer">;
  readonly " $fragmentType": "Home_news";
};
export type Home_news$key = {
  readonly " $data"?: Home_news$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_news">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_news",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticlesCards_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "83c2965f0e27647015b567b66984547d";

export default node;
