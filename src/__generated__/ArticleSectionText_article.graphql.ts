/**
 * @generated SignedSource<<7d729ae9c6d3f15f36752c6438229b44>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionText_article$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "ArticleSectionText_article";
} | null | undefined;
export type ArticleSectionText_article$key = {
  readonly " $data"?: ArticleSectionText_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionText_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSectionText_article",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "internalID",
        "storageKey": null
      },
      "action": "NONE",
      "path": "internalID"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      "action": "NONE",
      "path": "slug"
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "89aa141e5aa3c3fd7ec28888cdb6941d";

export default node;
