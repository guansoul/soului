<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { findComponentUpward } from '../../utils/util';
    const prefix = 'soul-col';

    export default {
        name: 'sCol',
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            xs: [Number, String, Object],
            sm: [Number, String, Object],
            md: [Number, String, Object],
            lg: [Number, String, Object],
            flex: [Number, String]
        },
        data () {
            return {
                gutter: 0
            };
        },
        computed: {
            classes () {
                let classList = [{
                        [`${prefix}-${this.span}`]: this.span,
                        [`${prefix}-order-${this.order}`]: this.order,
                        [`${prefix}-offset-${this.offset}`]: this.offset
                }];

                ['xs', 'sm', 'md', 'lg'].forEach(size => {
                    if (typeof this[size] !== 'object' && this[size]) {
                        classList.push(`${prefix}-${size}-${this[size]}`);
                    } else if (typeof this[size] === 'object') {
                        let props = this[size];
                        Object.keys(props).forEach(prop => {
                            classList.push(
                                prop !== 'span'
                                    ? `${prefix}-${size}-${prop}-${props[prop]}`
                                    : `${prefix}-${size}-${props[prop]}`
                            );
                        });
                    }
                });
                return classList;
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    };
                }
                if(this.flex) {
                    var flexStyle = {
                        "-moz-flex": this.flex,
                        "-webkit-flex": this.flex,
                        "-ms-flex": this.flex,
                        "flex": this.flex
                    };
                   style = Object.assign(style, flexStyle);
                }
                return style;
            }
        },
        methods: {
            updateGutter () {
                const Row = findComponentUpward(this, 'sRow');
                if (Row) {
                    Row.updateGutter(Row.gutter);
                }
            }
        },
        mounted () {
            this.updateGutter();
        },
        beforeDestroy () {
            this.updateGutter();
        }
    };
</script>
