<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findSingleComponentsDownward } from '../../utils/util';

    const prefix = 'soul-row';
    export default {
        name: 'sRow',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['flex']);
                }
            },
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator (value) {
                    return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
                }
            },
            gutter: {
                type: [Number, String],
                default: 0
            }
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefix}`]: !this.type,
                        [`${prefix}-${this.type}`]: !!this.type,
                        [`${prefix}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefix}-${this.type}-${this.justify}`]: !!this.justify
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            updateGutter (val) {
                const cols = findSingleComponentsDownward(this, 'sCol');
                if (cols.length) {
                    cols.forEach((child) => {
                        if (val !== 0) {
                            child.gutter = val;
                        }
                    });
                }
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>
