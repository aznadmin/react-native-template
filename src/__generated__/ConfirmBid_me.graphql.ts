/**
 * @generated SignedSource<<22d548ab46d395aad1c19ceb535f39ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConfirmBid_me$data = {
  readonly bidders: ReadonlyArray<{
    readonly id: string;
  } | null | undefined> | null | undefined;
  readonly has_qualified_credit_cards: boolean | null | undefined;
  readonly " $fragmentType": "ConfirmBid_me";
};
export type ConfirmBid_me$key = {
  readonly " $data"?: ConfirmBid_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConfirmBid_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "saleID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConfirmBid_me",
  "selections": [
    {
      "alias": "has_qualified_credit_cards",
      "args": null,
      "kind": "ScalarField",
      "name": "hasQualifiedCreditCards",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "saleID",
          "variableName": "saleID"
        }
      ],
      "concreteType": "Bidder",
      "kind": "LinkedField",
      "name": "bidders",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "316558546349c6c6cd56a990b045c1e4";

export default node;
