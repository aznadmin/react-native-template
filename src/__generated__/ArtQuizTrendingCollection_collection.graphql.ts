/**
 * @generated SignedSource<<7f44a0c2ca916a69a39fb4c3c6f2626c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizTrendingCollection_collection$data = {
  readonly artworksConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"SmallArtworkRail_artworks">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly descriptionMarkdown: string | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "ArtQuizTrendingCollection_collection";
};
export type ArtQuizTrendingCollection_collection$key = {
  readonly " $data"?: ArtQuizTrendingCollection_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizTrendingCollection_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtQuizTrendingCollection_collection",
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
      "name": "descriptionMarkdown",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 16
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FilterArtworksEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SmallArtworkRail_artworks"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:16)"
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "73878a7cb7f333f652fcd48c976409ae";

export default node;
