/**
 * @generated SignedSource<<01f2313ce2389606475be398b0439b4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionImageCollection_section$data = {
  readonly figures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageCollectionCaption_figure" | "ArticleSectionImageCollectionImage_figure">;
  }>;
  readonly " $fragmentType": "ArticleSectionImageCollection_section";
};
export type ArticleSectionImageCollection_section$key = {
  readonly " $data"?: ArticleSectionImageCollection_section$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageCollection_section">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSectionImageCollection_section",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "figures",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSectionImageCollectionImage_figure"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSectionImageCollectionCaption_figure"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArticleSectionImageCollection",
  "abstractKey": null
};

(node as any).hash = "93a8f24e1552d963338d1bfb8ca6360c";

export default node;
