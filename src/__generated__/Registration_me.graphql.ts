/**
 * @generated SignedSource<<b0e3e52acba4f046c857517081f54a30>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Registration_me$data = {
  readonly hasCreditCards: boolean | null | undefined;
  readonly isIdentityVerified: boolean | null | undefined;
  readonly phoneNumber: {
    readonly display: string | null | undefined;
    readonly isValid: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "Registration_me";
};
export type Registration_me$key = {
  readonly " $data"?: Registration_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Registration_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Registration_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasCreditCards",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isIdentityVerified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PhoneNumberType",
      "kind": "LinkedField",
      "name": "phoneNumber",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isValid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "format",
              "value": "E164"
            }
          ],
          "kind": "ScalarField",
          "name": "display",
          "storageKey": "display(format:\"E164\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "c9e0975e5913a1ef4f73c5447b38398f";

export default node;
