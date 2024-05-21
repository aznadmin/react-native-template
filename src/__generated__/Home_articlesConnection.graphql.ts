/**
 * @generated SignedSource<<7883e876c879e2793603b59436cbf2c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_articlesConnection$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ArticlesRail_articlesConnection">;
  readonly " $fragmentType": "Home_articlesConnection";
};
export type Home_articlesConnection$key = {
  readonly " $data"?: Home_articlesConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_articlesConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_articlesConnection",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticlesRail_articlesConnection"
    }
  ],
  "type": "ArticleConnection",
  "abstractKey": null
};

(node as any).hash = "dec236c7478ef5abcc0f9345909dce96";

export default node;
