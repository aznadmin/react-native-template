/**
 * @generated SignedSource<<2d4949a1fe3d06f76b690533926ae424>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PDFPreview_attachment$data = {
  readonly fileName: string;
  readonly " $fragmentSpreads": FragmentRefs<"AttachmentPreview_attachment">;
  readonly " $fragmentType": "PDFPreview_attachment";
};
export type PDFPreview_attachment$key = {
  readonly " $data"?: PDFPreview_attachment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PDFPreview_attachment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PDFPreview_attachment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileName",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AttachmentPreview_attachment"
    }
  ],
  "type": "Attachment",
  "abstractKey": null
};

(node as any).hash = "807f52ff34b3d5fea81b65e141c22b0b";

export default node;
