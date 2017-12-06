import Vue from 'vue';
import sPicker from '../picker';
import sDatePanel from '../panel/date';

export default {
    mixins: [sPicker],
    name: 'sDatepicker',
    props: {
        type: {
            type: String,
            default: 'date'
        },
        dateType: {
            type: String,
            default: 'date'
        },
    },
    created() {
        this.Panel = new Vue(sDatePanel);
    }
};
