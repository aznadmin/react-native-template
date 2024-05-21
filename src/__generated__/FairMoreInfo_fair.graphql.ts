/**
 * @generated SignedSource<<34ee3b9576d09332066d4483111c8acd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairMoreInfo_fair$data = {
  readonly about: string | null | undefined;
  readonly fairContact: string | null | undefined;
  readonly fairHours: string | null | undefined;
  readonly fairLinks: string | null | undefined;
  readonly fairTickets: string | null | undefined;
  readonly internalID: string;
  readonly location: {
    readonly coordinates: {
      readonly lat: number | null | undefined;
      readonly lng: number | null | undefined;
    } | null | undefined;
    readonly summary: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"LocationMap_location">;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly profile: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly summary: string | null | undefined;
  readonly tagline: string | null | undefined;
  readonly ticketsLink: string | null | undefined;
  readonly " $fragmentType": "FairMoreInfo_fair";
};
export type FairMoreInfo_fair$key = {
  readonly " $data"?: FairMoreInfo_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairMoreInfo_fair">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MARKDOWN"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairMoreInfo_fair",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "about",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tagline",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Location",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LocationMap_location"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "LatLng",
          "kind": "LinkedField",
          "name": "coordinates",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lat",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lng",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ticketsLink",
      "storageKey": null
    },
    {
      "alias": "fairHours",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "hours",
      "storageKey": "hours(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairLinks",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "links",
      "storageKey": "links(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairTickets",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "tickets",
      "storageKey": "tickets(format:\"MARKDOWN\")"
    },
    (v1/*: any*/),
    {
      "alias": "fairContact",
      "args": (v2/*: any*/),
      "kind": "ScalarField",
      "name": "contact",
      "storageKey": "contact(format:\"MARKDOWN\")"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};
})();

(node as any).hash = "525cb15b6b5387d9098215a4d4aa25aa";

export default node;
