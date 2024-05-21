/**
 * @generated SignedSource<<86cc4f7df5a43785abec8096b411bc4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArticles_article$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleCard_article">;
  readonly " $fragmentType": "MyCollectionArtworkArticles_article";
}>;
export type MyCollectionArtworkArticles_article$key = ReadonlyArray<{
  readonly " $data"?: MyCollectionArtworkArticles_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArticles_article">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "MyCollectionArtworkArticles_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleCard_article"
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "166a79309e05cd7598e6581e6ac7905c";

export default node;
