/**
 * @generated SignedSource<<5bc605d42ba9677b6d6eb181662c76da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestForPriceEstimateBanner_artwork$data = {
  readonly hasPriceEstimateRequest: boolean | null | undefined;
  readonly internalID: string;
  readonly isPriceEstimateRequestable: boolean | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "RequestForPriceEstimateBanner_artwork";
};
export type RequestForPriceEstimateBanner_artwork$key = {
  readonly " $data"?: RequestForPriceEstimateBanner_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestForPriceEstimateBanner_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestForPriceEstimateBanner_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
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
      "name": "hasPriceEstimateRequest",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPriceEstimateRequestable",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "c29b2a957b62c1ef72724d928f5a3bc2";

export default node;
