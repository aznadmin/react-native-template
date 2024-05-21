/**
 * @generated SignedSource<<99efdd0b39982a9bb35fa4c0e0914b27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionInsightsOverview_myCollectionInfo$data = {
  readonly artistsCount: number;
  readonly artworksCount: number;
  readonly " $fragmentType": "MyCollectionInsightsOverview_myCollectionInfo";
};
export type MyCollectionInsightsOverview_myCollectionInfo$key = {
  readonly " $data"?: MyCollectionInsightsOverview_myCollectionInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionInsightsOverview_myCollectionInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionInsightsOverview_myCollectionInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artworksCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistsCount",
      "storageKey": null
    }
  ],
  "type": "MyCollectionInfo",
  "abstractKey": null
};

(node as any).hash = "acb2d1d06b7a1a2652de0847ac86ab99";

export default node;
