/**
 * @generated SignedSource<<3bea62499ddbd280111a49b03d31d83d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateArtworkExclusiveAccess_artwork$data = {
  readonly additionalInformation: string | null | undefined;
  readonly isUnlisted: boolean;
  readonly partner: {
    readonly name: string | null | undefined;
    readonly profile: {
      readonly isPubliclyVisible: boolean | null | undefined;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined;
  readonly " $fragmentType": "PrivateArtworkExclusiveAccess_artwork";
};
export type PrivateArtworkExclusiveAccess_artwork$key = {
  readonly " $data"?: PrivateArtworkExclusiveAccess_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrivateArtworkExclusiveAccess_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrivateArtworkExclusiveAccess_artwork",
  "selections": [
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
          "name": "name",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isPubliclyVisible",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isUnlisted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "additionalInformation",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "e0b2ad3de606775135aed4067023d69a";

export default node;
