/**
 * @generated SignedSource<<efeee86747b7f3a26019fdfcc2b8f863>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleShareButton_article$data = {
  readonly href: string | null | undefined;
  readonly internalID: string;
  readonly slug: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArticleShareButton_article";
};
export type ArticleShareButton_article$key = {
  readonly " $data"?: ArticleShareButton_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleShareButton_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleShareButton_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "baa077034e9e078cbbddedad0a6d76a0";

export default node;
