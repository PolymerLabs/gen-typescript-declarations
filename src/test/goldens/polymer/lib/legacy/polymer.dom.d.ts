/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/legacy/polymer.dom.html
 */

/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/settings.d.ts" />
/// <reference path="../utils/flattened-nodes-observer.d.ts" />
/// <reference path="../utils/flush.d.ts" />

declare namespace Polymer {

  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   */
  namespace dom {


    /**
     * Cross-platform `element.matches` shim.
     *
     * @returns True if node matched selector
     */
    function matchesSelector(node: Node, selector: string): boolean;
  }

  /**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   */
  class DomApi {

    /**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     */
    readonly activeElement: Node|null|undefined;

    /**
     * Returns an instance of `Polymer.FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param callback Called when direct or distributed children
     *   of this element changes
     * @returns Observer instance
     */
    observeNodes(callback: Function|null): Polymer.FlattenedNodesObserver|null;

    /**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param observerHandle Observer instance
     *   to disconnect.
     */
    unobserveNodes(observerHandle: Polymer.FlattenedNodesObserver|null): void;

    /**
     * Provided as a backwards-compatible API only.  This method does nothing.
     */
    notifyObserver(): void;

    /**
     * Returns true if the provided node is contained with this element's
     * light-DOM children or shadow root, including any nested shadow roots
     * of children therein.
     *
     * @param node Node to test
     * @returns Returns true if the given `node` is contained within
     *   this element's light or shadow DOM.
     */
    deepContains(node: Node|null): boolean;

    /**
     * Returns the root node of this node.  Equivalent to `getRoodNode()`.
     *
     * @returns Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */
    getOwnerRoot(): Node|null;

    /**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @returns Array of assigned nodes
     */
    getDistributedNodes(): Array<Node|null>|null;

    /**
     * Returns an array of all slots this element was distributed to.
     *
     * @returns Description
     */
    getDestinationInsertionPoints(): Array<HTMLSlotElement|null>|null;

    /**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param node Node to import
     * @param deep True if the node should be cloned deeply during
     *   import
     * @returns Clone of given node imported to this owner document
     */
    importNode(node: Node|null, deep: boolean): Node|null;

    /**
     * @returns Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */
    getEffectiveChildNodes(): Node[];

    /**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param selector Selector to filter nodes against
     * @returns List of flattened child elements
     */
    queryDistributedElements(selector: string): Array<HTMLElement|null>|null;
  }


  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @returns Wrapper providing either node API or event API
   */
  function dom(obj: Node|Event|null): DomApi|EventApi|null;
}

/**
 * Event API wrapper class returned from `Polymer.dom.(target)` when
 * `target` is an `Event`.
 */
declare class EventApi {

  /**
   * Returns the first node on the `composedPath` of this event.
   */
  readonly rootTarget: Node|null;

  /**
   * Returns the local (re-targeted) target for this event.
   */
  readonly localTarget: Node|null;
  readonly path: any;
}
