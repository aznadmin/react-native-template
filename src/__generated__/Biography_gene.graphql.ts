/**
 * @generated SignedSource<<9e51e2510df44bf19b4d8da5c001ff18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Biography_gene$data = {
  readonly description: string | null | undefined;
  readonly " $fragmentType": "Biography_gene";
};
export type Biography_gene$key = {
  readonly " $data"?: Biography_gene$data;
  readonly " $fragmentSpreads": FragmentRefs<"Biography_gene">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Biography_gene",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Gene",
  "abstractKey": null
};

(node as any).hash = "50849d2daf12d006bf14b29f169ebd34";

export default node;
