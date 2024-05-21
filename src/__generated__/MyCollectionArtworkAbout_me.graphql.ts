/**
 * @generated SignedSource<<4378c0294da7f881af4ad7d6dd99433f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkAbout_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_me">;
  readonly " $fragmentType": "MyCollectionArtworkAbout_me";
};
export type MyCollectionArtworkAbout_me$key = {
  readonly " $data"?: MyCollectionArtworkAbout_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkAbout_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkAbout_me",
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

(node as any).hash = "24dc798aa49099750c50472972fd231c";

export default node;
