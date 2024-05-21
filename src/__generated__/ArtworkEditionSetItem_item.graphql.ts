/**
 * @generated SignedSource<<c552437e032610f851fe409c7a927d3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkEditionSetItem_item$data = {
  readonly dimensions: {
    readonly cm: string | null | undefined;
    readonly in: string | null | undefined;
  } | null | undefined;
  readonly editionOf: string | null | undefined;
  readonly internalID: string;
  readonly saleMessage: string | null | undefined;
  readonly " $fragmentType": "ArtworkEditionSetItem_item";
};
export type ArtworkEditionSetItem_item$key = {
  readonly " $data"?: ArtworkEditionSetItem_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkEditionSetItem_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkEditionSetItem_item",
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
      "name": "saleMessage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "editionOf",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "dimensions",
      "kind": "LinkedField",
      "name": "dimensions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "in",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cm",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EditionSet",
  "abstractKey": null
};

(node as any).hash = "b79c7b1b028c74d87609ac38f0da6341";

export default node;
