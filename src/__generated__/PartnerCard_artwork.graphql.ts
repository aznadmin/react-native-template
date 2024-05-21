/**
 * @generated SignedSource<<8794fcca4b6f62befef21bfdd49b15b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerCard_artwork$data = {
  readonly partner: {
    readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly href: string | null | undefined;
    readonly id: string;
    readonly initials: string | null | undefined;
    readonly isDefaultProfilePublic: boolean | null | undefined;
    readonly name: string | null | undefined;
    readonly profile: {
      readonly icon: {
        readonly url: string | null | undefined;
      } | null | undefined;
      readonly id: string;
      readonly internalID: string;
    } | null | undefined;
    readonly slug: string;
    readonly type: string | null | undefined;
  } | null | undefined;
  readonly sale: {
    readonly isBenefit: boolean | null | undefined;
    readonly isGalleryAuction: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"Questions_artwork" | "ShortContactGallery_artwork">;
  readonly " $fragmentType": "PartnerCard_artwork";
};
export type PartnerCard_artwork$key = {
  readonly " $data"?: PartnerCard_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerCard_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerCard_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Questions_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShortContactGallery_artwork"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isBenefit",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isGalleryAuction",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDefaultProfilePublic",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        (v0/*: any*/),
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
          "name": "initials",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "profile",
          "plural": false,
          "selections": [
            (v0/*: any*/),
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
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "icon",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "square140"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": "url(version:\"square140\")"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "dbd3ed80aa5823ff14e9c0a0f4f97c4b";

export default node;
