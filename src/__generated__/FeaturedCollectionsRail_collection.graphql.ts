/**
 * @generated SignedSource<<3919e3534b9ffb2666bac93ae818b2c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsRail_collection$data = {
  readonly id: string;
  readonly slug: string;
  readonly " $fragmentType": "FeaturedCollectionsRail_collection";
};
export type FeaturedCollectionsRail_collection$key = {
  readonly " $data"?: FeaturedCollectionsRail_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsRail_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "b3b81460378ae369b7fc090f6e961471";

export default node;
