
export type AttributeName = "alt" | "disabled" | "href" | "id" | "src" | "style" | "title" | "class" | string;

export type CssProperty = "alignContent" | "alignItems" | "alignSelf" | "alignmentAdjust" | "alignmentBaseline" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" |
    "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "appearance" | "backfaceVisibility" | "background" |
    "backgroundAttachment" | "backgroundBlendMode" | "backgroundClip" | "backgroundColor" | "backgroundComposite" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" |
    "backgroundRepeat" | "backgroundSize" | "baselineShift" | "behavior" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" |
    "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderColor" | "borderCornerShape" | "borderImageSource" | "borderImageWidth" | "borderLeft" | "borderLeftColor" |
    "borderLeftStyle" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStyle" | "borderTop" |
    "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "bottom" | "boxAlign" | "boxDecorationBreak" | "boxDirection" |
    "boxLineProgression" | "boxLines" | "boxOrdinalGroup" | "boxFlex" | "boxSizing" | "boxShadow" | "boxFlexGroup" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "clear" |
    "clip" | "clipRule" | "color" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "columns" | "content" |
    "counterIncrement" | "counterReset" | "cue" | "cueAfter" | "cursor" | "direction" | "display" | "dominantBaseline" | "emptyCells" | "fill" | "fillOpacity" | "fillRule" | "filter" | "flex" |
    "flexAlign" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexItemAlign" | "flexLinePack" | "flexPositive" | "flexNegative" | "flexOrder" | "flexShrink" | "flexWrap" |
    "float" | "flowFrom" | "font" | "fontFamily" | "fontKerning" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontSynthesis" | "fontVariant" | "fontVariantAlternates" |
    "fontWeight" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridColumnGap" | "gridColumnEnd" | "gridColumnStart" | "gridGap" | "gridRow" |
    "gridRowEnd" | "gridRowGap" | "gridRowStart" | "gridRowPosition" | "gridRowSpan" | "gridTemplate" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" |
    "hyphenateLimitChars" | "hyphenateLimitLines" | "hyphenateLimitZone" | "hyphens" | "imeMode" | "justifyContent" | "justifyItems" | "justifySelf" | "layoutGrid" | "layoutGridChar" |
    "layoutGridLine" | "layoutGridMode" | "layoutGridType" | "left" | "letterSpacing" | "lineBreak" | "lineClamp" | "lineHeight" | "listStyle" | "listStyleImage" | "listStylePosition" |
    "listStyleType" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "marqueeDirection" | "marqueeStyle" | "mask" | "maskBorder" | "maskBorderRepeat" |
    "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskOrigin" | "maxFontSize" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "mixBlendMode" |
    "objectFit" | "objectPosition" | "opacity" | "order" | "orphans" | "outline" | "outlineColor" | "outlineStyle" | "outlineOffset" | "outlineWidth" | "overflow" | "overflowStyle" |
    "overflowWrap" | "overflowX" | "overflowY" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" |
    "pause" | "pauseAfter" | "pauseBefore" | "perspective" | "perspectiveOrigin" | "pointerEvents" | "position" | "punctuationTrim" | "quotes" | "regionFragment" | "resize" |
    "restAfter" | "restBefore" | "right" | "rubyAlign" | "rubyPosition" | "rx" | "ry" | "shapeImageThreshold" | "shapeInside" | "shapeMargin" | "shapeOutside" | "speak" |
    "speakAs" | "src" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeOpacity" | "strokeWidth" | "tabSize" | "tableLayout" | "textAnchor" |
    "textAlign" | "textAlignLast" | "textDecoration" | "textDecorationColor" | "textDecorationLine" | "textDecorationLineThrough" | "textDecorationNone" | "textDecorationOverline" |
    "textDecorationSkip" | "textDecorationStyle" | "textDecorationUnderline" | "textEmphasis" | "textEmphasisColor" | "textEmphasisStyle" | "textHeight" | "textIndent" |
    "textJustifyTrim" | "textKashidaSpace" | "textLineThrough" | "textLineThroughColor" | "textLineThroughMode" | "textLineThroughStyle" | "textLineThroughWidth" |
    "textOverflow" | "textOverline" | "textOverlineColor" | "textOverlineMode" | "textOverlineStyle" | "textOverlineWidth" | "textRendering" | "textScript" | "textShadow" |
    "textTransform" | "textUnderlinePosition" | "textUnderlineStyle" | "top" | "touchAction" | "transform" | "transformOrigin" | "transformOriginZ" | "transformStyle" |
    "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "unicodeBidi" | "unicodeRange" | "userFocus" | "userInput" |
    "userSelect" | "verticalAlign" | "visibility" | "voiceBalance" | "voiceDuration" | "voiceFamily" | "voicePitch" | "voiceRange" | "voiceRate" | "voiceStress" | "voiceVolume" |
    "whiteSpace" | "whiteSpaceTreatment" | "widows" | "width" | "willChange" | "wordBreak" | "wordSpacing" | "wordWrap" | "wrapFlow" | "wrapMargin" | "wrapOption" | "writingMode" | "zIndex" | "zoom";

/*
* Value of a CSS Property.  Could be a single value or a list of fallbacks
* NOTE: array is for fallbacks
*/
export type CssValue<T> = T | T[];
/**
 * For general purpose CSS values
 **/
export type CssValueGeneral = CssValue<number | string>;
/**
 * When you are sure that the value must be a string
 **/
export type CssValueString = CssValue<string>;
/**
 * CSS properties that cascade also support these
 * @see https://drafts.csswg.org/css-cascade/#defaulting-keywords
 */
export type CssGlobalValues = "initial" | "inherit" | "unset" | "revert";
export interface IFontFace {
    fontFamily?: string;
    /**
     * Location of a font-face.  Used with the @font-face at rule
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
     */
    src?: CssValueString;
    unicodeRange?: any | KnockoutObservable<any>;
    fontVariant?: "common-ligatures" | "small-caps" | CssGlobalValues;
    fontFeatureSettings?: string;
    fontWeight?: CssFontWeight;
    fontStyle?: "normal" | "italic" | "oblique" | CssGlobalValues;
}
/**
 * Absolute size keywords
 * @see https://drafts.csswg.org/css-fonts-3/#absolute-size-value
 */
export type CssAbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
/**
 * an angle; 0' | '0deg' | '0grad' | '0rad' | '0turn' | 'etc.
 * @see https://drafts.csswg.org/css-values-3/#angles
 */
export type CssAngle = CssGlobalValues | string | 0;
/**
 * initial state of an animation.
 * @see https://drafts.csswg.org/css-animations/#animation-play-state
 */
export type CssAnimationPlayState = CssGlobalValues | string | "paused" | "running";
/**
 * blend mode
 * @see https://drafts.fxtf.org/compositing-1/#ltblendmodegt
 */
export type CssBlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
/**
 * border shorthand for style color and width
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
 */
export type CssBorderShorthand = CssGlobalValues | CssColor | CssLength | CssLineStyleSet | string;
/**
 * Determines the area within which the background is painted.
 * @see https://drafts.csswg.org/css-backgrounds/#box
 */
export type CssBox = CssGlobalValues | string | "border-box" | "padding-box" | "content-box";
/**
 * Color can be a named color, transparent, or a color function
 * @see https://drafts.csswg.org/css-color-3/#valuea-def-color
 */
export type CssColor = CssNamedColor | CssGlobalValues | "currentColor" | string;
export type CssNamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "purple" | "rebeccapurple" | "red" | "silver" | "teal" | "transparent" | "white" | "yellow";
/**
 * Special type for border-color which can use 1 or 4 colors
 * @see https://drafts.csswg.org/css-backgrounds-3/#border-color
 */
export type CssColorSet = string | CssColor;
/**
  * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
  * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
  */
export type CssDisplay = "block" | "inline" | "run-in" | "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby" | "subgrid" | "block flow" | "inline table" | "flex run-in" | "list-item" | "list-item block" | "list-item inline" | "list-item flow" | "list-item flow-root" | "list-item block flow" | "list-item block flow-root" | "flow list-item block" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption" | "ruby-base" | "ruby-text" | "ruby-base-container" | "ruby-text-container" | "contents" | "none" | "inline-block" | "inline-list-item" | "inline-table" | "inline-flex" | "inline-grid";
/**
  * CSS Type <baseline-position> of Box Alignment
  * @see https://www.w3.org/TR/css-align-3/#typedef-baseline-position
  */
export type CssBoxAlignmentBaselinePosition = "baseline" | "first baseline" | "last baseline";
/**
  * CSS Type <content-distribution> of Box Alignment
  * @see https://www.w3.org/TR/css-align-3/#typedef-content-distribution
  */
export type CssBoxAlignmentContentDistribution = "space-between" | "space-around" | "space-evenly" | "stretch";
export type CssBoxAlignmentContentPositionWithOverflow = "center" | "start" | "end" | "flex-start" | "flex-end" | "unsafe center" | "unsafe start" | "unsafe end" | "unsafe flex-start" | "unsafe flex-end" | "safe center" | "safe start" | "safe end" | "safe flex-start" | "safe flex-end";
export type CssBoxAlignmentSelfPositionWithOverflow = "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "unsafe center" | "unsafe start" | "unsafe end" | "unsafe self-start" | "unsafe self-end" | "unsafe flex-start" | "unsafe flex-end" | "safe center" | "safe start" | "safe end" | "safe self-start" | "safe self-end" | "safe flex-start" | "safe flex-end";
export type CssBoxAlignmentLeftRightWithOverflow = "left" | "right" | "unsafe left" | "unsafe right" | "safe left" | "safe right";
/**
  * Type for justify-content in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-justify-content
  */
export type JustifyContent = "normal" | CssBoxAlignmentContentDistribution | CssBoxAlignmentContentPositionWithOverflow | "left" | "right";
/**
  * Type for align-content in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-align-content
  */
export type AlignContent = "normal" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentContentDistribution | CssBoxAlignmentContentPositionWithOverflow;
/**
  * Type for justify-items in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-justify-items
  */
export type JustifyItems = "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow | "left" | "right" | "center" | "legacy left" | "legacy right" | "legacy center";
/**
  * Type for align-items in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-align-items
  */
export type AlignItems = "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow;
/**
  * Type for justify-self in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-justify-self
  */
export type JustifySelf = "auto" | "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow | CssBoxAlignmentLeftRightWithOverflow;
/**
  * Type for align-self in flex or grid
  * @see https://www.w3.org/TR/css-align-3/#propdef-align-self
  */
export type AlignSelf = "auto" | "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow;
/**
 * a gradient function like linear-gradient
 * @see https://drafts.csswg.org/css-images-3/#gradients
 */
export type CssGradient = CssGlobalValues | string;
/**
 * complex type that describes the size of fonts
 * @see https://drafts.csswg.org/css-fonts-3/#propdef-font-size
 */
export type CssFontSize = CssGlobalValues | CssLength | CssPercentage | CssAbsoluteSize | CssRelativeSize;
/**
 * a value that serves as an image
 * @see https://drafts.csswg.org/css-images-3/#typedef-image
 */
export type CssImage = CssGlobalValues | string | CssGradient | CssUrl;
/**
 * an length; 0 | '0px' | '0em' etc.
 * @see https://drafts.csswg.org/css-values-3/#lengths
 */
export type CssLength = CssGlobalValues | string | number;
/**
 * Style of a line (e.g. border-style)
 * @see https://drafts.csswg.org/css-backgrounds-3/#line-style
 */
export type CssLineStyle = string | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
/**
 * Special type for border-style which can use 1 or 4 line-style
 * @see https://drafts.csswg.org/css-backgrounds-3/#border-style
 */
export type CssLineStyleSet = string | CssLineStyle;
/**
 * Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
 */
export type CssObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down" | CssGlobalValues;
/**
 * Overflow modes
 * @see https://drafts.csswg.org/css-overflow-3/#propdef-overflow
 */
export type CssOverflow = "visible" | "hidden" | "scroll" | "clip" | "auto";
/**
 * a percentage; 0 | '0%' etc.
 * @see https://drafts.csswg.org/css-values-3/#percentage
 */
export type CssPercentage = CssGlobalValues | string | 0;
/**
 * Defines a position (e.g. background-position)
 * @see https://drafts.csswg.org/css-backgrounds-3/#position
 */
export type CssPosition = CssAngle | string;
/**
 * Relative size keywords
 * @see https://drafts.csswg.org/css-fonts-3/#relative-size-value
 */
export type CssRelativeSize = "larger" | "smaller";
/**
 * Specifies how background images are tiled after they have been sized and positioned
 * @see https://drafts.csswg.org/css-backgrounds/#repeat-style
 */
export type CssRepeatStyle = "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | "repeat repeat" | "repeat space" | "repeat round" | "repeat no-repeat" | "space repeat" | "space space" | "space round" | "space no-repeat" | "round repeat" | "round space" | "round round" | "round no-repeat" | "no-repeat repeat" | "no-repeat space" | "no-repeat round" | "no-repeat no-repeat";
/**
 * Tranform list for the element.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
 */
export type CssTransformFunction = string | "none";
/**
 * Starting position for many gradients
 * @see https://drafts.csswg.org/css-images-3/#typedef-side-or-corner
 */
export type CssSideOrCorner = CssAngle | "left" | "right" | "top" | "bottom" | "to left" | "to right" | "to top" | "to bottom" | "left top" | "right top" | "left bottom" | "right bottom" | "top left" | "top right" | "bottom left" | "bottom right" | "to left top" | "to right top" | "to left bottom" | "to right bottom" | "to top left" | "to top right" | "to bottom left" | "to bottom right";
export type CssRadialGradientEndingShape = "circle" | "ellipse";
/**
 * Radial Gradient Size.
 * @see https://drafts.csswg.org/css-images-3/#ending-shape
 */
export type CssRadialGradientSize = CssLength | Array<CssLength> | "closest-side" | "farthest-side" | "closest-corner" | "closest-side";
/** Supporting by `-timing-function` properties */
export type CssTimingFunction = string | CssGlobalValues | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end";
/**
 * Expressed as url('protocol://')
 * @see https://drafts.csswg.org/css-values-3/#urls
 */
export type CssUrl = string;
/**
 * Font weights
 */
export type CssFontWeight = "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number | CssGlobalValues;
export type AlignmentBaseline = "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
export type AnimationDirection = "normal" | "alternate" | "reverse" | "alternate-reverse";
export type AnimationFillMode = "none" | "forwards" | "backwards" | "both";
export type BackgroundAttachment = "scroll" | "fixed" | "local";
export type BackgroundSize = "auto" | "cover" | "contain";
export type BreakAfter = "auto" | "avoid" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
export type BreakBefore = "auto" | "avoid" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
export type BreakInside = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
export type CaptionSide = CssGlobalValues | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
export type Cursor = CssValue<CssGlobalValues | string | "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out" | "grab" | "grabbing">;
export type DominantBaseline = "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | "inherit";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = CssGlobalValues | "nowrap" | "wrap" | "wrap-reverse";
export type FontStretch = CssGlobalValues | "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";
export type OutlineStyle = CssGlobalValues | "auto" | "none" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type PageBreakAfter = CssGlobalValues | "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";
export type PageBreakBefore = CssGlobalValues | "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";
export type PointerEvents = CssGlobalValues | "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all";
export type PositionX = CssValue<CssGlobalValues | "static" | "relative" | "absolute" | "sticky" | "-webkit-sticky" | "fixed">;
export type TextAlign = CssGlobalValues | "start" | "end" | "left" | "right" | "center" | "justify" | "justify-all" | "match-parent";
export type TextAlignLast = CssGlobalValues | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
export type TextTransform = CssGlobalValues | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";
export type TouchAction = CssGlobalValues | "auto" | "none" | "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "manipulation";
export type VerticalAlign = CssGlobalValues | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | CssLength | CssPercentage;
export type WritingMode = CssGlobalValues | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
export type CssStyleName = "alignContent" | "alignItems";