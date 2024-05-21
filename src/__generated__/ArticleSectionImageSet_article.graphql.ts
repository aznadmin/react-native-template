/**
 * @generated SignedSource<<d8bab9cfe3ea0696c0066e4d7a1ab7df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionImageSet_article$data = {
  readonly internalID: string;
  readonly " $fragmentType": "ArticleSectionImageSet_article";
};
export type ArticleSectionImageSet_article$key = {
  readonly " $data"?: ArticleSectionImageSet_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageSet_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSectionImageSet_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "480f99d8ffeec2c14f9d6458983e1ff5";

export default node;
