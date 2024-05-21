/**
 * @generated SignedSource<<ca4d29b2bd2ea9d117f8165f51fb91a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionImageCollectionCaption_figure$data = {
  readonly __typename: "ArticleImageSection";
  readonly caption: string | null | undefined;
  readonly " $fragmentType": "ArticleSectionImageCollectionCaption_figure";
} | {
  readonly __typename: "Artwork";
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionArtworkCaption_artwork">;
  readonly " $fragmentType": "ArticleSectionImageCollectionCaption_figure";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ArticleSectionImageCollectionCaption_figure";
};
export type ArticleSectionImageCollectionCaption_figure$key = {
  readonly " $data"?: ArticleSectionImageCollectionCaption_figure$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageCollectionCaption_figure">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSectionImageCollectionCaption_figure",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "caption",
          "storageKey": null
        }
      ],
      "type": "ArticleImageSection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSectionArtworkCaption_artwork"
        }
      ],
      "type": "Artwork",
      "abstractKey": null
    }
  ],
  "type": "ArticleSectionImageCollectionFigure",
  "abstractKey": "__isArticleSectionImageCollectionFigure"
};

(node as any).hash = "10efd8c085f6b25e6a9bb6c6510be12b";

export default node;
