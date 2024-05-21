/**
 * @generated SignedSource<<9188b0a9887e80819e5be8b69cc65137>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AboutWork_artwork$data = {
  readonly additionalInformation: string | null | undefined;
  readonly description: string | null | undefined;
  readonly isInAuction: boolean | null | undefined;
  readonly " $fragmentType": "AboutWork_artwork";
};
export type AboutWork_artwork$key = {
  readonly " $data"?: AboutWork_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"AboutWork_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AboutWork_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "additionalInformation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInAuction",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "a8830f77651f940bbb3923922b01150d";

export default node;
