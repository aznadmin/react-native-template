/**
 * @generated SignedSource<<6b7dfb49baa22cbb1df05e3e80a34e89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketingCollectionHeaderFragment_marketingCollection$data = {
  readonly title: string;
  readonly " $fragmentType": "MarketingCollectionHeaderFragment_marketingCollection";
};
export type MarketingCollectionHeaderFragment_marketingCollection$key = {
  readonly " $data"?: MarketingCollectionHeaderFragment_marketingCollection$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarketingCollectionHeaderFragment_marketingCollection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarketingCollectionHeaderFragment_marketingCollection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "dfba1743697281089bb273ec800cac84";

export default node;
