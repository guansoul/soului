<template>
    <div class="select-dropdown" :class="className"><slot></slot></div>
</template>
<script>

    export default {
        name: 'sDropdown',
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            },
            className: {
                type: String
            }
        }
    };
</script>
