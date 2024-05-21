/**
 * @generated SignedSource<<ced58fcb11e0c716cd8fbb71e230dd07>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeFeedOnboardingRail_onboardingModule$data = {
  readonly showMyCollectionCard: boolean;
  readonly showSWACard: boolean;
  readonly " $fragmentType": "HomeFeedOnboardingRail_onboardingModule";
};
export type HomeFeedOnboardingRail_onboardingModule$key = {
  readonly " $data"?: HomeFeedOnboardingRail_onboardingModule$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeFeedOnboardingRail_onboardingModule">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeFeedOnboardingRail_onboardingModule",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "showMyCollectionCard",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "showSWACard",
      "storageKey": null
    }
  ],
  "type": "HomePageMyCollectionOnboardingModule",
  "abstractKey": null
};

(node as any).hash = "ba5d471eb006c01c96a54fae96382226";

export default node;
