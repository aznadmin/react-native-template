/**
 * @generated SignedSource<<8f77b1dd338ab149f98ebc0f73985838>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Message_message$data = {
  readonly __typename: "Message";
  readonly attachments: ReadonlyArray<{
    readonly contentType: string;
    readonly downloadURL: string;
    readonly fileName: string;
    readonly id: string;
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"FileDownload_attachment" | "ImagePreview_attachment" | "PDFPreview_attachment">;
  } | null | undefined> | null | undefined;
  readonly body: string | null | undefined;
  readonly createdAt: string | null | undefined;
  readonly from: {
    readonly email: string | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly isFirstMessage: boolean | null | undefined;
  readonly isFromUser: boolean | null | undefined;
  readonly " $fragmentType": "Message_message";
};
export type Message_message$key = {
  readonly " $data"?: Message_message$data;
  readonly " $fragmentSpreads": FragmentRefs<"Message_message">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Message_message",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFromUser",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFirstMessage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MessageInitiator",
      "kind": "LinkedField",
      "name": "from",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Attachment",
      "kind": "LinkedField",
      "name": "attachments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "contentType",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "downloadURL",
          "storageKey": null
        },
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
          "name": "PDFPreview_attachment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImagePreview_attachment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FileDownload_attachment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Message",
  "abstractKey": null
};
})();

(node as any).hash = "382e860df07c71b8b4bea2940a38b882";

export default node;
