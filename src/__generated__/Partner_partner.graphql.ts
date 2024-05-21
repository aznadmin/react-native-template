/**
 * @generated SignedSource<<3997bc692ae6ea6eb0cac66364d0dee1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Partner_partner$data = {
  readonly displayFullPartnerPage: boolean | null | undefined;
  readonly id: string;
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly partnerType: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerArtwork_partner" | "PartnerHeader_partner" | "PartnerOverview_partner" | "PartnerShows_partner" | "PartnerSubscriberBanner_partner">;
  readonly " $fragmentType": "Partner_partner";
};
export type Partner_partner$key = {
  readonly " $data"?: Partner_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"Partner_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "displayArtistsSection"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Partner_partner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "partnerType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayFullPartnerPage",
      "storageKey": null
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "-partner_updated_at"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "PartnerArtwork_partner"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "displayArtistsSection",
          "variableName": "displayArtistsSection"
        }
      ],
      "kind": "FragmentSpread",
      "name": "PartnerOverview_partner"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerShows_partner"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerHeader_partner"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerSubscriberBanner_partner"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "57bf4964b401445dda1e3df78042e102";

export default node;
