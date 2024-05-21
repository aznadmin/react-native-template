/**
 * @generated SignedSource<<1884b7ef115a4cf6eba605e98479d19f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArticleSectionImageSetLayout = "FULL" | "MINI" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ArticleSectionImageSet_section$data = {
  readonly counts: {
    readonly figures: number;
  };
  readonly cover: {
    readonly __typename: "ArticleImageSection";
    readonly id: string;
    readonly image: {
      readonly height: number | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined;
  } | {
    readonly __typename: "Artwork";
    readonly id: string;
    readonly image: {
      readonly height: number | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
  readonly layout: ArticleSectionImageSetLayout;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArticleSectionImageSet_section";
};
export type ArticleSectionImageSet_section$key = {
  readonly " $data"?: ArticleSectionImageSet_section$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSectionImageSet_section">;
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
  "name": "ArticleSectionImageSet_section",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "layout",
      "storageKey": null
    },
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
      "concreteType": "ArticleSectionImageSetCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "figures",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "cover",
      "plural": false,
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
          "selections": (v0/*: any*/),
          "type": "Artwork",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArticleSectionImageSet",
  "abstractKey": null
};
})();

(node as any).hash = "2a19119791976a53f837f54b3c6bfcd7";

export default node;
