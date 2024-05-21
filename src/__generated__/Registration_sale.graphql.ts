/**
 * @generated SignedSource<<3953165509b40f4eddd4f63c4cd22119>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Registration_sale$data = {
  readonly endAt: string | null | undefined;
  readonly isPreview: boolean | null | undefined;
  readonly liveStartAt: string | null | undefined;
  readonly name: string | null | undefined;
  readonly requireIdentityVerification: boolean | null | undefined;
  readonly slug: string;
  readonly startAt: string | null | undefined;
  readonly timeZone: string | null | undefined;
  readonly " $fragmentType": "Registration_sale";
};
export type Registration_sale$key = {
  readonly " $data"?: Registration_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"Registration_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Registration_sale",
  "selections": [
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
      "name": "endAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPreview",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveStartAt",
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
      "name": "startAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "requireIdentityVerification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "timeZone",
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "20de34834fc33fa39e91d0e3ec8be30d";

export default node;
