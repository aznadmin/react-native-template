/**
 * @generated SignedSource<<f236641e25ada61688a1b8333b148a08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeatureHeader_feature$data = {
  readonly image: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly name: string;
  readonly subheadline: string | null | undefined;
  readonly " $fragmentType": "FeatureHeader_feature";
};
export type FeatureHeader_feature$key = {
  readonly " $data"?: FeatureHeader_feature$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeatureHeader_feature">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeatureHeader_feature",
  "selections": [
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
      "name": "subheadline",
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
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "source"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"source\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Feature",
  "abstractKey": null
};

(node as any).hash = "954e997b8f74ab448312d969a47d54d6";

export default node;
