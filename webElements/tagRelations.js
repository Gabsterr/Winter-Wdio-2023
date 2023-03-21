/**
 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *         
 *         <a attr1="value1" attr2="value2">Unique Text 4</a>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag7>
 *     </tag6>
 * </tag1>
 * 
 * 
 * parent-tag   ->  tag1 is parent of tag2, tag4, tag6
 *                  tag6 is parent tag7
 *                  tag4 is parent of a
 *                  tag2 is parent of tag3, tag11, tag21, tag31
 *                  tag11 is parent of -
 *                  tag3 is parent of subTag
 *                  tag21 is parent of -
 * 
 *                  subTag -> tag3 -> tag2 -> tag1
 *                  a -> tag4 -> tag1
 * children-tag
 * sibling-tag      tag2, tag4, tag6 are siblings (tag1)
 *                  subTag is child of tag3
 *                  tag11, tag21 are siblings (tag2)
 * 
 * following-sibling (sibling starting-tags which appear in the dom after the tag)
 * following sibling of tag11   ->  tag21, tag31
 * following-sibling of a-tag   ->  -
 * 
 * preceding-sibling (sibling starting-tags which appear in the dom before the tag)
 * preceding sibling of tag11   ->  tag3
 * preceding-sibling of a-tag   ->  -
 * 
 * following (all starting-tags appear in the dom after the tag)
 * following of tag11   ->  tag21, tag31, tag4, a, tag6, tag7
 * following of a-tag   ->  tag6, tag7
 * 
 * preceding (all starting-tags appear in the dom before the tag)
 * preceding of tag11   ->  subTag, tag3, tag2, tag1
 * preceding of a-tag   ->  tag4, tag31, tag21, tag11, subTag, tag3, tag2, tag1
 * 
 */




// Steps to find and interact with a webElement
/**
 * 1. Find the unique locator strategy to find webElement in the DOM
 * 2. Based on the locator strategy, use corresponding code to find the webElement
 * 3. once the webElement is found, interact with webElement
 */

// To find webElement
//      function: $

// Link
/**
 *      always have a-tag
 *      text of a link is called Link-Text
 *      after clicking the link, user should land on which webPage that is defined in href-attribute.
 * 
 * 
 * 
 * <a href="https://messenger.com/" title="Check out Messenger.">
 *  Messenger
 * </a>
 * Text of a-tag = Messenger
 * 
 */