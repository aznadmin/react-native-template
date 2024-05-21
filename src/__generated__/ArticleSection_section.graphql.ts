/**
 * @generated SignedSource<<1550eea687290b2fea2e56dcbb07a3b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSection_section$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageCollection_section" | "ArticleSectionImageSet_section" | "ArticleSectionText_section">;
  readonly " $fragmentType": "ArticleSection_section";
};
export type ArticleSection_section$key = {
  readonly " $data"?: ArticleSection_section$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSection_section">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSection_section",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSectionImageCollection_section"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSectionImageSet_section"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSectionText_section"
    }
  ],
  "type": "ArticleSections",
  "abstractKey": "__isArticleSections"
};

(node as any).hash = "742ae65a81eff6890c8ec7dc798b1456";

export default node;
