/**
 * @generated SignedSource<<bd88cbce426b924684e63ece01855c09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionImageCollectionImage_figure$data = {
  readonly __typename: "ArticleImageSection";
  readonly id: string;
  readonly image: {
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArticleSectionImageCollectionImage_figure";
} | {
  readonly __typename: "ArticleUnpublishedArtwork";
  readonly id: string;
  readonly image: {
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArticleSectionImageCollectionImage_figure";
} | {
  readonly __typename: "Artwork";
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionArtworkImage_artwork">;
  readonly " $fragmentType": "ArticleSectionImageCollectionImage_figure";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ArticleSectionImageCollectionImage_figure";
};
export type ArticleSectionImageCollectionImage_figure$key = {
  readonly " $data"?: ArticleSectionImageCollectionImage_figure$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageCollectionImage_figure">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Image",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "version",
            "value": [
              "main",
              "normalized",
              "larger",
              "large"
            ]
          }
        ],
        "kind": "ScalarField",
        "name": "url",
        "storageKey": "url(version:[\"main\",\"normalized\",\"larger\",\"large\"])"
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "width",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "height",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSectionImageCollectionImage_figure",
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
      "selections": (v0/*: any*/),
      "type": "ArticleImageSection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSectionArtworkImage_artwork"
        }
      ],
      "type": "Artwork",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "ArticleUnpublishedArtwork",
      "abstractKey": null
    }
  ],
  "type": "ArticleSectionImageCollectionFigure",
  "abstractKey": "__isArticleSectionImageCollectionFigure"
};
})();

(node as any).hash = "c03326f99dcc506f1fb8ccd90efdf3dd";

export default node;
