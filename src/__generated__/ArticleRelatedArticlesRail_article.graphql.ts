/**
 * @generated SignedSource<<cbbd3b6564ffe82ab295fba64ce6285c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleRelatedArticlesRail_article$data = {
  readonly internalID: string;
  readonly relatedArticles: ReadonlyArray<{
    readonly internalID: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArticleCard_article">;
  }>;
  readonly slug: string | null | undefined;
  readonly " $fragmentType": "ArticleRelatedArticlesRail_article";
};
export type ArticleRelatedArticlesRail_article$key = {
  readonly " $data"?: ArticleRelatedArticlesRail_article$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleRelatedArticlesRail_article">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleRelatedArticlesRail_article",
  "selections": [
    (v0/*: any*/),
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
      "concreteType": "Article",
      "kind": "LinkedField",
      "name": "relatedArticles",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleCard_article"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Article",
  "abstractKey": null
};
})();

(node as any).hash = "41b7d4352a2259438123a226a01f82d4";

export default node;
