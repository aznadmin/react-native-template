/**
 * @generated SignedSource<<54d61fb1ae620ea0a9b73e153770385d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_homePageAbove$data = {
  readonly activeBidsArtworkModule: {
    readonly results: ReadonlyArray<{
      readonly id: string;
    } | null | undefined> | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
  } | null | undefined;
  readonly recommendedArtistsArtistModule: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistRail_rail">;
  } | null | undefined;
  readonly salesModule: {
    readonly " $fragmentSpreads": FragmentRefs<"SalesRail_salesModule">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"MarketingCollectionRail_home">;
  readonly " $fragmentType": "Home_homePageAbove";
};
export type Home_homePageAbove$key = {
  readonly " $data"?: Home_homePageAbove$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_homePageAbove">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_homePageAbove",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MarketingCollectionRail_home"
    },
    {
      "alias": "activeBidsArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "ACTIVE_BIDS"
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
      "storageKey": "artworkModule(key:\"ACTIVE_BIDS\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageSalesModule",
      "kind": "LinkedField",
      "name": "salesModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SalesRail_salesModule"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "recommendedArtistsArtistModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "SUGGESTED"
        }
      ],
      "concreteType": "HomePageArtistModule",
      "kind": "LinkedField",
      "name": "artistModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistRail_rail"
        }
      ],
      "storageKey": "artistModule(key:\"SUGGESTED\")"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};

(node as any).hash = "a2eece85efbbff25a4c83b0871cd6c20";

export default node;
