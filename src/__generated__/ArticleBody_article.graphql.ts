/**
 * @generated SignedSource<<956df5fef551a0a29605c1e5a2e372ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleBody_article$data = {
  readonly authors: ReadonlyArray<{
    readonly bio: string | null | undefined;
    readonly name: string | null | undefined;
  }>;
  readonly postscript: string | null | undefined;
  readonly sections: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ArticleSection_section">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleHero_article" | "ArticleSectionImageSet_article" | "ArticleSectionText_article">;
  readonly " $fragmentType": "ArticleBody_article";
};
export type ArticleBody_article$key = {
  readonly " $data"?: ArticleBody_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleBody_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleBody_article",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleHero_article"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSectionText_article"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSectionImageSet_article"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "sections",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleSection_section"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postscript",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Author",
      "kind": "LinkedField",
      "name": "authors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bio",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "f794fdbfd7791a9ce7d5893287932093";

export default node;
