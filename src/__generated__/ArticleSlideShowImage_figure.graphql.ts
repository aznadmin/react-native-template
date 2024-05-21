/**
 * @generated SignedSource<<1fbffd42fff4e0c4d82907f024f3000b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSlideShowImage_figure$data = {
  readonly __typename: "ArticleImageSection";
  readonly image: {
    readonly aspectRatio: number;
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArticleSlideShowImage_figure";
} | {
  readonly __typename: "ArticleUnpublishedArtwork";
  readonly image: {
    readonly aspectRatio: number;
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArticleSlideShowImage_figure";
} | {
  readonly __typename: "Artwork";
  readonly image: {
    readonly aspectRatio: number;
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArticleSlideShowImage_figure";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ArticleSlideShowImage_figure";
};
export type ArticleSlideShowImage_figure$key = {
  readonly " $data"?: ArticleSlideShowImage_figure$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowImage_figure">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "aspectRatio",
        "storageKey": null
      },
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
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSlideShowImage_figure",
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
      "type": "Artwork",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "ArticleImageSection",
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

(node as any).hash = "7e2436dba55f8dbd331730a6d1e25fa8";

export default node;
