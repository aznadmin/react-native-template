/**
 * @generated SignedSource<<18f3a4d8cbfdd97640bcefa87ec9610b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CuratedCollections_collections$data = {
  readonly collections: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"CuratedCollectionItem_collection">;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "CuratedCollections_collections";
};
export type CuratedCollections_collections$key = {
  readonly " $data"?: CuratedCollections_collections$data;
  readonly " $fragmentSpreads": FragmentRefs<"CuratedCollections_collections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CuratedCollections_collections",
  "selections": [
    {
      "alias": "collections",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 5
        }
      ],
      "concreteType": "MarketingCollection",
      "kind": "LinkedField",
      "name": "curatedMarketingCollections",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CuratedCollectionItem_collection"
        }
      ],
      "storageKey": "curatedMarketingCollections(size:5)"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "8ffa034a33cdf557b17e2369a7add0c5";

export default node;
