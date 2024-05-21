/**
 * @generated SignedSource<<e2f0219f5923edf8eeac4098002ff617>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AuthenticationProvider = "APPLE" | "FACEBOOK" | "GOOGLE" | "%future added value";
export type SecondFactorKind = "app" | "backup" | "sms" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MyAccount_me$data = {
  readonly authentications: ReadonlyArray<{
    readonly provider: AuthenticationProvider;
  }>;
  readonly email: string | null | undefined;
  readonly hasPassword: boolean;
  readonly paddleNumber: string | null | undefined;
  readonly phone: string | null | undefined;
  readonly priceRange: string | null | undefined;
  readonly priceRangeMax: number | null | undefined;
  readonly priceRangeMin: number | null | undefined;
  readonly secondFactors: ReadonlyArray<{
    readonly kind: SecondFactorKind;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "MyAccount_me";
};
export type MyAccount_me$key = {
  readonly " $data"?: MyAccount_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccount_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "paddleNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPassword",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRange",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRangeMax",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRangeMin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AuthenticationType",
      "kind": "LinkedField",
      "name": "authentications",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "provider",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "kinds",
          "value": [
            "sms",
            "app",
            "backup"
          ]
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "secondFactors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "kind",
          "storageKey": null
        }
      ],
      "storageKey": "secondFactors(kinds:[\"sms\",\"app\",\"backup\"])"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "dd5e5a79046f42473353f40626f63953";

export default node;
