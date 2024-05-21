/**
 * @generated SignedSource<<3e5e5a523aff0e70ff3f3f62730ff2bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionResult_artist$data = {
  readonly href: string | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "AuctionResult_artist";
};
export type AuctionResult_artist$key = {
  readonly " $data"?: AuctionResult_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionResult_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionResult_artist",
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
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "f2a07c4ce7b44bdd92014699d24fe46f";

export default node;
