/**
 * @generated SignedSource<<c9549acd57bf94d6b567f377eed4e515>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleWebViewScreen_article$data = {
  readonly href: string | null | undefined;
  readonly " $fragmentType": "ArticleWebViewScreen_article";
};
export type ArticleWebViewScreen_article$key = {
  readonly " $data"?: ArticleWebViewScreen_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleWebViewScreen_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleWebViewScreen_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "566813b3f5c57c4283ad4036298c27bb";

export default node;
