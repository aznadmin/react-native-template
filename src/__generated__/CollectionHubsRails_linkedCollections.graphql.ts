/**
 * @generated SignedSource<<2438ae1530611b11c84794acf26a0592>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MarketingCollectionGroupTypeEnum = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CollectionHubsRails_linkedCollections$data = ReadonlyArray<{
  readonly groupType: MarketingCollectionGroupTypeEnum;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtistSeriesRail_collectionGroup" | "FeaturedCollectionsRail_collectionGroup" | "OtherCollectionsRail_collectionGroup">;
  readonly " $fragmentType": "CollectionHubsRails_linkedCollections";
}>;
export type CollectionHubsRails_linkedCollections$key = ReadonlyArray<{
  readonly " $data"?: CollectionHubsRails_linkedCollections$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionHubsRails_linkedCollections">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CollectionHubsRails_linkedCollections",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "groupType",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionArtistSeriesRail_collectionGroup"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OtherCollectionsRail_collectionGroup"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FeaturedCollectionsRail_collectionGroup"
    }
  ],
  "type": "MarketingCollectionGroup",
  "abstractKey": null
};

(node as any).hash = "b1abf030c950a4118c69eb2c9e5e5175";

export default node;
