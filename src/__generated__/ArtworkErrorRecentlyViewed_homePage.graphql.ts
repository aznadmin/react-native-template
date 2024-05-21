/**
 * @generated SignedSource<<036a08fd03272c9d325a241c59e34488>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkErrorRecentlyViewed_homePage$data = {
  readonly recentlyViewed: {
    readonly results: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkErrorRecentlyViewed_homePage";
};
export type ArtworkErrorRecentlyViewed_homePage$key = {
  readonly " $data"?: ArtworkErrorRecentlyViewed_homePage$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkErrorRecentlyViewed_homePage">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkErrorRecentlyViewed_homePage",
  "selections": [
    {
      "alias": "recentlyViewed",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "RECENTLY_VIEWED_WORKS"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Artwork",
          "kind": "LinkedField",
          "name": "results",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtworkModuleRail_rail"
        }
      ],
      "storageKey": "artworkModule(key:\"RECENTLY_VIEWED_WORKS\")"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};

(node as any).hash = "5b9c0b4029fdb72bd0071e9fdbbd6b85";

export default node;
