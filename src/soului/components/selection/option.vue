<template>
    <li :class="selectStatus" @click.stop="selectOption" @mouseout.stop="hoverEvent" v-show="visible"><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'optionItem',
        componentName: 'option-item',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                index: 0,
                searchLabel: '',
                autoComplete: false,
                visible: true,
                selected: false,
                ishover: false,
                labelText: "",
            };
        },
        computed: {
          parent() {
                let result = this.$parent;
                while (!result.isSelect) {
                    result = result.$parent;
                }
                return result;
            },
            selectStatus() {
                if (!this.parent.multiple) {
                    this.selected = this.isEqual(this.value, this.parent.value);
                } else {
                    this.selected = this.contains(this.parent.value, this.value);
                }
                return (this.selected ? "item-selected" : "") + " " + (this.ishover ? "item-hover" : "");
            },
            showLabel() {
                return this.label ? this.label : this.value;
            }
        },
        methods: {
            selectOption () {
                if (this.disabled) {
                    return false;
                }
                this.dispatch('selection', 'on-selected', this);
            },
            isEqual(a, b) {
                if (!this.isObject) {
                    return a === b;
                } else {
                    const valueKey = this.parent.valueKey;
                    return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
                }
            },
            contains(arr = [], target) {
                if (!this.isObject) {
                    return arr.indexOf(target) > -1;
                } else {
                    const valueKey = this.parent.valueKey;
                    return arr.some(item => {
                        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
                    });
                }
            },
            hoverEvent() {
                this.ishover = false;
            },
            queryFilter (val) {
                const parsedFilter = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.visible = new RegExp(parsedFilter, 'i').test(this.labelText);
            }
        },
        mounted () {
            this.labelText = this.$el.textContent;
            this.$on('on-query-filter', (val) => {
                this.queryFilter(val);
            });
        }
    };
</script>
