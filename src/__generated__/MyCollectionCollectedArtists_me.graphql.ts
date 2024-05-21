/**
 * @generated SignedSource<<57fecda985c7fc452979a85127c08e94>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionCollectedArtists_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtistsRail_me" | "MyCollectionCollectedArtistsView_me">;
  readonly " $fragmentType": "MyCollectionCollectedArtists_me";
};
export type MyCollectionCollectedArtists_me$key = {
  readonly " $data"?: MyCollectionCollectedArtists_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionCollectedArtists_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionCollectedArtists_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionCollectedArtistsView_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionCollectedArtistsRail_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "13f87fb0d538f3fe15e6a224d2941acc";

export default node;
