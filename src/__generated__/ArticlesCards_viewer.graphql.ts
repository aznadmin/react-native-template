/**
 * @generated SignedSource<<cbf489fc266abcee930c816d7a8b9957>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticlesCards_viewer$data = {
  readonly articles: ReadonlyArray<{
    readonly href: string | null | undefined;
    readonly internalID: string;
    readonly title: string | null | undefined;
  }>;
  readonly " $fragmentType": "ArticlesCards_viewer";
};
export type ArticlesCards_viewer$key = {
  readonly " $data"?: ArticlesCards_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticlesCards_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticlesCards_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "layout",
          "value": "NEWS"
        },
        {
          "kind": "Literal",
          "name": "limit",
          "value": 3
        },
        {
          "kind": "Literal",
          "name": "published",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "PUBLISHED_AT_DESC"
        }
      ],
      "concreteType": "Article",
      "kind": "LinkedField",
      "name": "articles",
      "plural": true,
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
          "name": "title",
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
      "storageKey": "articles(layout:\"NEWS\",limit:3,published:true,sort:\"PUBLISHED_AT_DESC\")"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "766cf71d8a3844983c33744030271eca";

export default node;
