declare namespace Jpf {
    interface FrameworkElement {
        id: string;
        type: string;
        visible: KnockoutObservable<boolean>;
        className: string | KnockoutObservable<string>;

        //Attribute properties and methods
        attributes: { [attributeName: string]: string | KnockoutObservable<string> };
        getAttribute: (attribute: string) => string;
        setAttribute: (attributeName: Attribute) => void;
        deleteAttribute: (attributeName: string) => void;

        //Style properties and methods
        style: Css.Style; //Object to hold style name as property and styleValue as propertyValue.
        getStyle: (cssProperties: Array<Css.Types.CssProperties>) => Css.Style; //Method to get the values of the given CssProperties
        setStyle: (style: Css.Style, overwriteExisting?: boolean) => void; //Method to set the style of the frameworkelement. The overwriteExisting parameter decides whether the style is redefined if already set.
        deleteStyle: (cssProperties: Array<Css.Types.CssProperties>) => void; //Method to delete the given style(s) from the frameworkelement
    }

    interface FrameworkElementOptions {
        id?: string;
        type?: string;
        visible?: boolean | KnockoutObservable<boolean>;
        className?: string | KnockoutObservable<string>;
        attributes?: Array<Attribute>;
        style?: Css.Style;
    }

    interface Attribute {
        name: string;
        value: string | KnockoutObservable<string>;
    }
}

declare namespace Jpf.Controls {

}
declare namespace Jpf.Css {
    interface Style {
        /**
         * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
         */
        alignContent?: Types.AlignContent | KnockoutObservable<Types.AlignContent>;
        /**
         * Sets the default alignment in the cross axis for all of the flex container's items, including anonymous flex items, similarly to how justify-content aligns items along the main axis.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
         */
        alignItems?: Types.CssValue<Types.AlignItems> | KnockoutObservable<Types.CssValue<Types.AlignItems>>;
        /**
         * Allows the default alignment to be overridden for individual flex items.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
         */
        alignSelf?: Types.CssValue<Types.AlignSelf> | KnockoutObservable<Types.CssValue<Types.AlignSelf>>;
        /**
         * This property allows precise alignment of elements, such as graphics, that do not have a baseline-table or lack the desired baseline in their baseline-table. With the alignment-adjust property, the position of the baseline identified by the alignment-baseline can be explicitly determined. It also determines precisely the alignment point for each glyph within a textual element.
         */
        alignmentAdjust?: any | KnockoutObservable<any>;
        /**
         * The alignment-baseline attribute specifies how an object is aligned with respect to its parent.
         * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
         */
        alignmentBaseline?: Types.AlignmentBaseline | KnockoutObservable<Types.AlignmentBaseline>;
        /**
         * Shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay,
         * animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
         */
        animation?: Types.CssValueString | KnockoutObservable<Types.CssValueString>;
        /**
         * Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
         */
        animationDelay?: any | KnockoutObservable<any>;
        /**
         * Defines whether an animation should run in reverse on some or all cycles.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
         */
        animationDirection?: Types.CssGlobalValues | Types.AnimationDirection | KnockoutObservable<Types.CssGlobalValues | Types.AnimationDirection>;
        /**
         * The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.
         * A value of '0s', which is the default value, indicates that no animation should occur.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
         */
        animationDuration?: Types.CssValue<string> | KnockoutObservable<Types.CssValue<string>>;
        /**
         * Specifies how a CSS animation should apply styles to its target before and after it is executing.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
         */
        animationFillMode?: Types.AnimationFillMode | KnockoutObservable<Types.AnimationFillMode>;
        /**
         * Specifies how many times an animation cycle should play.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
         */
        animationIterationCount?: Types.CssValue<number> | "infinite" | KnockoutObservable<Types.CssValue<number> | "infinite">;
        /**
         * Defines the list of animations that apply to the element.
         * Note: You probably want animationDuration as well
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
         */
        animationName?: Types.CssValue<string> | KnockoutObservable<Types.CssValue<string>>;
        /**
         * Defines whether an animation is running or paused.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
         */
        animationPlayState?: Types.CssValue<Types.CssAnimationPlayState> | KnockoutObservable<Types.CssValue<Types.CssAnimationPlayState>>;
        /**
         * Sets the pace of an animation
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
         */
        animationTimingFunction?: Types.CssValue<Types.CssTimingFunction> | KnockoutObservable<Types.CssValue<Types.CssTimingFunction>>;
        /**
         * Allows changing the style of any element to platform-based interface elements or vice versa.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
         */
        appearance?: Types.CssValue<"auto" | "none"> | KnockoutObservable<Types.CssValue<"auto" | "none">>;
        /**
         * Determines whether or not the �back� side of a transformed element is visible when facing the viewer.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
         */
        backfaceVisibility?: Types.CssGlobalValues | "visible" | "hidden" | KnockoutObservable<Types.CssGlobalValues | "visible" | "hidden">;
        /**
         * Shorthand property to set the values for one or more of:
         * background-clip, background-color, background-image,
         * background-origin, background-position, background-repeat,
         * background-size, and background-attachment.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background
         */
        background?: any | KnockoutObservable<any>;
        /**
         * If a background-image is specified, this property determines
         * whether that image's position is fixed within the viewport,
         * or scrolls along with its containing block.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
         */
        backgroundAttachment?: Types.BackgroundAttachment | KnockoutObservable<Types.BackgroundAttachment>;
        /**
         * This property describes how the element's background images should blend with each other and the element's background color.
         * The value is a list of blend modes that corresponds to each background image. Each element in the list will apply to the corresponding element of background-image. If a property doesn�t have enough comma-separated values to match the number of layers, the UA must calculate its used value by repeating the list of values until there are enough.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
         */
        backgroundBlendMode?: Types.CssValue<Types.CssBlendMode> | KnockoutObservable<Types.CssValue<Types.CssBlendMode>>;
        /**
         * Specifies whether an element's background, either the color or image, extends underneath its border.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
         */
        backgroundClip?: Types.CssValue<Types.CssBox | "text"> | KnockoutObservable<Types.CssValue<Types.CssBox | "text">>;
        /**
         * Sets the background color of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
         */
        backgroundColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets a compositing style for background images and colors.
         */
        backgroundComposite?: any | KnockoutObservable<any>;
        /**
         * Applies one or more background images to an element. These can be any valid CSS image, including url() paths to image files or CSS gradients.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
         */
        backgroundImage?: Types.CssValue<Types.CssImage> | KnockoutObservable<Types.CssValue<Types.CssImage>>;
        /**
         * Specifies what the background-position property is relative to.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
         */
        backgroundOrigin?: Types.CssValue<Types.CssBox> | KnockoutObservable<Types.CssValue<Types.CssBox>>;
        /**
         * Sets the position of a background image.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
         */
        backgroundPosition?: Types.CssValue<Types.CssPosition> | KnockoutObservable<Types.CssValue<Types.CssPosition>>;
        /**
         * Background-repeat defines if and how background images will be repeated after they have been sized and positioned
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
         */
        backgroundRepeat?: Types.CssValue<Types.CssRepeatStyle | string> | KnockoutObservable<Types.CssValue<Types.CssRepeatStyle | string>>;
        /**
         * Background-size specifies the size of a background image
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
         */
        backgroundSize?: Types.BackgroundSize | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues | KnockoutObservable<Types.BackgroundSize | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>;
        /**
         * Obsolete - spec retired, not implemented.
         * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
         */
        baselineShift?: any | KnockoutObservable<any>;
        /**
         * Non standard. Sets or retrieves the location of the Dynamic HTML (DHTML) behavior.
         * @see https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx
         */
        behavior?: any | KnockoutObservable<any>;
        /**
         * Shorthand property that defines the different properties of all four sides of an element's border in a single declaration. It can be used to set border-width, border-style and border-color, or a subset of these.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border
         */
        border?: any | KnockoutObservable<any>;
        /**
         * Shorthand that sets the values of border-bottom-color,
         * border-bottom-style, and border-bottom-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
         */
        borderBottom?: Types.CssBorderShorthand | KnockoutObservable<Types.CssBorderShorthand>;
        /**
         * Sets the color of the bottom border of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
         */
        borderBottomColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Defines the shape of the border of the bottom-left corner.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
         */
        borderBottomLeftRadius?: any | KnockoutObservable<any>;
        /**
         * Defines the shape of the border of the bottom-right corner.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
         */
        borderBottomRightRadius?: any | KnockoutObservable<any>;
        /**
         * Sets the line style of the bottom border of a box.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
         */
        borderBottomStyle?: Types.CssValue<Types.CssLineStyle> | KnockoutObservable<Types.CssValue<Types.CssLineStyle>>;
        /**
         * Sets the width of an element's bottom border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
         */
        borderBottomWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Border-collapse can be used for collapsing the borders between table cells
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
         */
        borderCollapse?: any | KnockoutObservable<any>;
        /**
         * The CSS border-color property sets the color of an element's four borders. This property can have from one to four values, made up of the elementary properties:
         *      �       border-top-color
         *      �       border-right-color
         *      �       border-bottom-color
         *      �       border-left-color The default color is the currentColor of each of these values.
         * If you provide one value, it sets the color for the element. Two values set the horizontal and vertical values, respectively. Providing three values sets the top, vertical, and bottom values, in that order. Four values set all for sides: top, right, bottom, and left, in that order.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
         */
        borderColor?: Types.CssValue<Types.CssColorSet> | KnockoutObservable<Types.CssValue<Types.CssColorSet>>;
        /**
         * Specifies different corner clipping effects, such as scoop (inner curves), bevel (straight cuts) or notch (cut-off rectangles). Works along with border-radius to specify the size of each corner effect.
         */
        borderCornerShape?: any | KnockoutObservable<any>;
        /**
         * The property border-image-source is used to set the image to be used instead of the border style. If this is set to none the border-style is used instead.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
         */
        borderImageSource?: Types.CssValue<Types.CssImage> | KnockoutObservable<Types.CssValue<Types.CssImage>>;
        /**
         * The border-image-width CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
         */
        borderImageWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's left border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the left border � border-left-width, border-left-style and border-left-color.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
         */
        borderLeft?: Types.CssBorderShorthand | KnockoutObservable<Types.CssBorderShorthand>;
        /**
         * The CSS border-left-color property sets the color of an element's left border. This page explains the border-left-color value, but often you will find it more convenient to fix the border's left color as part of a shorthand set, either border-left or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
         */
        borderLeftColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets the style of an element's left border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
         */
        borderLeftStyle?: Types.CssValue<Types.CssLineStyle> | KnockoutObservable<Types.CssValue<Types.CssLineStyle>>;
        /**
         * Sets the width of an element's left border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
         */
        borderLeftWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Allows Web authors to define how rounded border corners are
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
         */
        borderRadius?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's right border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the right border � border-right-width, border-right-style and border-right-color.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
         */
        borderRight?: Types.CssBorderShorthand | KnockoutObservable<Types.CssBorderShorthand>;
        /**
         * Sets the color of an element's right border. This page explains the border-right-color value, but often you will find it more convenient to fix the border's right color as part of a shorthand set, either border-right or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
         */
        borderRightColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets the style of an element's right border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
         */
        borderRightStyle?: Types.CssValue<Types.CssLineStyle> | KnockoutObservable<Types.CssValue<Types.CssLineStyle>>;
        /**
         * Sets the width of an element's right border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
         */
        borderRightWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Specifies the distance between the borders of adjacent cells.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
         */
        borderSpacing?: Types.CssLength | string | "inherit" | KnockoutObservable<Types.CssLength | string | "inherit">;
        /**
         * Sets the style of an element's four borders. This property can have from one to four values. With only one value, the value will be applied to all four borders; otherwise, this works as a shorthand property for each of border-top-style, border-right-style, border-bottom-style, border-left-style, where each border style may be assigned a separate value.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
         */
        borderStyle?: Types.CssValue<Types.CssLineStyleSet> | KnockoutObservable<Types.CssValue<Types.CssLineStyleSet>>;
        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's top border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the top border � border-top-width, border-top-style and border-top-color.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
         */
        borderTop?: Types.CssBorderShorthand | KnockoutObservable<Types.CssBorderShorthand>;
        /**
         * Sets the color of an element's top border. This page explains the border-top-color value, but often you will find it more convenient to fix the border's top color as part of a shorthand set, either border-top or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
         */
        borderTopColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets the rounding of the top-left corner of the element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
         */
        borderTopLeftRadius?: any | KnockoutObservable<any>;
        /**
         * Sets the rounding of the top-right corner of the element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
         */
        borderTopRightRadius?: any | KnockoutObservable<any>;
        /**
         * Sets the style of an element's top border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
         */
        borderTopStyle?: Types.CssValue<Types.CssLineStyle> | KnockoutObservable<Types.CssValue<Types.CssLineStyle>>;
        /**
         * Sets the width of an element's top border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
         */
        borderTopWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Sets the width of an element's four borders. This property can have from one to four values. This is a shorthand property for setting values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
         */
        borderWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * This property specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the bottom edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
         */
        bottom?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * Obsolete.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-align
         */
        boxAlign?: any | KnockoutObservable<any>;
        /**
         * Breaks a box into fragments creating new borders, padding and repeating backgrounds or lets it stay as a continuous box on a page break, column break, or, for inline elements, at a line break.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break
         */
        boxDecorationBreak?: any | KnockoutObservable<any>;
        /**
         * Deprecated
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction
         */
        boxDirection?: any | KnockoutObservable<any>;
        /**
         * Do not use. This property has been replaced by the flex-wrap property.
         * Gets or sets a value that specifies the direction to add successive rows or columns when the value of box-lines is set to multiple.
         */
        boxLineProgression?: any | KnockoutObservable<any>;
        /**
         * Do not use. This property has been replaced by the flex-wrap property.
         * Gets or sets a value that specifies whether child elements wrap onto multiple lines or columns based on the space available in the object.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines
         */
        boxLines?: any | KnockoutObservable<any>;
        /**
         * Do not use. This property has been replaced by flex-order.
         * Specifies the ordinal group that a child element of the object belongs to. This ordinal value identifies the display order (along the axis defined by the box-orient property) for the group.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group
         */
        boxOrdinalGroup?: any | KnockoutObservable<any>;
        /**
         * Deprecated.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex
         */
        boxFlex?: number | KnockoutObservable<number>;
        /**
         * box sizing
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
         */
        boxSizing?: Types.CssGlobalValues | "content-box" | "border-box" | KnockoutObservable<Types.CssGlobalValues | "content-box" | "border-box">;
        /**
         * Box shadow
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
         */
        boxShadow?: Types.CssValueGeneral | KnockoutObservable<Types.CssValueGeneral>;
        /**
         * Deprecated.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group
         */
        boxFlexGroup?: number | KnockoutObservable<number>;
        /**
         * The CSS break-after property allows you to force a break on multi-column layouts. More specifically, it allows you to force a break after an element. It allows you to determine if a break should occur, and what type of break it should be. The break-after CSS property describes how the page, column or region break behaves after the generated box. If there is no generated box, the property is ignored.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-after
         */
        breakAfter?: Types.BreakAfter | KnockoutObservable<Types.BreakAfter>;
        /**
         * Control page/column/region breaks that fall above a block of content
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-before
         */
        breakBefore?: Types.BreakBefore | KnockoutObservable<Types.BreakBefore>;
        /**
         * Control page/column/region breaks that fall within a block of content
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside
         */
        breakInside?: Types.BreakInside | KnockoutObservable<Types.BreakInside>;
        /**
         * The caption-side CSS property positions the content of a table's <caption> on the specified side.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side
         */
        captionSide?: Types.CaptionSide | KnockoutObservable<Types.CaptionSide>;
        /**
         * The clear CSS property specifies if an element can be positioned next to or must be positioned below the floating elements that precede it in the markup.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clear
         */
        clear?: Types.CssGlobalValues | "none" | "left" | "right" | "both" | KnockoutObservable<Types.CssGlobalValues | "none" | "left" | "right" | "both">;
        /**
         * Deprecated; see clip-path.
         * Lets you specify the dimensions of an absolutely positioned element that should be visible, and the element is clipped into this shape, and displayed.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip
         */
        clip?: any | KnockoutObservable<any>;
        /**
         * Clipping crops an graphic, so that only a portion of the graphic is rendered, or filled. This clip-rule property, when used with the clip-path property, defines which clip rule, or algorithm, to use when filling the different parts of a graphics.
         * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
         */
        clipRule?: any | KnockoutObservable<any>;
        /**
         * The color property sets the color of an element's foreground content (usually text), accepting any standard CSS color from keywords and hex values to RGB(a) and HSL(a).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
         */
        color?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Describes the number of columns of the element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
         */
        columnCount?: number | KnockoutObservable<number>;
        /**
         * Specifies how to fill columns (balanced or sequential).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
         */
        columnFill?: any | KnockoutObservable<any>;
        /**
         * The column-gap property controls the width of the gap between columns in multi-column elements.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
         */
        columnGap?: any | KnockoutObservable<any>;
        /**
         * Sets the width, style, and color of the rule between columns.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
         */
        columnRule?: any | KnockoutObservable<any>;
        /**
         * Specifies the color of the rule between columns.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
         */
        columnRuleColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Specifies the width of the rule between columns.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
         */
        columnRuleWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The column-span CSS property makes it possible for an element to span across all columns when its value is set to all. An element that spans more than one column is called a spanning element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
         */
        columnSpan?: any | KnockoutObservable<any>;
        /**
         * Specifies the width of columns in multi-column elements.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
         */
        columnWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * This property is a shorthand property for setting column-width and/or column-count.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/columns
         */
        columns?: any | KnockoutObservable<any>;
        /**
         * The content property is used with the :before and :after pseudo-elements, to insert generated content.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/content
         */
        content?: Types.CssValueString | KnockoutObservable<Types.CssValueString>;
        /**
         * The counter-increment property accepts one or more names of counters (identifiers), each one optionally followed by an integer which specifies the value by which the counter should be incremented (e.g. if the value is 2, the counter increases by 2 each time it is invoked).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment
         */
        counterIncrement?: any | KnockoutObservable<any>;
        /**
         * The counter-reset property contains a list of one or more names of counters, each one optionally followed by an integer (otherwise, the integer defaults to 0.) Each time the given element is invoked, the counters specified by the property are set to the given integer.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset
         */
        counterReset?: any | KnockoutObservable<any>;
        /**
         * The cue property specifies sound files (known as an "auditory icon") to be played by speech media agents before and after presenting an element's content; if only one file is specified, it is played both before and after. The volume at which the file(s) should be played, relative to the volume of the main element, may also be specified. The icon files may also be set separately with the cue-before and cue-after properties.
         */
        cue?: any | KnockoutObservable<any>;
        /**
         * The cue-after property specifies a sound file (known as an "auditory icon") to be played by speech media agents after presenting an element's content; the volume at which the file should be played may also be specified. The shorthand property cue sets cue sounds for both before and after the element is presented.
         */
        cueAfter?: any | KnockoutObservable<any>;
        /**
         * Specifies the mouse cursor displayed when the mouse pointer is over an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
         */
        cursor?: Types.Cursor | KnockoutObservable<Types.Cursor>;
        /**
         * The direction CSS property specifies the text direction/writing direction. The rtl is used for Hebrew or Arabic text, the ltr is for other languages.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/direction
         */
        direction?: Types.CssGlobalValues | "ltr" | "rtl" | KnockoutObservable<Types.CssGlobalValues | "ltr" | "rtl">;
        /**
         * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
         */
        display?: Types.CssValue<Types.CssGlobalValues | Types.CssDisplay> | KnockoutObservable<Types.CssValue<Types.CssGlobalValues | Types.CssDisplay>>;
        /**
         * SVG: Used to determine or re-determine a scaled-baseline-table.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
         */
        dominantBaseline?: Types.DominantBaseline | KnockoutObservable<Types.DominantBaseline>;
        /**
         * The �empty-cells� CSS property specifies how the user agent should render borders and backgrounds around <table> cells that have no visible content.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells
         */
        emptyCells?: Types.CssGlobalValues | "show" | "hide" | KnockoutObservable<Types.CssGlobalValues | "show" | "hide">;
        /**
         * The �fill� property paints the interior of the given graphical element. The area to be painted consists of any areas inside the outline of the shape. To determine the inside of the shape, all subpaths are considered, and the interior is determined according to the rules associated with the current value of the �fill-rule� property. The zero-width geometric outline of a shape is included in the area to be painted.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill
         */
        fill?: Types.CssColor | "context-stroke" | "context-fill" | KnockoutObservable<Types.CssColor | "context-stroke" | "context-fill">;
        /**
         * SVG: Specifies the opacity of the color or the content the current object is filled with.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
         */
        fillOpacity?: number | KnockoutObservable<number>;
        /**
         * The �fill-rule� property indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.
         * The �fill-rule� property provides two options for how the inside of a shape is determined:
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule
         */
        fillRule?: "nonzero" | "evenodd" | KnockoutObservable<"nonzero" | "evenodd">;
        /**
         * Applies various image processing effects. This property is largely unsupported. See Compatibility section for more information.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
         */
        filter?: string | KnockoutObservable<string>;
        /**
         * Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
         */
        flex?: number | string | KnockoutObservable<number | string>;
        /**
         * Obsolete, do not use. This property has been renamed to align-items.
         * Specifies the alignment (perpendicular to the layout axis defined by the flex-direction property) of child elements of the object.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-align
         */
        flexAlign?: any | KnockoutObservable<any>;
        /**
         * The flex-basis CSS property describes the initial main size of the flex item before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
         */
        flexBasis?: any | KnockoutObservable<any>;
        /**
         * The flex-direction CSS property describes how flex items are placed in the flex container, by setting the direction of the flex container's main axis.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
         */
        flexDirection?: Types.FlexDirection | KnockoutObservable<Types.FlexDirection>;

        /**
         * The flex-flow CSS property defines the flex container's main and cross axis. It is a shorthand property for the flex-direction and flex-wrap properties.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
         */
        flexFlow?: any | KnockoutObservable<any>;
        /**
         * Specifies the flex grow factor of a flex item.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
         */
        flexGrow?: number | KnockoutObservable<number>;
        /**
         * Do not use. This property has been renamed to align-self
         * Specifies the alignment (perpendicular to the layout axis defined by flex-direction) of child elements of the object.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-item-align
         */
        flexItemAlign?: any | KnockoutObservable<any>;
        /**
         * Do not use. This property has been renamed to align-content.
         * Specifies how a flexbox's lines align within the flexbox when there is extra space along the axis that is perpendicular to the axis defined by the flex-direction property.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-line-pack
         */
        flexLinePack?: any | KnockoutObservable<any>;
        flexPositive?: any | KnockoutObservable<any>;
        flexNegative?: any | KnockoutObservable<any>;
        /**
         * Gets or sets a value that specifies the ordinal group that a flexbox element belongs to. This ordinal value identifies the display order for the group.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-order
         */
        flexOrder?: any | KnockoutObservable<any>;
        /**
         * Specifies the flex shrink factor of a flex item.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
         */
        flexShrink?: number | KnockoutObservable<number>;
        /**
         * Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
         */
        flexWrap?: Types.FlexWrap | KnockoutObservable<Types.FlexWrap>;
        /**
         * Elements which have the style float are floated horizontally. These elements can move as far to the left or right of the containing element. All elements after the floating element will flow around it, but elements before the floating element are not impacted. If several floating elements are placed after each other, they will float next to each other as long as there is room.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/float
         */
        float?: Types.CssGlobalValues | "left" | "right" | "none" | "inline-start" | "inline-end" | KnockoutObservable<Types.CssGlobalValues | "left" | "right" | "none" | "inline-start" | "inline-end">;
        /**
         * Flows content from a named flow (specified by a corresponding flow-into) through selected elements to form a dynamic chain of layout regions.
         */
        flowFrom?: any | KnockoutObservable<any>;
        /**
         * The font property is shorthand that allows you to do one of two things: you can either set up six of the most mature font properties in one line, or you can set one of a choice of keywords to adopt a system font setting.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
         */
        font?: any | KnockoutObservable<any>;
        /**
         * The font-family property allows one or more font family names and/or generic family names to be specified for usage on the selected element(s)' text. The browser then goes through the list; for each character in the selection it applies the first font family that has an available glyph for that character.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
         */
        fontFamily?: any | KnockoutObservable<any>;
        /**
         * The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text. This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font. Optical Kerning is not supported as yet.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
         */
        fontKerning?: Types.CssGlobalValues | "auto" | "normal" | "none" | KnockoutObservable<Types.CssGlobalValues | "auto" | "normal" | "none">;
        /**
         * Specifies the size of the font. Used to compute em and ex units.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
         */
        fontSize?: Types.CssValue<Types.CssFontSize> | KnockoutObservable<Types.CssValue<Types.CssFontSize>>;
        /**
         * The font-size-adjust property adjusts the font-size of the fallback fonts defined with font-family, so that the x-height is the same no matter what font is used. This preserves the readability of the text when fallback happens.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
         */
        fontSizeAdjust?: any | KnockoutObservable<any>;
        /**
         * Allows you to expand or condense the widths for a normal, condensed, or expanded font face.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
         */
        fontStretch?: Types.FontStretch | KnockoutObservable<Types.FontStretch>;
        /**
         * The font-style property allows normal, italic, or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face. Oblique faces can be simulated by artificially sloping the glyphs of the regular face.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
         */
        fontStyle?: Types.CssGlobalValues | "normal" | "italic" | "oblique" | KnockoutObservable<Types.CssGlobalValues | "normal" | "italic" | "oblique">;
        /**
         * This value specifies whether the user agent is allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis
         */
        fontSynthesis?: any | KnockoutObservable<any>;
        /**
         * The font-variant property enables you to select the small-caps font within a font family.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
         */
        fontVariant?: any | KnockoutObservable<any>;
        /**
         * Fonts can provide alternate glyphs in addition to default glyph for a character. This property provides control over the selection of these alternate glyphs.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates
         */
        fontVariantAlternates?: any | KnockoutObservable<any>;
        /**
         * Specifies the weight or boldness of the font.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
         */
        fontWeight?: Types.CssFontWeight | KnockoutObservable<Types.CssFontWeight>;
        /**
         * Lays out one or more grid items bound by 4 grid lines. Shorthand for setting grid-column-start, grid-column-end, grid-row-start, and grid-row-end in a single declaration.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
         */
        gridArea?: any | KnockoutObservable<any>;
        /**
         * Specifies the size of an implicitly-created grid column track.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
         */
        gridAutoColumns?: any | KnockoutObservable<any>;
        /**
         * Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
         */
        gridAutoFlow?: any | KnockoutObservable<any>;
        /**
         * Specifies the size of an implicitly-created grid row track.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
         */
        gridAutoRows?: any | KnockoutObservable<any>;
        /**
         * Controls a grid item's placement in a grid area, particularly grid position and a grid span. Shorthand for setting grid-column-start and grid-column-end in a single declaration.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
         */
        gridColumn?: any | KnockoutObservable<any>;
        /**
         * Specifies the gutter between grid columns.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
         */
        gridColumnGap?: any | KnockoutObservable<any>;
        /**
         * Controls a grid item's placement in a grid area as well as grid position and a grid span. The grid-column-end property (with grid-row-start, grid-row-end, and grid-column-start) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
         */
        gridColumnEnd?: any | KnockoutObservable<any>;
        /**
         * Determines a grid item's placement by specifying the starting grid lines of a grid item's grid area . A grid item's placement in a grid area consists of a grid position and a grid span. See also ( grid-row-start, grid-row-end, and grid-column-end)
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
         */
        gridColumnStart?: any | KnockoutObservable<any>;
        /**
         * Specifies the gutters between grid rows and columns, Shorthand for for grid-row-gap and grid-column-gap in a single declaration.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
         */
        gridGap?: any | KnockoutObservable<any>;
        /**
         * Gets or sets a value that indicates which row an element within a Grid should appear in. Shorthand for setting grid-row-start and grid-row-end in a single declaration.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
         */
        gridRow?: any | KnockoutObservable<any>;
        /**
         * Determines a grid item�s placement by specifying the block-end. A grid item's placement in a grid area consists of a grid position and a grid span. The grid-row-end property (with grid-row-start, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
         */
        gridRowEnd?: any | KnockoutObservable<any>;
        /**
         * Specifies the gutter between grid rows.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
         */
        gridRowGap?: any | KnockoutObservable<any>;
        /**
         * Determines a grid item�s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
         */
        gridRowStart?: any | KnockoutObservable<any>;
        /**
         * Specifies a row position based upon an integer location, string value, or desired row size.
         * css/properties/grid-row is used as short-hand for grid-row-position and grid-row-position
         */
        gridRowPosition?: any | KnockoutObservable<any>;
        gridRowSpan?: any | KnockoutObservable<any>;
        /**
         * Is a shorthand property for defining grid columns, rows, and areas.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
         */
        gridTemplate?: any | KnockoutObservable<any>;
        /**
         * Specifies named grid areas which are not associated with any particular grid item, but can be referenced from the grid-placement properties. The syntax of the grid-template-areas property also provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
         */
        gridTemplateAreas?: any | KnockoutObservable<any>;
        /**
         * Specifies (with grid-template-rows) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container�s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
         */
        gridTemplateColumns?: any | KnockoutObservable<any>;
        /**
         * Specifies (with grid-template-columns) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container�s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
         */
        gridTemplateRows?: any | KnockoutObservable<any>;
        /**
         * Sets the height of an element. The content area of the element height does not include the padding, border, and margin of the element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
         */
        height?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * Specifies the minimum number of characters in a hyphenated word
         * @see https://msdn.microsoft.com/en-us/library/hh771865(v=vs.85).aspx
         */
        hyphenateLimitChars?: any | KnockoutObservable<any>;
        /**
         * Indicates the maximum number of successive hyphenated lines in an element. The �no-limit� value means that there is no limit.
         * @see https://msdn.microsoft.com/en-us/library/hh771867(v=vs.85).aspx
         */
        hyphenateLimitLines?: any | KnockoutObservable<any>;
        /**
         * Specifies the maximum amount of trailing whitespace (before justification) that may be left in a line before hyphenation is triggered to pull part of a word from the next line back up into the current one.
         * @see https://msdn.microsoft.com/en-us/library/hh771869(v=vs.85).aspx
         */
        hyphenateLimitZone?: any | KnockoutObservable<any>;
        /**
         * Specifies whether or not words in a sentence can be split by the use of a manual or automatic hyphenation mechanism.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
         */
        hyphens?: Types.CssGlobalValues | string | "none" | "manual" | "auto" | KnockoutObservable<Types.CssGlobalValues | string | "none" | "manual" | "auto">;
        /**
         * Controls the state of the input method editor for text fields.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode
         */
        imeMode?: Types.CssGlobalValues | "auto" | "normal" | "active" | "inactive" | "disabled" | KnockoutObservable<Types.CssGlobalValues | "auto" | "normal" | "active" | "inactive" | "disabled">;
        /**
         * Defines how the browser distributes space between and around flex items
         * along the main-axis of their container.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
         */
        justifyContent?: Types.JustifyContent | KnockoutObservable<Types.JustifyContent>;
        /**
         * Defines the default justify-self for all items of the box, given them the
         * default way of justifying each box along the appropriate axis
         */
        justifyItems?: Types.JustifyItems | KnockoutObservable<Types.JustifyItems>;
        /**
         * Defines the way of justifying a box inside its container along the appropriate axis.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
         */
        justifySelf?: Types.JustifySelf | KnockoutObservable<Types.JustifySelf>;
        layoutGrid?: any | KnockoutObservable<any>;
        layoutGridChar?: any | KnockoutObservable<any>;
        layoutGridLine?: any | KnockoutObservable<any>;
        layoutGridMode?: any | KnockoutObservable<any>;
        layoutGridType?: any | KnockoutObservable<any>;
        /**
         * Sets the left edge of an element
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/left
         */
        left?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * The letter-spacing CSS property specifies the spacing behavior between text characters.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
         */
        letterSpacing?: any | KnockoutObservable<any>;
        /**
         * Deprecated. Gets or sets line-breaking rules for text in selected languages such as Japanese, Chinese, and Korean.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-break
         */
        lineBreak?: any | KnockoutObservable<any>;
        lineClamp?: number | KnockoutObservable<number>;
        /**
         * Specifies the height of an inline block level element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
         */
        lineHeight?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Shorthand property that sets the list-style-type, list-style-position and list-style-image properties in one declaration.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
         */
        listStyle?: any | KnockoutObservable<any>;
        /**
         * This property sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker. That also means that if the image is not available, it will show the style specified by list-style-property
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
         */
        listStyleImage?: any | KnockoutObservable<any>;
        /**
         * Specifies if the list-item markers should appear inside or outside the content flow.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
         */
        listStylePosition?: Types.CssGlobalValues | "inside" | "outside" | KnockoutObservable<Types.CssGlobalValues | "inside" | "outside">;
        /**
         * Specifies the type of list-item marker in a list.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
         */
        listStyleType?: any | KnockoutObservable<any>;
        /**
         * The margin property is shorthand to allow you to set all four margins of an element at once. Its equivalent longhand properties are margin-top, margin-right, margin-bottom and margin-left. Negative values are also allowed.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
         */
        margin?: any | KnockoutObservable<any>;
        /**
         * margin-bottom sets the bottom margin of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
         */
        marginBottom?: any | KnockoutObservable<any>;
        /**
         * margin-left sets the left margin of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
         */
        marginLeft?: any | KnockoutObservable<any>;
        /**
         * margin-right sets the right margin of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
         */
        marginRight?: any | KnockoutObservable<any>;
        /**
         * margin-top sets the top margin of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
         */
        marginTop?: Types.CssValueGeneral | KnockoutObservable<Types.CssValueGeneral>;
        /**
         * The marquee-direction determines the initial direction in which the marquee content moves.
         */
        marqueeDirection?: any | KnockoutObservable<any>;
        /**
         * The 'marquee-style' property determines a marquee's scrolling behavior.
         */
        marqueeStyle?: any | KnockoutObservable<any>;
        /**
         * This property is shorthand for setting mask-image, mask-mode, mask-repeat, mask-position, mask-clip, mask-origin, mask-composite and mask-size. Omitted values are set to their original properties' initial values.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask
         */
        mask?: any | KnockoutObservable<any>;
        /**
         * This property is shorthand for setting mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, and mask-border-repeat. Omitted values are set to their original properties' initial values.
         */
        maskBorder?: any | KnockoutObservable<any>;
        /**
         * This property specifies how the images for the sides and the middle part of the mask image are scaled and tiled. The first keyword applies to the horizontal sides, the second one applies to the vertical ones. If the second keyword is absent, it is assumed to be the same as the first, similar to the CSS border-image-repeat property.
         */
        maskBorderRepeat?: any | KnockoutObservable<any>;
        /**
         * This property specifies inward offsets from the top, right, bottom, and left edges of the mask image, dividing it into nine regions: four corners, four edges, and a middle. The middle image part is discarded and treated as fully transparent black unless the fill keyword is present. The four values set the top, right, bottom and left offsets in that order, similar to the CSS border-image-slice property.
         */
        maskBorderSlice?: any | KnockoutObservable<any>;
        /**
         * Specifies an image to be used as a mask. An image that is empty, fails to download, is non-existent, or cannot be displayed is ignored and does not mask the element.
         */
        maskBorderSource?: any | KnockoutObservable<any>;
        /**
         * This property sets the width of the mask box image, similar to the CSS border-image-width property.
         */
        maskBorderWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Determines the mask painting area, which defines the area that is affected by the mask. The painted content of an element may be restricted to this area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip
         */
        maskClip?: any | KnockoutObservable<any>;
        /**
         * For elements rendered as a single box, specifies the mask positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes box-decoration-break operates on to determine the mask positioning area(s).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin
         */
        maskOrigin?: any | KnockoutObservable<any>;
        /**
         * This property must not be used. It is no longer included in any standard or standard track specification, nor is it implemented in any browser. It is only used when the text-align-last property is set to size. It controls allowed adjustments of font-size to fit line content.
         */
        maxFontSize?: any | KnockoutObservable<any>;
        /**
         * Sets the maximum height for an element. It prevents the height of the element to exceed the specified value. If min-height is specified and is greater than max-height, max-height is overridden.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
         */
        maxHeight?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Sets the maximum width for an element. It limits the width property to be larger than the value specified in max-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
         */
        maxWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Sets the minimum height for an element. It prevents the height of the element to be smaller than the specified value. The value of min-height overrides both max-height and height.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
         */
        minHeight?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Sets the minimum width of an element. It limits the width property to be not smaller than the value specified in min-width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
         */
        minWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The blend mode defines the formula that must be used to mix the colors with the backdrop
         * @see https://drafts.fxtf.org/compositing-1/#mix-blend-mode
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
         */
        mixBlendMode?: Types.CssValue<Types.CssBlendMode> | KnockoutObservable<Types.CssValue<Types.CssBlendMode>>;
        /**
         * Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
         */
        objectFit?: Types.CssObjectFit | KnockoutObservable<Types.CssObjectFit>;
        /**
         * Determines the alignment of the element inside its box.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
         */
        objectPosition?: string | Types.CssGlobalValues | KnockoutObservable<string | Types.CssGlobalValues>;
        /**
         * Specifies the transparency of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
         */
        opacity?: number | Types.CssGlobalValues | KnockoutObservable<number | Types.CssGlobalValues>;
        /**
         * Specifies the order used to lay out flex items in their flex container.
         * Elements are laid out in the ascending order of the order value.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/order
         */
        order?: number | KnockoutObservable<number>;
        /**
         * In paged media, this property defines the minimum number of lines in
         * a block container that must be left at the bottom of the page.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/orphans
         */
        orphans?: number | KnockoutObservable<number>;
        /**
         * The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
         * Outlines differ from borders in the following ways:  �       Outlines do not take up space, they are drawn above the content.
         *      �       Outlines may be non-rectangular. They are rectangular in Gecko/Firefox. Internet Explorer attempts to place the smallest contiguous outline around all elements or shapes that are indicated to have an outline. Opera draws a non-rectangular shape around a construct.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline
         */
        outline?: any | KnockoutObservable<any>;
        /**
         * The outline-color property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color
         */
        outlineColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * The outline-style property sets the style of the outline of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style
         */
        outlineStyle?: Types.OutlineStyle | KnockoutObservable<Types.OutlineStyle>;
        /**
         * The outline-offset property offsets the outline and draw it beyond the border edge.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset
         */
        outlineOffset?: any | KnockoutObservable<any>;
        /**
         * The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width
         */
        outlineWidth?: Types.CssGlobalValues | "thin" | "medium" | "thick" | Types.CssLength | KnockoutObservable<Types.CssGlobalValues | "thin" | "medium" | "thick" | Types.CssLength>;
        /**
         * The overflow property controls how extra content exceeding the bounding box of an element is rendered. It can be used in conjunction with an element that has a fixed width and height, to eliminate text-induced page distortion.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
         */
        overflow?: Types.CssValue<Types.CssOverflow> | KnockoutObservable<Types.CssValue<Types.CssOverflow>>;
        /**
         * Specifies the preferred scrolling methods for elements that overflow.
         */
        overflowStyle?: any | KnockoutObservable<any>;
        /**
          * The overflow-wrap CSS property specifies whether or not the browser should insert line breaks within words to prevent
          * text from overflowing its content box. In contrast to word-break, overflow-wrap will only create a break if an entire
          * word cannot be placed on its own line without overflowing.
          * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
          */
        overflowWrap?: Types.CssGlobalValues | "normal" | "break-word" | KnockoutObservable<Types.CssGlobalValues | "normal" | "break-word">;
        /**
         * Controls how extra content exceeding the x-axis of the bounding box of an element is rendered.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
         */
        overflowX?: Types.CssValue<Types.CssOverflow> | KnockoutObservable<Types.CssValue<Types.CssOverflow>>;
        /**
         * Controls how extra content exceeding the y-axis of the bounding box of an element is rendered.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
         */
        overflowY?: Types.CssValue<Types.CssOverflow> | KnockoutObservable<Types.CssValue<Types.CssOverflow>>;
        /**
         * The padding optional CSS property sets the required padding space on one to four sides of an element. The padding area is the space between an element and its border. Negative values are not allowed but decimal values are permitted. The element size is treated as fixed, and the content of the element shifts toward the center as padding is increased.
         * The padding property is a shorthand to avoid setting each side separately (padding-top, padding-right, padding-bottom, padding-left).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
         */
        padding?: any | KnockoutObservable<any>;
        /**
         * The padding-bottom CSS property of an element sets the padding space required on the bottom of an element. The padding area is the space between the content of the element and its border. Contrary to margin-bottom values, negative values of padding-bottom are invalid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
         */
        paddingBottom?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-left values, negative values of padding-left are invalid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
         */
        paddingLeft?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-right values, negative values of padding-right are invalid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
         */
        paddingRight?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
         */
        paddingTop?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The page-break-after property is supported in all major browsers. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
         */
        pageBreakAfter?: Types.PageBreakAfter | KnockoutObservable<Types.PageBreakAfter>;
        /**
         * The page-break-before property sets the page-breaking behavior before an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
         */
        pageBreakBefore?: Types.PageBreakBefore | KnockoutObservable<Types.PageBreakBefore>;
        /**
         * Sets the page-breaking behavior inside an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
         */
        pageBreakInside?: Types.CssGlobalValues | "auto" | "avoid" | KnockoutObservable<Types.CssGlobalValues | "auto" | "avoid">;
        /**
         * The pause property determines how long a speech media agent should pause before and after presenting an element. It is a shorthand for the pause-before and pause-after properties.
         */
        pause?: any | KnockoutObservable<any>;
        /**
         * The pause-after property determines how long a speech media agent should pause after presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
         */
        pauseAfter?: any | KnockoutObservable<any>;
        /**
         * The pause-before property determines how long a speech media agent should pause before presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
         */
        pauseBefore?: any | KnockoutObservable<any>;
        /**
         * The perspective property defines how far an element is placed from the view on the z-axis, from the screen to the viewer.
         * Perspective defines how an object is viewed. In graphic arts, perspective is the representation on a flat surface of what the viewer's eye would see in a 3D space. (See Wikipedia for more information about graphical perspective and for related illustrations.)
         * The illusion of perspective on a flat surface, such as a computer screen, is created by projecting points on the flat surface as they would appear if the flat surface were a window through which the viewer was looking at the object. In discussion of virtual environments, this flat surface is called a projection plane.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
         */
        perspective?: any | KnockoutObservable<any>;
        /**
         * The perspective-origin property establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
         * When used with perspective, perspective-origin changes the appearance of an object, as if a viewer were looking at it from a different origin. An object appears differently if a viewer is looking directly at it versus looking at it from below, above, or from the side. Thus, the perspective-origin is like a vanishing point.
         * The default value of perspective-origin is 50% 50%. This displays an object as if the viewer's eye were positioned directly at the center of the screen, both top-to-bottom and left-to-right. A value of 0% 0% changes the object as if the viewer was looking toward the top left angle. A value of 100% 100% changes the appearance as if viewed toward the bottom right angle.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
         */
        perspectiveOrigin?: any | KnockoutObservable<any>;
        /**
         * The pointer-events property allows you to control whether an element can be the target for the pointing device (e.g, mouse, pen) events.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/pointer-events
         */
        pointerEvents?: Types.PointerEvents | KnockoutObservable<Types.PointerEvents>;
        /**
         * The position property controls the type of positioning used by an element within its parent elements. The effect of the position property depends on a lot of factors, for example the position property of parent elements.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/position
         */
        position?: Types.PositionX | KnockoutObservable<Types.PositionX>;
        /**
         * Obsolete: unsupported.
         * This property determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its "ink" lines up with the first glyph in the line above and below.
         */
        punctuationTrim?: any | KnockoutObservable<any>;
        /**
         * Sets the type of quotation marks for embedded quotations.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/quotes
         */
        quotes?: any | KnockoutObservable<any>;
        /**
         * Controls whether the last region in a chain displays additional 'overset' content according its default overflow property, or if it displays a fragment of content as if it were flowing into a subsequent region.
         */
        regionFragment?: any | KnockoutObservable<any>;
        /**
         * The resize CSS property lets you control the resizability of an element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/resize
         */
        resize?: Types.CssGlobalValues | "none" | "both " | "horizontal" | "vertical" | KnockoutObservable<Types.CssGlobalValues | "none" | "both " | "horizontal" | "vertical">;
        /**
         * The rest-after property determines how long a speech media agent should pause after presenting an element's main content, before presenting that element's exit cue sound. It may be replaced by the shorthand property rest, which sets rest time before and after.
         */
        restAfter?: any | KnockoutObservable<any>;
        /**
         * The rest-before property determines how long a speech media agent should pause after presenting an intro cue sound for an element, before presenting that element's main content. It may be replaced by the shorthand property rest, which sets rest time before and after.
         */
        restBefore?: any | KnockoutObservable<any>;
        /**
         * Specifies the position an element in relation to the right side of the containing element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/right
         */
        right?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * Specifies the distribution of the different ruby elements over the base.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/ruby-align
         */
        rubyAlign?: Types.CssGlobalValues | "start" | "center" | "space-between" | "space-around" | KnockoutObservable<Types.CssGlobalValues | "start" | "center" | "space-between" | "space-around">;
        /**
         * Specifies the position of a ruby element relatives to its base element. It can be position over the element (over), under it (under), or between the characters, on their right side (inter-character).
         * @see https://developer.mozilla.org/en/docs/Web/CSS/ruby-position
         */
        rubyPosition?: Types.CssGlobalValues | "over" | "under" | "inter-character" | KnockoutObservable<Types.CssGlobalValues | "over" | "under" | "inter-character">;
        /**
         * SVG: For the <ellipse> element, this attribute defines the x-radius of the element. A value of zero disables rendering of the element.
         * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx
         */
        rx?: number | KnockoutObservable<number>;
        /**
         * SVG: For the <ellipse> element, this attribute defines the y-radius of the element. A value of zero disables rendering of the element.
         * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry
         */
        ry?: number | KnockoutObservable<number>;
        /**
         * Defines the alpha channel threshold used to extract a shape from an image. Can be thought of as a "minimum opacity" threshold; that is, a value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-image-threshold
         */
        shapeImageThreshold?: any | KnockoutObservable<any>;
        /**
         * A future level of CSS Shapes will define a shape-inside property, which will define a shape to wrap content within the element. See Editor's Draft <http://dev.w3.org/csswg/css-shapes/> and CSSWG wiki page on next-level plans <http://wiki.csswg.org/spec/css-shapes>
         */
        shapeInside?: any | KnockoutObservable<any>;
        /**
         * Adds a margin to a shape-outside. In effect, defines a new shape that is the smallest contour around all the points that are the shape-margin distance outward perpendicular to each point on the underlying shape. For points where a perpendicular direction is not defined (e.g., a triangle corner), takes all points on a circle centered at the point and with a radius of the shape-margin distance. This property accepts only non-negative values.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-margin
         */
        shapeMargin?: any | KnockoutObservable<any>;
        /**
         * s a shape around which text should be wrapped, with possible modifications from the shape-margin property. The shape defined by shape-outside and shape-margin changes the geometry of a float element's float area.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-outside
         */
        shapeOutside?: any | KnockoutObservable<any>;
        /**
         * The speak property determines whether or not a speech synthesizer will read aloud the contents of an element.
         */
        speak?: any | KnockoutObservable<any>;
        /**
         * The speak-as property determines how the speech synthesizer interprets the content: words as whole words or as a sequence of letters, numbers as a numerical value or a sequence of digits, punctuation as pauses in speech or named punctuation characters.
         */
        speakAs?: any | KnockoutObservable<any>;
        /**
         * Location of a font-face.  Used with the @font-face at rule
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
         */
        src?: Types.CssValueString | KnockoutObservable<Types.CssValueString>;
        /**
         * SVG: Defines the color of the outline on a given graphical element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke
         */
        stroke?: string | KnockoutObservable<string>;
        /**
         * SVG: Controls the pattern of dashes and gaps used to stroke paths.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-dasharray
         */
        strokeDasharray?: number[] | KnockoutObservableArray<number>;
        /**
         * SVG: Specifies the distance into the dash pattern to start the dash
         * @see https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dashoffset
         */
        strokeDashoffset?: Types.CssValue<Types.CssGlobalValues | Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssGlobalValues | Types.CssLength | Types.CssPercentage>>;
        /**
         * SVG: Specifies the shape to be used at the end of open subpaths when they are stroked.
         * @see https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-linecap
         */
        strokeLinecap?: Types.CssGlobalValues | "butt" | "round" | "square" | KnockoutObservable<Types.CssGlobalValues | "butt" | "round" | "square">;
        /**
         * SVG: Specifies the opacity of the outline on the current object.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-opacity
         */
        strokeOpacity?: number | KnockoutObservable<number>;
        /**
         * SVG: Specifies the width of the outline on the current object.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-width
         */
        strokeWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The tab-size CSS property is used to customise the width of a tab (U+0009) character.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/tab-size
         */
        tabSize?: any | KnockoutObservable<any>;
        /**
         * The 'table-layout' property controls the algorithm used to lay out the table cells, rows, and columns.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/table-layout
         */
        tableLayout?: any | KnockoutObservable<any>;
        /**
         * SVG: The text-anchor attribute is used to align (start-, middle- or end-alignment) a string of text relative to a given point.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
         */
        textAnchor?: "start" | "middle" | "end" | "inherit" | KnockoutObservable<"start" | "middle" | "end" | "inherit">;
        /**
         * The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-align
         */
        textAlign?: Types.TextAlign | KnockoutObservable<Types.TextAlign>;
        /**
         * The text-align-last CSS property describes how the last line of a block element or a line before line break is aligned in its parent block element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-align-last
         */
        textAlignLast?: Types.TextAlignLast | KnockoutObservable<Types.TextAlignLast>;
        /**
         * The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink.
         * underline and overline decorations are positioned under the text, line-through over it.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration
         */
        textDecoration?: any | KnockoutObservable<any>;
        /**
         * Sets the color of any text decoration, such as underlines, overlines, and strike throughs.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-color
         */
        textDecorationColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets what kind of line decorations are added to an element, such as underlines, overlines, etc.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line
         */
        textDecorationLine?: any | KnockoutObservable<any>;
        textDecorationLineThrough?: any | KnockoutObservable<any>;
        textDecorationNone?: any | KnockoutObservable<any>;
        textDecorationOverline?: any | KnockoutObservable<any>;
        /**
         * Specifies what parts of an element�s content are skipped over when applying any text decoration.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-skip
         */
        textDecorationSkip?: any | KnockoutObservable<any>;
        /**
         * This property specifies the style of the text decoration line drawn on the specified element. The intended meaning for the values are the same as those of the border-style-properties.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-style
         */
        textDecorationStyle?: Types.CssGlobalValues | "solid" | "double" | "dotted" | "dashed" | "wavy" | KnockoutObservable<Types.CssGlobalValues | "solid" | "double" | "dotted" | "dashed" | "wavy">;
        textDecorationUnderline?: any | KnockoutObservable<any>;
        /**
         * The text-emphasis property will apply special emphasis marks to the elements text. Slightly similar to the text-decoration property only that this property can have affect on the line-height. It also is noted that this is shorthand for text-emphasis-style and for text-emphasis-color.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis
         */
        textEmphasis?: any | KnockoutObservable<any>;
        /**
         * The text-emphasis-color property specifies the foreground color of the emphasis marks.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis-color
         */
        textEmphasisColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * The text-emphasis-style property applies special emphasis marks to an element's text.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis-style
         */
        textEmphasisStyle?: any | KnockoutObservable<any>;
        /**
         * This property helps determine an inline box's block-progression dimension, derived from the text-height and font-size properties for non-replaced elements, the height or the width for replaced elements, and the stacked block-progression dimension for inline-block elements. The block-progression dimension determines the position of the padding, border and margin for the element.
         */
        textHeight?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * Specifies the amount of space horizontally that should be left on the first line of the text of an element. This horizontal spacing is at the beginning of the first line and is in respect to the left edge of the containing block box.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-indent
         */
        textIndent?: any | KnockoutObservable<any>;
        textJustifyTrim?: any | KnockoutObservable<any>;
        textKashidaSpace?: any | KnockoutObservable<any>;
        /**
         * The text-line-through property is a shorthand property for text-line-through-style, text-line-through-color and text-line-through-mode. (Considered obsolete; use text-decoration instead.)
         */
        textLineThrough?: any | KnockoutObservable<any>;
        /**
         * Specifies the line colors for the line-through text decoration.
         * (Considered obsolete; use text-decoration-color instead.)
         */
        textLineThroughColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets the mode for the line-through text decoration, determining whether the text decoration affects the space characters or not.
         * (Considered obsolete; use text-decoration-skip instead.)
         */
        textLineThroughMode?: any | KnockoutObservable<any>;
        /**
         * Specifies the line style for line-through text decoration.
         * (Considered obsolete; use text-decoration-style instead.)
         */
        textLineThroughStyle?: any | KnockoutObservable<any>;
        /**
         * Specifies the line width for the line-through text decoration.
         */
        textLineThroughWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The text-overflow shorthand CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, display an ellipsis ('�', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string. It covers the two long-hand properties text-overflow-mode and text-overflow-ellipsis
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-overflow
         */
        textOverflow?: Types.CssGlobalValues | "clip" | "ellipsis" | string | KnockoutObservable<Types.CssGlobalValues | "clip" | "ellipsis" | string>;
        /**
         * The text-overline property is the shorthand for the text-overline-style, text-overline-width, text-overline-color, and text-overline-mode properties.
         */
        textOverline?: any | KnockoutObservable<any>;
        /**
         * Specifies the line color for the overline text decoration.
         */
        textOverlineColor?: Types.CssValue<Types.CssColor> | KnockoutObservable<Types.CssValue<Types.CssColor>>;
        /**
         * Sets the mode for the overline text decoration, determining whether the text decoration affects the space characters or not.
         */
        textOverlineMode?: any | KnockoutObservable<any>;
        /**
         * Specifies the line style for overline text decoration.
         */
        textOverlineStyle?: any | KnockoutObservable<any>;
        /**
         * Specifies the line width for the overline text decoration.
         */
        textOverlineWidth?: Types.CssValue<Types.CssLength | Types.CssPercentage> | KnockoutObservable<Types.CssValue<Types.CssLength | Types.CssPercentage>>;
        /**
         * The text-rendering CSS property provides information to the browser about how to optimize when rendering text. Options are: legibility, speed or geometric precision.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-rendering
         */
        textRendering?: Types.CssGlobalValues | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | KnockoutObservable<Types.CssGlobalValues | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision">;
        /**
         * Obsolete: unsupported.
         */
        textScript?: any | KnockoutObservable<any>;
        /**
         * The CSS text-shadow property applies one or more drop shadows to the text and <text-decorations> of an element. Each shadow is specified as an offset from the text, along with optional color and blur radius values.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-shadow
         */
        textShadow?: any | KnockoutObservable<any>;
        /**
         * This property transforms text for styling purposes. (It has no effect on the underlying content.)
         * @see https://developer.mozilla.org/en/docs/Web/CSS/text-transform
         */
        textTransform?: Types.TextTransform | KnockoutObservable<Types.TextTransform>;
        /**
         * Unsupported.
         * This property will add a underline position value to the element that has an underline defined.
         */
        textUnderlinePosition?: any | KnockoutObservable<any>;
        /**
         * After review this should be replaced by text-decoration should it not?
         * This property will set the underline style for text with a line value for underline, overline, and line-through.
         */
        textUnderlineStyle?: any | KnockoutObservable<any>;
        /**
         * This property specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the top edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
         * @see https://developer.mozilla.org/en/docs/Web/CSS/top
         */
        top?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/touch-action
         */
        touchAction?: Types.TouchAction | KnockoutObservable<Types.TouchAction>;
        /**
         * CSS transforms allow elements styled with CSS to be transformed in two-dimensional or three-dimensional space. Using this property, elements can be translated, rotated, scaled, and skewed. The value list may consist of 2D and/or 3D transform values.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transform
         */
        transform?: Types.CssTransformFunction | KnockoutObservable<Types.CssTransformFunction>;
        /**
         * This property defines the origin of the transformation axes relative to the element to which the transformation is applied.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transform-origin
         */
        transformOrigin?: any | KnockoutObservable<any>;
        /**
         * This property allows you to define the relative position of the origin of the transformation grid along the z-axis.
         */
        transformOriginZ?: any | KnockoutObservable<any>;
        /**
         * This property specifies how nested elements are rendered in 3D space relative to their parent.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transform-style
         */
        transformStyle?: Types.CssGlobalValues | "flat" | "preserve-3d" | KnockoutObservable<Types.CssGlobalValues | "flat" | "preserve-3d">;
        /**
         * The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transition
         */
        transition?: any | KnockoutObservable<any>;
        /**
         * Defines when the transition will start. A value of �0s� means the transition will execute as soon as the property is changed. Otherwise, the value specifies an offset from the moment the property is changed, and the transition will delay execution by that offset.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-delay
         */
        transitionDelay?: any | KnockoutObservable<any>;
        /**
         * The 'transition-duration' property specifies the length of time a transition animation takes to complete.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-duration
         */
        transitionDuration?: any | KnockoutObservable<any>;
        /**
         * The 'transition-property' property specifies the name of the CSS property to which the transition is applied.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-property
         */
        transitionProperty?: Types.CssValueString | KnockoutObservable<Types.CssValueString>;
        /**
         * Sets the pace of action within a transition
         * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function
         */
        transitionTimingFunction?: Types.CssTimingFunction | KnockoutObservable<Types.CssTimingFunction>;
        /**
         * The unicode-bidi CSS property specifies the level of embedding with respect to the bidirectional algorithm.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/unicode-bidi
         */
        unicodeBidi?: any | KnockoutObservable<any>;
        /**
         * unicode-range allows you to set a specific range of characters to be downloaded from a font (embedded using @font-face) and made available for use on the current page.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/unicode-range
         */
        unicodeRange?: any | KnockoutObservable<any>;
        /**
         * This is for all the high level UX stuff.
         */
        userFocus?: any | KnockoutObservable<any>;
        /**
         * For inputing user content
         */
        userInput?: any | KnockoutObservable<any>;
        /**
         * User select
         * @see https://developer.mozilla.org/en/docs/Web/CSS/user-select
         */
        userSelect?: "auto" | "text" | "none" | "contain" | "all" | KnockoutObservable<"auto" | "text" | "none" | "contain" | "all">;
        /**
         * The vertical-align property controls how inline elements or text are vertically aligned compared to the baseline. If this property is used on table-cells it controls the vertical alignment of content of the table cell.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/vertical-align
         */
        verticalAlign?: Types.VerticalAlign | KnockoutObservable<Types.VerticalAlign>;
        /**
         * The visibility property specifies whether the boxes generated by an element are rendered.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/visibility
         */
        visibility?: Types.CssGlobalValues | "visible" | "hidden" | "collapse" | KnockoutObservable<Types.CssGlobalValues | "visible" | "hidden" | "collapse">;
        /**
         * The voice-balance property sets the apparent position (in stereo sound) of the synthesized voice for spoken media.
         */
        voiceBalance?: any | KnockoutObservable<any>;
        /**
         * The voice-duration property allows the author to explicitly set the amount of time it should take a speech synthesizer to read an element's content, for example to allow the speech to be synchronized with other media. With a value of auto (the default) the length of time it takes to read the content is determined by the content itself and the voice-rate property.
         */
        voiceDuration?: any | KnockoutObservable<any>;
        /**
         * The voice-family property sets the speaker's voice used by a speech media agent to read an element. The speaker may be specified as a named character (to match a voice option in the speech reading software) or as a generic description of the age and gender of the voice. Similar to the font-family property for visual media, a comma-separated list of fallback options may be given in case the speech reader does not recognize the character name or cannot synthesize the requested combination of generic properties.
         */
        voiceFamily?: any | KnockoutObservable<any>;
        /**
         * The voice-pitch property sets pitch or tone (high or low) for the synthesized speech when reading an element; the pitch may be specified absolutely or relative to the normal pitch for the voice-family used to read the text.
         */
        voicePitch?: any | KnockoutObservable<any>;
        /**
         * The voice-range property determines how much variation in pitch or tone will be created by the speech synthesize when reading an element. Emphasized text, grammatical structures and punctuation may all be rendered as changes in pitch, this property determines how strong or obvious those changes are; large ranges are associated with enthusiastic or emotional speech, while small ranges are associated with flat or mechanical speech.
         */
        voiceRange?: any | KnockoutObservable<any>;
        /**
         * The voice-rate property sets the speed at which the voice synthesized by a speech media agent will read content.
         */
        voiceRate?: any | KnockoutObservable<any>;
        /**
         * The voice-stress property sets the level of vocal emphasis to be used for synthesized speech reading the element.
         */
        voiceStress?: any | KnockoutObservable<any>;
        /**
         * The voice-volume property sets the volume for spoken content in speech media. It replaces the deprecated volume property.
         */
        voiceVolume?: any | KnockoutObservable<any>;
        /**
         * The white-space property controls whether and how white space inside the element is collapsed, and whether lines may wrap at unforced "soft wrap" opportunities.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/white-space
         */
        whiteSpace?: Types.CssGlobalValues | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | KnockoutObservable<Types.CssGlobalValues | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap">;
        /**
         * Obsolete: unsupported.
         */
        whiteSpaceTreatment?: any | KnockoutObservable<any>;
        /**
         * In paged media, this property defines the mimimum number of lines
         * that must be left at the top of the second page.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/widows
         */
        widows?: number | KnockoutObservable<number>;
        /**
         * Specifies the width of the content area of an element. The content area of the element width does not include the padding, border, and margin of the element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/width
         */
        width?: Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues> | KnockoutObservable<Types.CssValue<"auto" | Types.CssLength | Types.CssPercentage | Types.CssGlobalValues>>;
        /**
         * The �will-change� CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
         */
        willChange?: Types.CssValue<"auto" | "scroll-position" | "contents" | Types.CssValueString> | KnockoutObservable<Types.CssValue<"auto" | "scroll-position" | "contents" | Types.CssValueString>>;
        /**
         * The word-break property is often used when there is long generated content that is strung together without and spaces or hyphens to beak apart. A common case of this is when there is a long URL that does not have any hyphens. This case could potentially cause the breaking of the layout as it could extend past the parent element.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/word-break
         */
        wordBreak?: Types.CssGlobalValues | "normal" | "break-all" | "keep-all" | KnockoutObservable<Types.CssGlobalValues | "normal" | "break-all" | "keep-all">;
        /**
         * The word-spacing CSS property specifies the spacing behavior between "words".
         * @see https://developer.mozilla.org/en/docs/Web/CSS/word-spacing
         */
        wordSpacing?: Types.CssGlobalValues | "normal" | Types.CssLength | Types.CssPercentage | KnockoutObservable<Types.CssGlobalValues | "normal" | Types.CssLength | Types.CssPercentage>;
        /**
         * An alias of css/properties/overflow-wrap, word-wrap defines whether to break words when the content exceeds the boundaries of its container.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/word-wrap
         */
        wordWrap?: Types.CssGlobalValues | "normal" | "break-word" | KnockoutObservable<Types.CssGlobalValues | "normal" | "break-word">;
        /**
         * Specifies how exclusions affect inline content within block-level elements. Elements lay out their inline content in their content area but wrap around exclusion areas.
         */
        wrapFlow?: any | KnockoutObservable<any>;
        /**
         * Set the value that is used to offset the inner wrap shape from other shapes. Inline content that intersects a shape with this property will be pushed by this shape's margin.
         */
        wrapMargin?: any | KnockoutObservable<any>;
        /**
         * Obsolete and unsupported. Do not use.
         * This CSS property controls the text when it reaches the end of the block in which it is enclosed.
         */
        wrapOption?: any | KnockoutObservable<any>;
        /**
         * writing-mode specifies if lines of text are laid out horizontally or vertically, and the direction which lines of text and blocks progress.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/writing-mode
         */
        writingMode?: Types.WritingMode | KnockoutObservable<Types.WritingMode>;
        /**
         * The z-index property specifies the z-order of an element and its descendants.
         * When elements overlap, z-order determines which one covers the other.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/z-index
         */
        zIndex?: Types.CssGlobalValues | "auto" | number | KnockoutObservable<Types.CssGlobalValues | "auto" | number>;
        /**
         * Sets the initial zoom factor of a document defined by @viewport.
         * @see https://developer.mozilla.org/en/docs/Web/CSS/zoom
         */
        zoom?: "auto" | number | KnockoutObservable<"auto" | number>;
    }

    namespace Types {
        type CssProperties = "alignContent" | "alignItems" | "alignSelf" | "alignmentAdjust" | "alignmentBaseline" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" |
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
        type CssValue<T> = T | T[];
        /**
         * For general purpose CSS values
         **/
        type CssValueGeneral = CssValue<number | string>;
        /**
         * When you are sure that the value must be a string
         **/
        type CssValueString = CssValue<string>;
        /**
         * CSS properties that cascade also support these
         * @see https://drafts.csswg.org/css-cascade/#defaulting-keywords
         */
        type CssGlobalValues = "initial" | "inherit" | "unset" | "revert";
        interface IFontFace {
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
        type CssAbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
        /**
         * an angle; 0' | '0deg' | '0grad' | '0rad' | '0turn' | 'etc.
         * @see https://drafts.csswg.org/css-values-3/#angles
         */
        type CssAngle = CssGlobalValues | string | 0;
        /**
         * initial state of an animation.
         * @see https://drafts.csswg.org/css-animations/#animation-play-state
         */
        type CssAnimationPlayState = CssGlobalValues | string | "paused" | "running";
        /**
         * blend mode
         * @see https://drafts.fxtf.org/compositing-1/#ltblendmodegt
         */
        type CssBlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
        /**
         * border shorthand for style color and width
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
         */
        type CssBorderShorthand = CssGlobalValues | CssColor | CssLength | CssLineStyleSet | string;
        /**
         * Determines the area within which the background is painted.
         * @see https://drafts.csswg.org/css-backgrounds/#box
         */
        type CssBox = CssGlobalValues | string | "border-box" | "padding-box" | "content-box";
        /**
         * Color can be a named color, transparent, or a color function
         * @see https://drafts.csswg.org/css-color-3/#valuea-def-color
         */
        type CssColor = CssNamedColor | CssGlobalValues | "currentColor" | string;
        type CssNamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "purple" | "rebeccapurple" | "red" | "silver" | "teal" | "transparent" | "white" | "yellow";
        /**
         * Special type for border-color which can use 1 or 4 colors
         * @see https://drafts.csswg.org/css-backgrounds-3/#border-color
         */
        type CssColorSet = string | CssColor;
        /**
          * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
          * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
          */
        type CssDisplay = "block" | "inline" | "run-in" | "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby" | "subgrid" | "block flow" | "inline table" | "flex run-in" | "list-item" | "list-item block" | "list-item inline" | "list-item flow" | "list-item flow-root" | "list-item block flow" | "list-item block flow-root" | "flow list-item block" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption" | "ruby-base" | "ruby-text" | "ruby-base-container" | "ruby-text-container" | "contents" | "none" | "inline-block" | "inline-list-item" | "inline-table" | "inline-flex" | "inline-grid";
        /**
          * CSS Type <baseline-position> of Box Alignment
          * @see https://www.w3.org/TR/css-align-3/#typedef-baseline-position
          */
        type CssBoxAlignmentBaselinePosition = "baseline" | "first baseline" | "last baseline";
        /**
          * CSS Type <content-distribution> of Box Alignment
          * @see https://www.w3.org/TR/css-align-3/#typedef-content-distribution
          */
        type CssBoxAlignmentContentDistribution = "space-between" | "space-around" | "space-evenly" | "stretch";
        type CssBoxAlignmentContentPositionWithOverflow = "center" | "start" | "end" | "flex-start" | "flex-end" | "unsafe center" | "unsafe start" | "unsafe end" | "unsafe flex-start" | "unsafe flex-end" | "safe center" | "safe start" | "safe end" | "safe flex-start" | "safe flex-end";
        type CssBoxAlignmentSelfPositionWithOverflow = "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "unsafe center" | "unsafe start" | "unsafe end" | "unsafe self-start" | "unsafe self-end" | "unsafe flex-start" | "unsafe flex-end" | "safe center" | "safe start" | "safe end" | "safe self-start" | "safe self-end" | "safe flex-start" | "safe flex-end";
        type CssBoxAlignmentLeftRightWithOverflow = "left" | "right" | "unsafe left" | "unsafe right" | "safe left" | "safe right";
        /**
          * Type for justify-content in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-justify-content
          */
        type JustifyContent = "normal" | CssBoxAlignmentContentDistribution | CssBoxAlignmentContentPositionWithOverflow | "left" | "right";
        /**
          * Type for align-content in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-align-content
          */
        type AlignContent = "normal" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentContentDistribution | CssBoxAlignmentContentPositionWithOverflow;
        /**
          * Type for justify-items in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-justify-items
          */
        type JustifyItems = "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow | "left" | "right" | "center" | "legacy left" | "legacy right" | "legacy center";
        /**
          * Type for align-items in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-align-items
          */
        type AlignItems = "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow;
        /**
          * Type for justify-self in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-justify-self
          */
        type JustifySelf = "auto" | "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow | CssBoxAlignmentLeftRightWithOverflow;
        /**
          * Type for align-self in flex or grid
          * @see https://www.w3.org/TR/css-align-3/#propdef-align-self
          */
        type AlignSelf = "auto" | "normal" | "stretch" | CssBoxAlignmentBaselinePosition | CssBoxAlignmentSelfPositionWithOverflow;
        /**
         * a gradient function like linear-gradient
         * @see https://drafts.csswg.org/css-images-3/#gradients
         */
        type CssGradient = CssGlobalValues | string;
        /**
         * complex type that describes the size of fonts
         * @see https://drafts.csswg.org/css-fonts-3/#propdef-font-size
         */
        type CssFontSize = CssGlobalValues | CssLength | CssPercentage | CssAbsoluteSize | CssRelativeSize;
        /**
         * a value that serves as an image
         * @see https://drafts.csswg.org/css-images-3/#typedef-image
         */
        type CssImage = CssGlobalValues | string | CssGradient | CssUrl;
        /**
         * an length; 0 | '0px' | '0em' etc.
         * @see https://drafts.csswg.org/css-values-3/#lengths
         */
        type CssLength = CssGlobalValues | string | number;
        /**
         * Style of a line (e.g. border-style)
         * @see https://drafts.csswg.org/css-backgrounds-3/#line-style
         */
        type CssLineStyle = string | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
        /**
         * Special type for border-style which can use 1 or 4 line-style
         * @see https://drafts.csswg.org/css-backgrounds-3/#border-style
         */
        type CssLineStyleSet = string | CssLineStyle;
        /**
         * Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
         */
        type CssObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down" | CssGlobalValues;
        /**
         * Overflow modes
         * @see https://drafts.csswg.org/css-overflow-3/#propdef-overflow
         */
        type CssOverflow = "visible" | "hidden" | "scroll" | "clip" | "auto";
        /**
         * a percentage; 0 | '0%' etc.
         * @see https://drafts.csswg.org/css-values-3/#percentage
         */
        type CssPercentage = CssGlobalValues | string | 0;
        /**
         * Defines a position (e.g. background-position)
         * @see https://drafts.csswg.org/css-backgrounds-3/#position
         */
        type CssPosition = CssAngle | string;
        /**
         * Relative size keywords
         * @see https://drafts.csswg.org/css-fonts-3/#relative-size-value
         */
        type CssRelativeSize = "larger" | "smaller";
        /**
         * Specifies how background images are tiled after they have been sized and positioned
         * @see https://drafts.csswg.org/css-backgrounds/#repeat-style
         */
        type CssRepeatStyle = "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | "repeat repeat" | "repeat space" | "repeat round" | "repeat no-repeat" | "space repeat" | "space space" | "space round" | "space no-repeat" | "round repeat" | "round space" | "round round" | "round no-repeat" | "no-repeat repeat" | "no-repeat space" | "no-repeat round" | "no-repeat no-repeat";
        /**
         * Tranform list for the element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
         */
        type CssTransformFunction = string | "none";
        /**
         * Starting position for many gradients
         * @see https://drafts.csswg.org/css-images-3/#typedef-side-or-corner
         */
        type CssSideOrCorner = CssAngle | "left" | "right" | "top" | "bottom" | "to left" | "to right" | "to top" | "to bottom" | "left top" | "right top" | "left bottom" | "right bottom" | "top left" | "top right" | "bottom left" | "bottom right" | "to left top" | "to right top" | "to left bottom" | "to right bottom" | "to top left" | "to top right" | "to bottom left" | "to bottom right";
        type CssRadialGradientEndingShape = "circle" | "ellipse";
        /**
         * Radial Gradient Size.
         * @see https://drafts.csswg.org/css-images-3/#ending-shape
         */
        type CssRadialGradientSize = CssLength | Array<CssLength> | "closest-side" | "farthest-side" | "closest-corner" | "closest-side";
        /** Supporting by `-timing-function` properties */
        type CssTimingFunction = string | CssGlobalValues | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end";
        /**
         * Expressed as url('protocol://')
         * @see https://drafts.csswg.org/css-values-3/#urls
         */
        type CssUrl = string;
        /**
         * Font weights
         */
        type CssFontWeight = "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number | CssGlobalValues;
        type AlignmentBaseline = "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
        type AnimationDirection = "normal" | "alternate" | "reverse" | "alternate-reverse";
        type AnimationFillMode = "none" | "forwards" | "backwards" | "both";
        type BackgroundAttachment = "scroll" | "fixed" | "local";
        type BackgroundSize = "auto" | "cover" | "contain";
        type BreakAfter = "auto" | "avoid" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
        type BreakBefore = "auto" | "avoid" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";
        type BreakInside = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
        type CaptionSide = CssGlobalValues | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
        type Cursor = CssValue<CssGlobalValues | string | "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out" | "grab" | "grabbing">;
        type DominantBaseline = "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | "inherit";
        type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
        type FlexWrap = CssGlobalValues | "nowrap" | "wrap" | "wrap-reverse";
        type FontStretch = CssGlobalValues | "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";
        type OutlineStyle = CssGlobalValues | "auto" | "none" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
        type PageBreakAfter = CssGlobalValues | "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";
        type PageBreakBefore = CssGlobalValues | "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";
        type PointerEvents = CssGlobalValues | "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all";
        type PositionX = CssValue<CssGlobalValues | "static" | "relative" | "absolute" | "sticky" | "-webkit-sticky" | "fixed">;
        type TextAlign = CssGlobalValues | "start" | "end" | "left" | "right" | "center" | "justify" | "justify-all" | "match-parent";
        type TextAlignLast = CssGlobalValues | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
        type TextTransform = CssGlobalValues | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";
        type TouchAction = CssGlobalValues | "auto" | "none" | "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "manipulation";
        type VerticalAlign = CssGlobalValues | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | CssLength | CssPercentage;
        type WritingMode = CssGlobalValues | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
        type CssStyleName = "alignContent" | "alignItems";
        /**
         * This interface documents key CSS properties for autocomplete
         */

    }
}

//declare enum PositionEnum {
//    Above = 1,
//    Right = 2,
//    Below = 3,
//    Left = 4
//}