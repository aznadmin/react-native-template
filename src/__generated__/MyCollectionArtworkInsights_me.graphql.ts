/**
 * @generated SignedSource<<5ac202b3de013848721e1aea8c96088d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsights_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_me">;
  readonly " $fragmentType": "MyCollectionArtworkInsights_me";
};
export type MyCollectionArtworkInsights_me$key = {
  readonly " $data"?: MyCollectionArtworkInsights_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkInsights_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RequestForPriceEstimateBanner_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "2bbb21b715064c22b7c9a16518dfcf8a";

export default node;
