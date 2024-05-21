/**
 * @generated SignedSource<<83262043838a8701ceb1aa255617a3bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeroUnitsRail_heroUnitsConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly body: string;
      readonly credit: string | null | undefined;
      readonly image: {
        readonly imageURL: string | null | undefined;
      } | null | undefined;
      readonly internalID: string;
      readonly label: string | null | undefined;
      readonly link: {
        readonly text: string;
        readonly url: string;
      };
      readonly title: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "HeroUnitsRail_heroUnitsConnection";
};
export type HeroUnitsRail_heroUnitsConnection$key = {
  readonly " $data"?: HeroUnitsRail_heroUnitsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroUnitsRail_heroUnitsConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroUnitsRail_heroUnitsConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroUnitEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroUnit",
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
              "name": "body",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "credit",
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "imageURL",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "label",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "HeroUnitLink",
              "kind": "LinkedField",
              "name": "link",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "text",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroUnitConnection",
  "abstractKey": null
};

(node as any).hash = "cbd48fb3cd29116301991aab8cee313b";

export default node;
