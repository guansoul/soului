import Vue from 'vue';
import sPicker from '../picker';
import sDatePanel from '../panel/date-range';

export default {
    mixins: [sPicker],
    name: 'sDaterange',
    props: {
        type: {
            type: String,
            default: 'date'
        },
        dateType: {
            type: String,
            default: 'range'
        },
    },
    created() {
        this.Panel = new Vue(sDatePanel);
    }
};
