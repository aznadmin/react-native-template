/**
 * @generated SignedSource<<fcf0ff796a29161e71ce5373ca00cbf2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairHeader_fair$data = {
  readonly about: string | null | undefined;
  readonly fairContact: string | null | undefined;
  readonly fairHours: string | null | undefined;
  readonly fairLinks: string | null | undefined;
  readonly fairTickets: string | null | undefined;
  readonly image: {
    readonly aspectRatio: number;
    readonly imageUrl: string | null | undefined;
  } | null | undefined;
  readonly location: {
    readonly coordinates: {
      readonly lat: number | null | undefined;
      readonly lng: number | null | undefined;
    } | null | undefined;
    readonly summary: string | null | undefined;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly profile: {
    readonly icon: {
      readonly imageUrl: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly summary: string | null | undefined;
  readonly tagline: string | null | undefined;
  readonly ticketsLink: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"FairTiming_fair">;
  readonly " $fragmentType": "FairHeader_fair";
};
export type FairHeader_fair$key = {
  readonly " $data"?: FairHeader_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairHeader_fair">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v1 = [
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
  "name": "FairHeader_fair",
  "selections": [
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
              "alias": "imageUrl",
              "args": [
                {
                  "kind": "Literal",
                  "name": "version",
                  "value": "untouched-png"
                }
              ],
              "kind": "ScalarField",
              "name": "url",
              "storageKey": "url(version:\"untouched-png\")"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": "imageUrl",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large_rectangle"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"large_rectangle\")"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "aspectRatio",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
      "concreteType": "Location",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
        }
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
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "hours",
      "storageKey": "hours(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairLinks",
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "links",
      "storageKey": "links(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairTickets",
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "tickets",
      "storageKey": "tickets(format:\"MARKDOWN\")"
    },
    {
      "alias": "fairContact",
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "contact",
      "storageKey": "contact(format:\"MARKDOWN\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairTiming_fair"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};
})();

(node as any).hash = "91bf02827a0c14443bf333ab470c8298";

export default node;
