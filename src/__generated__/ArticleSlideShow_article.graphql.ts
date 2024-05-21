/**
 * @generated SignedSource<<32b960192b18d67a7bd296fa39c4d5a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleSlideShow_article$data = {
  readonly sections: ReadonlyArray<{
    readonly __typename: "ArticleSectionImageCollection";
    readonly figures: ReadonlyArray<{
      readonly __typename: string;
      readonly id?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowCaption_figure" | "ArticleSlideShowImage_figure">;
    }>;
  } | {
    readonly __typename: "ArticleSectionImageSet";
    readonly figures: ReadonlyArray<{
      readonly __typename: string;
      readonly id?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShowCaption_figure" | "ArticleSlideShowImage_figure">;
    }>;
    readonly title: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  }>;
  readonly " $fragmentType": "ArticleSlideShow_article";
};
export type ArticleSlideShow_article$key = {
  readonly " $data"?: ArticleSlideShow_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSlideShow_article">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ArticleSlideShowImage_figure"
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ArticleSlideShowCaption_figure"
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "Artwork",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "ArticleImageSection",
  "abstractKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSlideShow_article",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "sections",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "figures",
              "plural": true,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v0/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v3/*: any*/),
                  "type": "ArticleUnpublishedArtwork",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "ArticleSectionImageCollection",
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "figures",
              "plural": true,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v0/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "ArticleSectionImageSet",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};
})();

(node as any).hash = "5d54e3e6a2929b73858c4aa0e309061d";

export default node;
