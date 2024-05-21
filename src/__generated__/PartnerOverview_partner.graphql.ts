/**
 * @generated SignedSource<<30249d14ba3dde85f008c089ba18d8be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerOverview_partner$data = {
  readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly displayArtistsSection: boolean | null | undefined;
  readonly profile: {
    readonly bio: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerArtistsList_partner" | "PartnerLocationSection_partner">;
  readonly " $fragmentType": "PartnerOverview_partner";
};
export type PartnerOverview_partner$key = {
  readonly " $data"?: PartnerOverview_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerOverview_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "displayArtistsSection"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerOverview_partner",
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
      "name": "displayArtistsSection",
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
          "name": "bio",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerLocationSection_partner"
    },
    {
      "condition": "displayArtistsSection",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PartnerArtistsList_partner"
        }
      ]
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "be24477ada756fe5c187a4813648dfea";

export default node;
