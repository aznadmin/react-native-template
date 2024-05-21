/**
 * @generated SignedSource<<656f97566ced874efa923d97b7bd2f61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotEndDateTime_artwork$data = {
  readonly sale: {
    readonly endAt: string | null | undefined;
  } | null | undefined;
  readonly saleArtwork: {
    readonly endAt: string | null | undefined;
    readonly extendedBiddingEndAt: string | null | undefined;
    readonly lotID: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "LotEndDateTime_artwork";
};
export type LotEndDateTime_artwork$key = {
  readonly " $data"?: LotEndDateTime_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotEndDateTime_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LotEndDateTime_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lotID",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "extendedBiddingEndAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "c541429f5b2aef3d77f9e33fde9f5bf6";

export default node;
