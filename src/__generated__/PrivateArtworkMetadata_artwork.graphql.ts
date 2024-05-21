/**
 * @generated SignedSource<<20faa31fe186d26d4ba0daec67b9b3e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateArtworkMetadata_artwork$data = {
  readonly conditionDescription: {
    readonly details: string | null | undefined;
  } | null | undefined;
  readonly privateExhibitionHistory: string | null | undefined;
  readonly privateProvenance: string | null | undefined;
  readonly " $fragmentType": "PrivateArtworkMetadata_artwork";
};
export type PrivateArtworkMetadata_artwork$key = {
  readonly " $data"?: PrivateArtworkMetadata_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrivateArtworkMetadata_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrivateArtworkMetadata_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtworkInfoRow",
      "kind": "LinkedField",
      "name": "conditionDescription",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "details",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "privateProvenance",
      "args": (v0/*: any*/),
      "kind": "ScalarField",
      "name": "provenance",
      "storageKey": "provenance(format:\"HTML\")"
    },
    {
      "alias": "privateExhibitionHistory",
      "args": (v0/*: any*/),
      "kind": "ScalarField",
      "name": "exhibitionHistory",
      "storageKey": "exhibitionHistory(format:\"HTML\")"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "4257a4ab42374a5b24dc1e464556dbbf";

export default node;
