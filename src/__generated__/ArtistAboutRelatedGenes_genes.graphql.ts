/**
 * @generated SignedSource<<3545533c297ec565f034ec44a9b50fb7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistAboutRelatedGenes_genes$data = ReadonlyArray<{
  readonly href: string | null | undefined;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "ArtistAboutRelatedGenes_genes";
}>;
export type ArtistAboutRelatedGenes_genes$key = ReadonlyArray<{
  readonly " $data"?: ArtistAboutRelatedGenes_genes$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistAboutRelatedGenes_genes">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArtistAboutRelatedGenes_genes",
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
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Gene",
  "abstractKey": null
};

(node as any).hash = "95e4776c89a845b047905b09f5187059";

export default node;
