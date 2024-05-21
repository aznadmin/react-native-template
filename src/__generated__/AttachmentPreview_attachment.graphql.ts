/**
 * @generated SignedSource<<e82f49968d9024cfe6528771a861019d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AttachmentPreview_attachment$data = {
  readonly internalID: string;
  readonly " $fragmentType": "AttachmentPreview_attachment";
};
export type AttachmentPreview_attachment$key = {
  readonly " $data"?: AttachmentPreview_attachment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AttachmentPreview_attachment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AttachmentPreview_attachment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    }
  ],
  "type": "Attachment",
  "abstractKey": null
};

(node as any).hash = "2217887427ab884a634dd15c4f22d057";

export default node;
