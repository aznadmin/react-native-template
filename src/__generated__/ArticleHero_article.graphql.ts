/**
 * @generated SignedSource<<d489461f83d4f1e615b0a10d7726c79d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleHero_article$data = {
  readonly byline: string | null | undefined;
  readonly hero: {
    readonly image?: {
      readonly aspectRatio: number;
      readonly blurhash: string | null | undefined;
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly href: string | null | undefined;
  readonly publishedAt: string | null | undefined;
  readonly title: string | null | undefined;
  readonly vertical: string | null | undefined;
  readonly " $fragmentType": "ArticleHero_article";
};
export type ArticleHero_article$key = {
  readonly " $data"?: ArticleHero_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleHero_article">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleHero_article",
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
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "vertical",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "byline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
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
                  "name": "aspectRatio",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "blurhash",
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
          ],
          "type": "ArticleFeatureSection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "3074b84e64688b2c60bc4fa752be188a";

export default node;
