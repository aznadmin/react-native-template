/**
 * @generated SignedSource<<f7d04957088625418a0de1c57c48e76a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleListItem_sale$data = {
  readonly coverImage: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly formattedStartDateTime: string | null | undefined;
  readonly href: string | null | undefined;
  readonly liveURLIfOpen: string | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "SaleListItem_sale";
};
export type SaleListItem_sale$key = {
  readonly " $data"?: SaleListItem_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleListItem_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleListItem_sale",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveURLIfOpen",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "formattedStartDateTime",
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
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"large\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "2763dcfb6511706936f87f35ed6c52bb";

export default node;
