/**
 * @generated SignedSource<<ca58ba05638430aae5c9fd467a9006b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidButton_me$data = {
  readonly isIdentityVerified: boolean | null | undefined;
  readonly " $fragmentType": "BidButton_me";
};
export type BidButton_me$key = {
  readonly " $data"?: BidButton_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidButton_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isIdentityVerified",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "7e96561522c1dfea4a65648a38c58c77";

export default node;
