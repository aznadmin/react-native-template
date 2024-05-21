/**
 * @generated SignedSource<<c2a668095e531413269e8a5e44b9b77f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightsRail_me$data = {
  readonly myCollectionInfo: {
    readonly artistInsightsCount: {
      readonly BIENNIAL: number;
      readonly COLLECTED: number;
      readonly GROUP_SHOW: number;
      readonly REVIEWED: number;
      readonly SOLO_SHOW: number;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "CareerHighlightsRail_me";
};
export type CareerHighlightsRail_me$key = {
  readonly " $data"?: CareerHighlightsRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightsRail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CareerHighlightsRail_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MyCollectionInfo",
      "kind": "LinkedField",
      "name": "myCollectionInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistInsightsCount",
          "kind": "LinkedField",
          "name": "artistInsightsCount",
          "plural": false,
          "selections": [
            {
              "alias": "BIENNIAL",
              "args": null,
              "kind": "ScalarField",
              "name": "biennialCount",
              "storageKey": null
            },
            {
              "alias": "COLLECTED",
              "args": null,
              "kind": "ScalarField",
              "name": "collectedCount",
              "storageKey": null
            },
            {
              "alias": "GROUP_SHOW",
              "args": null,
              "kind": "ScalarField",
              "name": "groupShowCount",
              "storageKey": null
            },
            {
              "alias": "SOLO_SHOW",
              "args": null,
              "kind": "ScalarField",
              "name": "soloShowCount",
              "storageKey": null
            },
            {
              "alias": "REVIEWED",
              "args": null,
              "kind": "ScalarField",
              "name": "reviewedCount",
              "storageKey": null
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

(node as any).hash = "4a5abe239376c225a13c239239fb6c8c";

export default node;
