/**
 * @generated SignedSource<<f9a805552742c265c39dc641bb9b1f97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_heroUnits$data = {
  readonly heroUnitsConnection: {
    readonly totalCount: number | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"HeroUnitsRail_heroUnitsConnection">;
  } | null | undefined;
  readonly " $fragmentType": "Home_heroUnits";
};
export type Home_heroUnits$key = {
  readonly " $data"?: Home_heroUnits$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_heroUnits">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_heroUnits",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "private",
          "value": false
        }
      ],
      "concreteType": "HeroUnitConnection",
      "kind": "LinkedField",
      "name": "heroUnitsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroUnitsRail_heroUnitsConnection"
        }
      ],
      "storageKey": "heroUnitsConnection(first:10,private:false)"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "e248cb6e688a1d675633e86e412b02bd";

export default node;
