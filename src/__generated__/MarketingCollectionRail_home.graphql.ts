/**
 * @generated SignedSource<<383056906fb4ef0af9e09ffe2a37176c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketingCollectionRail_home$data = {
  readonly heroUnits: ReadonlyArray<{
    readonly backgroundImageURL: string | null | undefined;
    readonly slug: string;
    readonly subtitle: string | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "MarketingCollectionRail_home";
};
export type MarketingCollectionRail_home$key = {
  readonly " $data"?: MarketingCollectionRail_home$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarketingCollectionRail_home">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "heroImageVersion"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarketingCollectionRail_home",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "platform",
          "value": "MOBILE"
        }
      ],
      "concreteType": "HomePageHeroUnit",
      "kind": "LinkedField",
      "name": "heroUnits",
      "plural": true,
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
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "subtitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "version",
              "variableName": "heroImageVersion"
            }
          ],
          "kind": "ScalarField",
          "name": "backgroundImageURL",
          "storageKey": null
        }
      ],
      "storageKey": "heroUnits(platform:\"MOBILE\")"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};

(node as any).hash = "2ea659d047d24544de43716550245ef6";

export default node;
