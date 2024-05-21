/**
 * @generated SignedSource<<f02960b975bacfdfeb439c7fccc20519>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtQuizResultsTabs_me$data = {
  readonly quiz: {
    readonly recommendedArtworks: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ArtQuizExploreArtworksFragment_artwork">;
    }>;
    readonly savedArtworks: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ArtQuizExploreArtists_artworks" | "ArtQuizLikedArtworks_artworks">;
    }>;
  };
  readonly " $fragmentType": "ArtQuizResultsTabs_me";
};
export type ArtQuizResultsTabs_me$key = {
  readonly " $data"?: ArtQuizResultsTabs_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtQuizResultsTabs_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtQuizResultsTabs_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Quiz",
      "kind": "LinkedField",
      "name": "quiz",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "recommendedArtworks",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArtQuizExploreArtworksFragment_artwork"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "savedArtworks",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArtQuizLikedArtworks_artworks"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArtQuizExploreArtists_artworks"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "6ed525020478ba1a5affd789be71909a";

export default node;
