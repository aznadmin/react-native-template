/**
 * @generated SignedSource<<dc352b77f9e6053e9c74af6ab8c69994>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PurchaseModal_artwork$data = {
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"EditionSelectBox_editionSet">;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly isEdition: boolean | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CollapsibleArtworkDetails_artwork" | "InquiryPurchaseButton_artwork">;
  readonly " $fragmentType": "PurchaseModal_artwork";
};
export type PurchaseModal_artwork$key = {
  readonly " $data"?: PurchaseModal_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"PurchaseModal_artwork">;
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
  "name": "PurchaseModal_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollapsibleArtworkDetails_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryPurchaseButton_artwork"
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEdition",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EditionSelectBox_editionSet"
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "b843c05aafbe56a0c6bee7498942f7df";

export default node;
