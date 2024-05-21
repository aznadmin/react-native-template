/**
 * @generated SignedSource<<ac7abf2337416ec4d39006bba2ef544a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSlideShowCaption_figure$data = {
  readonly __typename: "ArticleImageSection";
  readonly caption: string | null | undefined;
  readonly " $fragmentType": "ArticleSlideShowCaption_figure";
} | {
  readonly __typename: "ArticleUnpublishedArtwork";
  readonly artist: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly date: string | null | undefined;
  readonly partner: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArticleSlideShowCaption_figure";
} | {
  readonly __typename: "Artwork";
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionArtworkCaption_artwork">;
  readonly " $fragmentType": "ArticleSlideShowCaption_figure";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ArticleSlideShowCaption_figure";
};
export type ArticleSlideShowCaption_figure$key = {
  readonly " $data"?: ArticleSlideShowCaption_figure$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowCaption_figure">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSlideShowCaption_figure",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSectionArtworkCaption_artwork"
        }
      ],
      "type": "Artwork",
      "abstractKey": null
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "date",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArticleUnpublishedArtworkArtist",
          "kind": "LinkedField",
          "name": "artist",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArticleUnpublishedArtworkPartner",
          "kind": "LinkedField",
          "name": "partner",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ArticleUnpublishedArtwork",
      "abstractKey": null
    }
  ],
  "type": "ArticleSectionImageCollectionFigure",
  "abstractKey": "__isArticleSectionImageCollectionFigure"
};
})();

(node as any).hash = "d74205ea6d51b4f81e59f5c2c8a3e588";

export default node;
