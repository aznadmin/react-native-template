/**
 * @generated SignedSource<<42eb0c37ab6ed9b9500dcbaefc11c155>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomsListFeatured_featured$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly distanceToClose: string | null | undefined;
      readonly distanceToOpen: string | null | undefined;
      readonly heroImage: {
        readonly imageURLs: {
          readonly normalized: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
      readonly internalID: string;
      readonly partner: {
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly slug: string;
      readonly status: string;
      readonly title: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ViewingRoomsListFeatured_featured";
};
export type ViewingRoomsListFeatured_featured$key = {
  readonly " $data"?: ViewingRoomsListFeatured_featured$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomsListFeatured_featured">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomsListFeatured_featured",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ViewingRoomEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ViewingRoom",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
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
              "alias": "heroImage",
              "args": null,
              "concreteType": "ARImage",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ImageURLs",
                  "kind": "LinkedField",
                  "name": "imageURLs",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "normalized",
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
              "name": "status",
              "storageKey": null
            },
            {
              "alias": null,
              "args": (v0/*: any*/),
              "kind": "ScalarField",
              "name": "distanceToOpen",
              "storageKey": "distanceToOpen(short:true)"
            },
            {
              "alias": null,
              "args": (v0/*: any*/),
              "kind": "ScalarField",
              "name": "distanceToClose",
              "storageKey": "distanceToClose(short:true)"
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Partner",
              "kind": "LinkedField",
              "name": "partner",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
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
  "type": "ViewingRoomConnection",
  "abstractKey": null
};
})();

(node as any).hash = "407f03ebb8127d9fc8569fa071f99fa7";

export default node;
