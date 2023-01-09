<template>
    <el-container class="layout-double">
        <el-aside :width="leftWidth">
            <slot name="left"></slot>
        </el-aside>
        <el-main class="layout-double-right">
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
export default {
    props: {
        leftWidth: {
            type: String,
            default: '50%',
            validator: val => /^(?:0|[1-9]\d*)(?:(?:\.(?:0*[1-9]+)+)?rem|px|%)$/i.test(val)
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../asset/less/variables.less);

.layout-double {
    &-right {
        padding: 0;
    }
}
</style>