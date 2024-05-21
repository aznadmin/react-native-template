/**
 * @generated SignedSource<<1637471be153a5678c8570b9fa99b29d>>
 * @relayHash a99301eb498cbee69a4e9773f8e2fb07
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a99301eb498cbee69a4e9773f8e2fb07

import { ConcreteRequest, Query } from 'relay-runtime';
export type ArtworkSizes = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
export type PreviewSavedSearchAttributes = {
  acquireable?: boolean | null | undefined;
  additionalGeneIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  artistIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  artistSeriesIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  atAuction?: boolean | null | undefined;
  attributionClass?: ReadonlyArray<string | null | undefined> | null | undefined;
  colors?: ReadonlyArray<string | null | undefined> | null | undefined;
  height?: string | null | undefined;
  inquireableOnly?: boolean | null | undefined;
  locationCities?: ReadonlyArray<string | null | undefined> | null | undefined;
  majorPeriods?: ReadonlyArray<string | null | undefined> | null | undefined;
  materialsTerms?: ReadonlyArray<string | null | undefined> | null | undefined;
  offerable?: boolean | null | undefined;
  partnerIDs?: ReadonlyArray<string | null | undefined> | null | undefined;
  priceRange?: string | null | undefined;
  sizes?: ReadonlyArray<ArtworkSizes | null | undefined> | null | undefined;
  width?: string | null | undefined;
};
export type useSavedSearchPillsPreviewQuery$variables = {
  attributes?: PreviewSavedSearchAttributes | null | undefined;
};
export type useSavedSearchPillsPreviewQuery$data = {
  readonly viewer: {
    readonly previewSavedSearch: {
      readonly labels: ReadonlyArray<{
        readonly label: string;
        readonly paramName: string;
        readonly value: string;
      } | null | undefined>;
    } | null | undefined;
  } | null | undefined;
};
export type useSavedSearchPillsPreviewQuery = {
  response: useSavedSearchPillsPreviewQuery$data;
  variables: useSavedSearchPillsPreviewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "attributes"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "attributes",
            "variableName": "attributes"
          }
        ],
        "concreteType": "PreviewSavedSearch",
        "kind": "LinkedField",
        "name": "previewSavedSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchCriteriaLabel",
            "kind": "LinkedField",
            "name": "labels",
            "plural": true,
            "selections": [
              {
                "alias": "label",
                "args": null,
                "kind": "ScalarField",
                "name": "displayValue",
                "storageKey": null
              },
              {
                "alias": "paramName",
                "args": null,
                "kind": "ScalarField",
                "name": "field",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSavedSearchPillsPreviewQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSavedSearchPillsPreviewQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "a99301eb498cbee69a4e9773f8e2fb07",
    "metadata": {},
    "name": "useSavedSearchPillsPreviewQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "06ba57799c6bb6130aeeb7ec418ef371";

export default node;
