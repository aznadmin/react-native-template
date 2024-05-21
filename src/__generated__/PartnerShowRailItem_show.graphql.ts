/**
 * @generated SignedSource<<c79c6c2d69d5be757c6d0d20a9805978>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerShowRailItem_show$data = {
  readonly coverImage: {
    readonly blurhash: string | null | undefined;
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly endAt: string | null | undefined;
  readonly exhibitionPeriod: string | null | undefined;
  readonly images: ReadonlyArray<{
    readonly url: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "PartnerShowRailItem_show";
};
export type PartnerShowRailItem_show$key = {
  readonly " $data"?: PartnerShowRailItem_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerShowRailItem_show">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerShowRailItem_show",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "SHORT"
        }
      ],
      "kind": "ScalarField",
      "name": "exhibitionPeriod",
      "storageKey": "exhibitionPeriod(format:\"SHORT\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "coverImage",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blurhash",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};
})();

(node as any).hash = "84e2f7e4ad4610c3ebd9fac5e36bd64b";

export default node;
