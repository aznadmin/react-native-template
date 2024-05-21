/**
 * @generated SignedSource<<e5ae76b76ed7dcd87472e90ba73e8f48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkAbout_artwork$data = {
  readonly artist: {
    readonly articles: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArticles_article">;
        } | null | undefined;
      } | null | undefined> | null | undefined;
      readonly totalCount: number | null | undefined;
    } | null | undefined;
    readonly slug: string;
    readonly targetSupply: {
      readonly isP1: boolean | null | undefined;
    };
  } | null | undefined;
  readonly artistNames: string | null | undefined;
  readonly consignmentSubmission: {
    readonly displayText: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAboutWork_artwork" | "MyCollectionWhySell_artwork" | "RequestForPriceEstimateBanner_artwork">;
  readonly " $fragmentType": "MyCollectionArtworkAbout_artwork";
};
export type MyCollectionArtworkAbout_artwork$key = {
  readonly " $data"?: MyCollectionArtworkAbout_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkAbout_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkAboutWork_artwork"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistNames",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkConsignmentSubmission",
      "kind": "LinkedField",
      "name": "consignmentSubmission",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayText",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": "articles",
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 10
            },
            {
              "kind": "Literal",
              "name": "sort",
              "value": "PUBLISHED_AT_DESC"
            }
          ],
          "concreteType": "ArticleConnection",
          "kind": "LinkedField",
          "name": "articlesConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ArticleEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Article",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "MyCollectionArtworkArticles_article"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "articlesConnection(first:10,sort:\"PUBLISHED_AT_DESC\")"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistTargetSupply",
          "kind": "LinkedField",
          "name": "targetSupply",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isP1",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionWhySell_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RequestForPriceEstimateBanner_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "39a0e4136875cd85ed48fba032dc427c";

export default node;
