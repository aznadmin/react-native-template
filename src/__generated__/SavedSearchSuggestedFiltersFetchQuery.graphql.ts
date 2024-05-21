/**
 * @generated SignedSource<<44772cfac9bf231291f15b771918c31f>>
 * @relayHash 7499f650fdd34281f0d736bbed3b3e5e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7499f650fdd34281f0d736bbed3b3e5e

import { ConcreteRequest, Query } from 'relay-runtime';
export type AlertSourceType = "ARTIST" | "ARTWORK" | "%future added value";
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
export type AlertSource = {
  id?: string | null | undefined;
  type?: AlertSourceType | null | undefined;
};
export type SavedSearchSuggestedFiltersFetchQuery$variables = {
  attributes: PreviewSavedSearchAttributes;
  source?: AlertSource | null | undefined;
};
export type SavedSearchSuggestedFiltersFetchQuery$data = {
  readonly previewSavedSearch: {
    readonly suggestedFilters: ReadonlyArray<{
      readonly displayValue: string;
      readonly field: string;
      readonly name: string;
      readonly value: string;
    }>;
  } | null | undefined;
};
export type SavedSearchSuggestedFiltersFetchQuery = {
  response: SavedSearchSuggestedFiltersFetchQuery$data;
  variables: SavedSearchSuggestedFiltersFetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "attributes"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "source"
  }
],
v1 = [
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
        "args": [
          {
            "kind": "Variable",
            "name": "source",
            "variableName": "source"
          }
        ],
        "concreteType": "SearchCriteriaLabel",
        "kind": "LinkedField",
        "name": "suggestedFilters",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayValue",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "field",
            "storageKey": null
          },
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
            "name": "value",
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
    "name": "SavedSearchSuggestedFiltersFetchQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SavedSearchSuggestedFiltersFetchQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "7499f650fdd34281f0d736bbed3b3e5e",
    "metadata": {},
    "name": "SavedSearchSuggestedFiltersFetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "64983c12af34f85da5d5c2748681d156";

export default node;
