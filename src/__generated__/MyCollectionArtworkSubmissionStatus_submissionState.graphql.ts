/**
 * @generated SignedSource<<651b8977039c3b32aba99458e3d00a65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtworkConsignmentSubmissionState = "APPROVED" | "CLOSED" | "DRAFT" | "HOLD" | "PUBLISHED" | "REJECTED" | "SUBMITTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkSubmissionStatus_submissionState$data = {
  readonly consignmentSubmission: {
    readonly state: ArtworkConsignmentSubmissionState;
    readonly stateLabel: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MyCollectionArtworkSubmissionStatus_submissionState";
};
export type MyCollectionArtworkSubmissionStatus_submissionState$key = {
  readonly " $data"?: MyCollectionArtworkSubmissionStatus_submissionState$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkSubmissionStatus_submissionState">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkSubmissionStatus_submissionState",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkConsignmentSubmission",
      "kind": "LinkedField",
      "name": "consignmentSubmission",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "state",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "stateLabel",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "d1279b80f7f8a207291e77ff2d22cb1a";

export default node;
