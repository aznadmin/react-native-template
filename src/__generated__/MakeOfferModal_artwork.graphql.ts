/**
 * @generated SignedSource<<a644ebdaa4a1138680242657581c1665>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MakeOfferModal_artwork$data = {
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"EditionSelectBox_editionSet">;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly isEdition: boolean | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CollapsibleArtworkDetails_artwork" | "InquiryMakeOfferButton_artwork">;
  readonly " $fragmentType": "MakeOfferModal_artwork";
};
export type MakeOfferModal_artwork$key = {
  readonly " $data"?: MakeOfferModal_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MakeOfferModal_artwork">;
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
  "name": "MakeOfferModal_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollapsibleArtworkDetails_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryMakeOfferButton_artwork"
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

(node as any).hash = "a0d5257b47cb1de86b546c1b766b3685";

export default node;
