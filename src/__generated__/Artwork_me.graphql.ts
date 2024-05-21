/**
 * @generated SignedSource<<4c74e85acceac48d1c4fa11d928f56a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Artwork_me$data = {
  readonly partnerOffersConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkPartnerOfferNote_partnerOffer" | "ArtworkPrice_partnerOffer" | "ArtworkStickyBottomContent_partnerOffer">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkStickyBottomContent_me">;
  readonly " $fragmentType": "Artwork_me";
};
export type Artwork_me$key = {
  readonly " $data"?: Artwork_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Artwork_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "artworkID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artwork_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkStickyBottomContent_me"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "artworkID",
          "variableName": "artworkID"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "PartnerOfferToCollectorConnection",
      "kind": "LinkedField",
      "name": "partnerOffersConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PartnerOfferToCollectorEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PartnerOfferToCollector",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArtworkStickyBottomContent_partnerOffer"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArtworkPartnerOfferNote_partnerOffer"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArtworkPrice_partnerOffer"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "63aecbd498acbb027b1ed5f1e0d38579";

export default node;
