/**
 * @generated SignedSource<<9b785767f821084780f93d85a32ff143>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MedianAuctionPriceRail_me$data = {
  readonly priceInsightUpdates: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artist: {
          readonly formattedNationalityAndBirthday: string | null | undefined;
          readonly imageUrl: string | null | undefined;
          readonly internalID: string;
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly marketPriceInsights: {
          readonly medianSalePriceDisplayText: string | null | undefined;
        } | null | undefined;
        readonly medium: string | null | undefined;
        readonly mediumType: {
          readonly name: string | null | undefined;
        } | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MedianAuctionPriceRail_me";
};
export type MedianAuctionPriceRail_me$key = {
  readonly " $data"?: MedianAuctionPriceRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MedianAuctionPriceRail_me">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MedianAuctionPriceRail_me",
  "selections": [
    {
      "alias": "priceInsightUpdates",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        },
        {
          "kind": "Literal",
          "name": "sortByLastAuctionResultDate",
          "value": true
        }
      ],
      "concreteType": "MyCollectionConnection",
      "kind": "LinkedField",
      "name": "myCollectionConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MyCollectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "medium",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ArtworkMedium",
                  "kind": "LinkedField",
                  "name": "mediumType",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Artist",
                  "kind": "LinkedField",
                  "name": "artist",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "imageUrl",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "formattedNationalityAndBirthday",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ArtworkPriceInsights",
                  "kind": "LinkedField",
                  "name": "marketPriceInsights",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "medianSalePriceDisplayText",
                      "storageKey": null
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
      "storageKey": "myCollectionConnection(first:3,sortByLastAuctionResultDate:true)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "45f0f57408a8a7f724b61e9800ee8fcc";

export default node;
