/**
 * @generated SignedSource<<3ce88a9852b2f72d4f67b7f312317202>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Articles_articles$data = ReadonlyArray<{
  readonly internalID: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleCard_article" | "Article_article">;
  readonly " $fragmentType": "Articles_articles";
}>;
export type Articles_articles$key = ReadonlyArray<{
  readonly " $data"?: Articles_articles$data;
  readonly " $fragmentSpreads": FragmentRefs<"Articles_articles">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Articles_articles",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleCard_article"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Article_article"
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "fa85a5523e2b20aeada76fd0fc795790";

export default node;
