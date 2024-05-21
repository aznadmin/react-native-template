/**
 * @generated SignedSource<<b533937ce66a9b40e2faf9025c7063df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPriceRange_me$data = {
  readonly priceRange: string | null | undefined;
  readonly priceRangeMax: number | null | undefined;
  readonly priceRangeMin: number | null | undefined;
  readonly " $fragmentType": "MyAccountEditPriceRange_me";
};
export type MyAccountEditPriceRange_me$key = {
  readonly " $data"?: MyAccountEditPriceRange_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPriceRange_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountEditPriceRange_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRange",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRangeMin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRangeMax",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "15200684227dbb090d37ef57bdfd7418";

export default node;
