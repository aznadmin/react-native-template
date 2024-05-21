/**
 * @generated SignedSource<<6d21f3e2af2b78f7ed8ec0de39651295>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerEntityHeader_partner$data = {
  readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly href: string | null | undefined;
  readonly initials: string | null | undefined;
  readonly isDefaultProfilePublic: boolean | null | undefined;
  readonly name: string | null | undefined;
  readonly profile: {
    readonly icon: {
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerFollowButton_partner">;
  readonly " $fragmentType": "PartnerEntityHeader_partner";
};
export type PartnerEntityHeader_partner$key = {
  readonly " $data"?: PartnerEntityHeader_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerEntityHeader_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerEntityHeader_partner",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerFollowButton_partner"
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
    },
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
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "5239c02e35841cdf49573a76b9a13b78";

export default node;
