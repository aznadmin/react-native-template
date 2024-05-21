/**
 * @generated SignedSource<<f45bd6abf3df94cee745151efcd93dc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowCard_show$data = {
  readonly city: string | null | undefined;
  readonly formattedEndAt: string | null | undefined;
  readonly formattedStartAt: string | null | undefined;
  readonly href: string | null | undefined;
  readonly metaImage: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly partner: {
    readonly cities?: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly city?: string | null | undefined;
    readonly name?: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ShowCard_show";
};
export type ShowCard_show$key = {
  readonly " $data"?: ShowCard_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowCard_show">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowCard_show",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "formattedStartAt",
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": "startAt(format:\"MMM D\")"
    },
    {
      "alias": "formattedEndAt",
      "args": (v1/*: any*/),
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": "endAt(format:\"MMM D\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "metaImage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "small"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"small\")"
        }
      ],
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cities",
              "storageKey": null
            }
          ],
          "type": "Partner",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v2/*: any*/)
          ],
          "type": "ExternalPartner",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};
})();

(node as any).hash = "fa1540390676dd2397d69a23604aa57c";

export default node;
